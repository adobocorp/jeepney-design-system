import * as React from "react";
import styles from "./button.module.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...other }: ButtonProps): JSX.Element {
  return (
    <button type="button" className={styles.button} {...other}>
      {children}
    </button>
  );
}

Button.displayName = "Button";
