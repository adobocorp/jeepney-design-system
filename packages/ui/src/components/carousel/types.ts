import { BackgroundProps } from "../shared/types";
import { CardContent, VideoContent } from "../shared/types";

export type CarouselContent = CardContent | VideoContent;

export type WithContentList = {
  contentList: CarouselContent[];
};

export type CarouselContentProps = {
  content: CarouselContent;
};

export type CarouselProps = BackgroundProps &
  WithContentList & {
    width: string;
    height: string;
  };
