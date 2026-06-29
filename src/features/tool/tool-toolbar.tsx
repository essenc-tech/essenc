import CopyButton from '@/components/tool/copy-button';
import ClearButton from '@/components/tool/clear-button';
import ResetButton from '@/components/tool/reset-button';
import DownloadButton from '@/components/tool/download-button';
import ShareButton from '@/components/tool/share-button';
import FullscreenButton from '@/components/tool/fullscreen-button';

type ToolToolbarProps = {
  output: string;
  onClear: () => void;
  onReset: () => void;
  onDownload?: () => void;
};

export default function ToolToolbar({ output, onClear, onReset, onDownload }: ToolToolbarProps) {
  return (
    <div className="flex flex-wrap gap-3 pt-8 border-t border-zinc-800">
      <CopyButton text={output} />
      <ClearButton onClear={onClear} />
      <ResetButton onReset={onReset} />
      {onDownload && <DownloadButton onDownload={onDownload} />}
      <ShareButton output={output} />
      <FullscreenButton />
    </div>
  );
}