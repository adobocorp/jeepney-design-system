import React, { useActionState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthenticityToken } from "../../hooks/useAuthenticityToken";
import { useSignUp } from "../../hooks/useSignUp";
import { FormError, SignUpFormProps } from "../../types";
import { FormButton } from "../field/form-button";
import { SignUpFormLayout } from "../layout/sign-up-form-layout";

export const SignUpForm: React.FC<SignUpFormProps> = ({
  apiEndpoint = "/auth",
  authenticityToken,
  onSuccess,
  onError,
  onRedirect,
  disabled,
  buttonText = "Sign Up",
  className = "",
  requireNames = false,
  title = "Create an Account",
  description = "Fill in the details below to create your account.",
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const defaultToken = useAuthenticityToken();
  const token = authenticityToken || defaultToken;

  const signUpMutation = useSignUp({
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
    const passwordConfirmation = formData.get(
      "password_confirmation"
    ) as string;
    const firstName = formData.get("first_name") as string;
    const lastName = formData.get("last_name") as string;

    // Validation
    if (!email || !password || !passwordConfirmation) {
      return {
        errors: ["Email, password, and password confirmation are required"],
      };
    }

    if (password !== passwordConfirmation) {
      return { errors: ["Passwords do not match"] };
    }

    if (requireNames && (!firstName || !lastName)) {
      return { errors: ["First name and last name are required"] };
    }

    try {
      await signUpMutation.mutateAsync({
        token,
        email,
        password,
        passwordConfirmation,
        firstName: firstName || undefined,
        lastName: lastName || undefined,
        apiEndpoint,
      });
      return null;
    } catch (error) {
      console.error("Error signing up:", error);
      return {
        errors: [
          error instanceof Error ? error.message : "An unknown error occurred",
        ],
      };
    }
  }, null);

  const isDisabled = disabled || isPending || signUpMutation.isPending;

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

      <form action={submitAction} acceptCharset="UTF-8">
        <SignUpFormLayout />
        <FormButton text={buttonText} disabled={isDisabled} />
      </form>
    </div>
  );
};
