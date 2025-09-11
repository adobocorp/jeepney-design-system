import React, { useState } from "react";
import { HEADING, Typography } from "../typography";

export function Header({
  title,
  children,
}: {
  title?: string;
  children?: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full py-4 px-6 bg-color-base-white border-b border-color-base-grey-200 flex items-center md:justify-between md:w-[800px]">
      {title && (
        <Typography heading={HEADING.H2} className="m-0">
          {title}
        </Typography>
      )}
      {/* Burger menu button for mobile */}
      <button
        type="button"
        className="md:hidden ml-auto flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-color-base-grey-400"
        aria-label="Open menu"
        onClick={() => setMenuOpen(true)}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="5" width="24" height="2" rx="1" fill="currentColor" />
          <rect y="11" width="24" height="2" rx="1" fill="currentColor" />
          <rect y="17" width="24" height="2" rx="1" fill="currentColor" />
        </svg>
      </button>
      {title && children && <div className="w-full flex-1"></div>}
      {/* Children (e.g., right content) hidden on mobile, visible on md+ */}
      <div className="hidden items-center md:flex-1 md:flex md:flex-row md:justify-start">
        {children}
      </div>

      {/* Mobile overlay for children */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-color-base-white bg-opacity-95 flex flex-col items-center justify-start md:hidden">
          <button
            type="button"
            className="absolute top-4 right-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-color-base-grey-400"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="6"
                y1="6"
                x2="18"
                y2="18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="6"
                y1="18"
                x2="18"
                y2="6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <div className="w-full flex flex-col px-8 mt-16">{children}</div>
        </div>
      )}
    </header>
  );
}
