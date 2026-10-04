import {
  FiArrowRight,
  FiBookOpen,
  FiCode,
  FiDatabase,
  FiFileText,
  FiGithub,
  FiGlobe,
  FiMessageSquare,
  FiRadio,
  FiSearch,
  FiTrendingUp,
  FiCpu
} from "react-icons/fi";

const sources = [
  {
    name: "Research",
    icon: FiBookOpen,
    position: "left-[8%] top-[18%]",
  },
  {
    name: "GitHub",
    icon: FiGithub,
    position: "left-[24%] top-[67%]",
  },
  {
    name: "Company",
    icon: FiGlobe,
    position: "left-[14%] top-[46%]",
  },
  {
    name: "News",
    icon: FiRadio,
    position: "right-[12%] top-[17%]",
  },
  {
    name: "Models",
    icon: FiCpu,
    position: "right-[26%] top-[48%]",
  },
  {
    name: "Benchmarks",
    icon: FiTrendingUp,
    position: "right-[10%] top-[70%]",
  },
  {
    name: "Papers",
    icon: FiFileText,
    position: "left-[35%] top-[10%]",
  },
  {
    name: "APIs",
    icon: FiCode,
    position: "right-[37%] top-[72%]",
  },
];

export default function SourceNetwork() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] px-6 py-28">

      <div className="mx-auto max-w-[1100px]">

        <div className="relative overflow-hidden rounded-[2px] border-x border-t border-black/10 bg-[#fffdfa]">

          {/* Orange top line */}
          <div className="absolute left-0 right-0 top-0 h-[1px] bg-orange-500/60" />

          {/* Grid */}
          <div
            className="
              absolute inset-0
              opacity-70
              [background-image:linear-gradient(rgba(255,105,50,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,105,50,0.14)_1px,transparent_1px)]
              [background-size:10px_10px]
            "
          />

          {/* Fade */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#fffdfa_85%)]" />

          {/* Network icons */}
          <div className="absolute inset-0 hidden md:block">

            {sources.map((source) => {
              const Icon = source.icon;

              return (
                <div
                  key={source.name}
                  className={`absolute ${source.position} z-10`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-black/10 bg-white shadow-[0_5px_18px_rgba(0,0,0,0.08)]">
                    <Icon size={20} className="text-black/75" />
                  </div>
                </div>
              );
            })}

            {/* Connecting lines */}
            <div className="absolute left-[20%] top-[30%] h-px w-[25%] rotate-[20deg] bg-orange-300/50" />
            <div className="absolute right-[20%] top-[30%] h-px w-[25%] -rotate-[20deg] bg-orange-300/50" />
            <div className="absolute left-[25%] top-[55%] h-px w-[22%] -rotate-[15deg] bg-orange-300/50" />
            <div className="absolute right-[25%] top-[55%] h-px w-[22%] rotate-[15deg] bg-orange-300/50" />
          </div>

          {/* Center */}
          <div className="relative z-20 flex min-h-[520px] flex-col items-center justify-center px-6 py-24 text-center">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#17191c] text-white shadow-lg">
              <div className="text-[11px] font-semibold tracking-tight">
                SC
              </div>
            </div>

            <p className="mt-7 text-[10px] font-semibold tracking-[0.2em] text-black/40">
              ONE INTELLIGENCE LAYER
            </p>

            <h2 className="mt-4 max-w-[620px] text-4xl font-medium leading-[1.04] tracking-[-0.05em] sm:text-5xl">
              AI information,
              <br />
              connected in one place.
            </h2>

            <p className="mt-5 max-w-[560px] text-[14px] leading-6 text-black/50">
              SourceClip brings together information from AI companies,
              research, model releases, developer ecosystems and benchmarks
              so you can understand the bigger picture.
            </p>

            <button className="mt-7 flex items-center gap-2 rounded-full border border-black/20 bg-white px-5 py-2.5 text-xs font-medium transition hover:bg-black hover:text-white">
              Explore the ecosystem
              <FiArrowRight size={13} />
            </button>

          </div>
        </div>

        {/* Bottom source list */}
        <div className="grid border-x border-b border-black/10 bg-white sm:grid-cols-4">

          {[
            [FiDatabase, "Structured data", "Models & organizations"],
            [FiBookOpen, "Research", "Papers & benchmarks"],
            [FiGithub, "Developer ecosystem", "Code & tools"],
            [FiMessageSquare, "AI updates", "News & announcements"],
          ].map(([Icon, title, description]) => (
            <div
              key={title}
              className="border-t border-black/[0.07] p-5 sm:border-r last:sm:border-r-0"
            >
              <Icon size={14} className="text-black/45" />

              <p className="mt-4 text-[10px] font-semibold">
                {title}
              </p>

              <p className="mt-1 text-[8px] leading-4 text-black/35">
                {description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}