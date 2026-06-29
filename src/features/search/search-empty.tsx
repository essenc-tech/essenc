type SearchEmptyProps = {
  query: string;
};

export default function SearchEmpty({ query }: SearchEmptyProps) {
  return (
    <div className="px-6 py-12 text-center">
      <div className="mx-auto w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mb-6">
        🔍
      </div>
      <h3 className="text-xl font-medium text-white mb-2">No results for &ldquo;{query}&rdquo;</h3>
      <p className="text-zinc-400 max-w-xs mx-auto">
        Try different keywords or browse our workspaces and tools.
      </p>
    </div>
  );
}