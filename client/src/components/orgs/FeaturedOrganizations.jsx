import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function FeaturedOrganizations({
  organizations = [],
}) {
  const featured = organizations.filter(
    (organization) => organization.featured
  );

  if (!featured.length) return null;

  return (
    <section className="border-t border-border">
      <div className="sc-container py-16">

        <div className="flex items-end justify-between">
          <div>
            <p className="sc-label text-accent">
              FEATURED
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Organizations shaping AI.
            </h2>
          </div>
        </div>

        <div className="mt-10 grid border-l border-t border-border md:grid-cols-2">
          {featured.map((organization) => (
            <Link
              key={organization.id}
              to={`/organizations/${organization.id}`}
              className="
                group
                border-b
                border-r
                border-border
                p-8
                transition
                hover:bg-surface
              "
            >
              <div className="flex items-start justify-between">

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-xl
                    bg-black
                    text-sm
                    font-semibold
                    text-white
                  "
                >
                  {organization.shortName
                    ?.slice(0, 2)
                    .toUpperCase()}
                </div>

                <FiArrowUpRight
                  size={20}
                  className="
                    text-text-muted
                    transition-transform
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </div>

              <h3 className="mt-10 text-2xl font-medium">
                {organization.name}
              </h3>

              <p className="mt-2 text-sm text-text-muted">
                {organization.type}
              </p>

              <p className="mt-5 max-w-xl text-sm leading-7 text-text-secondary">
                {organization.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {organization.focusAreas
                  ?.slice(0, 4)
                  .map((focus) => (
                    <span
                      key={focus}
                      className="
                        rounded-full
                        border
                        border-border
                        px-3
                        py-1.5
                        text-xs
                        text-text-muted
                      "
                    >
                      {focus}
                    </span>
                  ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}