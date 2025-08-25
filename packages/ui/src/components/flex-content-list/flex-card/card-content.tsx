import cn from "classnames";
import { CardContent as CardContentProps, AssetType } from "../../shared/types";

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
    <div className="h-72 flex justify-center items-start flex-col p-8 rounded-sm bg-white/95">
      {/* Video content if asset is video */}
      {assetType === AssetType.Video && asset && (
        <div className="w-full mb-4">
          <VideoPlayer src={asset.src} />
        </div>
      )}
      
      {/* Text content */}
      <div className="text-[rgb(var(--color-font-base))] text-[var(--size-font-large)]rem mb-3">
        {primaryText}
      </div>
      {secondaryText && (
        <div className="text-[rgb(var(--color-font-base))] text-[var(--size-font-small)]rem flex-grow">
          {secondaryText}
        </div>
      )}
    </div>
  );
};
