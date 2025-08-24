// import type { StepContentProps } from "../types";
import { AssetType } from "../../shared/types";
import { CardContent } from "./card-content";
import { VideoContent } from "./video-content";

export function StepContent({ content, background }: any) {
  switch (content.AssetType) {
    case AssetType.Card:
      return (
        <CardContent
          callToAction={content.callToAction}
          assetType={content.AssetType}
          primaryText={content.primaryText}
          secondaryText={content.secondaryText}
          background={background}
        />
      );
    case AssetType.Video:
      return (
        <VideoContent
          callToAction={content.callToAction}
          caption={content.caption}
          assetType={content.AssetType}
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
