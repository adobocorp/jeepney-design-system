import { Field, Input, Label } from "@headlessui/react";
import { HEADING, Typography } from "../../typography";

export function EmailField() {
  return (
    <div className="w-full max-w-md">
      <Field>
        <Label>
          <Typography heading={HEADING.H3}>Email</Typography>
        </Label>
        <Input
          className="font-[Avenir] h-12 mt-1 block bg-white w-full autofill:border-gray-900 autofill:shadow-fill-white autofill:text-fill-gray-900"
          id="email"
          name="email"
          type="email"
          required
          placeholder="juan-dela-cruz@example.com"
          autoComplete="email"
          autoCapitalize="off"
          autoCorrect="off"
          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
        />
      </Field>
    </div>
  );
}
