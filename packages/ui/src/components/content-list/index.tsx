import { ContentListBackground } from "./content-list-background";
import { FlexGrid } from "./flex-grid";
import { FlexContentListProps } from "./types";

export function ContentList({
  primaryText,
  secondaryText,
  background,
  children,
  stickyHeader = false,
}: FlexContentListProps) {
  return (
    <ContentListBackground background={background}>
      <FlexGrid
        primaryText={primaryText}
        secondaryText={secondaryText}
        stickyHeader={stickyHeader}
      >
        {children}
      </FlexGrid>
    </ContentListBackground>
  );
}
