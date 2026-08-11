import Link from "next/link";
import { ArrowRight, Calculator } from "lucide-react";
import type { Tool } from "@/lib/tools";

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  const isAvailable = tool.status !== "coming-soon";

  return (
    <div className="group border-b border-gray-200 bg-white p-5 transition-colors hover:bg-gray-50">
      <div className="flex gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-gray-100 text-gray-700">
          <Calculator size={19} strokeWidth={1.7} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-semibold text-gray-950">
              {tool.title}
            </h3>

            {!isAvailable && (
              <span className="border border-gray-200 bg-gray-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gray-500">
                Coming soon
              </span>
            )}
          </div>

          <p className="mt-1.5 max-w-2xl text-sm leading-6 text-gray-600">
            {tool.description}
          </p>

          {isAvailable ? (
            <Link
              href={tool.href}
              className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-teal-700 hover:text-teal-900"
            >
              Open tool
              <ArrowRight size={13} />
            </Link>
          ) : (
            <span className="mt-3 inline-block text-xs font-medium text-gray-400">
              Coming soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
}