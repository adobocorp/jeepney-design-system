import * as React from 'react';
import type { FloatingRootContext } from "../../floating-ui-react/index.js";
import type { TransitionStatus } from "../../utils/useTransitionStatus.js";
import type { HTMLProps } from "../../utils/types.js";
import type { BaseOpenChangeReason as OpenChangeReason } from "../../utils/translateOpenChangeReason.js";
export interface PreviewCardRootContext {
  open: boolean;
  setOpen: (open: boolean, event: Event | undefined, reason: OpenChangeReason | undefined) => void;
  setTriggerElement: (el: Element | null) => void;
  positionerElement: HTMLElement | null;
  setPositionerElement: (el: HTMLElement | null) => void;
  delay: number;
  closeDelay: number;
  mounted: boolean;
  setMounted: React.Dispatch<React.SetStateAction<boolean>>;
  triggerProps: HTMLProps;
  popupProps: HTMLProps;
  floatingRootContext: FloatingRootContext;
  transitionStatus: TransitionStatus;
  popupRef: React.RefObject<HTMLElement | null>;
  onOpenChangeComplete: ((open: boolean) => void) | undefined;
}
export declare const PreviewCardRootContext: React.Context<PreviewCardRootContext | undefined>;
export declare function usePreviewCardRootContext(): PreviewCardRootContext;