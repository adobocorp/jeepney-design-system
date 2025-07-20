export interface NewPasswordRequest {
  token: string;
  password: string;
  passwordConfirmation: string;
  resetPasswordToken?: string;
  currentPassword?: string;
  apiEndpoint: string;
}

export interface NewPasswordResponse {
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

export interface NewPasswordError extends Error {
  status?: number;
  errors?: string[];
}

export async function newPassword(
  request: NewPasswordRequest
): Promise<NewPasswordResponse> {
  const {
    token,
    password,
    passwordConfirmation,
    resetPasswordToken,
    currentPassword,
    apiEndpoint,
  } = request;

  const formData = new FormData();
  formData.append("authenticity_token", token);
  formData.append("user[password]", password);
  formData.append("user[password_confirmation]", passwordConfirmation);

  if (resetPasswordToken) {
    formData.append("user[reset_password_token]", resetPasswordToken);
  }

  if (currentPassword) {
    formData.append("user[current_password]", currentPassword);
  }

  try {
    const response = await fetch(apiEndpoint, {
      method: "PATCH",
      body: formData,
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
      credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
      const error = new Error(
        data.message || "Password update failed"
      ) as NewPasswordError;
      error.status = response.status;
      error.errors = data.errors || [data.message || "Password update failed"];
      throw error;
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      const newPasswordError = error as NewPasswordError;
      throw newPasswordError;
    }

    const unknownError = new Error(
      "An unknown error occurred during password update"
    ) as NewPasswordError;
    unknownError.errors = ["An unknown error occurred during password update"];
    throw unknownError;
  }
}
