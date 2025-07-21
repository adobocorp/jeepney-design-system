import { useMutation } from "@tanstack/react-query";
import {
  forgotPassword,
  ForgotPasswordError,
  ForgotPasswordRequest,
  ForgotPasswordResponse,
} from "../api/forgotPassword";

export interface UseForgotPasswordOptions {
  onSuccess?: (data: ForgotPasswordResponse) => void;
  onError?: (error: ForgotPasswordError) => void;
}

export function useForgotPassword(options?: UseForgotPasswordOptions) {
  return useMutation<
    ForgotPasswordResponse,
    ForgotPasswordError,
    ForgotPasswordRequest
  >({
    mutationFn: forgotPassword,
    onSuccess: options?.onSuccess,
    onError: options?.onError,
  });
}
