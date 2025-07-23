'use client';

import * as React from 'react';
import { isElementDisabled } from "../../utils/isElementDisabled.js";
import { useControlled } from "../../utils/useControlled.js";
import { useEventCallback } from "../../utils/useEventCallback.js";
import { useModernLayoutEffect } from "../../utils/useModernLayoutEffect.js";
import { useRenderElement } from "../../utils/useRenderElement.js";
import { warn } from "../../utils/warn.js";
import { ARROW_DOWN, ARROW_UP, ARROW_RIGHT, ARROW_LEFT, HOME, END, stopEvent } from "../../composite/composite.js";
import { CompositeList } from "../../composite/list/CompositeList.js";
import { useDirection } from "../../direction-provider/DirectionContext.js";
import { AccordionRootContext } from "./AccordionRootContext.js";
import { jsx as _jsx } from "react/jsx-runtime";
const SUPPORTED_KEYS = new Set([ARROW_DOWN, ARROW_UP, ARROW_RIGHT, ARROW_LEFT, HOME, END]);
const rootStyleHookMapping = {
  value: () => null
};
function getActiveTriggers(accordionItemRefs) {
  const {
    current: accordionItemElements
  } = accordionItemRefs;
  const output = [];
  for (let i = 0; i < accordionItemElements.length; i += 1) {
    const section = accordionItemElements[i];
    if (!isElementDisabled(section)) {
      const trigger = section?.querySelector('[type="button"]');
      if (!isElementDisabled(trigger)) {
        output.push(trigger);
      }
    }
  }
  return output;
}

/**
 * Groups all parts of the accordion.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Accordion](https://base-ui.com/react/components/accordion)
 */
export const AccordionRoot = /*#__PURE__*/React.forwardRef(function AccordionRoot(componentProps, forwardedRef) {
  const {
    className,
    disabled = false,
    hiddenUntilFound: hiddenUntilFoundProp,
    keepMounted: keepMountedProp,
    loop = true,
    onValueChange: onValueChangeProp,
    openMultiple = true,
    orientation = 'vertical',
    value: valueProp,
    defaultValue: defaultValueProp,
    ...elementProps
  } = componentProps;
  const direction = useDirection();
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useModernLayoutEffect(() => {
      if (hiddenUntilFoundProp && keepMountedProp === false) {
        warn('The `keepMounted={false}` prop on a Accordion.Root will be ignored when using `hiddenUntilFound` since it requires Panels to remain mounted when closed.');
      }
    }, [hiddenUntilFoundProp, keepMountedProp]);
  }

  // memoized to allow omitting both defaultValue and value
  // which would otherwise trigger a warning in useControlled
  const defaultValue = React.useMemo(() => {
    if (valueProp === undefined) {
      return defaultValueProp ?? [];
    }
    return undefined;
  }, [valueProp, defaultValueProp]);
  const onValueChange = useEventCallback(onValueChangeProp);
  const accordionItemRefs = React.useRef([]);
  const [value, setValue] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: 'Accordion',
    state: 'value'
  });
  const handleValueChange = React.useCallback((newValue, nextOpen) => {
    if (!openMultiple) {
      const nextValue = value[0] === newValue ? [] : [newValue];
      setValue(nextValue);
      onValueChange(nextValue);
    } else if (nextOpen) {
      const nextOpenValues = value.slice();
      nextOpenValues.push(newValue);
      setValue(nextOpenValues);
      onValueChange(nextOpenValues);
    } else {
      const nextOpenValues = value.filter(v => v !== newValue);
      setValue(nextOpenValues);
      onValueChange(nextOpenValues);
    }
  }, [onValueChange, openMultiple, setValue, value]);
  const isRtl = direction === 'rtl';
  const isHorizontal = orientation === 'horizontal';
  const state = React.useMemo(() => ({
    value,
    disabled,
    orientation
  }), [value, disabled, orientation]);
  const contextValue = React.useMemo(() => ({
    accordionItemRefs,
    direction,
    disabled,
    handleValueChange,
    hiddenUntilFound: hiddenUntilFoundProp ?? false,
    keepMounted: keepMountedProp ?? false,
    orientation,
    state,
    value
  }), [direction, disabled, handleValueChange, hiddenUntilFoundProp, keepMountedProp, orientation, state, value]);
  const element = useRenderElement('div', componentProps, {
    state,
    ref: forwardedRef,
    props: [{
      dir: direction,
      role: 'region',
      onKeyDown(event) {
        if (!SUPPORTED_KEYS.has(event.key)) {
          return;
        }
        stopEvent(event);
        const triggers = getActiveTriggers(accordionItemRefs);
        const numOfEnabledTriggers = triggers.length;
        const lastIndex = numOfEnabledTriggers - 1;
        let nextIndex = -1;
        const thisIndex = triggers.indexOf(event.target);
        function toNext() {
          if (loop) {
            nextIndex = thisIndex + 1 > lastIndex ? 0 : thisIndex + 1;
          } else {
            nextIndex = Math.min(thisIndex + 1, lastIndex);
          }
        }
        function toPrev() {
          if (loop) {
            nextIndex = thisIndex === 0 ? lastIndex : thisIndex - 1;
          } else {
            nextIndex = thisIndex - 1;
          }
        }
        switch (event.key) {
          case ARROW_DOWN:
            if (!isHorizontal) {
              toNext();
            }
            break;
          case ARROW_UP:
            if (!isHorizontal) {
              toPrev();
            }
            break;
          case ARROW_RIGHT:
            if (isHorizontal) {
              if (isRtl) {
                toPrev();
              } else {
                toNext();
              }
            }
            break;
          case ARROW_LEFT:
            if (isHorizontal) {
              if (isRtl) {
                toNext();
              } else {
                toPrev();
              }
            }
            break;
          case 'Home':
            nextIndex = 0;
            break;
          case 'End':
            nextIndex = lastIndex;
            break;
          default:
            break;
        }
        if (nextIndex > -1) {
          triggers[nextIndex].focus();
        }
      }
    }, elementProps],
    customStyleHookMapping: rootStyleHookMapping
  });
  return /*#__PURE__*/_jsx(AccordionRootContext.Provider, {
    value: contextValue,
    children: /*#__PURE__*/_jsx(CompositeList, {
      elementsRef: accordionItemRefs,
      children: element
    })
  });
});
if (process.env.NODE_ENV !== "production") AccordionRoot.displayName = "AccordionRoot";