import { FiArrowUpRight, FiChevronRight } from "react-icons/fi";
import {Link} from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#fafafa]">

      {/* Grid Background */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-[0.45]
          [background-image:linear-gradient(to_right,rgba(0,0,0,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.045)_1px,transparent_1px)]
          [background-size:48px_48px]
          [mask-image:linear-gradient(to_bottom,black_0%,black_45%,transparent_90%)]
        "
      />

      {/* Radial fade */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#fafafa_72%)]" />

      <div className="relative mx-auto flex max-w-[1100px] flex-col items-center px-6 pt-24 text-center">

        {/* Eyebrow */}
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-medium text-black/60 shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-black" />

          The intelligence layer for AI

          <FiArrowUpRight size={13} />
        </div>

        {/* Heading */}
        <h1 className="max-w-[1000px] text-[clamp(3rem,6.5vw,6rem)] font-medium leading-[0.98] tracking-[-0.065em] text-[#0b0b0b]">

          Everything happening
          <br />

          in{" "}
          <span className="relative inline-block">
            <span className="relative z-10">
              AI.
            </span>

            <span className="absolute -bottom-1 left-0 -z-0 h-[20px] w-full bg-[#d9ff3f]" />
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-[620px] text-[17px] leading-7 tracking-[-0.01em] text-black/55">
          Discover AI organizations, models, products and launches.
          Track the companies and technologies shaping the future of
          artificial intelligence.
        </p>

        {/* Buttons */}
        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <Link
          to="/organizations">

            <button className="group flex items-center gap-2 rounded-lg bg-black px-6 py-3.5 text-sm font-medium text-white transition hover:bg-black/80">
              Explore AI

              <FiArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </Link>

          <button className="flex items-center gap-2 rounded-lg border border-black/10 bg-white px-6 py-3.5 text-sm font-medium text-black transition hover:border-black/20 hover:bg-black/[0.02]">
            View latest launches

            <FiChevronRight size={15} />
          </button>
        </div>

        {/* Small trust/info row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-black/45">
          <span>500+ Organizations</span>

          <span className="h-1 w-1 rounded-full bg-black/20" />

          <span>2,000+ Models</span>

          <span className="h-1 w-1 rounded-full bg-black/20" />

          <span>10,000+ AI Updates</span>
        </div>
      </div>

      
    </section>
  );
}