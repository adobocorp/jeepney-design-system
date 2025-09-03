// Main component
export { ForgotPasswordForm } from "./authentication/form/forgot-password-form";
export { ResetPasswordForm } from "./authentication/form/reset-password-form";
export { SignInForm } from "./authentication/form/sign-in-form";
export { SignUpForm } from "./authentication/form/sign-up-form";

// Sub-components (for customization)
export { EmailField } from "./authentication/field/deprecated/deprecated-email-field";
export { FieldContainer } from "./authentication/field/deprecated/deprecated-field-container";
export { FormButton } from "./authentication/field/deprecated/deprecated-form-button";
export { MaskToggle } from "./authentication/field/deprecated/deprecated-mask-toggle";
export { MaskedPasswordField } from "./authentication/field/deprecated/deprecated-masked-password-field";
export { PasswordField } from "./authentication/field/deprecated/deprecated-password-field";
export { ForgotPasswordFormLayout } from "./authentication/layout/forgot-password-form-layout";
export { ResetPasswordFormLayout } from "./authentication/layout/reset-password-form-layout";
export { SignInFormLayout } from "./authentication/layout/sign-in-form-layout";
export { SignUpFormLayout } from "./authentication/layout/sign-up-form-layout";

// General Components
export { Button as ButtonComponent, COLOR } from "./components/button";
export { Carousel } from "./components/carousel";
export { HEADING, Typography } from "./components/typography";

// Hooks
export { useAuthenticityToken } from "./hooks/useAuthenticityToken";
export { useForgotPassword } from "./hooks/useForgotPassword";
export { useMasked } from "./hooks/useMasked";
export { useResetPassword } from "./hooks/useResetPassword";
export { useSignIn } from "./hooks/useSignIn";
export { useSignUp } from "./hooks/useSignUp";

// API functions
export { forgotPassword } from "./api/forgotPassword";
export { resetPassword } from "./api/resetPassword";
export { signIn } from "./api/signIn";
export { signUp } from "./api/signUp";

// Types
export type {
  ForgotPasswordError,
  ForgotPasswordRequest,
  ForgotPasswordResponse,
} from "./api/forgotPassword";
export type {
  ResetPasswordError,
  ResetPasswordRequest,
  ResetPasswordResponse,
} from "./api/resetPassword";
export type { SignInError, SignInRequest, SignInResponse } from "./api/signIn";
export type { SignUpError, SignUpRequest, SignUpResponse } from "./api/signUp";
export type {
  CarouselContent,
  CarouselContentProps,
  CarouselProps,
} from "./components/carousel/types";
export type { UseForgotPasswordOptions } from "./hooks/useForgotPassword";
export type { UseResetPasswordOptions } from "./hooks/useResetPassword";
export type { UseSignInOptions } from "./hooks/useSignIn";
export type { UseSignUpOptions } from "./hooks/useSignUp";
export type {
  ApiCallMixins,
  ForgotPasswordFormProps,
  FormError,
  ResetPasswordFormProps,
  SignInFormProps,
  SignUpFormProps,
  User,
} from "./types";
