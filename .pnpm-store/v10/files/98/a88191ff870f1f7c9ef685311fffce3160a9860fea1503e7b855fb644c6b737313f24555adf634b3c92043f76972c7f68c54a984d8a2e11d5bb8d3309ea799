import { useRenderElement } from "../utils/useRenderElement.js";

/**
 * Renders a Base UI element.
 *
 * @public
 */
export function useRender(params) {
  const renderParams = params;
  renderParams.disableStyleHooks = true;
  return useRenderElement(undefined, renderParams, renderParams);
}