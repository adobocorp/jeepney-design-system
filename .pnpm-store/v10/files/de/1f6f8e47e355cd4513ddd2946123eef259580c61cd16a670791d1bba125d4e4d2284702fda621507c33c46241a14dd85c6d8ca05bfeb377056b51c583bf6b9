"use strict";
'use client';

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavigationMenuViewport = void 0;
var React = _interopRequireWildcard(require("react"));
var _useRenderElement = require("../../utils/useRenderElement");
var _NavigationMenuRootContext = require("../root/NavigationMenuRootContext");
/**
 * The clipping viewport of the navigation menu's current content.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
 */
const NavigationMenuViewport = exports.NavigationMenuViewport = /*#__PURE__*/React.forwardRef(function NavigationMenuViewport(componentProps, forwardedRef) {
  const {
    className,
    render,
    ...elementProps
  } = componentProps;
  const {
    setViewportElement
  } = (0, _NavigationMenuRootContext.useNavigationMenuRootContext)();
  const element = (0, _useRenderElement.useRenderElement)('div', componentProps, {
    ref: [forwardedRef, setViewportElement],
    props: elementProps
  });
  return element;
});
if (process.env.NODE_ENV !== "production") NavigationMenuViewport.displayName = "NavigationMenuViewport";