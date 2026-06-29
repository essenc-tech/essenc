import RelatedTools from '@/features/tool/related-tools';

type ToolFooterProps = {
  currentSlug: string;
};

export default function ToolFooter({ currentSlug }: ToolFooterProps) {
  return <RelatedTools currentSlug={currentSlug} />;
}