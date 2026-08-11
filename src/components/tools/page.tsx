import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ToolCard from "@/components/tools/tool-card";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
  title: "All Tools",
  description:
    "Browse all free Essenc tools for college, technology, computers, internet, home and everyday tasks.",
  alternates: {
    canonical: "/tools",
  },
};

const categories = [
  {
    title: "College",
    description: "Student and academic tools",
    href: "/college",
  },
  {
    title: "Technology",
    description: "Developer, PC and internet tools",
    href: "/technology",
  },
  {
    title: "Home",
    description: "Household and everyday calculators",
    href: "/home",
  },
];

export default function ToolsPage() {
  return (
    <>
      <section className="border-b border-gray-200 bg-white">
        <div className="container-shell py-12 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
            Essenc
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-[-0.025em] text-gray-950 sm:text-4xl">
            All Tools
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
            Browse free tools for students, developers, technology,
            household calculations and everyday problems.
          </p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="container-shell py-10 sm:py-14">
          <div className="grid gap-3 md:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="group border border-gray-200 bg-white p-5 hover:border-gray-400"
              >
                <h2 className="font-semibold text-gray-950">
                  {category.title}
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                  {category.description}
                </p>

                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-teal-700">
                  Browse
                  <ArrowRight size={13} />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 border-t border-gray-200 bg-white">
            {tools.map((tool) => (
              <ToolCard key={tool.href} tool={tool} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}