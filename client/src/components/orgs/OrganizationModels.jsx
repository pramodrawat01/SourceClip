import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function OrganizationModels({
  organization,
  models,
}) {
  return (
    <section className="border-t border-border">
      <div className="sc-container py-16">

        <div className="flex items-end justify-between">
          <div>
            <p className="sc-label text-accent">
              MODELS
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              Model ecosystem
            </h2>

            <p className="mt-3 text-text-secondary">
              Models developed and released by {organization.name}.
            </p>
          </div>

          <Link
            to={`/organizations/${organization.id}/models`}
            className="hidden items-center gap-2 text-sm sm:flex"
          >
            View all
            <FiArrowUpRight />
          </Link>
        </div>

        <div className="mt-10 grid border-l border-t border-border md:grid-cols-2">
          {models.map((model) => (
            <Link
              key={model.id}
              to={`/organizations/${organization.id}/models/${model.id}`}
              className="group border-b border-r border-border p-7"
            >
              <div className="flex items-start justify-between">

                <div>
                  <p className="text-xs uppercase tracking-wider text-text-muted">
                    {model.type}
                  </p>

                  <h3 className="mt-3 text-xl font-medium">
                    {model.name}
                  </h3>
                </div>

                <FiArrowUpRight
                  className="text-text-muted transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>

              <p className="mt-5 text-sm leading-6 text-text-secondary">
                {model.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {model.tags?.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-surface px-3 py-1 text-xs text-text-muted"
                  >
                    {tag}
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