import { useState } from "react";
import {
  FiArrowRight,
  FiChevronDown,
} from "react-icons/fi";

const leftQuestions = [
  {
    question: "What is SourceClip?",
    answer:
      "SourceClip is an AI intelligence platform that brings organizations, models, products, research, releases and benchmarks together in one place.",
  },
  {
    question: "Who is SourceClip for?",
    answer:
      "SourceClip is designed for developers, founders, researchers, product teams, students and anyone who wants a clearer understanding of the AI ecosystem.",
  },
  {
    question: "How can I compare AI models?",
    answer:
      "You can select multiple models and compare information such as capabilities, context windows, modalities, pricing, benchmarks and release history.",
  },
  {
    question: "Where does the information come from?",
    answer:
      "SourceClip is designed to organize information from public company announcements, research, model documentation, developer resources, benchmarks and other structured sources.",
  },
  {
    question: "Can I track new AI releases?",
    answer:
      "Yes. The platform is designed to track new model releases, product launches, company announcements and important updates across the ecosystem.",
  },
  {
    question: "Is SourceClip free?",
    answer:
      "The core discovery experience can be available for free. Additional features such as advanced comparisons, saved research and personalized tracking can be introduced later.",
  },
];

const rightQuestions = [
  {
    question: "Can I search for a specific model?",
    answer:
      "Yes. Search can return matching models, organizations, products, releases and research so you can explore an entire topic from one place.",
  },
  {
    question: "Can I compare companies?",
    answer:
      "Yes. Organization profiles can bring together information such as their models, products, releases, research and other publicly available information.",
  },
  {
    question: "Does SourceClip provide AI benchmarks?",
    answer:
      "SourceClip can organize benchmark information from published evaluations. Benchmark results should always be viewed in context because different tests measure different capabilities.",
  },
  {
    question: "Can I follow an AI company?",
    answer:
      "The platform can let you follow organizations and receive or view their latest model releases, product announcements and other important updates.",
  },
  {
    question: "Can I save interesting information?",
    answer:
      "A future Clips feature can let you save models, releases, research and other information so you can return to it later.",
  },
  {
    question: "Can I ask SourceClip questions?",
    answer:
      "Yes. The planned intelligence layer will allow you to ask questions about the AI ecosystem and receive answers connected to structured SourceClip information.",
  },
];

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div
      className={`border-b border-black/[0.08] ${
        isOpen ? "bg-black/[0.015]" : ""
      }`}
    >
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between gap-5 px-4 py-4 text-left transition-colors hover:bg-black/[0.015] sm:px-5"
        aria-expanded={isOpen}
      >
        <span className="text-[11px] font-medium leading-5 text-black/80">
          {question}
        </span>

        <span
          className={`
            flex h-6 w-6 shrink-0 items-center justify-center
            rounded-full border border-black/10
            transition-all duration-300
            ${isOpen ? "rotate-180 bg-black text-white" : "text-black/50"}
          `}
        >
          <FiChevronDown size={12} />
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-4 pb-5 pr-12 text-[10px] leading-5 text-black/45 sm:px-5 sm:pr-14">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (id) => {
    setOpenQuestion((current) =>
      current === id ? null : id
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#fafafa] px-6 py-28">

      {/* Background grid */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-25
          [background-image:linear-gradient(to_right,rgba(0,0,0,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.045)_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

      <div className="relative mx-auto max-w-[1100px]">

        {/* Heading */}
        <div className="border-x border-dashed border-black/10 px-5 pb-8 sm:px-8">

          <p className="text-[10px] font-semibold tracking-[0.2em] text-black/40">
            [ FAQ ]
          </p>

          <h2 className="mt-4 text-4xl font-medium leading-[1.02] tracking-[-0.05em] sm:text-5xl">
            The questions people
            <br />
            actually ask.
          </h2>

          <p className="mt-5 max-w-[590px] text-[14px] leading-6 text-black/50">
            Start with the common questions. If yours isn't here,
            search the ecosystem or ask SourceClip directly.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">

            <button className="flex items-center gap-2 rounded-md bg-black px-4 py-2.5 text-[10px] font-medium text-white transition hover:bg-black/80">
              Ask SourceClip
              <FiArrowRight size={11} />
            </button>

            <button className="flex items-center gap-2 px-2 py-2.5 text-[10px] font-medium text-black/60 transition hover:text-black">
              Browse all questions
              <FiArrowRight size={11} />
            </button>

          </div>
        </div>

        {/* FAQ grid */}
        <div className="grid border-x border-dashed border-black/10 md:grid-cols-2">

          {/* Left */}
          <div className="border-t border-black/[0.08] md:border-r">

            {leftQuestions.map((item, index) => (
              <FAQItem
                key={item.question}
                question={item.question}
                answer={item.answer}
                isOpen={openQuestion === `left-${index}`}
                onClick={() =>
                  toggleQuestion(`left-${index}`)
                }
              />
            ))}

            {/* Ask custom question */}
            <div className="border-b border-black/[0.08] px-4 py-4 sm:px-5">

              <div className="flex items-center gap-2">

                <span className="text-[9px] text-black/30">
                  →
                </span>

                <input
                  type="text"
                  placeholder="Ask a question..."
                  className="min-w-0 flex-1 bg-transparent text-[10px] text-black outline-none placeholder:text-black/25"
                />

                <button className="text-[9px] font-medium text-black/35 transition hover:text-black">
                  Ask
                </button>

              </div>

            </div>
          </div>

          {/* Right */}
          <div className="border-t border-black/[0.08]">

            {rightQuestions.map((item, index) => (
              <FAQItem
                key={item.question}
                question={item.question}
                answer={item.answer}
                isOpen={openQuestion === `right-${index}`}
                onClick={() =>
                  toggleQuestion(`right-${index}`)
                }
              />
            ))}

          </div>
        </div>

        {/* Bottom */}
        <div className="border-x border-b border-dashed border-black/10 px-5 py-7 sm:px-8">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <p className="max-w-[500px] text-[9px] leading-5 text-black/35">
              Can't find what you're looking for? Search SourceClip
              or explore the organizations, models and releases in the
              ecosystem.
            </p>

            <button className="flex items-center gap-2 text-[9px] font-medium">
              Explore SourceClip
              <FiArrowRight size={11} />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}