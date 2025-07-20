export interface ResetPasswordRequest {
  token: string;
  email: string;
  apiEndpoint: string;
}

export interface ResetPasswordResponse {
  success: boolean;
  message: string;
  email?: string;
}

export interface ResetPasswordError extends Error {
  status?: number;
  errors?: string[];
}

export async function resetPassword(
  request: ResetPasswordRequest
): Promise<ResetPasswordResponse> {
  const { token, email, apiEndpoint } = request;

  const formData = new FormData();
  formData.append("authenticity_token", token);
  formData.append("user[email]", email);

  try {
    const response = await fetch(apiEndpoint, {
      method: "POST",
      body: formData,
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
      credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
      const error = new Error(
        data.message || "Password reset failed"
      ) as ResetPasswordError;
      error.status = response.status;
      error.errors = data.errors || [data.message || "Password reset failed"];
      throw error;
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      const resetPasswordError = error as ResetPasswordError;
      throw resetPasswordError;
    }

    const unknownError = new Error(
      "An unknown error occurred during password reset"
    ) as ResetPasswordError;
    unknownError.errors = ["An unknown error occurred during password reset"];
    throw unknownError;
  }
}
