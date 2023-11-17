import { BackgroundType, WithBackground } from "../types";
import { BackgroundImage } from "./background-image";
import { BackgroundFilled } from "./background-filled";

type CarouselBackgroundProps = WithBackground & {
  children: any;
};

export function CarouselBackground({
  background,
  children,
}: CarouselBackgroundProps) {
  switch (background.backgroundType) {
    case BackgroundType.Image:
      return (
        <BackgroundImage backgroundPosition={background.backgroundPosition}>
          {children}
        </BackgroundImage>
      );
    case BackgroundType.Filled:
    default:
      return (
        <BackgroundFilled backgroundColor={background.backgroundColor}>
          {children}
        </BackgroundFilled>
      );
  }
}
