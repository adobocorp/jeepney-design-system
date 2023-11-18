// import type { StepContentProps } from "../types";
import { ContentType } from "../../shared/types";
import { CardContent } from "./card-content";
import { VideoContent } from "./video-content";

export function StepContent({ content, background }: any) {
  switch (content.contentType) {
    case ContentType.Card:
      return (
        <CardContent
          callToAction={content.callToAction}
          contentType={content.contentType}
          primaryText={content.primaryText}
          secondaryText={content.secondaryText}
          background={background}
        />
      );
    case ContentType.Video:
      return (
        <VideoContent
          callToAction={content.callToAction}
          caption={content.caption}
          contentType={content.contentType}
          height={content.height}
          src={content.src}
          trackSrc={content.trackSrc}
          type={content.type}
          width={content.width}
        />
      );
    default:
      return <div />;
  }
}
