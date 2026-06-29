import { Button } from "@/components/ui/button";

export function ToolActions() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button>Copy</Button>

      <Button variant="secondary">
        Reset
      </Button>

      <Button variant="outline">
        Share
      </Button>
    </div>
  );
}