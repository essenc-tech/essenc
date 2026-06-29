import { TriangleAlert } from "lucide-react";

export function ErrorState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <TriangleAlert className="mb-4 h-10 w-10 text-destructive" />

      <h3 className="text-lg font-semibold">
        Something went wrong
      </h3>

      <p className="mt-2 text-sm text-muted-foreground">
        Please try again.
      </p>
    </div>
  );
}