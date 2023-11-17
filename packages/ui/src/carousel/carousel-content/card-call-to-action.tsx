import styles from "./content.module.css";
import { BackgroundColor } from "../types";
import cn from "classnames";

export function CardCallToAction({ callToAction, backgroundColor }) {
  const useDarkCta =
    [
      BackgroundColor.Neutral,
      BackgroundColor.Secondary,
      BackgroundColor.Warning,
    ].findIndex((c) => backgroundColor === c) >= 0;

  return (
    <div
      className={cn(
        styles.cardContentCallToActionContainer,
        backgroundColor === BackgroundColor.Primary
          ? styles.backgroundWithPrimary
          : "",
        backgroundColor === BackgroundColor.Secondary
          ? styles.backgroundWithSecondary
          : "",
        backgroundColor === BackgroundColor.Neutral
          ? styles.backgroundWithNeutral
          : "",
        backgroundColor === BackgroundColor.Success
          ? styles.backgroundWithSuccess
          : "",
        backgroundColor === BackgroundColor.Alert
          ? styles.backgroundWithAlert
          : "",
        backgroundColor === BackgroundColor.Warning
          ? styles.backgroundWithWarning
          : ""
      )}
    >
      <a
        className={cn(
          styles.cardContentCallToAction,
          useDarkCta ? styles.ctaWithDark : styles.ctaWithLight
        )}
        href={callToAction.href}
        target={callToAction.target}
      >
        {callToAction.text}
      </a>
    </div>
  );
}
