import {
  Activity,
  Award,
  Layers,
  Leaf,
  type LucideIcon,
  Mail,
  Mountain,
  Plug,
  Salad,
} from "lucide-react";

export const PROJECT_CATEGORIES = ["ecommerce", "webapp", "landing"] as const;
export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

type ProjectShape = {
  readonly id: string;
  readonly year: number;
  readonly category: ProjectCategory;
  readonly featured: boolean;
  readonly stack: readonly string[];
  readonly links: { readonly live?: string };
  readonly icon: LucideIcon;
  // Two-stop gradient used for preview background, accent glow and CTA tint.
  readonly gradient: readonly [string, string];
};

// `as const` keeps id literals narrow so we can use them as keys into
// translations.items without losing type safety.
const RAW_PROJECTS = [
  {
    id: "unisender",
    year: 2024,
    category: "webapp",
    featured: true,
    stack: ["JavaScript", "TypeScript", "SCSS", "REST API"],
    links: { live: "https://www.unisender.com/" },
    icon: Mail,
    gradient: ["#0ea5e9", "#06b6d4"],
  },
  {
    id: "uncoEco",
    year: 2025,
    category: "ecommerce",
    featured: true,
    stack: ["Next.js", "React", "TypeScript", "SCSS"],
    links: { live: "https://unco.bio/ru" },
    icon: Leaf,
    gradient: ["#10b981", "#84cc16"],
  },
  {
    id: "issDigital",
    year: 2023,
    category: "webapp",
    featured: true,
    stack: ["JavaScript", "SCSS", "HTML5", "REST API"],
    links: { live: "https://iss.digital/" },
    icon: Layers,
    gradient: ["#1e3a8a", "#3b82f6"],
  },
  {
    id: "foodFutures",
    year: 2025,
    category: "ecommerce",
    featured: false,
    stack: ["Next.js", "React", "TypeScript", "SCSS", "REST API"],
    links: { live: "https://foodfutures.club/ru" },
    icon: Salad,
    gradient: ["#f59e0b", "#84cc16"],
  },
  {
    id: "pinkit",
    year: 2024,
    category: "webapp",
    featured: false,
    stack: ["JavaScript", "TypeScript", "SCSS", "REST API"],
    links: { live: "https://pinkit.io/" },
    icon: Plug,
    gradient: ["#ec4899", "#10b981"],
  },
  {
    id: "overseer",
    year: 2023,
    category: "webapp",
    featured: false,
    stack: ["JavaScript", "TypeScript", "SCSS", "REST API"],
    links: { live: "https://overseer.observer/" },
    icon: Activity,
    gradient: ["#3b82f6", "#06b6d4"],
  },
  {
    id: "taigaClub",
    year: 2023,
    category: "landing",
    featured: false,
    stack: ["JavaScript", "SCSS", "HTML5", "GSAP"],
    links: { live: "https://taigaclub.ru/" },
    icon: Mountain,
    gradient: ["#059669", "#a16207"],
  },
  {
    id: "premiaTogether",
    year: 2026,
    category: "landing",
    featured: false,
    stack: ["JavaScript", "SCSS", "HTML5"],
    links: { live: "https://xn--e1aglkf7g.xn--b1agazb5ah1e.xn--p1ai/" },
    icon: Award,
    gradient: ["#ef4444", "#3b82f6"],
  },
] as const satisfies readonly ProjectShape[];

export type ProjectId = (typeof RAW_PROJECTS)[number]["id"];

// Public type widens `links` so consumers can read the optional fields without
// TypeScript narrowing them away per-item. `id` stays narrow as the literal
// union — that's what powers safe indexing into translations.items.
export type Project = Omit<ProjectShape, "id"> & { id: ProjectId };

export const PROJECTS: readonly Project[] = RAW_PROJECTS;
