"use strict";
'use client';

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopoverPopup = void 0;
var React = _interopRequireWildcard(require("react"));
var _floatingUiReact = require("../../floating-ui-react");
var _PopoverRootContext = require("../root/PopoverRootContext");
var _PopoverPositionerContext = require("../positioner/PopoverPositionerContext");
var _popupStateMapping = require("../../utils/popupStateMapping");
var _styleHookMapping = require("../../utils/styleHookMapping");
var _useOpenChangeComplete = require("../../utils/useOpenChangeComplete");
var _useRenderElement = require("../../utils/useRenderElement");
var _constants = require("../../utils/constants");
var _jsxRuntime = require("react/jsx-runtime");
const customStyleHookMapping = {
  ..._popupStateMapping.popupStateMapping,
  ..._styleHookMapping.transitionStatusMapping
};

/**
 * A container for the popover contents.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Popover](https://base-ui.com/react/components/popover)
 */
const PopoverPopup = exports.PopoverPopup = /*#__PURE__*/React.forwardRef(function PopoverPopup(componentProps, forwardedRef) {
  const {
    className,
    render,
    initialFocus,
    finalFocus,
    ...elementProps
  } = componentProps;
  const {
    open,
    instantType,
    transitionStatus,
    popupProps,
    titleId,
    descriptionId,
    popupRef,
    mounted,
    openReason,
    onOpenChangeComplete,
    modal,
    openMethod
  } = (0, _PopoverRootContext.usePopoverRootContext)();
  const positioner = (0, _PopoverPositionerContext.usePopoverPositionerContext)();
  (0, _useOpenChangeComplete.useOpenChangeComplete)({
    open,
    ref: popupRef,
    onComplete() {
      if (open) {
        onOpenChangeComplete?.(true);
      }
    }
  });
  const resolvedInitialFocus = React.useMemo(() => {
    if (initialFocus == null) {
      if (openMethod === 'touch') {
        return popupRef;
      }
      return 0;
    }
    if (typeof initialFocus === 'function') {
      return initialFocus(openMethod ?? '');
    }
    return initialFocus;
  }, [initialFocus, openMethod, popupRef]);
  const state = React.useMemo(() => ({
    open,
    side: positioner.side,
    align: positioner.align,
    instant: instantType,
    transitionStatus
  }), [open, positioner.side, positioner.align, instantType, transitionStatus]);
  const element = (0, _useRenderElement.useRenderElement)('div', componentProps, {
    state,
    ref: [forwardedRef, popupRef],
    props: [popupProps, {
      'aria-labelledby': titleId,
      'aria-describedby': descriptionId
    }, transitionStatus === 'starting' ? _constants.DISABLED_TRANSITIONS_STYLE : _constants.EMPTY_OBJECT, elementProps],
    customStyleHookMapping
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_floatingUiReact.FloatingFocusManager, {
    context: positioner.context,
    modal: modal === 'trap-focus',
    disabled: !mounted || openReason === 'trigger-hover',
    initialFocus: resolvedInitialFocus,
    returnFocus: finalFocus,
    children: element
  });
});
if (process.env.NODE_ENV !== "production") PopoverPopup.displayName = "PopoverPopup";