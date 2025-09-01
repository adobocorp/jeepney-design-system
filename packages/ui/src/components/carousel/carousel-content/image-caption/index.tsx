import { LowerCaption } from "./lower-caption";
import { UpperImage } from "./upper-image";

export type ImageCaptionProps = {
  primaryText: string;
  secondaryText?: string;
  assetSrc: string;
  backgroundPosition?: string;
};

export function ImageCaption({
  assetSrc,
  backgroundPosition,
  primaryText,
  secondaryText,
}: ImageCaptionProps) {
  return (
    <div className="flex justify-center items-center flex-col h-full w-[800px] my-[18px] mx-auto">
      {assetSrc?.length && (
        <UpperImage image={assetSrc} backgroundPosition={backgroundPosition} />
      )}
      <LowerCaption primaryText={primaryText} secondaryText={secondaryText} />
    </div>
  );
}
