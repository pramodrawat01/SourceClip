import {
  FiArrowUpRight,
  FiBarChart2,
  FiBookOpen,
  FiCheck,
  FiCompass,
  FiCpu,
  FiGitBranch,
  FiSearch,
  FiTrendingUp,
} from "react-icons/fi";

const features = [
  {
    number: "01",
    label: "DISCOVER",
    title: "Find what matters in AI",
    description:
      "Explore AI organizations, models, products, research and tools without jumping between dozens of websites.",
    icon: FiCompass,
  },
  {
    number: "02",
    label: "COMPARE",
    title: "Compare AI models side by side",
    description:
      "Understand how models differ across capabilities, context windows, pricing, benchmarks and supported modalities.",
    icon: FiBarChart2,
  },
  {
    number: "03",
    label: "TRACK",
    title: "Never miss an important release",
    description:
      "Follow model launches, company announcements, product updates and changes across the rapidly evolving AI ecosystem.",
    icon: FiGitBranch,
  },
  {
    number: "04",
    label: "UNDERSTAND",
    title: "Turn information into insight",
    description:
      "Go beyond headlines with research, benchmarks, timelines and structured information that helps you understand what changed and why it matters.",
    icon: FiBookOpen,
  },
];

function DiscoverPreview() {
  return (
    <div className="relative flex h-full min-h-[300px] items-center justify-center overflow-hidden bg-[#fcfcfc] p-8">
      {/* Search */}
      <div className="w-full max-w-[290px] rounded-xl border border-black/10 bg-white p-3 shadow-[0_15px_40px_rgba(0,0,0,0.06)]">

        <div className="flex items-center gap-2 rounded-lg border border-black/10 px-3 py-2.5">
          <FiSearch size={13} className="text-black/35" />

          <span className="text-[10px] text-black/35">
            Search AI ecosystem...
          </span>

          <span className="ml-auto rounded bg-black/[0.04] px-1.5 py-1 text-[8px] text-black/30">
            /
          </span>
        </div>

        <div className="mt-3 space-y-1">

          <div className="rounded-lg bg-black/[0.035] px-3 py-2.5">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-black text-[7px] font-bold text-white">
                AI
              </div>

              <div>
                <p className="text-[9px] font-medium">
                  Artificial Intelligence
                </p>

                <p className="text-[8px] text-black/35">
                  2,184 models · 524 organizations
                </p>
              </div>
            </div>
          </div>

          <div className="px-3 py-2">
            <p className="text-[8px] font-semibold tracking-widest text-black/30">
              TRENDING
            </p>

            <div className="mt-2 flex flex-wrap gap-1.5">
              {["Models", "Agents", "Reasoning", "Vision"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/10 px-2 py-1 text-[8px] text-black/50"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Floating card */}
      <div className="absolute bottom-6 right-5 hidden w-[150px] rounded-lg border border-black/10 bg-white p-3 shadow-[0_15px_40px_rgba(0,0,0,0.08)] sm:block">
        <p className="text-[7px] font-semibold tracking-widest text-black/30">
          LATEST
        </p>

        <p className="mt-1.5 text-[10px] font-medium">
          New reasoning models
        </p>

        <p className="mt-1 text-[8px] leading-4 text-black/35">
          18 new releases this week
        </p>
      </div>
    </div>
  );
}

function ComparePreview() {
  const models = [
    ["GPT-5", "OpenAI", "400K", "96"],
    ["Claude 4", "Anthropic", "200K", "94"],
    ["Gemini", "Google", "1M", "92"],
  ];

  return (
    <div className="flex min-h-[300px] items-center justify-center bg-[#fcfcfc] p-6">

      <div className="w-full max-w-[390px] overflow-hidden rounded-xl border border-black/10 bg-white shadow-[0_15px_40px_rgba(0,0,0,0.05)]">

        <div className="flex items-center justify-between border-b border-black/[0.07] px-4 py-3">
          <div>
            <p className="text-[9px] font-semibold">
              Model comparison
            </p>

            <p className="mt-0.5 text-[7px] text-black/35">
              3 models selected
            </p>
          </div>

          <FiBarChart2 size={13} className="text-black/30" />
        </div>

        <div className="grid grid-cols-[1.2fr_1fr_1fr_1fr] border-b border-black/[0.07] bg-black/[0.015] px-3 py-2">
          <span className="text-[7px] font-semibold text-black/30">
            MODEL
          </span>
          <span className="text-[7px] font-semibold text-black/30">
            CONTEXT
          </span>
          <span className="text-[7px] font-semibold text-black/30">
            REASON
          </span>
          <span className="text-[7px] font-semibold text-black/30">
            VISION
          </span>
        </div>

        {models.map(([name, company, context, score]) => (
          <div
            key={name}
            className="grid grid-cols-[1.2fr_1fr_1fr_1fr] items-center border-b border-black/[0.06] px-3 py-3 last:border-0"
          >
            <div>
              <p className="text-[9px] font-semibold">{name}</p>
              <p className="text-[7px] text-black/35">{company}</p>
            </div>

            <span className="text-[8px] text-black/55">
              {context}
            </span>

            <div className="flex items-center gap-1">
              <div className="h-1 w-9 overflow-hidden rounded-full bg-black/[0.07]">
                <div
                  className="h-full rounded-full bg-black"
                  style={{ width: `${score}%` }}
                />
              </div>

              <span className="text-[7px] text-black/40">
                {score}
              </span>
            </div>

            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-black/[0.05]">
              <FiCheck size={9} />
            </div>
          </div>
        ))}

        <div className="flex items-center justify-between px-3 py-3">
          <span className="text-[7px] text-black/30">
            Compare capabilities
          </span>

          <FiArrowUpRight size={11} className="text-black/40" />
        </div>
      </div>
    </div>
  );
}

function TrackPreview() {
  const updates = [
    {
      time: "2h ago",
      company: "OpenAI",
      title: "New model release",
      type: "MODEL",
    },
    {
      time: "8h ago",
      company: "Anthropic",
      title: "Claude capability update",
      type: "UPDATE",
    },
    {
      time: "1d ago",
      company: "Google",
      title: "Gemini API changes",
      type: "API",
    },
  ];

  return (
    <div className="flex min-h-[300px] items-center justify-center bg-[#fcfcfc] p-8">

      <div className="w-full max-w-[340px] rounded-xl border border-black/10 bg-white p-4 shadow-[0_15px_40px_rgba(0,0,0,0.05)]">

        <div className="flex items-center justify-between">
          <div>
            <p className="text-[9px] font-semibold">
              AI activity
            </p>

            <p className="mt-0.5 text-[7px] text-black/35">
              What changed recently
            </p>
          </div>

          <div className="flex items-center gap-1.5 rounded-full bg-black/[0.04] px-2 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-black" />
            <span className="text-[7px] text-black/45">
              Live tracking
            </span>
          </div>
        </div>

        <div className="mt-5">
          {updates.map((update, index) => (
            <div
              key={update.title}
              className="relative flex gap-3 pb-5"
            >
              {index !== updates.length - 1 && (
                <div className="absolute left-[5px] top-3 h-full w-px bg-black/[0.08]" />
              )}

              <div className="relative z-10 mt-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-black shadow-[0_0_0_1px_rgba(0,0,0,0.12)]" />

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-[8px] font-medium">
                    {update.company}
                  </span>

                  <span className="text-[7px] text-black/30">
                    {update.time}
                  </span>
                </div>

                <p className="mt-1 text-[9px]">
                  {update.title}
                </p>

                <span className="mt-1.5 inline-block text-[6px] font-semibold tracking-widest text-black/30">
                  {update.type}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-1.5 border-t border-black/[0.07] pt-3">
          <FiTrendingUp size={10} className="text-black/40" />

          <span className="text-[7px] text-black/35">
            146 releases tracked this month
          </span>
        </div>
      </div>
    </div>
  );
}

function UnderstandPreview() {
  return (
    <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-[#fcfcfc] p-8">

      <div className="w-full max-w-[340px] rounded-xl border border-black/10 bg-white p-5 shadow-[0_15px_40px_rgba(0,0,0,0.05)]">

        <div className="flex items-start justify-between">
          <div>
            <p className="text-[8px] font-semibold tracking-widest text-black/30">
              AI INSIGHT
            </p>

            <h4 className="mt-2 text-sm font-semibold tracking-tight">
              Reasoning models are accelerating
            </h4>
          </div>

          <FiCpu size={15} className="text-black/30" />
        </div>

        <p className="mt-4 text-[9px] leading-5 text-black/45">
          Reasoning-focused models have become one of the fastest-growing
          areas of AI development, with increasing emphasis on complex
          problem solving and agentic workflows.
        </p>

        {/* Insight graph */}
        <div className="mt-5 flex h-[65px] items-end gap-1.5 border-b border-black/[0.08] px-1">

          {[28, 35, 31, 45, 48, 58, 62, 76, 71, 88].map(
            (height, index) => (
              <div
                key={index}
                className="flex-1 rounded-t-[2px] bg-black/[0.12]"
                style={{ height: `${height}%` }}
              />
            )
          )}
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-[7px] text-black/30">
            MODEL ACTIVITY · LAST 30 DAYS
          </span>

          <span className="text-[8px] font-semibold">
            +38%
          </span>
        </div>

        <div className="mt-4 flex gap-1.5">
          {["Research", "Benchmarks", "Trends"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-black/10 px-2 py-1 text-[7px] text-black/40"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const previews = [
  DiscoverPreview,
  ComparePreview,
  TrackPreview,
  UnderstandPreview,
];

export default function PlatformFeatures() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] px-6 py-28">

      {/* Grid */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-35
          [background-image:linear-gradient(to_right,rgba(0,0,0,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.045)_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

      <div className="relative mx-auto max-w-[1100px]">

        {/* Intro */}
        <div className="border-x border-t border-dashed border-black/10 px-5 py-10 sm:px-8 sm:py-12">

          <p className="text-[10px] font-semibold tracking-[0.2em] text-black/40">
            THE PLATFORM
          </p>

          <h2 className="mt-4 max-w-[700px] text-4xl font-medium leading-[1.02] tracking-[-0.05em] sm:text-5xl">
            One place to discover,
            <br />
            compare and understand AI.
          </h2>

          <p className="mt-5 max-w-[650px] text-[15px] leading-7 text-black/50">
            SourceClip brings the AI ecosystem together — from the companies
            building it, to the models powering it, to the research and
            releases changing what is possible.
          </p>

        </div>

        {/* Feature grid */}
        <div className="grid border-x border-dashed border-black/10 sm:grid-cols-2">

          {features.map((feature, index) => {
            const Icon = feature.icon;
            const Preview = previews[index];

            return (
              <article
                key={feature.number}
                className={`
                  border-t border-black/[0.08]
                  ${index % 2 === 0 ? "sm:border-r" : ""}
                `}
              >

                {/* Feature text */}
                <div className="px-5 pb-7 pt-6 sm:px-6">

                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-md border border-black/10 bg-white">
                      <Icon size={13} className="text-black/60" />
                    </div>

                    <span className="text-[9px] font-semibold tracking-[0.18em] text-black/35">
                      {feature.number} · {feature.label}
                    </span>
                  </div>

                  <h3 className="mt-5 text-[20px] font-medium tracking-[-0.025em]">
                    {feature.title}
                  </h3>

                  <p className="mt-2 max-w-[460px] text-[12px] leading-5 text-black/45">
                    {feature.description}
                  </p>

                </div>

                {/* Visual */}
                <div className="border-t border-black/[0.07]">
                  <Preview />
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between border-t border-black/[0.07] px-5 py-3 sm:px-6">

                  <span className="text-[8px] text-black/35">
                    {index === 0 && "Everything in one place"}
                    {index === 1 && "Make informed decisions"}
                    {index === 2 && "Stay ahead of change"}
                    {index === 3 && "Context beyond the headline"}
                  </span>

                  <FiArrowUpRight
                    size={11}
                    className="text-black/35"
                  />

                </div>

              </article>
            );
          })}

        </div>

        {/* Bottom statement */}
        <div className="border-x border-b border-dashed border-black/10 px-5 py-12 text-center sm:px-8">

          <p className="mx-auto max-w-[600px] text-[13px] leading-6 text-black/45">
            Whether you're building with AI, researching the field,
            evaluating a model, or simply trying to keep up —
            SourceClip gives you the context to make sense of it.
          </p>

          <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-black px-5 py-3 text-xs font-medium text-white transition hover:bg-black/80">
            Explore SourceClip
            <FiArrowUpRight size={13} />
          </button>

        </div>

      </div>
    </section>
  );
}