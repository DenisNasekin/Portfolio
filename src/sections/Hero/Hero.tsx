"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Fragment, useCallback, useRef } from "react";
import { useTranslations } from "@/components/Providers";
import { Button, Container, GitHubIcon, Marquee, StatusBadge } from "@/components/UI";
import { HERO_MARQUEE_STACK } from "@/constants/stack";
import styles from "./Hero.module.scss";

// Words animate one-by-one with a blur reveal — this looks far less typical
// than a plain fadeUp on the whole heading.
const wordVariants = {
  initial: { opacity: 0, y: 24, filter: "blur(16px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const containerVariants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

type WordProps = {
  children: React.ReactNode;
  highlight?: boolean;
};

function Word({ children, highlight }: WordProps) {
  return (
    <motion.span
      className={highlight ? styles.highlight : styles.word}
      variants={wordVariants}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.span>
  );
}

export function Hero() {
  const t = useTranslations();
  const rootRef = useRef<HTMLElement | null>(null);

  // Spotlight tracks the cursor via CSS custom properties; updating the style
  // on each mousemove is much cheaper than re-rendering on state changes.
  const onMouseMove = useCallback((event: React.MouseEvent<HTMLElement>) => {
    const el = rootRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
  }, []);

  const onMouseLeave = useCallback(() => {
    const el = rootRef.current;
    if (!el) return;
    el.style.setProperty("--mx", `50%`);
    el.style.setProperty("--my", `50%`);
  }, []);

  // The headline reads:
  //   {lineOne} {lineHighlight}
  //   {lineTwo}
  //   {lineThree}
  // Splitting it by line keeps wrapping predictable on small screens.
  const line1 = t.hero.lineOne.split(" ");
  const line2 = t.hero.lineTwo.split(" ");
  const line3 = t.hero.lineThree.split(" ");

  return (
    <section
      id="home"
      ref={rootRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={styles.hero}
      aria-label={t.brand.role}
    >
      <div className={styles.aurora} aria-hidden>
        <span className={styles.blob1} />
        <span className={styles.blob2} />
        <span className={styles.blob3} />
      </div>
      <div className={styles.spotlight} aria-hidden />

      <Container className={styles.container}>
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className={styles.content}
        >
          <motion.div variants={wordVariants} transition={{ duration: 0.6 }}>
            <StatusBadge>{t.hero.status}</StatusBadge>
          </motion.div>

          <h1 className={styles.headline}>
            <span className={styles.line}>
              {line1.map((w, i) => (
                <Word key={`a-${i}`}>{w}</Word>
              ))}{" "}
              <Word highlight>{t.hero.lineHighlight}</Word>
            </span>
            <span className={styles.line}>
              {line2.map((w, i) => (
                <Word key={`b-${i}`}>{w}</Word>
              ))}
            </span>
            <span className={styles.line}>
              {line3.map((w, i) => (
                <Word key={`c-${i}`}>{w}</Word>
              ))}
            </span>
          </h1>

          <motion.p variants={wordVariants} transition={{ duration: 0.6 }} className={styles.meta}>
            <span className={styles.metaLine} aria-hidden />
            {t.hero.meta.split(" · ").map((part, i, arr) => (
              <Fragment key={part}>
                <span className={styles.metaItem}>{part}</span>
                {i < arr.length - 1 && (
                  <span className={styles.metaDot} aria-hidden>
                    ·
                  </span>
                )}
              </Fragment>
            ))}
          </motion.p>

          <motion.div
            variants={wordVariants}
            transition={{ duration: 0.6 }}
            className={styles.cta}
          >
            <Button as="a" href="#projects" icon={<ArrowRight size={16} />} iconPosition="end">
              {t.hero.ctaProjects}
            </Button>
            <Button
              as="a"
              href="https://github.com/DenisNasekin"
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              icon={<GitHubIcon size={16} />}
            >
              {t.hero.ctaGithub}
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className={styles.marquee}
      >
        <Marquee items={HERO_MARQUEE_STACK} speed="normal" />
      </motion.div>
    </section>
  );
}
