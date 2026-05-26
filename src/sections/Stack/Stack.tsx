"use client";

import { motion } from "framer-motion";
import { Atom, Database, type LucideIcon, Palette, Wrench } from "lucide-react";
import { useTranslations } from "@/components/Providers";
import { Container } from "@/components/UI";
import { STACK_CATEGORIES, type StackCategoryKey } from "@/constants/stack";
import { fadeUp, staggerContainer, viewportOnce } from "@/utils/motion";
import styles from "./Stack.module.scss";

const ICONS: Record<StackCategoryKey, LucideIcon> = {
  core: Atom,
  styling: Palette,
  stateData: Database,
  tooling: Wrench,
};

export function Stack() {
  const t = useTranslations();
  const s = t.stack;

  return (
    <section id="stack" className={styles.stack}>
      <div className={styles.orb} aria-hidden />

      <Container>
        <motion.div
          variants={staggerContainer(0.1, 0)}
          initial="initial"
          whileInView="animate"
          viewport={viewportOnce}
          className={styles.head}
        >
          <motion.span variants={fadeUp} className={styles.eyebrow}>
            {s.eyebrow}
          </motion.span>
          <motion.h2 variants={fadeUp} className={styles.title}>
            {s.titleBefore}{" "}
            <span className={styles.highlight}>{s.titleHighlight}</span>{" "}
            {s.titleAfter}
          </motion.h2>
          <motion.p variants={fadeUp} className={styles.description}>
            {s.description}
          </motion.p>
        </motion.div>

        <motion.ul
          variants={staggerContainer(0.12, 0.1)}
          initial="initial"
          whileInView="animate"
          viewport={viewportOnce}
          className={styles.grid}
        >
          {STACK_CATEGORIES.map(({ key, items }) => {
            const Icon = ICONS[key];
            const c = s.categories[key];
            return (
              <motion.li key={key} variants={fadeUp} className={styles.card}>
                <div className={styles.iconWrap} aria-hidden>
                  <Icon size={22} />
                </div>
                <h3 className={styles.name}>{c.name}</h3>
                <p className={styles.tagline}>{c.tagline}</p>
                <ul className={styles.tags}>
                  {items.map((item) => (
                    <li key={item} className={styles.tag}>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.li>
            );
          })}
        </motion.ul>
      </Container>
    </section>
  );
}
