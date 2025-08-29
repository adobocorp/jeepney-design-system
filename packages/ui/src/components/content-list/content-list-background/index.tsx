import { BackgroundFilled } from "../../shared/background/background-filled";
import { BackgroundImage } from "../../shared/background/background-image";
import { BackgroundVideo } from "../../shared/background/background-video";
import {
  BackgroundFilled as BackgroundFilledType,
  BackgroundImage as BackgroundImageType,
  BackgroundVideo as BackgroundVideoType,
  BackgroundType,
  WithBackground,
} from "../../shared/types";

type FlexBackgroundProps = WithBackground & {
  children: any;
};

export function ContentListBackground({
  background,
  children,
}: FlexBackgroundProps) {
  switch (background.backgroundType) {
    case BackgroundType.Image:
      const imageBackground = background as BackgroundImageType;
      return (
        <BackgroundImage background={imageBackground}>
          {children}
        </BackgroundImage>
      );
    case BackgroundType.Video:
      const videoBackground = background as BackgroundVideoType;
      return (
        <BackgroundVideo background={videoBackground}>
          {children}
        </BackgroundVideo>
      );
    case BackgroundType.Filled:
    default:
      const filledBackground = background as BackgroundFilledType;
      return (
        <BackgroundFilled background={filledBackground}>
          {children}
        </BackgroundFilled>
      );
  }
}
