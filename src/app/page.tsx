import { Container, SectionTitle } from "@/components/UI";
import { NAV_SECTIONS } from "@/constants/navigation";
import { About } from "@/sections/About";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Stack } from "@/sections/Stack";
import styles from "./page.module.scss";

// Hero, About, Stack and Projects are real; Contact is still a placeholder
// and will be replaced in the next stage.
const IMPLEMENTED = new Set(["home", "about", "stack", "projects"]);
const PLACEHOLDER_SECTIONS = NAV_SECTIONS.filter((s) => !IMPLEMENTED.has(s.id));

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stack />
      <Projects />

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
