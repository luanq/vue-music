const p$1 = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script2) {
    const fetchOpts = {};
    if (script2.integrity)
      fetchOpts.integrity = script2.integrity;
    if (script2.referrerpolicy)
      fetchOpts.referrerPolicy = script2.referrerpolicy;
    if (script2.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script2.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p$1();
function makeMap(str, expectsLowerCase) {
  const map = /* @__PURE__ */ Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
}
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
function normalizeStyle(value) {
  if (isArray$9(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString$2(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString$2(value)) {
    return value;
  } else if (isObject$6(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString$2(value)) {
    res = value;
  } else if (isArray$9(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject$6(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
function normalizeProps(props) {
  if (!props)
    return null;
  let { class: klass, style } = props;
  if (klass && !isString$2(klass)) {
    props.class = normalizeClass(klass);
  }
  if (style) {
    props.style = normalizeStyle(style);
  }
  return props;
}
const toDisplayString = (val) => {
  return isString$2(val) ? val : val == null ? "" : isArray$9(val) || isObject$6(val) && (val.toString === objectToString$2 || !isFunction$4(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
        entries[`${key} =>`] = val2;
        return entries;
      }, {})
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()]
    };
  } else if (isObject$6(val) && !isArray$9(val) && !isPlainObject$2(val)) {
    return String(val);
  }
  return val;
};
const EMPTY_OBJ = {};
const EMPTY_ARR = [];
const NOOP = () => {
};
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend$1 = Object.assign;
const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
const hasOwnProperty$9 = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty$9.call(val, key);
const isArray$9 = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isFunction$4 = (val) => typeof val === "function";
const isString$2 = (val) => typeof val === "string";
const isSymbol$5 = (val) => typeof val === "symbol";
const isObject$6 = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return isObject$6(val) && isFunction$4(val.then) && isFunction$4(val.catch);
};
const objectToString$2 = Object.prototype.toString;
const toTypeString = (value) => objectToString$2.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isPlainObject$2 = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key) => isString$2(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
);
const cacheStringFunction = (fn2) => {
  const cache2 = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache2[str];
    return hit || (cache2[str] = fn2(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
const toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};
const def = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  });
};
const toNumber$2 = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
let activeEffectScope;
class EffectScope {
  constructor(detached = false) {
    this.active = true;
    this.effects = [];
    this.cleanups = [];
    if (!detached && activeEffectScope) {
      this.parent = activeEffectScope;
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
    }
  }
  run(fn2) {
    if (this.active) {
      const currentEffectScope = activeEffectScope;
      try {
        activeEffectScope = this;
        return fn2();
      } finally {
        activeEffectScope = currentEffectScope;
      }
    }
  }
  on() {
    activeEffectScope = this;
  }
  off() {
    activeEffectScope = this.parent;
  }
  stop(fromParent) {
    if (this.active) {
      let i, l;
      for (i = 0, l = this.effects.length; i < l; i++) {
        this.effects[i].stop();
      }
      for (i = 0, l = this.cleanups.length; i < l; i++) {
        this.cleanups[i]();
      }
      if (this.scopes) {
        for (i = 0, l = this.scopes.length; i < l; i++) {
          this.scopes[i].stop(true);
        }
      }
      if (this.parent && !fromParent) {
        const last = this.parent.scopes.pop();
        if (last && last !== this) {
          this.parent.scopes[this.index] = last;
          last.index = this.index;
        }
      }
      this.active = false;
    }
  }
}
function effectScope(detached) {
  return new EffectScope(detached);
}
function recordEffectScope(effect, scope = activeEffectScope) {
  if (scope && scope.active) {
    scope.effects.push(effect);
  }
}
function getCurrentScope() {
  return activeEffectScope;
}
function onScopeDispose(fn2) {
  if (activeEffectScope) {
    activeEffectScope.cleanups.push(fn2);
  }
}
const createDep = (effects) => {
  const dep = new Set(effects);
  dep.w = 0;
  dep.n = 0;
  return dep;
};
const wasTracked = (dep) => (dep.w & trackOpBit) > 0;
const newTracked = (dep) => (dep.n & trackOpBit) > 0;
const initDepMarkers = ({ deps }) => {
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].w |= trackOpBit;
    }
  }
};
const finalizeDepMarkers = (effect) => {
  const { deps } = effect;
  if (deps.length) {
    let ptr = 0;
    for (let i = 0; i < deps.length; i++) {
      const dep = deps[i];
      if (wasTracked(dep) && !newTracked(dep)) {
        dep.delete(effect);
      } else {
        deps[ptr++] = dep;
      }
      dep.w &= ~trackOpBit;
      dep.n &= ~trackOpBit;
    }
    deps.length = ptr;
  }
};
const targetMap = /* @__PURE__ */ new WeakMap();
let effectTrackDepth = 0;
let trackOpBit = 1;
const maxMarkerBits = 30;
let activeEffect;
const ITERATE_KEY = Symbol("");
const MAP_KEY_ITERATE_KEY = Symbol("");
class ReactiveEffect {
  constructor(fn2, scheduler = null, scope) {
    this.fn = fn2;
    this.scheduler = scheduler;
    this.active = true;
    this.deps = [];
    this.parent = void 0;
    recordEffectScope(this, scope);
  }
  run() {
    if (!this.active) {
      return this.fn();
    }
    let parent = activeEffect;
    let lastShouldTrack = shouldTrack;
    while (parent) {
      if (parent === this) {
        return;
      }
      parent = parent.parent;
    }
    try {
      this.parent = activeEffect;
      activeEffect = this;
      shouldTrack = true;
      trackOpBit = 1 << ++effectTrackDepth;
      if (effectTrackDepth <= maxMarkerBits) {
        initDepMarkers(this);
      } else {
        cleanupEffect(this);
      }
      return this.fn();
    } finally {
      if (effectTrackDepth <= maxMarkerBits) {
        finalizeDepMarkers(this);
      }
      trackOpBit = 1 << --effectTrackDepth;
      activeEffect = this.parent;
      shouldTrack = lastShouldTrack;
      this.parent = void 0;
      if (this.deferStop) {
        this.stop();
      }
    }
  }
  stop() {
    if (activeEffect === this) {
      this.deferStop = true;
    } else if (this.active) {
      cleanupEffect(this);
      if (this.onStop) {
        this.onStop();
      }
      this.active = false;
    }
  }
}
function cleanupEffect(effect) {
  const { deps } = effect;
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].delete(effect);
    }
    deps.length = 0;
  }
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function track(target, type4, key) {
  if (shouldTrack && activeEffect) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = createDep());
    }
    trackEffects(dep);
  }
}
function trackEffects(dep, debuggerEventExtraInfo) {
  let shouldTrack2 = false;
  if (effectTrackDepth <= maxMarkerBits) {
    if (!newTracked(dep)) {
      dep.n |= trackOpBit;
      shouldTrack2 = !wasTracked(dep);
    }
  } else {
    shouldTrack2 = !dep.has(activeEffect);
  }
  if (shouldTrack2) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);
  }
}
function trigger(target, type4, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  let deps = [];
  if (type4 === "clear") {
    deps = [...depsMap.values()];
  } else if (key === "length" && isArray$9(target)) {
    depsMap.forEach((dep, key2) => {
      if (key2 === "length" || key2 >= newValue) {
        deps.push(dep);
      }
    });
  } else {
    if (key !== void 0) {
      deps.push(depsMap.get(key));
    }
    switch (type4) {
      case "add":
        if (!isArray$9(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (isIntegerKey(key)) {
          deps.push(depsMap.get("length"));
        }
        break;
      case "delete":
        if (!isArray$9(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }
        break;
      case "set":
        if (isMap(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
        }
        break;
    }
  }
  if (deps.length === 1) {
    if (deps[0]) {
      {
        triggerEffects(deps[0]);
      }
    }
  } else {
    const effects = [];
    for (const dep of deps) {
      if (dep) {
        effects.push(...dep);
      }
    }
    {
      triggerEffects(createDep(effects));
    }
  }
}
function triggerEffects(dep, debuggerEventExtraInfo) {
  const effects = isArray$9(dep) ? dep : [...dep];
  for (const effect of effects) {
    if (effect.computed) {
      triggerEffect(effect);
    }
  }
  for (const effect of effects) {
    if (!effect.computed) {
      triggerEffect(effect);
    }
  }
}
function triggerEffect(effect, debuggerEventExtraInfo) {
  if (effect !== activeEffect || effect.allowRecurse) {
    if (effect.scheduler) {
      effect.scheduler();
    } else {
      effect.run();
    }
  }
}
const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol$5)
);
const get$1 = /* @__PURE__ */ createGetter();
const shallowGet = /* @__PURE__ */ createGetter(false, true);
const readonlyGet = /* @__PURE__ */ createGetter(true);
const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
  const instrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    instrumentations[key] = function(...args) {
      const arr = toRaw(this);
      for (let i = 0, l = this.length; i < l; i++) {
        track(arr, "get", i + "");
      }
      const res = arr[key](...args);
      if (res === -1 || res === false) {
        return arr[key](...args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    instrumentations[key] = function(...args) {
      pauseTracking();
      const res = toRaw(this)[key].apply(this, args);
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}
function createGetter(isReadonly2 = false, shallow = false) {
  return function get2(target, key, receiver) {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_isShallow") {
      return shallow;
    } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
      return target;
    }
    const targetIsArray = isArray$9(target);
    if (!isReadonly2 && targetIsArray && hasOwn(arrayInstrumentations, key)) {
      return Reflect.get(arrayInstrumentations, key, receiver);
    }
    const res = Reflect.get(target, key, receiver);
    if (isSymbol$5(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (shallow) {
      return res;
    }
    if (isRef(res)) {
      return targetIsArray && isIntegerKey(key) ? res : res.value;
    }
    if (isObject$6(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  };
}
const set = /* @__PURE__ */ createSetter();
const shallowSet = /* @__PURE__ */ createSetter(true);
function createSetter(shallow = false) {
  return function set2(target, key, value, receiver) {
    let oldValue = target[key];
    if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) {
      return false;
    }
    if (!shallow && !isReadonly(value)) {
      if (!isShallow(value)) {
        value = toRaw(value);
        oldValue = toRaw(oldValue);
      }
      if (!isArray$9(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      }
    }
    const hadKey = isArray$9(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
    const result = Reflect.set(target, key, value, receiver);
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value);
      }
    }
    return result;
  };
}
function deleteProperty(target, key) {
  const hadKey = hasOwn(target, key);
  target[key];
  const result = Reflect.deleteProperty(target, key);
  if (result && hadKey) {
    trigger(target, "delete", key, void 0);
  }
  return result;
}
function has(target, key) {
  const result = Reflect.has(target, key);
  if (!isSymbol$5(key) || !builtInSymbols.has(key)) {
    track(target, "has", key);
  }
  return result;
}
function ownKeys(target) {
  track(target, "iterate", isArray$9(target) ? "length" : ITERATE_KEY);
  return Reflect.ownKeys(target);
}
const mutableHandlers = {
  get: get$1,
  set,
  deleteProperty,
  has,
  ownKeys
};
const readonlyHandlers = {
  get: readonlyGet,
  set(target, key) {
    return true;
  },
  deleteProperty(target, key) {
    return true;
  }
};
const shallowReactiveHandlers = /* @__PURE__ */ extend$1({}, mutableHandlers, {
  get: shallowGet,
  set: shallowSet
});
const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function get$1$1(target, key, isReadonly2 = false, isShallow2 = false) {
  target = target["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (!isReadonly2) {
    if (key !== rawKey) {
      track(rawTarget, "get", key);
    }
    track(rawTarget, "get", rawKey);
  }
  const { has: has2 } = getProto(rawTarget);
  const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
  if (has2.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has2.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    target.get(key);
  }
}
function has$1(key, isReadonly2 = false) {
  const target = this["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (!isReadonly2) {
    if (key !== rawKey) {
      track(rawTarget, "has", key);
    }
    track(rawTarget, "has", rawKey);
  }
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly2 = false) {
  target = target["__v_raw"];
  !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
  return Reflect.get(target, "size", target);
}
function add(value) {
  value = toRaw(value);
  const target = toRaw(this);
  const proto = getProto(target);
  const hadKey = proto.has.call(target, value);
  if (!hadKey) {
    target.add(value);
    trigger(target, "add", value, value);
  }
  return this;
}
function set$1(key, value) {
  value = toRaw(value);
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  }
  const oldValue = get2.call(target, key);
  target.set(key, value);
  if (!hadKey) {
    trigger(target, "add", key, value);
  } else if (hasChanged(value, oldValue)) {
    trigger(target, "set", key, value);
  }
  return this;
}
function deleteEntry(key) {
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  }
  get2 ? get2.call(target, key) : void 0;
  const result = target.delete(key);
  if (hadKey) {
    trigger(target, "delete", key, void 0);
  }
  return result;
}
function clear() {
  const target = toRaw(this);
  const hadItems = target.size !== 0;
  const result = target.clear();
  if (hadItems) {
    trigger(target, "clear", void 0, void 0);
  }
  return result;
}
function createForEach(isReadonly2, isShallow2) {
  return function forEach3(callback, thisArg) {
    const observed = this;
    const target = observed["__v_raw"];
    const rawTarget = toRaw(target);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
    return target.forEach((value, key) => {
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}
function createIterableMethod(method4, isReadonly2, isShallow2) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method4 === "entries" || method4 === Symbol.iterator && targetIsMap;
    const isKeyOnly = method4 === "keys" && targetIsMap;
    const innerIterator = target[method4](...args);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
    return {
      next() {
        const { value, done } = innerIterator.next();
        return done ? { value, done } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type4) {
  return function(...args) {
    return type4 === "delete" ? false : this;
  };
}
function createInstrumentations() {
  const mutableInstrumentations2 = {
    get(key) {
      return get$1$1(this, key);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  const shallowInstrumentations2 = {
    get(key) {
      return get$1$1(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  const readonlyInstrumentations2 = {
    get(key) {
      return get$1$1(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false)
  };
  const shallowReadonlyInstrumentations2 = {
    get(key) {
      return get$1$1(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true)
  };
  const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach((method4) => {
    mutableInstrumentations2[method4] = createIterableMethod(method4, false, false);
    readonlyInstrumentations2[method4] = createIterableMethod(method4, true, false);
    shallowInstrumentations2[method4] = createIterableMethod(method4, false, true);
    shallowReadonlyInstrumentations2[method4] = createIterableMethod(method4, true, true);
  });
  return [
    mutableInstrumentations2,
    readonlyInstrumentations2,
    shallowInstrumentations2,
    shallowReadonlyInstrumentations2
  ];
}
const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
  };
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const reactiveMap = /* @__PURE__ */ new WeakMap();
const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const readonlyMap = /* @__PURE__ */ new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive(target) {
  if (isReadonly(target)) {
    return target;
  }
  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function shallowReactive(target) {
  return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
function readonly(target) {
  return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject$6(target)) {
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}
function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"]);
  }
  return !!(value && value["__v_isReactive"]);
}
function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}
function isShallow(value) {
  return !!(value && value["__v_isShallow"]);
}
function isProxy(value) {
  return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
  def(value, "__v_skip", true);
  return value;
}
const toReactive = (value) => isObject$6(value) ? reactive(value) : value;
const toReadonly = (value) => isObject$6(value) ? readonly(value) : value;
function trackRefValue(ref2) {
  if (shouldTrack && activeEffect) {
    ref2 = toRaw(ref2);
    {
      trackEffects(ref2.dep || (ref2.dep = createDep()));
    }
  }
}
function triggerRefValue(ref2, newVal) {
  ref2 = toRaw(ref2);
  if (ref2.dep) {
    {
      triggerEffects(ref2.dep);
    }
  }
}
function isRef(r) {
  return !!(r && r.__v_isRef === true);
}
function ref(value) {
  return createRef(value, false);
}
function shallowRef(value) {
  return createRef(value, true);
}
function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
class RefImpl {
  constructor(value, __v_isShallow) {
    this.__v_isShallow = __v_isShallow;
    this.dep = void 0;
    this.__v_isRef = true;
    this._rawValue = __v_isShallow ? value : toRaw(value);
    this._value = __v_isShallow ? value : toReactive(value);
  }
  get value() {
    trackRefValue(this);
    return this._value;
  }
  set value(newVal) {
    newVal = this.__v_isShallow ? newVal : toRaw(newVal);
    if (hasChanged(newVal, this._rawValue)) {
      this._rawValue = newVal;
      this._value = this.__v_isShallow ? newVal : toReactive(newVal);
      triggerRefValue(this);
    }
  }
}
function triggerRef(ref2) {
  triggerRefValue(ref2);
}
function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}
const shallowUnwrapHandlers = {
  get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
  set: (target, key, value, receiver) => {
    const oldValue = target[key];
    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};
function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
function toRefs(object4) {
  const ret = isArray$9(object4) ? new Array(object4.length) : {};
  for (const key in object4) {
    ret[key] = toRef(object4, key);
  }
  return ret;
}
class ObjectRefImpl {
  constructor(_object, _key, _defaultValue) {
    this._object = _object;
    this._key = _key;
    this._defaultValue = _defaultValue;
    this.__v_isRef = true;
  }
  get value() {
    const val = this._object[this._key];
    return val === void 0 ? this._defaultValue : val;
  }
  set value(newVal) {
    this._object[this._key] = newVal;
  }
}
function toRef(object4, key, defaultValue) {
  const val = object4[key];
  return isRef(val) ? val : new ObjectRefImpl(object4, key, defaultValue);
}
class ComputedRefImpl {
  constructor(getter, _setter, isReadonly2, isSSR) {
    this._setter = _setter;
    this.dep = void 0;
    this.__v_isRef = true;
    this._dirty = true;
    this.effect = new ReactiveEffect(getter, () => {
      if (!this._dirty) {
        this._dirty = true;
        triggerRefValue(this);
      }
    });
    this.effect.computed = this;
    this.effect.active = this._cacheable = !isSSR;
    this["__v_isReadonly"] = isReadonly2;
  }
  get value() {
    const self2 = toRaw(this);
    trackRefValue(self2);
    if (self2._dirty || !self2._cacheable) {
      self2._dirty = false;
      self2._value = self2.effect.run();
    }
    return self2._value;
  }
  set value(newValue) {
    this._setter(newValue);
  }
}
function computed$1(getterOrOptions, debugOptions, isSSR = false) {
  let getter;
  let setter;
  const onlyGetter = isFunction$4(getterOrOptions);
  if (onlyGetter) {
    getter = getterOrOptions;
    setter = NOOP;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
  return cRef;
}
const stack = [];
function warn(msg, ...args) {
  pauseTracking();
  const instance2 = stack.length ? stack[stack.length - 1].component : null;
  const appWarnHandler = instance2 && instance2.appContext.config.warnHandler;
  const trace = getComponentTrace();
  if (appWarnHandler) {
    callWithErrorHandling(appWarnHandler, instance2, 11, [
      msg + args.join(""),
      instance2 && instance2.proxy,
      trace.map(({ vnode }) => `at <${formatComponentName(instance2, vnode.type)}>`).join("\n"),
      trace
    ]);
  } else {
    const warnArgs = [`[Vue warn]: ${msg}`, ...args];
    if (trace.length && true) {
      warnArgs.push(`
`, ...formatTrace(trace));
    }
    console.warn(...warnArgs);
  }
  resetTracking();
}
function getComponentTrace() {
  let currentVNode = stack[stack.length - 1];
  if (!currentVNode) {
    return [];
  }
  const normalizedStack = [];
  while (currentVNode) {
    const last = normalizedStack[0];
    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }
    const parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }
  return normalizedStack;
}
function formatTrace(trace) {
  const logs = [];
  trace.forEach((entry, i) => {
    logs.push(...i === 0 ? [] : [`
`], ...formatTraceEntry(entry));
  });
  return logs;
}
function formatTraceEntry({ vnode, recurseCount }) {
  const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
  const isRoot = vnode.component ? vnode.component.parent == null : false;
  const open = ` at <${formatComponentName(vnode.component, vnode.type, isRoot)}`;
  const close2 = `>` + postfix;
  return vnode.props ? [open, ...formatProps(vnode.props), close2] : [open + close2];
}
function formatProps(props) {
  const res = [];
  const keys2 = Object.keys(props);
  keys2.slice(0, 3).forEach((key) => {
    res.push(...formatProp(key, props[key]));
  });
  if (keys2.length > 3) {
    res.push(` ...`);
  }
  return res;
}
function formatProp(key, value, raw) {
  if (isString$2(value)) {
    value = JSON.stringify(value);
    return raw ? value : [`${key}=${value}`];
  } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
    return raw ? value : [`${key}=${value}`];
  } else if (isRef(value)) {
    value = formatProp(key, toRaw(value.value), true);
    return raw ? value : [`${key}=Ref<`, value, `>`];
  } else if (isFunction$4(value)) {
    return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
  } else {
    value = toRaw(value);
    return raw ? value : [`${key}=`, value];
  }
}
function callWithErrorHandling(fn2, instance2, type4, args) {
  let res;
  try {
    res = args ? fn2(...args) : fn2();
  } catch (err) {
    handleError(err, instance2, type4);
  }
  return res;
}
function callWithAsyncErrorHandling(fn2, instance2, type4, args) {
  if (isFunction$4(fn2)) {
    const res = callWithErrorHandling(fn2, instance2, type4, args);
    if (res && isPromise(res)) {
      res.catch((err) => {
        handleError(err, instance2, type4);
      });
    }
    return res;
  }
  const values = [];
  for (let i = 0; i < fn2.length; i++) {
    values.push(callWithAsyncErrorHandling(fn2[i], instance2, type4, args));
  }
  return values;
}
function handleError(err, instance2, type4, throwInDev = true) {
  const contextVNode = instance2 ? instance2.vnode : null;
  if (instance2) {
    let cur = instance2.parent;
    const exposedInstance = instance2.proxy;
    const errorInfo = type4;
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    const appErrorHandler = instance2.appContext.config.errorHandler;
    if (appErrorHandler) {
      callWithErrorHandling(appErrorHandler, null, 10, [err, exposedInstance, errorInfo]);
      return;
    }
  }
  logError(err, type4, contextVNode, throwInDev);
}
function logError(err, type4, contextVNode, throwInDev = true) {
  {
    console.error(err);
  }
}
let isFlushing = false;
let isFlushPending = false;
const queue = [];
let flushIndex = 0;
const pendingPreFlushCbs = [];
let activePreFlushCbs = null;
let preFlushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /* @__PURE__ */ Promise.resolve();
let currentFlushPromise = null;
let currentPreFlushParentJob = null;
function nextTick(fn2) {
  const p2 = currentFlushPromise || resolvedPromise;
  return fn2 ? p2.then(this ? fn2.bind(this) : fn2) : p2;
}
function findInsertionIndex(id) {
  let start = flushIndex + 1;
  let end = queue.length;
  while (start < end) {
    const middle = start + end >>> 1;
    const middleJobId = getId(queue[middle]);
    middleJobId < id ? start = middle + 1 : end = middle;
  }
  return start;
}
function queueJob(job) {
  if ((!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) && job !== currentPreFlushParentJob) {
    if (job.id == null) {
      queue.push(job);
    } else {
      queue.splice(findInsertionIndex(job.id), 0, job);
    }
    queueFlush();
  }
}
function queueFlush() {
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true;
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}
function invalidateJob(job) {
  const i = queue.indexOf(job);
  if (i > flushIndex) {
    queue.splice(i, 1);
  }
}
function queueCb(cb, activeQueue, pendingQueue, index) {
  if (!isArray$9(cb)) {
    if (!activeQueue || !activeQueue.includes(cb, cb.allowRecurse ? index + 1 : index)) {
      pendingQueue.push(cb);
    }
  } else {
    pendingQueue.push(...cb);
  }
  queueFlush();
}
function queuePreFlushCb(cb) {
  queueCb(cb, activePreFlushCbs, pendingPreFlushCbs, preFlushIndex);
}
function queuePostFlushCb(cb) {
  queueCb(cb, activePostFlushCbs, pendingPostFlushCbs, postFlushIndex);
}
function flushPreFlushCbs(seen2, parentJob = null) {
  if (pendingPreFlushCbs.length) {
    currentPreFlushParentJob = parentJob;
    activePreFlushCbs = [...new Set(pendingPreFlushCbs)];
    pendingPreFlushCbs.length = 0;
    for (preFlushIndex = 0; preFlushIndex < activePreFlushCbs.length; preFlushIndex++) {
      activePreFlushCbs[preFlushIndex]();
    }
    activePreFlushCbs = null;
    preFlushIndex = 0;
    currentPreFlushParentJob = null;
    flushPreFlushCbs(seen2, parentJob);
  }
}
function flushPostFlushCbs(seen2) {
  flushPreFlushCbs();
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)];
    pendingPostFlushCbs.length = 0;
    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }
    activePostFlushCbs = deduped;
    activePostFlushCbs.sort((a, b) => getId(a) - getId(b));
    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      activePostFlushCbs[postFlushIndex]();
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}
const getId = (job) => job.id == null ? Infinity : job.id;
function flushJobs(seen2) {
  isFlushPending = false;
  isFlushing = true;
  flushPreFlushCbs(seen2);
  queue.sort((a, b) => getId(a) - getId(b));
  const check = NOOP;
  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job && job.active !== false) {
        if (false)
          ;
        callWithErrorHandling(job, null, 14);
      }
    }
  } finally {
    flushIndex = 0;
    queue.length = 0;
    flushPostFlushCbs();
    isFlushing = false;
    currentFlushPromise = null;
    if (queue.length || pendingPreFlushCbs.length || pendingPostFlushCbs.length) {
      flushJobs(seen2);
    }
  }
}
function emit$1(instance2, event, ...rawArgs) {
  if (instance2.isUnmounted)
    return;
  const props = instance2.vnode.props || EMPTY_OBJ;
  let args = rawArgs;
  const isModelListener2 = event.startsWith("update:");
  const modelArg = isModelListener2 && event.slice(7);
  if (modelArg && modelArg in props) {
    const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
    const { number: number4, trim: trim2 } = props[modifiersKey] || EMPTY_OBJ;
    if (trim2) {
      args = rawArgs.map((a) => a.trim());
    }
    if (number4) {
      args = rawArgs.map(toNumber$2);
    }
  }
  let handlerName;
  let handler = props[handlerName = toHandlerKey(event)] || props[handlerName = toHandlerKey(camelize(event))];
  if (!handler && isModelListener2) {
    handler = props[handlerName = toHandlerKey(hyphenate(event))];
  }
  if (handler) {
    callWithAsyncErrorHandling(handler, instance2, 6, args);
  }
  const onceHandler = props[handlerName + `Once`];
  if (onceHandler) {
    if (!instance2.emitted) {
      instance2.emitted = {};
    } else if (instance2.emitted[handlerName]) {
      return;
    }
    instance2.emitted[handlerName] = true;
    callWithAsyncErrorHandling(onceHandler, instance2, 6, args);
  }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
  const cache2 = appContext.emitsCache;
  const cached = cache2.get(comp);
  if (cached !== void 0) {
    return cached;
  }
  const raw = comp.emits;
  let normalized = {};
  let hasExtends = false;
  if (!isFunction$4(comp)) {
    const extendEmits = (raw2) => {
      const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
      if (normalizedFromExtend) {
        hasExtends = true;
        extend$1(normalized, normalizedFromExtend);
      }
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }
    if (comp.extends) {
      extendEmits(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }
  if (!raw && !hasExtends) {
    cache2.set(comp, null);
    return null;
  }
  if (isArray$9(raw)) {
    raw.forEach((key) => normalized[key] = null);
  } else {
    extend$1(normalized, raw);
  }
  cache2.set(comp, normalized);
  return normalized;
}
function isEmitListener(options, key) {
  if (!options || !isOn(key)) {
    return false;
  }
  key = key.slice(2).replace(/Once$/, "");
  return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
}
let currentRenderingInstance = null;
let currentScopeId = null;
function setCurrentRenderingInstance(instance2) {
  const prev = currentRenderingInstance;
  currentRenderingInstance = instance2;
  currentScopeId = instance2 && instance2.type.__scopeId || null;
  return prev;
}
function pushScopeId(id) {
  currentScopeId = id;
}
function popScopeId() {
  currentScopeId = null;
}
function withCtx(fn2, ctx = currentRenderingInstance, isNonScopedSlot) {
  if (!ctx)
    return fn2;
  if (fn2._n) {
    return fn2;
  }
  const renderFnWithContext = (...args) => {
    if (renderFnWithContext._d) {
      setBlockTracking(-1);
    }
    const prevInstance = setCurrentRenderingInstance(ctx);
    const res = fn2(...args);
    setCurrentRenderingInstance(prevInstance);
    if (renderFnWithContext._d) {
      setBlockTracking(1);
    }
    return res;
  };
  renderFnWithContext._n = true;
  renderFnWithContext._c = true;
  renderFnWithContext._d = true;
  return renderFnWithContext;
}
function markAttrsAccessed() {
}
function renderComponentRoot(instance2) {
  const { type: Component, vnode, proxy, withProxy, props, propsOptions: [propsOptions], slots, attrs, emit, render: render2, renderCache, data: data2, setupState, ctx, inheritAttrs } = instance2;
  let result;
  let fallthroughAttrs;
  const prev = setCurrentRenderingInstance(instance2);
  try {
    if (vnode.shapeFlag & 4) {
      const proxyToUse = withProxy || proxy;
      result = normalizeVNode(render2.call(proxyToUse, proxyToUse, renderCache, props, setupState, data2, ctx));
      fallthroughAttrs = attrs;
    } else {
      const render3 = Component;
      if (false)
        ;
      result = normalizeVNode(render3.length > 1 ? render3(props, false ? {
        get attrs() {
          markAttrsAccessed();
          return attrs;
        },
        slots,
        emit
      } : { attrs, slots, emit }) : render3(props, null));
      fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
    }
  } catch (err) {
    blockStack.length = 0;
    handleError(err, instance2, 1);
    result = createVNode(Comment);
  }
  let root2 = result;
  if (fallthroughAttrs && inheritAttrs !== false) {
    const keys2 = Object.keys(fallthroughAttrs);
    const { shapeFlag } = root2;
    if (keys2.length) {
      if (shapeFlag & (1 | 6)) {
        if (propsOptions && keys2.some(isModelListener)) {
          fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
        }
        root2 = cloneVNode(root2, fallthroughAttrs);
      }
    }
  }
  if (vnode.dirs) {
    root2 = cloneVNode(root2);
    root2.dirs = root2.dirs ? root2.dirs.concat(vnode.dirs) : vnode.dirs;
  }
  if (vnode.transition) {
    root2.transition = vnode.transition;
  }
  {
    result = root2;
  }
  setCurrentRenderingInstance(prev);
  return result;
}
const getFunctionalFallthrough = (attrs) => {
  let res;
  for (const key in attrs) {
    if (key === "class" || key === "style" || isOn(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }
  return res;
};
const filterModelListeners = (attrs, props) => {
  const res = {};
  for (const key in attrs) {
    if (!isModelListener(key) || !(key.slice(9) in props)) {
      res[key] = attrs[key];
    }
  }
  return res;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
  const { props: prevProps, children: prevChildren, component } = prevVNode;
  const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
  const emits2 = component.emitsOptions;
  if (nextVNode.dirs || nextVNode.transition) {
    return true;
  }
  if (optimized && patchFlag >= 0) {
    if (patchFlag & 1024) {
      return true;
    }
    if (patchFlag & 16) {
      if (!prevProps) {
        return !!nextProps;
      }
      return hasPropsChanged(prevProps, nextProps, emits2);
    } else if (patchFlag & 8) {
      const dynamicProps = nextVNode.dynamicProps;
      for (let i = 0; i < dynamicProps.length; i++) {
        const key = dynamicProps[i];
        if (nextProps[key] !== prevProps[key] && !isEmitListener(emits2, key)) {
          return true;
        }
      }
    }
  } else {
    if (prevChildren || nextChildren) {
      if (!nextChildren || !nextChildren.$stable) {
        return true;
      }
    }
    if (prevProps === nextProps) {
      return false;
    }
    if (!prevProps) {
      return !!nextProps;
    }
    if (!nextProps) {
      return true;
    }
    return hasPropsChanged(prevProps, nextProps, emits2);
  }
  return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
  const nextKeys = Object.keys(nextProps);
  if (nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }
  for (let i = 0; i < nextKeys.length; i++) {
    const key = nextKeys[i];
    if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
      return true;
    }
  }
  return false;
}
function updateHOCHostEl({ vnode, parent }, el) {
  while (parent && parent.subTree === vnode) {
    (vnode = parent.vnode).el = el;
    parent = parent.parent;
  }
}
const isSuspense = (type4) => type4.__isSuspense;
function queueEffectWithSuspense(fn2, suspense) {
  if (suspense && suspense.pendingBranch) {
    if (isArray$9(fn2)) {
      suspense.effects.push(...fn2);
    } else {
      suspense.effects.push(fn2);
    }
  } else {
    queuePostFlushCb(fn2);
  }
}
function provide(key, value) {
  if (!currentInstance)
    ;
  else {
    let provides = currentInstance.provides;
    const parentProvides = currentInstance.parent && currentInstance.parent.provides;
    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    }
    provides[key] = value;
  }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
  const instance2 = currentInstance || currentRenderingInstance;
  if (instance2) {
    const provides = instance2.parent == null ? instance2.vnode.appContext && instance2.vnode.appContext.provides : instance2.parent.provides;
    if (provides && key in provides) {
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && isFunction$4(defaultValue) ? defaultValue.call(instance2.proxy) : defaultValue;
    } else
      ;
  }
}
function watchEffect(effect, options) {
  return doWatch(effect, null, options);
}
function watchPostEffect(effect, options) {
  return doWatch(effect, null, { flush: "post" });
}
const INITIAL_WATCHER_VALUE = {};
function watch(source, cb, options) {
  return doWatch(source, cb, options);
}
function doWatch(source, cb, { immediate, deep, flush, onTrack, onTrigger } = EMPTY_OBJ) {
  const instance2 = currentInstance;
  let getter;
  let forceTrigger = false;
  let isMultiSource = false;
  if (isRef(source)) {
    getter = () => source.value;
    forceTrigger = isShallow(source);
  } else if (isReactive(source)) {
    getter = () => source;
    deep = true;
  } else if (isArray$9(source)) {
    isMultiSource = true;
    forceTrigger = source.some((s) => isReactive(s) || isShallow(s));
    getter = () => source.map((s) => {
      if (isRef(s)) {
        return s.value;
      } else if (isReactive(s)) {
        return traverse(s);
      } else if (isFunction$4(s)) {
        return callWithErrorHandling(s, instance2, 2);
      } else
        ;
    });
  } else if (isFunction$4(source)) {
    if (cb) {
      getter = () => callWithErrorHandling(source, instance2, 2);
    } else {
      getter = () => {
        if (instance2 && instance2.isUnmounted) {
          return;
        }
        if (cleanup) {
          cleanup();
        }
        return callWithAsyncErrorHandling(source, instance2, 3, [onCleanup]);
      };
    }
  } else {
    getter = NOOP;
  }
  if (cb && deep) {
    const baseGetter = getter;
    getter = () => traverse(baseGetter());
  }
  let cleanup;
  let onCleanup = (fn2) => {
    cleanup = effect.onStop = () => {
      callWithErrorHandling(fn2, instance2, 4);
    };
  };
  if (isInSSRComponentSetup) {
    onCleanup = NOOP;
    if (!cb) {
      getter();
    } else if (immediate) {
      callWithAsyncErrorHandling(cb, instance2, 3, [
        getter(),
        isMultiSource ? [] : void 0,
        onCleanup
      ]);
    }
    return NOOP;
  }
  let oldValue = isMultiSource ? [] : INITIAL_WATCHER_VALUE;
  const job = () => {
    if (!effect.active) {
      return;
    }
    if (cb) {
      const newValue = effect.run();
      if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue)) || false) {
        if (cleanup) {
          cleanup();
        }
        callWithAsyncErrorHandling(cb, instance2, 3, [
          newValue,
          oldValue === INITIAL_WATCHER_VALUE ? void 0 : oldValue,
          onCleanup
        ]);
        oldValue = newValue;
      }
    } else {
      effect.run();
    }
  };
  job.allowRecurse = !!cb;
  let scheduler;
  if (flush === "sync") {
    scheduler = job;
  } else if (flush === "post") {
    scheduler = () => queuePostRenderEffect(job, instance2 && instance2.suspense);
  } else {
    scheduler = () => queuePreFlushCb(job);
  }
  const effect = new ReactiveEffect(getter, scheduler);
  if (cb) {
    if (immediate) {
      job();
    } else {
      oldValue = effect.run();
    }
  } else if (flush === "post") {
    queuePostRenderEffect(effect.run.bind(effect), instance2 && instance2.suspense);
  } else {
    effect.run();
  }
  return () => {
    effect.stop();
    if (instance2 && instance2.scope) {
      remove(instance2.scope.effects, effect);
    }
  };
}
function instanceWatch(source, value, options) {
  const publicThis = this.proxy;
  const getter = isString$2(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
  let cb;
  if (isFunction$4(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }
  const cur = currentInstance;
  setCurrentInstance(this);
  const res = doWatch(getter, cb.bind(publicThis), options);
  if (cur) {
    setCurrentInstance(cur);
  } else {
    unsetCurrentInstance();
  }
  return res;
}
function createPathGetter(ctx, path) {
  const segments = path.split(".");
  return () => {
    let cur = ctx;
    for (let i = 0; i < segments.length && cur; i++) {
      cur = cur[segments[i]];
    }
    return cur;
  };
}
function traverse(value, seen2) {
  if (!isObject$6(value) || value["__v_skip"]) {
    return value;
  }
  seen2 = seen2 || /* @__PURE__ */ new Set();
  if (seen2.has(value)) {
    return value;
  }
  seen2.add(value);
  if (isRef(value)) {
    traverse(value.value, seen2);
  } else if (isArray$9(value)) {
    for (let i = 0; i < value.length; i++) {
      traverse(value[i], seen2);
    }
  } else if (isSet(value) || isMap(value)) {
    value.forEach((v) => {
      traverse(v, seen2);
    });
  } else if (isPlainObject$2(value)) {
    for (const key in value) {
      traverse(value[key], seen2);
    }
  }
  return value;
}
function useTransitionState() {
  const state = {
    isMounted: false,
    isLeaving: false,
    isUnmounting: false,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  onMounted(() => {
    state.isMounted = true;
  });
  onBeforeUnmount(() => {
    state.isUnmounting = true;
  });
  return state;
}
const TransitionHookValidator = [Function, Array];
const BaseTransitionImpl = {
  name: `BaseTransition`,
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: TransitionHookValidator,
    onEnter: TransitionHookValidator,
    onAfterEnter: TransitionHookValidator,
    onEnterCancelled: TransitionHookValidator,
    onBeforeLeave: TransitionHookValidator,
    onLeave: TransitionHookValidator,
    onAfterLeave: TransitionHookValidator,
    onLeaveCancelled: TransitionHookValidator,
    onBeforeAppear: TransitionHookValidator,
    onAppear: TransitionHookValidator,
    onAfterAppear: TransitionHookValidator,
    onAppearCancelled: TransitionHookValidator
  },
  setup(props, { slots }) {
    const instance2 = getCurrentInstance();
    const state = useTransitionState();
    let prevTransitionKey;
    return () => {
      const children = slots.default && getTransitionRawChildren(slots.default(), true);
      if (!children || !children.length) {
        return;
      }
      let child = children[0];
      if (children.length > 1) {
        for (const c of children) {
          if (c.type !== Comment) {
            child = c;
            break;
          }
        }
      }
      const rawProps = toRaw(props);
      const { mode } = rawProps;
      if (state.isLeaving) {
        return emptyPlaceholder(child);
      }
      const innerChild = getKeepAliveChild(child);
      if (!innerChild) {
        return emptyPlaceholder(child);
      }
      const enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance2);
      setTransitionHooks(innerChild, enterHooks);
      const oldChild = instance2.subTree;
      const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
      let transitionKeyChanged = false;
      const { getTransitionKey } = innerChild.type;
      if (getTransitionKey) {
        const key = getTransitionKey();
        if (prevTransitionKey === void 0) {
          prevTransitionKey = key;
        } else if (key !== prevTransitionKey) {
          prevTransitionKey = key;
          transitionKeyChanged = true;
        }
      }
      if (oldInnerChild && oldInnerChild.type !== Comment && (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
        const leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance2);
        setTransitionHooks(oldInnerChild, leavingHooks);
        if (mode === "out-in") {
          state.isLeaving = true;
          leavingHooks.afterLeave = () => {
            state.isLeaving = false;
            instance2.update();
          };
          return emptyPlaceholder(child);
        } else if (mode === "in-out" && innerChild.type !== Comment) {
          leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
            const leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
            leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
            el._leaveCb = () => {
              earlyRemove();
              el._leaveCb = void 0;
              delete enterHooks.delayedLeave;
            };
            enterHooks.delayedLeave = delayedLeave;
          };
        }
      }
      return child;
    };
  }
};
const BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
  const { leavingVNodes } = state;
  let leavingVNodesCache = leavingVNodes.get(vnode.type);
  if (!leavingVNodesCache) {
    leavingVNodesCache = /* @__PURE__ */ Object.create(null);
    leavingVNodes.set(vnode.type, leavingVNodesCache);
  }
  return leavingVNodesCache;
}
function resolveTransitionHooks(vnode, props, state, instance2) {
  const { appear, mode, persisted = false, onBeforeEnter, onEnter, onAfterEnter, onEnterCancelled, onBeforeLeave, onLeave, onAfterLeave, onLeaveCancelled, onBeforeAppear, onAppear, onAfterAppear, onAppearCancelled } = props;
  const key = String(vnode.key);
  const leavingVNodesCache = getLeavingNodesForType(state, vnode);
  const callHook2 = (hook, args) => {
    hook && callWithAsyncErrorHandling(hook, instance2, 9, args);
  };
  const callAsyncHook = (hook, args) => {
    const done = args[1];
    callHook2(hook, args);
    if (isArray$9(hook)) {
      if (hook.every((hook2) => hook2.length <= 1))
        done();
    } else if (hook.length <= 1) {
      done();
    }
  };
  const hooks = {
    mode,
    persisted,
    beforeEnter(el) {
      let hook = onBeforeEnter;
      if (!state.isMounted) {
        if (appear) {
          hook = onBeforeAppear || onBeforeEnter;
        } else {
          return;
        }
      }
      if (el._leaveCb) {
        el._leaveCb(true);
      }
      const leavingVNode = leavingVNodesCache[key];
      if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el._leaveCb) {
        leavingVNode.el._leaveCb();
      }
      callHook2(hook, [el]);
    },
    enter(el) {
      let hook = onEnter;
      let afterHook = onAfterEnter;
      let cancelHook = onEnterCancelled;
      if (!state.isMounted) {
        if (appear) {
          hook = onAppear || onEnter;
          afterHook = onAfterAppear || onAfterEnter;
          cancelHook = onAppearCancelled || onEnterCancelled;
        } else {
          return;
        }
      }
      let called = false;
      const done = el._enterCb = (cancelled) => {
        if (called)
          return;
        called = true;
        if (cancelled) {
          callHook2(cancelHook, [el]);
        } else {
          callHook2(afterHook, [el]);
        }
        if (hooks.delayedLeave) {
          hooks.delayedLeave();
        }
        el._enterCb = void 0;
      };
      if (hook) {
        callAsyncHook(hook, [el, done]);
      } else {
        done();
      }
    },
    leave(el, remove2) {
      const key2 = String(vnode.key);
      if (el._enterCb) {
        el._enterCb(true);
      }
      if (state.isUnmounting) {
        return remove2();
      }
      callHook2(onBeforeLeave, [el]);
      let called = false;
      const done = el._leaveCb = (cancelled) => {
        if (called)
          return;
        called = true;
        remove2();
        if (cancelled) {
          callHook2(onLeaveCancelled, [el]);
        } else {
          callHook2(onAfterLeave, [el]);
        }
        el._leaveCb = void 0;
        if (leavingVNodesCache[key2] === vnode) {
          delete leavingVNodesCache[key2];
        }
      };
      leavingVNodesCache[key2] = vnode;
      if (onLeave) {
        callAsyncHook(onLeave, [el, done]);
      } else {
        done();
      }
    },
    clone(vnode2) {
      return resolveTransitionHooks(vnode2, props, state, instance2);
    }
  };
  return hooks;
}
function emptyPlaceholder(vnode) {
  if (isKeepAlive(vnode)) {
    vnode = cloneVNode(vnode);
    vnode.children = null;
    return vnode;
  }
}
function getKeepAliveChild(vnode) {
  return isKeepAlive(vnode) ? vnode.children ? vnode.children[0] : void 0 : vnode;
}
function setTransitionHooks(vnode, hooks) {
  if (vnode.shapeFlag & 6 && vnode.component) {
    setTransitionHooks(vnode.component.subTree, hooks);
  } else if (vnode.shapeFlag & 128) {
    vnode.ssContent.transition = hooks.clone(vnode.ssContent);
    vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
  } else {
    vnode.transition = hooks;
  }
}
function getTransitionRawChildren(children, keepComment = false, parentKey) {
  let ret = [];
  let keyedFragmentCount = 0;
  for (let i = 0; i < children.length; i++) {
    let child = children[i];
    const key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i);
    if (child.type === Fragment) {
      if (child.patchFlag & 128)
        keyedFragmentCount++;
      ret = ret.concat(getTransitionRawChildren(child.children, keepComment, key));
    } else if (keepComment || child.type !== Comment) {
      ret.push(key != null ? cloneVNode(child, { key }) : child);
    }
  }
  if (keyedFragmentCount > 1) {
    for (let i = 0; i < ret.length; i++) {
      ret[i].patchFlag = -2;
    }
  }
  return ret;
}
function defineComponent(options) {
  return isFunction$4(options) ? { setup: options, name: options.name } : options;
}
const isAsyncWrapper = (i) => !!i.type.__asyncLoader;
const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type4, target = currentInstance) {
  const wrappedHook = hook.__wdc || (hook.__wdc = () => {
    let current = target;
    while (current) {
      if (current.isDeactivated) {
        return;
      }
      current = current.parent;
    }
    return hook();
  });
  injectHook(type4, wrappedHook, target);
  if (target) {
    let current = target.parent;
    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type4, target, current);
      }
      current = current.parent;
    }
  }
}
function injectToKeepAliveRoot(hook, type4, target, keepAliveRoot) {
  const injected = injectHook(type4, hook, keepAliveRoot, true);
  onUnmounted(() => {
    remove(keepAliveRoot[type4], injected);
  }, target);
}
function injectHook(type4, hook, target = currentInstance, prepend = false) {
  if (target) {
    const hooks = target[type4] || (target[type4] = []);
    const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
      if (target.isUnmounted) {
        return;
      }
      pauseTracking();
      setCurrentInstance(target);
      const res = callWithAsyncErrorHandling(hook, target, type4, args);
      unsetCurrentInstance();
      resetTracking();
      return res;
    });
    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }
    return wrappedHook;
  }
}
const createHook = (lifecycle) => (hook, target = currentInstance) => (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, hook, target);
const onBeforeMount = createHook("bm");
const onMounted = createHook("m");
const onBeforeUpdate = createHook("bu");
const onUpdated = createHook("u");
const onBeforeUnmount = createHook("bum");
const onUnmounted = createHook("um");
const onServerPrefetch = createHook("sp");
const onRenderTriggered = createHook("rtg");
const onRenderTracked = createHook("rtc");
function onErrorCaptured(hook, target = currentInstance) {
  injectHook("ec", hook, target);
}
function withDirectives(vnode, directives) {
  const internalInstance = currentRenderingInstance;
  if (internalInstance === null) {
    return vnode;
  }
  const instance2 = getExposeProxy(internalInstance) || internalInstance.proxy;
  const bindings = vnode.dirs || (vnode.dirs = []);
  for (let i = 0; i < directives.length; i++) {
    let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i];
    if (isFunction$4(dir)) {
      dir = {
        mounted: dir,
        updated: dir
      };
    }
    if (dir.deep) {
      traverse(value);
    }
    bindings.push({
      dir,
      instance: instance2,
      value,
      oldValue: void 0,
      arg,
      modifiers
    });
  }
  return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance2, name) {
  const bindings = vnode.dirs;
  const oldBindings = prevVNode && prevVNode.dirs;
  for (let i = 0; i < bindings.length; i++) {
    const binding = bindings[i];
    if (oldBindings) {
      binding.oldValue = oldBindings[i].value;
    }
    let hook = binding.dir[name];
    if (hook) {
      pauseTracking();
      callWithAsyncErrorHandling(hook, instance2, 8, [
        vnode.el,
        binding,
        vnode,
        prevVNode
      ]);
      resetTracking();
    }
  }
}
const COMPONENTS = "components";
const DIRECTIVES = "directives";
function resolveComponent(name, maybeSelfReference) {
  return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol();
function resolveDynamicComponent(component) {
  if (isString$2(component)) {
    return resolveAsset(COMPONENTS, component, false) || component;
  } else {
    return component || NULL_DYNAMIC_COMPONENT;
  }
}
function resolveDirective(name) {
  return resolveAsset(DIRECTIVES, name);
}
function resolveAsset(type4, name, warnMissing = true, maybeSelfReference = false) {
  const instance2 = currentRenderingInstance || currentInstance;
  if (instance2) {
    const Component = instance2.type;
    if (type4 === COMPONENTS) {
      const selfName = getComponentName(Component, false);
      if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) {
        return Component;
      }
    }
    const res = resolve(instance2[type4] || Component[type4], name) || resolve(instance2.appContext[type4], name);
    if (!res && maybeSelfReference) {
      return Component;
    }
    return res;
  }
}
function resolve(registry, name) {
  return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
}
function renderList(source, renderItem, cache2, index) {
  let ret;
  const cached = cache2 && cache2[index];
  if (isArray$9(source) || isString$2(source)) {
    ret = new Array(source.length);
    for (let i = 0, l = source.length; i < l; i++) {
      ret[i] = renderItem(source[i], i, void 0, cached && cached[i]);
    }
  } else if (typeof source === "number") {
    ret = new Array(source);
    for (let i = 0; i < source; i++) {
      ret[i] = renderItem(i + 1, i, void 0, cached && cached[i]);
    }
  } else if (isObject$6(source)) {
    if (source[Symbol.iterator]) {
      ret = Array.from(source, (item, i) => renderItem(item, i, void 0, cached && cached[i]));
    } else {
      const keys2 = Object.keys(source);
      ret = new Array(keys2.length);
      for (let i = 0, l = keys2.length; i < l; i++) {
        const key = keys2[i];
        ret[i] = renderItem(source[key], key, i, cached && cached[i]);
      }
    }
  } else {
    ret = [];
  }
  if (cache2) {
    cache2[index] = ret;
  }
  return ret;
}
function createSlots(slots, dynamicSlots) {
  for (let i = 0; i < dynamicSlots.length; i++) {
    const slot = dynamicSlots[i];
    if (isArray$9(slot)) {
      for (let j = 0; j < slot.length; j++) {
        slots[slot[j].name] = slot[j].fn;
      }
    } else if (slot) {
      slots[slot.name] = slot.fn;
    }
  }
  return slots;
}
function renderSlot(slots, name, props = {}, fallback, noSlotted) {
  if (currentRenderingInstance.isCE || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.isCE) {
    return createVNode("slot", name === "default" ? null : { name }, fallback && fallback());
  }
  let slot = slots[name];
  if (slot && slot._c) {
    slot._d = false;
  }
  openBlock();
  const validSlotContent = slot && ensureValidVNode(slot(props));
  const rendered = createBlock(Fragment, { key: props.key || `_${name}` }, validSlotContent || (fallback ? fallback() : []), validSlotContent && slots._ === 1 ? 64 : -2);
  if (!noSlotted && rendered.scopeId) {
    rendered.slotScopeIds = [rendered.scopeId + "-s"];
  }
  if (slot && slot._c) {
    slot._d = true;
  }
  return rendered;
}
function ensureValidVNode(vnodes) {
  return vnodes.some((child) => {
    if (!isVNode(child))
      return true;
    if (child.type === Comment)
      return false;
    if (child.type === Fragment && !ensureValidVNode(child.children))
      return false;
    return true;
  }) ? vnodes : null;
}
const getPublicInstance = (i) => {
  if (!i)
    return null;
  if (isStatefulComponent(i))
    return getExposeProxy(i) || i.proxy;
  return getPublicInstance(i.parent);
};
const publicPropertiesMap = /* @__PURE__ */ extend$1(/* @__PURE__ */ Object.create(null), {
  $: (i) => i,
  $el: (i) => i.vnode.el,
  $data: (i) => i.data,
  $props: (i) => i.props,
  $attrs: (i) => i.attrs,
  $slots: (i) => i.slots,
  $refs: (i) => i.refs,
  $parent: (i) => getPublicInstance(i.parent),
  $root: (i) => getPublicInstance(i.root),
  $emit: (i) => i.emit,
  $options: (i) => resolveMergedOptions(i),
  $forceUpdate: (i) => i.f || (i.f = () => queueJob(i.update)),
  $nextTick: (i) => i.n || (i.n = nextTick.bind(i.proxy)),
  $watch: (i) => instanceWatch.bind(i)
});
const PublicInstanceProxyHandlers = {
  get({ _: instance2 }, key) {
    const { ctx, setupState, data: data2, props, accessCache, type: type4, appContext } = instance2;
    let normalizedProps;
    if (key[0] !== "$") {
      const n = accessCache[key];
      if (n !== void 0) {
        switch (n) {
          case 1:
            return setupState[key];
          case 2:
            return data2[key];
          case 4:
            return ctx[key];
          case 3:
            return props[key];
        }
      } else if (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) {
        accessCache[key] = 1;
        return setupState[key];
      } else if (data2 !== EMPTY_OBJ && hasOwn(data2, key)) {
        accessCache[key] = 2;
        return data2[key];
      } else if ((normalizedProps = instance2.propsOptions[0]) && hasOwn(normalizedProps, key)) {
        accessCache[key] = 3;
        return props[key];
      } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
        accessCache[key] = 4;
        return ctx[key];
      } else if (shouldCacheAccess) {
        accessCache[key] = 0;
      }
    }
    const publicGetter = publicPropertiesMap[key];
    let cssModule, globalProperties;
    if (publicGetter) {
      if (key === "$attrs") {
        track(instance2, "get", key);
      }
      return publicGetter(instance2);
    } else if ((cssModule = type4.__cssModules) && (cssModule = cssModule[key])) {
      return cssModule;
    } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
      accessCache[key] = 4;
      return ctx[key];
    } else if (globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)) {
      {
        return globalProperties[key];
      }
    } else
      ;
  },
  set({ _: instance2 }, key, value) {
    const { data: data2, setupState, ctx } = instance2;
    if (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) {
      setupState[key] = value;
      return true;
    } else if (data2 !== EMPTY_OBJ && hasOwn(data2, key)) {
      data2[key] = value;
      return true;
    } else if (hasOwn(instance2.props, key)) {
      return false;
    }
    if (key[0] === "$" && key.slice(1) in instance2) {
      return false;
    } else {
      {
        ctx[key] = value;
      }
    }
    return true;
  },
  has({ _: { data: data2, setupState, accessCache, ctx, appContext, propsOptions } }, key) {
    let normalizedProps;
    return !!accessCache[key] || data2 !== EMPTY_OBJ && hasOwn(data2, key) || setupState !== EMPTY_OBJ && hasOwn(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
  },
  defineProperty(target, key, descriptor) {
    if (descriptor.get != null) {
      target._.accessCache[key] = 0;
    } else if (hasOwn(descriptor, "value")) {
      this.set(target, key, descriptor.value, null);
    }
    return Reflect.defineProperty(target, key, descriptor);
  }
};
let shouldCacheAccess = true;
function applyOptions(instance2) {
  const options = resolveMergedOptions(instance2);
  const publicThis = instance2.proxy;
  const ctx = instance2.ctx;
  shouldCacheAccess = false;
  if (options.beforeCreate) {
    callHook$1(options.beforeCreate, instance2, "bc");
  }
  const {
    data: dataOptions,
    computed: computedOptions,
    methods,
    watch: watchOptions,
    provide: provideOptions,
    inject: injectOptions,
    created,
    beforeMount,
    mounted,
    beforeUpdate,
    updated,
    activated,
    deactivated,
    beforeDestroy,
    beforeUnmount,
    destroyed,
    unmounted,
    render: render2,
    renderTracked,
    renderTriggered,
    errorCaptured,
    serverPrefetch,
    expose,
    inheritAttrs,
    components,
    directives,
    filters
  } = options;
  const checkDuplicateProperties = null;
  if (injectOptions) {
    resolveInjections(injectOptions, ctx, checkDuplicateProperties, instance2.appContext.config.unwrapInjectedRef);
  }
  if (methods) {
    for (const key in methods) {
      const methodHandler = methods[key];
      if (isFunction$4(methodHandler)) {
        {
          ctx[key] = methodHandler.bind(publicThis);
        }
      }
    }
  }
  if (dataOptions) {
    const data2 = dataOptions.call(publicThis, publicThis);
    if (!isObject$6(data2))
      ;
    else {
      instance2.data = reactive(data2);
    }
  }
  shouldCacheAccess = true;
  if (computedOptions) {
    for (const key in computedOptions) {
      const opt = computedOptions[key];
      const get2 = isFunction$4(opt) ? opt.bind(publicThis, publicThis) : isFunction$4(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
      const set2 = !isFunction$4(opt) && isFunction$4(opt.set) ? opt.set.bind(publicThis) : NOOP;
      const c = computed({
        get: get2,
        set: set2
      });
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => c.value,
        set: (v) => c.value = v
      });
    }
  }
  if (watchOptions) {
    for (const key in watchOptions) {
      createWatcher(watchOptions[key], ctx, publicThis, key);
    }
  }
  if (provideOptions) {
    const provides = isFunction$4(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
    Reflect.ownKeys(provides).forEach((key) => {
      provide(key, provides[key]);
    });
  }
  if (created) {
    callHook$1(created, instance2, "c");
  }
  function registerLifecycleHook(register2, hook) {
    if (isArray$9(hook)) {
      hook.forEach((_hook) => register2(_hook.bind(publicThis)));
    } else if (hook) {
      register2(hook.bind(publicThis));
    }
  }
  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);
  if (isArray$9(expose)) {
    if (expose.length) {
      const exposed = instance2.exposed || (instance2.exposed = {});
      expose.forEach((key) => {
        Object.defineProperty(exposed, key, {
          get: () => publicThis[key],
          set: (val) => publicThis[key] = val
        });
      });
    } else if (!instance2.exposed) {
      instance2.exposed = {};
    }
  }
  if (render2 && instance2.render === NOOP) {
    instance2.render = render2;
  }
  if (inheritAttrs != null) {
    instance2.inheritAttrs = inheritAttrs;
  }
  if (components)
    instance2.components = components;
  if (directives)
    instance2.directives = directives;
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP, unwrapRef = false) {
  if (isArray$9(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }
  for (const key in injectOptions) {
    const opt = injectOptions[key];
    let injected;
    if (isObject$6(opt)) {
      if ("default" in opt) {
        injected = inject(opt.from || key, opt.default, true);
      } else {
        injected = inject(opt.from || key);
      }
    } else {
      injected = inject(opt);
    }
    if (isRef(injected)) {
      if (unwrapRef) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => injected.value,
          set: (v) => injected.value = v
        });
      } else {
        ctx[key] = injected;
      }
    } else {
      ctx[key] = injected;
    }
  }
}
function callHook$1(hook, instance2, type4) {
  callWithAsyncErrorHandling(isArray$9(hook) ? hook.map((h2) => h2.bind(instance2.proxy)) : hook.bind(instance2.proxy), instance2, type4);
}
function createWatcher(raw, ctx, publicThis, key) {
  const getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
  if (isString$2(raw)) {
    const handler = ctx[raw];
    if (isFunction$4(handler)) {
      watch(getter, handler);
    }
  } else if (isFunction$4(raw)) {
    watch(getter, raw.bind(publicThis));
  } else if (isObject$6(raw)) {
    if (isArray$9(raw)) {
      raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
    } else {
      const handler = isFunction$4(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
      if (isFunction$4(handler)) {
        watch(getter, handler, raw);
      }
    }
  } else
    ;
}
function resolveMergedOptions(instance2) {
  const base2 = instance2.type;
  const { mixins, extends: extendsOptions } = base2;
  const { mixins: globalMixins, optionsCache: cache2, config: { optionMergeStrategies } } = instance2.appContext;
  const cached = cache2.get(base2);
  let resolved;
  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base2;
    }
  } else {
    resolved = {};
    if (globalMixins.length) {
      globalMixins.forEach((m) => mergeOptions$1(resolved, m, optionMergeStrategies, true));
    }
    mergeOptions$1(resolved, base2, optionMergeStrategies);
  }
  cache2.set(base2, resolved);
  return resolved;
}
function mergeOptions$1(to, from, strats, asMixin = false) {
  const { mixins, extends: extendsOptions } = from;
  if (extendsOptions) {
    mergeOptions$1(to, extendsOptions, strats, true);
  }
  if (mixins) {
    mixins.forEach((m) => mergeOptions$1(to, m, strats, true));
  }
  for (const key in from) {
    if (asMixin && key === "expose")
      ;
    else {
      const strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }
  return to;
}
const internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeObjectOptions,
  emits: mergeObjectOptions,
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  beforeCreate: mergeAsArray,
  created: mergeAsArray,
  beforeMount: mergeAsArray,
  mounted: mergeAsArray,
  beforeUpdate: mergeAsArray,
  updated: mergeAsArray,
  beforeDestroy: mergeAsArray,
  beforeUnmount: mergeAsArray,
  destroyed: mergeAsArray,
  unmounted: mergeAsArray,
  activated: mergeAsArray,
  deactivated: mergeAsArray,
  errorCaptured: mergeAsArray,
  serverPrefetch: mergeAsArray,
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  watch: mergeWatchOptions,
  provide: mergeDataFn,
  inject: mergeInject
};
function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }
  if (!to) {
    return from;
  }
  return function mergedDataFn() {
    return extend$1(isFunction$4(to) ? to.call(this, this) : to, isFunction$4(from) ? from.call(this, this) : from);
  };
}
function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
  if (isArray$9(raw)) {
    const res = {};
    for (let i = 0; i < raw.length; i++) {
      res[raw[i]] = raw[i];
    }
    return res;
  }
  return raw;
}
function mergeAsArray(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
  return to ? extend$1(extend$1(/* @__PURE__ */ Object.create(null), to), from) : from;
}
function mergeWatchOptions(to, from) {
  if (!to)
    return from;
  if (!from)
    return to;
  const merged = extend$1(/* @__PURE__ */ Object.create(null), to);
  for (const key in from) {
    merged[key] = mergeAsArray(to[key], from[key]);
  }
  return merged;
}
function initProps(instance2, rawProps, isStateful, isSSR = false) {
  const props = {};
  const attrs = {};
  def(attrs, InternalObjectKey, 1);
  instance2.propsDefaults = /* @__PURE__ */ Object.create(null);
  setFullProps(instance2, rawProps, props, attrs);
  for (const key in instance2.propsOptions[0]) {
    if (!(key in props)) {
      props[key] = void 0;
    }
  }
  if (isStateful) {
    instance2.props = isSSR ? props : shallowReactive(props);
  } else {
    if (!instance2.type.props) {
      instance2.props = attrs;
    } else {
      instance2.props = props;
    }
  }
  instance2.attrs = attrs;
}
function updateProps(instance2, rawProps, rawPrevProps, optimized) {
  const { props, attrs, vnode: { patchFlag } } = instance2;
  const rawCurrentProps = toRaw(props);
  const [options] = instance2.propsOptions;
  let hasAttrsChanged = false;
  if ((optimized || patchFlag > 0) && !(patchFlag & 16)) {
    if (patchFlag & 8) {
      const propsToUpdate = instance2.vnode.dynamicProps;
      for (let i = 0; i < propsToUpdate.length; i++) {
        let key = propsToUpdate[i];
        if (isEmitListener(instance2.emitsOptions, key)) {
          continue;
        }
        const value = rawProps[key];
        if (options) {
          if (hasOwn(attrs, key)) {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          } else {
            const camelizedKey = camelize(key);
            props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance2, false);
          }
        } else {
          if (value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    if (setFullProps(instance2, rawProps, props, attrs)) {
      hasAttrsChanged = true;
    }
    let kebabKey;
    for (const key in rawCurrentProps) {
      if (!rawProps || !hasOwn(rawProps, key) && ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && (rawPrevProps[key] !== void 0 || rawPrevProps[kebabKey] !== void 0)) {
            props[key] = resolvePropValue(options, rawCurrentProps, key, void 0, instance2, true);
          }
        } else {
          delete props[key];
        }
      }
    }
    if (attrs !== rawCurrentProps) {
      for (const key in attrs) {
        if (!rawProps || !hasOwn(rawProps, key) && true) {
          delete attrs[key];
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (hasAttrsChanged) {
    trigger(instance2, "set", "$attrs");
  }
}
function setFullProps(instance2, rawProps, props, attrs) {
  const [options, needCastKeys] = instance2.propsOptions;
  let hasAttrsChanged = false;
  let rawCastValues;
  if (rawProps) {
    for (let key in rawProps) {
      if (isReservedProp(key)) {
        continue;
      }
      const value = rawProps[key];
      let camelKey;
      if (options && hasOwn(options, camelKey = camelize(key))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props[camelKey] = value;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        }
      } else if (!isEmitListener(instance2.emitsOptions, key)) {
        if (!(key in attrs) || value !== attrs[key]) {
          attrs[key] = value;
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (needCastKeys) {
    const rawCurrentProps = toRaw(props);
    const castValues = rawCastValues || EMPTY_OBJ;
    for (let i = 0; i < needCastKeys.length; i++) {
      const key = needCastKeys[i];
      props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance2, !hasOwn(castValues, key));
    }
  }
  return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance2, isAbsent2) {
  const opt = options[key];
  if (opt != null) {
    const hasDefault = hasOwn(opt, "default");
    if (hasDefault && value === void 0) {
      const defaultValue = opt.default;
      if (opt.type !== Function && isFunction$4(defaultValue)) {
        const { propsDefaults } = instance2;
        if (key in propsDefaults) {
          value = propsDefaults[key];
        } else {
          setCurrentInstance(instance2);
          value = propsDefaults[key] = defaultValue.call(null, props);
          unsetCurrentInstance();
        }
      } else {
        value = defaultValue;
      }
    }
    if (opt[0]) {
      if (isAbsent2 && !hasDefault) {
        value = false;
      } else if (opt[1] && (value === "" || value === hyphenate(key))) {
        value = true;
      }
    }
  }
  return value;
}
function normalizePropsOptions(comp, appContext, asMixin = false) {
  const cache2 = appContext.propsCache;
  const cached = cache2.get(comp);
  if (cached) {
    return cached;
  }
  const raw = comp.props;
  const normalized = {};
  const needCastKeys = [];
  let hasExtends = false;
  if (!isFunction$4(comp)) {
    const extendProps = (raw2) => {
      hasExtends = true;
      const [props, keys2] = normalizePropsOptions(raw2, appContext, true);
      extend$1(normalized, props);
      if (keys2)
        needCastKeys.push(...keys2);
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }
    if (comp.extends) {
      extendProps(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }
  if (!raw && !hasExtends) {
    cache2.set(comp, EMPTY_ARR);
    return EMPTY_ARR;
  }
  if (isArray$9(raw)) {
    for (let i = 0; i < raw.length; i++) {
      const normalizedKey = camelize(raw[i]);
      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = EMPTY_OBJ;
      }
    }
  } else if (raw) {
    for (const key in raw) {
      const normalizedKey = camelize(key);
      if (validatePropName(normalizedKey)) {
        const opt = raw[key];
        const prop = normalized[normalizedKey] = isArray$9(opt) || isFunction$4(opt) ? { type: opt } : opt;
        if (prop) {
          const booleanIndex = getTypeIndex(Boolean, prop.type);
          const stringIndex = getTypeIndex(String, prop.type);
          prop[0] = booleanIndex > -1;
          prop[1] = stringIndex < 0 || booleanIndex < stringIndex;
          if (booleanIndex > -1 || hasOwn(prop, "default")) {
            needCastKeys.push(normalizedKey);
          }
        }
      }
    }
  }
  const res = [normalized, needCastKeys];
  cache2.set(comp, res);
  return res;
}
function validatePropName(key) {
  if (key[0] !== "$") {
    return true;
  }
  return false;
}
function getType(ctor) {
  const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ctor === null ? "null" : "";
}
function isSameType(a, b) {
  return getType(a) === getType(b);
}
function getTypeIndex(type4, expectedTypes) {
  if (isArray$9(expectedTypes)) {
    return expectedTypes.findIndex((t) => isSameType(t, type4));
  } else if (isFunction$4(expectedTypes)) {
    return isSameType(expectedTypes, type4) ? 0 : -1;
  }
  return -1;
}
const isInternalKey = (key) => key[0] === "_" || key === "$stable";
const normalizeSlotValue = (value) => isArray$9(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
const normalizeSlot$1 = (key, rawSlot, ctx) => {
  if (rawSlot._n) {
    return rawSlot;
  }
  const normalized = withCtx((...args) => {
    return normalizeSlotValue(rawSlot(...args));
  }, ctx);
  normalized._c = false;
  return normalized;
};
const normalizeObjectSlots = (rawSlots, slots, instance2) => {
  const ctx = rawSlots._ctx;
  for (const key in rawSlots) {
    if (isInternalKey(key))
      continue;
    const value = rawSlots[key];
    if (isFunction$4(value)) {
      slots[key] = normalizeSlot$1(key, value, ctx);
    } else if (value != null) {
      const normalized = normalizeSlotValue(value);
      slots[key] = () => normalized;
    }
  }
};
const normalizeVNodeSlots = (instance2, children) => {
  const normalized = normalizeSlotValue(children);
  instance2.slots.default = () => normalized;
};
const initSlots = (instance2, children) => {
  if (instance2.vnode.shapeFlag & 32) {
    const type4 = children._;
    if (type4) {
      instance2.slots = toRaw(children);
      def(children, "_", type4);
    } else {
      normalizeObjectSlots(children, instance2.slots = {});
    }
  } else {
    instance2.slots = {};
    if (children) {
      normalizeVNodeSlots(instance2, children);
    }
  }
  def(instance2.slots, InternalObjectKey, 1);
};
const updateSlots = (instance2, children, optimized) => {
  const { vnode, slots } = instance2;
  let needDeletionCheck = true;
  let deletionComparisonTarget = EMPTY_OBJ;
  if (vnode.shapeFlag & 32) {
    const type4 = children._;
    if (type4) {
      if (optimized && type4 === 1) {
        needDeletionCheck = false;
      } else {
        extend$1(slots, children);
        if (!optimized && type4 === 1) {
          delete slots._;
        }
      }
    } else {
      needDeletionCheck = !children.$stable;
      normalizeObjectSlots(children, slots);
    }
    deletionComparisonTarget = children;
  } else if (children) {
    normalizeVNodeSlots(instance2, children);
    deletionComparisonTarget = { default: 1 };
  }
  if (needDeletionCheck) {
    for (const key in slots) {
      if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
        delete slots[key];
      }
    }
  }
};
function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let uid = 0;
function createAppAPI(render2, hydrate) {
  return function createApp2(rootComponent, rootProps = null) {
    if (!isFunction$4(rootComponent)) {
      rootComponent = Object.assign({}, rootComponent);
    }
    if (rootProps != null && !isObject$6(rootProps)) {
      rootProps = null;
    }
    const context = createAppContext();
    const installedPlugins = /* @__PURE__ */ new Set();
    let isMounted = false;
    const app2 = context.app = {
      _uid: uid++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version,
      get config() {
        return context.config;
      },
      set config(v) {
      },
      use(plugin, ...options) {
        if (installedPlugins.has(plugin))
          ;
        else if (plugin && isFunction$4(plugin.install)) {
          installedPlugins.add(plugin);
          plugin.install(app2, ...options);
        } else if (isFunction$4(plugin)) {
          installedPlugins.add(plugin);
          plugin(app2, ...options);
        } else
          ;
        return app2;
      },
      mixin(mixin) {
        {
          if (!context.mixins.includes(mixin)) {
            context.mixins.push(mixin);
          }
        }
        return app2;
      },
      component(name, component) {
        if (!component) {
          return context.components[name];
        }
        context.components[name] = component;
        return app2;
      },
      directive(name, directive) {
        if (!directive) {
          return context.directives[name];
        }
        context.directives[name] = directive;
        return app2;
      },
      mount(rootContainer, isHydrate, isSVG) {
        if (!isMounted) {
          const vnode = createVNode(rootComponent, rootProps);
          vnode.appContext = context;
          if (isHydrate && hydrate) {
            hydrate(vnode, rootContainer);
          } else {
            render2(vnode, rootContainer, isSVG);
          }
          isMounted = true;
          app2._container = rootContainer;
          rootContainer.__vue_app__ = app2;
          return getExposeProxy(vnode.component) || vnode.component.proxy;
        }
      },
      unmount() {
        if (isMounted) {
          render2(null, app2._container);
          delete app2._container.__vue_app__;
        }
      },
      provide(key, value) {
        context.provides[key] = value;
        return app2;
      }
    };
    return app2;
  };
}
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
  if (isArray$9(rawRef)) {
    rawRef.forEach((r, i) => setRef(r, oldRawRef && (isArray$9(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount));
    return;
  }
  if (isAsyncWrapper(vnode) && !isUnmount) {
    return;
  }
  const refValue = vnode.shapeFlag & 4 ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
  const value = isUnmount ? null : refValue;
  const { i: owner, r: ref2 } = rawRef;
  const oldRef = oldRawRef && oldRawRef.r;
  const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
  const setupState = owner.setupState;
  if (oldRef != null && oldRef !== ref2) {
    if (isString$2(oldRef)) {
      refs[oldRef] = null;
      if (hasOwn(setupState, oldRef)) {
        setupState[oldRef] = null;
      }
    } else if (isRef(oldRef)) {
      oldRef.value = null;
    }
  }
  if (isFunction$4(ref2)) {
    callWithErrorHandling(ref2, owner, 12, [value, refs]);
  } else {
    const _isString = isString$2(ref2);
    const _isRef = isRef(ref2);
    if (_isString || _isRef) {
      const doSet = () => {
        if (rawRef.f) {
          const existing = _isString ? refs[ref2] : ref2.value;
          if (isUnmount) {
            isArray$9(existing) && remove(existing, refValue);
          } else {
            if (!isArray$9(existing)) {
              if (_isString) {
                refs[ref2] = [refValue];
                if (hasOwn(setupState, ref2)) {
                  setupState[ref2] = refs[ref2];
                }
              } else {
                ref2.value = [refValue];
                if (rawRef.k)
                  refs[rawRef.k] = ref2.value;
              }
            } else if (!existing.includes(refValue)) {
              existing.push(refValue);
            }
          }
        } else if (_isString) {
          refs[ref2] = value;
          if (hasOwn(setupState, ref2)) {
            setupState[ref2] = value;
          }
        } else if (_isRef) {
          ref2.value = value;
          if (rawRef.k)
            refs[rawRef.k] = value;
        } else
          ;
      };
      if (value) {
        doSet.id = -1;
        queuePostRenderEffect(doSet, parentSuspense);
      } else {
        doSet();
      }
    }
  }
}
const queuePostRenderEffect = queueEffectWithSuspense;
function createRenderer(options) {
  return baseCreateRenderer(options);
}
function baseCreateRenderer(options, createHydrationFns) {
  const target = getGlobalThis();
  target.__VUE__ = true;
  const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = NOOP, cloneNode: hostCloneNode, insertStaticContent: hostInsertStaticContent } = options;
  const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized = !!n2.dynamicChildren) => {
    if (n1 === n2) {
      return;
    }
    if (n1 && !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1);
      unmount(n1, parentComponent, parentSuspense, true);
      n1 = null;
    }
    if (n2.patchFlag === -2) {
      optimized = false;
      n2.dynamicChildren = null;
    }
    const { type: type4, ref: ref2, shapeFlag } = n2;
    switch (type4) {
      case Text:
        processText(n1, n2, container, anchor);
        break;
      case Comment:
        processCommentNode(n1, n2, container, anchor);
        break;
      case Static:
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, isSVG);
        }
        break;
      case Fragment:
        processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        break;
      default:
        if (shapeFlag & 1) {
          processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (shapeFlag & 6) {
          processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (shapeFlag & 64) {
          type4.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
        } else if (shapeFlag & 128) {
          type4.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
        } else
          ;
    }
    if (ref2 != null && parentComponent) {
      setRef(ref2, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    }
  };
  const processText = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
    } else {
      const el = n2.el = n1.el;
      if (n2.children !== n1.children) {
        hostSetText(el, n2.children);
      }
    }
  };
  const processCommentNode = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateComment(n2.children || ""), container, anchor);
    } else {
      n2.el = n1.el;
    }
  };
  const mountStaticNode = (n2, container, anchor, isSVG) => {
    [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG, n2.el, n2.anchor);
  };
  const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostInsert(el, container, nextSibling);
      el = next;
    }
    hostInsert(anchor, container, nextSibling);
  };
  const removeStaticNode = ({ el, anchor }) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostRemove(el);
      el = next;
    }
    hostRemove(anchor);
  };
  const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    isSVG = isSVG || n2.type === "svg";
    if (n1 == null) {
      mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    } else {
      patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
  };
  const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    let el;
    let vnodeHook;
    const { type: type4, props, shapeFlag, transition, patchFlag, dirs } = vnode;
    if (vnode.el && hostCloneNode !== void 0 && patchFlag === -1) {
      el = vnode.el = hostCloneNode(vnode.el);
    } else {
      el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is, props);
      if (shapeFlag & 8) {
        hostSetElementText(el, vnode.children);
      } else if (shapeFlag & 16) {
        mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type4 !== "foreignObject", slotScopeIds, optimized);
      }
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "created");
      }
      if (props) {
        for (const key in props) {
          if (key !== "value" && !isReservedProp(key)) {
            hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
        if ("value" in props) {
          hostPatchProp(el, "value", null, props.value);
        }
        if (vnodeHook = props.onVnodeBeforeMount) {
          invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
      }
      setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
    }
    const needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
    if (needCallTransitionHooks) {
      transition.beforeEnter(el);
    }
    hostInsert(el, container, anchor);
    if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        needCallTransitionHooks && transition.enter(el);
        dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
      }, parentSuspense);
    }
  };
  const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
    if (scopeId) {
      hostSetScopeId(el, scopeId);
    }
    if (slotScopeIds) {
      for (let i = 0; i < slotScopeIds.length; i++) {
        hostSetScopeId(el, slotScopeIds[i]);
      }
    }
    if (parentComponent) {
      let subTree = parentComponent.subTree;
      if (vnode === subTree) {
        const parentVNode = parentComponent.vnode;
        setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
      }
    }
  };
  const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, start = 0) => {
    for (let i = start; i < children.length; i++) {
      const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
      patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
  };
  const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    const el = n2.el = n1.el;
    let { patchFlag, dynamicChildren, dirs } = n2;
    patchFlag |= n1.patchFlag & 16;
    const oldProps = n1.props || EMPTY_OBJ;
    const newProps = n2.props || EMPTY_OBJ;
    let vnodeHook;
    parentComponent && toggleRecurse(parentComponent, false);
    if (vnodeHook = newProps.onVnodeBeforeUpdate) {
      invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
    }
    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
    }
    parentComponent && toggleRecurse(parentComponent, true);
    const areChildrenSVG = isSVG && n2.type !== "foreignObject";
    if (dynamicChildren) {
      patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds);
    } else if (!optimized) {
      patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, false);
    }
    if (patchFlag > 0) {
      if (patchFlag & 16) {
        patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
      } else {
        if (patchFlag & 2) {
          if (oldProps.class !== newProps.class) {
            hostPatchProp(el, "class", null, newProps.class, isSVG);
          }
        }
        if (patchFlag & 4) {
          hostPatchProp(el, "style", oldProps.style, newProps.style, isSVG);
        }
        if (patchFlag & 8) {
          const propsToUpdate = n2.dynamicProps;
          for (let i = 0; i < propsToUpdate.length; i++) {
            const key = propsToUpdate[i];
            const prev = oldProps[key];
            const next = newProps[key];
            if (next !== prev || key === "value") {
              hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
            }
          }
        }
      }
      if (patchFlag & 1) {
        if (n1.children !== n2.children) {
          hostSetElementText(el, n2.children);
        }
      }
    } else if (!optimized && dynamicChildren == null) {
      patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
    }
    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
      }, parentSuspense);
    }
  };
  const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) => {
    for (let i = 0; i < newChildren.length; i++) {
      const oldVNode = oldChildren[i];
      const newVNode = newChildren[i];
      const container = oldVNode.el && (oldVNode.type === Fragment || !isSameVNodeType(oldVNode, newVNode) || oldVNode.shapeFlag & (6 | 64)) ? hostParentNode(oldVNode.el) : fallbackContainer;
      patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, true);
    }
  };
  const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) => {
    if (oldProps !== newProps) {
      for (const key in newProps) {
        if (isReservedProp(key))
          continue;
        const next = newProps[key];
        const prev = oldProps[key];
        if (next !== prev && key !== "value") {
          hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
        }
      }
      if (oldProps !== EMPTY_OBJ) {
        for (const key in oldProps) {
          if (!isReservedProp(key) && !(key in newProps)) {
            hostPatchProp(el, key, oldProps[key], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
      }
      if ("value" in newProps) {
        hostPatchProp(el, "value", oldProps.value, newProps.value);
      }
    }
  };
  const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
    const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
    let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    if (n1 == null) {
      hostInsert(fragmentStartAnchor, container, anchor);
      hostInsert(fragmentEndAnchor, container, anchor);
      mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    } else {
      if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && n1.dynamicChildren) {
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds);
        if (n2.key != null || parentComponent && n2 === parentComponent.subTree) {
          traverseStaticChildren(n1, n2, true);
        }
      } else {
        patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      }
    }
  };
  const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    n2.slotScopeIds = slotScopeIds;
    if (n1 == null) {
      if (n2.shapeFlag & 512) {
        parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
      } else {
        mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
      }
    } else {
      updateComponent(n1, n2, optimized);
    }
  };
  const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
    const instance2 = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
    if (isKeepAlive(initialVNode)) {
      instance2.ctx.renderer = internals;
    }
    {
      setupComponent(instance2);
    }
    if (instance2.asyncDep) {
      parentSuspense && parentSuspense.registerDep(instance2, setupRenderEffect);
      if (!initialVNode.el) {
        const placeholder = instance2.subTree = createVNode(Comment);
        processCommentNode(null, placeholder, container, anchor);
      }
      return;
    }
    setupRenderEffect(instance2, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
  };
  const updateComponent = (n1, n2, optimized) => {
    const instance2 = n2.component = n1.component;
    if (shouldUpdateComponent(n1, n2, optimized)) {
      if (instance2.asyncDep && !instance2.asyncResolved) {
        updateComponentPreRender(instance2, n2, optimized);
        return;
      } else {
        instance2.next = n2;
        invalidateJob(instance2.update);
        instance2.update();
      }
    } else {
      n2.el = n1.el;
      instance2.vnode = n2;
    }
  };
  const setupRenderEffect = (instance2, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {
    const componentUpdateFn = () => {
      if (!instance2.isMounted) {
        let vnodeHook;
        const { el, props } = initialVNode;
        const { bm, m, parent } = instance2;
        const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
        toggleRecurse(instance2, false);
        if (bm) {
          invokeArrayFns(bm);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
          invokeVNodeHook(vnodeHook, parent, initialVNode);
        }
        toggleRecurse(instance2, true);
        if (el && hydrateNode) {
          const hydrateSubTree = () => {
            instance2.subTree = renderComponentRoot(instance2);
            hydrateNode(el, instance2.subTree, instance2, parentSuspense, null);
          };
          if (isAsyncWrapperVNode) {
            initialVNode.type.__asyncLoader().then(
              () => !instance2.isUnmounted && hydrateSubTree()
            );
          } else {
            hydrateSubTree();
          }
        } else {
          const subTree = instance2.subTree = renderComponentRoot(instance2);
          patch(null, subTree, container, anchor, instance2, parentSuspense, isSVG);
          initialVNode.el = subTree.el;
        }
        if (m) {
          queuePostRenderEffect(m, parentSuspense);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
          const scopedInitialVNode = initialVNode;
          queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
        }
        if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) {
          instance2.a && queuePostRenderEffect(instance2.a, parentSuspense);
        }
        instance2.isMounted = true;
        initialVNode = container = anchor = null;
      } else {
        let { next, bu, u, parent, vnode } = instance2;
        let originNext = next;
        let vnodeHook;
        toggleRecurse(instance2, false);
        if (next) {
          next.el = vnode.el;
          updateComponentPreRender(instance2, next, optimized);
        } else {
          next = vnode;
        }
        if (bu) {
          invokeArrayFns(bu);
        }
        if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
          invokeVNodeHook(vnodeHook, parent, next, vnode);
        }
        toggleRecurse(instance2, true);
        const nextTree = renderComponentRoot(instance2);
        const prevTree = instance2.subTree;
        instance2.subTree = nextTree;
        patch(
          prevTree,
          nextTree,
          hostParentNode(prevTree.el),
          getNextHostNode(prevTree),
          instance2,
          parentSuspense,
          isSVG
        );
        next.el = nextTree.el;
        if (originNext === null) {
          updateHOCHostEl(instance2, nextTree.el);
        }
        if (u) {
          queuePostRenderEffect(u, parentSuspense);
        }
        if (vnodeHook = next.props && next.props.onVnodeUpdated) {
          queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
        }
      }
    };
    const effect = instance2.effect = new ReactiveEffect(
      componentUpdateFn,
      () => queueJob(update),
      instance2.scope
    );
    const update = instance2.update = () => effect.run();
    update.id = instance2.uid;
    toggleRecurse(instance2, true);
    update();
  };
  const updateComponentPreRender = (instance2, nextVNode, optimized) => {
    nextVNode.component = instance2;
    const prevProps = instance2.vnode.props;
    instance2.vnode = nextVNode;
    instance2.next = null;
    updateProps(instance2, nextVNode.props, prevProps, optimized);
    updateSlots(instance2, nextVNode.children, optimized);
    pauseTracking();
    flushPreFlushCbs(void 0, instance2.update);
    resetTracking();
  };
  const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized = false) => {
    const c1 = n1 && n1.children;
    const prevShapeFlag = n1 ? n1.shapeFlag : 0;
    const c2 = n2.children;
    const { patchFlag, shapeFlag } = n2;
    if (patchFlag > 0) {
      if (patchFlag & 128) {
        patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        return;
      } else if (patchFlag & 256) {
        patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        return;
      }
    }
    if (shapeFlag & 8) {
      if (prevShapeFlag & 16) {
        unmountChildren(c1, parentComponent, parentSuspense);
      }
      if (c2 !== c1) {
        hostSetElementText(container, c2);
      }
    } else {
      if (prevShapeFlag & 16) {
        if (shapeFlag & 16) {
          patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else {
          unmountChildren(c1, parentComponent, parentSuspense, true);
        }
      } else {
        if (prevShapeFlag & 8) {
          hostSetElementText(container, "");
        }
        if (shapeFlag & 16) {
          mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
      }
    }
  };
  const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    c1 = c1 || EMPTY_ARR;
    c2 = c2 || EMPTY_ARR;
    const oldLength = c1.length;
    const newLength = c2.length;
    const commonLength = Math.min(oldLength, newLength);
    let i;
    for (i = 0; i < commonLength; i++) {
      const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
    if (oldLength > newLength) {
      unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
    } else {
      mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, commonLength);
    }
  };
  const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    let i = 0;
    const l2 = c2.length;
    let e1 = c1.length - 1;
    let e2 = l2 - 1;
    while (i <= e1 && i <= e2) {
      const n1 = c1[i];
      const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      if (isSameVNodeType(n1, n2)) {
        patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        break;
      }
      i++;
    }
    while (i <= e1 && i <= e2) {
      const n1 = c1[e1];
      const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
      if (isSameVNodeType(n1, n2)) {
        patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        break;
      }
      e1--;
      e2--;
    }
    if (i > e1) {
      if (i <= e2) {
        const nextPos = e2 + 1;
        const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
        while (i <= e2) {
          patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          i++;
        }
      }
    } else if (i > e2) {
      while (i <= e1) {
        unmount(c1[i], parentComponent, parentSuspense, true);
        i++;
      }
    } else {
      const s1 = i;
      const s2 = i;
      const keyToNewIndexMap = /* @__PURE__ */ new Map();
      for (i = s2; i <= e2; i++) {
        const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        if (nextChild.key != null) {
          keyToNewIndexMap.set(nextChild.key, i);
        }
      }
      let j;
      let patched = 0;
      const toBePatched = e2 - s2 + 1;
      let moved = false;
      let maxNewIndexSoFar = 0;
      const newIndexToOldIndexMap = new Array(toBePatched);
      for (i = 0; i < toBePatched; i++)
        newIndexToOldIndexMap[i] = 0;
      for (i = s1; i <= e1; i++) {
        const prevChild = c1[i];
        if (patched >= toBePatched) {
          unmount(prevChild, parentComponent, parentSuspense, true);
          continue;
        }
        let newIndex;
        if (prevChild.key != null) {
          newIndex = keyToNewIndexMap.get(prevChild.key);
        } else {
          for (j = s2; j <= e2; j++) {
            if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
              newIndex = j;
              break;
            }
          }
        }
        if (newIndex === void 0) {
          unmount(prevChild, parentComponent, parentSuspense, true);
        } else {
          newIndexToOldIndexMap[newIndex - s2] = i + 1;
          if (newIndex >= maxNewIndexSoFar) {
            maxNewIndexSoFar = newIndex;
          } else {
            moved = true;
          }
          patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          patched++;
        }
      }
      const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
      j = increasingNewIndexSequence.length - 1;
      for (i = toBePatched - 1; i >= 0; i--) {
        const nextIndex = s2 + i;
        const nextChild = c2[nextIndex];
        const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
        if (newIndexToOldIndexMap[i] === 0) {
          patch(null, nextChild, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (moved) {
          if (j < 0 || i !== increasingNewIndexSequence[j]) {
            move(nextChild, container, anchor, 2);
          } else {
            j--;
          }
        }
      }
    }
  };
  const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
    const { el, type: type4, transition, children, shapeFlag } = vnode;
    if (shapeFlag & 6) {
      move(vnode.component.subTree, container, anchor, moveType);
      return;
    }
    if (shapeFlag & 128) {
      vnode.suspense.move(container, anchor, moveType);
      return;
    }
    if (shapeFlag & 64) {
      type4.move(vnode, container, anchor, internals);
      return;
    }
    if (type4 === Fragment) {
      hostInsert(el, container, anchor);
      for (let i = 0; i < children.length; i++) {
        move(children[i], container, anchor, moveType);
      }
      hostInsert(vnode.anchor, container, anchor);
      return;
    }
    if (type4 === Static) {
      moveStaticNode(vnode, container, anchor);
      return;
    }
    const needTransition = moveType !== 2 && shapeFlag & 1 && transition;
    if (needTransition) {
      if (moveType === 0) {
        transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        queuePostRenderEffect(() => transition.enter(el), parentSuspense);
      } else {
        const { leave, delayLeave, afterLeave } = transition;
        const remove3 = () => hostInsert(el, container, anchor);
        const performLeave = () => {
          leave(el, () => {
            remove3();
            afterLeave && afterLeave();
          });
        };
        if (delayLeave) {
          delayLeave(el, remove3, performLeave);
        } else {
          performLeave();
        }
      }
    } else {
      hostInsert(el, container, anchor);
    }
  };
  const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
    const { type: type4, props, ref: ref2, children, dynamicChildren, shapeFlag, patchFlag, dirs } = vnode;
    if (ref2 != null) {
      setRef(ref2, null, parentSuspense, vnode, true);
    }
    if (shapeFlag & 256) {
      parentComponent.ctx.deactivate(vnode);
      return;
    }
    const shouldInvokeDirs = shapeFlag & 1 && dirs;
    const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
    let vnodeHook;
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
      invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }
    if (shapeFlag & 6) {
      unmountComponent(vnode.component, parentSuspense, doRemove);
    } else {
      if (shapeFlag & 128) {
        vnode.suspense.unmount(parentSuspense, doRemove);
        return;
      }
      if (shouldInvokeDirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
      }
      if (shapeFlag & 64) {
        vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
      } else if (dynamicChildren && (type4 !== Fragment || patchFlag > 0 && patchFlag & 64)) {
        unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
      } else if (type4 === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
        unmountChildren(children, parentComponent, parentSuspense);
      }
      if (doRemove) {
        remove2(vnode);
      }
    }
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
      }, parentSuspense);
    }
  };
  const remove2 = (vnode) => {
    const { type: type4, el, anchor, transition } = vnode;
    if (type4 === Fragment) {
      {
        removeFragment(el, anchor);
      }
      return;
    }
    if (type4 === Static) {
      removeStaticNode(vnode);
      return;
    }
    const performRemove = () => {
      hostRemove(el);
      if (transition && !transition.persisted && transition.afterLeave) {
        transition.afterLeave();
      }
    };
    if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
      const { leave, delayLeave } = transition;
      const performLeave = () => leave(el, performRemove);
      if (delayLeave) {
        delayLeave(vnode.el, performRemove, performLeave);
      } else {
        performLeave();
      }
    } else {
      performRemove();
    }
  };
  const removeFragment = (cur, end) => {
    let next;
    while (cur !== end) {
      next = hostNextSibling(cur);
      hostRemove(cur);
      cur = next;
    }
    hostRemove(end);
  };
  const unmountComponent = (instance2, parentSuspense, doRemove) => {
    const { bum, scope, update, subTree, um } = instance2;
    if (bum) {
      invokeArrayFns(bum);
    }
    scope.stop();
    if (update) {
      update.active = false;
      unmount(subTree, instance2, parentSuspense, doRemove);
    }
    if (um) {
      queuePostRenderEffect(um, parentSuspense);
    }
    queuePostRenderEffect(() => {
      instance2.isUnmounted = true;
    }, parentSuspense);
    if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance2.asyncDep && !instance2.asyncResolved && instance2.suspenseId === parentSuspense.pendingId) {
      parentSuspense.deps--;
      if (parentSuspense.deps === 0) {
        parentSuspense.resolve();
      }
    }
  };
  const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
    for (let i = start; i < children.length; i++) {
      unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
    }
  };
  const getNextHostNode = (vnode) => {
    if (vnode.shapeFlag & 6) {
      return getNextHostNode(vnode.component.subTree);
    }
    if (vnode.shapeFlag & 128) {
      return vnode.suspense.next();
    }
    return hostNextSibling(vnode.anchor || vnode.el);
  };
  const render2 = (vnode, container, isSVG) => {
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true);
      }
    } else {
      patch(container._vnode || null, vnode, container, null, null, null, isSVG);
    }
    flushPostFlushCbs();
    container._vnode = vnode;
  };
  const internals = {
    p: patch,
    um: unmount,
    m: move,
    r: remove2,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options
  };
  let hydrate;
  let hydrateNode;
  if (createHydrationFns) {
    [hydrate, hydrateNode] = createHydrationFns(internals);
  }
  return {
    render: render2,
    hydrate,
    createApp: createAppAPI(render2, hydrate)
  };
}
function toggleRecurse({ effect, update }, allowed) {
  effect.allowRecurse = update.allowRecurse = allowed;
}
function traverseStaticChildren(n1, n2, shallow = false) {
  const ch1 = n1.children;
  const ch2 = n2.children;
  if (isArray$9(ch1) && isArray$9(ch2)) {
    for (let i = 0; i < ch1.length; i++) {
      const c1 = ch1[i];
      let c2 = ch2[i];
      if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
        if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
          c2 = ch2[i] = cloneIfMounted(ch2[i]);
          c2.el = c1.el;
        }
        if (!shallow)
          traverseStaticChildren(c1, c2);
      }
    }
  }
}
function getSequence(arr) {
  const p2 = arr.slice();
  const result = [0];
  let i, j, u, v, c;
  const len = arr.length;
  for (i = 0; i < len; i++) {
    const arrI = arr[i];
    if (arrI !== 0) {
      j = result[result.length - 1];
      if (arr[j] < arrI) {
        p2[i] = j;
        result.push(i);
        continue;
      }
      u = 0;
      v = result.length - 1;
      while (u < v) {
        c = u + v >> 1;
        if (arr[result[c]] < arrI) {
          u = c + 1;
        } else {
          v = c;
        }
      }
      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p2[i] = result[u - 1];
        }
        result[u] = i;
      }
    }
  }
  u = result.length;
  v = result[u - 1];
  while (u-- > 0) {
    result[u] = v;
    v = p2[v];
  }
  return result;
}
const isTeleport = (type4) => type4.__isTeleport;
const isTeleportDisabled = (props) => props && (props.disabled || props.disabled === "");
const isTargetSVG = (target) => typeof SVGElement !== "undefined" && target instanceof SVGElement;
const resolveTarget = (props, select) => {
  const targetSelector = props && props.to;
  if (isString$2(targetSelector)) {
    if (!select) {
      return null;
    } else {
      const target = select(targetSelector);
      return target;
    }
  } else {
    return targetSelector;
  }
};
const TeleportImpl = {
  __isTeleport: true,
  process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals) {
    const { mc: mountChildren, pc: patchChildren, pbc: patchBlockChildren, o: { insert, querySelector, createText, createComment } } = internals;
    const disabled = isTeleportDisabled(n2.props);
    let { shapeFlag, children, dynamicChildren } = n2;
    if (n1 == null) {
      const placeholder = n2.el = createText("");
      const mainAnchor = n2.anchor = createText("");
      insert(placeholder, container, anchor);
      insert(mainAnchor, container, anchor);
      const target = n2.target = resolveTarget(n2.props, querySelector);
      const targetAnchor = n2.targetAnchor = createText("");
      if (target) {
        insert(targetAnchor, target);
        isSVG = isSVG || isTargetSVG(target);
      }
      const mount = (container2, anchor2) => {
        if (shapeFlag & 16) {
          mountChildren(children, container2, anchor2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
      };
      if (disabled) {
        mount(container, mainAnchor);
      } else if (target) {
        mount(target, targetAnchor);
      }
    } else {
      n2.el = n1.el;
      const mainAnchor = n2.anchor = n1.anchor;
      const target = n2.target = n1.target;
      const targetAnchor = n2.targetAnchor = n1.targetAnchor;
      const wasDisabled = isTeleportDisabled(n1.props);
      const currentContainer = wasDisabled ? container : target;
      const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
      isSVG = isSVG || isTargetSVG(target);
      if (dynamicChildren) {
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, currentContainer, parentComponent, parentSuspense, isSVG, slotScopeIds);
        traverseStaticChildren(n1, n2, true);
      } else if (!optimized) {
        patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, false);
      }
      if (disabled) {
        if (!wasDisabled) {
          moveTeleport(n2, container, mainAnchor, internals, 1);
        }
      } else {
        if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
          const nextTarget = n2.target = resolveTarget(n2.props, querySelector);
          if (nextTarget) {
            moveTeleport(n2, nextTarget, null, internals, 0);
          }
        } else if (wasDisabled) {
          moveTeleport(n2, target, targetAnchor, internals, 1);
        }
      }
    }
  },
  remove(vnode, parentComponent, parentSuspense, optimized, { um: unmount, o: { remove: hostRemove } }, doRemove) {
    const { shapeFlag, children, anchor, targetAnchor, target, props } = vnode;
    if (target) {
      hostRemove(targetAnchor);
    }
    if (doRemove || !isTeleportDisabled(props)) {
      hostRemove(anchor);
      if (shapeFlag & 16) {
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          unmount(child, parentComponent, parentSuspense, true, !!child.dynamicChildren);
        }
      }
    }
  },
  move: moveTeleport,
  hydrate: hydrateTeleport
};
function moveTeleport(vnode, container, parentAnchor, { o: { insert }, m: move }, moveType = 2) {
  if (moveType === 0) {
    insert(vnode.targetAnchor, container, parentAnchor);
  }
  const { el, anchor, shapeFlag, children, props } = vnode;
  const isReorder = moveType === 2;
  if (isReorder) {
    insert(el, container, parentAnchor);
  }
  if (!isReorder || isTeleportDisabled(props)) {
    if (shapeFlag & 16) {
      for (let i = 0; i < children.length; i++) {
        move(children[i], container, parentAnchor, 2);
      }
    }
  }
  if (isReorder) {
    insert(anchor, container, parentAnchor);
  }
}
function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, { o: { nextSibling, parentNode, querySelector } }, hydrateChildren) {
  const target = vnode.target = resolveTarget(vnode.props, querySelector);
  if (target) {
    const targetNode = target._lpa || target.firstChild;
    if (vnode.shapeFlag & 16) {
      if (isTeleportDisabled(vnode.props)) {
        vnode.anchor = hydrateChildren(nextSibling(node), vnode, parentNode(node), parentComponent, parentSuspense, slotScopeIds, optimized);
        vnode.targetAnchor = targetNode;
      } else {
        vnode.anchor = nextSibling(node);
        let targetAnchor = targetNode;
        while (targetAnchor) {
          targetAnchor = nextSibling(targetAnchor);
          if (targetAnchor && targetAnchor.nodeType === 8 && targetAnchor.data === "teleport anchor") {
            vnode.targetAnchor = targetAnchor;
            target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
            break;
          }
        }
        hydrateChildren(targetNode, vnode, target, parentComponent, parentSuspense, slotScopeIds, optimized);
      }
    }
  }
  return vnode.anchor && nextSibling(vnode.anchor);
}
const Teleport = TeleportImpl;
const Fragment = Symbol(void 0);
const Text = Symbol(void 0);
const Comment = Symbol(void 0);
const Static = Symbol(void 0);
const blockStack = [];
let currentBlock = null;
function openBlock(disableTracking = false) {
  blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
}
let isBlockTreeEnabled = 1;
function setBlockTracking(value) {
  isBlockTreeEnabled += value;
}
function setupBlock(vnode) {
  vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
  closeBlock();
  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(vnode);
  }
  return vnode;
}
function createElementBlock(type4, props, children, patchFlag, dynamicProps, shapeFlag) {
  return setupBlock(createBaseVNode(type4, props, children, patchFlag, dynamicProps, shapeFlag, true));
}
function createBlock(type4, props, children, patchFlag, dynamicProps) {
  return setupBlock(createVNode(type4, props, children, patchFlag, dynamicProps, true));
}
function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
  return n1.type === n2.type && n1.key === n2.key;
}
const InternalObjectKey = `__vInternal`;
const normalizeKey = ({ key }) => key != null ? key : null;
const normalizeRef = ({ ref: ref2, ref_key, ref_for }) => {
  return ref2 != null ? isString$2(ref2) || isRef(ref2) || isFunction$4(ref2) ? { i: currentRenderingInstance, r: ref2, k: ref_key, f: !!ref_for } : ref2 : null;
};
function createBaseVNode(type4, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type4 === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
  const vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type: type4,
    props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag,
    patchFlag,
    dynamicProps,
    dynamicChildren: null,
    appContext: null
  };
  if (needFullChildrenNormalization) {
    normalizeChildren(vnode, children);
    if (shapeFlag & 128) {
      type4.normalize(vnode);
    }
  } else if (children) {
    vnode.shapeFlag |= isString$2(children) ? 8 : 16;
  }
  if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock && (vnode.patchFlag > 0 || shapeFlag & 6) && vnode.patchFlag !== 32) {
    currentBlock.push(vnode);
  }
  return vnode;
}
const createVNode = _createVNode;
function _createVNode(type4, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
  if (!type4 || type4 === NULL_DYNAMIC_COMPONENT) {
    type4 = Comment;
  }
  if (isVNode(type4)) {
    const cloned = cloneVNode(type4, props, true);
    if (children) {
      normalizeChildren(cloned, children);
    }
    if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
      if (cloned.shapeFlag & 6) {
        currentBlock[currentBlock.indexOf(type4)] = cloned;
      } else {
        currentBlock.push(cloned);
      }
    }
    cloned.patchFlag |= -2;
    return cloned;
  }
  if (isClassComponent(type4)) {
    type4 = type4.__vccOpts;
  }
  if (props) {
    props = guardReactiveProps(props);
    let { class: klass, style } = props;
    if (klass && !isString$2(klass)) {
      props.class = normalizeClass(klass);
    }
    if (isObject$6(style)) {
      if (isProxy(style) && !isArray$9(style)) {
        style = extend$1({}, style);
      }
      props.style = normalizeStyle(style);
    }
  }
  const shapeFlag = isString$2(type4) ? 1 : isSuspense(type4) ? 128 : isTeleport(type4) ? 64 : isObject$6(type4) ? 4 : isFunction$4(type4) ? 2 : 0;
  return createBaseVNode(type4, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
}
function guardReactiveProps(props) {
  if (!props)
    return null;
  return isProxy(props) || InternalObjectKey in props ? extend$1({}, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false) {
  const { props, ref: ref2, patchFlag, children } = vnode;
  const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  const cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ? mergeRef && ref2 ? isArray$9(ref2) ? ref2.concat(normalizeRef(extraProps)) : [ref2, normalizeRef(extraProps)] : normalizeRef(extraProps) : ref2,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children,
    target: vnode.target,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition: vnode.transition,
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    el: vnode.el,
    anchor: vnode.anchor
  };
  return cloned;
}
function createTextVNode(text = " ", flag = 0) {
  return createVNode(Text, null, text, flag);
}
function createStaticVNode(content, numberOfNodes) {
  const vnode = createVNode(Static, null, content);
  vnode.staticCount = numberOfNodes;
  return vnode;
}
function createCommentVNode(text = "", asBlock = false) {
  return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
  if (child == null || typeof child === "boolean") {
    return createVNode(Comment);
  } else if (isArray$9(child)) {
    return createVNode(
      Fragment,
      null,
      child.slice()
    );
  } else if (typeof child === "object") {
    return cloneIfMounted(child);
  } else {
    return createVNode(Text, null, String(child));
  }
}
function cloneIfMounted(child) {
  return child.el === null || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
  let type4 = 0;
  const { shapeFlag } = vnode;
  if (children == null) {
    children = null;
  } else if (isArray$9(children)) {
    type4 = 16;
  } else if (typeof children === "object") {
    if (shapeFlag & (1 | 64)) {
      const slot = children.default;
      if (slot) {
        slot._c && (slot._d = false);
        normalizeChildren(vnode, slot());
        slot._c && (slot._d = true);
      }
      return;
    } else {
      type4 = 32;
      const slotFlag = children._;
      if (!slotFlag && !(InternalObjectKey in children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3 && currentRenderingInstance) {
        if (currentRenderingInstance.slots._ === 1) {
          children._ = 1;
        } else {
          children._ = 2;
          vnode.patchFlag |= 1024;
        }
      }
    }
  } else if (isFunction$4(children)) {
    children = { default: children, _ctx: currentRenderingInstance };
    type4 = 32;
  } else {
    children = String(children);
    if (shapeFlag & 64) {
      type4 = 16;
      children = [createTextVNode(children)];
    } else {
      type4 = 8;
    }
  }
  vnode.children = children;
  vnode.shapeFlag |= type4;
}
function mergeProps(...args) {
  const ret = {};
  for (let i = 0; i < args.length; i++) {
    const toMerge = args[i];
    for (const key in toMerge) {
      if (key === "class") {
        if (ret.class !== toMerge.class) {
          ret.class = normalizeClass([ret.class, toMerge.class]);
        }
      } else if (key === "style") {
        ret.style = normalizeStyle([ret.style, toMerge.style]);
      } else if (isOn(key)) {
        const existing = ret[key];
        const incoming = toMerge[key];
        if (incoming && existing !== incoming && !(isArray$9(existing) && existing.includes(incoming))) {
          ret[key] = existing ? [].concat(existing, incoming) : incoming;
        }
      } else if (key !== "") {
        ret[key] = toMerge[key];
      }
    }
  }
  return ret;
}
function invokeVNodeHook(hook, instance2, vnode, prevVNode = null) {
  callWithAsyncErrorHandling(hook, instance2, 7, [
    vnode,
    prevVNode
  ]);
}
const emptyAppContext = createAppContext();
let uid$1 = 0;
function createComponentInstance(vnode, parent, suspense) {
  const type4 = vnode.type;
  const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  const instance2 = {
    uid: uid$1++,
    vnode,
    type: type4,
    parent,
    appContext,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new EffectScope(true),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    accessCache: null,
    renderCache: [],
    components: null,
    directives: null,
    propsOptions: normalizePropsOptions(type4, appContext),
    emitsOptions: normalizeEmitsOptions(type4, appContext),
    emit: null,
    emitted: null,
    propsDefaults: EMPTY_OBJ,
    inheritAttrs: type4.inheritAttrs,
    ctx: EMPTY_OBJ,
    data: EMPTY_OBJ,
    props: EMPTY_OBJ,
    attrs: EMPTY_OBJ,
    slots: EMPTY_OBJ,
    refs: EMPTY_OBJ,
    setupState: EMPTY_OBJ,
    setupContext: null,
    suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  {
    instance2.ctx = { _: instance2 };
  }
  instance2.root = parent ? parent.root : instance2;
  instance2.emit = emit$1.bind(null, instance2);
  if (vnode.ce) {
    vnode.ce(instance2);
  }
  return instance2;
}
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
const setCurrentInstance = (instance2) => {
  currentInstance = instance2;
  instance2.scope.on();
};
const unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off();
  currentInstance = null;
};
function isStatefulComponent(instance2) {
  return instance2.vnode.shapeFlag & 4;
}
let isInSSRComponentSetup = false;
function setupComponent(instance2, isSSR = false) {
  isInSSRComponentSetup = isSSR;
  const { props, children } = instance2.vnode;
  const isStateful = isStatefulComponent(instance2);
  initProps(instance2, props, isStateful, isSSR);
  initSlots(instance2, children);
  const setupResult = isStateful ? setupStatefulComponent(instance2, isSSR) : void 0;
  isInSSRComponentSetup = false;
  return setupResult;
}
function setupStatefulComponent(instance2, isSSR) {
  const Component = instance2.type;
  instance2.accessCache = /* @__PURE__ */ Object.create(null);
  instance2.proxy = markRaw(new Proxy(instance2.ctx, PublicInstanceProxyHandlers));
  const { setup } = Component;
  if (setup) {
    const setupContext = instance2.setupContext = setup.length > 1 ? createSetupContext(instance2) : null;
    setCurrentInstance(instance2);
    pauseTracking();
    const setupResult = callWithErrorHandling(setup, instance2, 0, [instance2.props, setupContext]);
    resetTracking();
    unsetCurrentInstance();
    if (isPromise(setupResult)) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
      if (isSSR) {
        return setupResult.then((resolvedResult) => {
          handleSetupResult(instance2, resolvedResult, isSSR);
        }).catch((e) => {
          handleError(e, instance2, 0);
        });
      } else {
        instance2.asyncDep = setupResult;
      }
    } else {
      handleSetupResult(instance2, setupResult, isSSR);
    }
  } else {
    finishComponentSetup(instance2, isSSR);
  }
}
function handleSetupResult(instance2, setupResult, isSSR) {
  if (isFunction$4(setupResult)) {
    if (instance2.type.__ssrInlineRender) {
      instance2.ssrRender = setupResult;
    } else {
      instance2.render = setupResult;
    }
  } else if (isObject$6(setupResult)) {
    instance2.setupState = proxyRefs(setupResult);
  } else
    ;
  finishComponentSetup(instance2, isSSR);
}
let compile;
function finishComponentSetup(instance2, isSSR, skipOptions) {
  const Component = instance2.type;
  if (!instance2.render) {
    if (!isSSR && compile && !Component.render) {
      const template = Component.template;
      if (template) {
        const { isCustomElement, compilerOptions } = instance2.appContext.config;
        const { delimiters, compilerOptions: componentCompilerOptions } = Component;
        const finalCompilerOptions = extend$1(extend$1({
          isCustomElement,
          delimiters
        }, compilerOptions), componentCompilerOptions);
        Component.render = compile(template, finalCompilerOptions);
      }
    }
    instance2.render = Component.render || NOOP;
  }
  {
    setCurrentInstance(instance2);
    pauseTracking();
    applyOptions(instance2);
    resetTracking();
    unsetCurrentInstance();
  }
}
function createAttrsProxy(instance2) {
  return new Proxy(instance2.attrs, {
    get(target, key) {
      track(instance2, "get", "$attrs");
      return target[key];
    }
  });
}
function createSetupContext(instance2) {
  const expose = (exposed) => {
    instance2.exposed = exposed || {};
  };
  let attrs;
  {
    return {
      get attrs() {
        return attrs || (attrs = createAttrsProxy(instance2));
      },
      slots: instance2.slots,
      emit: instance2.emit,
      expose
    };
  }
}
function getExposeProxy(instance2) {
  if (instance2.exposed) {
    return instance2.exposeProxy || (instance2.exposeProxy = new Proxy(proxyRefs(markRaw(instance2.exposed)), {
      get(target, key) {
        if (key in target) {
          return target[key];
        } else if (key in publicPropertiesMap) {
          return publicPropertiesMap[key](instance2);
        }
      }
    }));
  }
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str) => str.replace(classifyRE, (c) => c.toUpperCase()).replace(/[-_]/g, "");
function getComponentName(Component, includeInferred = true) {
  return isFunction$4(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
function formatComponentName(instance2, Component, isRoot = false) {
  let name = getComponentName(Component);
  if (!name && Component.__file) {
    const match = Component.__file.match(/([^/\\]+)\.\w+$/);
    if (match) {
      name = match[1];
    }
  }
  if (!name && instance2 && instance2.parent) {
    const inferFromRegistry = (registry) => {
      for (const key in registry) {
        if (registry[key] === Component) {
          return key;
        }
      }
    };
    name = inferFromRegistry(instance2.components || instance2.parent.type.components) || inferFromRegistry(instance2.appContext.components);
  }
  return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent(value) {
  return isFunction$4(value) && "__vccOpts" in value;
}
const computed = (getterOrOptions, debugOptions) => {
  return computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
};
function useAttrs$1() {
  return getContext().attrs;
}
function getContext() {
  const i = getCurrentInstance();
  return i.setupContext || (i.setupContext = createSetupContext(i));
}
function h(type4, propsOrChildren, children) {
  const l = arguments.length;
  if (l === 2) {
    if (isObject$6(propsOrChildren) && !isArray$9(propsOrChildren)) {
      if (isVNode(propsOrChildren)) {
        return createVNode(type4, null, [propsOrChildren]);
      }
      return createVNode(type4, propsOrChildren);
    } else {
      return createVNode(type4, null, propsOrChildren);
    }
  } else {
    if (l > 3) {
      children = Array.prototype.slice.call(arguments, 2);
    } else if (l === 3 && isVNode(children)) {
      children = [children];
    }
    return createVNode(type4, propsOrChildren, children);
  }
}
const version = "3.2.37";
const svgNS = "http://www.w3.org/2000/svg";
const doc = typeof document !== "undefined" ? document : null;
const templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
const nodeOps = {
  insert: (child, parent, anchor) => {
    parent.insertBefore(child, anchor || null);
  },
  remove: (child) => {
    const parent = child.parentNode;
    if (parent) {
      parent.removeChild(child);
    }
  },
  createElement: (tag, isSVG, is, props) => {
    const el = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? { is } : void 0);
    if (tag === "select" && props && props.multiple != null) {
      el.setAttribute("multiple", props.multiple);
    }
    return el;
  },
  createText: (text) => doc.createTextNode(text),
  createComment: (text) => doc.createComment(text),
  setText: (node, text) => {
    node.nodeValue = text;
  },
  setElementText: (el, text) => {
    el.textContent = text;
  },
  parentNode: (node) => node.parentNode,
  nextSibling: (node) => node.nextSibling,
  querySelector: (selector) => doc.querySelector(selector),
  setScopeId(el, id) {
    el.setAttribute(id, "");
  },
  cloneNode(el) {
    const cloned = el.cloneNode(true);
    if (`_value` in el) {
      cloned._value = el._value;
    }
    return cloned;
  },
  insertStaticContent(content, parent, anchor, isSVG, start, end) {
    const before = anchor ? anchor.previousSibling : parent.lastChild;
    if (start && (start === end || start.nextSibling)) {
      while (true) {
        parent.insertBefore(start.cloneNode(true), anchor);
        if (start === end || !(start = start.nextSibling))
          break;
      }
    } else {
      templateContainer.innerHTML = isSVG ? `<svg>${content}</svg>` : content;
      const template = templateContainer.content;
      if (isSVG) {
        const wrapper = template.firstChild;
        while (wrapper.firstChild) {
          template.appendChild(wrapper.firstChild);
        }
        template.removeChild(wrapper);
      }
      parent.insertBefore(template, anchor);
    }
    return [
      before ? before.nextSibling : parent.firstChild,
      anchor ? anchor.previousSibling : parent.lastChild
    ];
  }
};
function patchClass(el, value, isSVG) {
  const transitionClasses = el._vtc;
  if (transitionClasses) {
    value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
  }
  if (value == null) {
    el.removeAttribute("class");
  } else if (isSVG) {
    el.setAttribute("class", value);
  } else {
    el.className = value;
  }
}
function patchStyle(el, prev, next) {
  const style = el.style;
  const isCssString = isString$2(next);
  if (next && !isCssString) {
    for (const key in next) {
      setStyle(style, key, next[key]);
    }
    if (prev && !isString$2(prev)) {
      for (const key in prev) {
        if (next[key] == null) {
          setStyle(style, key, "");
        }
      }
    }
  } else {
    const currentDisplay = style.display;
    if (isCssString) {
      if (prev !== next) {
        style.cssText = next;
      }
    } else if (prev) {
      el.removeAttribute("style");
    }
    if ("_vod" in el) {
      style.display = currentDisplay;
    }
  }
}
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
  if (isArray$9(val)) {
    val.forEach((v) => setStyle(style, name, v));
  } else {
    if (val == null)
      val = "";
    if (name.startsWith("--")) {
      style.setProperty(name, val);
    } else {
      const prefixed = autoPrefix(style, name);
      if (importantRE.test(val)) {
        style.setProperty(hyphenate(prefixed), val.replace(importantRE, ""), "important");
      } else {
        style[prefixed] = val;
      }
    }
  }
}
const prefixes = ["Webkit", "Moz", "ms"];
const prefixCache = {};
function autoPrefix(style, rawName) {
  const cached = prefixCache[rawName];
  if (cached) {
    return cached;
  }
  let name = camelize(rawName);
  if (name !== "filter" && name in style) {
    return prefixCache[rawName] = name;
  }
  name = capitalize(name);
  for (let i = 0; i < prefixes.length; i++) {
    const prefixed = prefixes[i] + name;
    if (prefixed in style) {
      return prefixCache[rawName] = prefixed;
    }
  }
  return rawName;
}
const xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el, key, value, isSVG, instance2) {
  if (isSVG && key.startsWith("xlink:")) {
    if (value == null) {
      el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    const isBoolean = isSpecialBooleanAttr(key);
    if (value == null || isBoolean && !includeBooleanAttr(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, isBoolean ? "" : value);
    }
  }
}
function patchDOMProp(el, key, value, prevChildren, parentComponent, parentSuspense, unmountChildren) {
  if (key === "innerHTML" || key === "textContent") {
    if (prevChildren) {
      unmountChildren(prevChildren, parentComponent, parentSuspense);
    }
    el[key] = value == null ? "" : value;
    return;
  }
  if (key === "value" && el.tagName !== "PROGRESS" && !el.tagName.includes("-")) {
    el._value = value;
    const newValue = value == null ? "" : value;
    if (el.value !== newValue || el.tagName === "OPTION") {
      el.value = newValue;
    }
    if (value == null) {
      el.removeAttribute(key);
    }
    return;
  }
  let needRemove = false;
  if (value === "" || value == null) {
    const type4 = typeof el[key];
    if (type4 === "boolean") {
      value = includeBooleanAttr(value);
    } else if (value == null && type4 === "string") {
      value = "";
      needRemove = true;
    } else if (type4 === "number") {
      value = 0;
      needRemove = true;
    }
  }
  try {
    el[key] = value;
  } catch (e) {
  }
  needRemove && el.removeAttribute(key);
}
const [_getNow, skipTimestampCheck] = /* @__PURE__ */ (() => {
  let _getNow2 = Date.now;
  let skipTimestampCheck2 = false;
  if (typeof window !== "undefined") {
    if (Date.now() > document.createEvent("Event").timeStamp) {
      _getNow2 = performance.now.bind(performance);
    }
    const ffMatch = navigator.userAgent.match(/firefox\/(\d+)/i);
    skipTimestampCheck2 = !!(ffMatch && Number(ffMatch[1]) <= 53);
  }
  return [_getNow2, skipTimestampCheck2];
})();
let cachedNow = 0;
const p = /* @__PURE__ */ Promise.resolve();
const reset$1 = () => {
  cachedNow = 0;
};
const getNow = () => cachedNow || (p.then(reset$1), cachedNow = _getNow());
function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}
function patchEvent(el, rawName, prevValue, nextValue, instance2 = null) {
  const invokers = el._vei || (el._vei = {});
  const existingInvoker = invokers[rawName];
  if (nextValue && existingInvoker) {
    existingInvoker.value = nextValue;
  } else {
    const [name, options] = parseName(rawName);
    if (nextValue) {
      const invoker = invokers[rawName] = createInvoker(nextValue, instance2);
      addEventListener(el, name, invoker, options);
    } else if (existingInvoker) {
      removeEventListener(el, name, existingInvoker, options);
      invokers[rawName] = void 0;
    }
  }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
  let options;
  if (optionsModifierRE.test(name)) {
    options = {};
    let m;
    while (m = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m[0].length);
      options[m[0].toLowerCase()] = true;
    }
  }
  return [hyphenate(name.slice(2)), options];
}
function createInvoker(initialValue, instance2) {
  const invoker = (e) => {
    const timeStamp = e.timeStamp || _getNow();
    if (skipTimestampCheck || timeStamp >= invoker.attached - 1) {
      callWithAsyncErrorHandling(patchStopImmediatePropagation(e, invoker.value), instance2, 5, [e]);
    }
  };
  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}
function patchStopImmediatePropagation(e, value) {
  if (isArray$9(value)) {
    const originalStop = e.stopImmediatePropagation;
    e.stopImmediatePropagation = () => {
      originalStop.call(e);
      e._stopped = true;
    };
    return value.map((fn2) => (e2) => !e2._stopped && fn2 && fn2(e2));
  } else {
    return value;
  }
}
const nativeOnRE = /^on[a-z]/;
const patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
  if (key === "class") {
    patchClass(el, nextValue, isSVG);
  } else if (key === "style") {
    patchStyle(el, prevValue, nextValue);
  } else if (isOn(key)) {
    if (!isModelListener(key)) {
      patchEvent(el, key, prevValue, nextValue, parentComponent);
    }
  } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
    patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
  } else {
    if (key === "true-value") {
      el._trueValue = nextValue;
    } else if (key === "false-value") {
      el._falseValue = nextValue;
    }
    patchAttr(el, key, nextValue, isSVG);
  }
};
function shouldSetAsProp(el, key, value, isSVG) {
  if (isSVG) {
    if (key === "innerHTML" || key === "textContent") {
      return true;
    }
    if (key in el && nativeOnRE.test(key) && isFunction$4(value)) {
      return true;
    }
    return false;
  }
  if (key === "spellcheck" || key === "draggable" || key === "translate") {
    return false;
  }
  if (key === "form") {
    return false;
  }
  if (key === "list" && el.tagName === "INPUT") {
    return false;
  }
  if (key === "type" && el.tagName === "TEXTAREA") {
    return false;
  }
  if (nativeOnRE.test(key) && isString$2(value)) {
    return false;
  }
  return key in el;
}
function useCssVars(getter) {
  const instance2 = getCurrentInstance();
  if (!instance2) {
    return;
  }
  const setVars = () => setVarsOnVNode(instance2.subTree, getter(instance2.proxy));
  watchPostEffect(setVars);
  onMounted(() => {
    const ob = new MutationObserver(setVars);
    ob.observe(instance2.subTree.el.parentNode, { childList: true });
    onUnmounted(() => ob.disconnect());
  });
}
function setVarsOnVNode(vnode, vars) {
  if (vnode.shapeFlag & 128) {
    const suspense = vnode.suspense;
    vnode = suspense.activeBranch;
    if (suspense.pendingBranch && !suspense.isHydrating) {
      suspense.effects.push(() => {
        setVarsOnVNode(suspense.activeBranch, vars);
      });
    }
  }
  while (vnode.component) {
    vnode = vnode.component.subTree;
  }
  if (vnode.shapeFlag & 1 && vnode.el) {
    setVarsOnNode(vnode.el, vars);
  } else if (vnode.type === Fragment) {
    vnode.children.forEach((c) => setVarsOnVNode(c, vars));
  } else if (vnode.type === Static) {
    let { el, anchor } = vnode;
    while (el) {
      setVarsOnNode(el, vars);
      if (el === anchor)
        break;
      el = el.nextSibling;
    }
  }
}
function setVarsOnNode(el, vars) {
  if (el.nodeType === 1) {
    const style = el.style;
    for (const key in vars) {
      style.setProperty(`--${key}`, vars[key]);
    }
  }
}
const TRANSITION = "transition";
const ANIMATION = "animation";
const Transition = (props, { slots }) => h(BaseTransition, resolveTransitionProps(props), slots);
Transition.displayName = "Transition";
const DOMTransitionPropsValidators = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: true
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
Transition.props = /* @__PURE__ */ extend$1({}, BaseTransition.props, DOMTransitionPropsValidators);
const callHook = (hook, args = []) => {
  if (isArray$9(hook)) {
    hook.forEach((h2) => h2(...args));
  } else if (hook) {
    hook(...args);
  }
};
const hasExplicitCallback = (hook) => {
  return hook ? isArray$9(hook) ? hook.some((h2) => h2.length > 1) : hook.length > 1 : false;
};
function resolveTransitionProps(rawProps) {
  const baseProps = {};
  for (const key in rawProps) {
    if (!(key in DOMTransitionPropsValidators)) {
      baseProps[key] = rawProps[key];
    }
  }
  if (rawProps.css === false) {
    return baseProps;
  }
  const { name = "v", type: type4, duration, enterFromClass = `${name}-enter-from`, enterActiveClass = `${name}-enter-active`, enterToClass = `${name}-enter-to`, appearFromClass = enterFromClass, appearActiveClass = enterActiveClass, appearToClass = enterToClass, leaveFromClass = `${name}-leave-from`, leaveActiveClass = `${name}-leave-active`, leaveToClass = `${name}-leave-to` } = rawProps;
  const durations = normalizeDuration(duration);
  const enterDuration = durations && durations[0];
  const leaveDuration = durations && durations[1];
  const { onBeforeEnter, onEnter, onEnterCancelled, onLeave, onLeaveCancelled, onBeforeAppear = onBeforeEnter, onAppear = onEnter, onAppearCancelled = onEnterCancelled } = baseProps;
  const finishEnter = (el, isAppear, done) => {
    removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
    removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
    done && done();
  };
  const finishLeave = (el, done) => {
    el._isLeaving = false;
    removeTransitionClass(el, leaveFromClass);
    removeTransitionClass(el, leaveToClass);
    removeTransitionClass(el, leaveActiveClass);
    done && done();
  };
  const makeEnterHook = (isAppear) => {
    return (el, done) => {
      const hook = isAppear ? onAppear : onEnter;
      const resolve2 = () => finishEnter(el, isAppear, done);
      callHook(hook, [el, resolve2]);
      nextFrame(() => {
        removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
        addTransitionClass(el, isAppear ? appearToClass : enterToClass);
        if (!hasExplicitCallback(hook)) {
          whenTransitionEnds(el, type4, enterDuration, resolve2);
        }
      });
    };
  };
  return extend$1(baseProps, {
    onBeforeEnter(el) {
      callHook(onBeforeEnter, [el]);
      addTransitionClass(el, enterFromClass);
      addTransitionClass(el, enterActiveClass);
    },
    onBeforeAppear(el) {
      callHook(onBeforeAppear, [el]);
      addTransitionClass(el, appearFromClass);
      addTransitionClass(el, appearActiveClass);
    },
    onEnter: makeEnterHook(false),
    onAppear: makeEnterHook(true),
    onLeave(el, done) {
      el._isLeaving = true;
      const resolve2 = () => finishLeave(el, done);
      addTransitionClass(el, leaveFromClass);
      forceReflow();
      addTransitionClass(el, leaveActiveClass);
      nextFrame(() => {
        if (!el._isLeaving) {
          return;
        }
        removeTransitionClass(el, leaveFromClass);
        addTransitionClass(el, leaveToClass);
        if (!hasExplicitCallback(onLeave)) {
          whenTransitionEnds(el, type4, leaveDuration, resolve2);
        }
      });
      callHook(onLeave, [el, resolve2]);
    },
    onEnterCancelled(el) {
      finishEnter(el, false);
      callHook(onEnterCancelled, [el]);
    },
    onAppearCancelled(el) {
      finishEnter(el, true);
      callHook(onAppearCancelled, [el]);
    },
    onLeaveCancelled(el) {
      finishLeave(el);
      callHook(onLeaveCancelled, [el]);
    }
  });
}
function normalizeDuration(duration) {
  if (duration == null) {
    return null;
  } else if (isObject$6(duration)) {
    return [NumberOf(duration.enter), NumberOf(duration.leave)];
  } else {
    const n = NumberOf(duration);
    return [n, n];
  }
}
function NumberOf(val) {
  const res = toNumber$2(val);
  return res;
}
function addTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.add(c));
  (el._vtc || (el._vtc = /* @__PURE__ */ new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.remove(c));
  const { _vtc } = el;
  if (_vtc) {
    _vtc.delete(cls);
    if (!_vtc.size) {
      el._vtc = void 0;
    }
  }
}
function nextFrame(cb) {
  requestAnimationFrame(() => {
    requestAnimationFrame(cb);
  });
}
let endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve2) {
  const id = el._endId = ++endId;
  const resolveIfNotStale = () => {
    if (id === el._endId) {
      resolve2();
    }
  };
  if (explicitTimeout) {
    return setTimeout(resolveIfNotStale, explicitTimeout);
  }
  const { type: type4, timeout, propCount } = getTransitionInfo(el, expectedType);
  if (!type4) {
    return resolve2();
  }
  const endEvent = type4 + "end";
  let ended = 0;
  const end = () => {
    el.removeEventListener(endEvent, onEnd);
    resolveIfNotStale();
  };
  const onEnd = (e) => {
    if (e.target === el && ++ended >= propCount) {
      end();
    }
  };
  setTimeout(() => {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
  const styles = window.getComputedStyle(el);
  const getStyleProperties = (key) => (styles[key] || "").split(", ");
  const transitionDelays = getStyleProperties(TRANSITION + "Delay");
  const transitionDurations = getStyleProperties(TRANSITION + "Duration");
  const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  const animationDelays = getStyleProperties(ANIMATION + "Delay");
  const animationDurations = getStyleProperties(ANIMATION + "Duration");
  const animationTimeout = getTimeout(animationDelays, animationDurations);
  let type4 = null;
  let timeout = 0;
  let propCount = 0;
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type4 = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type4 = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type4 = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type4 ? type4 === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }
  const hasTransform = type4 === TRANSITION && /\b(transform|all)(,|$)/.test(styles[TRANSITION + "Property"]);
  return {
    type: type4,
    timeout,
    propCount,
    hasTransform
  };
}
function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }
  return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
}
function toMs(s) {
  return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
}
function forceReflow() {
  return document.body.offsetHeight;
}
const getModelAssigner = (vnode) => {
  const fn2 = vnode.props["onUpdate:modelValue"] || false;
  return isArray$9(fn2) ? (value) => invokeArrayFns(fn2, value) : fn2;
};
function onCompositionStart(e) {
  e.target.composing = true;
}
function onCompositionEnd(e) {
  const target = e.target;
  if (target.composing) {
    target.composing = false;
    target.dispatchEvent(new Event("input"));
  }
}
const vModelText = {
  created(el, { modifiers: { lazy, trim: trim2, number: number4 } }, vnode) {
    el._assign = getModelAssigner(vnode);
    const castToNumber = number4 || vnode.props && vnode.props.type === "number";
    addEventListener(el, lazy ? "change" : "input", (e) => {
      if (e.target.composing)
        return;
      let domValue = el.value;
      if (trim2) {
        domValue = domValue.trim();
      }
      if (castToNumber) {
        domValue = toNumber$2(domValue);
      }
      el._assign(domValue);
    });
    if (trim2) {
      addEventListener(el, "change", () => {
        el.value = el.value.trim();
      });
    }
    if (!lazy) {
      addEventListener(el, "compositionstart", onCompositionStart);
      addEventListener(el, "compositionend", onCompositionEnd);
      addEventListener(el, "change", onCompositionEnd);
    }
  },
  mounted(el, { value }) {
    el.value = value == null ? "" : value;
  },
  beforeUpdate(el, { value, modifiers: { lazy, trim: trim2, number: number4 } }, vnode) {
    el._assign = getModelAssigner(vnode);
    if (el.composing)
      return;
    if (document.activeElement === el && el.type !== "range") {
      if (lazy) {
        return;
      }
      if (trim2 && el.value.trim() === value) {
        return;
      }
      if ((number4 || el.type === "number") && toNumber$2(el.value) === value) {
        return;
      }
    }
    const newValue = value == null ? "" : value;
    if (el.value !== newValue) {
      el.value = newValue;
    }
  }
};
const systemModifiers = ["ctrl", "shift", "alt", "meta"];
const modifierGuards = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, modifiers) => systemModifiers.some((m) => e[`${m}Key`] && !modifiers.includes(m))
};
const withModifiers = (fn2, modifiers) => {
  return (event, ...args) => {
    for (let i = 0; i < modifiers.length; i++) {
      const guard = modifierGuards[modifiers[i]];
      if (guard && guard(event, modifiers))
        return;
    }
    return fn2(event, ...args);
  };
};
const keyNames = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
};
const withKeys = (fn2, modifiers) => {
  return (event) => {
    if (!("key" in event)) {
      return;
    }
    const eventKey = hyphenate(event.key);
    if (modifiers.some((k) => k === eventKey || keyNames[k] === eventKey)) {
      return fn2(event);
    }
  };
};
const vShow = {
  beforeMount(el, { value }, { transition }) {
    el._vod = el.style.display === "none" ? "" : el.style.display;
    if (transition && value) {
      transition.beforeEnter(el);
    } else {
      setDisplay(el, value);
    }
  },
  mounted(el, { value }, { transition }) {
    if (transition && value) {
      transition.enter(el);
    }
  },
  updated(el, { value, oldValue }, { transition }) {
    if (!value === !oldValue)
      return;
    if (transition) {
      if (value) {
        transition.beforeEnter(el);
        setDisplay(el, true);
        transition.enter(el);
      } else {
        transition.leave(el, () => {
          setDisplay(el, false);
        });
      }
    } else {
      setDisplay(el, value);
    }
  },
  beforeUnmount(el, { value }) {
    setDisplay(el, value);
  }
};
function setDisplay(el, value) {
  el.style.display = value ? el._vod : "none";
}
const rendererOptions = /* @__PURE__ */ extend$1({ patchProp }, nodeOps);
let renderer;
function ensureRenderer() {
  return renderer || (renderer = createRenderer(rendererOptions));
}
const render = (...args) => {
  ensureRenderer().render(...args);
};
const createApp = (...args) => {
  const app2 = ensureRenderer().createApp(...args);
  const { mount } = app2;
  app2.mount = (containerOrSelector) => {
    const container = normalizeContainer(containerOrSelector);
    if (!container)
      return;
    const component = app2._component;
    if (!isFunction$4(component) && !component.render && !component.template) {
      component.template = container.innerHTML;
    }
    container.innerHTML = "";
    const proxy = mount(container, false, container instanceof SVGElement);
    if (container instanceof Element) {
      container.removeAttribute("v-cloak");
      container.setAttribute("data-v-app", "");
    }
    return proxy;
  };
  return app2;
};
function normalizeContainer(container) {
  if (isString$2(container)) {
    const res = document.querySelector(container);
    return res;
  }
  return container;
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function fromPairs(pairs) {
  var index = -1, length = pairs == null ? 0 : pairs.length, result = {};
  while (++index < length) {
    var pair = pairs[index];
    result[pair[0]] = pair[1];
  }
  return result;
}
var fromPairs_1 = fromPairs;
class ElementPlusError extends Error {
  constructor(m) {
    super(m);
    this.name = "ElementPlusError";
  }
}
function throwError(scope, m) {
  throw new ElementPlusError(`[${scope}] ${m}`);
}
function debugWarn(scope, message2) {
}
const DEFAULT_EXCLUDE_KEYS = ["class", "style"];
const LISTENER_PREFIX = /^on[A-Z]/;
const useAttrs = (params = {}) => {
  const { excludeListeners = false, excludeKeys = [] } = params;
  const allExcludeKeys = excludeKeys.concat(DEFAULT_EXCLUDE_KEYS);
  const instance2 = getCurrentInstance();
  if (!instance2) {
    return computed(() => ({}));
  }
  return computed(() => {
    var _a2;
    return fromPairs_1(Object.entries((_a2 = instance2.proxy) == null ? void 0 : _a2.$attrs).filter(([key]) => !allExcludeKeys.includes(key) && !(excludeListeners && LISTENER_PREFIX.test(key))));
  });
};
const elFormKey = Symbol("elForm");
const elFormItemKey = Symbol("elFormItem");
const buttonGroupContextKey = Symbol("buttonGroupContextKey");
const elPaginationKey = Symbol("elPaginationKey");
const configProviderContextKey = Symbol();
const scrollbarContextKey = Symbol("scrollbarContextKey");
const wrapperKey = Symbol();
const propKey = "__elPropsReservedKey";
function buildProp(option, key) {
  if (!isObject$6(option) || !!option[propKey])
    return option;
  const { values, required: required4, default: defaultValue, type: type4, validator: validator2 } = option;
  const _validator = values || validator2 ? (val) => {
    let valid = false;
    let allowedValues = [];
    if (values) {
      allowedValues = [...values, defaultValue];
      valid || (valid = allowedValues.includes(val));
    }
    if (validator2)
      valid || (valid = validator2(val));
    if (!valid && allowedValues.length > 0) {
      const allowValuesText = [...new Set(allowedValues)].map((value) => JSON.stringify(value)).join(", ");
      warn(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ""}. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}.`);
    }
    return valid;
  } : void 0;
  return {
    type: typeof type4 === "object" && Object.getOwnPropertySymbols(type4).includes(wrapperKey) ? type4[wrapperKey] : type4,
    required: !!required4,
    default: defaultValue,
    validator: _validator,
    [propKey]: true
  };
}
const buildProps = (props) => fromPairs_1(Object.entries(props).map(([key, option]) => [
  key,
  buildProp(option, key)
]));
const definePropType = (val) => ({ [wrapperKey]: val });
const mutable = (val) => val;
const componentSize = ["large", "default", "small"];
const useProp = (name) => {
  const vm = getCurrentInstance();
  return computed(() => {
    var _a2, _b2;
    return (_b2 = (_a2 = vm.proxy) == null ? void 0 : _a2.$props[name]) != null ? _b2 : void 0;
  });
};
function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}
var _listCacheClear = listCacheClear$1;
function eq$2(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_1 = eq$2;
var eq$1 = eq_1;
function assocIndexOf$4(array4, key) {
  var length = array4.length;
  while (length--) {
    if (eq$1(array4[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var _assocIndexOf = assocIndexOf$4;
var assocIndexOf$3 = _assocIndexOf;
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete$1(key) {
  var data2 = this.__data__, index = assocIndexOf$3(data2, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data2.length - 1;
  if (index == lastIndex) {
    data2.pop();
  } else {
    splice.call(data2, index, 1);
  }
  --this.size;
  return true;
}
var _listCacheDelete = listCacheDelete$1;
var assocIndexOf$2 = _assocIndexOf;
function listCacheGet$1(key) {
  var data2 = this.__data__, index = assocIndexOf$2(data2, key);
  return index < 0 ? void 0 : data2[index][1];
}
var _listCacheGet = listCacheGet$1;
var assocIndexOf$1 = _assocIndexOf;
function listCacheHas$1(key) {
  return assocIndexOf$1(this.__data__, key) > -1;
}
var _listCacheHas = listCacheHas$1;
var assocIndexOf = _assocIndexOf;
function listCacheSet$1(key, value) {
  var data2 = this.__data__, index = assocIndexOf(data2, key);
  if (index < 0) {
    ++this.size;
    data2.push([key, value]);
  } else {
    data2[index][1] = value;
  }
  return this;
}
var _listCacheSet = listCacheSet$1;
var listCacheClear = _listCacheClear, listCacheDelete = _listCacheDelete, listCacheGet = _listCacheGet, listCacheHas = _listCacheHas, listCacheSet = _listCacheSet;
function ListCache$4(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache$4.prototype.clear = listCacheClear;
ListCache$4.prototype["delete"] = listCacheDelete;
ListCache$4.prototype.get = listCacheGet;
ListCache$4.prototype.has = listCacheHas;
ListCache$4.prototype.set = listCacheSet;
var _ListCache = ListCache$4;
var ListCache$3 = _ListCache;
function stackClear$1() {
  this.__data__ = new ListCache$3();
  this.size = 0;
}
var _stackClear = stackClear$1;
function stackDelete$1(key) {
  var data2 = this.__data__, result = data2["delete"](key);
  this.size = data2.size;
  return result;
}
var _stackDelete = stackDelete$1;
function stackGet$1(key) {
  return this.__data__.get(key);
}
var _stackGet = stackGet$1;
function stackHas$1(key) {
  return this.__data__.has(key);
}
var _stackHas = stackHas$1;
var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$1;
var freeGlobal = _freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root$9 = freeGlobal || freeSelf || Function("return this")();
var _root = root$9;
var root$8 = _root;
var Symbol$5 = root$8.Symbol;
var _Symbol = Symbol$5;
var Symbol$4 = _Symbol;
var objectProto$b = Object.prototype;
var hasOwnProperty$8 = objectProto$b.hasOwnProperty;
var nativeObjectToString$1 = objectProto$b.toString;
var symToStringTag$1 = Symbol$4 ? Symbol$4.toStringTag : void 0;
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$8.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var _getRawTag = getRawTag$1;
var objectProto$a = Object.prototype;
var nativeObjectToString = objectProto$a.toString;
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}
var _objectToString = objectToString$1;
var Symbol$3 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$3 ? Symbol$3.toStringTag : void 0;
function baseGetTag$5(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
var _baseGetTag = baseGetTag$5;
function isObject$5(value) {
  var type4 = typeof value;
  return value != null && (type4 == "object" || type4 == "function");
}
var isObject_1 = isObject$5;
var baseGetTag$4 = _baseGetTag, isObject$4 = isObject_1;
var asyncTag = "[object AsyncFunction]", funcTag$1 = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$3(value) {
  if (!isObject$4(value)) {
    return false;
  }
  var tag = baseGetTag$4(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_1 = isFunction$3;
var root$7 = _root;
var coreJsData$1 = root$7["__core-js_shared__"];
var _coreJsData = coreJsData$1;
var coreJsData = _coreJsData;
var maskSrcKey = function() {
  var uid2 = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid2 ? "Symbol(src)_1." + uid2 : "";
}();
function isMasked$1(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var _isMasked = isMasked$1;
var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;
function toSource$2(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var _toSource = toSource$2;
var isFunction$2 = isFunction_1, isMasked = _isMasked, isObject$3 = isObject_1, toSource$1 = _toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype, objectProto$9 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString.call(hasOwnProperty$7).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative$1(value) {
  if (!isObject$3(value) || isMasked(value)) {
    return false;
  }
  var pattern4 = isFunction$2(value) ? reIsNative : reIsHostCtor;
  return pattern4.test(toSource$1(value));
}
var _baseIsNative = baseIsNative$1;
function getValue$2(object4, key) {
  return object4 == null ? void 0 : object4[key];
}
var _getValue = getValue$2;
var baseIsNative = _baseIsNative, getValue$1 = _getValue;
function getNative$6(object4, key) {
  var value = getValue$1(object4, key);
  return baseIsNative(value) ? value : void 0;
}
var _getNative = getNative$6;
var getNative$5 = _getNative, root$6 = _root;
var Map$4 = getNative$5(root$6, "Map");
var _Map = Map$4;
var getNative$4 = _getNative;
var nativeCreate$4 = getNative$4(Object, "create");
var _nativeCreate = nativeCreate$4;
var nativeCreate$3 = _nativeCreate;
function hashClear$1() {
  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
  this.size = 0;
}
var _hashClear = hashClear$1;
function hashDelete$1(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var _hashDelete = hashDelete$1;
var nativeCreate$2 = _nativeCreate;
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
var objectProto$8 = Object.prototype;
var hasOwnProperty$6 = objectProto$8.hasOwnProperty;
function hashGet$1(key) {
  var data2 = this.__data__;
  if (nativeCreate$2) {
    var result = data2[key];
    return result === HASH_UNDEFINED$2 ? void 0 : result;
  }
  return hasOwnProperty$6.call(data2, key) ? data2[key] : void 0;
}
var _hashGet = hashGet$1;
var nativeCreate$1 = _nativeCreate;
var objectProto$7 = Object.prototype;
var hasOwnProperty$5 = objectProto$7.hasOwnProperty;
function hashHas$1(key) {
  var data2 = this.__data__;
  return nativeCreate$1 ? data2[key] !== void 0 : hasOwnProperty$5.call(data2, key);
}
var _hashHas = hashHas$1;
var nativeCreate = _nativeCreate;
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet$1(key, value) {
  var data2 = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data2[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED$1 : value;
  return this;
}
var _hashSet = hashSet$1;
var hashClear = _hashClear, hashDelete = _hashDelete, hashGet = _hashGet, hashHas = _hashHas, hashSet = _hashSet;
function Hash$1(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash$1.prototype.clear = hashClear;
Hash$1.prototype["delete"] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;
var _Hash = Hash$1;
var Hash = _Hash, ListCache$2 = _ListCache, Map$3 = _Map;
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$3 || ListCache$2)(),
    "string": new Hash()
  };
}
var _mapCacheClear = mapCacheClear$1;
function isKeyable$1(value) {
  var type4 = typeof value;
  return type4 == "string" || type4 == "number" || type4 == "symbol" || type4 == "boolean" ? value !== "__proto__" : value === null;
}
var _isKeyable = isKeyable$1;
var isKeyable = _isKeyable;
function getMapData$4(map, key) {
  var data2 = map.__data__;
  return isKeyable(key) ? data2[typeof key == "string" ? "string" : "hash"] : data2.map;
}
var _getMapData = getMapData$4;
var getMapData$3 = _getMapData;
function mapCacheDelete$1(key) {
  var result = getMapData$3(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var _mapCacheDelete = mapCacheDelete$1;
var getMapData$2 = _getMapData;
function mapCacheGet$1(key) {
  return getMapData$2(this, key).get(key);
}
var _mapCacheGet = mapCacheGet$1;
var getMapData$1 = _getMapData;
function mapCacheHas$1(key) {
  return getMapData$1(this, key).has(key);
}
var _mapCacheHas = mapCacheHas$1;
var getMapData = _getMapData;
function mapCacheSet$1(key, value) {
  var data2 = getMapData(this, key), size2 = data2.size;
  data2.set(key, value);
  this.size += data2.size == size2 ? 0 : 1;
  return this;
}
var _mapCacheSet = mapCacheSet$1;
var mapCacheClear = _mapCacheClear, mapCacheDelete = _mapCacheDelete, mapCacheGet = _mapCacheGet, mapCacheHas = _mapCacheHas, mapCacheSet = _mapCacheSet;
function MapCache$3(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache$3.prototype.clear = mapCacheClear;
MapCache$3.prototype["delete"] = mapCacheDelete;
MapCache$3.prototype.get = mapCacheGet;
MapCache$3.prototype.has = mapCacheHas;
MapCache$3.prototype.set = mapCacheSet;
var _MapCache = MapCache$3;
var ListCache$1 = _ListCache, Map$2 = _Map, MapCache$2 = _MapCache;
var LARGE_ARRAY_SIZE = 200;
function stackSet$1(key, value) {
  var data2 = this.__data__;
  if (data2 instanceof ListCache$1) {
    var pairs = data2.__data__;
    if (!Map$2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data2.size;
      return this;
    }
    data2 = this.__data__ = new MapCache$2(pairs);
  }
  data2.set(key, value);
  this.size = data2.size;
  return this;
}
var _stackSet = stackSet$1;
var ListCache = _ListCache, stackClear = _stackClear, stackDelete = _stackDelete, stackGet = _stackGet, stackHas = _stackHas, stackSet = _stackSet;
function Stack$1(entries) {
  var data2 = this.__data__ = new ListCache(entries);
  this.size = data2.size;
}
Stack$1.prototype.clear = stackClear;
Stack$1.prototype["delete"] = stackDelete;
Stack$1.prototype.get = stackGet;
Stack$1.prototype.has = stackHas;
Stack$1.prototype.set = stackSet;
var _Stack = Stack$1;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd$1(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
var _setCacheAdd = setCacheAdd$1;
function setCacheHas$1(value) {
  return this.__data__.has(value);
}
var _setCacheHas = setCacheHas$1;
var MapCache$1 = _MapCache, setCacheAdd = _setCacheAdd, setCacheHas = _setCacheHas;
function SetCache$1(values) {
  var index = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache$1();
  while (++index < length) {
    this.add(values[index]);
  }
}
SetCache$1.prototype.add = SetCache$1.prototype.push = setCacheAdd;
SetCache$1.prototype.has = setCacheHas;
var _SetCache = SetCache$1;
function arraySome$1(array4, predicate) {
  var index = -1, length = array4 == null ? 0 : array4.length;
  while (++index < length) {
    if (predicate(array4[index], index, array4)) {
      return true;
    }
  }
  return false;
}
var _arraySome = arraySome$1;
function cacheHas$1(cache2, key) {
  return cache2.has(key);
}
var _cacheHas = cacheHas$1;
var SetCache = _SetCache, arraySome = _arraySome, cacheHas = _cacheHas;
var COMPARE_PARTIAL_FLAG$3 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function equalArrays$2(array4, other, bitmask, customizer, equalFunc, stack2) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, arrLength = array4.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack2.get(array4);
  var othStacked = stack2.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array4;
  }
  var index = -1, result = true, seen2 = bitmask & COMPARE_UNORDERED_FLAG$1 ? new SetCache() : void 0;
  stack2.set(array4, other);
  stack2.set(other, array4);
  while (++index < arrLength) {
    var arrValue = array4[index], othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array4, stack2) : customizer(arrValue, othValue, index, array4, other, stack2);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen2) {
      if (!arraySome(other, function(othValue2, othIndex) {
        if (!cacheHas(seen2, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack2))) {
          return seen2.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack2))) {
      result = false;
      break;
    }
  }
  stack2["delete"](array4);
  stack2["delete"](other);
  return result;
}
var _equalArrays = equalArrays$2;
var root$5 = _root;
var Uint8Array$2 = root$5.Uint8Array;
var _Uint8Array = Uint8Array$2;
function mapToArray$1(map) {
  var index = -1, result = Array(map.size);
  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}
var _mapToArray = mapToArray$1;
function setToArray$1(set2) {
  var index = -1, result = Array(set2.size);
  set2.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}
var _setToArray = setToArray$1;
var Symbol$2 = _Symbol, Uint8Array$1 = _Uint8Array, eq = eq_1, equalArrays$1 = _equalArrays, mapToArray = _mapToArray, setToArray = _setToArray;
var COMPARE_PARTIAL_FLAG$2 = 1, COMPARE_UNORDERED_FLAG = 2;
var boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]";
var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : void 0, symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : void 0;
function equalByTag$1(object4, other, tag, bitmask, customizer, equalFunc, stack2) {
  switch (tag) {
    case dataViewTag$2:
      if (object4.byteLength != other.byteLength || object4.byteOffset != other.byteOffset) {
        return false;
      }
      object4 = object4.buffer;
      other = other.buffer;
    case arrayBufferTag$1:
      if (object4.byteLength != other.byteLength || !equalFunc(new Uint8Array$1(object4), new Uint8Array$1(other))) {
        return false;
      }
      return true;
    case boolTag$1:
    case dateTag$1:
    case numberTag$1:
      return eq(+object4, +other);
    case errorTag$1:
      return object4.name == other.name && object4.message == other.message;
    case regexpTag$1:
    case stringTag$1:
      return object4 == other + "";
    case mapTag$2:
      var convert = mapToArray;
    case setTag$2:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2;
      convert || (convert = setToArray);
      if (object4.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack2.get(object4);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;
      stack2.set(object4, other);
      var result = equalArrays$1(convert(object4), convert(other), bitmask, customizer, equalFunc, stack2);
      stack2["delete"](object4);
      return result;
    case symbolTag$1:
      if (symbolValueOf) {
        return symbolValueOf.call(object4) == symbolValueOf.call(other);
      }
  }
  return false;
}
var _equalByTag = equalByTag$1;
function arrayPush$1(array4, values) {
  var index = -1, length = values.length, offset = array4.length;
  while (++index < length) {
    array4[offset + index] = values[index];
  }
  return array4;
}
var _arrayPush = arrayPush$1;
var isArray$8 = Array.isArray;
var isArray_1 = isArray$8;
var arrayPush = _arrayPush, isArray$7 = isArray_1;
function baseGetAllKeys$1(object4, keysFunc, symbolsFunc) {
  var result = keysFunc(object4);
  return isArray$7(object4) ? result : arrayPush(result, symbolsFunc(object4));
}
var _baseGetAllKeys = baseGetAllKeys$1;
function arrayFilter$1(array4, predicate) {
  var index = -1, length = array4 == null ? 0 : array4.length, resIndex = 0, result = [];
  while (++index < length) {
    var value = array4[index];
    if (predicate(value, index, array4)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
var _arrayFilter = arrayFilter$1;
function stubArray$1() {
  return [];
}
var stubArray_1 = stubArray$1;
var arrayFilter = _arrayFilter, stubArray = stubArray_1;
var objectProto$6 = Object.prototype;
var propertyIsEnumerable$1 = objectProto$6.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbols$1 = !nativeGetSymbols ? stubArray : function(object4) {
  if (object4 == null) {
    return [];
  }
  object4 = Object(object4);
  return arrayFilter(nativeGetSymbols(object4), function(symbol) {
    return propertyIsEnumerable$1.call(object4, symbol);
  });
};
var _getSymbols = getSymbols$1;
function baseTimes$1(n, iteratee) {
  var index = -1, result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
var _baseTimes = baseTimes$1;
function isObjectLike$5(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_1 = isObjectLike$5;
var baseGetTag$3 = _baseGetTag, isObjectLike$4 = isObjectLike_1;
var argsTag$2 = "[object Arguments]";
function baseIsArguments$1(value) {
  return isObjectLike$4(value) && baseGetTag$3(value) == argsTag$2;
}
var _baseIsArguments = baseIsArguments$1;
var baseIsArguments = _baseIsArguments, isObjectLike$3 = isObjectLike_1;
var objectProto$5 = Object.prototype;
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;
var isArguments$1 = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike$3(value) && hasOwnProperty$4.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
var isArguments_1 = isArguments$1;
var isBuffer$3 = { exports: {} };
function stubFalse() {
  return false;
}
var stubFalse_1 = stubFalse;
(function(module, exports) {
  var root2 = _root, stubFalse2 = stubFalse_1;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer2 = moduleExports ? root2.Buffer : void 0;
  var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
  var isBuffer2 = nativeIsBuffer || stubFalse2;
  module.exports = isBuffer2;
})(isBuffer$3, isBuffer$3.exports);
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex$1(value, length) {
  var type4 = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type4 == "number" || type4 != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var _isIndex = isIndex$1;
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength$2(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
var isLength_1 = isLength$2;
var baseGetTag$2 = _baseGetTag, isLength$1 = isLength_1, isObjectLike$2 = isObjectLike_1;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", mapTag$1 = "[object Map]", numberTag = "[object Number]", objectTag$2 = "[object Object]", regexpTag = "[object RegExp]", setTag$1 = "[object Set]", stringTag = "[object String]", weakMapTag$1 = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag$1] = typedArrayTags[numberTag] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag] = typedArrayTags[setTag$1] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag$1] = false;
function baseIsTypedArray$1(value) {
  return isObjectLike$2(value) && isLength$1(value.length) && !!typedArrayTags[baseGetTag$2(value)];
}
var _baseIsTypedArray = baseIsTypedArray$1;
function baseUnary$1(func) {
  return function(value) {
    return func(value);
  };
}
var _baseUnary = baseUnary$1;
var _nodeUtil = { exports: {} };
(function(module, exports) {
  var freeGlobal2 = _freeGlobal;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal2.process;
  var nodeUtil2 = function() {
    try {
      var types2 = freeModule && freeModule.require && freeModule.require("util").types;
      if (types2) {
        return types2;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {
    }
  }();
  module.exports = nodeUtil2;
})(_nodeUtil, _nodeUtil.exports);
var baseIsTypedArray = _baseIsTypedArray, baseUnary = _baseUnary, nodeUtil = _nodeUtil.exports;
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
var isTypedArray$3 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray_1 = isTypedArray$3;
var baseTimes = _baseTimes, isArguments = isArguments_1, isArray$6 = isArray_1, isBuffer$2 = isBuffer$3.exports, isIndex = _isIndex, isTypedArray$2 = isTypedArray_1;
var objectProto$4 = Object.prototype;
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
function arrayLikeKeys$1(value, inherited) {
  var isArr = isArray$6(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer$2(value), isType = !isArr && !isArg && !isBuff && isTypedArray$2(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$3.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var _arrayLikeKeys = arrayLikeKeys$1;
var objectProto$3 = Object.prototype;
function isPrototype$1(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$3;
  return value === proto;
}
var _isPrototype = isPrototype$1;
function overArg$1(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var _overArg = overArg$1;
var overArg = _overArg;
var nativeKeys$1 = overArg(Object.keys, Object);
var _nativeKeys = nativeKeys$1;
var isPrototype = _isPrototype, nativeKeys = _nativeKeys;
var objectProto$2 = Object.prototype;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function baseKeys$1(object4) {
  if (!isPrototype(object4)) {
    return nativeKeys(object4);
  }
  var result = [];
  for (var key in Object(object4)) {
    if (hasOwnProperty$2.call(object4, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
var _baseKeys = baseKeys$1;
var isFunction$1 = isFunction_1, isLength = isLength_1;
function isArrayLike$1(value) {
  return value != null && isLength(value.length) && !isFunction$1(value);
}
var isArrayLike_1 = isArrayLike$1;
var arrayLikeKeys = _arrayLikeKeys, baseKeys = _baseKeys, isArrayLike = isArrayLike_1;
function keys$1(object4) {
  return isArrayLike(object4) ? arrayLikeKeys(object4) : baseKeys(object4);
}
var keys_1 = keys$1;
var baseGetAllKeys = _baseGetAllKeys, getSymbols = _getSymbols, keys = keys_1;
function getAllKeys$1(object4) {
  return baseGetAllKeys(object4, keys, getSymbols);
}
var _getAllKeys = getAllKeys$1;
var getAllKeys = _getAllKeys;
var COMPARE_PARTIAL_FLAG$1 = 1;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function equalObjects$1(object4, other, bitmask, customizer, equalFunc, stack2) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1, objProps = getAllKeys(object4), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack2.get(object4);
  var othStacked = stack2.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object4;
  }
  var result = true;
  stack2.set(object4, other);
  stack2.set(other, object4);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object4[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object4, stack2) : customizer(objValue, othValue, key, object4, other, stack2);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack2) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object4.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object4 && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack2["delete"](object4);
  stack2["delete"](other);
  return result;
}
var _equalObjects = equalObjects$1;
var getNative$3 = _getNative, root$4 = _root;
var DataView$1 = getNative$3(root$4, "DataView");
var _DataView = DataView$1;
var getNative$2 = _getNative, root$3 = _root;
var Promise$2 = getNative$2(root$3, "Promise");
var _Promise = Promise$2;
var getNative$1 = _getNative, root$2 = _root;
var Set$2 = getNative$1(root$2, "Set");
var _Set = Set$2;
var getNative = _getNative, root$1 = _root;
var WeakMap$2 = getNative(root$1, "WeakMap");
var _WeakMap = WeakMap$2;
var DataView = _DataView, Map$1 = _Map, Promise$1 = _Promise, Set$1 = _Set, WeakMap$1 = _WeakMap, baseGetTag$1 = _baseGetTag, toSource = _toSource;
var mapTag = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag = "[object Set]", weakMapTag = "[object WeakMap]";
var dataViewTag = "[object DataView]";
var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set$1), weakMapCtorString = toSource(WeakMap$1);
var getTag$1 = baseGetTag$1;
if (DataView && getTag$1(new DataView(new ArrayBuffer(1))) != dataViewTag || Map$1 && getTag$1(new Map$1()) != mapTag || Promise$1 && getTag$1(Promise$1.resolve()) != promiseTag || Set$1 && getTag$1(new Set$1()) != setTag || WeakMap$1 && getTag$1(new WeakMap$1()) != weakMapTag) {
  getTag$1 = function(value) {
    var result = baseGetTag$1(value), Ctor = result == objectTag$1 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}
var _getTag = getTag$1;
var Stack = _Stack, equalArrays = _equalArrays, equalByTag = _equalByTag, equalObjects = _equalObjects, getTag = _getTag, isArray$5 = isArray_1, isBuffer$1 = isBuffer$3.exports, isTypedArray$1 = isTypedArray_1;
var COMPARE_PARTIAL_FLAG = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseIsEqualDeep$1(object4, other, bitmask, customizer, equalFunc, stack2) {
  var objIsArr = isArray$5(object4), othIsArr = isArray$5(other), objTag = objIsArr ? arrayTag : getTag(object4), othTag = othIsArr ? arrayTag : getTag(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer$1(object4)) {
    if (!isBuffer$1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack2 || (stack2 = new Stack());
    return objIsArr || isTypedArray$1(object4) ? equalArrays(object4, other, bitmask, customizer, equalFunc, stack2) : equalByTag(object4, other, objTag, bitmask, customizer, equalFunc, stack2);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object4, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object4.value() : object4, othUnwrapped = othIsWrapped ? other.value() : other;
      stack2 || (stack2 = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack2);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack2 || (stack2 = new Stack());
  return equalObjects(object4, other, bitmask, customizer, equalFunc, stack2);
}
var _baseIsEqualDeep = baseIsEqualDeep$1;
var baseIsEqualDeep = _baseIsEqualDeep, isObjectLike$1 = isObjectLike_1;
function baseIsEqual$1(value, other, bitmask, customizer, stack2) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike$1(value) && !isObjectLike$1(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual$1, stack2);
}
var _baseIsEqual = baseIsEqual$1;
var isVue2 = false;
function tryOnScopeDispose(fn2) {
  if (getCurrentScope()) {
    onScopeDispose(fn2);
    return true;
  }
  return false;
}
const isClient = typeof window !== "undefined";
const isString$1 = (val) => typeof val === "string";
const noop$2 = () => {
};
function createFilterWrapper(filter, fn2) {
  function wrapper(...args) {
    filter(() => fn2.apply(this, args), { fn: fn2, thisArg: this, args });
  }
  return wrapper;
}
function throttleFilter(ms, trailing = true, leading = true) {
  let lastExec = 0;
  let timer;
  let preventLeading = !leading;
  const clear2 = () => {
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
    }
  };
  const filter = (invoke) => {
    const duration = unref(ms);
    const elapsed = Date.now() - lastExec;
    clear2();
    if (duration <= 0) {
      lastExec = Date.now();
      return invoke();
    }
    if (elapsed > duration) {
      lastExec = Date.now();
      if (preventLeading)
        preventLeading = false;
      else
        invoke();
    }
    if (trailing) {
      timer = setTimeout(() => {
        lastExec = Date.now();
        if (!leading)
          preventLeading = true;
        clear2();
        invoke();
      }, duration);
    }
    if (!leading && !timer)
      timer = setTimeout(() => preventLeading = true, duration);
  };
  return filter;
}
function useThrottleFn(fn2, ms = 200, trailing = true, leading = true) {
  return createFilterWrapper(throttleFilter(ms, trailing, leading), fn2);
}
function useTimeoutFn(cb, interval, options = {}) {
  const {
    immediate = true
  } = options;
  const isPending = ref(false);
  let timer = null;
  function clear2() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function stop() {
    isPending.value = false;
    clear2();
  }
  function start(...args) {
    clear2();
    isPending.value = true;
    timer = setTimeout(() => {
      isPending.value = false;
      timer = null;
      cb(...args);
    }, unref(interval));
  }
  if (immediate) {
    isPending.value = true;
    if (isClient)
      start();
  }
  tryOnScopeDispose(stop);
  return {
    isPending,
    start,
    stop
  };
}
function unrefElement(elRef) {
  var _a2;
  const plain = unref(elRef);
  return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
}
const defaultWindow = isClient ? window : void 0;
function useEventListener(...args) {
  let target;
  let event;
  let listener;
  let options;
  if (isString$1(args[0])) {
    [event, listener, options] = args;
    target = defaultWindow;
  } else {
    [target, event, listener, options] = args;
  }
  if (!target)
    return noop$2;
  let cleanup = noop$2;
  const stopWatch = watch(() => unref(target), (el) => {
    cleanup();
    if (!el)
      return;
    el.addEventListener(event, listener, options);
    cleanup = () => {
      el.removeEventListener(event, listener, options);
      cleanup = noop$2;
    };
  }, { immediate: true, flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function onClickOutside(target, handler, options = {}) {
  const { window: window2 = defaultWindow, ignore } = options;
  if (!window2)
    return;
  const shouldListen = ref(true);
  const listener = (event) => {
    const el = unrefElement(target);
    const composedPath = event.composedPath();
    if (!el || el === event.target || composedPath.includes(el) || !shouldListen.value)
      return;
    if (ignore && ignore.length > 0) {
      if (ignore.some((target2) => {
        const el2 = unrefElement(target2);
        return el2 && (event.target === el2 || composedPath.includes(el2));
      }))
        return;
    }
    handler(event);
  };
  const cleanup = [
    useEventListener(window2, "click", listener, { passive: true, capture: true }),
    useEventListener(window2, "pointerdown", (e) => {
      const el = unrefElement(target);
      shouldListen.value = !!el && !e.composedPath().includes(el);
    }, { passive: true })
  ];
  const stop = () => cleanup.forEach((fn2) => fn2());
  return stop;
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
_global[globalKey];
function useCssVar(prop, target, { window: window2 = defaultWindow } = {}) {
  const variable = ref("");
  const elRef = computed(() => {
    var _a2;
    return unrefElement(target) || ((_a2 = window2 == null ? void 0 : window2.document) == null ? void 0 : _a2.documentElement);
  });
  watch([elRef, () => unref(prop)], ([el, prop2]) => {
    if (el && window2)
      variable.value = window2.getComputedStyle(el).getPropertyValue(prop2);
  }, { immediate: true });
  watch(variable, (val) => {
    var _a2;
    if ((_a2 = elRef.value) == null ? void 0 : _a2.style)
      elRef.value.style.setProperty(unref(prop), val);
  });
  return variable;
}
var __getOwnPropSymbols$c = Object.getOwnPropertySymbols;
var __hasOwnProp$c = Object.prototype.hasOwnProperty;
var __propIsEnum$c = Object.prototype.propertyIsEnumerable;
var __objRest$2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$c.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$c)
    for (var prop of __getOwnPropSymbols$c(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$c.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function useResizeObserver(target, callback, options = {}) {
  const _a2 = options, { window: window2 = defaultWindow } = _a2, observerOptions = __objRest$2(_a2, ["window"]);
  let observer;
  const isSupported = window2 && "ResizeObserver" in window2;
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const stopWatch = watch(() => unrefElement(target), (el) => {
    cleanup();
    if (isSupported && window2 && el) {
      observer = new window2.ResizeObserver(callback);
      observer.observe(el, observerOptions);
    }
  }, { immediate: true, flush: "post" });
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}
var _a, _b;
isClient && (window == null ? void 0 : window.navigator) && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.platform) && /iP(ad|hone|od)/.test((_b = window == null ? void 0 : window.navigator) == null ? void 0 : _b.platform);
var __defProp$3 = Object.defineProperty;
var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3.call(b, prop))
      __defNormalProp$3(a, prop, b[prop]);
  if (__getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(b)) {
      if (__propIsEnum$3.call(b, prop))
        __defNormalProp$3(a, prop, b[prop]);
    }
  return a;
};
const initialRect = {
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  height: 0,
  width: 0
};
__spreadValues$3({
  text: ""
}, initialRect);
const SCOPE = "Util";
const getValueByPath = (obj, paths = "") => {
  let ret = obj;
  paths.split(".").map((path) => {
    ret = ret == null ? void 0 : ret[path];
  });
  return ret;
};
function getPropByPath(obj, path, strict) {
  let tempObj = obj;
  let key, value;
  if (obj && hasOwn(obj, path)) {
    key = path;
    value = tempObj == null ? void 0 : tempObj[path];
  } else {
    path = path.replace(/\[(\w+)\]/g, ".$1");
    path = path.replace(/^\./, "");
    const keyArr = path.split(".");
    let i = 0;
    for (i; i < keyArr.length - 1; i++) {
      if (!tempObj && !strict)
        break;
      const key2 = keyArr[i];
      if (key2 in tempObj) {
        tempObj = tempObj[key2];
      } else {
        if (strict) {
          throwError(SCOPE, "Please transfer a valid prop path to form item!");
        }
        break;
      }
    }
    key = keyArr[i];
    value = tempObj == null ? void 0 : tempObj[keyArr[i]];
  }
  return {
    o: tempObj,
    k: key,
    v: value
  };
}
const generateId = () => Math.floor(Math.random() * 1e4);
const escapeRegexpString = (value = "") => String(value).replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
const isFirefox = function() {
  return isClient && !!window.navigator.userAgent.match(/firefox/i);
};
const isBool = (val) => typeof val === "boolean";
const isNumber$1 = (val) => typeof val === "number";
function rafThrottle(fn2) {
  let locked = false;
  return function(...args) {
    if (locked)
      return;
    locked = true;
    window.requestAnimationFrame(() => {
      Reflect.apply(fn2, this, args);
      locked = false;
    });
  };
}
function isUndefined$1(val) {
  return val === void 0;
}
function addUnit(value) {
  if (isString$2(value)) {
    return value;
  } else if (isNumber$1(value)) {
    return `${value}px`;
  }
  return "";
}
const merge$1 = (a, b) => {
  var _a2;
  const keys2 = [
    .../* @__PURE__ */ new Set([...Object.keys(a), ...Object.keys(b)])
  ];
  const obj = {};
  for (const key of keys2) {
    obj[key] = (_a2 = b[key]) != null ? _a2 : a[key];
  }
  return obj;
};
const cache = ref({});
function useGlobalConfig(key) {
  const config = inject(configProviderContextKey, cache);
  if (key) {
    return isObject$6(config.value) && hasOwn(config.value, key) ? computed(() => config.value[key]) : ref(void 0);
  } else {
    return config;
  }
}
const provideGlobalConfig = (config, app2) => {
  var _a2;
  const inSetup = !!getCurrentInstance();
  const oldConfig = inSetup ? useGlobalConfig() : void 0;
  const provideFn = (_a2 = app2 == null ? void 0 : app2.provide) != null ? _a2 : inSetup ? provide : void 0;
  if (!provideFn) {
    return;
  }
  const context = computed(() => {
    const cfg = unref(config);
    if (!oldConfig)
      return cfg;
    return merge$1(oldConfig.value, cfg);
  });
  provideFn(configProviderContextKey, context);
  cache.value = context.value;
  return context;
};
const useSizeProp = buildProp({
  type: String,
  values: componentSize,
  required: false
});
const useSize = (fallback, ignore = {}) => {
  const emptyRef = ref(void 0);
  const size2 = ignore.prop ? emptyRef : useProp("size");
  const globalConfig = ignore.global ? emptyRef : useGlobalConfig("size");
  const form = ignore.form ? { size: void 0 } : inject(elFormKey, void 0);
  const formItem = ignore.formItem ? { size: void 0 } : inject(elFormItemKey, void 0);
  return computed(() => size2.value || unref(fallback) || (formItem == null ? void 0 : formItem.size) || (form == null ? void 0 : form.size) || globalConfig.value || "default");
};
const useDisabled = (fallback) => {
  const disabled = useProp("disabled");
  const form = inject(elFormKey, void 0);
  return computed(() => disabled.value || unref(fallback) || (form == null ? void 0 : form.disabled) || false);
};
const useFocus = (el) => {
  return {
    focus: () => {
      var _a2, _b2;
      (_b2 = (_a2 = el.value) == null ? void 0 : _a2.focus) == null ? void 0 : _b2.call(_a2);
    }
  };
};
const useFormItem = () => {
  const form = inject(elFormKey, void 0);
  const formItem = inject(elFormItemKey, void 0);
  return {
    form,
    formItem
  };
};
var baseGetTag = _baseGetTag, isObjectLike = isObjectLike_1;
var symbolTag = "[object Symbol]";
function isSymbol$4(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
var isSymbol_1 = isSymbol$4;
var isArray$4 = isArray_1, isSymbol$3 = isSymbol_1;
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey$1(value, object4) {
  if (isArray$4(value)) {
    return false;
  }
  var type4 = typeof value;
  if (type4 == "number" || type4 == "symbol" || type4 == "boolean" || value == null || isSymbol$3(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object4 != null && value in Object(object4);
}
var _isKey = isKey$1;
var MapCache = _MapCache;
var FUNC_ERROR_TEXT$1 = "Expected a function";
function memoize$1(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache2 = memoized.cache;
    if (cache2.has(key)) {
      return cache2.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache2.set(key, result) || cache2;
    return result;
  };
  memoized.cache = new (memoize$1.Cache || MapCache)();
  return memoized;
}
memoize$1.Cache = MapCache;
var memoize_1 = memoize$1;
var memoize = memoize_1;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped$1(func) {
  var result = memoize(func, function(key) {
    if (cache2.size === MAX_MEMOIZE_SIZE) {
      cache2.clear();
    }
    return key;
  });
  var cache2 = result.cache;
  return result;
}
var _memoizeCapped = memoizeCapped$1;
var memoizeCapped = _memoizeCapped;
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath$1 = memoizeCapped(function(string3) {
  var result = [];
  if (string3.charCodeAt(0) === 46) {
    result.push("");
  }
  string3.replace(rePropName, function(match, number4, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number4 || match);
  });
  return result;
});
var _stringToPath = stringToPath$1;
function arrayMap$1(array4, iteratee) {
  var index = -1, length = array4 == null ? 0 : array4.length, result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array4[index], index, array4);
  }
  return result;
}
var _arrayMap = arrayMap$1;
var Symbol$1 = _Symbol, arrayMap = _arrayMap, isArray$3 = isArray_1, isSymbol$2 = isSymbol_1;
var INFINITY$1 = 1 / 0;
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString$1(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$3(value)) {
    return arrayMap(value, baseToString$1) + "";
  }
  if (isSymbol$2(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
}
var _baseToString = baseToString$1;
var baseToString = _baseToString;
function toString$2(value) {
  return value == null ? "" : baseToString(value);
}
var toString_1 = toString$2;
var isArray$2 = isArray_1, isKey = _isKey, stringToPath = _stringToPath, toString$1 = toString_1;
function castPath$1(value, object4) {
  if (isArray$2(value)) {
    return value;
  }
  return isKey(value, object4) ? [value] : stringToPath(toString$1(value));
}
var _castPath = castPath$1;
var isSymbol$1 = isSymbol_1;
var INFINITY = 1 / 0;
function toKey$1(value) {
  if (typeof value == "string" || isSymbol$1(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
var _toKey = toKey$1;
var castPath = _castPath, toKey = _toKey;
function baseGet$1(object4, path) {
  path = castPath(path, object4);
  var index = 0, length = path.length;
  while (object4 != null && index < length) {
    object4 = object4[toKey(path[index++])];
  }
  return index && index == length ? object4 : void 0;
}
var _baseGet = baseGet$1;
var baseGet = _baseGet;
function get(object4, path, defaultValue) {
  var result = object4 == null ? void 0 : baseGet(object4, path);
  return result === void 0 ? defaultValue : result;
}
var get_1 = get;
var English = {
  name: "en",
  el: {
    colorpicker: {
      confirm: "OK",
      clear: "Clear"
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }
  }
};
const buildTranslator = (locale) => (path, option) => translate(path, option, unref(locale));
const translate = (path, option, locale) => get_1(locale, path, path).replace(/\{(\w+)\}/g, (_, key) => {
  var _a2;
  return `${(_a2 = option == null ? void 0 : option[key]) != null ? _a2 : `{${key}}`}`;
});
const buildLocaleContext = (locale) => {
  const lang = computed(() => unref(locale).name);
  const localeRef = isRef(locale) ? locale : ref(locale);
  return {
    lang,
    locale: localeRef,
    t: buildTranslator(locale)
  };
};
const useLocale = () => {
  const locale = useGlobalConfig("locale");
  return buildLocaleContext(computed(() => locale.value || English));
};
let scrollBarWidth;
function getScrollBarWidth() {
  var _a2;
  if (!isClient)
    return 0;
  if (scrollBarWidth !== void 0)
    return scrollBarWidth;
  const outer = document.createElement("div");
  outer.className = "el-scrollbar__wrap";
  outer.style.visibility = "hidden";
  outer.style.width = "100px";
  outer.style.position = "absolute";
  outer.style.top = "-9999px";
  document.body.appendChild(outer);
  const widthNoScroll = outer.offsetWidth;
  outer.style.overflow = "scroll";
  const inner = document.createElement("div");
  inner.style.width = "100%";
  outer.appendChild(inner);
  const widthWithScroll = inner.offsetWidth;
  (_a2 = outer.parentNode) == null ? void 0 : _a2.removeChild(outer);
  scrollBarWidth = widthNoScroll - widthWithScroll;
  return scrollBarWidth;
}
const trimArr = function(s) {
  return (s || "").split(" ").filter((item) => !!item.trim());
};
const on$1 = function(element, event, handler, useCapture = false) {
  if (element && event && handler) {
    element == null ? void 0 : element.addEventListener(event, handler, useCapture);
  }
};
const off = function(element, event, handler, useCapture = false) {
  if (element && event && handler) {
    element == null ? void 0 : element.removeEventListener(event, handler, useCapture);
  }
};
function hasClass(el, cls) {
  if (!el || !cls)
    return false;
  if (cls.indexOf(" ") !== -1)
    throw new Error("className should not contain space.");
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    const className = el.getAttribute("class") || "";
    return className.split(" ").includes(cls);
  }
}
function addClass(el, cls) {
  if (!el)
    return;
  let className = el.getAttribute("class") || "";
  const curClass = trimArr(className);
  const classes = (cls || "").split(" ").filter((item) => !curClass.includes(item) && !!item.trim());
  if (el.classList) {
    el.classList.add(...classes);
  } else {
    className += ` ${classes.join(" ")}`;
    el.setAttribute("class", className);
  }
}
function removeClass(el, cls) {
  if (!el || !cls)
    return;
  const classes = trimArr(cls);
  let curClass = el.getAttribute("class") || "";
  if (el.classList) {
    el.classList.remove(...classes);
    return;
  }
  classes.forEach((item) => {
    curClass = curClass.replace(` ${item} `, " ");
  });
  const className = trimArr(curClass).join(" ");
  el.setAttribute("class", className);
}
const getStyle = function(element, styleName) {
  var _a2;
  if (!isClient)
    return "";
  if (!element || !styleName)
    return "";
  styleName = camelize(styleName);
  if (styleName === "float") {
    styleName = "cssFloat";
  }
  try {
    const style = element.style[styleName];
    if (style)
      return style;
    const computed2 = (_a2 = document.defaultView) == null ? void 0 : _a2.getComputedStyle(element, "");
    return computed2 ? computed2[styleName] : "";
  } catch (e) {
    return element.style[styleName];
  }
};
const isScroll = (el, isVertical) => {
  if (!isClient)
    return null;
  const determinedDirection = isVertical === null || isVertical === void 0;
  const overflow = determinedDirection ? getStyle(el, "overflow") : isVertical ? getStyle(el, "overflow-y") : getStyle(el, "overflow-x");
  return overflow.match(/(scroll|auto|overlay)/);
};
const getScrollContainer = (el, isVertical) => {
  if (!isClient)
    return;
  let parent = el;
  while (parent) {
    if ([window, document, document.documentElement].includes(parent)) {
      return window;
    }
    if (isScroll(parent, isVertical)) {
      return parent;
    }
    parent = parent.parentNode;
  }
  return parent;
};
const isInContainer = (el, container) => {
  if (!isClient || !el || !container)
    return false;
  const elRect = el.getBoundingClientRect();
  let containerRect;
  if (container instanceof Element) {
    containerRect = container.getBoundingClientRect();
  } else {
    containerRect = {
      top: 0,
      right: window.innerWidth,
      bottom: window.innerHeight,
      left: 0
    };
  }
  return elRect.top < containerRect.bottom && elRect.bottom > containerRect.top && elRect.right > containerRect.left && elRect.left < containerRect.right;
};
const getOffsetTop = (el) => {
  let offset = 0;
  let parent = el;
  while (parent) {
    offset += parent.offsetTop;
    parent = parent.offsetParent;
  }
  return offset;
};
const getOffsetTopDistance = (el, containerEl) => {
  return Math.abs(getOffsetTop(el) - getOffsetTop(containerEl));
};
const composeEventHandlers = (theirsHandler, oursHandler, { checkForDefaultPrevented = true } = {}) => {
  const handleEvent = (event) => {
    const shouldPrevent = theirsHandler == null ? void 0 : theirsHandler(event);
    if (checkForDefaultPrevented === false || !shouldPrevent) {
      return oursHandler == null ? void 0 : oursHandler(event);
    }
  };
  return handleEvent;
};
const useLockscreen = (trigger2) => {
  if (!isRef(trigger2)) {
    throwError("[useLockscreen]", "You need to pass a ref param to this function");
  }
  if (!isClient || hasClass(document.body, "el-popup-parent--hidden")) {
    return;
  }
  let scrollBarWidth2 = 0;
  let withoutHiddenClass = false;
  let bodyPaddingRight = "0";
  let computedBodyPaddingRight = 0;
  const cleanup = () => {
    removeClass(document.body, "el-popup-parent--hidden");
    if (withoutHiddenClass) {
      document.body.style.paddingRight = bodyPaddingRight;
    }
  };
  watch(trigger2, (val) => {
    if (!val) {
      cleanup();
      return;
    }
    withoutHiddenClass = !hasClass(document.body, "el-popup-parent--hidden");
    if (withoutHiddenClass) {
      bodyPaddingRight = document.body.style.paddingRight;
      computedBodyPaddingRight = parseInt(getStyle(document.body, "paddingRight"), 10);
    }
    scrollBarWidth2 = getScrollBarWidth();
    const bodyHasOverflow = document.documentElement.clientHeight < document.body.scrollHeight;
    const bodyOverflowY = getStyle(document.body, "overflowY");
    if (scrollBarWidth2 > 0 && (bodyHasOverflow || bodyOverflowY === "scroll") && withoutHiddenClass) {
      document.body.style.paddingRight = `${computedBodyPaddingRight + scrollBarWidth2}px`;
    }
    addClass(document.body, "el-popup-parent--hidden");
  });
  onScopeDispose(() => cleanup());
};
const EVENT_CODE = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
};
const FOCUSABLE_ELEMENT_SELECTORS = `a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])`;
const isVisible = (element) => {
  const computed2 = getComputedStyle(element);
  return computed2.position === "fixed" ? false : element.offsetParent !== null;
};
const obtainAllFocusableElements = (element) => {
  return Array.from(element.querySelectorAll(FOCUSABLE_ELEMENT_SELECTORS)).filter((item) => isFocusable(item) && isVisible(item));
};
const isFocusable = (element) => {
  if (element.tabIndex > 0 || element.tabIndex === 0 && element.getAttribute("tabIndex") !== null) {
    return true;
  }
  if (element.disabled) {
    return false;
  }
  switch (element.nodeName) {
    case "A": {
      return !!element.href && element.rel !== "ignore";
    }
    case "INPUT": {
      return !(element.type === "hidden" || element.type === "file");
    }
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA": {
      return true;
    }
    default: {
      return false;
    }
  }
};
const modalStack = [];
const closeModal = (e) => {
  if (modalStack.length === 0)
    return;
  if (e.code === EVENT_CODE.esc) {
    e.stopPropagation();
    const topModal = modalStack[modalStack.length - 1];
    topModal.handleClose();
  }
};
const useModal = (instance2, visibleRef) => {
  watch(visibleRef, (val) => {
    if (val) {
      modalStack.push(instance2);
    } else {
      modalStack.splice(modalStack.findIndex((modal) => modal === instance2), 1);
    }
  });
};
if (isClient)
  useEventListener(document, "keydown", closeModal);
const createModelToggleComposable = (name) => {
  const useModelToggleProps2 = {
    [name]: buildProp({
      type: definePropType(Boolean),
      default: null
    }),
    [`onUpdate:${name}`]: buildProp({
      type: definePropType(Function)
    })
  };
  const useModelToggleEmits2 = [`update:${name}`];
  const useModelToggle2 = ({
    indicator,
    shouldHideWhenRouteChanges,
    shouldProceed,
    onShow,
    onHide
  }) => {
    const instance2 = getCurrentInstance();
    const props = instance2.props;
    const { emit } = instance2;
    const updateEventKey = `update:${name}`;
    const hasUpdateHandler = computed(() => isFunction$4(props[`onUpdate:${name}`]));
    const isModelBindingAbsent = computed(() => props[name] === null);
    const doShow = () => {
      if (indicator.value === true) {
        return;
      }
      indicator.value = true;
      if (isFunction$4(onShow)) {
        onShow();
      }
    };
    const doHide = () => {
      if (indicator.value === false) {
        return;
      }
      indicator.value = false;
      if (isFunction$4(onHide)) {
        onHide();
      }
    };
    const show = () => {
      if (props.disabled === true || isFunction$4(shouldProceed) && !shouldProceed())
        return;
      const shouldEmit = hasUpdateHandler.value && isClient;
      if (shouldEmit) {
        emit(updateEventKey, true);
      }
      if (isModelBindingAbsent.value || !shouldEmit) {
        doShow();
      }
    };
    const hide = () => {
      if (props.disabled === true || !isClient)
        return;
      const shouldEmit = hasUpdateHandler.value && isClient;
      if (shouldEmit) {
        emit(updateEventKey, false);
      }
      if (isModelBindingAbsent.value || !shouldEmit) {
        doHide();
      }
    };
    const onChange = (val) => {
      if (!isBool(val))
        return;
      if (props.disabled && val) {
        if (hasUpdateHandler.value) {
          emit(updateEventKey, false);
        }
      } else if (indicator.value !== val) {
        if (val) {
          doShow();
        } else {
          doHide();
        }
      }
    };
    const toggle = () => {
      if (indicator.value) {
        hide();
      } else {
        show();
      }
    };
    watch(() => props[name], onChange);
    if (shouldHideWhenRouteChanges && instance2.appContext.config.globalProperties.$route !== void 0) {
      watch(() => ({
        ...instance2.proxy.$route
      }), () => {
        if (shouldHideWhenRouteChanges.value && indicator.value) {
          hide();
        }
      });
    }
    onMounted(() => {
      onChange(props[name]);
    });
    return {
      hide,
      show,
      toggle
    };
  };
  return {
    useModelToggle: useModelToggle2,
    useModelToggleProps: useModelToggleProps2,
    useModelToggleEmits: useModelToggleEmits2
  };
};
createModelToggleComposable("modelValue");
const useRestoreActive = (toggle, initialFocus) => {
  let previousActive;
  watch(() => toggle.value, (val) => {
    var _a2, _b2;
    if (val) {
      previousActive = document.activeElement;
      if (isRef(initialFocus)) {
        (_b2 = (_a2 = initialFocus.value).focus) == null ? void 0 : _b2.call(_a2);
      }
    } else {
      {
        previousActive.focus();
      }
    }
  });
};
const useSameTarget = (handleClick) => {
  if (!handleClick) {
    return { onClick: NOOP, onMousedown: NOOP, onMouseup: NOOP };
  }
  let mousedownTarget = false;
  let mouseupTarget = false;
  const onClick = (e) => {
    if (mousedownTarget && mouseupTarget) {
      handleClick(e);
    }
    mousedownTarget = mouseupTarget = false;
  };
  const onMousedown = (e) => {
    mousedownTarget = e.target === e.currentTarget;
  };
  const onMouseup = (e) => {
    mouseupTarget = e.target === e.currentTarget;
  };
  return { onClick, onMousedown, onMouseup };
};
function useTimeout() {
  let timeoutHandle;
  const registerTimeout = (fn2, delay) => {
    cancelTimeout();
    timeoutHandle = window.setTimeout(fn2, delay);
  };
  const cancelTimeout = () => window.clearTimeout(timeoutHandle);
  tryOnScopeDispose(() => cancelTimeout());
  return {
    registerTimeout,
    cancelTimeout
  };
}
const defaultIdInjection = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
};
const ID_INJECTION_KEY = Symbol("elIdInjection");
const useId = (deterministicId) => {
  const idInjection = inject(ID_INJECTION_KEY, defaultIdInjection);
  const idRef = computed(() => unref(deterministicId) || `el-id-${idInjection.prefix}-${idInjection.current++}`);
  return idRef;
};
const useEscapeKeydown = (handler) => {
  const cachedHandler = (e) => {
    const event = e;
    if (event.key === EVENT_CODE.esc) {
      handler == null ? void 0 : handler(event);
    }
  };
  onMounted(() => {
    on$1(document, "keydown", cachedHandler);
  });
  onBeforeUnmount(() => {
    off(document, "keydown", cachedHandler);
  });
};
let cachedContainer;
const POPPER_CONTAINER_ID = `el-popper-container-${generateId()}`;
const POPPER_CONTAINER_SELECTOR = `#${POPPER_CONTAINER_ID}`;
const usePopperContainer = () => {
  onBeforeMount(() => {
    if (!isClient)
      return;
    if (!cachedContainer) {
      const container = document.createElement("div");
      container.id = POPPER_CONTAINER_ID;
      document.body.appendChild(container);
      cachedContainer = container;
    }
  });
};
const useDelayedToggleProps = buildProps({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  }
});
const useDelayedToggle = ({
  showAfter,
  hideAfter,
  open,
  close: close2
}) => {
  const { registerTimeout } = useTimeout();
  const onOpen = () => {
    registerTimeout(() => {
      open();
    }, unref(showAfter));
  };
  const onClose = () => {
    registerTimeout(() => {
      close2();
    }, unref(hideAfter));
  };
  return {
    onOpen,
    onClose
  };
};
const FORWARD_REF_INJECTION_KEY = Symbol("elForwardRef");
const useForwardRef = (forwardRef) => {
  const setForwardRef = (el) => {
    forwardRef.value = el;
  };
  provide(FORWARD_REF_INJECTION_KEY, {
    setForwardRef
  });
};
const useForwardRefDirective = (setForwardRef) => {
  return {
    mounted(el) {
      setForwardRef(el);
    },
    updated(el) {
      setForwardRef(el);
    },
    unmounted() {
      setForwardRef(null);
    }
  };
};
const defaultNamespace = "el";
const statePrefix = "is-";
const _bem = (namespace, block, blockSuffix, element, modifier) => {
  let cls = `${namespace}-${block}`;
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
};
const useNamespace = (block) => {
  const namespace = computed(() => useGlobalConfig("namespace").value || defaultNamespace);
  const b = (blockSuffix = "") => _bem(unref(namespace), block, blockSuffix, "", "");
  const e = (element) => element ? _bem(unref(namespace), block, "", element, "") : "";
  const m = (modifier) => modifier ? _bem(unref(namespace), block, "", "", modifier) : "";
  const be2 = (blockSuffix, element) => blockSuffix && element ? _bem(unref(namespace), block, blockSuffix, element, "") : "";
  const em = (element, modifier) => element && modifier ? _bem(unref(namespace), block, "", element, modifier) : "";
  const bm = (blockSuffix, modifier) => blockSuffix && modifier ? _bem(unref(namespace), block, blockSuffix, "", modifier) : "";
  const bem = (blockSuffix, element, modifier) => blockSuffix && element && modifier ? _bem(unref(namespace), block, blockSuffix, element, modifier) : "";
  const is = (name, state = true) => state ? `${statePrefix}${name}` : "";
  return {
    namespace,
    b,
    e,
    m,
    be: be2,
    em,
    bm,
    bem,
    is
  };
};
const onTouchMove = (e) => {
  e.preventDefault();
  e.stopPropagation();
};
const onModalClick = () => {
  PopupManager == null ? void 0 : PopupManager.doOnModalClick();
};
let hasModal = false;
const getModal = function() {
  if (!isClient)
    return void 0;
  let modalDom = PopupManager.modalDom;
  if (modalDom) {
    hasModal = true;
  } else {
    hasModal = false;
    modalDom = document.createElement("div");
    PopupManager.modalDom = modalDom;
    on$1(modalDom, "touchmove", onTouchMove);
    on$1(modalDom, "click", onModalClick);
  }
  return modalDom;
};
const instances$1 = {};
const PopupManager = {
  modalFade: true,
  modalDom: void 0,
  globalInitialZIndex: 2e3,
  zIndex: 0,
  getInitialZIndex() {
    var _a2;
    if (!getCurrentInstance())
      return this.globalInitialZIndex;
    return (_a2 = useGlobalConfig("zIndex").value) != null ? _a2 : this.globalInitialZIndex;
  },
  getInstance(id) {
    return instances$1[id];
  },
  register(id, instance2) {
    if (id && instance2) {
      instances$1[id] = instance2;
    }
  },
  deregister(id) {
    if (id) {
      instances$1[id] = null;
      delete instances$1[id];
    }
  },
  nextZIndex() {
    return this.getInitialZIndex() + ++this.zIndex;
  },
  modalStack: [],
  doOnModalClick() {
    const topItem = PopupManager.modalStack[PopupManager.modalStack.length - 1];
    if (!topItem)
      return;
    const instance2 = PopupManager.getInstance(topItem.id);
    if (instance2 && instance2.closeOnClickModal.value) {
      instance2.close();
    }
  },
  openModal(id, zIndex, dom, modalClass, modalFade) {
    if (!isClient)
      return;
    if (!id || zIndex === void 0)
      return;
    this.modalFade = modalFade;
    const modalStack2 = this.modalStack;
    for (let i = 0, j = modalStack2.length; i < j; i++) {
      const item = modalStack2[i];
      if (item.id === id) {
        return;
      }
    }
    const modalDom = getModal();
    addClass(modalDom, "v-modal");
    if (this.modalFade && !hasModal) {
      addClass(modalDom, "v-modal-enter");
    }
    if (modalClass) {
      const classArr = modalClass.trim().split(/\s+/);
      classArr.forEach((item) => addClass(modalDom, item));
    }
    setTimeout(() => {
      removeClass(modalDom, "v-modal-enter");
    }, 200);
    if (dom && dom.parentNode && dom.parentNode.nodeType !== 11) {
      dom.parentNode.appendChild(modalDom);
    } else {
      document.body.appendChild(modalDom);
    }
    if (zIndex) {
      modalDom.style.zIndex = String(zIndex);
    }
    modalDom.tabIndex = 0;
    modalDom.style.display = "";
    this.modalStack.push({ id, zIndex, modalClass });
  },
  closeModal(id) {
    const modalStack2 = this.modalStack;
    const modalDom = getModal();
    if (modalStack2.length > 0) {
      const topItem = modalStack2[modalStack2.length - 1];
      if (topItem.id === id) {
        if (topItem.modalClass) {
          const classArr = topItem.modalClass.trim().split(/\s+/);
          classArr.forEach((item) => removeClass(modalDom, item));
        }
        modalStack2.pop();
        if (modalStack2.length > 0) {
          modalDom.style.zIndex = `${modalStack2[modalStack2.length - 1].zIndex}`;
        }
      } else {
        for (let i = modalStack2.length - 1; i >= 0; i--) {
          if (modalStack2[i].id === id) {
            modalStack2.splice(i, 1);
            break;
          }
        }
      }
    }
    if (modalStack2.length === 0) {
      if (this.modalFade) {
        addClass(modalDom, "v-modal-leave");
      }
      setTimeout(() => {
        if (modalStack2.length === 0) {
          if (modalDom.parentNode)
            modalDom.parentNode.removeChild(modalDom);
          modalDom.style.display = "none";
          PopupManager.modalDom = void 0;
        }
        removeClass(modalDom, "v-modal-leave");
      }, 200);
    }
  }
};
const getTopPopup = function() {
  if (!isClient)
    return;
  if (PopupManager.modalStack.length > 0) {
    const topPopup = PopupManager.modalStack[PopupManager.modalStack.length - 1];
    if (!topPopup)
      return;
    const instance2 = PopupManager.getInstance(topPopup.id);
    return instance2;
  }
};
if (isClient) {
  window.addEventListener("keydown", function(event) {
    if (event.code === EVENT_CODE.esc) {
      const topPopup = getTopPopup();
      if (topPopup && topPopup.closeOnPressEscape.value) {
        topPopup.handleClose ? topPopup.handleClose() : topPopup.handleAction ? topPopup.handleAction("cancel") : topPopup.close();
      }
    }
  });
}
const withInstall = (main, extra) => {
  main.install = (app2) => {
    for (const comp of [main, ...Object.values(extra != null ? extra : {})]) {
      app2.component(comp.name, comp);
    }
  };
  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      main[key] = comp;
    }
  }
  return main;
};
const withInstallFunction = (fn2, name) => {
  fn2.install = (app2) => {
    app2.config.globalProperties[name] = fn2;
  };
  return fn2;
};
const withNoopInstall = (component) => {
  component.install = NOOP;
  return component;
};
var _export_sfc$2 = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const iconProps = buildProps({
  size: {
    type: definePropType([Number, String])
  },
  color: {
    type: String
  }
});
const _sfc_main$15 = defineComponent({
  name: "ElIcon",
  inheritAttrs: false,
  props: iconProps,
  setup(props) {
    const ns = useNamespace("icon");
    const style = computed(() => {
      if (!props.size && !props.color)
        return {};
      return {
        fontSize: isUndefined$1(props.size) ? void 0 : addUnit(props.size),
        "--color": props.color
      };
    });
    return {
      ns,
      style
    };
  }
});
function _sfc_render$$(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("i", mergeProps({
    class: _ctx.ns.b(),
    style: _ctx.style
  }, _ctx.$attrs), [
    renderSlot(_ctx.$slots, "default")
  ], 16);
}
var Icon = /* @__PURE__ */ _export_sfc$2(_sfc_main$15, [["render", _sfc_render$$]]);
const ElIcon = withInstall(Icon);
var _export_sfc$1 = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$14 = defineComponent({
  name: "ArrowLeft"
});
const _hoisted_1$M = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$B = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M609.408 149.376L277.76 489.6a32 32 0 000 44.672l331.648 340.352a29.12 29.12 0 0041.728 0 30.592 30.592 0 000-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 000-42.688 29.12 29.12 0 00-41.728 0z"
}, null, -1);
const _hoisted_3$v = [
  _hoisted_2$B
];
function _sfc_render$_(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$M, _hoisted_3$v);
}
var arrowLeft = /* @__PURE__ */ _export_sfc$1(_sfc_main$14, [["render", _sfc_render$_]]);
const _sfc_main$13 = defineComponent({
  name: "ArrowRight"
});
const _hoisted_1$L = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$A = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M340.864 149.312a30.592 30.592 0 000 42.752L652.736 512 340.864 831.872a30.592 30.592 0 000 42.752 29.12 29.12 0 0041.728 0L714.24 534.336a32 32 0 000-44.672L382.592 149.376a29.12 29.12 0 00-41.728 0z"
}, null, -1);
const _hoisted_3$u = [
  _hoisted_2$A
];
function _sfc_render$Z(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$L, _hoisted_3$u);
}
var arrowRight = /* @__PURE__ */ _export_sfc$1(_sfc_main$13, [["render", _sfc_render$Z]]);
const _sfc_main$12 = defineComponent({
  name: "ArrowUp"
});
const _hoisted_1$K = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$z = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M488.832 344.32l-339.84 356.672a32 32 0 000 44.16l.384.384a29.44 29.44 0 0042.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0042.688 0l.384-.384a32 32 0 000-44.16L535.168 344.32a32 32 0 00-46.336 0z"
}, null, -1);
const _hoisted_3$t = [
  _hoisted_2$z
];
function _sfc_render$Y(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$K, _hoisted_3$t);
}
var arrowUp = /* @__PURE__ */ _export_sfc$1(_sfc_main$12, [["render", _sfc_render$Y]]);
const _sfc_main$11 = defineComponent({
  name: "CircleCheck"
});
const _hoisted_1$J = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$y = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 100-768 384 384 0 000 768zm0 64a448 448 0 110-896 448 448 0 010 896z"
}, null, -1);
const _hoisted_3$s = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M745.344 361.344a32 32 0 0145.312 45.312l-288 288a32 32 0 01-45.312 0l-160-160a32 32 0 1145.312-45.312L480 626.752l265.344-265.408z"
}, null, -1);
const _hoisted_4$8 = [
  _hoisted_2$y,
  _hoisted_3$s
];
function _sfc_render$X(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$J, _hoisted_4$8);
}
var circleCheck = /* @__PURE__ */ _export_sfc$1(_sfc_main$11, [["render", _sfc_render$X]]);
const _sfc_main$10 = defineComponent({
  name: "CircleCloseFilled"
});
const _hoisted_1$I = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$x = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 110 896 448 448 0 010-896zm0 393.664L407.936 353.6a38.4 38.4 0 10-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1054.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1054.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 10-54.336-54.336L512 457.664z"
}, null, -1);
const _hoisted_3$r = [
  _hoisted_2$x
];
function _sfc_render$W(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$I, _hoisted_3$r);
}
var circleCloseFilled = /* @__PURE__ */ _export_sfc$1(_sfc_main$10, [["render", _sfc_render$W]]);
const _sfc_main$$ = defineComponent({
  name: "CircleClose"
});
const _hoisted_1$H = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$w = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M466.752 512l-90.496-90.496a32 32 0 0145.248-45.248L512 466.752l90.496-90.496a32 32 0 1145.248 45.248L557.248 512l90.496 90.496a32 32 0 11-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 01-45.248-45.248L466.752 512z"
}, null, -1);
const _hoisted_3$q = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 100-768 384 384 0 000 768zm0 64a448 448 0 110-896 448 448 0 010 896z"
}, null, -1);
const _hoisted_4$7 = [
  _hoisted_2$w,
  _hoisted_3$q
];
function _sfc_render$V(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$H, _hoisted_4$7);
}
var circleClose = /* @__PURE__ */ _export_sfc$1(_sfc_main$$, [["render", _sfc_render$V]]);
const _sfc_main$_ = defineComponent({
  name: "Close"
});
const _hoisted_1$G = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$v = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M764.288 214.592L512 466.88 259.712 214.592a31.936 31.936 0 00-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1045.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0045.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 10-45.12-45.184z"
}, null, -1);
const _hoisted_3$p = [
  _hoisted_2$v
];
function _sfc_render$U(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$G, _hoisted_3$p);
}
var close$1 = /* @__PURE__ */ _export_sfc$1(_sfc_main$_, [["render", _sfc_render$U]]);
const _sfc_main$Z = defineComponent({
  name: "DArrowLeft"
});
const _hoisted_1$F = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$u = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M529.408 149.376a29.12 29.12 0 0141.728 0 30.592 30.592 0 010 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 01-.512 43.264 29.12 29.12 0 01-41.216-.512L197.76 534.272a32 32 0 010-44.672l331.648-340.224zm256 0a29.12 29.12 0 0141.728 0 30.592 30.592 0 010 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 01-.512 43.264 29.12 29.12 0 01-41.216-.512L453.76 534.272a32 32 0 010-44.672l331.648-340.224z"
}, null, -1);
const _hoisted_3$o = [
  _hoisted_2$u
];
function _sfc_render$T(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$F, _hoisted_3$o);
}
var dArrowLeft = /* @__PURE__ */ _export_sfc$1(_sfc_main$Z, [["render", _sfc_render$T]]);
const _sfc_main$Y = defineComponent({
  name: "DArrowRight"
});
const _hoisted_1$E = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$t = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M452.864 149.312a29.12 29.12 0 0141.728.064L826.24 489.664a32 32 0 010 44.672L494.592 874.624a29.12 29.12 0 01-41.728 0 30.592 30.592 0 010-42.752L764.736 512 452.864 192a30.592 30.592 0 010-42.688zm-256 0a29.12 29.12 0 0141.728.064L570.24 489.664a32 32 0 010 44.672L238.592 874.624a29.12 29.12 0 01-41.728 0 30.592 30.592 0 010-42.752L508.736 512 196.864 192a30.592 30.592 0 010-42.688z"
}, null, -1);
const _hoisted_3$n = [
  _hoisted_2$t
];
function _sfc_render$S(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$E, _hoisted_3$n);
}
var dArrowRight = /* @__PURE__ */ _export_sfc$1(_sfc_main$Y, [["render", _sfc_render$S]]);
const _sfc_main$X = defineComponent({
  name: "FullScreen"
});
const _hoisted_1$D = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$s = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M160 96.064l192 .192a32 32 0 010 64l-192-.192V352a32 32 0 01-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1164 0v191.936l192-.192a32 32 0 110 64l-192 .192zM864 96.064V96h64v256a32 32 0 11-64 0V160.064l-192 .192a32 32 0 110-64l192-.192zm0 831.872l-192-.192a32 32 0 010-64l192 .192V672a32 32 0 1164 0v256h-64v-.064z"
}, null, -1);
const _hoisted_3$m = [
  _hoisted_2$s
];
function _sfc_render$R(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$D, _hoisted_3$m);
}
var fullScreen = /* @__PURE__ */ _export_sfc$1(_sfc_main$X, [["render", _sfc_render$R]]);
const _sfc_main$W = defineComponent({
  name: "InfoFilled"
});
const _hoisted_1$C = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$r = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 110 896.064A448 448 0 01512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 01-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 017.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
}, null, -1);
const _hoisted_3$l = [
  _hoisted_2$r
];
function _sfc_render$Q(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$C, _hoisted_3$l);
}
var infoFilled = /* @__PURE__ */ _export_sfc$1(_sfc_main$W, [["render", _sfc_render$Q]]);
const _sfc_main$V = defineComponent({
  name: "Loading"
});
const _hoisted_1$B = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$q = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0132 32v192a32 32 0 01-64 0V96a32 32 0 0132-32zm0 640a32 32 0 0132 32v192a32 32 0 11-64 0V736a32 32 0 0132-32zm448-192a32 32 0 01-32 32H736a32 32 0 110-64h192a32 32 0 0132 32zm-640 0a32 32 0 01-32 32H96a32 32 0 010-64h192a32 32 0 0132 32zM195.2 195.2a32 32 0 0145.248 0L376.32 331.008a32 32 0 01-45.248 45.248L195.2 240.448a32 32 0 010-45.248zm452.544 452.544a32 32 0 0145.248 0L828.8 783.552a32 32 0 01-45.248 45.248L647.744 692.992a32 32 0 010-45.248zM828.8 195.264a32 32 0 010 45.184L692.992 376.32a32 32 0 01-45.248-45.248l135.808-135.808a32 32 0 0145.248 0zm-452.544 452.48a32 32 0 010 45.248L240.448 828.8a32 32 0 01-45.248-45.248l135.808-135.808a32 32 0 0145.248 0z"
}, null, -1);
const _hoisted_3$k = [
  _hoisted_2$q
];
function _sfc_render$P(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$B, _hoisted_3$k);
}
var loading = /* @__PURE__ */ _export_sfc$1(_sfc_main$V, [["render", _sfc_render$P]]);
const _sfc_main$U = defineComponent({
  name: "MoreFilled"
});
const _hoisted_1$A = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$p = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M176 416a112 112 0 110 224 112 112 0 010-224zm336 0a112 112 0 110 224 112 112 0 010-224zm336 0a112 112 0 110 224 112 112 0 010-224z"
}, null, -1);
const _hoisted_3$j = [
  _hoisted_2$p
];
function _sfc_render$O(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$A, _hoisted_3$j);
}
var moreFilled = /* @__PURE__ */ _export_sfc$1(_sfc_main$U, [["render", _sfc_render$O]]);
const _sfc_main$T = defineComponent({
  name: "RefreshLeft"
});
const _hoisted_1$z = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$o = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M289.088 296.704h92.992a32 32 0 010 64H232.96a32 32 0 01-32-32V179.712a32 32 0 0164 0v50.56a384 384 0 01643.84 282.88 384 384 0 01-383.936 384 384 384 0 01-384-384h64a320 320 0 10640 0 320 320 0 00-555.712-216.448z"
}, null, -1);
const _hoisted_3$i = [
  _hoisted_2$o
];
function _sfc_render$N(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$z, _hoisted_3$i);
}
var refreshLeft = /* @__PURE__ */ _export_sfc$1(_sfc_main$T, [["render", _sfc_render$N]]);
const _sfc_main$S = defineComponent({
  name: "RefreshRight"
});
const _hoisted_1$y = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$n = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M784.512 230.272v-50.56a32 32 0 1164 0v149.056a32 32 0 01-32 32H667.52a32 32 0 110-64h92.992A320 320 0 10524.8 833.152a320 320 0 00320-320h64a384 384 0 01-384 384 384 384 0 01-384-384 384 384 0 01643.712-282.88z"
}, null, -1);
const _hoisted_3$h = [
  _hoisted_2$n
];
function _sfc_render$M(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$y, _hoisted_3$h);
}
var refreshRight = /* @__PURE__ */ _export_sfc$1(_sfc_main$S, [["render", _sfc_render$M]]);
const _sfc_main$R = defineComponent({
  name: "ScaleToOriginal"
});
const _hoisted_1$x = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$m = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M813.176 180.706a60.235 60.235 0 0160.236 60.235v481.883a60.235 60.235 0 01-60.236 60.235H210.824a60.235 60.235 0 01-60.236-60.235V240.94a60.235 60.235 0 0160.236-60.235h602.352zm0-60.235H210.824A120.47 120.47 0 0090.353 240.94v481.883a120.47 120.47 0 00120.47 120.47h602.353a120.47 120.47 0 00120.471-120.47V240.94a120.47 120.47 0 00-120.47-120.47zm-120.47 180.705a30.118 30.118 0 00-30.118 30.118v301.177a30.118 30.118 0 0060.236 0V331.294a30.118 30.118 0 00-30.118-30.118zm-361.412 0a30.118 30.118 0 00-30.118 30.118v301.177a30.118 30.118 0 1060.236 0V331.294a30.118 30.118 0 00-30.118-30.118zM512 361.412a30.118 30.118 0 00-30.118 30.117v30.118a30.118 30.118 0 0060.236 0V391.53A30.118 30.118 0 00512 361.412zM512 512a30.118 30.118 0 00-30.118 30.118v30.117a30.118 30.118 0 0060.236 0v-30.117A30.118 30.118 0 00512 512z"
}, null, -1);
const _hoisted_3$g = [
  _hoisted_2$m
];
function _sfc_render$L(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$x, _hoisted_3$g);
}
var scaleToOriginal = /* @__PURE__ */ _export_sfc$1(_sfc_main$R, [["render", _sfc_render$L]]);
const _sfc_main$Q = defineComponent({
  name: "SuccessFilled"
});
const _hoisted_1$w = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$l = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 110 896 448 448 0 010-896zm-55.808 536.384l-99.52-99.584a38.4 38.4 0 10-54.336 54.336l126.72 126.72a38.272 38.272 0 0054.336 0l262.4-262.464a38.4 38.4 0 10-54.272-54.336L456.192 600.384z"
}, null, -1);
const _hoisted_3$f = [
  _hoisted_2$l
];
function _sfc_render$K(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$w, _hoisted_3$f);
}
var successFilled = /* @__PURE__ */ _export_sfc$1(_sfc_main$Q, [["render", _sfc_render$K]]);
const _sfc_main$P = defineComponent({
  name: "View"
});
const _hoisted_1$v = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$k = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 110 448 224 224 0 010-448zm0 64a160.192 160.192 0 00-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
}, null, -1);
const _hoisted_3$e = [
  _hoisted_2$k
];
function _sfc_render$J(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$v, _hoisted_3$e);
}
var view = /* @__PURE__ */ _export_sfc$1(_sfc_main$P, [["render", _sfc_render$J]]);
const _sfc_main$O = defineComponent({
  name: "WarningFilled"
});
const _hoisted_1$u = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$j = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 110 896 448 448 0 010-896zm0 192a58.432 58.432 0 00-58.24 63.744l23.36 256.384a35.072 35.072 0 0069.76 0l23.296-256.384A58.432 58.432 0 00512 256zm0 512a51.2 51.2 0 100-102.4 51.2 51.2 0 000 102.4z"
}, null, -1);
const _hoisted_3$d = [
  _hoisted_2$j
];
function _sfc_render$I(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$u, _hoisted_3$d);
}
var warningFilled = /* @__PURE__ */ _export_sfc$1(_sfc_main$O, [["render", _sfc_render$I]]);
const _sfc_main$N = defineComponent({
  name: "ZoomIn"
});
const _hoisted_1$t = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$i = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M795.904 750.72l124.992 124.928a32 32 0 01-45.248 45.248L750.656 795.904a416 416 0 1145.248-45.248zM480 832a352 352 0 100-704 352 352 0 000 704zm-32-384v-96a32 32 0 0164 0v96h96a32 32 0 010 64h-96v96a32 32 0 01-64 0v-96h-96a32 32 0 010-64h96z"
}, null, -1);
const _hoisted_3$c = [
  _hoisted_2$i
];
function _sfc_render$H(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$t, _hoisted_3$c);
}
var zoomIn = /* @__PURE__ */ _export_sfc$1(_sfc_main$N, [["render", _sfc_render$H]]);
const _sfc_main$M = defineComponent({
  name: "ZoomOut"
});
const _hoisted_1$s = {
  class: "icon",
  width: "200",
  height: "200",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$h = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M795.904 750.72l124.992 124.928a32 32 0 01-45.248 45.248L750.656 795.904a416 416 0 1145.248-45.248zM480 832a352 352 0 100-704 352 352 0 000 704zM352 448h256a32 32 0 010 64H352a32 32 0 010-64z"
}, null, -1);
const _hoisted_3$b = [
  _hoisted_2$h
];
function _sfc_render$G(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$s, _hoisted_3$b);
}
var zoomOut = /* @__PURE__ */ _export_sfc$1(_sfc_main$M, [["render", _sfc_render$G]]);
const CloseComponents = {
  Close: close$1
};
const TypeComponents = {
  Close: close$1,
  SuccessFilled: successFilled,
  InfoFilled: infoFilled,
  WarningFilled: warningFilled,
  CircleCloseFilled: circleCloseFilled
};
const TypeComponentsMap = {
  success: successFilled,
  warning: warningFilled,
  error: circleCloseFilled,
  info: infoFilled
};
const ValidateComponentsMap = {
  validating: loading,
  success: circleCheck,
  error: circleClose
};
var root = _root;
var now$1 = function() {
  return root.Date.now();
};
var now_1 = now$1;
var reWhitespace = /\s/;
function trimmedEndIndex$1(string3) {
  var index = string3.length;
  while (index-- && reWhitespace.test(string3.charAt(index))) {
  }
  return index;
}
var _trimmedEndIndex = trimmedEndIndex$1;
var trimmedEndIndex = _trimmedEndIndex;
var reTrimStart = /^\s+/;
function baseTrim$1(string3) {
  return string3 ? string3.slice(0, trimmedEndIndex(string3) + 1).replace(reTrimStart, "") : string3;
}
var _baseTrim = baseTrim$1;
var baseTrim = _baseTrim, isObject$2 = isObject_1, isSymbol = isSymbol_1;
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber$1(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject$2(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject$2(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var toNumber_1 = toNumber$1;
var isObject$1 = isObject_1, now = now_1, toNumber = toNumber_1;
var FUNC_ERROR_TEXT = "Expected a function";
var nativeMax = Math.max, nativeMin = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject$1(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now());
  }
  function debounced() {
    var time = now(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
var debounce_1 = debounce;
const nodeList = /* @__PURE__ */ new Map();
let startClick;
if (isClient) {
  on$1(document, "mousedown", (e) => startClick = e);
  on$1(document, "mouseup", (e) => {
    for (const handlers of nodeList.values()) {
      for (const { documentHandler } of handlers) {
        documentHandler(e, startClick);
      }
    }
  });
}
function createDocumentHandler(el, binding) {
  let excludes = [];
  if (Array.isArray(binding.arg)) {
    excludes = binding.arg;
  } else if (binding.arg instanceof HTMLElement) {
    excludes.push(binding.arg);
  }
  return function(mouseup, mousedown) {
    const popperRef = binding.instance.popperRef;
    const mouseUpTarget = mouseup.target;
    const mouseDownTarget = mousedown == null ? void 0 : mousedown.target;
    const isBound = !binding || !binding.instance;
    const isTargetExists = !mouseUpTarget || !mouseDownTarget;
    const isContainedByEl = el.contains(mouseUpTarget) || el.contains(mouseDownTarget);
    const isSelf = el === mouseUpTarget;
    const isTargetExcluded = excludes.length && excludes.some((item) => item == null ? void 0 : item.contains(mouseUpTarget)) || excludes.length && excludes.includes(mouseDownTarget);
    const isContainedByPopper = popperRef && (popperRef.contains(mouseUpTarget) || popperRef.contains(mouseDownTarget));
    if (isBound || isTargetExists || isContainedByEl || isSelf || isTargetExcluded || isContainedByPopper) {
      return;
    }
    binding.value(mouseup, mousedown);
  };
}
const ClickOutside = {
  beforeMount(el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }
    nodeList.get(el).push({
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    });
  },
  updated(el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }
    const handlers = nodeList.get(el);
    const oldHandlerIndex = handlers.findIndex((item) => item.bindingFn === binding.oldValue);
    const newHandler = {
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    };
    if (oldHandlerIndex >= 0) {
      handlers.splice(oldHandlerIndex, 1, newHandler);
    } else {
      handlers.push(newHandler);
    }
  },
  unmounted(el) {
    nodeList.delete(el);
  }
};
const FOCUSABLE_CHILDREN = "_trap-focus-children";
const FOCUS_STACK = [];
const FOCUS_HANDLER = (e) => {
  if (FOCUS_STACK.length === 0)
    return;
  const focusableElement = FOCUS_STACK[FOCUS_STACK.length - 1][FOCUSABLE_CHILDREN];
  if (focusableElement.length > 0 && e.code === EVENT_CODE.tab) {
    if (focusableElement.length === 1) {
      e.preventDefault();
      if (document.activeElement !== focusableElement[0]) {
        focusableElement[0].focus();
      }
      return;
    }
    const goingBackward = e.shiftKey;
    const isFirst = e.target === focusableElement[0];
    const isLast = e.target === focusableElement[focusableElement.length - 1];
    if (isFirst && goingBackward) {
      e.preventDefault();
      focusableElement[focusableElement.length - 1].focus();
    }
    if (isLast && !goingBackward) {
      e.preventDefault();
      focusableElement[0].focus();
    }
  }
};
const TrapFocus = {
  beforeMount(el) {
    el[FOCUSABLE_CHILDREN] = obtainAllFocusableElements(el);
    FOCUS_STACK.push(el);
    if (FOCUS_STACK.length <= 1) {
      on$1(document, "keydown", FOCUS_HANDLER);
    }
  },
  updated(el) {
    nextTick(() => {
      el[FOCUSABLE_CHILDREN] = obtainAllFocusableElements(el);
    });
  },
  unmounted() {
    FOCUS_STACK.shift();
    if (FOCUS_STACK.length === 0) {
      off(document, "keydown", FOCUS_HANDLER);
    }
  }
};
const resizeHandler = function(entries) {
  for (const entry of entries) {
    const listeners = entry.target.__resizeListeners__ || [];
    if (listeners.length) {
      listeners.forEach((fn2) => {
        fn2();
      });
    }
  }
};
const addResizeListener = function(element, fn2) {
  if (!isClient || !element)
    return;
  if (!element.__resizeListeners__) {
    element.__resizeListeners__ = [];
    element.__ro__ = new ResizeObserver(resizeHandler);
    element.__ro__.observe(element);
  }
  element.__resizeListeners__.push(fn2);
};
const removeResizeListener = function(element, fn2) {
  var _a2;
  if (!element || !element.__resizeListeners__)
    return;
  element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn2), 1);
  if (!element.__resizeListeners__.length) {
    (_a2 = element.__ro__) == null ? void 0 : _a2.disconnect();
  }
};
const UPDATE_MODEL_EVENT = "update:modelValue";
const CHANGE_EVENT = "change";
function isKorean(text) {
  const reg = /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi;
  return reg.test(text);
}
let hiddenTextarea = void 0;
const HIDDEN_STYLE = `
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`;
const CONTEXT_STYLE = [
  "letter-spacing",
  "line-height",
  "padding-top",
  "padding-bottom",
  "font-family",
  "font-weight",
  "font-size",
  "text-rendering",
  "text-transform",
  "width",
  "text-indent",
  "padding-left",
  "padding-right",
  "border-width",
  "box-sizing"
];
function calculateNodeStyling(targetElement) {
  const style = window.getComputedStyle(targetElement);
  const boxSizing = style.getPropertyValue("box-sizing");
  const paddingSize = parseFloat(style.getPropertyValue("padding-bottom")) + parseFloat(style.getPropertyValue("padding-top"));
  const borderSize = parseFloat(style.getPropertyValue("border-bottom-width")) + parseFloat(style.getPropertyValue("border-top-width"));
  const contextStyle = CONTEXT_STYLE.map((name) => `${name}:${style.getPropertyValue(name)}`).join(";");
  return { contextStyle, paddingSize, borderSize, boxSizing };
}
function calcTextareaHeight(targetElement, minRows = 1, maxRows) {
  var _a2;
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement("textarea");
    document.body.appendChild(hiddenTextarea);
  }
  const { paddingSize, borderSize, boxSizing, contextStyle } = calculateNodeStyling(targetElement);
  hiddenTextarea.setAttribute("style", `${contextStyle};${HIDDEN_STYLE}`);
  hiddenTextarea.value = targetElement.value || targetElement.placeholder || "";
  let height = hiddenTextarea.scrollHeight;
  const result = {};
  if (boxSizing === "border-box") {
    height = height + borderSize;
  } else if (boxSizing === "content-box") {
    height = height - paddingSize;
  }
  hiddenTextarea.value = "";
  const singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
  if (isNumber$1(minRows)) {
    let minHeight = singleRowHeight * minRows;
    if (boxSizing === "border-box") {
      minHeight = minHeight + paddingSize + borderSize;
    }
    height = Math.max(minHeight, height);
    result.minHeight = `${minHeight}px`;
  }
  if (isNumber$1(maxRows)) {
    let maxHeight = singleRowHeight * maxRows;
    if (boxSizing === "border-box") {
      maxHeight = maxHeight + paddingSize + borderSize;
    }
    height = Math.min(maxHeight, height);
  }
  result.height = `${height}px`;
  (_a2 = hiddenTextarea.parentNode) == null ? void 0 : _a2.removeChild(hiddenTextarea);
  hiddenTextarea = void 0;
  return result;
}
const inputProps = buildProps({
  size: useSizeProp,
  disabled: Boolean,
  modelValue: {
    type: definePropType(void 0),
    default: ""
  },
  type: {
    type: String,
    default: "text"
  },
  resize: {
    type: String,
    values: ["none", "both", "horizontal", "vertical"]
  },
  autosize: {
    type: definePropType([Boolean, Object]),
    default: false
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  placeholder: {
    type: String
  },
  form: {
    type: String,
    default: ""
  },
  readonly: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  showPassword: {
    type: Boolean,
    default: false
  },
  showWordLimit: {
    type: Boolean,
    default: false
  },
  suffixIcon: {
    type: definePropType([String, Object]),
    default: ""
  },
  prefixIcon: {
    type: definePropType([String, Object]),
    default: ""
  },
  label: {
    type: String
  },
  tabindex: {
    type: [Number, String]
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  inputStyle: {
    type: definePropType([Object, Array, String]),
    default: () => mutable({})
  }
});
const inputEmits = {
  [UPDATE_MODEL_EVENT]: (value) => isString$2(value),
  input: (value) => isString$2(value),
  change: (value) => isString$2(value),
  focus: (evt) => evt instanceof FocusEvent,
  blur: (evt) => evt instanceof FocusEvent,
  clear: () => true,
  mouseleave: (evt) => evt instanceof MouseEvent,
  mouseenter: (evt) => evt instanceof MouseEvent,
  keydown: (evt) => evt instanceof KeyboardEvent,
  compositionstart: (evt) => evt instanceof CompositionEvent,
  compositionupdate: (evt) => evt instanceof CompositionEvent,
  compositionend: (evt) => evt instanceof CompositionEvent
};
const PENDANT_MAP = {
  suffix: "append",
  prefix: "prepend"
};
const _sfc_main$L = defineComponent({
  name: "ElInput",
  components: { ElIcon, CircleClose: circleClose, IconView: view },
  inheritAttrs: false,
  props: inputProps,
  emits: inputEmits,
  setup(props, { slots, emit, attrs: rawAttrs }) {
    const instance2 = getCurrentInstance();
    const attrs = useAttrs();
    const { form, formItem } = useFormItem();
    const inputSize = useSize();
    const inputDisabled = useDisabled();
    const nsInput = useNamespace("input");
    const nsTextarea = useNamespace("textarea");
    const input = ref();
    const textarea = ref();
    const focused = ref(false);
    const hovering = ref(false);
    const isComposing = ref(false);
    const passwordVisible = ref(false);
    const _textareaCalcStyle = shallowRef(props.inputStyle);
    const inputOrTextarea = computed(() => input.value || textarea.value);
    const needStatusIcon = computed(() => {
      var _a2;
      return (_a2 = form == null ? void 0 : form.statusIcon) != null ? _a2 : false;
    });
    const validateState = computed(() => (formItem == null ? void 0 : formItem.validateState) || "");
    const validateIcon = computed(() => ValidateComponentsMap[validateState.value]);
    const containerStyle = computed(() => rawAttrs.style);
    const computedTextareaStyle = computed(() => [
      props.inputStyle,
      _textareaCalcStyle.value,
      { resize: props.resize }
    ]);
    const nativeInputValue = computed(() => props.modelValue === null || props.modelValue === void 0 ? "" : String(props.modelValue));
    const showClear = computed(() => props.clearable && !inputDisabled.value && !props.readonly && !!nativeInputValue.value && (focused.value || hovering.value));
    const showPwdVisible = computed(() => props.showPassword && !inputDisabled.value && !props.readonly && (!!nativeInputValue.value || focused.value));
    const isWordLimitVisible = computed(() => props.showWordLimit && !!attrs.value.maxlength && (props.type === "text" || props.type === "textarea") && !inputDisabled.value && !props.readonly && !props.showPassword);
    const textLength = computed(() => Array.from(nativeInputValue.value).length);
    const inputExceed = computed(() => !!isWordLimitVisible.value && textLength.value > Number(attrs.value.maxlength));
    const resizeTextarea = () => {
      const { type: type4, autosize } = props;
      if (!isClient || type4 !== "textarea")
        return;
      if (autosize) {
        const minRows = isObject$6(autosize) ? autosize.minRows : void 0;
        const maxRows = isObject$6(autosize) ? autosize.maxRows : void 0;
        _textareaCalcStyle.value = {
          ...calcTextareaHeight(textarea.value, minRows, maxRows)
        };
      } else {
        _textareaCalcStyle.value = {
          minHeight: calcTextareaHeight(textarea.value).minHeight
        };
      }
    };
    const setNativeInputValue = () => {
      const input2 = inputOrTextarea.value;
      if (!input2 || input2.value === nativeInputValue.value)
        return;
      input2.value = nativeInputValue.value;
    };
    const calcIconOffset = (place) => {
      const { el } = instance2.vnode;
      if (!el)
        return;
      const elList = Array.from(el.querySelectorAll(`.${nsInput.e(place)}`));
      const target = elList.find((item) => item.parentNode === el);
      if (!target)
        return;
      const pendant = PENDANT_MAP[place];
      if (slots[pendant]) {
        target.style.transform = `translateX(${place === "suffix" ? "-" : ""}${el.querySelector(`.${nsInput.be("group", pendant)}`).offsetWidth}px)`;
      } else {
        target.removeAttribute("style");
      }
    };
    const updateIconOffset = () => {
      calcIconOffset("prefix");
      calcIconOffset("suffix");
    };
    const handleInput = (event) => {
      const { value } = event.target;
      if (isComposing.value)
        return;
      if (value === nativeInputValue.value)
        return;
      emit(UPDATE_MODEL_EVENT, value);
      emit("input", value);
      nextTick(setNativeInputValue);
    };
    const handleChange = (event) => {
      emit("change", event.target.value);
    };
    const focus = () => {
      nextTick(() => {
        var _a2;
        (_a2 = inputOrTextarea.value) == null ? void 0 : _a2.focus();
      });
    };
    const blur = () => {
      var _a2;
      (_a2 = inputOrTextarea.value) == null ? void 0 : _a2.blur();
    };
    const handleFocus = (event) => {
      focused.value = true;
      emit("focus", event);
    };
    const handleBlur = (event) => {
      var _a2;
      focused.value = false;
      emit("blur", event);
      if (props.validateEvent) {
        (_a2 = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a2.call(formItem, "blur");
      }
    };
    const select = () => {
      var _a2;
      (_a2 = inputOrTextarea.value) == null ? void 0 : _a2.select();
    };
    const handleCompositionStart = (event) => {
      emit("compositionstart", event);
      isComposing.value = true;
    };
    const handleCompositionUpdate = (event) => {
      var _a2;
      emit("compositionupdate", event);
      const text = (_a2 = event.target) == null ? void 0 : _a2.value;
      const lastCharacter = text[text.length - 1] || "";
      isComposing.value = !isKorean(lastCharacter);
    };
    const handleCompositionEnd = (event) => {
      emit("compositionend", event);
      if (isComposing.value) {
        isComposing.value = false;
        handleInput(event);
      }
    };
    const clear2 = () => {
      emit(UPDATE_MODEL_EVENT, "");
      emit("change", "");
      emit("clear");
      emit("input", "");
    };
    const handlePasswordVisible = () => {
      passwordVisible.value = !passwordVisible.value;
      focus();
    };
    const suffixVisible = computed(() => !!slots.suffix || !!props.suffixIcon || showClear.value || props.showPassword || isWordLimitVisible.value || !!validateState.value && needStatusIcon.value);
    watch(() => props.modelValue, () => {
      var _a2;
      nextTick(resizeTextarea);
      if (props.validateEvent) {
        (_a2 = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a2.call(formItem, "change");
      }
    });
    watch(nativeInputValue, () => setNativeInputValue());
    watch(() => props.type, () => {
      nextTick(() => {
        setNativeInputValue();
        resizeTextarea();
        updateIconOffset();
      });
    });
    onMounted(() => {
      setNativeInputValue();
      updateIconOffset();
      nextTick(resizeTextarea);
    });
    onUpdated(() => {
      nextTick(updateIconOffset);
    });
    const onMouseLeave = (evt) => {
      hovering.value = false;
      emit("mouseleave", evt);
    };
    const onMouseEnter = (evt) => {
      hovering.value = true;
      emit("mouseenter", evt);
    };
    const handleKeydown = (evt) => {
      emit("keydown", evt);
    };
    return {
      input,
      textarea,
      attrs,
      inputSize,
      validateState,
      validateIcon,
      containerStyle,
      computedTextareaStyle,
      inputDisabled,
      showClear,
      showPwdVisible,
      isWordLimitVisible,
      textLength,
      hovering,
      inputExceed,
      passwordVisible,
      inputOrTextarea,
      suffixVisible,
      needStatusIcon,
      resizeTextarea,
      handleInput,
      handleChange,
      handleFocus,
      handleBlur,
      handleCompositionStart,
      handleCompositionUpdate,
      handleCompositionEnd,
      handlePasswordVisible,
      clear: clear2,
      select,
      focus,
      blur,
      onMouseLeave,
      onMouseEnter,
      handleKeydown,
      nsInput,
      nsTextarea
    };
  }
});
const _hoisted_1$r = ["type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder"];
const _hoisted_2$g = ["tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder"];
function _sfc_render$F(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = resolveComponent("el-icon");
  const _component_circle_close = resolveComponent("circle-close");
  const _component_icon_view = resolveComponent("icon-view");
  return withDirectives((openBlock(), createElementBlock("div", {
    class: normalizeClass([
      _ctx.type === "textarea" ? _ctx.nsTextarea.b() : _ctx.nsInput.b(),
      _ctx.nsInput.m(_ctx.inputSize),
      _ctx.nsInput.is("disabled", _ctx.inputDisabled),
      _ctx.nsInput.is("exceed", _ctx.inputExceed),
      {
        [_ctx.nsInput.b("group")]: _ctx.$slots.prepend || _ctx.$slots.append,
        [_ctx.nsInput.bm("group", "append")]: _ctx.$slots.append,
        [_ctx.nsInput.bm("group", "prepend")]: _ctx.$slots.prepend,
        [_ctx.nsInput.m("prefix")]: _ctx.$slots.prefix || _ctx.prefixIcon,
        [_ctx.nsInput.m("suffix")]: _ctx.$slots.suffix || _ctx.suffixIcon || _ctx.clearable || _ctx.showPassword,
        [_ctx.nsInput.m("suffix--password-clear")]: _ctx.clearable && _ctx.showPassword
      },
      _ctx.$attrs.class
    ]),
    style: normalizeStyle(_ctx.containerStyle),
    onMouseenter: _cache[17] || (_cache[17] = (...args) => _ctx.onMouseEnter && _ctx.onMouseEnter(...args)),
    onMouseleave: _cache[18] || (_cache[18] = (...args) => _ctx.onMouseLeave && _ctx.onMouseLeave(...args))
  }, [
    createCommentVNode(" input "),
    _ctx.type !== "textarea" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
      createCommentVNode(" prepend slot "),
      _ctx.$slots.prepend ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(_ctx.nsInput.be("group", "prepend"))
      }, [
        renderSlot(_ctx.$slots, "prepend")
      ], 2)) : createCommentVNode("v-if", true),
      createBaseVNode("input", mergeProps({
        ref: "input",
        class: _ctx.nsInput.e("inner")
      }, _ctx.attrs, {
        type: _ctx.showPassword ? _ctx.passwordVisible ? "text" : "password" : _ctx.type,
        disabled: _ctx.inputDisabled,
        readonly: _ctx.readonly,
        autocomplete: _ctx.autocomplete,
        tabindex: _ctx.tabindex,
        "aria-label": _ctx.label,
        placeholder: _ctx.placeholder,
        style: _ctx.inputStyle,
        onCompositionstart: _cache[0] || (_cache[0] = (...args) => _ctx.handleCompositionStart && _ctx.handleCompositionStart(...args)),
        onCompositionupdate: _cache[1] || (_cache[1] = (...args) => _ctx.handleCompositionUpdate && _ctx.handleCompositionUpdate(...args)),
        onCompositionend: _cache[2] || (_cache[2] = (...args) => _ctx.handleCompositionEnd && _ctx.handleCompositionEnd(...args)),
        onInput: _cache[3] || (_cache[3] = (...args) => _ctx.handleInput && _ctx.handleInput(...args)),
        onFocus: _cache[4] || (_cache[4] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
        onBlur: _cache[5] || (_cache[5] = (...args) => _ctx.handleBlur && _ctx.handleBlur(...args)),
        onChange: _cache[6] || (_cache[6] = (...args) => _ctx.handleChange && _ctx.handleChange(...args)),
        onKeydown: _cache[7] || (_cache[7] = (...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args))
      }), null, 16, _hoisted_1$r),
      createCommentVNode(" prefix slot "),
      _ctx.$slots.prefix || _ctx.prefixIcon ? (openBlock(), createElementBlock("span", {
        key: 1,
        class: normalizeClass(_ctx.nsInput.e("prefix"))
      }, [
        createBaseVNode("span", {
          class: normalizeClass(_ctx.nsInput.e("prefix-inner"))
        }, [
          renderSlot(_ctx.$slots, "prefix"),
          _ctx.prefixIcon ? (openBlock(), createBlock(_component_el_icon, {
            key: 0,
            class: normalizeClass(_ctx.nsInput.e("icon"))
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.prefixIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : createCommentVNode("v-if", true)
        ], 2)
      ], 2)) : createCommentVNode("v-if", true),
      createCommentVNode(" suffix slot "),
      _ctx.suffixVisible ? (openBlock(), createElementBlock("span", {
        key: 2,
        class: normalizeClass(_ctx.nsInput.e("suffix"))
      }, [
        createBaseVNode("span", {
          class: normalizeClass(_ctx.nsInput.e("suffix-inner"))
        }, [
          !_ctx.showClear || !_ctx.showPwdVisible || !_ctx.isWordLimitVisible ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            renderSlot(_ctx.$slots, "suffix"),
            _ctx.suffixIcon ? (openBlock(), createBlock(_component_el_icon, {
              key: 0,
              class: normalizeClass(_ctx.nsInput.e("icon"))
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(_ctx.suffixIcon)))
              ]),
              _: 1
            }, 8, ["class"])) : createCommentVNode("v-if", true)
          ], 64)) : createCommentVNode("v-if", true),
          _ctx.showClear ? (openBlock(), createBlock(_component_el_icon, {
            key: 1,
            class: normalizeClass([_ctx.nsInput.e("icon"), _ctx.nsInput.e("clear")]),
            onMousedown: _cache[8] || (_cache[8] = withModifiers(() => {
            }, ["prevent"])),
            onClick: _ctx.clear
          }, {
            default: withCtx(() => [
              createVNode(_component_circle_close)
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true),
          _ctx.showPwdVisible ? (openBlock(), createBlock(_component_el_icon, {
            key: 2,
            class: normalizeClass([_ctx.nsInput.e("icon"), _ctx.nsInput.e("clear")]),
            onClick: _ctx.handlePasswordVisible
          }, {
            default: withCtx(() => [
              createVNode(_component_icon_view)
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true),
          _ctx.isWordLimitVisible ? (openBlock(), createElementBlock("span", {
            key: 3,
            class: normalizeClass(_ctx.nsInput.e("count"))
          }, [
            createBaseVNode("span", {
              class: normalizeClass(_ctx.nsInput.e("count-inner"))
            }, toDisplayString(_ctx.textLength) + " / " + toDisplayString(_ctx.attrs.maxlength), 3)
          ], 2)) : createCommentVNode("v-if", true)
        ], 2),
        _ctx.validateState && _ctx.validateIcon && _ctx.needStatusIcon ? (openBlock(), createBlock(_component_el_icon, {
          key: 0,
          class: normalizeClass([_ctx.nsInput.e("icon"), _ctx.nsInput.e("validateIcon")])
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.validateIcon)))
          ]),
          _: 1
        }, 8, ["class"])) : createCommentVNode("v-if", true)
      ], 2)) : createCommentVNode("v-if", true),
      createCommentVNode(" append slot "),
      _ctx.$slots.append ? (openBlock(), createElementBlock("div", {
        key: 3,
        class: normalizeClass(_ctx.nsInput.be("group", "append"))
      }, [
        renderSlot(_ctx.$slots, "append")
      ], 2)) : createCommentVNode("v-if", true)
    ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
      createCommentVNode(" textarea "),
      createBaseVNode("textarea", mergeProps({
        ref: "textarea",
        class: _ctx.nsTextarea.e("inner")
      }, _ctx.attrs, {
        tabindex: _ctx.tabindex,
        disabled: _ctx.inputDisabled,
        readonly: _ctx.readonly,
        autocomplete: _ctx.autocomplete,
        style: _ctx.computedTextareaStyle,
        "aria-label": _ctx.label,
        placeholder: _ctx.placeholder,
        onCompositionstart: _cache[9] || (_cache[9] = (...args) => _ctx.handleCompositionStart && _ctx.handleCompositionStart(...args)),
        onCompositionupdate: _cache[10] || (_cache[10] = (...args) => _ctx.handleCompositionUpdate && _ctx.handleCompositionUpdate(...args)),
        onCompositionend: _cache[11] || (_cache[11] = (...args) => _ctx.handleCompositionEnd && _ctx.handleCompositionEnd(...args)),
        onInput: _cache[12] || (_cache[12] = (...args) => _ctx.handleInput && _ctx.handleInput(...args)),
        onFocus: _cache[13] || (_cache[13] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
        onBlur: _cache[14] || (_cache[14] = (...args) => _ctx.handleBlur && _ctx.handleBlur(...args)),
        onChange: _cache[15] || (_cache[15] = (...args) => _ctx.handleChange && _ctx.handleChange(...args)),
        onKeydown: _cache[16] || (_cache[16] = (...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args))
      }), null, 16, _hoisted_2$g),
      _ctx.isWordLimitVisible ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(_ctx.nsInput.e("count"))
      }, toDisplayString(_ctx.textLength) + " / " + toDisplayString(_ctx.attrs.maxlength), 3)) : createCommentVNode("v-if", true)
    ], 64))
  ], 38)), [
    [vShow, _ctx.type !== "hidden"]
  ]);
}
var Input = /* @__PURE__ */ _export_sfc$2(_sfc_main$L, [["render", _sfc_render$F]]);
const ElInput = withInstall(Input);
const BAR_MAP = {
  vertical: {
    offset: "offsetHeight",
    scroll: "scrollTop",
    scrollSize: "scrollHeight",
    size: "height",
    key: "vertical",
    axis: "Y",
    client: "clientY",
    direction: "top"
  },
  horizontal: {
    offset: "offsetWidth",
    scroll: "scrollLeft",
    scrollSize: "scrollWidth",
    size: "width",
    key: "horizontal",
    axis: "X",
    client: "clientX",
    direction: "left"
  }
};
const renderThumbStyle = ({ move, size: size2, bar }) => ({
  [bar.size]: size2,
  transform: `translate${bar.axis}(${move}%)`
});
const thumbProps = buildProps({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: true
  },
  always: Boolean
});
const COMPONENT_NAME = "Thumb";
const _sfc_main$K = defineComponent({
  name: COMPONENT_NAME,
  props: thumbProps,
  setup(props) {
    const scrollbar = inject(scrollbarContextKey);
    const ns = useNamespace("scrollbar");
    if (!scrollbar)
      throwError(COMPONENT_NAME, "can not inject scrollbar context");
    const instance2 = ref();
    const thumb = ref();
    const thumbState = ref({});
    const visible = ref(false);
    let cursorDown = false;
    let cursorLeave = false;
    let originalOnSelectStart = isClient ? document.onselectstart : null;
    const bar = computed(() => BAR_MAP[props.vertical ? "vertical" : "horizontal"]);
    const thumbStyle = computed(() => renderThumbStyle({
      size: props.size,
      move: props.move,
      bar: bar.value
    }));
    const offsetRatio = computed(() => instance2.value[bar.value.offset] ** 2 / scrollbar.wrapElement[bar.value.scrollSize] / props.ratio / thumb.value[bar.value.offset]);
    const clickThumbHandler = (e) => {
      var _a2;
      e.stopPropagation();
      if (e.ctrlKey || [1, 2].includes(e.button))
        return;
      (_a2 = window.getSelection()) == null ? void 0 : _a2.removeAllRanges();
      startDrag(e);
      const el = e.currentTarget;
      if (!el)
        return;
      thumbState.value[bar.value.axis] = el[bar.value.offset] - (e[bar.value.client] - el.getBoundingClientRect()[bar.value.direction]);
    };
    const clickTrackHandler = (e) => {
      if (!thumb.value || !instance2.value || !scrollbar.wrapElement)
        return;
      const offset = Math.abs(e.target.getBoundingClientRect()[bar.value.direction] - e[bar.value.client]);
      const thumbHalf = thumb.value[bar.value.offset] / 2;
      const thumbPositionPercentage = (offset - thumbHalf) * 100 * offsetRatio.value / instance2.value[bar.value.offset];
      scrollbar.wrapElement[bar.value.scroll] = thumbPositionPercentage * scrollbar.wrapElement[bar.value.scrollSize] / 100;
    };
    const startDrag = (e) => {
      e.stopImmediatePropagation();
      cursorDown = true;
      document.addEventListener("mousemove", mouseMoveDocumentHandler);
      document.addEventListener("mouseup", mouseUpDocumentHandler);
      originalOnSelectStart = document.onselectstart;
      document.onselectstart = () => false;
    };
    const mouseMoveDocumentHandler = (e) => {
      if (!instance2.value || !thumb.value)
        return;
      if (cursorDown === false)
        return;
      const prevPage = thumbState.value[bar.value.axis];
      if (!prevPage)
        return;
      const offset = (instance2.value.getBoundingClientRect()[bar.value.direction] - e[bar.value.client]) * -1;
      const thumbClickPosition = thumb.value[bar.value.offset] - prevPage;
      const thumbPositionPercentage = (offset - thumbClickPosition) * 100 * offsetRatio.value / instance2.value[bar.value.offset];
      scrollbar.wrapElement[bar.value.scroll] = thumbPositionPercentage * scrollbar.wrapElement[bar.value.scrollSize] / 100;
    };
    const mouseUpDocumentHandler = () => {
      cursorDown = false;
      thumbState.value[bar.value.axis] = 0;
      document.removeEventListener("mousemove", mouseMoveDocumentHandler);
      document.removeEventListener("mouseup", mouseUpDocumentHandler);
      restoreOnselectstart();
      if (cursorLeave)
        visible.value = false;
    };
    const mouseMoveScrollbarHandler = () => {
      cursorLeave = false;
      visible.value = !!props.size;
    };
    const mouseLeaveScrollbarHandler = () => {
      cursorLeave = true;
      visible.value = cursorDown;
    };
    onBeforeUnmount(() => {
      restoreOnselectstart();
      document.removeEventListener("mouseup", mouseUpDocumentHandler);
    });
    const restoreOnselectstart = () => {
      if (document.onselectstart !== originalOnSelectStart)
        document.onselectstart = originalOnSelectStart;
    };
    useEventListener(toRef(scrollbar, "scrollbarElement"), "mousemove", mouseMoveScrollbarHandler);
    useEventListener(toRef(scrollbar, "scrollbarElement"), "mouseleave", mouseLeaveScrollbarHandler);
    return {
      ns,
      instance: instance2,
      thumb,
      bar,
      thumbStyle,
      visible,
      clickTrackHandler,
      clickThumbHandler
    };
  }
});
function _sfc_render$E(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, {
    name: _ctx.ns.b("fade")
  }, {
    default: withCtx(() => [
      withDirectives(createBaseVNode("div", {
        ref: "instance",
        class: normalizeClass([_ctx.ns.e("bar"), _ctx.ns.is(_ctx.bar.key)]),
        onMousedown: _cache[1] || (_cache[1] = (...args) => _ctx.clickTrackHandler && _ctx.clickTrackHandler(...args))
      }, [
        createBaseVNode("div", {
          ref: "thumb",
          class: normalizeClass(_ctx.ns.e("thumb")),
          style: normalizeStyle(_ctx.thumbStyle),
          onMousedown: _cache[0] || (_cache[0] = (...args) => _ctx.clickThumbHandler && _ctx.clickThumbHandler(...args))
        }, null, 38)
      ], 34), [
        [vShow, _ctx.always || _ctx.visible]
      ])
    ]),
    _: 1
  }, 8, ["name"]);
}
var Thumb = /* @__PURE__ */ _export_sfc$2(_sfc_main$K, [["render", _sfc_render$E]]);
const barProps = buildProps({
  always: {
    type: Boolean,
    default: true
  },
  width: {
    type: String,
    default: ""
  },
  height: {
    type: String,
    default: ""
  },
  ratioX: {
    type: Number,
    default: 1
  },
  ratioY: {
    type: Number,
    default: 1
  }
});
const _sfc_main$J = defineComponent({
  components: {
    Thumb
  },
  props: barProps,
  setup(props) {
    const moveX = ref(0);
    const moveY = ref(0);
    const GAP = 4;
    const handleScroll = (wrap) => {
      if (wrap) {
        const offsetHeight = wrap.offsetHeight - GAP;
        const offsetWidth = wrap.offsetWidth - GAP;
        moveY.value = wrap.scrollTop * 100 / offsetHeight * props.ratioY;
        moveX.value = wrap.scrollLeft * 100 / offsetWidth * props.ratioX;
      }
    };
    return {
      handleScroll,
      moveX,
      moveY
    };
  }
});
function _sfc_render$D(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_thumb = resolveComponent("thumb");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_thumb, {
      move: _ctx.moveX,
      ratio: _ctx.ratioX,
      size: _ctx.width,
      always: _ctx.always
    }, null, 8, ["move", "ratio", "size", "always"]),
    createVNode(_component_thumb, {
      move: _ctx.moveY,
      ratio: _ctx.ratioY,
      size: _ctx.height,
      vertical: "",
      always: _ctx.always
    }, null, 8, ["move", "ratio", "size", "always"])
  ], 64);
}
var Bar$1 = /* @__PURE__ */ _export_sfc$2(_sfc_main$J, [["render", _sfc_render$D]]);
const scrollbarProps = buildProps({
  height: {
    type: [String, Number],
    default: ""
  },
  maxHeight: {
    type: [String, Number],
    default: ""
  },
  native: {
    type: Boolean,
    default: false
  },
  wrapStyle: {
    type: definePropType([String, Object, Array]),
    default: ""
  },
  wrapClass: {
    type: [String, Array],
    default: ""
  },
  viewClass: {
    type: [String, Array],
    default: ""
  },
  viewStyle: {
    type: [String, Array],
    default: ""
  },
  noresize: Boolean,
  tag: {
    type: String,
    default: "div"
  },
  always: {
    type: Boolean,
    default: false
  },
  minSize: {
    type: Number,
    default: 20
  }
});
const scrollbarEmits = {
  scroll: ({
    scrollTop,
    scrollLeft
  }) => isNumber$1(scrollTop) && isNumber$1(scrollLeft)
};
const _sfc_main$I = defineComponent({
  name: "ElScrollbar",
  components: {
    Bar: Bar$1
  },
  props: scrollbarProps,
  emits: scrollbarEmits,
  setup(props, { emit }) {
    const ns = useNamespace("scrollbar");
    let stopResizeObserver = void 0;
    let stopResizeListener = void 0;
    const scrollbar$ = ref();
    const wrap$ = ref();
    const resize$ = ref();
    const sizeWidth = ref("0");
    const sizeHeight = ref("0");
    const barRef = ref();
    const moveX = ref(0);
    const moveY = ref(0);
    const ratioY = ref(1);
    const ratioX = ref(1);
    const GAP = 4;
    const style = computed(() => {
      const style2 = {};
      if (props.height)
        style2.height = addUnit(props.height);
      if (props.maxHeight)
        style2.maxHeight = addUnit(props.maxHeight);
      return [props.wrapStyle, style2];
    });
    const handleScroll = () => {
      var _a2;
      if (wrap$.value) {
        (_a2 = barRef.value) == null ? void 0 : _a2.handleScroll(wrap$.value);
        emit("scroll", {
          scrollTop: wrap$.value.scrollTop,
          scrollLeft: wrap$.value.scrollLeft
        });
      }
    };
    const setScrollTop = (value) => {
      if (!isNumber$1(value)) {
        return;
      }
      wrap$.value.scrollTop = value;
    };
    const setScrollLeft = (value) => {
      if (!isNumber$1(value)) {
        return;
      }
      wrap$.value.scrollLeft = value;
    };
    const update = () => {
      if (!wrap$.value)
        return;
      const offsetHeight = wrap$.value.offsetHeight - GAP;
      const offsetWidth = wrap$.value.offsetWidth - GAP;
      const originalHeight = offsetHeight ** 2 / wrap$.value.scrollHeight;
      const originalWidth = offsetWidth ** 2 / wrap$.value.scrollWidth;
      const height = Math.max(originalHeight, props.minSize);
      const width = Math.max(originalWidth, props.minSize);
      ratioY.value = originalHeight / (offsetHeight - originalHeight) / (height / (offsetHeight - height));
      ratioX.value = originalWidth / (offsetWidth - originalWidth) / (width / (offsetWidth - width));
      sizeHeight.value = height + GAP < offsetHeight ? `${height}px` : "";
      sizeWidth.value = width + GAP < offsetWidth ? `${width}px` : "";
    };
    watch(() => props.noresize, (noresize) => {
      if (noresize) {
        stopResizeObserver == null ? void 0 : stopResizeObserver();
        stopResizeListener == null ? void 0 : stopResizeListener();
      } else {
        ({ stop: stopResizeObserver } = useResizeObserver(resize$, update));
        stopResizeListener = useEventListener("resize", update);
      }
    }, { immediate: true });
    provide(scrollbarContextKey, reactive({
      scrollbarElement: scrollbar$,
      wrapElement: wrap$
    }));
    onMounted(() => {
      if (!props.native)
        nextTick(() => update());
    });
    return {
      ns,
      scrollbar$,
      wrap$,
      resize$,
      barRef,
      moveX,
      moveY,
      ratioX,
      ratioY,
      sizeWidth,
      sizeHeight,
      style,
      update,
      handleScroll,
      setScrollTop,
      setScrollLeft
    };
  }
});
function _sfc_render$C(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_bar = resolveComponent("bar");
  return openBlock(), createElementBlock("div", {
    ref: "scrollbar$",
    class: normalizeClass(_ctx.ns.b())
  }, [
    createBaseVNode("div", {
      ref: "wrap$",
      class: normalizeClass([
        _ctx.wrapClass,
        _ctx.ns.e("wrap"),
        { [_ctx.ns.em("wrap", "hidden-default")]: !_ctx.native }
      ]),
      style: normalizeStyle(_ctx.style),
      onScroll: _cache[0] || (_cache[0] = (...args) => _ctx.handleScroll && _ctx.handleScroll(...args))
    }, [
      (openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
        ref: "resize$",
        class: normalizeClass([_ctx.ns.e("view"), _ctx.viewClass]),
        style: normalizeStyle(_ctx.viewStyle)
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "style"]))
    ], 38),
    !_ctx.native ? (openBlock(), createBlock(_component_bar, {
      key: 0,
      ref: "barRef",
      height: _ctx.sizeHeight,
      width: _ctx.sizeWidth,
      always: _ctx.always,
      "ratio-x": _ctx.ratioX,
      "ratio-y": _ctx.ratioY
    }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"])) : createCommentVNode("v-if", true)
  ], 2);
}
var Scrollbar = /* @__PURE__ */ _export_sfc$2(_sfc_main$I, [["render", _sfc_render$C]]);
const ElScrollbar = withInstall(Scrollbar);
const POPPER_INJECTION_KEY = Symbol("elPopper");
const POPPER_CONTENT_INJECTION_KEY = Symbol("elPopperContent");
const _sfc_main$H = defineComponent({
  name: "ElPopperProvider",
  inheritAttrs: false,
  setup() {
    const popperProvides = {
      triggerRef: ref(null),
      popperInstanceRef: ref(null),
      contentRef: ref(null)
    };
    provide(POPPER_INJECTION_KEY, popperProvides);
    return popperProvides;
  }
});
function _sfc_render$B(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default");
}
var Popper = /* @__PURE__ */ _export_sfc$2(_sfc_main$H, [["render", _sfc_render$B]]);
var E = "top", R = "bottom", W = "right", P = "left", me = "auto", G = [E, R, W, P], U = "start", J = "end", Xe = "clippingParents", je = "viewport", K = "popper", Ye = "reference", De = G.reduce(function(t, e) {
  return t.concat([e + "-" + U, e + "-" + J]);
}, []), Ee = [].concat(G, [me]).reduce(function(t, e) {
  return t.concat([e, e + "-" + U, e + "-" + J]);
}, []), Ge = "beforeRead", Je = "read", Ke = "afterRead", Qe = "beforeMain", Ze = "main", et = "afterMain", tt = "beforeWrite", nt = "write", rt = "afterWrite", ot = [Ge, Je, Ke, Qe, Ze, et, tt, nt, rt];
function C(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
function H(t) {
  if (t == null)
    return window;
  if (t.toString() !== "[object Window]") {
    var e = t.ownerDocument;
    return e && e.defaultView || window;
  }
  return t;
}
function Q(t) {
  var e = H(t).Element;
  return t instanceof e || t instanceof Element;
}
function B(t) {
  var e = H(t).HTMLElement;
  return t instanceof e || t instanceof HTMLElement;
}
function Pe(t) {
  if (typeof ShadowRoot == "undefined")
    return false;
  var e = H(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function Mt(t) {
  var e = t.state;
  Object.keys(e.elements).forEach(function(n) {
    var r = e.styles[n] || {}, o = e.attributes[n] || {}, i = e.elements[n];
    !B(i) || !C(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(a) {
      var s = o[a];
      s === false ? i.removeAttribute(a) : i.setAttribute(a, s === true ? "" : s);
    }));
  });
}
function Rt(t) {
  var e = t.state, n = { popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow), function() {
    Object.keys(e.elements).forEach(function(r) {
      var o = e.elements[r], i = e.attributes[r] || {}, a = Object.keys(e.styles.hasOwnProperty(r) ? e.styles[r] : n[r]), s = a.reduce(function(f, c) {
        return f[c] = "", f;
      }, {});
      !B(o) || !C(o) || (Object.assign(o.style, s), Object.keys(i).forEach(function(f) {
        o.removeAttribute(f);
      }));
    });
  };
}
var Ae = { name: "applyStyles", enabled: true, phase: "write", fn: Mt, effect: Rt, requires: ["computeStyles"] };
function q(t) {
  return t.split("-")[0];
}
var X = Math.max, ve = Math.min, Z = Math.round;
function ee(t, e) {
  e === void 0 && (e = false);
  var n = t.getBoundingClientRect(), r = 1, o = 1;
  if (B(t) && e) {
    var i = t.offsetHeight, a = t.offsetWidth;
    a > 0 && (r = Z(n.width) / a || 1), i > 0 && (o = Z(n.height) / i || 1);
  }
  return { width: n.width / r, height: n.height / o, top: n.top / o, right: n.right / r, bottom: n.bottom / o, left: n.left / r, x: n.left / r, y: n.top / o };
}
function ke(t) {
  var e = ee(t), n = t.offsetWidth, r = t.offsetHeight;
  return Math.abs(e.width - n) <= 1 && (n = e.width), Math.abs(e.height - r) <= 1 && (r = e.height), { x: t.offsetLeft, y: t.offsetTop, width: n, height: r };
}
function it(t, e) {
  var n = e.getRootNode && e.getRootNode();
  if (t.contains(e))
    return true;
  if (n && Pe(n)) {
    var r = e;
    do {
      if (r && t.isSameNode(r))
        return true;
      r = r.parentNode || r.host;
    } while (r);
  }
  return false;
}
function N(t) {
  return H(t).getComputedStyle(t);
}
function Wt(t) {
  return ["table", "td", "th"].indexOf(C(t)) >= 0;
}
function I(t) {
  return ((Q(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function ge(t) {
  return C(t) === "html" ? t : t.assignedSlot || t.parentNode || (Pe(t) ? t.host : null) || I(t);
}
function at(t) {
  return !B(t) || N(t).position === "fixed" ? null : t.offsetParent;
}
function Bt(t) {
  var e = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && B(t)) {
    var r = N(t);
    if (r.position === "fixed")
      return null;
  }
  var o = ge(t);
  for (Pe(o) && (o = o.host); B(o) && ["html", "body"].indexOf(C(o)) < 0; ) {
    var i = N(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || e && i.willChange === "filter" || e && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function se(t) {
  for (var e = H(t), n = at(t); n && Wt(n) && N(n).position === "static"; )
    n = at(n);
  return n && (C(n) === "html" || C(n) === "body" && N(n).position === "static") ? e : n || Bt(t) || e;
}
function Le(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function fe(t, e, n) {
  return X(t, ve(e, n));
}
function St(t, e, n) {
  var r = fe(t, e, n);
  return r > n ? n : r;
}
function st() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function ft(t) {
  return Object.assign({}, st(), t);
}
function ct(t, e) {
  return e.reduce(function(n, r) {
    return n[r] = t, n;
  }, {});
}
var Tt = function(t, e) {
  return t = typeof t == "function" ? t(Object.assign({}, e.rects, { placement: e.placement })) : t, ft(typeof t != "number" ? t : ct(t, G));
};
function Ht(t) {
  var e, n = t.state, r = t.name, o = t.options, i = n.elements.arrow, a = n.modifiersData.popperOffsets, s = q(n.placement), f = Le(s), c = [P, W].indexOf(s) >= 0, u = c ? "height" : "width";
  if (!(!i || !a)) {
    var m = Tt(o.padding, n), v = ke(i), l = f === "y" ? E : P, h2 = f === "y" ? R : W, p2 = n.rects.reference[u] + n.rects.reference[f] - a[f] - n.rects.popper[u], g = a[f] - n.rects.reference[f], x = se(i), y = x ? f === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0, $ = p2 / 2 - g / 2, d = m[l], b = y - v[u] - m[h2], w = y / 2 - v[u] / 2 + $, O = fe(d, w, b), j = f;
    n.modifiersData[r] = (e = {}, e[j] = O, e.centerOffset = O - w, e);
  }
}
function Ct(t) {
  var e = t.state, n = t.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = e.elements.popper.querySelector(o), !o) || !it(e.elements.popper, o) || (e.elements.arrow = o));
}
var pt = { name: "arrow", enabled: true, phase: "main", fn: Ht, effect: Ct, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function te(t) {
  return t.split("-")[1];
}
var qt = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Vt(t) {
  var e = t.x, n = t.y, r = window, o = r.devicePixelRatio || 1;
  return { x: Z(e * o) / o || 0, y: Z(n * o) / o || 0 };
}
function ut(t) {
  var e, n = t.popper, r = t.popperRect, o = t.placement, i = t.variation, a = t.offsets, s = t.position, f = t.gpuAcceleration, c = t.adaptive, u = t.roundOffsets, m = t.isFixed, v = a.x, l = v === void 0 ? 0 : v, h2 = a.y, p2 = h2 === void 0 ? 0 : h2, g = typeof u == "function" ? u({ x: l, y: p2 }) : { x: l, y: p2 };
  l = g.x, p2 = g.y;
  var x = a.hasOwnProperty("x"), y = a.hasOwnProperty("y"), $ = P, d = E, b = window;
  if (c) {
    var w = se(n), O = "clientHeight", j = "clientWidth";
    if (w === H(n) && (w = I(n), N(w).position !== "static" && s === "absolute" && (O = "scrollHeight", j = "scrollWidth")), w = w, o === E || (o === P || o === W) && i === J) {
      d = R;
      var A = m && w === b && b.visualViewport ? b.visualViewport.height : w[O];
      p2 -= A - r.height, p2 *= f ? 1 : -1;
    }
    if (o === P || (o === E || o === R) && i === J) {
      $ = W;
      var k = m && w === b && b.visualViewport ? b.visualViewport.width : w[j];
      l -= k - r.width, l *= f ? 1 : -1;
    }
  }
  var D = Object.assign({ position: s }, c && qt), S = u === true ? Vt({ x: l, y: p2 }) : { x: l, y: p2 };
  if (l = S.x, p2 = S.y, f) {
    var L;
    return Object.assign({}, D, (L = {}, L[d] = y ? "0" : "", L[$] = x ? "0" : "", L.transform = (b.devicePixelRatio || 1) <= 1 ? "translate(" + l + "px, " + p2 + "px)" : "translate3d(" + l + "px, " + p2 + "px, 0)", L));
  }
  return Object.assign({}, D, (e = {}, e[d] = y ? p2 + "px" : "", e[$] = x ? l + "px" : "", e.transform = "", e));
}
function Nt(t) {
  var e = t.state, n = t.options, r = n.gpuAcceleration, o = r === void 0 ? true : r, i = n.adaptive, a = i === void 0 ? true : i, s = n.roundOffsets, f = s === void 0 ? true : s, c = { placement: q(e.placement), variation: te(e.placement), popper: e.elements.popper, popperRect: e.rects.popper, gpuAcceleration: o, isFixed: e.options.strategy === "fixed" };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, ut(Object.assign({}, c, { offsets: e.modifiersData.popperOffsets, position: e.options.strategy, adaptive: a, roundOffsets: f })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, ut(Object.assign({}, c, { offsets: e.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: f })))), e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-placement": e.placement });
}
var Me = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: Nt, data: {} }, ye = { passive: true };
function It(t) {
  var e = t.state, n = t.instance, r = t.options, o = r.scroll, i = o === void 0 ? true : o, a = r.resize, s = a === void 0 ? true : a, f = H(e.elements.popper), c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return i && c.forEach(function(u) {
    u.addEventListener("scroll", n.update, ye);
  }), s && f.addEventListener("resize", n.update, ye), function() {
    i && c.forEach(function(u) {
      u.removeEventListener("scroll", n.update, ye);
    }), s && f.removeEventListener("resize", n.update, ye);
  };
}
var Re = { name: "eventListeners", enabled: true, phase: "write", fn: function() {
}, effect: It, data: {} }, _t = { left: "right", right: "left", bottom: "top", top: "bottom" };
function be(t) {
  return t.replace(/left|right|bottom|top/g, function(e) {
    return _t[e];
  });
}
var zt = { start: "end", end: "start" };
function lt(t) {
  return t.replace(/start|end/g, function(e) {
    return zt[e];
  });
}
function We(t) {
  var e = H(t), n = e.pageXOffset, r = e.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function Be(t) {
  return ee(I(t)).left + We(t).scrollLeft;
}
function Ft(t) {
  var e = H(t), n = I(t), r = e.visualViewport, o = n.clientWidth, i = n.clientHeight, a = 0, s = 0;
  return r && (o = r.width, i = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = r.offsetLeft, s = r.offsetTop)), { width: o, height: i, x: a + Be(t), y: s };
}
function Ut(t) {
  var e, n = I(t), r = We(t), o = (e = t.ownerDocument) == null ? void 0 : e.body, i = X(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = X(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -r.scrollLeft + Be(t), f = -r.scrollTop;
  return N(o || n).direction === "rtl" && (s += X(n.clientWidth, o ? o.clientWidth : 0) - i), { width: i, height: a, x: s, y: f };
}
function Se(t) {
  var e = N(t), n = e.overflow, r = e.overflowX, o = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function dt(t) {
  return ["html", "body", "#document"].indexOf(C(t)) >= 0 ? t.ownerDocument.body : B(t) && Se(t) ? t : dt(ge(t));
}
function ce(t, e) {
  var n;
  e === void 0 && (e = []);
  var r = dt(t), o = r === ((n = t.ownerDocument) == null ? void 0 : n.body), i = H(r), a = o ? [i].concat(i.visualViewport || [], Se(r) ? r : []) : r, s = e.concat(a);
  return o ? s : s.concat(ce(ge(a)));
}
function Te(t) {
  return Object.assign({}, t, { left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height });
}
function Xt(t) {
  var e = ee(t);
  return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e;
}
function ht(t, e) {
  return e === je ? Te(Ft(t)) : Q(e) ? Xt(e) : Te(Ut(I(t)));
}
function Yt(t) {
  var e = ce(ge(t)), n = ["absolute", "fixed"].indexOf(N(t).position) >= 0, r = n && B(t) ? se(t) : t;
  return Q(r) ? e.filter(function(o) {
    return Q(o) && it(o, r) && C(o) !== "body";
  }) : [];
}
function Gt(t, e, n) {
  var r = e === "clippingParents" ? Yt(t) : [].concat(e), o = [].concat(r, [n]), i = o[0], a = o.reduce(function(s, f) {
    var c = ht(t, f);
    return s.top = X(c.top, s.top), s.right = ve(c.right, s.right), s.bottom = ve(c.bottom, s.bottom), s.left = X(c.left, s.left), s;
  }, ht(t, i));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function mt(t) {
  var e = t.reference, n = t.element, r = t.placement, o = r ? q(r) : null, i = r ? te(r) : null, a = e.x + e.width / 2 - n.width / 2, s = e.y + e.height / 2 - n.height / 2, f;
  switch (o) {
    case E:
      f = { x: a, y: e.y - n.height };
      break;
    case R:
      f = { x: a, y: e.y + e.height };
      break;
    case W:
      f = { x: e.x + e.width, y: s };
      break;
    case P:
      f = { x: e.x - n.width, y: s };
      break;
    default:
      f = { x: e.x, y: e.y };
  }
  var c = o ? Le(o) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (i) {
      case U:
        f[c] = f[c] - (e[u] / 2 - n[u] / 2);
        break;
      case J:
        f[c] = f[c] + (e[u] / 2 - n[u] / 2);
        break;
    }
  }
  return f;
}
function ne(t, e) {
  e === void 0 && (e = {});
  var n = e, r = n.placement, o = r === void 0 ? t.placement : r, i = n.boundary, a = i === void 0 ? Xe : i, s = n.rootBoundary, f = s === void 0 ? je : s, c = n.elementContext, u = c === void 0 ? K : c, m = n.altBoundary, v = m === void 0 ? false : m, l = n.padding, h2 = l === void 0 ? 0 : l, p2 = ft(typeof h2 != "number" ? h2 : ct(h2, G)), g = u === K ? Ye : K, x = t.rects.popper, y = t.elements[v ? g : u], $ = Gt(Q(y) ? y : y.contextElement || I(t.elements.popper), a, f), d = ee(t.elements.reference), b = mt({ reference: d, element: x, strategy: "absolute", placement: o }), w = Te(Object.assign({}, x, b)), O = u === K ? w : d, j = { top: $.top - O.top + p2.top, bottom: O.bottom - $.bottom + p2.bottom, left: $.left - O.left + p2.left, right: O.right - $.right + p2.right }, A = t.modifiersData.offset;
  if (u === K && A) {
    var k = A[o];
    Object.keys(j).forEach(function(D) {
      var S = [W, R].indexOf(D) >= 0 ? 1 : -1, L = [E, R].indexOf(D) >= 0 ? "y" : "x";
      j[D] += k[L] * S;
    });
  }
  return j;
}
function Jt(t, e) {
  e === void 0 && (e = {});
  var n = e, r = n.placement, o = n.boundary, i = n.rootBoundary, a = n.padding, s = n.flipVariations, f = n.allowedAutoPlacements, c = f === void 0 ? Ee : f, u = te(r), m = u ? s ? De : De.filter(function(h2) {
    return te(h2) === u;
  }) : G, v = m.filter(function(h2) {
    return c.indexOf(h2) >= 0;
  });
  v.length === 0 && (v = m);
  var l = v.reduce(function(h2, p2) {
    return h2[p2] = ne(t, { placement: p2, boundary: o, rootBoundary: i, padding: a })[q(p2)], h2;
  }, {});
  return Object.keys(l).sort(function(h2, p2) {
    return l[h2] - l[p2];
  });
}
function Kt(t) {
  if (q(t) === me)
    return [];
  var e = be(t);
  return [lt(t), e, lt(e)];
}
function Qt(t) {
  var e = t.state, n = t.options, r = t.name;
  if (!e.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? true : o, a = n.altAxis, s = a === void 0 ? true : a, f = n.fallbackPlacements, c = n.padding, u = n.boundary, m = n.rootBoundary, v = n.altBoundary, l = n.flipVariations, h2 = l === void 0 ? true : l, p2 = n.allowedAutoPlacements, g = e.options.placement, x = q(g), y = x === g, $ = f || (y || !h2 ? [be(g)] : Kt(g)), d = [g].concat($).reduce(function(z, V) {
      return z.concat(q(V) === me ? Jt(e, { placement: V, boundary: u, rootBoundary: m, padding: c, flipVariations: h2, allowedAutoPlacements: p2 }) : V);
    }, []), b = e.rects.reference, w = e.rects.popper, O = /* @__PURE__ */ new Map(), j = true, A = d[0], k = 0; k < d.length; k++) {
      var D = d[k], S = q(D), L = te(D) === U, re = [E, R].indexOf(S) >= 0, oe = re ? "width" : "height", M = ne(e, { placement: D, boundary: u, rootBoundary: m, altBoundary: v, padding: c }), T = re ? L ? W : P : L ? R : E;
      b[oe] > w[oe] && (T = be(T));
      var pe = be(T), _ = [];
      if (i && _.push(M[S] <= 0), s && _.push(M[T] <= 0, M[pe] <= 0), _.every(function(z) {
        return z;
      })) {
        A = D, j = false;
        break;
      }
      O.set(D, _);
    }
    if (j)
      for (var ue = h2 ? 3 : 1, xe = function(z) {
        var V = d.find(function(de) {
          var ae = O.get(de);
          if (ae)
            return ae.slice(0, z).every(function(Y) {
              return Y;
            });
        });
        if (V)
          return A = V, "break";
      }, ie = ue; ie > 0; ie--) {
        var le = xe(ie);
        if (le === "break")
          break;
      }
    e.placement !== A && (e.modifiersData[r]._skip = true, e.placement = A, e.reset = true);
  }
}
var vt = { name: "flip", enabled: true, phase: "main", fn: Qt, requiresIfExists: ["offset"], data: { _skip: false } };
function gt(t, e, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: t.top - e.height - n.y, right: t.right - e.width + n.x, bottom: t.bottom - e.height + n.y, left: t.left - e.width - n.x };
}
function yt(t) {
  return [E, W, R, P].some(function(e) {
    return t[e] >= 0;
  });
}
function Zt(t) {
  var e = t.state, n = t.name, r = e.rects.reference, o = e.rects.popper, i = e.modifiersData.preventOverflow, a = ne(e, { elementContext: "reference" }), s = ne(e, { altBoundary: true }), f = gt(a, r), c = gt(s, o, i), u = yt(f), m = yt(c);
  e.modifiersData[n] = { referenceClippingOffsets: f, popperEscapeOffsets: c, isReferenceHidden: u, hasPopperEscaped: m }, e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-reference-hidden": u, "data-popper-escaped": m });
}
var bt = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: Zt };
function en(t, e, n) {
  var r = q(t), o = [P, E].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, e, { placement: t })) : n, a = i[0], s = i[1];
  return a = a || 0, s = (s || 0) * o, [P, W].indexOf(r) >= 0 ? { x: s, y: a } : { x: a, y: s };
}
function tn(t) {
  var e = t.state, n = t.options, r = t.name, o = n.offset, i = o === void 0 ? [0, 0] : o, a = Ee.reduce(function(u, m) {
    return u[m] = en(m, e.rects, i), u;
  }, {}), s = a[e.placement], f = s.x, c = s.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += f, e.modifiersData.popperOffsets.y += c), e.modifiersData[r] = a;
}
var wt = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: tn };
function nn(t) {
  var e = t.state, n = t.name;
  e.modifiersData[n] = mt({ reference: e.rects.reference, element: e.rects.popper, strategy: "absolute", placement: e.placement });
}
var He = { name: "popperOffsets", enabled: true, phase: "read", fn: nn, data: {} };
function rn(t) {
  return t === "x" ? "y" : "x";
}
function on(t) {
  var e = t.state, n = t.options, r = t.name, o = n.mainAxis, i = o === void 0 ? true : o, a = n.altAxis, s = a === void 0 ? false : a, f = n.boundary, c = n.rootBoundary, u = n.altBoundary, m = n.padding, v = n.tether, l = v === void 0 ? true : v, h2 = n.tetherOffset, p2 = h2 === void 0 ? 0 : h2, g = ne(e, { boundary: f, rootBoundary: c, padding: m, altBoundary: u }), x = q(e.placement), y = te(e.placement), $ = !y, d = Le(x), b = rn(d), w = e.modifiersData.popperOffsets, O = e.rects.reference, j = e.rects.popper, A = typeof p2 == "function" ? p2(Object.assign({}, e.rects, { placement: e.placement })) : p2, k = typeof A == "number" ? { mainAxis: A, altAxis: A } : Object.assign({ mainAxis: 0, altAxis: 0 }, A), D = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, S = { x: 0, y: 0 };
  if (w) {
    if (i) {
      var L, re = d === "y" ? E : P, oe = d === "y" ? R : W, M = d === "y" ? "height" : "width", T = w[d], pe = T + g[re], _ = T - g[oe], ue = l ? -j[M] / 2 : 0, xe = y === U ? O[M] : j[M], ie = y === U ? -j[M] : -O[M], le = e.elements.arrow, z = l && le ? ke(le) : { width: 0, height: 0 }, V = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : st(), de = V[re], ae = V[oe], Y = fe(0, O[M], z[M]), jt = $ ? O[M] / 2 - ue - Y - de - k.mainAxis : xe - Y - de - k.mainAxis, Dt = $ ? -O[M] / 2 + ue + Y + ae + k.mainAxis : ie + Y + ae + k.mainAxis, Oe = e.elements.arrow && se(e.elements.arrow), Et = Oe ? d === "y" ? Oe.clientTop || 0 : Oe.clientLeft || 0 : 0, Ce = (L = D == null ? void 0 : D[d]) != null ? L : 0, Pt = T + jt - Ce - Et, At = T + Dt - Ce, qe = fe(l ? ve(pe, Pt) : pe, T, l ? X(_, At) : _);
      w[d] = qe, S[d] = qe - T;
    }
    if (s) {
      var Ve, kt = d === "x" ? E : P, Lt = d === "x" ? R : W, F = w[b], he = b === "y" ? "height" : "width", Ne = F + g[kt], Ie = F - g[Lt], $e = [E, P].indexOf(x) !== -1, _e = (Ve = D == null ? void 0 : D[b]) != null ? Ve : 0, ze = $e ? Ne : F - O[he] - j[he] - _e + k.altAxis, Fe = $e ? F + O[he] + j[he] - _e - k.altAxis : Ie, Ue = l && $e ? St(ze, F, Fe) : fe(l ? ze : Ne, F, l ? Fe : Ie);
      w[b] = Ue, S[b] = Ue - F;
    }
    e.modifiersData[r] = S;
  }
}
var xt = { name: "preventOverflow", enabled: true, phase: "main", fn: on, requiresIfExists: ["offset"] };
function an(t) {
  return { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop };
}
function sn(t) {
  return t === H(t) || !B(t) ? We(t) : an(t);
}
function fn(t) {
  var e = t.getBoundingClientRect(), n = Z(e.width) / t.offsetWidth || 1, r = Z(e.height) / t.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function cn(t, e, n) {
  n === void 0 && (n = false);
  var r = B(e), o = B(e) && fn(e), i = I(e), a = ee(t, o), s = { scrollLeft: 0, scrollTop: 0 }, f = { x: 0, y: 0 };
  return (r || !r && !n) && ((C(e) !== "body" || Se(i)) && (s = sn(e)), B(e) ? (f = ee(e, true), f.x += e.clientLeft, f.y += e.clientTop) : i && (f.x = Be(i))), { x: a.left + s.scrollLeft - f.x, y: a.top + s.scrollTop - f.y, width: a.width, height: a.height };
}
function pn(t) {
  var e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  t.forEach(function(i) {
    e.set(i.name, i);
  });
  function o(i) {
    n.add(i.name);
    var a = [].concat(i.requires || [], i.requiresIfExists || []);
    a.forEach(function(s) {
      if (!n.has(s)) {
        var f = e.get(s);
        f && o(f);
      }
    }), r.push(i);
  }
  return t.forEach(function(i) {
    n.has(i.name) || o(i);
  }), r;
}
function un(t) {
  var e = pn(t);
  return ot.reduce(function(n, r) {
    return n.concat(e.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function ln(t) {
  var e;
  return function() {
    return e || (e = new Promise(function(n) {
      Promise.resolve().then(function() {
        e = void 0, n(t());
      });
    })), e;
  };
}
function dn(t) {
  var e = t.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, { options: Object.assign({}, o.options, r.options), data: Object.assign({}, o.data, r.data) }) : r, n;
  }, {});
  return Object.keys(e).map(function(n) {
    return e[n];
  });
}
var Ot = { placement: "bottom", modifiers: [], strategy: "absolute" };
function $t() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  return !e.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function we(t) {
  t === void 0 && (t = {});
  var e = t, n = e.defaultModifiers, r = n === void 0 ? [] : n, o = e.defaultOptions, i = o === void 0 ? Ot : o;
  return function(a, s, f) {
    f === void 0 && (f = i);
    var c = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Ot, i), modifiersData: {}, elements: { reference: a, popper: s }, attributes: {}, styles: {} }, u = [], m = false, v = { state: c, setOptions: function(p2) {
      var g = typeof p2 == "function" ? p2(c.options) : p2;
      h2(), c.options = Object.assign({}, i, c.options, g), c.scrollParents = { reference: Q(a) ? ce(a) : a.contextElement ? ce(a.contextElement) : [], popper: ce(s) };
      var x = un(dn([].concat(r, c.options.modifiers)));
      return c.orderedModifiers = x.filter(function(y) {
        return y.enabled;
      }), l(), v.update();
    }, forceUpdate: function() {
      if (!m) {
        var p2 = c.elements, g = p2.reference, x = p2.popper;
        if ($t(g, x)) {
          c.rects = { reference: cn(g, se(x), c.options.strategy === "fixed"), popper: ke(x) }, c.reset = false, c.placement = c.options.placement, c.orderedModifiers.forEach(function(j) {
            return c.modifiersData[j.name] = Object.assign({}, j.data);
          });
          for (var y = 0; y < c.orderedModifiers.length; y++) {
            if (c.reset === true) {
              c.reset = false, y = -1;
              continue;
            }
            var $ = c.orderedModifiers[y], d = $.fn, b = $.options, w = b === void 0 ? {} : b, O = $.name;
            typeof d == "function" && (c = d({ state: c, options: w, name: O, instance: v }) || c);
          }
        }
      }
    }, update: ln(function() {
      return new Promise(function(p2) {
        v.forceUpdate(), p2(c);
      });
    }), destroy: function() {
      h2(), m = true;
    } };
    if (!$t(a, s))
      return v;
    v.setOptions(f).then(function(p2) {
      !m && f.onFirstUpdate && f.onFirstUpdate(p2);
    });
    function l() {
      c.orderedModifiers.forEach(function(p2) {
        var g = p2.name, x = p2.options, y = x === void 0 ? {} : x, $ = p2.effect;
        if (typeof $ == "function") {
          var d = $({ state: c, name: g, instance: v, options: y }), b = function() {
          };
          u.push(d || b);
        }
      });
    }
    function h2() {
      u.forEach(function(p2) {
        return p2();
      }), u = [];
    }
    return v;
  };
}
we();
var mn = [Re, He, Me, Ae];
we({ defaultModifiers: mn });
var gn = [Re, He, Me, Ae, wt, vt, xt, pt, bt], yn = we({ defaultModifiers: gn });
const usePopperArrowProps = buildProps({
  arrowOffset: {
    type: Number,
    default: 5
  }
});
const usePopperCoreConfigProps = buildProps({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: definePropType(Array),
    default: () => []
  },
  gpuAcceleration: {
    type: Boolean,
    default: true
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: Ee,
    default: "bottom"
  },
  popperOptions: {
    type: definePropType(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: ["fixed", "absolute"],
    default: "absolute"
  }
});
buildProps({
  autoClose: {
    type: Number,
    default: 0
  },
  cutoff: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
});
const usePopperContentProps = buildProps({
  ...usePopperCoreConfigProps,
  style: { type: definePropType([String, Array, Object]) },
  className: { type: definePropType([String, Array, Object]) },
  effect: {
    type: String,
    default: "dark"
  },
  enterable: {
    type: Boolean,
    default: true
  },
  pure: {
    type: Boolean
  },
  popperClass: {
    type: definePropType([String, Array, Object])
  },
  popperStyle: {
    type: definePropType([String, Array, Object])
  },
  referenceEl: {
    type: definePropType(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: true
  },
  zIndex: Number
});
const usePopperTriggerProps = buildProps({
  virtualRef: { type: definePropType(Object) },
  virtualTriggering: { type: Boolean }
});
const _sfc_main$G = defineComponent({
  name: "ElPopperArrow",
  props: usePopperArrowProps,
  setup(props) {
    const arrowRef = ref(null);
    const popperContentInjection = inject(POPPER_CONTENT_INJECTION_KEY, void 0);
    watch(() => props.arrowOffset, (val) => {
      popperContentInjection.arrowOffset.value = val;
    });
    onMounted(() => {
      popperContentInjection.arrowRef.value = unref(arrowRef);
    });
    onBeforeUnmount(() => {
      popperContentInjection.arrowRef.value = null;
    });
    return {
      arrowRef
    };
  }
});
const _hoisted_1$q = {
  ref: "arrowRef",
  class: "el-popper__arrow",
  "data-popper-arrow": ""
};
function _sfc_render$A(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", _hoisted_1$q, null, 512);
}
var ElPopperArrow = /* @__PURE__ */ _export_sfc$2(_sfc_main$G, [["render", _sfc_render$A]]);
const NAME$1 = "ElOnlyChild";
const OnlyChild = defineComponent({
  name: NAME$1,
  setup(_, { slots, attrs }) {
    var _a2;
    const forwardRefInjection = inject(FORWARD_REF_INJECTION_KEY, void 0);
    const forwardRefDirective = useForwardRefDirective((_a2 = forwardRefInjection.setForwardRef) != null ? _a2 : NOOP);
    return () => {
      var _a22;
      const defaultSlot = (_a22 = slots.default) == null ? void 0 : _a22.call(slots, attrs);
      if (!defaultSlot)
        return null;
      if (defaultSlot.length > 1) {
        return null;
      }
      const firstLegitNode = findFirstLegitChild(defaultSlot);
      if (!firstLegitNode) {
        return null;
      }
      return withDirectives(cloneVNode(firstLegitNode, attrs), [
        [forwardRefDirective]
      ]);
    };
  }
});
function findFirstLegitChild(node) {
  if (!node)
    return null;
  const children = node;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (isObject$6(child)) {
      switch (child.type) {
        case Comment:
          continue;
        case Text:
          return wrapTextContent(child);
        case Fragment:
          return findFirstLegitChild(child.children);
        default:
          return child;
      }
    }
    return wrapTextContent(child);
  }
  return null;
}
function wrapTextContent(s) {
  return h("span", { class: "el-only-child__content" }, [s]);
}
const buildPopperOptions = (props, arrowProps) => {
  const { placement, strategy, popperOptions } = props;
  const options = {
    placement,
    strategy,
    ...popperOptions,
    modifiers: genModifiers(props)
  };
  attachArrow(options, arrowProps);
  deriveExtraModifiers(options, popperOptions == null ? void 0 : popperOptions.modifiers);
  return options;
};
const unwrapMeasurableEl = ($el) => {
  let el = null;
  if (!$el)
    return null;
  if ("getBoundingClientRect" in $el || $el instanceof HTMLElement) {
    el = $el;
  } else {
    el = $el.$el;
  }
  return el;
};
function genModifiers(options) {
  const { offset, gpuAcceleration, fallbackPlacements } = options;
  return [
    {
      name: "offset",
      options: {
        offset: [0, offset != null ? offset : 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements: fallbackPlacements != null ? fallbackPlacements : []
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration,
        adaptive: gpuAcceleration
      }
    }
  ];
}
function attachArrow(options, { arrowEl, arrowOffset }) {
  options.modifiers.push({
    name: "arrow",
    options: {
      element: arrowEl,
      padding: arrowOffset != null ? arrowOffset : 5
    }
  });
}
function deriveExtraModifiers(options, modifiers) {
  if (modifiers) {
    options.modifiers = [...options.modifiers, ...modifiers != null ? modifiers : []];
  }
}
const _sfc_main$F = defineComponent({
  name: "ElPopperTrigger",
  components: { ElOnlyChild: OnlyChild },
  inheritAttrs: false,
  props: {
    ...usePopperTriggerProps,
    onMouseenter: Function,
    onMouseleave: Function,
    onClick: Function,
    onKeydown: Function,
    onFocus: Function,
    onBlur: Function,
    onContextmenu: Function,
    id: String,
    open: Boolean
  },
  setup(props) {
    const { triggerRef: triggerRef2 } = inject(POPPER_INJECTION_KEY, void 0);
    useForwardRef(triggerRef2);
    watch(() => props.virtualRef, (val) => {
      if (val) {
        triggerRef2.value = unwrapMeasurableEl(val);
      }
    }, {
      immediate: true
    });
    watch(() => triggerRef2.value, (el, prevEl) => {
      if (el && el instanceof HTMLElement) {
        [
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((eventName) => {
          const handler = props[eventName];
          if (handler) {
            el.addEventListener(eventName.slice(2).toLowerCase(), handler);
            prevEl == null ? void 0 : prevEl.removeEventListener(eventName.slice(2).toLowerCase(), handler);
          }
        });
      }
    }, {
      immediate: true
    });
    return {
      triggerRef: triggerRef2
    };
  }
});
function _sfc_render$z(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_only_child = resolveComponent("el-only-child");
  return !_ctx.virtualTriggering ? (openBlock(), createBlock(_component_el_only_child, mergeProps({ key: 0 }, _ctx.$attrs, {
    "aria-describedby": _ctx.open ? _ctx.id : void 0
  }), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 16, ["aria-describedby"])) : createCommentVNode("v-if", true);
}
var ElPopperTrigger = /* @__PURE__ */ _export_sfc$2(_sfc_main$F, [["render", _sfc_render$z]]);
const _sfc_main$E = defineComponent({
  name: "ElPopperContent",
  props: usePopperContentProps,
  emits: ["mouseenter", "mouseleave"],
  setup(props) {
    const { triggerRef: triggerRef2, popperInstanceRef, contentRef } = inject(POPPER_INJECTION_KEY, void 0);
    const popperContentRef = ref(null);
    const arrowRef = ref(null);
    const arrowOffset = ref();
    provide(POPPER_CONTENT_INJECTION_KEY, {
      arrowRef,
      arrowOffset
    });
    const contentZIndex = ref(props.zIndex || PopupManager.nextZIndex());
    const contentStyle = computed(() => [{ zIndex: unref(contentZIndex) }, props.popperStyle]);
    const contentClass = computed(() => [
      {
        "el-popper": true,
        "is-pure": props.pure,
        [`is-${props.effect}`]: !!props.effect
      },
      props.popperClass
    ]);
    const createPopperInstance = ({
      referenceEl,
      popperContentEl,
      arrowEl
    }) => {
      const options = buildPopperOptions(props, {
        arrowEl,
        arrowOffset: unref(arrowOffset)
      });
      return yn(referenceEl, popperContentEl, options);
    };
    const updatePopper = () => {
      var _a2;
      (_a2 = unref(popperInstanceRef)) == null ? void 0 : _a2.update();
      contentZIndex.value = props.zIndex || PopupManager.nextZIndex();
    };
    onMounted(() => {
      let updateHandle;
      watch(() => unwrapMeasurableEl(props.referenceEl) || unref(triggerRef2), (val) => {
        var _a2;
        updateHandle == null ? void 0 : updateHandle();
        if (val) {
          (_a2 = popperInstanceRef.value) == null ? void 0 : _a2.destroy();
          const popperContentEl = unref(popperContentRef);
          contentRef.value = popperContentEl;
          const arrowEl = unref(arrowRef);
          const newInstance = createPopperInstance({
            referenceEl: val,
            popperContentEl: unref(popperContentRef),
            arrowEl
          });
          popperInstanceRef.value = newInstance;
          updateHandle = watch(() => val.getBoundingClientRect(), () => {
            updatePopper();
          }, {
            immediate: true
          });
        } else {
          popperInstanceRef.value = null;
        }
      }, {
        immediate: true
      });
    });
    return {
      popperContentRef,
      popperInstanceRef,
      contentStyle,
      contentClass,
      updatePopper
    };
  }
});
function _sfc_render$y(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    ref: "popperContentRef",
    style: normalizeStyle(_ctx.contentStyle),
    class: normalizeClass(_ctx.contentClass),
    role: "tooltip",
    onMouseenter: _cache[0] || (_cache[0] = (e) => _ctx.$emit("mouseenter", e)),
    onMouseleave: _cache[1] || (_cache[1] = (e) => _ctx.$emit("mouseleave", e))
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 38);
}
var ElPopperContent = /* @__PURE__ */ _export_sfc$2(_sfc_main$E, [["render", _sfc_render$y]]);
const ElPopper = withInstall(Popper);
const _sfc_main$D = defineComponent({
  name: "ElVisuallyHidden",
  props: {
    style: {
      type: [String, Object, Array]
    }
  },
  setup(props) {
    return {
      computedStyle: computed(() => {
        return [
          props.style,
          {
            position: "absolute",
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            wordWrap: "normal"
          }
        ];
      })
    };
  }
});
function _sfc_render$x(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps(_ctx.$attrs, { style: _ctx.computedStyle }), null, 16);
}
var ElVisuallyHidden = /* @__PURE__ */ _export_sfc$2(_sfc_main$D, [["render", _sfc_render$x]]);
const useTooltipContentProps = {
  ...useDelayedToggleProps,
  ...usePopperContentProps,
  ...buildProps({
    appendTo: {
      type: definePropType([String, Object]),
      default: POPPER_CONTAINER_SELECTOR
    },
    content: {
      type: String,
      default: ""
    },
    rawContent: {
      type: Boolean,
      default: false
    },
    persistent: Boolean,
    ariaLabel: String,
    visible: {
      type: definePropType(Boolean),
      default: null
    },
    transition: {
      type: String,
      default: "el-fade-in-linear"
    },
    teleported: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean
    }
  })
};
const useTooltipTriggerProps = {
  ...usePopperTriggerProps,
  disabled: Boolean,
  trigger: {
    type: [String, Array],
    default: "hover"
  }
};
const useTooltipProps = buildProps({
  openDelay: {
    type: Number
  },
  visibleArrow: {
    type: Boolean,
    default: void 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  showArrow: {
    type: Boolean,
    default: true
  }
});
const TOOLTIP_INJECTION_KEY = Symbol("elTooltip");
const _sfc_main$C = defineComponent({
  name: "ElTooltipContent",
  components: {
    ElPopperContent,
    ElVisuallyHidden
  },
  inheritAttrs: false,
  props: useTooltipContentProps,
  setup(props) {
    const contentRef = ref(null);
    const intermediateOpen = ref(false);
    const entering = ref(false);
    const leaving = ref(false);
    const { controlled, id, open, trigger: trigger2, onClose, onOpen, onShow, onHide } = inject(TOOLTIP_INJECTION_KEY, void 0);
    const persistentRef = computed(() => {
      return props.persistent;
    });
    const shouldRender = computed(() => {
      return unref(persistentRef) ? true : unref(open);
    });
    const shouldShow = computed(() => {
      return props.disabled ? false : unref(open);
    });
    const contentStyle = computed(() => {
      var _a2;
      return (_a2 = props.style) != null ? _a2 : {};
    });
    const ariaHidden = computed(() => !unref(open));
    useEscapeKeydown(onClose);
    const onTransitionLeave = () => {
      onHide();
    };
    const stopWhenControlled = () => {
      if (unref(controlled))
        return true;
    };
    const onContentEnter = composeEventHandlers(stopWhenControlled, () => {
      if (props.enterable && unref(trigger2) === "hover") {
        onOpen();
      }
    });
    const onContentLeave = composeEventHandlers(stopWhenControlled, () => {
      if (unref(trigger2) === "hover") {
        onClose();
      }
    });
    const onBeforeEnter = () => {
      var _a2, _b2;
      (_b2 = (_a2 = contentRef.value) == null ? void 0 : _a2.updatePopper) == null ? void 0 : _b2.call(_a2);
    };
    const onAfterShow = () => {
      onShow();
    };
    let stopHandle;
    watch(() => unref(open), (val) => {
      if (val) {
        stopHandle = onClickOutside(computed(() => {
          var _a2;
          return (_a2 = contentRef.value) == null ? void 0 : _a2.popperContentRef;
        }), () => {
          if (unref(controlled))
            return;
          const $trigger = unref(trigger2);
          if ($trigger !== "hover") {
            onClose();
          }
        });
      } else {
        stopHandle == null ? void 0 : stopHandle();
      }
    }, {
      flush: "post"
    });
    return {
      ariaHidden,
      entering,
      leaving,
      id,
      intermediateOpen,
      contentStyle,
      contentRef,
      shouldRender,
      shouldShow,
      open,
      onAfterShow,
      onBeforeEnter,
      onContentEnter,
      onContentLeave,
      onTransitionLeave
    };
  }
});
function _sfc_render$w(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_visually_hidden = resolveComponent("el-visually-hidden");
  const _component_el_popper_content = resolveComponent("el-popper-content");
  return openBlock(), createBlock(Teleport, {
    disabled: !_ctx.teleported,
    to: _ctx.appendTo
  }, [
    createVNode(Transition, {
      name: _ctx.transition,
      onAfterLeave: _ctx.onTransitionLeave,
      onBeforeEnter: _ctx.onBeforeEnter,
      onAfterEnter: _ctx.onAfterShow
    }, {
      default: withCtx(() => [
        _ctx.shouldRender ? withDirectives((openBlock(), createBlock(_component_el_popper_content, mergeProps({
          key: 0,
          ref: "contentRef"
        }, _ctx.$attrs, {
          "aria-hidden": _ctx.ariaHidden,
          "boundaries-padding": _ctx.boundariesPadding,
          "fallback-placements": _ctx.fallbackPlacements,
          "gpu-acceleration": _ctx.gpuAcceleration,
          offset: _ctx.offset,
          placement: _ctx.placement,
          "popper-options": _ctx.popperOptions,
          strategy: _ctx.strategy,
          effect: _ctx.effect,
          enterable: _ctx.enterable,
          pure: _ctx.pure,
          "popper-class": _ctx.popperClass,
          "popper-style": [_ctx.popperStyle, _ctx.contentStyle],
          "reference-el": _ctx.referenceEl,
          "z-index": _ctx.zIndex,
          onMouseenter: _ctx.onContentEnter,
          onMouseleave: _ctx.onContentLeave
        }), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default"),
            createVNode(_component_el_visually_hidden, {
              id: _ctx.id,
              role: "tooltip"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.ariaLabel), 1)
              ]),
              _: 1
            }, 8, ["id"])
          ]),
          _: 3
        }, 16, ["aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "z-index", "onMouseenter", "onMouseleave"])), [
          [vShow, _ctx.shouldShow]
        ]) : createCommentVNode("v-if", true)
      ]),
      _: 3
    }, 8, ["name", "onAfterLeave", "onBeforeEnter", "onAfterEnter"])
  ], 8, ["disabled", "to"]);
}
var ElTooltipContent = /* @__PURE__ */ _export_sfc$2(_sfc_main$C, [["render", _sfc_render$w]]);
const isTriggerType = (trigger2, type4) => {
  if (isArray$9(trigger2)) {
    return trigger2.includes(type4);
  }
  return trigger2 === type4;
};
const whenTrigger = (trigger2, type4, handler) => {
  return (e) => {
    isTriggerType(unref(trigger2), type4) && handler(e);
  };
};
const _sfc_main$B = defineComponent({
  name: "ElTooltipTrigger",
  components: {
    ElPopperTrigger
  },
  props: useTooltipTriggerProps,
  setup(props) {
    const { controlled, id, open, onOpen, onClose, onToggle } = inject(TOOLTIP_INJECTION_KEY, void 0);
    const triggerRef2 = ref(null);
    const stopWhenControlledOrDisabled = () => {
      if (unref(controlled) || props.disabled) {
        return true;
      }
    };
    const trigger2 = toRef(props, "trigger");
    const onMouseenter = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger2, "hover", onOpen));
    const onMouseleave = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger2, "hover", onClose));
    const onClick = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger2, "click", (e) => {
      if (e.button === 0) {
        onToggle(e);
      }
    }));
    const onFocus = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger2, "focus", onOpen));
    const onBlur = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger2, "focus", onClose));
    const onContextMenu = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger2, "contextmenu", (e) => {
      e.preventDefault();
      onToggle(e);
    }));
    const onKeydown = composeEventHandlers(stopWhenControlledOrDisabled, (e) => {
      const { code } = e;
      if (code === EVENT_CODE.enter || code === EVENT_CODE.space) {
        onToggle(e);
      }
    });
    return {
      onBlur,
      onContextMenu,
      onFocus,
      onMouseenter,
      onMouseleave,
      onClick,
      onKeydown,
      open,
      id,
      triggerRef: triggerRef2
    };
  }
});
function _sfc_render$v(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_popper_trigger = resolveComponent("el-popper-trigger");
  return openBlock(), createBlock(_component_el_popper_trigger, {
    id: _ctx.id,
    "virtual-ref": _ctx.virtualRef,
    open: _ctx.open,
    "virtual-triggering": _ctx.virtualTriggering,
    class: "el-tooltip__trigger",
    onBlur: _ctx.onBlur,
    onClick: _ctx.onClick,
    onContextmenu: _ctx.onContextMenu,
    onFocus: _ctx.onFocus,
    onMouseenter: _ctx.onMouseenter,
    onMouseleave: _ctx.onMouseleave,
    onKeydown: _ctx.onKeydown
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]);
}
var ElTooltipTrigger = /* @__PURE__ */ _export_sfc$2(_sfc_main$B, [["render", _sfc_render$v]]);
const { useModelToggleProps, useModelToggle, useModelToggleEmits } = createModelToggleComposable("visible");
const _sfc_main$A = defineComponent({
  name: "ElTooltip",
  components: {
    ElPopper,
    ElPopperArrow,
    ElTooltipContent,
    ElTooltipTrigger
  },
  props: {
    ...useModelToggleProps,
    ...useTooltipContentProps,
    ...useTooltipTriggerProps,
    ...usePopperArrowProps,
    ...useTooltipProps
  },
  emits: [...useModelToggleEmits, "show", "hide"],
  setup(props, { emit }) {
    usePopperContainer();
    const compatShowAfter = computed(() => {
      if (!isUndefined$1(props.openDelay))
        ;
      return props.openDelay || props.showAfter;
    });
    const compatShowArrow = computed(() => {
      if (!isUndefined$1(props.visibleArrow))
        ;
      return isBool(props.visibleArrow) ? props.visibleArrow : props.showArrow;
    });
    const id = useId();
    const popperRef = ref(null);
    const updatePopper = () => {
      var _a2;
      const popperComponent = unref(popperRef);
      if (popperComponent) {
        (_a2 = popperComponent.popperInstanceRef) == null ? void 0 : _a2.update();
      }
    };
    const open = ref(false);
    const { show, hide } = useModelToggle({
      indicator: open
    });
    const { onOpen, onClose } = useDelayedToggle({
      showAfter: compatShowAfter,
      hideAfter: toRef(props, "hideAfter"),
      open: show,
      close: hide
    });
    const controlled = computed(() => isBool(props.visible));
    provide(TOOLTIP_INJECTION_KEY, {
      controlled,
      id,
      open: readonly(open),
      trigger: toRef(props, "trigger"),
      onOpen,
      onClose,
      onToggle: () => {
        if (unref(open)) {
          onClose();
        } else {
          onOpen();
        }
      },
      onShow: () => {
        emit("show");
      },
      onHide: () => {
        emit("hide");
      },
      updatePopper
    });
    return {
      compatShowAfter,
      compatShowArrow,
      popperRef,
      open,
      hide,
      updatePopper,
      onOpen,
      onClose
    };
  }
});
const _hoisted_1$p = ["innerHTML"];
const _hoisted_2$f = { key: 1 };
function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tooltip_trigger = resolveComponent("el-tooltip-trigger");
  const _component_el_popper_arrow = resolveComponent("el-popper-arrow");
  const _component_el_tooltip_content = resolveComponent("el-tooltip-content");
  const _component_el_popper = resolveComponent("el-popper");
  return openBlock(), createBlock(_component_el_popper, { ref: "popperRef" }, {
    default: withCtx(() => [
      createVNode(_component_el_tooltip_trigger, {
        disabled: _ctx.disabled,
        trigger: _ctx.trigger,
        "virtual-ref": _ctx.virtualRef,
        "virtual-triggering": _ctx.virtualTriggering
      }, {
        default: withCtx(() => [
          _ctx.$slots.default ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("v-if", true)
        ]),
        _: 3
      }, 8, ["disabled", "trigger", "virtual-ref", "virtual-triggering"]),
      createVNode(_component_el_tooltip_content, {
        "aria-label": _ctx.ariaLabel,
        "boundaries-padding": _ctx.boundariesPadding,
        content: _ctx.content,
        disabled: _ctx.disabled,
        effect: _ctx.effect,
        enterable: _ctx.enterable,
        "fallback-placements": _ctx.fallbackPlacements,
        "hide-after": _ctx.hideAfter,
        "gpu-acceleration": _ctx.gpuAcceleration,
        offset: _ctx.offset,
        persistent: _ctx.persistent,
        "popper-class": _ctx.popperClass,
        "popper-style": _ctx.popperStyle,
        placement: _ctx.placement,
        "popper-options": _ctx.popperOptions,
        pure: _ctx.pure,
        "raw-content": _ctx.rawContent,
        "reference-el": _ctx.referenceEl,
        "show-after": _ctx.compatShowAfter,
        strategy: _ctx.strategy,
        teleported: _ctx.teleported,
        transition: _ctx.transition,
        "z-index": _ctx.zIndex
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "content", {}, () => [
            _ctx.rawContent ? (openBlock(), createElementBlock("span", {
              key: 0,
              innerHTML: _ctx.content
            }, null, 8, _hoisted_1$p)) : (openBlock(), createElementBlock("span", _hoisted_2$f, toDisplayString(_ctx.content), 1))
          ]),
          _ctx.compatShowArrow ? (openBlock(), createBlock(_component_el_popper_arrow, {
            key: 0,
            "arrow-offset": _ctx.arrowOffset
          }, null, 8, ["arrow-offset"])) : createCommentVNode("v-if", true)
        ]),
        _: 3
      }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "show-after", "strategy", "teleported", "transition", "z-index"])
    ]),
    _: 3
  }, 512);
}
var Tooltip = /* @__PURE__ */ _export_sfc$2(_sfc_main$A, [["render", _sfc_render$u]]);
const ElTooltip = withInstall(Tooltip);
const badgeProps = buildProps({
  value: {
    type: [String, Number],
    default: ""
  },
  max: {
    type: Number,
    default: 99
  },
  isDot: Boolean,
  hidden: Boolean,
  type: {
    type: String,
    values: ["primary", "success", "warning", "info", "danger"],
    default: "danger"
  }
});
const _sfc_main$z = defineComponent({
  name: "ElBadge",
  props: badgeProps,
  setup(props) {
    const ns = useNamespace("badge");
    const content = computed(() => {
      if (props.isDot)
        return "";
      if (typeof props.value === "number" && typeof props.max === "number") {
        return props.max < props.value ? `${props.max}+` : `${props.value}`;
      }
      return `${props.value}`;
    });
    return {
      ns,
      content
    };
  }
});
const _hoisted_1$o = ["textContent"];
function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.ns.b())
  }, [
    renderSlot(_ctx.$slots, "default"),
    createVNode(Transition, { name: "el-zoom-in-center" }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("sup", {
          class: normalizeClass([
            _ctx.ns.e("content"),
            _ctx.ns.em("content", _ctx.type),
            _ctx.ns.is("fixed", !!_ctx.$slots.default),
            _ctx.ns.is("dot", _ctx.isDot)
          ]),
          textContent: toDisplayString(_ctx.content)
        }, null, 10, _hoisted_1$o), [
          [vShow, !_ctx.hidden && (_ctx.content || _ctx.content === "0" || _ctx.isDot)]
        ])
      ]),
      _: 1
    })
  ], 2);
}
var Badge = /* @__PURE__ */ _export_sfc$2(_sfc_main$z, [["render", _sfc_render$t]]);
const ElBadge = withInstall(Badge);
function bound01(n, max) {
  if (isOnePointZero(n)) {
    n = "100%";
  }
  var isPercent = isPercentage(n);
  n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
  if (isPercent) {
    n = parseInt(String(n * max), 10) / 100;
  }
  if (Math.abs(n - max) < 1e-6) {
    return 1;
  }
  if (max === 360) {
    n = (n < 0 ? n % max + max : n % max) / parseFloat(String(max));
  } else {
    n = n % max / parseFloat(String(max));
  }
  return n;
}
function clamp01(val) {
  return Math.min(1, Math.max(0, val));
}
function isOnePointZero(n) {
  return typeof n === "string" && n.indexOf(".") !== -1 && parseFloat(n) === 1;
}
function isPercentage(n) {
  return typeof n === "string" && n.indexOf("%") !== -1;
}
function boundAlpha(a) {
  a = parseFloat(a);
  if (isNaN(a) || a < 0 || a > 1) {
    a = 1;
  }
  return a;
}
function convertToPercentage(n) {
  if (n <= 1) {
    return "".concat(Number(n) * 100, "%");
  }
  return n;
}
function pad2(c) {
  return c.length === 1 ? "0" + c : String(c);
}
function rgbToRgb(r, g, b) {
  return {
    r: bound01(r, 255) * 255,
    g: bound01(g, 255) * 255,
    b: bound01(b, 255) * 255
  };
}
function rgbToHsl(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h2 = 0;
  var s = 0;
  var l = (max + min) / 2;
  if (max === min) {
    s = 0;
    h2 = 0;
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h2 = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h2 = (b - r) / d + 2;
        break;
      case b:
        h2 = (r - g) / d + 4;
        break;
    }
    h2 /= 6;
  }
  return { h: h2, s, l };
}
function hue2rgb(p2, q2, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p2 + (q2 - p2) * (6 * t);
  }
  if (t < 1 / 2) {
    return q2;
  }
  if (t < 2 / 3) {
    return p2 + (q2 - p2) * (2 / 3 - t) * 6;
  }
  return p2;
}
function hslToRgb(h2, s, l) {
  var r;
  var g;
  var b;
  h2 = bound01(h2, 360);
  s = bound01(s, 100);
  l = bound01(l, 100);
  if (s === 0) {
    g = l;
    b = l;
    r = l;
  } else {
    var q2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p2 = 2 * l - q2;
    r = hue2rgb(p2, q2, h2 + 1 / 3);
    g = hue2rgb(p2, q2, h2);
    b = hue2rgb(p2, q2, h2 - 1 / 3);
  }
  return { r: r * 255, g: g * 255, b: b * 255 };
}
function rgbToHsv(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h2 = 0;
  var v = max;
  var d = max - min;
  var s = max === 0 ? 0 : d / max;
  if (max === min) {
    h2 = 0;
  } else {
    switch (max) {
      case r:
        h2 = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h2 = (b - r) / d + 2;
        break;
      case b:
        h2 = (r - g) / d + 4;
        break;
    }
    h2 /= 6;
  }
  return { h: h2, s, v };
}
function hsvToRgb(h2, s, v) {
  h2 = bound01(h2, 360) * 6;
  s = bound01(s, 100);
  v = bound01(v, 100);
  var i = Math.floor(h2);
  var f = h2 - i;
  var p2 = v * (1 - s);
  var q2 = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);
  var mod = i % 6;
  var r = [v, q2, p2, p2, t, v][mod];
  var g = [t, v, v, q2, p2, p2][mod];
  var b = [p2, p2, t, v, v, q2][mod];
  return { r: r * 255, g: g * 255, b: b * 255 };
}
function rgbToHex(r, g, b, allow3Char) {
  var hex2 = [
    pad2(Math.round(r).toString(16)),
    pad2(Math.round(g).toString(16)),
    pad2(Math.round(b).toString(16))
  ];
  if (allow3Char && hex2[0].startsWith(hex2[0].charAt(1)) && hex2[1].startsWith(hex2[1].charAt(1)) && hex2[2].startsWith(hex2[2].charAt(1))) {
    return hex2[0].charAt(0) + hex2[1].charAt(0) + hex2[2].charAt(0);
  }
  return hex2.join("");
}
function rgbaToHex(r, g, b, a, allow4Char) {
  var hex2 = [
    pad2(Math.round(r).toString(16)),
    pad2(Math.round(g).toString(16)),
    pad2(Math.round(b).toString(16)),
    pad2(convertDecimalToHex(a))
  ];
  if (allow4Char && hex2[0].startsWith(hex2[0].charAt(1)) && hex2[1].startsWith(hex2[1].charAt(1)) && hex2[2].startsWith(hex2[2].charAt(1)) && hex2[3].startsWith(hex2[3].charAt(1))) {
    return hex2[0].charAt(0) + hex2[1].charAt(0) + hex2[2].charAt(0) + hex2[3].charAt(0);
  }
  return hex2.join("");
}
function convertDecimalToHex(d) {
  return Math.round(parseFloat(d) * 255).toString(16);
}
function convertHexToDecimal(h2) {
  return parseIntFromHex(h2) / 255;
}
function parseIntFromHex(val) {
  return parseInt(val, 16);
}
function numberInputToObject(color) {
  return {
    r: color >> 16,
    g: (color & 65280) >> 8,
    b: color & 255
  };
}
var names = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function inputToRGB(color) {
  var rgb = { r: 0, g: 0, b: 0 };
  var a = 1;
  var s = null;
  var v = null;
  var l = null;
  var ok = false;
  var format2 = false;
  if (typeof color === "string") {
    color = stringInputToObject(color);
  }
  if (typeof color === "object") {
    if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
      rgb = rgbToRgb(color.r, color.g, color.b);
      ok = true;
      format2 = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
      s = convertToPercentage(color.s);
      v = convertToPercentage(color.v);
      rgb = hsvToRgb(color.h, s, v);
      ok = true;
      format2 = "hsv";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
      s = convertToPercentage(color.s);
      l = convertToPercentage(color.l);
      rgb = hslToRgb(color.h, s, l);
      ok = true;
      format2 = "hsl";
    }
    if (Object.prototype.hasOwnProperty.call(color, "a")) {
      a = color.a;
    }
  }
  a = boundAlpha(a);
  return {
    ok,
    format: color.format || format2,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a
  };
}
var CSS_INTEGER = "[-\\+]?\\d+%?";
var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var matchers = {
  CSS_UNIT: new RegExp(CSS_UNIT),
  rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
  rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
  hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
  hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
  hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
  hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function stringInputToObject(color) {
  color = color.trim().toLowerCase();
  if (color.length === 0) {
    return false;
  }
  var named = false;
  if (names[color]) {
    color = names[color];
    named = true;
  } else if (color === "transparent") {
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  }
  var match = matchers.rgb.exec(color);
  if (match) {
    return { r: match[1], g: match[2], b: match[3] };
  }
  match = matchers.rgba.exec(color);
  if (match) {
    return { r: match[1], g: match[2], b: match[3], a: match[4] };
  }
  match = matchers.hsl.exec(color);
  if (match) {
    return { h: match[1], s: match[2], l: match[3] };
  }
  match = matchers.hsla.exec(color);
  if (match) {
    return { h: match[1], s: match[2], l: match[3], a: match[4] };
  }
  match = matchers.hsv.exec(color);
  if (match) {
    return { h: match[1], s: match[2], v: match[3] };
  }
  match = matchers.hsva.exec(color);
  if (match) {
    return { h: match[1], s: match[2], v: match[3], a: match[4] };
  }
  match = matchers.hex8.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      a: convertHexToDecimal(match[4]),
      format: named ? "name" : "hex8"
    };
  }
  match = matchers.hex6.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      format: named ? "name" : "hex"
    };
  }
  match = matchers.hex4.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      a: convertHexToDecimal(match[4] + match[4]),
      format: named ? "name" : "hex8"
    };
  }
  match = matchers.hex3.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      format: named ? "name" : "hex"
    };
  }
  return false;
}
function isValidCSSUnit(color) {
  return Boolean(matchers.CSS_UNIT.exec(String(color)));
}
var TinyColor = function() {
  function TinyColor2(color, opts) {
    if (color === void 0) {
      color = "";
    }
    if (opts === void 0) {
      opts = {};
    }
    var _a2;
    if (color instanceof TinyColor2) {
      return color;
    }
    if (typeof color === "number") {
      color = numberInputToObject(color);
    }
    this.originalInput = color;
    var rgb = inputToRGB(color);
    this.originalInput = color;
    this.r = rgb.r;
    this.g = rgb.g;
    this.b = rgb.b;
    this.a = rgb.a;
    this.roundA = Math.round(100 * this.a) / 100;
    this.format = (_a2 = opts.format) !== null && _a2 !== void 0 ? _a2 : rgb.format;
    this.gradientType = opts.gradientType;
    if (this.r < 1) {
      this.r = Math.round(this.r);
    }
    if (this.g < 1) {
      this.g = Math.round(this.g);
    }
    if (this.b < 1) {
      this.b = Math.round(this.b);
    }
    this.isValid = rgb.ok;
  }
  TinyColor2.prototype.isDark = function() {
    return this.getBrightness() < 128;
  };
  TinyColor2.prototype.isLight = function() {
    return !this.isDark();
  };
  TinyColor2.prototype.getBrightness = function() {
    var rgb = this.toRgb();
    return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
  };
  TinyColor2.prototype.getLuminance = function() {
    var rgb = this.toRgb();
    var R2;
    var G2;
    var B2;
    var RsRGB = rgb.r / 255;
    var GsRGB = rgb.g / 255;
    var BsRGB = rgb.b / 255;
    if (RsRGB <= 0.03928) {
      R2 = RsRGB / 12.92;
    } else {
      R2 = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
    }
    if (GsRGB <= 0.03928) {
      G2 = GsRGB / 12.92;
    } else {
      G2 = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
    }
    if (BsRGB <= 0.03928) {
      B2 = BsRGB / 12.92;
    } else {
      B2 = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
    }
    return 0.2126 * R2 + 0.7152 * G2 + 0.0722 * B2;
  };
  TinyColor2.prototype.getAlpha = function() {
    return this.a;
  };
  TinyColor2.prototype.setAlpha = function(alpha) {
    this.a = boundAlpha(alpha);
    this.roundA = Math.round(100 * this.a) / 100;
    return this;
  };
  TinyColor2.prototype.toHsv = function() {
    var hsv = rgbToHsv(this.r, this.g, this.b);
    return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
  };
  TinyColor2.prototype.toHsvString = function() {
    var hsv = rgbToHsv(this.r, this.g, this.b);
    var h2 = Math.round(hsv.h * 360);
    var s = Math.round(hsv.s * 100);
    var v = Math.round(hsv.v * 100);
    return this.a === 1 ? "hsv(".concat(h2, ", ").concat(s, "%, ").concat(v, "%)") : "hsva(".concat(h2, ", ").concat(s, "%, ").concat(v, "%, ").concat(this.roundA, ")");
  };
  TinyColor2.prototype.toHsl = function() {
    var hsl = rgbToHsl(this.r, this.g, this.b);
    return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
  };
  TinyColor2.prototype.toHslString = function() {
    var hsl = rgbToHsl(this.r, this.g, this.b);
    var h2 = Math.round(hsl.h * 360);
    var s = Math.round(hsl.s * 100);
    var l = Math.round(hsl.l * 100);
    return this.a === 1 ? "hsl(".concat(h2, ", ").concat(s, "%, ").concat(l, "%)") : "hsla(".concat(h2, ", ").concat(s, "%, ").concat(l, "%, ").concat(this.roundA, ")");
  };
  TinyColor2.prototype.toHex = function(allow3Char) {
    if (allow3Char === void 0) {
      allow3Char = false;
    }
    return rgbToHex(this.r, this.g, this.b, allow3Char);
  };
  TinyColor2.prototype.toHexString = function(allow3Char) {
    if (allow3Char === void 0) {
      allow3Char = false;
    }
    return "#" + this.toHex(allow3Char);
  };
  TinyColor2.prototype.toHex8 = function(allow4Char) {
    if (allow4Char === void 0) {
      allow4Char = false;
    }
    return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
  };
  TinyColor2.prototype.toHex8String = function(allow4Char) {
    if (allow4Char === void 0) {
      allow4Char = false;
    }
    return "#" + this.toHex8(allow4Char);
  };
  TinyColor2.prototype.toRgb = function() {
    return {
      r: Math.round(this.r),
      g: Math.round(this.g),
      b: Math.round(this.b),
      a: this.a
    };
  };
  TinyColor2.prototype.toRgbString = function() {
    var r = Math.round(this.r);
    var g = Math.round(this.g);
    var b = Math.round(this.b);
    return this.a === 1 ? "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")") : "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(this.roundA, ")");
  };
  TinyColor2.prototype.toPercentageRgb = function() {
    var fmt = function(x) {
      return "".concat(Math.round(bound01(x, 255) * 100), "%");
    };
    return {
      r: fmt(this.r),
      g: fmt(this.g),
      b: fmt(this.b),
      a: this.a
    };
  };
  TinyColor2.prototype.toPercentageRgbString = function() {
    var rnd = function(x) {
      return Math.round(bound01(x, 255) * 100);
    };
    return this.a === 1 ? "rgb(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%)") : "rgba(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%, ").concat(this.roundA, ")");
  };
  TinyColor2.prototype.toName = function() {
    if (this.a === 0) {
      return "transparent";
    }
    if (this.a < 1) {
      return false;
    }
    var hex2 = "#" + rgbToHex(this.r, this.g, this.b, false);
    for (var _i = 0, _a2 = Object.entries(names); _i < _a2.length; _i++) {
      var _b2 = _a2[_i], key = _b2[0], value = _b2[1];
      if (hex2 === value) {
        return key;
      }
    }
    return false;
  };
  TinyColor2.prototype.toString = function(format2) {
    var formatSet = Boolean(format2);
    format2 = format2 !== null && format2 !== void 0 ? format2 : this.format;
    var formattedString = false;
    var hasAlpha = this.a < 1 && this.a >= 0;
    var needsAlphaFormat = !formatSet && hasAlpha && (format2.startsWith("hex") || format2 === "name");
    if (needsAlphaFormat) {
      if (format2 === "name" && this.a === 0) {
        return this.toName();
      }
      return this.toRgbString();
    }
    if (format2 === "rgb") {
      formattedString = this.toRgbString();
    }
    if (format2 === "prgb") {
      formattedString = this.toPercentageRgbString();
    }
    if (format2 === "hex" || format2 === "hex6") {
      formattedString = this.toHexString();
    }
    if (format2 === "hex3") {
      formattedString = this.toHexString(true);
    }
    if (format2 === "hex4") {
      formattedString = this.toHex8String(true);
    }
    if (format2 === "hex8") {
      formattedString = this.toHex8String();
    }
    if (format2 === "name") {
      formattedString = this.toName();
    }
    if (format2 === "hsl") {
      formattedString = this.toHslString();
    }
    if (format2 === "hsv") {
      formattedString = this.toHsvString();
    }
    return formattedString || this.toHexString();
  };
  TinyColor2.prototype.toNumber = function() {
    return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
  };
  TinyColor2.prototype.clone = function() {
    return new TinyColor2(this.toString());
  };
  TinyColor2.prototype.lighten = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.brighten = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var rgb = this.toRgb();
    rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
    rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
    rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
    return new TinyColor2(rgb);
  };
  TinyColor2.prototype.darken = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.tint = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    return this.mix("white", amount);
  };
  TinyColor2.prototype.shade = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    return this.mix("black", amount);
  };
  TinyColor2.prototype.desaturate = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.saturate = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.greyscale = function() {
    return this.desaturate(100);
  };
  TinyColor2.prototype.spin = function(amount) {
    var hsl = this.toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.mix = function(color, amount) {
    if (amount === void 0) {
      amount = 50;
    }
    var rgb1 = this.toRgb();
    var rgb2 = new TinyColor2(color).toRgb();
    var p2 = amount / 100;
    var rgba = {
      r: (rgb2.r - rgb1.r) * p2 + rgb1.r,
      g: (rgb2.g - rgb1.g) * p2 + rgb1.g,
      b: (rgb2.b - rgb1.b) * p2 + rgb1.b,
      a: (rgb2.a - rgb1.a) * p2 + rgb1.a
    };
    return new TinyColor2(rgba);
  };
  TinyColor2.prototype.analogous = function(results, slices) {
    if (results === void 0) {
      results = 6;
    }
    if (slices === void 0) {
      slices = 30;
    }
    var hsl = this.toHsl();
    var part = 360 / slices;
    var ret = [this];
    for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
      hsl.h = (hsl.h + part) % 360;
      ret.push(new TinyColor2(hsl));
    }
    return ret;
  };
  TinyColor2.prototype.complement = function() {
    var hsl = this.toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.monochromatic = function(results) {
    if (results === void 0) {
      results = 6;
    }
    var hsv = this.toHsv();
    var h2 = hsv.h;
    var s = hsv.s;
    var v = hsv.v;
    var res = [];
    var modification = 1 / results;
    while (results--) {
      res.push(new TinyColor2({ h: h2, s, v }));
      v = (v + modification) % 1;
    }
    return res;
  };
  TinyColor2.prototype.splitcomplement = function() {
    var hsl = this.toHsl();
    var h2 = hsl.h;
    return [
      this,
      new TinyColor2({ h: (h2 + 72) % 360, s: hsl.s, l: hsl.l }),
      new TinyColor2({ h: (h2 + 216) % 360, s: hsl.s, l: hsl.l })
    ];
  };
  TinyColor2.prototype.onBackground = function(background) {
    var fg = this.toRgb();
    var bg = new TinyColor2(background).toRgb();
    return new TinyColor2({
      r: bg.r + (fg.r - bg.r) * fg.a,
      g: bg.g + (fg.g - bg.g) * fg.a,
      b: bg.b + (fg.b - bg.b) * fg.a
    });
  };
  TinyColor2.prototype.triad = function() {
    return this.polyad(3);
  };
  TinyColor2.prototype.tetrad = function() {
    return this.polyad(4);
  };
  TinyColor2.prototype.polyad = function(n) {
    var hsl = this.toHsl();
    var h2 = hsl.h;
    var result = [this];
    var increment = 360 / n;
    for (var i = 1; i < n; i++) {
      result.push(new TinyColor2({ h: (h2 + i * increment) % 360, s: hsl.s, l: hsl.l }));
    }
    return result;
  };
  TinyColor2.prototype.equals = function(color) {
    return this.toRgbString() === new TinyColor2(color).toRgbString();
  };
  return TinyColor2;
}();
const buttonType = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
];
const buttonNativeType = ["button", "submit", "reset"];
const buttonProps = buildProps({
  size: useSizeProp,
  disabled: Boolean,
  type: {
    type: String,
    values: buttonType,
    default: ""
  },
  icon: {
    type: definePropType([String, Object]),
    default: ""
  },
  nativeType: {
    type: String,
    values: buttonNativeType,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: definePropType([String, Object]),
    default: () => loading
  },
  plain: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  autoInsertSpace: {
    type: Boolean,
    default: void 0
  }
});
const buttonEmits = {
  click: (evt) => evt instanceof MouseEvent
};
const _sfc_main$y = defineComponent({
  name: "ElButton",
  components: {
    ElIcon,
    Loading: loading
  },
  props: buttonProps,
  emits: buttonEmits,
  setup(props, { emit, slots }) {
    const buttonRef = ref();
    const buttonGroupContext = inject(buttonGroupContextKey, void 0);
    const globalConfig = useGlobalConfig("button");
    const ns = useNamespace("button");
    const autoInsertSpace = computed(() => {
      var _a2, _b2, _c;
      return (_c = (_b2 = props.autoInsertSpace) != null ? _b2 : (_a2 = globalConfig.value) == null ? void 0 : _a2.autoInsertSpace) != null ? _c : false;
    });
    const shouldAddSpace = computed(() => {
      var _a2;
      const defaultSlot = (_a2 = slots.default) == null ? void 0 : _a2.call(slots);
      if (autoInsertSpace.value && (defaultSlot == null ? void 0 : defaultSlot.length) === 1) {
        const slot = defaultSlot[0];
        if ((slot == null ? void 0 : slot.type) === Text) {
          const text = slot.children;
          return /^\p{Unified_Ideograph}{2}$/u.test(text);
        }
      }
      return false;
    });
    const { form } = useFormItem();
    const buttonSize = useSize(computed(() => buttonGroupContext == null ? void 0 : buttonGroupContext.size));
    const buttonDisabled = useDisabled();
    const buttonType2 = computed(() => props.type || (buttonGroupContext == null ? void 0 : buttonGroupContext.type) || "");
    const typeColor = computed(() => useCssVar(`--el-color-${props.type}`).value);
    const buttonStyle = computed(() => {
      let styles = {};
      const buttonColor = props.color || typeColor.value;
      if (buttonColor) {
        const shadeBgColor = new TinyColor(buttonColor).shade(10).toString();
        if (props.plain) {
          styles = {
            "--el-button-bg-color": new TinyColor(buttonColor).tint(90).toString(),
            "--el-button-text-color": buttonColor,
            "--el-button-hover-text-color": "var(--el-color-white)",
            "--el-button-hover-bg-color": buttonColor,
            "--el-button-hover-border-color": buttonColor,
            "--el-button-active-bg-color": shadeBgColor,
            "--el-button-active-text-color": "var(--el-color-white)",
            "--el-button-active-border-color": shadeBgColor
          };
        } else {
          const tintBgColor = new TinyColor(buttonColor).tint(20).toString();
          styles = {
            "--el-button-bg-color": buttonColor,
            "--el-button-border-color": buttonColor,
            "--el-button-hover-bg-color": tintBgColor,
            "--el-button-hover-border-color": tintBgColor,
            "--el-button-active-bg-color": shadeBgColor,
            "--el-button-active-border-color": shadeBgColor
          };
        }
        if (buttonDisabled.value) {
          const disabledButtonColor = new TinyColor(buttonColor).tint(50).toString();
          styles["--el-button-disabled-bg-color"] = disabledButtonColor;
          styles["--el-button-disabled-border-color"] = disabledButtonColor;
        }
      }
      return styles;
    });
    const handleClick = (evt) => {
      if (props.nativeType === "reset") {
        form == null ? void 0 : form.resetFields();
      }
      emit("click", evt);
    };
    return {
      buttonRef,
      buttonStyle,
      buttonSize,
      buttonType: buttonType2,
      buttonDisabled,
      shouldAddSpace,
      handleClick,
      ns
    };
  }
});
const _hoisted_1$n = ["disabled", "autofocus", "type"];
function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = resolveComponent("el-icon");
  return openBlock(), createElementBlock("button", {
    ref: "buttonRef",
    class: normalizeClass([
      _ctx.ns.b(),
      _ctx.ns.m(_ctx.buttonType),
      _ctx.ns.m(_ctx.buttonSize),
      _ctx.ns.is("disabled", _ctx.buttonDisabled),
      _ctx.ns.is("loading", _ctx.loading),
      _ctx.ns.is("plain", _ctx.plain),
      _ctx.ns.is("round", _ctx.round),
      _ctx.ns.is("circle", _ctx.circle)
    ]),
    disabled: _ctx.buttonDisabled || _ctx.loading,
    autofocus: _ctx.autofocus,
    type: _ctx.nativeType,
    style: normalizeStyle(_ctx.buttonStyle),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    _ctx.loading ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
      _ctx.$slots.loading ? renderSlot(_ctx.$slots, "loading", { key: 0 }) : (openBlock(), createBlock(_component_el_icon, {
        key: 1,
        class: normalizeClass(_ctx.ns.is("loading"))
      }, {
        default: withCtx(() => [
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.loadingIcon)))
        ]),
        _: 1
      }, 8, ["class"]))
    ], 2112)) : _ctx.icon ? (openBlock(), createBlock(_component_el_icon, { key: 1 }, {
      default: withCtx(() => [
        (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))
      ]),
      _: 1
    })) : createCommentVNode("v-if", true),
    _ctx.$slots.default ? (openBlock(), createElementBlock("span", {
      key: 2,
      class: normalizeClass({ [_ctx.ns.em("text", "expand")]: _ctx.shouldAddSpace })
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 2)) : createCommentVNode("v-if", true)
  ], 14, _hoisted_1$n);
}
var Button = /* @__PURE__ */ _export_sfc$2(_sfc_main$y, [["render", _sfc_render$s]]);
const buttonGroupProps = {
  size: buttonProps.size,
  type: buttonProps.type
};
const _sfc_main$x = defineComponent({
  name: "ElButtonGroup",
  props: buttonGroupProps,
  setup(props) {
    provide(buttonGroupContextKey, reactive({
      size: toRef(props, "size"),
      type: toRef(props, "type")
    }));
    const ns = useNamespace("button");
    return {
      ns
    };
  }
});
function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(`${_ctx.ns.b("group")}`)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var ButtonGroup = /* @__PURE__ */ _export_sfc$2(_sfc_main$x, [["render", _sfc_render$r]]);
const ElButton = withInstall(Button, {
  ButtonGroup
});
withNoopInstall(ButtonGroup);
var baseIsEqual = _baseIsEqual;
function isEqual(value, other) {
  return baseIsEqual(value, other);
}
var isEqual_1 = isEqual;
const isValidComponentSize = (val) => ["", "large", "default", "small"].includes(val);
function scrollIntoView(container, selected) {
  if (!isClient)
    return;
  if (!selected) {
    container.scrollTop = 0;
    return;
  }
  const offsetParents = [];
  let pointer = selected.offsetParent;
  while (pointer !== null && container !== pointer && container.contains(pointer)) {
    offsetParents.push(pointer);
    pointer = pointer.offsetParent;
  }
  const top = selected.offsetTop + offsetParents.reduce((prev, curr) => prev + curr.offsetTop, 0);
  const bottom = top + selected.offsetHeight;
  const viewRectTop = container.scrollTop;
  const viewRectBottom = viewRectTop + container.clientHeight;
  if (top < viewRectTop) {
    container.scrollTop = top;
  } else if (bottom > viewRectBottom) {
    container.scrollTop = bottom - container.clientHeight;
  }
}
const tagProps = buildProps({
  closable: Boolean,
  type: {
    type: String,
    values: ["success", "info", "warning", "danger", ""],
    default: ""
  },
  hit: Boolean,
  disableTransitions: Boolean,
  color: {
    type: String,
    default: ""
  },
  size: {
    type: String,
    values: ["large", "default", "small"]
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  }
});
const tagEmits = {
  close: (evt) => evt instanceof MouseEvent,
  click: (evt) => evt instanceof MouseEvent
};
const _sfc_main$w = defineComponent({
  name: "ElTag",
  components: { ElIcon, Close: close$1 },
  props: tagProps,
  emits: tagEmits,
  setup(props, { emit }) {
    const tagSize = useSize();
    const ns = useNamespace("tag");
    const classes = computed(() => {
      const { type: type4, hit, effect, closable } = props;
      return [
        ns.b(),
        ns.is("closable", closable),
        ns.m(type4),
        ns.m(tagSize.value),
        ns.m(effect),
        ns.is("hit", hit)
      ];
    });
    const handleClose = (event) => {
      event.stopPropagation();
      emit("close", event);
    };
    const handleClick = (event) => {
      emit("click", event);
    };
    return {
      ns,
      classes,
      handleClose,
      handleClick
    };
  }
});
function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_close = resolveComponent("close");
  const _component_el_icon = resolveComponent("el-icon");
  return !_ctx.disableTransitions ? (openBlock(), createElementBlock("span", {
    key: 0,
    class: normalizeClass(_ctx.classes),
    style: normalizeStyle({ backgroundColor: _ctx.color }),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    createBaseVNode("span", {
      class: normalizeClass(_ctx.ns.e("content"))
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 2),
    _ctx.closable ? (openBlock(), createBlock(_component_el_icon, {
      key: 0,
      class: normalizeClass(_ctx.ns.e("close")),
      onClick: _ctx.handleClose
    }, {
      default: withCtx(() => [
        createVNode(_component_close)
      ]),
      _: 1
    }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
  ], 6)) : (openBlock(), createBlock(Transition, {
    key: 1,
    name: `${_ctx.ns.namespace.value}-zoom-in-center`
  }, {
    default: withCtx(() => [
      createBaseVNode("span", {
        class: normalizeClass(_ctx.classes),
        style: normalizeStyle({ backgroundColor: _ctx.color }),
        onClick: _cache[1] || (_cache[1] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
      }, [
        createBaseVNode("span", {
          class: normalizeClass(_ctx.ns.e("content"))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2),
        _ctx.closable ? (openBlock(), createBlock(_component_el_icon, {
          key: 0,
          class: normalizeClass(_ctx.ns.e("close")),
          onClick: _ctx.handleClose
        }, {
          default: withCtx(() => [
            createVNode(_component_close)
          ]),
          _: 1
        }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
      ], 6)
    ]),
    _: 3
  }, 8, ["name"]));
}
var Tag = /* @__PURE__ */ _export_sfc$2(_sfc_main$w, [["render", _sfc_render$q]]);
const ElTag = withInstall(Tag);
const messageConfig = {};
const configProviderProps = buildProps({
  locale: {
    type: definePropType(Object)
  },
  size: {
    type: String,
    values: ["large", "default", "small"]
  },
  button: {
    type: definePropType(Object)
  },
  message: {
    type: definePropType(Object)
  },
  zIndex: {
    type: Number
  },
  namespace: {
    type: String,
    default: "el"
  }
});
defineComponent({
  name: "ElConfigProvider",
  props: configProviderProps,
  setup(props, { slots }) {
    watch(() => props.message, (val) => {
      Object.assign(messageConfig, val != null ? val : {});
    }, { immediate: true, deep: true });
    const config = provideGlobalConfig(props);
    return () => renderSlot(slots, "default", { config: config == null ? void 0 : config.value });
  }
});
const _sfc_main$v = defineComponent({
  name: "ElContainer",
  props: {
    direction: {
      type: String,
      default: ""
    }
  },
  setup(props, { slots }) {
    const ns = useNamespace("container");
    const isVertical = computed(() => {
      if (props.direction === "vertical") {
        return true;
      } else if (props.direction === "horizontal") {
        return false;
      }
      if (slots && slots.default) {
        const vNodes = slots.default();
        return vNodes.some((vNode) => {
          const tag = vNode.type.name;
          return tag === "ElHeader" || tag === "ElFooter";
        });
      } else {
        return false;
      }
    });
    return {
      isVertical,
      ns
    };
  }
});
function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("section", {
    class: normalizeClass([_ctx.ns.b(), _ctx.ns.is("vertical", _ctx.isVertical)])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var Container = /* @__PURE__ */ _export_sfc$2(_sfc_main$v, [["render", _sfc_render$p]]);
const _sfc_main$u = defineComponent({
  name: "ElAside",
  props: {
    width: {
      type: String,
      default: null
    }
  },
  setup(props) {
    const ns = useNamespace("aside");
    return {
      style: computed(() => {
        return props.width ? { "--el-aside-width": props.width } : {};
      }),
      ns
    };
  }
});
function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("aside", {
    class: normalizeClass(_ctx.ns.b()),
    style: normalizeStyle(_ctx.style)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 6);
}
var Aside = /* @__PURE__ */ _export_sfc$2(_sfc_main$u, [["render", _sfc_render$o]]);
const _sfc_main$t = defineComponent({
  name: "ElFooter",
  props: {
    height: {
      type: String,
      default: null
    }
  },
  setup(props) {
    const ns = useNamespace("footer");
    return {
      style: computed(() => props.height ? {
        "--el-footer-height": props.height
      } : {}),
      ns
    };
  }
});
function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("footer", {
    class: normalizeClass(_ctx.ns.b()),
    style: normalizeStyle(_ctx.style)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 6);
}
var Footer = /* @__PURE__ */ _export_sfc$2(_sfc_main$t, [["render", _sfc_render$n]]);
const _sfc_main$s = defineComponent({
  name: "ElHeader",
  props: {
    height: {
      type: String,
      default: null
    }
  },
  setup(props) {
    const ns = useNamespace("header");
    return {
      style: computed(() => props.height ? {
        "--el-header-height": props.height
      } : {}),
      ns
    };
  }
});
function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("header", {
    class: normalizeClass(_ctx.ns.b()),
    style: normalizeStyle(_ctx.style)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 6);
}
var Header$1 = /* @__PURE__ */ _export_sfc$2(_sfc_main$s, [["render", _sfc_render$m]]);
const _sfc_main$r = defineComponent({
  name: "ElMain",
  setup() {
    const ns = useNamespace("main");
    return {
      ns
    };
  }
});
function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("main", {
    class: normalizeClass(_ctx.ns.b())
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var Main = /* @__PURE__ */ _export_sfc$2(_sfc_main$r, [["render", _sfc_render$l]]);
const ElContainer = withInstall(Container, {
  Aside,
  Footer,
  Header: Header$1,
  Main
});
const ElAside = withNoopInstall(Aside);
withNoopInstall(Footer);
withNoopInstall(Header$1);
const ElMain = withNoopInstall(Main);
var PatchFlags = /* @__PURE__ */ ((PatchFlags2) => {
  PatchFlags2[PatchFlags2["TEXT"] = 1] = "TEXT";
  PatchFlags2[PatchFlags2["CLASS"] = 2] = "CLASS";
  PatchFlags2[PatchFlags2["STYLE"] = 4] = "STYLE";
  PatchFlags2[PatchFlags2["PROPS"] = 8] = "PROPS";
  PatchFlags2[PatchFlags2["FULL_PROPS"] = 16] = "FULL_PROPS";
  PatchFlags2[PatchFlags2["HYDRATE_EVENTS"] = 32] = "HYDRATE_EVENTS";
  PatchFlags2[PatchFlags2["STABLE_FRAGMENT"] = 64] = "STABLE_FRAGMENT";
  PatchFlags2[PatchFlags2["KEYED_FRAGMENT"] = 128] = "KEYED_FRAGMENT";
  PatchFlags2[PatchFlags2["UNKEYED_FRAGMENT"] = 256] = "UNKEYED_FRAGMENT";
  PatchFlags2[PatchFlags2["NEED_PATCH"] = 512] = "NEED_PATCH";
  PatchFlags2[PatchFlags2["DYNAMIC_SLOTS"] = 1024] = "DYNAMIC_SLOTS";
  PatchFlags2[PatchFlags2["HOISTED"] = -1] = "HOISTED";
  PatchFlags2[PatchFlags2["BAIL"] = -2] = "BAIL";
  return PatchFlags2;
})(PatchFlags || {});
const overlayProps = buildProps({
  mask: {
    type: Boolean,
    default: true
  },
  customMaskEvent: {
    type: Boolean,
    default: false
  },
  overlayClass: {
    type: definePropType([
      String,
      Array,
      Object
    ])
  },
  zIndex: {
    type: definePropType([String, Number])
  }
});
const overlayEmits = {
  click: (evt) => evt instanceof MouseEvent
};
var Overlay = defineComponent({
  name: "ElOverlay",
  props: overlayProps,
  emits: overlayEmits,
  setup(props, { slots, emit }) {
    const onMaskClick = (e) => {
      emit("click", e);
    };
    const { onClick, onMousedown, onMouseup } = useSameTarget(props.customMaskEvent ? void 0 : onMaskClick);
    return () => {
      return props.mask ? createVNode("div", {
        class: ["el-overlay", props.overlayClass],
        style: {
          zIndex: props.zIndex
        },
        onClick,
        onMousedown,
        onMouseup
      }, [renderSlot(slots, "default")], PatchFlags.STYLE | PatchFlags.CLASS | PatchFlags.PROPS, ["onClick", "onMouseup", "onMousedown"]) : h("div", {
        class: props.overlayClass,
        style: {
          zIndex: props.zIndex,
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px"
        }
      }, [renderSlot(slots, "default")]);
    };
  }
});
const ElOverlay = Overlay;
const dialogProps = buildProps({
  appendToBody: {
    type: Boolean,
    default: false
  },
  beforeClose: {
    type: definePropType(Function)
  },
  destroyOnClose: {
    type: Boolean,
    default: false
  },
  center: {
    type: Boolean,
    default: false
  },
  customClass: {
    type: String,
    default: ""
  },
  closeIcon: {
    type: definePropType([String, Object]),
    default: ""
  },
  closeOnClickModal: {
    type: Boolean,
    default: true
  },
  closeOnPressEscape: {
    type: Boolean,
    default: true
  },
  fullscreen: {
    type: Boolean,
    default: false
  },
  lockScroll: {
    type: Boolean,
    default: true
  },
  modal: {
    type: Boolean,
    default: true
  },
  showClose: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: ""
  },
  openDelay: {
    type: Number,
    default: 0
  },
  closeDelay: {
    type: Number,
    default: 0
  },
  top: {
    type: String
  },
  modelValue: {
    type: Boolean,
    required: true
  },
  modalClass: String,
  width: {
    type: [String, Number]
  },
  zIndex: {
    type: Number
  }
});
const dialogEmits = {
  open: () => true,
  opened: () => true,
  close: () => true,
  closed: () => true,
  [UPDATE_MODEL_EVENT]: (value) => typeof value === "boolean"
};
const useDialog = (props, { emit }, targetRef) => {
  const visible = ref(false);
  const closed = ref(false);
  const rendered = ref(false);
  const zIndex = ref(props.zIndex || PopupManager.nextZIndex());
  let openTimer = void 0;
  let closeTimer = void 0;
  const normalizeWidth = computed(() => isNumber$1(props.width) ? `${props.width}px` : props.width);
  const style = computed(() => {
    const style2 = {};
    const varPrefix = `--el-dialog`;
    if (!props.fullscreen) {
      if (props.top) {
        style2[`${varPrefix}-margin-top`] = props.top;
      }
      if (props.width) {
        style2[`${varPrefix}-width`] = normalizeWidth.value;
      }
    }
    return style2;
  });
  function afterEnter() {
    emit("opened");
  }
  function afterLeave() {
    emit("closed");
    emit(UPDATE_MODEL_EVENT, false);
    if (props.destroyOnClose) {
      rendered.value = false;
    }
  }
  function beforeLeave() {
    emit("close");
  }
  function open() {
    closeTimer == null ? void 0 : closeTimer();
    openTimer == null ? void 0 : openTimer();
    if (props.openDelay && props.openDelay > 0) {
      ({ stop: openTimer } = useTimeoutFn(() => doOpen(), props.openDelay));
    } else {
      doOpen();
    }
  }
  function close2() {
    openTimer == null ? void 0 : openTimer();
    closeTimer == null ? void 0 : closeTimer();
    if (props.closeDelay && props.closeDelay > 0) {
      ({ stop: closeTimer } = useTimeoutFn(() => doClose(), props.closeDelay));
    } else {
      doClose();
    }
  }
  function hide(shouldCancel) {
    if (shouldCancel)
      return;
    closed.value = true;
    visible.value = false;
  }
  function handleClose() {
    if (props.beforeClose) {
      props.beforeClose(hide);
    } else {
      close2();
    }
  }
  function onModalClick2() {
    if (props.closeOnClickModal) {
      handleClose();
    }
  }
  function doOpen() {
    if (!isClient) {
      return;
    }
    visible.value = true;
  }
  function doClose() {
    visible.value = false;
  }
  if (props.lockScroll) {
    useLockscreen(visible);
  }
  if (props.closeOnPressEscape) {
    useModal({
      handleClose
    }, visible);
  }
  useRestoreActive(visible);
  watch(() => props.modelValue, (val) => {
    if (val) {
      closed.value = false;
      open();
      rendered.value = true;
      emit("open");
      zIndex.value = props.zIndex ? zIndex.value++ : PopupManager.nextZIndex();
      nextTick(() => {
        if (targetRef.value) {
          targetRef.value.scrollTop = 0;
        }
      });
    } else {
      if (visible.value) {
        close2();
      }
    }
  });
  onMounted(() => {
    if (props.modelValue) {
      visible.value = true;
      rendered.value = true;
      open();
    }
  });
  return {
    afterEnter,
    afterLeave,
    beforeLeave,
    handleClose,
    onModalClick: onModalClick2,
    close: close2,
    doClose,
    closed,
    style,
    rendered,
    visible,
    zIndex
  };
};
const _sfc_main$q = defineComponent({
  name: "ElDialog",
  components: {
    ElOverlay,
    ElIcon,
    ...CloseComponents
  },
  directives: {
    TrapFocus
  },
  props: dialogProps,
  emits: dialogEmits,
  setup(props, ctx) {
    const dialogRef = ref();
    const dialog = useDialog(props, ctx, dialogRef);
    const overlayEvent = useSameTarget(dialog.onModalClick);
    return {
      dialogRef,
      overlayEvent,
      ...dialog
    };
  }
});
const _hoisted_1$m = ["aria-label"];
const _hoisted_2$e = { class: "el-dialog__header" };
const _hoisted_3$a = { class: "el-dialog__title" };
const _hoisted_4$6 = {
  key: 0,
  class: "el-dialog__body"
};
const _hoisted_5$5 = {
  key: 1,
  class: "el-dialog__footer"
};
function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_overlay = resolveComponent("el-overlay");
  const _directive_trap_focus = resolveDirective("trap-focus");
  return openBlock(), createBlock(Teleport, {
    to: "body",
    disabled: !_ctx.appendToBody
  }, [
    createVNode(Transition, {
      name: "dialog-fade",
      onAfterEnter: _ctx.afterEnter,
      onAfterLeave: _ctx.afterLeave,
      onBeforeLeave: _ctx.beforeLeave
    }, {
      default: withCtx(() => [
        withDirectives(createVNode(_component_el_overlay, {
          "custom-mask-event": "",
          mask: _ctx.modal,
          "overlay-class": _ctx.modalClass,
          "z-index": _ctx.zIndex
        }, {
          default: withCtx(() => [
            createBaseVNode("div", {
              class: "el-overlay-dialog",
              onClick: _cache[2] || (_cache[2] = (...args) => _ctx.overlayEvent.onClick && _ctx.overlayEvent.onClick(...args)),
              onMousedown: _cache[3] || (_cache[3] = (...args) => _ctx.overlayEvent.onMousedown && _ctx.overlayEvent.onMousedown(...args)),
              onMouseup: _cache[4] || (_cache[4] = (...args) => _ctx.overlayEvent.onMouseup && _ctx.overlayEvent.onMouseup(...args))
            }, [
              withDirectives((openBlock(), createElementBlock("div", {
                ref: "dialogRef",
                class: normalizeClass([
                  "el-dialog",
                  {
                    "is-fullscreen": _ctx.fullscreen,
                    "el-dialog--center": _ctx.center
                  },
                  _ctx.customClass
                ]),
                "aria-modal": "true",
                role: "dialog",
                "aria-label": _ctx.title || "dialog",
                style: normalizeStyle(_ctx.style),
                onClick: _cache[1] || (_cache[1] = withModifiers(() => {
                }, ["stop"]))
              }, [
                createBaseVNode("div", _hoisted_2$e, [
                  renderSlot(_ctx.$slots, "title", {}, () => [
                    createBaseVNode("span", _hoisted_3$a, toDisplayString(_ctx.title), 1)
                  ]),
                  _ctx.showClose ? (openBlock(), createElementBlock("button", {
                    key: 0,
                    "aria-label": "close",
                    class: "el-dialog__headerbtn",
                    type: "button",
                    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClose && _ctx.handleClose(...args))
                  }, [
                    createVNode(_component_el_icon, { class: "el-dialog__close" }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(_ctx.closeIcon || "close")))
                      ]),
                      _: 1
                    })
                  ])) : createCommentVNode("v-if", true)
                ]),
                _ctx.rendered ? (openBlock(), createElementBlock("div", _hoisted_4$6, [
                  renderSlot(_ctx.$slots, "default")
                ])) : createCommentVNode("v-if", true),
                _ctx.$slots.footer ? (openBlock(), createElementBlock("div", _hoisted_5$5, [
                  renderSlot(_ctx.$slots, "footer")
                ])) : createCommentVNode("v-if", true)
              ], 14, _hoisted_1$m)), [
                [_directive_trap_focus]
              ])
            ], 32)
          ]),
          _: 3
        }, 8, ["mask", "overlay-class", "z-index"]), [
          [vShow, _ctx.visible]
        ])
      ]),
      _: 3
    }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])
  ], 8, ["disabled"]);
}
var Dialog = /* @__PURE__ */ _export_sfc$2(_sfc_main$q, [["render", _sfc_render$k]]);
const ElDialog = withInstall(Dialog);
function useFormLabelWidth() {
  const potentialLabelWidthArr = ref([]);
  const autoLabelWidth = computed(() => {
    if (!potentialLabelWidthArr.value.length)
      return "0";
    const max = Math.max(...potentialLabelWidthArr.value);
    return max ? `${max}px` : "";
  });
  function getLabelWidthIndex(width) {
    const index = potentialLabelWidthArr.value.indexOf(width);
    return index;
  }
  function registerLabelWidth(val, oldVal) {
    if (val && oldVal) {
      const index = getLabelWidthIndex(oldVal);
      potentialLabelWidthArr.value.splice(index, 1, val);
    } else if (val) {
      potentialLabelWidthArr.value.push(val);
    }
  }
  function deregisterLabelWidth(val) {
    const index = getLabelWidthIndex(val);
    index > -1 && potentialLabelWidthArr.value.splice(index, 1);
  }
  return {
    autoLabelWidth,
    registerLabelWidth,
    deregisterLabelWidth
  };
}
const _sfc_main$p = defineComponent({
  name: "ElForm",
  props: {
    model: Object,
    rules: Object,
    labelPosition: String,
    labelWidth: {
      type: [String, Number],
      default: ""
    },
    labelSuffix: {
      type: String,
      default: ""
    },
    inline: Boolean,
    inlineMessage: Boolean,
    statusIcon: Boolean,
    showMessage: {
      type: Boolean,
      default: true
    },
    size: String,
    disabled: Boolean,
    validateOnRuleChange: {
      type: Boolean,
      default: true
    },
    hideRequiredAsterisk: {
      type: Boolean,
      default: false
    },
    scrollToError: Boolean
  },
  emits: ["validate"],
  setup(props, { emit }) {
    const fields = [];
    watch(() => props.rules, () => {
      fields.forEach((field) => {
        field.evaluateValidationEnabled();
      });
      if (props.validateOnRuleChange) {
        validate(() => ({}));
      }
    });
    const formSize = useSize();
    const prefix = "el-form";
    const formKls = computed(() => {
      const { labelPosition, inline } = props;
      return [
        prefix,
        `${prefix}--${formSize.value}`,
        labelPosition ? `${prefix}--label-${labelPosition}` : "",
        inline ? `${prefix}--inline` : ""
      ];
    });
    const addField = (field) => {
      if (field) {
        fields.push(field);
      }
    };
    const removeField = (field) => {
      if (field.prop) {
        fields.splice(fields.indexOf(field), 1);
      }
    };
    const resetFields = () => {
      if (!props.model) {
        return;
      }
      fields.forEach((field) => {
        field.resetField();
      });
    };
    const clearValidate = (props2 = []) => {
      const fds = props2.length ? typeof props2 === "string" ? fields.filter((field) => props2 === field.prop) : fields.filter((field) => props2.indexOf(field.prop) > -1) : fields;
      fds.forEach((field) => {
        field.clearValidate();
      });
    };
    const validate = (callback) => {
      if (!props.model) {
        return;
      }
      let promise;
      if (typeof callback !== "function") {
        promise = new Promise((resolve2, reject) => {
          callback = function(valid2, invalidFields2) {
            if (valid2) {
              resolve2(true);
            } else {
              reject(invalidFields2);
            }
          };
        });
      }
      if (fields.length === 0) {
        callback(true);
      }
      let valid = true;
      let count = 0;
      let invalidFields = {};
      let firstInvalidFields;
      for (const field of fields) {
        field.validate("", (message2, field2) => {
          if (message2) {
            valid = false;
            firstInvalidFields || (firstInvalidFields = field2);
          }
          invalidFields = { ...invalidFields, ...field2 };
          if (++count === fields.length) {
            callback(valid, invalidFields);
          }
        });
      }
      if (!valid && props.scrollToError) {
        scrollToField(Object.keys(firstInvalidFields)[0]);
      }
      return promise;
    };
    const validateField = (props2, cb) => {
      props2 = [].concat(props2);
      const fds = fields.filter((field) => props2.indexOf(field.prop) !== -1);
      if (!fields.length) {
        return;
      }
      fds.forEach((field) => {
        field.validate("", cb);
      });
    };
    const scrollToField = (prop) => {
      fields.forEach((item) => {
        if (item.prop === prop) {
          item.$el.scrollIntoView();
        }
      });
    };
    const elForm2 = reactive({
      ...toRefs(props),
      resetFields,
      clearValidate,
      validateField,
      emit,
      addField,
      removeField,
      ...useFormLabelWidth()
    });
    provide(elFormKey, elForm2);
    return {
      formKls,
      validate,
      resetFields,
      clearValidate,
      validateField,
      scrollToField
    };
  }
});
function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("form", {
    class: normalizeClass(_ctx.formKls)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var Form = /* @__PURE__ */ _export_sfc$2(_sfc_main$p, [["render", _sfc_render$j]]);
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p2) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p3) {
    o2.__proto__ = p3;
    return o2;
  };
  return _setPrototypeOf(o, p2);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct2(Parent2, args2, Class2) {
      var a = [null];
      a.push.apply(a, args2);
      var Constructor = Function.bind.apply(Parent2, a);
      var instance2 = new Constructor();
      if (Class2)
        _setPrototypeOf(instance2, Class2.prototype);
      return instance2;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeFunction(fn2) {
  return Function.toString.call(fn2).indexOf("[native code]") !== -1;
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
  _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
    if (Class2 === null || !_isNativeFunction(Class2))
      return Class2;
    if (typeof Class2 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class2))
        return _cache.get(Class2);
      _cache.set(Class2, Wrapper);
    }
    function Wrapper() {
      return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class2.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class2);
  };
  return _wrapNativeSuper(Class);
}
var formatRegExp = /%[sdj%]/g;
var warning = function warning2() {
};
if (typeof process !== "undefined" && process.env && false) {
  warning = function warning3(type4, errors) {
    if (typeof console !== "undefined" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING === "undefined") {
      if (errors.every(function(e) {
        return typeof e === "string";
      })) {
        console.warn(type4, errors);
      }
    }
  };
}
function convertFieldsError(errors) {
  if (!errors || !errors.length)
    return null;
  var fields = {};
  errors.forEach(function(error) {
    var field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}
function format(template) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  var i = 0;
  var len = args.length;
  if (typeof template === "function") {
    return template.apply(null, args);
  }
  if (typeof template === "string") {
    var str = template.replace(formatRegExp, function(x) {
      if (x === "%%") {
        return "%";
      }
      if (i >= len) {
        return x;
      }
      switch (x) {
        case "%s":
          return String(args[i++]);
        case "%d":
          return Number(args[i++]);
        case "%j":
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return "[Circular]";
          }
          break;
        default:
          return x;
      }
    });
    return str;
  }
  return template;
}
function isNativeStringType(type4) {
  return type4 === "string" || type4 === "url" || type4 === "hex" || type4 === "email" || type4 === "date" || type4 === "pattern";
}
function isEmptyValue(value, type4) {
  if (value === void 0 || value === null) {
    return true;
  }
  if (type4 === "array" && Array.isArray(value) && !value.length) {
    return true;
  }
  if (isNativeStringType(type4) && typeof value === "string" && !value) {
    return true;
  }
  return false;
}
function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;
  function count(errors) {
    results.push.apply(results, errors || []);
    total++;
    if (total === arrLength) {
      callback(results);
    }
  }
  arr.forEach(function(a) {
    func(a, count);
  });
}
function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;
  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }
    var original = index;
    index = index + 1;
    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }
  next([]);
}
function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function(k) {
    ret.push.apply(ret, objArr[k] || []);
  });
  return ret;
}
var AsyncValidationError = /* @__PURE__ */ function(_Error) {
  _inheritsLoose(AsyncValidationError2, _Error);
  function AsyncValidationError2(errors, fields) {
    var _this;
    _this = _Error.call(this, "Async Validation Error") || this;
    _this.errors = errors;
    _this.fields = fields;
    return _this;
  }
  return AsyncValidationError2;
}(/* @__PURE__ */ _wrapNativeSuper(Error));
function asyncMap(objArr, option, func, callback, source) {
  if (option.first) {
    var _pending = new Promise(function(resolve2, reject) {
      var next = function next2(errors) {
        callback(errors);
        return errors.length ? reject(new AsyncValidationError(errors, convertFieldsError(errors))) : resolve2(source);
      };
      var flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next);
    });
    _pending["catch"](function(e) {
      return e;
    });
    return _pending;
  }
  var firstFields = option.firstFields === true ? Object.keys(objArr) : option.firstFields || [];
  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new Promise(function(resolve2, reject) {
    var next = function next2(errors) {
      results.push.apply(results, errors);
      total++;
      if (total === objArrLength) {
        callback(results);
        return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve2(source);
      }
    };
    if (!objArrKeys.length) {
      callback(results);
      resolve2(source);
    }
    objArrKeys.forEach(function(key) {
      var arr = objArr[key];
      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending["catch"](function(e) {
    return e;
  });
  return pending;
}
function isErrorObj(obj) {
  return !!(obj && obj.message !== void 0);
}
function getValue(value, path) {
  var v = value;
  for (var i = 0; i < path.length; i++) {
    if (v == void 0) {
      return v;
    }
    v = v[path[i]];
  }
  return v;
}
function complementError(rule, source) {
  return function(oe) {
    var fieldValue;
    if (rule.fullFields) {
      fieldValue = getValue(source, rule.fullFields);
    } else {
      fieldValue = source[oe.field || rule.fullField];
    }
    if (isErrorObj(oe)) {
      oe.field = oe.field || rule.fullField;
      oe.fieldValue = fieldValue;
      return oe;
    }
    return {
      message: typeof oe === "function" ? oe() : oe,
      fieldValue,
      field: oe.field || rule.fullField
    };
  };
}
function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];
        if (typeof value === "object" && typeof target[s] === "object") {
          target[s] = _extends({}, target[s], value);
        } else {
          target[s] = value;
        }
      }
    }
  }
  return target;
}
var required$1 = function required(rule, value, source, errors, options, type4) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type4 || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
};
var whitespace = function whitespace2(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === "") {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
};
var urlReg;
var getUrlRegex = function() {
  if (urlReg) {
    return urlReg;
  }
  var word = "[a-fA-F\\d:]";
  var b = function b2(options) {
    return options && options.includeBoundaries ? "(?:(?<=\\s|^)(?=" + word + ")|(?<=" + word + ")(?=\\s|$))" : "";
  };
  var v4 = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}";
  var v6seg = "[a-fA-F\\d]{1,4}";
  var v6 = ("\n(?:\n(?:" + v6seg + ":){7}(?:" + v6seg + "|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:" + v6seg + ":){6}(?:" + v4 + "|:" + v6seg + "|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:" + v6seg + ":){5}(?::" + v4 + "|(?::" + v6seg + "){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:" + v6seg + ":){4}(?:(?::" + v6seg + "){0,1}:" + v4 + "|(?::" + v6seg + "){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:" + v6seg + ":){3}(?:(?::" + v6seg + "){0,2}:" + v4 + "|(?::" + v6seg + "){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:" + v6seg + ":){2}(?:(?::" + v6seg + "){0,3}:" + v4 + "|(?::" + v6seg + "){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:" + v6seg + ":){1}(?:(?::" + v6seg + "){0,4}:" + v4 + "|(?::" + v6seg + "){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::" + v6seg + "){0,5}:" + v4 + "|(?::" + v6seg + "){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n").replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim();
  var v46Exact = new RegExp("(?:^" + v4 + "$)|(?:^" + v6 + "$)");
  var v4exact = new RegExp("^" + v4 + "$");
  var v6exact = new RegExp("^" + v6 + "$");
  var ip = function ip2(options) {
    return options && options.exact ? v46Exact : new RegExp("(?:" + b(options) + v4 + b(options) + ")|(?:" + b(options) + v6 + b(options) + ")", "g");
  };
  ip.v4 = function(options) {
    return options && options.exact ? v4exact : new RegExp("" + b(options) + v4 + b(options), "g");
  };
  ip.v6 = function(options) {
    return options && options.exact ? v6exact : new RegExp("" + b(options) + v6 + b(options), "g");
  };
  var protocol = "(?:(?:[a-z]+:)?//)";
  var auth = "(?:\\S+(?::\\S*)?@)?";
  var ipv4 = ip.v4().source;
  var ipv6 = ip.v6().source;
  var host = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)";
  var domain = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*";
  var tld = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";
  var port = "(?::\\d{2,5})?";
  var path = '(?:[/?#][^\\s"]*)?';
  var regex = "(?:" + protocol + "|www\\.)" + auth + "(?:localhost|" + ipv4 + "|" + ipv6 + "|" + host + domain + tld + ")" + port + path;
  urlReg = new RegExp("(?:^" + regex + "$)", "i");
  return urlReg;
};
var pattern$2 = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  "float": function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }
    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === "function" && typeof value.getMonth === "function" && typeof value.getYear === "function" && !isNaN(value.getTime());
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }
    return typeof value === "number";
  },
  object: function object(value) {
    return typeof value === "object" && !types.array(value);
  },
  method: function method(value) {
    return typeof value === "function";
  },
  email: function email(value) {
    return typeof value === "string" && value.length <= 320 && !!value.match(pattern$2.email);
  },
  url: function url(value) {
    return typeof value === "string" && value.length <= 2048 && !!value.match(getUrlRegex());
  },
  hex: function hex(value) {
    return typeof value === "string" && !!value.match(pattern$2.hex);
  }
};
var type$1 = function type(rule, value, source, errors, options) {
  if (rule.required && value === void 0) {
    required$1(rule, value, source, errors, options);
    return;
  }
  var custom = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"];
  var ruleType = rule.type;
  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    }
  } else if (ruleType && typeof value !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
};
var range = function range2(rule, value, source, errors, options) {
  var len = typeof rule.len === "number";
  var min = typeof rule.min === "number";
  var max = typeof rule.max === "number";
  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === "number";
  var str = typeof value === "string";
  var arr = Array.isArray(value);
  if (num) {
    key = "number";
  } else if (str) {
    key = "string";
  } else if (arr) {
    key = "array";
  }
  if (!key) {
    return false;
  }
  if (arr) {
    val = value.length;
  }
  if (str) {
    val = value.replace(spRegexp, "_").length;
  }
  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
};
var ENUM$1 = "enum";
var enumerable$1 = function enumerable(rule, value, source, errors, options) {
  rule[ENUM$1] = Array.isArray(rule[ENUM$1]) ? rule[ENUM$1] : [];
  if (rule[ENUM$1].indexOf(value) === -1) {
    errors.push(format(options.messages[ENUM$1], rule.fullField, rule[ENUM$1].join(", ")));
  }
};
var pattern$1 = function pattern(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      rule.pattern.lastIndex = 0;
      if (!rule.pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === "string") {
      var _pattern = new RegExp(rule.pattern);
      if (!_pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
};
var rules = {
  required: required$1,
  whitespace,
  type: type$1,
  range,
  "enum": enumerable$1,
  pattern: pattern$1
};
var string = function string2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, "string") && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, "string");
    if (!isEmptyValue(value, "string")) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
      rules.pattern(rule, value, source, errors, options);
      if (rule.whitespace === true) {
        rules.whitespace(rule, value, source, errors, options);
      }
    }
  }
  callback(errors);
};
var method2 = function method3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var number2 = function number3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (value === "") {
      value = void 0;
    }
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var _boolean = function _boolean2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var regexp2 = function regexp3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value)) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var integer2 = function integer3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var floatFn = function floatFn2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var array2 = function array3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((value === void 0 || value === null) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, "array");
    if (value !== void 0 && value !== null) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var object2 = function object3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var ENUM = "enum";
var enumerable2 = function enumerable3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rules[ENUM](rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var pattern2 = function pattern3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, "string") && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value, "string")) {
      rules.pattern(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var date2 = function date3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, "date") && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value, "date")) {
      var dateObject;
      if (value instanceof Date) {
        dateObject = value;
      } else {
        dateObject = new Date(value);
      }
      rules.type(rule, dateObject, source, errors, options);
      if (dateObject) {
        rules.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }
  callback(errors);
};
var required2 = function required3(rule, value, callback, source, options) {
  var errors = [];
  var type4 = Array.isArray(value) ? "array" : typeof value;
  rules.required(rule, value, source, errors, options, type4);
  callback(errors);
};
var type2 = function type3(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, ruleType);
    if (!isEmptyValue(value, ruleType)) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var any = function any2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
  }
  callback(errors);
};
var validators$2 = {
  string,
  method: method2,
  number: number2,
  "boolean": _boolean,
  regexp: regexp2,
  integer: integer2,
  "float": floatFn,
  array: array2,
  object: object2,
  "enum": enumerable2,
  pattern: pattern2,
  date: date2,
  url: type2,
  hex: type2,
  email: type2,
  required: required2,
  any
};
function newMessages() {
  return {
    "default": "Validation error on field %s",
    required: "%s is required",
    "enum": "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      "boolean": "%s is not a %s",
      integer: "%s is not an %s",
      "float": "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}
var messages = newMessages();
var Schema = /* @__PURE__ */ function() {
  function Schema2(descriptor) {
    this.rules = null;
    this._messages = messages;
    this.define(descriptor);
  }
  var _proto = Schema2.prototype;
  _proto.define = function define(rules2) {
    var _this = this;
    if (!rules2) {
      throw new Error("Cannot configure a schema with no rules");
    }
    if (typeof rules2 !== "object" || Array.isArray(rules2)) {
      throw new Error("Rules must be an object");
    }
    this.rules = {};
    Object.keys(rules2).forEach(function(name) {
      var item = rules2[name];
      _this.rules[name] = Array.isArray(item) ? item : [item];
    });
  };
  _proto.messages = function messages2(_messages) {
    if (_messages) {
      this._messages = deepMerge(newMessages(), _messages);
    }
    return this._messages;
  };
  _proto.validate = function validate(source_, o, oc) {
    var _this2 = this;
    if (o === void 0) {
      o = {};
    }
    if (oc === void 0) {
      oc = function oc2() {
      };
    }
    var source = source_;
    var options = o;
    var callback = oc;
    if (typeof options === "function") {
      callback = options;
      options = {};
    }
    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback(null, source);
      }
      return Promise.resolve(source);
    }
    function complete(results) {
      var errors = [];
      var fields = {};
      function add2(e) {
        if (Array.isArray(e)) {
          var _errors;
          errors = (_errors = errors).concat.apply(_errors, e);
        } else {
          errors.push(e);
        }
      }
      for (var i = 0; i < results.length; i++) {
        add2(results[i]);
      }
      if (!errors.length) {
        callback(null, source);
      } else {
        fields = convertFieldsError(errors);
        callback(errors, fields);
      }
    }
    if (options.messages) {
      var messages$1 = this.messages();
      if (messages$1 === messages) {
        messages$1 = newMessages();
      }
      deepMerge(messages$1, options.messages);
      options.messages = messages$1;
    } else {
      options.messages = this.messages();
    }
    var series = {};
    var keys2 = options.keys || Object.keys(this.rules);
    keys2.forEach(function(z) {
      var arr = _this2.rules[z];
      var value = source[z];
      arr.forEach(function(r) {
        var rule = r;
        if (typeof rule.transform === "function") {
          if (source === source_) {
            source = _extends({}, source);
          }
          value = source[z] = rule.transform(value);
        }
        if (typeof rule === "function") {
          rule = {
            validator: rule
          };
        } else {
          rule = _extends({}, rule);
        }
        rule.validator = _this2.getValidationMethod(rule);
        if (!rule.validator) {
          return;
        }
        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this2.getType(rule);
        series[z] = series[z] || [];
        series[z].push({
          rule,
          value,
          source,
          field: z
        });
      });
    });
    var errorFields = {};
    return asyncMap(series, options, function(data2, doIt) {
      var rule = data2.rule;
      var deep = (rule.type === "object" || rule.type === "array") && (typeof rule.fields === "object" || typeof rule.defaultField === "object");
      deep = deep && (rule.required || !rule.required && data2.value);
      rule.field = data2.field;
      function addFullField(key, schema) {
        return _extends({}, schema, {
          fullField: rule.fullField + "." + key,
          fullFields: rule.fullFields ? [].concat(rule.fullFields, [key]) : [key]
        });
      }
      function cb(e) {
        if (e === void 0) {
          e = [];
        }
        var errorList = Array.isArray(e) ? e : [e];
        if (!options.suppressWarning && errorList.length) {
          Schema2.warning("async-validator:", errorList);
        }
        if (errorList.length && rule.message !== void 0) {
          errorList = [].concat(rule.message);
        }
        var filledErrors = errorList.map(complementError(rule, source));
        if (options.first && filledErrors.length) {
          errorFields[rule.field] = 1;
          return doIt(filledErrors);
        }
        if (!deep) {
          doIt(filledErrors);
        } else {
          if (rule.required && !data2.value) {
            if (rule.message !== void 0) {
              filledErrors = [].concat(rule.message).map(complementError(rule, source));
            } else if (options.error) {
              filledErrors = [options.error(rule, format(options.messages.required, rule.field))];
            }
            return doIt(filledErrors);
          }
          var fieldsSchema = {};
          if (rule.defaultField) {
            Object.keys(data2.value).map(function(key) {
              fieldsSchema[key] = rule.defaultField;
            });
          }
          fieldsSchema = _extends({}, fieldsSchema, data2.rule.fields);
          var paredFieldsSchema = {};
          Object.keys(fieldsSchema).forEach(function(field) {
            var fieldSchema = fieldsSchema[field];
            var fieldSchemaList = Array.isArray(fieldSchema) ? fieldSchema : [fieldSchema];
            paredFieldsSchema[field] = fieldSchemaList.map(addFullField.bind(null, field));
          });
          var schema = new Schema2(paredFieldsSchema);
          schema.messages(options.messages);
          if (data2.rule.options) {
            data2.rule.options.messages = options.messages;
            data2.rule.options.error = options.error;
          }
          schema.validate(data2.value, data2.rule.options || options, function(errs) {
            var finalErrors = [];
            if (filledErrors && filledErrors.length) {
              finalErrors.push.apply(finalErrors, filledErrors);
            }
            if (errs && errs.length) {
              finalErrors.push.apply(finalErrors, errs);
            }
            doIt(finalErrors.length ? finalErrors : null);
          });
        }
      }
      var res;
      if (rule.asyncValidator) {
        res = rule.asyncValidator(rule, data2.value, cb, data2.source, options);
      } else if (rule.validator) {
        try {
          res = rule.validator(rule, data2.value, cb, data2.source, options);
        } catch (error) {
          console.error == null ? void 0 : console.error(error);
          if (!options.suppressValidatorError) {
            setTimeout(function() {
              throw error;
            }, 0);
          }
          cb(error.message);
        }
        if (res === true) {
          cb();
        } else if (res === false) {
          cb(typeof rule.message === "function" ? rule.message(rule.fullField || rule.field) : rule.message || (rule.fullField || rule.field) + " fails");
        } else if (res instanceof Array) {
          cb(res);
        } else if (res instanceof Error) {
          cb(res.message);
        }
      }
      if (res && res.then) {
        res.then(function() {
          return cb();
        }, function(e) {
          return cb(e);
        });
      }
    }, function(results) {
      complete(results);
    }, source);
  };
  _proto.getType = function getType2(rule) {
    if (rule.type === void 0 && rule.pattern instanceof RegExp) {
      rule.type = "pattern";
    }
    if (typeof rule.validator !== "function" && rule.type && !validators$2.hasOwnProperty(rule.type)) {
      throw new Error(format("Unknown rule type %s", rule.type));
    }
    return rule.type || "string";
  };
  _proto.getValidationMethod = function getValidationMethod(rule) {
    if (typeof rule.validator === "function") {
      return rule.validator;
    }
    var keys2 = Object.keys(rule);
    var messageIndex = keys2.indexOf("message");
    if (messageIndex !== -1) {
      keys2.splice(messageIndex, 1);
    }
    if (keys2.length === 1 && keys2[0] === "required") {
      return validators$2.required;
    }
    return validators$2[this.getType(rule)] || void 0;
  };
  return Schema2;
}();
Schema.register = function register(type4, validator2) {
  if (typeof validator2 !== "function") {
    throw new Error("Cannot register a validator by type, validator is not a function");
  }
  validators$2[type4] = validator2;
};
Schema.warning = warning;
Schema.messages = messages;
Schema.validators = validators$2;
var LabelWrap = defineComponent({
  name: "ElLabelWrap",
  props: {
    isAutoWidth: Boolean,
    updateAll: Boolean
  },
  setup(props, { slots }) {
    const el = ref(null);
    const elForm2 = inject(elFormKey);
    const elFormItem2 = inject(elFormItemKey);
    const computedWidth = ref(0);
    watch(computedWidth, (val, oldVal) => {
      if (props.updateAll) {
        elForm2.registerLabelWidth(val, oldVal);
        elFormItem2.updateComputedLabelWidth(val);
      }
    });
    const getLabelWidth = () => {
      var _a2;
      if ((_a2 = el.value) == null ? void 0 : _a2.firstElementChild) {
        const width = window.getComputedStyle(el.value.firstElementChild).width;
        return Math.ceil(parseFloat(width));
      } else {
        return 0;
      }
    };
    const updateLabelWidth = (action = "update") => {
      nextTick(() => {
        if (slots.default && props.isAutoWidth) {
          if (action === "update") {
            computedWidth.value = getLabelWidth();
          } else if (action === "remove") {
            elForm2.deregisterLabelWidth(computedWidth.value);
          }
        }
      });
    };
    const updateLabelWidthFn = () => updateLabelWidth("update");
    onMounted(() => {
      addResizeListener(el.value.firstElementChild, updateLabelWidthFn);
      updateLabelWidthFn();
    });
    onUpdated(updateLabelWidthFn);
    onBeforeUnmount(() => {
      var _a2;
      updateLabelWidth("remove");
      removeResizeListener((_a2 = el.value) == null ? void 0 : _a2.firstElementChild, updateLabelWidthFn);
    });
    function render2() {
      var _a2, _b2;
      if (!slots)
        return null;
      if (props.isAutoWidth) {
        const autoLabelWidth = elForm2.autoLabelWidth;
        const style = {};
        if (autoLabelWidth && autoLabelWidth !== "auto") {
          const marginWidth = Math.max(0, parseInt(autoLabelWidth, 10) - computedWidth.value);
          const marginPosition = elForm2.labelPosition === "left" ? "marginRight" : "marginLeft";
          if (marginWidth) {
            style[marginPosition] = `${marginWidth}px`;
          }
        }
        return h("div", {
          ref: el,
          class: ["el-form-item__label-wrap"],
          style
        }, (_a2 = slots.default) == null ? void 0 : _a2.call(slots));
      } else {
        return h(Fragment, { ref: el }, (_b2 = slots.default) == null ? void 0 : _b2.call(slots));
      }
    }
    return render2;
  }
});
const _sfc_main$o = defineComponent({
  name: "ElFormItem",
  componentName: "ElFormItem",
  components: {
    LabelWrap
  },
  props: {
    label: String,
    labelWidth: {
      type: [String, Number],
      default: ""
    },
    prop: String,
    required: {
      type: Boolean,
      default: void 0
    },
    rules: [Object, Array],
    error: String,
    validateStatus: String,
    for: String,
    inlineMessage: {
      type: [String, Boolean],
      default: ""
    },
    showMessage: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      validator: isValidComponentSize
    }
  },
  setup(props, { slots }) {
    const elForm2 = inject(elFormKey, {});
    const validateState = ref("");
    const validateMessage = ref("");
    const isValidationEnabled = ref(false);
    const computedLabelWidth = ref("");
    const formItemRef = ref();
    const vm = getCurrentInstance();
    const isNested = computed(() => {
      let parent = vm.parent;
      while (parent && parent.type.name !== "ElForm") {
        if (parent.type.name === "ElFormItem") {
          return true;
        }
        parent = parent.parent;
      }
      return false;
    });
    let initialValue = void 0;
    watch(() => props.error, (val) => {
      validateMessage.value = val;
      validateState.value = val ? "error" : "";
    }, {
      immediate: true
    });
    watch(() => props.validateStatus, (val) => {
      validateState.value = val;
    });
    const labelFor = computed(() => props.for || props.prop);
    const labelStyle = computed(() => {
      const ret = {};
      if (elForm2.labelPosition === "top")
        return ret;
      const labelWidth = addUnit(props.labelWidth || elForm2.labelWidth);
      if (labelWidth) {
        ret.width = labelWidth;
      }
      return ret;
    });
    const contentStyle = computed(() => {
      const ret = {};
      if (elForm2.labelPosition === "top" || elForm2.inline) {
        return ret;
      }
      if (!props.label && !props.labelWidth && isNested.value) {
        return ret;
      }
      const labelWidth = addUnit(props.labelWidth || elForm2.labelWidth);
      if (!props.label && !slots.label) {
        ret.marginLeft = labelWidth;
      }
      return ret;
    });
    const fieldValue = computed(() => {
      const model = elForm2.model;
      if (!model || !props.prop) {
        return;
      }
      let path = props.prop;
      if (path.indexOf(":") !== -1) {
        path = path.replace(/:/, ".");
      }
      return getPropByPath(model, path, true).v;
    });
    const isRequired = computed(() => {
      const rules2 = getRules();
      let required4 = false;
      if (rules2 && rules2.length) {
        rules2.every((rule) => {
          if (rule.required) {
            required4 = true;
            return false;
          }
          return true;
        });
      }
      return required4;
    });
    const sizeClass = useSize(void 0, { formItem: false });
    const validate = (trigger2, callback = NOOP) => {
      if (!isValidationEnabled.value) {
        callback();
        return;
      }
      const rules2 = getFilteredRule(trigger2);
      if ((!rules2 || rules2.length === 0) && props.required === void 0) {
        callback();
        return;
      }
      validateState.value = "validating";
      const descriptor = {};
      if (rules2 && rules2.length > 0) {
        rules2.forEach((rule) => {
          delete rule.trigger;
        });
      }
      descriptor[props.prop] = rules2;
      const validator2 = new Schema(descriptor);
      const model = {};
      model[props.prop] = fieldValue.value;
      validator2.validate(model, { firstFields: true }, (errors, fields) => {
        var _a2;
        validateState.value = !errors ? "success" : "error";
        validateMessage.value = errors ? errors[0].message || `${props.prop} is required` : "";
        callback(validateMessage.value, errors ? fields : {});
        (_a2 = elForm2.emit) == null ? void 0 : _a2.call(elForm2, "validate", props.prop, !errors, validateMessage.value || null);
      });
    };
    const clearValidate = () => {
      validateState.value = "";
      validateMessage.value = "";
    };
    const resetField = () => {
      const model = elForm2.model;
      const value = fieldValue.value;
      let path = props.prop;
      if (path.indexOf(":") !== -1) {
        path = path.replace(/:/, ".");
      }
      const prop = getPropByPath(model, path, true);
      if (Array.isArray(value)) {
        prop.o[prop.k] = [].concat(initialValue);
      } else {
        prop.o[prop.k] = initialValue;
      }
      nextTick(() => {
        clearValidate();
      });
    };
    const getRules = () => {
      const formRules = elForm2.rules;
      const selfRules = props.rules;
      const requiredRule = props.required !== void 0 ? { required: !!props.required } : [];
      const prop = getPropByPath(formRules, props.prop || "", false);
      const normalizedRule = formRules ? prop.o[props.prop || ""] || prop.v : [];
      return [].concat(selfRules || normalizedRule || []).concat(requiredRule);
    };
    const getFilteredRule = (trigger2) => {
      const rules2 = getRules();
      return rules2.filter((rule) => {
        if (!rule.trigger || trigger2 === "")
          return true;
        if (Array.isArray(rule.trigger)) {
          return rule.trigger.indexOf(trigger2) > -1;
        } else {
          return rule.trigger === trigger2;
        }
      }).map((rule) => ({ ...rule }));
    };
    const evaluateValidationEnabled = () => {
      var _a2;
      isValidationEnabled.value = !!((_a2 = getRules()) == null ? void 0 : _a2.length);
    };
    const updateComputedLabelWidth = (width) => {
      computedLabelWidth.value = width ? `${width}px` : "";
    };
    const elFormItem2 = reactive({
      ...toRefs(props),
      size: sizeClass,
      validateState,
      $el: formItemRef,
      evaluateValidationEnabled,
      resetField,
      clearValidate,
      validate,
      updateComputedLabelWidth
    });
    onMounted(() => {
      if (props.prop) {
        elForm2 == null ? void 0 : elForm2.addField(elFormItem2);
        const value = fieldValue.value;
        initialValue = Array.isArray(value) ? [...value] : value;
        evaluateValidationEnabled();
      }
    });
    onBeforeUnmount(() => {
      elForm2 == null ? void 0 : elForm2.removeField(elFormItem2);
    });
    provide(elFormItemKey, elFormItem2);
    const formItemClass = computed(() => [
      {
        "el-form-item--feedback": elForm2.statusIcon,
        "is-error": validateState.value === "error",
        "is-validating": validateState.value === "validating",
        "is-success": validateState.value === "success",
        "is-required": isRequired.value || props.required,
        "is-no-asterisk": elForm2.hideRequiredAsterisk
      },
      sizeClass.value ? `el-form-item--${sizeClass.value}` : ""
    ]);
    const shouldShowError = computed(() => {
      return validateState.value === "error" && props.showMessage && elForm2.showMessage;
    });
    const currentLabel = computed(() => (props.label || "") + (elForm2.labelSuffix || ""));
    return {
      formItemRef,
      formItemClass,
      shouldShowError,
      elForm: elForm2,
      labelStyle,
      contentStyle,
      validateMessage,
      labelFor,
      resetField,
      clearValidate,
      currentLabel
    };
  }
});
const _hoisted_1$l = ["for"];
function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_LabelWrap = resolveComponent("LabelWrap");
  return openBlock(), createElementBlock("div", {
    ref: "formItemRef",
    class: normalizeClass(["el-form-item", _ctx.formItemClass])
  }, [
    createVNode(_component_LabelWrap, {
      "is-auto-width": _ctx.labelStyle.width === "auto",
      "update-all": _ctx.elForm.labelWidth === "auto"
    }, {
      default: withCtx(() => [
        _ctx.label || _ctx.$slots.label ? (openBlock(), createElementBlock("label", {
          key: 0,
          for: _ctx.labelFor,
          class: "el-form-item__label",
          style: normalizeStyle(_ctx.labelStyle)
        }, [
          renderSlot(_ctx.$slots, "label", { label: _ctx.currentLabel }, () => [
            createTextVNode(toDisplayString(_ctx.currentLabel), 1)
          ])
        ], 12, _hoisted_1$l)) : createCommentVNode("v-if", true)
      ]),
      _: 3
    }, 8, ["is-auto-width", "update-all"]),
    createBaseVNode("div", {
      class: "el-form-item__content",
      style: normalizeStyle(_ctx.contentStyle)
    }, [
      renderSlot(_ctx.$slots, "default"),
      createVNode(Transition, { name: "el-zoom-in-top" }, {
        default: withCtx(() => [
          _ctx.shouldShowError ? renderSlot(_ctx.$slots, "error", {
            key: 0,
            error: _ctx.validateMessage
          }, () => [
            createBaseVNode("div", {
              class: normalizeClass(["el-form-item__error", {
                "el-form-item__error--inline": typeof _ctx.inlineMessage === "boolean" ? _ctx.inlineMessage : _ctx.elForm.inlineMessage || false
              }])
            }, toDisplayString(_ctx.validateMessage), 3)
          ]) : createCommentVNode("v-if", true)
        ]),
        _: 3
      })
    ], 4)
  ], 2);
}
var FormItem = /* @__PURE__ */ _export_sfc$2(_sfc_main$o, [["render", _sfc_render$i]]);
const ElForm = withInstall(Form, {
  FormItem
});
const ElFormItem = withNoopInstall(FormItem);
const imageViewerProps = buildProps({
  urlList: {
    type: definePropType(Array),
    default: () => mutable([])
  },
  zIndex: {
    type: Number,
    default: 2e3
  },
  initialIndex: {
    type: Number,
    default: 0
  },
  infinite: {
    type: Boolean,
    default: true
  },
  hideOnClickModal: {
    type: Boolean,
    default: false
  }
});
const imageViewerEmits = {
  close: () => true,
  switch: (index) => typeof index === "number"
};
const Mode = {
  CONTAIN: {
    name: "contain",
    icon: markRaw(fullScreen)
  },
  ORIGINAL: {
    name: "original",
    icon: markRaw(scaleToOriginal)
  }
};
const mousewheelEventName = isFirefox() ? "DOMMouseScroll" : "mousewheel";
const _sfc_main$n = defineComponent({
  name: "ElImageViewer",
  components: {
    ElIcon,
    Close: close$1,
    ArrowLeft: arrowLeft,
    ArrowRight: arrowRight,
    ZoomOut: zoomOut,
    ZoomIn: zoomIn,
    RefreshLeft: refreshLeft,
    RefreshRight: refreshRight
  },
  props: imageViewerProps,
  emits: imageViewerEmits,
  setup(props, { emit }) {
    const { t } = useLocale();
    const ns = useNamespace("image-viewer");
    const wrapper = ref();
    const imgRefs = ref([]);
    const scopeEventListener = effectScope();
    const loading2 = ref(true);
    const index = ref(props.initialIndex);
    const mode = ref(Mode.CONTAIN);
    const transform = ref({
      scale: 1,
      deg: 0,
      offsetX: 0,
      offsetY: 0,
      enableTransition: false
    });
    const isSingle = computed(() => {
      const { urlList } = props;
      return urlList.length <= 1;
    });
    const isFirst = computed(() => {
      return index.value === 0;
    });
    const isLast = computed(() => {
      return index.value === props.urlList.length - 1;
    });
    const currentImg = computed(() => {
      return props.urlList[index.value];
    });
    const imgStyle = computed(() => {
      const { scale, deg, offsetX, offsetY, enableTransition } = transform.value;
      let translateX = offsetX / scale;
      let translateY = offsetY / scale;
      switch (deg % 360) {
        case 90:
        case -270:
          [translateX, translateY] = [translateY, -translateX];
          break;
        case 180:
        case -180:
          [translateX, translateY] = [-translateX, -translateY];
          break;
        case 270:
        case -90:
          [translateX, translateY] = [-translateY, translateX];
          break;
      }
      const style = {
        transform: `scale(${scale}) rotate(${deg}deg) translate(${translateX}px, ${translateY}px)`,
        transition: enableTransition ? "transform .3s" : ""
      };
      if (mode.value.name === Mode.CONTAIN.name) {
        style.maxWidth = style.maxHeight = "100%";
      }
      return style;
    });
    function hide() {
      unregisterEventListener();
      emit("close");
    }
    function registerEventListener() {
      const keydownHandler = rafThrottle((e) => {
        switch (e.code) {
          case EVENT_CODE.esc:
            hide();
            break;
          case EVENT_CODE.space:
            toggleMode();
            break;
          case EVENT_CODE.left:
            prev();
            break;
          case EVENT_CODE.up:
            handleActions("zoomIn");
            break;
          case EVENT_CODE.right:
            next();
            break;
          case EVENT_CODE.down:
            handleActions("zoomOut");
            break;
        }
      });
      const mousewheelHandler = rafThrottle((e) => {
        const delta = e.wheelDelta ? e.wheelDelta : -e.detail;
        if (delta > 0) {
          handleActions("zoomIn", {
            zoomRate: 1.2,
            enableTransition: false
          });
        } else {
          handleActions("zoomOut", {
            zoomRate: 1.2,
            enableTransition: false
          });
        }
      });
      scopeEventListener.run(() => {
        useEventListener(document, "keydown", keydownHandler);
        useEventListener(document, mousewheelEventName, mousewheelHandler);
      });
    }
    function unregisterEventListener() {
      scopeEventListener.stop();
    }
    function handleImgLoad() {
      loading2.value = false;
    }
    function handleImgError(e) {
      loading2.value = false;
      e.target.alt = t("el.image.error");
    }
    function handleMouseDown(e) {
      if (loading2.value || e.button !== 0 || !wrapper.value)
        return;
      transform.value.enableTransition = false;
      const { offsetX, offsetY } = transform.value;
      const startX = e.pageX;
      const startY = e.pageY;
      const dragHandler = rafThrottle((ev) => {
        transform.value = {
          ...transform.value,
          offsetX: offsetX + ev.pageX - startX,
          offsetY: offsetY + ev.pageY - startY
        };
      });
      const removeMousemove = useEventListener(document, "mousemove", dragHandler);
      useEventListener(document, "mouseup", () => {
        removeMousemove();
      });
      e.preventDefault();
    }
    function reset2() {
      transform.value = {
        scale: 1,
        deg: 0,
        offsetX: 0,
        offsetY: 0,
        enableTransition: false
      };
    }
    function toggleMode() {
      if (loading2.value)
        return;
      const modeNames = Object.keys(Mode);
      const modeValues = Object.values(Mode);
      const currentMode = mode.value.name;
      const index2 = modeValues.findIndex((i) => i.name === currentMode);
      const nextIndex = (index2 + 1) % modeNames.length;
      mode.value = Mode[modeNames[nextIndex]];
      reset2();
    }
    function prev() {
      if (isFirst.value && !props.infinite)
        return;
      const len = props.urlList.length;
      index.value = (index.value - 1 + len) % len;
    }
    function next() {
      if (isLast.value && !props.infinite)
        return;
      const len = props.urlList.length;
      index.value = (index.value + 1) % len;
    }
    function handleActions(action, options = {}) {
      if (loading2.value)
        return;
      const { zoomRate, rotateDeg, enableTransition } = {
        zoomRate: 1.4,
        rotateDeg: 90,
        enableTransition: true,
        ...options
      };
      switch (action) {
        case "zoomOut":
          if (transform.value.scale > 0.2) {
            transform.value.scale = parseFloat((transform.value.scale / zoomRate).toFixed(3));
          }
          break;
        case "zoomIn":
          if (transform.value.scale < 7) {
            transform.value.scale = parseFloat((transform.value.scale * zoomRate).toFixed(3));
          }
          break;
        case "clockwise":
          transform.value.deg += rotateDeg;
          break;
        case "anticlockwise":
          transform.value.deg -= rotateDeg;
          break;
      }
      transform.value.enableTransition = enableTransition;
    }
    watch(currentImg, () => {
      nextTick(() => {
        const $img = imgRefs.value[0];
        if (!($img == null ? void 0 : $img.complete)) {
          loading2.value = true;
        }
      });
    });
    watch(index, (val) => {
      reset2();
      emit("switch", val);
    });
    onMounted(() => {
      var _a2, _b2;
      registerEventListener();
      (_b2 = (_a2 = wrapper.value) == null ? void 0 : _a2.focus) == null ? void 0 : _b2.call(_a2);
    });
    return {
      index,
      wrapper,
      imgRefs,
      isSingle,
      isFirst,
      isLast,
      currentImg,
      imgStyle,
      mode,
      handleActions,
      prev,
      next,
      hide,
      toggleMode,
      handleImgLoad,
      handleImgError,
      handleMouseDown,
      ns
    };
  }
});
const _hoisted_1$k = ["src"];
function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_close = resolveComponent("close");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_arrow_left = resolveComponent("arrow-left");
  const _component_arrow_right = resolveComponent("arrow-right");
  const _component_zoom_out = resolveComponent("zoom-out");
  const _component_zoom_in = resolveComponent("zoom-in");
  const _component_refresh_left = resolveComponent("refresh-left");
  const _component_refresh_right = resolveComponent("refresh-right");
  return openBlock(), createBlock(Transition, { name: "viewer-fade" }, {
    default: withCtx(() => [
      createBaseVNode("div", {
        ref: "wrapper",
        tabindex: -1,
        class: normalizeClass(_ctx.ns.e("wrapper")),
        style: normalizeStyle({ zIndex: _ctx.zIndex })
      }, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.ns.e("mask")),
          onClick: _cache[0] || (_cache[0] = withModifiers(($event) => _ctx.hideOnClickModal && _ctx.hide(), ["self"]))
        }, null, 2),
        createCommentVNode(" CLOSE "),
        createBaseVNode("span", {
          class: normalizeClass([_ctx.ns.e("btn"), _ctx.ns.e("close")]),
          onClick: _cache[1] || (_cache[1] = (...args) => _ctx.hide && _ctx.hide(...args))
        }, [
          createVNode(_component_el_icon, null, {
            default: withCtx(() => [
              createVNode(_component_close)
            ]),
            _: 1
          })
        ], 2),
        createCommentVNode(" ARROW "),
        !_ctx.isSingle ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createBaseVNode("span", {
            class: normalizeClass([
              _ctx.ns.e("btn"),
              _ctx.ns.e("prev"),
              _ctx.ns.is("disabled", !_ctx.infinite && _ctx.isFirst)
            ]),
            onClick: _cache[2] || (_cache[2] = (...args) => _ctx.prev && _ctx.prev(...args))
          }, [
            createVNode(_component_el_icon, null, {
              default: withCtx(() => [
                createVNode(_component_arrow_left)
              ]),
              _: 1
            })
          ], 2),
          createBaseVNode("span", {
            class: normalizeClass([
              _ctx.ns.e("btn"),
              _ctx.ns.e("next"),
              _ctx.ns.is("disabled", !_ctx.infinite && _ctx.isLast)
            ]),
            onClick: _cache[3] || (_cache[3] = (...args) => _ctx.next && _ctx.next(...args))
          }, [
            createVNode(_component_el_icon, null, {
              default: withCtx(() => [
                createVNode(_component_arrow_right)
              ]),
              _: 1
            })
          ], 2)
        ], 64)) : createCommentVNode("v-if", true),
        createCommentVNode(" ACTIONS "),
        createBaseVNode("div", {
          class: normalizeClass([_ctx.ns.e("btn"), _ctx.ns.e("actions")])
        }, [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.ns.e("actions__inner"))
          }, [
            createVNode(_component_el_icon, {
              onClick: _cache[4] || (_cache[4] = ($event) => _ctx.handleActions("zoomOut"))
            }, {
              default: withCtx(() => [
                createVNode(_component_zoom_out)
              ]),
              _: 1
            }),
            createVNode(_component_el_icon, {
              onClick: _cache[5] || (_cache[5] = ($event) => _ctx.handleActions("zoomIn"))
            }, {
              default: withCtx(() => [
                createVNode(_component_zoom_in)
              ]),
              _: 1
            }),
            createBaseVNode("i", {
              class: normalizeClass(_ctx.ns.e("actions__divider"))
            }, null, 2),
            createVNode(_component_el_icon, { onClick: _ctx.toggleMode }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(_ctx.mode.icon)))
              ]),
              _: 1
            }, 8, ["onClick"]),
            createBaseVNode("i", {
              class: normalizeClass(_ctx.ns.e("actions__divider"))
            }, null, 2),
            createVNode(_component_el_icon, {
              onClick: _cache[6] || (_cache[6] = ($event) => _ctx.handleActions("anticlockwise"))
            }, {
              default: withCtx(() => [
                createVNode(_component_refresh_left)
              ]),
              _: 1
            }),
            createVNode(_component_el_icon, {
              onClick: _cache[7] || (_cache[7] = ($event) => _ctx.handleActions("clockwise"))
            }, {
              default: withCtx(() => [
                createVNode(_component_refresh_right)
              ]),
              _: 1
            })
          ], 2)
        ], 2),
        createCommentVNode(" CANVAS "),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.ns.e("canvas"))
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.urlList, (url2, i) => {
            return withDirectives((openBlock(), createElementBlock("img", {
              ref_for: true,
              ref: (el) => _ctx.imgRefs[i] = el,
              key: url2,
              src: url2,
              style: normalizeStyle(_ctx.imgStyle),
              class: normalizeClass(_ctx.ns.e("img")),
              onLoad: _cache[8] || (_cache[8] = (...args) => _ctx.handleImgLoad && _ctx.handleImgLoad(...args)),
              onError: _cache[9] || (_cache[9] = (...args) => _ctx.handleImgError && _ctx.handleImgError(...args)),
              onMousedown: _cache[10] || (_cache[10] = (...args) => _ctx.handleMouseDown && _ctx.handleMouseDown(...args))
            }, null, 46, _hoisted_1$k)), [
              [vShow, i === _ctx.index]
            ]);
          }), 128))
        ], 2),
        renderSlot(_ctx.$slots, "default")
      ], 6)
    ]),
    _: 3
  });
}
var ImageViewer = /* @__PURE__ */ _export_sfc$2(_sfc_main$n, [["render", _sfc_render$h]]);
const ElImageViewer = withInstall(ImageViewer);
const imageProps = buildProps({
  appendToBody: {
    type: Boolean,
    default: false
  },
  hideOnClickModal: {
    type: Boolean,
    default: false
  },
  src: {
    type: String,
    default: ""
  },
  fit: {
    type: String,
    values: ["", "contain", "cover", "fill", "none", "scale-down"],
    default: ""
  },
  lazy: {
    type: Boolean,
    default: false
  },
  scrollContainer: {
    type: definePropType([String, Object])
  },
  previewSrcList: {
    type: definePropType(Array),
    default: () => mutable([])
  },
  zIndex: {
    type: Number,
    default: 2e3
  },
  initialIndex: {
    type: Number,
    default: 0
  }
});
const imageEmits = {
  error: (evt) => evt instanceof Event,
  switch: (val) => isNumber$1(val),
  close: () => true
};
const isHtmlElement = (e) => e && e.nodeType === Node.ELEMENT_NODE;
let prevOverflow = "";
const _sfc_main$m = defineComponent({
  name: "ElImage",
  components: {
    ImageViewer: ElImageViewer
  },
  inheritAttrs: false,
  props: imageProps,
  emits: imageEmits,
  setup(props, { emit, attrs: rawAttrs }) {
    const { t } = useLocale();
    const ns = useNamespace("image");
    const attrs = useAttrs();
    const hasLoadError = ref(false);
    const loading2 = ref(true);
    const imgWidth = ref(0);
    const imgHeight = ref(0);
    const showViewer = ref(false);
    const container = ref();
    const _scrollContainer = ref();
    let stopScrollListener;
    let stopWheelListener;
    const containerStyle = computed(() => rawAttrs.style);
    const imageStyle = computed(() => {
      const { fit } = props;
      if (isClient && fit) {
        return { objectFit: fit };
      }
      return {};
    });
    const preview = computed(() => {
      const { previewSrcList } = props;
      return Array.isArray(previewSrcList) && previewSrcList.length > 0;
    });
    const imageIndex = computed(() => {
      const { previewSrcList, initialIndex } = props;
      let previewIndex = initialIndex;
      if (initialIndex > previewSrcList.length - 1) {
        previewIndex = 0;
      }
      return previewIndex;
    });
    const loadImage = () => {
      if (!isClient)
        return;
      loading2.value = true;
      hasLoadError.value = false;
      const img = new Image();
      const currentImageSrc = props.src;
      img.addEventListener("load", (e) => {
        if (currentImageSrc !== props.src) {
          return;
        }
        handleLoad(e, img);
      });
      img.addEventListener("error", (e) => {
        if (currentImageSrc !== props.src) {
          return;
        }
        handleError2(e);
      });
      Object.entries(attrs.value).forEach(([key, value]) => {
        if (key.toLowerCase() === "onload")
          return;
        img.setAttribute(key, value);
      });
      img.src = currentImageSrc;
    };
    function handleLoad(e, img) {
      imgWidth.value = img.width;
      imgHeight.value = img.height;
      loading2.value = false;
      hasLoadError.value = false;
    }
    function handleError2(event) {
      loading2.value = false;
      hasLoadError.value = true;
      emit("error", event);
    }
    function handleLazyLoad() {
      if (isInContainer(container.value, _scrollContainer.value)) {
        loadImage();
        removeLazyLoadListener();
      }
    }
    const lazyLoadHandler = useThrottleFn(handleLazyLoad, 200);
    async function addLazyLoadListener() {
      var _a2;
      if (!isClient)
        return;
      await nextTick();
      const { scrollContainer } = props;
      if (isHtmlElement(scrollContainer)) {
        _scrollContainer.value = scrollContainer;
      } else if (isString$2(scrollContainer) && scrollContainer !== "") {
        _scrollContainer.value = (_a2 = document.querySelector(scrollContainer)) != null ? _a2 : void 0;
      } else if (container.value) {
        _scrollContainer.value = getScrollContainer(container.value);
      }
      if (_scrollContainer.value) {
        stopScrollListener = useEventListener(_scrollContainer, "scroll", lazyLoadHandler);
        setTimeout(() => handleLazyLoad(), 100);
      }
    }
    function removeLazyLoadListener() {
      if (!isClient || !_scrollContainer.value || !lazyLoadHandler)
        return;
      stopScrollListener();
      _scrollContainer.value = void 0;
    }
    function wheelHandler(e) {
      if (!e.ctrlKey)
        return;
      if (e.deltaY < 0) {
        e.preventDefault();
        return false;
      } else if (e.deltaY > 0) {
        e.preventDefault();
        return false;
      }
    }
    function clickHandler() {
      if (!preview.value)
        return;
      stopWheelListener = useEventListener("wheel", wheelHandler, {
        passive: false
      });
      prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      showViewer.value = true;
    }
    function closeViewer() {
      stopWheelListener == null ? void 0 : stopWheelListener();
      document.body.style.overflow = prevOverflow;
      showViewer.value = false;
      emit("close");
    }
    function switchViewer(val) {
      emit("switch", val);
    }
    watch(() => props.src, () => {
      if (props.lazy) {
        loading2.value = true;
        hasLoadError.value = false;
        removeLazyLoadListener();
        addLazyLoadListener();
      } else {
        loadImage();
      }
    });
    onMounted(() => {
      if (props.lazy) {
        addLazyLoadListener();
      } else {
        loadImage();
      }
    });
    return {
      attrs,
      loading: loading2,
      hasLoadError,
      showViewer,
      containerStyle,
      imageStyle,
      preview,
      imageIndex,
      container,
      ns,
      clickHandler,
      closeViewer,
      switchViewer,
      t
    };
  }
});
const _hoisted_1$j = ["src"];
const _hoisted_2$d = { key: 0 };
function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_image_viewer = resolveComponent("image-viewer");
  return openBlock(), createElementBlock("div", {
    ref: "container",
    class: normalizeClass([_ctx.ns.b(), _ctx.$attrs.class]),
    style: normalizeStyle(_ctx.containerStyle)
  }, [
    _ctx.loading ? renderSlot(_ctx.$slots, "placeholder", { key: 0 }, () => [
      createBaseVNode("div", {
        class: normalizeClass(_ctx.ns.e("placeholder"))
      }, null, 2)
    ]) : _ctx.hasLoadError ? renderSlot(_ctx.$slots, "error", { key: 1 }, () => [
      createBaseVNode("div", {
        class: normalizeClass(_ctx.ns.e("error"))
      }, toDisplayString(_ctx.t("el.image.error")), 3)
    ]) : (openBlock(), createElementBlock("img", mergeProps({ key: 2 }, _ctx.attrs, {
      src: _ctx.src,
      style: _ctx.imageStyle,
      class: [_ctx.ns.e("inner"), _ctx.preview ? _ctx.ns.e("preview") : ""],
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.clickHandler && _ctx.clickHandler(...args))
    }), null, 16, _hoisted_1$j)),
    (openBlock(), createBlock(Teleport, {
      to: "body",
      disabled: !_ctx.appendToBody
    }, [
      _ctx.preview ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        _ctx.showViewer ? (openBlock(), createBlock(_component_image_viewer, {
          key: 0,
          "z-index": _ctx.zIndex,
          "initial-index": _ctx.imageIndex,
          "url-list": _ctx.previewSrcList,
          "hide-on-click-modal": _ctx.hideOnClickModal,
          onClose: _ctx.closeViewer,
          onSwitch: _ctx.switchViewer
        }, {
          default: withCtx(() => [
            _ctx.$slots.viewer ? (openBlock(), createElementBlock("div", _hoisted_2$d, [
              renderSlot(_ctx.$slots, "viewer")
            ])) : createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 8, ["z-index", "initial-index", "url-list", "hide-on-click-modal", "onClose", "onSwitch"])) : createCommentVNode("v-if", true)
      ], 2112)) : createCommentVNode("v-if", true)
    ], 8, ["disabled"]))
  ], 6);
}
var Image$1 = /* @__PURE__ */ _export_sfc$2(_sfc_main$m, [["render", _sfc_render$g]]);
const ElImage = withInstall(Image$1);
const paginationPrevProps = {
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  prevText: {
    type: String,
    default: ""
  }
};
const _sfc_main$l = defineComponent({
  name: "ElPaginationPrev",
  components: {
    ElIcon,
    ArrowLeft: arrowLeft
  },
  props: paginationPrevProps,
  emits: ["click"],
  setup(props) {
    const internalDisabled = computed(() => props.disabled || props.currentPage <= 1);
    return {
      internalDisabled
    };
  }
});
const _hoisted_1$i = ["disabled", "aria-disabled"];
const _hoisted_2$c = { key: 0 };
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_arrow_left = resolveComponent("arrow-left");
  const _component_el_icon = resolveComponent("el-icon");
  return openBlock(), createElementBlock("button", {
    type: "button",
    class: "btn-prev",
    disabled: _ctx.internalDisabled,
    "aria-disabled": _ctx.internalDisabled,
    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
  }, [
    _ctx.prevText ? (openBlock(), createElementBlock("span", _hoisted_2$c, toDisplayString(_ctx.prevText), 1)) : (openBlock(), createBlock(_component_el_icon, { key: 1 }, {
      default: withCtx(() => [
        createVNode(_component_arrow_left)
      ]),
      _: 1
    }))
  ], 8, _hoisted_1$i);
}
var Prev = /* @__PURE__ */ _export_sfc$2(_sfc_main$l, [["render", _sfc_render$f]]);
const paginationNextProps = {
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  pageCount: {
    type: Number,
    default: 50
  },
  nextText: {
    type: String,
    default: ""
  }
};
const _sfc_main$k = defineComponent({
  name: "ElPaginationNext",
  components: {
    ElIcon,
    ArrowRight: arrowRight
  },
  props: paginationNextProps,
  emits: ["click"],
  setup(props) {
    const internalDisabled = computed(() => props.disabled || props.currentPage === props.pageCount || props.pageCount === 0);
    return {
      internalDisabled
    };
  }
});
const _hoisted_1$h = ["disabled", "aria-disabled"];
const _hoisted_2$b = { key: 0 };
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_arrow_right = resolveComponent("arrow-right");
  const _component_el_icon = resolveComponent("el-icon");
  return openBlock(), createElementBlock("button", {
    type: "button",
    class: "btn-next",
    disabled: _ctx.internalDisabled,
    "aria-disabled": _ctx.internalDisabled,
    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
  }, [
    _ctx.nextText ? (openBlock(), createElementBlock("span", _hoisted_2$b, toDisplayString(_ctx.nextText), 1)) : (openBlock(), createBlock(_component_el_icon, { key: 1 }, {
      default: withCtx(() => [
        createVNode(_component_arrow_right)
      ]),
      _: 1
    }))
  ], 8, _hoisted_1$h);
}
var Next = /* @__PURE__ */ _export_sfc$2(_sfc_main$k, [["render", _sfc_render$e]]);
const selectGroupKey = "ElSelectGroup";
const selectKey = "ElSelect";
function useOption(props, states) {
  const select = inject(selectKey);
  const selectGroup = inject(selectGroupKey, { disabled: false });
  const isObject2 = computed(() => {
    return Object.prototype.toString.call(props.value).toLowerCase() === "[object object]";
  });
  const itemSelected = computed(() => {
    if (!select.props.multiple) {
      return isEqual2(props.value, select.props.modelValue);
    } else {
      return contains(select.props.modelValue, props.value);
    }
  });
  const limitReached = computed(() => {
    if (select.props.multiple) {
      const modelValue = select.props.modelValue || [];
      return !itemSelected.value && modelValue.length >= select.props.multipleLimit && select.props.multipleLimit > 0;
    } else {
      return false;
    }
  });
  const currentLabel = computed(() => {
    return props.label || (isObject2.value ? "" : props.value);
  });
  const currentValue = computed(() => {
    return props.value || props.label || "";
  });
  const isDisabled = computed(() => {
    return props.disabled || states.groupDisabled || limitReached.value;
  });
  const instance2 = getCurrentInstance();
  const contains = (arr = [], target) => {
    if (!isObject2.value) {
      return arr && arr.indexOf(target) > -1;
    } else {
      const valueKey = select.props.valueKey;
      return arr && arr.some((item) => {
        return getValueByPath(item, valueKey) === getValueByPath(target, valueKey);
      });
    }
  };
  const isEqual2 = (a, b) => {
    if (!isObject2.value) {
      return a === b;
    } else {
      const { valueKey } = select.props;
      return getValueByPath(a, valueKey) === getValueByPath(b, valueKey);
    }
  };
  const hoverItem = () => {
    if (!props.disabled && !selectGroup.disabled) {
      select.hoverIndex = select.optionsArray.indexOf(instance2.proxy);
    }
  };
  watch(() => currentLabel.value, () => {
    if (!props.created && !select.props.remote)
      select.setSelected();
  });
  watch(() => props.value, (val, oldVal) => {
    const { remote, valueKey } = select.props;
    if (!props.created && !remote) {
      if (valueKey && typeof val === "object" && typeof oldVal === "object" && val[valueKey] === oldVal[valueKey]) {
        return;
      }
      select.setSelected();
    }
  });
  watch(() => selectGroup.disabled, () => {
    states.groupDisabled = selectGroup.disabled;
  }, { immediate: true });
  const { queryChange } = toRaw(select);
  watch(queryChange, (changes) => {
    const { query } = unref(changes);
    const regexp4 = new RegExp(escapeRegexpString(query), "i");
    states.visible = regexp4.test(currentLabel.value) || props.created;
    if (!states.visible) {
      select.filteredOptionsCount--;
    }
  });
  return {
    select,
    currentLabel,
    currentValue,
    itemSelected,
    isDisabled,
    hoverItem
  };
}
const _sfc_main$j = defineComponent({
  name: "ElOption",
  componentName: "ElOption",
  props: {
    value: {
      required: true,
      type: [String, Number, Boolean, Object]
    },
    label: [String, Number],
    created: Boolean,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const states = reactive({
      index: -1,
      groupDisabled: false,
      visible: true,
      hitState: false,
      hover: false
    });
    const { currentLabel, itemSelected, isDisabled, select, hoverItem } = useOption(props, states);
    const { visible, hover } = toRefs(states);
    const vm = getCurrentInstance().proxy;
    const key = vm.value;
    select.onOptionCreate(vm);
    onBeforeUnmount(() => {
      const { selected } = select;
      const selectedOptions = select.props.multiple ? selected : [selected];
      const doesExist = select.cachedOptions.has(key);
      const doesSelected = selectedOptions.some((item) => {
        return item.value === vm.value;
      });
      if (doesExist && !doesSelected) {
        select.cachedOptions.delete(key);
      }
      select.onOptionDestroy(key);
    });
    function selectOptionClick() {
      if (props.disabled !== true && states.groupDisabled !== true) {
        select.handleOptionSelect(vm, true);
      }
    }
    return {
      currentLabel,
      itemSelected,
      isDisabled,
      select,
      hoverItem,
      visible,
      hover,
      selectOptionClick,
      states
    };
  }
});
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("li", {
    class: normalizeClass(["el-select-dropdown__item", {
      selected: _ctx.itemSelected,
      "is-disabled": _ctx.isDisabled,
      hover: _ctx.hover
    }]),
    onMouseenter: _cache[0] || (_cache[0] = (...args) => _ctx.hoverItem && _ctx.hoverItem(...args)),
    onClick: _cache[1] || (_cache[1] = withModifiers((...args) => _ctx.selectOptionClick && _ctx.selectOptionClick(...args), ["stop"]))
  }, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      createBaseVNode("span", null, toDisplayString(_ctx.currentLabel), 1)
    ])
  ], 34)), [
    [vShow, _ctx.visible]
  ]);
}
var Option = /* @__PURE__ */ _export_sfc$2(_sfc_main$j, [["render", _sfc_render$d]]);
const _sfc_main$i = defineComponent({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const select = inject(selectKey);
    const popperClass = computed(() => select.props.popperClass);
    const isMultiple = computed(() => select.props.multiple);
    const isFitInputWidth = computed(() => select.props.fitInputWidth);
    const minWidth = ref("");
    function updateMinWidth() {
      var _a2;
      minWidth.value = `${(_a2 = select.selectWrapper) == null ? void 0 : _a2.getBoundingClientRect().width}px`;
    }
    onMounted(() => {
      updateMinWidth();
      addResizeListener(select.selectWrapper, updateMinWidth);
    });
    onBeforeUnmount(() => {
      removeResizeListener(select.selectWrapper, updateMinWidth);
    });
    return {
      minWidth,
      popperClass,
      isMultiple,
      isFitInputWidth
    };
  }
});
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["el-select-dropdown", [{ "is-multiple": _ctx.isMultiple }, _ctx.popperClass]]),
    style: normalizeStyle({ [_ctx.isFitInputWidth ? "width" : "minWidth"]: _ctx.minWidth })
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 6);
}
var ElSelectMenu = /* @__PURE__ */ _export_sfc$2(_sfc_main$i, [["render", _sfc_render$c]]);
function useSelectStates(props) {
  const { t } = useLocale();
  return reactive({
    options: /* @__PURE__ */ new Map(),
    cachedOptions: /* @__PURE__ */ new Map(),
    createdLabel: null,
    createdSelected: false,
    selected: props.multiple ? [] : {},
    inputLength: 20,
    inputWidth: 0,
    initialInputHeight: 0,
    optionsCount: 0,
    filteredOptionsCount: 0,
    visible: false,
    softFocus: false,
    selectedLabel: "",
    hoverIndex: -1,
    query: "",
    previousQuery: null,
    inputHovering: false,
    cachedPlaceHolder: "",
    currentPlaceholder: t("el.select.placeholder"),
    menuVisibleOnFocus: false,
    isOnComposition: false,
    isSilentBlur: false,
    prefixWidth: 0,
    tagInMultiLine: false
  });
}
const useSelect = (props, states, ctx) => {
  const { t } = useLocale();
  const reference = ref(null);
  const input = ref(null);
  const tooltipRef = ref(null);
  const tags = ref(null);
  const selectWrapper = ref(null);
  const scrollbar = ref(null);
  const hoverOption = ref(-1);
  const queryChange = shallowRef({ query: "" });
  const groupQueryChange = shallowRef("");
  const elForm2 = inject(elFormKey, {});
  const elFormItem2 = inject(elFormItemKey, {});
  const readonly2 = computed(() => !props.filterable || props.multiple || !states.visible);
  const selectDisabled = computed(() => props.disabled || elForm2.disabled);
  const showClose = computed(() => {
    const hasValue = props.multiple ? Array.isArray(props.modelValue) && props.modelValue.length > 0 : props.modelValue !== void 0 && props.modelValue !== null && props.modelValue !== "";
    const criteria = props.clearable && !selectDisabled.value && states.inputHovering && hasValue;
    return criteria;
  });
  const iconComponent = computed(() => props.remote && props.filterable ? "" : props.suffixIcon);
  const iconReverse = computed(() => iconComponent.value && states.visible ? "is-reverse" : "");
  const debounce$1 = computed(() => props.remote ? 300 : 0);
  const emptyText = computed(() => {
    if (props.loading) {
      return props.loadingText || t("el.select.loading");
    } else {
      if (props.remote && states.query === "" && states.options.size === 0)
        return false;
      if (props.filterable && states.query && states.options.size > 0 && states.filteredOptionsCount === 0) {
        return props.noMatchText || t("el.select.noMatch");
      }
      if (states.options.size === 0) {
        return props.noDataText || t("el.select.noData");
      }
    }
    return null;
  });
  const optionsArray = computed(() => Array.from(states.options.values()));
  const cachedOptionsArray = computed(() => Array.from(states.cachedOptions.values()));
  const showNewOption = computed(() => {
    const hasExistingOption = optionsArray.value.filter((option) => {
      return !option.created;
    }).some((option) => {
      return option.currentLabel === states.query;
    });
    return props.filterable && props.allowCreate && states.query !== "" && !hasExistingOption;
  });
  const selectSize = useSize();
  const collapseTagSize = computed(() => ["small"].indexOf(selectSize.value) > -1 ? "small" : "default");
  const dropMenuVisible = computed({
    get() {
      return states.visible && emptyText.value !== false;
    },
    set(val) {
      states.visible = val;
    }
  });
  watch(() => selectDisabled.value, () => {
    nextTick(() => {
      resetInputHeight();
    });
  });
  watch(() => props.placeholder, (val) => {
    states.cachedPlaceHolder = states.currentPlaceholder = val;
  });
  watch(() => props.modelValue, (val, oldVal) => {
    var _a2;
    if (props.multiple) {
      resetInputHeight();
      if (val && val.length > 0 || input.value && states.query !== "") {
        states.currentPlaceholder = "";
      } else {
        states.currentPlaceholder = states.cachedPlaceHolder;
      }
      if (props.filterable && !props.reserveKeyword) {
        states.query = "";
        handleQueryChange(states.query);
      }
    }
    setSelected();
    if (props.filterable && !props.multiple) {
      states.inputLength = 20;
    }
    if (!isEqual_1(val, oldVal)) {
      (_a2 = elFormItem2.validate) == null ? void 0 : _a2.call(elFormItem2, "change");
    }
  }, {
    flush: "post",
    deep: true
  });
  watch(() => states.visible, (val) => {
    var _a2, _b2, _c;
    if (!val) {
      input.value && input.value.blur();
      states.query = "";
      states.previousQuery = null;
      states.selectedLabel = "";
      states.inputLength = 20;
      states.menuVisibleOnFocus = false;
      resetHoverIndex();
      nextTick(() => {
        if (input.value && input.value.value === "" && states.selected.length === 0) {
          states.currentPlaceholder = states.cachedPlaceHolder;
        }
      });
      if (!props.multiple) {
        if (states.selected) {
          if (props.filterable && props.allowCreate && states.createdSelected && states.createdLabel) {
            states.selectedLabel = states.createdLabel;
          } else {
            states.selectedLabel = states.selected.currentLabel;
          }
          if (props.filterable)
            states.query = states.selectedLabel;
        }
        if (props.filterable) {
          states.currentPlaceholder = states.cachedPlaceHolder;
        }
      }
    } else {
      (_b2 = (_a2 = tooltipRef.value) == null ? void 0 : _a2.updatePopper) == null ? void 0 : _b2.call(_a2);
      if (props.filterable) {
        states.filteredOptionsCount = states.optionsCount;
        states.query = props.remote ? "" : states.selectedLabel;
        if (props.multiple) {
          (_c = input.value) == null ? void 0 : _c.focus();
        } else {
          if (states.selectedLabel) {
            states.currentPlaceholder = states.selectedLabel;
            states.selectedLabel = "";
          }
        }
        handleQueryChange(states.query);
        if (!props.multiple && !props.remote) {
          queryChange.value.query = "";
          triggerRef(queryChange);
          triggerRef(groupQueryChange);
        }
      }
    }
    ctx.emit("visible-change", val);
  });
  watch(() => states.options.entries(), () => {
    var _a2, _b2, _c;
    if (!isClient)
      return;
    (_b2 = (_a2 = tooltipRef.value) == null ? void 0 : _a2.updatePopper) == null ? void 0 : _b2.call(_a2);
    if (props.multiple) {
      resetInputHeight();
    }
    const inputs = ((_c = selectWrapper.value) == null ? void 0 : _c.querySelectorAll("input")) || [];
    if (Array.from(inputs).indexOf(document.activeElement) === -1) {
      setSelected();
    }
    if (props.defaultFirstOption && (props.filterable || props.remote) && states.filteredOptionsCount) {
      checkDefaultFirstOption();
    }
  }, {
    flush: "post"
  });
  watch(() => states.hoverIndex, (val) => {
    if (typeof val === "number" && val > -1) {
      hoverOption.value = optionsArray.value[val] || {};
    }
    optionsArray.value.forEach((option) => {
      option.hover = hoverOption.value === option;
    });
  });
  const resetInputHeight = () => {
    if (props.collapseTags && !props.filterable)
      return;
    nextTick(() => {
      var _a2, _b2;
      if (!reference.value)
        return;
      const inputChildNodes = reference.value.$el.childNodes;
      const input2 = Array.from(inputChildNodes).filter((item) => item.tagName === "INPUT")[0];
      const _tags = tags.value;
      const sizeInMap = states.initialInputHeight || 40;
      input2.style.height = states.selected.length === 0 ? `${sizeInMap}px` : `${Math.max(_tags ? _tags.clientHeight + (_tags.clientHeight > sizeInMap ? 6 : 0) : 0, sizeInMap)}px`;
      states.tagInMultiLine = parseFloat(input2.style.height) > sizeInMap;
      if (states.visible && emptyText.value !== false) {
        (_b2 = (_a2 = tooltipRef.value) == null ? void 0 : _a2.updatePopper) == null ? void 0 : _b2.call(_a2);
      }
    });
  };
  const handleQueryChange = (val) => {
    if (states.previousQuery === val || states.isOnComposition)
      return;
    if (states.previousQuery === null && (typeof props.filterMethod === "function" || typeof props.remoteMethod === "function")) {
      states.previousQuery = val;
      return;
    }
    states.previousQuery = val;
    nextTick(() => {
      var _a2, _b2;
      if (states.visible)
        (_b2 = (_a2 = tooltipRef.value) == null ? void 0 : _a2.updatePopper) == null ? void 0 : _b2.call(_a2);
    });
    states.hoverIndex = -1;
    if (props.multiple && props.filterable) {
      nextTick(() => {
        const length = input.value.value.length * 15 + 20;
        states.inputLength = props.collapseTags ? Math.min(50, length) : length;
        managePlaceholder();
        resetInputHeight();
      });
    }
    if (props.remote && typeof props.remoteMethod === "function") {
      states.hoverIndex = -1;
      props.remoteMethod(val);
    } else if (typeof props.filterMethod === "function") {
      props.filterMethod(val);
      triggerRef(groupQueryChange);
    } else {
      states.filteredOptionsCount = states.optionsCount;
      queryChange.value.query = val;
      triggerRef(queryChange);
      triggerRef(groupQueryChange);
    }
    if (props.defaultFirstOption && (props.filterable || props.remote) && states.filteredOptionsCount) {
      checkDefaultFirstOption();
    }
  };
  const managePlaceholder = () => {
    if (states.currentPlaceholder !== "") {
      states.currentPlaceholder = input.value.value ? "" : states.cachedPlaceHolder;
    }
  };
  const checkDefaultFirstOption = () => {
    const optionsInDropdown = optionsArray.value.filter((n) => n.visible && !n.disabled && !n.states.groupDisabled);
    const userCreatedOption = optionsInDropdown.filter((n) => n.created)[0];
    const firstOriginOption = optionsInDropdown[0];
    states.hoverIndex = getValueIndex(optionsArray.value, userCreatedOption || firstOriginOption);
  };
  const setSelected = () => {
    var _a2;
    if (!props.multiple) {
      const option = getOption(props.modelValue);
      if ((_a2 = option.props) == null ? void 0 : _a2.created) {
        states.createdLabel = option.props.value;
        states.createdSelected = true;
      } else {
        states.createdSelected = false;
      }
      states.selectedLabel = option.currentLabel;
      states.selected = option;
      if (props.filterable)
        states.query = states.selectedLabel;
      return;
    }
    const result = [];
    if (Array.isArray(props.modelValue)) {
      props.modelValue.forEach((value) => {
        result.push(getOption(value));
      });
    }
    states.selected = result;
    nextTick(() => {
      resetInputHeight();
    });
  };
  const getOption = (value) => {
    let option;
    const isObjectValue = toRawType(value).toLowerCase() === "object";
    const isNull = toRawType(value).toLowerCase() === "null";
    const isUndefined2 = toRawType(value).toLowerCase() === "undefined";
    for (let i = states.cachedOptions.size - 1; i >= 0; i--) {
      const cachedOption = cachedOptionsArray.value[i];
      const isEqualValue = isObjectValue ? getValueByPath(cachedOption.value, props.valueKey) === getValueByPath(value, props.valueKey) : cachedOption.value === value;
      if (isEqualValue) {
        option = {
          value,
          currentLabel: cachedOption.currentLabel,
          isDisabled: cachedOption.isDisabled
        };
        break;
      }
    }
    if (option)
      return option;
    const label = !isObjectValue && !isNull && !isUndefined2 ? value : "";
    const newOption = {
      value,
      currentLabel: label
    };
    if (props.multiple) {
      newOption.hitState = false;
    }
    return newOption;
  };
  const resetHoverIndex = () => {
    setTimeout(() => {
      const valueKey = props.valueKey;
      if (!props.multiple) {
        states.hoverIndex = optionsArray.value.findIndex((item) => {
          return getValueKey(item) === getValueKey(states.selected);
        });
      } else {
        if (states.selected.length > 0) {
          states.hoverIndex = Math.min.apply(null, states.selected.map((selected) => {
            return optionsArray.value.findIndex((item) => {
              return getValueByPath(item, valueKey) === getValueByPath(selected, valueKey);
            });
          }));
        } else {
          states.hoverIndex = -1;
        }
      }
    }, 300);
  };
  const handleResize = () => {
    var _a2, _b2;
    resetInputWidth();
    (_b2 = (_a2 = tooltipRef.value) == null ? void 0 : _a2.updatePopper) == null ? void 0 : _b2.call(_a2);
    if (props.multiple)
      resetInputHeight();
  };
  const resetInputWidth = () => {
    var _a2;
    states.inputWidth = (_a2 = reference.value) == null ? void 0 : _a2.$el.getBoundingClientRect().width;
  };
  const onInputChange = () => {
    if (props.filterable && states.query !== states.selectedLabel) {
      states.query = states.selectedLabel;
      handleQueryChange(states.query);
    }
  };
  const debouncedOnInputChange = debounce_1(() => {
    onInputChange();
  }, debounce$1.value);
  const debouncedQueryChange = debounce_1((e) => {
    handleQueryChange(e.target.value);
  }, debounce$1.value);
  const emitChange = (val) => {
    if (!isEqual_1(props.modelValue, val)) {
      ctx.emit(CHANGE_EVENT, val);
    }
  };
  const deletePrevTag = (e) => {
    if (e.target.value.length <= 0 && !toggleLastOptionHitState()) {
      const value = props.modelValue.slice();
      value.pop();
      ctx.emit(UPDATE_MODEL_EVENT, value);
      emitChange(value);
    }
    if (e.target.value.length === 1 && props.modelValue.length === 0) {
      states.currentPlaceholder = states.cachedPlaceHolder;
    }
  };
  const deleteTag = (event, tag) => {
    const index = states.selected.indexOf(tag);
    if (index > -1 && !selectDisabled.value) {
      const value = props.modelValue.slice();
      value.splice(index, 1);
      ctx.emit(UPDATE_MODEL_EVENT, value);
      emitChange(value);
      ctx.emit("remove-tag", tag.value);
    }
    event.stopPropagation();
  };
  const deleteSelected = (event) => {
    event.stopPropagation();
    const value = props.multiple ? [] : "";
    if (typeof value !== "string") {
      for (const item of states.selected) {
        if (item.isDisabled)
          value.push(item.value);
      }
    }
    ctx.emit(UPDATE_MODEL_EVENT, value);
    emitChange(value);
    states.visible = false;
    ctx.emit("clear");
  };
  const handleOptionSelect = (option, byClick) => {
    var _a2;
    if (props.multiple) {
      const value = (props.modelValue || []).slice();
      const optionIndex = getValueIndex(value, option.value);
      if (optionIndex > -1) {
        value.splice(optionIndex, 1);
      } else if (props.multipleLimit <= 0 || value.length < props.multipleLimit) {
        value.push(option.value);
      }
      ctx.emit(UPDATE_MODEL_EVENT, value);
      emitChange(value);
      if (option.created) {
        states.query = "";
        handleQueryChange("");
        states.inputLength = 20;
      }
      if (props.filterable)
        (_a2 = input.value) == null ? void 0 : _a2.focus();
    } else {
      ctx.emit(UPDATE_MODEL_EVENT, option.value);
      emitChange(option.value);
      states.visible = false;
    }
    states.isSilentBlur = byClick;
    setSoftFocus();
    if (states.visible)
      return;
    nextTick(() => {
      scrollToOption(option);
    });
  };
  const getValueIndex = (arr = [], value) => {
    if (!isObject$6(value))
      return arr.indexOf(value);
    const valueKey = props.valueKey;
    let index = -1;
    arr.some((item, i) => {
      if (getValueByPath(item, valueKey) === getValueByPath(value, valueKey)) {
        index = i;
        return true;
      }
      return false;
    });
    return index;
  };
  const setSoftFocus = () => {
    states.softFocus = true;
    const _input = input.value || reference.value;
    if (_input) {
      _input == null ? void 0 : _input.focus();
    }
  };
  const scrollToOption = (option) => {
    var _a2, _b2, _c, _d, _e;
    const targetOption = Array.isArray(option) ? option[0] : option;
    let target = null;
    if (targetOption == null ? void 0 : targetOption.value) {
      const options = optionsArray.value.filter((item) => item.value === targetOption.value);
      if (options.length > 0) {
        target = options[0].$el;
      }
    }
    if (tooltipRef.value && target) {
      const menu = (_d = (_c = (_b2 = (_a2 = tooltipRef.value) == null ? void 0 : _a2.popperRef) == null ? void 0 : _b2.contentRef) == null ? void 0 : _c.querySelector) == null ? void 0 : _d.call(_c, ".el-select-dropdown__wrap");
      if (menu) {
        scrollIntoView(menu, target);
      }
    }
    (_e = scrollbar.value) == null ? void 0 : _e.handleScroll();
  };
  const onOptionCreate = (vm) => {
    states.optionsCount++;
    states.filteredOptionsCount++;
    states.options.set(vm.value, vm);
    states.cachedOptions.set(vm.value, vm);
  };
  const onOptionDestroy = (key) => {
    states.optionsCount--;
    states.filteredOptionsCount--;
    states.options.delete(key);
  };
  const resetInputState = (e) => {
    if (e.code !== EVENT_CODE.backspace)
      toggleLastOptionHitState(false);
    states.inputLength = input.value.value.length * 15 + 20;
    resetInputHeight();
  };
  const toggleLastOptionHitState = (hit) => {
    if (!Array.isArray(states.selected))
      return;
    const option = states.selected[states.selected.length - 1];
    if (!option)
      return;
    if (hit === true || hit === false) {
      option.hitState = hit;
      return hit;
    }
    option.hitState = !option.hitState;
    return option.hitState;
  };
  const handleComposition = (event) => {
    const text = event.target.value;
    if (event.type === "compositionend") {
      states.isOnComposition = false;
      nextTick(() => handleQueryChange(text));
    } else {
      const lastCharacter = text[text.length - 1] || "";
      states.isOnComposition = !isKorean(lastCharacter);
    }
  };
  const handleMenuEnter = () => {
    nextTick(() => scrollToOption(states.selected));
  };
  const handleFocus = (event) => {
    if (!states.softFocus) {
      if (props.automaticDropdown || props.filterable) {
        states.visible = true;
        if (props.filterable) {
          states.menuVisibleOnFocus = true;
        }
      }
      ctx.emit("focus", event);
    } else {
      states.softFocus = false;
    }
  };
  const blur = () => {
    var _a2;
    states.visible = false;
    (_a2 = reference.value) == null ? void 0 : _a2.blur();
  };
  const handleBlur = (event) => {
    nextTick(() => {
      if (states.isSilentBlur) {
        states.isSilentBlur = false;
      } else {
        ctx.emit("blur", event);
      }
    });
    states.softFocus = false;
  };
  const handleClearClick = (event) => {
    deleteSelected(event);
  };
  const handleClose = () => {
    states.visible = false;
  };
  const toggleMenu = () => {
    var _a2;
    if (props.automaticDropdown)
      return;
    if (!selectDisabled.value) {
      if (states.menuVisibleOnFocus) {
        states.menuVisibleOnFocus = false;
      } else {
        states.visible = !states.visible;
      }
      if (states.visible) {
        (_a2 = input.value || reference.value) == null ? void 0 : _a2.focus();
      }
    }
  };
  const selectOption = () => {
    if (!states.visible) {
      toggleMenu();
    } else {
      if (optionsArray.value[states.hoverIndex]) {
        handleOptionSelect(optionsArray.value[states.hoverIndex], void 0);
      }
    }
  };
  const getValueKey = (item) => {
    return isObject$6(item.value) ? getValueByPath(item.value, props.valueKey) : item.value;
  };
  const optionsAllDisabled = computed(() => optionsArray.value.filter((option) => option.visible).every((option) => option.disabled));
  const navigateOptions = (direction) => {
    if (!states.visible) {
      states.visible = true;
      return;
    }
    if (states.options.size === 0 || states.filteredOptionsCount === 0)
      return;
    if (states.isOnComposition)
      return;
    if (!optionsAllDisabled.value) {
      if (direction === "next") {
        states.hoverIndex++;
        if (states.hoverIndex === states.options.size) {
          states.hoverIndex = 0;
        }
      } else if (direction === "prev") {
        states.hoverIndex--;
        if (states.hoverIndex < 0) {
          states.hoverIndex = states.options.size - 1;
        }
      }
      const option = optionsArray.value[states.hoverIndex];
      if (option.disabled === true || option.states.groupDisabled === true || !option.visible) {
        navigateOptions(direction);
      }
      nextTick(() => scrollToOption(hoverOption.value));
    }
  };
  return {
    optionsArray,
    selectSize,
    handleResize,
    debouncedOnInputChange,
    debouncedQueryChange,
    deletePrevTag,
    deleteTag,
    deleteSelected,
    handleOptionSelect,
    scrollToOption,
    readonly: readonly2,
    resetInputHeight,
    showClose,
    iconComponent,
    iconReverse,
    showNewOption,
    collapseTagSize,
    setSelected,
    managePlaceholder,
    selectDisabled,
    emptyText,
    toggleLastOptionHitState,
    resetInputState,
    handleComposition,
    onOptionCreate,
    onOptionDestroy,
    handleMenuEnter,
    handleFocus,
    blur,
    handleBlur,
    handleClearClick,
    handleClose,
    toggleMenu,
    selectOption,
    getValueKey,
    navigateOptions,
    dropMenuVisible,
    queryChange,
    groupQueryChange,
    reference,
    input,
    tooltipRef,
    tags,
    selectWrapper,
    scrollbar
  };
};
const _sfc_main$h = defineComponent({
  name: "ElSelect",
  componentName: "ElSelect",
  components: {
    ElInput,
    ElSelectMenu,
    ElOption: Option,
    ElTag,
    ElScrollbar,
    ElTooltip,
    ElIcon
  },
  directives: { ClickOutside },
  props: {
    name: String,
    id: String,
    modelValue: {
      type: [Array, String, Number, Boolean, Object],
      default: void 0
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    automaticDropdown: Boolean,
    size: {
      type: String,
      validator: isValidComponentSize
    },
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    allowCreate: Boolean,
    loading: Boolean,
    popperClass: {
      type: String,
      default: ""
    },
    remote: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    remoteMethod: Function,
    filterMethod: Function,
    multiple: Boolean,
    multipleLimit: {
      type: Number,
      default: 0
    },
    placeholder: {
      type: String
    },
    defaultFirstOption: Boolean,
    reserveKeyword: {
      type: Boolean,
      default: true
    },
    valueKey: {
      type: String,
      default: "value"
    },
    collapseTags: Boolean,
    popperAppendToBody: {
      type: Boolean,
      default: true
    },
    clearIcon: {
      type: [String, Object],
      default: circleClose
    },
    fitInputWidth: {
      type: Boolean,
      default: false
    },
    suffixIcon: {
      type: [String, Object],
      default: arrowUp
    },
    tagType: {
      type: String,
      default: "info"
    }
  },
  emits: [
    UPDATE_MODEL_EVENT,
    CHANGE_EVENT,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(props, ctx) {
    const { t } = useLocale();
    const states = useSelectStates(props);
    const {
      optionsArray,
      selectSize,
      readonly: readonly2,
      handleResize,
      collapseTagSize,
      debouncedOnInputChange,
      debouncedQueryChange,
      deletePrevTag,
      deleteTag,
      deleteSelected,
      handleOptionSelect,
      scrollToOption,
      setSelected,
      resetInputHeight,
      managePlaceholder,
      showClose,
      selectDisabled,
      iconComponent,
      iconReverse,
      showNewOption,
      emptyText,
      toggleLastOptionHitState,
      resetInputState,
      handleComposition,
      onOptionCreate,
      onOptionDestroy,
      handleMenuEnter,
      handleFocus,
      blur,
      handleBlur,
      handleClearClick,
      handleClose,
      toggleMenu,
      selectOption,
      getValueKey,
      navigateOptions,
      dropMenuVisible,
      reference,
      input,
      tooltipRef,
      tags,
      selectWrapper,
      scrollbar,
      queryChange,
      groupQueryChange
    } = useSelect(props, states, ctx);
    const { focus } = useFocus(reference);
    const {
      inputWidth,
      selected,
      inputLength,
      filteredOptionsCount,
      visible,
      softFocus,
      selectedLabel,
      hoverIndex,
      query,
      inputHovering,
      currentPlaceholder,
      menuVisibleOnFocus,
      isOnComposition,
      isSilentBlur,
      options,
      cachedOptions,
      optionsCount,
      prefixWidth,
      tagInMultiLine
    } = toRefs(states);
    const wrapperKls = computed(() => {
      const classList = ["el-select"];
      const _selectSize = unref(selectSize);
      if (_selectSize) {
        classList.push(`el-select--${_selectSize}`);
      }
      if (props.disabled) {
        classList.push(`el-select--disabled`);
      }
      return classList;
    });
    const selectTagsStyle = computed(() => ({
      maxWidth: `${unref(inputWidth) - 32}px`,
      width: "100%"
    }));
    provide(selectKey, reactive({
      props,
      options,
      optionsArray,
      cachedOptions,
      optionsCount,
      filteredOptionsCount,
      hoverIndex,
      handleOptionSelect,
      onOptionCreate,
      onOptionDestroy,
      selectWrapper,
      selected,
      setSelected,
      queryChange,
      groupQueryChange
    }));
    onMounted(() => {
      states.cachedPlaceHolder = currentPlaceholder.value = props.placeholder || t("el.select.placeholder");
      if (props.multiple && Array.isArray(props.modelValue) && props.modelValue.length > 0) {
        currentPlaceholder.value = "";
      }
      addResizeListener(selectWrapper.value, handleResize);
      if (reference.value && reference.value.$el) {
        const sizeMap = {
          large: 36,
          default: 32,
          small: 28
        };
        const input2 = reference.value.input;
        states.initialInputHeight = input2.getBoundingClientRect().height || sizeMap[selectSize.value];
      }
      if (props.remote && props.multiple) {
        resetInputHeight();
      }
      nextTick(() => {
        if (!reference.value)
          return;
        if (reference.value.$el) {
          inputWidth.value = reference.value.$el.getBoundingClientRect().width;
        }
        if (ctx.slots.prefix) {
          const inputChildNodes = reference.value.$el.childNodes;
          const input2 = Array.from(inputChildNodes).filter((item) => item.tagName === "INPUT")[0];
          const prefix = reference.value.$el.querySelector(".el-input__prefix");
          prefixWidth.value = Math.max(prefix.getBoundingClientRect().width + 5, 30);
          if (states.prefixWidth) {
            input2.style.paddingLeft = `${Math.max(states.prefixWidth, 30)}px`;
          }
        }
      });
      setSelected();
    });
    onBeforeUnmount(() => {
      removeResizeListener(selectWrapper.value, handleResize);
    });
    if (props.multiple && !Array.isArray(props.modelValue)) {
      ctx.emit(UPDATE_MODEL_EVENT, []);
    }
    if (!props.multiple && Array.isArray(props.modelValue)) {
      ctx.emit(UPDATE_MODEL_EVENT, "");
    }
    const popperPaneRef = computed(() => {
      var _a2, _b2;
      return (_b2 = (_a2 = tooltipRef.value) == null ? void 0 : _a2.popperRef) == null ? void 0 : _b2.contentRef;
    });
    return {
      tagInMultiLine,
      prefixWidth,
      selectSize,
      readonly: readonly2,
      handleResize,
      collapseTagSize,
      debouncedOnInputChange,
      debouncedQueryChange,
      deletePrevTag,
      deleteTag,
      deleteSelected,
      handleOptionSelect,
      scrollToOption,
      inputWidth,
      selected,
      inputLength,
      filteredOptionsCount,
      visible,
      softFocus,
      selectedLabel,
      hoverIndex,
      query,
      inputHovering,
      currentPlaceholder,
      menuVisibleOnFocus,
      isOnComposition,
      isSilentBlur,
      options,
      resetInputHeight,
      managePlaceholder,
      showClose,
      selectDisabled,
      iconComponent,
      iconReverse,
      showNewOption,
      emptyText,
      toggleLastOptionHitState,
      resetInputState,
      handleComposition,
      handleMenuEnter,
      handleFocus,
      blur,
      handleBlur,
      handleClearClick,
      handleClose,
      toggleMenu,
      selectOption,
      getValueKey,
      navigateOptions,
      dropMenuVisible,
      focus,
      reference,
      input,
      tooltipRef,
      popperPaneRef,
      tags,
      selectWrapper,
      scrollbar,
      wrapperKls,
      selectTagsStyle
    };
  }
});
const _hoisted_1$g = { class: "select-trigger" };
const _hoisted_2$a = { key: 0 };
const _hoisted_3$9 = { class: "el-select__tags-text" };
const _hoisted_4$5 = ["disabled", "autocomplete"];
const _hoisted_5$4 = { style: { "height": "100%", "display": "flex", "justify-content": "center", "align-items": "center" } };
const _hoisted_6$3 = {
  key: 1,
  class: "el-select-dropdown__empty"
};
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tag = resolveComponent("el-tag");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_input = resolveComponent("el-input");
  const _component_el_option = resolveComponent("el-option");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_el_select_menu = resolveComponent("el-select-menu");
  const _component_el_tooltip = resolveComponent("el-tooltip");
  const _directive_click_outside = resolveDirective("click-outside");
  return withDirectives((openBlock(), createElementBlock("div", {
    ref: "selectWrapper",
    class: normalizeClass(_ctx.wrapperKls),
    onClick: _cache[24] || (_cache[24] = withModifiers((...args) => _ctx.toggleMenu && _ctx.toggleMenu(...args), ["stop"]))
  }, [
    createVNode(_component_el_tooltip, {
      ref: "tooltipRef",
      visible: _ctx.dropMenuVisible,
      "onUpdate:visible": _cache[23] || (_cache[23] = ($event) => _ctx.dropMenuVisible = $event),
      placement: "bottom-start",
      "append-to-body": _ctx.popperAppendToBody,
      "popper-class": `el-select__popper ${_ctx.popperClass}`,
      "fallback-placements": ["bottom-start", "top-start", "right", "left"],
      effect: "light",
      pure: "",
      trigger: "click",
      transition: "el-zoom-in-top",
      "stop-popper-mouse-event": false,
      "gpu-acceleration": false,
      persistent: "",
      onShow: _ctx.handleMenuEnter
    }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_1$g, [
          _ctx.multiple ? (openBlock(), createElementBlock("div", {
            key: 0,
            ref: "tags",
            class: "el-select__tags",
            style: normalizeStyle(_ctx.selectTagsStyle)
          }, [
            _ctx.collapseTags && _ctx.selected.length ? (openBlock(), createElementBlock("span", _hoisted_2$a, [
              createVNode(_component_el_tag, {
                closable: !_ctx.selectDisabled && !_ctx.selected[0].isDisabled,
                size: _ctx.collapseTagSize,
                hit: _ctx.selected[0].hitState,
                type: _ctx.tagType,
                "disable-transitions": "",
                onClose: _cache[0] || (_cache[0] = ($event) => _ctx.deleteTag($event, _ctx.selected[0]))
              }, {
                default: withCtx(() => [
                  createBaseVNode("span", {
                    class: "el-select__tags-text",
                    style: normalizeStyle({ maxWidth: _ctx.inputWidth - 123 + "px" })
                  }, toDisplayString(_ctx.selected[0].currentLabel), 5)
                ]),
                _: 1
              }, 8, ["closable", "size", "hit", "type"]),
              _ctx.selected.length > 1 ? (openBlock(), createBlock(_component_el_tag, {
                key: 0,
                closable: false,
                size: _ctx.collapseTagSize,
                type: _ctx.tagType,
                "disable-transitions": ""
              }, {
                default: withCtx(() => [
                  createBaseVNode("span", _hoisted_3$9, "+ " + toDisplayString(_ctx.selected.length - 1), 1)
                ]),
                _: 1
              }, 8, ["size", "type"])) : createCommentVNode("v-if", true)
            ])) : createCommentVNode("v-if", true),
            createCommentVNode(" <div> "),
            !_ctx.collapseTags ? (openBlock(), createBlock(Transition, {
              key: 1,
              onAfterLeave: _ctx.resetInputHeight
            }, {
              default: withCtx(() => [
                createBaseVNode("span", {
                  style: normalizeStyle({
                    marginLeft: _ctx.prefixWidth && _ctx.selected.length ? `${_ctx.prefixWidth}px` : null
                  })
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.selected, (item) => {
                    return openBlock(), createBlock(_component_el_tag, {
                      key: _ctx.getValueKey(item),
                      closable: !_ctx.selectDisabled && !item.isDisabled,
                      size: _ctx.collapseTagSize,
                      hit: item.hitState,
                      type: _ctx.tagType,
                      "disable-transitions": "",
                      onClose: ($event) => _ctx.deleteTag($event, item)
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("span", {
                          class: "el-select__tags-text",
                          style: normalizeStyle({ maxWidth: _ctx.inputWidth - 75 + "px" })
                        }, toDisplayString(item.currentLabel), 5)
                      ]),
                      _: 2
                    }, 1032, ["closable", "size", "hit", "type", "onClose"]);
                  }), 128))
                ], 4)
              ]),
              _: 1
            }, 8, ["onAfterLeave"])) : createCommentVNode("v-if", true),
            createCommentVNode(" </div> "),
            _ctx.filterable ? withDirectives((openBlock(), createElementBlock("input", {
              key: 2,
              ref: "input",
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.query = $event),
              type: "text",
              class: normalizeClass(["el-select__input", [_ctx.selectSize ? `is-${_ctx.selectSize}` : ""]]),
              disabled: _ctx.selectDisabled,
              autocomplete: _ctx.autocomplete,
              style: normalizeStyle({
                marginLeft: _ctx.prefixWidth && !_ctx.selected.length || _ctx.tagInMultiLine ? `${_ctx.prefixWidth}px` : null,
                flexGrow: "1",
                width: `${_ctx.inputLength / (_ctx.inputWidth - 32)}%`,
                maxWidth: `${_ctx.inputWidth - 42}px`
              }),
              onFocus: _cache[2] || (_cache[2] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
              onBlur: _cache[3] || (_cache[3] = (...args) => _ctx.handleBlur && _ctx.handleBlur(...args)),
              onKeyup: _cache[4] || (_cache[4] = (...args) => _ctx.managePlaceholder && _ctx.managePlaceholder(...args)),
              onKeydown: [
                _cache[5] || (_cache[5] = (...args) => _ctx.resetInputState && _ctx.resetInputState(...args)),
                _cache[6] || (_cache[6] = withKeys(withModifiers(($event) => _ctx.navigateOptions("next"), ["prevent"]), ["down"])),
                _cache[7] || (_cache[7] = withKeys(withModifiers(($event) => _ctx.navigateOptions("prev"), ["prevent"]), ["up"])),
                _cache[8] || (_cache[8] = withKeys(withModifiers(($event) => _ctx.visible = false, ["stop", "prevent"]), ["esc"])),
                _cache[9] || (_cache[9] = withKeys(withModifiers((...args) => _ctx.selectOption && _ctx.selectOption(...args), ["stop", "prevent"]), ["enter"])),
                _cache[10] || (_cache[10] = withKeys((...args) => _ctx.deletePrevTag && _ctx.deletePrevTag(...args), ["delete"])),
                _cache[11] || (_cache[11] = withKeys(($event) => _ctx.visible = false, ["tab"]))
              ],
              onCompositionstart: _cache[12] || (_cache[12] = (...args) => _ctx.handleComposition && _ctx.handleComposition(...args)),
              onCompositionupdate: _cache[13] || (_cache[13] = (...args) => _ctx.handleComposition && _ctx.handleComposition(...args)),
              onCompositionend: _cache[14] || (_cache[14] = (...args) => _ctx.handleComposition && _ctx.handleComposition(...args)),
              onInput: _cache[15] || (_cache[15] = (...args) => _ctx.debouncedQueryChange && _ctx.debouncedQueryChange(...args))
            }, null, 46, _hoisted_4$5)), [
              [vModelText, _ctx.query]
            ]) : createCommentVNode("v-if", true)
          ], 4)) : createCommentVNode("v-if", true),
          createVNode(_component_el_input, {
            id: _ctx.id,
            ref: "reference",
            modelValue: _ctx.selectedLabel,
            "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => _ctx.selectedLabel = $event),
            type: "text",
            placeholder: _ctx.currentPlaceholder,
            name: _ctx.name,
            autocomplete: _ctx.autocomplete,
            size: _ctx.selectSize,
            disabled: _ctx.selectDisabled,
            readonly: _ctx.readonly,
            "validate-event": false,
            class: normalizeClass({ "is-focus": _ctx.visible }),
            tabindex: _ctx.multiple && _ctx.filterable ? -1 : void 0,
            onFocus: _ctx.handleFocus,
            onBlur: _ctx.handleBlur,
            onInput: _ctx.debouncedOnInputChange,
            onPaste: _ctx.debouncedOnInputChange,
            onCompositionstart: _ctx.handleComposition,
            onCompositionupdate: _ctx.handleComposition,
            onCompositionend: _ctx.handleComposition,
            onKeydown: [
              _cache[17] || (_cache[17] = withKeys(withModifiers(($event) => _ctx.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
              _cache[18] || (_cache[18] = withKeys(withModifiers(($event) => _ctx.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
              withKeys(withModifiers(_ctx.selectOption, ["stop", "prevent"]), ["enter"]),
              _cache[19] || (_cache[19] = withKeys(withModifiers(($event) => _ctx.visible = false, ["stop", "prevent"]), ["esc"])),
              _cache[20] || (_cache[20] = withKeys(($event) => _ctx.visible = false, ["tab"]))
            ],
            onMouseenter: _cache[21] || (_cache[21] = ($event) => _ctx.inputHovering = true),
            onMouseleave: _cache[22] || (_cache[22] = ($event) => _ctx.inputHovering = false)
          }, createSlots({
            suffix: withCtx(() => [
              _ctx.iconComponent ? withDirectives((openBlock(), createBlock(_component_el_icon, {
                key: 0,
                class: normalizeClass(["el-select__caret", "el-input__icon", _ctx.iconReverse])
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])), [
                [vShow, !_ctx.showClose]
              ]) : createCommentVNode("v-if", true),
              _ctx.showClose && _ctx.clearIcon ? (openBlock(), createBlock(_component_el_icon, {
                key: 1,
                class: "el-select__caret el-input__icon",
                onClick: _ctx.handleClearClick
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.clearIcon)))
                ]),
                _: 1
              }, 8, ["onClick"])) : createCommentVNode("v-if", true)
            ]),
            _: 2
          }, [
            _ctx.$slots.prefix ? {
              name: "prefix",
              fn: withCtx(() => [
                createBaseVNode("div", _hoisted_5$4, [
                  renderSlot(_ctx.$slots, "prefix")
                ])
              ])
            } : void 0
          ]), 1032, ["id", "modelValue", "placeholder", "name", "autocomplete", "size", "disabled", "readonly", "class", "tabindex", "onFocus", "onBlur", "onInput", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onKeydown"])
        ])
      ]),
      content: withCtx(() => [
        createVNode(_component_el_select_menu, null, {
          default: withCtx(() => [
            withDirectives(createVNode(_component_el_scrollbar, {
              ref: "scrollbar",
              tag: "ul",
              "wrap-class": "el-select-dropdown__wrap",
              "view-class": "el-select-dropdown__list",
              class: normalizeClass({
                "is-empty": !_ctx.allowCreate && _ctx.query && _ctx.filteredOptionsCount === 0
              })
            }, {
              default: withCtx(() => [
                _ctx.showNewOption ? (openBlock(), createBlock(_component_el_option, {
                  key: 0,
                  value: _ctx.query,
                  created: true
                }, null, 8, ["value"])) : createCommentVNode("v-if", true),
                renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]), [
              [vShow, _ctx.options.size > 0 && !_ctx.loading]
            ]),
            _ctx.emptyText && (!_ctx.allowCreate || _ctx.loading || _ctx.allowCreate && _ctx.options.size === 0) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              _ctx.$slots.empty ? renderSlot(_ctx.$slots, "empty", { key: 0 }) : (openBlock(), createElementBlock("p", _hoisted_6$3, toDisplayString(_ctx.emptyText), 1))
            ], 2112)) : createCommentVNode("v-if", true)
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["visible", "append-to-body", "popper-class", "onShow"])
  ], 2)), [
    [_directive_click_outside, _ctx.handleClose, _ctx.popperPaneRef]
  ]);
}
var Select = /* @__PURE__ */ _export_sfc$2(_sfc_main$h, [["render", _sfc_render$b]]);
const _sfc_main$g = defineComponent({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const visible = ref(true);
    const instance2 = getCurrentInstance();
    const children = ref([]);
    provide(selectGroupKey, reactive({
      ...toRefs(props)
    }));
    const select = inject(selectKey);
    onMounted(() => {
      children.value = flattedChildren(instance2.subTree);
    });
    const flattedChildren = (node) => {
      const children2 = [];
      if (Array.isArray(node.children)) {
        node.children.forEach((child) => {
          var _a2;
          if (child.type && child.type.name === "ElOption" && child.component && child.component.proxy) {
            children2.push(child.component.proxy);
          } else if ((_a2 = child.children) == null ? void 0 : _a2.length) {
            children2.push(...flattedChildren(child));
          }
        });
      }
      return children2;
    };
    const { groupQueryChange } = toRaw(select);
    watch(groupQueryChange, () => {
      visible.value = children.value.some((option) => option.visible === true);
    });
    return {
      visible
    };
  }
});
const _hoisted_1$f = { class: "el-select-group__wrap" };
const _hoisted_2$9 = { class: "el-select-group__title" };
const _hoisted_3$8 = { class: "el-select-group" };
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("ul", _hoisted_1$f, [
    createBaseVNode("li", _hoisted_2$9, toDisplayString(_ctx.label), 1),
    createBaseVNode("li", null, [
      createBaseVNode("ul", _hoisted_3$8, [
        renderSlot(_ctx.$slots, "default")
      ])
    ])
  ], 512)), [
    [vShow, _ctx.visible]
  ]);
}
var OptionGroup = /* @__PURE__ */ _export_sfc$2(_sfc_main$g, [["render", _sfc_render$a]]);
const ElSelect = withInstall(Select, {
  Option,
  OptionGroup
});
const ElOption = withNoopInstall(Option);
withNoopInstall(OptionGroup);
const usePagination = () => inject(elPaginationKey, {});
const paginationSizesProps = buildProps({
  pageSize: {
    type: Number,
    required: true
  },
  pageSizes: {
    type: definePropType(Array),
    default: () => mutable([10, 20, 30, 40, 50, 100])
  },
  popperClass: {
    type: String,
    default: ""
  },
  disabled: Boolean,
  size: {
    type: String,
    default: "default"
  }
});
const _sfc_main$f = defineComponent({
  name: "ElPaginationSizes",
  components: {
    ElSelect,
    ElOption
  },
  props: paginationSizesProps,
  emits: ["page-size-change"],
  setup(props, { emit }) {
    const { t } = useLocale();
    const pagination = usePagination();
    const innerPageSize = ref(props.pageSize);
    watch(() => props.pageSizes, (newVal, oldVal) => {
      if (isEqual_1(newVal, oldVal))
        return;
      if (Array.isArray(newVal)) {
        const pageSize = newVal.indexOf(props.pageSize) > -1 ? props.pageSize : props.pageSizes[0];
        emit("page-size-change", pageSize);
      }
    });
    watch(() => props.pageSize, (newVal) => {
      innerPageSize.value = newVal;
    });
    const innerPagesizes = computed(() => props.pageSizes);
    function handleChange(val) {
      var _a2;
      if (val !== innerPageSize.value) {
        innerPageSize.value = val;
        (_a2 = pagination.handleSizeChange) == null ? void 0 : _a2.call(pagination, Number(val));
      }
    }
    return {
      innerPagesizes,
      innerPageSize,
      t,
      handleChange
    };
  }
});
const _hoisted_1$e = { class: "el-pagination__sizes" };
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_option = resolveComponent("el-option");
  const _component_el_select = resolveComponent("el-select");
  return openBlock(), createElementBlock("span", _hoisted_1$e, [
    createVNode(_component_el_select, {
      "model-value": _ctx.innerPageSize,
      disabled: _ctx.disabled,
      "popper-class": _ctx.popperClass,
      size: _ctx.size,
      onChange: _ctx.handleChange
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.innerPagesizes, (item) => {
          return openBlock(), createBlock(_component_el_option, {
            key: item,
            value: item,
            label: item + _ctx.t("el.pagination.pagesize")
          }, null, 8, ["value", "label"]);
        }), 128))
      ]),
      _: 1
    }, 8, ["model-value", "disabled", "popper-class", "size", "onChange"])
  ]);
}
var Sizes = /* @__PURE__ */ _export_sfc$2(_sfc_main$f, [["render", _sfc_render$9]]);
const _sfc_main$e = defineComponent({
  name: "ElPaginationJumper",
  components: {
    ElInput
  },
  setup() {
    const { t } = useLocale();
    const { pageCount, disabled, currentPage, changeEvent } = usePagination();
    const userInput = ref();
    const innerValue = computed(() => {
      var _a2;
      return (_a2 = userInput.value) != null ? _a2 : currentPage == null ? void 0 : currentPage.value;
    });
    function handleInput(val) {
      userInput.value = +val;
    }
    function handleChange(val) {
      val = Math.trunc(+val);
      changeEvent == null ? void 0 : changeEvent(+val);
      userInput.value = void 0;
    }
    return {
      pageCount,
      disabled,
      innerValue,
      t,
      handleInput,
      handleChange
    };
  }
});
const _hoisted_1$d = ["disabled"];
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_input = resolveComponent("el-input");
  return openBlock(), createElementBlock("span", {
    class: "el-pagination__jump",
    disabled: _ctx.disabled
  }, [
    createTextVNode(toDisplayString(_ctx.t("el.pagination.goto")) + " ", 1),
    createVNode(_component_el_input, {
      size: "small",
      class: "el-pagination__editor is-in-pagination",
      min: 1,
      max: _ctx.pageCount,
      disabled: _ctx.disabled,
      "model-value": _ctx.innerValue,
      type: "number",
      "onUpdate:modelValue": _ctx.handleInput,
      onChange: _ctx.handleChange
    }, null, 8, ["max", "disabled", "model-value", "onUpdate:modelValue", "onChange"]),
    createTextVNode(" " + toDisplayString(_ctx.t("el.pagination.pageClassifier")), 1)
  ], 8, _hoisted_1$d);
}
var Jumper = /* @__PURE__ */ _export_sfc$2(_sfc_main$e, [["render", _sfc_render$8]]);
const paginationTotalProps = {
  total: {
    type: Number,
    default: 1e3
  }
};
const _sfc_main$d = defineComponent({
  name: "ElPaginationTotal",
  props: paginationTotalProps,
  setup() {
    const { t } = useLocale();
    const { disabled } = usePagination();
    return {
      t,
      disabled
    };
  }
});
const _hoisted_1$c = ["disabled"];
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", {
    class: "el-pagination__total",
    disabled: _ctx.disabled
  }, toDisplayString(_ctx.t("el.pagination.total", {
    total: _ctx.total
  })), 9, _hoisted_1$c);
}
var Total = /* @__PURE__ */ _export_sfc$2(_sfc_main$d, [["render", _sfc_render$7]]);
const paginationPagerProps = {
  currentPage: {
    type: Number,
    default: 1
  },
  pageCount: {
    type: Number,
    required: true
  },
  pagerCount: {
    type: Number,
    default: 7
  },
  disabled: Boolean
};
const _sfc_main$c = defineComponent({
  name: "ElPaginationPager",
  components: {
    DArrowLeft: dArrowLeft,
    DArrowRight: dArrowRight,
    MoreFilled: moreFilled
  },
  props: paginationPagerProps,
  emits: ["change"],
  setup(props, { emit }) {
    const showPrevMore = ref(false);
    const showNextMore = ref(false);
    const quickPrevHover = ref(false);
    const quickNextHover = ref(false);
    const pagers = computed(() => {
      const pagerCount = props.pagerCount;
      const halfPagerCount = (pagerCount - 1) / 2;
      const currentPage = Number(props.currentPage);
      const pageCount = Number(props.pageCount);
      let showPrevMore2 = false;
      let showNextMore2 = false;
      if (pageCount > pagerCount) {
        if (currentPage > pagerCount - halfPagerCount) {
          showPrevMore2 = true;
        }
        if (currentPage < pageCount - halfPagerCount) {
          showNextMore2 = true;
        }
      }
      const array4 = [];
      if (showPrevMore2 && !showNextMore2) {
        const startPage = pageCount - (pagerCount - 2);
        for (let i = startPage; i < pageCount; i++) {
          array4.push(i);
        }
      } else if (!showPrevMore2 && showNextMore2) {
        for (let i = 2; i < pagerCount; i++) {
          array4.push(i);
        }
      } else if (showPrevMore2 && showNextMore2) {
        const offset = Math.floor(pagerCount / 2) - 1;
        for (let i = currentPage - offset; i <= currentPage + offset; i++) {
          array4.push(i);
        }
      } else {
        for (let i = 2; i < pageCount; i++) {
          array4.push(i);
        }
      }
      return array4;
    });
    watchEffect(() => {
      const halfPagerCount = (props.pagerCount - 1) / 2;
      showPrevMore.value = false;
      showNextMore.value = false;
      if (props.pageCount > props.pagerCount) {
        if (props.currentPage > props.pagerCount - halfPagerCount) {
          showPrevMore.value = true;
        }
        if (props.currentPage < props.pageCount - halfPagerCount) {
          showNextMore.value = true;
        }
      }
    });
    function onMouseenter(direction) {
      if (props.disabled)
        return;
      if (direction === "left") {
        quickPrevHover.value = true;
      } else {
        quickNextHover.value = true;
      }
    }
    function onEnter(e) {
      const target = e.target;
      if (target.tagName.toLowerCase() === "li" && Array.from(target.classList).includes("number")) {
        const newPage = Number(target.textContent);
        if (newPage !== props.currentPage) {
          emit("change", newPage);
        }
      }
    }
    function onPagerClick(event) {
      const target = event.target;
      if (target.tagName.toLowerCase() === "ul" || props.disabled) {
        return;
      }
      let newPage = Number(target.textContent);
      const pageCount = props.pageCount;
      const currentPage = props.currentPage;
      const pagerCountOffset = props.pagerCount - 2;
      if (target.className.includes("more")) {
        if (target.className.includes("quickprev")) {
          newPage = currentPage - pagerCountOffset;
        } else if (target.className.includes("quicknext")) {
          newPage = currentPage + pagerCountOffset;
        }
      }
      if (!isNaN(newPage)) {
        if (newPage < 1) {
          newPage = 1;
        }
        if (newPage > pageCount) {
          newPage = pageCount;
        }
      }
      if (newPage !== currentPage) {
        emit("change", newPage);
      }
    }
    return {
      showPrevMore,
      showNextMore,
      quickPrevHover,
      quickNextHover,
      pagers,
      onMouseenter,
      onPagerClick,
      onEnter
    };
  }
});
const _hoisted_1$b = ["aria-current"];
const _hoisted_2$8 = ["aria-current"];
const _hoisted_3$7 = ["aria-current"];
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_d_arrow_left = resolveComponent("d-arrow-left");
  const _component_more_filled = resolveComponent("more-filled");
  const _component_d_arrow_right = resolveComponent("d-arrow-right");
  return openBlock(), createElementBlock("ul", {
    class: "el-pager",
    onClick: _cache[4] || (_cache[4] = (...args) => _ctx.onPagerClick && _ctx.onPagerClick(...args)),
    onKeyup: _cache[5] || (_cache[5] = withKeys((...args) => _ctx.onEnter && _ctx.onEnter(...args), ["enter"]))
  }, [
    _ctx.pageCount > 0 ? (openBlock(), createElementBlock("li", {
      key: 0,
      class: normalizeClass([{ active: _ctx.currentPage === 1, disabled: _ctx.disabled }, "number"]),
      "aria-current": _ctx.currentPage === 1,
      tabindex: "0"
    }, " 1 ", 10, _hoisted_1$b)) : createCommentVNode("v-if", true),
    _ctx.showPrevMore ? (openBlock(), createElementBlock("li", {
      key: 1,
      class: normalizeClass(["el-icon more btn-quickprev", { disabled: _ctx.disabled }]),
      onMouseenter: _cache[0] || (_cache[0] = ($event) => _ctx.onMouseenter("left")),
      onMouseleave: _cache[1] || (_cache[1] = ($event) => _ctx.quickPrevHover = false)
    }, [
      _ctx.quickPrevHover ? (openBlock(), createBlock(_component_d_arrow_left, { key: 0 })) : (openBlock(), createBlock(_component_more_filled, { key: 1 }))
    ], 34)) : createCommentVNode("v-if", true),
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.pagers, (pager) => {
      return openBlock(), createElementBlock("li", {
        key: pager,
        class: normalizeClass([{ active: _ctx.currentPage === pager, disabled: _ctx.disabled }, "number"]),
        "aria-current": _ctx.currentPage === pager,
        tabindex: "0"
      }, toDisplayString(pager), 11, _hoisted_2$8);
    }), 128)),
    _ctx.showNextMore ? (openBlock(), createElementBlock("li", {
      key: 2,
      class: normalizeClass(["el-icon more btn-quicknext", { disabled: _ctx.disabled }]),
      onMouseenter: _cache[2] || (_cache[2] = ($event) => _ctx.onMouseenter("right")),
      onMouseleave: _cache[3] || (_cache[3] = ($event) => _ctx.quickNextHover = false)
    }, [
      _ctx.quickNextHover ? (openBlock(), createBlock(_component_d_arrow_right, { key: 0 })) : (openBlock(), createBlock(_component_more_filled, { key: 1 }))
    ], 34)) : createCommentVNode("v-if", true),
    _ctx.pageCount > 1 ? (openBlock(), createElementBlock("li", {
      key: 3,
      class: normalizeClass([{ active: _ctx.currentPage === _ctx.pageCount, disabled: _ctx.disabled }, "number"]),
      "aria-current": _ctx.currentPage === _ctx.pageCount,
      tabindex: "0"
    }, toDisplayString(_ctx.pageCount), 11, _hoisted_3$7)) : createCommentVNode("v-if", true)
  ], 32);
}
var Pager = /* @__PURE__ */ _export_sfc$2(_sfc_main$c, [["render", _sfc_render$6]]);
const isAbsent = (v) => typeof v !== "number";
const paginationProps = buildProps({
  total: Number,
  pageSize: Number,
  defaultPageSize: Number,
  currentPage: Number,
  defaultCurrentPage: Number,
  pageCount: Number,
  pagerCount: {
    type: Number,
    validator: (value) => {
      return typeof value === "number" && (value | 0) === value && value > 4 && value < 22 && value % 2 === 1;
    },
    default: 7
  },
  layout: {
    type: String,
    default: ["prev", "pager", "next", "jumper", "->", "total"].join(", ")
  },
  pageSizes: {
    type: definePropType(Array),
    default: () => mutable([10, 20, 30, 40, 50, 100])
  },
  popperClass: {
    type: String,
    default: ""
  },
  prevText: {
    type: String,
    default: ""
  },
  nextText: {
    type: String,
    default: ""
  },
  small: Boolean,
  background: Boolean,
  disabled: Boolean,
  hideOnSinglePage: Boolean
});
const paginationEmits = {
  "update:current-page": (val) => typeof val === "number",
  "update:page-size": (val) => typeof val === "number",
  "size-change": (val) => typeof val === "number",
  "current-change": (val) => typeof val === "number",
  "prev-click": (val) => typeof val === "number",
  "next-click": (val) => typeof val === "number"
};
const componentName = "ElPagination";
var Pagination = defineComponent({
  name: componentName,
  props: paginationProps,
  emits: paginationEmits,
  setup(props, { emit, slots }) {
    const { t } = useLocale();
    const vnodeProps = getCurrentInstance().vnode.props || {};
    const hasCurrentPageListener = "onUpdate:currentPage" in vnodeProps || "onUpdate:current-page" in vnodeProps || "onCurrentChange" in vnodeProps;
    const hasPageSizeListener = "onUpdate:pageSize" in vnodeProps || "onUpdate:page-size" in vnodeProps || "onSizeChange" in vnodeProps;
    const assertValidUsage = computed(() => {
      if (isAbsent(props.total) && isAbsent(props.pageCount))
        return false;
      if (!isAbsent(props.currentPage) && !hasCurrentPageListener)
        return false;
      if (props.layout.includes("sizes")) {
        if (!isAbsent(props.pageCount)) {
          if (!hasPageSizeListener)
            return false;
        } else if (!isAbsent(props.total)) {
          if (!isAbsent(props.pageSize)) {
            if (!hasPageSizeListener) {
              return false;
            }
          }
        }
      }
      return true;
    });
    const innerPageSize = ref(isAbsent(props.defaultPageSize) ? 10 : props.defaultPageSize);
    const innerCurrentPage = ref(isAbsent(props.defaultCurrentPage) ? 1 : props.defaultCurrentPage);
    const pageSizeBridge = computed({
      get() {
        return isAbsent(props.pageSize) ? innerPageSize.value : props.pageSize;
      },
      set(v) {
        if (isAbsent(props.pageSize)) {
          innerPageSize.value = v;
        }
        if (hasPageSizeListener) {
          emit("update:page-size", v);
          emit("size-change", v);
        }
      }
    });
    const pageCountBridge = computed(() => {
      let pageCount = 0;
      if (!isAbsent(props.pageCount)) {
        pageCount = props.pageCount;
      } else if (!isAbsent(props.total)) {
        pageCount = Math.max(1, Math.ceil(props.total / pageSizeBridge.value));
      }
      return pageCount;
    });
    const currentPageBridge = computed({
      get() {
        return isAbsent(props.currentPage) ? innerCurrentPage.value : props.currentPage;
      },
      set(v) {
        let newCurrentPage = v;
        if (v < 1) {
          newCurrentPage = 1;
        } else if (v > pageCountBridge.value) {
          newCurrentPage = pageCountBridge.value;
        }
        if (isAbsent(props.currentPage)) {
          innerCurrentPage.value = newCurrentPage;
        }
        if (hasCurrentPageListener) {
          emit("update:current-page", newCurrentPage);
          emit("current-change", newCurrentPage);
        }
      }
    });
    watch(pageCountBridge, (val) => {
      if (currentPageBridge.value > val)
        currentPageBridge.value = val;
    });
    function handleCurrentChange(val) {
      currentPageBridge.value = val;
    }
    function handleSizeChange(val) {
      pageSizeBridge.value = val;
      const newPageCount = pageCountBridge.value;
      if (currentPageBridge.value > newPageCount) {
        currentPageBridge.value = newPageCount;
      }
    }
    function prev() {
      if (props.disabled)
        return;
      currentPageBridge.value -= 1;
      emit("prev-click", currentPageBridge.value);
    }
    function next() {
      if (props.disabled)
        return;
      currentPageBridge.value += 1;
      emit("next-click", currentPageBridge.value);
    }
    function addClass2(element, cls) {
      if (element) {
        if (!element.props) {
          element.props = {};
        }
        element.props.class = [element.props.class, cls].join(" ");
      }
    }
    provide(elPaginationKey, {
      pageCount: pageCountBridge,
      disabled: computed(() => props.disabled),
      currentPage: currentPageBridge,
      changeEvent: handleCurrentChange,
      handleSizeChange
    });
    return () => {
      var _a2, _b2;
      if (!assertValidUsage.value) {
        debugWarn(componentName, t("el.pagination.deprecationWarning"));
        return null;
      }
      if (!props.layout)
        return null;
      if (props.hideOnSinglePage && pageCountBridge.value <= 1)
        return null;
      const rootChildren = [];
      const rightWrapperChildren = [];
      const rightWrapperRoot = h("div", { class: "el-pagination__rightwrapper" }, rightWrapperChildren);
      const TEMPLATE_MAP = {
        prev: h(Prev, {
          disabled: props.disabled,
          currentPage: currentPageBridge.value,
          prevText: props.prevText,
          onClick: prev
        }),
        jumper: h(Jumper),
        pager: h(Pager, {
          currentPage: currentPageBridge.value,
          pageCount: pageCountBridge.value,
          pagerCount: props.pagerCount,
          onChange: handleCurrentChange,
          disabled: props.disabled
        }),
        next: h(Next, {
          disabled: props.disabled,
          currentPage: currentPageBridge.value,
          pageCount: pageCountBridge.value,
          nextText: props.nextText,
          onClick: next
        }),
        sizes: h(Sizes, {
          pageSize: pageSizeBridge.value,
          pageSizes: props.pageSizes,
          popperClass: props.popperClass,
          disabled: props.disabled,
          size: props.small ? "small" : "default"
        }),
        slot: (_b2 = (_a2 = slots == null ? void 0 : slots.default) == null ? void 0 : _a2.call(slots)) != null ? _b2 : null,
        total: h(Total, { total: isAbsent(props.total) ? 0 : props.total })
      };
      const components = props.layout.split(",").map((item) => item.trim());
      let haveRightWrapper = false;
      components.forEach((c) => {
        if (c === "->") {
          haveRightWrapper = true;
          return;
        }
        if (!haveRightWrapper) {
          rootChildren.push(TEMPLATE_MAP[c]);
        } else {
          rightWrapperChildren.push(TEMPLATE_MAP[c]);
        }
      });
      if (haveRightWrapper && rightWrapperChildren.length > 0) {
        rootChildren.unshift(rightWrapperRoot);
      }
      addClass2(rootChildren[0], "is-first");
      addClass2(rootChildren[rootChildren.length - 1], "is-last");
      return h("div", {
        role: "pagination",
        "aria-label": "pagination",
        class: [
          "el-pagination",
          {
            "is-background": props.background,
            "el-pagination--small": props.small
          }
        ]
      }, rootChildren);
    };
  }
});
const ElPagination = withInstall(Pagination);
const usePopoverProps = {
  content: useTooltipContentProps.content,
  popperStyle: useTooltipContentProps.popperStyle,
  popperClass: useTooltipContentProps.popperClass,
  enterable: {
    ...useTooltipContentProps.enterable,
    default: true
  },
  effect: {
    ...useTooltipContentProps.effect,
    default: "light"
  },
  ...buildProps({
    title: String,
    width: {
      type: [String, Number],
      default: 150
    }
  })
};
const emits = ["update:visible", "after-enter", "after-leave"];
const NAME = "ElPopover";
const _sfc_main$b = defineComponent({
  name: NAME,
  components: {
    ElTooltip
  },
  props: usePopoverProps,
  emits,
  setup(props, { emit }) {
    const tooltipRef = ref(null);
    const popperRef = computed(() => {
      var _a2;
      return (_a2 = unref(tooltipRef)) == null ? void 0 : _a2.popperRef;
    });
    const width = computed(() => {
      if (isString$2(props.width)) {
        return props.width;
      }
      return `${props.width}px`;
    });
    const style = computed(() => {
      return [
        {
          width: width.value
        },
        props.popperStyle
      ];
    });
    const kls = computed(() => {
      return [
        { "el-popover--plain": !!props.content },
        "el-popover",
        props.popperClass
      ];
    });
    const hide = () => {
      var _a2;
      (_a2 = tooltipRef.value) == null ? void 0 : _a2.hide();
    };
    const afterEnter = () => {
      emit("after-enter");
    };
    const afterLeave = () => {
      emit("after-leave");
    };
    return {
      kls,
      style,
      tooltipRef,
      popperRef,
      hide,
      afterEnter,
      afterLeave
    };
  }
});
const _hoisted_1$a = {
  key: 0,
  class: "el-popover__title",
  role: "title"
};
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tooltip = resolveComponent("el-tooltip");
  return openBlock(), createBlock(_component_el_tooltip, mergeProps({ ref: "tooltipRef" }, _ctx.$attrs, {
    "aria-label": _ctx.title,
    effect: _ctx.effect,
    enterable: _ctx.enterable,
    "popper-class": _ctx.kls,
    "popper-style": _ctx.style,
    persistent: "",
    onShow: _ctx.afterEnter,
    onHide: _ctx.afterLeave
  }), {
    content: withCtx(() => [
      _ctx.title ? (openBlock(), createElementBlock("div", _hoisted_1$a, toDisplayString(_ctx.title), 1)) : createCommentVNode("v-if", true),
      renderSlot(_ctx.$slots, "default", {}, () => [
        createTextVNode(toDisplayString(_ctx.content), 1)
      ])
    ]),
    default: withCtx(() => [
      _ctx.$slots.reference ? renderSlot(_ctx.$slots, "reference", { key: 0 }) : createCommentVNode("v-if", true)
    ]),
    _: 3
  }, 16, ["aria-label", "effect", "enterable", "popper-class", "popper-style", "onShow", "onHide"]);
}
var Popover = /* @__PURE__ */ _export_sfc$2(_sfc_main$b, [["render", _sfc_render$5]]);
const attachEvents = (el, binding) => {
  const popperComponent = binding.arg || binding.value;
  const popover = popperComponent == null ? void 0 : popperComponent.popperRef;
  if (popover) {
    popover.triggerRef = el;
  }
};
var PopoverDirective = {
  mounted(el, binding) {
    attachEvents(el, binding);
  },
  updated(el, binding) {
    attachEvents(el, binding);
  }
};
const VPopover = "popover";
Popover.install = (app2) => {
  app2.component(Popover.name, Popover);
};
PopoverDirective.install = (app2) => {
  app2.directive(VPopover, PopoverDirective);
};
const _PopoverDirective = PopoverDirective;
Popover.directive = _PopoverDirective;
const _Popover = Popover;
const ElPopover = _Popover;
const messageTypes = ["success", "info", "warning", "error"];
const messageProps = buildProps({
  customClass: {
    type: String,
    default: ""
  },
  center: {
    type: Boolean,
    default: false
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: false
  },
  duration: {
    type: Number,
    default: 3e3
  },
  icon: {
    type: definePropType([String, Object]),
    default: ""
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: definePropType([String, Object]),
    default: ""
  },
  onClose: {
    type: definePropType(Function),
    required: false
  },
  showClose: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    values: messageTypes,
    default: "info"
  },
  offset: {
    type: Number,
    default: 20
  },
  zIndex: {
    type: Number,
    default: 0
  },
  grouping: {
    type: Boolean,
    default: false
  },
  repeatNum: {
    type: Number,
    default: 1
  }
});
const messageEmits = {
  destroy: () => true
};
const _sfc_main$a = defineComponent({
  name: "ElMessage",
  components: {
    ElBadge,
    ElIcon,
    ...TypeComponents
  },
  props: messageProps,
  emits: messageEmits,
  setup(props) {
    const visible = ref(false);
    const badgeType = ref(props.type ? props.type === "error" ? "danger" : props.type : "info");
    let stopTimer = void 0;
    const typeClass = computed(() => {
      const type4 = props.type;
      return type4 && TypeComponentsMap[type4] ? `el-message-icon--${type4}` : "";
    });
    const iconComponent = computed(() => {
      return props.icon || TypeComponentsMap[props.type] || "";
    });
    const customStyle = computed(() => ({
      top: `${props.offset}px`,
      zIndex: props.zIndex
    }));
    function startTimer() {
      if (props.duration > 0) {
        ({ stop: stopTimer } = useTimeoutFn(() => {
          if (visible.value)
            close2();
        }, props.duration));
      }
    }
    function clearTimer() {
      stopTimer == null ? void 0 : stopTimer();
    }
    function close2() {
      visible.value = false;
    }
    function keydown({ code }) {
      if (code === EVENT_CODE.esc) {
        if (visible.value) {
          close2();
        }
      } else {
        startTimer();
      }
    }
    onMounted(() => {
      startTimer();
      visible.value = true;
    });
    watch(() => props.repeatNum, () => {
      clearTimer();
      startTimer();
    });
    useEventListener(document, "keydown", keydown);
    return {
      typeClass,
      iconComponent,
      customStyle,
      visible,
      badgeType,
      close: close2,
      clearTimer,
      startTimer
    };
  }
});
const _hoisted_1$9 = ["id"];
const _hoisted_2$7 = {
  key: 0,
  class: "el-message__content"
};
const _hoisted_3$6 = ["innerHTML"];
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_badge = resolveComponent("el-badge");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_close = resolveComponent("close");
  return openBlock(), createBlock(Transition, {
    name: "el-message-fade",
    onBeforeLeave: _ctx.onClose,
    onAfterLeave: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("destroy"))
  }, {
    default: withCtx(() => [
      withDirectives(createBaseVNode("div", {
        id: _ctx.id,
        class: normalizeClass([
          "el-message",
          _ctx.type && !_ctx.icon ? `el-message--${_ctx.type}` : "",
          _ctx.center ? "is-center" : "",
          _ctx.showClose ? "is-closable" : "",
          _ctx.customClass
        ]),
        style: normalizeStyle(_ctx.customStyle),
        role: "alert",
        onMouseenter: _cache[0] || (_cache[0] = (...args) => _ctx.clearTimer && _ctx.clearTimer(...args)),
        onMouseleave: _cache[1] || (_cache[1] = (...args) => _ctx.startTimer && _ctx.startTimer(...args))
      }, [
        _ctx.repeatNum > 1 ? (openBlock(), createBlock(_component_el_badge, {
          key: 0,
          value: _ctx.repeatNum,
          type: _ctx.badgeType,
          class: "el-message__badge"
        }, null, 8, ["value", "type"])) : createCommentVNode("v-if", true),
        _ctx.iconComponent ? (openBlock(), createBlock(_component_el_icon, {
          key: 1,
          class: normalizeClass(["el-message__icon", _ctx.typeClass])
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.iconComponent)))
          ]),
          _: 1
        }, 8, ["class"])) : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "default", {}, () => [
          !_ctx.dangerouslyUseHTMLString ? (openBlock(), createElementBlock("p", _hoisted_2$7, toDisplayString(_ctx.message), 1)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createCommentVNode(" Caution here, message could've been compromised, never use user's input as message "),
            createBaseVNode("p", {
              class: "el-message__content",
              innerHTML: _ctx.message
            }, null, 8, _hoisted_3$6)
          ], 2112))
        ]),
        _ctx.showClose ? (openBlock(), createBlock(_component_el_icon, {
          key: 2,
          class: "el-message__closeBtn",
          onClick: withModifiers(_ctx.close, ["stop"])
        }, {
          default: withCtx(() => [
            createVNode(_component_close)
          ]),
          _: 1
        }, 8, ["onClick"])) : createCommentVNode("v-if", true)
      ], 46, _hoisted_1$9), [
        [vShow, _ctx.visible]
      ])
    ]),
    _: 3
  }, 8, ["onBeforeLeave"]);
}
var MessageConstructor = /* @__PURE__ */ _export_sfc$2(_sfc_main$a, [["render", _sfc_render$4]]);
const instances = [];
let seed = 1;
const message = function(options = {}) {
  if (!isClient)
    return { close: () => void 0 };
  if (isNumber$1(messageConfig.max) && instances.length >= messageConfig.max) {
    return { close: () => void 0 };
  }
  if (!isVNode(options) && typeof options === "object" && options.grouping && !isVNode(options.message) && instances.length) {
    const tempVm = instances.find((item) => {
      var _a2, _b2, _c;
      return `${(_b2 = (_a2 = item.vm.props) == null ? void 0 : _a2.message) != null ? _b2 : ""}` === `${(_c = options.message) != null ? _c : ""}`;
    });
    if (tempVm) {
      tempVm.vm.component.props.repeatNum += 1;
      tempVm.vm.component.props.type = options == null ? void 0 : options.type;
      return {
        close: () => vm.component.proxy.visible = false
      };
    }
  }
  if (typeof options === "string" || isVNode(options)) {
    options = { message: options };
  }
  let verticalOffset = options.offset || 20;
  instances.forEach(({ vm: vm2 }) => {
    var _a2;
    verticalOffset += (((_a2 = vm2.el) == null ? void 0 : _a2.offsetHeight) || 0) + 16;
  });
  verticalOffset += 16;
  const id = `message_${seed++}`;
  const userOnClose = options.onClose;
  const props = {
    zIndex: PopupManager.nextZIndex(),
    offset: verticalOffset,
    ...options,
    id,
    onClose: () => {
      close(id, userOnClose);
    }
  };
  let appendTo = document.body;
  if (options.appendTo instanceof HTMLElement) {
    appendTo = options.appendTo;
  } else if (typeof options.appendTo === "string") {
    appendTo = document.querySelector(options.appendTo);
  }
  if (!(appendTo instanceof HTMLElement)) {
    appendTo = document.body;
  }
  const container = document.createElement("div");
  container.className = `container_${id}`;
  const message2 = props.message;
  const vm = createVNode(MessageConstructor, props, isVNode(props.message) ? { default: () => message2 } : null);
  vm.props.onDestroy = () => {
    render(null, container);
  };
  render(vm, container);
  instances.push({ vm });
  appendTo.appendChild(container.firstElementChild);
  return {
    close: () => vm.component.proxy.visible = false
  };
};
messageTypes.forEach((type4) => {
  message[type4] = (options = {}) => {
    if (typeof options === "string" || isVNode(options)) {
      options = {
        message: options
      };
    }
    return message({
      ...options,
      type: type4
    });
  };
});
function close(id, userOnClose) {
  const idx = instances.findIndex(({ vm: vm2 }) => id === vm2.component.props.id);
  if (idx === -1)
    return;
  const { vm } = instances[idx];
  if (!vm)
    return;
  userOnClose == null ? void 0 : userOnClose(vm);
  const removedHeight = vm.el.offsetHeight;
  instances.splice(idx, 1);
  const len = instances.length;
  if (len < 1)
    return;
  for (let i = idx; i < len; i++) {
    const pos = parseInt(instances[i].vm.el.style["top"], 10) - removedHeight - 16;
    instances[i].vm.component.props.offset = pos;
  }
}
function closeAll() {
  var _a2;
  for (let i = instances.length - 1; i >= 0; i--) {
    const instance2 = instances[i].vm.component;
    (_a2 = instance2 == null ? void 0 : instance2.proxy) == null ? void 0 : _a2.close();
  }
}
message.closeAll = closeAll;
const ElMessage = withInstallFunction(message, "$message");
const base = "";
const elMessage = "";
const scriptRel = "modulepreload";
const assetsURL = function(dep, importerUrl) {
  return new URL(dep, importerUrl).href;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  return Promise.all(deps.map((dep) => {
    dep = assetsURL(dep, importerUrl);
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule());
};
/*!
  * vue-router v4.1.3
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const isBrowser = typeof window !== "undefined";
function isESModule(obj) {
  return obj.__esModule || obj[Symbol.toStringTag] === "Module";
}
const assign$1 = Object.assign;
function applyToParams(fn2, params) {
  const newParams = {};
  for (const key in params) {
    const value = params[key];
    newParams[key] = isArray$1(value) ? value.map(fn2) : fn2(value);
  }
  return newParams;
}
const noop$1 = () => {
};
const isArray$1 = Array.isArray;
const TRAILING_SLASH_RE = /\/$/;
const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, "");
function parseURL(parseQuery2, location2, currentLocation = "/") {
  let path, query = {}, searchString = "", hash = "";
  const hashPos = location2.indexOf("#");
  let searchPos = location2.indexOf("?");
  if (hashPos < searchPos && hashPos >= 0) {
    searchPos = -1;
  }
  if (searchPos > -1) {
    path = location2.slice(0, searchPos);
    searchString = location2.slice(searchPos + 1, hashPos > -1 ? hashPos : location2.length);
    query = parseQuery2(searchString);
  }
  if (hashPos > -1) {
    path = path || location2.slice(0, hashPos);
    hash = location2.slice(hashPos, location2.length);
  }
  path = resolveRelativePath(path != null ? path : location2, currentLocation);
  return {
    fullPath: path + (searchString && "?") + searchString + hash,
    path,
    query,
    hash
  };
}
function stringifyURL(stringifyQuery2, location2) {
  const query = location2.query ? stringifyQuery2(location2.query) : "";
  return location2.path + (query && "?") + query + (location2.hash || "");
}
function stripBase(pathname, base2) {
  if (!base2 || !pathname.toLowerCase().startsWith(base2.toLowerCase()))
    return pathname;
  return pathname.slice(base2.length) || "/";
}
function isSameRouteLocation(stringifyQuery2, a, b) {
  const aLastIndex = a.matched.length - 1;
  const bLastIndex = b.matched.length - 1;
  return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery2(a.query) === stringifyQuery2(b.query) && a.hash === b.hash;
}
function isSameRouteRecord(a, b) {
  return (a.aliasOf || a) === (b.aliasOf || b);
}
function isSameRouteLocationParams(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length)
    return false;
  for (const key in a) {
    if (!isSameRouteLocationParamsValue(a[key], b[key]))
      return false;
  }
  return true;
}
function isSameRouteLocationParamsValue(a, b) {
  return isArray$1(a) ? isEquivalentArray(a, b) : isArray$1(b) ? isEquivalentArray(b, a) : a === b;
}
function isEquivalentArray(a, b) {
  return isArray$1(b) ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
}
function resolveRelativePath(to, from) {
  if (to.startsWith("/"))
    return to;
  if (!to)
    return from;
  const fromSegments = from.split("/");
  const toSegments = to.split("/");
  let position = fromSegments.length - 1;
  let toPosition;
  let segment;
  for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
    segment = toSegments[toPosition];
    if (segment === ".")
      continue;
    if (segment === "..") {
      if (position > 1)
        position--;
    } else
      break;
  }
  return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition - (toPosition === toSegments.length ? 1 : 0)).join("/");
}
var NavigationType;
(function(NavigationType2) {
  NavigationType2["pop"] = "pop";
  NavigationType2["push"] = "push";
})(NavigationType || (NavigationType = {}));
var NavigationDirection;
(function(NavigationDirection2) {
  NavigationDirection2["back"] = "back";
  NavigationDirection2["forward"] = "forward";
  NavigationDirection2["unknown"] = "";
})(NavigationDirection || (NavigationDirection = {}));
function normalizeBase(base2) {
  if (!base2) {
    if (isBrowser) {
      const baseEl = document.querySelector("base");
      base2 = baseEl && baseEl.getAttribute("href") || "/";
      base2 = base2.replace(/^\w+:\/\/[^\/]+/, "");
    } else {
      base2 = "/";
    }
  }
  if (base2[0] !== "/" && base2[0] !== "#")
    base2 = "/" + base2;
  return removeTrailingSlash(base2);
}
const BEFORE_HASH_RE = /^[^#]+#/;
function createHref(base2, location2) {
  return base2.replace(BEFORE_HASH_RE, "#") + location2;
}
function getElementPosition(el, offset) {
  const docRect = document.documentElement.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();
  return {
    behavior: offset.behavior,
    left: elRect.left - docRect.left - (offset.left || 0),
    top: elRect.top - docRect.top - (offset.top || 0)
  };
}
const computeScrollPosition = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function scrollToPosition(position) {
  let scrollToOptions;
  if ("el" in position) {
    const positionEl = position.el;
    const isIdSelector = typeof positionEl === "string" && positionEl.startsWith("#");
    const el = typeof positionEl === "string" ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;
    if (!el) {
      return;
    }
    scrollToOptions = getElementPosition(el, position);
  } else {
    scrollToOptions = position;
  }
  if ("scrollBehavior" in document.documentElement.style)
    window.scrollTo(scrollToOptions);
  else {
    window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.pageXOffset, scrollToOptions.top != null ? scrollToOptions.top : window.pageYOffset);
  }
}
function getScrollKey(path, delta) {
  const position = history.state ? history.state.position - delta : -1;
  return position + path;
}
const scrollPositions = /* @__PURE__ */ new Map();
function saveScrollPosition(key, scrollPosition) {
  scrollPositions.set(key, scrollPosition);
}
function getSavedScrollPosition(key) {
  const scroll = scrollPositions.get(key);
  scrollPositions.delete(key);
  return scroll;
}
let createBaseLocation = () => location.protocol + "//" + location.host;
function createCurrentLocation(base2, location2) {
  const { pathname, search: search2, hash } = location2;
  const hashPos = base2.indexOf("#");
  if (hashPos > -1) {
    let slicePos = hash.includes(base2.slice(hashPos)) ? base2.slice(hashPos).length : 1;
    let pathFromHash = hash.slice(slicePos);
    if (pathFromHash[0] !== "/")
      pathFromHash = "/" + pathFromHash;
    return stripBase(pathFromHash, "");
  }
  const path = stripBase(pathname, base2);
  return path + search2 + hash;
}
function useHistoryListeners(base2, historyState, currentLocation, replace) {
  let listeners = [];
  let teardowns = [];
  let pauseState = null;
  const popStateHandler = ({ state }) => {
    const to = createCurrentLocation(base2, location);
    const from = currentLocation.value;
    const fromState = historyState.value;
    let delta = 0;
    if (state) {
      currentLocation.value = to;
      historyState.value = state;
      if (pauseState && pauseState === from) {
        pauseState = null;
        return;
      }
      delta = fromState ? state.position - fromState.position : 0;
    } else {
      replace(to);
    }
    listeners.forEach((listener) => {
      listener(currentLocation.value, from, {
        delta,
        type: NavigationType.pop,
        direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
      });
    });
  };
  function pauseListeners() {
    pauseState = currentLocation.value;
  }
  function listen(callback) {
    listeners.push(callback);
    const teardown = () => {
      const index = listeners.indexOf(callback);
      if (index > -1)
        listeners.splice(index, 1);
    };
    teardowns.push(teardown);
    return teardown;
  }
  function beforeUnloadListener() {
    const { history: history2 } = window;
    if (!history2.state)
      return;
    history2.replaceState(assign$1({}, history2.state, { scroll: computeScrollPosition() }), "");
  }
  function destroy() {
    for (const teardown of teardowns)
      teardown();
    teardowns = [];
    window.removeEventListener("popstate", popStateHandler);
    window.removeEventListener("beforeunload", beforeUnloadListener);
  }
  window.addEventListener("popstate", popStateHandler);
  window.addEventListener("beforeunload", beforeUnloadListener);
  return {
    pauseListeners,
    listen,
    destroy
  };
}
function buildState(back, current, forward, replaced = false, computeScroll = false) {
  return {
    back,
    current,
    forward,
    replaced,
    position: window.history.length,
    scroll: computeScroll ? computeScrollPosition() : null
  };
}
function useHistoryStateNavigation(base2) {
  const { history: history2, location: location2 } = window;
  const currentLocation = {
    value: createCurrentLocation(base2, location2)
  };
  const historyState = { value: history2.state };
  if (!historyState.value) {
    changeLocation(currentLocation.value, {
      back: null,
      current: currentLocation.value,
      forward: null,
      position: history2.length - 1,
      replaced: true,
      scroll: null
    }, true);
  }
  function changeLocation(to, state, replace2) {
    const hashIndex = base2.indexOf("#");
    const url2 = hashIndex > -1 ? (location2.host && document.querySelector("base") ? base2 : base2.slice(hashIndex)) + to : createBaseLocation() + base2 + to;
    try {
      history2[replace2 ? "replaceState" : "pushState"](state, "", url2);
      historyState.value = state;
    } catch (err) {
      {
        console.error(err);
      }
      location2[replace2 ? "replace" : "assign"](url2);
    }
  }
  function replace(to, data2) {
    const state = assign$1({}, history2.state, buildState(
      historyState.value.back,
      to,
      historyState.value.forward,
      true
    ), data2, { position: historyState.value.position });
    changeLocation(to, state, true);
    currentLocation.value = to;
  }
  function push(to, data2) {
    const currentState = assign$1(
      {},
      historyState.value,
      history2.state,
      {
        forward: to,
        scroll: computeScrollPosition()
      }
    );
    changeLocation(currentState.current, currentState, true);
    const state = assign$1({}, buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data2);
    changeLocation(to, state, false);
    currentLocation.value = to;
  }
  return {
    location: currentLocation,
    state: historyState,
    push,
    replace
  };
}
function createWebHistory(base2) {
  base2 = normalizeBase(base2);
  const historyNavigation = useHistoryStateNavigation(base2);
  const historyListeners = useHistoryListeners(base2, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
  function go(delta, triggerListeners = true) {
    if (!triggerListeners)
      historyListeners.pauseListeners();
    history.go(delta);
  }
  const routerHistory = assign$1({
    location: "",
    base: base2,
    go,
    createHref: createHref.bind(null, base2)
  }, historyNavigation, historyListeners);
  Object.defineProperty(routerHistory, "location", {
    enumerable: true,
    get: () => historyNavigation.location.value
  });
  Object.defineProperty(routerHistory, "state", {
    enumerable: true,
    get: () => historyNavigation.state.value
  });
  return routerHistory;
}
function isRouteLocation(route) {
  return typeof route === "string" || route && typeof route === "object";
}
function isRouteName(name) {
  return typeof name === "string" || typeof name === "symbol";
}
const START_LOCATION_NORMALIZED = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
const NavigationFailureSymbol = Symbol("");
var NavigationFailureType;
(function(NavigationFailureType2) {
  NavigationFailureType2[NavigationFailureType2["aborted"] = 4] = "aborted";
  NavigationFailureType2[NavigationFailureType2["cancelled"] = 8] = "cancelled";
  NavigationFailureType2[NavigationFailureType2["duplicated"] = 16] = "duplicated";
})(NavigationFailureType || (NavigationFailureType = {}));
function createRouterError(type4, params) {
  {
    return assign$1(new Error(), {
      type: type4,
      [NavigationFailureSymbol]: true
    }, params);
  }
}
function isNavigationFailure(error, type4) {
  return error instanceof Error && NavigationFailureSymbol in error && (type4 == null || !!(error.type & type4));
}
const BASE_PARAM_PATTERN = "[^/]+?";
const BASE_PATH_PARSER_OPTIONS = {
  sensitive: false,
  strict: false,
  start: true,
  end: true
};
const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
function tokensToParser(segments, extraOptions) {
  const options = assign$1({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
  const score = [];
  let pattern4 = options.start ? "^" : "";
  const keys2 = [];
  for (const segment of segments) {
    const segmentScores = segment.length ? [] : [90];
    if (options.strict && !segment.length)
      pattern4 += "/";
    for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
      const token = segment[tokenIndex];
      let subSegmentScore = 40 + (options.sensitive ? 0.25 : 0);
      if (token.type === 0) {
        if (!tokenIndex)
          pattern4 += "/";
        pattern4 += token.value.replace(REGEX_CHARS_RE, "\\$&");
        subSegmentScore += 40;
      } else if (token.type === 1) {
        const { value, repeatable, optional, regexp: regexp4 } = token;
        keys2.push({
          name: value,
          repeatable,
          optional
        });
        const re2 = regexp4 ? regexp4 : BASE_PARAM_PATTERN;
        if (re2 !== BASE_PARAM_PATTERN) {
          subSegmentScore += 10;
          try {
            new RegExp(`(${re2})`);
          } catch (err) {
            throw new Error(`Invalid custom RegExp for param "${value}" (${re2}): ` + err.message);
          }
        }
        let subPattern = repeatable ? `((?:${re2})(?:/(?:${re2}))*)` : `(${re2})`;
        if (!tokenIndex)
          subPattern = optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
        if (optional)
          subPattern += "?";
        pattern4 += subPattern;
        subSegmentScore += 20;
        if (optional)
          subSegmentScore += -8;
        if (repeatable)
          subSegmentScore += -20;
        if (re2 === ".*")
          subSegmentScore += -50;
      }
      segmentScores.push(subSegmentScore);
    }
    score.push(segmentScores);
  }
  if (options.strict && options.end) {
    const i = score.length - 1;
    score[i][score[i].length - 1] += 0.7000000000000001;
  }
  if (!options.strict)
    pattern4 += "/?";
  if (options.end)
    pattern4 += "$";
  else if (options.strict)
    pattern4 += "(?:/|$)";
  const re = new RegExp(pattern4, options.sensitive ? "" : "i");
  function parse(path) {
    const match = path.match(re);
    const params = {};
    if (!match)
      return null;
    for (let i = 1; i < match.length; i++) {
      const value = match[i] || "";
      const key = keys2[i - 1];
      params[key.name] = value && key.repeatable ? value.split("/") : value;
    }
    return params;
  }
  function stringify(params) {
    let path = "";
    let avoidDuplicatedSlash = false;
    for (const segment of segments) {
      if (!avoidDuplicatedSlash || !path.endsWith("/"))
        path += "/";
      avoidDuplicatedSlash = false;
      for (const token of segment) {
        if (token.type === 0) {
          path += token.value;
        } else if (token.type === 1) {
          const { value, repeatable, optional } = token;
          const param = value in params ? params[value] : "";
          if (isArray$1(param) && !repeatable) {
            throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
          }
          const text = isArray$1(param) ? param.join("/") : param;
          if (!text) {
            if (optional) {
              if (segment.length < 2) {
                if (path.endsWith("/"))
                  path = path.slice(0, -1);
                else
                  avoidDuplicatedSlash = true;
              }
            } else
              throw new Error(`Missing required param "${value}"`);
          }
          path += text;
        }
      }
    }
    return path || "/";
  }
  return {
    re,
    score,
    keys: keys2,
    parse,
    stringify
  };
}
function compareScoreArray(a, b) {
  let i = 0;
  while (i < a.length && i < b.length) {
    const diff = b[i] - a[i];
    if (diff)
      return diff;
    i++;
  }
  if (a.length < b.length) {
    return a.length === 1 && a[0] === 40 + 40 ? -1 : 1;
  } else if (a.length > b.length) {
    return b.length === 1 && b[0] === 40 + 40 ? 1 : -1;
  }
  return 0;
}
function comparePathParserScore(a, b) {
  let i = 0;
  const aScore = a.score;
  const bScore = b.score;
  while (i < aScore.length && i < bScore.length) {
    const comp = compareScoreArray(aScore[i], bScore[i]);
    if (comp)
      return comp;
    i++;
  }
  if (Math.abs(bScore.length - aScore.length) === 1) {
    if (isLastScoreNegative(aScore))
      return 1;
    if (isLastScoreNegative(bScore))
      return -1;
  }
  return bScore.length - aScore.length;
}
function isLastScoreNegative(score) {
  const last = score[score.length - 1];
  return score.length > 0 && last[last.length - 1] < 0;
}
const ROOT_TOKEN = {
  type: 0,
  value: ""
};
const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
function tokenizePath(path) {
  if (!path)
    return [[]];
  if (path === "/")
    return [[ROOT_TOKEN]];
  if (!path.startsWith("/")) {
    throw new Error(`Invalid path "${path}"`);
  }
  function crash(message2) {
    throw new Error(`ERR (${state})/"${buffer}": ${message2}`);
  }
  let state = 0;
  let previousState = state;
  const tokens = [];
  let segment;
  function finalizeSegment() {
    if (segment)
      tokens.push(segment);
    segment = [];
  }
  let i = 0;
  let char;
  let buffer = "";
  let customRe = "";
  function consumeBuffer() {
    if (!buffer)
      return;
    if (state === 0) {
      segment.push({
        type: 0,
        value: buffer
      });
    } else if (state === 1 || state === 2 || state === 3) {
      if (segment.length > 1 && (char === "*" || char === "+"))
        crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
      segment.push({
        type: 1,
        value: buffer,
        regexp: customRe,
        repeatable: char === "*" || char === "+",
        optional: char === "*" || char === "?"
      });
    } else {
      crash("Invalid state to consume buffer");
    }
    buffer = "";
  }
  function addCharToBuffer() {
    buffer += char;
  }
  while (i < path.length) {
    char = path[i++];
    if (char === "\\" && state !== 2) {
      previousState = state;
      state = 4;
      continue;
    }
    switch (state) {
      case 0:
        if (char === "/") {
          if (buffer) {
            consumeBuffer();
          }
          finalizeSegment();
        } else if (char === ":") {
          consumeBuffer();
          state = 1;
        } else {
          addCharToBuffer();
        }
        break;
      case 4:
        addCharToBuffer();
        state = previousState;
        break;
      case 1:
        if (char === "(") {
          state = 2;
        } else if (VALID_PARAM_RE.test(char)) {
          addCharToBuffer();
        } else {
          consumeBuffer();
          state = 0;
          if (char !== "*" && char !== "?" && char !== "+")
            i--;
        }
        break;
      case 2:
        if (char === ")") {
          if (customRe[customRe.length - 1] == "\\")
            customRe = customRe.slice(0, -1) + char;
          else
            state = 3;
        } else {
          customRe += char;
        }
        break;
      case 3:
        consumeBuffer();
        state = 0;
        if (char !== "*" && char !== "?" && char !== "+")
          i--;
        customRe = "";
        break;
      default:
        crash("Unknown state");
        break;
    }
  }
  if (state === 2)
    crash(`Unfinished custom RegExp for param "${buffer}"`);
  consumeBuffer();
  finalizeSegment();
  return tokens;
}
function createRouteRecordMatcher(record, parent, options) {
  const parser = tokensToParser(tokenizePath(record.path), options);
  const matcher = assign$1(parser, {
    record,
    parent,
    children: [],
    alias: []
  });
  if (parent) {
    if (!matcher.record.aliasOf === !parent.record.aliasOf)
      parent.children.push(matcher);
  }
  return matcher;
}
function createRouterMatcher(routes2, globalOptions) {
  const matchers2 = [];
  const matcherMap = /* @__PURE__ */ new Map();
  globalOptions = mergeOptions({ strict: false, end: true, sensitive: false }, globalOptions);
  function getRecordMatcher(name) {
    return matcherMap.get(name);
  }
  function addRoute(record, parent, originalRecord) {
    const isRootAdd = !originalRecord;
    const mainNormalizedRecord = normalizeRouteRecord(record);
    mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
    const options = mergeOptions(globalOptions, record);
    const normalizedRecords = [
      mainNormalizedRecord
    ];
    if ("alias" in record) {
      const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
      for (const alias of aliases) {
        normalizedRecords.push(assign$1({}, mainNormalizedRecord, {
          components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
          path: alias,
          aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
        }));
      }
    }
    let matcher;
    let originalMatcher;
    for (const normalizedRecord of normalizedRecords) {
      const { path } = normalizedRecord;
      if (parent && path[0] !== "/") {
        const parentPath = parent.record.path;
        const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
        normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
      }
      matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
      if (originalRecord) {
        originalRecord.alias.push(matcher);
      } else {
        originalMatcher = originalMatcher || matcher;
        if (originalMatcher !== matcher)
          originalMatcher.alias.push(matcher);
        if (isRootAdd && record.name && !isAliasRecord(matcher))
          removeRoute(record.name);
      }
      if (mainNormalizedRecord.children) {
        const children = mainNormalizedRecord.children;
        for (let i = 0; i < children.length; i++) {
          addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
        }
      }
      originalRecord = originalRecord || matcher;
      insertMatcher(matcher);
    }
    return originalMatcher ? () => {
      removeRoute(originalMatcher);
    } : noop$1;
  }
  function removeRoute(matcherRef) {
    if (isRouteName(matcherRef)) {
      const matcher = matcherMap.get(matcherRef);
      if (matcher) {
        matcherMap.delete(matcherRef);
        matchers2.splice(matchers2.indexOf(matcher), 1);
        matcher.children.forEach(removeRoute);
        matcher.alias.forEach(removeRoute);
      }
    } else {
      const index = matchers2.indexOf(matcherRef);
      if (index > -1) {
        matchers2.splice(index, 1);
        if (matcherRef.record.name)
          matcherMap.delete(matcherRef.record.name);
        matcherRef.children.forEach(removeRoute);
        matcherRef.alias.forEach(removeRoute);
      }
    }
  }
  function getRoutes() {
    return matchers2;
  }
  function insertMatcher(matcher) {
    let i = 0;
    while (i < matchers2.length && comparePathParserScore(matcher, matchers2[i]) >= 0 && (matcher.record.path !== matchers2[i].record.path || !isRecordChildOf(matcher, matchers2[i])))
      i++;
    matchers2.splice(i, 0, matcher);
    if (matcher.record.name && !isAliasRecord(matcher))
      matcherMap.set(matcher.record.name, matcher);
  }
  function resolve2(location2, currentLocation) {
    let matcher;
    let params = {};
    let path;
    let name;
    if ("name" in location2 && location2.name) {
      matcher = matcherMap.get(location2.name);
      if (!matcher)
        throw createRouterError(1, {
          location: location2
        });
      name = matcher.record.name;
      params = assign$1(
        paramsFromLocation(
          currentLocation.params,
          matcher.keys.filter((k) => !k.optional).map((k) => k.name)
        ),
        location2.params
      );
      path = matcher.stringify(params);
    } else if ("path" in location2) {
      path = location2.path;
      matcher = matchers2.find((m) => m.re.test(path));
      if (matcher) {
        params = matcher.parse(path);
        name = matcher.record.name;
      }
    } else {
      matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers2.find((m) => m.re.test(currentLocation.path));
      if (!matcher)
        throw createRouterError(1, {
          location: location2,
          currentLocation
        });
      name = matcher.record.name;
      params = assign$1({}, currentLocation.params, location2.params);
      path = matcher.stringify(params);
    }
    const matched = [];
    let parentMatcher = matcher;
    while (parentMatcher) {
      matched.unshift(parentMatcher.record);
      parentMatcher = parentMatcher.parent;
    }
    return {
      name,
      path,
      params,
      matched,
      meta: mergeMetaFields(matched)
    };
  }
  routes2.forEach((route) => addRoute(route));
  return { addRoute, resolve: resolve2, removeRoute, getRoutes, getRecordMatcher };
}
function paramsFromLocation(params, keys2) {
  const newParams = {};
  for (const key of keys2) {
    if (key in params)
      newParams[key] = params[key];
  }
  return newParams;
}
function normalizeRouteRecord(record) {
  return {
    path: record.path,
    redirect: record.redirect,
    name: record.name,
    meta: record.meta || {},
    aliasOf: void 0,
    beforeEnter: record.beforeEnter,
    props: normalizeRecordProps(record),
    children: record.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in record ? record.components || null : record.component && { default: record.component }
  };
}
function normalizeRecordProps(record) {
  const propsObject = {};
  const props = record.props || false;
  if ("component" in record) {
    propsObject.default = props;
  } else {
    for (const name in record.components)
      propsObject[name] = typeof props === "boolean" ? props : props[name];
  }
  return propsObject;
}
function isAliasRecord(record) {
  while (record) {
    if (record.record.aliasOf)
      return true;
    record = record.parent;
  }
  return false;
}
function mergeMetaFields(matched) {
  return matched.reduce((meta, record) => assign$1(meta, record.meta), {});
}
function mergeOptions(defaults2, partialOptions) {
  const options = {};
  for (const key in defaults2) {
    options[key] = key in partialOptions ? partialOptions[key] : defaults2[key];
  }
  return options;
}
function isRecordChildOf(record, parent) {
  return parent.children.some((child) => child === record || isRecordChildOf(record, child));
}
const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/g;
const ENC_BRACKET_CLOSE_RE = /%5D/g;
const ENC_CARET_RE = /%5E/g;
const ENC_BACKTICK_RE = /%60/g;
const ENC_CURLY_OPEN_RE = /%7B/g;
const ENC_PIPE_RE = /%7C/g;
const ENC_CURLY_CLOSE_RE = /%7D/g;
const ENC_SPACE_RE = /%20/g;
function commonEncode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeHash(text) {
  return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryValue(text) {
  return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
}
function encodeParam(text) {
  return text == null ? "" : encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text) {
  try {
    return decodeURIComponent("" + text);
  } catch (err) {
  }
  return "" + text;
}
function parseQuery(search2) {
  const query = {};
  if (search2 === "" || search2 === "?")
    return query;
  const hasLeadingIM = search2[0] === "?";
  const searchParams = (hasLeadingIM ? search2.slice(1) : search2).split("&");
  for (let i = 0; i < searchParams.length; ++i) {
    const searchParam = searchParams[i].replace(PLUS_RE, " ");
    const eqPos = searchParam.indexOf("=");
    const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
    const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
    if (key in query) {
      let currentValue = query[key];
      if (!isArray$1(currentValue)) {
        currentValue = query[key] = [currentValue];
      }
      currentValue.push(value);
    } else {
      query[key] = value;
    }
  }
  return query;
}
function stringifyQuery(query) {
  let search2 = "";
  for (let key in query) {
    const value = query[key];
    key = encodeQueryKey(key);
    if (value == null) {
      if (value !== void 0) {
        search2 += (search2.length ? "&" : "") + key;
      }
      continue;
    }
    const values = isArray$1(value) ? value.map((v) => v && encodeQueryValue(v)) : [value && encodeQueryValue(value)];
    values.forEach((value2) => {
      if (value2 !== void 0) {
        search2 += (search2.length ? "&" : "") + key;
        if (value2 != null)
          search2 += "=" + value2;
      }
    });
  }
  return search2;
}
function normalizeQuery(query) {
  const normalizedQuery = {};
  for (const key in query) {
    const value = query[key];
    if (value !== void 0) {
      normalizedQuery[key] = isArray$1(value) ? value.map((v) => v == null ? null : "" + v) : value == null ? value : "" + value;
    }
  }
  return normalizedQuery;
}
const matchedRouteKey = Symbol("");
const viewDepthKey = Symbol("");
const routerKey = Symbol("");
const routeLocationKey = Symbol("");
const routerViewLocationKey = Symbol("");
function useCallbacks() {
  let handlers = [];
  function add2(handler) {
    handlers.push(handler);
    return () => {
      const i = handlers.indexOf(handler);
      if (i > -1)
        handlers.splice(i, 1);
    };
  }
  function reset2() {
    handlers = [];
  }
  return {
    add: add2,
    list: () => handlers,
    reset: reset2
  };
}
function registerGuard(record, name, guard) {
  const removeFromList = () => {
    record[name].delete(guard);
  };
  onUnmounted(removeFromList);
  onDeactivated(removeFromList);
  onActivated(() => {
    record[name].add(guard);
  });
  record[name].add(guard);
}
function onBeforeRouteUpdate(updateGuard) {
  const activeRecord = inject(
    matchedRouteKey,
    {}
  ).value;
  if (!activeRecord) {
    return;
  }
  registerGuard(activeRecord, "updateGuards", updateGuard);
}
function guardToPromiseFn(guard, to, from, record, name) {
  const enterCallbackArray = record && (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
  return () => new Promise((resolve2, reject) => {
    const next = (valid) => {
      if (valid === false) {
        reject(createRouterError(4, {
          from,
          to
        }));
      } else if (valid instanceof Error) {
        reject(valid);
      } else if (isRouteLocation(valid)) {
        reject(createRouterError(2, {
          from: to,
          to: valid
        }));
      } else {
        if (enterCallbackArray && record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function") {
          enterCallbackArray.push(valid);
        }
        resolve2();
      }
    };
    const guardReturn = guard.call(record && record.instances[name], to, from, next);
    let guardCall = Promise.resolve(guardReturn);
    if (guard.length < 3)
      guardCall = guardCall.then(next);
    guardCall.catch((err) => reject(err));
  });
}
function extractComponentsGuards(matched, guardType, to, from) {
  const guards = [];
  for (const record of matched) {
    for (const name in record.components) {
      let rawComponent = record.components[name];
      if (guardType !== "beforeRouteEnter" && !record.instances[name])
        continue;
      if (isRouteComponent(rawComponent)) {
        const options = rawComponent.__vccOpts || rawComponent;
        const guard = options[guardType];
        guard && guards.push(guardToPromiseFn(guard, to, from, record, name));
      } else {
        let componentPromise = rawComponent();
        guards.push(() => componentPromise.then((resolved) => {
          if (!resolved)
            return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}"`));
          const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
          record.components[name] = resolvedComponent;
          const options = resolvedComponent.__vccOpts || resolvedComponent;
          const guard = options[guardType];
          return guard && guardToPromiseFn(guard, to, from, record, name)();
        }));
      }
    }
  }
  return guards;
}
function isRouteComponent(component) {
  return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
}
function useLink(props) {
  const router2 = inject(routerKey);
  const currentRoute = inject(routeLocationKey);
  const route = computed(() => router2.resolve(unref(props.to)));
  const activeRecordIndex = computed(() => {
    const { matched } = route.value;
    const { length } = matched;
    const routeMatched = matched[length - 1];
    const currentMatched = currentRoute.matched;
    if (!routeMatched || !currentMatched.length)
      return -1;
    const index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
    if (index > -1)
      return index;
    const parentRecordPath = getOriginalPath(matched[length - 2]);
    return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index;
  });
  const isActive = computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
  const isExactActive = computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
  function navigate(e = {}) {
    if (guardEvent(e)) {
      return router2[unref(props.replace) ? "replace" : "push"](
        unref(props.to)
      ).catch(noop$1);
    }
    return Promise.resolve();
  }
  return {
    route,
    href: computed(() => route.value.href),
    isActive,
    isExactActive,
    navigate
  };
}
const RouterLinkImpl = /* @__PURE__ */ defineComponent({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: true
    },
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink,
  setup(props, { slots }) {
    const link = reactive(useLink(props));
    const { options } = inject(routerKey);
    const elClass = computed(() => ({
      [getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
      [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
    }));
    return () => {
      const children = slots.default && slots.default(link);
      return props.custom ? children : h("a", {
        "aria-current": link.isExactActive ? props.ariaCurrentValue : null,
        href: link.href,
        onClick: link.navigate,
        class: elClass.value
      }, children);
    };
  }
});
const RouterLink = RouterLinkImpl;
function guardEvent(e) {
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
    return;
  if (e.defaultPrevented)
    return;
  if (e.button !== void 0 && e.button !== 0)
    return;
  if (e.currentTarget && e.currentTarget.getAttribute) {
    const target = e.currentTarget.getAttribute("target");
    if (/\b_blank\b/i.test(target))
      return;
  }
  if (e.preventDefault)
    e.preventDefault();
  return true;
}
function includesParams(outer, inner) {
  for (const key in inner) {
    const innerValue = inner[key];
    const outerValue = outer[key];
    if (typeof innerValue === "string") {
      if (innerValue !== outerValue)
        return false;
    } else {
      if (!isArray$1(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i) => value !== outerValue[i]))
        return false;
    }
  }
  return true;
}
function getOriginalPath(record) {
  return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
const RouterViewImpl = /* @__PURE__ */ defineComponent({
  name: "RouterView",
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  compatConfig: { MODE: 3 },
  setup(props, { attrs, slots }) {
    const injectedRoute = inject(routerViewLocationKey);
    const routeToDisplay = computed(() => props.route || injectedRoute.value);
    const injectedDepth = inject(viewDepthKey, 0);
    const depth = computed(() => {
      let initialDepth = unref(injectedDepth);
      const { matched } = routeToDisplay.value;
      let matchedRoute;
      while ((matchedRoute = matched[initialDepth]) && !matchedRoute.components) {
        initialDepth++;
      }
      return initialDepth;
    });
    const matchedRouteRef = computed(() => routeToDisplay.value.matched[depth.value]);
    provide(viewDepthKey, computed(() => depth.value + 1));
    provide(matchedRouteKey, matchedRouteRef);
    provide(routerViewLocationKey, routeToDisplay);
    const viewRef = ref();
    watch(() => [viewRef.value, matchedRouteRef.value, props.name], ([instance2, to, name], [oldInstance, from, oldName]) => {
      if (to) {
        to.instances[name] = instance2;
        if (from && from !== to && instance2 && instance2 === oldInstance) {
          if (!to.leaveGuards.size) {
            to.leaveGuards = from.leaveGuards;
          }
          if (!to.updateGuards.size) {
            to.updateGuards = from.updateGuards;
          }
        }
      }
      if (instance2 && to && (!from || !isSameRouteRecord(to, from) || !oldInstance)) {
        (to.enterCallbacks[name] || []).forEach((callback) => callback(instance2));
      }
    }, { flush: "post" });
    return () => {
      const route = routeToDisplay.value;
      const currentName = props.name;
      const matchedRoute = matchedRouteRef.value;
      const ViewComponent = matchedRoute && matchedRoute.components[currentName];
      if (!ViewComponent) {
        return normalizeSlot(slots.default, { Component: ViewComponent, route });
      }
      const routePropsOption = matchedRoute.props[currentName];
      const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
      const onVnodeUnmounted = (vnode) => {
        if (vnode.component.isUnmounted) {
          matchedRoute.instances[currentName] = null;
        }
      };
      const component = h(ViewComponent, assign$1({}, routeProps, attrs, {
        onVnodeUnmounted,
        ref: viewRef
      }));
      return normalizeSlot(slots.default, { Component: component, route }) || component;
    };
  }
});
function normalizeSlot(slot, data2) {
  if (!slot)
    return null;
  const slotContent = slot(data2);
  return slotContent.length === 1 ? slotContent[0] : slotContent;
}
const RouterView = RouterViewImpl;
function createRouter(options) {
  const matcher = createRouterMatcher(options.routes, options);
  const parseQuery$1 = options.parseQuery || parseQuery;
  const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
  const routerHistory = options.history;
  const beforeGuards = useCallbacks();
  const beforeResolveGuards = useCallbacks();
  const afterGuards = useCallbacks();
  const currentRoute = shallowRef(START_LOCATION_NORMALIZED);
  let pendingLocation = START_LOCATION_NORMALIZED;
  if (isBrowser && options.scrollBehavior && "scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
  const encodeParams = applyToParams.bind(null, encodeParam);
  const decodeParams = applyToParams.bind(null, decode);
  function addRoute(parentOrRoute, route) {
    let parent;
    let record;
    if (isRouteName(parentOrRoute)) {
      parent = matcher.getRecordMatcher(parentOrRoute);
      record = route;
    } else {
      record = parentOrRoute;
    }
    return matcher.addRoute(record, parent);
  }
  function removeRoute(name) {
    const recordMatcher = matcher.getRecordMatcher(name);
    if (recordMatcher) {
      matcher.removeRoute(recordMatcher);
    }
  }
  function getRoutes() {
    return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
  }
  function hasRoute(name) {
    return !!matcher.getRecordMatcher(name);
  }
  function resolve2(rawLocation, currentLocation) {
    currentLocation = assign$1({}, currentLocation || currentRoute.value);
    if (typeof rawLocation === "string") {
      const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
      const matchedRoute2 = matcher.resolve({ path: locationNormalized.path }, currentLocation);
      const href2 = routerHistory.createHref(locationNormalized.fullPath);
      return assign$1(locationNormalized, matchedRoute2, {
        params: decodeParams(matchedRoute2.params),
        hash: decode(locationNormalized.hash),
        redirectedFrom: void 0,
        href: href2
      });
    }
    let matcherLocation;
    if ("path" in rawLocation) {
      matcherLocation = assign$1({}, rawLocation, {
        path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path
      });
    } else {
      const targetParams = assign$1({}, rawLocation.params);
      for (const key in targetParams) {
        if (targetParams[key] == null) {
          delete targetParams[key];
        }
      }
      matcherLocation = assign$1({}, rawLocation, {
        params: encodeParams(rawLocation.params)
      });
      currentLocation.params = encodeParams(currentLocation.params);
    }
    const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
    const hash = rawLocation.hash || "";
    matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
    const fullPath = stringifyURL(stringifyQuery$1, assign$1({}, rawLocation, {
      hash: encodeHash(hash),
      path: matchedRoute.path
    }));
    const href = routerHistory.createHref(fullPath);
    return assign$1({
      fullPath,
      hash,
      query: stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
    }, matchedRoute, {
      redirectedFrom: void 0,
      href
    });
  }
  function locationAsObject(to) {
    return typeof to === "string" ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign$1({}, to);
  }
  function checkCanceledNavigation(to, from) {
    if (pendingLocation !== to) {
      return createRouterError(8, {
        from,
        to
      });
    }
  }
  function push(to) {
    return pushWithRedirect(to);
  }
  function replace(to) {
    return push(assign$1(locationAsObject(to), { replace: true }));
  }
  function handleRedirectRecord(to) {
    const lastMatched = to.matched[to.matched.length - 1];
    if (lastMatched && lastMatched.redirect) {
      const { redirect } = lastMatched;
      let newTargetLocation = typeof redirect === "function" ? redirect(to) : redirect;
      if (typeof newTargetLocation === "string") {
        newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : { path: newTargetLocation };
        newTargetLocation.params = {};
      }
      return assign$1({
        query: to.query,
        hash: to.hash,
        params: "path" in newTargetLocation ? {} : to.params
      }, newTargetLocation);
    }
  }
  function pushWithRedirect(to, redirectedFrom) {
    const targetLocation = pendingLocation = resolve2(to);
    const from = currentRoute.value;
    const data2 = to.state;
    const force = to.force;
    const replace2 = to.replace === true;
    const shouldRedirect = handleRedirectRecord(targetLocation);
    if (shouldRedirect)
      return pushWithRedirect(
        assign$1(locationAsObject(shouldRedirect), {
          state: data2,
          force,
          replace: replace2
        }),
        redirectedFrom || targetLocation
      );
    const toLocation = targetLocation;
    toLocation.redirectedFrom = redirectedFrom;
    let failure;
    if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
      failure = createRouterError(16, { to: toLocation, from });
      handleScroll(
        from,
        from,
        true,
        false
      );
    }
    return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => isNavigationFailure(error) ? isNavigationFailure(error, 2) ? error : markAsReady(error) : triggerError(error, toLocation, from)).then((failure2) => {
      if (failure2) {
        if (isNavigationFailure(failure2, 2)) {
          return pushWithRedirect(
            assign$1({
              replace: replace2
            }, locationAsObject(failure2.to), {
              state: data2,
              force
            }),
            redirectedFrom || toLocation
          );
        }
      } else {
        failure2 = finalizeNavigation(toLocation, from, true, replace2, data2);
      }
      triggerAfterEach(toLocation, from, failure2);
      return failure2;
    });
  }
  function checkCanceledNavigationAndReject(to, from) {
    const error = checkCanceledNavigation(to, from);
    return error ? Promise.reject(error) : Promise.resolve();
  }
  function navigate(to, from) {
    let guards;
    const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
    guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
    for (const record of leavingRecords) {
      record.leaveGuards.forEach((guard) => {
        guards.push(guardToPromiseFn(guard, to, from));
      });
    }
    const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
    guards.push(canceledNavigationCheck);
    return runGuardQueue(guards).then(() => {
      guards = [];
      for (const guard of beforeGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
      for (const record of updatingRecords) {
        record.updateGuards.forEach((guard) => {
          guards.push(guardToPromiseFn(guard, to, from));
        });
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const record of to.matched) {
        if (record.beforeEnter && !from.matched.includes(record)) {
          if (isArray$1(record.beforeEnter)) {
            for (const beforeEnter of record.beforeEnter)
              guards.push(guardToPromiseFn(beforeEnter, to, from));
          } else {
            guards.push(guardToPromiseFn(record.beforeEnter, to, from));
          }
        }
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      to.matched.forEach((record) => record.enterCallbacks = {});
      guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from);
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const guard of beforeResolveGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).catch((err) => isNavigationFailure(err, 8) ? err : Promise.reject(err));
  }
  function triggerAfterEach(to, from, failure) {
    for (const guard of afterGuards.list())
      guard(to, from, failure);
  }
  function finalizeNavigation(toLocation, from, isPush, replace2, data2) {
    const error = checkCanceledNavigation(toLocation, from);
    if (error)
      return error;
    const isFirstNavigation = from === START_LOCATION_NORMALIZED;
    const state = !isBrowser ? {} : history.state;
    if (isPush) {
      if (replace2 || isFirstNavigation)
        routerHistory.replace(toLocation.fullPath, assign$1({
          scroll: isFirstNavigation && state && state.scroll
        }, data2));
      else
        routerHistory.push(toLocation.fullPath, data2);
    }
    currentRoute.value = toLocation;
    handleScroll(toLocation, from, isPush, isFirstNavigation);
    markAsReady();
  }
  let removeHistoryListener;
  function setupListeners() {
    if (removeHistoryListener)
      return;
    removeHistoryListener = routerHistory.listen((to, _from, info) => {
      if (!router2.listening)
        return;
      const toLocation = resolve2(to);
      const shouldRedirect = handleRedirectRecord(toLocation);
      if (shouldRedirect) {
        pushWithRedirect(assign$1(shouldRedirect, { replace: true }), toLocation).catch(noop$1);
        return;
      }
      pendingLocation = toLocation;
      const from = currentRoute.value;
      if (isBrowser) {
        saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
      }
      navigate(toLocation, from).catch((error) => {
        if (isNavigationFailure(error, 4 | 8)) {
          return error;
        }
        if (isNavigationFailure(error, 2)) {
          pushWithRedirect(
            error.to,
            toLocation
          ).then((failure) => {
            if (isNavigationFailure(failure, 4 | 16) && !info.delta && info.type === NavigationType.pop) {
              routerHistory.go(-1, false);
            }
          }).catch(noop$1);
          return Promise.reject();
        }
        if (info.delta) {
          routerHistory.go(-info.delta, false);
        }
        return triggerError(error, toLocation, from);
      }).then((failure) => {
        failure = failure || finalizeNavigation(
          toLocation,
          from,
          false
        );
        if (failure) {
          if (info.delta && !isNavigationFailure(failure, 8)) {
            routerHistory.go(-info.delta, false);
          } else if (info.type === NavigationType.pop && isNavigationFailure(failure, 4 | 16)) {
            routerHistory.go(-1, false);
          }
        }
        triggerAfterEach(toLocation, from, failure);
      }).catch(noop$1);
    });
  }
  let readyHandlers = useCallbacks();
  let errorHandlers = useCallbacks();
  let ready;
  function triggerError(error, to, from) {
    markAsReady(error);
    const list = errorHandlers.list();
    if (list.length) {
      list.forEach((handler) => handler(error, to, from));
    } else {
      console.error(error);
    }
    return Promise.reject(error);
  }
  function isReady() {
    if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
      return Promise.resolve();
    return new Promise((resolve3, reject) => {
      readyHandlers.add([resolve3, reject]);
    });
  }
  function markAsReady(err) {
    if (!ready) {
      ready = !err;
      setupListeners();
      readyHandlers.list().forEach(([resolve3, reject]) => err ? reject(err) : resolve3());
      readyHandlers.reset();
    }
    return err;
  }
  function handleScroll(to, from, isPush, isFirstNavigation) {
    const { scrollBehavior } = options;
    if (!isBrowser || !scrollBehavior)
      return Promise.resolve();
    const scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
    return nextTick().then(() => scrollBehavior(to, from, scrollPosition)).then((position) => position && scrollToPosition(position)).catch((err) => triggerError(err, to, from));
  }
  const go = (delta) => routerHistory.go(delta);
  let started;
  const installedApps = /* @__PURE__ */ new Set();
  const router2 = {
    currentRoute,
    listening: true,
    addRoute,
    removeRoute,
    hasRoute,
    getRoutes,
    resolve: resolve2,
    options,
    push,
    replace,
    go,
    back: () => go(-1),
    forward: () => go(1),
    beforeEach: beforeGuards.add,
    beforeResolve: beforeResolveGuards.add,
    afterEach: afterGuards.add,
    onError: errorHandlers.add,
    isReady,
    install(app2) {
      const router3 = this;
      app2.component("RouterLink", RouterLink);
      app2.component("RouterView", RouterView);
      app2.config.globalProperties.$router = router3;
      Object.defineProperty(app2.config.globalProperties, "$route", {
        enumerable: true,
        get: () => unref(currentRoute)
      });
      if (isBrowser && !started && currentRoute.value === START_LOCATION_NORMALIZED) {
        started = true;
        push(routerHistory.location).catch((err) => {
        });
      }
      const reactiveRoute = {};
      for (const key in START_LOCATION_NORMALIZED) {
        reactiveRoute[key] = computed(() => currentRoute.value[key]);
      }
      app2.provide(routerKey, router3);
      app2.provide(routeLocationKey, reactive(reactiveRoute));
      app2.provide(routerViewLocationKey, currentRoute);
      const unmountApp = app2.unmount;
      installedApps.add(app2);
      app2.unmount = function() {
        installedApps.delete(app2);
        if (installedApps.size < 1) {
          pendingLocation = START_LOCATION_NORMALIZED;
          removeHistoryListener && removeHistoryListener();
          removeHistoryListener = null;
          currentRoute.value = START_LOCATION_NORMALIZED;
          started = false;
          ready = false;
        }
        unmountApp();
      };
    }
  };
  return router2;
}
function runGuardQueue(guards) {
  return guards.reduce((promise, guard) => promise.then(() => guard()), Promise.resolve());
}
function extractChangingRecords(to, from) {
  const leavingRecords = [];
  const updatingRecords = [];
  const enteringRecords = [];
  const len = Math.max(from.matched.length, to.matched.length);
  for (let i = 0; i < len; i++) {
    const recordFrom = from.matched[i];
    if (recordFrom) {
      if (to.matched.find((record) => isSameRouteRecord(record, recordFrom)))
        updatingRecords.push(recordFrom);
      else
        leavingRecords.push(recordFrom);
    }
    const recordTo = to.matched[i];
    if (recordTo) {
      if (!from.matched.find((record) => isSameRouteRecord(record, recordTo))) {
        enteringRecords.push(recordTo);
      }
    }
  }
  return [leavingRecords, updatingRecords, enteringRecords];
}
function useRouter() {
  return inject(routerKey);
}
function useRoute() {
  return inject(routeLocationKey);
}
const routes = [
  { path: "/", redirect: "/index" },
  {
    path: "/index",
    name: "index",
    component: () => __vitePreload(() => import("./index.f7dc2d56.js"), true ? ["index.f7dc2d56.js","index.da13b2c2.css","MvList.83b39a2e.js","MvList.d978afb4.css","el-skeleton-item.6c4ecba9.js","el-skeleton-item.7949890f.css","PlayList.967870c1.js","PlayList.dc3e2eea.css"] : void 0, import.meta.url)
  },
  {
    path: "/rank",
    name: "rank",
    component: () => __vitePreload(() => import("./index.34ac6e9a.js"), true ? ["index.34ac6e9a.js","index.42c6d42e.css","Loading.3cd2f3f0.js","Loading.08275444.css"] : void 0, import.meta.url)
  },
  {
    path: "/playlist",
    name: "playlist",
    component: () => __vitePreload(() => import("./index.b735198d.js"), true ? ["index.b735198d.js","index.73e320d2.css","el-infinite-scroll.547055f1.js","Loading.3cd2f3f0.js","Loading.08275444.css","PlayList.967870c1.js","PlayList.dc3e2eea.css","el-skeleton-item.6c4ecba9.js","el-skeleton-item.7949890f.css"] : void 0, import.meta.url)
  },
  {
    path: "/playlist/detail",
    name: "playlistdetail",
    component: () => __vitePreload(() => import("./Detail.85f68103.js"), true ? ["Detail.85f68103.js","Detail.e9704bf0.css","Loading.3cd2f3f0.js","Loading.08275444.css"] : void 0, import.meta.url)
  },
  {
    path: "/song",
    name: "song",
    component: () => __vitePreload(() => import("./index.08d80a6c.js"), true ? ["index.08d80a6c.js","index.47c867d7.css"] : void 0, import.meta.url)
  },
  {
    path: "/album",
    name: "album",
    component: () => __vitePreload(() => import("./index.0c815188.js"), true ? ["index.0c815188.js","index.68099d10.css"] : void 0, import.meta.url)
  },
  {
    path: "/artist",
    name: "artist",
    component: () => __vitePreload(() => import("./index.5c862e40.js"), true ? ["index.5c862e40.js","index.8a898976.css","el-affix.574a5735.js","el-affix.44c48072.css","Loading.3cd2f3f0.js","Loading.08275444.css"] : void 0, import.meta.url)
  },
  {
    path: "/mvlist",
    name: "mvlist",
    component: () => __vitePreload(() => import("./index.9baa38e9.js"), true ? ["index.9baa38e9.js","index.88eebaaf.css","el-infinite-scroll.547055f1.js","el-affix.574a5735.js","el-affix.44c48072.css","Loading.3cd2f3f0.js","Loading.08275444.css","MvList.83b39a2e.js","MvList.d978afb4.css","el-skeleton-item.6c4ecba9.js","el-skeleton-item.7949890f.css"] : void 0, import.meta.url)
  },
  {
    path: "/mvlist/mv",
    name: "mv",
    component: () => __vitePreload(() => import("./Detail.64bff28a.js"), true ? ["Detail.64bff28a.js","Detail.fd3e3268.css"] : void 0, import.meta.url)
  }
];
const router$1 = createRouter({
  history: createWebHistory(),
  routes
});
/*!
  * pinia v2.0.17
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
let activePinia;
const setActivePinia = (pinia) => activePinia = pinia;
const piniaSymbol = Symbol();
function isPlainObject$1(o) {
  return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
}
var MutationType;
(function(MutationType2) {
  MutationType2["direct"] = "direct";
  MutationType2["patchObject"] = "patch object";
  MutationType2["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
function createPinia() {
  const scope = effectScope(true);
  const state = scope.run(() => ref({}));
  let _p = [];
  let toBeInstalled = [];
  const pinia = markRaw({
    install(app2) {
      setActivePinia(pinia);
      {
        pinia._a = app2;
        app2.provide(piniaSymbol, pinia);
        app2.config.globalProperties.$pinia = pinia;
        toBeInstalled.forEach((plugin) => _p.push(plugin));
        toBeInstalled = [];
      }
    },
    use(plugin) {
      if (!this._a && !isVue2) {
        toBeInstalled.push(plugin);
      } else {
        _p.push(plugin);
      }
      return this;
    },
    _p,
    _a: null,
    _e: scope,
    _s: /* @__PURE__ */ new Map(),
    state
  });
  return pinia;
}
const noop = () => {
};
function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
  subscriptions.push(callback);
  const removeSubscription = () => {
    const idx = subscriptions.indexOf(callback);
    if (idx > -1) {
      subscriptions.splice(idx, 1);
      onCleanup();
    }
  };
  if (!detached && getCurrentInstance()) {
    onUnmounted(removeSubscription);
  }
  return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
  subscriptions.slice().forEach((callback) => {
    callback(...args);
  });
}
function mergeReactiveObjects(target, patchToApply) {
  for (const key in patchToApply) {
    if (!patchToApply.hasOwnProperty(key))
      continue;
    const subPatch = patchToApply[key];
    const targetValue = target[key];
    if (isPlainObject$1(targetValue) && isPlainObject$1(subPatch) && target.hasOwnProperty(key) && !isRef(subPatch) && !isReactive(subPatch)) {
      target[key] = mergeReactiveObjects(targetValue, subPatch);
    } else {
      target[key] = subPatch;
    }
  }
  return target;
}
const skipHydrateSymbol = Symbol();
function shouldHydrate(obj) {
  return !isPlainObject$1(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
}
const { assign } = Object;
function isComputed(o) {
  return !!(isRef(o) && o.effect);
}
function createOptionsStore(id, options, pinia, hot) {
  const { state, actions, getters } = options;
  const initialState = pinia.state.value[id];
  let store;
  function setup() {
    if (!initialState && true) {
      {
        pinia.state.value[id] = state ? state() : {};
      }
    }
    const localState = toRefs(pinia.state.value[id]);
    return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
      computedGetters[name] = markRaw(computed(() => {
        setActivePinia(pinia);
        const store2 = pinia._s.get(id);
        return getters[name].call(store2, store2);
      }));
      return computedGetters;
    }, {}));
  }
  store = createSetupStore(id, setup, options, pinia, hot, true);
  store.$reset = function $reset() {
    const newState = state ? state() : {};
    this.$patch(($state) => {
      assign($state, newState);
    });
  };
  return store;
}
function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
  let scope;
  const optionsForPlugin = assign({ actions: {} }, options);
  const $subscribeOptions = {
    deep: true
  };
  let isListening;
  let isSyncListening;
  let subscriptions = markRaw([]);
  let actionSubscriptions = markRaw([]);
  let debuggerEvents;
  const initialState = pinia.state.value[$id];
  if (!isOptionsStore && !initialState && true) {
    {
      pinia.state.value[$id] = {};
    }
  }
  ref({});
  let activeListener;
  function $patch(partialStateOrMutator) {
    let subscriptionMutation;
    isListening = isSyncListening = false;
    if (typeof partialStateOrMutator === "function") {
      partialStateOrMutator(pinia.state.value[$id]);
      subscriptionMutation = {
        type: MutationType.patchFunction,
        storeId: $id,
        events: debuggerEvents
      };
    } else {
      mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
      subscriptionMutation = {
        type: MutationType.patchObject,
        payload: partialStateOrMutator,
        storeId: $id,
        events: debuggerEvents
      };
    }
    const myListenerId = activeListener = Symbol();
    nextTick().then(() => {
      if (activeListener === myListenerId) {
        isListening = true;
      }
    });
    isSyncListening = true;
    triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
  }
  const $reset = noop;
  function $dispose() {
    scope.stop();
    subscriptions = [];
    actionSubscriptions = [];
    pinia._s.delete($id);
  }
  function wrapAction(name, action) {
    return function() {
      setActivePinia(pinia);
      const args = Array.from(arguments);
      const afterCallbackList = [];
      const onErrorCallbackList = [];
      function after(callback) {
        afterCallbackList.push(callback);
      }
      function onError(callback) {
        onErrorCallbackList.push(callback);
      }
      triggerSubscriptions(actionSubscriptions, {
        args,
        name,
        store,
        after,
        onError
      });
      let ret;
      try {
        ret = action.apply(this && this.$id === $id ? this : store, args);
      } catch (error) {
        triggerSubscriptions(onErrorCallbackList, error);
        throw error;
      }
      if (ret instanceof Promise) {
        return ret.then((value) => {
          triggerSubscriptions(afterCallbackList, value);
          return value;
        }).catch((error) => {
          triggerSubscriptions(onErrorCallbackList, error);
          return Promise.reject(error);
        });
      }
      triggerSubscriptions(afterCallbackList, ret);
      return ret;
    };
  }
  const partialStore = {
    _p: pinia,
    $id,
    $onAction: addSubscription.bind(null, actionSubscriptions),
    $patch,
    $reset,
    $subscribe(callback, options2 = {}) {
      const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
      const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
        if (options2.flush === "sync" ? isSyncListening : isListening) {
          callback({
            storeId: $id,
            type: MutationType.direct,
            events: debuggerEvents
          }, state);
        }
      }, assign({}, $subscribeOptions, options2)));
      return removeSubscription;
    },
    $dispose
  };
  const store = reactive(assign(
    {},
    partialStore
  ));
  pinia._s.set($id, store);
  const setupStore = pinia._e.run(() => {
    scope = effectScope();
    return scope.run(() => setup());
  });
  for (const key in setupStore) {
    const prop = setupStore[key];
    if (isRef(prop) && !isComputed(prop) || isReactive(prop)) {
      if (!isOptionsStore) {
        if (initialState && shouldHydrate(prop)) {
          if (isRef(prop)) {
            prop.value = initialState[key];
          } else {
            mergeReactiveObjects(prop, initialState[key]);
          }
        }
        {
          pinia.state.value[$id][key] = prop;
        }
      }
    } else if (typeof prop === "function") {
      const actionValue = wrapAction(key, prop);
      {
        setupStore[key] = actionValue;
      }
      optionsForPlugin.actions[key] = prop;
    } else
      ;
  }
  {
    assign(store, setupStore);
    assign(toRaw(store), setupStore);
  }
  Object.defineProperty(store, "$state", {
    get: () => pinia.state.value[$id],
    set: (state) => {
      $patch(($state) => {
        assign($state, state);
      });
    }
  });
  pinia._p.forEach((extender) => {
    {
      assign(store, scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      })));
    }
  });
  if (initialState && isOptionsStore && options.hydrate) {
    options.hydrate(store.$state, initialState);
  }
  isListening = true;
  isSyncListening = true;
  return store;
}
function defineStore(idOrOptions, setup, setupOptions) {
  let id;
  let options;
  const isSetupStore = typeof setup === "function";
  if (typeof idOrOptions === "string") {
    id = idOrOptions;
    options = isSetupStore ? setupOptions : setup;
  } else {
    options = idOrOptions;
    id = idOrOptions.id;
  }
  function useStore2(pinia, hot) {
    const currentInstance2 = getCurrentInstance();
    pinia = pinia || currentInstance2 && inject(piniaSymbol);
    if (pinia)
      setActivePinia(pinia);
    pinia = activePinia;
    if (!pinia._s.has(id)) {
      if (isSetupStore) {
        createSetupStore(id, setup, options, pinia);
      } else {
        createOptionsStore(id, options, pinia);
      }
    }
    const store = pinia._s.get(id);
    return store;
  }
  useStore2.$id = id;
  return useStore2;
}
var axios$3 = { exports: {} };
var axios$2 = { exports: {} };
var bind$2 = function bind(fn2, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn2.apply(thisArg, args);
  };
};
var bind$1 = bind$2;
var toString = Object.prototype.toString;
var kindOf = function(cache2) {
  return function(thing) {
    var str = toString.call(thing);
    return cache2[str] || (cache2[str] = str.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function kindOfTest(type4) {
  type4 = type4.toLowerCase();
  return function isKindOf(thing) {
    return kindOf(thing) === type4;
  };
}
function isArray(val) {
  return Array.isArray(val);
}
function isUndefined(val) {
  return typeof val === "undefined";
}
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
}
var isArrayBuffer = kindOfTest("ArrayBuffer");
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}
function isString(val) {
  return typeof val === "string";
}
function isNumber(val) {
  return typeof val === "number";
}
function isObject(val) {
  return val !== null && typeof val === "object";
}
function isPlainObject(val) {
  if (kindOf(val) !== "object") {
    return false;
  }
  var prototype2 = Object.getPrototypeOf(val);
  return prototype2 === null || prototype2 === Object.prototype;
}
var isDate = kindOfTest("Date");
var isFile = kindOfTest("File");
var isBlob = kindOfTest("Blob");
var isFileList = kindOfTest("FileList");
function isFunction(val) {
  return toString.call(val) === "[object Function]";
}
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}
function isFormData(thing) {
  var pattern4 = "[object FormData]";
  return thing && (typeof FormData === "function" && thing instanceof FormData || toString.call(thing) === pattern4 || isFunction(thing.toString) && thing.toString() === pattern4);
}
var isURLSearchParams = kindOfTest("URLSearchParams");
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
}
function isStandardBrowserEnv() {
  if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
    return false;
  }
  return typeof window !== "undefined" && typeof document !== "undefined";
}
function forEach(obj, fn2) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      fn2.call(null, obj[i], i, obj);
    }
  } else {
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn2.call(null, obj[key], key, obj);
      }
    }
  }
}
function merge() {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }
  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === "function") {
      a[key] = bind$1(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}
function stripBOM(content) {
  if (content.charCodeAt(0) === 65279) {
    content = content.slice(1);
  }
  return content;
}
function inherits(constructor, superConstructor, props, descriptors2) {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
  constructor.prototype.constructor = constructor;
  props && Object.assign(constructor.prototype, props);
}
function toFlatObject(sourceObj, destObj, filter) {
  var props;
  var i;
  var prop;
  var merged = {};
  destObj = destObj || {};
  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if (!merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = Object.getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
}
function endsWith(str, searchString, position) {
  str = String(str);
  if (position === void 0 || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  var lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
}
function toArray(thing) {
  if (!thing)
    return null;
  var i = thing.length;
  if (isUndefined(i))
    return null;
  var arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
}
var isTypedArray = function(TypedArray) {
  return function(thing) {
    return TypedArray && thing instanceof TypedArray;
  };
}(typeof Uint8Array !== "undefined" && Object.getPrototypeOf(Uint8Array));
var utils$b = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isFunction,
  isStream,
  isURLSearchParams,
  isStandardBrowserEnv,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  isTypedArray,
  isFileList
};
var utils$a = utils$b;
function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var buildURL$1 = function buildURL(url2, params, paramsSerializer) {
  if (!params) {
    return url2;
  }
  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils$a.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];
    utils$a.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === "undefined") {
        return;
      }
      if (utils$a.isArray(val)) {
        key = key + "[]";
      } else {
        val = [val];
      }
      utils$a.forEach(val, function parseValue(v) {
        if (utils$a.isDate(v)) {
          v = v.toISOString();
        } else if (utils$a.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + "=" + encode(v));
      });
    });
    serializedParams = parts.join("&");
  }
  if (serializedParams) {
    var hashmarkIndex = url2.indexOf("#");
    if (hashmarkIndex !== -1) {
      url2 = url2.slice(0, hashmarkIndex);
    }
    url2 += (url2.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url2;
};
var utils$9 = utils$b;
function InterceptorManager$1() {
  this.handlers = [];
}
InterceptorManager$1.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled,
    rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};
InterceptorManager$1.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};
InterceptorManager$1.prototype.forEach = function forEach2(fn2) {
  utils$9.forEach(this.handlers, function forEachHandler(h2) {
    if (h2 !== null) {
      fn2(h2);
    }
  });
};
var InterceptorManager_1 = InterceptorManager$1;
var utils$8 = utils$b;
var normalizeHeaderName$1 = function normalizeHeaderName(headers, normalizedName) {
  utils$8.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};
var utils$7 = utils$b;
function AxiosError$2(message2, code, config, request2, response) {
  Error.call(this);
  this.message = message2;
  this.name = "AxiosError";
  code && (this.code = code);
  config && (this.config = config);
  request2 && (this.request = request2);
  response && (this.response = response);
}
utils$7.inherits(AxiosError$2, Error, {
  toJSON: function toJSON() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
var prototype = AxiosError$2.prototype;
var descriptors = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED"
].forEach(function(code) {
  descriptors[code] = { value: code };
});
Object.defineProperties(AxiosError$2, descriptors);
Object.defineProperty(prototype, "isAxiosError", { value: true });
AxiosError$2.from = function(error, code, config, request2, response, customProps) {
  var axiosError = Object.create(prototype);
  utils$7.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  });
  AxiosError$2.call(axiosError, error.message, code, config, request2, response);
  axiosError.name = error.name;
  customProps && Object.assign(axiosError, customProps);
  return axiosError;
};
var AxiosError_1 = AxiosError$2;
var transitional = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};
var utils$6 = utils$b;
function toFormData$1(obj, formData) {
  formData = formData || new FormData();
  var stack2 = [];
  function convertValue(value) {
    if (value === null)
      return "";
    if (utils$6.isDate(value)) {
      return value.toISOString();
    }
    if (utils$6.isArrayBuffer(value) || utils$6.isTypedArray(value)) {
      return typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
    }
    return value;
  }
  function build(data2, parentKey) {
    if (utils$6.isPlainObject(data2) || utils$6.isArray(data2)) {
      if (stack2.indexOf(data2) !== -1) {
        throw Error("Circular reference detected in " + parentKey);
      }
      stack2.push(data2);
      utils$6.forEach(data2, function each(value, key) {
        if (utils$6.isUndefined(value))
          return;
        var fullKey = parentKey ? parentKey + "." + key : key;
        var arr;
        if (value && !parentKey && typeof value === "object") {
          if (utils$6.endsWith(key, "{}")) {
            value = JSON.stringify(value);
          } else if (utils$6.endsWith(key, "[]") && (arr = utils$6.toArray(value))) {
            arr.forEach(function(el) {
              !utils$6.isUndefined(el) && formData.append(fullKey, convertValue(el));
            });
            return;
          }
        }
        build(value, fullKey);
      });
      stack2.pop();
    } else {
      formData.append(parentKey, convertValue(data2));
    }
  }
  build(obj);
  return formData;
}
var toFormData_1 = toFormData$1;
var settle;
var hasRequiredSettle;
function requireSettle() {
  if (hasRequiredSettle)
    return settle;
  hasRequiredSettle = 1;
  var AxiosError2 = AxiosError_1;
  settle = function settle2(resolve2, reject, response) {
    var validateStatus2 = response.config.validateStatus;
    if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
      resolve2(response);
    } else {
      reject(new AxiosError2(
        "Request failed with status code " + response.status,
        [AxiosError2.ERR_BAD_REQUEST, AxiosError2.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
        response.config,
        response.request,
        response
      ));
    }
  };
  return settle;
}
var cookies;
var hasRequiredCookies;
function requireCookies() {
  if (hasRequiredCookies)
    return cookies;
  hasRequiredCookies = 1;
  var utils2 = utils$b;
  cookies = utils2.isStandardBrowserEnv() ? function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + "=" + encodeURIComponent(value));
        if (utils2.isNumber(expires)) {
          cookie.push("expires=" + new Date(expires).toGMTString());
        }
        if (utils2.isString(path)) {
          cookie.push("path=" + path);
        }
        if (utils2.isString(domain)) {
          cookie.push("domain=" + domain);
        }
        if (secure === true) {
          cookie.push("secure");
        }
        document.cookie = cookie.join("; ");
      },
      read: function read(name) {
        var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
        return match ? decodeURIComponent(match[3]) : null;
      },
      remove: function remove2(name) {
        this.write(name, "", Date.now() - 864e5);
      }
    };
  }() : function nonStandardBrowserEnv() {
    return {
      write: function write() {
      },
      read: function read() {
        return null;
      },
      remove: function remove2() {
      }
    };
  }();
  return cookies;
}
var isAbsoluteURL$1 = function isAbsoluteURL(url2) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url2);
};
var combineURLs$1 = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
};
var isAbsoluteURL2 = isAbsoluteURL$1;
var combineURLs2 = combineURLs$1;
var buildFullPath$1 = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL2(requestedURL)) {
    return combineURLs2(baseURL, requestedURL);
  }
  return requestedURL;
};
var parseHeaders;
var hasRequiredParseHeaders;
function requireParseHeaders() {
  if (hasRequiredParseHeaders)
    return parseHeaders;
  hasRequiredParseHeaders = 1;
  var utils2 = utils$b;
  var ignoreDuplicateOf = [
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ];
  parseHeaders = function parseHeaders2(headers) {
    var parsed = {};
    var key;
    var val;
    var i;
    if (!headers) {
      return parsed;
    }
    utils2.forEach(headers.split("\n"), function parser(line) {
      i = line.indexOf(":");
      key = utils2.trim(line.substr(0, i)).toLowerCase();
      val = utils2.trim(line.substr(i + 1));
      if (key) {
        if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
          return;
        }
        if (key === "set-cookie") {
          parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
        } else {
          parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
        }
      }
    });
    return parsed;
  };
  return parseHeaders;
}
var isURLSameOrigin;
var hasRequiredIsURLSameOrigin;
function requireIsURLSameOrigin() {
  if (hasRequiredIsURLSameOrigin)
    return isURLSameOrigin;
  hasRequiredIsURLSameOrigin = 1;
  var utils2 = utils$b;
  isURLSameOrigin = utils2.isStandardBrowserEnv() ? function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement("a");
    var originURL;
    function resolveURL(url2) {
      var href = url2;
      if (msie) {
        urlParsingNode.setAttribute("href", href);
        href = urlParsingNode.href;
      }
      urlParsingNode.setAttribute("href", href);
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
      };
    }
    originURL = resolveURL(window.location.href);
    return function isURLSameOrigin2(requestURL) {
      var parsed = utils2.isString(requestURL) ? resolveURL(requestURL) : requestURL;
      return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
  }() : function nonStandardBrowserEnv() {
    return function isURLSameOrigin2() {
      return true;
    };
  }();
  return isURLSameOrigin;
}
var CanceledError_1;
var hasRequiredCanceledError;
function requireCanceledError() {
  if (hasRequiredCanceledError)
    return CanceledError_1;
  hasRequiredCanceledError = 1;
  var AxiosError2 = AxiosError_1;
  var utils2 = utils$b;
  function CanceledError2(message2) {
    AxiosError2.call(this, message2 == null ? "canceled" : message2, AxiosError2.ERR_CANCELED);
    this.name = "CanceledError";
  }
  utils2.inherits(CanceledError2, AxiosError2, {
    __CANCEL__: true
  });
  CanceledError_1 = CanceledError2;
  return CanceledError_1;
}
var parseProtocol;
var hasRequiredParseProtocol;
function requireParseProtocol() {
  if (hasRequiredParseProtocol)
    return parseProtocol;
  hasRequiredParseProtocol = 1;
  parseProtocol = function parseProtocol2(url2) {
    var match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url2);
    return match && match[1] || "";
  };
  return parseProtocol;
}
var xhr;
var hasRequiredXhr;
function requireXhr() {
  if (hasRequiredXhr)
    return xhr;
  hasRequiredXhr = 1;
  var utils2 = utils$b;
  var settle2 = requireSettle();
  var cookies2 = requireCookies();
  var buildURL3 = buildURL$1;
  var buildFullPath3 = buildFullPath$1;
  var parseHeaders2 = requireParseHeaders();
  var isURLSameOrigin2 = requireIsURLSameOrigin();
  var transitionalDefaults2 = transitional;
  var AxiosError2 = AxiosError_1;
  var CanceledError2 = requireCanceledError();
  var parseProtocol2 = requireParseProtocol();
  xhr = function xhrAdapter(config) {
    return new Promise(function dispatchXhrRequest(resolve2, reject) {
      var requestData = config.data;
      var requestHeaders = config.headers;
      var responseType = config.responseType;
      var onCanceled;
      function done() {
        if (config.cancelToken) {
          config.cancelToken.unsubscribe(onCanceled);
        }
        if (config.signal) {
          config.signal.removeEventListener("abort", onCanceled);
        }
      }
      if (utils2.isFormData(requestData) && utils2.isStandardBrowserEnv()) {
        delete requestHeaders["Content-Type"];
      }
      var request2 = new XMLHttpRequest();
      if (config.auth) {
        var username = config.auth.username || "";
        var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
        requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
      }
      var fullPath = buildFullPath3(config.baseURL, config.url);
      request2.open(config.method.toUpperCase(), buildURL3(fullPath, config.params, config.paramsSerializer), true);
      request2.timeout = config.timeout;
      function onloadend() {
        if (!request2) {
          return;
        }
        var responseHeaders = "getAllResponseHeaders" in request2 ? parseHeaders2(request2.getAllResponseHeaders()) : null;
        var responseData = !responseType || responseType === "text" || responseType === "json" ? request2.responseText : request2.response;
        var response = {
          data: responseData,
          status: request2.status,
          statusText: request2.statusText,
          headers: responseHeaders,
          config,
          request: request2
        };
        settle2(function _resolve(value) {
          resolve2(value);
          done();
        }, function _reject(err) {
          reject(err);
          done();
        }, response);
        request2 = null;
      }
      if ("onloadend" in request2) {
        request2.onloadend = onloadend;
      } else {
        request2.onreadystatechange = function handleLoad() {
          if (!request2 || request2.readyState !== 4) {
            return;
          }
          if (request2.status === 0 && !(request2.responseURL && request2.responseURL.indexOf("file:") === 0)) {
            return;
          }
          setTimeout(onloadend);
        };
      }
      request2.onabort = function handleAbort() {
        if (!request2) {
          return;
        }
        reject(new AxiosError2("Request aborted", AxiosError2.ECONNABORTED, config, request2));
        request2 = null;
      };
      request2.onerror = function handleError2() {
        reject(new AxiosError2("Network Error", AxiosError2.ERR_NETWORK, config, request2, request2));
        request2 = null;
      };
      request2.ontimeout = function handleTimeout() {
        var timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
        var transitional3 = config.transitional || transitionalDefaults2;
        if (config.timeoutErrorMessage) {
          timeoutErrorMessage = config.timeoutErrorMessage;
        }
        reject(new AxiosError2(
          timeoutErrorMessage,
          transitional3.clarifyTimeoutError ? AxiosError2.ETIMEDOUT : AxiosError2.ECONNABORTED,
          config,
          request2
        ));
        request2 = null;
      };
      if (utils2.isStandardBrowserEnv()) {
        var xsrfValue = (config.withCredentials || isURLSameOrigin2(fullPath)) && config.xsrfCookieName ? cookies2.read(config.xsrfCookieName) : void 0;
        if (xsrfValue) {
          requestHeaders[config.xsrfHeaderName] = xsrfValue;
        }
      }
      if ("setRequestHeader" in request2) {
        utils2.forEach(requestHeaders, function setRequestHeader(val, key) {
          if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
            delete requestHeaders[key];
          } else {
            request2.setRequestHeader(key, val);
          }
        });
      }
      if (!utils2.isUndefined(config.withCredentials)) {
        request2.withCredentials = !!config.withCredentials;
      }
      if (responseType && responseType !== "json") {
        request2.responseType = config.responseType;
      }
      if (typeof config.onDownloadProgress === "function") {
        request2.addEventListener("progress", config.onDownloadProgress);
      }
      if (typeof config.onUploadProgress === "function" && request2.upload) {
        request2.upload.addEventListener("progress", config.onUploadProgress);
      }
      if (config.cancelToken || config.signal) {
        onCanceled = function(cancel) {
          if (!request2) {
            return;
          }
          reject(!cancel || cancel && cancel.type ? new CanceledError2() : cancel);
          request2.abort();
          request2 = null;
        };
        config.cancelToken && config.cancelToken.subscribe(onCanceled);
        if (config.signal) {
          config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
        }
      }
      if (!requestData) {
        requestData = null;
      }
      var protocol = parseProtocol2(fullPath);
      if (protocol && ["http", "https", "file"].indexOf(protocol) === -1) {
        reject(new AxiosError2("Unsupported protocol " + protocol + ":", AxiosError2.ERR_BAD_REQUEST, config));
        return;
      }
      request2.send(requestData);
    });
  };
  return xhr;
}
var _null;
var hasRequired_null;
function require_null() {
  if (hasRequired_null)
    return _null;
  hasRequired_null = 1;
  _null = null;
  return _null;
}
var utils$5 = utils$b;
var normalizeHeaderName2 = normalizeHeaderName$1;
var AxiosError$1 = AxiosError_1;
var transitionalDefaults = transitional;
var toFormData = toFormData_1;
var DEFAULT_CONTENT_TYPE = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function setContentTypeIfUnset(headers, value) {
  if (!utils$5.isUndefined(headers) && utils$5.isUndefined(headers["Content-Type"])) {
    headers["Content-Type"] = value;
  }
}
function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== "undefined") {
    adapter = requireXhr();
  } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
    adapter = requireXhr();
  }
  return adapter;
}
function stringifySafely(rawValue, parser, encoder) {
  if (utils$5.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$5.trim(rawValue);
    } catch (e) {
      if (e.name !== "SyntaxError") {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
var defaults$3 = {
  transitional: transitionalDefaults,
  adapter: getDefaultAdapter(),
  transformRequest: [function transformRequest(data2, headers) {
    normalizeHeaderName2(headers, "Accept");
    normalizeHeaderName2(headers, "Content-Type");
    if (utils$5.isFormData(data2) || utils$5.isArrayBuffer(data2) || utils$5.isBuffer(data2) || utils$5.isStream(data2) || utils$5.isFile(data2) || utils$5.isBlob(data2)) {
      return data2;
    }
    if (utils$5.isArrayBufferView(data2)) {
      return data2.buffer;
    }
    if (utils$5.isURLSearchParams(data2)) {
      setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
      return data2.toString();
    }
    var isObjectPayload = utils$5.isObject(data2);
    var contentType = headers && headers["Content-Type"];
    var isFileList2;
    if ((isFileList2 = utils$5.isFileList(data2)) || isObjectPayload && contentType === "multipart/form-data") {
      var _FormData = this.env && this.env.FormData;
      return toFormData(isFileList2 ? { "files[]": data2 } : data2, _FormData && new _FormData());
    } else if (isObjectPayload || contentType === "application/json") {
      setContentTypeIfUnset(headers, "application/json");
      return stringifySafely(data2);
    }
    return data2;
  }],
  transformResponse: [function transformResponse(data2) {
    var transitional3 = this.transitional || defaults$3.transitional;
    var silentJSONParsing = transitional3 && transitional3.silentJSONParsing;
    var forcedJSONParsing = transitional3 && transitional3.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
    if (strictJSONParsing || forcedJSONParsing && utils$5.isString(data2) && data2.length) {
      try {
        return JSON.parse(data2);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === "SyntaxError") {
            throw AxiosError$1.from(e, AxiosError$1.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }
    return data2;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: require_null()
  },
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      "Accept": "application/json, text/plain, */*"
    }
  }
};
utils$5.forEach(["delete", "get", "head"], function forEachMethodNoData(method4) {
  defaults$3.headers[method4] = {};
});
utils$5.forEach(["post", "put", "patch"], function forEachMethodWithData(method4) {
  defaults$3.headers[method4] = utils$5.merge(DEFAULT_CONTENT_TYPE);
});
var defaults_1 = defaults$3;
var utils$4 = utils$b;
var defaults$2 = defaults_1;
var transformData$1 = function transformData(data2, headers, fns) {
  var context = this || defaults$2;
  utils$4.forEach(fns, function transform(fn2) {
    data2 = fn2.call(context, data2, headers);
  });
  return data2;
};
var isCancel$1;
var hasRequiredIsCancel;
function requireIsCancel() {
  if (hasRequiredIsCancel)
    return isCancel$1;
  hasRequiredIsCancel = 1;
  isCancel$1 = function isCancel2(value) {
    return !!(value && value.__CANCEL__);
  };
  return isCancel$1;
}
var utils$3 = utils$b;
var transformData2 = transformData$1;
var isCancel = requireIsCancel();
var defaults$1 = defaults_1;
var CanceledError = requireCanceledError();
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
  if (config.signal && config.signal.aborted) {
    throw new CanceledError();
  }
}
var dispatchRequest$1 = function dispatchRequest(config) {
  throwIfCancellationRequested(config);
  config.headers = config.headers || {};
  config.data = transformData2.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );
  config.headers = utils$3.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );
  utils$3.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function cleanHeaderConfig(method4) {
      delete config.headers[method4];
    }
  );
  var adapter = config.adapter || defaults$1.adapter;
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);
    response.data = transformData2.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);
      if (reason && reason.response) {
        reason.response.data = transformData2.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }
    return Promise.reject(reason);
  });
};
var utils$2 = utils$b;
var mergeConfig$2 = function mergeConfig(config1, config2) {
  config2 = config2 || {};
  var config = {};
  function getMergedValue(target, source) {
    if (utils$2.isPlainObject(target) && utils$2.isPlainObject(source)) {
      return utils$2.merge(target, source);
    } else if (utils$2.isPlainObject(source)) {
      return utils$2.merge({}, source);
    } else if (utils$2.isArray(source)) {
      return source.slice();
    }
    return source;
  }
  function mergeDeepProperties(prop) {
    if (!utils$2.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils$2.isUndefined(config1[prop])) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  function valueFromConfig2(prop) {
    if (!utils$2.isUndefined(config2[prop])) {
      return getMergedValue(void 0, config2[prop]);
    }
  }
  function defaultToConfig2(prop) {
    if (!utils$2.isUndefined(config2[prop])) {
      return getMergedValue(void 0, config2[prop]);
    } else if (!utils$2.isUndefined(config1[prop])) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  var mergeMap = {
    "url": valueFromConfig2,
    "method": valueFromConfig2,
    "data": valueFromConfig2,
    "baseURL": defaultToConfig2,
    "transformRequest": defaultToConfig2,
    "transformResponse": defaultToConfig2,
    "paramsSerializer": defaultToConfig2,
    "timeout": defaultToConfig2,
    "timeoutMessage": defaultToConfig2,
    "withCredentials": defaultToConfig2,
    "adapter": defaultToConfig2,
    "responseType": defaultToConfig2,
    "xsrfCookieName": defaultToConfig2,
    "xsrfHeaderName": defaultToConfig2,
    "onUploadProgress": defaultToConfig2,
    "onDownloadProgress": defaultToConfig2,
    "decompress": defaultToConfig2,
    "maxContentLength": defaultToConfig2,
    "maxBodyLength": defaultToConfig2,
    "beforeRedirect": defaultToConfig2,
    "transport": defaultToConfig2,
    "httpAgent": defaultToConfig2,
    "httpsAgent": defaultToConfig2,
    "cancelToken": defaultToConfig2,
    "socketPath": defaultToConfig2,
    "responseEncoding": defaultToConfig2,
    "validateStatus": mergeDirectKeys
  };
  utils$2.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge2 = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge2(prop);
    utils$2.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
  });
  return config;
};
var data;
var hasRequiredData;
function requireData() {
  if (hasRequiredData)
    return data;
  hasRequiredData = 1;
  data = {
    "version": "0.27.2"
  };
  return data;
}
var VERSION = requireData().version;
var AxiosError = AxiosError_1;
var validators$1 = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type4, i) {
  validators$1[type4] = function validator2(thing) {
    return typeof thing === type4 || "a" + (i < 1 ? "n " : " ") + type4;
  };
});
var deprecatedWarnings = {};
validators$1.transitional = function transitional2(validator2, version2, message2) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message2 ? ". " + message2 : "");
  }
  return function(value, opt, opts) {
    if (validator2 === false) {
      throw new AxiosError(
        formatMessage(opt, " has been removed" + (version2 ? " in " + version2 : "")),
        AxiosError.ERR_DEPRECATED
      );
    }
    if (version2 && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      console.warn(
        formatMessage(
          opt,
          " has been deprecated since v" + version2 + " and will be removed in the near future"
        )
      );
    }
    return validator2 ? validator2(value, opt, opts) : true;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== "object") {
    throw new AxiosError("options must be an object", AxiosError.ERR_BAD_OPTION_VALUE);
  }
  var keys2 = Object.keys(options);
  var i = keys2.length;
  while (i-- > 0) {
    var opt = keys2[i];
    var validator2 = schema[opt];
    if (validator2) {
      var value = options[opt];
      var result = value === void 0 || validator2(value, opt, options);
      if (result !== true) {
        throw new AxiosError("option " + opt + " must be " + result, AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError("Unknown option " + opt, AxiosError.ERR_BAD_OPTION);
    }
  }
}
var validator$1 = {
  assertOptions,
  validators: validators$1
};
var utils$1 = utils$b;
var buildURL2 = buildURL$1;
var InterceptorManager = InterceptorManager_1;
var dispatchRequest2 = dispatchRequest$1;
var mergeConfig$1 = mergeConfig$2;
var buildFullPath2 = buildFullPath$1;
var validator = validator$1;
var validators = validator.validators;
function Axios$1(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}
Axios$1.prototype.request = function request(configOrUrl, config) {
  if (typeof configOrUrl === "string") {
    config = config || {};
    config.url = configOrUrl;
  } else {
    config = configOrUrl || {};
  }
  config = mergeConfig$1(this.defaults, config);
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = "get";
  }
  var transitional3 = config.transitional;
  if (transitional3 !== void 0) {
    validator.assertOptions(transitional3, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
      return;
    }
    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });
  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });
  var promise;
  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest2, void 0];
    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);
    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }
    return promise;
  }
  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }
  try {
    promise = dispatchRequest2(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }
  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }
  return promise;
};
Axios$1.prototype.getUri = function getUri(config) {
  config = mergeConfig$1(this.defaults, config);
  var fullPath = buildFullPath2(config.baseURL, config.url);
  return buildURL2(fullPath, config.params, config.paramsSerializer);
};
utils$1.forEach(["delete", "get", "head", "options"], function forEachMethodNoData2(method4) {
  Axios$1.prototype[method4] = function(url2, config) {
    return this.request(mergeConfig$1(config || {}, {
      method: method4,
      url: url2,
      data: (config || {}).data
    }));
  };
});
utils$1.forEach(["post", "put", "patch"], function forEachMethodWithData2(method4) {
  function generateHTTPMethod(isForm) {
    return function httpMethod(url2, data2, config) {
      return this.request(mergeConfig$1(config || {}, {
        method: method4,
        headers: isForm ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: url2,
        data: data2
      }));
    };
  }
  Axios$1.prototype[method4] = generateHTTPMethod();
  Axios$1.prototype[method4 + "Form"] = generateHTTPMethod(true);
});
var Axios_1 = Axios$1;
var CancelToken_1;
var hasRequiredCancelToken;
function requireCancelToken() {
  if (hasRequiredCancelToken)
    return CancelToken_1;
  hasRequiredCancelToken = 1;
  var CanceledError2 = requireCanceledError();
  function CancelToken(executor) {
    if (typeof executor !== "function") {
      throw new TypeError("executor must be a function.");
    }
    var resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve2) {
      resolvePromise = resolve2;
    });
    var token = this;
    this.promise.then(function(cancel) {
      if (!token._listeners)
        return;
      var i;
      var l = token._listeners.length;
      for (i = 0; i < l; i++) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });
    this.promise.then = function(onfulfilled) {
      var _resolve;
      var promise = new Promise(function(resolve2) {
        token.subscribe(resolve2);
        _resolve = resolve2;
      }).then(onfulfilled);
      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };
      return promise;
    };
    executor(function cancel(message2) {
      if (token.reason) {
        return;
      }
      token.reason = new CanceledError2(message2);
      resolvePromise(token.reason);
    });
  }
  CancelToken.prototype.throwIfRequested = function throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  };
  CancelToken.prototype.subscribe = function subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }
    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  };
  CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    var index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  };
  CancelToken.source = function source() {
    var cancel;
    var token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  };
  CancelToken_1 = CancelToken;
  return CancelToken_1;
}
var spread;
var hasRequiredSpread;
function requireSpread() {
  if (hasRequiredSpread)
    return spread;
  hasRequiredSpread = 1;
  spread = function spread2(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  };
  return spread;
}
var isAxiosError;
var hasRequiredIsAxiosError;
function requireIsAxiosError() {
  if (hasRequiredIsAxiosError)
    return isAxiosError;
  hasRequiredIsAxiosError = 1;
  var utils2 = utils$b;
  isAxiosError = function isAxiosError2(payload) {
    return utils2.isObject(payload) && payload.isAxiosError === true;
  };
  return isAxiosError;
}
var utils = utils$b;
var bind2 = bind$2;
var Axios = Axios_1;
var mergeConfig2 = mergeConfig$2;
var defaults = defaults_1;
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance2 = bind2(Axios.prototype.request, context);
  utils.extend(instance2, Axios.prototype, context);
  utils.extend(instance2, context);
  instance2.create = function create(instanceConfig) {
    return createInstance(mergeConfig2(defaultConfig, instanceConfig));
  };
  return instance2;
}
var axios$1 = createInstance(defaults);
axios$1.Axios = Axios;
axios$1.CanceledError = requireCanceledError();
axios$1.CancelToken = requireCancelToken();
axios$1.isCancel = requireIsCancel();
axios$1.VERSION = requireData().version;
axios$1.toFormData = toFormData_1;
axios$1.AxiosError = AxiosError_1;
axios$1.Cancel = axios$1.CanceledError;
axios$1.all = function all(promises) {
  return Promise.all(promises);
};
axios$1.spread = requireSpread();
axios$1.isAxiosError = requireIsAxiosError();
axios$2.exports = axios$1;
axios$2.exports.default = axios$1;
(function(module) {
  module.exports = axios$2.exports;
})(axios$3);
const axios = /* @__PURE__ */ getDefaultExportFromCjs(axios$3.exports);
const instance = axios.create({
  timeout: 1e3 * 6,
  withCredentials: true,
  validateStatus: (status) => {
    return status >= 200 && status < 300;
  },
  baseURL: "http://localhost:3000"
});
instance.interceptors.request.use(function(config) {
  return config;
}, function(error) {
  return Promise.reject(error);
});
instance.interceptors.response.use(function(response) {
  return response;
}, function(error) {
  return Promise.reject(error);
});
const ajaxMethod = ["get", "post"];
const api = {};
ajaxMethod.forEach((method4) => {
  api[method4] = function(uri, data2, config) {
    return new Promise(function(resolve2, reject) {
      instance[method4](uri, data2, config).then((response) => {
        resolve2(response);
      }).catch((error) => {
        reject(error);
      });
    });
  };
});
const getBanner = () => {
  return api.get("/banner", {});
};
const search = ({ keywords = "" }) => {
  return api.get(`/search?keywords=${keywords}`, {});
};
const cloudsearch = ({ keywords = "", limit = 30, offset = 0, type: type4 = "1" }) => {
  return api.get(`/cloudsearch?keywords=${keywords}&limit=${limit}&offset=${offset}&type=${type4}`, {});
};
const serachHot = () => {
  return api.get("/search/hot", {});
};
const serachHotDetail = () => {
  return api.get("/search/hot/detail", {});
};
const serachSuggest = ({ keywords = "" }) => {
  return api.get(`/search/suggest?keywords=${keywords}`, {});
};
const serachMatch = ({ keywords = "" }) => {
  return api.get(`/search/multimatch?keywords=${keywords}`, {});
};
const login = ({ phone = "", pwd = "", realIP = "43.241.243.255" }) => {
  return api.post(`/login/cellphone`, { phone, password: pwd, realIP });
};
const logout = () => {
  return api.get("/logout", {});
};
const getUserInfo = ({ uid: uid2 = "" }) => {
  return api.get(`/user/detail?uid=${uid2}`, {});
};
const checkSong = ({ id = "" }) => {
  return api.get(`/check/music?id=${id}`, {});
};
const hotList = () => {
  return api.get("/playlist/hot", {});
};
const playList = ({ order = "hot", cat = "", limit = 50, offset = 0 }) => {
  return api.get(`/top/playlist?limit=${limit}&order=${order}&cat=${cat}&offset=${offset}`, {});
};
const personalized = (limit = 30) => {
  return api.get(`/personalized?limit=${limit}`, {});
};
const highquality = (limit = 20, before = 0) => {
  return api.get(`/top/playlist/highquality?limit=${limit}&before=${before}`, {});
};
const highqualitytag = () => {
  return api.get("/playlist/highquality/tags", {});
};
const catlist = () => {
  return api.get("/playlist/catlist", {});
};
const playlistdetail = ({ id = "", s = 8 }) => {
  return api.get(`/playlist/detail?id=${id}&s=${s}`, {});
};
const playlistSCollect = ({ id = "", limit = 20, offset = 0 }) => {
  return api.get(`/playlist/subscribers?id=${id}&limit=${limit}&offset=${offset}`, {});
};
const playlistRelated = ({ id = "" }) => {
  return api.get(`/related/playlist?id=${id}`, {});
};
const playlistComment = ({ id = "", limit = 20, offset = 0, before = 0 }) => {
  return api.get(`/comment/playlist?id=${id}&limit=${limit}&offset=${offset}&before=${before}`, {});
};
const subPlayList = ({ t = 1, id = "" }) => {
  return api.get(`/playlist/subscribe?t=${t}&id=${id}`, {});
};
const playlistUser = ({ uid: uid2 = "", limit = 30, offset = 0 }) => {
  return api.get(`/user/playlist?uid=${uid2}&limit=${limit}&offset=${offset}`, {});
};
const addPlayList = ({ op = "add", pid = "", tracks = "" }) => {
  return api.get(`/playlist/tracks?op=${op}&pid=${pid}&tracks=${tracks}`, {});
};
const songDetail = ({ ids = "", timestamp = 0 }) => {
  return api.post(`/song/detail?timestamp=${timestamp}`, { ids });
};
const songUrl = ({ id = "" }) => {
  return api.get(`/song/url?id=${id}`, {});
};
const likeSong = ({ id = "", like = false }) => {
  return api.get(`/like?id=${id}&like=${like}`, {});
};
const lyrics = ({ id = "" }) => {
  return api.get(`/lyric?id=${id}`, {});
};
const simiSong = ({ id = "" }) => {
  return api.get(`/simi/song?id=${id}`, {});
};
const simiPlayList = ({ id = "" }) => {
  return api.get(`/simi/playlist?id=${id}`, {});
};
const album = ({ id = "" }) => {
  return api.get(`/album?id=${id}`, {});
};
const albumDynamic = ({ id = "" }) => {
  return api.get(`/album/detail/dynamic?id=${id}`, {});
};
const albumSub = ({ id = "", t = 1 }) => {
  return api.get(`/album/sub?id=${id}&t=${t}`, {});
};
const albumComment = ({ id = "", limit = 20, offset = 0, before = 0, timestamp = 0 }) => {
  return api.get(`/comment/album?id=${id}&limit=${limit}&offset=${offset}&before=${before}&timestamp=${timestamp}`, {});
};
const artistDesc = ({ id = "" }) => {
  return api.get(`/artist/desc?id=${id}`, {});
};
const artists = ({ id = "" }) => {
  return api.get(`/artists?id=${id}`, {});
};
const artistSub = ({ id = "", t = "1" }) => {
  return api.get(`/artist/sub?id=${id}&t=${t}`, {});
};
const artistAlbum = ({ id = "", limit = 50, offset = 0 }) => {
  return api.get(`/artist/album?id=${id}&limit=${limit}&offset=${offset}`, {});
};
const artistMv = ({ id = "", limit = 50, offset = 0 }) => {
  return api.get(`/artist/mv?id=${id}&limit=${limit}&offset=${offset}`, {});
};
const artistList = ({ type: type4 = -1, area = -1, initial = "", limit = 50, offset = 0 }) => {
  return api.get(`/artist/list?type=${type4}&area=${area}&initial=${initial}&limit=${limit}&offset=${offset}`, {});
};
const subArtist = () => {
  return api.get("/artist/sublist", {});
};
const mv = ({ area = "", type: type4 = "", order = "", limit = 50, offset = 0 }) => {
  return api.get(`/mv/all?area=${area}&type=${type4}&order=${order}&limit=${limit}&offset=${offset}`, {});
};
const mvDetail = ({ id = "" }) => {
  return api.get(`/mv/detail?mvid=${id}`, {});
};
const mvUrl = ({ id = "", r = 1080 }) => {
  return api.get(`/mv/url?id=${id}&r=${r}`, {});
};
const commentMv = ({ id = "", limit = 20, offset = 0, before = 0, timestamp = 0 }) => {
  return api.get(`/comment/mv?id=${id}&limit=${limit}&offset=${offset}&before=${before}&timestamp=${timestamp}`, {});
};
const simiMv = ({ id = "" }) => {
  return api.get(`/simi/mv?mvid=${id}`, {});
};
const toplist = () => {
  return api.get("/toplist", {});
};
const topRankList = ({ id = "", s = 8 }) => {
  return api.get(`/playlist/detail?id=${id}&s=${s}`, {});
};
const topListDetail = () => {
  return api.get("/toplist/detail", {});
};
const listDetail = ({ id = "", s = 8 }) => {
  return api.get(`/playlist/detail?id=${id}&s=${s}`, {});
};
const videoUrl = ({ id = "", r = 1080 }) => {
  return api.get(`/video/url?id=${id}&r=${r}`, {});
};
const videoDetail = ({ id = "" }) => {
  return api.get(`/video/detail?id=${id}`, {});
};
const simiVideo = ({ id = "" }) => {
  return api.get(`/related/allvideo?id=${id}`, {});
};
const commentVideo = ({ id = "", limit = 20, offset = 0, before = 0, timestamp = 0 }) => {
  return api.get(`/comment/video?id=${id}&limit=${limit}&offset=${offset}&before=${before}&timestamp=${timestamp}`, {});
};
const hotTopic = (limit = 20, offset = 0) => {
  return api.get(`/hot/topic?limit=${limit}&offset=${offset}`, {});
};
const topAlbum = ({ limit = 20, offset = 0, area = "all", type: type4 = "new", year = "", month = "" }) => {
  return api.get(`/top/album?limit=${limit}&offset=${offset}&area=${area}&type=${type4}&year=${year}&month=${month}`, {});
};
const topArtists = ({ limit = 30, offset = 0 }) => {
  return api.get(`/top/artists?limit=${limit}&offset=${offset}`, {});
};
const getNewMv = ({ limit = 30, area = "" }) => {
  return api.get(`/mv/first?limit=${limit}&area=${area}`, {});
};
const getHotDj = ({ limit = 30, offset = 0 }) => {
  return api.get(`/dj/hot?limit=${limit}&offset=${offset}`, {});
};
const getApi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getBanner,
  search,
  serachHot,
  serachHotDetail,
  serachSuggest,
  serachMatch,
  cloudsearch,
  login,
  logout,
  getUserInfo,
  checkSong,
  hotList,
  playList,
  catlist,
  topRankList,
  playlistdetail,
  playlistSCollect,
  playlistRelated,
  playlistComment,
  subPlayList,
  playlistUser,
  addPlayList,
  songDetail,
  songUrl,
  likeSong,
  lyrics,
  simiSong,
  simiPlayList,
  album,
  albumSub,
  albumDynamic,
  albumComment,
  artistDesc,
  artists,
  artistSub,
  artistAlbum,
  artistMv,
  artistList,
  mv,
  mvDetail,
  mvUrl,
  commentMv,
  simiMv,
  personalized,
  highquality,
  highqualitytag,
  videoUrl,
  videoDetail,
  simiVideo,
  commentVideo,
  hotTopic,
  topAlbum,
  toplist,
  topListDetail,
  listDetail,
  getNewMv,
  topArtists,
  subArtist,
  getHotDj
}, Symbol.toStringTag, { value: "Module" }));
class Song {
  constructor({
    id,
    name,
    mvId,
    singer,
    album: album2,
    alia,
    duration,
    url: url2,
    vip,
    license,
    publishTime
  }) {
    this.id = id;
    this.name = name;
    this.mvId = mvId;
    this.singer = singer;
    this.album = album2;
    this.alia = alia;
    this.duration = duration;
    this.url = url2;
    this.vip = vip;
    this.license = license;
    this.publishTime = publishTime;
  }
}
function formatSongInfo(params) {
  return new Song({
    id: String(params.id),
    name: params.name,
    mvId: params.mv,
    singer: params.ar,
    album: params.al,
    alia: params.alia,
    vip: params.fee === 1,
    license: params.license,
    duration: util.formatSongTime(params.dt),
    url: `https://music.163.com/song/media/outer/url?id=${params.id}.mp3`,
    publishTime: util.formatMsgTime(params.publishTime)
  });
}
const util = {
  formartNum(val) {
    let num = 0;
    if (val > 9999) {
      num = Math.round(val / 1e4 * 10) / 10 + "\u4E07";
    } else {
      num = val;
    }
    return num;
  },
  formartDate(originVal, fmt) {
    const dt2 = new Date(originVal);
    const opt = {
      yyyy: dt2.getFullYear(),
      MM: (dt2.getMonth() + 1 + "").padStart(2, "0"),
      dd: (dt2.getDate() + "").padStart(2, "0"),
      HH: (dt2.getHours() + "").padStart(2, "0"),
      mm: (dt2.getMinutes() + "").padStart(2, "0"),
      ss: (dt2.getSeconds() + "").padStart(2, "0")
    };
    for (const k in opt) {
      const ret = new RegExp("(" + k + ")").exec(fmt);
      if (ret) {
        fmt = fmt.replace(ret[1], opt[k]);
      }
    }
    return fmt;
  },
  formatSongSecond(duration) {
    let arr = duration.split(":"), second = 0;
    for (let i = 0; i < arr.length; i++) {
      second += arr[i] * 60 * (arr.length - 1 - i);
    }
    second += arr[arr.length - 1] * 1;
    return second;
  },
  formatSongTime(duration = 0) {
    duration = duration >= 0 ? duration / 1e3 : 0;
    const m = (Math.floor(duration / 60) + "").padStart(2, "0");
    const s = (Math.floor(duration % 60) + "").padStart(2, "0");
    return `${m}:${s}`;
  },
  concatPlayList(newList = [], oldList = []) {
    const arr = [...oldList, ...newList];
    const map = /* @__PURE__ */ new Map();
    for (const item of arr) {
      if (!map.has(item.id)) {
        map.set(item.id, item);
      }
    }
    return [...map.values()];
  },
  formatMsgTime(duration) {
    let result = "";
    const NOW = new Date();
    const PAST = new Date(duration);
    if (NOW.toDateString() === PAST.toDateString()) {
      result = this.formartDate(duration, "HH:mm");
    } else if (PAST.getFullYear() === NOW.getFullYear()) {
      result = this.formartDate(duration, "MM\u6708dd\u65E5 HH:mm");
    } else {
      result = this.formartDate(duration, "yyyy\u5E74MM\u6708dd\u65E5");
    }
    return result;
  },
  formatSongs(list, privileges) {
    const ret = [];
    list.map((item, index) => {
      if (item.id) {
        item.license = !privileges[index].cp;
        ret.push(formatSongInfo(item));
      }
    });
    return ret;
  }
};
const ALBUM_AREA = [{ name: "\u5168\u90E8", code: "all" }, { name: "\u534E\u8BED", code: "zh" }, { name: "\u6B27\u7F8E", code: "ea" }, { name: "\u97E9\u56FD", code: "kr" }, { name: "\u65E5\u672C", code: "jp" }];
const MV_AREA = ["\u5168\u90E8", "\u5185\u5730", "\u6E2F\u53F0", "\u6B27\u7F8E", "\u65E5\u672C", "\u97E9\u56FD"];
const MV_TYPE = ["\u5168\u90E8", "\u5B98\u65B9\u7248", "\u539F\u751F", "\u73B0\u573A\u7248", "\u7F51\u6613\u51FA\u54C1"];
const ARTIST_AREA = [{ label: "\u5168\u90E8", val: -1 }, { label: "\u534E\u8BED", val: 7 }, { label: "\u6B27\u7F8E", val: 96 }, { label: "\u65E5\u672C", val: 8 }, { label: "\u97E9\u56FD", val: 16 }, { label: "\u5176\u4ED6", val: 0 }];
const ARTIST_TYPE = [{ label: "\u5168\u90E8", val: -1 }, { label: "\u7537\u6B4C\u624B", val: 1 }, { label: "\u5973\u6B4C\u624B", val: 2 }, { label: "\u4E50\u961F", val: 3 }];
const common = {
  ALBUM_AREA,
  MV_AREA,
  MV_TYPE,
  ARTIST_AREA,
  ARTIST_TYPE
};
const global$1 = "";
const reset = "";
const fonts = "";
const elContainer = "";
const elAside = "";
const elFooter = "";
const elHeader = "";
const elMain = "";
const concatPlayList = (list, playList2 = []) => {
  return util.concatPlayList(list.filter((item) => {
    return !item.license && !item.vip;
  }), playList2);
};
const findIndex = (list, playList2) => {
  return playList2.findIndex((d) => {
    return d.id === list.id;
  });
};
const useStore = defineStore("main", {
  state: () => {
    return {
      isLogin: false,
      loginDialogVisible: false,
      isPlayed: false,
      playList: [],
      userInfo: null,
      playIndex: 0,
      isShowPlayListTips: false
    };
  },
  getters: {
    getisLogin() {
      return this.isLogin || JSON.parse(window.localStorage.getItem("isLogin"));
    },
    getuserInfo() {
      return this.userInfo || JSON.parse(window.localStorage.getItem("userInfo") || "{}");
    },
    getplayList() {
      return this.playList.length ? this.playList : JSON.parse(window.localStorage.getItem("playList")) || [];
    },
    getplayIndex() {
      return this.playIndex || JSON.parse(window.localStorage.getItem("playIndex")) || 0;
    }
  },
  actions: {
    setLogin(val = false) {
      this.isLogin = val;
    },
    setUserInfo(val) {
      this.userInfo = val;
    },
    setLoginDialog(val) {
      this.loginDialogVisible = val;
    },
    setPlayStatus(val = false) {
      this.isPlayed = val;
    },
    setPlayList(val = null) {
      this.playList = val;
      window.localStorage.setItem("playList", JSON.stringify(val));
    },
    setPlayIndex(val = 0) {
      this.playIndex = val;
      window.localStorage.setItem("playIndex", val);
    },
    setPlayListTips(val = false) {
      this.isShowPlayListTips = val;
    },
    loginSuc(val) {
      this.setLoginDialog(val);
    },
    playAll({ list }) {
      this.setPlayList(concatPlayList(list));
      this.setPlayStatus(true);
      this.setPlayIndex(0);
    },
    selectPlay({ list }) {
      const playList2 = concatPlayList(list, this.playList);
      this.setPlayList(playList2);
      this.setPlayStatus(true);
      this.setPlayIndex(findIndex(list[0], playList2));
    },
    addList({ list }) {
      const playList2 = concatPlayList(list, this.playList);
      this.setPlayList(playList2);
      this.setPlayListTips(true);
    }
  }
});
const _hoisted_1$8 = ["src"];
const _sfc_main$9 = {
  __name: "AudioBox",
  emits: ["setCurrentTime"],
  setup(__props, { expose, emit }) {
    const store = useStore();
    const myAudio = ref(null);
    const info = reactive({
      initAudioReady: false,
      playMode: 0
    });
    const playIndex = computed(() => store.getplayIndex);
    const playList2 = computed(() => store.getplayList);
    const isPlayed = computed(() => store.isPlayed);
    const curSongInfo = computed(() => playList2.value[playIndex.value]);
    const playAudioType = (type4) => {
      if (type4 === "play") {
        store.setPlayStatus(!isPlayed.value);
        store.setPlayIndex(playIndex.value);
      } else {
        changeSong(type4);
      }
    };
    const playAudioMode = (type4) => {
      info["playMode"] = type4;
    };
    const setVolumeHandler = (Volume) => {
      const $myAudio = myAudio.value;
      $myAudio.muted = Volume;
    };
    const setvolumeProgress = (val) => {
      const $myAudio = myAudio.value;
      $myAudio.volume = val;
      $myAudio.muted = val ? 0 : 1;
    };
    const setAudioProgress = (t) => {
      const $myAudio = myAudio.value;
      $myAudio.currentTime = Math.floor(t);
      console.log(t);
    };
    const canplaySong = (e) => {
      info["initAudioReady"] = true;
    };
    const playSong = (e) => {
      info["initAudioReady"] = true;
      store.setPlayStatus(true);
    };
    const endedSong = (e) => {
      if (info["playMode"] === 1) {
        loopSong();
      } else {
        changeSong("next");
      }
    };
    const changeSong = (type4) => {
      if (playList2.value.length !== 1) {
        let index = playIndex.value;
        if (info["playMode"] === 2) {
          index = Math.floor(Math.random() * playList2.value.length - 1) + 1;
        } else {
          if (type4 === "prev") {
            index = index === 0 ? playList2.value.length - 1 : --index;
          } else {
            index = index >= playList2.value.length - 1 ? 0 : ++index;
          }
        }
        info["initAudioReady"] = false;
        store.setPlayStatus(false);
        store.setPlayIndex(index);
      } else {
        loopSong();
      }
    };
    const loopSong = () => {
      const $myAudio = myAudio.value;
      $myAudio.currentTime = 0;
      $myAudio.play();
      store.setPlayStatus(true);
    };
    const updateSongTime = (e) => {
      if (!info.initAudioReady) {
        return;
      }
      emit("setCurrentTime", Math.floor(e.target.currentTime));
      console.log(e.target.currentTime);
    };
    watch(
      curSongInfo,
      (newSong, oldSong) => {
        if (!newSong || oldSong && newSong.id === oldSong.id) {
          return;
        }
        info["initAudioReady"] = false;
        info["currentTime"] = 0;
        emit("setCurrentTime", 0);
        nextTick(() => {
          const $myAudio = myAudio.value;
          if ($myAudio) {
            $myAudio.play();
          }
        });
      },
      { deep: true }
    );
    watch(
      () => isPlayed.value,
      (playing) => {
        if (!info.initAudioReady) {
          return;
        }
        nextTick(() => {
          const $myAudio = myAudio.value;
          if ($myAudio) {
            playing ? $myAudio.play() : $myAudio.pause();
          }
        });
      }
    );
    expose({
      playAudioType,
      playAudioMode,
      setVolumeHandler,
      setvolumeProgress,
      setAudioProgress
    });
    return (_ctx, _cache) => {
      return unref(curSongInfo) ? (openBlock(), createElementBlock("audio", {
        key: 0,
        ref_key: "myAudio",
        ref: myAudio,
        preload: "auto",
        onCanplay: canplaySong,
        onPlaying: playSong,
        onEnded: endedSong,
        onError: _cache[0] || (_cache[0] = (...args) => _ctx.errorSong && _ctx.errorSong(...args)),
        onTimeupdate: updateSongTime,
        src: unref(curSongInfo).url
      }, null, 40, _hoisted_1$8)) : createCommentVNode("", true);
    };
  }
};
const elPagination = "";
const elInput = "";
const elTag = "";
const elOption = "";
const elOptionGroup = "";
const elScrollbar = "";
const elPopper = "";
const elSelect = "";
const SongList_vue_vue_type_style_index_0_scoped_true_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$8 = {
  name: "SongList",
  components: {},
  props: {
    songList: {
      type: Array,
      required: true
    },
    typeSize: {
      type: String,
      default: "normal"
    },
    stripe: {
      type: Boolean,
      default: false
    },
    height: {
      type: [Number, String],
      default: "auto"
    },
    isScroll: {
      type: Boolean,
      default: false
    },
    offset: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 20
    }
  },
  setup(props, context) {
    const curSongRef = ref(null);
    const store = useStore();
    const info = reactive({
      typeSize: props.typeSize,
      height: props.height,
      curScroll: -1,
      pageSize: props.pageSize,
      currentPage: 1,
      playing: false,
      timer: null
    });
    const playList2 = computed(() => store.getplayList);
    const isPlayed = computed(() => store.isPlayed);
    onMounted(() => {
      scrollCurSong(curSongInfo);
    });
    const list = computed(() => {
      if (!props.isScroll) {
        return props.songList.slice(
          (info.currentPage - 1) * info.pageSize,
          info.currentPage * info.pageSize
        );
      } else {
        return props.songList;
      }
    });
    const curSongSty = computed(() => {
      return `transform: translateY(${info.curScroll}px)`;
    });
    const indexMethod = (page) => {
      if (!props.isScroll) {
        return (info.currentPage - 1) * info.pageSize + page + 1 + props.offset;
      } else {
        return page + 1;
      }
    };
    const isCurSong = computed(() => {
      return (item, index) => {
        return [
          "list-item",
          props.stripe ? index % 2 === 0 ? "stripe" : "" : "",
          isPlayed.value && item.id === curSongInfo.value.id ? "active" : "",
          item.license || item.vip ? "disable" : "",
          item.vip ? "vip" : ""
        ];
      };
    });
    const playIcon = computed(() => {
      return (item) => {
        return [
          "iconfont",
          "playicon",
          isPlayed.value && item.id === curSongInfo.value.id ? "icon-pause" : "icon-play"
        ];
      };
    });
    const currentSong = (item) => {
      if (!curSongInfo.value || item.id !== curSongInfo.value.id) {
        store.selectPlay({ list: [item] });
      } else {
        store.setPlayStatus(!isPlayed.value);
      }
    };
    const curSongInfo = computed(() => {
      return playList2.value[store.getplayIndex];
    });
    const addSongList = (item) => {
      store.addlist({ list: [item] });
      store.setPlayListTips(true);
    };
    const delList = (index) => {
      if (playList2.value.length > 1) {
        playList2.value.splice(index, 1);
        store.setPlayList(playList2.value);
      } else {
        store.setPlayStatus(false);
        store.setPlayList([]);
      }
    };
    const scrollCurSong = (cur) => {
      if (props.isScroll) {
        const curIndex = props.songList.findIndex((item) => {
          return item.id === cur.id;
        });
        if (curIndex > 7 && curIndex < props.songList.length - 8) {
          info.curScroll = -(curIndex - 4) * 50;
        } else if (curIndex >= props.songList.length - 8 && props.songList.length - 8 > 0) {
          info.curScroll = -(props.songList.length - 8) * 50;
        } else {
          info.curScroll = 0;
        }
        const $curSongRef = curSongRef.value;
        $curSongRef.addEventListener(
          "wheel",
          (event) => {
            if (event.wheelDelta > 0 || event.detail < 0) {
              info.curScroll = Math.abs(info.curScroll) > 0 ? info.curScroll + 50 : 0;
            } else {
              info.curScroll = Math.abs(info.curScroll) < script;
              script((props.songList.length - 8) / 2) * 100 ? info.curScroll - 50 : info.curScroll;
            }
          },
          { passive: true }
        );
      }
    };
    const isShowPagination = computed(() => {
      return props.songList.length > info.pageSize && !props.isScroll;
    });
    const currentChange = (page) => {
      info.currentPage = page;
    };
    watch(
      curSongInfo,
      (val) => {
        nextTick(() => {
          val && scrollCurSong(val);
        });
      },
      { deep: true }
    );
    watch(
      () => {
        return props.songList;
      },
      () => {
        info.currentPage = 1;
      }
    );
    return {
      ...toRefs(info),
      list,
      curSongRef,
      curSongSty,
      currentSong,
      indexMethod,
      isCurSong,
      playIcon,
      curSongInfo,
      addSongList,
      delList,
      currentChange,
      isShowPagination
    };
  }
};
const _withScopeId$5 = (n) => (pushScopeId("data-v-c54f6720"), n = n(), popScopeId(), n);
const _hoisted_1$7 = { class: "songs-list-main" };
const _hoisted_2$6 = { class: "list-header flex" };
const _hoisted_3$5 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("div", { class: "columnIndex" }, "\u5E8F\u53F7", -1));
const _hoisted_4$4 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("div", { class: "columnSong" }, "\u6B4C\u66F2", -1));
const _hoisted_5$3 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("div", { class: "columnSinger" }, "\u6B4C\u624B", -1));
const _hoisted_6$2 = {
  key: 0,
  class: "columnAlbum"
};
const _hoisted_7$2 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("div", { class: "columnTime" }, "\u65F6\u957F", -1));
const _hoisted_8$2 = { class: "columnIndex" };
const _hoisted_9$1 = { class: "songlist-index" };
const _hoisted_10$1 = /* @__PURE__ */ createStaticVNode('<div class="audio-icon" data-v-c54f6720><div class="column" style="animation-delay:-1.2s;" data-v-c54f6720></div><div class="column" data-v-c54f6720></div><div class="column" style="animation-delay:-1.5s;" data-v-c54f6720></div><div class="column" style="animation-delay:-0.9s;" data-v-c54f6720></div><div class="column" style="animation-delay:-0.6s;" data-v-c54f6720></div></div>', 1);
const _hoisted_11$1 = ["onClick"];
const _hoisted_12$1 = { class: "columnSong songlist-name" };
const _hoisted_13$1 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("i", { class: "iconfont icon-mv" }, null, -1));
const _hoisted_14$1 = {
  key: 1,
  class: "iconfont icon-vip"
};
const _hoisted_15$1 = { class: "columnSinger songlist-singer" };
const _hoisted_16$1 = {
  key: 0,
  class: "columnAlbum"
};
const _hoisted_17$1 = { class: "columnTime" };
const _hoisted_18$1 = { class: "songlist-time" };
const _hoisted_19$1 = { class: "songlist-oper" };
const _hoisted_20$1 = ["onClick"];
const _hoisted_21$1 = ["onClick"];
const _hoisted_22$1 = ["onClick"];
const _hoisted_23$1 = {
  key: 0,
  class: "pagination"
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_el_pagination = ElPagination;
  return openBlock(), createElementBlock("div", _hoisted_1$7, [
    createBaseVNode("div", _hoisted_2$6, [
      _hoisted_3$5,
      _hoisted_4$4,
      _hoisted_5$3,
      $props.typeSize !== "mini" ? (openBlock(), createElementBlock("div", _hoisted_6$2, "\u4E13\u8F91")) : createCommentVNode("", true),
      _hoisted_7$2
    ]),
    createBaseVNode("div", {
      class: "list-scroll",
      style: normalizeStyle({ height: $props.height + "px" }),
      ref: "curSongRef"
    }, [
      createBaseVNode("div", {
        class: "list-main",
        style: normalizeStyle($setup.curSongSty)
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.list, (item, index) => {
          return openBlock(), createElementBlock("div", {
            class: normalizeClass($setup.isCurSong(item, index)),
            key: item.id
          }, [
            createBaseVNode("div", _hoisted_8$2, [
              createBaseVNode("span", _hoisted_9$1, toDisplayString($setup.indexMethod(index)), 1),
              _hoisted_10$1,
              createBaseVNode("i", {
                class: normalizeClass($setup.playIcon(item)),
                onClick: ($event) => $setup.currentSong(item)
              }, null, 10, _hoisted_11$1)
            ]),
            createBaseVNode("div", _hoisted_12$1, [
              createVNode(_component_router_link, {
                class: normalizeClass($props.typeSize),
                to: { path: "/song", query: { id: item.id } }
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(item.name), 1)
                ]),
                _: 2
              }, 1032, ["class", "to"]),
              $props.typeSize !== "mini" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                item.mvId ? (openBlock(), createBlock(_component_router_link, {
                  key: 0,
                  class: "mv-name",
                  to: { path: "/mvlist/mv", query: { id: item.mvId } }
                }, {
                  default: withCtx(() => [
                    _hoisted_13$1
                  ]),
                  _: 2
                }, 1032, ["to"])) : createCommentVNode("", true),
                item.vip ? (openBlock(), createElementBlock("i", _hoisted_14$1)) : createCommentVNode("", true)
              ], 64)) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_15$1, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(item.singer, (author, k) => {
                return openBlock(), createBlock(_component_router_link, {
                  to: {},
                  class: "song_name",
                  key: author.name
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(k !== 0 ? " / " + author.name : author.name), 1)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ]),
            $props.typeSize !== "mini" ? (openBlock(), createElementBlock("div", _hoisted_16$1, [
              item.album ? (openBlock(), createBlock(_component_router_link, {
                key: 0,
                class: "songlist-album",
                to: { path: "/album", query: { id: item.album.id } }
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(item.album.name), 1)
                ]),
                _: 2
              }, 1032, ["to"])) : createCommentVNode("", true)
            ])) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_17$1, [
              createBaseVNode("div", _hoisted_18$1, toDisplayString(item.duration), 1),
              createBaseVNode("div", _hoisted_19$1, [
                $props.typeSize !== "mini" ? (openBlock(), createElementBlock("i", {
                  key: 0,
                  class: "iconfont icon-add",
                  title: "\u6DFB\u52A0\u5230\u5217\u8868",
                  onClick: ($event) => $setup.addSongList(item)
                }, null, 8, _hoisted_20$1)) : createCommentVNode("", true),
                createBaseVNode("i", {
                  class: "iconfont icon-collect",
                  onClick: ($event) => _ctx.likeSong(item)
                }, null, 8, _hoisted_21$1),
                $props.typeSize === "mini" ? (openBlock(), createElementBlock("i", {
                  key: 1,
                  class: "iconfont icon-del",
                  title: "\u5220\u9664",
                  onClick: withModifiers(($event) => $setup.delList(index), ["stop"])
                }, null, 8, _hoisted_22$1)) : createCommentVNode("", true)
              ])
            ])
          ], 2);
        }), 128))
      ], 4)
    ], 4),
    $setup.isShowPagination ? (openBlock(), createElementBlock("div", _hoisted_23$1, [
      createVNode(_component_el_pagination, {
        onCurrentChange: $setup.currentChange,
        "page-size": $props.pageSize,
        "current-page": _ctx.currentPage,
        layout: "prev, pager, next",
        total: $props.songList.length
      }, null, 8, ["onCurrentChange", "page-size", "current-page", "total"])
    ])) : createCommentVNode("", true)
  ]);
}
const SongList = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$3], ["__scopeId", "data-v-c54f6720"]]);
const elPopover = "";
const Lyrics_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$7 = {
  name: "lyrics",
  props: {
    sId: {
      type: [Number, String],
      default: 0
    },
    currentTime: {
      type: Number,
      default: 0
    },
    maxH: {
      type: [Number, String],
      default: 390
    }
  },
  setup(props) {
    const { proxy } = getCurrentInstance();
    const info = reactive({
      lyric: null,
      lyricObj: [],
      curIndex: 0,
      isFull: false
    });
    const isCurLyric = computed(() => {
      return (index) => {
        return index === info["curIndex"] && props["currentTime"] ? "active" : "";
      };
    });
    const transform = computed(() => {
      if (info["curIndex"] > 6) {
        return `transform: translateY(-${30 * (info["curIndex"] - 6)}px)`;
      } else {
        return "transform: translateY(0)";
      }
    });
    const getLyrics = async (id) => {
      const { data: res } = await proxy.$http.lyrics({ id });
      if (res.code !== 200) {
        return proxy.$msg.error("\u6570\u636E\u8BF7\u6C42\u5931\u8D25");
      }
      formartLyric(res.lrc);
    };
    const formartLyric = (lrc) => {
      const lrcReg = /^\[(\d{2}):(\d{2}.\d{2,})\]\s*(.+)$/;
      if (!lrc.lyric) {
        info["lyric"] = true;
        return;
      }
      const lyricLis = lrc.lyric.split("\n");
      info["lyric"] = lrc.lyric;
      lyricLis.forEach((item) => {
        const arr = lrcReg.exec(item);
        if (!arr) {
          return;
        }
        info["lyricObj"].push({ t: arr[1] * 60 * 1 + arr[2] * 1, txt: arr[3] });
      });
      info["lyricObj"].sort((a, b) => {
        return a.t - b.t;
      });
    };
    const findCurIndex = (t) => {
      for (let i = 0; i < info["lyricObj"].length; i++) {
        if (t <= info["lyricObj"][i].t) {
          return i;
        }
      }
      return info["lyricObj"].length;
    };
    const fullLyric = () => {
      info["isFull"] = !info["isFull"];
    };
    onMounted(() => {
      getLyrics(props.sId);
    });
    watch(
      () => props.sId,
      (newVal, oldVal) => {
        info["lyric"] = null;
        info["lyricObj"] = [];
        info["curIndex"] = 0;
        getLyrics(newVal);
      }
    );
    watch(
      () => props.currentTime,
      (newVal, oldVal) => {
        if (!info["lyricObj"].length) {
          return;
        }
        info["curIndex"] = findCurIndex(newVal) - 1;
      }
    );
    return {
      ...toRefs(info),
      isCurLyric,
      transform,
      getLyrics,
      formartLyric,
      findCurIndex,
      fullLyric
    };
  }
};
const _hoisted_1$6 = {
  key: 1,
  class: "lyric-empty"
};
const _hoisted_2$5 = { key: 0 };
const _hoisted_3$4 = { key: 1 };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("div", {
      class: "lyrics-main",
      style: normalizeStyle({ maxHeight: $props.maxH + "px" })
    }, [
      _ctx.lyricObj.length ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "lyrics",
        ref: "lyrics",
        style: normalizeStyle($setup.transform)
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.lyricObj, (item, index) => {
          return openBlock(), createElementBlock("p", {
            class: normalizeClass([$setup.isCurLyric(index)]),
            key: index
          }, toDisplayString(item.txt), 3);
        }), 128))
      ], 4)) : (openBlock(), createElementBlock("div", _hoisted_1$6, [
        _ctx.lyric ? (openBlock(), createElementBlock("p", _hoisted_2$5, "\u7EAF\u97F3\u4E50\uFF0C\u65E0\u6B4C\u8BCD")) : (openBlock(), createElementBlock("p", _hoisted_3$4, "\u6B4C\u8BCD\u52A0\u8F7D\u4E2D......"))
      ]))
    ], 4)
  ]);
}
const __unplugin_components_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$2], ["__scopeId", "data-v-3cff498b"]]);
const elImage = "";
const elImageViewer = "";
const ProgressLine_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$4 = (n) => (pushScopeId("data-v-6fffe753"), n = n(), popScopeId(), n);
const _hoisted_1$5 = ["onClick"];
const _hoisted_2$4 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("div", { class: "progress-line" }, null, -1));
const _sfc_main$6 = {
  __name: "ProgressLine",
  props: {
    progressWidth: {
      type: String,
      default: "0"
    },
    isShowBtn: {
      type: Boolean,
      default: true
    }
  },
  emits: ["setProgressLine"],
  setup(__props, { emit }) {
    const progress = ref(null);
    const move = () => {
      document.onmousemove = (e) => {
        setProgressLine(e, false);
      };
      document.onmouseup = function(e) {
        setProgressLine(e);
        document.onmousemove = document.onmouseup = document.body.onselectstart = null;
      };
      return false;
    };
    const point = (e) => {
      setProgressLine(e);
    };
    const setProgressLine = (e, flag = true) => {
      const $progress = progress.value;
      const curProgress = function() {
        if (e.clientX - getOffsetLeft($progress) >= $progress.offsetWidth)
          return $progress.offsetWidth;
        else if (e.clientX - getOffsetLeft($progress) <= 0)
          return 0;
        else
          return e.clientX - getOffsetLeft($progress);
      };
      emit("setProgressLine", {
        val: curProgress / $progress.offsetWidth,
        flag
      });
    };
    const getOffsetLeft = (obj) => {
      let oLeft = obj.offsetLeft;
      let oParent = obj.offsetParent;
      while (oParent !== null) {
        oLeft += oParent.offsetLeft;
        oParent = oParent.offsetParent;
      }
      return oLeft;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "progress",
        onClick: withModifiers(point, ["stop"]),
        ref_key: "progress",
        ref: progress
      }, [
        _hoisted_2$4,
        createBaseVNode("div", {
          class: "progress-bg",
          style: normalizeStyle({ width: __props.progressWidth })
        }, [
          __props.isShowBtn ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "progress-btn",
            onMousedown: _cache[0] || (_cache[0] = withModifiers(($event) => move(), ["self", "stop"]))
          }, null, 32)) : createCommentVNode("", true)
        ], 4)
      ], 8, _hoisted_1$5);
    };
  }
};
const __unplugin_components_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-6fffe753"]]);
const Bar_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$5 = {
  name: "Bar",
  setup(props, { emit }) {
    const store = useStore();
    const { proxy } = getCurrentInstance();
    const info = reactive({
      isLock: false,
      locked: false,
      lockName: "active",
      manual: true,
      currentTime: inject("currentTime"),
      isMuted: false,
      playMode: 0,
      volumeNum: 1,
      oldVolume: 0,
      isPip: false,
      timer: null,
      tipsTimer: null
    });
    onMounted(() => {
      leaveBar();
      store.setPlayList(playList2.value);
    });
    onBeforeUnmount(() => {
      clearTimeout(info.timer);
      clearTimeout(info.tipsTimer);
    });
    const playIndex = computed(() => store.getplayIndex);
    const playList2 = computed(() => store.getplayList);
    const isPlayed = computed(() => store.isPlayed);
    const isShowPlayListTips = computed(() => {
      let val = store.isShowPlayListTips;
      if (val) {
        clearTimeout(info.tipsTimer);
        info.tipsTimer = setTimeout(() => {
          store.setPlayListTips(false);
        }, 3e3);
      }
      return val;
    });
    const curSongInfo = computed(() => playList2.value[playIndex.value]);
    const modeIcon = computed(() => {
      const params = [
        {
          className: "icon-loop",
          title: "\u5FAA\u73AF\u6A21\u5F0F"
        },
        {
          className: "icon-single-cycle",
          title: "\u5355\u66F2\u5FAA\u73AF"
        },
        {
          className: "icon-shuffle",
          title: "\u968F\u673A\u64AD\u653E"
        }
      ];
      return params[info.playMode];
    });
    const changePlayMode = () => {
      info["playMode"] = info["playMode"] >= 2 ? 0 : info["playMode"] + 1;
      emit("playAudioMode", info["playMode"]);
    };
    const audioProgressWidth = computed(() => {
      return info["currentTime"] / proxy.$utils.formatSongSecond(curSongInfo.value.duration) * 100 + "%";
    });
    const volumeProgressWidth = computed(() => {
      return info["volumeNum"] / 1 * 100 + "%";
    });
    const volumeHandler = () => {
      info["isMuted"] = info["isMuted"] ? 0 : 1;
      info["isMuted"] && (info["oldVolume"] = info["volumeNum"]);
      info["volumeNum"] = info["isMuted"] ? 0 : info["oldVolume"];
      emit("setVolumeHandler", info["isMuted"]);
    };
    const setvolumeProgress = (params) => {
      info["volumeNum"] = params.val;
      info["oldVolume"] = params.val;
      info["isMuted"] = params.val ? 0 : 1;
      emit("setvolumeProgress", params.val);
    };
    const playIcon = computed(() => {
      return !isPlayed.value ? "icon-audio-play" : "icon-audio-pause";
    });
    const mutedIcon = computed(() => {
      return info["isMuted"] ? "icon-volume-active" : "icon-volume";
    });
    const audioHandler = (type4) => {
      emit("audioHandler", type4);
      if (info["isPip"]) {
        changePipSong();
      }
    };
    const setAudioProgress = (params) => {
      info["initAudioReady"] = false;
      info["currentTime"] = params.val * proxy.$utils.formatSongSecond(curSongInfo.value.duration);
      if (params.flag) {
        emit("setAudioProgress", info["currentTime"]);
      }
    };
    const popverHandle = () => {
      info["isLock"] = true;
    };
    const popverClose = () => {
      info["isLock"] = false;
      leaveBar();
    };
    const enterBar = () => {
      clearTimeout(info.timer);
      info.lockName = "active";
    };
    const leaveBar = (e) => {
      if (!info["isLock"] && !info["locked"]) {
        clearTimeout(info.timer);
        info.timer = setTimeout(() => {
          info.lockName = info.isLock ? "active" : "";
        }, 3e3);
      }
    };
    const lockBar = () => {
      info.locked = !info.locked;
      info.isLock = info.locked;
      leaveBar();
    };
    const clearSonglist = () => {
      store.setPlayStatus(false);
      store.setPlayList([]);
      store.setPlayIndex(0);
    };
    return {
      leaveBar,
      enterBar,
      lockBar,
      ...toRefs(info),
      playList: playList2,
      isShowPlayListTips,
      curSongInfo,
      modeIcon,
      playIcon,
      mutedIcon,
      audioHandler,
      volumeHandler,
      audioProgressWidth,
      changePlayMode,
      popverClose,
      popverHandle,
      clearSonglist,
      setAudioProgress,
      volumeProgressWidth,
      setvolumeProgress
    };
  },
  components: {
    ProgressLine: __unplugin_components_0$1,
    Lyrics: __unplugin_components_0$2,
    SongList
  }
};
const _withScopeId$3 = (n) => (pushScopeId("data-v-b4ba1caa"), n = n(), popScopeId(), n);
const _hoisted_1$4 = { class: "fold" };
const _hoisted_2$3 = { class: "wrapper" };
const _hoisted_3$3 = { class: "play-bar-inside" };
const _hoisted_4$3 = { class: "bar-l" };
const _hoisted_5$2 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("div", {
  slot: "placeholder",
  class: "image-slot"
}, [
  /* @__PURE__ */ createBaseVNode("i", { class: "iconfont icon-placeholder" })
], -1));
const _hoisted_6$1 = { class: "bar-name" };
const _hoisted_7$1 = { class: "bar-time" };
const _hoisted_8$1 = { class: "bar-m" };
const _hoisted_9 = { class: "bar-control" };
const _hoisted_10 = { class: "bar-r" };
const _hoisted_11 = { class: "bar-oper" };
const _hoisted_12 = { class: "volume-main" };
const _hoisted_13 = ["title"];
const _hoisted_14 = { class: "popver" };
const _hoisted_15 = { class: "lyric" };
const _hoisted_16 = { class: "lyrics-container" };
const _hoisted_17 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("h3", { class: "lyrics-header" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "\u6B4C\u8BCD")
], -1));
const _hoisted_18 = {
  key: 0,
  class: "tips"
};
const _hoisted_19 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "iconfont icon-playsong",
  title: "\u64AD\u653E\u5217\u8868"
}, null, -1));
const _hoisted_20 = { class: "playlist-num" };
const _hoisted_21 = { class: "playlist-container" };
const _hoisted_22 = { class: "playlist-header" };
const _hoisted_23 = /* @__PURE__ */ createTextVNode("\u64AD\u653E\u5217\u8868");
const _hoisted_24 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "iconfont icon-del",
  title: "\u6E05\u7A7A\u5217\u8868"
}, null, -1));
const _hoisted_25 = /* @__PURE__ */ createTextVNode("\u6E05\u7A7A\u5217\u8868 ");
const _hoisted_26 = [
  _hoisted_24,
  _hoisted_25
];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_progress_line = __unplugin_components_0$1;
  const _component_el_image = ElImage;
  const _component_router_link = resolveComponent("router-link");
  const _component_lyrics = __unplugin_components_0$2;
  const _component_el_popover = ElPopover;
  const _component_song_list = SongList;
  return $setup.curSongInfo ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: normalizeClass(["play-bar", _ctx.lockName]),
    onMouseenter: _cache[9] || (_cache[9] = ($event) => $setup.enterBar($event)),
    onMouseleave: _cache[10] || (_cache[10] = ($event) => $setup.leaveBar($event))
  }, [
    createBaseVNode("div", _hoisted_1$4, [
      createBaseVNode("div", {
        class: "fold-btn",
        onClick: _cache[0] || (_cache[0] = (...args) => $setup.lockBar && $setup.lockBar(...args))
      }, [
        createBaseVNode("i", {
          class: normalizeClass(["iconfont icon-lock", [_ctx.locked ? "active" : ""]])
        }, null, 2)
      ])
    ]),
    createVNode(_component_progress_line, {
      class: "audioProgress",
      progressWidth: $setup.audioProgressWidth,
      onSetProgressLine: $setup.setAudioProgress
    }, null, 8, ["progressWidth", "onSetProgressLine"]),
    createBaseVNode("div", _hoisted_2$3, [
      createBaseVNode("div", _hoisted_3$3, [
        createBaseVNode("div", _hoisted_4$3, [
          createVNode(_component_router_link, {
            to: { path: "/song", query: { id: $setup.curSongInfo.id } }
          }, {
            default: withCtx(() => [
              createVNode(_component_el_image, {
                src: $setup.curSongInfo.album.picUrl,
                class: "bar-cover-img"
              }, {
                default: withCtx(() => [
                  _hoisted_5$2
                ]),
                _: 1
              }, 8, ["src"])
            ]),
            _: 1
          }, 8, ["to"]),
          createBaseVNode("div", _hoisted_6$1, [
            createVNode(_component_router_link, {
              to: { path: "/song", query: { id: $setup.curSongInfo.id } },
              class: "song_name"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString($setup.curSongInfo.name), 1)
              ]),
              _: 1
            }, 8, ["to"]),
            createBaseVNode("p", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList($setup.curSongInfo.singer, (author, k) => {
                return openBlock(), createBlock(_component_router_link, {
                  to: {},
                  class: "song_author",
                  key: author.name
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(k !== 0 ? " / " + author.name : author.name), 1)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ])
          ]),
          createBaseVNode("div", _hoisted_7$1, [
            createBaseVNode("span", null, toDisplayString(_ctx.$utils.formatSongTime(_ctx.currentTime * 1e3)), 1),
            createTextVNode(" / " + toDisplayString($setup.curSongInfo.duration), 1)
          ])
        ]),
        createBaseVNode("div", _hoisted_8$1, [
          createBaseVNode("div", _hoisted_9, [
            createBaseVNode("i", {
              class: "iconfont icon-audio-prev",
              title: "\u4E0A\u4E00\u9996",
              onClick: _cache[1] || (_cache[1] = withModifiers(($event) => $setup.audioHandler("prev"), ["stop"]))
            }),
            createBaseVNode("i", {
              class: normalizeClass(["iconfont", $setup.playIcon]),
              onClick: _cache[2] || (_cache[2] = withModifiers(($event) => $setup.audioHandler("play"), ["stop"]))
            }, null, 2),
            createBaseVNode("i", {
              class: "iconfont icon-audio-next",
              title: "\u4E0B\u4E00\u9996",
              onClick: _cache[3] || (_cache[3] = withModifiers(($event) => $setup.audioHandler("next"), ["stop"]))
            })
          ])
        ]),
        createBaseVNode("div", _hoisted_10, [
          createBaseVNode("div", _hoisted_11, [
            createBaseVNode("div", _hoisted_12, [
              createBaseVNode("i", {
                class: normalizeClass(["iconfont", $setup.mutedIcon]),
                title: "\u97F3\u91CF",
                onClick: _cache[4] || (_cache[4] = withModifiers((...args) => $setup.volumeHandler && $setup.volumeHandler(...args), ["stop"]))
              }, null, 2),
              createVNode(_component_progress_line, {
                class: "volumeLine",
                progressWidth: $setup.volumeProgressWidth,
                onSetProgressLine: $setup.setvolumeProgress
              }, null, 8, ["progressWidth", "onSetProgressLine"])
            ]),
            createBaseVNode("i", {
              class: normalizeClass(["iconfont", $setup.modeIcon.className]),
              title: $setup.modeIcon.title,
              onClick: _cache[5] || (_cache[5] = withModifiers((...args) => $setup.changePlayMode && $setup.changePlayMode(...args), ["stop"]))
            }, null, 10, _hoisted_13),
            createBaseVNode("div", _hoisted_14, [
              createVNode(_component_el_popover, {
                placement: "top",
                width: 400,
                trigger: "click",
                onHide: $setup.popverClose
              }, {
                reference: withCtx(() => [
                  createBaseVNode("div", _hoisted_15, [
                    createBaseVNode("span", {
                      class: "lyric-btn",
                      title: "\u6B4C\u8BCD",
                      onClick: _cache[6] || (_cache[6] = (...args) => $setup.popverHandle && $setup.popverHandle(...args))
                    }, "\u8BCD")
                  ])
                ]),
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_16, [
                    _hoisted_17,
                    createVNode(_component_lyrics, {
                      sId: $setup.curSongInfo.id,
                      currentTime: _ctx.currentTime
                    }, null, 8, ["sId", "currentTime"])
                  ])
                ]),
                _: 1
              }, 8, ["onHide"]),
              createVNode(_component_el_popover, {
                placement: "top",
                width: 550,
                trigger: "click",
                onHide: $setup.popverClose
              }, {
                reference: withCtx(() => [
                  createBaseVNode("div", {
                    class: "playlist",
                    onClick: _cache[7] || (_cache[7] = (...args) => $setup.popverHandle && $setup.popverHandle(...args))
                  }, [
                    $setup.isShowPlayListTips ? (openBlock(), createElementBlock("span", _hoisted_18, "\u5DF2\u6DFB\u52A0\u5230\u64AD\u653E\u5217\u8868")) : createCommentVNode("", true),
                    _hoisted_19,
                    createBaseVNode("div", _hoisted_20, toDisplayString(99 > $setup.playList.length ? $setup.playList.length : "99+"), 1)
                  ])
                ]),
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_21, [
                    createBaseVNode("h3", _hoisted_22, [
                      createBaseVNode("span", null, [
                        _hoisted_23,
                        createBaseVNode("em", null, "(\u5171" + toDisplayString($setup.playList.length) + "\u9996)", 1)
                      ]),
                      createBaseVNode("div", {
                        class: "delSonglist",
                        onClick: _cache[8] || (_cache[8] = (...args) => $setup.clearSonglist && $setup.clearSonglist(...args))
                      }, _hoisted_26)
                    ]),
                    createVNode(_component_song_list, {
                      songList: $setup.playList,
                      isScroll: true,
                      height: 400,
                      typeSize: "mini",
                      isShowTips: false
                    }, null, 8, ["songList"])
                  ])
                ]),
                _: 1
              }, 8, ["onHide"])
            ])
          ])
        ])
      ])
    ])
  ], 34)) : createCommentVNode("", true);
}
const Bar = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$1], ["__scopeId", "data-v-b4ba1caa"]]);
const PlayBar_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$3 = { class: "play-bar-main" };
const _sfc_main$4 = {
  __name: "PlayBar",
  setup(__props) {
    const audioRef = ref(null);
    const currentTime = ref(0);
    const barType = ref("Bar");
    const playSongStates = (state) => {
      audioRef.value.playAudioType(state);
    };
    const playAudioMode = (mode) => {
      audioRef.value.playAudioMode(mode);
    };
    const setvolumeProgress = (progress) => {
      audioRef.value.setvolumeProgress(progress);
    };
    const setVolumeHandler = (state) => {
      audioRef.value.setVolumeHandler(state);
    };
    const setAudioProgress = (t) => {
      audioRef.value.setAudioProgress(Math.floor(t));
    };
    const setCurrentTime = (t) => {
      currentTime.value = t;
    };
    provide("currentTime", currentTime);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createVNode(Transition, { name: "fade-bar" }, {
          default: withCtx(() => [
            barType.value == "Bar" ? (openBlock(), createBlock(Bar, {
              key: 0,
              onAudioHandler: playSongStates,
              onPlayAudioMode: playAudioMode,
              onSetvolumeProgress: setvolumeProgress,
              onSetAudioProgress: setAudioProgress,
              onSetVolumeHandler: setVolumeHandler
            })) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(_sfc_main$9, {
          ref_key: "audioRef",
          ref: audioRef,
          onSetCurrentTime: setCurrentTime
        }, null, 512)
      ]);
    };
  }
};
const __unplugin_components_3 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-399d313d"]]);
const _imports_0 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wgARCAA8AJEDASIAAhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAUHAwQGAQL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAHvwPn6qAt1V+oW37R94jyA5csdW2Is5XsodcrrCWY1doAAVDb1SGNb4pG7qotc5vjbA0TnYrtsJq6MtgIHc6eEOw2sOYAee8qbFfQucvTntariduCjLyOJ6OJ0DmushJUnITZ8MUXmFgfWLKAPj7HKScwMfMdWIeYAAAAAAD//xAAlEAACAwABAwMFAQAAAAAAAAADBAECBQAREzUGECASFBU0QBb/2gAIAQEAAQUC/m2vLv6IWc3JdEkxW31O82b2pmJ6Fx5WYY0rDOb/ADzZ2aYyaxaMotGrYAWmUF5JK/x2Y67H4XQ5+F0Odki7vNzxVlO4ylHWaEpGBDYlc1O0JbKUdYz9CqOQuSTA+Ov5v20/P8fOuFZNxRotHUgaTk56piaiJlU9DO7ucVRipHcsbQ7fWP3mekE2kh2fPRnUmYiCbaVLOGozsc9Sfr/Yjl+0zN9UZQsJfakV9P8Aj/Tn6ajFwbHw3pJGdwNLEPvySM/itLXa5uKlZVizrDUY1pyu6+C2QsYIsUBQpZhGkBCltLSHabD97VrehMBK9lM1ZOb0rel8BK9lM1ZOf7//xAAUEQEAAAAAAAAAAAAAAAAAAABQ/9oACAEDAQE/ASP/xAAUEQEAAAAAAAAAAAAAAAAAAABQ/9oACAECAQE/ASP/xAA3EAABAwICBQcLBQAAAAAAAAACAQMRABIEExAhIjFBBSBRYXFysRQyM0JSU4GhosHRNEBQkbL/2gAIAQEABj8C/bP/AA/ylM4du68ImU6qM3boIY1UhJuVyfnoMhJRWU1p21ikcMlcGLVVdeuuUL3DUhaWJLdvpw807s+Ju6krCEJmgl6QkXXQPYXFZmEJNaGWuuUCzCWwFUblmKXFNPPliMyPP4U3mpDlu12855O74JXoPrT81+n+sfzQNOpaaEkpoc7U8awCRsvNhPw3/KuWETeol96cbuS/Pm2de5KwjOIZUgdDX0V5NhnEcYc4TMVymie7KiJLSPM8y6m3FG1SGY6Oc52j4JpLvB4JonEjcCrFsTNC2LKtuNJsIYxCdVFhgatdJYUkRIVaG7CI48XqiFITjJuDdFliSNIOHwpgRarrU/NOPYZnL1wUoiTRouCVXAKFhtKE04pOvmStW5il3UonW1kSUY/pKlVhKjNUu6lZrayJEMfLQx3qTGXFmREcKLlHoxOrxprlFjay0gk6qN/DAg5nndtP977U73/tWLsYN25xU2fV2ubsTFyX9mhsB3qtbM2qe1oaEUlbk0BlDcoFMU7icl5oBaWG14rHRSuw75R7v40wasuOsK0iE2ibl3ViSNtW0cWRDop4XWyBVLcvZRNrgHiuKZrFujgnHUcNY4caElG1VTd0cxRJJFd6VKZgdQlUthJ+0W+lEhRRXgtSmYHUK1LYbXtFv/gP/8QAJxABAAIBAgUEAwEBAAAAAAAAAQARITFBEFFxgZEgYaHwQLHB8TD/2gAIAQEAAT8h4OkuXwv8FQvLj0GEf2Goqut5uBfKQ4NZ1Vp0Q7pJtw0eNZZvJaV18orC4F1hoXCthlOjPma+w3Vz2rWWTZZbBdoXl0hUcOfWJOIV6M+phsrhKzn4LDexODWjtw+55Iwa7p/wRCFgBKCNgUYciVhLJ0Hv5ubhLjYLqblRClrgOrKKHUVFEMyg8T97/m+8NxGDUe8Qx1FSFPhUQKOPajLd7w/zSCXrXZmYClonRYT/AG2FFyFlKbtoy3DJLGucMogQNQJ6AZADKu0y1TVVCZLyFVsRGAC1dpk0mqqeZqzLVWw4fI/qKBS1htrlANeDs+iCdbyBnwpEAAKd9WvmfJ/pPr+yV6r9eZlxD0VTNKnV8XXAmbOB3hkdAV5Z/tcLHBUd+Co1sOtVtKogmuuCur9TWAbNuzSr0uaoUHaLXjnmWHrvUZ27h2j/AAlBS4TSrIiViuXtLgJIsVdvRiaglfs09BhwUmjFLG7SvkZftRV1/XSBGSkMMdsTta+RlmTzl/XThXCvTX4//9oADAMBAAIAAwAAABDwxThCSDDTzzjQCBTjhzyQDCgxgDTTyyzywxxwzzz/xAAUEQEAAAAAAAAAAAAAAAAAAABQ/9oACAEDAQE/ECP/xAAUEQEAAAAAAAAAAAAAAAAAAABQ/9oACAECAQE/ECP/xAAlEAEBAAICAgEFAQADAAAAAAABEQAhMUFRYXEQIIGRofAwwdH/2gAIAQEAAT8Q+nJMqsXTI4eKt495UJWn9ynh+MGvnFnznPf8yuDD1/u8pOfzg3vn+5eS8e8sdv3nQHxMB830hD8a9jJLAJrQ7qeM5cxBGId4AOsLWiGkNIm8VIQgBIK3/wBMuZMBG6K6oNnjEOjl30iqFVnvFDSFHOlqxPLcDHCGXskg5CHqNOtos4MIBpQ6/WOugpEKYjtauXTPC69DXP3AzUB5clzKYvewe4NrCG0nCOd/R41hoJrQfKBfnEwkRyrr/wBY1UQ0cg5Sjv1gPzaqorW9A02cm8i4Al+yE8g5He5iypjs9WWoiA48NvT1m+nkXRZUPXX3sTJ9IbrG2CELlAEGpbTjDehcAUiwqjVPMuKK2+QnkGo45uE2i75XdIeyLcu8gQktQBrhF7McqaIw1Y2ZrjjjFxJfS8rab7xSNqopITynKXA4XxKAE8gn2FVehAHKuNqiiSfMB/Fxol2paRR9ifjLjhEADtXE5YQNe9AfxTHr7kS0yj7E/GdvxnAumudFSpuKqbcPnLRhetCk68QP6wQ2idFvR0qJwI5sXKLWJA9ipNR1qYR0Y9u7LuegRjolr9Ytnr/cfV45mPUG8PXl4hlvfj/fzHgm8XkbwlT4HUWdR+UxYSTGbT5vo19HOcFvFx8jOVNCjt41hHBNukIDytmI1xwppz8zYb8YX/gAUxCdg2pFziqccR3cU2DDML2wQprexw5gbClHluDHc0iQHcJMQUVlW0rXT8cfYwjRIg8iOItSsT8XH7z0/QdOmAa8DIPLcQ8Jm0/mi/F39y2x09S6YB+BkPBkeDzxkAkJkSQmTIeDIeMhbC4AAAA4PGSfbA+sn/N//9k=";
const SideBar_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$2 = (n) => (pushScopeId("data-v-314644e7"), n = n(), popScopeId(), n);
const _hoisted_1$2 = { class: "side-main" };
const _hoisted_2$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0,
  alt: ""
}, null, -1));
const _hoisted_3$2 = { class: "nav" };
const _hoisted_4$2 = ["onClick"];
const _sfc_main$3 = {
  __name: "SideBar",
  setup(__props) {
    const route = useRoute();
    const router2 = useRouter();
    const menuList = reactive([
      {
        name: "\u9996\u9875",
        path: "index"
      },
      {
        name: "\u6392\u884C\u699C",
        path: "rank"
      },
      {
        name: "\u6B4C\u5355",
        path: "playlist"
      },
      {
        name: "MV",
        path: "mvlist"
      }
    ]);
    const menuActive = computed(() => route.path);
    const selectMenu = (item) => {
      router2.push({
        path: "/" + item
      });
    };
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createVNode(_component_router_link, {
          to: "/",
          class: "logo"
        }, {
          default: withCtx(() => [
            _hoisted_2$2
          ]),
          _: 1
        }),
        createBaseVNode("ul", _hoisted_3$2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(menuList, (item) => {
            return openBlock(), createElementBlock("li", {
              class: normalizeClass({ "is-active": unref(menuActive).indexOf(item.path) >= 0 }),
              key: item.path,
              onClick: ($event) => selectMenu(item.path)
            }, [
              createBaseVNode("i", {
                class: normalizeClass(["iconfont", `icon-${item.path}`])
              }, null, 2),
              createBaseVNode("span", null, toDisplayString(item.name), 1)
            ], 10, _hoisted_4$2);
          }), 128))
        ])
      ]);
    };
  }
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-314644e7"]]);
const elDialog = "";
const elOverlay = "";
const elButton = "";
const elForm = "";
const elFormItem = "";
const Login_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$2 = {
  name: "Login",
  setup(props) {
    const store = useStore();
    const { proxy } = getCurrentInstance();
    const isVisible2 = ref(true);
    const handleClose = () => store.setLoginDialog(false);
    const formInfo = reactive({
      loginForm: {
        phone: "",
        pwd: ""
      },
      loginFormRules: {
        phone: [{ required: true, message: "\u8BF7\u8F93\u5165\u7F51\u6613\u5E10\u53F7", trigger: "blur" }],
        pwd: [{ required: true, message: "\u8BF7\u8F93\u5165\u7F51\u6613\u5BC6\u7801", trigger: "blur" }]
      }
    });
    const submitForm = () => {
      proxy.$refs.loginFormRef.validate(async (valid) => {
        if (valid) {
          const { data: res } = await proxy.$http.login(formInfo["loginForm"]);
          if (res.code !== 200) {
            proxy.$msg.error(res.msg);
          } else {
            getUserInfo2(res.profile.userId);
            window.localStorage.setItem("token", res.token);
            window.localStorage.setItem("cookie", res.cookie);
            store.setLoginDialog(false);
          }
        }
      });
    };
    const getUserInfo2 = async (uid2) => {
      const { data: res } = await proxy.$http.getUserInfo({ uid: uid2 });
      if (res.code !== 200) {
        proxy.$msg.error(res.msg);
      } else {
        window.localStorage.setItem("isLogin", true);
        window.localStorage.setItem("userInfo", JSON.stringify(res.profile));
        store.setLogin(true);
        store.setUserInfo(res.profile);
      }
    };
    return {
      handleClose,
      isVisible: isVisible2,
      ...toRefs(formInfo),
      submitForm
    };
  }
};
const _withScopeId$1 = (n) => (pushScopeId("data-v-1e40bf75"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "login" };
const _hoisted_2$1 = { class: "login-wrapper" };
const _hoisted_3$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0,
  alt: "",
  class: "login-logo"
}, null, -1));
const _hoisted_4$1 = { class: "dialog-footer" };
const _hoisted_5$1 = /* @__PURE__ */ createTextVNode("\u767B\u5F55");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_input = ElInput;
  const _component_el_form_item = ElFormItem;
  const _component_el_form = ElForm;
  const _component_el_button = ElButton;
  const _component_el_dialog = ElDialog;
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createVNode(_component_el_dialog, {
      modelValue: $setup.isVisible,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.isVisible = $event),
      width: "30%",
      "before-close": $setup.handleClose
    }, {
      footer: withCtx(() => [
        createBaseVNode("span", _hoisted_4$1, [
          createVNode(_component_el_button, {
            type: "primary",
            onClick: $setup.submitForm
          }, {
            default: withCtx(() => [
              _hoisted_5$1
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ]),
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_2$1, [
          _hoisted_3$1,
          createVNode(_component_el_form, {
            ref: "loginFormRef",
            model: _ctx.loginForm,
            rules: _ctx.loginFormRules,
            "label-width": ""
          }, {
            default: withCtx(() => [
              createVNode(_component_el_form_item, {
                prop: "phone",
                "label-width": ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: _ctx.loginForm.phone,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.loginForm.phone = $event),
                    placeholder: "\u8BF7\u8F93\u5165\u7F51\u6613\u4E91\u5E10\u53F7\u767B\u5F55"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, {
                prop: "pwd",
                "label-width": ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: _ctx.loginForm.pwd,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.loginForm.pwd = $event),
                    placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801",
                    "show-password": ""
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["model", "rules"])
        ])
      ]),
      _: 1
    }, 8, ["modelValue", "before-close"])
  ]);
}
const Login = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render], ["__scopeId", "data-v-1e40bf75"]]);
const Header_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-7d228988"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "header" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "menu" }, null, -1));
const _hoisted_3 = {
  key: 0,
  class: "logined"
};
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", {
  slot: "placeholder",
  class: "image-slot"
}, [
  /* @__PURE__ */ createBaseVNode("i", { class: "iconfont icon-placeholder" })
], -1));
const _hoisted_5 = { class: "nickname" };
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "set" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "iconfont icon-set" })
], -1));
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "iconfont icon-quit" }, null, -1));
const _hoisted_8 = [
  _hoisted_7
];
const _sfc_main$1 = {
  __name: "Header",
  setup(__props) {
    const store = useStore();
    const route = useRoute();
    const { proxy } = getCurrentInstance();
    const loginDialog = () => store.setLoginDialog(true);
    const isLogin = computed(() => {
      return store.getisLogin;
    });
    const userInfo = computed(() => {
      return store.getuserInfo;
    });
    const logout2 = async () => {
      const { data: res } = await proxy.$http.logout();
      if (res.code !== 200) {
        return proxy.$msg.error("\u6570\u636E\u8BF7\u6C42\u5931\u8D25");
      }
      ElMessage.success("\u9000\u51FA\u6210\u529F");
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("cookie");
      window.localStorage.removeItem("userInfo");
      window.localStorage.removeItem("isLogin");
      store.setUserInfo({});
      store.setLogin(false);
      if (route.path.indexOf("/my") >= 0) {
        router.push({ path: "/" });
      }
    };
    return (_ctx, _cache) => {
      const _component_el_image = ElImage;
      return openBlock(), createElementBlock("header", _hoisted_1, [
        _hoisted_2,
        createBaseVNode("div", {
          class: normalizeClass(unref(isLogin) ? "user-avatar" : "login")
        }, [
          unref(isLogin) ? (openBlock(), createElementBlock("div", _hoisted_3, [
            createVNode(_component_el_image, {
              src: unref(userInfo).avatarUrl,
              class: "avatar"
            }, {
              default: withCtx(() => [
                _hoisted_4
              ]),
              _: 1
            }, 8, ["src"]),
            createBaseVNode("span", _hoisted_5, toDisplayString(unref(userInfo).nickname), 1),
            _hoisted_6,
            createBaseVNode("span", {
              class: "quit",
              onClick: logout2
            }, _hoisted_8)
          ])) : (openBlock(), createElementBlock("span", {
            key: 1,
            class: "login-btn",
            onClick: loginDialog
          }, "\u767B\u5F55"))
        ], 2)
      ]);
    };
  }
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7d228988"]]);
const App_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = {
  __name: "App",
  setup(__props) {
    const store = useStore();
    const loginDialogVisible = computed(() => store.loginDialogVisible);
    return (_ctx, _cache) => {
      const _component_SideBar = __unplugin_components_0;
      const _component_el_aside = ElAside;
      const _component_router_view = resolveComponent("router-view");
      const _component_el_main = ElMain;
      const _component_play_bar = __unplugin_components_3;
      const _component_el_container = ElContainer;
      return openBlock(), createBlock(_component_el_container, null, {
        default: withCtx(() => [
          createVNode(_component_el_aside, null, {
            default: withCtx(() => [
              createVNode(_component_SideBar)
            ]),
            _: 1
          }),
          createVNode(_component_el_main, null, {
            default: withCtx(() => [
              createVNode(Header),
              createVNode(_component_router_view)
            ]),
            _: 1
          }),
          withDirectives(createVNode(Login, null, null, 512), [
            [vShow, unref(loginDialogVisible)]
          ]),
          createVNode(_component_play_bar)
        ]),
        _: 1
      });
    };
  }
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5636c924"]]);
const app = createApp(App);
app.config.globalProperties["$http"] = getApi;
app.config.globalProperties["$utils"] = util;
app.config.globalProperties["$COMMON"] = common;
app.config.globalProperties["$msg"] = ElMessage;
app.use(createPinia()).use(router$1).mount("#app");
export {
  __unplugin_components_0$2 as $,
  toRefs as A,
  createTextVNode as B,
  normalizeClass as C,
  defineComponent as D,
  ElImage as E,
  Fragment as F,
  _export_sfc$2 as G,
  buildProps as H,
  useNamespace as I,
  renderSlot as J,
  mergeProps as K,
  normalizeProps as L,
  withInstall as M,
  withNoopInstall as N,
  useRoute as O,
  watchEffect as P,
  ElPopover as Q,
  withDirectives as R,
  SongList as S,
  debounce_1 as T,
  isObject_1 as U,
  isFunction$4 as V,
  throwError as W,
  getScrollContainer as X,
  getOffsetTopDistance as Y,
  onBeforeRouteUpdate as Z,
  _export_sfc as _,
  createBaseVNode as a,
  withModifiers as a0,
  resolveDirective as a1,
  definePropType as a2,
  shallowRef as a3,
  useEventListener as a4,
  useResizeObserver as a5,
  normalizeStyle as a6,
  unref as a7,
  vShow as a8,
  onUnmounted as a9,
  Transition as aa,
  useAttrs$1 as ab,
  withKeys as ac,
  useCssVars as ad,
  createVNode as b,
  createBlock as c,
  createElementBlock as d,
  renderList as e,
  createCommentVNode as f,
  popScopeId as g,
  h,
  ref as i,
  onUpdated as j,
  watch as k,
  onMounted as l,
  onBeforeUnmount as m,
  nextTick as n,
  openBlock as o,
  pushScopeId as p,
  provide as q,
  resolveComponent as r,
  onBeforeUpdate as s,
  toDisplayString as t,
  computed as u,
  useRouter as v,
  withCtx as w,
  getCurrentInstance as x,
  useStore as y,
  reactive as z
};
