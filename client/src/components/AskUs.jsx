import {
  FiArrowRight,
  FiBookOpen,
  FiCheck,
  FiCpu,
  FiSearch,
  FiTrendingUp,
} from "react-icons/fi";

const questions = [
  {
    icon: FiSearch,
    title: "DISCOVER",
    text: "Find the latest models for coding and reasoning",
  },
  {
    icon: FiBookOpen,
    title: "RESEARCH",
    text: "Explain what changed in the latest AI releases",
  },
  {
    icon: FiTrendingUp,
    title: "COMPARE",
    text: "Compare the strongest models for my use case",
  },
];

export default function AskUs() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] px-6 py-28">
      {/* Background */}
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

        {/* Heading */}
        <div className="mb-10 max-w-[700px]">

          <p className="text-[10px] font-semibold tracking-[0.2em] text-black/40">
            ASK SOURCECLIP
          </p>

          <h2 className="mt-4 text-4xl font-medium leading-[1.02] tracking-[-0.05em] sm:text-5xl">
            Ask what's happening.
            <br />
            Understand what changed.
          </h2>

          <p className="mt-5 max-w-[650px] text-[15px] leading-7 text-black/50">
            Search across organizations, models, releases, research and
            benchmarks from one place. Get the context behind the information,
            not just another headline.
          </p>
        </div>

        {/* Main product card */}
        <div className="overflow-hidden rounded-xl border border-black/10 bg-white shadow-[0_20px_70px_rgba(0,0,0,0.07)]">

          {/* Header */}
          <div className="border-b border-black/[0.08] px-5 py-5 sm:px-6">

            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-black text-white">
                <FiCpu size={13} />
              </div>

              <div>
                <p className="text-[10px] font-semibold">
                  SourceClip Intelligence
                </p>

                <p className="text-[8px] text-black/35">
                  Ask anything about the AI ecosystem
                </p>
              </div>
            </div>

          </div>

          {/* Body */}
          <div className="grid md:grid-cols-[0.9fr_1.1fr]">

            {/* Left */}
            <div className="border-b border-black/[0.08] p-6 md:border-b-0 md:border-r">

              <div className="mb-6 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md border border-black/10 bg-white">
                  <FiSearch size={11} />
                </span>

                <span className="text-[9px] font-semibold tracking-widest text-black/40">
                  YOU ASK
                </span>
              </div>

              <div className="rounded-lg border border-black/10 bg-[#fcfcfc] p-4">
                <p className="text-[11px] leading-5 text-black/70">
                  "Which AI models are best for coding right now, and how do
                  they compare?"
                </p>
              </div>

              <div className="mt-6 space-y-4">

                {questions.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex gap-3"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-black/[0.04]">
                        <Icon size={12} className="text-black/50" />
                      </div>

                      <div>
                        <p className="text-[8px] font-semibold tracking-widest text-black/30">
                          {item.title}
                        </p>

                        <p className="mt-1 text-[9px] leading-4 text-black/50">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}

              </div>

              <div className="mt-7 flex items-center gap-2 text-[8px] text-black/35">
                <FiCheck size={10} />
                <span>Answers backed by structured sources</span>
              </div>

            </div>

            {/* Right */}
            <div className="bg-[#fcfcfc] p-6">

              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-[8px] font-semibold tracking-widest text-black/30">
                    SOURCECLIP RESPONSE
                  </p>

                  <p className="mt-1 text-[10px] font-medium">
                    Coding model comparison
                  </p>
                </div>

                <span className="rounded-full bg-black/[0.05] px-2 py-1 text-[7px] text-black/40">
                  12 sources
                </span>
              </div>

              <div className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">

                <p className="text-[10px] leading-5 text-black/60">
                  For software development, several leading models currently
                  stand out for different reasons. The right choice depends
                  on coding performance, context requirements, tool use and
                  cost.
                </p>

                {/* Results */}
                <div className="mt-5 space-y-2">

                  {[
                    ["GPT-5", "Strong reasoning · Coding", "94"],
                    ["Claude 4", "Strong coding · Long context", "96"],
                    ["Gemini", "Long context · Multimodal", "91"],
                  ].map(([name, description, score]) => (
                    <div
                      key={name}
                      className="flex items-center gap-3 rounded-lg border border-black/[0.07] p-3"
                    >
                      <div className="flex h-7 w-7 items-center justify-center rounded-md bg-black text-[7px] font-bold text-white">
                        {name.slice(0, 2)}
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-[9px] font-semibold">
                          {name}
                        </p>

                        <p className="mt-0.5 truncate text-[7px] text-black/35">
                          {description}
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-[8px] font-semibold">
                          {score}
                        </p>

                        <p className="text-[6px] text-black/30">
                          benchmark
                        </p>
                      </div>
                    </div>
                  ))}

                </div>

                <div className="mt-5 border-t border-black/[0.07] pt-4">

                  <div className="flex items-center justify-between">
                    <span className="text-[7px] text-black/30">
                      Sources checked
                    </span>

                    <span className="text-[8px] font-medium">
                      12
                    </span>
                  </div>

                  <div className="mt-2 h-1 overflow-hidden rounded-full bg-black/[0.06]">
                    <div className="h-full w-[88%] rounded-full bg-black" />
                  </div>

                </div>

              </div>

              {/* Input */}
              <div className="mt-4 flex items-center gap-3 rounded-lg border border-black/10 bg-white px-3 py-2.5">

                <FiSearch size={11} className="text-black/30" />

                <span className="flex-1 text-[8px] text-black/30">
                  Ask another question...
                </span>

                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-black text-white">
                  <FiArrowRight size={10} />
                </div>

              </div>

            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-col gap-3 border-t border-black/[0.08] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">

            <p className="text-[8px] text-black/35">
              Search organizations, models, releases, research and benchmarks.
            </p>

            <button className="flex items-center gap-2 text-[9px] font-medium">
              Try SourceClip
              <FiArrowRight size={11} />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}