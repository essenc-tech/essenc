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
  // =========================================================
  // COLLEGE TOOLS
  // =========================================================

  {
    title: "Attendance Calculator",
    description:
      "Calculate your current attendance and find out how many classes you need to attend to reach your target.",
    href: "/college/attendance-calculator",
    category: "College",
    keywords: [
      "attendance",
      "college attendance",
      "attendance calculator",
      "classes",
    ],
    status: "available",
  },

  {
    title: "75% Attendance Calculator",
    description:
      "Find out how many classes you can miss or need to attend while maintaining 75% attendance.",
    href: "/college/75-percent-attendance-calculator",
    category: "College",
    keywords: [
      "75 attendance",
      "75 percent attendance",
      "attendance shortage",
      "classes",
    ],
    status: "available",
  },

  {
    title: "SGPA Calculator",
    description:
      "Calculate your semester grade point average using credits and grade points.",
    href: "/college/sgpa-calculator",
    category: "College",
    keywords: [
      "SGPA",
      "SGPA calculator",
      "semester GPA",
      "college grades",
    ],
    status: "available",
  },

  {
    title: "CGPA Calculator",
    description:
      "Calculate your cumulative grade point average across multiple semesters.",
    href: "/college/cgpa-calculator",
    category: "College",
    keywords: [
      "CGPA",
      "CGPA calculator",
      "college GPA",
      "cumulative GPA",
    ],
    status: "available",
  },

  {
    title: "Marks Percentage Calculator",
    description:
      "Calculate your percentage from obtained marks and total marks across multiple subjects.",
    href: "/college/marks-percentage-calculator",
    category: "College",
    keywords: [
      "percentage",
      "marks",
      "percentage calculator",
      "marks percentage calculator",
      "college marks",
    ],
    status: "available",
  },

  {
    title: "Required Marks Calculator",
    description:
      "Calculate how many marks you need in your remaining exam to achieve your target percentage.",
    href: "/college/required-marks-calculator",
    category: "College",
    keywords: [
      "required marks",
      "marks needed",
      "target percentage",
      "exam marks",
      "required marks calculator",
    ],
    status: "available",
  },

  {
    title: "GPA Calculator",
    description:
      "Calculate your GPA from course grades and credit hours.",
    href: "/college/gpa-calculator",
    category: "College",
    keywords: [
      "GPA",
      "GPA calculator",
      "grade point average",
      "college GPA",
    ],
    status: "available",
  },

  {
    title: "Exam Percentage Calculator",
    description:
      "Calculate exam percentage from marks obtained and maximum marks.",
    href: "/college/exam-percentage-calculator",
    category: "College",
    keywords: [
      "exam percentage",
      "exam percentage calculator",
      "marks percentage",
      "exam marks",
    ],
    status: "available",
  },

  {
    title: "CGPA to Percentage Calculator",
    description:
      "Convert CGPA into percentage using the selected conversion method.",
    href: "/college/cgpa-to-percentage",
    category: "College",
    keywords: [
      "CGPA to percentage",
      "CGPA conversion",
      "percentage from CGPA",
    ],
    status: "available",
  },

  {
    title: "Percentage to CGPA Calculator",
    description:
      "Convert percentage into an approximate CGPA using a selected conversion method.",
    href: "/college/percentage-to-cgpa",
    category: "College",
    keywords: [
      "percentage to CGPA",
      "CGPA conversion",
      "CGPA from percentage",
    ],
    status: "available",
  },

  {
    title: "SGPA to CGPA Calculator",
    description:
      "Calculate cumulative CGPA from multiple semester SGPAs and credits.",
    href: "/college/sgpa-to-cgpa",
    category: "College",
    keywords: [
      "SGPA to CGPA",
      "SGPA conversion",
      "semester CGPA",
    ],
    status: "available",
  },

  {
    title: "Study Hours Calculator",
    description:
      "Calculate how many study hours you need each day based on your available time and academic goals.",
    href: "/college/study-hours-calculator",
    category: "College",
    keywords: [
      "study hours",
      "study calculator",
      "study schedule",
      "student planner",
    ],
    status: "available",
  },

  {
    title: "Exam Countdown Calculator",
    description:
      "Calculate the remaining time until your examination date.",
    href: "/college/exam-countdown",
    category: "College",
    keywords: [
      "exam countdown",
      "exam date",
      "days until exam",
      "student tools",
    ],
    status: "available",
  },

  // =========================================================
  // TECHNOLOGY TOOLS
  // =========================================================

  {
    title: "JSON Formatter",
    description:
      "Format, validate and read JSON data with a clean browser-based utility.",
    href: "/technology/json-formatter",
    category: "Technology",
    keywords: [
      "JSON",
      "JSON formatter",
      "JSON validator",
      "developer",
      "JSON beautifier",
    ],
    status: "coming-soon",
  },

  {
    title: "PC Power Calculator",
    description:
      "Estimate PC power consumption and the approximate electricity cost of running your computer.",
    href: "/technology/pc-power-calculator",
    category: "Technology",
    keywords: [
      "PC power",
      "PC power calculator",
      "PSU",
      "electricity",
      "computer power",
    ],
    status: "coming-soon",
  },

  {
    title: "Download Time Calculator",
    description:
      "Estimate how long a file will take to download based on file size and internet speed.",
    href: "/technology/download-time-calculator",
    category: "Technology",
    keywords: [
      "download time",
      "download calculator",
      "internet speed",
      "download speed",
    ],
    status: "coming-soon",
  },

  {
    title: "Internet Speed Calculator",
    description:
      "Calculate download and upload speeds from your internet connection speed.",
    href: "/technology/internet-speed-calculator",
    category: "Technology",
    keywords: [
      "internet speed",
      "internet speed calculator",
      "Mbps",
      "download speed",
      "upload speed",
    ],
    status: "coming-soon",
  },

  {
    title: "Binary Converter",
    description:
      "Convert numbers between binary, decimal, hexadecimal and octal formats.",
    href: "/technology/binary-converter",
    category: "Technology",
    keywords: [
      "binary converter",
      "decimal converter",
      "hex converter",
      "octal converter",
      "developer tools",
    ],
    status: "coming-soon",
  },

  {
    title: "Unit Converter",
    description:
      "Convert common units of length, weight, temperature, speed and more.",
    href: "/technology/unit-converter",
    category: "Technology",
    keywords: [
      "unit converter",
      "length converter",
      "weight converter",
      "temperature converter",
    ],
    status: "coming-soon",
  },

  {
    title: "Image Size Calculator",
    description:
      "Calculate image dimensions, aspect ratios and estimated file sizes.",
    href: "/technology/image-size-calculator",
    category: "Technology",
    keywords: [
      "image size",
      "image dimensions",
      "aspect ratio",
      "image calculator",
    ],
    status: "coming-soon",
  },

  {
    title: "Aspect Ratio Calculator",
    description:
      "Calculate image and video dimensions while maintaining the correct aspect ratio.",
    href: "/technology/aspect-ratio-calculator",
    category: "Technology",
    keywords: [
      "aspect ratio calculator",
      "image ratio",
      "video ratio",
      "16:9 calculator",
    ],
    status: "coming-soon",
  },

  {
    title: "Password Generator",
    description:
      "Generate strong random passwords directly in your browser.",
    href: "/technology/password-generator",
    category: "Technology",
    keywords: [
      "password generator",
      "strong password",
      "random password",
      "secure password",
    ],
    status: "coming-soon",
  },

  {
    title: "Timestamp Converter",
    description:
      "Convert Unix timestamps into readable dates and convert dates back into timestamps.",
    href: "/technology/timestamp-converter",
    category: "Technology",
    keywords: [
      "timestamp converter",
      "Unix timestamp",
      "epoch converter",
      "developer tools",
    ],
    status: "coming-soon",
  },

  {
    title: "Base64 Encoder Decoder",
    description:
      "Encode and decode Base64 text directly in your browser.",
    href: "/technology/base64-encoder-decoder",
    category: "Technology",
    keywords: [
      "Base64",
      "Base64 encoder",
      "Base64 decoder",
      "developer tools",
    ],
    status: "coming-soon",
  },

  // =========================================================
  // HOME TOOLS
  // =========================================================

  {
    title: "Electricity Cost Calculator",
    description:
      "Estimate the electricity cost of an appliance based on power usage and electricity rate.",
    href: "/home/electricity-cost-calculator",
    category: "Home",
    keywords: [
      "electricity",
      "electricity cost",
      "power bill",
      "appliance cost",
    ],
    status: "coming-soon",
  },

  {
    title: "Tile Calculator",
    description:
      "Estimate the number of tiles required for a floor or wall based on dimensions.",
    href: "/home/tile-calculator",
    category: "Home",
    keywords: [
      "tiles",
      "tile calculator",
      "floor",
      "construction",
    ],
    status: "coming-soon",
  },

  {
    title: "Paint Calculator",
    description:
      "Estimate how much paint you need based on wall dimensions and paint coverage.",
    href: "/home/paint-calculator",
    category: "Home",
    keywords: [
      "paint calculator",
      "wall paint",
      "paint coverage",
      "home improvement",
    ],
    status: "coming-soon",
  },

  {
    title: "Room Area Calculator",
    description:
      "Calculate the area and dimensions of a room for flooring, painting and home projects.",
    href: "/home/room-area-calculator",
    category: "Home",
    keywords: [
      "room area",
      "area calculator",
      "room size",
      "floor area",
    ],
    status: "coming-soon",
  },

  {
    title: "Flooring Calculator",
    description:
      "Calculate the flooring material required for a room based on its dimensions.",
    href: "/home/flooring-calculator",
    category: "Home",
    keywords: [
      "flooring calculator",
      "floor calculator",
      "floor area",
      "home renovation",
    ],
    status: "coming-soon",
  },

  {
    title: "Water Tank Calculator",
    description:
      "Calculate the approximate capacity of a rectangular or cylindrical water tank.",
    href: "/home/water-tank-calculator",
    category: "Home",
    keywords: [
      "water tank calculator",
      "tank capacity",
      "water capacity",
      "tank volume",
    ],
    status: "coming-soon",
  },

  {
    title: "Concrete Calculator",
    description:
      "Estimate the amount of concrete required for common construction projects.",
    href: "/home/concrete-calculator",
    category: "Home",
    keywords: [
      "concrete calculator",
      "construction calculator",
      "concrete volume",
      "cement",
    ],
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