import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { tools } from '@/data/tools';
import { generateToolMetadata } from '@/lib/seo';
import Navbar from '@/components/navigation/navbar';
import Footer from '@/features/home/footer';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = tools.find(t => t.slug === slug);
  if (!tool) return {};
  return generateToolMetadata(tool);
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  
  const tool = tools.find(t => t.slug === slug);
  
  if (!tool) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      <div className="py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl font-semibold mb-6">{tool.name}</h1>
          <p className="text-xl text-zinc-400 mb-12">{tool.description}</p>
          
          <div className="bg-zinc-900 rounded-3xl p-8">
            Tool interface for {tool.name} is ready.
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}