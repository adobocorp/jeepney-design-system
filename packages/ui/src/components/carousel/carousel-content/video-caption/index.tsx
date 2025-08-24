import { BackgroundVideo, CaptionContent } from "../../../shared/types";
import { LowerCaption } from "./lower-caption";
import { UpperVideo } from "./upper-video";

export type VideoCaptionProps = {
  caption?: CaptionContent;
  background: BackgroundVideo;
};

export function VideoCaption({ caption, background }: VideoCaptionProps) {
  return (
    <div className="flex justify-center items-center flex-col h-full w-[800px] my-[18px] mx-auto">
      {background && (
        <UpperVideo
          video={background.asset.src}
          backgroundPosition={background.backgroundPosition}
        />
      )}
      <LowerCaption
        primaryText={caption?.primaryText}
        secondaryText={caption?.secondaryText}
      />
    </div>
  );
}
