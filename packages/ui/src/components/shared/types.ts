export enum BackgroundColor {
  Primary = "primary",
  Secondary = "secondary",
  Neutral = "neutral",
  Alert = "alert",
  Success = "success",
  Warning = "warning",
}

export enum BackgroundType {
  Image = "image",
  Filled = "filled",
  Video = "video",
}

export type BackgroundImage = {
  showBorder?: boolean;
  backgroundPosition: string;
  backgroundType: BackgroundType.Image;
} & WithImageAsset;

export type BackgroundFilled = {
  backgroundColor?: BackgroundColor;
  showBorder?: boolean;
  backgroundPosition?: string;
  backgroundType: BackgroundType.Filled;
};

export type BackgroundVideo = {
  showBorder?: boolean;
  backgroundPosition?: string;
  backgroundType: BackgroundType.Video;
} & WithVideoAsset;

export type Background = BackgroundImage | BackgroundFilled | BackgroundVideo;
export type WithBackground = {
  background: Background;
};

export type WithImageAsset = {
  asset: Image;
};

export type WithVideoAsset = {
  asset: Video;
};
export type BackgroundProps = WithBackground;

export enum AssetType {
  Image = "image",
  Video = "video",
}

export enum CallToActionType {
  Default = "default",
  Text = "text",
}

export type CallToAction = {
  href: string;
  text: string;
  target: string;
  type: CallToActionType;
};

export type WithCallAction = {
  callToAction: CallToAction;
};

export type CaptionContent = {
  primaryText: string;
  secondaryText?: string;
};

export type ImageContent = WithCallAction &
  WithBackground & {
    caption?: CaptionContent;
  };

export enum CardHeight {
  SHORT = "short",
  TALL = "tall",
}
export type Image = {
  width: number;
  height: number;
  src: string;
  type: string;
};

export type Video = {
  width: number;
  height: number;
  src: string;
  trackSrc?: string;
  type: string;
};

export type VideoContent = WithCallAction &
  WithBackground & {
    caption?: CaptionContent;
  };
