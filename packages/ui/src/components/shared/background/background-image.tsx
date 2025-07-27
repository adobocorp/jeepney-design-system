import type { ReactNode } from "react";

interface BackgroundImageProps {
  backgroundPosition?: string;
  backgroundImage?: string;
  children: ReactNode;
}

export function BackgroundImage({
  backgroundPosition,
  backgroundImage = "https://images.pexels.com/photos/133689/pexels-photo-133689.jpeg",
  children,
}: BackgroundImageProps) {
  return (
    <div
      className="w-full flex justify-center items-center flex-col bg-no-repeat"
      style={{ backgroundPosition, backgroundImage: `url(${backgroundImage})` }}
    >
      {children}
    </div>
  );
}
