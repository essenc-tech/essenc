import { LucideIcon } from "lucide-react";

export interface Tool {
  id: string;
  slug: string;

  title: string;

  description: string;

  workspace: string;

  icon: LucideIcon;

  featured?: boolean;
}