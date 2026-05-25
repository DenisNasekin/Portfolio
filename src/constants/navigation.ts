export const NAV_SECTIONS = [
  { id: "home", labelKey: "home" },
  { id: "about", labelKey: "about" },
  { id: "stack", labelKey: "stack" },
  { id: "projects", labelKey: "projects" },
  { id: "contact", labelKey: "contact" },
] as const;

export type NavSectionId = (typeof NAV_SECTIONS)[number]["id"];
export type NavLabelKey = (typeof NAV_SECTIONS)[number]["labelKey"];
