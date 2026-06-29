import { ReactNode } from 'react';

type ToolRendererProps = {
  children: ReactNode;
};

export default function ToolRenderer({ children }: ToolRendererProps) {
  return <div className="pt-8">{children}</div>;
}