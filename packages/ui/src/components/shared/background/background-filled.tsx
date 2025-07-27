import cn from "classnames";
import type { ReactNode } from "react";
import { BackgroundColor } from "../types";

interface BackgroundFilledProps {
  backgroundColor?: BackgroundColor;
  children: ReactNode;
}

export function BackgroundFilled({
  backgroundColor,
  children,
}: BackgroundFilledProps) {
  return (
    <div
      className={cn(
        "w-full flex justify-center items-center flex-col",
        backgroundColor === BackgroundColor.Primary &&
          "bg-color-brand-primary-base",
        backgroundColor === BackgroundColor.Secondary &&
          "bg-color-brand-secondary-base",
        backgroundColor === BackgroundColor.Neutral && "bg-color-base-grey-200",
        backgroundColor === BackgroundColor.Success &&
          "bg-color-base-green-400",
        backgroundColor === BackgroundColor.Alert && "bg-color-base-red-300",
        backgroundColor === BackgroundColor.Warning &&
          "bg-color-base-yellow-500"
      )}
    >
      {children}
    </div>
  );
}
