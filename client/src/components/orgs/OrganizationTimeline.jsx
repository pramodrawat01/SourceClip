export default function OrganizationTimeline({ releases }) {
  return (
    <section className="border-t border-border">
      <div className="sc-container py-16">

        <p className="sc-label text-accent">
          TIMELINE
        </p>

        <h2 className="mt-3 text-3xl font-semibold">
          Release history
        </h2>

        <div className="mt-10">
          {releases.map((release) => (
            <div
              key={release.id}
              className="grid gap-4 border-t border-border py-6 md:grid-cols-[140px_1fr_120px]"
            >
              <p className="text-sm text-text-muted">
                {release.date}
              </p>

              <div>
                <h3 className="font-medium">
                  {release.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-text-secondary">
                  {release.summary}
                </p>
              </div>

              <span className="text-sm text-text-muted">
                {release.type}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}