import type { CarouselContentProps } from "../types";
import { ContentType } from "../../shared/types";
import { ImageCaption } from "./image-caption";

export function CarouselContent({ content }: CarouselContentProps) {
  switch (content.contentType) {
    case ContentType.Card:
      return <ImageCaption content={content} />;
    case ContentType.Video:
    default:
      return <div />;
  }
}
