import { FiArrowUpRight, FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";

function formatDate(date) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export default function RecentlyUpdatedOrganizations({
  organizations = [],
}) {
  const recent = [...organizations]
    .filter((organization) => organization.updatedAt)
    .sort(
      (a, b) =>
        new Date(b.updatedAt) -
        new Date(a.updatedAt)
    )
    .slice(0, 4);

  if (!recent.length) return null;

  return (
    <section className="border-t border-border">
      <div className="sc-container py-16">

        <div>
          <p className="sc-label text-accent">
            RECENTLY UPDATED
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Fresh AI intelligence.
          </h2>

          <p className="mt-3 text-text-secondary">
            Organizations with recently updated information on SourceClip.
          </p>
        </div>

        <div className="mt-10 border-t border-border">

          {recent.map((organization) => (
            <Link
              key={organization.id}
              to={`/organizations/${organization.id}`}
              className="
                group
                grid
                gap-4
                border-b
                border-border
                py-6
                md:grid-cols-[1fr_180px_24px]
              "
            >

              <div>
                <h3 className="font-medium">
                  {organization.name}
                </h3>

                <p className="mt-2 text-sm text-text-secondary">
                  {organization.description}
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm text-text-muted">
                <FiClock size={14} />
                {formatDate(organization.updatedAt)}
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

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}