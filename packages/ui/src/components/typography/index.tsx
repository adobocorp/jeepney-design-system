import classNames from "classnames";

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

export function Typography({ children, heading, className, ...props }: TypographyProps) {
  const baseClasses = "font-[Avenir]";

  const headingClasses = {
    [HEADING.H1]: "font-[Avenir] text-xl", // --size-font-xl: 1.5
    [HEADING.H2]: "font-[Bantayog-Light] text-lg", // --size-font-large: 1.25
    [HEADING.H3]: "font-[Avenir] text-base", // --size-font-medium: 1
    [HEADING.H4]: "font-[Bantayog-Light] text-sm", // --size-font-small: 0.875
    [HEADING.H5]: "font-[Avenir] text-xs", // --size-font-tiny: 0.75
  };

  const combinedClasses = classNames(baseClasses, headingClasses[heading], className);

  switch (heading) {
    case HEADING.H1:
      return (
        <h1 className={combinedClasses} {...props}>
          {children}
        </h1>
      );
    case HEADING.H2:
      return (
        <h2 className={combinedClasses} {...props}>
          {children}
        </h2>
      );
    case HEADING.H3:
      return (
        <h3 className={combinedClasses} {...props}>
          {children}
        </h3>
      );
    case HEADING.H4:
      return (
        <h4 className={combinedClasses} {...props}>
          {children}
        </h4>
      );
    case HEADING.H5:
      return (
        <h5 className={combinedClasses} {...props}>
          {children}
        </h5>
      );
  }
}
