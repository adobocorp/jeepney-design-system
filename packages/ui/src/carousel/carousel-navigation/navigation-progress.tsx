import { useState, useEffect } from "react";
import style from "./carousel-navigation.module.css";
import cn from "classnames";
import { ProgressMeter } from "./progress-meter";
import { useSwiper } from "swiper/react";
export function NavigationProgress({ progressBars = 1 }: any) {
  const swiper = useSwiper();
  const seconds = 5;
  const widthMs = seconds * 10;
  const [currentProgressMeterWidth, setCurrentProgressMeterWidth] = useState(0);
  const [currentProgressMeterIndex, setCurrentProgressMeterIndex] = useState(0);

  useEffect(() => {
    const widthInterval = setInterval(() => {
      if (currentProgressMeterWidth < 100) {
        setCurrentProgressMeterWidth(currentProgressMeterWidth + 1);
      } else {
        setCurrentProgressMeterWidth(0);
        if (currentProgressMeterIndex < progressBars - 1) {
          setCurrentProgressMeterIndex(currentProgressMeterIndex + 1);
        } else {
          setCurrentProgressMeterIndex(0);
        }
        swiper.slideNext();
      }
    }, widthMs);

    return () => {
      clearInterval(widthInterval);
    };
  });

  console.log(currentProgressMeterWidth);

  return (
    <div className={cn(style.navigationProgressContainer)}>
      {Array(progressBars)
        .fill(true)
        .map((_, index) => (
          <ProgressMeter
            progressMeterWidth={
              currentProgressMeterIndex === index
                ? currentProgressMeterWidth
                : 0
            }
          ></ProgressMeter>
        ))}
    </div>
  );
}
