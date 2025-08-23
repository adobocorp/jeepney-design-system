import type { ReactNode } from "react";
import { BackgroundVideo as BackgroundVideoType } from "../types";

interface BackgroundVideoProps {
  background: BackgroundVideoType;
  children: ReactNode;
}

export function BackgroundVideo({
  background,
  children,
}: BackgroundVideoProps) {
  return (
    <>
      <video className="absolute w-full " autoPlay loop muted>
        <source src={background.asset.src} type="video/mp4" />
      </video>
      {children}
    </>
  );
}
