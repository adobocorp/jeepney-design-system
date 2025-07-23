import * as React from 'react';
import type { BaseUIComponentProps } from "../../utils/types.js";
import type { Side } from "../../utils/useAnchorPositioning.js";
import type { TransitionStatus } from "../../utils/useTransitionStatus.js";
/**
 * A container for the menu items.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Menu](https://base-ui.com/react/components/menu)
 */
export declare const MenuPopup: React.ForwardRefExoticComponent<MenuPopup.Props & React.RefAttributes<Element>>;
export declare namespace MenuPopup {
  interface Props extends BaseUIComponentProps<'div', State> {
    children?: React.ReactNode;
    /**
     * @ignore
     */
    id?: string;
    /**
     * Determines the element to focus when the menu is closed.
     * By default, focus returns to the trigger.
     */
    finalFocus?: React.RefObject<HTMLElement | null>;
  }
  type State = {
    transitionStatus: TransitionStatus;
    side: Side;
    align: 'start' | 'end' | 'center';
    /**
     * Whether the menu is currently open.
     */
    open: boolean;
    nested: boolean;
  };
}