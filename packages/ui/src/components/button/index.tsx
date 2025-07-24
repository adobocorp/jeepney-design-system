import classNames from "classnames";

export enum COLOR {
  primary = "primary",
  secondary = "secondary",
  neutral = "neutral",
  alert = "alert",
  success = "success",
  warning = "warning",
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color: COLOR;
}

export function Button({
  children,
  color,
  ...other
}: ButtonProps) {
  const baseClasses = "h-8 w-full max-w-24 border rounded font-[Bantayog-Light] leading-8 px-2";

  const colorClasses = {
    [COLOR.primary]: "text-white bg-color-brand-primary-base border-color-border-light",
    [COLOR.secondary]: "text-color-font-button-secondary bg-color-brand-secondary-base border-color-border-dark",
    [COLOR.neutral]: "bg-color-base-grey-200 border-color-border-light",
    [COLOR.alert]: "text-white bg-color-base-red-300 border-color-border-error",
    [COLOR.success]: "text-white bg-color-base-green-400 border-color-border-success",
    [COLOR.warning]: "text-color-base-black bg-color-base-yellow-500 border-color-border-warning",
  };

  return (
    <button
      type="button"
      className={classNames(baseClasses, colorClasses[color])}
      {...other}
    >
      {children}
    </button>
  );
}

Button.displayName = "Button";
