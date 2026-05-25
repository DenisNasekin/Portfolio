"use client";

import { useLocale, useTranslations } from "@/components/Providers";
import styles from "./LangToggle.module.scss";

export function LangToggle() {
  const { locale, toggleLocale } = useLocale();
  const t = useTranslations();
  const nextLocale = locale === "ru" ? "en" : "ru";

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={`${t.language.switchTo}: ${t.language[nextLocale]}`}
      title={t.language[nextLocale]}
      className={styles.toggle}
    >
      <span className={styles.code} aria-hidden>
        {t.language.short[locale]}
      </span>
    </button>
  );
}
