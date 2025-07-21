export interface ApiCallMixins {
  failureFn?: (response: unknown) => void;
  successFn?: (response: unknown) => void;
}

export interface FormError {
  errors?: string[];
}

export interface SignInFormProps {
  /**
   * Custom authentication API endpoint (optional)
   * Defaults to "/auth/sign_in"
   */
  apiEndpoint?: string;

  /**
   * Custom authenticity token
   * If not provided, will attempt to read from CSRF meta tag
   */
  authenticityToken?: string;

  /**
   * Callback function called on successful sign-in
   */
  onSuccess?: (user: unknown) => void;

  /**
   * Callback function called on sign-in error
   */
  onError?: (error: string) => void;

  /**
   * Custom redirect function
   * If not provided, will use react-router navigation
   */
  onRedirect?: (path: string) => void;

  /**
   * Show/hide loading state
   */
  disabled?: boolean;

  /**
   * Custom button text
   */
  buttonText?: string;

  /**
   * Custom CSS classes for the form
   */
  className?: string;
}

export interface SignUpFormProps {
  /**
   * Custom registration API endpoint (optional)
   * Defaults to "/auth"
   */
  apiEndpoint?: string;

  /**
   * Custom authenticity token
   * If not provided, will attempt to read from CSRF meta tag
   */
  authenticityToken?: string;

  /**
   * Callback function called on successful sign-up
   */
  onSuccess?: (user: unknown) => void;

  /**
   * Callback function called on sign-up error
   */
  onError?: (error: string) => void;

  /**
   * Custom redirect function
   * If not provided, will use react-router navigation
   */
  onRedirect?: (path: string) => void;

  /**
   * Show/hide loading state
   */
  disabled?: boolean;

  /**
   * Custom button text
   */
  buttonText?: string;

  /**
   * Custom CSS classes for the form
   */
  className?: string;

  /**
   * Require first and last name fields
   */
  requireNames?: boolean;
}

export interface User {
  id: string | number;
  email: string;
  [key: string]: unknown;
}

export interface ResetPasswordFormProps {
  /**
   * Custom password update API endpoint (optional)
   * Defaults to "/auth/password"
   */
  apiEndpoint?: string;

  /**
   * Custom authenticity token
   * If not provided, will attempt to read from CSRF meta tag
   */
  authenticityToken?: string;

  /**
   * Reset password token (for password reset flow)
   */
  accessToken?: string;

  /**
   * Current user's password (for authenticated users)
   */
  clientId?: string;

  /**
   * Current user's ID (for authenticated users)
   */
  uid?: string;

  /**
   * Callback function called on successful password update
   */
  onSuccess?: (user: unknown) => void;

  /**
   * Callback function called on password update error
   */
  onError?: (error: string) => void;

  /**
   * Custom redirect function
   * If not provided, will use react-router navigation
   */
  onRedirect?: (path: string) => void;

  /**
   * Show/hide loading state
   */
  disabled?: boolean;

  /**
   * Custom button text
   */
  buttonText?: string;

  /**
   * Custom CSS classes for the form
   */
  className?: string;
}

export interface ForgotPasswordFormProps {
  /**
   * Custom password reset API endpoint (optional)
   * Defaults to "/auth/password/reset"
   */
  apiEndpoint?: string;

  /**
   * Custom authenticity token
   * If not provided, will attempt to read from CSRF meta tag
   */
  authenticityToken?: string;

  /**
   * Callback function called on successful password reset request
   */
  onSuccess?: (response: unknown) => void;

  /**
   * Callback function called on password reset error
   */
  onError?: (error: string) => void;

  /**
   * Custom redirect function
   * If not provided, will stay on the same page
   */
  onRedirect?: (path: string) => void;

  /**
   * Show/hide loading state
   */
  disabled?: boolean;

  /**
   * Custom button text
   */
  buttonText?: string;

  /**
   * Custom CSS classes for the form
   */
  className?: string;

  /**
   * Custom description text above the form
   */
  description?: string;
}
