"use client";

import { useTranslations } from "@/components/Providers";
import { Container } from "@/components/UI";
import styles from "./Footer.module.scss";

export function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <div className={styles.copy}>
          © {year} {t.brand.name}. {t.footer.rights}.
        </div>
        <div className={styles.note}>{t.footer.builtWith}</div>
      </Container>
    </footer>
  );
}
