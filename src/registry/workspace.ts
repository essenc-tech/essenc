import { LucideIcon } from "lucide-react";

export interface Workspace {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  featured?: boolean;
}