import * as React from "react";
import styles from "./button.module.css";

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
}: ButtonProps): JSX.Element {
  switch (color) {
    case COLOR.primary:
      return (
        <button type="button" className={styles.primary} {...other}>
          {children}
        </button>
      );
    case COLOR.secondary:
      return (
        <button type="button" className={styles.secondary} {...other}>
          {children}
        </button>
      );
    case COLOR.neutral:
      return (
        <button type="button" className={styles.neutral} {...other}>
          {children}
        </button>
      );
    case COLOR.alert:
      return (
        <button type="button" className={styles.alert} {...other}>
          {children}
        </button>
      );
    case COLOR.success:
      return (
        <button type="button" className={styles.success} {...other}>
          {children}
        </button>
      );
    case COLOR.warning:
      return (
        <button type="button" className={styles.warning} {...other}>
          {children}
        </button>
      );
  }
}

Button.displayName = "Button";
