'use client';

import { useModernLayoutEffect } from "./useModernLayoutEffect.js";
import { useLazyRef } from "./useLazyRef.js";
export function useLatestRef(value) {
  const latest = useLazyRef(createLatestRef, value).current;
  latest.next = value;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useModernLayoutEffect(latest.effect);
  return latest;
}
function createLatestRef(value) {
  const latest = {
    current: value,
    next: value,
    effect: () => {
      latest.current = latest.next;
    }
  };
  return latest;
}