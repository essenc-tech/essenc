import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: Breadcrumb[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 overflow-x-auto text-xs">
      <Link
        href="/"
        className="shrink-0 text-gray-500 hover:text-gray-900"
      >
        Home
      </Link>

      {items.map((item, index) => (
        <div
          key={`${item.label}-${index}`}
          className="flex shrink-0 items-center gap-1.5"
        >
          <ChevronRight size={13} className="text-gray-400" />

          {item.href ? (
            <Link
              href={item.href}
              className="text-gray-500 hover:text-gray-900"
            >
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-gray-700">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}