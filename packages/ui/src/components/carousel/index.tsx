import { CarouselBackground } from "./carousel-background";
import { CarouselContent } from "./carousel-content";
import { CarouselSwiper } from "./carousel-swiper";
import type { CarouselProps } from "./types";

export function Carousel({
  width,
  height,
  contentList,
  background,
}: CarouselProps) {
  const isMobile = window.innerWidth < 768;
  return (
    <div
      className="w-full h-96"
      style={{ width: isMobile ? "100%" : width, height }}
    >
      <CarouselBackground background={background}>
        {contentList.length ? (
          <CarouselSwiper>
            {contentList.map((content, index) => (
              <CarouselContent
                caption={content.caption}
                background={content.background}
                key={`carousel-content-${index}`}
              />
            ))}
          </CarouselSwiper>
        ) : null}
      </CarouselBackground>
    </div>
  );
}
