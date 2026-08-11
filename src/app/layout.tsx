import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/navigation/site-header";
import SiteFooter from "@/components/layout/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://essenc.tech"),
  title: {
    default: "Essenc — Free Online Tools",
    template: "%s | Essenc",
  },
  description:
    "Free online tools for students, developers and everyday problems. Fast, simple and useful calculators and utilities.",
  applicationName: "Essenc",
  keywords: [
    "online tools",
    "free calculators",
    "student tools",
    "developer tools",
    "utility tools",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Essenc",
    title: "Essenc — Free Online Tools",
    description:
      "Free online tools for students, developers and everyday problems.",
    url: "https://essenc.tech",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}