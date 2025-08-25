import { AssetType, CardContent as CardContentProps } from "../../shared/types";

const VideoPlayer = ({ src }: { src: string }) => {
  return (
    <video className="w-full h-48 object-cover rounded" muted controls>
      <source src={src} type="video/mp4" />
    </video>
  );
};

export const CardContent = ({
  primaryText,
  secondaryText,
  AssetType: assetType,
  asset,
}: CardContentProps) => {
  return (
    <div className="h-full max-w-sm flex flex-col justify-center items-center rounded-sm">
      {assetType === AssetType.Image && asset && (
        <div className="w-full mb-4">
          <img
            src={asset.src}
            alt={primaryText}
            className="w-full h-48 object-cover rounded"
          />
        </div>
      )}

      {assetType === AssetType.Video && asset && (
        <div className="w-full mb-4">
          <VideoPlayer src={asset.src} />
        </div>
      )}

      <div className="h-full w-full px-8 flex-1 flex flex-col min-h-0 h-full justify-center">
        <div>{primaryText}</div>
        {secondaryText && <div>{secondaryText}</div>}
      </div>
    </div>
  );
};
