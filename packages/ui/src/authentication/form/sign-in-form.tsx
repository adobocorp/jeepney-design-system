import React, { useActionState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSignIn } from "../../hooks/useSignIn";
import { useAuthenticityToken } from "../../hooks/useAuthenticityToken";
import { SignInFormLayout } from "../layout/sign-in-form-layout";
import { FormButton } from "../field/form-button";
import { SignInFormProps, FormError } from "../../types";

export const SignInForm: React.FC<SignInFormProps> = ({
  apiEndpoint = "/auth/sign_in",
  authenticityToken,
  onSuccess,
  onError,
  onRedirect,
  disabled,
  buttonText = "Login",
  className = "",
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
    <form action={submitAction} acceptCharset="UTF-8" className={className}>
      <SignInFormLayout />
      <FormButton text={buttonText} disabled={isDisabled} />
    </form>
  );
};
