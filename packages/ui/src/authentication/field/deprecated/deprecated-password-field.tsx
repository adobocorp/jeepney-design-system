import { Field } from "@base-ui-components/react/field";
import React, { forwardRef } from "react";

interface PasswordFieldProps {
    type: "password" | "text";
    blur?: (e?: React.FocusEvent<HTMLInputElement>) => void;
}

export const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
    (props, ref) => {
        const { type, blur } = props;

        const defaultBlur = () => { };
        const onBlur = blur ? blur : defaultBlur;

        return (
            <Field.Root>
                <Field.Label className="block text-gray-700 h-6 leading-6 font-[Bantayog-Light]">
                    Password<sup>*</sup>
                </Field.Label>
                <Field.Control
                    id="password"
                    ref={ref}
                    name="password"
                    autoCapitalize="off"
                    autoCorrect="off"
                    pattern=".{8,}"
                    title="Must contain at least 8 or more characters"
                    className="h-12 mt-1 block w-full bg-white border-r-0 border-gray-500 focus:outline-hidden focus:border-gray-500 focus:ring-0 autofill autofill:shadow-fill-white autofill:text-fill-gray-900"
                    required
                    type={type}
                    onBlur={onBlur}
                    autoComplete="current-password"
                    placeholder="•••••••••"
                />
                <Field.Error className="text-xs" match="valueMissing">
                    Please enter your password
                </Field.Error>
                <Field.Error className="text-xs" match="patternMismatch">
                    Please enter a password with at least 8 characters
                </Field.Error>
                <Field.Error className="text-xs" match="customError">
                    Passwords do not match
                </Field.Error>
            </Field.Root>
        );
    }
);

PasswordField.displayName = "PasswordField";
