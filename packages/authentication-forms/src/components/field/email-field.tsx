import React, { Ref } from "react";
import { Field } from "@base-ui-components/react/field";

export interface EmailFieldProps {
    inputRef?: Ref<HTMLInputElement>;
}

export const EmailField: React.FC<EmailFieldProps> = ({ inputRef }) => {
    return (
        <Field.Root>
            <Field.Label className="block text-gray-700">
                Email<sup>*</sup>
            </Field.Label>
            <Field.Control
                className="h-12 mt-1 block bg-white w-full autofill:border-gray-900 autofill:shadow-fill-white autofill:text-fill-gray-900"
                id="email"
                ref={inputRef}
                name="email"
                type="email"
                required
                placeholder="name@example.com"
                autoComplete="email"
                autoCapitalize="off"
                autoCorrect="off"
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            />
            <Field.Error className="text-xs" match="valueMissing">
                Please enter your email
            </Field.Error>
            <Field.Error className="text-xs" match="patternMismatch">
                Your email must follow the pattern name@example.com
            </Field.Error>
        </Field.Root>
    );
};
