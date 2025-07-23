"use strict";
'use client';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLatestRef = useLatestRef;
var _useModernLayoutEffect = require("./useModernLayoutEffect");
var _useLazyRef = require("./useLazyRef");
function useLatestRef(value) {
  const latest = (0, _useLazyRef.useLazyRef)(createLatestRef, value).current;
  latest.next = value;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  (0, _useModernLayoutEffect.useModernLayoutEffect)(latest.effect);
  return latest;
}
function createLatestRef(value) {
  const latest = {
    current: value,
    next: value,
    effect: () => {
      latest.current = latest.next;
    }
  };
  return latest;
}