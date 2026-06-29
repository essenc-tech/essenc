import {
  Code2,
  Image,
  FileText,
} from "lucide-react";

import { Workspace } from "@/types/workspace";

export const workspaces: Workspace[] = [
  {
    id: "developer",

    slug: "developer",

    title: "Developer",

    description: "Tools for developers.",

    icon: Code2,

    color: "text-blue-500",

    featured: true,
  },

  {
    id: "image",

    slug: "image",

    title: "Image",

    description: "Image utilities.",

    icon: Image,

    color: "text-purple-500",

    featured: true,
  },

  {
    id: "text",

    slug: "text",

    title: "Text",

    description: "Writing & text tools.",

    icon: FileText,

    color: "text-green-500",

    featured: true,
  },
];