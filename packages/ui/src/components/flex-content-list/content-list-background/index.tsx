import { BackgroundFilled } from "../../shared/background/background-filled";
import { BackgroundImage } from "../../shared/background/background-image";
import { BackgroundType, WithBackground } from "../../shared/types";

type FlexBackgroundProps = WithBackground & {
  children: any;
};

export function ContentListBackground({
  background,
  children,
}: FlexBackgroundProps) {
  switch (background.backgroundType) {
    case BackgroundType.Image:
      return (
        <BackgroundImage background={background}>{children}</BackgroundImage>
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
