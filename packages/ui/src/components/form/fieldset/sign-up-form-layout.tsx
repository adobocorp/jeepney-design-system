import { Fieldset } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { EmailField } from "../field/email-field";
import { PasswordField } from "../field/password-field";
import { TextField } from "../field/text-field";

export const SignUpFormLayout: React.FC = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Validate passwords whenever either field changes
  useEffect(() => {
    if (password && confirmPassword) {
      if (password !== confirmPassword) {
        setPasswordError("Passwords do not match");
      } else {
        setPasswordError("");
      }
    } else {
      setPasswordError("");
    }
  }, [password, confirmPassword]);

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
  };

  return (
    <Fieldset className="flex flex-col gap-y-4">
      <TextField
        id="first_name"
        name="first_name"
        label="First Name"
        required={false}
      />
      <TextField
        id="last_name"
        name="last_name"
        label="Last Name"
        required={false}
      />
      <EmailField />
      <PasswordField
        id="password"
        name="password"
        label="Password"
        value={password}
        onChange={handlePasswordChange}
        error={passwordError && password ? passwordError : ""}
      />
      <PasswordField
        id="confirm_password"
        name="password_confirmation"
        label="Confirm Password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        error={passwordError && confirmPassword ? passwordError : ""}
      />
    </Fieldset>
  );
};
