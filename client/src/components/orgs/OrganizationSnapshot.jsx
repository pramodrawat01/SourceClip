export default function OrganizationSnapshot({
  modelsCount,
  productsCount,
  releasesCount,
  researchCount,
}) {
  const stats = [
    {
      label: "Models",
      value: modelsCount,
    },
    {
      label: "Products",
      value: productsCount,
    },
    {
      label: "Releases",
      value: releasesCount,
    },
    {
      label: "Research",
      value: researchCount,
    },
  ];

  return (
    <section className="sc-container py-12">
      <div className="grid grid-cols-2 border-l border-t border-border md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="border-b border-r border-border p-6"
          >
            <p className="text-3xl font-semibold tracking-tight">
              {stat.value}
            </p>

            <p className="mt-2 text-sm text-text-muted">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}