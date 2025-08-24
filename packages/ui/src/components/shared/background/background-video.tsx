import type { ReactNode } from "react";
import {
  BackgroundColor,
  BackgroundType,
  BackgroundVideo as BackgroundVideoType,
} from "../types";
import { BackgroundFilled } from "./background-filled";

interface BackgroundVideoProps {
  background: BackgroundVideoType;
  children: ReactNode;
}

export function BackgroundVideo({
  background,
  children,
}: BackgroundVideoProps) {
  const backgroundColor = background.backgroundColor || BackgroundColor.Neutral;
  const videoHeight = background.backgroundHeight || "100%";
  const filledBackground = {
    backgroundColor,
    showBorder: false,
    backgroundType: BackgroundType.Filled,
  };
  return (
    <div className="relative w-full overflow-hidden">
      <BackgroundFilled background={filledBackground}>
        <video
          className="absolute w-full object-cover"
          style={{
            objectPosition: background.backgroundPosition,
            height: videoHeight,
          }}
          autoPlay
          loop
          muted
        >
          <source src={background.asset.src} type="video/mp4" />
        </video>
        {children}
      </BackgroundFilled>
    </div>
  );
}
