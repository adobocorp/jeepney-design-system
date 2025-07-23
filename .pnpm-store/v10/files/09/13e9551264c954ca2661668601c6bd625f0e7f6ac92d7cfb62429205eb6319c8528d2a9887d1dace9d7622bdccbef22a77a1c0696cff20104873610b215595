'use client';

import * as React from 'react';
import { usePopoverRootContext } from "../root/PopoverRootContext.js";
import { useRenderElement } from "../../utils/useRenderElement.js";

/**
 * A button that closes the popover.
 * Renders a `<button>` element.
 *
 * Documentation: [Base UI Popover](https://base-ui.com/react/components/popover)
 */
export const PopoverClose = /*#__PURE__*/React.forwardRef(function PopoverClose(props, forwardedRef) {
  const {
    render,
    className,
    ...elementProps
  } = props;
  const {
    setOpen
  } = usePopoverRootContext();
  const element = useRenderElement('button', props, {
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