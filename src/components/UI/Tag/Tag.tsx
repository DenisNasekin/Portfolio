import clsx from "clsx";
import type { ReactNode } from "react";
import styles from "./Tag.module.scss";

type TagProps = {
  children: ReactNode;
  variant?: "default" | "accent";
  className?: string;
};

export function Tag({ children, variant = "default", className }: TagProps) {
  return <span className={clsx(styles.tag, styles[variant], className)}>{children}</span>;
}
