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
  Card = "card",
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

export type CardContent = {
  primaryText: string;
  secondaryText?: string;
  contentType: ContentType.Card;
};

export type VideoContent = WithCallAction & {
  caption?: string;
  width: number;
  height: number;
  src: string;
  trackSrc: string;
  type: string;
  contentType: ContentType.Video;
};
