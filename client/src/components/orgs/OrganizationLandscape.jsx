export default function OrganizationLandscape({
  organizations = [],
}) {
  const categories = {};

  organizations.forEach((organization) => {
    const category = organization.category || "Other";

    categories[category] =
      (categories[category] || 0) + 1;
  });

  const entries = Object.entries(categories).sort(
    (a, b) => b[1] - a[1]
  );

  const max = Math.max(
    ...entries.map(([, count]) => count),
    1
  );

  return (
    <section className="border-t border-border bg-surface/40">
      <div className="sc-container py-16">

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

          <div>
            <p className="sc-label text-accent">
              AI LANDSCAPE
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Who is building AI?
            </h2>

            <p className="mt-4 max-w-md text-text-secondary">
              SourceClip organizes the AI ecosystem across research
              labs, AI companies, model providers, and other
              organizations.
            </p>
          </div>

          <div className="space-y-6">
            {entries.map(([category, count]) => {
              const width = `${(count / max) * 100}%`;

              return (
                <div key={category}>

                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm">
                      {category}
                    </span>

                    <span className="text-xs text-text-muted">
                      {count}
                    </span>
                  </div>

                  <div className="h-2 rounded-full bg-white">
                    <div
                      className="h-full rounded-full bg-black"
                      style={{ width }}
                    />
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}