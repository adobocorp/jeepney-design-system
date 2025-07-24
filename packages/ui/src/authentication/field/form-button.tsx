import React from "react";
import { Button } from "./button";

interface FormButtonProps {
  text: string;
  disabled?: boolean;
  className?: string;
}

export const FormButton: React.FC<FormButtonProps> = ({
  text,
  disabled,
  className,
}) => {
  return (
    <Button
      type="submit"
      size="medium"
      width="inherit"
      text={text}
      disabled={disabled}
      className={className}
    />
  );
};
