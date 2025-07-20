import { useState } from "react";

export const useMasked = () => {
  const [masked, setMasked] = useState(true);

  const toggleMasked = () => {
    setMasked(!masked);
  };

  return {
    masked,
    toggleMasked,
  };
};
