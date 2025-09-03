import clsx from "clsx";
import type { ReactNode } from "react";
import {
  BackgroundColor,
  BackgroundFilled as BackgroundFilledType,
} from "../types";

export interface BackgroundFilledProps {
  background: BackgroundFilledType;
  children: ReactNode;
}

export function BackgroundFilled({
  background,
  children,
}: BackgroundFilledProps) {
  const { backgroundColor } = background;
  return (
    <div
      className={clsx(
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
