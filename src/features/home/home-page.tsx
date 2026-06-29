import { AppShell } from "@/components/layout/app-shell";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";

export function HomePage() {
  return (
    <AppShell>
      <Section>
        <Container>
          <PageHeader
            title="Beautiful browser workspaces."
            description="Fast. Private. Free."
          />
        </Container>
      </Section>
    </AppShell>
  );
}