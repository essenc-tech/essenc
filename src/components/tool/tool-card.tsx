import { Card } from "@/components/ui/card";

interface ToolCardProps {
  title: string;
  description: string;
}

export function ToolCard({
  title,
  description,
}: ToolCardProps) {
  return (
    <Card className="rounded-xl p-5 transition-all hover:border-primary">
      <h3 className="font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm text-muted-foreground">
        {description}
      </p>
    </Card>
  );
}