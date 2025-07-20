import { Ref } from "react";
import { Field } from "@base-ui-components/react/field";

export const FileField = ({
  id,
  name,
  value,
  label,
  required = false,
  inputRef,
}: {
  id: string;
  name: string;
  value?: string;
  label: string;
  required?: boolean;
  inputRef: Ref<HTMLInputElement>;
}) => {

  return (
    <Field.Root>
      <Field.Label className="block text-gray-700">{label}</Field.Label>
      <Field.Control
        className="mt-1 block w-full h-12"
        id={id}
        ref={inputRef}
        name={name}
        value={value}
        type="file"
        accept="image/*,application/pdf" // Adjust as needed for file types
        placeholder="Choose a file"
        autoComplete="off"
        autoCapitalize="off"
        autoCorrect="off"
        aria-required={required}
        aria-invalid={required && !value}
        required={required}
      />
    </Field.Root>
  );
};
