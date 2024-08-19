import { Button } from "@mui/base/Button";
import styles from "./button.module.css";
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

export function ButtonV1({
  children,
  color,
  ...other
}: ButtonProps): JSX.Element {
  switch (color) {
    case COLOR.primary:
      return (
        <Button type="button" className={classNames(styles.primary)} {...other}>
          {children}
        </Button>
      );
    case COLOR.secondary:
      return (
        <Button
          type="button"
          className={classNames(styles.secondary)}
          {...other}
        >
          {children}
        </Button>
      );
    case COLOR.neutral:
      return (
        <Button type="button" className={classNames(styles.neutral)} {...other}>
          {children}
        </Button>
      );
    case COLOR.alert:
      return (
        <Button type="button" className={classNames(styles.alert)} {...other}>
          {children}
        </Button>
      );
    case COLOR.success:
      return (
        <Button type="button" className={classNames(styles.success)} {...other}>
          {children}
        </Button>
      );
    case COLOR.warning:
      return (
        <Button type="button" className={classNames(styles.warning)} {...other}>
          {children}
        </Button>
      );
  }
}

ButtonV1.displayName = "ButtonV1";
