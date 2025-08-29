import { Card } from "../../card";
import {
  BackgroundColor,
  CardContent as CardContentProps,
  CardHeight,
} from "../../shared/types";
import { FlexGridType } from "../types";

type WithContent = {
  content?: CardContentProps;
};

type FlexGridContentProps = WithContent & {
  flexGridType: FlexGridType;
  cardBackgroundColor: BackgroundColor;
};

export function FlexGridContent({
  content,
  flexGridType,
  cardBackgroundColor,
}: FlexGridContentProps) {
  switch (flexGridType) {
    case FlexGridType.ShortCardGrid:
      return (
        <Card
          cardHeight={CardHeight.SHORT}
          cardBackground={cardBackgroundColor}
          content={content}
        />
      );
    case FlexGridType.TallCardGrid:
      return (
        <Card
          cardHeight={CardHeight.TALL}
          cardBackground={cardBackgroundColor}
          content={content}
        />
      );
    default:
      return <div />;
  }
}
