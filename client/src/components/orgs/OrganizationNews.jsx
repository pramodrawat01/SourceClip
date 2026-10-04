import { FiArrowUpRight, FiCalendar } from "react-icons/fi";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", { month:"short", day:"numeric", year:"numeric" }).format(new Date(date));

export default function OrganizationNews({ news = [] }) {
  return (
    <section className="border-t border-border bg-surface/40">
      <div className="sc-container py-16">
        <p className="sc-label text-accent">NEWS</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">Latest updates</h2>
        <p className="mt-3 max-w-2xl text-text-secondary">Recent announcements, product updates, research news, and other developments.</p>

        {news.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-border bg-bg p-8 text-sm text-text-muted">No news has been added yet.</div>
        ) : (
          <div className="mt-10 grid border-l border-t border-border md:grid-cols-2">
            {news.map((item) => (
              <a key={item.id} href={item.url} target="_blank" rel="noreferrer"
                className="group border-b border-r border-border bg-bg p-7">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-surface px-3 py-1 text-xs text-text-muted">{item.category}</span>
                  <FiArrowUpRight className="text-text-muted transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={18}/>
                </div>
                <h3 className="mt-8 text-xl font-medium leading-7">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-text-secondary">{item.summary}</p>
                <div className="mt-7 flex items-center gap-2 text-xs text-text-muted"><FiCalendar size={13}/>{formatDate(item.publishedAt)}<span>·</span>{item.source}</div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}