import clsx from "clsx";
import { Children } from "react";
import { Heading, Typography } from "../../typography";
import { GridContainer } from "./grid-container";

type FlexGridProps = {
  primaryText: string;
  secondaryText?: string;
  children: React.ReactNode;
  stickyHeader?: boolean;
};
export function FlexGrid({
  primaryText,
  secondaryText,
  children,
  stickyHeader = false,
}: FlexGridProps) {
  return (
    <div className={clsx("flex items-center flex-col")}>
      <div className={clsx("text-center py-4", stickyHeader && "sticky")}>
        {primaryText && (
          <Typography heading={Heading.H1}>{primaryText}</Typography>
        )}
        {secondaryText && (
          <Typography heading={Heading.H3}>{secondaryText}</Typography>
        )}
      </div>
      <GridContainer
        numItems={Children.count(children)}
        primaryText={primaryText}
        secondaryText={secondaryText}
      >
        {children}
      </GridContainer>
    </div>
  );
}
