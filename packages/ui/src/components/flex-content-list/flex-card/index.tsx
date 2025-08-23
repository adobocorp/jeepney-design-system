import cn from "classnames";
import {
  CardContent as CardContentProps,
  CardHeight,
} from "../../shared/types";
import { CardContent } from "./card-content";
import styles from "./flex-card.module.css";
export type FlexGridContent = CardContentProps;

export type WithContent = {
  content?: FlexGridContent;
};

export type FlexCardProps = WithContent & {
  cardHeight: CardHeight;
};

export function FlexCard({ content, cardHeight }: FlexCardProps) {
  return (
    <div
      className={cn(
        styles.cardContainer,
        cardHeight === CardHeight.SHORT ? styles.shortCard : "",
        cardHeight === CardHeight.TALL ? styles.tallCard : ""
      )}
    >
      {content && (
        <CardContent
          primaryText={content.primaryText}
          secondaryText={content.secondaryText}
          assetType={content.AssetType}
        />
      )}
    </div>
  );
}
