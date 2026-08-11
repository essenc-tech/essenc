import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Required Marks Calculator — Marks Needed for Target Percentage",
  description:
    "Calculate how many marks you need in your remaining exam to achieve your target percentage.",
  keywords: [
    "required marks calculator",
    "marks needed calculator",
    "target percentage calculator",
    "how many marks do I need",
    "required marks for percentage",
    "exam marks calculator",
  ],
  alternates: {
    canonical: "/college/required-marks-calculator",
  },
  openGraph: {
    title: "Required Marks Calculator — Essenc",
    description:
      "Find the marks you need to achieve your target percentage.",
    url: "https://essenc.tech/college/required-marks-calculator",
    type: "website",
  },
};

interface RequiredMarksCalculatorLayoutProps {
  children: ReactNode;
}

export default function RequiredMarksCalculatorLayout({
  children,
}: RequiredMarksCalculatorLayoutProps) {
  return children;
}