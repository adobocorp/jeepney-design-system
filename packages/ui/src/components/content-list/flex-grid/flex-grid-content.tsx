import {
  CardHeight,
  CardContent as CardContentProps,
} from "../../shared/types";
import { FlexCard } from "../flex-card";
import { FlexGridType } from "../types";

type FlexCardContent = CardContentProps;
type WithContent = {
  content?: FlexCardContent;
};

type FlexGridContentProps = WithContent & {
  flexGridType: FlexGridType;
};

export function FlexGridContent({
  content,
  flexGridType,
}: FlexGridContentProps) {
  switch (flexGridType) {
    case FlexGridType.ShortCardGrid:
      return <FlexCard cardHeight={CardHeight.SHORT} content={content} />;
    case FlexGridType.TallCardGrid:
      return <FlexCard cardHeight={CardHeight.TALL} content={content} />;
    default:
      return <div />;
  }
}
