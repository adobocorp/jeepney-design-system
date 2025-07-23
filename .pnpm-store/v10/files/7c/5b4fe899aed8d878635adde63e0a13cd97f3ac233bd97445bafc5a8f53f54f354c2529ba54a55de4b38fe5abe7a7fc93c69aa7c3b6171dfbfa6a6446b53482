'use client';

import * as ReactDOM from 'react-dom';
import { useEventCallback } from "./useEventCallback.js";
import { useTimeout } from "./useTimeout.js";
import { useAnimationFrame } from "./useAnimationFrame.js";

/**
 * Executes a function once all animations have finished on the provided element.
 * @param ref - The element to watch for animations.
 * @param waitForNextTick - Whether to wait for the next tick before checking for animations.
 */
export function useAnimationsFinished(ref, waitForNextTick = false) {
  const frame = useAnimationFrame();
  const timeout = useTimeout();
  return useEventCallback((fnToExecute,
  /**
   * An optional [AbortSignal](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) that
   * can be used to abort `fnToExecute` before all the animations have finished.
   * @default null
   */
  signal = null) => {
    frame.cancel();
    timeout.clear();
    const element = ref.current;
    if (!element) {
      return;
    }
    if (typeof element.getAnimations !== 'function' || globalThis.BASE_UI_ANIMATIONS_DISABLED) {
      fnToExecute();
    } else {
      frame.request(() => {
        function exec() {
          if (!element) {
            return;
          }
          Promise.allSettled(element.getAnimations().map(anim => anim.finished)).then(() => {
            if (signal != null && signal.aborted) {
              return;
            }
            // Synchronously flush the unmounting of the component so that the browser doesn't
            // paint: https://github.com/mui/base-ui/issues/979
            ReactDOM.flushSync(fnToExecute);
          });
        }

        // `open: true` animations need to wait for the next tick to be detected
        if (waitForNextTick) {
          timeout.start(0, exec);
        } else {
          exec();
        }
      });
    }
  });
}