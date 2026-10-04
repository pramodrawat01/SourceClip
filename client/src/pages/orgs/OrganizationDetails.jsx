// import { FiArrowUpRight, FiExternalLink } from "react-icons/fi";
// import { Link, useParams } from "react-router-dom";

// import Breadcrumbs from "../../components/Breadcrumbs";
// import { organizations } from "../../data/organizations";
// import { models } from "../../data/models";
// import { products } from "../../data/products";
// import { releases } from "../../data/releases";

// export default function OrganizationDetails() {
//   const { organizationId } = useParams();

//   const organization = organizations.find(
//     (org) => org.id === organizationId
//   );

//   if (!organization) {
//     return (
//       <section className="sc-container py-20">
//         <h1 className="sc-section">
//           Organization not found
//         </h1>
//       </section>
//     );
//   }

//   const organizationModels = models.filter(
//     (model) => model.organizationId === organizationId
//   );

//   const organizationProducts = products.filter(
//     (product) =>
//       product.organizationId === organizationId
//   );

//   const organizationReleases = releases.filter(
//     (release) =>
//       release.organizationId === organizationId
//   );

//   return (
//     <section className="bg-bg">

//       <div className="sc-container py-4">

//         {/* Breadcrumb */}
//         <Breadcrumbs
//           items={[
//             {
//               label: "Organizations",
//               to: "/organizations",
//             },
//             {
//               label: organization.name,
//             },
//           ]}
//         />

//         {/* =========================
//             ORGANIZATION HEADER
//         ========================= */}

//         <div className="mt-12 border-b border-border pb-12">

//           <div className="flex flex-col justify-between gap-8 md:flex-row">

//             <div className="max-w-[750px]">

//               <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-lg font-semibold text-white">
//                 {organization.name
//                   .slice(0, 2)
//                   .toUpperCase()}
//               </div>

//               <p className="sc-label mt-8 text-accent">
//                 {organization.category}
//               </p>

//               <h1 className="sc-section mt-3">
//                 {organization.name}
//               </h1>

//               <p className="sc-body mt-5 max-w-[650px] text-text-secondary">
//                 {organization.description}
//               </p>

//             </div>

//             <div className="flex items-start">

//               <a
//                 href={organization.website}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="sc-button sc-button-secondary"
//               >
//                 Visit website
//                 <FiExternalLink size={13} />
//               </a>

//             </div>

//           </div>


//           {/* Organization metadata */}

//           <div className="mt-10 grid border-t border-border pt-6 sm:grid-cols-3">

//             <div>
//               <p className="text-xs text-text-muted">
//                 Founded
//               </p>

//               <p className="mt-1 text-sm font-medium">
//                 {organization.founded}
//               </p>
//             </div>

//             <div className="mt-5 border-t border-border pt-5 sm:mt-0 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
//               <p className="text-xs text-text-muted">
//                 Headquarters
//               </p>

//               {/* <p className="mt-1 text-sm font-medium">
//                 {organization.headquarters}
//               </p> */}
//             </div>

//             <div className="mt-5 border-t border-border pt-5 sm:mt-0 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
//               <p className="text-xs text-text-muted">
//                 Models
//               </p>

//               <p className="mt-1 text-sm font-medium">
//                 {organizationModels.length}
//               </p>
//             </div>

//           </div>

//         </div>


//         {/* =========================
//             MODELS
//         ========================= */}

//         <section className="border-b border-border py-14">

//           <div className="flex items-end justify-between">

//             <div>
//               <p className="sc-label text-text-muted">
//                 MODELS
//               </p>

//               <h2 className="sc-card-title mt-3">
//                 Models by {organization.name}
//               </h2>
//             </div>

//             <Link
//               to={`/organizations/${organization.id}/models`}
//               className="hidden items-center gap-2 text-sm font-medium sm:flex"
//             >
//               View all
//               <FiArrowUpRight size={14} />
//             </Link>

//           </div>


//           <div className="mt-7 grid border-l border-border sm:grid-cols-2 lg:grid-cols-3">

//             {organizationModels.slice(0, 3).map((model) => (
//               <Link
//                 key={model.id}
//                 to={`/organizations/${organization.id}/models/${model.id}`}
//                 className="group border-b border-r border-border bg-surface p-5 transition hover:bg-[#fcfcfc]"
//               >
//                 <div className="flex justify-between">

//                   <h3 className="font-medium">
//                     {model.name}
//                   </h3>

//                   <FiArrowUpRight
//                     size={15}
//                     className="text-text-muted transition group-hover:text-text"
//                   />

//                 </div>

//                 <p className="sc-small mt-3 text-text-secondary">
//                   {model.description}
//                 </p>
//               </Link>
//             ))}

//           </div>

//         </section>


//         {/* =========================
//             PRODUCTS
//         ========================= */}

//         <section className="border-b border-border py-14">

//           <p className="sc-label text-text-muted">
//             PRODUCTS
//           </p>

//           <h2 className="sc-card-title mt-3">
//             Products
//           </h2>

//           <div className="mt-7 grid border-l border-border sm:grid-cols-2">

