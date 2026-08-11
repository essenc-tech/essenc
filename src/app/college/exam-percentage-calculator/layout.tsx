import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Exam Percentage Calculator — Calculate Exam Percentage | Essenc",
  description:
    "Calculate your exam percentage instantly from marks obtained and total marks with this free online exam percentage calculator.",
  keywords: [
    "exam percentage calculator",
    "percentage calculator",
    "exam marks percentage calculator",
    "calculate exam percentage",
    "marks to percentage calculator",
    "student percentage calculator",
  ],
  alternates: {
    canonical: "/college/exam-percentage-calculator",
  },
  openGraph: {
    title: "Exam Percentage Calculator — Essenc",
    description:
      "Calculate your exam percentage from marks obtained and total marks.",
    url: "https://essenc.tech/college/exam-percentage-calculator",
    type: "website",
  },
};

export default function ExamPercentageCalculatorLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return children;
}