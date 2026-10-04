import {
  FiArrowUpRight,
  FiCalendar,
  FiMapPin,
  FiExternalLink,
} from "react-icons/fi";

export default function OrganizationHero({ organization }) {
  return (
    <section className="border-b border-border">
      <div className="sc-container py-16">

        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">

          {/* LEFT */}
          <div className="max-w-3xl">

            <div className="flex items-center gap-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-black text-xl font-semibold text-white">
                {organization.shortName?.slice(0, 2).toUpperCase()}
              </div>

              <div>
                <p className="text-sm text-text-muted">
                  {organization.category}
                </p>

                <h1 className="mt-1 text-4xl font-semibold tracking-tight sm:text-5xl">
                  {organization.name}
                </h1>
              </div>
            </div>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-text-secondary">
              {organization.longDescription}
            </p>

            {/* META */}
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-text-muted">

              <div className="flex items-center gap-2">
                <FiMapPin />
                {organization.headquarters.city},{" "}
                {organization.headquarters.country}
              </div>

              <div className="flex items-center gap-2">
                <FiCalendar />
                Founded {organization.founded}
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-wrap gap-3">

            <a
              href={organization.website}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-button bg-black px-5 py-3 text-sm font-medium text-white"
            >
              Official website
              <FiArrowUpRight />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}