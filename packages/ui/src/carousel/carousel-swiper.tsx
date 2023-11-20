// Import Swiper React components
import { Children } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { CarouselNavigation } from "./carousel-navigation";

// Import Swiper styles
import "swiper/css";

export function CarouselSwiper({ children }) {
  const childrenCount = Children.count(children);
  return (
    <Swiper
      style={{ width: "100%" }}
      spaceBetween={25}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {children.map((child) => (
        <SwiperSlide>{child}</SwiperSlide>
      ))}
      <CarouselNavigation progressBars={childrenCount}></CarouselNavigation>
    </Swiper>
  );
}
