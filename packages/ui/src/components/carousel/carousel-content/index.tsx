import {
  BackgroundImage,
  BackgroundType,
  BackgroundVideo,
} from "../../shared/types";
import type { CarouselContentProps } from "../types";
import { ImageCaption } from "./image-caption";
import { VideoCaption } from "./video-caption";

export function CarouselContent({ caption, background }: CarouselContentProps) {
  switch (background.backgroundType) {
    case BackgroundType.Image:
      const imageBackground: BackgroundImage = background as BackgroundImage;

      return (
        <ImageCaption
          primaryText={caption?.primaryText || ""}
          secondaryText={caption?.secondaryText}
          assetSrc={imageBackground.asset.src}
          backgroundPosition={imageBackground.backgroundPosition}
        />
      );
    case BackgroundType.Video:
      const videoBackground: BackgroundVideo = background as BackgroundVideo;
      return (
        <VideoCaption
          primaryText={caption?.primaryText || ""}
          secondaryText={caption?.secondaryText || ""}
          assetSrc={videoBackground.asset.src}
          backgroundPosition={videoBackground.backgroundPosition}
        />
      );
    default:
      return <div />;
  }
}
