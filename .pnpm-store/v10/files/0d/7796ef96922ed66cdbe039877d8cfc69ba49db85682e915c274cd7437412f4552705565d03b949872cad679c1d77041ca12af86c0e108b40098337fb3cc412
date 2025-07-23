"use strict";
'use client';

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOpenInteractionType = useOpenInteractionType;
var React = _interopRequireWildcard(require("react"));
var _useEnhancedClickHandler = require("./useEnhancedClickHandler");
/**
 * Determines the interaction type (keyboard, mouse, touch, etc.) that opened the component.
 *
 * @param open The open state of the component.
 */
function useOpenInteractionType(open) {
  const [openMethod, setOpenMethod] = React.useState(null);
  if (!open && openMethod !== null) {
    setOpenMethod(null);
  }
  const handleTriggerClick = React.useCallback((_, interactionType) => {
    if (!open) {
      setOpenMethod(interactionType);
    }
  }, [open, setOpenMethod]);
  const {
    onClick,
    onPointerDown
  } = (0, _useEnhancedClickHandler.useEnhancedClickHandler)(handleTriggerClick);
  return React.useMemo(() => ({
    openMethod,
    triggerProps: {
      onClick,
      onPointerDown
    }
  }), [openMethod, onClick, onPointerDown]);
}