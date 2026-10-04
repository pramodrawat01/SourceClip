import { useMemo } from "react";
import { useParams } from "react-router-dom";

import Breadcrumbs from "../../components/Breadcrumbs";
import { organizations } from "../../data/organizations";
import { models } from "../../data/models";
import { products } from "../../data/products";
import { releases } from "../../data/releases";
import { research } from "../../data/research";
import { news } from "../../data/news";
import { capabilityCatalog, organizationCapabilities } from "../../data/capabilities";
import { organizationInsights } from "../../data/organizationInsights";
import { organizationRelations } from "../../data/organizationRelations";
import { organizationResources } from "../../data/organizationResources";

import OrganizationHero from "./OrganizationHero";
import OrganizationSnapshot from "./OrganizationSnapshot";
import OrganizationAbout from "./OrganizationAbout";
import OrganizationFocus from "./OrganizationFocus";
import OrganizationModels from "./OrganizationModels";
import OrganizationProducts from "./OrganizationProducts";
import OrganizationTimeline from "./OrganizationTimeline";
import OrganizationResearch from "./OrganizationResearch";
import OrganizationNews from "./OrganizationNews";
import CapabilityMatrix from "./CapabilityMatrix";
import OrganizationPositioning from "./OrganizationPositioning";
import RelatedOrganizations from "./RelatedOrganizations";
import OrganizationResources from "./OrganizationResources";

export default function OrganizationDetails() {
  const { organizationId } = useParams();

  const organization = organizations.find((org) => org.id === organizationId);

  const organizationModels = useMemo(
    () => models.filter((item) => item.organizationId === organizationId),
    [organizationId]
  );

  const organizationProducts = useMemo(
    () => products.filter((item) => item.organizationId === organizationId),
    [organizationId]
  );

  const organizationReleases = useMemo(
    () => releases
      .filter((item) => item.organizationId === organizationId)
      .sort((a,b) => new Date(b.date) - new Date(a.date)),
    [organizationId]
  );

  const organizationResearch = useMemo(
    () => research
      .filter((item) => item.organizationId === organizationId)
      .sort((a,b) => new Date(b.publishedAt) - new Date(a.publishedAt)),
    [organizationId]
  );

  const organizationNews = useMemo(
    () => news
      .filter((item) => item.organizationId === organizationId)
      .sort((a,b) => new Date(b.publishedAt) - new Date(a.publishedAt)),
    [organizationId]
  );

  const resources = organizationResources.filter(
    (item) => item.organizationId === organizationId
  );

  if (!organization) {
    return (
      <section className="sc-container py-32">
        <p className="sc-label text-accent">404</p>
        <h1 className="mt-4 text-4xl font-semibold">Organization not found</h1>
        <p className="mt-4 text-text-secondary">
          The organization you are looking for does not exist.
        </p>
      </section>
    );
  }

  return (
    <section className="bg-bg">
      <Breadcrumbs
        items={[
          { label: "Organizations", to: "/organizations" },
          { label: organization.name },
        ]}
      />

      <OrganizationHero organization={organization} />

      <OrganizationSnapshot
        modelsCount={organizationModels.length}
        productsCount={organizationProducts.length}
        releasesCount={organizationReleases.length}
        researchCount={organizationResearch.length}
      />

      <OrganizationAbout organization={organization} />
      <OrganizationFocus organization={organization} />

      <OrganizationModels
        organization={organization}
        models={organizationModels}
      />

      <OrganizationProducts
        organization={organization}
        products={organizationProducts}
      />

      <OrganizationTimeline releases={organizationReleases} />
      <OrganizationResearch research={organizationResearch} />
      <OrganizationNews news={organizationNews} />

      <CapabilityMatrix
        organization={organization}
        capabilityCatalog={capabilityCatalog}
        organizationCapabilities={organizationCapabilities}
      />

      <OrganizationPositioning
        insight={organizationInsights[organizationId]}
      />

      <RelatedOrganizations
        organization={organization}
        organizations={organizations}
        relations={organizationRelations}
      />

      <OrganizationResources resources={resources} />
    </section>
  );
}