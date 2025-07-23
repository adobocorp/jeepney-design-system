import * as React from 'react';
import { useFieldControlValidation } from "../field/control/useFieldControlValidation.js";
import { useCheckboxGroupParent } from "./useCheckboxGroupParent.js";
export interface CheckboxGroupContext {
  value: string[] | undefined;
  defaultValue: string[] | undefined;
  setValue: (value: string[], event: Event) => void;
  allValues: string[] | undefined;
  parent: useCheckboxGroupParent.ReturnValue;
  disabled: boolean;
  fieldControlValidation: useFieldControlValidation.ReturnValue;
  registerControlRef: (element: HTMLButtonElement | null) => void;
}
export declare const CheckboxGroupContext: React.Context<CheckboxGroupContext | undefined>;
export declare function useCheckboxGroupContext(optional: false): CheckboxGroupContext;
export declare function useCheckboxGroupContext(optional?: true): CheckboxGroupContext | undefined;