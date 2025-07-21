import type { CarouselContentProps } from "../../types";
import styles from "./image-caption.module.css";
import cn from "classnames";
import { UpperImage } from "./upper-image";
import { LowerCaption } from "./lower-caption";

export function ImageCaption({ content }: CarouselContentProps) {
  return (
    <div className={cn(styles.imageCaptionContainer)}>
      <UpperImage></UpperImage>
      <LowerCaption
        primaryText={content.primaryText}
        secondaryText={content.secondaryText}
      />
    </div>
  );
}
