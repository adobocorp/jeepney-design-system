import {
  AssetType,
  CardContent as CardContentProps,
  CardHeight,
} from "../shared/types";
import { Typography } from "../typography";
import { HEADING } from "../typography/index";

const VideoPlayer = ({ src }: { src: string }) => {
  return (
    <video
      className="w-full h-48 object-cover object-center"
      muted
      controls
      autoPlay
    >
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
  assetType,
  asset,
  cardHeight,
  button,
}: CardContentProps) => {
  let secondaryTextLimit =
    assetType &&
    [AssetType.Image, AssetType.Video].findIndex(
      (type) => type === assetType
    ) !== -1
      ? 100
      : 500;

  if (cardHeight === CardHeight.TALL) {
    secondaryTextLimit = 300;
  }

  if (!button) {
    secondaryTextLimit += 50;
  }

  if (!asset) {
    return (
      <div className="h-full max-w-sm flex flex-col justify-center items-center rounded-sm">
        <div className="h-full w-full min-w-96 px-2 flex-1 flex flex-col justify-center">
          <Typography heading={HEADING.H4}>{primaryText}</Typography>
          {secondaryText && (
            <Typography heading={HEADING.H5}>
              {truncateText(secondaryText, secondaryTextLimit)}
            </Typography>
          )}
          {button && (
            <div className="flex justify-end gap-1 py-2">{button}</div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="h-full max-w-sm flex flex-col justify-center items-center rounded-sm">
      {assetType === AssetType.Image && asset && (
        <div className="w-full mb-2">
          <img
            src={asset.src}
            alt={primaryText}
            className="w-full h-48 object-cover rounded-t-md object-center"
          />
        </div>
      )}

      {assetType === AssetType.Video && asset && (
        <div className="w-full mb-2">
          <VideoPlayer src={asset.src} />
        </div>
      )}

      <div className="h-full w-full min-w-96 px-2 flex-1 flex flex-col">
        <div
          className="justify-start"
          style={{ justifyContent: asset ? "space-between" : "center" }}
        >
          <Typography heading={HEADING.H4}>{primaryText}</Typography>
        </div>
        {secondaryText && (
          <div
            className="flex flex-1"
            style={{ justifyContent: asset ? "space-between" : "center" }}
          >
            <Typography heading={HEADING.H5}>
              {truncateText(secondaryText, secondaryTextLimit)}
            </Typography>
          </div>
        )}
        {button && <div className="flex justify-end gap-1 py-2">{button}</div>}
      </div>
    </div>
  );
};
