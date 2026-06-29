export default function ToolEmpty() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-zinc-800 rounded-3xl">
      <div className="text-6xl mb-6 opacity-30">✍️</div>
      <h3 className="text-xl text-white mb-2">Ready when you are</h3>
      <p className="text-zinc-400 max-w-xs">Enter something in the input area to see results here.</p>
    </div>
  );
}