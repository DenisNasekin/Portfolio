import clsx from "clsx";
import styles from "./Marquee.module.scss";

type MarqueeProps = {
  items: readonly string[];
  speed?: "slow" | "normal" | "fast";
  direction?: "left" | "right";
  className?: string;
};

export function Marquee({
  items,
  speed = "normal",
  direction = "left",
  className,
}: MarqueeProps) {
  // We render the list twice in a row so the keyframe can translate the
  // whole track by exactly 50% for a seamless loop. `aria-hidden` is set on
  // the duplicate so assistive tech only reads the items once.
  return (
    <div className={clsx(styles.wrap, className)}>
      <div
        className={clsx(styles.track, styles[speed], direction === "right" && styles.reverse)}
      >
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item} className={styles.item}>
              {item}
            </li>
          ))}
        </ul>
        <ul className={styles.list} aria-hidden>
          {items.map((item) => (
            <li key={`${item}-dup`} className={styles.item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
