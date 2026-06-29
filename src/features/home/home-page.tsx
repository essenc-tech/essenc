import { AppShell } from "@/components/layout/app-shell";
import { ToolDemo } from "@/features/tools/tool-demo";

export function HomePage() {
  return (
    <AppShell>
      <ToolDemo />
    </AppShell>
  );
}