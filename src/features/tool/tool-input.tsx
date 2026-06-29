'use client';

import { ReactNode } from 'react';

type ToolInputProps = {
  children: ReactNode;
  label?: string;
};

export default function ToolInput({ children, label = "Input" }: ToolInputProps) {
  return (
    <div className="mb-8">
      <label className="block text-sm font-medium text-zinc-400 mb-3">{label}</label>
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
        {children}
      </div>
    </div>
  );
}