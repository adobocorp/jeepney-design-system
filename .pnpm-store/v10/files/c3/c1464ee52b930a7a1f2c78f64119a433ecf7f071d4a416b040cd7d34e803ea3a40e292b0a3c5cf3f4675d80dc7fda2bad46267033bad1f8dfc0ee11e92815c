import type { FloatingRootContext, OpenChangeReason } from "../types.js";
export interface UseFloatingRootContextOptions {
  open?: boolean;
  onOpenChange?: (open: boolean, event?: Event, reason?: OpenChangeReason) => void;
  elements: {
    reference: Element | null;
    floating: HTMLElement | null;
  };
}
export declare function useFloatingRootContext(options: UseFloatingRootContextOptions): FloatingRootContext;