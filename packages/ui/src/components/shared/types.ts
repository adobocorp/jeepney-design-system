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
}

export type BackgroundImage = {
  backgroundPosition?: string;
  backgroundType: BackgroundType.Image;
};

export type BackgroundFilled = {
  backgroundColor?: BackgroundColor;
  showBorder?: boolean;
  backgroundType: BackgroundType.Filled;
};

export type Background = BackgroundImage | BackgroundFilled;
export type WithBackground = {
  background: Background;
};
export type BackgroundProps = WithBackground;

export enum ContentType {
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

export type ImageContent = {
  contentType: ContentType.Image;
  caption: CaptionContent;
  asset?: Image;
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

export type VideoContent = WithCallAction & {
  contentType: ContentType.Video;
  caption: CaptionContent;
  asset?: Video;
};
