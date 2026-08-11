import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Percentage to CGPA Calculator — Convert Percentage to CGPA | Essenc",
  description:
    "Convert percentage to CGPA using common conversion methods. Enter your percentage and calculate the approximate CGPA instantly.",
  keywords: [
    "percentage to CGPA calculator",
    "percentage to CGPA",
    "convert percentage to CGPA",
    "CGPA from percentage",
    "percentage CGPA converter",
    "CGPA calculator",
  ],
  alternates: {
    canonical: "/college/percentage-to-cgpa",
  },
  openGraph: {
    title: "Percentage to CGPA Calculator — Essenc",
    description:
      "Convert percentage into an approximate CGPA using common conversion methods.",
    url: "https://essenc.tech/college/percentage-to-cgpa",
    type: "website",
  },
};

export default function PercentageToCGPALayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return children;
}