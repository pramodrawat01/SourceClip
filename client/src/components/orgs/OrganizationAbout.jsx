export default function OrganizationAbout({ organization }) {
  return (
    <section className="border-t border-border">
      <div className="sc-container grid gap-10 py-16 lg:grid-cols-[220px_1fr]">

        <div>
          <p className="sc-label text-accent">
            ABOUT
          </p>
        </div>

        <div className="max-w-3xl">

          <h2 className="text-3xl font-semibold tracking-tight">
            About {organization.name}
          </h2>

          <p className="mt-6 text-lg leading-8 text-text-secondary">
            {organization.longDescription}
          </p>

          <p className="mt-6 text-base leading-7 text-text-secondary">
            {organization.about}
          </p>

        </div>

      </div>
    </section>
  );
}