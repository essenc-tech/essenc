import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "CGPA Calculator — Calculate Cumulative GPA",
  description:
    "Use this free CGPA calculator to calculate your cumulative grade point average from semester SGPA and credits.",
  keywords: [
    "CGPA calculator",
    "CGPA calculator online",
    "calculate CGPA",
    "cumulative GPA calculator",
    "college CGPA calculator",
    "CGPA calculator India",
  ],
  alternates: {
    canonical: "/college/cgpa-calculator",
  },
  openGraph: {
    title: "CGPA Calculator — Essenc",
    description:
      "Calculate your cumulative GPA using semester SGPA and credits.",
    url: "https://essenc.tech/college/cgpa-calculator",
    type: "website",
  },
};

interface CGPACalculatorLayoutProps {
  children: ReactNode;
}

export default function CGPACalculatorLayout({
  children,
}: CGPACalculatorLayoutProps) {
  return children;
}