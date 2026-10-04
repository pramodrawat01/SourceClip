import {
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiSearch,
  FiTwitter,
} from "react-icons/fi";

const footerColumns = [
  {
    title: "EXPLORE",
    links: [
      "Organizations",
      "Models",
      "Products",
      "Latest Releases",
      "AI News",
      "Research",
    ],
  },
  {
    title: "DISCOVER",
    links: [
      "Trending AI",
      "Model Comparisons",
      "Benchmarks",
      "AI Companies",
      "AI Tools",
      "AI Trends",
    ],
  },
  {
    title: "RESOURCES",
    links: [
      "AI Glossary",
      "Guides",
      "Research",
      "Documentation",
      "API",
      "FAQ",
    ],
  },
  {
    title: "SOURCECLIP",
    links: [
      "About",
      "How it works",
      "Changelog",
      "Contact",
      "Suggest a source",
      "Report an issue",
    ],
  },
  {
    title: "COMPANY",
    links: [
      "About",
      "Careers",
      "Contact",
      "Privacy",
      "Terms",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#fafafa] px-6 pb-8 pt-20">

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

      <div className="relative mx-auto max-w-[1100px]">

        {/* CTA */}
        <div className="border-x border-dashed border-black/10 px-5 pb-16 pt-8 text-center sm:px-8">

          {/* Badge */}
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 shadow-sm">

            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-[9px] font-bold text-white">
              SC
            </span>

            <span className="text-xs font-medium text-black/50">
              AI intelligence, all in one place
            </span>

          </div>

          {/* Heading */}
          <h2 className="mx-auto mt-7 max-w-[650px] text-4xl font-medium leading-[1.05] tracking-[-0.05em] sm:text-5xl">

            Know what's happening
            <br />

            <span className="text-black/40">
              in AI.
            </span>

          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-[550px] text-base leading-7 text-black/45">
            Discover companies, compare models, follow releases and
            understand the technology shaping the future.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">

            <button className="group flex items-center gap-2 rounded-lg bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-black/80">

              Explore SourceClip

              <FiArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
              />

            </button>

            <button className="flex items-center gap-2 rounded-lg border border-black/10 bg-white px-5 py-3 text-sm font-medium text-black/60 transition hover:border-black/20 hover:text-black">

              <FiSearch size={14} />

              Explore the AI ecosystem

            </button>

          </div>

        </div>

        {/* Footer navigation */}
        <div className="border border-black/[0.08] bg-white">

          {/* Newsletter */}
          <div className="flex flex-col gap-5 border-b border-black/[0.08] bg-[#fffdfa] px-6 py-7 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <p className="text-sm font-semibold">
                Stay informed about AI.
              </p>

              <p className="mt-1.5 text-sm text-black/40">
                New models, releases and important developments.
              </p>

            </div>

            <div className="flex h-11 w-full max-w-[340px] items-center rounded-md border border-black/10 bg-white px-3">

              <FiMail
                size={15}
                className="mr-2.5 shrink-0 text-black/30"
              />

              <input
                type="email"
                placeholder="Your email address"
                className="
                  min-w-0
                  flex-1
                  bg-transparent
                  text-sm
                  outline-none
                  placeholder:text-black/25
                "
              />

              <button className="ml-2 flex h-7 w-7 shrink-0 items-center justify-center rounded bg-black text-white transition hover:bg-black/80">
                <FiArrowRight size={13} />
              </button>

            </div>

          </div>

          {/* Link columns */}
          <div className="grid sm:grid-cols-2 md:grid-cols-5">

            {footerColumns.map((column, index) => (
              <div
                key={column.title}
                className={`
                  border-b
                  border-black/[0.08]
                  px-6
                  py-8
                  md:border-b-0
                  md:border-r
                  ${index === footerColumns.length - 1 ? "md:border-r-0" : ""}
                `}
              >

                {/* Column title */}
                <p className="text-xs font-semibold tracking-[0.18em] text-black/35">
                  {column.title}
                </p>

                {/* Links */}
                <div className="mt-5 space-y-3">

                  {column.links.map((link) => (
                    <a
                      href="#"
                      key={link}
                      className="
                        block
                        text-sm
                        text-black/55
                        transition
                        hover:text-black
                      "
                    >
                      {link}
                    </a>
                  ))}

                </div>

              </div>
            ))}

          </div>

          {/* Bottom bar */}
          <div className="flex flex-col gap-6 border-t border-black/[0.08] px-6 py-6 sm:flex-row sm:items-center sm:justify-between">

            {/* Logo */}
            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-black text-[9px] font-bold text-white">
                SC
              </div>

              <div>

                <p className="text-sm font-semibold">
                  SourceClip
                </p>

                <p className="mt-1 text-xs text-black/30">
                  © 2026 SourceClip. All rights reserved.
                </p>

              </div>

            </div>

            {/* Bottom links */}
            <div className="flex flex-wrap items-center gap-5 text-xs text-black/40">

              <a href="#" className="transition hover:text-black">
                Privacy
              </a>

              <a href="#" className="transition hover:text-black">
                Terms
              </a>

              <a href="#" className="transition hover:text-black">
                Cookies
              </a>

              <a href="#" className="transition hover:text-black">
                Contact
              </a>

            </div>

            {/* Social */}
            <div className="flex items-center gap-2">

              <a
                href="#"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-md
                  border
                  border-black/10
                  text-black/40
                  transition
                  hover:bg-black
                  hover:text-white
                "
                aria-label="GitHub"
              >
                <FiGithub size={15} />
              </a>

              <a
                href="#"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-md
                  border
                  border-black/10
                  text-black/40
                  transition
                  hover:bg-black
                  hover:text-white
                "
                aria-label="Twitter"
              >
                <FiTwitter size={15} />
              </a>

              <a
                href="#"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-md
                  border
                  border-black/10
                  text-black/40
                  transition
                  hover:bg-black
                  hover:text-white
                "
                aria-label="LinkedIn"
              >
                <FiLinkedin size={15} />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom mark */}
        <div className="flex justify-center py-8">

          <div className="flex items-center gap-3 text-xs text-black/25">

            <span className="h-1.5 w-1.5 rounded-full bg-black/20" />

            <span>
              Built for people navigating AI
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-black/20" />

          </div>

        </div>

      </div>
    </footer>
  );
}