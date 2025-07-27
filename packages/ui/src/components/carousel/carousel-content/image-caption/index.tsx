import { ContentType } from "../../../shared/types";
import type { CarouselContentProps } from "../../types";
import { LowerCaption } from "./lower-caption";
import { UpperImage } from "./upper-image";

export function ImageCaption({ content }: CarouselContentProps) {
  return (
    <div className="flex justify-center items-center flex-col h-full w-[800px] my-[18px] mx-auto">
      <UpperImage></UpperImage>
      {content.contentType === ContentType.Card && (
        <LowerCaption
          primaryText={content.primaryText}
          secondaryText={content.secondaryText}
        />
      )}
    </div>
  );
}
