import {
  FiActivity,
  FiBarChart2,
  FiChevronDown,
  FiCode,
  FiCpu,
  FiDatabase,
  FiGitBranch,
  FiLayers,
  FiSearch,
  FiTrendingUp,
} from "react-icons/fi";

const models = [
  {
    name: "GPT-5",
    company: "OpenAI",
    context: "400K",
    reasoning: 96,
    coding: 94,
    multimodal: true,
  },
  {
    name: "Claude 4",
    company: "Anthropic",
    context: "200K",
    reasoning: 94,
    coding: 96,
    multimodal: true,
  },
  {
    name: "Gemini 3",
    company: "Google",
    context: "1M",
    reasoning: 92,
    coding: 91,
    multimodal: true,
  },
];

const sidebarItems = [
  {
    section: "EXPLORE",
    items: [
      { label: "Overview", icon: FiActivity },
      { label: "Models", icon: FiCpu, active: true },
      { label: "Organizations", icon: FiLayers },
      { label: "Latest Releases", icon: FiGitBranch },
    ],
  },
  {
    section: "ANALYZE",
    items: [
      { label: "Comparisons", icon: FiBarChart2 },
      { label: "Benchmarks", icon: FiTrendingUp },
      { label: "Capabilities", icon: FiCode },
    ],
  },
  {
    section: "DISCOVER",
    items: [
      { label: "Research", icon: FiDatabase },
    ],
  },
];

function ScoreBar({ value }) {
  return (
    <div className="flex items-center gap-2">
      <div className="h-1.5 w-20 overflow-hidden rounded-full bg-black/[0.06]">
        <div
          className="h-full rounded-full bg-black"
          style={{ width: `${value}%` }}
        />
      </div>

      <span className="text-[10px] font-medium text-black/50">
        {value}
      </span>
    </div>
  );
}

