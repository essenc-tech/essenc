import { Search } from 'lucide-react';

export default function WorkspaceEmpty() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="w-20 h-20 rounded-full bg-zinc-900 flex items-center justify-center mb-8">
        <Search className="w-10 h-10 text-zinc-500" />
      </div>
      <h3 className="text-2xl font-medium text-white mb-3">No tools found</h3>
      <p className="text-zinc-400 max-w-xs">
        We couldn't find any tools matching your search. Try different keywords.
      </p>
      <button 
        onClick={() => window.location.reload()}
        className="mt-8 text-sm text-lime-400 hover:text-lime-300 transition"
      >
        Clear search
      </button>
    </div>
  );
}