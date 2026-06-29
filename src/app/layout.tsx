import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://essenc.tech"),
  title: {
    default: "Essenc",
    template: "%s • Essenc",
  },
  description:
    "Beautiful browser workspaces. Fast, private and free online tools.",
  applicationName: "Essenc",
  keywords: [
    "tools",
    "browser tools",
    "image tools",
    "text tools",
    "developer tools",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}