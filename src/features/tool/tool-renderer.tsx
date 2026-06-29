import { Tool } from '@/data/tools';

type ToolRendererProps = {
  tool: Tool;
};

export default function ToolRenderer({ tool }: ToolRendererProps) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-12 min-h-[500px] flex items-center justify-center">
        <div className="text-center">
          <div className="text-8xl mb-8 opacity-40">{tool.icon}</div>
          <h2 className="text-3xl font-semibold text-white mb-4">{tool.name}</h2>
          <p className="text-zinc-400 max-w-md mx-auto">
            Tool interface coming soon. 
            <br />
            This is a placeholder for <span className="text-lime-400">{tool.name}</span>.
          </p>
        </div>
      </div>
    </div>
  );
}