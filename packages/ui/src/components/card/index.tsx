import cn from "classnames";
import { Children } from "react";
import {
  BackgroundColor,
  CardContent as CardContentProps,
  CardHeight,
} from "../shared/types";
import { CardContent } from "./card-content";

export type WithContent = {
  content?: CardContentProps;
};

export type CardProps = WithContent & {
  cardHeight: CardHeight;
  cardBackground: BackgroundColor.Primary | BackgroundColor.Secondary;
  children?: React.ReactNode;
};

export function Card({
  content,
  cardHeight,
  cardBackground,
  children,
}: CardProps) {
  let colorClasses = "";
  let focusClasses = "";
  let hoverClasses = "";
  let activeClasses = "";
  switch (cardBackground) {
    case BackgroundColor.Primary:
      colorClasses =
        "text-color-font-button-primary bg-color-brand-primary-base border-color-border-dark";
      break;
    case BackgroundColor.Secondary:
    default:
      colorClasses =
        "text-color-font-button-secondary bg-color-brand-secondary-base border-color-border-dark";
      break;
  }

  const hasButtons = Children.count(children) > 0;

  if (!hasButtons) {
    switch (cardBackground) {
      case BackgroundColor.Primary:
        focusClasses =
          "focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-brand-primary-lighter))] focus:ring-opacity-50";
        hoverClasses = "hover:shadow-lg cursor-pointer";
        break;
      case BackgroundColor.Secondary:
      default:
        focusClasses =
          "focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-brand-secondary-lighter))] focus:ring-opacity-50";
        hoverClasses = "hover:shadow-lg cursor-pointer";
        activeClasses =
          "active:bg-[rgb(var(--color-brand-secondary-dark))] active:text-white";
        break;
    }
  }

  const tabIndex = hasButtons ? -1 : 1;

  return (
    <div
      tabIndex={tabIndex}
      className={cn(
        colorClasses,
        focusClasses,
        hoverClasses,
        activeClasses,
        cardHeight === CardHeight.SHORT ? "h-72" : "",
        cardHeight === CardHeight.TALL ? "h-96" : "",
        "rounded-md"
      )}
    >
      {content && (
        <CardContent
          primaryText={content.primaryText}
          secondaryText={content.secondaryText}
          cardHeight={cardHeight}
          assetType={content.assetType}
          asset={content.asset}
          button={children}
        />
      )}
    </div>
  );
}
