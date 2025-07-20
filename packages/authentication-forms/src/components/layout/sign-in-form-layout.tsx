import React from "react";
import { FieldContainer } from "../field/field-container";
import { EmailField } from "../field/email-field";
import { MaskedPasswordField } from "../field/masked-password-field";

export const SignInFormLayout: React.FC = () => {
  return (
    <>
      <FieldContainer FieldComponent={EmailField} className="block mb-2" />
      <FieldContainer
        FieldComponent={MaskedPasswordField}
        className="block mb-2"
      />
    </>
  );
};
