'use client';

import { Share2 } from 'lucide-react';

type ShareButtonProps = {
  title: string;
  text: string;
};

export default function ShareButton({ title, text }: ShareButtonProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
        });
      } catch (err) {
        // Fallback to clipboard
        await navigator.clipboard.writeText(text);
      }
    } else {
      await navigator.clipboard.writeText(text);
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