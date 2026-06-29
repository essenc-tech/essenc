import CopyButton from './copy-button';
import ClearButton from './clear-button';
import ResetButton from './reset-button';
import DownloadButton from './download-button';
import ShareButton from './share-button';
import FullscreenButton from './fullscreen-button';

type ToolToolbarProps = {
  output: string;
  onClear: () => void;
  onReset: () => void;
  onDownload?: () => void;
};

export default function ToolToolbar({ output, onClear, onReset, onDownload }: ToolToolbarProps) {
  return (
    <div className="flex flex-wrap gap-3 pt-8">
      <CopyButton text={output} />
      <ClearButton onClear={onClear} />
      <ResetButton onReset={onReset} />
      {onDownload && <DownloadButton onDownload={onDownload} />}
      <ShareButton output={output} />
      <FullscreenButton />
    </div>
  );
}