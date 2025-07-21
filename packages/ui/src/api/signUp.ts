export interface SignUpRequest {
  token: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  firstName?: string;
  lastName?: string;
  apiEndpoint: string;
}

export interface SignUpResponse {
  user: {
    id: string;
    email: string;
    firstName?: string;
    lastName?: string;
    username?: string;
  };
  token?: string;
  message?: string;
}

export interface SignUpError extends Error {
  status?: number;
  errors?: string[];
}

export async function signUp(request: SignUpRequest): Promise<SignUpResponse> {
  const {
    token,
    email,
    password,
    passwordConfirmation,
    firstName,
    lastName,
    apiEndpoint,
  } = request;

  try {
    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        authenticity_token: token,
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        password_confirmation: passwordConfirmation,
      }),
      credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
      const error = new Error(data.message || "Sign up failed") as SignUpError;
      error.status = response.status;
      error.errors = data.errors || [data.message || "Sign up failed"];
      throw error;
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      const signUpError = error as SignUpError;
      throw signUpError;
    }

    const unknownError = new Error(
      "An unknown error occurred during sign up"
    ) as SignUpError;
    unknownError.errors = ["An unknown error occurred during sign up"];
    throw unknownError;
  }
}
