import { Button as _Button } from "@headlessui/react";
import clsx from "clsx";

export enum Color {
  Primary = "primary",
  Secondary = "secondary",
  Neutral = "neutral",
  Alert = "alert",
  Success = "success",
  Warning = "warning",
}

export enum Size {
  Small = "small",
  Medium = "medium",
  Large = "large",
  X_Large = "x-large",
}

export enum Width {
  Thin = "thin",
  Regular = "regular",
  Wide = "wide",
  Inherit = "inherit",
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color: Color;
  size?: Size;
  width?: Width;
}

export function Button({
  children,
  color,
  width = Width.Regular,
  size = Size.Medium,
  ...other
}: ButtonProps) {
  const baseClasses = "border rounded font-[Bantayog-Light] leading-8 px-2";

  let colorClasses = "";
  let hoverClasses = "";
  let focusClasses = "";
  let activeClasses = "";

  switch (color) {
    case Color.Primary:
      colorClasses =
        "text-white bg-color-brand-primary-base border-[rgb(var(--color-brand-primary-light))]";
      hoverClasses = "hover:shadow cursor-pointer";
      activeClasses =
        "active:bg-[rgb(var(--color-brand-primary-dark))] active:text-white";
      focusClasses =
        "focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-brand-primary-lighter))] focus:ring-opacity-50";
      break;
    case Color.Secondary:
      colorClasses =
        "text-color-font-button-secondary bg-color-brand-secondary-base border-[rgb(var(--color-brand-secondary-light))]";
      hoverClasses = "hover:shadow cursor-pointer";
      activeClasses =
        "active:bg-[rgb(var(--color-brand-secondary-dark))] active:text-white";
      focusClasses =
        "focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-brand-secondary-lighter))] focus:ring-opacity-50";
      break;
    case Color.Neutral:
      colorClasses =
        "text-black bg-color-base-grey-200 border-color-border-light";
      hoverClasses = "hover:shadow cursor-pointer";
      activeClasses =
        "active:bg-[rgb(var(--color-base-grey-700))] active:text-white";
      focusClasses =
        "focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-base-grey-400))] focus:ring-opacity-50";
      break;
    case Color.Alert:
      colorClasses =
        "text-white bg-color-base-red-300 border-color-border-error";
      hoverClasses = "hover:shadow cursor-pointer";
      activeClasses =
        "active:bg-[rgb(var(--color-base-red-700))] active:text-white";
      focusClasses =
        "focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-base-red-100))] focus:ring-opacity-50";
      break;
    case Color.Success:
      colorClasses =
        "text-white bg-color-base-green-400 border-color-border-success";
      hoverClasses = "hover:shadow cursor-pointer";
      activeClasses =
        "active:bg-[rgb(var(--color-base-green-700))] active:text-white";
      focusClasses =
        "focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-base-green-100))] focus:ring-opacity-50";
      break;
    case Color.Warning:
      colorClasses =
        "text-color-base-black bg-color-base-yellow-500 border-[rgb(var(--color-base-yellow-400))]";
      hoverClasses = "hover:shadow cursor-pointer";
      activeClasses =
        "active:bg-[rgb(var(--color-base-yellow-700))] active:text-white";
      focusClasses =
        "focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-base-yellow-600))] focus:ring-opacity-50";
      break;
  }

  let sizeClasses = "";
  switch (size) {
    case Size.Small:
      sizeClasses = "h-8 leading-normal text-base";
      break;
    case Size.Medium:
      sizeClasses = "h-12 leading-normal text-base";
      break;
    case Size.Large:
      sizeClasses = "h-16 leading-normal text-lg";
      break;
    case Size.X_Large:
      sizeClasses = "h-20 leading-normal text-xl";
      break;
    default:
      sizeClasses = "h-12 leading-normal text-base";
      break;
  }

  let widthClasses = "";
  switch (width) {
    case "thin":
      widthClasses = "w-24";
      break;
    case "regular":
      widthClasses = "w-48";
      break;
    case "wide":
      widthClasses = "w-96";
      break;
    case "inherit":
      widthClasses = "w-full";
      break;
    default:
      widthClasses = "w-auto";
      break;
  }

  return (
    <_Button
      type="button"
      className={clsx(
        baseClasses,
        colorClasses,
        sizeClasses,
        widthClasses,
        hoverClasses,
        activeClasses,
        focusClasses
      )}
      {...other}
    >
      {children}
    </_Button>
  );
}

Button.displayName = "Button";
