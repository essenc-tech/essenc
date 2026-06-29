import { ReactNode } from 'react';

type ToolOutputProps = {
  children: ReactNode;
  label?: string;
};

export default function ToolOutput({ children, label = "Output" }: ToolOutputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-zinc-400 mb-3">{label}</label>
      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 min-h-[360px]">
        {children}
      </div>
    </div>
  );
}