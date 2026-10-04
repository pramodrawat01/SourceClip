import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function OrganizationCard({ organization }) {
  return (
    <Link
      to={`/organizations/${organization.id}`}
      className="
        group block
        border-b border-r border-border
        bg-surface
        p-6
        transition
        hover:bg-[#fcfcfc]
      "
    >
      {/* Top */}
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black text-sm font-semibold text-white">
          {organization.name.slice(0, 2).toUpperCase()}
        </div>

        <FiArrowUpRight
          size={17}
          className="
            text-text-muted
            transition
            group-hover:-translate-y-0.5
            group-hover:translate-x-0.5
            group-hover:text-text
          "
        />
      </div>

      {/* Content */}
      <div className="mt-7">
        <h2 className="sc-card-title">
          {organization.name}
        </h2>

        <span className="mt-2 inline-block rounded-full bg-black/[0.04] px-2.5 py-1 text-[10px] font-medium text-text-secondary">
          {organization.category}
        </span>

        <p className="sc-body mt-4 text-text-secondary">
          {organization.description}
        </p>
      </div>

      {/* Stats */}
      <div className="mt-7 flex border-t border-border pt-4">
        <div className="flex-1">
          <p className="text-xs text-text-muted">
            Models
          </p>

          <p className="mt-1 text-sm font-medium">
            {organization.models}
          </p>
        </div>

        <div className="flex-1 border-l border-border pl-5">
          <p className="text-xs text-text-muted">
            Products
          </p>

          <p className="mt-1 text-sm font-medium">
            {organization.products}
          </p>
        </div>
      </div>
    </Link>
  );
}