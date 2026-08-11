import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Attendance Calculator",
  description:
    "Calculate your current attendance percentage and find out how many classes you need to attend to reach your target attendance.",
  alternates: {
    canonical: "/college/attendance-calculator",
  },
};

export default function AttendanceCalculatorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}