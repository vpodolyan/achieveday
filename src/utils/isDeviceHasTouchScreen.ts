// Some parts are taken from https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent.
export function isDeviceHasTouchScreen() {
  if ('maxTouchPoints' in navigator) {
    return navigator.maxTouchPoints > 0;
  }

  if ('msMaxTouchPoints' in navigator) {
    // @ts-expect-error
    return navigator.msMaxTouchPoints > 0;
  }

  const mQ = matchMedia('(pointer:coarse)');
  if (mQ && mQ.media === '(pointer:coarse)') {
    return !!mQ.matches;
  }

  return false;
}
