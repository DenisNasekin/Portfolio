import type { ComponentType } from "react";
import { GitHubIcon, TelegramIcon } from "@/components/UI";

// Primary first, secondary second. The big CTA uses the primary; both render
// as clickable mailto links underneath the button.
export const CONTACT_EMAILS = ["nasekindo@yandex.ru", "nasekindoi@gmail.com"] as const;

type ContactIcon = ComponentType<{ size?: number }>;

export type ContactMethod = {
  readonly id: "telegram" | "github";
  readonly href: string;
  readonly icon: ContactIcon;
  readonly gradient: readonly [string, string];
};

export const CONTACT_METHODS: readonly ContactMethod[] = [
  {
    id: "telegram",
    href: "https://t.me/denisnasekin",
    icon: TelegramIcon,
    gradient: ["#0088cc", "#26a5e4"],
  },
  {
    id: "github",
    href: "https://github.com/DenisNasekin",
    icon: GitHubIcon,
    gradient: ["#6e7681", "#a78bfa"],
  },
];
