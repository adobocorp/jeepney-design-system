import React, { useActionState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthenticityToken } from "../../hooks/useAuthenticityToken";
import { useSignIn } from "../../hooks/useSignIn";
import { FormError, SignInFormProps } from "../../types";
import { FormButton } from "../field/form-button";
import { SignInFormLayout } from "../layout/sign-in-form-layout";

export const SignInForm: React.FC<SignInFormProps> = ({
  apiEndpoint = "/auth/sign_in",
  authenticityToken,
  onSuccess,
  onError,
  onRedirect,
  disabled,
  buttonText = "Login",
  className = "",
  title = "Sign In",
  description = "Enter your email and password to sign in.",
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const defaultToken = useAuthenticityToken();
  const token = authenticityToken || defaultToken;

  const signInMutation = useSignIn({
    onSuccess: (data) => {
      if (onSuccess) {
        onSuccess(data.user);
      } else if (onRedirect) {
        const { from } = location.state || { from: { pathname: "/" } };
        onRedirect(from.pathname);
      } else {
        const { from } = location.state || { from: { pathname: "/" } };
        navigate(from.pathname, { replace: true });
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
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      await signInMutation.mutateAsync({
        token,
        email,
        password,
        apiEndpoint,
      });
      return null;
    } catch (error) {
      console.error("Error signing in:", error);
      return {
        errors: [
          error instanceof Error ? error.message : "An unknown error occurred",
        ],
      };
    }
  }, null);

  const isDisabled = disabled || isPending || signInMutation.isPending;

  return (
    <div className={className}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          {title}
        </h2>
        {
          description && <p className="text-sm text-gray-599 text-center mt-2 font-[Bantayog-Light]">
            {description}
          </p>
        }
      </div>
      {error && error.errors && error.errors.length > 0 && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
          <div className="text-sm text-red-700">
            {error.errors.map((err, index) => (
              <div key={index}>{err}</div>
            ))}
          </div>
        </div>
      )}
      <form action={submitAction} acceptCharset="UTF-8" className={className}>
        <SignInFormLayout />
        <FormButton text={buttonText} disabled={isDisabled} />
      </form>
    </div>
  );
};
