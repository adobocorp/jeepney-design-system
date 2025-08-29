import { AssetType, CardContent as CardContentProps } from "../shared/types";
import { Typography } from "../typography";
import { HEADING } from "../typography/index";

const VideoPlayer = ({ src }: { src: string }) => {
  return (
    <video className="w-full h-48 object-cover rounded" muted controls>
      <source src={src} type="video/mp4" />
    </video>
  );
};

const truncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};

export const CardContent = ({
  primaryText,
  secondaryText,
  assetType: assetType,
  asset,
  button,
}: CardContentProps) => {
  return (
    <div className="h-full max-w-sm flex flex-col justify-center items-center rounded-sm">
      {assetType === AssetType.Image && asset && (
        <div className="w-full mb-4">
          <img
            src={asset.src}
            alt={primaryText}
            className="w-full h-48 object-cover rounded-t-md"
          />
        </div>
      )}

      {assetType === AssetType.Video && asset && (
        <div className="w-full mb-4">
          <VideoPlayer src={asset.src} />
        </div>
      )}

      <div
        className="h-full w-full min-w-96 px-2 flex-1 flex flex-col min-h-0 h-full"
        style={{ justifyContent: asset ? "flex-start" : "center" }}
      >
        <Typography heading={HEADING.H4}>{primaryText}</Typography>
        {secondaryText && (
          <Typography heading={HEADING.H5}>
            {truncateText(secondaryText, 50)}
          </Typography>
        )}
        {button && <div className="flex justify-end gap-1 pt-2">{button}</div>}
      </div>
    </div>
  );
};