//             {organizationProducts.map((product) => (
//               <Link
//                 key={product.id}
//                 to={`/organizations/${organization.id}/products/${product.id}`}
//                 className="group border-b border-r border-border bg-surface p-6"
//               >
//                 <div className="flex justify-between">

//                   <h3 className="font-medium">
//                     {product.name}
//                   </h3>

//                   <FiArrowUpRight
//                     size={15}
//                     className="text-text-muted"
//                   />

//                 </div>

//                 <p className="sc-small mt-3 text-text-secondary">
//                   {product.description}
//                 </p>

//               </Link>
//             ))}

//           </div>

//         </section>


//         {/* =========================
//             RELEASES
//         ========================= */}

//         <section className="py-14">

//           <p className="sc-label text-text-muted">
//             LATEST
//           </p>

//           <h2 className="sc-card-title mt-3">
//             Latest releases
//           </h2>

//           <div className="mt-7">

//             {organizationReleases.map((release) => (
//               <Link
//                 key={release.id}
//                 to={`/organizations/${organization.id}/releases/${release.id}`}
//                 className="group flex flex-col gap-3 border-t border-border py-5 sm:flex-row sm:items-center sm:justify-between"
//               >

//                 <div>
//                   <h3 className="font-medium group-hover:underline">
//                     {release.title}
//                   </h3>

//                   <p className="sc-small mt-1 text-text-secondary">
//                     {release.description}
//                   </p>
//                 </div>

//                 <span className="text-xs text-text-muted">
//                   {release.date}
//                 </span>

//               </Link>
//             ))}

//           </div>

//         </section>

//       </div>

//     </section>
//   );
// }


import { FiArrowUpRight, FiExternalLink } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";

import Breadcrumbs from "../../components/Breadcrumbs";
import { organizations } from "../../data/organizations";
import { models } from "../../data/models";
import { products } from "../../data/products";
import { releases } from "../../data/releases";
import { research } from "../../data/research";
import { news } from "../../data/news";


import OrganizationSnapshot from "../../components/orgs/OrganizationSnapshot";
import OrganizationAbout from "../../components/orgs/OrganizationAbout";
import OrganizationFocus from "../../components/orgs/OrganizationFocus";
import OrganizationModels from "../../components/orgs/OrganizationModels";
import OrganizationTimeline from "../../components/orgs/OrganizationTimeline";
import OrganizationResearch from "../../components/orgs/OrganizationResearch";
import OrganizationNews from "../../components/orgs/OrganizationNews";
import CapabilityMatrix from "../../components/orgs/CapabilityMatrix";
import RelatedOrganizations from "../../components/orgs/RelatedOrganizations";
import OrganizationResources from "../../components/orgs/OrganizationResources";
import OrganizationHero from "../../components/orgs/OrganizationHero";



import {
  capabilityCatalog,
  organizationCapabilities,
} from "../../data/capabilities";

import { organizationInsights } from "../../data/organizationInsights";

import { organizationRelations } from "../../data/organizationRelations";

import { organizationResources } from "../../data/organizationResources";


export default function OrganizationDetails() {
  const { organizationId } = useParams();

  const organization = organizations.find(
    (org) => org.id === organizationId
  );
  console.log(organization)

  if (!organization) {
    return <div>org not found</div>
    // <OrganizationNotFound />;
  }

  const organizationModels = models.filter(
    (model) => model.organizationId === organization.id
  );

  const organizationProducts = products.filter(
    (product) => product.organizationId === organization.id
  );

  const organizationReleases = releases.filter(
    (release) => release.organizationId === organization.id
  );

  const organizationResearch = research.filter(
    (item) => item.organizationId === organization.id
  );

  const organizationNews = news.filter(
    (item) => item.organizationId === organization.id
  );

  const resources = organizationResources.filter(
  (resource) =>
    resource.organizationId === organizationId
);

  return (
    <section className="bg-bg border">

      <div className="py-4 sc-container">
        <Breadcrumbs
          items={[
            {
              label: "Organizations",
              to: "/organizations",
            },
            {
              label: organization.name,
            },
          ]}
        />
      </div>

      <OrganizationHero
        organization={organization}
      />

      <OrganizationSnapshot
        modelsCount={organizationModels.length}
        productsCount={organizationProducts.length}
        releasesCount={organizationReleases.length}
        researchCount={organizationResearch.length}
      />

      <OrganizationAbout
        organization={organization}
      />

      <OrganizationFocus
        organization={organization}
      />

      <OrganizationModels
        organization={organization}
        models={organizationModels}
      />

      <organizationProducts
        organization={organization}
        products={organizationProducts}
      />

      <OrganizationTimeline
        releases={organizationReleases}
      />

      <OrganizationResearch
        research={organizationResearch}
      />

      <OrganizationNews
        news={organizationNews}
      />

      <CapabilityMatrix
  organization={organization}
  capabilityCatalog={capabilityCatalog}
  organizationCapabilities={organizationCapabilities}
/>
      {/* <RelatedOrganizations
        organization={organization}
      /> */}

    <RelatedOrganizations
  organization={organization}
  organizations={organizations}
  relations={organizationRelations}
/>

    </section>
  );
}