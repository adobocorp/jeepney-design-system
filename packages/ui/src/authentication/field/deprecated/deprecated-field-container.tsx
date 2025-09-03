import React from 'react';

export interface FieldProps {
    id?: string;
    name?: string;
    label?: string;
    value?: string | number;
    inputRef?: React.Ref<HTMLInputElement>;
    required?: boolean;
    readonly?: boolean;
    blur?: (e?: React.FocusEvent<HTMLElement>) => void;
    change?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export interface FieldContainerProps extends FieldProps {
    className?: string;
    FieldComponent: React.ComponentType<FieldProps>;
}

export const FieldContainer: React.FC<FieldContainerProps> = ({
    className,
    FieldComponent,
    id,
    name,
    label,
    value,
    inputRef,
    required = false,
    readonly = false,
    blur,
    change,
}: FieldContainerProps) => {
    return (
        <div className={className}>
            <FieldComponent
                id={id}
                name={name}
                label={label}
                value={value}
                inputRef={inputRef}
                required={required}
                readonly={readonly}
                blur={blur}
                change={change}
            />
        </div>
    );
};
