import {
  AssetType,
  BackgroundProps,
  CaptionContent,
  ImageContent,
  VideoContent,
  WithBackground,
  WithVideoAsset,
} from "../shared/types";

export type CarouselContent = ImageContent | VideoContent;

export type WithContentList = {
  contentList: CarouselContent[];
};

export type CarouselImageProps = {
  image: string;
  position?: string; // Optional, defaults to "center"
};

export type CarouselVideoProps = {
  video: string;
};

export type ImageContentProps = {
  caption?: CaptionContent;
} & WithBackground;

export type VideoContentProps = {
  caption?: CaptionContent;
  assetType: AssetType.Video;
} & WithVideoAsset &
  WithBackground;

export type CarouselContentProps = ImageContentProps | VideoContentProps;

export type CarouselProps = BackgroundProps &
  WithContentList & {
    width: string;
    height: string;
  };
