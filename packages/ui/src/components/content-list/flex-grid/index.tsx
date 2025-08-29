import { Children } from "react";
import { GridContainer } from "./grid-container";

type FlexGridProps = {
  primaryText: string;
  secondaryText?: string;
  children: React.ReactNode;
};
export function FlexGrid({
  primaryText,
  secondaryText,
  children,
}: FlexGridProps) {
  return (
    <GridContainer
      numItems={Children.count(children)}
      primaryText={primaryText}
      secondaryText={secondaryText}
    >
      {children}
    </GridContainer>
  );
}
