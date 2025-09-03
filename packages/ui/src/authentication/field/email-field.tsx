import { Field, Input, Label } from "@headlessui/react";
import { HEADING, Typography } from "../../components/typography";

export default function EmailField() {
  return (
    <div className="w-full max-w-md">
      <Field>
        <Label>
          <Typography heading={HEADING.H3}>Email</Typography>
        </Label>
        <Input
          className="h-12 mt-1 block bg-white w-full autofill:border-gray-900 autofill:shadow-fill-white autofill:text-fill-gray-900"
          id="email"
          name="email"
          type="email"
          required
          placeholder="name@example.com"
          autoComplete="email"
          autoCapitalize="off"
          autoCorrect="off"
          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
        />
      </Field>
    </div>
  );
}
