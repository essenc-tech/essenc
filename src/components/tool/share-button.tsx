'use client';

import { Share2 } from 'lucide-react';

type ShareButtonProps = {
  output: string;
};

export default function ShareButton({ output }: ShareButtonProps) {
  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: 'Essenc Tool Result',
        text: output,
      });
    } else {
      await navigator.clipboard.writeText(output);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-xl text-sm transition text-zinc-400 hover:text-white"
    >
      <Share2 className="w-4 h-4" />
      Share
    </button>
  );
}