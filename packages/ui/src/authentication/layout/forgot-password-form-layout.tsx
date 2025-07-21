import React from "react";
import { EmailField } from "../field/email-field";

export const ForgotPasswordFormLayout: React.FC = () => {
  return (
    <>
      <div className="mb-6">
        <EmailField />
      </div>
    </>
  );
};
