import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ToolCard from "@/components/tools/tool-card";
import type { Tool } from "@/lib/tools";

interface CategoryPageProps {
  title: string;
  description: string;
  tools: Tool[];
}

export default function CategoryPage({
  title,
  description,
  tools,
}: CategoryPageProps) {
  return (
    <>
      <section className="border-b border-gray-200 bg-white">
        <div className="container-shell py-12 sm:py-16">
          <Link
            href="/tools"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-gray-900"
          >
            <ArrowLeft size={14} />
            All tools
          </Link>

          <div className="mt-7 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Essenc Tools
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-[-0.025em] text-gray-950 sm:text-4xl">
              {title}
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
              {description}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="container-shell py-10 sm:py-14">
          <div className="flex flex-col gap-2 border-b border-gray-200 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-950">
                Tools
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                {tools.length} tools in this category
              </p>
            </div>
          </div>

          <div className="mt-6 border-t border-gray-200 bg-white">
            {tools.map((tool) => (
              <ToolCard key={tool.href} tool={tool} />
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-950"
            >
              Browse all tools
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}