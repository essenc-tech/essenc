import { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

interface ToolLayoutProps {
  header: ReactNode;
  content: ReactNode;
  actions?: ReactNode;
  footer?: ReactNode;
}

export function ToolLayout({
  header,
  content,
  actions,
  footer,
}: ToolLayoutProps) {
  return (
    <Section>
      <Container>
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
          {header}

          {content}

          {actions}

          {footer}
        </div>
      </Container>
    </Section>
  );
}