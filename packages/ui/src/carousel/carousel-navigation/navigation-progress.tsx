import { useState, useEffect } from "react";
import style from "./carousel-navigation.module.css";
import cn from "classnames";
import { ProgressMeter } from "./progress-meter";
export function NavigationProgress({
  progressMeters = [{ id: 1 }, { id: 2 }],
}: any) {
  const seconds = 5;
  const widthMs = seconds * 10;
  const [currentProgressMeterWidth, setCurrentProgressMeterWidth] =
    useState(66);
  const [currentProgressMeterIndex, setCurrentProgressMeterIndex] = useState(0);

  useEffect(() => {
    const widthInterval = setInterval(() => {
      if (currentProgressMeterWidth < 100) {
        setCurrentProgressMeterWidth(currentProgressMeterWidth + 1);
      } else {
        setCurrentProgressMeterWidth(0);
        if (currentProgressMeterIndex < progressMeters.length - 1) {
          setCurrentProgressMeterIndex(currentProgressMeterIndex + 1);
        } else {
          setCurrentProgressMeterIndex(0);
        }
      }
    }, widthMs);

    return () => {
      clearInterval(widthInterval);
    };
  }, [progressMeters]);

  return (
    <div className={cn(style.navigationProgressContainer)}>
      {progressMeters.map((_, index) => (
        <ProgressMeter
          progressMeterWidth={
            currentProgressMeterIndex === index ? currentProgressMeterWidth : 0
          }
        ></ProgressMeter>
      ))}
    </div>
  );
}
