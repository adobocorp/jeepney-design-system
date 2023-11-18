import { useState } from "react";
import styles from "./image-caption.module.css";
import cn from "classnames";
// import { CardContent as CardContentProps } from "../../../shared/types";

export const LowerCaption = ({ primaryText, secondaryText }: any) => {
  let longCaption = secondaryText;

  if (secondaryText?.length && secondaryText.length > 120) {
    longCaption = secondaryText.slice(0, 120) + "...";
  }

  return (
    <div className={cn(styles.contentContainer, styles.lowerCaptionContainer)}>
      <div
        className={cn(
          styles.lowerCaptionContent,
          styles.lowerCaptionContentPrimary
        )}
      >
        {primaryText}
      </div>
      {secondaryText && (
        <div
          className={cn(
            styles.lowerCaptionContent,
            styles.lowerCaptionContentSecondary
          )}
        >
          {longCaption}
        </div>
      )}
    </div>
  );
};
