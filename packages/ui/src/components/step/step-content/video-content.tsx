import { VideoContent as VideoContentProps } from "../../shared/types";

type VideoPlayerProps = {
  height: number;
  width: number;
  src: string;
  trackSrc?: string;
};

const VideoPlayer = ({ height, width, src, trackSrc }: VideoPlayerProps) => {
  return (
    <video width={width} height={height} muted controls>
      <source src={src} type="video/mp4"></source>
      {trackSrc ? <track kind="captions" srcLang="en" src={trackSrc} /> : null}
    </video>
  );
};

export const VideoContent = ({
  height,
  width,
  src,
  trackSrc,
  caption,
  callToAction,
}: VideoContentProps) => {
  return (
    <div className="h-[300px] w-[700px] flex justify-center items-center flex-col p-8 rounded-sm">
      <VideoPlayer
        height={height}
        width={width}
        src={src}
        trackSrc={trackSrc}
      ></VideoPlayer>
      {caption && <p>{caption}</p>}
      <div className="h-8">
        <a
          href={callToAction.href}
          target={callToAction.target}
          className="text-[length:var(--size-font-xl)rem] no-underline"
        >
          {callToAction.text}
        </a>
      </div>
    </div>
  );
};
