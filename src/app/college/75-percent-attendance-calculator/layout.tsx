import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "75% Attendance Calculator — How Many Classes Can I Miss?",
  description:
    "Calculate how many classes you need to attend or can miss to maintain 75% attendance. Free college attendance calculator with examples and formulas.",
  keywords: [
    "75 attendance calculator",
    "75% attendance calculator",
    "how many classes can I miss",
    "how many classes to attend for 75 attendance",
    "college attendance 75 percent",
    "75 percent attendance calculator",
  ],
  alternates: {
    canonical: "/college/75-percent-attendance-calculator",
  },
  openGraph: {
    title: "75% Attendance Calculator — Essenc",
    description:
      "Find out how many classes you need to attend or can miss to maintain 75% attendance.",
    url: "https://essenc.tech/college/75-percent-attendance-calculator",
    type: "website",
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}