import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Study Hours Calculator — Calculate Daily Study Time | Essenc",
  description:
    "Calculate how many hours you should study each day based on your available days, subjects, study goals and daily schedule.",
  keywords: [
    "study hours calculator",
    "study time calculator",
    "daily study hours",
    "study schedule calculator",
    "student study planner",
    "exam study calculator",
  ],
  alternates: {
    canonical: "/college/study-hours-calculator",
  },
  openGraph: {
    title: "Study Hours Calculator — Essenc",
    description:
      "Calculate your recommended daily study time based on your study goals and available time.",
    url: "https://essenc.tech/college/study-hours-calculator",
    type: "website",
  },
};

export default function StudyHoursCalculatorLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return children;
}