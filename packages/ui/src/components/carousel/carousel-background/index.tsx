import { BackgroundFilled } from "../../shared/background/background-filled";
import { BackgroundImage } from "../../shared/background/background-image";
import { BackgroundVideo } from "../../shared/background/background-video";
import { BackgroundType, WithBackground } from "../../shared/types";

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
        <BackgroundImage background={background}>{children}</BackgroundImage>
      );
    case BackgroundType.Filled:
      return (
        <BackgroundFilled background={background}>{children}</BackgroundFilled>
      );
    case BackgroundType.Video:
      return (
        <BackgroundVideo background={background}>{children}</BackgroundVideo>
      );
    default:
      return <div></div>;
  }
}
