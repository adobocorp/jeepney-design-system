import { Button as _Button } from "@headlessui/react";
import clsx from "clsx";

export enum COLOR {
  primary = "primary",
  secondary = "secondary",
  neutral = "neutral",
  alert = "alert",
  success = "success",
  warning = "warning",
}

export enum SIZE {
  small = "small",
  medium = "medium",
  large = "large",
  xLarge = "x-large",
}

export enum WIDTH {
  thin = "thin",
  regular = "regular",
  wide = "wide",
  inherit = "inherit",
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color: COLOR;
  size?: SIZE;
  width?: WIDTH;
}

export function Button({
  children,
  color,
  width = WIDTH.regular,
  size = SIZE.medium,
  ...other
}: ButtonProps) {
  const baseClasses = "border rounded font-[Bantayog-Light] leading-8 px-2";

  let colorClasses = "";
  let hoverClasses = "";
  let focusClasses = "";
  let activeClasses = "";

  switch (color) {
    case COLOR.primary:
      colorClasses =
        "text-white bg-color-brand-primary-base border-[rgb(var(--color-brand-primary-light))]";
      hoverClasses = "hover:shadow cursor-pointer";
      activeClasses =
        "active:bg-[rgb(var(--color-brand-primary-dark))] active:text-white";
      focusClasses =
        "focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-brand-primary-lighter))] focus:ring-opacity-50";
      break;
    case COLOR.secondary:
      colorClasses =
        "text-color-font-button-secondary bg-color-brand-secondary-base border-[rgb(var(--color-brand-secondary-light))]";
      hoverClasses = "hover:shadow cursor-pointer";
      activeClasses =
        "active:bg-[rgb(var(--color-brand-secondary-dark))] active:text-white";
      focusClasses =
        "focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-brand-secondary-lighter))] focus:ring-opacity-50";
      break;
    case COLOR.neutral:
      colorClasses =
        "text-black bg-color-base-grey-200 border-color-border-light";
      hoverClasses = "hover:shadow cursor-pointer";
      activeClasses =
        "active:bg-[rgb(var(--color-base-grey-700))] active:text-white";
      focusClasses =
        "focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-base-grey-400))] focus:ring-opacity-50";
      break;
    case COLOR.alert:
      colorClasses =
        "text-white bg-color-base-red-300 border-color-border-error";
      hoverClasses = "hover:shadow cursor-pointer";
      activeClasses =
        "active:bg-[rgb(var(--color-base-red-700))] active:text-white";
      focusClasses =
        "focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-base-red-100))] focus:ring-opacity-50";
      break;
    case COLOR.success:
      colorClasses =
        "text-white bg-color-base-green-400 border-color-border-success";
      hoverClasses = "hover:shadow cursor-pointer";
      activeClasses =
        "active:bg-[rgb(var(--color-base-green-700))] active:text-white";
      focusClasses =
        "focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-base-green-100))] focus:ring-opacity-50";
      break;
    case COLOR.warning:
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
    case SIZE.small:
      sizeClasses = "h-8 leading-normal text-base";
      break;
    case SIZE.medium:
      sizeClasses = "h-12 leading-normal text-base";
      break;
    case SIZE.large:
      sizeClasses = "h-16 leading-normal text-lg";
      break;
    case SIZE.xLarge:
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
