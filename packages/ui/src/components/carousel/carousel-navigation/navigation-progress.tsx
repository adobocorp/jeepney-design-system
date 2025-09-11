import { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { ProgressMeter } from "./progress-meter";

export function NavigationProgress({ progressBars = 1 }: any) {
  const swiper = useSwiper();
  const seconds = 10;
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
          swiper.slideNext();
          setCurrentProgressMeterIndex(currentProgressMeterIndex + 1);
        } else {
          setCurrentProgressMeterIndex(0);
          swiper.slideTo(0);
        }
      }
    }, widthMs);

    if (swiper.activeIndex !== currentProgressMeterIndex) {
      setCurrentProgressMeterIndex(swiper.activeIndex);
      setCurrentProgressMeterWidth(0);
      clearInterval(widthInterval);
    }

    return () => {
      clearInterval(widthInterval);
    };
  });

  return (
    <div className="flex items-center justify-center flex-row mb-[18px] mx-auto gap-3">
      {Array(progressBars)
        .fill(true)
        .map((_, index) => (
          <ProgressMeter
            progressMeterWidth={
              currentProgressMeterIndex === index
                ? currentProgressMeterWidth
                : 0
            }
          />
        ))}
    </div>
  );
}
