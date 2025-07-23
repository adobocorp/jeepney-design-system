"use strict";
'use client';

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCompositeItem = useCompositeItem;
var React = _interopRequireWildcard(require("react"));
var _CompositeRootContext = require("../root/CompositeRootContext");
var _useCompositeListItem = require("../list/useCompositeListItem");
var _utils = require("../../utils");
function useCompositeItem(params = {}) {
  const {
    highlightedIndex,
    onHighlightedIndexChange,
    highlightItemOnHover
  } = (0, _CompositeRootContext.useCompositeRootContext)();
  const {
    ref,
    index
  } = (0, _useCompositeListItem.useCompositeListItem)(params);
  const isHighlighted = highlightedIndex === index;
  const itemRef = React.useRef(null);
  const mergedRef = (0, _utils.useForkRef)(ref, itemRef);
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