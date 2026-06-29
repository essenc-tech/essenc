import { ToolActions } from "@/components/tool/tool-actions";
import { ToolContainer } from "@/components/tool/tool-container";
import { ToolFooter } from "@/components/tool/tool-footer";
import { ToolHeader } from "@/components/tool/tool-header";
import { ToolLayout } from "@/components/tool/tool-layout";
import { Input } from "@/components/ui/input";

export function ToolDemo() {
  return (
    <ToolLayout
      header={
        <ToolHeader
          title="Word Counter"
          description="Count words, characters and reading time."
        />
      }
      content={
        <ToolContainer>
          <Input
            placeholder="Start typing..."
          />
        </ToolContainer>
      }
      actions={<ToolActions />}
      footer={<ToolFooter />}
    />
  );
}