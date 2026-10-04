import { FiArrowUpRight, FiCalendar } from "react-icons/fi";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", { month:"short", day:"numeric", year:"numeric" }).format(new Date(date));

export default function OrganizationResearch({ research = [] }) {
  return (
    <section className="border-t border-border">
      <div className="sc-container py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="sc-label text-accent">RESEARCH</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Research & publications</h2>
            <p className="mt-3 max-w-2xl text-text-secondary">Explore research topics, publications, and technical work associated with this organization.</p>
          </div>
          {research.length > 0 && <span className="hidden text-sm text-text-muted sm:block">{research.length} items</span>}
        </div>

        {research.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-border p-8 text-sm text-text-muted">No research entries have been added yet.</div>
        ) : (
          <div className="mt-10 border-l border-t border-border">
            {research.map((item) => (
              <a key={item.id} href={item.url} target="_blank" rel="noreferrer"
                className="group grid gap-5 border-b border-r border-border p-6 transition hover:bg-surface md:grid-cols-[170px_1fr_24px]">
                <div className="flex items-center gap-2 text-sm text-text-muted"><FiCalendar size={14}/>{formatDate(item.publishedAt)}</div>
                <div>
                  <div className="flex flex-wrap gap-2">
                    {item.topics?.map((topic) => <span key={topic} className="rounded-full bg-surface px-2.5 py-1 text-[11px] text-text-muted">{topic}</span>)}
                  </div>
                  <h3 className="mt-4 text-lg font-medium">{item.title}</h3>
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-text-secondary">{item.summary}</p>
                  <p className="mt-4 text-xs text-text-muted">{item.authors?.join(", ")}</p>
                </div>
                <FiArrowUpRight className="mt-1 text-text-muted transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={18}/>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}