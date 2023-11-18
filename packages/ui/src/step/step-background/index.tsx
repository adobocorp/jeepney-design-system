import { BackgroundType, WithBackground } from "../../shared/types";
import { BackgroundImage } from "../../shared/background/background-image";
import { BackgroundFilled } from "../../shared/background/background-filled";

type StepBackgroundProps = WithBackground & {
  children: any;
};

export function StepBackground({ background, children }: StepBackgroundProps) {
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
