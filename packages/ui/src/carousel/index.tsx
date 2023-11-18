import styles from "./carousel.module.css";
import { CarouselBackground } from "./carousel-background";
import { CarouselProps } from "./types";
import { CarouselContent } from "./carousel-content";

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
          <div>
            <button>Previous</button>
            <button>Next</button>
          </div>
        </CarouselBackground>
      )}
    </div>
  );
};
