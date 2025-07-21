import styles from "./image-caption.module.css";
import cn from "classnames";

export function UpperImage({ backgroundPosition = "center" }) {
  return (
    <div
      className={cn(styles.contentContainer, styles.upperImageContainer)}
      style={{ backgroundPosition }}
    ></div>
  );
}
