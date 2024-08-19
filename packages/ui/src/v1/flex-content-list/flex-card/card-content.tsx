import styles from "./flex-card.module.css";
import cn from "classnames";
import { CardContent as CardContentProps } from "../../shared/types";

export const CardContent = ({
  primaryText,
  secondaryText,
}: CardContentProps) => {
  return (
    <div className={cn(styles.contentContainer, styles.cardContainer)}>
      <div className={cn(styles.cardContent, styles.cardContentPrimary)}>
        {primaryText}
      </div>
      {secondaryText && (
        <div className={cn(styles.cardContent, styles.cardContentSecondary)}>
          {secondaryText}
        </div>
      )}
    </div>
  );
};
