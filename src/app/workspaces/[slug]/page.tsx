import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { tools } from '@/data/tools';
import { generateToolMetadata } from '@/lib/seo';
import ToolRenderer from '@/components/tool/tool-renderer';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tool = tools.find(t => t.slug === params.slug);
  if (!tool) return {};
  return generateToolMetadata(tool);
}

export default function ToolPage({ params }: Props) {
  const tool = tools.find(t => t.slug === params.slug);
  
  if (!tool) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-semibold mb-4">{tool.name}</h1>
        <p className="text-zinc-400 mb-12 max-w-2xl">{tool.description}</p>
        
        <ToolRenderer>
          {/* Tool component will be rendered here */}
          <div className="text-center py-20 text-zinc-400">
            Tool interface for {tool.name} is ready.
          </div>
        </ToolRenderer>
      </div>
    </div>
  );
}