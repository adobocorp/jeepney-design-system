'use client';

import * as React from 'react';
import { useRenderElement } from "../../utils/useRenderElement.js";
import { useNavigationMenuRootContext } from "../root/NavigationMenuRootContext.js";

/**
 * The clipping viewport of the navigation menu's current content.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
 */
export const NavigationMenuViewport = /*#__PURE__*/React.forwardRef(function NavigationMenuViewport(componentProps, forwardedRef) {
  const {
    className,
    render,
    ...elementProps
  } = componentProps;
  const {
    setViewportElement
  } = useNavigationMenuRootContext();
  const element = useRenderElement('div', componentProps, {
    ref: [forwardedRef, setViewportElement],
    props: elementProps
  });
  return element;
});
if (process.env.NODE_ENV !== "production") NavigationMenuViewport.displayName = "NavigationMenuViewport";