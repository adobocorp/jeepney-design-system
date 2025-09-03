interface TextAreaFieldProps {
  id: string;
  name: string;
  value?: string;
  label: string;
  required?: boolean;
  readonly?: boolean;
  change?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextAreaField = ({
  id,
  name,
  value,
  label,
  required = false,
  readonly = false,
  change,
}: TextAreaFieldProps) => {
  const readOnlyClassNames = "bg-gray-100 cursor-not-allowed";
  const textAreaClassNames = cn(
    "mt-1 w-full block border border-[#6b7280] resize-none overflow-y-scroll p-2",
    {
      [readOnlyClassNames]: readonly,
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (change) {
      change(e);
    }
  };

  return (
    <>
      <label className="block text-gray-700">
        {required ? (
          <>
            {label} <sup>*</sup>
          </>
        ) : (
          label
        )}
      </label>
      <textarea
        className={textAreaClassNames}
        id={id}
        name={name}
        value={value}
        required={required}
        rows={4}
        cols={1}
        maxLength={500}
        readOnly={readonly}
        onChange={handleChange}
      />
    </>
  );
};
