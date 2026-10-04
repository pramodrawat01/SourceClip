import {
  FiArrowRight,
  FiBriefcase,
  FiCode,
  FiSearch,
  FiTrendingUp,
} from "react-icons/fi";

const audiences = [
  {
    name: "Developers",
    role: "Builders · Engineers",
    icon: FiCode,
    highlight: "Find the right model",
    description:
      "Compare models, capabilities, context windows, pricing and tool support before choosing what to build with.",
    action: "Explore models",
  },
  {
    name: "Founders",
    role: "Startups · Product teams",
    icon: FiBriefcase,
    highlight: "Understand the market",
    description:
      "Track companies, product launches, new capabilities and emerging AI trends to make better product decisions.",
    action: "Explore organizations",
  },
  {
    name: "Researchers",
    role: "Research · Academia",
    icon: FiSearch,
    highlight: "Follow AI research",
    description:
      "Discover papers, benchmarks, model releases and research trends across the rapidly changing AI ecosystem.",
    action: "Explore research",
  },
  {
    name: "AI Enthusiasts",
    role: "Learners · Explorers",
    icon: FiTrendingUp,
    highlight: "Keep up with AI",
    description:
      "Understand what's new in AI without having to follow hundreds of companies, blogs and research feeds.",
    action: "Discover AI",
  },
  {
    name: "Product Teams",
    role: "Product · Strategy",
    icon: FiBriefcase,
    highlight: "Evaluate what's possible",
    description:
      "See how different models and AI products compare before deciding which technology fits your use case.",
    action: "Compare models",
  },
  {
    name: "Students",
    role: "Learning · Education",
    icon: FiSearch,
    highlight: "Learn the ecosystem",
    description:
      "Build a structured understanding of AI companies, models, research and the technologies behind them.",
    action: "Start exploring",
  },
];

export default function AudienceSection() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] px-6 py-28">
      {/* Background grid */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-30
          [background-image:linear-gradient(to_right,rgba(0,0,0,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.045)_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

      <div className="relative mx-auto max-w-[1100px] border-x border-dashed border-black/10">

        {/* Heading */}
        <div className="px-5 pb-12 pt-2 text-center sm:px-8">

          <p className="text-[10px] font-semibold tracking-[0.2em] text-black/40">
            WHO IT'S FOR
          </p>

          <h2 className="mx-auto mt-4 max-w-[700px] text-4xl font-medium leading-[1.02] tracking-[-0.05em] sm:text-5xl">
            Anyone trying to
            <br />
            understand AI.
          </h2>

          <p className="mx-auto mt-5 max-w-[570px] text-[14px] leading-6 text-black/50">
            Whether you're building with AI, researching it, evaluating
            models, or simply trying to keep up, SourceClip gives you
            the information and context you need.
          </p>
        </div>

        {/* Cards */}
        <div className="grid border-t border-black/[0.08] sm:grid-cols-2 lg:grid-cols-3">

          {audiences.map((person, index) => {
            const Icon = person.icon;

            return (
              <article
                key={person.name}
                className={`
                  group
                  border-b border-black/[0.08]
                  bg-white
                  p-5
                  transition-colors
                  hover:bg-[#fcfcfc]
                  sm:p-6
                  ${
                    index % 3 !== 2
                      ? "lg:border-r"
                      : ""
                  }
                  ${
                    index % 2 === 0
                      ? "sm:max-lg:border-r"
                      : ""
                  }
                `}
              >
                {/* Top */}
                <div className="flex items-start justify-between">

                  <div className="flex items-center gap-3">

                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-black/10 bg-white">
                      <Icon
                        size={14}
                        className="text-black/60"
                      />
                    </div>

                    <div>
                      <h3 className="text-[12px] font-semibold">
                        {person.name}
                      </h3>

                      <p className="mt-0.5 text-[8px] text-black/35">
                        {person.role}
                      </p>
                    </div>

                  </div>

                  <span className="text-[8px] text-black/25">
                    0{index + 1}
                  </span>

                </div>

                {/* Content */}
                <div className="mt-7">

                  <p className="text-[15px] font-medium tracking-[-0.02em]">
                    {person.highlight}
                  </p>

                  <p className="mt-3 min-h-[72px] text-[11px] leading-5 text-black/45">
                    {person.description}
                  </p>

                </div>

                {/* Bottom */}
                <div className="mt-7 flex items-center justify-between border-t border-black/[0.07] pt-4">

                  <span className="text-[8px] text-black/35">
                    {person.action}
                  </span>

                  <div className="flex h-6 w-6 items-center justify-center rounded-full border border-black/10 transition group-hover:bg-black group-hover:text-white">
                    <FiArrowRight size={10} />
                  </div>

                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom trust-style row */}
        <div className="flex flex-col gap-5 border-b border-t border-black/[0.08] px-5 py-6 sm:flex-row sm:items-center sm:px-8">

          <div className="max-w-[210px]">
            <p className="text-[9px] font-semibold leading-4">
              One platform for the entire AI ecosystem.
            </p>

            <p className="mt-1 text-[8px] leading-4 text-black/35">
              Discover, compare, track and understand.
            </p>
          </div>

          <div className="hidden h-8 w-px bg-black/10 sm:block" />

          <div className="flex flex-wrap gap-x-8 gap-y-3 text-[9px] text-black/35">
            <span>Organizations</span>
            <span>Models</span>
            <span>Products</span>
            <span>Research</span>
            <span>Benchmarks</span>
            <span>Releases</span>
          </div>

        </div>

        {/* CTA */}
        <div className="flex justify-center px-5 py-7">

          <button className="group flex items-center gap-2 rounded-lg border border-black/15 bg-white px-5 py-3 text-[10px] font-medium transition hover:bg-black hover:text-white">
            Explore SourceClip

            <FiArrowRight
              size={12}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </button>

        </div>

      </div>
    </section>
  );
}