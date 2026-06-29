type ToolHeaderProps = {
  title: string;
  description: string;
};

export default function ToolHeader({ title, description }: ToolHeaderProps) {
  return (
    <div className="mb-12">
      <h1 className="text-5xl font-semibold tracking-tight mb-4">{title}</h1>
      <p className="text-xl text-zinc-400 max-w-2xl">{description}</p>
    </div>
  );
}