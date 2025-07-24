import { Field } from "@base-ui-components/react/field";
import cn from "classnames";
import { Ref } from "react";

interface NumberHoursFieldProps {
  id: string;
  name: string;
  value?: number;
  label: string;
  inputRef: Ref<HTMLInputElement>;
  required?: boolean;
  readonly?: boolean;
  change?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const NumberField = ({
  id,
  name,
  value,
  label,
  inputRef,
  required = false,
  readonly = false,
  change

}: NumberHoursFieldProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (change) {
      change(e);
    }
  };


  const readOnlyClassNames = "bg-gray-100 cursor-not-allowed";
  const numberFieldClassNames = cn("mt-1 block w-full h-12", {
    [readOnlyClassNames]: readonly,
  });


  return (
    <Field.Root>
      <Field.Label className="block text-gray-700 font-[Bantayog-Light]">{required ? <>{label} <sup>*</sup></> : label}</Field.Label>
      <Field.Control
        className={numberFieldClassNames}
        id={id}
        ref={inputRef}
        name={name}
        value={value}
        type="number"
        required={required}
        min={0}
        readOnly={readonly}
        onChange={handleChange}
      />
    </Field.Root>
  );
};
