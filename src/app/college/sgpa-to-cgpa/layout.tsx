import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "SGPA to CGPA Calculator — Calculate CGPA from SGPA | Essenc",
  description:
    "Calculate your cumulative CGPA from multiple semester SGPAs and credits using a weighted CGPA calculation.",
  keywords: [
    "SGPA to CGPA calculator",
    "SGPA to CGPA",
    "calculate CGPA from SGPA",
    "semester SGPA calculator",
    "CGPA from semesters",
    "weighted CGPA calculator",
  ],
  alternates: {
    canonical: "/college/sgpa-to-cgpa",
  },
  openGraph: {
    title: "SGPA to CGPA Calculator — Essenc",
    description:
      "Calculate cumulative CGPA from multiple semester SGPAs and credits.",
    url: "https://essenc.tech/college/sgpa-to-cgpa",
    type: "website",
  },
};

export default function SGPAToCGPALayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return children;
}