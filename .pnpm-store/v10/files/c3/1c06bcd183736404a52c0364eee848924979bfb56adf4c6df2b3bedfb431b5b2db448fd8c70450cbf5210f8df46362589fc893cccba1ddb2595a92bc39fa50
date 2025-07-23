import * as React from 'react';
import { type Side, useAnchorPositioning } from "../../utils/useAnchorPositioning.js";
export interface SelectPositionerContext extends Omit<useAnchorPositioning.ReturnValue, 'side'> {
  side: 'none' | Side;
  alignItemWithTriggerActive: boolean;
  setControlledAlignItemWithTrigger: React.Dispatch<React.SetStateAction<boolean>>;
}
export declare const SelectPositionerContext: React.Context<SelectPositionerContext | undefined>;
export declare function useSelectPositionerContext(): SelectPositionerContext;