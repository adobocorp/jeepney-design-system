import * as React from 'react';
import { BaseUIComponentProps } from "../../utils/types.js";
import type { SliderRoot } from "../root/SliderRoot.js";
/**
 * The draggable part of the the slider at the tip of the indicator.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Slider](https://base-ui.com/react/components/slider)
 */
export declare const SliderThumb: React.ForwardRefExoticComponent<SliderThumb.Props & React.RefAttributes<HTMLDivElement>>;
export interface ThumbMetadata {
  inputId: string | undefined;
}
export declare namespace SliderThumb {
  interface State extends SliderRoot.State {}
  interface Props extends Omit<BaseUIComponentProps<'div', State>, 'render'> {
    /**
     * Whether the thumb should ignore user interaction.
     * @default false
     */
    disabled?: boolean;
    /**
     * Accepts a function which returns a string value that provides a user-friendly name for the input associated with the thumb
     * @param {number} index The index of the input
     * @returns {string}
     * @type {((index: number) => string) | null}
     */
    getAriaLabel?: ((index: number) => string) | null;
    /**
     * Accepts a function which returns a string value that provides a user-friendly name for the current value of the slider.
     * This is important for screen reader users.
     * @param {string} formattedValue The thumb's formatted value.
     * @param {number} value The thumb's numerical value.
     * @param {number} index The thumb's index.
     * @returns {string}
     * @type {((formattedValue: string, value: number, index: number) => string) | null}
     */
    getAriaValueText?: ((formattedValue: string, value: number, index: number) => string) | null;
    /**
     * Allows you to replace the component’s HTML element
     * with a different tag, or compose it with another component.
     *
     * Accepts a `ReactElement` or a function that returns the element to render.
     */
    render?: ((props: React.ComponentPropsWithRef<'div'>, inputProps: React.ComponentPropsWithRef<'input'>, state: State) => React.ReactElement) | (React.ReactElement & {
      ref: React.Ref<Element>;
    });
  }
}