import { GridContainer } from "./grid-container";
import { FlexGridType, WithContentList } from "../types";
import { FlexGridContent } from "./flex-grid-content";

type FlexGridProps = WithContentList & {
  flexGridType: FlexGridType;
  primaryText: string;
  secondaryText?: string;
};
export function FlexGrid({
  primaryText,
  secondaryText,
  contentList,
  flexGridType,
}: FlexGridProps) {
  return (
    <GridContainer
      numItems={contentList.length}
      primaryText={primaryText}
      secondaryText={secondaryText}
    >
      {contentList.map((content, index) => (
        <FlexGridContent
          content={content}
          flexGridType={flexGridType}
          key={`flex-grid-content-${index}`}
        />
      ))}
    </GridContainer>
  );
}
