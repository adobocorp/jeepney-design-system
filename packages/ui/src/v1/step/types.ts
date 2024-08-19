import { BackgroundProps } from "../shared/types";
import { CardContent, VideoContent } from "../shared/types";

export type StepContent = CardContent | VideoContent;

export type WithContent = {
  content?: StepContent;
};

export type StepContentProps = WithContent;

export type StepProps = BackgroundProps &
  StepContentProps & {
    width: string;
    height: string;
  };
