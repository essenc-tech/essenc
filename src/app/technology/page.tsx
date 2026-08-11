import type { Metadata } from "next";
import CategoryPage from "@/components/tools/category-page";
import { categoryInfo, tools } from "@/lib/tools";

export const metadata: Metadata = {
  title: "Technology Tools",
  description:
    "Free technology tools for developers, computers, laptops, internet and data.",
  alternates: {
    canonical: "/technology",
  },
};

export default function TechnologyPage() {
  const technologyTools = tools.filter(
    (tool) => tool.category === "Technology"
  );

  return (
    <CategoryPage
      title={categoryInfo.Technology.title}
      description={categoryInfo.Technology.description}
      tools={technologyTools}
    />
  );
}