'use client';

import { RotateCcw } from 'lucide-react';

type ResetButtonProps = {
  onReset: () => void;
};

export default function ResetButton({ onReset }: ResetButtonProps) {
  return (
    <button
      onClick={onReset}
      className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-xl text-sm transition text-zinc-400 hover:text-white"
    >
      <RotateCcw className="w-4 h-4" />
      Reset
    </button>
  );
}