export default function ModelIntelligence() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] px-6 py-28">
      
      {/* Background grid */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-40
          [background-image:linear-gradient(to_right,rgba(0,0,0,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.045)_1px,transparent_1px)]
          [background-size:48px_48px]
          [mask-image:linear-gradient(to_bottom,black,transparent)]
        "
      />

      <div className="relative mx-auto max-w-[1100px]">

        {/* Section heading */}
        <div className="mb-12 max-w-[650px]">
          <p className="mb-4 text-[10px] font-semibold tracking-[0.2em] text-black/40">
            AI INTELLIGENCE
          </p>

          <h2 className="text-4xl font-medium tracking-[-0.045em] text-black sm:text-5xl">
            Understand the models
            <br />
            shaping AI.
          </h2>

          <p className="mt-5 max-w-[560px] text-[15px] leading-6 text-black/50">
            Compare AI models, explore their capabilities, track benchmarks,
            and understand how the ecosystem is changing.
          </p>
        </div>

        {/* Application window */}
        <div className="overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.08)]">

          {/* App top bar */}
          <div className="flex h-[52px] items-center justify-between border-b border-black/[0.08] px-4">

            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-black text-[8px] font-bold text-white">
                SC
              </div>

              <span className="text-[11px] font-semibold">
                SourceClip
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-2 rounded-md border border-black/10 px-3 py-1.5 sm:flex">
                <FiSearch size={11} className="text-black/30" />
                <span className="text-[9px] text-black/35">
                  Search models...
                </span>
              </div>

              <div className="h-6 w-6 rounded-full bg-black/[0.06]" />
            </div>
          </div>

          <div className="grid min-h-[580px] grid-cols-[190px_1fr]">

            {/* Sidebar */}
            <aside className="hidden border-r border-black/[0.08] bg-[#fcfcfc] px-3 py-5 sm:block">

              {sidebarItems.map((group) => (
                <div key={group.section} className="mb-7">

                  <p className="mb-2 px-3 text-[8px] font-semibold tracking-[0.18em] text-black/30">
                    {group.section}
                  </p>

                  <div className="space-y-0.5">
                    {group.items.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.label}
                          className={`flex items-center gap-2.5 rounded-md px-3 py-2 text-[10px] ${
                            item.active
                              ? "bg-black text-white"
                              : "text-black/50 hover:bg-black/[0.04]"
                          }`}
                        >
                          <Icon size={12} />
                          <span>{item.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}

              {/* User */}
              <div className="mt-20 border-t border-black/[0.07] pt-4">
                <div className="flex items-center gap-2 px-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-[8px] text-white">
                    PS
                  </div>

                  <div>
                    <p className="text-[9px] font-medium">
                      Your workspace
                    </p>

                    <p className="text-[8px] text-black/35">
                      SourceClip
                    </p>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <main className="min-w-0 p-5 sm:p-7">

              {/* Heading */}
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">

                <div>
                  <p className="text-[9px] text-black/35">
                    MODEL INTELLIGENCE · 24 MODELS
                  </p>

                  <h3 className="mt-1 text-xl font-semibold tracking-tight">
                    Model comparison
                  </h3>

                  <p className="mt-1 text-[10px] text-black/40">
                    Compare capabilities and performance across leading models.
                  </p>
                </div>

                {/* Filter */}
                <button className="flex items-center gap-2 self-start rounded-md border border-black/10 px-3 py-2 text-[9px] text-black/55">
                  Latest models
                  <FiChevronDown size={11} />
                </button>
              </div>

              {/* Stats */}
              <div className="mt-6 grid grid-cols-2 border border-black/[0.08] sm:grid-cols-4">

                {[
                  ["MODELS TRACKED", "2,184"],
                  ["ORGANIZATIONS", "524"],
                  ["RELEASES", "146"],
                  ["UPDATED", "Today"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="border-b border-r border-black/[0.08] p-3 last:border-r-0 sm:border-b-0"
                  >
                    <p className="text-[8px] text-black/35">
                      {label}
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Comparison table */}
              <div className="mt-5 overflow-hidden rounded-lg border border-black/[0.08]">

                <div className="border-b border-black/[0.08] px-4 py-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-semibold">
                        Compare models
                      </p>

                      <p className="mt-0.5 text-[8px] text-black/35">
                        Technical specifications
                      </p>
                    </div>

                    <button className="rounded-md border border-black/10 px-2 py-1 text-[8px] text-black/45">
                      + Add model
                    </button>
                  </div>
                </div>

                {/* Header */}
                <div className="grid grid-cols-[120px_repeat(3,1fr)] border-b border-black/[0.08] bg-black/[0.015]">

                  <div className="px-3 py-3 text-[8px] font-semibold text-black/35">
                    CAPABILITY
                  </div>

                  {models.map((model) => (
                    <div
                      key={model.name}
                      className="border-l border-black/[0.06] px-3 py-3"
                    >
                      <p className="text-[10px] font-semibold">
                        {model.name}
                      </p>

                      <p className="mt-0.5 text-[8px] text-black/35">
                        {model.company}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Context */}
                <div className="grid grid-cols-[120px_repeat(3,1fr)] border-b border-black/[0.06]">
                  <div className="px-3 py-3 text-[9px] text-black/45">
                    Context window
                  </div>

                  {models.map((model) => (
                    <div
                      key={model.name}
                      className="border-l border-black/[0.06] px-3 py-3 text-[9px] font-medium"
                    >
                      {model.context}
                    </div>
                  ))}
                </div>

                {/* Reasoning */}
                <div className="grid grid-cols-[120px_repeat(3,1fr)] border-b border-black/[0.06]">
                  <div className="px-3 py-3 text-[9px] text-black/45">
                    Reasoning
                  </div>

                  {models.map((model) => (
                    <div
                      key={model.name}
                      className="border-l border-black/[0.06] px-3 py-3"
                    >
                      <ScoreBar value={model.reasoning} />
                    </div>
                  ))}
                </div>

                {/* Coding */}
                <div className="grid grid-cols-[120px_repeat(3,1fr)] border-b border-black/[0.06]">
                  <div className="px-3 py-3 text-[9px] text-black/45">
                    Coding
                  </div>

                  {models.map((model) => (
                    <div
                      key={model.name}
                      className="border-l border-black/[0.06] px-3 py-3"
                    >
                      <ScoreBar value={model.coding} />
                    </div>
                  ))}
                </div>

                {/* Multimodal */}
                <div className="grid grid-cols-[120px_repeat(3,1fr)]">
                  <div className="px-3 py-3 text-[9px] text-black/45">
                    Multimodal
                  </div>

                  {models.map((model) => (
                    <div
                      key={model.name}
                      className="border-l border-black/[0.06] px-3 py-3"
                    >
                      <span className="inline-flex rounded-full bg-black/[0.05] px-2 py-1 text-[8px] font-medium">
                        {model.multimodal ? "Supported" : "—"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom insight cards */}
              <div className="mt-5 grid gap-3 sm:grid-cols-3">

                <div className="rounded-lg border border-black/[0.08] p-4">
                  <FiTrendingUp size={13} />

                  <p className="mt-3 text-[9px] text-black/35">
                    FASTEST GROWING
                  </p>

                  <p className="mt-1 text-[11px] font-semibold">
                    Reasoning models
                  </p>

                  <p className="mt-1 text-[8px] leading-4 text-black/40">
                    +38% new releases this quarter
                  </p>
                </div>

                <div className="rounded-lg border border-black/[0.08] p-4">
                  <FiCode size={13} />

                  <p className="mt-3 text-[9px] text-black/35">
                    TOP CAPABILITY
                  </p>

                  <p className="mt-1 text-[11px] font-semibold">
                    Coding
                  </p>

                  <p className="mt-1 text-[8px] leading-4 text-black/40">
                    72 models support advanced coding
                  </p>
                </div>

                <div className="rounded-lg border border-black/[0.08] p-4">
                  <FiGitBranch size={13} />

                  <p className="mt-3 text-[9px] text-black/35">
                    RECENT ACTIVITY
                  </p>

                  <p className="mt-1 text-[11px] font-semibold">
                    18 releases
                  </p>

                  <p className="mt-1 text-[8px] leading-4 text-black/40">
                    Added to SourceClip this week
                  </p>
                </div>

              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}