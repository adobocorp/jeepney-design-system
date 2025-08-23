import { BackgroundType } from "../../shared/types";
import type { CarouselContentProps } from "../types";
import { ImageCaption } from "./image-caption";
import { VideoCaption } from "./video-caption";

export function CarouselContent({ caption, background }: CarouselContentProps) {
  switch (background.backgroundType) {
    case BackgroundType.Image:
      return <ImageCaption caption={caption} background={background} />;
    case BackgroundType.Video:
      return <VideoCaption caption={caption} background={background} />;
    default:
      return <div />;
  }
}
