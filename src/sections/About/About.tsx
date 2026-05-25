"use client";

import { motion, useInView } from "framer-motion";
import { Fragment, useRef } from "react";
import { useTranslations } from "@/components/Providers";
import { Container } from "@/components/UI";
import { useCounter } from "@/hooks/useCounter";
import { fadeUp, staggerContainer, viewportOnce } from "@/utils/motion";
import styles from "./About.module.scss";

// Render order for the three numeric stats — keys are looked up against the
// dictionary, so swapping translations keeps the layout intact.
const STAT_KEYS = ["experience", "websites", "products"] as const;

type NumberStatProps = {
  target: number;
  suffix: string;
  label: string;
};

function NumberStat({ target, suffix, label }: NumberStatProps) {
  const ref = useRef<HTMLLIElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const value = useCounter(target, 1400, isInView);

  return (
    <motion.li ref={ref} variants={fadeUp} className={styles.stat}>
      <span className={styles.statValue}>
        {value}
        <span className={styles.statSuffix}>{suffix}</span>
      </span>
      <span className={styles.statLabel}>{label}</span>
    </motion.li>
  );
}

export function About() {
  const t = useTranslations();
  const a = t.about;

  return (
    <section id="about" className={styles.about}>
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
            {a.eyebrow}
          </motion.span>
          <motion.h2 variants={fadeUp} className={styles.title}>
            {a.titleBefore}{" "}
            <span className={styles.highlight}>{a.titleHighlight}</span>{" "}
            {a.titleAfter}
          </motion.h2>
          <motion.p variants={fadeUp} className={styles.description}>
            {a.description}
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.15, 0.1)}
          initial="initial"
          whileInView="animate"
          viewport={viewportOnce}
          className={styles.bio}
        >
          {a.bio.map((para, i) => (
            <motion.p key={i} variants={fadeUp} className={styles.bioPara}>
              {para.map((seg, j) =>
                seg.kind === "accent" ? (
                  <span key={j} className={styles.bioAccent}>
                    {seg.value}
                  </span>
                ) : (
                  <Fragment key={j}>{seg.value}</Fragment>
                ),
              )}
            </motion.p>
          ))}
        </motion.div>

        <motion.ul
          variants={staggerContainer(0.08, 0.1)}
          initial="initial"
          whileInView="animate"
          viewport={viewportOnce}
          className={styles.stats}
        >
          {STAT_KEYS.map((key) => {
            const s = a.stats[key];
            return (
              <NumberStat
                key={key}
                target={s.target}
                suffix={s.suffix}
                label={s.label}
              />
            );
          })}

          <motion.li
            variants={fadeUp}
            className={`${styles.stat} ${styles.statTags}`}
          >
            <span className={styles.statLabel}>{a.projectTypes.label}</span>
            <ul className={styles.tagList}>
              {a.projectTypes.tags.map((tag) => (
                <li key={tag} className={styles.tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </motion.li>
        </motion.ul>
      </Container>
    </section>
  );
}
