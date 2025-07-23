import * as React from 'react';
import { type SelectOpenChangeReason, useSelectRoot } from "./useSelectRoot.js";
/**
 * Groups all parts of the select.
 * Doesn’t render its own HTML element.
 *
 * Documentation: [Base UI Select](https://base-ui.com/react/components/select)
 */
export declare const SelectRoot: SelectRoot;
export declare namespace SelectRoot {
  interface Props<Value> extends useSelectRoot.Parameters<Value> {
    children?: React.ReactNode;
    /**
     * A ref to access the hidden input element.
     */
    inputRef?: React.Ref<HTMLInputElement>;
  }
  interface State {}
  type Actions = useSelectRoot.Actions;
  type OpenChangeReason = SelectOpenChangeReason;
}
export interface SelectRoot {
  <Value>(props: SelectRoot.Props<Value>): React.JSX.Element;
}