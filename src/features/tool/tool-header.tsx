import { Tool } from '@/data/tools';

type ToolHeaderProps = {
  tool: Tool;
};

export default function ToolHeader({ tool }: ToolHeaderProps) {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-16 pb-12">
      <div className="flex items-center gap-6">
        <div className="text-6xl">{tool.icon}</div>
        <div>
          <h1 className="text-5xl font-semibold tracking-tight text-white mb-3">
            {tool.name}
          </h1>
          <p className="text-xl text-zinc-400">{tool.description}</p>
        </div>
      </div>
    </div>
  );
}