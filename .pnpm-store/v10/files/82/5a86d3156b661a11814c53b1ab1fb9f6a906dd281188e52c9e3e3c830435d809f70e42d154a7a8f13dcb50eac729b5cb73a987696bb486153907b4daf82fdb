import * as React from 'react';
import type { BaseUIComponentProps, Orientation } from "../utils/types.js";
/**
 * Provides a shared state to a series of toggle buttons.
 *
 * Documentation: [Base UI Toggle Group](https://base-ui.com/react/components/toggle-group)
 */
export declare const ToggleGroup: React.ForwardRefExoticComponent<ToggleGroup.Props & React.RefAttributes<HTMLDivElement>>;
export declare namespace ToggleGroup {
  interface State {
    /**
     * Whether the component should ignore user interaction.
     */
    disabled: boolean;
    multiple: boolean;
  }
  interface Props extends BaseUIComponentProps<'div', State> {
    /**
     * The open state of the toggle group represented by an array of
     * the values of all pressed toggle buttons.
     * This is the controlled counterpart of `defaultValue`.
     */
    value?: readonly any[];
    /**
     * The open state of the toggle group represented by an array of
     * the values of all pressed toggle buttons.
     * This is the uncontrolled counterpart of `value`.
     */
    defaultValue?: readonly any[];
    /**
     * Callback fired when the pressed states of the toggle group changes.
     *
     * @param {any[]} groupValue An array of the `value`s of all the pressed items.
     * @param {Event} event The corresponding event that initiated the change.
     */
    onValueChange?: (groupValue: any[], event: Event) => void;
    /**
     * Whether the toggle group should ignore user interaction.
     * @default false
     */
    disabled?: boolean;
    /**
     * @default 'horizontal'
     */
    orientation?: Orientation;
    /**
     * Whether to loop keyboard focus back to the first item
     * when the end of the list is reached while using the arrow keys.
     * @default true
     */
    loop?: boolean;
    /**
     * When `false` only one item in the group can be pressed. If any item in
     * the group becomes pressed, the others will become unpressed.
     * When `true` multiple items can be pressed.
     * @default false
     */
    toggleMultiple?: boolean;
  }
}