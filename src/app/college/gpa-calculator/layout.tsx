import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "GPA Calculator — Free Grade Point Average Calculator | Essenc",
  description:
    "Calculate your GPA using course grades and credit hours with Essenc's free online GPA calculator.",
  keywords: [
    "GPA calculator",
    "grade point average calculator",
    "college GPA calculator",
    "GPA calculator with credits",
    "4.0 GPA calculator",
    "semester GPA calculator",
  ],
  alternates: {
    canonical: "/college/gpa-calculator",
  },
  openGraph: {
    title: "GPA Calculator — Essenc",
    description:
      "Calculate your Grade Point Average using course grades and credit hours.",
    url: "https://essenc.tech/college/gpa-calculator",
    type: "website",
  },
};

export default function GPACalculatorLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return children;
}