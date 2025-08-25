import cn from "classnames";
import {
  CardContent as CardContentProps,
  CardHeight,
} from "../../shared/types";
import { CardContent } from "./card-content";

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
        "bg-white/95",
        cardHeight === CardHeight.SHORT ? "h-32" : "",
        cardHeight === CardHeight.TALL ? "h-96" : ""
      )}
    >
      {content && (
        <CardContent
          primaryText={content.primaryText}
          secondaryText={content.secondaryText}
          AssetType={content.AssetType}
          asset={content.asset}
        />
      )}
    </div>
  );
}
