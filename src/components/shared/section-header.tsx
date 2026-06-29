interface SectionHeaderProps {
  title: string;
  description?: string;
}

export function SectionHeader({
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="space-y-2">
      <h2 className="text-3xl font-semibold tracking-tight">
        {title}
      </h2>

      {description && (
        <p className="max-w-2xl text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}