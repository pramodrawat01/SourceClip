import { FiChevronRight, FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Breadcrumbs({ items = [] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-2 overflow-x-auto whitespace-nowrap text-sm"
    >
      {/* Home */}
      <Link
        to="/"
        className="flex shrink-0 items-center text-text-muted transition hover:text-text"
      >
        <FiHome size={16} />
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div
            key={`${item.label}-${index}`}
            className="flex shrink-0 items-center gap-2"
          >
            <FiChevronRight
              size={15}
              className="text-text-muted"
            />

            {isLast || !item.to ? (
              <span
                className={
                  isLast
                    ? "text-text"
                    : "text-text-secondary"
                }
              >
                {item.label}
              </span>
            ) : (
              <Link
                to={item.to}
                className="text-text-secondary transition hover:text-text"
              >
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}