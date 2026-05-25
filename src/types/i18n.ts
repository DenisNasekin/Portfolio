import type { translations } from "@/constants/translations";

export type Locale = keyof typeof translations;
export type Translations = (typeof translations)[Locale];

export const LOCALES: Locale[] = ["ru", "en"];
export const DEFAULT_LOCALE: Locale = "ru";
