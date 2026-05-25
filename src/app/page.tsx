import { Container, SectionTitle } from "@/components/UI";
import { NAV_SECTIONS } from "@/constants/navigation";
import styles from "./page.module.scss";

// Placeholder sections so the navigation, active-link tracking and smooth
// scroll all have real targets to scroll to. Each will be replaced by a
// real section component in later stages.
export default function Home() {
  return (
    <>
      {NAV_SECTIONS.map((section) => (
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
