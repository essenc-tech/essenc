import { ReactNode } from "react";

import { Navbar } from "@/components/navigation/navbar";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({
  children,
}: AppShellProps) {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        {children}
      </main>
    </>
  );
}