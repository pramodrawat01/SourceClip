import {
  FiBox,
  FiCpu,
  FiFileText,
  FiLayers,
  FiTrendingUp,
} from "react-icons/fi";

export default function OrganizationEcosystemStats({
  organizations = [],
  models = [],
  products = [],
  releases = [],
  research = [],
}) {
  const stats = [
    {
      label: "Organizations",
      value: organizations.length,
      icon: FiLayers,
    },
    {
      label: "AI Models",
      value: models.length,
      icon: FiCpu,
    },
    {
      label: "Products",
      value: products.length,
      icon: FiBox,
    },
    {
      label: "Releases",
      value: releases.length,
      icon: FiTrendingUp,
    },
    {
      label: "Research",
      value: research.length,
      icon: FiFileText,
    },
  ];

  return (
    <section className="sc-container py-12">
      <div className="grid grid-cols-2 border-l border-t border-border sm:grid-cols-3 lg:grid-cols-5">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="
                border-b
                border-r
                border-border
                p-6
                transition
                hover:bg-surface
              "
            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-text-muted">
                  {stat.label}
                </p>

                <Icon
                  size={17}
                  className="text-text-muted"
                />
              </div>

              <p className="mt-6 text-3xl font-semibold tracking-tight">
                {stat.value}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}