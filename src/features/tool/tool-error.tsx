type ToolErrorProps = {
  message?: string;
};

export default function ToolError({ message = "Something went wrong. Please try again." }: ToolErrorProps) {
  return (
    <div className="border border-red-900/50 bg-red-950/30 rounded-3xl p-8 text-center">
      <div className="text-red-400 text-5xl mb-4">⚠️</div>
      <h3 className="text-lg font-medium text-red-400 mb-2">Error</h3>
      <p className="text-zinc-400">{message}</p>
    </div>
  );
}