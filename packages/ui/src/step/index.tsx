import styles from "./step.module.css";
import { StepBackground } from "./step-background";
import { StepProps } from "./types";
import { StepContent } from "./step-content";

export function Step({ width, height, content, background }: StepProps) {
  return (
    <div className={styles.step} style={{ width: width, height: height }}>
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
