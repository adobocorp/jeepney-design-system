import styles from "./carousel.module.css";
import { CarouselBackground } from "./carousel-background";
import type { CarouselProps } from "./types";
import { CarouselContent } from "./carousel-content";
import { CarouselSwiper } from "./carousel-swiper";

export function CarouselV1({
  width,
  height,
  contentList,
  background,
}: CarouselProps) {
  return (
    <div className={styles.carousel} style={{ width, height }}>
      <CarouselBackground background={background}>
        {contentList.length ? (
          <CarouselSwiper>
            {contentList.map((content, index) => (
              <CarouselContent
                content={content}
                key={`carousel-content-${index}`}
              />
            ))}
          </CarouselSwiper>
        ) : null}
      </CarouselBackground>
    </div>
  );
}
