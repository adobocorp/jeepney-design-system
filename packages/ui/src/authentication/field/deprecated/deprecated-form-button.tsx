import React from "react";
import { Button, COLOR, SIZE, WIDTH } from "../../../components/button";
// import { Button } from "./deprecated-button";

interface FormButtonProps {
  disabled?: boolean;
  children: React.ReactNode;
}

export const FormButton: React.FC<FormButtonProps> = ({
  disabled,
  children,
}) => {
  return (
    <Button
      type="submit"
      size={SIZE.medium}
      width={WIDTH.inherit}
      color={COLOR.primary}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};
