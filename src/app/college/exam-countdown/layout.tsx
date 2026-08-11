import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Exam Countdown Calculator — Days Until Exam | Essenc",
  description:
    "Calculate the exact number of days remaining until your exam date and plan your study time accordingly.",
  keywords: [
    "exam countdown",
    "exam countdown calculator",
    "days until exam",
    "days left for exam",
    "exam date calculator",
    "study countdown",
  ],
  alternates: {
    canonical: "/college/exam-countdown",
  },
  openGraph: {
    title: "Exam Countdown Calculator — Essenc",
    description:
      "Find out how many days are remaining until your exam.",
    url: "https://essenc.tech/college/exam-countdown",
    type: "website",
  },
};

export default function ExamCountdownLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return children;
}