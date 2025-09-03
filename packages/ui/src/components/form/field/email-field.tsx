import { Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";
import { HEADING, Typography } from "../../typography";
type EmailFieldProps = {
  onChange?: (value: string) => void;
  error?: string;
};

export function EmailField({ onChange, error }: EmailFieldProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };
  return (
    <div className="w-full max-w-md">
      <Field>
        <Label>
          <Typography heading={HEADING.H3}>Email</Typography>
        </Label>
        <Input
          className={clsx(
            "font-[Avenir] h-12 mt-1 block bg-white w-full autofill:border-gray-900 autofill:shadow-fill-white autofill:text-fill-gray-900",
            error && "border-red-500 focus:border-red-500"
          )}
          id="email"
          name="email"
          type="email"
          required
          placeholder="juan-dela-cruz@example.com"
          autoComplete="email"
          autoCapitalize="off"
          autoCorrect="off"
          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          onChange={handleInputChange}
        />
      </Field>
    </div>
  );
}
