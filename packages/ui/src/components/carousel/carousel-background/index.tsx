import { BackgroundFilled } from "../../shared/background/background-filled";
import { BackgroundImage } from "../../shared/background/background-image";
import { BackgroundVideo } from "../../shared/background/background-video";
import {
  BackgroundFilled as BackgroundFilledType,
  BackgroundImage as BackgroundImageType,
  BackgroundType,
  BackgroundVideo as BackgroundVideoType,
  WithBackground,
} from "../../shared/types";

type CarouselBackgroundProps = WithBackground & {
  children: any;
};

export function CarouselBackground({
  background,
  children,
}: CarouselBackgroundProps) {
  switch (background.backgroundType) {
    case BackgroundType.Image:
      const imageBackground = background as BackgroundImageType;
      return (
        <BackgroundImage background={imageBackground}>
          {children}
        </BackgroundImage>
      );
    case BackgroundType.Filled:
      const filledBackground = background as BackgroundFilledType;
      return (
        <BackgroundFilled background={filledBackground}>
          {children}
        </BackgroundFilled>
      );
    case BackgroundType.Video:
      const videoBackground = background as BackgroundVideoType;
      return (
        <BackgroundVideo background={videoBackground}>
          {children}
        </BackgroundVideo>
      );
    default:
      return <div></div>;
  }
}
