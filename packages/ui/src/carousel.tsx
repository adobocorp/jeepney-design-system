import styles from "./carousel.module.css";
import cn from "classnames";

type WithBackgroundImage = {
  backgroundPosition?: string;
};

type WithBackgroundFilled = {
  backgroundColor?: BackgroundColor;
  showBorder?: boolean;
};
enum BackgroundType {
  image = "image",
  filled = "filled",
}

export enum BackgroundColor {
  primary = "primary",
  secondary = "secondary",
  neutral = "neutral",
  alert = "alert",
  success = "success",
  warning = "warning",
}

type CarouselBackgroundProps = WithBackgroundImage &
  WithBackgroundFilled & {
    backgroundType: BackgroundType;
    children: any;
  };

const CarouselBackground = ({
  backgroundType = BackgroundType.filled,
  backgroundPosition = "center",
  backgroundColor = BackgroundColor.neutral,
  children,
}: CarouselBackgroundProps) => {
  const color = "neutral";
  switch (backgroundType) {
    case BackgroundType.image:
      return (
        <div
          className={cn(styles.background, styles.backgroundWithImage)}
          style={{ backgroundPosition: backgroundPosition }}
        >
          {children}
        </div>
      );
    case BackgroundType.filled:
    default:
      console.log(backgroundColor);
      return (
        <div
          className={cn(
            styles.background,
            backgroundColor === BackgroundColor.primary
              ? styles.backgroundWithPrimary
              : "",
            backgroundColor === BackgroundColor.secondary
              ? styles.backgroundWithSecondary
              : "",
            backgroundColor === BackgroundColor.neutral
              ? styles.backgroundWithNeutral
              : "",
            backgroundColor === BackgroundColor.success
              ? styles.backgroundWithSuccess
              : "",
            backgroundColor === BackgroundColor.alert
              ? styles.backgroundWithAlert
              : "",
            backgroundColor === BackgroundColor.warning
              ? styles.backgroundWithWarning
              : ""
          )}
        >
          {children}
        </div>
      );
  }
};

export type CarouselProps = WithBackgroundImage &
  WithBackgroundFilled & {
    width: string;
    height: string;
    backgroundType: BackgroundType;
  };

export const Carousel = ({
  width,
  height,
  backgroundType,
  backgroundPosition,
  backgroundColor,
  showBorder,
}: CarouselProps) => {
  return (
    <div className={styles.carousel} style={{ width: width, height: height }}>
      <CarouselBackground
        backgroundPosition={backgroundPosition}
        backgroundType={backgroundType}
        backgroundColor={backgroundColor}
        showBorder={showBorder}
      >
        <p>Child of background</p>
        {/* 
          TODO: switch statement
          carousel of cards
          carousel of images
        */}
      </CarouselBackground>
    </div>
  );
};
