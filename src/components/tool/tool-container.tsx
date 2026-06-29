import { ReactNode } from "react";

import { Card } from "@/components/ui/card";

interface ToolContainerProps {
  children: ReactNode;
}

export function ToolContainer({
  children,
}: ToolContainerProps) {
  return (
    <Card className="rounded-xl border bg-card p-6 shadow-sm">
      {children}
    </Card>
  );
}