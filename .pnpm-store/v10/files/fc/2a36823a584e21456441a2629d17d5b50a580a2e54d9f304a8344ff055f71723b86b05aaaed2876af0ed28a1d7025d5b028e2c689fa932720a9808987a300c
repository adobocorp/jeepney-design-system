'use client';

import * as React from 'react';
import { useRenderElement } from "../../utils/useRenderElement.js";
import { CompositeRoot } from "../../composite/root/CompositeRoot.js";
import { useNavigationMenuRootContext } from "../root/NavigationMenuRootContext.js";

/**
 * Contains a list of navigation menu items.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
 */
import { jsx as _jsx } from "react/jsx-runtime";
export const NavigationMenuList = /*#__PURE__*/React.forwardRef(function NavigationMenuList(componentProps, forwardedRef) {
  const {
    className,
    render,
    ...elementProps
  } = componentProps;
  const {
    orientation,
    open
  } = useNavigationMenuRootContext();
  const state = React.useMemo(() => ({
    open
  }), [open]);
  const element = useRenderElement('div', componentProps, {
    state,
    ref: forwardedRef,
    props: elementProps
  });
  return /*#__PURE__*/_jsx(CompositeRoot, {
    render: element,
    loop: false,
    orientation: orientation,
    stopEventPropagation: true
  });
});
if (process.env.NODE_ENV !== "production") NavigationMenuList.displayName = "NavigationMenuList";