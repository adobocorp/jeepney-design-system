import { useMutation } from "@tanstack/react-query";
import {
  signIn,
  SignInRequest,
  SignInResponse,
  SignInError,
} from "../api/signIn";

export interface UseSignInOptions {
  onSuccess?: (data: SignInResponse) => void;
  onError?: (error: SignInError) => void;
}

export function useSignIn(options?: UseSignInOptions) {
  return useMutation<SignInResponse, SignInError, SignInRequest>({
    mutationFn: signIn,
    onSuccess: options?.onSuccess,
    onError: options?.onError,
  });
}
