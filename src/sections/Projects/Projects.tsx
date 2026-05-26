"use client";

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";
import { useTranslations } from "@/components/Providers";
import { Button, Container } from "@/components/UI";
import {
  PROJECT_CATEGORIES,
  PROJECTS,
  type Project,
  type ProjectCategory,
} from "@/constants/projects";
import { fadeUp, staggerContainer, viewportOnce } from "@/utils/motion";
import { ProjectPreview } from "./ProjectPreview";
import styles from "./Projects.module.scss";

type FilterKey = "all" | ProjectCategory;
const FILTERS: readonly FilterKey[] = ["all", ...PROJECT_CATEGORIES];

export function Projects() {
  const t = useTranslations();
  const p = t.projects;
  const [filter, setFilter] = useState<FilterKey>("all");

  const { featured, compact } = useMemo(() => {
    const matches = (project: Project) => filter === "all" || project.category === filter;
    return {
      featured: PROJECTS.filter((proj) => proj.featured && matches(proj)),
      compact: PROJECTS.filter((proj) => !proj.featured && matches(proj)),
    };
  }, [filter]);

  const isEmpty = featured.length === 0 && compact.length === 0;

  return (
    <section id="projects" className={styles.projects}>
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
          <motion.span variants={fadeUp} className={styles.eyebrow}>
            {p.eyebrow}
          </motion.span>
          <motion.h2 variants={fadeUp} className={styles.title}>
            {p.titleBefore}{" "}
            <span className={styles.highlight}>{p.titleHighlight}</span>{" "}
            {p.titleAfter}
          </motion.h2>
          <motion.p variants={fadeUp} className={styles.description}>
            {p.description}
          </motion.p>
        </motion.div>

        <LayoutGroup id="projects-filter">
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={viewportOnce}
            className={styles.filters}
            role="tablist"
            aria-label={p.eyebrow}
          >
            {FILTERS.map((key) => {
              const isActive = filter === key;
              return (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setFilter(key)}
                  className={`${styles.filter} ${isActive ? styles.filterActive : ""}`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="projects-filter-bg"
                      className={styles.filterBg}
                      transition={{ type: "spring", stiffness: 500, damping: 40 }}
                    />
                  )}
                  <span className={styles.filterLabel}>{p.filters[key]}</span>
                </button>
              );
            })}
          </motion.div>
        </LayoutGroup>

        <motion.div layout className={styles.featured}>
          <AnimatePresence mode="popLayout">
            {featured.map((project, index) => (
              <FeaturedRow
                key={project.id}
                project={project}
                reverse={index % 2 === 1}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {compact.length > 0 && (
          <motion.div layout className={styles.more}>
            <motion.h3 layout className={styles.moreTitle}>
              <span className={styles.moreLine} aria-hidden />
              {p.moreLabel}
            </motion.h3>
            <motion.ul layout className={styles.compactGrid}>
              <AnimatePresence mode="popLayout">
                {compact.map((project) => (
                  <CompactCard key={project.id} project={project} />
                ))}
              </AnimatePresence>
            </motion.ul>
          </motion.div>
        )}

        {isEmpty && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={styles.empty}
          >
            {p.empty}
          </motion.div>
        )}
      </Container>
    </section>
  );
}

/* ───── Featured (alternating big rows) ───── */

function FeaturedRow({ project, reverse }: { project: Project; reverse: boolean }) {
  const t = useTranslations();
  const p = t.projects;
  const item = p.items[project.id];

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`${styles.featuredRow} ${reverse ? styles.featuredReverse : ""}`}
    >
      <div className={styles.featuredPreview}>
        <ProjectPreview
          id={project.id}
          icon={project.icon}
          gradient={project.gradient}
          ariaLabel={item.name}
        />
      </div>

      <div className={styles.featuredContent}>
        <div className={styles.meta}>
          <span className={styles.metaYear}>{project.year}</span>
          <span className={styles.metaSep} aria-hidden>·</span>
          <span className={styles.metaCategory}>
            {p.categoryLabels[project.category]}
          </span>
        </div>

        <h3 className={styles.featuredName}>{item.name}</h3>
        <p className={styles.problem}>{item.problem}</p>

        <div className={styles.outcome}>
          <span className={styles.outcomeBadge}>{p.outcomeLabel}</span>
          <p className={styles.outcomeText}>{item.outcome}</p>
        </div>

        <ul className={styles.stack}>
          {project.stack.map((tech) => (
            <li key={tech} className={styles.stackChip}>
              {tech}
            </li>
          ))}
        </ul>

        {project.links.live && (
          <div className={styles.actions}>
            <Button
              as="a"
              href={project.links.live}
              variant="primary"
              icon={<ArrowUpRight size={16} />}
              iconPosition="end"
              target="_blank"
              rel="noopener noreferrer"
            >
              {p.cta.live}
            </Button>
          </div>
        )}
      </div>
    </motion.article>
  );
}

/* ───── Compact (uniform grid card) ───── */

function CompactCard({ project }: { project: Project }) {
  const t = useTranslations();
  const p = t.projects;
  const item = p.items[project.id];

  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={styles.compactCard}
    >
      <ProjectPreview
        id={project.id}
        icon={project.icon}
        gradient={project.gradient}
        size="compact"
        ariaLabel={item.name}
      />
      <div className={styles.compactBody}>
        <div className={styles.metaCompact}>
          <span>{project.year}</span>
          <span className={styles.metaSep} aria-hidden>·</span>
          <span>{p.categoryLabels[project.category]}</span>
        </div>
        <h4 className={styles.compactName}>{item.name}</h4>
        <p className={styles.compactOutcome}>{item.outcome}</p>
        <ul className={styles.stackCompact}>
          {project.stack.slice(0, 3).map((tech) => (
            <li key={tech} className={styles.stackChip}>
              {tech}
            </li>
          ))}
          {project.stack.length > 3 && (
            <li className={`${styles.stackChip} ${styles.stackMore}`}>
              +{project.stack.length - 3}
            </li>
          )}
        </ul>
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.compactLink}
          >
            {p.cta.live}
            <ArrowUpRight size={14} aria-hidden />
          </a>
        )}
      </div>
    </motion.li>
  );
}
