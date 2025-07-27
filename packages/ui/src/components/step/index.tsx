import { StepBackground } from "./step-background";
import { StepContent } from "./step-content";
import { StepProps } from "./types";

export function Step({ width, height, content, background }: StepProps) {
  return (
    <div className="w-[800px] h-96" style={{ width: width, height: height }}>
      {background?.backgroundType && (
        <StepBackground background={background}>
          {content?.contentType && (
            <StepContent
              content={content}
              background={background}
            ></StepContent>
          )}
        </StepBackground>
      )}
    </div>
  );
}
