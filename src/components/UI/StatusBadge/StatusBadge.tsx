import clsx from "clsx";
import type { ReactNode } from "react";
import styles from "./StatusBadge.module.scss";

type StatusBadgeProps = {
  children: ReactNode;
  tone?: "available" | "busy" | "neutral";
  className?: string;
};

export function StatusBadge({
  children,
  tone = "available",
  className,
}: StatusBadgeProps) {
  return (
    <span className={clsx(styles.badge, styles[tone], className)}>
      <span className={styles.dot} aria-hidden>
        <span className={styles.pulse} />
      </span>
      <span>{children}</span>
    </span>
  );
}
