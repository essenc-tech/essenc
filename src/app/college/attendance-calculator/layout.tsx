import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Attendance Calculator — Calculate College Attendance",
  description:
    "Use this free attendance calculator to calculate your current attendance percentage, classes required to reach 75% attendance, and classes you can miss.",
  keywords: [
    "attendance calculator",
    "college attendance calculator",
    "75 attendance calculator",
    "attendance percentage calculator",
    "how many classes can I miss",
  ],
  alternates: {
    canonical: "/college/attendance-calculator",
  },
  openGraph: {
    title: "Attendance Calculator — Essenc",
    description:
      "Calculate college attendance percentage, required classes and classes you can miss.",
    url: "https://essenc.tech/college/attendance-calculator",
    type: "website",
  },
};

export default function AttendanceCalculatorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}