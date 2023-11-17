import cn from "classnames";
import styles from "./background.module.css";
import { BackgroundColor } from "../types";

export function BackgroundFilled({ backgroundColor, children }) {
  return (
    <div
      className={cn(
        styles.background,
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
      {children}
    </div>
  );
}
