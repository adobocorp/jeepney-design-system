import { useMutation } from "@tanstack/react-query";
import {
  resetPassword,
  ResetPasswordError,
  ResetPasswordRequest,
  ResetPasswordResponse,
} from "../api/resetPassword";

export interface UseResetPasswordOptions {
  onSuccess?: (data: ResetPasswordResponse) => void;
  onError?: (error: ResetPasswordError) => void;
}

export function useResetPassword(options?: UseResetPasswordOptions) {
  return useMutation<
    ResetPasswordResponse,
    ResetPasswordError,
    ResetPasswordRequest
  >({
    mutationFn: resetPassword,
    onSuccess: options?.onSuccess,
    onError: options?.onError,
  });
}
