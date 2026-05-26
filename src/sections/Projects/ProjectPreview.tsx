"use client";

import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { type CSSProperties, useState } from "react";
import styles from "./Projects.module.scss";

type ProjectPreviewProps = {
  id: string;
  icon: LucideIcon;
  gradient: readonly [string, string];
  size?: "featured" | "compact";
  ariaLabel?: string;
};

// Browser-frame mockup. Shows the real screenshot from public/projects/{id}.png
// when available; falls back to a stylized gradient + watermark icon when the
// file is missing (e.g. before `npm run screenshots` has been run).
export function ProjectPreview({
  id,
  icon: Icon,
  gradient,
  size = "featured",
  ariaLabel,
}: ProjectPreviewProps) {
  const style = {
    "--preview-from": gradient[0],
    "--preview-to": gradient[1],
  } as CSSProperties;

  const [imageOk, setImageOk] = useState(true);
  const imageSrc = `/projects/${id}.png`;
  const sizes =
    size === "featured"
      ? "(max-width: 768px) 92vw, 50vw"
      : "(max-width: 576px) 92vw, (max-width: 992px) 46vw, 30vw";

  return (
    <div
      className={`${styles.preview} ${size === "compact" ? styles.previewCompact : ""}`}
      style={style}
      role="img"
      aria-label={ariaLabel}
    >
      <div className={styles.previewChrome} aria-hidden>
        <span className={styles.previewDot} data-color="red" />
        <span className={styles.previewDot} data-color="yellow" />
        <span className={styles.previewDot} data-color="green" />
        <span className={styles.previewUrl} />
      </div>

      <div className={styles.previewCanvas} aria-hidden>
        {imageOk ? (
          <Image
            src={imageSrc}
            alt=""
            fill
            sizes={sizes}
            className={styles.previewImage}
            onError={() => setImageOk(false)}
          />
        ) : (
          <>
            <div className={styles.previewGlow} />
            <Icon className={styles.previewWatermark} strokeWidth={1.25} />
            <div className={styles.previewSkeleton}>
              <span className={styles.previewBar} data-w="60" />
              <span className={styles.previewBar} data-w="40" />
              <span className={styles.previewBar} data-w="75" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
