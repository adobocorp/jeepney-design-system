import type { ReactNode } from "react";
import { BackgroundImage as BackgroundImageType } from "../types";

interface BackgroundImageProps {
  background: BackgroundImageType;
  children: ReactNode;
}

export function BackgroundImage({
  background,
  children,
}: BackgroundImageProps) {
  return (
    <div
      className="w-full flex justify-center items-center flex-col bg-no-repeat"
      style={{
        backgroundPosition: background.backgroundPosition,
        backgroundImage: `url(${background.asset?.src})`,
      }}
    >
      {children}
    </div>
  );
}
