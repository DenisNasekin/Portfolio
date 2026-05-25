import { Container, SectionTitle } from "@/components/UI";
import { NAV_SECTIONS } from "@/constants/navigation";
import { Hero } from "@/sections/Hero";
import styles from "./page.module.scss";

// Hero is real; the rest are still placeholders and will be replaced
// section by section in upcoming stages.
const PLACEHOLDER_SECTIONS = NAV_SECTIONS.filter((s) => s.id !== "home");

export default function Home() {
  return (
    <>
      <Hero />

      {PLACEHOLDER_SECTIONS.map((section) => (
        <Container key={section.id} as="section" id={section.id} className={styles.section}>
          <SectionTitle
            eyebrow={section.id.toUpperCase()}
            title={`Раздел «${section.labelKey}»`}
            description="Заглушка. Будет заменена реальной секцией на следующих этапах."
          />
        </Container>
      ))}
    </>
  );
}
