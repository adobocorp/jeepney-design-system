import { useMutation } from "@tanstack/react-query";
import {
  signUp,
  SignUpRequest,
  SignUpResponse,
  SignUpError,
} from "../api/signUp";

export interface UseSignUpOptions {
  onSuccess?: (data: SignUpResponse) => void;
  onError?: (error: SignUpError) => void;
}

export function useSignUp(options?: UseSignUpOptions) {
  return useMutation<SignUpResponse, SignUpError, SignUpRequest>({
    mutationFn: signUp,
    onSuccess: options?.onSuccess,
    onError: options?.onError,
  });
}
