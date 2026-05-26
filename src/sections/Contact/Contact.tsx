"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import type { CSSProperties } from "react";
import { useTranslations } from "@/components/Providers";
import { Button, Container, StatusBadge } from "@/components/UI";
import { CONTACT_EMAILS, CONTACT_METHODS } from "@/constants/contact";
import { fadeUp, staggerContainer, viewportOnce } from "@/utils/motion";
import styles from "./Contact.module.scss";

export function Contact() {
  const t = useTranslations();
  const c = t.contact;

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.orbA} aria-hidden />
      <div className={styles.orbB} aria-hidden />

      <Container>
        <motion.div
          variants={staggerContainer(0.1, 0)}
          initial="initial"
          whileInView="animate"
          viewport={viewportOnce}
          className={styles.head}
        >
          <motion.div variants={fadeUp}>
            <StatusBadge>{c.status}</StatusBadge>
          </motion.div>

          <motion.span variants={fadeUp} className={styles.eyebrow}>
            {c.eyebrow}
          </motion.span>

          <motion.h2 variants={fadeUp} className={styles.title}>
            {c.titleBefore}{" "}
            <span className={styles.highlight}>{c.titleHighlight}</span>{" "}
            {c.titleAfter}
          </motion.h2>

          <motion.p variants={fadeUp} className={styles.description}>
            {c.description}
          </motion.p>

          <motion.div variants={fadeUp} className={styles.primaryCta}>
            <Button
              as="a"
              href={`mailto:${CONTACT_EMAILS[0]}`}
              size="lg"
              icon={<Mail size={18} />}
            >
              {c.primaryCta}
            </Button>
            <div className={styles.emailLinks}>
              <a href={`mailto:${CONTACT_EMAILS[0]}`} className={styles.emailLink}>
                {CONTACT_EMAILS[0]}
              </a>
              <span className={styles.emailSep} aria-hidden>
                ·
              </span>
              <a href={`mailto:${CONTACT_EMAILS[1]}`} className={styles.emailLink}>
                {CONTACT_EMAILS[1]}
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08, 0.15)}
          initial="initial"
          whileInView="animate"
          viewport={viewportOnce}
          className={styles.methodsWrap}
        >
          <motion.span variants={fadeUp} className={styles.methodsLabel}>
            <span className={styles.methodsLine} aria-hidden />
            {c.methodsLabel}
            <span className={styles.methodsLine} aria-hidden />
          </motion.span>

          <motion.ul variants={fadeUp} className={styles.methods}>
            {CONTACT_METHODS.map((method) => {
              const m = c.methods[method.id];
              const Icon = method.icon;
              const style = {
                "--method-from": method.gradient[0],
                "--method-to": method.gradient[1],
              } as CSSProperties;
              return (
                <li key={method.id}>
                  <a
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.method}
                    style={style}
                  >
                    <span className={styles.methodIcon} aria-hidden>
                      <Icon size={20} />
                    </span>
                    <span className={styles.methodContent}>
                      <span className={styles.methodName}>{m.name}</span>
                      <span className={styles.methodHandle}>{m.handle}</span>
                    </span>
                    <ArrowUpRight
                      size={18}
                      className={styles.methodArrow}
                      aria-hidden
                    />
                  </a>
                </li>
              );
            })}
          </motion.ul>

          <motion.p variants={fadeUp} className={styles.footnote}>
            {c.footnote}
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
