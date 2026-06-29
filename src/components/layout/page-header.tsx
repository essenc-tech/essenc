import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({
  title,
  description,
  className,
}: PageHeaderProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <h1 className="text-4xl font-bold tracking-tight">
        {title}
      </h1>

      {description && (
        <p className="max-w-2xl text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}