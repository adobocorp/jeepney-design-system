import styles from "./carousel.module.css";
import { CarouselBackground } from "./carousel-background";
import { CarouselProps } from "./types";
import { CarouselContent } from "./carousel-content";
import { CarouselNavigation } from "./carousel-navigation";

export const Carousel = ({
  width,
  height,
  content,
  background,
}: CarouselProps) => {
  return (
    <div className={styles.carousel} style={{ width: width, height: height }}>
      {background?.backgroundType && (
        <CarouselBackground background={background}>
          {content?.contentType && (
            <CarouselContent
              content={content}
              background={background}
            ></CarouselContent>
          )}
          <CarouselNavigation></CarouselNavigation>
        </CarouselBackground>
      )}
    </div>
  );
};
