'use client';

import { Download } from 'lucide-react';

type DownloadButtonProps = {
  onDownload: () => void;
};

export default function DownloadButton({ onDownload }: DownloadButtonProps) {
  return (
    <button
      onClick={onDownload}
      className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-xl text-sm transition text-zinc-400 hover:text-white"
    >
      <Download className="w-4 h-4" />
      Download
    </button>
  );
}