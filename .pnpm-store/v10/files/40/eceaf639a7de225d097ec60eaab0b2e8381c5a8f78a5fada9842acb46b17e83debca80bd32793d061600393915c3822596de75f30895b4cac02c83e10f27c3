"use strict";
'use client';

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopoverClose = void 0;
var React = _interopRequireWildcard(require("react"));
var _PopoverRootContext = require("../root/PopoverRootContext");
var _useRenderElement = require("../../utils/useRenderElement");
/**
 * A button that closes the popover.
 * Renders a `<button>` element.
 *
 * Documentation: [Base UI Popover](https://base-ui.com/react/components/popover)
 */
const PopoverClose = exports.PopoverClose = /*#__PURE__*/React.forwardRef(function PopoverClose(props, forwardedRef) {
  const {
    render,
    className,
    ...elementProps
  } = props;
  const {
    setOpen
  } = (0, _PopoverRootContext.usePopoverRootContext)();
  const element = (0, _useRenderElement.useRenderElement)('button', props, {
    ref: forwardedRef,
    props: [{
      onClick(event) {
        setOpen(false, event.nativeEvent, 'close-press');
      }
    }, elementProps]
  });
  return element;
});
if (process.env.NODE_ENV !== "production") PopoverClose.displayName = "PopoverClose";