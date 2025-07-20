import React, { useActionState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useNewPassword } from "../../hooks/useNewPassword";
import { useAuthenticityToken } from "../../hooks/useAuthenticityToken";
import { NewPasswordFormLayout } from "../layout/new-password-form-layout";
import { FormButton } from "../field/form-button";
import { NewPasswordFormProps, FormError } from "../../types";

export const NewPasswordForm: React.FC<NewPasswordFormProps> = ({
  apiEndpoint = "/auth/password",
  authenticityToken,
  resetPasswordToken,
  showCurrentPassword = false,
  showResetToken = false,
  onSuccess,
  onError,
  onRedirect,
  disabled,
  buttonText = "Update Password",
  className = "",
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const defaultToken = useAuthenticityToken();
  const token = authenticityToken || defaultToken;

  const newPasswordMutation = useNewPassword({
    onSuccess: (data) => {
      if (onSuccess) {
        onSuccess(data.user);
      } else if (onRedirect) {
        const { from } = location.state || { from: { pathname: "/" } };
        onRedirect(from.pathname);
      } else {
        // Default redirect after password update
        navigate("/", { replace: true });
      }
    },
    onError: (error) => {
      if (onError) {
        onError(error.message);
      }
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, submitAction, isPending] = useActionState<
    FormError | null,
    FormData
  >(async (previousState: FormError | null, formData: FormData) => {
    const password = formData.get("password") as string;
    const passwordConfirmation = formData.get(
      "password_confirmation"
    ) as string;
    const currentPassword = formData.get("current_password") as string;
    const resetToken = formData.get("reset_password_token") as string;

    // Validation
    if (!password || !passwordConfirmation) {
      return { errors: ["Password and password confirmation are required"] };
    }

    if (password !== passwordConfirmation) {
      return { errors: ["Passwords do not match"] };
    }

    if (password.length < 8) {
      return { errors: ["Password must be at least 8 characters long"] };
    }

    if (showCurrentPassword && !currentPassword) {
      return { errors: ["Current password is required"] };
    }

    if (showResetToken && !resetToken && !resetPasswordToken) {
      return { errors: ["Reset token is required"] };
    }

    try {
      await newPasswordMutation.mutateAsync({
        token,
        password,
        passwordConfirmation,
        currentPassword: currentPassword || undefined,
        resetPasswordToken: resetToken || resetPasswordToken || undefined,
        apiEndpoint,
      });
      return null;
    } catch (error) {
      console.error("Error updating password:", error);
      return {
        errors: [
          error instanceof Error ? error.message : "An unknown error occurred",
        ],
      };
    }
  }, null);

  const isDisabled = disabled || isPending || newPasswordMutation.isPending;

  return (
    <div className={className}>
      {error && error.errors && error.errors.length > 0 && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
          <div className="text-sm text-red-700">
            {error.errors.map((err, index) => (
              <div key={index}>{err}</div>
            ))}
          </div>
        </div>
      )}

      <form action={submitAction} acceptCharset="UTF-8">
        <NewPasswordFormLayout
          showCurrentPassword={showCurrentPassword}
          showResetToken={showResetToken && !resetPasswordToken}
        />
        <FormButton text={buttonText} disabled={isDisabled} />
      </form>
    </div>
  );
};
