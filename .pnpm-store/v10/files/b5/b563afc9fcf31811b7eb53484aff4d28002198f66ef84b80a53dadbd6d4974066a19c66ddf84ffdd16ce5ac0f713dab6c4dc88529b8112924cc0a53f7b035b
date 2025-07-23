'use client';

import * as React from 'react';
import { useCompositeRootContext } from "../root/CompositeRootContext.js";
import { useCompositeListItem } from "../list/useCompositeListItem.js";
import { useForkRef } from "../../utils/index.js";
export function useCompositeItem(params = {}) {
  const {
    highlightedIndex,
    onHighlightedIndexChange,
    highlightItemOnHover
  } = useCompositeRootContext();
  const {
    ref,
    index
  } = useCompositeListItem(params);
  const isHighlighted = highlightedIndex === index;
  const itemRef = React.useRef(null);
  const mergedRef = useForkRef(ref, itemRef);
  const props = React.useMemo(() => ({
    tabIndex: isHighlighted ? 0 : -1,
    onFocus() {
      onHighlightedIndexChange(index);
    },
    onMouseMove() {
      const item = itemRef.current;
      if (!highlightItemOnHover || !item) {
        return;
      }
      const disabled = item.hasAttribute('disabled') || item.ariaDisabled === 'true';
      if (!isHighlighted && !disabled) {
        item.focus();
      }
    }
  }), [index, isHighlighted, onHighlightedIndexChange, highlightItemOnHover]);
  return React.useMemo(() => ({
    props,
    ref: mergedRef,
    index
  }), [props, index, mergedRef]);
}