import React, { useActionState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthenticityToken } from "../../hooks/useAuthenticityToken";
import { useResetPassword } from "../../hooks/useResetPassword";
import { FormError, ResetPasswordFormProps } from "../../types";
import { FormButton } from "../field/form-button";
import { ResetPasswordFormLayout } from "../layout/reset-password-form-layout";

export const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({
  apiEndpoint = "/auth/password",
  authenticityToken,
  uid,
  clientId,
  accessToken,
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

  const resetPasswordMutation = useResetPassword({
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

    try {
      await resetPasswordMutation.mutateAsync({
        token,
        password,
        passwordConfirmation,
        uid,
        clientId,
        accessToken,
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

  const isDisabled = disabled || isPending || resetPasswordMutation.isPending;

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
        <ResetPasswordFormLayout />
        <FormButton text={buttonText} disabled={isDisabled} />
      </form>
    </div>
  );
};
