'use client';

import { Trash2 } from 'lucide-react';

type ClearButtonProps = {
  onClear: () => void;
};

export default function ClearButton({ onClear }: ClearButtonProps) {
  return (
    <button
      onClick={onClear}
      className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-xl text-sm transition text-zinc-400 hover:text-white"
    >
      <Trash2 className="w-4 h-4" />
      Clear
    </button>
  );
}