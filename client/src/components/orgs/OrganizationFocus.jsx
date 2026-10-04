export default function OrganizationFocus({ organization }) {
  return (
    <section className="border-t border-border">
      <div className="sc-container py-16">

        <div className="mb-10">
          <p className="sc-label text-accent">
            AI FOCUS
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Areas of focus
          </h2>
        </div>

        <div className="grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
          {organization.focusAreas.map((area) => (
            <div
              key={area}
              className="border-b border-r border-border p-6 transition hover:bg-surface"
            >
              <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-lg bg-black text-xs text-white">
                AI
              </div>

              <h3 className="font-medium">
                {area}
              </h3>

              <p className="mt-3 text-sm leading-6 text-text-muted">
                Research, models and technologies related to {area.toLowerCase()}.
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}