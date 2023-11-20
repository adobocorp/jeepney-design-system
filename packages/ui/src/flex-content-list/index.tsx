import { BackgroundType } from "../shared/types";
import { ContentListBackground } from "./content-list-background";
import { FlexGrid } from "./flex-grid";
import { FlexContentListProps } from "./types";

export function FlexContentList({
  primaryText,
  secondaryText,
  contentList,
  flexGridType,
  background,
}: FlexContentListProps) {
  return (
    <ContentListBackground background={background}>
      <FlexGrid
        contentList={contentList}
        flexGridType={flexGridType}
        primaryText={primaryText}
        secondaryText={secondaryText}
      />
    </ContentListBackground>
  );
}
