import {
  BackgroundProps,
  CaptionContent,
  ContentType,
  Image,
  ImageContent,
  Video,
  VideoContent,
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

export type ImageCaptionProps = {
  caption: CaptionContent;
  asset?: Image;
  contentType: ContentType.Image;
};

export type VideoCaptionProps = {
  caption: CaptionContent;
  asset?: Video;
  contentType: ContentType.Video;
};

export type CarouselContentProps = ImageCaptionProps | VideoCaptionProps;

export type CarouselProps = BackgroundProps &
  WithContentList & {
    width: string;
    height: string;
  };
