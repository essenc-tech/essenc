import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "SGPA Calculator — Calculate Semester GPA",
  description:
    "Use this free SGPA calculator to calculate your Semester Grade Point Average from subject credits and grade points.",
  keywords: [
    "SGPA calculator",
    "SGPA calculator online",
    "semester GPA calculator",
    "semester grade point average calculator",
    "calculate SGPA",
    "10 point SGPA calculator",
  ],
  alternates: {
    canonical: "/college/sgpa-calculator",
  },
  openGraph: {
    title: "SGPA Calculator — Essenc",
    description:
      "Calculate your semester GPA using subject credits and grade points.",
    url: "https://essenc.tech/college/sgpa-calculator",
    type: "website",
  },
};

interface SGPACalculatorLayoutProps {
  children: ReactNode;
}

export default function SGPACalculatorLayout({
  children,
}: SGPACalculatorLayoutProps) {
  return children;
}