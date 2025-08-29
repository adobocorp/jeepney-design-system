import { ContentListBackground } from "./content-list-background";
import { FlexGrid } from "./flex-grid";
import { FlexContentListProps } from "./types";

export function ContentList({
  primaryText,
  secondaryText,
  background,
  children,
}: FlexContentListProps) {
  return (
    <ContentListBackground background={background}>
      <FlexGrid primaryText={primaryText} secondaryText={secondaryText}>
        {children}
      </FlexGrid>
    </ContentListBackground>
  );
}
