const levels = ["Very High", "High", "Medium", "Low"];

function levelWidth(level) {
  if (level === "Very High") return "w-full";
  if (level === "High") return "w-3/4";
  if (level === "Medium") return "w-1/2";
  return "w-1/4";
}

export default function OrganizationPositioning({ insight }) {
  if (!insight) return null;
  const entries = Object.entries(insight.positioning || {});

  return (
    <section className="border-t border-border">
      <div className="sc-container py-16">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="sc-label text-accent">AT A GLANCE</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Where this organization focuses</h2>
            <p className="mt-4 max-w-md text-text-secondary">A simple qualitative view of the organization&apos;s major areas of activity.</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {levels.map((level) => <span key={level} className="rounded-full border border-border px-3 py-1 text-xs text-text-muted">{level}</span>)}
            </div>
          </div>

          <div className="space-y-5">
            {entries.map(([key, level]) => (
              <div key={key}>
                <div className="mb-2 flex items-center justify-between gap-4">
                  <span className="text-sm capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
                  <span className="text-xs text-text-muted">{level}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-surface">
                  <div className={`h-full rounded-full bg-black ${levelWidth(level)}`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {insight.knownFor?.length > 0 && (
          <div className="mt-14 border-t border-border pt-10">
            <p className="text-sm font-medium">Known for</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {insight.knownFor.map((item) => <span key={item} className="rounded-full border border-border px-4 py-2 text-sm text-text-secondary">{item}</span>)}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}