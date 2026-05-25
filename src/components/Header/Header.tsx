"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import { useTranslations } from "@/components/Providers";
import { Container, LangToggle, ThemeToggle } from "@/components/UI";
import { NAV_SECTIONS } from "@/constants/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrolled } from "@/hooks/useScrolled";
import { fadeDown } from "@/utils/motion";
import styles from "./Header.module.scss";

const SECTION_IDS = NAV_SECTIONS.map((s) => s.id);

export function Header() {
  const t = useTranslations();
  const scrolled = useScrolled(24);
  const active = useActiveSection(SECTION_IDS);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  // Close the menu on Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen, closeMenu]);

  const navItems = useMemo(
    () =>
      NAV_SECTIONS.map((section) => ({
        id: section.id,
        href: `#${section.id}`,
        label: t.nav[section.labelKey],
      })),
    [t],
  );

  return (
    <motion.header
      variants={fadeDown}
      initial="initial"
      animate="animate"
      className={clsx(styles.header, scrolled && styles.scrolled)}
    >
      <Container as="nav" className={styles.inner} aria-label={t.brand.role}>
        <a href="#home" className={styles.brand} onClick={closeMenu}>
          <span className={styles.brandName}>{t.brand.name}</span>
          <span className={styles.brandRole}>{t.brand.role}</span>
        </a>

        <ul className={styles.links}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={clsx(styles.link, active === item.id && styles.linkActive)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.controls}>
          <LangToggle />
          <ThemeToggle />
          <button
            type="button"
            className={styles.burger}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Container className={styles.mobileInner}>
              <ul className={styles.mobileLinks}>
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className={clsx(
                        styles.mobileLink,
                        active === item.id && styles.linkActive,
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
