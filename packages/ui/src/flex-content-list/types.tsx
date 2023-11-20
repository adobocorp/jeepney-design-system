import { CardContent, WithBackground } from "../shared/types";

export type FlexGridContent = CardContent;

export interface WithContentList {
  contentList: FlexGridContent[];
}

export enum FlexGridType {
  ShortCardGrid = "shortCardGrid",
  TallCardGrid = "tallCardGrid",
}

export type FlexContentListProps = WithContentList &
  WithBackground & {
    flexGridType: FlexGridType;
    primaryText: string;
    secondaryText?: string;
  };
