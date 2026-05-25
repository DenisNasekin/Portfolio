import clsx from "clsx";
import styles from "./Container.module.scss";

type ContainerProps = {
  as?: "div" | "section" | "header" | "footer" | "main" | "nav";
  size?: "default" | "narrow" | "wide";
  className?: string;
  children: React.ReactNode;
  id?: string;
};

export function Container({
  as: Tag = "div",
  size = "default",
  className,
  children,
  id,
}: ContainerProps) {
  return (
    <Tag id={id} className={clsx(styles.container, styles[size], className)}>
      {children}
    </Tag>
  );
}
