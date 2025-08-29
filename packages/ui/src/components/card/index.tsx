import cn from "classnames";
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
  cardBackground: BackgroundColor;
  children?: React.ReactNode;
};

export function Card({
  content,
  cardHeight,
  cardBackground,
  children,
}: CardProps) {
  let colorClasses = "";
  const colorPrimary =
    "text-[rgb(var(--color-brand-primary-darker))] bg-color-background-card-base border-color-border-light";
  const colorSecondary =
    "text-color-font-button-secondary bg-color-brand-secondary-base border-color-border-dark";

  let focusClasses = "";
  let hoverClasses = "";
  let activeClasses = "";
  switch (cardBackground) {
    case "primary":
      colorClasses = colorPrimary;
      break;
    case "secondary":
    default:
      colorClasses = colorSecondary;
      break;
  }

  return (
    <div
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
          assetType={content.assetType}
          asset={content.asset}
          button={children}
        />
      )}
    </div>
  );
}
