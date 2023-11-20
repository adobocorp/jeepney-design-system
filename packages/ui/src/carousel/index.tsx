import styles from "./carousel.module.css";
import { CarouselBackground } from "./carousel-background";
import { CarouselProps } from "./types";
import { CarouselContent } from "./carousel-content";
import { CarouselSwiper } from "./carousel-swiper";

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
            <CarouselSwiper>
              <CarouselContent
                content={content}
                background={background}
              ></CarouselContent>
              <CarouselContent
                content={content}
                background={background}
              ></CarouselContent>
              <CarouselContent
                content={content}
                background={background}
              ></CarouselContent>
              <CarouselContent
                content={content}
                background={background}
              ></CarouselContent>
            </CarouselSwiper>
          )}
        </CarouselBackground>
      )}
    </div>
  );
};
