import React from "react";

interface ButtonProps {
    text: string;
    type?: "button" | "submit" | "reset";
    width?: "thin" | "regular" | "wide" | "inherit";
    size?: "small" | "medium" | "large" | "x-large";
    rank?: "primary" | "secondary";
    disabled?: boolean;
    onClick?: () => void;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    text,
    width,
    size = "medium",
    rank = "primary",
    type = "button",
    disabled = false,
    onClick,
    className = "",
}) => {
    const getClassNames = () => {
        const baseClasses = "font-[Bantayog-Light] shadow-sm px-4 rounded-sm border-solid border-1 focus:outline-none";

        let sizeClasses = "";
        switch (size) {
            case "small":
                sizeClasses = "h-8 leading-normal text-base";
                break;
            case "medium":
                sizeClasses = "h-12 leading-normal text-base";
                break;
            case "large":
                sizeClasses = "h-16 leading-normal text-lg";
                break;
            case "x-large":
                sizeClasses = "h-20 leading-normal text-xl";
                break;
            default:
                sizeClasses = "h-12 leading-normal text-base";
                break;
        }

        let widthClasses = "";
        switch (width) {
            case "thin":
                widthClasses = "w-24";
                break;
            case "regular":
                widthClasses = "w-48";
                break;
            case "wide":
                widthClasses = "w-96";
                break;
            case "inherit":
                widthClasses = "w-full";
                break;
            default:
                widthClasses = "w-auto";
                break;
        }

        let colorClasses = "";
        const colorPrimary = "text-white bg-color-brand-primary-base border-color-border-light";
        const colorSecondary = "text-color-font-button-secondary bg-color-brand-secondary-base border-color-border-dark";

        let rankClasses = "";
        switch (rank) {
            case "primary":
                rankClasses = "focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50";
                colorClasses = colorPrimary;
                break;
            case "secondary":
            default:
                rankClasses = "border-gray-500 border-opacity-70";
                colorClasses = colorSecondary;
                break;
        }

        const disabledClasses = disabled
            ? "opacity-50 cursor-not-allowed"
            : "hover:cursor-pointer";

        return `${baseClasses} ${sizeClasses} ${widthClasses} ${colorClasses} ${rankClasses} ${disabledClasses} ${className}`.trim();
    };

    return (
        <button
            type={type}
            className={getClassNames()}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    );
};
