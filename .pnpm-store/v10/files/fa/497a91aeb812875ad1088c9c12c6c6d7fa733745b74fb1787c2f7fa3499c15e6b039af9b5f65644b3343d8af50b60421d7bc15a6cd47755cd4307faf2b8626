"use strict";
'use client';

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAnimationsFinished = useAnimationsFinished;
var ReactDOM = _interopRequireWildcard(require("react-dom"));
var _useEventCallback = require("./useEventCallback");
var _useTimeout = require("./useTimeout");
var _useAnimationFrame = require("./useAnimationFrame");
/**
 * Executes a function once all animations have finished on the provided element.
 * @param ref - The element to watch for animations.
 * @param waitForNextTick - Whether to wait for the next tick before checking for animations.
 */
function useAnimationsFinished(ref, waitForNextTick = false) {
  const frame = (0, _useAnimationFrame.useAnimationFrame)();
  const timeout = (0, _useTimeout.useTimeout)();
  return (0, _useEventCallback.useEventCallback)((fnToExecute,
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