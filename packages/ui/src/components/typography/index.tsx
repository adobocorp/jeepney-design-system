import classNames from "clsx";

export enum Heading {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  SPAN = "span",
  P = "p",
  SPAN_AS_LINK = "span_as_link",
  H3_AS_LINK = "h3_as_link",
}

export interface TypographyProps
  extends React.ButtonHTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  heading: Heading;
}

export function Typography({
  children,
  heading,
  className,
  ...props
}: TypographyProps) {
  const baseClasses = "font-[Avenir]";

  const headingClasses = {
    [Heading.H1]: "font-[Avenir] text-xl", // --size-font-xl: 1.5
    [Heading.H2]: "font-[Bantayog-Light] text-lg", // --size-font-large: 1.25
    [Heading.H3]: "font-[Avenir] text-base", // --size-font-medium: 1
    [Heading.H4]: "font-[Bantayog-Light] text-sm", // --size-font-small: 0.875
    [Heading.H5]: "font-[Avenir] text-xs", // --size-font-tiny: 0.75
    [Heading.SPAN]: "font-[Avenir] text-sm", // --size-font-small: 0.875
    [Heading.P]: "font-[Avenir] text-base text-md", // --size-font-medium: 1
    [Heading.SPAN_AS_LINK]:
      "font-[Avenir] text-sm hover:underline hover:cursor-pointer", // --size-font-medium: 1
    [Heading.H3_AS_LINK]:
      "font-[Avenir] text-base hover:underline hover:cursor-pointer", // --size-font-medium: 1
  };

  const combinedClasses = classNames(
    baseClasses,
    headingClasses[heading],
    className
  );

  switch (heading) {
    case Heading.H1:
      return (
        <h1 className={combinedClasses} {...props}>
          {children}
        </h1>
      );
    case Heading.H2:
      return (
        <h2 className={combinedClasses} {...props}>
          {children}
        </h2>
      );
    case Heading.H3:
      return (
        <h3 className={combinedClasses} {...props}>
          {children}
        </h3>
      );
    case Heading.H4:
      return (
        <h4 className={combinedClasses} {...props}>
          {children}
        </h4>
      );
    case Heading.H5:
      return (
        <h5 className={combinedClasses} {...props}>
          {children}
        </h5>
      );
    case Heading.SPAN:
      return (
        <span className={combinedClasses} {...props}>
          {children}
        </span>
      );
    case Heading.P:
      return (
        <p className={combinedClasses} {...props}>
          {children}
        </p>
      );
    case Heading.SPAN_AS_LINK:
      return (
        <span className={combinedClasses} {...props}>
          {children}
        </span>
      );
    case Heading.H3_AS_LINK:
      return (
        <span className={combinedClasses} {...props}>
          {children}
        </span>
      );
    default:
      return null;
  }
}
