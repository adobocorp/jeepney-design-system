import { BackgroundProps } from "../shared/types";
import { CardContent, VideoContent } from "../shared/types";

export type CarouselContent = CardContent | VideoContent;

export type WithContent = {
  content?: CarouselContent;
};

export type CarouselContentProps = WithContent;

export type CarouselProps = BackgroundProps &
  CarouselContentProps & {
    width: string;
    height: string;
  };
