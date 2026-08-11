import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "CGPA to Percentage Calculator — Convert CGPA to Percentage | Essenc",
  description:
    "Convert CGPA to percentage using common CGPA conversion formulas. Choose your conversion method and calculate your percentage instantly.",
  keywords: [
    "CGPA to percentage calculator",
    "CGPA to percentage",
    "convert CGPA to percentage",
    "CGPA percentage calculator",
    "CGPA conversion",
    "percentage from CGPA",
  ],
  alternates: {
    canonical: "/college/cgpa-to-percentage",
  },
  openGraph: {
    title: "CGPA to Percentage Calculator — Essenc",
    description:
      "Convert CGPA to percentage using common conversion methods.",
    url: "https://essenc.tech/college/cgpa-to-percentage",
    type: "website",
  },
};

export default function CGPAToPercentageLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return children;
}