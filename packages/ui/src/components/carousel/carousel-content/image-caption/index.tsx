import type { ImageCaptionProps } from "../../types";
import { LowerCaption } from "./lower-caption";
import { UpperImage } from "./upper-image";

export function ImageCaption({ caption, asset }: ImageCaptionProps) {
  return (
    <div className="flex justify-center items-center flex-col h-full w-[800px] my-[18px] mx-auto">
      {asset && (
        <UpperImage image={asset.image} backgroundPosition={asset.position} />
      )}
      <LowerCaption
        primaryText={caption.primaryText}
        secondaryText={caption.secondaryText}
      />
    </div>
  );
}
