import React, { useActionState } from "react";
import { useResetPassword } from "../../hooks/useResetPassword";
import { useAuthenticityToken } from "../../hooks/useAuthenticityToken";
import { ResetPasswordFormLayout } from "../layout/reset-password-form-layout";
import { FormButton } from "../field/form-button";
import { ResetPasswordFormProps, FormError } from "../../types";

export const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({
  apiEndpoint = "/auth/password/reset",
  authenticityToken,
  onSuccess,
  onError,
  onRedirect,
  disabled,
  buttonText = "Send Reset Instructions",
  className = "",
  description = "Enter your email address and we'll send you a link to reset your password.",
}) => {
  const defaultToken = useAuthenticityToken();
  const token = authenticityToken || defaultToken;

  const resetPasswordMutation = useResetPassword({
    onSuccess: (data) => {
      if (onSuccess) {
        onSuccess(data);
      } else if (onRedirect) {
        onRedirect("/");
      }
      // If no custom handlers, the component will show success state
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
    const email = formData.get("email") as string;

    // Validation
    if (!email) {
      return { errors: ["Email address is required"] };
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { errors: ["Please enter a valid email address"] };
    }

    try {
      await resetPasswordMutation.mutateAsync({
        token,
        email,
        apiEndpoint,
      });
      return null;
    } catch (error) {
      console.error("Error requesting password reset:", error);
      return {
        errors: [
          error instanceof Error ? error.message : "An unknown error occurred",
        ],
      };
    }
  }, null);

  const isDisabled = disabled || isPending || resetPasswordMutation.isPending;
  const isSuccess = resetPasswordMutation.isSuccess && !error;

  return (
    <div className={className}>
      {isSuccess ? (
        <div className="text-center">
          <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-md">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-green-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800">
                  Reset instructions sent!
                </h3>
                <div className="mt-2 text-sm text-green-700">
                  <p>
                    Check your email for a link to reset your password. If it
                    doesn't appear within a few minutes, check your spam folder.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="text-sm text-blue-600 hover:text-blue-500"
          >
            Send another email
          </button>
        </div>
      ) : (
        <>
          {description && (
            <div className="mb-4 text-sm text-gray-600 text-center">
              {description}
            </div>
          )}

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
        </>
      )}
    </div>
  );
};
