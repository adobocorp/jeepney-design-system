import React from "react";
import { EmailField } from "../field/deprecated/deprecated-email-field";

export const ForgotPasswordFormLayout: React.FC = () => {
  return (
    <>
      <div className="mb-6">
        <EmailField />
      </div>
    </>
  );
};
