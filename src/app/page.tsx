import { Container, SectionTitle } from "@/components/UI";
import { NAV_SECTIONS } from "@/constants/navigation";
import { About } from "@/sections/About";
import { Hero } from "@/sections/Hero";
import { Stack } from "@/sections/Stack";
import styles from "./page.module.scss";

// Hero, About and Stack are real; the rest are still placeholders and will be
// replaced section by section in upcoming stages.
const IMPLEMENTED = new Set(["home", "about", "stack"]);
const PLACEHOLDER_SECTIONS = NAV_SECTIONS.filter((s) => !IMPLEMENTED.has(s.id));

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stack />

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
