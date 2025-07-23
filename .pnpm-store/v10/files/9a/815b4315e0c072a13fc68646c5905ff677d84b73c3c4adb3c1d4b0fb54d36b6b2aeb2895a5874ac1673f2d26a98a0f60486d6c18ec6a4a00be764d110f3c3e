import * as React from 'react';
import type { DialogRoot } from "../../dialog/root/DialogRoot.js";
import { type DialogOpenChangeReason } from "../../dialog/root/useDialogRoot.js";
/**
 * Groups all parts of the alert dialog.
 * Doesn’t render its own HTML element.
 *
 * Documentation: [Base UI Alert Dialog](https://base-ui.com/react/components/alert-dialog)
 */
export declare const AlertDialogRoot: React.FC<AlertDialogRoot.Props>;
export declare namespace AlertDialogRoot {
  interface Props extends Omit<DialogRoot.Props, 'modal' | 'dismissible' | 'onOpenChange'> {
    /**
     * Event handler called when the dialog is opened or closed.
     * @type (open: boolean, event?: Event, reason?: AlertDialog.Root.OpenChangeReason) => void
     */
    onOpenChange?: (open: boolean, event: Event | undefined, reason: DialogOpenChangeReason | undefined) => void;
  }
  type Actions = DialogRoot.Actions;
  type OpenChangeReason = DialogOpenChangeReason;
}