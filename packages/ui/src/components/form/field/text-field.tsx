import { Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";
import { Ref } from "react";
import { Heading, Typography } from "../../typography";

type TextFieldProps = {
  id: string;
  name: string;
  value?: string;
  label: string;
  inputRef?: Ref<HTMLInputElement>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  readonly?: boolean;
};

export function TextField({
  id,
  name,
  value,
  label,
  inputRef,
  onChange,
  required = false,
  readonly = false,
}: TextFieldProps) {
  const readOnlyClassNames = "bg-gray-100 cursor-not-allowed";
  const textFieldClassNames = clsx("mt-1 block w-full h-12 font-[Avenir]", {
    [readOnlyClassNames]: readonly,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  };
  return (
    <div className="w-full max-w-md">
      <Field>
        <Label>
          <Typography heading={Heading.H3}>{label}</Typography>
        </Label>
        <Input
          className={textFieldClassNames}
          id={id}
          ref={inputRef}
          name={name}
          value={value}
          type="text"
          required={required}
          readOnly={readonly}
          onChange={handleChange}
        />
      </Field>
    </div>
  );
}
