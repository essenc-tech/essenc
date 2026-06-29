import { AppShell } from "@/components/layout/app-shell";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";

export default function HomePage() {
  return (
    <AppShell>
      <Section>
        <Container>
          <PageHeader
            title="Essenc"
            description="Beautiful browser workspaces."
          />
        </Container>
      </Section>
    </AppShell>
  );
}