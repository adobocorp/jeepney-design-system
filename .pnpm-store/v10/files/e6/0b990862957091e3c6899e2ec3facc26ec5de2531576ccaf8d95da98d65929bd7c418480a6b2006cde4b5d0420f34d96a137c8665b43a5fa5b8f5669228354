export function translateOpenChangeReason(nativeReason) {
  if (!nativeReason) {
    return undefined;
  }
  return {
    // Identical mappings
    'focus-out': 'focus-out',
    'escape-key': 'escape-key',
    'outside-press': 'outside-press',
    'list-navigation': 'list-navigation',
    // New mappings
    click: 'trigger-press',
    hover: 'trigger-hover',
    focus: 'trigger-focus',
    'reference-press': 'trigger-press',
    'safe-polygon': 'trigger-hover',
    'ancestor-scroll': undefined // Not supported
  }[nativeReason];
}