import Link from 'next/link';
import { SearchResult } from '@/lib/search';

type SearchResultsProps = {
  results: SearchResult[];
  onClose: () => void;
};

export default function SearchResults({ results, onClose }: SearchResultsProps) {
  return (
    <div className="max-h-[60vh] overflow-auto py-2">
      {results.map((result, index) => (
        <Link
          key={index}
          href={result.url}
          onClick={onClose}
          className="flex items-center gap-4 px-6 py-4 hover:bg-zinc-800 transition group"
        >
          <div className="text-3xl flex-shrink-0">{result.icon}</div>
          
          <div className="flex-1 min-w-0">
            <div className="font-medium text-white group-hover:text-lime-400 transition">
              {result.title}
            </div>
            <div className="text-sm text-zinc-400 line-clamp-1">
              {result.description}
            </div>
          </div>

          {result.workspace && (
            <div className="text-[10px] uppercase tracking-widest font-mono px-3 py-1 bg-zinc-800 text-lime-400 rounded-full">
              {result.workspace}
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}