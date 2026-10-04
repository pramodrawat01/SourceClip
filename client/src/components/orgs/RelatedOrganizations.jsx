import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function RelatedOrganizations({
  organization,
  organizations = [],
  relations = [],
}) {
  if (!organization) return null;

  const relatedIds = relations
    .filter(
      (relation) =>
        relation.fromOrganizationId === organization.id ||
        relation.toOrganizationId === organization.id
    )
    .map((relation) =>
      relation.fromOrganizationId === organization.id
        ? relation.toOrganizationId
        : relation.fromOrganizationId
    );

  const relatedOrganizations = organizations.filter(
    (org) =>
      org.id !== organization.id &&
      relatedIds.includes(org.id)
  );

  if (relatedOrganizations.length === 0) {
    return null;
  }

  return (
    <section className="border-t border-border">
      <div className="sc-container py-16">

        {/* HEADER */}
        <div>
          <p className="sc-label text-accent">
            ECOSYSTEM
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Related organizations
          </h2>

          <p className="mt-3 max-w-2xl text-text-secondary">
            Organizations operating in related areas of the AI
            ecosystem.
          </p>
        </div>

        {/* ORGANIZATIONS */}
        <div className="mt-10 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {relatedOrganizations.map((org) => (
            <Link
              key={org.id}
              to={`/organizations/${org.id}`}
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
              {/* TOP */}
              <div className="flex items-start justify-between">

                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-black
                    text-sm
                    font-medium
                    text-white
                  "
                >
                  {org.shortName
                    ?.slice(0, 2)
                    .toUpperCase()}
                </div>

                <FiArrowUpRight
                  size={18}
                  className="
                    text-text-muted
                    transition-transform
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </div>

              {/* CONTENT */}
              <h3 className="mt-8 text-lg font-medium">
                {org.name}
              </h3>

              <p className="mt-2 text-xs text-text-muted">
                {org.category}
              </p>

              <p className="mt-4 text-sm leading-6 text-text-secondary">
                {org.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}