import type { Metadata } from "next";
import CategoryPage from "@/components/tools/category-page";
import { categoryInfo, tools } from "@/lib/tools";

export const metadata: Metadata = {
  title: "College Tools",
  description:
    "Free college tools for students including attendance, SGPA, CGPA, marks and academic calculators.",
  alternates: {
    canonical: "/college",
  },
};

export default function CollegePage() {
  const collegeTools = tools.filter(
    (tool) => tool.category === "College"
  );

  return (
    <CategoryPage
      title={categoryInfo.College.title}
      description={categoryInfo.College.description}
      tools={collegeTools}
    />
  );
}