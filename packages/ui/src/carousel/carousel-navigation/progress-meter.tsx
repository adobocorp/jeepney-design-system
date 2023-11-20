import style from "./carousel-navigation.module.css";
import cn from "classnames";

export function ProgressMeter({ progressMeterWidth = 0 }) {
  return (
    <div className={cn(style.progressMeter)}>
      <div
        className={cn(style.progressMeterFill)}
        style={{ width: `${progressMeterWidth}px` }}
      ></div>
    </div>
  );
}
