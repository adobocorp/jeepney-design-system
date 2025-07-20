// Main component
export { SignInForm } from "./components/form/sign-in-form";
export { SignUpForm } from "./components/form/sign-up-form";
export { NewPasswordForm } from "./components/form/new-password-form";
export { ResetPasswordForm } from "./components/form/reset-password-form";

// Sub-components (for customization)
export { SignInFormLayout } from "./components/layout/sign-in-form-layout";
export { SignUpFormLayout } from "./components/layout/sign-up-form-layout";
export { NewPasswordFormLayout } from "./components/layout/new-password-form-layout";
export { ResetPasswordFormLayout } from "./components/layout/reset-password-form-layout";
export { EmailField } from "./components/field/email-field";
export { MaskedPasswordField } from "./components/field/masked-password-field";
export { PasswordField } from "./components/field/password-field";
export { FormButton } from "./components/field/form-button";
export { Button } from "./components/field/button";
export { FieldContainer } from "./components/field/field-container";
export { MaskToggle } from "./components/field/mask-toggle";

// Hooks
export { useSignIn } from "./hooks/useSignIn";
export { useSignUp } from "./hooks/useSignUp";
export { useNewPassword } from "./hooks/useNewPassword";
export { useResetPassword } from "./hooks/useResetPassword";
export { useAuthenticityToken } from "./hooks/useAuthenticityToken";
export { useMasked } from "./hooks/useMasked";

// API functions
export { signIn } from "./api/signIn";
export { signUp } from "./api/signUp";
export { newPassword } from "./api/newPassword";
export { resetPassword } from "./api/resetPassword";

// Types
export type {
  SignInFormProps,
  SignUpFormProps,
  NewPasswordFormProps,
  ResetPasswordFormProps,
  FormError,
  User,
  ApiCallMixins,
} from "./types";
export type { SignInRequest, SignInResponse, SignInError } from "./api/signIn";
export type { SignUpRequest, SignUpResponse, SignUpError } from "./api/signUp";
export type {
  NewPasswordRequest,
  NewPasswordResponse,
  NewPasswordError,
} from "./api/newPassword";
export type {
  ResetPasswordRequest,
  ResetPasswordResponse,
  ResetPasswordError,
} from "./api/resetPassword";
export type { UseSignInOptions } from "./hooks/useSignIn";
export type { UseSignUpOptions } from "./hooks/useSignUp";
export type { UseNewPasswordOptions } from "./hooks/useNewPassword";
export type { UseResetPasswordOptions } from "./hooks/useResetPassword";
