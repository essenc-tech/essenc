export type ToolCategory = "College" | "Technology" | "Home";

export interface Tool {
  title: string;
  description: string;
  href: string;
  category: ToolCategory;
  keywords: string[];
  status?: "available" | "coming-soon";
}

export const tools: Tool[] = [
  {
    title: "Attendance Calculator",
    description:
      "Calculate your current attendance and find out how many classes you need to attend to reach your target.",
    href: "/college/attendance-calculator",
    category: "College",
    keywords: ["attendance", "college", "classes", "75 percent"],
    status: "available",
  },
  {
    title: "75% Attendance Calculator",
    description:
      "Find out how many classes you can miss or need to attend while maintaining 75% attendance.",
    href: "/college/75-percent-attendance-calculator",
    category: "College",
    keywords: ["75 attendance", "attendance shortage", "classes"],
    status: "coming-soon",
  },
  {
    title: "SGPA Calculator",
    description:
      "Calculate your semester grade point average using credits and grade points.",
    href: "/college/sgpa-calculator",
    category: "College",
    keywords: ["SGPA", "semester GPA", "college grades"],
    status: "coming-soon",
  },
  {
    title: "CGPA Calculator",
    description:
      "Calculate your cumulative grade point average across multiple semesters.",
    href: "/college/cgpa-calculator",
    category: "College",
    keywords: ["CGPA", "college GPA", "cumulative GPA"],
    status: "coming-soon",
  },
  {
    title: "Marks Percentage Calculator",
    description:
      "Calculate percentage from marks and find the marks required to reach a target percentage.",
    href: "/college/marks-percentage-calculator",
    category: "College",
    keywords: ["percentage", "marks", "college marks"],
    status: "coming-soon",
  },

  {
    title: "JSON Formatter",
    description:
      "Format, validate and read JSON data with a clean browser-based utility.",
    href: "/technology/json-formatter",
    category: "Technology",
    keywords: ["JSON", "formatter", "developer", "JSON validator"],
    status: "coming-soon",
  },
  {
    title: "PC Power Calculator",
    description:
      "Estimate PC power consumption and the approximate electricity cost of running your computer.",
    href: "/technology/pc-power-calculator",
    category: "Technology",
    keywords: ["PC power", "PSU", "electricity", "computer"],
    status: "coming-soon",
  },
  {
    title: "Download Time Calculator",
    description:
      "Estimate how long a file will take to download based on file size and internet speed.",
    href: "/technology/download-time-calculator",
    category: "Technology",
    keywords: ["download time", "internet speed", "download calculator"],
    status: "coming-soon",
  },

  {
    title: "Electricity Cost Calculator",
    description:
      "Estimate the electricity cost of an appliance based on power usage and electricity rate.",
    href: "/home/electricity-cost-calculator",
    category: "Home",
    keywords: ["electricity", "power bill", "appliance cost"],
    status: "coming-soon",
  },
  {
    title: "Tile Calculator",
    description:
      "Estimate the number of tiles required for a floor or wall based on dimensions.",
    href: "/home/tile-calculator",
    category: "Home",
    keywords: ["tiles", "floor", "construction"],
    status: "coming-soon",
  },
];

export const categoryInfo: Record<
  ToolCategory,
  {
    title: string;
    description: string;
  }
> = {
  College: {
    title: "College Tools",
    description:
      "Free calculators and utilities for students, including attendance, grades, marks and academic planning.",
  },
  Technology: {
    title: "Technology Tools",
    description:
      "Practical utilities for developers, computers, laptops, internet and everyday technology problems.",
  },
  Home: {
    title: "Home Tools",
    description:
      "Useful calculators for electricity, construction, household projects and everyday decisions.",
  },
};