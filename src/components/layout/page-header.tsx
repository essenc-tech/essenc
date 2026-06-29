import { ReactNode } from 'react';

type PageHeaderProps = {
  title: string;
  description?: string;
  children?: ReactNode;
};

export default function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <div className="pt-20 pb-12">
      <h1 className="text-6xl font-semibold tracking-tight mb-4">{title}</h1>
      {description && <p className="text-xl text-zinc-400 max-w-2xl">{description}</p>}
      {children}
    </div>
  );
}