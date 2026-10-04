import { FiCheck } from "react-icons/fi";

export default function CapabilityMatrix({
  organization,
  capabilityCatalog = [],
  organizationCapabilities = {},
}) {
  if (!organization) return null;

  const supported =
    organizationCapabilities[organization.id] || [];

  return (
    <section className="border-t border-border">
      <div className="sc-container py-16">

        {/* HEADER */}
        <div className="max-w-2xl">
          <p className="sc-label text-accent">
            CAPABILITIES
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            AI capabilities
          </h2>

          <p className="mt-3 text-text-secondary">
            A high-level view of the AI capabilities represented
            across {organization.name}&apos;s ecosystem.
          </p>
        </div>

        {/* CAPABILITY LIST */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-border">
          {capabilityCatalog.length === 0 ? (
            <div className="p-6 text-sm text-text-muted">
              No capability information available.
            </div>
          ) : (
            capabilityCatalog.map((capability) => {
              const isSupported =
                supported.includes(capability);

              return (
                <div
                  key={capability}
                  className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-border
                    px-5
                    py-4
                    last:border-b-0
                    sm:px-6
                  "
                >
                  <span className="text-sm font-medium">
                    {capability}
                  </span>

                  {isSupported ? (
                    <span className="flex items-center gap-2 text-sm">
                      <span
                        className="
                          flex
                          h-6
                          w-6
                          items-center
                          justify-center
                          rounded-full
                          bg-black
                          text-white
                        "
                      >
                        <FiCheck size={13} />
                      </span>

                      Supported
                    </span>
                  ) : (
                    <span className="text-sm text-text-muted">
                      —
                    </span>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}