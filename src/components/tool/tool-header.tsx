interface ToolHeaderProps {
  title: string;
  description: string;
}

export function ToolHeader({
  title,
  description,
}: ToolHeaderProps) {
  return (
    <div className="space-y-3">
      <h1 className="text-4xl font-bold tracking-tight">
        {title}
      </h1>

      <p className="max-w-3xl text-muted-foreground">
        {description}
      </p>
    </div>
  );
}