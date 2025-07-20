import { User } from "../types";

export interface SignInRequest {
  token: string;
  email: string;
  password: string;
  apiEndpoint?: string;
}

export interface SignInResponse {
  user: User;
}

export class SignInError extends Error {
  constructor(message: string, public status?: number) {
    super(message);
    this.name = "SignInError";
  }
}

export async function signIn({
  token,
  email,
  password,
  apiEndpoint = "/auth/sign_in",
}: SignInRequest): Promise<SignInResponse> {
  const response = await fetch(apiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ authenticity_token: token, email, password }),
  });

  if (!response.ok) {
    let errorMessage;
    switch (response.status) {
      case 401:
        errorMessage = "Invalid email or password";
        break;
      case 422:
        errorMessage = "Invalid authenticity token";
        break;
      default:
        errorMessage = "An unknown error occurred";
        break;
    }
    throw new SignInError(errorMessage, response.status);
  }

  const user = await response.json();
  return { user };
}
