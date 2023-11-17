import styles from "./content.module.css";
import cn from "classnames";
import { CardContent as CardContentProps } from "../types";
import { CardCallToAction } from "./card-call-to-action";

export const CardContent = ({
  primaryText,
  secondaryText,
  callToAction,
  background,
}: any) => {
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
      <div className={cn(styles.cardLastRow)}>
        <CardCallToAction
          callToAction={callToAction}
          backgroundColor={background.backgroundColor}
        ></CardCallToAction>
      </div>
    </div>
  );
};
