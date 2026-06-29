import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export interface Tool {
  id: string;
  slug: string;
  title: string;
  description: string;

  workspace: string;

  icon: LucideIcon;

  component: () => ReactNode;

  featured?: boolean;
}