import { SearchX } from "lucide-react";

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <SearchX className="mb-4 h-10 w-10 text-muted-foreground" />

      <h3 className="text-lg font-semibold">
        Nothing found
      </h3>

      <p className="mt-2 text-sm text-muted-foreground">
        Try another search.
      </p>
    </div>
  );
}