import styles from "./typography.module.css";

export enum HEADING {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
}

export interface TypographyProps
  extends React.ButtonHTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  heading: HEADING;
}

export function TypographyV1({ children, heading, ...props }: TypographyProps) {
  switch (heading) {
    case HEADING.H1:
      return (
        <h1 className={styles.h1} {...props}>
          {children}
        </h1>
      );
    case HEADING.H2:
      return (
        <h2 className={styles.h2} {...props}>
          {children}
        </h2>
      );
    case HEADING.H3:
      return (
        <h3 className={styles.h3} {...props}>
          {children}
        </h3>
      );
    case HEADING.H4:
      return (
        <h4 className={styles.h4} {...props}>
          {children}
        </h4>
      );
    case HEADING.H5:
      return (
        <h5 className={styles.h5} {...props}>
          {children}
        </h5>
      );
  }
}
