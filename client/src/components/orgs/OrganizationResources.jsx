import { FiArrowUpRight, FiBookOpen, FiGlobe } from "react-icons/fi";

function ResourceIcon({ type }) {
  return type === "Docs" || type === "Research" || type === "Models"
    ? <FiBookOpen size={17}/>
    : <FiGlobe size={17}/>;
}

export default function OrganizationResources({ resources = [] }) {
  return (
    <section className="border-t border-border">
      <div className="sc-container py-16">
        <p className="sc-label text-accent">RESOURCES</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">Official resources</h2>
        <p className="mt-3 text-text-secondary">Primary sources and official pages for learning more about this organization.</p>

        {resources.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-border p-8 text-sm text-text-muted">No official resources have been added yet.</div>
        ) : (
          <div className="mt-10 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <a key={resource.id} href={resource.url} target="_blank" rel="noreferrer"
                className="group flex items-center justify-between gap-5 border-b border-r border-border p-6">
                <div className="flex min-w-0 items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface text-text-secondary">
                    <ResourceIcon type={resource.type}/>
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{resource.label}</p>
                    <p className="mt-1 text-xs text-text-muted">{resource.type}</p>
                  </div>
                </div>
                <FiArrowUpRight className="shrink-0 text-text-muted transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={17}/>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}