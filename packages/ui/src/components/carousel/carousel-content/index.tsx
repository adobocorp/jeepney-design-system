import { ContentType } from "../../shared/types";
import type { CarouselContentProps } from "../types";
import { ImageCaption } from "./image-caption";

export function CarouselContent({
  caption,
  asset,
  contentType,
}: CarouselContentProps) {
  switch (contentType) {
    case ContentType.Image:
      return (
        <ImageCaption
          caption={caption}
          asset={asset}
          contentType={contentType}
        />
      );
    case ContentType.Video:
    default:
      return <div />;
  }
}
