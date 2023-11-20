import styles from "./flex-card.module.css";
import cn from "classnames";
import { CardContent } from "./card-content";
import {
  CardHeight,
  CardContent as CardContentProps,
} from "../../shared/types";
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
          contentType={content.contentType}
        />
      )}
    </div>
  );
}
