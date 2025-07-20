import React from "react";
import { Field } from "@base-ui-components/react/field";
import { MaskToggle } from "../field/mask-toggle";
import { useMasked } from "../../hooks/useMasked";

export interface NewPasswordFormLayoutProps {
  showCurrentPassword?: boolean;
  showResetToken?: boolean;
}

export const NewPasswordFormLayout: React.FC<NewPasswordFormLayoutProps> = ({
  showCurrentPassword = false,
  showResetToken = false,
}) => {
  const { masked: currentMasked, toggleMasked: toggleCurrentMasked } = useMasked();
  const { masked: passwordMasked, toggleMasked: togglePasswordMasked } = useMasked();
  const { masked: confirmMasked, toggleMasked: toggleConfirmMasked } = useMasked();

  return (
    <>
      {showCurrentPassword && (
        <div className="mb-4">
          <div className="flex max-w-96">
            <div className="w-full">
              <Field.Root>
                <Field.Label className="block text-gray-700 h-6 leading-6">
                  Current Password<sup>*</sup>
                </Field.Label>
                <Field.Control
                  id="current_password"
                  name="current_password"
                  autoCapitalize="off"
                  autoCorrect="off"
                  className="h-12 mt-1 block w-full bg-white border-r-0 border-gray-500 focus:outline-hidden focus:border-gray-500 focus:ring-0 autofill autofill:shadow-fill-white autofill:text-fill-gray-900"
                  required
                  type={currentMasked ? "password" : "text"}
                  placeholder="Enter your current password"
                />
              </Field.Root>
            </div>
            <div className="flex items-end">
              <MaskToggle masked={currentMasked} toggle={toggleCurrentMasked} />
            </div>
          </div>
        </div>
      )}

      {showResetToken && (
        <div className="mb-4">
          <Field.Root>
            <Field.Label className="block text-gray-700 h-6 leading-6">
              Reset Token<sup>*</sup>
            </Field.Label>
            <Field.Control
              id="reset_password_token"
              name="reset_password_token"
              className="h-12 mt-1 block w-full bg-white border border-gray-500 focus:outline-hidden focus:border-gray-500 focus:ring-0"
              required
              type="text"
              placeholder="Enter your reset token"
            />
          </Field.Root>
        </div>
      )}

      <div className="mb-4">
        <div className="flex max-w-96">
          <div className="w-full">
            <Field.Root>
              <Field.Label className="block text-gray-700 h-6 leading-6">
                New Password<sup>*</sup>
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
                placeholder="Enter your new password"
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
                Confirm New Password<sup>*</sup>
              </Field.Label>
              <Field.Control
                id="password_confirmation"
                name="password_confirmation"
                autoCapitalize="off"
                autoCorrect="off"
                className="h-12 mt-1 block w-full bg-white border-r-0 border-gray-500 focus:outline-hidden focus:border-gray-500 focus:ring-0 autofill autofill:shadow-fill-white autofill:text-fill-gray-900"
                required
                type={confirmMasked ? "password" : "text"}
                placeholder="Confirm your new password"
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
