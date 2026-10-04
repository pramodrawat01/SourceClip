import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function OrganizationFocusExplorer({
  organizations = [],
}) {
  const focusMap = {};

  organizations.forEach((organization) => {
    organization.focusAreas?.forEach((focus) => {
      if (!focusMap[focus]) {
        focusMap[focus] = [];
      }

      focusMap[focus].push(organization);
    });
  });

  const focusAreas = Object.entries(focusMap)
    .sort((a, b) => b[1].length - a[1].length)
    .slice(0, 8);

  return (
    <section className="border-t border-border">
      <div className="sc-container py-16">

        <div className="max-w-2xl">
          <p className="sc-label text-accent">
            EXPLORE THE ECOSYSTEM
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Explore AI by focus area.
          </h2>

          <p className="mt-4 text-text-secondary">
            Discover organizations based on the technologies,
            research areas, and AI capabilities they work on.
          </p>
        </div>

        <div className="mt-10 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map(([focus, organizations]) => (
            <Link
              key={focus}
              to={`/organizations?focus=${encodeURIComponent(focus)}`}
              className="
                group
                border-b
                border-r
                border-border
                p-6
                transition
                hover:bg-surface
              "
            >
              <div className="flex items-start justify-between">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-lg
                    bg-black
                    text-xs
                    font-medium
                    text-white
                  "
                >
                  AI
                </div>

                <FiArrowUpRight
                  size={17}
                  className="
                    text-text-muted
                    transition-transform
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </div>

              <h3 className="mt-8 text-base font-medium">
                {focus}
              </h3>

              <p className="mt-2 text-sm text-text-muted">
                {organizations.length}{" "}
                {organizations.length === 1
                  ? "organization"
                  : "organizations"}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}