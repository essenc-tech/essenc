import { Card } from "@/components/ui/card";
import { Workspace } from "@/types/workspace";

interface WorkspaceCardProps {
  workspace: Workspace;
}

export function WorkspaceCard({
  workspace,
}: WorkspaceCardProps) {
  const Icon = workspace.icon;

  return (
    <Card className="rounded-xl p-6 transition-all hover:border-primary">
      <Icon className={`mb-4 h-7 w-7 ${workspace.color}`} />

      <h3 className="font-semibold">
        {workspace.title}
      </h3>

      <p className="mt-2 text-sm text-muted-foreground">
        {workspace.description}
      </p>
    </Card>
  );
}