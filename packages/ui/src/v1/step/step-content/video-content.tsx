import styles from "./content.module.css";
import cn from "classnames";
import { VideoContent as VideoContentProps } from "../../shared/types";

type VideoPlayerProps = {
  height: number;
  width: number;
  src: string;
  trackSrc: string;
};

const VideoPlayer = ({ height, width, src, trackSrc }: VideoPlayerProps) => {
  return (
    <video width={width} height={height} muted controls>
      <source src={src} type="video/mp4"></source>
      <track kind="captions" src={trackSrc} />
    </video>
  );
};

export const VideoContent = ({
  height,
  width,
  src,
  trackSrc,
  caption,
}: VideoContentProps) => {
  return (
    <div className={cn(styles.videoContentContainer)}>
      <VideoPlayer
        height={height}
        width={width}
        src={src}
        trackSrc={trackSrc}
      ></VideoPlayer>
      {caption && <p>{caption}</p>}
      <div className={cn(styles.videoContentCallToActionContainer)}>
        <a
          href={callToAction.href}
          target={callToAction.target}
          className={cn(styles.cardContentCallToAction)}
        >
          {callToAction.text}
        </a>
      </div>
    </div>
  );
};
