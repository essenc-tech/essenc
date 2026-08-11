import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { tools } from "@/lib/tools";

interface RelatedToolsProps {
  hrefs: string[];
}

export default function RelatedTools({
  hrefs,
}: RelatedToolsProps) {
  const relatedTools = hrefs
    .map((href) => tools.find((tool) => tool.href === href))
    .filter(Boolean);

  if (relatedTools.length === 0) {
    return null;
  }

  return (
    <section className="mt-14 border-t border-gray-200 pt-10">
      <h2 className="text-xl font-bold tracking-tight text-gray-950">
        Related tools
      </h2>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {relatedTools.map((tool) =>
          tool ? (
            <Link
              key={tool.href}
              href={tool.href}
              className="group border border-gray-200 bg-white p-5 transition-colors hover:border-gray-400 hover:bg-gray-50"
            >
              <h3 className="font-semibold text-gray-950">
                {tool.title}
              </h3>

              <p className="mt-1.5 text-sm leading-6 text-gray-600">
                {tool.description}
              </p>

              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-teal-700">
                Open tool
                <ArrowRight
                  size={13}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          ) : null
        )}
      </div>
    </section>
  );
}