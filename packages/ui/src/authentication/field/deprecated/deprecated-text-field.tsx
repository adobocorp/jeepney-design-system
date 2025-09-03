import { Field } from "@base-ui-components/react/field";
import { Ref } from "react";

export const TextField = ({
  id,
  name,
  value,
  label,
  inputRef,
  onChange,
  required = false,
  readonly = false,
}: {
  id: string;
  name: string;
  value?: string;
  label: string;
  inputRef?: Ref<HTMLInputElement>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  readonly?: boolean;
}) => {
  const readOnlyClassNames = "bg-gray-100 cursor-not-allowed";
  const textFieldClassNames = cn("mt-1 block w-full h-12", {
    [readOnlyClassNames]: readonly,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <Field.Root>
      <Field.Label className="block text-gray-700 font-[Bantayog-Light]">
        {required ? (
          <>
            {label} <sup>*</sup>
          </>
        ) : (
          label
        )}
      </Field.Label>
      <Field.Control
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
    </Field.Root>
  );
};
