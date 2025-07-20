export interface FieldLabelProps {
  label: string;
}

export const FieldLabel = ({ label }: FieldLabelProps) => {
  return <span className="text-gray-700">{label}</span>;
};
