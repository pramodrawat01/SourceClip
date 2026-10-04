// import {
//   FiArrowUpRight,
//   // FiBuilding,
//   FiSearch,
// } from "react-icons/fi";

// import Breadcrumbs from "../../components/Breadcrumbs";
// import { organizations } from "../../data/organizations";
// import OrganizationCard from "../../components/orgs/OrganizationCard";


// export default function Organizations() {
//   return (
//     <section className="bg-bg">

//       <div className="sc-container py-4">

//         {/* Breadcrumb */}
//         <Breadcrumbs
//           items={[
//             {
//               label: "Organizations",
//             },
//           ]}
//         />

//         {/* Header */}
//         <div className="mt-12 max-w-[750px]">

//           <p className="sc-label text-accent">
//             AI ECOSYSTEM
//           </p>

//           <h1 className="sc-section mt-4">
//             Organizations building
//             <br />
//             the future of AI.
//           </h1>

//           <p className="sc-body mt-6 max-w-[650px] text-text-secondary">
//             Explore the companies and research organizations shaping
//             artificial intelligence — from foundation model labs to
//             emerging AI startups.
//           </p>

//         </div>

//         {/* Search */}
//         <div className="mt-10 flex flex-col gap-3 sm:flex-row">

//           <div className="flex h-12 flex-1 items-center gap-3 rounded-button border border-border bg-surface px-4">

//             <FiSearch
//               size={17}
//               className="text-text-muted"
//             />

//             <input
//               type="text"
//               placeholder="Search organizations..."
//               className="w-full bg-transparent text-sm outline-none placeholder:text-text-muted"
//             />

//           </div>

//           <button className="h-12 rounded-button border border-border bg-surface px-5 text-sm font-medium transition hover:border-black/20">
//             All organizations
//           </button>

//         </div>

//         {/* Results header */}
//         <div className="mt-12 flex items-center justify-between border-b border-border pb-4">

//           <p className="text-sm text-text-secondary">
//             {organizations.length} organizations
//           </p>

//           <button className="text-sm text-text-muted hover:text-text">
//             Recently updated
//           </button>

//         </div>

        
//         <div className="grid w-full grid-cols-1 border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
//           {organizations.map((organization) => (
//             <OrganizationCard
//               key={organization.id}
//               organization={organization}
//             />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }






import { useMemo, useState } from "react";

import {
  FiSearch,
  FiSliders,
} from "react-icons/fi";

import Breadcrumbs from "../../components/Breadcrumbs";

import { organizations } from "../../data/organizations";
import { models } from "../../data/models";
import { products } from "../../data/products";
import { releases } from "../../data/releases";
import { research } from "../../data/research";

import OrganizationCard from "../../components/orgs/OrganizationCard";
import OrganizationEcosystemStats from "../../components/orgs/OrganizationEcosystemStats";
import OrganizationFocusExplorer from "../../components/orgs/OrganizationFocusExplorer";
import FeaturedOrganizations from "../../components/orgs/FeaturedOrganizations";
import OrganizationLandscape from "../../components/orgs/OrganizationLandscape";
import RecentlyUpdatedOrganizations from "../../components/orgs/RecentlyUpdatedOrganizations";

export default function Organizations() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(
      organizations.map(
        (organization) => organization.category
      )
    ),
  ];

  const filteredOrganizations = useMemo(() => {
    const query = search.trim().toLowerCase();

    return organizations.filter((organization) => {

      const matchesSearch =
        !query ||
        organization.name
          .toLowerCase()
          .includes(query) ||
        organization.description
          ?.toLowerCase()
          .includes(query) ||
        organization.focusAreas?.some((area) =>
          area.toLowerCase().includes(query)
        );

      const matchesCategory =
        category === "All" ||
        organization.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <section className="bg-bg">

      <div className="sc-container py-4">

        <Breadcrumbs
          items={[
            {
              label: "Organizations",
            },
          ]}
        />

        {/* HERO */}
        <div className="mt-12 max-w-[750px]">

          <p className="sc-label text-accent">
            AI ECOSYSTEM
          </p>

          <h1 className="sc-section mt-4">
            Organizations building
            <br />
            the future of AI.
          </h1>

          <p className="sc-body mt-6 max-w-[650px] text-text-secondary">
            Explore the companies and research organizations
            shaping artificial intelligence — from foundation
            model labs to emerging AI startups.
          </p>

        </div>

     

        {/* SNAPSHOT */}
        <OrganizationEcosystemStats
          organizations={organizations}
          models={models}
          products={products}
          releases={releases}
          research={research}
        />

           {/* SEARCH */}
        <div className="mt-10 flex flex-col gap-3 lg:flex-row">

          <div className="flex h-12 flex-1 items-center gap-3 rounded-button border border-border bg-surface px-4">

            <FiSearch
              size={17}
              className="text-text-muted"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search organizations, AI areas..."
              className="
                w-full
                bg-transparent
                text-sm
                outline-none
                placeholder:text-text-muted
              "
            />

          </div>

          <div className="flex h-12 items-center gap-2 overflow-x-auto">

            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`
                  whitespace-nowrap
                  rounded-button
                  border
                  px-4
                  py-3
                  text-sm
                  transition
                  ${
                    category === item
                      ? "border-black bg-black text-white"
                      : "border-border bg-surface text-text-secondary hover:border-black/20"
                  }
                `}
              >
                {item}
              </button>
            ))}

          </div>

        </div>

        {/* RESULTS */}
        <div className="mt-4 flex items-center justify-between border-b border-border pb-4">

          <p className="text-sm text-text-secondary">
            {filteredOrganizations.length} organizations
          </p>

          <span className="text-sm text-text-muted">
            {search
              ? `Results for "${search}"`
              : "AI ecosystem"}
          </span>

        </div>

        {/* ORGANIZATION GRID */}
        <div className="grid w-full grid-cols-1 border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">

          {filteredOrganizations.map((organization) => (
            <OrganizationCard
              key={organization.id}
              organization={organization}
            />
          ))}

        </div>

        {filteredOrganizations.length === 0 && (
          <div className="border-x border-b border-border py-20 text-center">
            <p className="text-lg font-medium">
              No organizations found.
            </p>

            <p className="mt-2 text-sm text-text-muted">
              Try another organization or AI focus area.
            </p>
          </div>
        )}

      </div>

      {/* DISCOVERY SECTIONS */}

      <OrganizationFocusExplorer
        organizations={organizations}
      />

      <FeaturedOrganizations
        organizations={organizations}
      />

      <OrganizationLandscape
        organizations={organizations}
      />

      <RecentlyUpdatedOrganizations
        organizations={organizations}
      />

    </section>
  );
}
