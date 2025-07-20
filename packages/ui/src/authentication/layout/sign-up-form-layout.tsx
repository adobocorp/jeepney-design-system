import React from "react";
import { TextField } from "../field/text-field";
import { EmailField } from "../field/email-field";
import { Field } from "@base-ui-components/react/field";
import { MaskToggle } from "../field/mask-toggle";
import { useMasked } from "../../hooks/useMasked";

export const SignUpFormLayout: React.FC = () => {
  const { masked: passwordMasked, toggleMasked: togglePasswordMasked } =
    useMasked();
  const { masked: confirmMasked, toggleMasked: toggleConfirmMasked } =
    useMasked();

  return (
    <>
      <div className="mb-4">
        <TextField
          id="first_name"
          name="first_name"
          label="First Name"
          required={false}
        />
      </div>

      <div className="mb-4">
        <TextField
          id="last_name"
          name="last_name"
          label="Last Name"
          required={false}
        />
      </div>

      <div className="mb-4">
        <EmailField />
      </div>

      <div className="mb-4">
        <div className="flex max-w-96">
          <div className="w-full">
            <Field.Root>
              <Field.Label className="block text-gray-700 h-6 leading-6">
                Password<sup>*</sup>
              </Field.Label>
              <Field.Control
                id="password"
                name="password"
                autoCapitalize="off"
                autoCorrect="off"
                pattern=".{8,}"
                title="Must contain at least 8 or more characters"
                className="h-12 mt-1 block w-full bg-white border-r-0 border-gray-500 focus:outline-hidden focus:border-gray-500 focus:ring-0 autofill autofill:shadow-fill-white autofill:text-fill-gray-900"
                required
                type={passwordMasked ? "password" : "text"}
                placeholder="Enter your password"
              />
            </Field.Root>
          </div>
          <div className="flex items-end">
            <MaskToggle masked={passwordMasked} toggle={togglePasswordMasked} />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex max-w-96">
          <div className="w-full">
            <Field.Root>
              <Field.Label className="block text-gray-700 h-6 leading-6">
                Confirm Password<sup>*</sup>
              </Field.Label>
              <Field.Control
                id="password_confirmation"
                name="password_confirmation"
                autoCapitalize="off"
                autoCorrect="off"
                className="h-12 mt-1 block w-full bg-white border-r-0 border-gray-500 focus:outline-hidden focus:border-gray-500 focus:ring-0 autofill autofill:shadow-fill-white autofill:text-fill-gray-900"
                required
                type={confirmMasked ? "password" : "text"}
                placeholder="Confirm your password"
              />
            </Field.Root>
          </div>
          <div className="flex items-end">
            <MaskToggle masked={confirmMasked} toggle={toggleConfirmMasked} />
          </div>
        </div>
      </div>
    </>
  );
};
