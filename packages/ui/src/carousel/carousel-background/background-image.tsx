import cn from "classnames";
import styles from "./background.module.css";

export function BackgroundImage({ backgroundPosition, children }) {
  return (
    <div
      className={cn(styles.background, styles.backgroundWithImage)}
      style={{ backgroundPosition }}
    >
      {children}
    </div>
  );
}
