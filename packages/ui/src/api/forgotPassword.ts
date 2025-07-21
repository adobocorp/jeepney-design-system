export interface ForgotPasswordRequest {
  token: string;
  email: string;
  apiEndpoint: string;
}

export interface ForgotPasswordResponse {
  success: boolean;
  message: string;
  email?: string;
}

export interface ForgotPasswordError extends Error {
  status?: number;
  errors?: string[];
}

export async function forgotPassword(
  request: ForgotPasswordRequest
): Promise<ForgotPasswordResponse> {
  const { token, email, apiEndpoint } = request;

  try {
    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        authenticity_token: token,
        email,
      }),
      credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
      const error = new Error(
        data.message || "Password forgot failed"
      ) as ForgotPasswordError;
      error.status = response.status;
      error.errors = data.errors || [data.message || "Password forgot failed"];
      throw error;
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      const forgotPasswordError = error as ForgotPasswordError;
      throw forgotPasswordError;
    }

    const unknownError = new Error(
      "An unknown error occurred during password forgot"
    ) as ForgotPasswordError;
    unknownError.errors = ["An unknown error occurred during password forgot"];
    throw unknownError;
  }
}
