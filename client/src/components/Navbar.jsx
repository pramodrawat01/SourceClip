import { useEffect, useState } from "react";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";

const menuItems = {
  Explore: {
    columns: [
      {
        title: "AI ECOSYSTEM",
        items: [
          {
            title: "Organizations",
            description: "Explore leading AI companies and research labs",
          },
          {
            title: "Models",
            description: "Discover the latest AI models",
          },
          {
            title: "Products",
            description: "AI products, tools and platforms",
          },
        ],
      },
      {
        title: "DISCOVER",
        items: [
          {
            title: "Latest Launches",
            description: "Recently released AI models and products",
          },
          {
            title: "Trending",
            description: "What's getting attention across AI",
          },
          {
            title: "Compare Models",
            description: "Compare capabilities and specifications",
          },
        ],
      },
    ],
  },

  Models: {
    columns: [
      {
        title: "MODELS",
        items: [
          {
            title: "All Models",
            description: "Browse the complete model directory",
          },
          {
            title: "Latest Models",
            description: "Recently released models",
          },
          {
            title: "Open Source",
            description: "Explore open-source AI models",
          },
        ],
      },
      {
        title: "CAPABILITIES",
        items: [
          {
            title: "Reasoning",
            description: "Models built for complex reasoning",
          },
          {
            title: "Multimodal",
            description: "Text, image, audio and video models",
          },
          {
            title: "Coding",
            description: "AI models focused on software development",
          },
        ],
      },
    ],
  },

  Releases: {
    columns: [
      {
        title: "LATEST",
        items: [
          {
            title: "Latest Releases",
            description: "The newest AI model releases",
          },
          {
            title: "Release Timeline",
            description: "Follow the evolution of AI models",
          },
          {
            title: "Changelog",
            description: "Updates and changes to existing models",
          },
        ],
      },
      {
        title: "TRACK",
        items: [
          {
            title: "Model Updates",
            description: "Track changes across models",
          },
          {
            title: "Company Updates",
            description: "Follow important organization updates",
          },
        ],
      },
    ],
  },

  Research: {
    columns: [
      {
        title: "RESEARCH",
        items: [
          {
            title: "Research Papers",
            description: "Explore important AI research",
          },
          {
            title: "Benchmarks",
            description: "Compare model performance",
          },
          {
            title: "Trends",
            description: "Understand where AI research is heading",
          },
        ],
      },
    ],
  },
};

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const isMenuOpen = activeMenu !== null;

  /* =========================
     SCROLL DETECTION
  ========================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        fixed left-0 top-0 z-50 w-full
        transition-all duration-500 ease-out
        ${scrolled ? "px-0 pt-4" : "px-0 pt-0"}
      `}
      onMouseLeave={() => setActiveMenu(null)}
    >
      {/* =========================
          MAIN NAVBAR
      ========================= */}

      <div
        className={`
          border-b border-black/5
          bg-white/90
          backdrop-blur-xl
          transition-all duration-500 ease-out

          ${
            scrolled
              ? `
                mx-auto
                max-w-[1200px]
                rounded-full
                border
                border-black/10
                shadow-[0_10px_30px_rgba(0,0,0,0.08)]
              `
              : `
                w-full
              `
          }
        `}
      >
        <div className="mx-auto flex h-[76px] max-w-[1200px] items-center justify-between px-6">

          {/* =========================
              LOGO
          ========================= */}

          <div className="flex items-center gap-3">
            <Link to="/" className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-sm font-bold text-white">
              SC
            </Link>

            <span className="text-[17px] font-semibold tracking-tight">
              SourceClip
            </span>
          </div>

          {/* =========================
              NAVIGATION
          ========================= */}

          <nav className="hidden items-center gap-1 md:flex">
            {Object.keys(menuItems).map((item) => (
              <button
                key={item}
                onMouseEnter={() => setActiveMenu(item)}
                className={`
                  flex items-center gap-1
                  rounded-lg px-4 py-2
                  text-[14px] font-medium
                  transition

                  ${
                    activeMenu === item
                      ? "bg-black/[0.05] text-black"
                      : "text-black/60 hover:text-black"
                  }
                `}
              >
                {item}

                <FiChevronDown
                  size={14}
                  className={`
                    transition-transform duration-200
                    ${
                      activeMenu === item
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />
              </button>
            ))}

            <button className="rounded-lg px-4 py-2 text-[14px] font-medium text-black/60 transition hover:text-black">
              News
            </button>
          </nav>

          {/* =========================
              RIGHT SIDE
          ========================= */}

          <div className="flex items-center gap-3">

            {/* Search */}

            <button
              className="
                hidden rounded-lg p-2
                text-black/60
                transition
                hover:bg-black/5
                hover:text-black
                sm:block
              "
            >
              <FiSearch size={19} />
            </button>

            {/* Sign in */}

            <button
              className="
                hidden rounded-lg
                border border-black/10
                bg-white
                px-4 py-2
                text-sm font-medium
                transition
                hover:border-black/20
                sm:block
              "
            >
              Sign in
            </button>

            {/* CTA */}

            <button
              className="
                rounded-lg
                bg-black
                px-5 py-2.5
                text-sm font-medium
                text-white
                transition
                hover:bg-black/80
              "
            >
              Explore AI
            </button>

          </div>
        </div>
      </div>

      {/* =========================
          MEGA MENU
      ========================= */}

      <div
        className={`
          overflow-hidden
          border-b border-black/10
          bg-[#0b0b0b]
          text-white
          transition-all
          duration-300
          ease-out

          ${
            isMenuOpen
              ? "max-h-[430px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div className="mx-auto max-w-[1200px] px-6 py-10">

          {activeMenu && (
            <div className="grid grid-cols-[1fr_1fr_280px] gap-12">

              {/* =========================
                  MENU COLUMNS
              ========================= */}

              {menuItems[activeMenu].columns.map(
                (column, index) => (
                  <div key={index}>

                    <p className="mb-5 text-[11px] font-semibold tracking-[0.18em] text-white/40">
                      {column.title}
                    </p>

                    <div className="space-y-1">

                      {column.items.map((item) => (
                        <Link
                          to="/organizations"
                          key={item.title}
                          className="
                            group block
                            rounded-xl
                            px-3 py-3
                            transition
                            hover:bg-white/[0.06]
                          "
                        >
                          <div className="text-[15px] font-medium text-white">
                            {item.title}
                          </div>

                          <div className="mt-1 max-w-[300px] text-[13px] leading-5 text-white/45 transition group-hover:text-white/65">
                            {item.description}
                          </div>
                        </Link>
                      ))}

                    </div>
                  </div>
                )
              )}

              {/* =========================
                  FEATURED CARD
              ========================= */}

              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6">

                <div className="mb-8 inline-flex rounded-full bg-white px-3 py-1 text-[10px] font-bold tracking-widest text-black">
                  AI INTELLIGENCE
                </div>

                <h3 className="text-xl font-semibold tracking-tight">
                  Explore the AI ecosystem
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/45">
                  Discover organizations, models, products and the
                  latest developments shaping artificial intelligence.
                </p>

                <button className="mt-8 text-sm font-medium text-white transition hover:text-white/60">
                  Start exploring →
                </button>

              </div>

            </div>
          )}

        </div>
      </div>
    </header>
  );
}