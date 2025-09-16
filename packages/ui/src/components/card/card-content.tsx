import {
  AssetType,
  CardContent as CardContentProps,
  CardHeight,
} from "../shared/types";
import { Typography } from "../typography";
import { Heading } from "../typography/index";

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

  if (!asset && assetType !== AssetType.LOADING) {
    return (
      <div className="h-full max-w-sm flex flex-col justify-center items-center rounded-sm">
        <div className="h-full w-full px-2 flex-1 flex flex-col justify-center">
          <Typography heading={Heading.H4}>{primaryText}</Typography>
          {secondaryText && (
            <Typography heading={Heading.H5}>
              {truncateText(secondaryText, secondaryTextLimit)}
            </Typography>
          )}
          {button && (
            <div className="flex justify-end gap-1 py-2">{button}</div>
          )}
        </div>
      </div>
    );
  } else if (assetType === AssetType.LOADING) {
    return (
      <div className="h-full max-w-sm flex flex-col justify-center items-center rounded-sm">
        <div className="h-full w-full px-2 flex-1 flex flex-col justify-center">
          <div className="animate-pulse flex flex-col gap-2">
            <div className="h-6 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group h-full max-w-sm flex flex-col justify-center items-center rounded-sm">
      {assetType === AssetType.Image && asset && (
        <div className="w-full mb-2 overflow-hidden rounded-t-md">
          <img
            src={asset.src}
            alt={primaryText}
            className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-200"
          />
        </div>
      )}

      {assetType === AssetType.Video && asset && (
        <div className="w-full mb-2">
          <VideoPlayer src={asset.src} />
        </div>
      )}

      <div className="h-full w-full px-2 flex-1 flex flex-col">
        <div
          className="justify-start"
          style={{ justifyContent: asset ? "space-between" : "center" }}
        >
          <Typography heading={Heading.H4}>{primaryText}</Typography>
        </div>
        {secondaryText && (
          <div
            className="flex flex-1"
            style={{ justifyContent: asset ? "space-between" : "center" }}
          >
            <Typography heading={Heading.H5}>
              {truncateText(secondaryText, secondaryTextLimit)}
            </Typography>
          </div>
        )}
        {button && <div className="flex justify-end gap-1 py-2">{button}</div>}
      </div>
    </div>
  );
};
