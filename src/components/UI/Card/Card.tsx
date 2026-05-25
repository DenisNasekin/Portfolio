import clsx from "clsx";
import type { ReactNode } from "react";
import styles from "./Card.module.scss";

type CardProps = {
  as?: "article" | "div" | "li";
  interactive?: boolean;
  className?: string;
  children: ReactNode;
};

export function Card({
  as: Tag = "div",
  interactive = false,
  className,
  children,
}: CardProps) {
  return (
    <Tag className={clsx(styles.card, interactive && styles.interactive, className)}>
      {children}
    </Tag>
  );
}
