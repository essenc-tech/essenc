import type { Metadata } from "next";
import CategoryPage from "@/components/tools/category-page";
import { categoryInfo, tools } from "@/lib/tools";

export const metadata: Metadata = {
  title: "Home Tools",
  description:
    "Free home calculators for electricity, construction, household projects and everyday problems.",
  alternates: {
    canonical: "/home",
  },
};

export default function HomeToolsPage() {
  const homeTools = tools.filter(
    (tool) => tool.category === "Home"
  );

  return (
    <CategoryPage
      title={categoryInfo.Home.title}
      description={categoryInfo.Home.description}
      tools={homeTools}
    />
  );
}