import { LowerCaption } from "../image-caption/lower-caption";
import { UpperVideo } from "./upper-video";

export type VideoCaptionProps = {
  primaryText: string;
  secondaryText?: string;
  assetSrc: string;
  backgroundPosition?: string;
};

export function VideoCaption({
  primaryText,
  secondaryText,
  assetSrc,
  backgroundPosition,
}: VideoCaptionProps) {
  return (
    <div className="flex justify-center items-center flex-col h-full w-full md:w-[800px] my-[18px] mx-auto">
      {assetSrc && (
        <UpperVideo video={assetSrc} backgroundPosition={backgroundPosition} />
      )}
      <LowerCaption primaryText={primaryText} secondaryText={secondaryText} />
    </div>
  );
}
