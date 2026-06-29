import ToolHeader from './tool-header';
import ToolToolbar from './tool-toolbar';
import { ReactNode } from 'react';

type ToolLayoutProps = {
  children: ReactNode;
  title: string;
  description: string;
};

export default function ToolLayout({ children, title, description }: ToolLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <ToolHeader title={title} description={description} />
      {children}
    </div>
  );
}