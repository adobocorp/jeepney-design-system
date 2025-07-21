export interface ResetPasswordRequest {
  token: string;
  password: string;
  passwordConfirmation: string;
  apiEndpoint: string;
  uid?: string;
  clientId?: string;
  accessToken?: string;
}

export interface ResetPasswordResponse {
  user: {
    id: string;
    email: string;
    firstName?: string;
    lastName?: string;
    username?: string;
  };
  message?: string;
  success?: boolean;
}

export interface ResetPasswordError extends Error {
  status?: number;
  errors?: string[];
}

export async function resetPassword(
  request: ResetPasswordRequest
): Promise<ResetPasswordResponse> {
  const {
    token,
    password,
    passwordConfirmation,
    apiEndpoint,
    uid,
    clientId,
    accessToken,
  } = request;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (accessToken) {
    headers["Access-Token"] = accessToken;
  }

  if (clientId) {
    headers["Client"] = clientId;
  }

  if (uid) {
    headers["Uid"] = uid;
  }

  try {
    const response = await fetch(apiEndpoint, {
      method: "PATCH",
      body: JSON.stringify({
        authenticity_token: token,
        password,
        password_confirmation: passwordConfirmation,
      }),
      headers,
      credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
      const error = new Error(
        data.message || "Password update failed"
      ) as ResetPasswordError;
      error.status = response.status;
      error.errors = data.errors || [data.message || "Password update failed"];
      throw error;
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      const resetPasswordError = error as ResetPasswordError;
      throw resetPasswordError;
    }

    const unknownError = new Error(
      "An unknown error occurred during password update"
    ) as ResetPasswordError;
    unknownError.errors = ["An unknown error occurred during password update"];
    throw unknownError;
  }
}
