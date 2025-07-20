import { useMutation } from "@tanstack/react-query";
import {
  newPassword,
  NewPasswordRequest,
  NewPasswordResponse,
  NewPasswordError,
} from "../api/newPassword";

export interface UseNewPasswordOptions {
  onSuccess?: (data: NewPasswordResponse) => void;
  onError?: (error: NewPasswordError) => void;
}

export function useNewPassword(options?: UseNewPasswordOptions) {
  return useMutation<NewPasswordResponse, NewPasswordError, NewPasswordRequest>(
    {
      mutationFn: newPassword,
      onSuccess: options?.onSuccess,
      onError: options?.onError,
    }
  );
}
