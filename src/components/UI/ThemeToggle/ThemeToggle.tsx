"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/Providers";
import { useTranslations } from "@/components/Providers";
import styles from "./ThemeToggle.module.scss";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const t = useTranslations();
  const isDark = theme === "dark";
  const label = isDark ? t.theme.toggleToLight : t.theme.toggleToDark;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={styles.toggle}
    >
      {isDark ? <Sun size={18} aria-hidden /> : <Moon size={18} aria-hidden />}
    </button>
  );
}
