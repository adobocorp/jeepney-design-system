// Import Swiper React components
import { Children, ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { CarouselNavigation } from "./carousel-navigation";

// Import Swiper styles
import "swiper/css";

export function CarouselSwiper({ children }: { children: ReactNode[] }) {
  const childrenCount = Children.count(children);
  return (
    <Swiper
      style={{ width: "100%" }}
      navigation={true}
      spaceBetween={25}
      slidesPerView={1}
      onSlideChange={({ activeIndex }) => console.log({ activeIndex })}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {children.map((child) => (
        <SwiperSlide>{child}</SwiperSlide>
      ))}
      <CarouselNavigation progressBars={childrenCount}></CarouselNavigation>
    </Swiper>
  );
}
