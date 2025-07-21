import React, { Ref } from "react";
import { MaskToggle } from "./mask-toggle";
import { useMasked } from "../../hooks/useMasked";
import { PasswordField } from "./password-field";

export interface MaskedPasswordFieldProps {
  blur?: (e?: React.FocusEvent<HTMLElement>) => void;
  inputRef?: Ref<HTMLInputElement>;
}

export const MaskedPasswordField: React.FC<MaskedPasswordFieldProps> = ({
  blur,
  inputRef,
}) => {
  const { masked, toggleMasked } = useMasked();
  const type = masked ? "password" : "text";

  return (
    <div className="flex max-w-96">
      <div className="w-full">
        <PasswordField type={type} blur={blur} ref={inputRef} />
      </div>
      <div className="flex flex-col-reverse">
        <MaskToggle masked={masked} toggle={toggleMasked} />
      </div>
    </div>
  );
};
