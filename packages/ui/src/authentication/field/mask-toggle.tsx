import React from "react";

export interface MaskToggleProps {
    masked: boolean;
    toggle: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const MaskToggle: React.FC<MaskToggleProps> = ({ masked, toggle }) => {
    return (
        <div className="w-16 h-12 flex items-center justify-center py-2 mt-1 bg-white border border-l-0 border-gray-500">
            <button
                type="button"
                onClick={toggle}
                className="hover:cursor-pointer px-2 py-1 focus:outline-none text-xs font-medium text-gray-600 hover:text-gray-800"
                aria-label={masked ? "Show password" : "Hide password"}
            >
                {masked ? "Show" : "Hide"}
            </button>
        </div>
    );
};
