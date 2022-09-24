import { T as debounce_1, U as isObject_1, V as isFunction, W as throwError, n as nextTick, X as getScrollContainer, Y as getOffsetTopDistance } from "./index.b48d8b09.js";
var debounce = debounce_1, isObject = isObject_1;
var FUNC_ERROR_TEXT = "Expected a function";
function throttle(func, wait, options) {
  var leading = true, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    "leading": leading,
    "maxWait": wait,
    "trailing": trailing
  });
}
var throttle_1 = throttle;
const SCOPE = "ElInfiniteScroll";
const CHECK_INTERVAL = 50;
const DEFAULT_DELAY = 200;
const DEFAULT_DISTANCE = 0;
const attributes = {
  delay: {
    type: Number,
    default: DEFAULT_DELAY
  },
  distance: {
    type: Number,
    default: DEFAULT_DISTANCE
  },
  disabled: {
    type: Boolean,
    default: false
  },
  immediate: {
    type: Boolean,
    default: true
  }
};
const getScrollOptions = (el, instance) => {
  return Object.entries(attributes).reduce((acm, [name, option]) => {
    var _a, _b;
    const { type, default: defaultValue } = option;
    const attrVal = el.getAttribute(`infinite-scroll-${name}`);
    let value = (_b = (_a = instance[attrVal]) != null ? _a : attrVal) != null ? _b : defaultValue;
    value = value === "false" ? false : value;
    value = type(value);
    acm[name] = Number.isNaN(value) ? defaultValue : value;
    return acm;
  }, {});
};
const destroyObserver = (el) => {
  const { observer } = el[SCOPE];
  if (observer) {
    observer.disconnect();
    delete el[SCOPE].observer;
  }
};
const handleScroll = (el, cb) => {
  const { container, containerEl, instance, observer, lastScrollTop } = el[SCOPE];
  const { disabled, distance } = getScrollOptions(el, instance);
  const { clientHeight, scrollHeight, scrollTop } = containerEl;
  const delta = scrollTop - lastScrollTop;
  el[SCOPE].lastScrollTop = scrollTop;
  if (observer || disabled || delta < 0)
    return;
  let shouldTrigger = false;
  if (container === el) {
    shouldTrigger = scrollHeight - (clientHeight + scrollTop) <= distance;
  } else {
    const { clientTop, scrollHeight: height } = el;
    const offsetTop = getOffsetTopDistance(el, containerEl);
    shouldTrigger = scrollTop + clientHeight >= offsetTop + clientTop + height - distance;
  }
  if (shouldTrigger) {
    cb.call(instance);
  }
};
function checkFull(el, cb) {
  const { containerEl, instance } = el[SCOPE];
  const { disabled } = getScrollOptions(el, instance);
  if (disabled || containerEl.clientHeight === 0)
    return;
  if (containerEl.scrollHeight <= containerEl.clientHeight) {
    cb.call(instance);
  } else {
    destroyObserver(el);
  }
}
const InfiniteScroll = {
  async mounted(el, binding) {
    const { instance, value: cb } = binding;
    if (!isFunction(cb)) {
      throwError(SCOPE, "'v-infinite-scroll' binding value must be a function");
    }
    await nextTick();
    const { delay, immediate } = getScrollOptions(el, instance);
    const container = getScrollContainer(el, true);
    const containerEl = container === window ? document.documentElement : container;
    const onScroll = throttle_1(handleScroll.bind(null, el, cb), delay);
    if (!container)
      return;
    el[SCOPE] = {
      instance,
      container,
      containerEl,
      delay,
      cb,
      onScroll,
      lastScrollTop: containerEl.scrollTop
    };
    if (immediate) {
      const observer = new MutationObserver(throttle_1(checkFull.bind(null, el, cb), CHECK_INTERVAL));
      el[SCOPE].observer = observer;
      observer.observe(el, { childList: true, subtree: true });
      checkFull(el, cb);
    }
    container.addEventListener("scroll", onScroll);
  },
  unmounted(el) {
    const { container, onScroll } = el[SCOPE];
    container == null ? void 0 : container.removeEventListener("scroll", onScroll);
    destroyObserver(el);
  },
  async updated(el) {
    if (!el[SCOPE]) {
      await nextTick();
    }
    const { containerEl, cb, observer } = el[SCOPE];
    if (containerEl.clientHeight && observer) {
      checkFull(el, cb);
    }
  }
};
const _InfiniteScroll = InfiniteScroll;
_InfiniteScroll.install = (app) => {
  app.directive("InfiniteScroll", _InfiniteScroll);
};
const ElInfiniteScroll = _InfiniteScroll;
const elInfiniteScroll = "";
export {
  ElInfiniteScroll as E
};
