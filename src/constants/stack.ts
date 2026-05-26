// Tech names are universal — no need to localize.
export const HERO_MARQUEE_STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "SCSS",
  "Tailwind CSS",
  "Redux Toolkit",
  "Zustand",
  "React Query",
  "REST API",
  "GraphQL",
  "Framer Motion",
  "Vite",
  "Node.js",
  "Storybook",
  "Git",
  "Figma",
] as const;

// Grouped view used by the Stack section. Keys are looked up against the
// translation dictionary for name/tagline; items stay universal.
export const STACK_CATEGORIES = [
  {
    key: "core",
    items: ["React", "Next.js", "TypeScript", "JavaScript"],
  },
  {
    key: "styling",
    items: ["SCSS", "Tailwind CSS", "CSS3", "HTML5", "Framer Motion"],
  },
  {
    key: "stateData",
    items: ["Redux Toolkit", "Zustand", "React Query", "REST API", "GraphQL"],
  },
  {
    key: "tooling",
    items: ["Vite", "Storybook", "Node.js", "Git", "Figma"],
  },
] as const;

export type StackCategoryKey = (typeof STACK_CATEGORIES)[number]["key"];
