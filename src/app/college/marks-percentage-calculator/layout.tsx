import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Marks Percentage Calculator — Calculate Percentage",
  description:
    "Use this free marks percentage calculator to calculate your percentage from obtained marks and total marks.",
  keywords: [
    "marks percentage calculator",
    "percentage calculator",
    "calculate percentage from marks",
    "marks to percentage calculator",
    "percentage calculator for students",
    "exam percentage calculator",
  ],
  alternates: {
    canonical: "/college/marks-percentage-calculator",
  },
  openGraph: {
    title: "Marks Percentage Calculator — Essenc",
    description:
      "Calculate your exam percentage from obtained marks and total marks.",
    url: "https://essenc.tech/college/marks-percentage-calculator",
    type: "website",
  },
};

interface MarksPercentageCalculatorLayoutProps {
  children: ReactNode;
}

export default function MarksPercentageCalculatorLayout({
  children,
}: MarksPercentageCalculatorLayoutProps) {
  return children;
}