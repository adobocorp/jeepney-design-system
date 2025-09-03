import { Fieldset } from "@headlessui/react";
import React from "react";
import { EmailField } from "../field/email-field";
import { PasswordField } from "../field/password-field";

export const SignInFormLayout: React.FC = () => {
  return (
    <Fieldset className="flex flex-col gap-y-4">
      <EmailField />
      <PasswordField
        id="password"
        name="password"
        autoComplete="current-password"
        label="Password"
      />
    </Fieldset>
  );
};
