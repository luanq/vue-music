import { u as computed, o as openBlock, d as createElementBlock, C as normalizeClass, a6 as normalizeStyle, a7 as unref, p as pushScopeId, g as popScopeId, B as createTextVNode, D as defineComponent, a as createBaseVNode, R as withDirectives, a8 as vShow, b as createVNode, t as toDisplayString, i as ref, f as createCommentVNode, z as reactive, a0 as withModifiers, k as watch, l as onMounted, a9 as onUnmounted, w as withCtx, F as Fragment, e as renderList, aa as Transition, ab as useAttrs, K as mergeProps, c as createBlock, ac as withKeys, ad as useCssVars, n as nextTick, x as getCurrentInstance, _ as _export_sfc, O as useRoute, y as useStore, Z as onBeforeRouteUpdate, A as toRefs, r as resolveComponent, E as ElImage } from "./index.4ce00245.js";
const style = "";
var t = Object.defineProperty, e = Object.defineProperties, r = Object.getOwnPropertyDescriptors, i = Object.getOwnPropertySymbols, n = Object.prototype.hasOwnProperty, a = Object.prototype.propertyIsEnumerable, s = (e2, r2, i2) => r2 in e2 ? t(e2, r2, { enumerable: true, configurable: true, writable: true, value: i2 }) : e2[r2] = i2, o = (t2, e2) => {
  for (var r2 in e2 || (e2 = {}))
    n.call(e2, r2) && s(t2, r2, e2[r2]);
  if (i)
    for (var r2 of i(e2))
      a.call(e2, r2) && s(t2, r2, e2[r2]);
  return t2;
}, l = (t2, i2) => e(t2, r(i2));
function K(t2, e2, r2, i2) {
  var n2, a2 = false, s2 = 0;
  function o2() {
    n2 && clearTimeout(n2);
  }
  function l2() {
    for (var l3 = arguments.length, u = new Array(l3), d = 0; d < l3; d++)
      u[d] = arguments[d];
    var c = this, h = Date.now() - s2;
    function f() {
      s2 = Date.now(), r2.apply(c, u);
    }
    function g() {
      n2 = void 0;
    }
    a2 || (i2 && !n2 && f(), o2(), void 0 === i2 && h > t2 ? f() : true !== e2 && (n2 = setTimeout(i2 ? g : f, void 0 === i2 ? t2 - h : t2)));
  }
  return "boolean" != typeof e2 && (i2 = r2, r2 = e2, e2 = void 0), l2.cancel = function() {
    o2(), a2 = true;
  }, l2;
}
function V(t2, e2, r2) {
  return void 0 === r2 ? K(t2, e2, false) : K(t2, r2, false !== e2);
}
function H(t2) {
  return t2 && t2.__esModule && Object.prototype.hasOwnProperty.call(t2, "default") ? t2.default : t2;
}
var W = { exports: {} };
"undefined" != typeof window && (W.exports = function(t2) {
  var e2 = {};
  function r2(i2) {
    if (e2[i2])
      return e2[i2].exports;
    var n2 = e2[i2] = { i: i2, l: false, exports: {} };
    return t2[i2].call(n2.exports, n2, n2.exports, r2), n2.l = true, n2.exports;
  }
  return r2.m = t2, r2.c = e2, r2.d = function(t3, e3, i2) {
    r2.o(t3, e3) || Object.defineProperty(t3, e3, { enumerable: true, get: i2 });
  }, r2.r = function(t3) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t3, "__esModule", { value: true });
  }, r2.t = function(t3, e3) {
    if (1 & e3 && (t3 = r2(t3)), 8 & e3)
      return t3;
    if (4 & e3 && "object" == typeof t3 && t3 && t3.__esModule)
      return t3;
    var i2 = /* @__PURE__ */ Object.create(null);
    if (r2.r(i2), Object.defineProperty(i2, "default", { enumerable: true, value: t3 }), 2 & e3 && "string" != typeof t3)
      for (var n2 in t3)
        r2.d(i2, n2, function(e4) {
          return t3[e4];
        }.bind(null, n2));
    return i2;
  }, r2.n = function(t3) {
    var e3 = t3 && t3.__esModule ? function() {
      return t3.default;
    } : function() {
      return t3;
    };
    return r2.d(e3, "a", e3), e3;
  }, r2.o = function(t3, e3) {
    return Object.prototype.hasOwnProperty.call(t3, e3);
  }, r2.p = "/dist/", r2(r2.s = "./src/hls.ts");
}({ "./node_modules/eventemitter3/index.js": function(t2, e2, r2) {
  var i2 = Object.prototype.hasOwnProperty, n2 = "~";
  function a2() {
  }
  function s2(t3, e3, r3) {
    this.fn = t3, this.context = e3, this.once = r3 || false;
  }
  function o2(t3, e3, r3, i3, a3) {
    if ("function" != typeof r3)
      throw new TypeError("The listener must be a function");
    var o3 = new s2(r3, i3 || t3, a3), l3 = n2 ? n2 + e3 : e3;
    return t3._events[l3] ? t3._events[l3].fn ? t3._events[l3] = [t3._events[l3], o3] : t3._events[l3].push(o3) : (t3._events[l3] = o3, t3._eventsCount++), t3;
  }
  function l2(t3, e3) {
    0 == --t3._eventsCount ? t3._events = new a2() : delete t3._events[e3];
  }
  function u() {
    this._events = new a2(), this._eventsCount = 0;
  }
  Object.create && (a2.prototype = /* @__PURE__ */ Object.create(null), new a2().__proto__ || (n2 = false)), u.prototype.eventNames = function() {
    var t3, e3, r3 = [];
    if (0 === this._eventsCount)
      return r3;
    for (e3 in t3 = this._events)
      i2.call(t3, e3) && r3.push(n2 ? e3.slice(1) : e3);
    return Object.getOwnPropertySymbols ? r3.concat(Object.getOwnPropertySymbols(t3)) : r3;
  }, u.prototype.listeners = function(t3) {
    var e3 = n2 ? n2 + t3 : t3, r3 = this._events[e3];
    if (!r3)
      return [];
    if (r3.fn)
      return [r3.fn];
    for (var i3 = 0, a3 = r3.length, s3 = new Array(a3); i3 < a3; i3++)
      s3[i3] = r3[i3].fn;
    return s3;
  }, u.prototype.listenerCount = function(t3) {
    var e3 = n2 ? n2 + t3 : t3, r3 = this._events[e3];
    return r3 ? r3.fn ? 1 : r3.length : 0;
  }, u.prototype.emit = function(t3, e3, r3, i3, a3, s3) {
    var o3 = n2 ? n2 + t3 : t3;
    if (!this._events[o3])
      return false;
    var l3, u2, d = this._events[o3], c = arguments.length;
    if (d.fn) {
      switch (d.once && this.removeListener(t3, d.fn, void 0, true), c) {
        case 1:
          return d.fn.call(d.context), true;
        case 2:
          return d.fn.call(d.context, e3), true;
        case 3:
          return d.fn.call(d.context, e3, r3), true;
        case 4:
          return d.fn.call(d.context, e3, r3, i3), true;
        case 5:
          return d.fn.call(d.context, e3, r3, i3, a3), true;
        case 6:
          return d.fn.call(d.context, e3, r3, i3, a3, s3), true;
      }
      for (u2 = 1, l3 = new Array(c - 1); u2 < c; u2++)
        l3[u2 - 1] = arguments[u2];
      d.fn.apply(d.context, l3);
    } else {
      var h, f = d.length;
      for (u2 = 0; u2 < f; u2++)
        switch (d[u2].once && this.removeListener(t3, d[u2].fn, void 0, true), c) {
          case 1:
            d[u2].fn.call(d[u2].context);
            break;
          case 2:
            d[u2].fn.call(d[u2].context, e3);
            break;
          case 3:
            d[u2].fn.call(d[u2].context, e3, r3);
            break;
          case 4:
            d[u2].fn.call(d[u2].context, e3, r3, i3);
            break;
          default:
            if (!l3)
              for (h = 1, l3 = new Array(c - 1); h < c; h++)
                l3[h - 1] = arguments[h];
            d[u2].fn.apply(d[u2].context, l3);
        }
    }
    return true;
  }, u.prototype.on = function(t3, e3, r3) {
    return o2(this, t3, e3, r3, false);
  }, u.prototype.once = function(t3, e3, r3) {
    return o2(this, t3, e3, r3, true);
  }, u.prototype.removeListener = function(t3, e3, r3, i3) {
    var a3 = n2 ? n2 + t3 : t3;
    if (!this._events[a3])
      return this;
    if (!e3)
      return l2(this, a3), this;
    var s3 = this._events[a3];
    if (s3.fn)
      s3.fn !== e3 || i3 && !s3.once || r3 && s3.context !== r3 || l2(this, a3);
    else {
      for (var o3 = 0, u2 = [], d = s3.length; o3 < d; o3++)
        (s3[o3].fn !== e3 || i3 && !s3[o3].once || r3 && s3[o3].context !== r3) && u2.push(s3[o3]);
      u2.length ? this._events[a3] = 1 === u2.length ? u2[0] : u2 : l2(this, a3);
    }
    return this;
  }, u.prototype.removeAllListeners = function(t3) {
    var e3;
    return t3 ? (e3 = n2 ? n2 + t3 : t3, this._events[e3] && l2(this, e3)) : (this._events = new a2(), this._eventsCount = 0), this;
  }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = n2, u.EventEmitter = u, t2.exports = u;
}, "./node_modules/url-toolkit/src/url-toolkit.js": function(t2, e2, r2) {
  var i2, n2, a2, s2, o2;
  i2 = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/?#]*\/)*[^;?#]*)?(;[^?#]*)?(\?[^#]*)?(#[^]*)?$/, n2 = /^([^\/?#]*)([^]*)$/, a2 = /(?:\/|^)\.(?=\/)/g, s2 = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g, o2 = { buildAbsoluteURL: function(t3, e3, r3) {
    if (r3 = r3 || {}, t3 = t3.trim(), !(e3 = e3.trim())) {
      if (!r3.alwaysNormalize)
        return t3;
      var i3 = o2.parseURL(t3);
      if (!i3)
        throw new Error("Error trying to parse base URL.");
      return i3.path = o2.normalizePath(i3.path), o2.buildURLFromParts(i3);
    }
    var a3 = o2.parseURL(e3);
    if (!a3)
      throw new Error("Error trying to parse relative URL.");
    if (a3.scheme)
      return r3.alwaysNormalize ? (a3.path = o2.normalizePath(a3.path), o2.buildURLFromParts(a3)) : e3;
    var s3 = o2.parseURL(t3);
    if (!s3)
      throw new Error("Error trying to parse base URL.");
    if (!s3.netLoc && s3.path && "/" !== s3.path[0]) {
      var l2 = n2.exec(s3.path);
      s3.netLoc = l2[1], s3.path = l2[2];
    }
    s3.netLoc && !s3.path && (s3.path = "/");
    var u = { scheme: s3.scheme, netLoc: a3.netLoc, path: null, params: a3.params, query: a3.query, fragment: a3.fragment };
    if (!a3.netLoc && (u.netLoc = s3.netLoc, "/" !== a3.path[0]))
      if (a3.path) {
        var d = s3.path, c = d.substring(0, d.lastIndexOf("/") + 1) + a3.path;
        u.path = o2.normalizePath(c);
      } else
        u.path = s3.path, a3.params || (u.params = s3.params, a3.query || (u.query = s3.query));
    return null === u.path && (u.path = r3.alwaysNormalize ? o2.normalizePath(a3.path) : a3.path), o2.buildURLFromParts(u);
  }, parseURL: function(t3) {
    var e3 = i2.exec(t3);
    return e3 ? { scheme: e3[1] || "", netLoc: e3[2] || "", path: e3[3] || "", params: e3[4] || "", query: e3[5] || "", fragment: e3[6] || "" } : null;
  }, normalizePath: function(t3) {
    for (t3 = t3.split("").reverse().join("").replace(a2, ""); t3.length !== (t3 = t3.replace(s2, "")).length; )
      ;
    return t3.split("").reverse().join("");
  }, buildURLFromParts: function(t3) {
    return t3.scheme + t3.netLoc + t3.path + t3.params + t3.query + t3.fragment;
  } }, t2.exports = o2;
}, "./node_modules/webworkify-webpack/index.js": function(t2, e2, r2) {
  function i2(t3) {
    var e3 = {};
    function r3(i4) {
      if (e3[i4])
        return e3[i4].exports;
      var n3 = e3[i4] = { i: i4, l: false, exports: {} };
      return t3[i4].call(n3.exports, n3, n3.exports, r3), n3.l = true, n3.exports;
    }
    r3.m = t3, r3.c = e3, r3.i = function(t4) {
      return t4;
    }, r3.d = function(t4, e4, i4) {
      r3.o(t4, e4) || Object.defineProperty(t4, e4, { configurable: false, enumerable: true, get: i4 });
    }, r3.r = function(t4) {
      Object.defineProperty(t4, "__esModule", { value: true });
    }, r3.n = function(t4) {
      var e4 = t4 && t4.__esModule ? function() {
        return t4.default;
      } : function() {
        return t4;
      };
      return r3.d(e4, "a", e4), e4;
    }, r3.o = function(t4, e4) {
      return Object.prototype.hasOwnProperty.call(t4, e4);
    }, r3.p = "/", r3.oe = function(t4) {
      throw console.error(t4), t4;
    };
    var i3 = r3(r3.s = ENTRY_MODULE);
    return i3.default || i3;
  }
  var n2 = "[\\.|\\-|\\+|\\w|/|@]+", a2 = "\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)";
  function s2(t3) {
    return (t3 + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
  }
  function o2(t3, e3, i3) {
    var o3 = {};
    o3[i3] = [];
    var l3 = e3.toString(), u = l3.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);
    if (!u)
      return o3;
    for (var d, c = u[1], h = new RegExp("(\\\\n|\\W)" + s2(c) + a2, "g"); d = h.exec(l3); )
      "dll-reference" !== d[3] && o3[i3].push(d[3]);
    for (h = new RegExp("\\(" + s2(c) + '\\("(dll-reference\\s(' + n2 + '))"\\)\\)' + a2, "g"); d = h.exec(l3); )
      t3[d[2]] || (o3[i3].push(d[1]), t3[d[2]] = r2(d[1]).m), o3[d[2]] = o3[d[2]] || [], o3[d[2]].push(d[4]);
    for (var f, g = Object.keys(o3), v = 0; v < g.length; v++)
      for (var p = 0; p < o3[g[v]].length; p++)
        f = o3[g[v]][p], isNaN(1 * f) || (o3[g[v]][p] = 1 * o3[g[v]][p]);
    return o3;
  }
  function l2(t3) {
    return Object.keys(t3).reduce(function(e3, r3) {
      return e3 || t3[r3].length > 0;
    }, false);
  }
  t2.exports = function(t3, e3) {
    e3 = e3 || {};
    var n3 = { main: r2.m }, a3 = e3.all ? { main: Object.keys(n3.main) } : function(t4, e4) {
      for (var r3 = { main: [e4] }, i3 = { main: [] }, n4 = { main: {} }; l2(r3); )
        for (var a4 = Object.keys(r3), s4 = 0; s4 < a4.length; s4++) {
          var u2 = a4[s4], d2 = r3[u2].pop();
          if (n4[u2] = n4[u2] || {}, !n4[u2][d2] && t4[u2][d2]) {
            n4[u2][d2] = true, i3[u2] = i3[u2] || [], i3[u2].push(d2);
            for (var c2 = o2(t4, t4[u2][d2], u2), h = Object.keys(c2), f = 0; f < h.length; f++)
              r3[h[f]] = r3[h[f]] || [], r3[h[f]] = r3[h[f]].concat(c2[h[f]]);
          }
        }
      return i3;
    }(n3, t3), s3 = "";
    Object.keys(a3).filter(function(t4) {
      return "main" !== t4;
    }).forEach(function(t4) {
      for (var e4 = 0; a3[t4][e4]; )
        e4++;
      a3[t4].push(e4), n3[t4][e4] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })", s3 = s3 + "var " + t4 + " = (" + i2.toString().replace("ENTRY_MODULE", JSON.stringify(e4)) + ")({" + a3[t4].map(function(e5) {
        return JSON.stringify(e5) + ": " + n3[t4][e5].toString();
      }).join(",") + "});\n";
    }), s3 = s3 + "new ((" + i2.toString().replace("ENTRY_MODULE", JSON.stringify(t3)) + ")({" + a3.main.map(function(t4) {
      return JSON.stringify(t4) + ": " + n3.main[t4].toString();
    }).join(",") + "}))(self);";
    var u = new window.Blob([s3], { type: "text/javascript" });
    if (e3.bare)
      return u;
    var d = (window.URL || window.webkitURL || window.mozURL || window.msURL).createObjectURL(u), c = new window.Worker(d);
    return c.objectURL = d, c;
  };
}, "./src/config.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "hlsDefaultConfig", function() {
    return b;
  }), r2.d(e2, "mergeConfig", function() {
    return L;
  }), r2.d(e2, "enableStreamingMode", function() {
    return A;
  });
  var i2 = r2("./src/controller/abr-controller.ts"), n2 = r2("./src/controller/audio-stream-controller.ts"), a2 = r2("./src/controller/audio-track-controller.ts"), s2 = r2("./src/controller/subtitle-stream-controller.ts"), o2 = r2("./src/controller/subtitle-track-controller.ts"), l2 = r2("./src/controller/buffer-controller.ts"), u = r2("./src/controller/timeline-controller.ts"), d = r2("./src/controller/cap-level-controller.ts"), c = r2("./src/controller/fps-controller.ts"), h = r2("./src/controller/eme-controller.ts"), f = r2("./src/utils/xhr-loader.ts"), g = r2("./src/utils/fetch-loader.ts"), v = r2("./src/utils/cues.ts"), p = r2("./src/utils/mediakeys-helper.ts"), m = r2("./src/utils/logger.ts");
  function y() {
    return (y = Object.assign || function(t3) {
      for (var e3 = 1; e3 < arguments.length; e3++) {
        var r3 = arguments[e3];
        for (var i3 in r3)
          Object.prototype.hasOwnProperty.call(r3, i3) && (t3[i3] = r3[i3]);
      }
      return t3;
    }).apply(this, arguments);
  }
  function E(t3, e3) {
    var r3 = Object.keys(t3);
    if (Object.getOwnPropertySymbols) {
      var i3 = Object.getOwnPropertySymbols(t3);
      e3 && (i3 = i3.filter(function(e4) {
        return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
      })), r3.push.apply(r3, i3);
    }
    return r3;
  }
  function T(t3) {
    for (var e3 = 1; e3 < arguments.length; e3++) {
      var r3 = null != arguments[e3] ? arguments[e3] : {};
      e3 % 2 ? E(Object(r3), true).forEach(function(e4) {
        S(t3, e4, r3[e4]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r3)) : E(Object(r3)).forEach(function(e4) {
        Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(r3, e4));
      });
    }
    return t3;
  }
  function S(t3, e3, r3) {
    return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
  }
  var b = T(T({ autoStartLoad: true, startPosition: -1, defaultAudioCodec: void 0, debug: false, capLevelOnFPSDrop: false, capLevelToPlayerSize: false, initialLiveManifestSize: 1, maxBufferLength: 30, backBufferLength: 1 / 0, maxBufferSize: 6e7, maxBufferHole: 0.1, highBufferWatchdogPeriod: 2, nudgeOffset: 0.1, nudgeMaxRetry: 3, maxFragLookUpTolerance: 0.25, liveSyncDurationCount: 3, liveMaxLatencyDurationCount: 1 / 0, liveSyncDuration: void 0, liveMaxLatencyDuration: void 0, maxLiveSyncPlaybackRate: 1, liveDurationInfinity: false, liveBackBufferLength: null, maxMaxBufferLength: 600, enableWorker: true, enableSoftwareAES: true, manifestLoadingTimeOut: 1e4, manifestLoadingMaxRetry: 1, manifestLoadingRetryDelay: 1e3, manifestLoadingMaxRetryTimeout: 64e3, startLevel: void 0, levelLoadingTimeOut: 1e4, levelLoadingMaxRetry: 4, levelLoadingRetryDelay: 1e3, levelLoadingMaxRetryTimeout: 64e3, fragLoadingTimeOut: 2e4, fragLoadingMaxRetry: 6, fragLoadingRetryDelay: 1e3, fragLoadingMaxRetryTimeout: 64e3, startFragPrefetch: false, fpsDroppedMonitoringPeriod: 5e3, fpsDroppedMonitoringThreshold: 0.2, appendErrorMaxRetry: 3, loader: f.default, fLoader: void 0, pLoader: void 0, xhrSetup: void 0, licenseXhrSetup: void 0, licenseResponseCallback: void 0, abrController: i2.default, bufferController: l2.default, capLevelController: d.default, fpsController: c.default, stretchShortVideoTrack: false, maxAudioFramesDrift: 1, forceKeyFrameOnDiscontinuity: true, abrEwmaFastLive: 3, abrEwmaSlowLive: 9, abrEwmaFastVoD: 3, abrEwmaSlowVoD: 9, abrEwmaDefaultEstimate: 5e5, abrBandWidthFactor: 0.95, abrBandWidthUpFactor: 0.7, abrMaxWithRealBitrate: false, maxStarvationDelay: 4, maxLoadingDelay: 4, minAutoBitrate: 0, emeEnabled: false, widevineLicenseUrl: void 0, drmSystemOptions: {}, requestMediaKeySystemAccessFunc: p.requestMediaKeySystemAccess, testBandwidth: true, progressive: false, lowLatencyMode: true }, { cueHandler: v.default, enableCEA708Captions: true, enableWebVTT: true, enableIMSC1: true, captionsTextTrack1Label: "English", captionsTextTrack1LanguageCode: "en", captionsTextTrack2Label: "Spanish", captionsTextTrack2LanguageCode: "es", captionsTextTrack3Label: "Unknown CC", captionsTextTrack3LanguageCode: "", captionsTextTrack4Label: "Unknown CC", captionsTextTrack4LanguageCode: "", renderTextTracksNatively: true }), {}, { subtitleStreamController: s2.SubtitleStreamController, subtitleTrackController: o2.default, timelineController: u.TimelineController, audioStreamController: n2.default, audioTrackController: a2.default, emeController: h.default });
  function L(t3, e3) {
    if ((e3.liveSyncDurationCount || e3.liveMaxLatencyDurationCount) && (e3.liveSyncDuration || e3.liveMaxLatencyDuration))
      throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
    if (void 0 !== e3.liveMaxLatencyDurationCount && (void 0 === e3.liveSyncDurationCount || e3.liveMaxLatencyDurationCount <= e3.liveSyncDurationCount))
      throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');
    if (void 0 !== e3.liveMaxLatencyDuration && (void 0 === e3.liveSyncDuration || e3.liveMaxLatencyDuration <= e3.liveSyncDuration))
      throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');
    return y({}, t3, e3);
  }
  function A(t3) {
    var e3 = t3.loader;
    e3 !== g.default && e3 !== f.default ? (m.logger.log("[config]: Custom loader detected, cannot enable progressive streaming"), t3.progressive = false) : Object(g.fetchSupported)() && (t3.loader = g.default, t3.progressive = true, t3.enableSoftwareAES = true, m.logger.log("[config]: Progressive streaming enabled, using FetchLoader"));
  }
}, "./src/controller/abr-controller.ts": function(t2, e2, r2) {
  r2.r(e2);
  var i2 = r2("./src/polyfills/number.ts"), n2 = r2("./src/utils/ewma-bandwidth-estimator.ts"), a2 = r2("./src/events.ts"), s2 = r2("./src/utils/buffer-helper.ts"), o2 = r2("./src/errors.ts"), l2 = r2("./src/types/loader.ts"), u = r2("./src/utils/logger.ts");
  function d(t3, e3) {
    for (var r3 = 0; r3 < e3.length; r3++) {
      var i3 = e3[r3];
      i3.enumerable = i3.enumerable || false, i3.configurable = true, "value" in i3 && (i3.writable = true), Object.defineProperty(t3, i3.key, i3);
    }
  }
  var c = function() {
    function t3(t4) {
      this.hls = void 0, this.lastLoadedFragLevel = 0, this._nextAutoLevel = -1, this.timer = void 0, this.onCheck = this._abandonRulesCheck.bind(this), this.fragCurrent = null, this.partCurrent = null, this.bitrateTestDelay = 0, this.bwEstimator = void 0, this.hls = t4;
      var e4 = t4.config;
      this.bwEstimator = new n2.default(e4.abrEwmaSlowVoD, e4.abrEwmaFastVoD, e4.abrEwmaDefaultEstimate), this.registerListeners();
    }
    var e3, r3, h = t3.prototype;
    return h.registerListeners = function() {
      var t4 = this.hls;
      t4.on(a2.Events.FRAG_LOADING, this.onFragLoading, this), t4.on(a2.Events.FRAG_LOADED, this.onFragLoaded, this), t4.on(a2.Events.FRAG_BUFFERED, this.onFragBuffered, this), t4.on(a2.Events.LEVEL_LOADED, this.onLevelLoaded, this), t4.on(a2.Events.ERROR, this.onError, this);
    }, h.unregisterListeners = function() {
      var t4 = this.hls;
      t4.off(a2.Events.FRAG_LOADING, this.onFragLoading, this), t4.off(a2.Events.FRAG_LOADED, this.onFragLoaded, this), t4.off(a2.Events.FRAG_BUFFERED, this.onFragBuffered, this), t4.off(a2.Events.LEVEL_LOADED, this.onLevelLoaded, this), t4.off(a2.Events.ERROR, this.onError, this);
    }, h.destroy = function() {
      this.unregisterListeners(), this.clearTimer(), this.hls = this.onCheck = null, this.fragCurrent = this.partCurrent = null;
    }, h.onFragLoading = function(t4, e4) {
      var r4, i3 = e4.frag;
      i3.type === l2.PlaylistLevelType.MAIN && (this.timer || (this.fragCurrent = i3, this.partCurrent = null != (r4 = e4.part) ? r4 : null, this.timer = self.setInterval(this.onCheck, 100)));
    }, h.onLevelLoaded = function(t4, e4) {
      var r4 = this.hls.config;
      e4.details.live ? this.bwEstimator.update(r4.abrEwmaSlowLive, r4.abrEwmaFastLive) : this.bwEstimator.update(r4.abrEwmaSlowVoD, r4.abrEwmaFastVoD);
    }, h._abandonRulesCheck = function() {
      var t4 = this.fragCurrent, e4 = this.partCurrent, r4 = this.hls, n3 = r4.autoLevelEnabled, o3 = r4.config, l3 = r4.media;
      if (t4 && l3) {
        var d2 = e4 ? e4.stats : t4.stats, c2 = e4 ? e4.duration : t4.duration;
        if (d2.aborted)
          return u.logger.warn("frag loader destroy or aborted, disarm abandonRules"), this.clearTimer(), void (this._nextAutoLevel = -1);
        if (n3 && !l3.paused && l3.playbackRate && l3.readyState) {
          var h2 = performance.now() - d2.loading.start, f = Math.abs(l3.playbackRate);
          if (!(h2 <= 500 * c2 / f)) {
            var g = r4.levels, v = r4.minAutoLevel, p = g[t4.level], m = d2.total || Math.max(d2.loaded, Math.round(c2 * p.maxBitrate / 8)), y = Math.max(1, d2.bwEstimate ? d2.bwEstimate / 8 : 1e3 * d2.loaded / h2), E = (m - d2.loaded) / y, T = l3.currentTime, S = (s2.BufferHelper.bufferInfo(l3, T, o3.maxBufferHole).end - T) / f;
            if (!(S >= 2 * c2 / f || E <= S)) {
              var b, L = Number.POSITIVE_INFINITY;
              for (b = t4.level - 1; b > v && !((L = c2 * g[b].maxBitrate / (6.4 * y)) < S); b--)
                ;
              if (!(L >= E)) {
                var A = this.bwEstimator.getEstimate();
                u.logger.warn("Fragment " + t4.sn + (e4 ? " part " + e4.index : "") + " of level " + t4.level + " is loading too slowly and will cause an underbuffer; aborting and switching to level " + b + "\n      Current BW estimate: " + (Object(i2.isFiniteNumber)(A) ? (A / 1024).toFixed(3) : "Unknown") + " Kb/s\n      Estimated load time for current fragment: " + E.toFixed(3) + " s\n      Estimated load time for the next fragment: " + L.toFixed(3) + " s\n      Time to underbuffer: " + S.toFixed(3) + " s"), r4.nextLoadLevel = b, this.bwEstimator.sample(h2, d2.loaded), this.clearTimer(), t4.loader && (this.fragCurrent = this.partCurrent = null, t4.loader.abort()), r4.trigger(a2.Events.FRAG_LOAD_EMERGENCY_ABORTED, { frag: t4, part: e4, stats: d2 });
              }
            }
          }
        }
      }
    }, h.onFragLoaded = function(t4, e4) {
      var r4 = e4.frag, n3 = e4.part;
      if (r4.type === l2.PlaylistLevelType.MAIN && Object(i2.isFiniteNumber)(r4.sn)) {
        var s3 = n3 ? n3.stats : r4.stats, o3 = n3 ? n3.duration : r4.duration;
        if (this.clearTimer(), this.lastLoadedFragLevel = r4.level, this._nextAutoLevel = -1, this.hls.config.abrMaxWithRealBitrate) {
          var u2 = this.hls.levels[r4.level], d2 = (u2.loaded ? u2.loaded.bytes : 0) + s3.loaded, c2 = (u2.loaded ? u2.loaded.duration : 0) + o3;
          u2.loaded = { bytes: d2, duration: c2 }, u2.realBitrate = Math.round(8 * d2 / c2);
        }
        if (r4.bitrateTest) {
          var h2 = { stats: s3, frag: r4, part: n3, id: r4.type };
          this.onFragBuffered(a2.Events.FRAG_BUFFERED, h2), r4.bitrateTest = false;
        }
      }
    }, h.onFragBuffered = function(t4, e4) {
      var r4 = e4.frag, i3 = e4.part, n3 = i3 ? i3.stats : r4.stats;
      if (!n3.aborted && r4.type === l2.PlaylistLevelType.MAIN && "initSegment" !== r4.sn) {
        var a3 = n3.parsing.end - n3.loading.start;
        this.bwEstimator.sample(a3, n3.loaded), n3.bwEstimate = this.bwEstimator.getEstimate(), r4.bitrateTest ? this.bitrateTestDelay = a3 / 1e3 : this.bitrateTestDelay = 0;
      }
    }, h.onError = function(t4, e4) {
      switch (e4.details) {
        case o2.ErrorDetails.FRAG_LOAD_ERROR:
        case o2.ErrorDetails.FRAG_LOAD_TIMEOUT:
          this.clearTimer();
      }
    }, h.clearTimer = function() {
      self.clearInterval(this.timer), this.timer = void 0;
    }, h.getNextABRAutoLevel = function() {
      var t4 = this.fragCurrent, e4 = this.partCurrent, r4 = this.hls, i3 = r4.maxAutoLevel, n3 = r4.config, a3 = r4.minAutoLevel, o3 = r4.media, l3 = e4 ? e4.duration : t4 ? t4.duration : 0, d2 = o3 ? o3.currentTime : 0, c2 = o3 && 0 !== o3.playbackRate ? Math.abs(o3.playbackRate) : 1, h2 = this.bwEstimator ? this.bwEstimator.getEstimate() : n3.abrEwmaDefaultEstimate, f = (s2.BufferHelper.bufferInfo(o3, d2, n3.maxBufferHole).end - d2) / c2, g = this.findBestLevel(h2, a3, i3, f, n3.abrBandWidthFactor, n3.abrBandWidthUpFactor);
      if (g >= 0)
        return g;
      u.logger.trace((f ? "rebuffering expected" : "buffer is empty") + ", finding optimal quality level");
      var v = l3 ? Math.min(l3, n3.maxStarvationDelay) : n3.maxStarvationDelay, p = n3.abrBandWidthFactor, m = n3.abrBandWidthUpFactor;
      if (!f) {
        var y = this.bitrateTestDelay;
        y && (v = (l3 ? Math.min(l3, n3.maxLoadingDelay) : n3.maxLoadingDelay) - y, u.logger.trace("bitrate test took " + Math.round(1e3 * y) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * v) + " ms"), p = m = 1);
      }
      return g = this.findBestLevel(h2, a3, i3, f + v, p, m), Math.max(g, 0);
    }, h.findBestLevel = function(t4, e4, r4, i3, n3, a3) {
      for (var s3, o3 = this.fragCurrent, l3 = this.partCurrent, d2 = this.lastLoadedFragLevel, c2 = this.hls.levels, h2 = c2[d2], f = !(null == h2 || null === (s3 = h2.details) || void 0 === s3 || !s3.live), g = null == h2 ? void 0 : h2.codecSet, v = l3 ? l3.duration : o3 ? o3.duration : 0, p = r4; p >= e4; p--) {
        var m = c2[p];
        if (m && (!g || m.codecSet === g)) {
          var y = m.details, E = (l3 ? null == y ? void 0 : y.partTarget : null == y ? void 0 : y.averagetargetduration) || v, T = void 0;
          T = p <= d2 ? n3 * t4 : a3 * t4;
          var S = c2[p].maxBitrate, b = S * E / T;
          if (u.logger.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " + p + "/" + Math.round(T) + "/" + S + "/" + E + "/" + i3 + "/" + b), T > S && (!b || f && !this.bitrateTestDelay || b < i3))
            return p;
        }
      }
      return -1;
    }, e3 = t3, (r3 = [{ key: "nextAutoLevel", get: function() {
      var t4 = this._nextAutoLevel, e4 = this.bwEstimator;
      if (!(-1 === t4 || e4 && e4.canEstimate()))
        return t4;
      var r4 = this.getNextABRAutoLevel();
      return -1 !== t4 && (r4 = Math.min(t4, r4)), r4;
    }, set: function(t4) {
      this._nextAutoLevel = t4;
    } }]) && d(e3.prototype, r3), t3;
  }();
  e2.default = c;
}, "./src/controller/audio-stream-controller.ts": function(t2, e2, r2) {
  r2.r(e2);
  var i2 = r2("./src/polyfills/number.ts"), n2 = r2("./src/controller/base-stream-controller.ts"), a2 = r2("./src/events.ts"), s2 = r2("./src/utils/buffer-helper.ts"), o2 = r2("./src/controller/fragment-tracker.ts"), l2 = r2("./src/types/level.ts"), u = r2("./src/types/loader.ts"), d = r2("./src/loader/fragment.ts"), c = r2("./src/demux/chunk-cache.ts"), h = r2("./src/demux/transmuxer-interface.ts"), f = r2("./src/types/transmuxer.ts"), g = r2("./src/controller/fragment-finders.ts"), v = r2("./src/utils/discontinuities.ts"), p = r2("./src/errors.ts"), m = r2("./src/utils/logger.ts");
  function y() {
    return (y = Object.assign || function(t3) {
      for (var e3 = 1; e3 < arguments.length; e3++) {
        var r3 = arguments[e3];
        for (var i3 in r3)
          Object.prototype.hasOwnProperty.call(r3, i3) && (t3[i3] = r3[i3]);
      }
      return t3;
    }).apply(this, arguments);
  }
  function E(t3, e3) {
    return (E = Object.setPrototypeOf || function(t4, e4) {
      return t4.__proto__ = e4, t4;
    })(t3, e3);
  }
  var T = function(t3) {
    var e3, r3;
    function T2(e4, r4) {
      var i3;
      return (i3 = t3.call(this, e4, r4, "[audio-stream-controller]") || this).videoBuffer = null, i3.videoTrackCC = -1, i3.waitingVideoCC = -1, i3.audioSwitch = false, i3.trackId = -1, i3.waitingData = null, i3.mainDetails = null, i3.bufferFlushed = false, i3._registerListeners(), i3;
    }
    r3 = t3, (e3 = T2).prototype = Object.create(r3.prototype), e3.prototype.constructor = e3, E(e3, r3);
    var S = T2.prototype;
    return S.onHandlerDestroying = function() {
      this._unregisterListeners(), this.mainDetails = null;
    }, S._registerListeners = function() {
      var t4 = this.hls;
      t4.on(a2.Events.MEDIA_ATTACHED, this.onMediaAttached, this), t4.on(a2.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t4.on(a2.Events.MANIFEST_LOADING, this.onManifestLoading, this), t4.on(a2.Events.LEVEL_LOADED, this.onLevelLoaded, this), t4.on(a2.Events.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), t4.on(a2.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t4.on(a2.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t4.on(a2.Events.ERROR, this.onError, this), t4.on(a2.Events.BUFFER_RESET, this.onBufferReset, this), t4.on(a2.Events.BUFFER_CREATED, this.onBufferCreated, this), t4.on(a2.Events.BUFFER_FLUSHED, this.onBufferFlushed, this), t4.on(a2.Events.INIT_PTS_FOUND, this.onInitPtsFound, this), t4.on(a2.Events.FRAG_BUFFERED, this.onFragBuffered, this);
    }, S._unregisterListeners = function() {
      var t4 = this.hls;
      t4.off(a2.Events.MEDIA_ATTACHED, this.onMediaAttached, this), t4.off(a2.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t4.off(a2.Events.MANIFEST_LOADING, this.onManifestLoading, this), t4.off(a2.Events.LEVEL_LOADED, this.onLevelLoaded, this), t4.off(a2.Events.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), t4.off(a2.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t4.off(a2.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t4.off(a2.Events.ERROR, this.onError, this), t4.off(a2.Events.BUFFER_RESET, this.onBufferReset, this), t4.off(a2.Events.BUFFER_CREATED, this.onBufferCreated, this), t4.off(a2.Events.BUFFER_FLUSHED, this.onBufferFlushed, this), t4.off(a2.Events.INIT_PTS_FOUND, this.onInitPtsFound, this), t4.off(a2.Events.FRAG_BUFFERED, this.onFragBuffered, this);
    }, S.onInitPtsFound = function(t4, e4) {
      var r4 = e4.frag, i3 = e4.id, a3 = e4.initPTS;
      if ("main" === i3) {
        var s3 = r4.cc;
        this.initPTS[r4.cc] = a3, this.log("InitPTS for cc: " + s3 + " found from main: " + a3), this.videoTrackCC = s3, this.state === n2.State.WAITING_INIT_PTS && this.tick();
      }
    }, S.startLoad = function(t4) {
      if (!this.levels)
        return this.startPosition = t4, void (this.state = n2.State.STOPPED);
      var e4 = this.lastCurrentTime;
      this.stopLoad(), this.setInterval(100), this.fragLoadError = 0, e4 > 0 && -1 === t4 ? (this.log("Override startPosition with lastCurrentTime @" + e4.toFixed(3)), this.state = n2.State.IDLE) : (this.loadedmetadata = false, this.state = n2.State.WAITING_TRACK), this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t4, this.tick();
    }, S.doTick = function() {
      switch (this.state) {
        case n2.State.IDLE:
          this.doTickIdle();
          break;
        case n2.State.WAITING_TRACK:
          var e4, r4 = this.levels, i3 = this.trackId, a3 = null == r4 || null === (e4 = r4[i3]) || void 0 === e4 ? void 0 : e4.details;
          if (a3) {
            if (this.waitForCdnTuneIn(a3))
              break;
            this.state = n2.State.WAITING_INIT_PTS;
          }
          break;
        case n2.State.FRAG_LOADING_WAITING_RETRY:
          var o3, l3 = performance.now(), u2 = this.retryDate;
          (!u2 || l3 >= u2 || null !== (o3 = this.media) && void 0 !== o3 && o3.seeking) && (this.log("RetryDate reached, switch back to IDLE state"), this.state = n2.State.IDLE);
          break;
        case n2.State.WAITING_INIT_PTS:
          var d2 = this.waitingData;
          if (d2) {
            var c2 = d2.frag, h2 = d2.part, f2 = d2.cache, v2 = d2.complete;
            if (void 0 !== this.initPTS[c2.cc]) {
              this.waitingData = null, this.waitingVideoCC = -1, this.state = n2.State.FRAG_LOADING;
              var p2 = { frag: c2, part: h2, payload: f2.flush(), networkDetails: null };
              this._handleFragmentLoadProgress(p2), v2 && t3.prototype._handleFragmentLoadComplete.call(this, p2);
            } else if (this.videoTrackCC !== this.waitingVideoCC)
              m.logger.log("Waiting fragment cc (" + c2.cc + ") cancelled because video is at cc " + this.videoTrackCC), this.clearWaitingFragment();
            else {
              var y2 = this.getLoadPosition(), E2 = s2.BufferHelper.bufferInfo(this.mediaBuffer, y2, this.config.maxBufferHole);
              Object(g.fragmentWithinToleranceTest)(E2.end, this.config.maxFragLookUpTolerance, c2) < 0 && (m.logger.log("Waiting fragment cc (" + c2.cc + ") @ " + c2.start + " cancelled because another fragment at " + E2.end + " is needed"), this.clearWaitingFragment());
            }
          } else
            this.state = n2.State.IDLE;
      }
      this.onTickEnd();
    }, S.clearWaitingFragment = function() {
      var t4 = this.waitingData;
      t4 && (this.fragmentTracker.removeFragment(t4.frag), this.waitingData = null, this.waitingVideoCC = -1, this.state = n2.State.IDLE);
    }, S.onTickEnd = function() {
      var t4 = this.media;
      if (t4 && t4.readyState) {
        var e4 = (this.mediaBuffer ? this.mediaBuffer : t4).buffered;
        !this.loadedmetadata && e4.length && (this.loadedmetadata = true), this.lastCurrentTime = t4.currentTime;
      }
    }, S.doTickIdle = function() {
      var t4, e4, r4 = this.hls, i3 = this.levels, s3 = this.media, o3 = this.trackId, l3 = r4.config;
      if (i3 && i3[o3] && (s3 || !this.startFragRequested && l3.startFragPrefetch)) {
        var c2 = i3[o3].details;
        if (!c2 || c2.live && this.levelLastLoaded !== o3 || this.waitForCdnTuneIn(c2))
          this.state = n2.State.WAITING_TRACK;
        else {
          this.bufferFlushed && (this.bufferFlushed = false, this.afterBufferFlushed(this.mediaBuffer ? this.mediaBuffer : this.media, d.ElementaryStreamTypes.AUDIO, u.PlaylistLevelType.AUDIO));
          var h2 = this.getFwdBufferInfo(this.mediaBuffer ? this.mediaBuffer : this.media, u.PlaylistLevelType.AUDIO);
          if (null !== h2) {
            var f2 = h2.len, g2 = this.getMaxBufferLength(), v2 = this.audioSwitch;
            if (!(f2 >= g2) || v2) {
              if (!v2 && this._streamEnded(h2, c2))
                return r4.trigger(a2.Events.BUFFER_EOS, { type: "audio" }), void (this.state = n2.State.ENDED);
              var p2 = c2.fragments[0].start, m2 = h2.end;
              if (v2) {
                var y2 = this.getLoadPosition();
                m2 = y2, c2.PTSKnown && y2 < p2 && (h2.end > p2 || h2.nextStart) && (this.log("Alt audio track ahead of main track, seek to start of alt audio track"), s3.currentTime = p2 + 0.05);
              }
              var E2 = this.getNextFragment(m2, c2);
              E2 ? "identity" !== (null === (t4 = E2.decryptdata) || void 0 === t4 ? void 0 : t4.keyFormat) || null !== (e4 = E2.decryptdata) && void 0 !== e4 && e4.key ? this.loadFragment(E2, c2, m2) : this.loadKey(E2, c2) : this.bufferFlushed = true;
            }
          }
        }
      }
    }, S.getMaxBufferLength = function() {
      var e4 = t3.prototype.getMaxBufferLength.call(this), r4 = this.getFwdBufferInfo(this.videoBuffer ? this.videoBuffer : this.media, u.PlaylistLevelType.MAIN);
      return null === r4 ? e4 : Math.max(e4, r4.len);
    }, S.onMediaDetaching = function() {
      this.videoBuffer = null, t3.prototype.onMediaDetaching.call(this);
    }, S.onAudioTracksUpdated = function(t4, e4) {
      var r4 = e4.audioTracks;
      this.resetTransmuxer(), this.levels = r4.map(function(t5) {
        return new l2.Level(t5);
      });
    }, S.onAudioTrackSwitching = function(t4, e4) {
      var r4 = !!e4.url;
      this.trackId = e4.id;
      var i3 = this.fragCurrent;
      null != i3 && i3.loader && i3.loader.abort(), this.fragCurrent = null, this.clearWaitingFragment(), r4 ? this.setInterval(100) : this.resetTransmuxer(), r4 ? (this.audioSwitch = true, this.state = n2.State.IDLE) : this.state = n2.State.STOPPED, this.tick();
    }, S.onManifestLoading = function() {
      this.mainDetails = null, this.fragmentTracker.removeAllFragments(), this.startPosition = this.lastCurrentTime = 0, this.bufferFlushed = false;
    }, S.onLevelLoaded = function(t4, e4) {
      this.mainDetails = e4.details;
    }, S.onAudioTrackLoaded = function(t4, e4) {
      var r4, i3 = this.levels, a3 = e4.details, s3 = e4.id;
      if (i3) {
        this.log("Track " + s3 + " loaded [" + a3.startSN + "," + a3.endSN + "],duration:" + a3.totalduration);
        var o3 = i3[s3], l3 = 0;
        if (a3.live || null !== (r4 = o3.details) && void 0 !== r4 && r4.live) {
          var u2 = this.mainDetails;
          if (a3.fragments[0] || (a3.deltaUpdateFailed = true), a3.deltaUpdateFailed || !u2)
            return;
          !o3.details && a3.hasProgramDateTime && u2.hasProgramDateTime ? (Object(v.alignPDT)(a3, u2), l3 = a3.fragments[0].start) : l3 = this.alignPlaylists(a3, o3.details);
        }
        o3.details = a3, this.levelLastLoaded = s3, this.startFragRequested || !this.mainDetails && a3.live || this.setStartPosition(o3.details, l3), this.state !== n2.State.WAITING_TRACK || this.waitForCdnTuneIn(a3) || (this.state = n2.State.IDLE), this.tick();
      } else
        this.warn("Audio tracks were reset while loading level " + s3);
    }, S._handleFragmentLoadProgress = function(t4) {
      var e4, r4 = t4.frag, i3 = t4.part, a3 = t4.payload, s3 = this.config, o3 = this.trackId, l3 = this.levels;
      if (l3) {
        var d2 = l3[o3];
        console.assert(d2, "Audio track is defined on fragment load progress");
        var g2 = d2.details;
        console.assert(g2, "Audio track details are defined on fragment load progress");
        var v2 = s3.defaultAudioCodec || d2.audioCodec || "mp4a.40.2", p2 = this.transmuxer;
        p2 || (p2 = this.transmuxer = new h.default(this.hls, u.PlaylistLevelType.AUDIO, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)));
        var y2 = this.initPTS[r4.cc], E2 = null === (e4 = r4.initSegment) || void 0 === e4 ? void 0 : e4.data;
        if (void 0 !== y2) {
          var T3 = i3 ? i3.index : -1, S2 = -1 !== T3, b = new f.ChunkMetadata(r4.level, r4.sn, r4.stats.chunkCount, a3.byteLength, T3, S2);
          p2.push(a3, E2, v2, "", r4, i3, g2.totalduration, false, b, y2);
        } else
          m.logger.log("Unknown video PTS for cc " + r4.cc + ", waiting for video PTS before demuxing audio frag " + r4.sn + " of [" + g2.startSN + " ," + g2.endSN + "],track " + o3), (this.waitingData = this.waitingData || { frag: r4, part: i3, cache: new c.default(), complete: false }).cache.push(new Uint8Array(a3)), this.waitingVideoCC = this.videoTrackCC, this.state = n2.State.WAITING_INIT_PTS;
      } else
        this.warn("Audio tracks were reset while fragment load was in progress. Fragment " + r4.sn + " of level " + r4.level + " will not be buffered");
    }, S._handleFragmentLoadComplete = function(e4) {
      this.waitingData ? this.waitingData.complete = true : t3.prototype._handleFragmentLoadComplete.call(this, e4);
    }, S.onBufferReset = function() {
      this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = false;
    }, S.onBufferCreated = function(t4, e4) {
      var r4 = e4.tracks.audio;
      r4 && (this.mediaBuffer = r4.buffer), e4.tracks.video && (this.videoBuffer = e4.tracks.video.buffer);
    }, S.onFragBuffered = function(t4, e4) {
      var r4 = e4.frag, i3 = e4.part;
      r4.type === u.PlaylistLevelType.AUDIO && (this.fragContextChanged(r4) ? this.warn("Fragment " + r4.sn + (i3 ? " p: " + i3.index : "") + " of level " + r4.level + " finished buffering, but was aborted. state: " + this.state + ", audioSwitch: " + this.audioSwitch) : ("initSegment" !== r4.sn && (this.fragPrevious = r4, this.audioSwitch && (this.audioSwitch = false, this.hls.trigger(a2.Events.AUDIO_TRACK_SWITCHED, { id: this.trackId }))), this.fragBufferedComplete(r4, i3)));
    }, S.onError = function(e4, r4) {
      switch (r4.details) {
        case p.ErrorDetails.FRAG_LOAD_ERROR:
        case p.ErrorDetails.FRAG_LOAD_TIMEOUT:
        case p.ErrorDetails.KEY_LOAD_ERROR:
        case p.ErrorDetails.KEY_LOAD_TIMEOUT:
          this.onFragmentOrKeyLoadError(u.PlaylistLevelType.AUDIO, r4);
          break;
        case p.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:
        case p.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:
          this.state !== n2.State.ERROR && this.state !== n2.State.STOPPED && (this.state = r4.fatal ? n2.State.ERROR : n2.State.IDLE, this.warn(r4.details + " while loading frag, switching to " + this.state + " state"));
          break;
        case p.ErrorDetails.BUFFER_FULL_ERROR:
          if ("audio" === r4.parent && (this.state === n2.State.PARSING || this.state === n2.State.PARSED)) {
            var i3 = true, a3 = this.getFwdBufferInfo(this.mediaBuffer, u.PlaylistLevelType.AUDIO);
            a3 && a3.len > 0.5 && (i3 = !this.reduceMaxBufferLength(a3.len)), i3 && (this.warn("Buffer full error also media.currentTime is not buffered, flush audio buffer"), this.fragCurrent = null, t3.prototype.flushMainBuffer.call(this, 0, Number.POSITIVE_INFINITY, "audio")), this.resetLoadingState();
          }
      }
    }, S.onBufferFlushed = function(t4, e4) {
      e4.type === d.ElementaryStreamTypes.AUDIO && (this.bufferFlushed = true);
    }, S._handleTransmuxComplete = function(t4) {
      var e4, r4 = "audio", i3 = this.hls, s3 = t4.remuxResult, o3 = t4.chunkMeta, l3 = this.getCurrentContext(o3);
      if (!l3)
        return this.warn("The loading context changed while buffering fragment " + o3.sn + " of level " + o3.level + ". This chunk will not be buffered."), void this.resetLiveStartWhenNotLoaded(o3.level);
      var u2 = l3.frag, c2 = l3.part, h2 = s3.audio, f2 = s3.text, g2 = s3.id3, v2 = s3.initSegment;
      if (!this.fragContextChanged(u2)) {
        if (this.state = n2.State.PARSING, this.audioSwitch && h2 && this.completeAudioSwitch(), null != v2 && v2.tracks && (this._bufferInitSegment(v2.tracks, u2, o3), i3.trigger(a2.Events.FRAG_PARSING_INIT_SEGMENT, { frag: u2, id: r4, tracks: v2.tracks })), h2) {
          var p2 = h2.startPTS, m2 = h2.endPTS, E2 = h2.startDTS, T3 = h2.endDTS;
          c2 && (c2.elementaryStreams[d.ElementaryStreamTypes.AUDIO] = { startPTS: p2, endPTS: m2, startDTS: E2, endDTS: T3 }), u2.setElementaryStreamInfo(d.ElementaryStreamTypes.AUDIO, p2, m2, E2, T3), this.bufferFragmentData(h2, u2, c2, o3);
        }
        if (null != g2 && null !== (e4 = g2.samples) && void 0 !== e4 && e4.length) {
          var S2 = y({ frag: u2, id: r4 }, g2);
          i3.trigger(a2.Events.FRAG_PARSING_METADATA, S2);
        }
        if (f2) {
          var b = y({ frag: u2, id: r4 }, f2);
          i3.trigger(a2.Events.FRAG_PARSING_USERDATA, b);
        }
      }
    }, S._bufferInitSegment = function(t4, e4, r4) {
      if (this.state === n2.State.PARSING) {
        t4.video && delete t4.video;
        var i3 = t4.audio;
        if (i3) {
          i3.levelCodec = i3.codec, i3.id = "audio", this.log("Init audio buffer, container:" + i3.container + ", codecs[parsed]=[" + i3.codec + "]"), this.hls.trigger(a2.Events.BUFFER_CODECS, t4);
          var s3 = i3.initSegment;
          if (null != s3 && s3.byteLength) {
            var o3 = { type: "audio", frag: e4, part: null, chunkMeta: r4, parent: e4.type, data: s3 };
            this.hls.trigger(a2.Events.BUFFER_APPENDING, o3);
          }
          this.tick();
        }
      }
    }, S.loadFragment = function(e4, r4, a3) {
      var s3 = this.fragmentTracker.getState(e4);
      this.fragCurrent = e4, (this.audioSwitch || s3 === o2.FragmentState.NOT_LOADED || s3 === o2.FragmentState.PARTIAL) && ("initSegment" === e4.sn ? this._loadInitSegment(e4) : r4.live && !Object(i2.isFiniteNumber)(this.initPTS[e4.cc]) ? (this.log("Waiting for video PTS in continuity counter " + e4.cc + " of live stream before loading audio fragment " + e4.sn + " of level " + this.trackId), this.state = n2.State.WAITING_INIT_PTS) : (this.startFragRequested = true, t3.prototype.loadFragment.call(this, e4, r4, a3)));
    }, S.completeAudioSwitch = function() {
      var e4 = this.hls, r4 = this.media, i3 = this.trackId;
      r4 && (this.log("Switching audio track : flushing all audio"), t3.prototype.flushMainBuffer.call(this, 0, Number.POSITIVE_INFINITY, "audio")), this.audioSwitch = false, e4.trigger(a2.Events.AUDIO_TRACK_SWITCHED, { id: i3 });
    }, T2;
  }(n2.default);
  e2.default = T;
}, "./src/controller/audio-track-controller.ts": function(t2, e2, r2) {
  r2.r(e2);
  var i2 = r2("./src/events.ts"), n2 = r2("./src/errors.ts"), a2 = r2("./src/controller/base-playlist-controller.ts"), s2 = r2("./src/types/loader.ts");
  function o2(t3, e3) {
    for (var r3 = 0; r3 < e3.length; r3++) {
      var i3 = e3[r3];
      i3.enumerable = i3.enumerable || false, i3.configurable = true, "value" in i3 && (i3.writable = true), Object.defineProperty(t3, i3.key, i3);
    }
  }
  function l2(t3, e3) {
    return (l2 = Object.setPrototypeOf || function(t4, e4) {
      return t4.__proto__ = e4, t4;
    })(t3, e3);
  }
  var u = function(t3) {
    var e3, r3;
    function a3(e4) {
      var r4;
      return (r4 = t3.call(this, e4, "[audio-track-controller]") || this).tracks = [], r4.groupId = null, r4.tracksInGroup = [], r4.trackId = -1, r4.trackName = "", r4.selectDefaultTrack = true, r4.registerListeners(), r4;
    }
    r3 = t3, (e3 = a3).prototype = Object.create(r3.prototype), e3.prototype.constructor = e3, l2(e3, r3);
    var u2, d, h = a3.prototype;
    return h.registerListeners = function() {
      var t4 = this.hls;
      t4.on(i2.Events.MANIFEST_LOADING, this.onManifestLoading, this), t4.on(i2.Events.MANIFEST_PARSED, this.onManifestParsed, this), t4.on(i2.Events.LEVEL_LOADING, this.onLevelLoading, this), t4.on(i2.Events.LEVEL_SWITCHING, this.onLevelSwitching, this), t4.on(i2.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t4.on(i2.Events.ERROR, this.onError, this);
    }, h.unregisterListeners = function() {
      var t4 = this.hls;
      t4.off(i2.Events.MANIFEST_LOADING, this.onManifestLoading, this), t4.off(i2.Events.MANIFEST_PARSED, this.onManifestParsed, this), t4.off(i2.Events.LEVEL_LOADING, this.onLevelLoading, this), t4.off(i2.Events.LEVEL_SWITCHING, this.onLevelSwitching, this), t4.off(i2.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t4.off(i2.Events.ERROR, this.onError, this);
    }, h.destroy = function() {
      this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, t3.prototype.destroy.call(this);
    }, h.onManifestLoading = function() {
      this.tracks = [], this.groupId = null, this.tracksInGroup = [], this.trackId = -1, this.trackName = "", this.selectDefaultTrack = true;
    }, h.onManifestParsed = function(t4, e4) {
      this.tracks = e4.audioTracks || [];
    }, h.onAudioTrackLoaded = function(t4, e4) {
      var r4 = e4.id, i3 = e4.details, n3 = this.tracksInGroup[r4];
      if (n3) {
        var a4 = n3.details;
        n3.details = e4.details, this.log("audioTrack " + r4 + " loaded [" + i3.startSN + "-" + i3.endSN + "]"), r4 === this.trackId && (this.retryCount = 0, this.playlistLoaded(r4, e4, a4));
      } else
        this.warn("Invalid audio track id " + r4);
    }, h.onLevelLoading = function(t4, e4) {
      this.switchLevel(e4.level);
    }, h.onLevelSwitching = function(t4, e4) {
      this.switchLevel(e4.level);
    }, h.switchLevel = function(t4) {
      var e4 = this.hls.levels[t4];
      if (null != e4 && e4.audioGroupIds) {
        var r4 = e4.audioGroupIds[e4.urlId];
        if (this.groupId !== r4) {
          this.groupId = r4;
          var n3 = this.tracks.filter(function(t5) {
            return !r4 || t5.groupId === r4;
          });
          this.selectDefaultTrack && !n3.some(function(t5) {
            return t5.default;
          }) && (this.selectDefaultTrack = false), this.tracksInGroup = n3;
          var a4 = { audioTracks: n3 };
          this.log("Updating audio tracks, " + n3.length + ' track(s) found in "' + r4 + '" group-id'), this.hls.trigger(i2.Events.AUDIO_TRACKS_UPDATED, a4), this.selectInitialTrack();
        }
      }
    }, h.onError = function(e4, r4) {
      t3.prototype.onError.call(this, e4, r4), !r4.fatal && r4.context && r4.context.type === s2.PlaylistContextType.AUDIO_TRACK && r4.context.id === this.trackId && r4.context.groupId === this.groupId && this.retryLoadingOrFail(r4);
    }, h.setAudioTrack = function(t4) {
      var e4 = this.tracksInGroup;
      if (t4 < 0 || t4 >= e4.length)
        this.warn("Invalid id passed to audio-track controller");
      else {
        this.clearTimer();
        var r4 = e4[this.trackId];
        this.log("Now switching to audio-track index " + t4);
        var n3 = e4[t4], a4 = n3.id, s3 = n3.groupId, o3 = void 0 === s3 ? "" : s3, l3 = n3.name, u3 = n3.type, d2 = n3.url;
        if (this.trackId = t4, this.trackName = l3, this.selectDefaultTrack = false, this.hls.trigger(i2.Events.AUDIO_TRACK_SWITCHING, { id: a4, groupId: o3, name: l3, type: u3, url: d2 }), !n3.details || n3.details.live) {
          var c = this.switchParams(n3.url, null == r4 ? void 0 : r4.details);
          this.loadPlaylist(c);
        }
      }
    }, h.selectInitialTrack = function() {
      var t4 = this.tracksInGroup;
      console.assert(t4.length, "Initial audio track should be selected when tracks are known");
      var e4 = this.trackName, r4 = this.findTrackId(e4) || this.findTrackId();
      -1 !== r4 ? this.setAudioTrack(r4) : (this.warn("No track found for running audio group-ID: " + this.groupId), this.hls.trigger(i2.Events.ERROR, { type: n2.ErrorTypes.MEDIA_ERROR, details: n2.ErrorDetails.AUDIO_TRACK_LOAD_ERROR, fatal: true }));
    }, h.findTrackId = function(t4) {
      for (var e4 = this.tracksInGroup, r4 = 0; r4 < e4.length; r4++) {
        var i3 = e4[r4];
        if ((!this.selectDefaultTrack || i3.default) && (!t4 || t4 === i3.name))
          return i3.id;
      }
      return -1;
    }, h.loadPlaylist = function(t4) {
      var e4 = this.tracksInGroup[this.trackId];
      if (this.shouldLoadTrack(e4)) {
        var r4 = e4.id, n3 = e4.groupId, a4 = e4.url;
        if (t4)
          try {
            a4 = t4.addDirectives(a4);
          } catch (s3) {
            this.warn("Could not construct new URL with HLS Delivery Directives: " + s3);
          }
        this.log("loading audio-track playlist for id: " + r4), this.clearTimer(), this.hls.trigger(i2.Events.AUDIO_TRACK_LOADING, { url: a4, id: r4, groupId: n3, deliveryDirectives: t4 || null });
      }
    }, u2 = a3, (d = [{ key: "audioTracks", get: function() {
      return this.tracksInGroup;
    } }, { key: "audioTrack", get: function() {
      return this.trackId;
    }, set: function(t4) {
      this.selectDefaultTrack = false, this.setAudioTrack(t4);
    } }]) && o2(u2.prototype, d), a3;
  }(a2.default);
  e2.default = u;
}, "./src/controller/base-playlist-controller.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "default", function() {
    return l2;
  });
  var i2 = r2("./src/polyfills/number.ts"), n2 = r2("./src/types/level.ts"), a2 = r2("./src/controller/level-helper.ts"), s2 = r2("./src/utils/logger.ts"), o2 = r2("./src/errors.ts"), l2 = function() {
    function t3(t4, e4) {
      this.hls = void 0, this.timer = -1, this.canLoad = false, this.retryCount = 0, this.log = void 0, this.warn = void 0, this.log = s2.logger.log.bind(s2.logger, e4 + ":"), this.warn = s2.logger.warn.bind(s2.logger, e4 + ":"), this.hls = t4;
    }
    var e3 = t3.prototype;
    return e3.destroy = function() {
      this.clearTimer(), this.hls = this.log = this.warn = null;
    }, e3.onError = function(t4, e4) {
      e4.fatal && e4.type === o2.ErrorTypes.NETWORK_ERROR && this.clearTimer();
    }, e3.clearTimer = function() {
      clearTimeout(this.timer), this.timer = -1;
    }, e3.startLoad = function() {
      this.canLoad = true, this.retryCount = 0, this.loadPlaylist();
    }, e3.stopLoad = function() {
      this.canLoad = false, this.clearTimer();
    }, e3.switchParams = function(t4, e4) {
      var r3 = null == e4 ? void 0 : e4.renditionReports;
      if (r3)
        for (var a3 = 0; a3 < r3.length; a3++) {
          var s3 = r3[a3], o3 = "" + s3.URI;
          if (o3 === t4.substr(-o3.length)) {
            var l3 = parseInt(s3["LAST-MSN"]), u = parseInt(s3["LAST-PART"]);
            if (e4 && this.hls.config.lowLatencyMode) {
              var d = Math.min(e4.age - e4.partTarget, e4.targetduration);
              void 0 !== u && d > e4.partTarget && (u += 1);
            }
            if (Object(i2.isFiniteNumber)(l3))
              return new n2.HlsUrlParameters(l3, Object(i2.isFiniteNumber)(u) ? u : void 0, n2.HlsSkip.No);
          }
        }
    }, e3.loadPlaylist = function(t4) {
    }, e3.shouldLoadTrack = function(t4) {
      return this.canLoad && t4 && !!t4.url && (!t4.details || t4.details.live);
    }, e3.playlistLoaded = function(t4, e4, r3) {
      var i3 = this, n3 = e4.details, s3 = e4.stats, o3 = s3.loading.end ? Math.max(0, self.performance.now() - s3.loading.end) : 0;
      if (n3.advancedDateTime = Date.now() - o3, n3.live || null != r3 && r3.live) {
        if (n3.reloaded(r3), r3 && this.log("live playlist " + t4 + " " + (n3.advanced ? "REFRESHED " + n3.lastPartSn + "-" + n3.lastPartIndex : "MISSED")), r3 && n3.fragments.length > 0 && Object(a2.mergeDetails)(r3, n3), !this.canLoad || !n3.live)
          return;
        var l3, u = void 0, d = void 0;
        if (n3.canBlockReload && n3.endSN && n3.advanced) {
          var c = this.hls.config.lowLatencyMode, h = n3.lastPartSn, f = n3.endSN, g = n3.lastPartIndex, v = h === f;
          -1 !== g ? (u = v ? f + 1 : h, d = v ? c ? 0 : g : g + 1) : u = f + 1;
          var p = n3.age, m = p + n3.ageHeader, y = Math.min(m - n3.partTarget, 1.5 * n3.targetduration);
          if (y > 0) {
            if (r3 && y > r3.tuneInGoal)
              this.warn("CDN Tune-in goal increased from: " + r3.tuneInGoal + " to: " + y + " with playlist age: " + n3.age), y = 0;
            else {
              var E = Math.floor(y / n3.targetduration);
              u += E, void 0 !== d && (d += Math.round(y % n3.targetduration / n3.partTarget)), this.log("CDN Tune-in age: " + n3.ageHeader + "s last advanced " + p.toFixed(2) + "s goal: " + y + " skip sn " + E + " to part " + d);
            }
            n3.tuneInGoal = y;
          }
          if (l3 = this.getDeliveryDirectives(n3, e4.deliveryDirectives, u, d), c || !v)
            return void this.loadPlaylist(l3);
        } else
          l3 = this.getDeliveryDirectives(n3, e4.deliveryDirectives, u, d);
        var T = Object(a2.computeReloadInterval)(n3, s3);
        void 0 !== u && n3.canBlockReload && (T -= n3.partTarget || 1), this.log("reload live playlist " + t4 + " in " + Math.round(T) + " ms"), this.timer = self.setTimeout(function() {
          return i3.loadPlaylist(l3);
        }, T);
      } else
        this.clearTimer();
    }, e3.getDeliveryDirectives = function(t4, e4, r3, i3) {
      var a3 = Object(n2.getSkipValue)(t4, r3);
      return null != e4 && e4.skip && t4.deltaUpdateFailed && (r3 = e4.msn, i3 = e4.part, a3 = n2.HlsSkip.No), new n2.HlsUrlParameters(r3, i3, a3);
    }, e3.retryLoadingOrFail = function(t4) {
      var e4, r3 = this, i3 = this.hls.config, n3 = this.retryCount < i3.levelLoadingMaxRetry;
      if (n3)
        if (this.retryCount++, t4.details.indexOf("LoadTimeOut") > -1 && null !== (e4 = t4.context) && void 0 !== e4 && e4.deliveryDirectives)
          this.warn("retry playlist loading #" + this.retryCount + ' after "' + t4.details + '"'), this.loadPlaylist();
        else {
          var a3 = Math.min(Math.pow(2, this.retryCount) * i3.levelLoadingRetryDelay, i3.levelLoadingMaxRetryTimeout);
          this.timer = self.setTimeout(function() {
            return r3.loadPlaylist();
          }, a3), this.warn("retry playlist loading #" + this.retryCount + " in " + a3 + ' ms after "' + t4.details + '"');
        }
      else
        this.warn('cannot recover from error "' + t4.details + '"'), this.clearTimer(), t4.fatal = true;
      return n3;
    }, t3;
  }();
}, "./src/controller/base-stream-controller.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "State", function() {
    return S;
  }), r2.d(e2, "default", function() {
    return b;
  });
  var i2 = r2("./src/polyfills/number.ts"), n2 = r2("./src/task-loop.ts"), a2 = r2("./src/controller/fragment-tracker.ts"), s2 = r2("./src/utils/buffer-helper.ts"), o2 = r2("./src/utils/logger.ts"), l2 = r2("./src/events.ts"), u = r2("./src/errors.ts"), d = r2("./src/types/transmuxer.ts"), c = r2("./src/utils/mp4-tools.ts"), h = r2("./src/utils/discontinuities.ts"), f = r2("./src/controller/fragment-finders.ts"), g = r2("./src/controller/level-helper.ts"), v = r2("./src/loader/fragment-loader.ts"), p = r2("./src/crypt/decrypter.ts"), m = r2("./src/utils/time-ranges.ts"), y = r2("./src/types/loader.ts");
  function E(t3, e3) {
    for (var r3 = 0; r3 < e3.length; r3++) {
      var i3 = e3[r3];
      i3.enumerable = i3.enumerable || false, i3.configurable = true, "value" in i3 && (i3.writable = true), Object.defineProperty(t3, i3.key, i3);
    }
  }
  function T(t3, e3) {
    return (T = Object.setPrototypeOf || function(t4, e4) {
      return t4.__proto__ = e4, t4;
    })(t3, e3);
  }
  var S = { STOPPED: "STOPPED", IDLE: "IDLE", KEY_LOADING: "KEY_LOADING", FRAG_LOADING: "FRAG_LOADING", FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY", WAITING_TRACK: "WAITING_TRACK", PARSING: "PARSING", PARSED: "PARSED", BACKTRACKING: "BACKTRACKING", ENDED: "ENDED", ERROR: "ERROR", WAITING_INIT_PTS: "WAITING_INIT_PTS", WAITING_LEVEL: "WAITING_LEVEL" }, b = function(t3) {
    var e3, r3;
    function n3(e4, r4, i3) {
      var n4;
      return (n4 = t3.call(this) || this).hls = void 0, n4.fragPrevious = null, n4.fragCurrent = null, n4.fragmentTracker = void 0, n4.transmuxer = null, n4._state = S.STOPPED, n4.media = void 0, n4.mediaBuffer = void 0, n4.config = void 0, n4.bitrateTest = false, n4.lastCurrentTime = 0, n4.nextLoadPosition = 0, n4.startPosition = 0, n4.loadedmetadata = false, n4.fragLoadError = 0, n4.retryDate = 0, n4.levels = null, n4.fragmentLoader = void 0, n4.levelLastLoaded = null, n4.startFragRequested = false, n4.decrypter = void 0, n4.initPTS = [], n4.onvseeking = null, n4.onvended = null, n4.logPrefix = "", n4.log = void 0, n4.warn = void 0, n4.logPrefix = i3, n4.log = o2.logger.log.bind(o2.logger, i3 + ":"), n4.warn = o2.logger.warn.bind(o2.logger, i3 + ":"), n4.hls = e4, n4.fragmentLoader = new v.default(e4.config), n4.fragmentTracker = r4, n4.config = e4.config, n4.decrypter = new p.default(e4, e4.config), e4.on(l2.Events.KEY_LOADED, n4.onKeyLoaded, function(t4) {
        if (void 0 === t4)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t4;
      }(n4)), n4;
    }
    r3 = t3, (e3 = n3).prototype = Object.create(r3.prototype), e3.prototype.constructor = e3, T(e3, r3);
    var b2, L, D = n3.prototype;
    return D.doTick = function() {
      this.onTickEnd();
    }, D.onTickEnd = function() {
    }, D.startLoad = function(t4) {
    }, D.stopLoad = function() {
      this.fragmentLoader.abort();
      var t4 = this.fragCurrent;
      t4 && this.fragmentTracker.removeFragment(t4), this.resetTransmuxer(), this.fragCurrent = null, this.fragPrevious = null, this.clearInterval(), this.clearNextTick(), this.state = S.STOPPED;
    }, D._streamEnded = function(t4, e4) {
      var r4 = this.fragCurrent, i3 = this.fragmentTracker;
      if (!e4.live && r4 && r4.sn === e4.endSN && !t4.nextStart) {
        var n4 = i3.getState(r4);
        return n4 === a2.FragmentState.PARTIAL || n4 === a2.FragmentState.OK;
      }
      return false;
    }, D.onMediaAttached = function(t4, e4) {
      var r4 = this.media = this.mediaBuffer = e4.media;
      this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), r4.addEventListener("seeking", this.onvseeking), r4.addEventListener("ended", this.onvended);
      var i3 = this.config;
      this.levels && i3.autoStartLoad && this.state === S.STOPPED && this.startLoad(i3.startPosition);
    }, D.onMediaDetaching = function() {
      var t4 = this.media;
      null != t4 && t4.ended && (this.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0), t4 && (t4.removeEventListener("seeking", this.onvseeking), t4.removeEventListener("ended", this.onvended), this.onvseeking = this.onvended = null), this.media = this.mediaBuffer = null, this.loadedmetadata = false, this.fragmentTracker.removeAllFragments(), this.stopLoad();
    }, D.onMediaSeeking = function() {
      var t4 = this.config, e4 = this.fragCurrent, r4 = this.media, n4 = this.mediaBuffer, a3 = this.state, o3 = r4 ? r4.currentTime : 0, l3 = s2.BufferHelper.bufferInfo(n4 || r4, o3, t4.maxBufferHole);
      if (this.log("media seeking to " + (Object(i2.isFiniteNumber)(o3) ? o3.toFixed(3) : o3) + ", state: " + a3), a3 === S.ENDED)
        this.resetLoadingState();
      else if (e4 && !l3.len) {
        var u2 = t4.maxFragLookUpTolerance, d2 = e4.start - u2, c2 = o3 > e4.start + e4.duration + u2;
        (o3 < d2 || c2) && (c2 && e4.loader && (this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), e4.loader.abort()), this.resetLoadingState());
      }
      r4 && (this.lastCurrentTime = o3), this.loadedmetadata || l3.len || (this.nextLoadPosition = this.startPosition = o3), this.tickImmediate();
    }, D.onMediaEnded = function() {
      this.startPosition = this.lastCurrentTime = 0;
    }, D.onKeyLoaded = function(t4, e4) {
      if (this.state === S.KEY_LOADING && e4.frag === this.fragCurrent && this.levels) {
        this.state = S.IDLE;
        var r4 = this.levels[e4.frag.level].details;
        r4 && this.loadFragment(e4.frag, r4, e4.frag.start);
      }
    }, D.onHandlerDestroying = function() {
      this.stopLoad(), t3.prototype.onHandlerDestroying.call(this);
    }, D.onHandlerDestroyed = function() {
      this.state = S.STOPPED, this.hls.off(l2.Events.KEY_LOADED, this.onKeyLoaded, this), this.fragmentLoader && this.fragmentLoader.destroy(), this.decrypter && this.decrypter.destroy(), this.hls = this.log = this.warn = this.decrypter = this.fragmentLoader = this.fragmentTracker = null, t3.prototype.onHandlerDestroyed.call(this);
    }, D.loadKey = function(t4, e4) {
      this.log("Loading key for " + t4.sn + " of [" + e4.startSN + "-" + e4.endSN + "], " + ("[stream-controller]" === this.logPrefix ? "level" : "track") + " " + t4.level), this.state = S.KEY_LOADING, this.fragCurrent = t4, this.hls.trigger(l2.Events.KEY_LOADING, { frag: t4 });
    }, D.loadFragment = function(t4, e4, r4) {
      this._loadFragForPlayback(t4, e4, r4);
    }, D._loadFragForPlayback = function(t4, e4, r4) {
      var i3 = this;
      this._doFragLoad(t4, e4, r4, function(e5) {
        if (i3.fragContextChanged(t4))
          return i3.warn("Fragment " + t4.sn + (e5.part ? " p: " + e5.part.index : "") + " of level " + t4.level + " was dropped during download."), void i3.fragmentTracker.removeFragment(t4);
        t4.stats.chunkCount++, i3._handleFragmentLoadProgress(e5);
      }).then(function(e5) {
        if (e5) {
          i3.fragLoadError = 0;
          var r5 = i3.state;
          if (!i3.fragContextChanged(t4))
            return "payload" in e5 && (i3.log("Loaded fragment " + t4.sn + " of level " + t4.level), i3.hls.trigger(l2.Events.FRAG_LOADED, e5), i3.state === S.BACKTRACKING) ? (i3.fragmentTracker.backtrack(t4, e5), void i3.resetFragmentLoading(t4)) : void i3._handleFragmentLoadComplete(e5);
          (r5 === S.FRAG_LOADING || r5 === S.BACKTRACKING || !i3.fragCurrent && r5 === S.PARSING) && (i3.fragmentTracker.removeFragment(t4), i3.state = S.IDLE);
        }
      }).catch(function(e5) {
        i3.warn(e5), i3.resetFragmentLoading(t4);
      });
    }, D.flushMainBuffer = function(t4, e4, r4) {
      if (void 0 === r4 && (r4 = null), t4 - e4) {
        var i3 = { startOffset: t4, endOffset: e4, type: r4 };
        this.fragLoadError = 0, this.hls.trigger(l2.Events.BUFFER_FLUSHING, i3);
      }
    }, D._loadInitSegment = function(t4) {
      var e4 = this;
      this._doFragLoad(t4).then(function(r4) {
        if (!r4 || e4.fragContextChanged(t4) || !e4.levels)
          throw new Error("init load aborted");
        return r4;
      }).then(function(r4) {
        var i3 = e4.hls, n4 = r4.payload, a3 = t4.decryptdata;
        if (n4 && n4.byteLength > 0 && a3 && a3.key && a3.iv && "AES-128" === a3.method) {
          var s3 = self.performance.now();
          return e4.decrypter.webCryptoDecrypt(new Uint8Array(n4), a3.key.buffer, a3.iv.buffer).then(function(e5) {
            var n5 = self.performance.now();
            return i3.trigger(l2.Events.FRAG_DECRYPTED, { frag: t4, payload: e5, stats: { tstart: s3, tdecrypt: n5 } }), r4.payload = e5, r4;
          });
        }
        return r4;
      }).then(function(r4) {
        var i3 = e4.fragCurrent, n4 = e4.hls, a3 = e4.levels;
        if (!a3)
          throw new Error("init load aborted, missing levels");
        var s3 = a3[t4.level].details;
        console.assert(s3, "Level details are defined when init segment is loaded");
        var o3 = t4.stats;
        e4.state = S.IDLE, e4.fragLoadError = 0, t4.data = new Uint8Array(r4.payload), o3.parsing.start = o3.buffering.start = self.performance.now(), o3.parsing.end = o3.buffering.end = self.performance.now(), r4.frag === i3 && n4.trigger(l2.Events.FRAG_BUFFERED, { stats: o3, frag: i3, part: null, id: t4.type }), e4.tick();
      }).catch(function(r4) {
        e4.warn(r4), e4.resetFragmentLoading(t4);
      });
    }, D.fragContextChanged = function(t4) {
      var e4 = this.fragCurrent;
      return !t4 || !e4 || t4.level !== e4.level || t4.sn !== e4.sn || t4.urlId !== e4.urlId;
    }, D.fragBufferedComplete = function(t4, e4) {
      var r4 = this.mediaBuffer ? this.mediaBuffer : this.media;
      this.log("Buffered " + t4.type + " sn: " + t4.sn + (e4 ? " part: " + e4.index : "") + " of " + ("[stream-controller]" === this.logPrefix ? "level" : "track") + " " + t4.level + " " + m.default.toString(s2.BufferHelper.getBuffered(r4))), this.state = S.IDLE, this.tick();
    }, D._handleFragmentLoadComplete = function(t4) {
      var e4 = this.transmuxer;
      if (e4) {
        var r4 = t4.frag, i3 = t4.part, n4 = t4.partsLoaded, a3 = !n4 || 0 === n4.length || n4.some(function(t5) {
          return !t5;
        }), s3 = new d.ChunkMetadata(r4.level, r4.sn, r4.stats.chunkCount + 1, 0, i3 ? i3.index : -1, !a3);
        e4.flush(s3);
      }
    }, D._handleFragmentLoadProgress = function(t4) {
    }, D._doFragLoad = function(t4, e4, r4, n4) {
      var a3 = this;
      if (void 0 === r4 && (r4 = null), !this.levels)
        throw new Error("frag load aborted, missing levels");
      if (r4 = Math.max(t4.start, r4 || 0), this.config.lowLatencyMode && e4) {
        var s3 = e4.partList;
        if (s3 && n4) {
          r4 > t4.end && e4.fragmentHint && (t4 = e4.fragmentHint);
          var o3 = this.getNextPart(s3, t4, r4);
          if (o3 > -1) {
            var u2 = s3[o3];
            return this.log("Loading part sn: " + t4.sn + " p: " + u2.index + " cc: " + t4.cc + " of playlist [" + e4.startSN + "-" + e4.endSN + "] parts [0-" + o3 + "-" + (s3.length - 1) + "] " + ("[stream-controller]" === this.logPrefix ? "level" : "track") + ": " + t4.level + ", target: " + parseFloat(r4.toFixed(3))), this.nextLoadPosition = u2.start + u2.duration, this.state = S.FRAG_LOADING, this.hls.trigger(l2.Events.FRAG_LOADING, { frag: t4, part: s3[o3], targetBufferTime: r4 }), this.doFragPartsLoad(t4, s3, o3, n4).catch(function(t5) {
              return a3.handleFragLoadError(t5);
            });
          }
          if (!t4.url || this.loadedEndOfParts(s3, r4))
            return Promise.resolve(null);
        }
      }
      return this.log("Loading fragment " + t4.sn + " cc: " + t4.cc + " " + (e4 ? "of [" + e4.startSN + "-" + e4.endSN + "] " : "") + ("[stream-controller]" === this.logPrefix ? "level" : "track") + ": " + t4.level + ", target: " + parseFloat(r4.toFixed(3))), Object(i2.isFiniteNumber)(t4.sn) && !this.bitrateTest && (this.nextLoadPosition = t4.start + t4.duration), this.state = S.FRAG_LOADING, this.hls.trigger(l2.Events.FRAG_LOADING, { frag: t4, targetBufferTime: r4 }), this.fragmentLoader.load(t4, n4).catch(function(t5) {
        return a3.handleFragLoadError(t5);
      });
    }, D.doFragPartsLoad = function(t4, e4, r4, i3) {
      var n4 = this;
      return new Promise(function(a3, s3) {
        var o3 = [];
        !function r5(u2) {
          var d2 = e4[u2];
          n4.fragmentLoader.loadPart(t4, d2, i3).then(function(i4) {
            o3[d2.index] = i4;
            var s4 = i4.part;
            n4.hls.trigger(l2.Events.FRAG_LOADED, i4);
            var c2 = e4[u2 + 1];
            if (!c2 || c2.fragment !== t4)
              return a3({ frag: t4, part: s4, partsLoaded: o3 });
            r5(u2 + 1);
          }).catch(s3);
        }(r4);
      });
    }, D.handleFragLoadError = function(t4) {
      var e4 = t4.data;
      return e4 && e4.details === u.ErrorDetails.INTERNAL_ABORTED ? this.handleFragLoadAborted(e4.frag, e4.part) : this.hls.trigger(l2.Events.ERROR, e4), null;
    }, D._handleTransmuxerFlush = function(t4) {
      var e4 = this.getCurrentContext(t4);
      if (e4 && this.state === S.PARSING) {
        var r4 = e4.frag, i3 = e4.part, n4 = e4.level, a3 = self.performance.now();
        r4.stats.parsing.end = a3, i3 && (i3.stats.parsing.end = a3), this.updateLevelTiming(r4, i3, n4, t4.partial);
      } else
        this.fragCurrent || (this.state = S.IDLE);
    }, D.getCurrentContext = function(t4) {
      var e4 = this.levels, r4 = t4.level, i3 = t4.sn, n4 = t4.part;
      if (!e4 || !e4[r4])
        return this.warn("Levels object was unset while buffering fragment " + i3 + " of level " + r4 + ". The current chunk will not be buffered."), null;
      var a3 = e4[r4], s3 = n4 > -1 ? Object(g.getPartWith)(a3, i3, n4) : null, o3 = s3 ? s3.fragment : Object(g.getFragmentWithSN)(a3, i3, this.fragCurrent);
      return o3 ? { frag: o3, part: s3, level: a3 } : null;
    }, D.bufferFragmentData = function(t4, e4, r4, i3) {
      if (t4 && this.state === S.PARSING) {
        var n4 = t4.data1, a3 = t4.data2, s3 = n4;
        if (n4 && a3 && (s3 = Object(c.appendUint8Array)(n4, a3)), s3 && s3.length) {
          var o3 = { type: t4.type, frag: e4, part: r4, chunkMeta: i3, parent: e4.type, data: s3 };
          this.hls.trigger(l2.Events.BUFFER_APPENDING, o3), t4.dropped && t4.independent && !r4 && this.flushBufferGap(e4);
        }
      }
    }, D.flushBufferGap = function(t4) {
      var e4 = this.media;
      if (e4)
        if (s2.BufferHelper.isBuffered(e4, e4.currentTime)) {
          var r4 = e4.currentTime, i3 = s2.BufferHelper.bufferInfo(e4, r4, 0), n4 = t4.duration, a3 = Math.min(2 * this.config.maxFragLookUpTolerance, 0.25 * n4), o3 = Math.max(Math.min(t4.start - a3, i3.end - a3), r4 + a3);
          t4.start - o3 > a3 && this.flushMainBuffer(o3, t4.start);
        } else
          this.flushMainBuffer(0, t4.start);
    }, D.getFwdBufferInfo = function(t4, e4) {
      var r4 = this.config, n4 = this.getLoadPosition();
      if (!Object(i2.isFiniteNumber)(n4))
        return null;
      var a3 = s2.BufferHelper.bufferInfo(t4, n4, r4.maxBufferHole);
      if (0 === a3.len && void 0 !== a3.nextStart) {
        var o3 = this.fragmentTracker.getBufferedFrag(n4, e4);
        if (o3 && a3.nextStart < o3.end)
          return s2.BufferHelper.bufferInfo(t4, n4, Math.max(a3.nextStart, r4.maxBufferHole));
      }
      return a3;
    }, D.getMaxBufferLength = function(t4) {
      var e4, r4 = this.config;
      return e4 = t4 ? Math.max(8 * r4.maxBufferSize / t4, r4.maxBufferLength) : r4.maxBufferLength, Math.min(e4, r4.maxMaxBufferLength);
    }, D.reduceMaxBufferLength = function(t4) {
      var e4 = this.config, r4 = t4 || e4.maxBufferLength;
      return e4.maxMaxBufferLength >= r4 && (e4.maxMaxBufferLength /= 2, this.warn("Reduce max buffer length to " + e4.maxMaxBufferLength + "s"), true);
    }, D.getNextFragment = function(t4, e4) {
      var r4, i3, n4 = e4.fragments, a3 = n4.length;
      if (!a3)
        return null;
      var s3, o3 = this.config, l3 = n4[0].start;
      if (e4.live) {
        var u2 = o3.initialLiveManifestSize;
        if (a3 < u2)
          return this.warn("Not enough fragments to start playback (have: " + a3 + ", need: " + u2 + ")"), null;
        e4.PTSKnown || this.startFragRequested || -1 !== this.startPosition || (s3 = this.getInitialLiveFragment(e4, n4), this.startPosition = s3 ? this.hls.liveSyncPosition || s3.start : t4);
      } else
        t4 <= l3 && (s3 = n4[0]);
      if (!s3) {
        var d2 = o3.lowLatencyMode ? e4.partEnd : e4.fragmentEnd;
        s3 = this.getFragmentAtPosition(t4, d2, e4);
      }
      return null === (r4 = s3) || void 0 === r4 || !r4.initSegment || null !== (i3 = s3) && void 0 !== i3 && i3.initSegment.data || this.bitrateTest || (s3 = s3.initSegment), s3;
    }, D.getNextPart = function(t4, e4, r4) {
      for (var i3 = -1, n4 = false, a3 = true, s3 = 0, o3 = t4.length; s3 < o3; s3++) {
        var l3 = t4[s3];
        if (a3 = a3 && !l3.independent, i3 > -1 && r4 < l3.start)
          break;
        var u2 = l3.loaded;
        !u2 && (n4 || l3.independent || a3) && l3.fragment === e4 && (i3 = s3), n4 = u2;
      }
      return i3;
    }, D.loadedEndOfParts = function(t4, e4) {
      var r4 = t4[t4.length - 1];
      return r4 && e4 > r4.start && r4.loaded;
    }, D.getInitialLiveFragment = function(t4, e4) {
      var r4 = this.fragPrevious, i3 = null;
      if (r4) {
        if (t4.hasProgramDateTime && (this.log("Live playlist, switching playlist, load frag with same PDT: " + r4.programDateTime), i3 = Object(f.findFragmentByPDT)(e4, r4.endProgramDateTime, this.config.maxFragLookUpTolerance)), !i3) {
          var n4 = r4.sn + 1;
          if (n4 >= t4.startSN && n4 <= t4.endSN) {
            var a3 = e4[n4 - t4.startSN];
            r4.cc === a3.cc && (i3 = a3, this.log("Live playlist, switching playlist, load frag with next SN: " + i3.sn));
          }
          i3 || (i3 = Object(f.findFragWithCC)(e4, r4.cc)) && this.log("Live playlist, switching playlist, load frag with same CC: " + i3.sn);
        }
      } else {
        var s3 = this.hls.liveSyncPosition;
        null !== s3 && (i3 = this.getFragmentAtPosition(s3, this.bitrateTest ? t4.fragmentEnd : t4.edge, t4));
      }
      return i3;
    }, D.getFragmentAtPosition = function(t4, e4, r4) {
      var i3, n4 = this.config, s3 = this.fragPrevious, o3 = r4.fragments, l3 = r4.endSN, u2 = r4.fragmentHint, d2 = n4.maxFragLookUpTolerance, c2 = !!(n4.lowLatencyMode && r4.partList && u2);
      if (c2 && u2 && !this.bitrateTest && (o3 = o3.concat(u2), l3 = u2.sn), t4 < e4) {
        var h2 = t4 > e4 - d2 ? 0 : d2;
        i3 = Object(f.findFragmentByPTS)(s3, o3, t4, h2);
      } else
        i3 = o3[o3.length - 1];
      if (i3) {
        var g2 = i3.sn - r4.startSN, v2 = s3 && i3.level === s3.level, p2 = o3[g2 + 1];
        if (this.fragmentTracker.getState(i3) === a2.FragmentState.BACKTRACKED) {
          i3 = null;
          for (var m2 = g2; o3[m2] && this.fragmentTracker.getState(o3[m2]) === a2.FragmentState.BACKTRACKED; )
            i3 = s3 ? o3[m2--] : o3[--m2];
          i3 || (i3 = p2);
        } else
          s3 && i3.sn === s3.sn && !c2 && v2 && (i3.sn < l3 && this.fragmentTracker.getState(p2) !== a2.FragmentState.OK ? (this.log("SN " + i3.sn + " just loaded, load next one: " + p2.sn), i3 = p2) : i3 = null);
      }
      return i3;
    }, D.synchronizeToLiveEdge = function(t4) {
      var e4 = this.config, r4 = this.media;
      if (r4) {
        var i3 = this.hls.liveSyncPosition, n4 = r4.currentTime, a3 = t4.fragments[0].start, s3 = t4.edge, o3 = n4 >= a3 - e4.maxFragLookUpTolerance && n4 <= s3;
        if (null !== i3 && r4.duration > i3 && (n4 < i3 || !o3)) {
          var l3 = void 0 !== e4.liveMaxLatencyDuration ? e4.liveMaxLatencyDuration : e4.liveMaxLatencyDurationCount * t4.targetduration;
          (!o3 && r4.readyState < 4 || n4 < s3 - l3) && (this.loadedmetadata || (this.nextLoadPosition = i3), r4.readyState && (this.warn("Playback: " + n4.toFixed(3) + " is located too far from the end of live sliding playlist: " + s3 + ", reset currentTime to : " + i3.toFixed(3)), r4.currentTime = i3));
        }
      }
    }, D.alignPlaylists = function(t4, e4) {
      var r4 = this.levels, n4 = this.levelLastLoaded, a3 = this.fragPrevious, s3 = null !== n4 ? r4[n4] : null, o3 = t4.fragments.length;
      if (!o3)
        return this.warn("No fragments in live playlist"), 0;
      var l3 = t4.fragments[0].start, u2 = !e4, d2 = t4.alignedSliding && Object(i2.isFiniteNumber)(l3);
      if (u2 || !d2 && !l3) {
        Object(h.alignStream)(a3, s3, t4);
        var c2 = t4.fragments[0].start;
        return this.log("Live playlist sliding: " + c2.toFixed(2) + " start-sn: " + (e4 ? e4.startSN : "na") + "->" + t4.startSN + " prev-sn: " + (a3 ? a3.sn : "na") + " fragments: " + o3), c2;
      }
      return l3;
    }, D.waitForCdnTuneIn = function(t4) {
      return t4.live && t4.canBlockReload && t4.tuneInGoal > Math.max(t4.partHoldBack, 3 * t4.partTarget);
    }, D.setStartPosition = function(t4, e4) {
      var r4 = this.startPosition;
      if (r4 < e4 && (r4 = -1), -1 === r4 || -1 === this.lastCurrentTime) {
        var n4 = t4.startTimeOffset;
        Object(i2.isFiniteNumber)(n4) ? (r4 = e4 + n4, n4 < 0 && (r4 += t4.totalduration), r4 = Math.min(Math.max(e4, r4), e4 + t4.totalduration), this.log("Start time offset " + n4 + " found in playlist, adjust startPosition to " + r4), this.startPosition = r4) : t4.live ? r4 = this.hls.liveSyncPosition || e4 : this.startPosition = r4 = 0, this.lastCurrentTime = r4;
      }
      this.nextLoadPosition = r4;
    }, D.getLoadPosition = function() {
      var t4 = this.media, e4 = 0;
      return this.loadedmetadata && t4 ? e4 = t4.currentTime : this.nextLoadPosition && (e4 = this.nextLoadPosition), e4;
    }, D.handleFragLoadAborted = function(t4, e4) {
      this.transmuxer && "initSegment" !== t4.sn && t4.stats.aborted && (this.warn("Fragment " + t4.sn + (e4 ? " part" + e4.index : "") + " of level " + t4.level + " was aborted"), this.resetFragmentLoading(t4));
    }, D.resetFragmentLoading = function(t4) {
      this.fragCurrent && this.fragContextChanged(t4) || (this.state = S.IDLE);
    }, D.onFragmentOrKeyLoadError = function(t4, e4) {
      if (!e4.fatal) {
        var r4 = e4.frag;
        if (r4 && r4.type === t4) {
          var i3 = this.fragCurrent;
          console.assert(i3 && r4.sn === i3.sn && r4.level === i3.level && r4.urlId === i3.urlId, "Frag load error must match current frag to retry");
          var n4 = this.config;
          if (this.fragLoadError + 1 <= n4.fragLoadingMaxRetry) {
            if (this.resetLiveStartWhenNotLoaded(r4.level))
              return;
            var a3 = Math.min(Math.pow(2, this.fragLoadError) * n4.fragLoadingRetryDelay, n4.fragLoadingMaxRetryTimeout);
            this.warn("Fragment " + r4.sn + " of " + t4 + " " + r4.level + " failed to load, retrying in " + a3 + "ms"), this.retryDate = self.performance.now() + a3, this.fragLoadError++, this.state = S.FRAG_LOADING_WAITING_RETRY;
          } else
            e4.levelRetry ? (t4 === y.PlaylistLevelType.AUDIO && (this.fragCurrent = null), this.fragLoadError = 0, this.state = S.IDLE) : (o2.logger.error(e4.details + " reaches max retry, redispatch as fatal ..."), e4.fatal = true, this.hls.stopLoad(), this.state = S.ERROR);
        }
      }
    }, D.afterBufferFlushed = function(t4, e4, r4) {
      if (t4) {
        var i3 = s2.BufferHelper.getBuffered(t4);
        this.fragmentTracker.detectEvictedFragments(e4, i3, r4), this.state === S.ENDED && this.resetLoadingState();
      }
    }, D.resetLoadingState = function() {
      this.fragCurrent = null, this.fragPrevious = null, this.state = S.IDLE;
    }, D.resetLiveStartWhenNotLoaded = function(t4) {
      if (!this.loadedmetadata) {
        this.startFragRequested = false;
        var e4 = this.levels ? this.levels[t4].details : null;
        if (null != e4 && e4.live)
          return this.startPosition = -1, this.setStartPosition(e4, 0), this.resetLoadingState(), true;
        this.nextLoadPosition = this.startPosition;
      }
      return false;
    }, D.updateLevelTiming = function(t4, e4, r4, i3) {
      var n4 = this, a3 = r4.details;
      console.assert(!!a3, "level.details must be defined"), Object.keys(t4.elementaryStreams).reduce(function(e5, s3) {
        var o3 = t4.elementaryStreams[s3];
        if (o3) {
          var u2 = o3.endPTS - o3.startPTS;
          if (u2 <= 0)
            return n4.warn("Could not parse fragment " + t4.sn + " " + s3 + " duration reliably (" + u2 + ") resetting transmuxer to fallback to playlist timing"), n4.resetTransmuxer(), e5 || false;
          var d2 = i3 ? 0 : Object(g.updateFragPTSDTS)(a3, t4, o3.startPTS, o3.endPTS, o3.startDTS, o3.endDTS);
          return n4.hls.trigger(l2.Events.LEVEL_PTS_UPDATED, { details: a3, level: r4, drift: d2, type: s3, frag: t4, start: o3.startPTS, end: o3.endPTS }), true;
        }
        return e5;
      }, false) ? (this.state = S.PARSED, this.hls.trigger(l2.Events.FRAG_PARSED, { frag: t4, part: e4 })) : this.resetLoadingState();
    }, D.resetTransmuxer = function() {
      this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null);
    }, b2 = n3, (L = [{ key: "state", get: function() {
      return this._state;
    }, set: function(t4) {
      var e4 = this._state;
      e4 !== t4 && (this._state = t4, this.log(e4 + "->" + t4));
    } }]) && E(b2.prototype, L), n3;
  }(n2.default);
}, "./src/controller/buffer-controller.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "default", function() {
    return f;
  });
  var i2 = r2("./src/polyfills/number.ts"), n2 = r2("./src/events.ts"), a2 = r2("./src/utils/logger.ts"), s2 = r2("./src/errors.ts"), o2 = r2("./src/utils/buffer-helper.ts"), l2 = r2("./src/utils/mediasource-helper.ts"), u = r2("./src/loader/fragment.ts"), d = r2("./src/controller/buffer-operation-queue.ts"), c = Object(l2.getMediaSource)(), h = /([ha]vc.)(?:\.[^.,]+)+/, f = function() {
    function t3(t4) {
      var e4 = this;
      this.details = null, this._objectUrl = null, this.operationQueue = void 0, this.listeners = void 0, this.hls = void 0, this.bufferCodecEventsExpected = 0, this._bufferCodecEventsTotal = 0, this.media = null, this.mediaSource = null, this.appendError = 0, this.tracks = {}, this.pendingTracks = {}, this.sourceBuffer = void 0, this._onMediaSourceOpen = function() {
        var t5 = e4.hls, r3 = e4.media, i3 = e4.mediaSource;
        a2.logger.log("[buffer-controller]: Media source opened"), r3 && (e4.updateMediaElementDuration(), t5.trigger(n2.Events.MEDIA_ATTACHED, { media: r3 })), i3 && i3.removeEventListener("sourceopen", e4._onMediaSourceOpen), e4.checkPendingTracks();
      }, this._onMediaSourceClose = function() {
        a2.logger.log("[buffer-controller]: Media source closed");
      }, this._onMediaSourceEnded = function() {
        a2.logger.log("[buffer-controller]: Media source ended");
      }, this.hls = t4, this._initSourceBuffer(), this.registerListeners();
    }
    var e3 = t3.prototype;
    return e3.hasSourceTypes = function() {
      return this.getSourceBufferTypes().length > 0 || Object.keys(this.pendingTracks).length > 0;
    }, e3.destroy = function() {
      this.unregisterListeners(), this.details = null;
    }, e3.registerListeners = function() {
      var t4 = this.hls;
      t4.on(n2.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), t4.on(n2.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t4.on(n2.Events.MANIFEST_PARSED, this.onManifestParsed, this), t4.on(n2.Events.BUFFER_RESET, this.onBufferReset, this), t4.on(n2.Events.BUFFER_APPENDING, this.onBufferAppending, this), t4.on(n2.Events.BUFFER_CODECS, this.onBufferCodecs, this), t4.on(n2.Events.BUFFER_EOS, this.onBufferEos, this), t4.on(n2.Events.BUFFER_FLUSHING, this.onBufferFlushing, this), t4.on(n2.Events.LEVEL_UPDATED, this.onLevelUpdated, this), t4.on(n2.Events.FRAG_PARSED, this.onFragParsed, this), t4.on(n2.Events.FRAG_CHANGED, this.onFragChanged, this);
    }, e3.unregisterListeners = function() {
      var t4 = this.hls;
      t4.off(n2.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), t4.off(n2.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t4.off(n2.Events.MANIFEST_PARSED, this.onManifestParsed, this), t4.off(n2.Events.BUFFER_RESET, this.onBufferReset, this), t4.off(n2.Events.BUFFER_APPENDING, this.onBufferAppending, this), t4.off(n2.Events.BUFFER_CODECS, this.onBufferCodecs, this), t4.off(n2.Events.BUFFER_EOS, this.onBufferEos, this), t4.off(n2.Events.BUFFER_FLUSHING, this.onBufferFlushing, this), t4.off(n2.Events.LEVEL_UPDATED, this.onLevelUpdated, this), t4.off(n2.Events.FRAG_PARSED, this.onFragParsed, this), t4.off(n2.Events.FRAG_CHANGED, this.onFragChanged, this);
    }, e3._initSourceBuffer = function() {
      this.sourceBuffer = {}, this.operationQueue = new d.default(this.sourceBuffer), this.listeners = { audio: [], video: [], audiovideo: [] };
    }, e3.onManifestParsed = function(t4, e4) {
      var r3 = 2;
      (e4.audio && !e4.video || !e4.altAudio) && (r3 = 1), this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = r3, this.details = null, a2.logger.log(this.bufferCodecEventsExpected + " bufferCodec event(s) expected");
    }, e3.onMediaAttaching = function(t4, e4) {
      var r3 = this.media = e4.media;
      if (r3 && c) {
        var i3 = this.mediaSource = new c();
        i3.addEventListener("sourceopen", this._onMediaSourceOpen), i3.addEventListener("sourceended", this._onMediaSourceEnded), i3.addEventListener("sourceclose", this._onMediaSourceClose), r3.src = self.URL.createObjectURL(i3), this._objectUrl = r3.src;
      }
    }, e3.onMediaDetaching = function() {
      var t4 = this.media, e4 = this.mediaSource, r3 = this._objectUrl;
      if (e4) {
        if (a2.logger.log("[buffer-controller]: media source detaching"), "open" === e4.readyState)
          try {
            e4.endOfStream();
          } catch (i3) {
            a2.logger.warn("[buffer-controller]: onMediaDetaching: " + i3.message + " while calling endOfStream");
          }
        this.onBufferReset(), e4.removeEventListener("sourceopen", this._onMediaSourceOpen), e4.removeEventListener("sourceended", this._onMediaSourceEnded), e4.removeEventListener("sourceclose", this._onMediaSourceClose), t4 && (r3 && self.URL.revokeObjectURL(r3), t4.src === r3 ? (t4.removeAttribute("src"), t4.load()) : a2.logger.warn("[buffer-controller]: media.src was changed by a third party - skip cleanup")), this.mediaSource = null, this.media = null, this._objectUrl = null, this.bufferCodecEventsExpected = this._bufferCodecEventsTotal, this.pendingTracks = {}, this.tracks = {};
      }
      this.hls.trigger(n2.Events.MEDIA_DETACHED, void 0);
    }, e3.onBufferReset = function() {
      var t4 = this;
      this.getSourceBufferTypes().forEach(function(e4) {
        var r3 = t4.sourceBuffer[e4];
        try {
          r3 && (t4.removeBufferListeners(e4), t4.mediaSource && t4.mediaSource.removeSourceBuffer(r3), t4.sourceBuffer[e4] = void 0);
        } catch (i3) {
          a2.logger.warn("[buffer-controller]: Failed to reset the " + e4 + " buffer", i3);
        }
      }), this._initSourceBuffer();
    }, e3.onBufferCodecs = function(t4, e4) {
      var r3 = this, i3 = this.getSourceBufferTypes().length;
      Object.keys(e4).forEach(function(t5) {
        if (i3) {
          var n3 = r3.tracks[t5];
          if (n3 && "function" == typeof n3.buffer.changeType) {
            var a3 = e4[t5], s3 = a3.codec, o3 = a3.levelCodec, l3 = a3.container;
            if ((n3.levelCodec || n3.codec).replace(h, "$1") !== (o3 || s3).replace(h, "$1")) {
              var u2 = l3 + ";codecs=" + (o3 || s3);
              r3.appendChangeType(t5, u2);
            }
          }
        } else
          r3.pendingTracks[t5] = e4[t5];
      }), i3 || (this.bufferCodecEventsExpected = Math.max(this.bufferCodecEventsExpected - 1, 0), this.mediaSource && "open" === this.mediaSource.readyState && this.checkPendingTracks());
    }, e3.appendChangeType = function(t4, e4) {
      var r3 = this, i3 = this.operationQueue, n3 = { execute: function() {
        var n4 = r3.sourceBuffer[t4];
        n4 && (a2.logger.log("[buffer-controller]: changing " + t4 + " sourceBuffer type to " + e4), n4.changeType(e4)), i3.shiftAndExecuteNext(t4);
      }, onStart: function() {
      }, onComplete: function() {
      }, onError: function(e5) {
        a2.logger.warn("[buffer-controller]: Failed to change " + t4 + " SourceBuffer type", e5);
      } };
      i3.append(n3, t4);
    }, e3.onBufferAppending = function(t4, e4) {
      var r3 = this, i3 = this.hls, l3 = this.operationQueue, u2 = this.tracks, d2 = e4.data, c2 = e4.type, h2 = e4.frag, f2 = e4.part, g = e4.chunkMeta, v = g.buffering[c2], p = self.performance.now();
      v.start = p;
      var m = h2.stats.buffering, y = f2 ? f2.stats.buffering : null;
      0 === m.start && (m.start = p), y && 0 === y.start && (y.start = p);
      var E = u2.audio, T = "audio" === c2 && 1 === g.id && "audio/mpeg" === (null == E ? void 0 : E.container), S = { execute: function() {
        if (v.executeStart = self.performance.now(), T) {
          var t5 = r3.sourceBuffer[c2];
          if (t5) {
            var e5 = h2.start - t5.timestampOffset;
            Math.abs(e5) >= 0.1 && (a2.logger.log("[buffer-controller]: Updating audio SourceBuffer timestampOffset to " + h2.start + " (delta: " + e5 + ") sn: " + h2.sn + ")"), t5.timestampOffset = h2.start);
          }
        }
        r3.appendExecutor(d2, c2);
      }, onStart: function() {
      }, onComplete: function() {
        var t5 = self.performance.now();
        v.executeEnd = v.end = t5, 0 === m.first && (m.first = t5), y && 0 === y.first && (y.first = t5);
        var e5 = r3.sourceBuffer, i4 = {};
        for (var a3 in e5)
          i4[a3] = o2.BufferHelper.getBuffered(e5[a3]);
        r3.appendError = 0, r3.hls.trigger(n2.Events.BUFFER_APPENDED, { type: c2, frag: h2, part: f2, chunkMeta: g, parent: h2.type, timeRanges: i4 });
      }, onError: function(t5) {
        a2.logger.error("[buffer-controller]: Error encountered while trying to append to the " + c2 + " SourceBuffer", t5);
        var e5 = { type: s2.ErrorTypes.MEDIA_ERROR, parent: h2.type, details: s2.ErrorDetails.BUFFER_APPEND_ERROR, err: t5, fatal: false };
        t5.code === DOMException.QUOTA_EXCEEDED_ERR ? e5.details = s2.ErrorDetails.BUFFER_FULL_ERROR : (r3.appendError++, e5.details = s2.ErrorDetails.BUFFER_APPEND_ERROR, r3.appendError > i3.config.appendErrorMaxRetry && (a2.logger.error("[buffer-controller]: Failed " + i3.config.appendErrorMaxRetry + " times to append segment in sourceBuffer"), e5.fatal = true)), i3.trigger(n2.Events.ERROR, e5);
      } };
      l3.append(S, c2);
    }, e3.onBufferFlushing = function(t4, e4) {
      var r3 = this, i3 = this.operationQueue, s3 = function(t5) {
        return { execute: r3.removeExecutor.bind(r3, t5, e4.startOffset, e4.endOffset), onStart: function() {
        }, onComplete: function() {
          r3.hls.trigger(n2.Events.BUFFER_FLUSHED, { type: t5 });
        }, onError: function(e5) {
          a2.logger.warn("[buffer-controller]: Failed to remove from " + t5 + " SourceBuffer", e5);
        } };
      };
      e4.type ? i3.append(s3(e4.type), e4.type) : this.getSourceBufferTypes().forEach(function(t5) {
        i3.append(s3(t5), t5);
      });
    }, e3.onFragParsed = function(t4, e4) {
      var r3 = this, i3 = e4.frag, s3 = e4.part, o3 = [], l3 = s3 ? s3.elementaryStreams : i3.elementaryStreams;
      l3[u.ElementaryStreamTypes.AUDIOVIDEO] ? o3.push("audiovideo") : (l3[u.ElementaryStreamTypes.AUDIO] && o3.push("audio"), l3[u.ElementaryStreamTypes.VIDEO] && o3.push("video")), 0 === o3.length && a2.logger.warn("Fragments must have at least one ElementaryStreamType set. type: " + i3.type + " level: " + i3.level + " sn: " + i3.sn), this.blockBuffers(function() {
        var t5 = self.performance.now();
        i3.stats.buffering.end = t5, s3 && (s3.stats.buffering.end = t5);
        var e5 = s3 ? s3.stats : i3.stats;
        r3.hls.trigger(n2.Events.FRAG_BUFFERED, { frag: i3, part: s3, stats: e5, id: i3.type });
      }, o3);
    }, e3.onFragChanged = function(t4, e4) {
      this.flushBackBuffer();
    }, e3.onBufferEos = function(t4, e4) {
      var r3 = this;
      this.getSourceBufferTypes().reduce(function(t5, i3) {
        var n3 = r3.sourceBuffer[i3];
        return e4.type && e4.type !== i3 || n3 && !n3.ended && (n3.ended = true, a2.logger.log("[buffer-controller]: " + i3 + " sourceBuffer now EOS")), t5 && !(n3 && !n3.ended);
      }, true) && this.blockBuffers(function() {
        var t5 = r3.mediaSource;
        t5 && "open" === t5.readyState && t5.endOfStream();
      });
    }, e3.onLevelUpdated = function(t4, e4) {
      var r3 = e4.details;
      r3.fragments.length && (this.details = r3, this.getSourceBufferTypes().length ? this.blockBuffers(this.updateMediaElementDuration.bind(this)) : this.updateMediaElementDuration());
    }, e3.flushBackBuffer = function() {
      var t4 = this.hls, e4 = this.details, r3 = this.media, a3 = this.sourceBuffer;
      if (r3 && null !== e4) {
        var s3 = this.getSourceBufferTypes();
        if (s3.length) {
          var l3 = e4.live && null !== t4.config.liveBackBufferLength ? t4.config.liveBackBufferLength : t4.config.backBufferLength;
          if (Object(i2.isFiniteNumber)(l3) && !(l3 < 0)) {
            var u2 = r3.currentTime, d2 = e4.levelTargetDuration, c2 = Math.max(l3, d2), h2 = Math.floor(u2 / d2) * d2 - c2;
            s3.forEach(function(r4) {
              var i3 = a3[r4];
              if (i3) {
                var s4 = o2.BufferHelper.getBuffered(i3);
                s4.length > 0 && h2 > s4.start(0) && (t4.trigger(n2.Events.BACK_BUFFER_REACHED, { bufferEnd: h2 }), e4.live && t4.trigger(n2.Events.LIVE_BACK_BUFFER_REACHED, { bufferEnd: h2 }), t4.trigger(n2.Events.BUFFER_FLUSHING, { startOffset: 0, endOffset: h2, type: r4 }));
              }
            });
          }
        }
      }
    }, e3.updateMediaElementDuration = function() {
      if (this.details && this.media && this.mediaSource && "open" === this.mediaSource.readyState) {
        var t4 = this.details, e4 = this.hls, r3 = this.media, n3 = this.mediaSource, s3 = t4.fragments[0].start + t4.totalduration, o3 = r3.duration, l3 = Object(i2.isFiniteNumber)(n3.duration) ? n3.duration : 0;
        t4.live && e4.config.liveDurationInfinity ? (a2.logger.log("[buffer-controller]: Media Source duration is set to Infinity"), n3.duration = 1 / 0, this.updateSeekableRange(t4)) : (s3 > l3 && s3 > o3 || !Object(i2.isFiniteNumber)(o3)) && (a2.logger.log("[buffer-controller]: Updating Media Source duration to " + s3.toFixed(3)), n3.duration = s3);
      }
    }, e3.updateSeekableRange = function(t4) {
      var e4 = this.mediaSource, r3 = t4.fragments;
      if (r3.length && t4.live && null != e4 && e4.setLiveSeekableRange) {
        var i3 = Math.max(0, r3[0].start), n3 = Math.max(i3, i3 + t4.totalduration);
        e4.setLiveSeekableRange(i3, n3);
      }
    }, e3.checkPendingTracks = function() {
      var t4 = this.bufferCodecEventsExpected, e4 = this.operationQueue, r3 = this.pendingTracks, i3 = Object.keys(r3).length;
      if (i3 && !t4 || 2 === i3) {
        this.createSourceBuffers(r3), this.pendingTracks = {};
        var a3 = this.getSourceBufferTypes();
        if (0 === a3.length)
          return void this.hls.trigger(n2.Events.ERROR, { type: s2.ErrorTypes.MEDIA_ERROR, details: s2.ErrorDetails.BUFFER_INCOMPATIBLE_CODECS_ERROR, fatal: true, reason: "could not create source buffer for media codec(s)" });
        a3.forEach(function(t5) {
          e4.executeNext(t5);
        });
      }
    }, e3.createSourceBuffers = function(t4) {
      var e4 = this.sourceBuffer, r3 = this.mediaSource;
      if (!r3)
        throw Error("createSourceBuffers called when mediaSource was null");
      var i3 = 0;
      for (var o3 in t4)
        if (!e4[o3]) {
          var l3 = t4[o3];
          if (!l3)
            throw Error("source buffer exists for track " + o3 + ", however track does not");
          var u2 = l3.levelCodec || l3.codec, d2 = l3.container + ";codecs=" + u2;
          a2.logger.log("[buffer-controller]: creating sourceBuffer(" + d2 + ")");
          try {
            var c2 = e4[o3] = r3.addSourceBuffer(d2), h2 = o3;
            this.addBufferListener(h2, "updatestart", this._onSBUpdateStart), this.addBufferListener(h2, "updateend", this._onSBUpdateEnd), this.addBufferListener(h2, "error", this._onSBUpdateError), this.tracks[o3] = { buffer: c2, codec: u2, container: l3.container, levelCodec: l3.levelCodec, id: l3.id }, i3++;
          } catch (f2) {
            a2.logger.error("[buffer-controller]: error while trying to add sourceBuffer: " + f2.message), this.hls.trigger(n2.Events.ERROR, { type: s2.ErrorTypes.MEDIA_ERROR, details: s2.ErrorDetails.BUFFER_ADD_CODEC_ERROR, fatal: false, error: f2, mimeType: d2 });
          }
        }
      i3 && this.hls.trigger(n2.Events.BUFFER_CREATED, { tracks: this.tracks });
    }, e3._onSBUpdateStart = function(t4) {
      this.operationQueue.current(t4).onStart();
    }, e3._onSBUpdateEnd = function(t4) {
      var e4 = this.operationQueue;
      e4.current(t4).onComplete(), e4.shiftAndExecuteNext(t4);
    }, e3._onSBUpdateError = function(t4, e4) {
      a2.logger.error("[buffer-controller]: " + t4 + " SourceBuffer error", e4), this.hls.trigger(n2.Events.ERROR, { type: s2.ErrorTypes.MEDIA_ERROR, details: s2.ErrorDetails.BUFFER_APPENDING_ERROR, fatal: false });
      var r3 = this.operationQueue.current(t4);
      r3 && r3.onError(e4);
    }, e3.removeExecutor = function(t4, e4, r3) {
      var n3 = this.media, s3 = this.mediaSource, o3 = this.operationQueue, l3 = this.sourceBuffer[t4];
      if (!n3 || !s3 || !l3)
        return a2.logger.warn("[buffer-controller]: Attempting to remove from the " + t4 + " SourceBuffer, but it does not exist"), void o3.shiftAndExecuteNext(t4);
      var u2 = Object(i2.isFiniteNumber)(n3.duration) ? n3.duration : 1 / 0, d2 = Object(i2.isFiniteNumber)(s3.duration) ? s3.duration : 1 / 0, c2 = Math.max(0, e4), h2 = Math.min(r3, u2, d2);
      h2 > c2 ? (a2.logger.log("[buffer-controller]: Removing [" + c2 + "," + h2 + "] from the " + t4 + " SourceBuffer"), console.assert(!l3.updating, t4 + " sourceBuffer must not be updating"), l3.remove(c2, h2)) : o3.shiftAndExecuteNext(t4);
    }, e3.appendExecutor = function(t4, e4) {
      var r3 = this.operationQueue, i3 = this.sourceBuffer[e4];
      if (!i3)
        return a2.logger.warn("[buffer-controller]: Attempting to append to the " + e4 + " SourceBuffer, but it does not exist"), void r3.shiftAndExecuteNext(e4);
      i3.ended = false, console.assert(!i3.updating, e4 + " sourceBuffer must not be updating"), i3.appendBuffer(t4);
    }, e3.blockBuffers = function(t4, e4) {
      var r3 = this;
      if (void 0 === e4 && (e4 = this.getSourceBufferTypes()), !e4.length)
        return a2.logger.log("[buffer-controller]: Blocking operation requested, but no SourceBuffers exist"), void Promise.resolve(t4);
      var i3 = this.operationQueue, n3 = e4.map(function(t5) {
        return i3.appendBlocker(t5);
      });
      Promise.all(n3).then(function() {
        t4(), e4.forEach(function(t5) {
          var e5 = r3.sourceBuffer[t5];
          e5 && e5.updating || i3.shiftAndExecuteNext(t5);
        });
      });
    }, e3.getSourceBufferTypes = function() {
      return Object.keys(this.sourceBuffer);
    }, e3.addBufferListener = function(t4, e4, r3) {
      var i3 = this.sourceBuffer[t4];
      if (i3) {
        var n3 = r3.bind(this, t4);
        this.listeners[t4].push({ event: e4, listener: n3 }), i3.addEventListener(e4, n3);
      }
    }, e3.removeBufferListeners = function(t4) {
      var e4 = this.sourceBuffer[t4];
      e4 && this.listeners[t4].forEach(function(t5) {
        e4.removeEventListener(t5.event, t5.listener);
      });
    }, t3;
  }();
}, "./src/controller/buffer-operation-queue.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "default", function() {
    return n2;
  });
  var i2 = r2("./src/utils/logger.ts"), n2 = function() {
    function t3(t4) {
      this.buffers = void 0, this.queues = { video: [], audio: [], audiovideo: [] }, this.buffers = t4;
    }
    var e3 = t3.prototype;
    return e3.append = function(t4, e4) {
      var r3 = this.queues[e4];
      r3.push(t4), 1 === r3.length && this.buffers[e4] && this.executeNext(e4);
    }, e3.insertAbort = function(t4, e4) {
      this.queues[e4].unshift(t4), this.executeNext(e4);
    }, e3.appendBlocker = function(t4) {
      var e4, r3 = new Promise(function(t5) {
        e4 = t5;
      }), i3 = { execute: e4, onStart: function() {
      }, onComplete: function() {
      }, onError: function() {
      } };
      return this.append(i3, t4), r3;
    }, e3.executeNext = function(t4) {
      var e4 = this.buffers, r3 = this.queues, n3 = e4[t4], a2 = r3[t4];
      if (a2.length) {
        var s2 = a2[0];
        try {
          s2.execute();
        } catch (o2) {
          i2.logger.warn("[buffer-operation-queue]: Unhandled exception executing the current operation"), s2.onError(o2), n3 && n3.updating || (a2.shift(), this.executeNext(t4));
        }
      }
    }, e3.shiftAndExecuteNext = function(t4) {
      this.queues[t4].shift(), this.executeNext(t4);
    }, e3.current = function(t4) {
      return this.queues[t4][0];
    }, t3;
  }();
}, "./src/controller/cap-level-controller.ts": function(t2, e2, r2) {
  r2.r(e2);
  var i2 = r2("./src/events.ts");
  function n2(t3, e3) {
    for (var r3 = 0; r3 < e3.length; r3++) {
      var i3 = e3[r3];
      i3.enumerable = i3.enumerable || false, i3.configurable = true, "value" in i3 && (i3.writable = true), Object.defineProperty(t3, i3.key, i3);
    }
  }
  var a2 = function() {
    function t3(t4) {
      this.autoLevelCapping = void 0, this.firstLevel = void 0, this.media = void 0, this.restrictedLevels = void 0, this.timer = void 0, this.hls = void 0, this.streamController = void 0, this.clientRect = void 0, this.hls = t4, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.firstLevel = -1, this.media = null, this.restrictedLevels = [], this.timer = void 0, this.clientRect = null, this.registerListeners();
    }
    var e3, r3, a3, s2 = t3.prototype;
    return s2.setStreamController = function(t4) {
      this.streamController = t4;
    }, s2.destroy = function() {
      this.unregisterListener(), this.hls.config.capLevelToPlayerSize && this.stopCapping(), this.media = null, this.clientRect = null, this.hls = this.streamController = null;
    }, s2.registerListeners = function() {
      var t4 = this.hls;
      t4.on(i2.Events.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), t4.on(i2.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), t4.on(i2.Events.MANIFEST_PARSED, this.onManifestParsed, this), t4.on(i2.Events.BUFFER_CODECS, this.onBufferCodecs, this), t4.on(i2.Events.MEDIA_DETACHING, this.onMediaDetaching, this);
    }, s2.unregisterListener = function() {
      var t4 = this.hls;
      t4.off(i2.Events.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), t4.off(i2.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), t4.off(i2.Events.MANIFEST_PARSED, this.onManifestParsed, this), t4.off(i2.Events.BUFFER_CODECS, this.onBufferCodecs, this), t4.off(i2.Events.MEDIA_DETACHING, this.onMediaDetaching, this);
    }, s2.onFpsDropLevelCapping = function(e4, r4) {
      t3.isLevelAllowed(r4.droppedLevel, this.restrictedLevels) && this.restrictedLevels.push(r4.droppedLevel);
    }, s2.onMediaAttaching = function(t4, e4) {
      this.media = e4.media instanceof HTMLVideoElement ? e4.media : null;
    }, s2.onManifestParsed = function(t4, e4) {
      var r4 = this.hls;
      this.restrictedLevels = [], this.firstLevel = e4.firstLevel, r4.config.capLevelToPlayerSize && e4.video && this.startCapping();
    }, s2.onBufferCodecs = function(t4, e4) {
      this.hls.config.capLevelToPlayerSize && e4.video && this.startCapping();
    }, s2.onMediaDetaching = function() {
      this.stopCapping();
    }, s2.detectPlayerSize = function() {
      if (this.media && this.mediaHeight > 0 && this.mediaWidth > 0) {
        var t4 = this.hls.levels;
        if (t4.length) {
          var e4 = this.hls;
          e4.autoLevelCapping = this.getMaxLevel(t4.length - 1), e4.autoLevelCapping > this.autoLevelCapping && this.streamController && this.streamController.nextLevelSwitch(), this.autoLevelCapping = e4.autoLevelCapping;
        }
      }
    }, s2.getMaxLevel = function(e4) {
      var r4 = this, i3 = this.hls.levels;
      if (!i3.length)
        return -1;
      var n3 = i3.filter(function(i4, n4) {
        return t3.isLevelAllowed(n4, r4.restrictedLevels) && n4 <= e4;
      });
      return this.clientRect = null, t3.getMaxLevelByMediaSize(n3, this.mediaWidth, this.mediaHeight);
    }, s2.startCapping = function() {
      this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY, this.hls.firstLevel = this.getMaxLevel(this.firstLevel), self.clearInterval(this.timer), this.timer = self.setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize());
    }, s2.stopCapping = function() {
      this.restrictedLevels = [], this.firstLevel = -1, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (self.clearInterval(this.timer), this.timer = void 0);
    }, s2.getDimensions = function() {
      if (this.clientRect)
        return this.clientRect;
      var t4 = this.media, e4 = { width: 0, height: 0 };
      if (t4) {
        var r4 = t4.getBoundingClientRect();
        e4.width = r4.width, e4.height = r4.height, e4.width || e4.height || (e4.width = r4.right - r4.left || t4.width || 0, e4.height = r4.bottom - r4.top || t4.height || 0);
      }
      return this.clientRect = e4, e4;
    }, t3.isLevelAllowed = function(t4, e4) {
      return void 0 === e4 && (e4 = []), -1 === e4.indexOf(t4);
    }, t3.getMaxLevelByMediaSize = function(t4, e4, r4) {
      if (!t4 || !t4.length)
        return -1;
      for (var i3, n3, a4 = t4.length - 1, s3 = 0; s3 < t4.length; s3 += 1) {
        var o2 = t4[s3];
        if ((o2.width >= e4 || o2.height >= r4) && (i3 = o2, !(n3 = t4[s3 + 1]) || i3.width !== n3.width || i3.height !== n3.height)) {
          a4 = s3;
          break;
        }
      }
      return a4;
    }, e3 = t3, a3 = [{ key: "contentScaleFactor", get: function() {
      var t4 = 1;
      try {
        t4 = self.devicePixelRatio;
      } catch (e4) {
      }
      return t4;
    } }], (r3 = [{ key: "mediaWidth", get: function() {
      return this.getDimensions().width * t3.contentScaleFactor;
    } }, { key: "mediaHeight", get: function() {
      return this.getDimensions().height * t3.contentScaleFactor;
    } }]) && n2(e3.prototype, r3), a3 && n2(e3, a3), t3;
  }();
  e2.default = a2;
}, "./src/controller/eme-controller.ts": function(t2, e2, r2) {
  r2.r(e2);
  var i2 = r2("./src/events.ts"), n2 = r2("./src/errors.ts"), a2 = r2("./src/utils/logger.ts"), s2 = r2("./src/utils/mediakeys-helper.ts");
  function o2(t3, e3) {
    for (var r3 = 0; r3 < e3.length; r3++) {
      var i3 = e3[r3];
      i3.enumerable = i3.enumerable || false, i3.configurable = true, "value" in i3 && (i3.writable = true), Object.defineProperty(t3, i3.key, i3);
    }
  }
  var l2 = function() {
    function t3(t4) {
      this.hls = void 0, this._widevineLicenseUrl = void 0, this._licenseXhrSetup = void 0, this._licenseResponseCallback = void 0, this._emeEnabled = void 0, this._requestMediaKeySystemAccess = void 0, this._drmSystemOptions = void 0, this._config = void 0, this._mediaKeysList = [], this._media = null, this._hasSetMediaKeys = false, this._requestLicenseFailureCount = 0, this.mediaKeysPromise = null, this._onMediaEncrypted = this.onMediaEncrypted.bind(this), this.hls = t4, this._config = t4.config, this._widevineLicenseUrl = this._config.widevineLicenseUrl, this._licenseXhrSetup = this._config.licenseXhrSetup, this._licenseResponseCallback = this._config.licenseResponseCallback, this._emeEnabled = this._config.emeEnabled, this._requestMediaKeySystemAccess = this._config.requestMediaKeySystemAccessFunc, this._drmSystemOptions = this._config.drmSystemOptions, this._registerListeners();
    }
    var e3, r3, u = t3.prototype;
    return u.destroy = function() {
      this._unregisterListeners(), this.hls = this._onMediaEncrypted = null, this._requestMediaKeySystemAccess = null;
    }, u._registerListeners = function() {
      this.hls.on(i2.Events.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(i2.Events.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.on(i2.Events.MANIFEST_PARSED, this.onManifestParsed, this);
    }, u._unregisterListeners = function() {
      this.hls.off(i2.Events.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(i2.Events.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.off(i2.Events.MANIFEST_PARSED, this.onManifestParsed, this);
    }, u.getLicenseServerUrl = function(t4) {
      switch (t4) {
        case s2.KeySystems.WIDEVINE:
          if (!this._widevineLicenseUrl)
            break;
          return this._widevineLicenseUrl;
      }
      throw new Error('no license server URL configured for key-system "' + t4 + '"');
    }, u._attemptKeySystemAccess = function(t4, e4, r4) {
      var i3 = this, n3 = function(t5, e5, r5, i4) {
        switch (t5) {
          case s2.KeySystems.WIDEVINE:
            return function(t6, e6, r6) {
              var i5 = { audioCapabilities: [], videoCapabilities: [] };
              return t6.forEach(function(t7) {
                i5.audioCapabilities.push({ contentType: 'audio/mp4; codecs="' + t7 + '"', robustness: r6.audioRobustness || "" });
              }), e6.forEach(function(t7) {
                i5.videoCapabilities.push({ contentType: 'video/mp4; codecs="' + t7 + '"', robustness: r6.videoRobustness || "" });
              }), [i5];
            }(e5, r5, i4);
          default:
            throw new Error("Unknown key-system: " + t5);
        }
      }(t4, e4, r4, this._drmSystemOptions);
      a2.logger.log("Requesting encrypted media key-system access");
      var o3 = this.requestMediaKeySystemAccess(t4, n3);
      this.mediaKeysPromise = o3.then(function(e5) {
        return i3._onMediaKeySystemAccessObtained(t4, e5);
      }), o3.catch(function(e5) {
        a2.logger.error('Failed to obtain key-system "' + t4 + '" access:', e5);
      });
    }, u._onMediaKeySystemAccessObtained = function(t4, e4) {
      var r4 = this;
      a2.logger.log('Access for key-system "' + t4 + '" obtained');
      var i3 = { mediaKeysSessionInitialized: false, mediaKeySystemAccess: e4, mediaKeySystemDomain: t4 };
      this._mediaKeysList.push(i3);
      var n3 = Promise.resolve().then(function() {
        return e4.createMediaKeys();
      }).then(function(e5) {
        return i3.mediaKeys = e5, a2.logger.log('Media-keys created for key-system "' + t4 + '"'), r4._onMediaKeysCreated(), e5;
      });
      return n3.catch(function(t5) {
        a2.logger.error("Failed to create media-keys:", t5);
      }), n3;
    }, u._onMediaKeysCreated = function() {
      var t4 = this;
      this._mediaKeysList.forEach(function(e4) {
        e4.mediaKeysSession || (e4.mediaKeysSession = e4.mediaKeys.createSession(), t4._onNewMediaKeySession(e4.mediaKeysSession));
      });
    }, u._onNewMediaKeySession = function(t4) {
      var e4 = this;
      a2.logger.log("New key-system session " + t4.sessionId), t4.addEventListener("message", function(r4) {
        e4._onKeySessionMessage(t4, r4.message);
      }, false);
    }, u._onKeySessionMessage = function(t4, e4) {
      a2.logger.log("Got EME message event, creating license request"), this._requestLicense(e4, function(e5) {
        a2.logger.log("Received license data (length: " + (e5 ? e5.byteLength : e5) + "), updating key-session"), t4.update(e5);
      });
    }, u.onMediaEncrypted = function(t4) {
      var e4 = this;
      if (a2.logger.log('Media is encrypted using "' + t4.initDataType + '" init data type'), !this.mediaKeysPromise)
        return a2.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been requested"), void this.hls.trigger(i2.Events.ERROR, { type: n2.ErrorTypes.KEY_SYSTEM_ERROR, details: n2.ErrorDetails.KEY_SYSTEM_NO_KEYS, fatal: true });
      var r4 = function(r5) {
        e4._media && (e4._attemptSetMediaKeys(r5), e4._generateRequestWithPreferredKeySession(t4.initDataType, t4.initData));
      };
      this.mediaKeysPromise.then(r4).catch(r4);
    }, u._attemptSetMediaKeys = function(t4) {
      if (!this._media)
        throw new Error("Attempted to set mediaKeys without first attaching a media element");
      if (!this._hasSetMediaKeys) {
        var e4 = this._mediaKeysList[0];
        if (!e4 || !e4.mediaKeys)
          return a2.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"), void this.hls.trigger(i2.Events.ERROR, { type: n2.ErrorTypes.KEY_SYSTEM_ERROR, details: n2.ErrorDetails.KEY_SYSTEM_NO_KEYS, fatal: true });
        a2.logger.log("Setting keys for encrypted media"), this._media.setMediaKeys(e4.mediaKeys), this._hasSetMediaKeys = true;
      }
    }, u._generateRequestWithPreferredKeySession = function(t4, e4) {
      var r4 = this, s3 = this._mediaKeysList[0];
      if (!s3)
        return a2.logger.error("Fatal: Media is encrypted but not any key-system access has been obtained yet"), void this.hls.trigger(i2.Events.ERROR, { type: n2.ErrorTypes.KEY_SYSTEM_ERROR, details: n2.ErrorDetails.KEY_SYSTEM_NO_ACCESS, fatal: true });
      if (s3.mediaKeysSessionInitialized)
        a2.logger.warn("Key-Session already initialized but requested again");
      else {
        var o3 = s3.mediaKeysSession;
        if (!o3)
          return a2.logger.error("Fatal: Media is encrypted but no key-session existing"), void this.hls.trigger(i2.Events.ERROR, { type: n2.ErrorTypes.KEY_SYSTEM_ERROR, details: n2.ErrorDetails.KEY_SYSTEM_NO_SESSION, fatal: true });
        if (!e4)
          return a2.logger.warn("Fatal: initData required for generating a key session is null"), void this.hls.trigger(i2.Events.ERROR, { type: n2.ErrorTypes.KEY_SYSTEM_ERROR, details: n2.ErrorDetails.KEY_SYSTEM_NO_INIT_DATA, fatal: true });
        a2.logger.log('Generating key-session request for "' + t4 + '" init data type'), s3.mediaKeysSessionInitialized = true, o3.generateRequest(t4, e4).then(function() {
          a2.logger.debug("Key-session generation succeeded");
        }).catch(function(t5) {
          a2.logger.error("Error generating key-session request:", t5), r4.hls.trigger(i2.Events.ERROR, { type: n2.ErrorTypes.KEY_SYSTEM_ERROR, details: n2.ErrorDetails.KEY_SYSTEM_NO_SESSION, fatal: false });
        });
      }
    }, u._createLicenseXhr = function(t4, e4, r4) {
      var i3 = new XMLHttpRequest();
      i3.responseType = "arraybuffer", i3.onreadystatechange = this._onLicenseRequestReadyStageChange.bind(this, i3, t4, e4, r4);
      var n3 = this._licenseXhrSetup;
      if (n3)
        try {
          n3.call(this.hls, i3, t4), n3 = void 0;
        } catch (s3) {
          a2.logger.error(s3);
        }
      try {
        i3.readyState || i3.open("POST", t4, true), n3 && n3.call(this.hls, i3, t4);
      } catch (s3) {
        throw new Error("issue setting up KeySystem license XHR " + s3);
      }
      return i3;
    }, u._onLicenseRequestReadyStageChange = function(t4, e4, r4, s3) {
      switch (t4.readyState) {
        case 4:
          if (200 === t4.status) {
            this._requestLicenseFailureCount = 0, a2.logger.log("License request succeeded");
            var o3 = t4.response, l3 = this._licenseResponseCallback;
            if (l3)
              try {
                o3 = l3.call(this.hls, t4, e4);
              } catch (d) {
                a2.logger.error(d);
              }
            s3(o3);
          } else {
            if (a2.logger.error("License Request XHR failed (" + e4 + "). Status: " + t4.status + " (" + t4.statusText + ")"), this._requestLicenseFailureCount++, this._requestLicenseFailureCount > 3)
              return void this.hls.trigger(i2.Events.ERROR, { type: n2.ErrorTypes.KEY_SYSTEM_ERROR, details: n2.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED, fatal: true });
            var u2 = 3 - this._requestLicenseFailureCount + 1;
            a2.logger.warn("Retrying license request, " + u2 + " attempts left"), this._requestLicense(r4, s3);
          }
      }
    }, u._generateLicenseRequestChallenge = function(t4, e4) {
      switch (t4.mediaKeySystemDomain) {
        case s2.KeySystems.WIDEVINE:
          return e4;
      }
      throw new Error("unsupported key-system: " + t4.mediaKeySystemDomain);
    }, u._requestLicense = function(t4, e4) {
      a2.logger.log("Requesting content license for key-system");
      var r4 = this._mediaKeysList[0];
      if (!r4)
        return a2.logger.error("Fatal error: Media is encrypted but no key-system access has been obtained yet"), void this.hls.trigger(i2.Events.ERROR, { type: n2.ErrorTypes.KEY_SYSTEM_ERROR, details: n2.ErrorDetails.KEY_SYSTEM_NO_ACCESS, fatal: true });
      try {
        var s3 = this.getLicenseServerUrl(r4.mediaKeySystemDomain), o3 = this._createLicenseXhr(s3, t4, e4);
        a2.logger.log("Sending license request to URL: " + s3);
        var l3 = this._generateLicenseRequestChallenge(r4, t4);
        o3.send(l3);
      } catch (u2) {
        a2.logger.error("Failure requesting DRM license: " + u2), this.hls.trigger(i2.Events.ERROR, { type: n2.ErrorTypes.KEY_SYSTEM_ERROR, details: n2.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED, fatal: true });
      }
    }, u.onMediaAttached = function(t4, e4) {
      if (this._emeEnabled) {
        var r4 = e4.media;
        this._media = r4, r4.addEventListener("encrypted", this._onMediaEncrypted);
      }
    }, u.onMediaDetached = function() {
      var t4 = this._media, e4 = this._mediaKeysList;
      t4 && (t4.removeEventListener("encrypted", this._onMediaEncrypted), this._media = null, this._mediaKeysList = [], Promise.all(e4.map(function(t5) {
        if (t5.mediaKeysSession)
          return t5.mediaKeysSession.close().catch(function() {
          });
      })).then(function() {
        return t4.setMediaKeys(null);
      }).catch(function() {
      }));
    }, u.onManifestParsed = function(t4, e4) {
      if (this._emeEnabled) {
        var r4 = e4.levels.map(function(t5) {
          return t5.audioCodec;
        }).filter(function(t5) {
          return !!t5;
        }), i3 = e4.levels.map(function(t5) {
          return t5.videoCodec;
        }).filter(function(t5) {
          return !!t5;
        });
        this._attemptKeySystemAccess(s2.KeySystems.WIDEVINE, r4, i3);
      }
    }, e3 = t3, (r3 = [{ key: "requestMediaKeySystemAccess", get: function() {
      if (!this._requestMediaKeySystemAccess)
        throw new Error("No requestMediaKeySystemAccess function configured");
      return this._requestMediaKeySystemAccess;
    } }]) && o2(e3.prototype, r3), t3;
  }();
  e2.default = l2;
}, "./src/controller/fps-controller.ts": function(t2, e2, r2) {
  r2.r(e2);
  var i2 = r2("./src/events.ts"), n2 = r2("./src/utils/logger.ts"), a2 = function() {
    function t3(t4) {
      this.hls = void 0, this.isVideoPlaybackQualityAvailable = false, this.timer = void 0, this.media = null, this.lastTime = void 0, this.lastDroppedFrames = 0, this.lastDecodedFrames = 0, this.streamController = void 0, this.hls = t4, this.registerListeners();
    }
    var e3 = t3.prototype;
    return e3.setStreamController = function(t4) {
      this.streamController = t4;
    }, e3.registerListeners = function() {
      this.hls.on(i2.Events.MEDIA_ATTACHING, this.onMediaAttaching, this);
    }, e3.unregisterListeners = function() {
      this.hls.off(i2.Events.MEDIA_ATTACHING, this.onMediaAttaching);
    }, e3.destroy = function() {
      this.timer && clearInterval(this.timer), this.unregisterListeners(), this.isVideoPlaybackQualityAvailable = false, this.media = null;
    }, e3.onMediaAttaching = function(t4, e4) {
      var r3 = this.hls.config;
      if (r3.capLevelOnFPSDrop) {
        var i3 = e4.media instanceof self.HTMLVideoElement ? e4.media : null;
        this.media = i3, i3 && "function" == typeof i3.getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = true), self.clearInterval(this.timer), this.timer = self.setInterval(this.checkFPSInterval.bind(this), r3.fpsDroppedMonitoringPeriod);
      }
    }, e3.checkFPS = function(t4, e4, r3) {
      var a3 = performance.now();
      if (e4) {
        if (this.lastTime) {
          var s2 = a3 - this.lastTime, o2 = r3 - this.lastDroppedFrames, l2 = e4 - this.lastDecodedFrames, u = 1e3 * o2 / s2, d = this.hls;
          if (d.trigger(i2.Events.FPS_DROP, { currentDropped: o2, currentDecoded: l2, totalDroppedFrames: r3 }), u > 0 && o2 > d.config.fpsDroppedMonitoringThreshold * l2) {
            var c = d.currentLevel;
            n2.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: " + c), c > 0 && (-1 === d.autoLevelCapping || d.autoLevelCapping >= c) && (c -= 1, d.trigger(i2.Events.FPS_DROP_LEVEL_CAPPING, { level: c, droppedLevel: d.currentLevel }), d.autoLevelCapping = c, this.streamController.nextLevelSwitch());
          }
        }
        this.lastTime = a3, this.lastDroppedFrames = r3, this.lastDecodedFrames = e4;
      }
    }, e3.checkFPSInterval = function() {
      var t4 = this.media;
      if (t4)
        if (this.isVideoPlaybackQualityAvailable) {
          var e4 = t4.getVideoPlaybackQuality();
          this.checkFPS(t4, e4.totalVideoFrames, e4.droppedVideoFrames);
        } else
          this.checkFPS(t4, t4.webkitDecodedFrameCount, t4.webkitDroppedFrameCount);
    }, t3;
  }();
  e2.default = a2;
}, "./src/controller/fragment-finders.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "findFragmentByPDT", function() {
    return a2;
  }), r2.d(e2, "findFragmentByPTS", function() {
    return s2;
  }), r2.d(e2, "fragmentWithinToleranceTest", function() {
    return o2;
  }), r2.d(e2, "pdtWithinToleranceTest", function() {
    return l2;
  }), r2.d(e2, "findFragWithCC", function() {
    return u;
  });
  var i2 = r2("./src/polyfills/number.ts"), n2 = r2("./src/utils/binary-search.ts");
  function a2(t3, e3, r3) {
    if (null === e3 || !Array.isArray(t3) || !t3.length || !Object(i2.isFiniteNumber)(e3))
      return null;
    if (e3 < (t3[0].programDateTime || 0))
      return null;
    if (e3 >= (t3[t3.length - 1].endProgramDateTime || 0))
      return null;
    r3 = r3 || 0;
    for (var n3 = 0; n3 < t3.length; ++n3) {
      var a3 = t3[n3];
      if (l2(e3, r3, a3))
        return a3;
    }
    return null;
  }
  function s2(t3, e3, r3, i3) {
    void 0 === r3 && (r3 = 0), void 0 === i3 && (i3 = 0);
    var a3 = null;
    if (t3 ? a3 = e3[t3.sn - e3[0].sn + 1] || null : 0 === r3 && 0 === e3[0].start && (a3 = e3[0]), a3 && 0 === o2(r3, i3, a3))
      return a3;
    var s3 = n2.default.search(e3, o2.bind(null, r3, i3));
    return s3 || a3;
  }
  function o2(t3, e3, r3) {
    void 0 === t3 && (t3 = 0), void 0 === e3 && (e3 = 0);
    var i3 = Math.min(e3, r3.duration + (r3.deltaPTS ? r3.deltaPTS : 0));
    return r3.start + r3.duration - i3 <= t3 ? 1 : r3.start - i3 > t3 && r3.start ? -1 : 0;
  }
  function l2(t3, e3, r3) {
    var i3 = 1e3 * Math.min(e3, r3.duration + (r3.deltaPTS ? r3.deltaPTS : 0));
    return (r3.endProgramDateTime || 0) - i3 > t3;
  }
  function u(t3, e3) {
    return n2.default.search(t3, function(t4) {
      return t4.cc < e3 ? 1 : t4.cc > e3 ? -1 : 0;
    });
  }
}, "./src/controller/fragment-tracker.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "FragmentState", function() {
    return i2;
  }), r2.d(e2, "FragmentTracker", function() {
    return o2;
  });
  var i2, n2, a2 = r2("./src/events.ts"), s2 = r2("./src/types/loader.ts");
  (n2 = i2 || (i2 = {})).NOT_LOADED = "NOT_LOADED", n2.BACKTRACKED = "BACKTRACKED", n2.APPENDING = "APPENDING", n2.PARTIAL = "PARTIAL", n2.OK = "OK";
  var o2 = function() {
    function t3(t4) {
      this.activeFragment = null, this.activeParts = null, this.fragments = /* @__PURE__ */ Object.create(null), this.timeRanges = /* @__PURE__ */ Object.create(null), this.bufferPadding = 0.2, this.hls = void 0, this.hls = t4, this._registerListeners();
    }
    var e3 = t3.prototype;
    return e3._registerListeners = function() {
      var t4 = this.hls;
      t4.on(a2.Events.BUFFER_APPENDED, this.onBufferAppended, this), t4.on(a2.Events.FRAG_BUFFERED, this.onFragBuffered, this), t4.on(a2.Events.FRAG_LOADED, this.onFragLoaded, this);
    }, e3._unregisterListeners = function() {
      var t4 = this.hls;
      t4.off(a2.Events.BUFFER_APPENDED, this.onBufferAppended, this), t4.off(a2.Events.FRAG_BUFFERED, this.onFragBuffered, this), t4.off(a2.Events.FRAG_LOADED, this.onFragLoaded, this);
    }, e3.destroy = function() {
      this._unregisterListeners(), this.fragments = this.timeRanges = null;
    }, e3.getAppendedFrag = function(t4, e4) {
      if (e4 === s2.PlaylistLevelType.MAIN) {
        var r3 = this.activeFragment, i3 = this.activeParts;
        if (!r3)
          return null;
        if (i3)
          for (var n3 = i3.length; n3--; ) {
            var a3 = i3[n3], o3 = a3 ? a3.end : r3.appendedPTS;
            if (a3.start <= t4 && void 0 !== o3 && t4 <= o3)
              return n3 > 9 && (this.activeParts = i3.slice(n3 - 9)), a3;
          }
        else if (r3.start <= t4 && void 0 !== r3.appendedPTS && t4 <= r3.appendedPTS)
          return r3;
      }
      return this.getBufferedFrag(t4, e4);
    }, e3.getBufferedFrag = function(t4, e4) {
      for (var r3 = this.fragments, i3 = Object.keys(r3), n3 = i3.length; n3--; ) {
        var a3 = r3[i3[n3]];
        if ((null == a3 ? void 0 : a3.body.type) === e4 && a3.buffered) {
          var s3 = a3.body;
          if (s3.start <= t4 && t4 <= s3.end)
            return s3;
        }
      }
      return null;
    }, e3.detectEvictedFragments = function(t4, e4, r3) {
      var i3 = this;
      Object.keys(this.fragments).forEach(function(n3) {
        var a3 = i3.fragments[n3];
        if (a3)
          if (a3.buffered) {
            var s3 = a3.range[t4];
            s3 && s3.time.some(function(t5) {
              var r4 = !i3.isTimeBuffered(t5.startPTS, t5.endPTS, e4);
              return r4 && i3.removeFragment(a3.body), r4;
            });
          } else
            a3.body.type === r3 && i3.removeFragment(a3.body);
      });
    }, e3.detectPartialFragments = function(t4) {
      var e4 = this, r3 = this.timeRanges, i3 = t4.frag, n3 = t4.part;
      if (r3 && "initSegment" !== i3.sn) {
        var a3 = u(i3), s3 = this.fragments[a3];
        s3 && (Object.keys(r3).forEach(function(t5) {
          var a4 = i3.elementaryStreams[t5];
          if (a4) {
            var o3 = r3[t5], l3 = null !== n3 || true === a4.partial;
            s3.range[t5] = e4.getBufferedTimes(i3, n3, l3, o3);
          }
        }), s3.backtrack = s3.loaded = null, Object.keys(s3.range).length ? s3.buffered = true : this.removeFragment(s3.body));
      }
    }, e3.fragBuffered = function(t4) {
      var e4 = u(t4), r3 = this.fragments[e4];
      r3 && (r3.backtrack = r3.loaded = null, r3.buffered = true);
    }, e3.getBufferedTimes = function(t4, e4, r3, i3) {
      for (var n3 = { time: [], partial: r3 }, a3 = e4 ? e4.start : t4.start, s3 = e4 ? e4.end : t4.end, o3 = t4.minEndPTS || s3, l3 = t4.maxStartPTS || a3, u2 = 0; u2 < i3.length; u2++) {
        var d = i3.start(u2) - this.bufferPadding, c = i3.end(u2) + this.bufferPadding;
        if (l3 >= d && o3 <= c) {
          n3.time.push({ startPTS: Math.max(a3, i3.start(u2)), endPTS: Math.min(s3, i3.end(u2)) });
          break;
        }
        if (a3 < c && s3 > d)
          n3.partial = true, n3.time.push({ startPTS: Math.max(a3, i3.start(u2)), endPTS: Math.min(s3, i3.end(u2)) });
        else if (s3 <= d)
          break;
      }
      return n3;
    }, e3.getPartialFragment = function(t4) {
      var e4, r3, i3, n3 = null, a3 = 0, s3 = this.bufferPadding, o3 = this.fragments;
      return Object.keys(o3).forEach(function(u2) {
        var d = o3[u2];
        d && l2(d) && (r3 = d.body.start - s3, i3 = d.body.end + s3, t4 >= r3 && t4 <= i3 && (e4 = Math.min(t4 - r3, i3 - t4), a3 <= e4 && (n3 = d.body, a3 = e4)));
      }), n3;
    }, e3.getState = function(t4) {
      var e4 = u(t4), r3 = this.fragments[e4];
      return r3 ? r3.buffered ? l2(r3) ? i2.PARTIAL : i2.OK : r3.backtrack ? i2.BACKTRACKED : i2.APPENDING : i2.NOT_LOADED;
    }, e3.backtrack = function(t4, e4) {
      var r3 = u(t4), i3 = this.fragments[r3];
      if (!i3 || i3.backtrack)
        return null;
      var n3 = i3.backtrack = e4 || i3.loaded;
      return i3.loaded = null, n3;
    }, e3.getBacktrackData = function(t4) {
      var e4 = u(t4), r3 = this.fragments[e4];
      if (r3) {
        var i3, n3 = r3.backtrack;
        if (null != n3 && null !== (i3 = n3.payload) && void 0 !== i3 && i3.byteLength)
          return n3;
        this.removeFragment(t4);
      }
      return null;
    }, e3.isTimeBuffered = function(t4, e4, r3) {
      for (var i3, n3, a3 = 0; a3 < r3.length; a3++) {
        if (i3 = r3.start(a3) - this.bufferPadding, n3 = r3.end(a3) + this.bufferPadding, t4 >= i3 && e4 <= n3)
          return true;
        if (e4 <= i3)
          return false;
      }
      return false;
    }, e3.onFragLoaded = function(t4, e4) {
      var r3 = e4.frag, i3 = e4.part;
      if ("initSegment" !== r3.sn && !r3.bitrateTest && !i3) {
        var n3 = u(r3);
        this.fragments[n3] = { body: r3, loaded: e4, backtrack: null, buffered: false, range: /* @__PURE__ */ Object.create(null) };
      }
    }, e3.onBufferAppended = function(t4, e4) {
      var r3 = this, i3 = e4.frag, n3 = e4.part, a3 = e4.timeRanges;
      if (i3.type === s2.PlaylistLevelType.MAIN)
        if (this.activeFragment = i3, n3) {
          var o3 = this.activeParts;
          o3 || (this.activeParts = o3 = []), o3.push(n3);
        } else
          this.activeParts = null;
      this.timeRanges = a3, Object.keys(a3).forEach(function(t5) {
        var e5 = a3[t5];
        if (r3.detectEvictedFragments(t5, e5), !n3)
          for (var s3 = 0; s3 < e5.length; s3++)
            i3.appendedPTS = Math.max(e5.end(s3), i3.appendedPTS || 0);
      });
    }, e3.onFragBuffered = function(t4, e4) {
      this.detectPartialFragments(e4);
    }, e3.hasFragment = function(t4) {
      var e4 = u(t4);
      return !!this.fragments[e4];
    }, e3.removeFragmentsInRange = function(t4, e4, r3) {
      var i3 = this;
      Object.keys(this.fragments).forEach(function(n3) {
        var a3 = i3.fragments[n3];
        if (a3 && a3.buffered) {
          var s3 = a3.body;
          s3.type === r3 && s3.start < e4 && s3.end > t4 && i3.removeFragment(s3);
        }
      });
    }, e3.removeFragment = function(t4) {
      var e4 = u(t4);
      t4.stats.loaded = 0, t4.clearElementaryStreamInfo(), delete this.fragments[e4];
    }, e3.removeAllFragments = function() {
      this.fragments = /* @__PURE__ */ Object.create(null), this.activeFragment = null, this.activeParts = null;
    }, t3;
  }();
  function l2(t3) {
    var e3, r3;
    return t3.buffered && ((null === (e3 = t3.range.video) || void 0 === e3 ? void 0 : e3.partial) || (null === (r3 = t3.range.audio) || void 0 === r3 ? void 0 : r3.partial));
  }
  function u(t3) {
    return t3.type + "_" + t3.level + "_" + t3.urlId + "_" + t3.sn;
  }
}, "./src/controller/gap-controller.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "STALL_MINIMUM_DURATION_MS", function() {
    return o2;
  }), r2.d(e2, "MAX_START_GAP_JUMP", function() {
    return l2;
  }), r2.d(e2, "SKIP_BUFFER_HOLE_STEP_SECONDS", function() {
    return u;
  }), r2.d(e2, "SKIP_BUFFER_RANGE_START", function() {
    return d;
  }), r2.d(e2, "default", function() {
    return c;
  });
  var i2 = r2("./src/utils/buffer-helper.ts"), n2 = r2("./src/errors.ts"), a2 = r2("./src/events.ts"), s2 = r2("./src/utils/logger.ts"), o2 = 250, l2 = 2, u = 0.1, d = 0.05, c = function() {
    function t3(t4, e4, r3, i3) {
      this.config = void 0, this.media = void 0, this.fragmentTracker = void 0, this.hls = void 0, this.nudgeRetry = 0, this.stallReported = false, this.stalled = null, this.moved = false, this.seeking = false, this.config = t4, this.media = e4, this.fragmentTracker = r3, this.hls = i3;
    }
    var e3 = t3.prototype;
    return e3.destroy = function() {
      this.hls = this.fragmentTracker = this.media = null;
    }, e3.poll = function(t4) {
      var e4 = this.config, r3 = this.media, n3 = this.stalled, a3 = r3.currentTime, u2 = r3.seeking, d2 = this.seeking && !u2, c2 = !this.seeking && u2;
      if (this.seeking = u2, a3 === t4) {
        if ((c2 || d2) && (this.stalled = null), !r3.paused && !r3.ended && 0 !== r3.playbackRate && i2.BufferHelper.getBuffered(r3).length) {
          var h = i2.BufferHelper.bufferInfo(r3, a3, 0), f = h.len > 0, g = h.nextStart || 0;
          if (f || g) {
            if (u2) {
              var v = h.len > l2, p = !g || g - a3 > l2 && !this.fragmentTracker.getPartialFragment(a3);
              if (v || p)
                return;
              this.moved = false;
            }
            if (!this.moved && null !== this.stalled) {
              var m, y = Math.max(g, h.start || 0) - a3, E = this.hls.levels ? this.hls.levels[this.hls.currentLevel] : null, T = (null == E || null === (m = E.details) || void 0 === m ? void 0 : m.live) ? 2 * E.details.targetduration : l2;
              if (y > 0 && y <= T)
                return void this._trySkipBufferHole(null);
            }
            var S = self.performance.now();
            if (null !== n3) {
              var b = S - n3;
              !u2 && b >= o2 && this._reportStall(h.len);
              var L = i2.BufferHelper.bufferInfo(r3, a3, e4.maxBufferHole);
              this._tryFixBufferStall(L, b);
            } else
              this.stalled = S;
          }
        }
      } else if (this.moved = true, null !== n3) {
        if (this.stallReported) {
          var A = self.performance.now() - n3;
          s2.logger.warn("playback not stuck anymore @" + a3 + ", after " + Math.round(A) + "ms"), this.stallReported = false;
        }
        this.stalled = null, this.nudgeRetry = 0;
      }
    }, e3._tryFixBufferStall = function(t4, e4) {
      var r3 = this.config, i3 = this.fragmentTracker, n3 = this.media.currentTime, a3 = i3.getPartialFragment(n3);
      a3 && this._trySkipBufferHole(a3) || t4.len > r3.maxBufferHole && e4 > 1e3 * r3.highBufferWatchdogPeriod && (s2.logger.warn("Trying to nudge playhead over buffer-hole"), this.stalled = null, this._tryNudgeBuffer());
    }, e3._reportStall = function(t4) {
      var e4 = this.hls, r3 = this.media;
      this.stallReported || (this.stallReported = true, s2.logger.warn("Playback stalling at @" + r3.currentTime + " due to low buffer (buffer=" + t4 + ")"), e4.trigger(a2.Events.ERROR, { type: n2.ErrorTypes.MEDIA_ERROR, details: n2.ErrorDetails.BUFFER_STALLED_ERROR, fatal: false, buffer: t4 }));
    }, e3._trySkipBufferHole = function(t4) {
      for (var e4 = this.config, r3 = this.hls, o3 = this.media, l3 = o3.currentTime, c2 = 0, h = i2.BufferHelper.getBuffered(o3), f = 0; f < h.length; f++) {
        var g = h.start(f);
        if (l3 + e4.maxBufferHole >= c2 && l3 < g) {
          var v = Math.max(g + d, o3.currentTime + u);
          return s2.logger.warn("skipping hole, adjusting currentTime from " + l3 + " to " + v), this.moved = true, this.stalled = null, o3.currentTime = v, t4 && r3.trigger(a2.Events.ERROR, { type: n2.ErrorTypes.MEDIA_ERROR, details: n2.ErrorDetails.BUFFER_SEEK_OVER_HOLE, fatal: false, reason: "fragment loaded with buffer holes, seeking from " + l3 + " to " + v, frag: t4 }), v;
        }
        c2 = h.end(f);
      }
      return 0;
    }, e3._tryNudgeBuffer = function() {
      var t4 = this.config, e4 = this.hls, r3 = this.media, i3 = r3.currentTime, o3 = (this.nudgeRetry || 0) + 1;
      if (this.nudgeRetry = o3, o3 < t4.nudgeMaxRetry) {
        var l3 = i3 + o3 * t4.nudgeOffset;
        s2.logger.warn("Nudging 'currentTime' from " + i3 + " to " + l3), r3.currentTime = l3, e4.trigger(a2.Events.ERROR, { type: n2.ErrorTypes.MEDIA_ERROR, details: n2.ErrorDetails.BUFFER_NUDGE_ON_STALL, fatal: false });
      } else
        s2.logger.error("Playhead still not moving while enough data buffered @" + i3 + " after " + t4.nudgeMaxRetry + " nudges"), e4.trigger(a2.Events.ERROR, { type: n2.ErrorTypes.MEDIA_ERROR, details: n2.ErrorDetails.BUFFER_STALLED_ERROR, fatal: true });
    }, t3;
  }();
}, "./src/controller/id3-track-controller.ts": function(t2, e2, r2) {
  r2.r(e2);
  var i2 = r2("./src/events.ts"), n2 = r2("./src/utils/texttrack-utils.ts"), a2 = r2("./src/demux/id3.ts"), s2 = function() {
    function t3(t4) {
      this.hls = void 0, this.id3Track = null, this.media = null, this.hls = t4, this._registerListeners();
    }
    var e3 = t3.prototype;
    return e3.destroy = function() {
      this._unregisterListeners();
    }, e3._registerListeners = function() {
      var t4 = this.hls;
      t4.on(i2.Events.MEDIA_ATTACHED, this.onMediaAttached, this), t4.on(i2.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t4.on(i2.Events.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), t4.on(i2.Events.BUFFER_FLUSHING, this.onBufferFlushing, this);
    }, e3._unregisterListeners = function() {
      var t4 = this.hls;
      t4.off(i2.Events.MEDIA_ATTACHED, this.onMediaAttached, this), t4.off(i2.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t4.off(i2.Events.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), t4.off(i2.Events.BUFFER_FLUSHING, this.onBufferFlushing, this);
    }, e3.onMediaAttached = function(t4, e4) {
      this.media = e4.media;
    }, e3.onMediaDetaching = function() {
      this.id3Track && (Object(n2.clearCurrentCues)(this.id3Track), this.id3Track = null, this.media = null);
    }, e3.getID3Track = function(t4) {
      if (this.media) {
        for (var e4 = 0; e4 < t4.length; e4++) {
          var r3 = t4[e4];
          if ("metadata" === r3.kind && "id3" === r3.label)
            return Object(n2.sendAddTrackEvent)(r3, this.media), r3;
        }
        return this.media.addTextTrack("metadata", "id3");
      }
    }, e3.onFragParsingMetadata = function(t4, e4) {
      if (this.media) {
        var r3 = e4.frag, i3 = e4.samples;
        this.id3Track || (this.id3Track = this.getID3Track(this.media.textTracks), this.id3Track.mode = "hidden");
        for (var n3 = self.WebKitDataCue || self.VTTCue || self.TextTrackCue, s3 = 0; s3 < i3.length; s3++) {
          var o2 = a2.getID3Frames(i3[s3].data);
          if (o2) {
            var l2 = i3[s3].pts, u = s3 < i3.length - 1 ? i3[s3 + 1].pts : r3.end;
            u - l2 <= 0 && (u = l2 + 0.25);
            for (var d = 0; d < o2.length; d++) {
              var c = o2[d];
              if (!a2.isTimeStampFrame(c)) {
                var h = new n3(l2, u, "");
                h.value = c, this.id3Track.addCue(h);
              }
            }
          }
        }
      }
    }, e3.onBufferFlushing = function(t4, e4) {
      var r3 = e4.startOffset, i3 = e4.endOffset, a3 = e4.type;
      if (!a3 || "audio" === a3) {
        var s3 = this.id3Track;
        s3 && Object(n2.removeCuesInRange)(s3, r3, i3);
      }
    }, t3;
  }();
  e2.default = s2;
}, "./src/controller/latency-controller.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "default", function() {
    return o2;
  });
  var i2 = r2("./src/errors.ts"), n2 = r2("./src/events.ts"), a2 = r2("./src/utils/logger.ts");
  function s2(t3, e3) {
    for (var r3 = 0; r3 < e3.length; r3++) {
      var i3 = e3[r3];
      i3.enumerable = i3.enumerable || false, i3.configurable = true, "value" in i3 && (i3.writable = true), Object.defineProperty(t3, i3.key, i3);
    }
  }
  var o2 = function() {
    function t3(t4) {
      var e4 = this;
      this.hls = void 0, this.config = void 0, this.media = null, this.levelDetails = null, this.currentTime = 0, this.stallCount = 0, this._latency = null, this.timeupdateHandler = function() {
        return e4.timeupdate();
      }, this.hls = t4, this.config = t4.config, this.registerListeners();
    }
    var e3, r3, l2 = t3.prototype;
    return l2.destroy = function() {
      this.unregisterListeners(), this.onMediaDetaching(), this.levelDetails = null, this.hls = this.timeupdateHandler = null;
    }, l2.registerListeners = function() {
      this.hls.on(n2.Events.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(n2.Events.MEDIA_DETACHING, this.onMediaDetaching, this), this.hls.on(n2.Events.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(n2.Events.LEVEL_UPDATED, this.onLevelUpdated, this), this.hls.on(n2.Events.ERROR, this.onError, this);
    }, l2.unregisterListeners = function() {
      this.hls.off(n2.Events.MEDIA_ATTACHED, this.onMediaAttached), this.hls.off(n2.Events.MEDIA_DETACHING, this.onMediaDetaching), this.hls.off(n2.Events.MANIFEST_LOADING, this.onManifestLoading), this.hls.off(n2.Events.LEVEL_UPDATED, this.onLevelUpdated), this.hls.off(n2.Events.ERROR, this.onError);
    }, l2.onMediaAttached = function(t4, e4) {
      this.media = e4.media, this.media.addEventListener("timeupdate", this.timeupdateHandler);
    }, l2.onMediaDetaching = function() {
      this.media && (this.media.removeEventListener("timeupdate", this.timeupdateHandler), this.media = null);
    }, l2.onManifestLoading = function() {
      this.levelDetails = null, this._latency = null, this.stallCount = 0;
    }, l2.onLevelUpdated = function(t4, e4) {
      var r4 = e4.details;
      this.levelDetails = r4, r4.advanced && this.timeupdate(), !r4.live && this.media && this.media.removeEventListener("timeupdate", this.timeupdateHandler);
    }, l2.onError = function(t4, e4) {
      e4.details === i2.ErrorDetails.BUFFER_STALLED_ERROR && (this.stallCount++, a2.logger.warn("[playback-rate-controller]: Stall detected, adjusting target latency"));
    }, l2.timeupdate = function() {
      var t4 = this.media, e4 = this.levelDetails;
      if (t4 && e4) {
        this.currentTime = t4.currentTime;
        var r4 = this.computeLatency();
        if (null !== r4) {
          this._latency = r4;
          var i3 = this.config, n3 = i3.lowLatencyMode, a3 = i3.maxLiveSyncPlaybackRate;
          if (n3 && 1 !== a3) {
            var s3 = this.targetLatency;
            if (null !== s3) {
              var o3 = r4 - s3, l3 = o3 < Math.min(this.maxLatency, s3 + e4.targetduration);
              if (e4.live && l3 && o3 > 0.05 && this.forwardBufferLength > 1) {
                var u = Math.min(2, Math.max(1, a3)), d = Math.round(2 / (1 + Math.exp(-0.75 * o3 - this.edgeStalled)) * 20) / 20;
                t4.playbackRate = Math.min(u, Math.max(1, d));
              } else
                1 !== t4.playbackRate && 0 !== t4.playbackRate && (t4.playbackRate = 1);
            }
          }
        }
      }
    }, l2.estimateLiveEdge = function() {
      var t4 = this.levelDetails;
      return null === t4 ? null : t4.edge + t4.age;
    }, l2.computeLatency = function() {
      var t4 = this.estimateLiveEdge();
      return null === t4 ? null : t4 - this.currentTime;
    }, e3 = t3, (r3 = [{ key: "latency", get: function() {
      return this._latency || 0;
    } }, { key: "maxLatency", get: function() {
      var t4 = this.config, e4 = this.levelDetails;
      return void 0 !== t4.liveMaxLatencyDuration ? t4.liveMaxLatencyDuration : e4 ? t4.liveMaxLatencyDurationCount * e4.targetduration : 0;
    } }, { key: "targetLatency", get: function() {
      var t4 = this.levelDetails;
      if (null === t4)
        return null;
      var e4 = t4.holdBack, r4 = t4.partHoldBack, i3 = t4.targetduration, n3 = this.config, a3 = n3.liveSyncDuration, s3 = n3.liveSyncDurationCount, o3 = n3.lowLatencyMode, l3 = this.hls.userConfig, u = o3 && r4 || e4;
      (l3.liveSyncDuration || l3.liveSyncDurationCount || 0 === u) && (u = void 0 !== a3 ? a3 : s3 * i3);
      var d = i3;
      return u + Math.min(1 * this.stallCount, d);
    } }, { key: "liveSyncPosition", get: function() {
      var t4 = this.estimateLiveEdge(), e4 = this.targetLatency, r4 = this.levelDetails;
      if (null === t4 || null === e4 || null === r4)
        return null;
      var i3 = r4.edge, n3 = t4 - e4 - this.edgeStalled, a3 = i3 - r4.totalduration, s3 = i3 - (this.config.lowLatencyMode && r4.partTarget || r4.targetduration);
      return Math.min(Math.max(a3, n3), s3);
    } }, { key: "drift", get: function() {
      var t4 = this.levelDetails;
      return null === t4 ? 1 : t4.drift;
    } }, { key: "edgeStalled", get: function() {
      var t4 = this.levelDetails;
      if (null === t4)
        return 0;
      var e4 = 3 * (this.config.lowLatencyMode && t4.partTarget || t4.targetduration);
      return Math.max(t4.age - e4, 0);
    } }, { key: "forwardBufferLength", get: function() {
      var t4 = this.media, e4 = this.levelDetails;
      if (!t4 || !e4)
        return 0;
      var r4 = t4.buffered.length;
      return r4 ? t4.buffered.end(r4 - 1) : e4.edge - this.currentTime;
    } }]) && s2(e3.prototype, r3), t3;
  }();
}, "./src/controller/level-controller.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "default", function() {
    return g;
  });
  var i2 = r2("./src/types/level.ts"), n2 = r2("./src/events.ts"), a2 = r2("./src/errors.ts"), s2 = r2("./src/utils/codecs.ts"), o2 = r2("./src/controller/level-helper.ts"), l2 = r2("./src/controller/base-playlist-controller.ts"), u = r2("./src/types/loader.ts");
  function d() {
    return (d = Object.assign || function(t3) {
      for (var e3 = 1; e3 < arguments.length; e3++) {
        var r3 = arguments[e3];
        for (var i3 in r3)
          Object.prototype.hasOwnProperty.call(r3, i3) && (t3[i3] = r3[i3]);
      }
      return t3;
    }).apply(this, arguments);
  }
  function c(t3, e3) {
    for (var r3 = 0; r3 < e3.length; r3++) {
      var i3 = e3[r3];
      i3.enumerable = i3.enumerable || false, i3.configurable = true, "value" in i3 && (i3.writable = true), Object.defineProperty(t3, i3.key, i3);
    }
  }
  function h(t3, e3) {
    return (h = Object.setPrototypeOf || function(t4, e4) {
      return t4.__proto__ = e4, t4;
    })(t3, e3);
  }
  var f = /chrome|firefox/.test(navigator.userAgent.toLowerCase()), g = function(t3) {
    var e3, r3;
    function l3(e4) {
      var r4;
      return (r4 = t3.call(this, e4, "[level-controller]") || this)._levels = [], r4._firstLevel = -1, r4._startLevel = void 0, r4.currentLevelIndex = -1, r4.manualLevelIndex = -1, r4.onParsedComplete = void 0, r4._registerListeners(), r4;
    }
    r3 = t3, (e3 = l3).prototype = Object.create(r3.prototype), e3.prototype.constructor = e3, h(e3, r3);
    var g2, v, m = l3.prototype;
    return m._registerListeners = function() {
      var t4 = this.hls;
      t4.on(n2.Events.MANIFEST_LOADED, this.onManifestLoaded, this), t4.on(n2.Events.LEVEL_LOADED, this.onLevelLoaded, this), t4.on(n2.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), t4.on(n2.Events.FRAG_LOADED, this.onFragLoaded, this), t4.on(n2.Events.ERROR, this.onError, this);
    }, m._unregisterListeners = function() {
      var t4 = this.hls;
      t4.off(n2.Events.MANIFEST_LOADED, this.onManifestLoaded, this), t4.off(n2.Events.LEVEL_LOADED, this.onLevelLoaded, this), t4.off(n2.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), t4.off(n2.Events.FRAG_LOADED, this.onFragLoaded, this), t4.off(n2.Events.ERROR, this.onError, this);
    }, m.destroy = function() {
      this._unregisterListeners(), this.manualLevelIndex = -1, this._levels.length = 0, t3.prototype.destroy.call(this);
    }, m.startLoad = function() {
      this._levels.forEach(function(t4) {
        t4.loadError = 0;
      }), t3.prototype.startLoad.call(this);
    }, m.onManifestLoaded = function(t4, e4) {
      var r4, l4, u2 = [], d2 = [], c2 = [], h2 = {}, g3 = false, v2 = false, p = false;
      if (e4.levels.forEach(function(t5) {
        var e5 = t5.attrs;
        g3 = g3 || !(!t5.width || !t5.height), v2 = v2 || !!t5.videoCodec, p = p || !!t5.audioCodec, f && t5.audioCodec && -1 !== t5.audioCodec.indexOf("mp4a.40.34") && (t5.audioCodec = void 0);
        var r5 = t5.bitrate + "-" + t5.attrs.RESOLUTION + "-" + t5.attrs.CODECS;
        (l4 = h2[r5]) ? l4.url.push(t5.url) : (l4 = new i2.Level(t5), h2[r5] = l4, u2.push(l4)), e5 && (e5.AUDIO && Object(o2.addGroupId)(l4, "audio", e5.AUDIO), e5.SUBTITLES && Object(o2.addGroupId)(l4, "text", e5.SUBTITLES));
      }), (g3 || v2) && p && (u2 = u2.filter(function(t5) {
        var e5 = t5.videoCodec, r5 = t5.width, i3 = t5.height;
        return !!e5 || !(!r5 || !i3);
      })), u2 = u2.filter(function(t5) {
        var e5 = t5.audioCodec, r5 = t5.videoCodec;
        return (!e5 || Object(s2.isCodecSupportedInMp4)(e5, "audio")) && (!r5 || Object(s2.isCodecSupportedInMp4)(r5, "video"));
      }), e4.audioTracks && (d2 = e4.audioTracks.filter(function(t5) {
        return !t5.audioCodec || Object(s2.isCodecSupportedInMp4)(t5.audioCodec, "audio");
      }), Object(o2.assignTrackIdsByGroup)(d2)), e4.subtitles && (c2 = e4.subtitles, Object(o2.assignTrackIdsByGroup)(c2)), u2.length > 0) {
        r4 = u2[0].bitrate, u2.sort(function(t5, e5) {
          return t5.bitrate - e5.bitrate;
        }), this._levels = u2;
        for (var m2 = 0; m2 < u2.length; m2++)
          if (u2[m2].bitrate === r4) {
            this._firstLevel = m2, this.log("manifest loaded, " + u2.length + " level(s) found, first bitrate: " + r4);
            break;
          }
        var y = p && !v2, E = { levels: u2, audioTracks: d2, subtitleTracks: c2, firstLevel: this._firstLevel, stats: e4.stats, audio: p, video: v2, altAudio: !y && d2.some(function(t5) {
          return !!t5.url;
        }) };
        this.hls.trigger(n2.Events.MANIFEST_PARSED, E), (this.hls.config.autoStartLoad || this.hls.forceStartLoad) && this.hls.startLoad(this.hls.config.startPosition);
      } else
        this.hls.trigger(n2.Events.ERROR, { type: a2.ErrorTypes.MEDIA_ERROR, details: a2.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR, fatal: true, url: e4.url, reason: "no level with compatible codecs found in manifest" });
    }, m.onError = function(e4, r4) {
      if (t3.prototype.onError.call(this, e4, r4), !r4.fatal) {
        var i3 = r4.context, n3 = this._levels[this.currentLevelIndex];
        if (i3 && (i3.type === u.PlaylistContextType.AUDIO_TRACK && n3.audioGroupIds && i3.groupId === n3.audioGroupIds[n3.urlId] || i3.type === u.PlaylistContextType.SUBTITLE_TRACK && n3.textGroupIds && i3.groupId === n3.textGroupIds[n3.urlId]))
          this.redundantFailover(this.currentLevelIndex);
        else {
          var s3, o3 = false, l4 = true;
          switch (r4.details) {
            case a2.ErrorDetails.FRAG_LOAD_ERROR:
            case a2.ErrorDetails.FRAG_LOAD_TIMEOUT:
            case a2.ErrorDetails.KEY_LOAD_ERROR:
            case a2.ErrorDetails.KEY_LOAD_TIMEOUT:
              if (r4.frag) {
                var d2 = this._levels[r4.frag.level];
                d2 ? (d2.fragmentError++, d2.fragmentError > this.hls.config.fragLoadingMaxRetry && (s3 = r4.frag.level)) : s3 = r4.frag.level;
              }
              break;
            case a2.ErrorDetails.LEVEL_LOAD_ERROR:
            case a2.ErrorDetails.LEVEL_LOAD_TIMEOUT:
              i3 && (i3.deliveryDirectives && (l4 = false), s3 = i3.level), o3 = true;
              break;
            case a2.ErrorDetails.REMUX_ALLOC_ERROR:
              s3 = r4.level, o3 = true;
          }
          void 0 !== s3 && this.recoverLevel(r4, s3, o3, l4);
        }
      }
    }, m.recoverLevel = function(t4, e4, r4, i3) {
      var n3 = t4.details, a3 = this._levels[e4];
      if (a3.loadError++, r4) {
        if (!this.retryLoadingOrFail(t4))
          return void (this.currentLevelIndex = -1);
        t4.levelRetry = true;
      }
      if (i3) {
        var s3 = a3.url.length;
        if (s3 > 1 && a3.loadError < s3)
          t4.levelRetry = true, this.redundantFailover(e4);
        else if (-1 === this.manualLevelIndex) {
          var o3 = 0 === e4 ? this._levels.length - 1 : e4 - 1;
          this.currentLevelIndex !== o3 && 0 === this._levels[o3].loadError && (this.warn(n3 + ": switch to " + o3), t4.levelRetry = true, this.hls.nextAutoLevel = o3);
        }
      }
    }, m.redundantFailover = function(t4) {
      var e4 = this._levels[t4], r4 = e4.url.length;
      if (r4 > 1) {
        var i3 = (e4.urlId + 1) % r4;
        this.warn("Switching to redundant URL-id " + i3), this._levels.forEach(function(t5) {
          t5.urlId = i3;
        }), this.level = t4;
      }
    }, m.onFragLoaded = function(t4, e4) {
      var r4 = e4.frag;
      if (void 0 !== r4 && r4.type === u.PlaylistLevelType.MAIN) {
        var i3 = this._levels[r4.level];
        void 0 !== i3 && (i3.fragmentError = 0, i3.loadError = 0);
      }
    }, m.onLevelLoaded = function(t4, e4) {
      var r4, i3, n3 = e4.level, a3 = e4.details, s3 = this._levels[n3];
      if (!s3)
        return this.warn("Invalid level index " + n3), void (null !== (i3 = e4.deliveryDirectives) && void 0 !== i3 && i3.skip && (a3.deltaUpdateFailed = true));
      n3 === this.currentLevelIndex ? (0 === s3.fragmentError && (s3.loadError = 0, this.retryCount = 0), this.playlistLoaded(n3, e4, s3.details)) : null !== (r4 = e4.deliveryDirectives) && void 0 !== r4 && r4.skip && (a3.deltaUpdateFailed = true);
    }, m.onAudioTrackSwitched = function(t4, e4) {
      var r4 = this.hls.levels[this.currentLevelIndex];
      if (r4 && r4.audioGroupIds) {
        for (var i3 = -1, n3 = this.hls.audioTracks[e4.id].groupId, a3 = 0; a3 < r4.audioGroupIds.length; a3++)
          if (r4.audioGroupIds[a3] === n3) {
            i3 = a3;
            break;
          }
        i3 !== r4.urlId && (r4.urlId = i3, this.startLoad());
      }
    }, m.loadPlaylist = function(t4) {
      var e4 = this.currentLevelIndex, r4 = this._levels[e4];
      if (this.canLoad && r4 && r4.url.length > 0) {
        var i3 = r4.urlId, a3 = r4.url[i3];
        if (t4)
          try {
            a3 = t4.addDirectives(a3);
          } catch (s3) {
            this.warn("Could not construct new URL with HLS Delivery Directives: " + s3);
          }
        this.log("Attempt loading level index " + e4 + (t4 ? " at sn " + t4.msn + " part " + t4.part : "") + " with URL-id " + i3 + " " + a3), this.clearTimer(), this.hls.trigger(n2.Events.LEVEL_LOADING, { url: a3, level: e4, id: i3, deliveryDirectives: t4 || null });
      }
    }, m.removeLevel = function(t4, e4) {
      var r4 = function(t5, r5) {
        return r5 !== e4;
      }, i3 = this._levels.filter(function(i4, n3) {
        return n3 !== t4 || i4.url.length > 1 && void 0 !== e4 && (i4.url = i4.url.filter(r4), i4.audioGroupIds && (i4.audioGroupIds = i4.audioGroupIds.filter(r4)), i4.textGroupIds && (i4.textGroupIds = i4.textGroupIds.filter(r4)), i4.urlId = 0, true);
      }).map(function(t5, e5) {
        var r5 = t5.details;
        return null != r5 && r5.fragments && r5.fragments.forEach(function(t6) {
          t6.level = e5;
        }), t5;
      });
      this._levels = i3, this.hls.trigger(n2.Events.LEVELS_UPDATED, { levels: i3 });
    }, g2 = l3, (v = [{ key: "levels", get: function() {
      return 0 === this._levels.length ? null : this._levels;
    } }, { key: "level", get: function() {
      return this.currentLevelIndex;
    }, set: function(t4) {
      var e4, r4 = this._levels;
      if (0 !== r4.length && (this.currentLevelIndex !== t4 || null === (e4 = r4[t4]) || void 0 === e4 || !e4.details)) {
        if (t4 < 0 || t4 >= r4.length) {
          var i3 = t4 < 0;
          if (this.hls.trigger(n2.Events.ERROR, { type: a2.ErrorTypes.OTHER_ERROR, details: a2.ErrorDetails.LEVEL_SWITCH_ERROR, level: t4, fatal: i3, reason: "invalid level idx" }), i3)
            return;
          t4 = Math.min(t4, r4.length - 1);
        }
        this.clearTimer();
        var s3 = this.currentLevelIndex, o3 = r4[s3], l4 = r4[t4];
        this.log("switching to level " + t4 + " from " + s3), this.currentLevelIndex = t4;
        var u2 = d({}, l4, { level: t4, maxBitrate: l4.maxBitrate, uri: l4.uri, urlId: l4.urlId });
        delete u2._urlId, this.hls.trigger(n2.Events.LEVEL_SWITCHING, u2);
        var c2 = l4.details;
        if (!c2 || c2.live) {
          var h2 = this.switchParams(l4.uri, null == o3 ? void 0 : o3.details);
          this.loadPlaylist(h2);
        }
      }
    } }, { key: "manualLevel", get: function() {
      return this.manualLevelIndex;
    }, set: function(t4) {
      this.manualLevelIndex = t4, void 0 === this._startLevel && (this._startLevel = t4), -1 !== t4 && (this.level = t4);
    } }, { key: "firstLevel", get: function() {
      return this._firstLevel;
    }, set: function(t4) {
      this._firstLevel = t4;
    } }, { key: "startLevel", get: function() {
      if (void 0 === this._startLevel) {
        var t4 = this.hls.config.startLevel;
        return void 0 !== t4 ? t4 : this._firstLevel;
      }
      return this._startLevel;
    }, set: function(t4) {
      this._startLevel = t4;
    } }, { key: "nextLoadLevel", get: function() {
      return -1 !== this.manualLevelIndex ? this.manualLevelIndex : this.hls.nextAutoLevel;
    }, set: function(t4) {
      this.level = t4, -1 === this.manualLevelIndex && (this.hls.nextAutoLevel = t4);
    } }]) && c(g2.prototype, v), l3;
  }(l2.default);
}, "./src/controller/level-helper.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "addGroupId", function() {
    return a2;
  }), r2.d(e2, "assignTrackIdsByGroup", function() {
    return s2;
  }), r2.d(e2, "updatePTS", function() {
    return o2;
  }), r2.d(e2, "updateFragPTSDTS", function() {
    return u;
  }), r2.d(e2, "mergeDetails", function() {
    return d;
  }), r2.d(e2, "mapPartIntersection", function() {
    return c;
  }), r2.d(e2, "mapFragmentIntersection", function() {
    return h;
  }), r2.d(e2, "adjustSliding", function() {
    return f;
  }), r2.d(e2, "addSliding", function() {
    return g;
  }), r2.d(e2, "computeReloadInterval", function() {
    return v;
  }), r2.d(e2, "getFragmentWithSN", function() {
    return p;
  }), r2.d(e2, "getPartWith", function() {
    return m;
  });
  var i2 = r2("./src/polyfills/number.ts"), n2 = r2("./src/utils/logger.ts");
  function a2(t3, e3, r3) {
    switch (e3) {
      case "audio":
        t3.audioGroupIds || (t3.audioGroupIds = []), t3.audioGroupIds.push(r3);
        break;
      case "text":
        t3.textGroupIds || (t3.textGroupIds = []), t3.textGroupIds.push(r3);
    }
  }
  function s2(t3) {
    var e3 = {};
    t3.forEach(function(t4) {
      var r3 = t4.groupId || "";
      t4.id = e3[r3] = e3[r3] || 0, e3[r3]++;
    });
  }
  function o2(t3, e3, r3) {
    l2(t3[e3], t3[r3]);
  }
  function l2(t3, e3) {
    var r3 = e3.startPTS;
    if (Object(i2.isFiniteNumber)(r3)) {
      var n3, a3 = 0;
      e3.sn > t3.sn ? (a3 = r3 - t3.start, n3 = t3) : (a3 = t3.start - r3, n3 = e3), n3.duration !== a3 && (n3.duration = a3);
    } else
      e3.sn > t3.sn ? t3.cc === e3.cc && t3.minEndPTS ? e3.start = t3.start + (t3.minEndPTS - t3.start) : e3.start = t3.start + t3.duration : e3.start = Math.max(t3.start - e3.duration, 0);
  }
  function u(t3, e3, r3, a3, s3, o3) {
    a3 - r3 <= 0 && (n2.logger.warn("Fragment should have a positive duration", e3), a3 = r3 + e3.duration, o3 = s3 + e3.duration);
    var u2 = r3, d2 = a3, c2 = e3.startPTS, h2 = e3.endPTS;
    if (Object(i2.isFiniteNumber)(c2)) {
      var f2 = Math.abs(c2 - r3);
      Object(i2.isFiniteNumber)(e3.deltaPTS) ? e3.deltaPTS = Math.max(f2, e3.deltaPTS) : e3.deltaPTS = f2, u2 = Math.max(r3, c2), r3 = Math.min(r3, c2), s3 = Math.min(s3, e3.startDTS), d2 = Math.min(a3, h2), a3 = Math.max(a3, h2), o3 = Math.max(o3, e3.endDTS);
    }
    e3.duration = a3 - r3;
    var g2 = r3 - e3.start;
    e3.appendedPTS = a3, e3.start = e3.startPTS = r3, e3.maxStartPTS = u2, e3.startDTS = s3, e3.endPTS = a3, e3.minEndPTS = d2, e3.endDTS = o3;
    var v2, p2 = e3.sn;
    if (!t3 || p2 < t3.startSN || p2 > t3.endSN)
      return 0;
    var m2 = p2 - t3.startSN, y = t3.fragments;
    for (y[m2] = e3, v2 = m2; v2 > 0; v2--)
      l2(y[v2], y[v2 - 1]);
    for (v2 = m2; v2 < y.length - 1; v2++)
      l2(y[v2], y[v2 + 1]);
    return t3.fragmentHint && l2(y[y.length - 1], t3.fragmentHint), t3.PTSKnown = t3.alignedSliding = true, g2;
  }
  function d(t3, e3) {
    for (var r3 = null, a3 = t3.fragments, s3 = a3.length - 1; s3 >= 0; s3--) {
      var o3 = a3[s3].initSegment;
      if (o3) {
        r3 = o3;
        break;
      }
    }
    t3.fragmentHint && delete t3.fragmentHint.endPTS;
    var l3, d2 = 0;
    if (h(t3, e3, function(t4, n3) {
      var a4;
      t4.relurl && (d2 = t4.cc - n3.cc), Object(i2.isFiniteNumber)(t4.startPTS) && Object(i2.isFiniteNumber)(t4.endPTS) && (n3.start = n3.startPTS = t4.startPTS, n3.startDTS = t4.startDTS, n3.appendedPTS = t4.appendedPTS, n3.maxStartPTS = t4.maxStartPTS, n3.endPTS = t4.endPTS, n3.endDTS = t4.endDTS, n3.minEndPTS = t4.minEndPTS, n3.duration = t4.endPTS - t4.startPTS, n3.duration && (l3 = n3), e3.PTSKnown = e3.alignedSliding = true), n3.elementaryStreams = t4.elementaryStreams, n3.loader = t4.loader, n3.stats = t4.stats, n3.urlId = t4.urlId, t4.initSegment ? (n3.initSegment = t4.initSegment, r3 = t4.initSegment) : n3.initSegment && n3.initSegment.relurl != (null === (a4 = r3) || void 0 === a4 ? void 0 : a4.relurl) || (n3.initSegment = r3);
    }), e3.skippedSegments && (e3.deltaUpdateFailed = e3.fragments.some(function(t4) {
      return !t4;
    }), e3.deltaUpdateFailed)) {
      n2.logger.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");
      for (var g2 = e3.skippedSegments; g2--; )
        e3.fragments.shift();
      e3.startSN = e3.fragments[0].sn, e3.startCC = e3.fragments[0].cc;
    }
    var v2 = e3.fragments;
    if (d2) {
      n2.logger.warn("discontinuity sliding from playlist, take drift into account");
      for (var p2 = 0; p2 < v2.length; p2++)
        v2[p2].cc += d2;
    }
    e3.skippedSegments && (e3.startCC = e3.fragments[0].cc), c(t3.partList, e3.partList, function(t4, e4) {
      e4.elementaryStreams = t4.elementaryStreams, e4.stats = t4.stats;
    }), l3 ? u(e3, l3, l3.startPTS, l3.endPTS, l3.startDTS, l3.endDTS) : f(t3, e3), v2.length && (e3.totalduration = e3.edge - v2[0].start), e3.driftStartTime = t3.driftStartTime, e3.driftStart = t3.driftStart;
    var m2 = e3.advancedDateTime;
    if (e3.advanced && m2) {
      var y = e3.edge;
      e3.driftStart || (e3.driftStartTime = m2, e3.driftStart = y), e3.driftEndTime = m2, e3.driftEnd = y;
    } else
      e3.driftEndTime = t3.driftEndTime, e3.driftEnd = t3.driftEnd, e3.advancedDateTime = t3.advancedDateTime;
  }
  function c(t3, e3, r3) {
    if (t3 && e3)
      for (var i3 = 0, n3 = 0, a3 = t3.length; n3 <= a3; n3++) {
        var s3 = t3[n3], o3 = e3[n3 + i3];
        s3 && o3 && s3.index === o3.index && s3.fragment.sn === o3.fragment.sn ? r3(s3, o3) : i3--;
      }
  }
  function h(t3, e3, r3) {
    for (var i3 = e3.skippedSegments, n3 = Math.max(t3.startSN, e3.startSN) - e3.startSN, a3 = (t3.fragmentHint ? 1 : 0) + (i3 ? e3.endSN : Math.min(t3.endSN, e3.endSN)) - e3.startSN, s3 = e3.startSN - t3.startSN, o3 = e3.fragmentHint ? e3.fragments.concat(e3.fragmentHint) : e3.fragments, l3 = t3.fragmentHint ? t3.fragments.concat(t3.fragmentHint) : t3.fragments, u2 = n3; u2 <= a3; u2++) {
      var d2 = l3[s3 + u2], c2 = o3[u2];
      i3 && !c2 && u2 < i3 && (c2 = e3.fragments[u2] = d2), d2 && c2 && r3(d2, c2);
    }
  }
  function f(t3, e3) {
    var r3 = e3.startSN + e3.skippedSegments - t3.startSN, i3 = t3.fragments;
    r3 < 0 || r3 >= i3.length || g(e3, i3[r3].start);
  }
  function g(t3, e3) {
    if (e3) {
      for (var r3 = t3.fragments, i3 = t3.skippedSegments; i3 < r3.length; i3++)
        r3[i3].start += e3;
      t3.fragmentHint && (t3.fragmentHint.start += e3);
    }
  }
  function v(t3, e3) {
    var r3, i3 = 1e3 * t3.levelTargetDuration, n3 = i3 / 2, a3 = t3.age, s3 = a3 > 0 && a3 < 3 * i3, o3 = e3.loading.end - e3.loading.start, l3 = t3.availabilityDelay;
    if (false === t3.updated)
      if (s3) {
        var u2 = 333 * t3.misses;
        r3 = Math.max(Math.min(n3, 2 * o3), u2), t3.availabilityDelay = (t3.availabilityDelay || 0) + r3;
      } else
        r3 = n3;
    else
      s3 ? (l3 = Math.min(l3 || i3 / 2, a3), t3.availabilityDelay = l3, r3 = l3 + i3 - a3) : r3 = i3 - o3;
    return Math.round(r3);
  }
  function p(t3, e3, r3) {
    if (!t3 || !t3.details)
      return null;
    var i3 = t3.details, n3 = i3.fragments[e3 - i3.startSN];
    return n3 || ((n3 = i3.fragmentHint) && n3.sn === e3 ? n3 : e3 < i3.startSN && r3 && r3.sn === e3 ? r3 : null);
  }
  function m(t3, e3, r3) {
    if (!t3 || !t3.details)
      return null;
    var i3 = t3.details.partList;
    if (i3)
      for (var n3 = i3.length; n3--; ) {
        var a3 = i3[n3];
        if (a3.index === r3 && a3.fragment.sn === e3)
          return a3;
      }
    return null;
  }
}, "./src/controller/stream-controller.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "default", function() {
    return y;
  });
  var i2 = r2("./src/polyfills/number.ts"), n2 = r2("./src/controller/base-stream-controller.ts"), a2 = r2("./src/is-supported.ts"), s2 = r2("./src/events.ts"), o2 = r2("./src/utils/buffer-helper.ts"), l2 = r2("./src/controller/fragment-tracker.ts"), u = r2("./src/types/loader.ts"), d = r2("./src/loader/fragment.ts"), c = r2("./src/demux/transmuxer-interface.ts"), h = r2("./src/types/transmuxer.ts"), f = r2("./src/controller/gap-controller.ts"), g = r2("./src/errors.ts"), v = r2("./src/utils/logger.ts");
  function p(t3, e3) {
    for (var r3 = 0; r3 < e3.length; r3++) {
      var i3 = e3[r3];
      i3.enumerable = i3.enumerable || false, i3.configurable = true, "value" in i3 && (i3.writable = true), Object.defineProperty(t3, i3.key, i3);
    }
  }
  function m(t3, e3) {
    return (m = Object.setPrototypeOf || function(t4, e4) {
      return t4.__proto__ = e4, t4;
    })(t3, e3);
  }
  var y = function(t3) {
    var e3, r3;
    function y2(e4, r4) {
      var i3;
      return (i3 = t3.call(this, e4, r4, "[stream-controller]") || this).audioCodecSwap = false, i3.gapController = null, i3.level = -1, i3._forceStartLoad = false, i3.altAudio = false, i3.audioOnly = false, i3.fragPlaying = null, i3.onvplaying = null, i3.onvseeked = null, i3.fragLastKbps = 0, i3.stalled = false, i3.couldBacktrack = false, i3.audioCodecSwitch = false, i3.videoBuffer = null, i3._registerListeners(), i3;
    }
    r3 = t3, (e3 = y2).prototype = Object.create(r3.prototype), e3.prototype.constructor = e3, m(e3, r3);
    var E, T, b = y2.prototype;
    return b._registerListeners = function() {
      var t4 = this.hls;
      t4.on(s2.Events.MEDIA_ATTACHED, this.onMediaAttached, this), t4.on(s2.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t4.on(s2.Events.MANIFEST_LOADING, this.onManifestLoading, this), t4.on(s2.Events.MANIFEST_PARSED, this.onManifestParsed, this), t4.on(s2.Events.LEVEL_LOADING, this.onLevelLoading, this), t4.on(s2.Events.LEVEL_LOADED, this.onLevelLoaded, this), t4.on(s2.Events.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), t4.on(s2.Events.ERROR, this.onError, this), t4.on(s2.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t4.on(s2.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), t4.on(s2.Events.BUFFER_CREATED, this.onBufferCreated, this), t4.on(s2.Events.BUFFER_FLUSHED, this.onBufferFlushed, this), t4.on(s2.Events.LEVELS_UPDATED, this.onLevelsUpdated, this), t4.on(s2.Events.FRAG_BUFFERED, this.onFragBuffered, this);
    }, b._unregisterListeners = function() {
      var t4 = this.hls;
      t4.off(s2.Events.MEDIA_ATTACHED, this.onMediaAttached, this), t4.off(s2.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t4.off(s2.Events.MANIFEST_LOADING, this.onManifestLoading, this), t4.off(s2.Events.MANIFEST_PARSED, this.onManifestParsed, this), t4.off(s2.Events.LEVEL_LOADED, this.onLevelLoaded, this), t4.off(s2.Events.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), t4.off(s2.Events.ERROR, this.onError, this), t4.off(s2.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t4.off(s2.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), t4.off(s2.Events.BUFFER_CREATED, this.onBufferCreated, this), t4.off(s2.Events.BUFFER_FLUSHED, this.onBufferFlushed, this), t4.off(s2.Events.LEVELS_UPDATED, this.onLevelsUpdated, this), t4.off(s2.Events.FRAG_BUFFERED, this.onFragBuffered, this);
    }, b.onHandlerDestroying = function() {
      this._unregisterListeners(), this.onMediaDetaching();
    }, b.startLoad = function(t4) {
      if (this.levels) {
        var e4 = this.lastCurrentTime, r4 = this.hls;
        if (this.stopLoad(), this.setInterval(100), this.level = -1, this.fragLoadError = 0, !this.startFragRequested) {
          var i3 = r4.startLevel;
          -1 === i3 && (r4.config.testBandwidth ? (i3 = 0, this.bitrateTest = true) : i3 = r4.nextAutoLevel), this.level = r4.nextLoadLevel = i3, this.loadedmetadata = false;
        }
        e4 > 0 && -1 === t4 && (this.log("Override startPosition with lastCurrentTime @" + e4.toFixed(3)), t4 = e4), this.state = n2.State.IDLE, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t4, this.tick();
      } else
        this._forceStartLoad = true, this.state = n2.State.STOPPED;
    }, b.stopLoad = function() {
      this._forceStartLoad = false, t3.prototype.stopLoad.call(this);
    }, b.doTick = function() {
      switch (this.state) {
        case n2.State.IDLE:
          this.doTickIdle();
          break;
        case n2.State.WAITING_LEVEL:
          var t4, e4 = this.levels, r4 = this.level, i3 = null == e4 || null === (t4 = e4[r4]) || void 0 === t4 ? void 0 : t4.details;
          if (i3 && (!i3.live || this.levelLastLoaded === this.level)) {
            if (this.waitForCdnTuneIn(i3))
              break;
            this.state = n2.State.IDLE;
            break;
          }
          break;
        case n2.State.FRAG_LOADING_WAITING_RETRY:
          var a3, s3 = self.performance.now(), o3 = this.retryDate;
          (!o3 || s3 >= o3 || null !== (a3 = this.media) && void 0 !== a3 && a3.seeking) && (this.log("retryDate reached, switch back to IDLE state"), this.state = n2.State.IDLE);
      }
      this.onTickEnd();
    }, b.onTickEnd = function() {
      t3.prototype.onTickEnd.call(this), this.checkBuffer(), this.checkFragmentChanged();
    }, b.doTickIdle = function() {
      var t4, e4, r4 = this.hls, i3 = this.levelLastLoaded, a3 = this.levels, o3 = this.media, c2 = r4.config, h2 = r4.nextLoadLevel;
      if (null !== i3 && (o3 || !this.startFragRequested && c2.startFragPrefetch) && (!this.altAudio || !this.audioOnly) && a3 && a3[h2]) {
        var f2 = a3[h2];
        this.level = r4.nextLoadLevel = h2;
        var g2 = f2.details;
        if (!g2 || this.state === n2.State.WAITING_LEVEL || g2.live && this.levelLastLoaded !== h2)
          this.state = n2.State.WAITING_LEVEL;
        else {
          var v2 = this.getFwdBufferInfo(this.mediaBuffer ? this.mediaBuffer : o3, u.PlaylistLevelType.MAIN);
          if (null !== v2 && !(v2.len >= this.getMaxBufferLength(f2.maxBitrate))) {
            if (this._streamEnded(v2, g2)) {
              var p2 = {};
              return this.altAudio && (p2.type = "video"), this.hls.trigger(s2.Events.BUFFER_EOS, p2), void (this.state = n2.State.ENDED);
            }
            var m2 = v2.end, y3 = this.getNextFragment(m2, g2);
            if (this.couldBacktrack && !this.fragPrevious && y3 && "initSegment" !== y3.sn) {
              var E2 = y3.sn - g2.startSN;
              E2 > 1 && (y3 = g2.fragments[E2 - 1], this.fragmentTracker.removeFragment(y3));
            }
            if (y3 && this.fragmentTracker.getState(y3) === l2.FragmentState.OK && this.nextLoadPosition > m2) {
              var T2 = this.audioOnly && !this.altAudio ? d.ElementaryStreamTypes.AUDIO : d.ElementaryStreamTypes.VIDEO;
              this.afterBufferFlushed(o3, T2, u.PlaylistLevelType.MAIN), y3 = this.getNextFragment(this.nextLoadPosition, g2);
            }
            y3 && (!y3.initSegment || y3.initSegment.data || this.bitrateTest || (y3 = y3.initSegment), "identity" !== (null === (t4 = y3.decryptdata) || void 0 === t4 ? void 0 : t4.keyFormat) || null !== (e4 = y3.decryptdata) && void 0 !== e4 && e4.key ? this.loadFragment(y3, g2, m2) : this.loadKey(y3, g2));
          }
        }
      }
    }, b.loadFragment = function(e4, r4, i3) {
      var n3, a3 = this.fragmentTracker.getState(e4);
      if (this.fragCurrent = e4, a3 === l2.FragmentState.BACKTRACKED) {
        var s3 = this.fragmentTracker.getBacktrackData(e4);
        if (s3)
          return this._handleFragmentLoadProgress(s3), void this._handleFragmentLoadComplete(s3);
        a3 = l2.FragmentState.NOT_LOADED;
      }
      a3 === l2.FragmentState.NOT_LOADED || a3 === l2.FragmentState.PARTIAL ? "initSegment" === e4.sn ? this._loadInitSegment(e4) : this.bitrateTest ? (e4.bitrateTest = true, this.log("Fragment " + e4.sn + " of level " + e4.level + " is being downloaded to test bitrate and will not be buffered"), this._loadBitrateTestFrag(e4)) : (this.startFragRequested = true, t3.prototype.loadFragment.call(this, e4, r4, i3)) : a3 === l2.FragmentState.APPENDING ? this.reduceMaxBufferLength(e4.duration) && this.fragmentTracker.removeFragment(e4) : 0 === (null === (n3 = this.media) || void 0 === n3 ? void 0 : n3.buffered.length) && this.fragmentTracker.removeAllFragments();
    }, b.getAppendedFrag = function(t4) {
      var e4 = this.fragmentTracker.getAppendedFrag(t4, u.PlaylistLevelType.MAIN);
      return e4 && "fragment" in e4 ? e4.fragment : e4;
    }, b.getBufferedFrag = function(t4) {
      return this.fragmentTracker.getBufferedFrag(t4, u.PlaylistLevelType.MAIN);
    }, b.followingBufferedFrag = function(t4) {
      return t4 ? this.getBufferedFrag(t4.end + 0.5) : null;
    }, b.immediateLevelSwitch = function() {
      this.abortCurrentFrag(), this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
    }, b.nextLevelSwitch = function() {
      var t4 = this.levels, e4 = this.media;
      if (null != e4 && e4.readyState) {
        var r4, i3 = this.getAppendedFrag(e4.currentTime);
        if (i3 && i3.start > 1 && this.flushMainBuffer(0, i3.start - 1), !e4.paused && t4) {
          var n3 = t4[this.hls.nextLoadLevel], a3 = this.fragLastKbps;
          r4 = a3 && this.fragCurrent ? this.fragCurrent.duration * n3.maxBitrate / (1e3 * a3) + 1 : 0;
        } else
          r4 = 0;
        var s3 = this.getBufferedFrag(e4.currentTime + r4);
        if (s3) {
          var o3 = this.followingBufferedFrag(s3);
          if (o3) {
            this.abortCurrentFrag();
            var l3 = o3.maxStartPTS ? o3.maxStartPTS : o3.start, u2 = o3.duration, d2 = Math.max(s3.end, l3 + Math.min(Math.max(u2 - this.config.maxFragLookUpTolerance, 0.5 * u2), 0.75 * u2));
            this.flushMainBuffer(d2, Number.POSITIVE_INFINITY);
          }
        }
      }
    }, b.abortCurrentFrag = function() {
      var t4 = this.fragCurrent;
      this.fragCurrent = null, null != t4 && t4.loader && t4.loader.abort(), this.state === n2.State.KEY_LOADING && (this.state = n2.State.IDLE), this.nextLoadPosition = this.getLoadPosition();
    }, b.flushMainBuffer = function(e4, r4) {
      t3.prototype.flushMainBuffer.call(this, e4, r4, this.altAudio ? "video" : null);
    }, b.onMediaAttached = function(e4, r4) {
      t3.prototype.onMediaAttached.call(this, e4, r4);
      var i3 = r4.media;
      this.onvplaying = this.onMediaPlaying.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), i3.addEventListener("playing", this.onvplaying), i3.addEventListener("seeked", this.onvseeked), this.gapController = new f.default(this.config, i3, this.fragmentTracker, this.hls);
    }, b.onMediaDetaching = function() {
      var e4 = this.media;
      e4 && (e4.removeEventListener("playing", this.onvplaying), e4.removeEventListener("seeked", this.onvseeked), this.onvplaying = this.onvseeked = null, this.videoBuffer = null), this.fragPlaying = null, this.gapController && (this.gapController.destroy(), this.gapController = null), t3.prototype.onMediaDetaching.call(this);
    }, b.onMediaPlaying = function() {
      this.tick();
    }, b.onMediaSeeked = function() {
      var t4 = this.media, e4 = t4 ? t4.currentTime : null;
      Object(i2.isFiniteNumber)(e4) && this.log("Media seeked to " + e4.toFixed(3)), this.tick();
    }, b.onManifestLoading = function() {
      this.log("Trigger BUFFER_RESET"), this.hls.trigger(s2.Events.BUFFER_RESET, void 0), this.fragmentTracker.removeAllFragments(), this.couldBacktrack = this.stalled = false, this.startPosition = this.lastCurrentTime = 0, this.fragPlaying = null;
    }, b.onManifestParsed = function(t4, e4) {
      var r4, i3 = false, n3 = false;
      e4.levels.forEach(function(t5) {
        (r4 = t5.audioCodec) && (-1 !== r4.indexOf("mp4a.40.2") && (i3 = true), -1 !== r4.indexOf("mp4a.40.5") && (n3 = true));
      }), this.audioCodecSwitch = i3 && n3 && !Object(a2.changeTypeSupported)(), this.audioCodecSwitch && this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = e4.levels, this.startFragRequested = false;
    }, b.onLevelLoading = function(t4, e4) {
      var r4 = this.levels;
      if (r4 && this.state === n2.State.IDLE) {
        var i3 = r4[e4.level];
        (!i3.details || i3.details.live && this.levelLastLoaded !== e4.level || this.waitForCdnTuneIn(i3.details)) && (this.state = n2.State.WAITING_LEVEL);
      }
    }, b.onLevelLoaded = function(t4, e4) {
      var r4, i3 = this.levels, a3 = e4.level, o3 = e4.details, l3 = o3.totalduration;
      if (i3) {
        this.log("Level " + a3 + " loaded [" + o3.startSN + "," + o3.endSN + "], cc [" + o3.startCC + ", " + o3.endCC + "] duration:" + l3);
        var u2 = this.fragCurrent;
        !u2 || this.state !== n2.State.FRAG_LOADING && this.state !== n2.State.FRAG_LOADING_WAITING_RETRY || u2.level !== e4.level && u2.loader && (this.state = n2.State.IDLE, u2.loader.abort());
        var d2 = i3[a3], c2 = 0;
        if (o3.live || null !== (r4 = d2.details) && void 0 !== r4 && r4.live) {
          if (o3.fragments[0] || (o3.deltaUpdateFailed = true), o3.deltaUpdateFailed)
            return;
          c2 = this.alignPlaylists(o3, d2.details);
        }
        if (d2.details = o3, this.levelLastLoaded = a3, this.hls.trigger(s2.Events.LEVEL_UPDATED, { details: o3, level: a3 }), this.state === n2.State.WAITING_LEVEL) {
          if (this.waitForCdnTuneIn(o3))
            return;
          this.state = n2.State.IDLE;
        }
        this.startFragRequested ? o3.live && this.synchronizeToLiveEdge(o3) : this.setStartPosition(o3, c2), this.tick();
      } else
        this.warn("Levels were reset while loading level " + a3);
    }, b._handleFragmentLoadProgress = function(t4) {
      var e4, r4 = t4.frag, i3 = t4.part, n3 = t4.payload, a3 = this.levels;
      if (a3) {
        var s3 = a3[r4.level], o3 = s3.details;
        if (o3) {
          var l3 = s3.videoCodec, d2 = o3.PTSKnown || !o3.live, f2 = null === (e4 = r4.initSegment) || void 0 === e4 ? void 0 : e4.data, g2 = this._getAudioCodec(s3), v2 = this.transmuxer = this.transmuxer || new c.default(this.hls, u.PlaylistLevelType.MAIN, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)), p2 = i3 ? i3.index : -1, m2 = -1 !== p2, y3 = new h.ChunkMetadata(r4.level, r4.sn, r4.stats.chunkCount, n3.byteLength, p2, m2), E2 = this.initPTS[r4.cc];
          v2.push(n3, f2, g2, l3, r4, i3, o3.totalduration, d2, y3, E2);
        } else
          this.warn("Dropping fragment " + r4.sn + " of level " + r4.level + " after level details were reset");
      } else
        this.warn("Levels were reset while fragment load was in progress. Fragment " + r4.sn + " of level " + r4.level + " will not be buffered");
    }, b.onAudioTrackSwitching = function(t4, e4) {
      var r4 = this.altAudio, i3 = !!e4.url, n3 = e4.id;
      if (!i3) {
        if (this.mediaBuffer !== this.media) {
          this.log("Switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
          var a3 = this.fragCurrent;
          null != a3 && a3.loader && (this.log("Switching to main audio track, cancel main fragment load"), a3.loader.abort()), this.resetTransmuxer(), this.resetLoadingState();
        } else
          this.audioOnly && this.resetTransmuxer();
        var o3 = this.hls;
        r4 && o3.trigger(s2.Events.BUFFER_FLUSHING, { startOffset: 0, endOffset: Number.POSITIVE_INFINITY, type: "audio" }), o3.trigger(s2.Events.AUDIO_TRACK_SWITCHED, { id: n3 });
      }
    }, b.onAudioTrackSwitched = function(t4, e4) {
      var r4 = e4.id, i3 = !!this.hls.audioTracks[r4].url;
      if (i3) {
        var n3 = this.videoBuffer;
        n3 && this.mediaBuffer !== n3 && (this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = n3);
      }
      this.altAudio = i3, this.tick();
    }, b.onBufferCreated = function(t4, e4) {
      var r4, i3, n3 = e4.tracks, a3 = false;
      for (var s3 in n3) {
        var o3 = n3[s3];
        if ("main" === o3.id) {
          if (i3 = s3, r4 = o3, "video" === s3) {
            var l3 = n3[s3];
            l3 && (this.videoBuffer = l3.buffer);
          }
        } else
          a3 = true;
      }
      a3 && r4 ? (this.log("Alternate track found, use " + i3 + ".buffered to schedule main fragment loading"), this.mediaBuffer = r4.buffer) : this.mediaBuffer = this.media;
    }, b.onFragBuffered = function(t4, e4) {
      var r4 = e4.frag, i3 = e4.part;
      if (!r4 || r4.type === u.PlaylistLevelType.MAIN) {
        if (this.fragContextChanged(r4))
          return this.warn("Fragment " + r4.sn + (i3 ? " p: " + i3.index : "") + " of level " + r4.level + " finished buffering, but was aborted. state: " + this.state), void (this.state === n2.State.PARSED && (this.state = n2.State.IDLE));
        var a3 = i3 ? i3.stats : r4.stats;
        this.fragLastKbps = Math.round(8 * a3.total / (a3.buffering.end - a3.loading.first)), "initSegment" !== r4.sn && (this.fragPrevious = r4), this.fragBufferedComplete(r4, i3);
      }
    }, b.onError = function(t4, e4) {
      switch (e4.details) {
        case g.ErrorDetails.FRAG_LOAD_ERROR:
        case g.ErrorDetails.FRAG_LOAD_TIMEOUT:
        case g.ErrorDetails.KEY_LOAD_ERROR:
        case g.ErrorDetails.KEY_LOAD_TIMEOUT:
          this.onFragmentOrKeyLoadError(u.PlaylistLevelType.MAIN, e4);
          break;
        case g.ErrorDetails.LEVEL_LOAD_ERROR:
        case g.ErrorDetails.LEVEL_LOAD_TIMEOUT:
          this.state !== n2.State.ERROR && (e4.fatal ? (this.warn("" + e4.details), this.state = n2.State.ERROR) : e4.levelRetry || this.state !== n2.State.WAITING_LEVEL || (this.state = n2.State.IDLE));
          break;
        case g.ErrorDetails.BUFFER_FULL_ERROR:
          if ("main" === e4.parent && (this.state === n2.State.PARSING || this.state === n2.State.PARSED)) {
            var r4 = true, i3 = this.getFwdBufferInfo(this.media, u.PlaylistLevelType.MAIN);
            i3 && i3.len > 0.5 && (r4 = !this.reduceMaxBufferLength(i3.len)), r4 && (this.warn("buffer full error also media.currentTime is not buffered, flush main"), this.immediateLevelSwitch()), this.resetLoadingState();
          }
      }
    }, b.checkBuffer = function() {
      var t4 = this.media, e4 = this.gapController;
      if (t4 && e4 && t4.readyState) {
        var r4 = o2.BufferHelper.getBuffered(t4);
        !this.loadedmetadata && r4.length ? (this.loadedmetadata = true, this.seekToStartPos()) : e4.poll(this.lastCurrentTime), this.lastCurrentTime = t4.currentTime;
      }
    }, b.onFragLoadEmergencyAborted = function() {
      this.state = n2.State.IDLE, this.loadedmetadata || (this.startFragRequested = false, this.nextLoadPosition = this.startPosition), this.tickImmediate();
    }, b.onBufferFlushed = function(t4, e4) {
      var r4 = e4.type;
      if (r4 !== d.ElementaryStreamTypes.AUDIO || this.audioOnly && !this.altAudio) {
        var i3 = (r4 === d.ElementaryStreamTypes.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
        this.afterBufferFlushed(i3, r4, u.PlaylistLevelType.MAIN);
      }
    }, b.onLevelsUpdated = function(t4, e4) {
      this.levels = e4.levels;
    }, b.swapAudioCodec = function() {
      this.audioCodecSwap = !this.audioCodecSwap;
    }, b.seekToStartPos = function() {
      var t4 = this.media, e4 = t4.currentTime, r4 = this.startPosition;
      if (r4 >= 0 && e4 < r4) {
        if (t4.seeking)
          return void v.logger.log("could not seek to " + r4 + ", already seeking at " + e4);
        var i3 = o2.BufferHelper.getBuffered(t4), n3 = (i3.length ? i3.start(0) : 0) - r4;
        n3 > 0 && n3 < this.config.maxBufferHole && (v.logger.log("adjusting start position by " + n3 + " to match buffer start"), r4 += n3, this.startPosition = r4), this.log("seek to target start position " + r4 + " from current time " + e4), t4.currentTime = r4;
      }
    }, b._getAudioCodec = function(t4) {
      var e4 = this.config.defaultAudioCodec || t4.audioCodec;
      return this.audioCodecSwap && e4 && (this.log("Swapping audio codec"), e4 = -1 !== e4.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), e4;
    }, b._loadBitrateTestFrag = function(t4) {
      var e4 = this;
      this._doFragLoad(t4).then(function(r4) {
        var i3 = e4.hls;
        if (r4 && !i3.nextLoadLevel && !e4.fragContextChanged(t4)) {
          e4.fragLoadError = 0, e4.state = n2.State.IDLE, e4.startFragRequested = false, e4.bitrateTest = false;
          var a3 = t4.stats;
          a3.parsing.start = a3.parsing.end = a3.buffering.start = a3.buffering.end = self.performance.now(), i3.trigger(s2.Events.FRAG_LOADED, r4);
        }
      });
    }, b._handleTransmuxComplete = function(t4) {
      var e4, r4 = "main", a3 = this.hls, o3 = t4.remuxResult, l3 = t4.chunkMeta, u2 = this.getCurrentContext(l3);
      if (!u2)
        return this.warn("The loading context changed while buffering fragment " + l3.sn + " of level " + l3.level + ". This chunk will not be buffered."), void this.resetLiveStartWhenNotLoaded(l3.level);
      var c2 = u2.frag, h2 = u2.part, f2 = u2.level, g2 = o3.video, v2 = o3.text, p2 = o3.id3, m2 = o3.initSegment, y3 = this.altAudio ? void 0 : o3.audio;
      if (!this.fragContextChanged(c2)) {
        if (this.state = n2.State.PARSING, m2) {
          m2.tracks && (this._bufferInitSegment(f2, m2.tracks, c2, l3), a3.trigger(s2.Events.FRAG_PARSING_INIT_SEGMENT, { frag: c2, id: r4, tracks: m2.tracks }));
          var E2 = m2.initPTS, T2 = m2.timescale;
          Object(i2.isFiniteNumber)(E2) && (this.initPTS[c2.cc] = E2, a3.trigger(s2.Events.INIT_PTS_FOUND, { frag: c2, id: r4, initPTS: E2, timescale: T2 }));
        }
        if (g2 && false !== o3.independent) {
          if (f2.details) {
            var S = g2.startPTS, b2 = g2.endPTS, L = g2.startDTS, A = g2.endDTS;
            if (h2)
              h2.elementaryStreams[g2.type] = { startPTS: S, endPTS: b2, startDTS: L, endDTS: A };
            else if (g2.firstKeyFrame && g2.independent && (this.couldBacktrack = true), g2.dropped && g2.independent) {
              if (this.getLoadPosition() + this.config.maxBufferHole < S)
                return void this.backtrack(c2);
              c2.setElementaryStreamInfo(g2.type, c2.start, b2, c2.start, A, true);
            }
            c2.setElementaryStreamInfo(g2.type, S, b2, L, A), this.bufferFragmentData(g2, c2, h2, l3);
          }
        } else if (false === o3.independent)
          return void this.backtrack(c2);
        if (y3) {
          var D = y3.startPTS, k = y3.endPTS, R = y3.startDTS, _ = y3.endDTS;
          h2 && (h2.elementaryStreams[d.ElementaryStreamTypes.AUDIO] = { startPTS: D, endPTS: k, startDTS: R, endDTS: _ }), c2.setElementaryStreamInfo(d.ElementaryStreamTypes.AUDIO, D, k, R, _), this.bufferFragmentData(y3, c2, h2, l3);
        }
        if (null != p2 && null !== (e4 = p2.samples) && void 0 !== e4 && e4.length) {
          var I = { frag: c2, id: r4, samples: p2.samples };
          a3.trigger(s2.Events.FRAG_PARSING_METADATA, I);
        }
        if (v2) {
          var C = { frag: c2, id: r4, samples: v2.samples };
          a3.trigger(s2.Events.FRAG_PARSING_USERDATA, C);
        }
      }
    }, b._bufferInitSegment = function(t4, e4, r4, i3) {
      var a3 = this;
      if (this.state === n2.State.PARSING) {
        this.audioOnly = !!e4.audio && !e4.video, this.altAudio && !this.audioOnly && delete e4.audio;
        var o3 = e4.audio, l3 = e4.video, u2 = e4.audiovideo;
        if (o3) {
          var d2 = t4.audioCodec, c2 = navigator.userAgent.toLowerCase();
          this.audioCodecSwitch && (d2 && (d2 = -1 !== d2.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), 1 !== o3.metadata.channelCount && -1 === c2.indexOf("firefox") && (d2 = "mp4a.40.5")), -1 !== c2.indexOf("android") && "audio/mpeg" !== o3.container && (d2 = "mp4a.40.2", this.log("Android: force audio codec to " + d2)), t4.audioCodec && t4.audioCodec !== d2 && this.log('Swapping manifest audio codec "' + t4.audioCodec + '" for "' + d2 + '"'), o3.levelCodec = d2, o3.id = "main", this.log("Init audio buffer, container:" + o3.container + ", codecs[selected/level/parsed]=[" + (d2 || "") + "/" + (t4.audioCodec || "") + "/" + o3.codec + "]");
        }
        l3 && (l3.levelCodec = t4.videoCodec, l3.id = "main", this.log("Init video buffer, container:" + l3.container + ", codecs[level/parsed]=[" + (t4.videoCodec || "") + "/" + l3.codec + "]")), u2 && this.log("Init audiovideo buffer, container:" + u2.container + ", codecs[level/parsed]=[" + (t4.attrs.CODECS || "") + "/" + u2.codec + "]"), this.hls.trigger(s2.Events.BUFFER_CODECS, e4), Object.keys(e4).forEach(function(t5) {
          var n3 = e4[t5].initSegment;
          null != n3 && n3.byteLength && a3.hls.trigger(s2.Events.BUFFER_APPENDING, { type: t5, data: n3, frag: r4, part: null, chunkMeta: i3, parent: r4.type });
        }), this.tick();
      }
    }, b.backtrack = function(t4) {
      this.couldBacktrack = true, this.resetTransmuxer(), this.flushBufferGap(t4);
      var e4 = this.fragmentTracker.backtrack(t4);
      this.fragPrevious = null, this.nextLoadPosition = t4.start, e4 ? this.resetFragmentLoading(t4) : this.state = n2.State.BACKTRACKING;
    }, b.checkFragmentChanged = function() {
      var t4 = this.media, e4 = null;
      if (t4 && t4.readyState > 1 && false === t4.seeking) {
        var r4 = t4.currentTime;
        if (o2.BufferHelper.isBuffered(t4, r4) ? e4 = this.getAppendedFrag(r4) : o2.BufferHelper.isBuffered(t4, r4 + 0.1) && (e4 = this.getAppendedFrag(r4 + 0.1)), e4) {
          var i3 = this.fragPlaying, n3 = e4.level;
          i3 && e4.sn === i3.sn && i3.level === n3 && e4.urlId === i3.urlId || (this.hls.trigger(s2.Events.FRAG_CHANGED, { frag: e4 }), i3 && i3.level === n3 || this.hls.trigger(s2.Events.LEVEL_SWITCHED, { level: n3 }), this.fragPlaying = e4);
        }
      }
    }, E = y2, (T = [{ key: "nextLevel", get: function() {
      var t4 = this.nextBufferedFrag;
      return t4 ? t4.level : -1;
    } }, { key: "currentLevel", get: function() {
      var t4 = this.media;
      if (t4) {
        var e4 = this.getAppendedFrag(t4.currentTime);
        if (e4)
          return e4.level;
      }
      return -1;
    } }, { key: "nextBufferedFrag", get: function() {
      var t4 = this.media;
      if (t4) {
        var e4 = this.getAppendedFrag(t4.currentTime);
        return this.followingBufferedFrag(e4);
      }
      return null;
    } }, { key: "forceStartLoad", get: function() {
      return this._forceStartLoad;
    } }]) && p(E.prototype, T), y2;
  }(n2.default);
}, "./src/controller/subtitle-stream-controller.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "SubtitleStreamController", function() {
    return v;
  });
  var i2 = r2("./src/events.ts"), n2 = r2("./src/utils/logger.ts"), a2 = r2("./src/utils/buffer-helper.ts"), s2 = r2("./src/controller/fragment-finders.ts"), o2 = r2("./src/utils/discontinuities.ts"), l2 = r2("./src/controller/level-helper.ts"), u = r2("./src/controller/fragment-tracker.ts"), d = r2("./src/controller/base-stream-controller.ts"), c = r2("./src/types/loader.ts"), h = r2("./src/types/level.ts");
  function f(t3, e3) {
    for (var r3 = 0; r3 < e3.length; r3++) {
      var i3 = e3[r3];
      i3.enumerable = i3.enumerable || false, i3.configurable = true, "value" in i3 && (i3.writable = true), Object.defineProperty(t3, i3.key, i3);
    }
  }
  function g(t3, e3) {
    return (g = Object.setPrototypeOf || function(t4, e4) {
      return t4.__proto__ = e4, t4;
    })(t3, e3);
  }
  var v = function(t3) {
    var e3, r3;
    function v2(e4, r4) {
      var i3;
      return (i3 = t3.call(this, e4, r4, "[subtitle-stream-controller]") || this).levels = [], i3.currentTrackId = -1, i3.tracksBuffered = [], i3.mainDetails = null, i3._registerListeners(), i3;
    }
    r3 = t3, (e3 = v2).prototype = Object.create(r3.prototype), e3.prototype.constructor = e3, g(e3, r3);
    var p, m, E = v2.prototype;
    return E.onHandlerDestroying = function() {
      this._unregisterListeners(), this.mainDetails = null;
    }, E._registerListeners = function() {
      var t4 = this.hls;
      t4.on(i2.Events.MEDIA_ATTACHED, this.onMediaAttached, this), t4.on(i2.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t4.on(i2.Events.MANIFEST_LOADING, this.onManifestLoading, this), t4.on(i2.Events.LEVEL_LOADED, this.onLevelLoaded, this), t4.on(i2.Events.ERROR, this.onError, this), t4.on(i2.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t4.on(i2.Events.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), t4.on(i2.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t4.on(i2.Events.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), t4.on(i2.Events.BUFFER_FLUSHING, this.onBufferFlushing, this);
    }, E._unregisterListeners = function() {
      var t4 = this.hls;
      t4.off(i2.Events.MEDIA_ATTACHED, this.onMediaAttached, this), t4.off(i2.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t4.off(i2.Events.MANIFEST_LOADING, this.onManifestLoading, this), t4.off(i2.Events.LEVEL_LOADED, this.onLevelLoaded, this), t4.off(i2.Events.ERROR, this.onError, this), t4.off(i2.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t4.off(i2.Events.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), t4.off(i2.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t4.off(i2.Events.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), t4.off(i2.Events.BUFFER_FLUSHING, this.onBufferFlushing, this);
    }, E.startLoad = function() {
      this.stopLoad(), this.state = d.State.IDLE, this.setInterval(500), this.tick();
    }, E.onManifestLoading = function() {
      this.mainDetails = null, this.fragmentTracker.removeAllFragments();
    }, E.onLevelLoaded = function(t4, e4) {
      this.mainDetails = e4.details;
    }, E.onSubtitleFragProcessed = function(t4, e4) {
      var r4 = e4.frag, i3 = e4.success;
      if (this.fragPrevious = r4, this.state = d.State.IDLE, i3) {
        var n3 = this.tracksBuffered[this.currentTrackId];
        if (n3) {
          for (var a3, s3 = r4.start, o3 = 0; o3 < n3.length; o3++)
            if (s3 >= n3[o3].start && s3 <= n3[o3].end) {
              a3 = n3[o3];
              break;
            }
          var l3 = r4.start + r4.duration;
          a3 ? a3.end = l3 : (a3 = { start: s3, end: l3 }, n3.push(a3)), this.fragmentTracker.fragBuffered(r4);
        }
      }
    }, E.onBufferFlushing = function(t4, e4) {
      var r4 = e4.startOffset, i3 = e4.endOffset;
      if (0 === r4 && i3 !== Number.POSITIVE_INFINITY) {
        var n3 = this.currentTrackId, a3 = this.levels;
        if (!a3.length || !a3[n3] || !a3[n3].details)
          return;
        var s3 = i3 - a3[n3].details.targetduration;
        if (s3 <= 0)
          return;
        e4.endOffsetSubtitles = Math.max(0, s3), this.tracksBuffered.forEach(function(t5) {
          for (var e5 = 0; e5 < t5.length; )
            if (t5[e5].end <= s3)
              t5.shift();
            else {
              if (!(t5[e5].start < s3))
                break;
              t5[e5].start = s3, e5++;
            }
        }), this.fragmentTracker.removeFragmentsInRange(r4, s3, c.PlaylistLevelType.SUBTITLE);
      }
    }, E.onError = function(t4, e4) {
      var r4, i3 = e4.frag;
      i3 && i3.type === c.PlaylistLevelType.SUBTITLE && (null !== (r4 = this.fragCurrent) && void 0 !== r4 && r4.loader && this.fragCurrent.loader.abort(), this.state = d.State.IDLE);
    }, E.onSubtitleTracksUpdated = function(t4, e4) {
      var r4 = this, i3 = e4.subtitleTracks;
      this.tracksBuffered = [], this.levels = i3.map(function(t5) {
        return new h.Level(t5);
      }), this.fragmentTracker.removeAllFragments(), this.fragPrevious = null, this.levels.forEach(function(t5) {
        r4.tracksBuffered[t5.id] = [];
      }), this.mediaBuffer = null;
    }, E.onSubtitleTrackSwitch = function(t4, e4) {
      if (this.currentTrackId = e4.id, this.levels.length && -1 !== this.currentTrackId) {
        var r4 = this.levels[this.currentTrackId];
        null != r4 && r4.details ? (this.mediaBuffer = this.mediaBufferTimeRanges, this.setInterval(500)) : this.mediaBuffer = null;
      } else
        this.clearInterval();
    }, E.onSubtitleTrackLoaded = function(t4, e4) {
      var r4, i3 = e4.details, n3 = e4.id, a3 = this.currentTrackId, u2 = this.levels;
      if (u2.length) {
        var c2 = u2[a3];
        if (!(n3 >= u2.length || n3 !== a3) && c2) {
          if (this.mediaBuffer = this.mediaBufferTimeRanges, i3.live || null !== (r4 = c2.details) && void 0 !== r4 && r4.live) {
            var h2 = this.mainDetails;
            if (i3.deltaUpdateFailed || !h2)
              return;
            var f2 = h2.fragments[0];
            c2.details ? 0 === this.alignPlaylists(i3, c2.details) && f2 && Object(l2.addSliding)(i3, f2.start) : i3.hasProgramDateTime && h2.hasProgramDateTime ? Object(o2.alignPDT)(i3, h2) : f2 && Object(l2.addSliding)(i3, f2.start);
          }
          c2.details = i3, this.levelLastLoaded = n3, this.tick(), i3.live && !this.fragCurrent && this.media && this.state === d.State.IDLE && (Object(s2.findFragmentByPTS)(null, i3.fragments, this.media.currentTime, 0) || (this.warn("Subtitle playlist not aligned with playback"), c2.details = void 0));
        }
      }
    }, E._handleFragmentLoadComplete = function(t4) {
      var e4 = t4.frag, r4 = t4.payload, n3 = e4.decryptdata, a3 = this.hls;
      if (!this.fragContextChanged(e4) && r4 && r4.byteLength > 0 && n3 && n3.key && n3.iv && "AES-128" === n3.method) {
        var s3 = performance.now();
        this.decrypter.webCryptoDecrypt(new Uint8Array(r4), n3.key.buffer, n3.iv.buffer).then(function(t5) {
          var r5 = performance.now();
          a3.trigger(i2.Events.FRAG_DECRYPTED, { frag: e4, payload: t5, stats: { tstart: s3, tdecrypt: r5 } });
        });
      }
    }, E.doTick = function() {
      if (this.media) {
        if (this.state === d.State.IDLE) {
          var t4, e4 = this.currentTrackId, r4 = this.levels;
          if (!r4.length || !r4[e4] || !r4[e4].details)
            return;
          var o3 = r4[e4].details, l3 = o3.targetduration, c2 = this.config, h2 = this.media, f2 = a2.BufferHelper.bufferedInfo(this.mediaBufferTimeRanges, h2.currentTime - l3, c2.maxBufferHole), g2 = f2.end;
          if (f2.len > this.getMaxBufferLength() + l3)
            return;
          console.assert(o3, "Subtitle track details are defined on idle subtitle stream controller tick");
          var v3, p2 = o3.fragments, m2 = p2.length, y = o3.edge, E2 = this.fragPrevious;
          if (g2 < y) {
            var T = c2.maxFragLookUpTolerance;
            E2 && o3.hasProgramDateTime && (v3 = Object(s2.findFragmentByPDT)(p2, E2.endProgramDateTime, T)), v3 || !(v3 = Object(s2.findFragmentByPTS)(E2, p2, g2, T)) && E2 && E2.start < p2[0].start && (v3 = p2[0]);
          } else
            v3 = p2[m2 - 1];
          null !== (t4 = v3) && void 0 !== t4 && t4.encrypted ? (n2.logger.log("Loading key for " + v3.sn), this.state = d.State.KEY_LOADING, this.hls.trigger(i2.Events.KEY_LOADING, { frag: v3 })) : v3 && this.fragmentTracker.getState(v3) === u.FragmentState.NOT_LOADED && this.loadFragment(v3, o3, g2);
        }
      } else
        this.state = d.State.IDLE;
    }, E.loadFragment = function(e4, r4, i3) {
      this.fragCurrent = e4, t3.prototype.loadFragment.call(this, e4, r4, i3);
    }, p = v2, (m = [{ key: "mediaBufferTimeRanges", get: function() {
      return this.tracksBuffered[this.currentTrackId] || [];
    } }]) && f(p.prototype, m), v2;
  }(d.default);
}, "./src/controller/subtitle-track-controller.ts": function(t2, e2, r2) {
  r2.r(e2);
  var i2 = r2("./src/events.ts"), n2 = r2("./src/utils/texttrack-utils.ts"), a2 = r2("./src/controller/base-playlist-controller.ts"), s2 = r2("./src/types/loader.ts");
  function o2(t3, e3) {
    for (var r3 = 0; r3 < e3.length; r3++) {
      var i3 = e3[r3];
      i3.enumerable = i3.enumerable || false, i3.configurable = true, "value" in i3 && (i3.writable = true), Object.defineProperty(t3, i3.key, i3);
    }
  }
  function l2(t3, e3) {
    return (l2 = Object.setPrototypeOf || function(t4, e4) {
      return t4.__proto__ = e4, t4;
    })(t3, e3);
  }
  var u = function(t3) {
    var e3, r3;
    function a3(e4) {
      var r4;
      return (r4 = t3.call(this, e4, "[subtitle-track-controller]") || this).media = null, r4.tracks = [], r4.groupId = null, r4.tracksInGroup = [], r4.trackId = -1, r4.selectDefaultTrack = true, r4.queuedDefaultTrack = -1, r4.trackChangeListener = function() {
        return r4.onTextTracksChanged();
      }, r4.asyncPollTrackChange = function() {
        return r4.pollTrackChange(0);
      }, r4.useTextTrackPolling = false, r4.subtitlePollingInterval = -1, r4.subtitleDisplay = true, r4.registerListeners(), r4;
    }
    r3 = t3, (e3 = a3).prototype = Object.create(r3.prototype), e3.prototype.constructor = e3, l2(e3, r3);
    var u2, c, f = a3.prototype;
    return f.destroy = function() {
      this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.trackChangeListener = this.asyncPollTrackChange = null, t3.prototype.destroy.call(this);
    }, f.registerListeners = function() {
      var t4 = this.hls;
      t4.on(i2.Events.MEDIA_ATTACHED, this.onMediaAttached, this), t4.on(i2.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t4.on(i2.Events.MANIFEST_LOADING, this.onManifestLoading, this), t4.on(i2.Events.MANIFEST_PARSED, this.onManifestParsed, this), t4.on(i2.Events.LEVEL_LOADING, this.onLevelLoading, this), t4.on(i2.Events.LEVEL_SWITCHING, this.onLevelSwitching, this), t4.on(i2.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t4.on(i2.Events.ERROR, this.onError, this);
    }, f.unregisterListeners = function() {
      var t4 = this.hls;
      t4.off(i2.Events.MEDIA_ATTACHED, this.onMediaAttached, this), t4.off(i2.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t4.off(i2.Events.MANIFEST_LOADING, this.onManifestLoading, this), t4.off(i2.Events.MANIFEST_PARSED, this.onManifestParsed, this), t4.off(i2.Events.LEVEL_LOADING, this.onLevelLoading, this), t4.off(i2.Events.LEVEL_SWITCHING, this.onLevelSwitching, this), t4.off(i2.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t4.off(i2.Events.ERROR, this.onError, this);
    }, f.onMediaAttached = function(t4, e4) {
      this.media = e4.media, this.media && (this.queuedDefaultTrack > -1 && (this.subtitleTrack = this.queuedDefaultTrack, this.queuedDefaultTrack = -1), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.pollTrackChange(500) : this.media.textTracks.addEventListener("change", this.asyncPollTrackChange));
    }, f.pollTrackChange = function(t4) {
      self.clearInterval(this.subtitlePollingInterval), this.subtitlePollingInterval = self.setInterval(this.trackChangeListener, t4);
    }, f.onMediaDetaching = function() {
      this.media && (self.clearInterval(this.subtitlePollingInterval), this.useTextTrackPolling || this.media.textTracks.removeEventListener("change", this.asyncPollTrackChange), this.trackId > -1 && (this.queuedDefaultTrack = this.trackId), d(this.media.textTracks).forEach(function(t4) {
        Object(n2.clearCurrentCues)(t4);
      }), this.subtitleTrack = -1, this.media = null);
    }, f.onManifestLoading = function() {
      this.tracks = [], this.groupId = null, this.tracksInGroup = [], this.trackId = -1, this.selectDefaultTrack = true;
    }, f.onManifestParsed = function(t4, e4) {
      this.tracks = e4.subtitleTracks;
    }, f.onSubtitleTrackLoaded = function(t4, e4) {
      var r4 = e4.id, i3 = e4.details, n3 = this.trackId, a4 = this.tracksInGroup[n3];
      if (a4) {
        var s3 = a4.details;
        a4.details = e4.details, this.log("subtitle track " + r4 + " loaded [" + i3.startSN + "-" + i3.endSN + "]"), r4 === this.trackId && (this.retryCount = 0, this.playlistLoaded(r4, e4, s3));
      } else
        this.warn("Invalid subtitle track id " + r4);
    }, f.onLevelLoading = function(t4, e4) {
      this.switchLevel(e4.level);
    }, f.onLevelSwitching = function(t4, e4) {
      this.switchLevel(e4.level);
    }, f.switchLevel = function(t4) {
      var e4 = this.hls.levels[t4];
      if (null != e4 && e4.textGroupIds) {
        var r4 = e4.textGroupIds[e4.urlId];
        if (this.groupId !== r4) {
          var n3 = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0, a4 = this.tracks.filter(function(t5) {
            return !r4 || t5.groupId === r4;
          });
          this.tracksInGroup = a4;
          var s3 = this.findTrackId(null == n3 ? void 0 : n3.name) || this.findTrackId();
          this.groupId = r4;
          var o3 = { subtitleTracks: a4 };
          this.log("Updating subtitle tracks, " + a4.length + ' track(s) found in "' + r4 + '" group-id'), this.hls.trigger(i2.Events.SUBTITLE_TRACKS_UPDATED, o3), -1 !== s3 && this.setSubtitleTrack(s3, n3);
        }
      }
    }, f.findTrackId = function(t4) {
      for (var e4 = this.tracksInGroup, r4 = 0; r4 < e4.length; r4++) {
        var i3 = e4[r4];
        if ((!this.selectDefaultTrack || i3.default) && (!t4 || t4 === i3.name))
          return i3.id;
      }
      return -1;
    }, f.onError = function(e4, r4) {
      t3.prototype.onError.call(this, e4, r4), !r4.fatal && r4.context && r4.context.type === s2.PlaylistContextType.SUBTITLE_TRACK && r4.context.id === this.trackId && r4.context.groupId === this.groupId && this.retryLoadingOrFail(r4);
    }, f.loadPlaylist = function(t4) {
      var e4 = this.tracksInGroup[this.trackId];
      if (this.shouldLoadTrack(e4)) {
        var r4 = e4.id, n3 = e4.groupId, a4 = e4.url;
        if (t4)
          try {
            a4 = t4.addDirectives(a4);
          } catch (s3) {
            this.warn("Could not construct new URL with HLS Delivery Directives: " + s3);
          }
        this.log("Loading subtitle playlist for id " + r4), this.hls.trigger(i2.Events.SUBTITLE_TRACK_LOADING, { url: a4, id: r4, groupId: n3, deliveryDirectives: t4 || null });
      }
    }, f.toggleTrackModes = function(t4) {
      var e4 = this, r4 = this.media, i3 = this.subtitleDisplay, n3 = this.trackId;
      if (r4) {
        var a4 = d(r4.textTracks), s3 = a4.filter(function(t5) {
          return t5.groupId === e4.groupId;
        });
        if (-1 === t4)
          [].slice.call(a4).forEach(function(t5) {
            t5.mode = "disabled";
          });
        else {
          var o3 = s3[n3];
          o3 && (o3.mode = "disabled");
        }
        var l3 = s3[t4];
        l3 && (l3.mode = i3 ? "showing" : "hidden");
      }
    }, f.setSubtitleTrack = function(t4, e4) {
      var r4, n3 = this.tracksInGroup;
      if (this.media) {
        if (this.trackId !== t4 && this.toggleTrackModes(t4), !(this.trackId === t4 && (-1 === t4 || null !== (r4 = n3[t4]) && void 0 !== r4 && r4.details) || t4 < -1 || t4 >= n3.length)) {
          this.clearTimer();
          var a4 = n3[t4];
          if (this.log("Switching to subtitle track " + t4), this.trackId = t4, a4) {
            var s3 = a4.id, o3 = a4.groupId, l3 = void 0 === o3 ? "" : o3, u3 = a4.name, d2 = a4.type, c2 = a4.url;
            this.hls.trigger(i2.Events.SUBTITLE_TRACK_SWITCH, { id: s3, groupId: l3, name: u3, type: d2, url: c2 });
            var h = this.switchParams(a4.url, null == e4 ? void 0 : e4.details);
            this.loadPlaylist(h);
          } else
            this.hls.trigger(i2.Events.SUBTITLE_TRACK_SWITCH, { id: t4 });
        }
      } else
        this.queuedDefaultTrack = t4;
    }, f.onTextTracksChanged = function() {
      if (this.useTextTrackPolling || self.clearInterval(this.subtitlePollingInterval), this.media && this.hls.config.renderTextTracksNatively) {
        for (var t4 = -1, e4 = d(this.media.textTracks), r4 = 0; r4 < e4.length; r4++)
          if ("hidden" === e4[r4].mode)
            t4 = r4;
          else if ("showing" === e4[r4].mode) {
            t4 = r4;
            break;
          }
        this.subtitleTrack !== t4 && (this.subtitleTrack = t4);
      }
    }, u2 = a3, (c = [{ key: "subtitleTracks", get: function() {
      return this.tracksInGroup;
    } }, { key: "subtitleTrack", get: function() {
      return this.trackId;
    }, set: function(t4) {
      this.selectDefaultTrack = false;
      var e4 = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0;
      this.setSubtitleTrack(t4, e4);
    } }]) && o2(u2.prototype, c), a3;
  }(a2.default);
  function d(t3) {
    for (var e3 = [], r3 = 0; r3 < t3.length; r3++) {
      var i3 = t3[r3];
      "subtitles" === i3.kind && i3.label && e3.push(t3[r3]);
    }
    return e3;
  }
  e2.default = u;
}, "./src/controller/timeline-controller.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "TimelineController", function() {
    return h;
  });
  var i2 = r2("./src/polyfills/number.ts"), n2 = r2("./src/events.ts"), a2 = r2("./src/utils/cea-608-parser.ts"), s2 = r2("./src/utils/output-filter.ts"), o2 = r2("./src/utils/webvtt-parser.ts"), l2 = r2("./src/utils/texttrack-utils.ts"), u = r2("./src/utils/imsc1-ttml-parser.ts"), d = r2("./src/types/loader.ts"), c = r2("./src/utils/logger.ts"), h = function() {
    function t3(t4) {
      if (this.hls = void 0, this.media = null, this.config = void 0, this.enabled = true, this.Cues = void 0, this.textTracks = [], this.tracks = [], this.initPTS = [], this.timescale = [], this.unparsedVttFrags = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.cea608Parser1 = void 0, this.cea608Parser2 = void 0, this.lastSn = -1, this.prevCC = -1, this.vttCCs = { ccOffset: 0, presentationOffset: 0, 0: { start: 0, prevCC: -1, new: false } }, this.captionsProperties = void 0, this.hls = t4, this.config = t4.config, this.Cues = t4.config.cueHandler, this.captionsProperties = { textTrack1: { label: this.config.captionsTextTrack1Label, languageCode: this.config.captionsTextTrack1LanguageCode }, textTrack2: { label: this.config.captionsTextTrack2Label, languageCode: this.config.captionsTextTrack2LanguageCode }, textTrack3: { label: this.config.captionsTextTrack3Label, languageCode: this.config.captionsTextTrack3LanguageCode }, textTrack4: { label: this.config.captionsTextTrack4Label, languageCode: this.config.captionsTextTrack4LanguageCode } }, this.config.enableCEA708Captions) {
        var e4 = new s2.default(this, "textTrack1"), r3 = new s2.default(this, "textTrack2"), i3 = new s2.default(this, "textTrack3"), o3 = new s2.default(this, "textTrack4");
        this.cea608Parser1 = new a2.default(1, e4, r3), this.cea608Parser2 = new a2.default(3, i3, o3);
      }
      t4.on(n2.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), t4.on(n2.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t4.on(n2.Events.MANIFEST_LOADING, this.onManifestLoading, this), t4.on(n2.Events.MANIFEST_LOADED, this.onManifestLoaded, this), t4.on(n2.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t4.on(n2.Events.FRAG_LOADING, this.onFragLoading, this), t4.on(n2.Events.FRAG_LOADED, this.onFragLoaded, this), t4.on(n2.Events.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), t4.on(n2.Events.FRAG_DECRYPTED, this.onFragDecrypted, this), t4.on(n2.Events.INIT_PTS_FOUND, this.onInitPtsFound, this), t4.on(n2.Events.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), t4.on(n2.Events.BUFFER_FLUSHING, this.onBufferFlushing, this);
    }
    var e3 = t3.prototype;
    return e3.destroy = function() {
      var t4 = this.hls;
      t4.off(n2.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), t4.off(n2.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t4.off(n2.Events.MANIFEST_LOADING, this.onManifestLoading, this), t4.off(n2.Events.MANIFEST_LOADED, this.onManifestLoaded, this), t4.off(n2.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t4.off(n2.Events.FRAG_LOADING, this.onFragLoading, this), t4.off(n2.Events.FRAG_LOADED, this.onFragLoaded, this), t4.off(n2.Events.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), t4.off(n2.Events.FRAG_DECRYPTED, this.onFragDecrypted, this), t4.off(n2.Events.INIT_PTS_FOUND, this.onInitPtsFound, this), t4.off(n2.Events.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), t4.off(n2.Events.BUFFER_FLUSHING, this.onBufferFlushing, this), this.hls = this.config = this.cea608Parser1 = this.cea608Parser2 = null;
    }, e3.addCues = function(t4, e4, r3, i3, a3) {
      for (var s3, o3, l3, u2, d2 = false, c2 = a3.length; c2--; ) {
        var h2 = a3[c2], f2 = (s3 = h2[0], o3 = h2[1], l3 = e4, u2 = r3, Math.min(o3, u2) - Math.max(s3, l3));
        if (f2 >= 0 && (h2[0] = Math.min(h2[0], e4), h2[1] = Math.max(h2[1], r3), d2 = true, f2 / (r3 - e4) > 0.5))
          return;
      }
      if (d2 || a3.push([e4, r3]), this.config.renderTextTracksNatively) {
        var g = this.captionsTracks[t4];
        this.Cues.newCue(g, e4, r3, i3);
      } else {
        var v = this.Cues.newCue(null, e4, r3, i3);
        this.hls.trigger(n2.Events.CUES_PARSED, { type: "captions", cues: v, track: t4 });
      }
    }, e3.onInitPtsFound = function(t4, e4) {
      var r3 = this, i3 = e4.frag, a3 = e4.id, s3 = e4.initPTS, o3 = e4.timescale, l3 = this.unparsedVttFrags;
      "main" === a3 && (this.initPTS[i3.cc] = s3, this.timescale[i3.cc] = o3), l3.length && (this.unparsedVttFrags = [], l3.forEach(function(t5) {
        r3.onFragLoaded(n2.Events.FRAG_LOADED, t5);
      }));
    }, e3.getExistingTrack = function(t4) {
      var e4 = this.media;
      if (e4)
        for (var r3 = 0; r3 < e4.textTracks.length; r3++) {
          var i3 = e4.textTracks[r3];
          if (i3[t4])
            return i3;
        }
      return null;
    }, e3.createCaptionsTrack = function(t4) {
      this.config.renderTextTracksNatively ? this.createNativeTrack(t4) : this.createNonNativeTrack(t4);
    }, e3.createNativeTrack = function(t4) {
      if (!this.captionsTracks[t4]) {
        var e4 = this.captionsProperties, r3 = this.captionsTracks, i3 = this.media, n3 = e4[t4], a3 = n3.label, s3 = n3.languageCode, o3 = this.getExistingTrack(t4);
        if (o3)
          r3[t4] = o3, Object(l2.clearCurrentCues)(r3[t4]), Object(l2.sendAddTrackEvent)(r3[t4], i3);
        else {
          var u2 = this.createTextTrack("captions", a3, s3);
          u2 && (u2[t4] = true, r3[t4] = u2);
        }
      }
    }, e3.createNonNativeTrack = function(t4) {
      if (!this.nonNativeCaptionsTracks[t4]) {
        var e4 = this.captionsProperties[t4];
        if (e4) {
          var r3 = { _id: t4, label: e4.label, kind: "captions", default: !!e4.media && !!e4.media.default, closedCaptions: e4.media };
          this.nonNativeCaptionsTracks[t4] = r3, this.hls.trigger(n2.Events.NON_NATIVE_TEXT_TRACKS_FOUND, { tracks: [r3] });
        }
      }
    }, e3.createTextTrack = function(t4, e4, r3) {
      var i3 = this.media;
      if (i3)
        return i3.addTextTrack(t4, e4, r3);
    }, e3.onMediaAttaching = function(t4, e4) {
      this.media = e4.media, this._cleanTracks();
    }, e3.onMediaDetaching = function() {
      var t4 = this.captionsTracks;
      Object.keys(t4).forEach(function(e4) {
        Object(l2.clearCurrentCues)(t4[e4]), delete t4[e4];
      }), this.nonNativeCaptionsTracks = {};
    }, e3.onManifestLoading = function() {
      this.lastSn = -1, this.prevCC = -1, this.vttCCs = { ccOffset: 0, presentationOffset: 0, 0: { start: 0, prevCC: -1, new: false } }, this._cleanTracks(), this.tracks = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.textTracks = [], this.unparsedVttFrags = this.unparsedVttFrags || [], this.initPTS = [], this.timescale = [], this.cea608Parser1 && this.cea608Parser2 && (this.cea608Parser1.reset(), this.cea608Parser2.reset());
    }, e3._cleanTracks = function() {
      var t4 = this.media;
      if (t4) {
        var e4 = t4.textTracks;
        if (e4)
          for (var r3 = 0; r3 < e4.length; r3++)
            Object(l2.clearCurrentCues)(e4[r3]);
      }
    }, e3.onSubtitleTracksUpdated = function(t4, e4) {
      var r3 = this;
      this.textTracks = [];
      var i3 = e4.subtitleTracks || [], a3 = i3.some(function(t5) {
        return t5.textCodec === u.IMSC1_CODEC;
      });
      if (this.config.enableWebVTT || a3 && this.config.enableIMSC1) {
        var s3 = this.tracks && i3 && this.tracks.length === i3.length;
        if (this.tracks = i3 || [], this.config.renderTextTracksNatively) {
          var o3 = this.media ? this.media.textTracks : [];
          this.tracks.forEach(function(t5, e5) {
            var i4;
            if (e5 < o3.length) {
              for (var n3 = null, a4 = 0; a4 < o3.length; a4++)
                if (f(o3[a4], t5)) {
                  n3 = o3[a4];
                  break;
                }
              n3 && (i4 = n3);
            }
            i4 ? Object(l2.clearCurrentCues)(i4) : (i4 = r3.createTextTrack("subtitles", t5.name, t5.lang)) && (i4.mode = "disabled"), i4 && (i4.groupId = t5.groupId, r3.textTracks.push(i4));
          });
        } else if (!s3 && this.tracks && this.tracks.length) {
          var d2 = this.tracks.map(function(t5) {
            return { label: t5.name, kind: t5.type.toLowerCase(), default: t5.default, subtitleTrack: t5 };
          });
          this.hls.trigger(n2.Events.NON_NATIVE_TEXT_TRACKS_FOUND, { tracks: d2 });
        }
      }
    }, e3.onManifestLoaded = function(t4, e4) {
      var r3 = this;
      this.config.enableCEA708Captions && e4.captions && e4.captions.forEach(function(t5) {
        var e5 = /(?:CC|SERVICE)([1-4])/.exec(t5.instreamId);
        if (e5) {
          var i3 = "textTrack" + e5[1], n3 = r3.captionsProperties[i3];
          n3 && (n3.label = t5.name, t5.lang && (n3.languageCode = t5.lang), n3.media = t5);
        }
      });
    }, e3.onFragLoading = function(t4, e4) {
      var r3 = this.cea608Parser1, i3 = this.cea608Parser2, n3 = this.lastSn;
      if (this.enabled && r3 && i3 && e4.frag.type === d.PlaylistLevelType.MAIN) {
        var a3 = e4.frag.sn;
        a3 !== n3 + 1 && (r3.reset(), i3.reset()), this.lastSn = a3;
      }
    }, e3.onFragLoaded = function(t4, e4) {
      var r3 = e4.frag, a3 = e4.payload, s3 = this.initPTS, o3 = this.unparsedVttFrags;
      if (r3.type === d.PlaylistLevelType.SUBTITLE)
        if (a3.byteLength) {
          if (!Object(i2.isFiniteNumber)(s3[r3.cc]))
            return o3.push(e4), void (s3.length && this.hls.trigger(n2.Events.SUBTITLE_FRAG_PROCESSED, { success: false, frag: r3, error: new Error("Missing initial subtitle PTS") }));
          var l3 = r3.decryptdata;
          if (null == l3 || null == l3.key || "AES-128" !== l3.method) {
            var c2 = this.tracks[r3.level], h2 = this.vttCCs;
            h2[r3.cc] || (h2[r3.cc] = { start: r3.start, prevCC: this.prevCC, new: true }, this.prevCC = r3.cc), c2 && c2.textCodec === u.IMSC1_CODEC ? this._parseIMSC1(r3, a3) : this._parseVTTs(r3, a3, h2);
          }
        } else
          this.hls.trigger(n2.Events.SUBTITLE_FRAG_PROCESSED, { success: false, frag: r3, error: new Error("Empty subtitle payload") });
    }, e3._parseIMSC1 = function(t4, e4) {
      var r3 = this, i3 = this.hls;
      Object(u.parseIMSC1)(e4, this.initPTS[t4.cc], this.timescale[t4.cc], function(e5) {
        r3._appendCues(e5, t4.level), i3.trigger(n2.Events.SUBTITLE_FRAG_PROCESSED, { success: true, frag: t4 });
      }, function(e5) {
        c.logger.log("Failed to parse IMSC1: " + e5), i3.trigger(n2.Events.SUBTITLE_FRAG_PROCESSED, { success: false, frag: t4, error: e5 });
      });
    }, e3._parseVTTs = function(t4, e4, r3) {
      var i3 = this, a3 = this.hls;
      Object(o2.parseWebVTT)(e4, this.initPTS[t4.cc], this.timescale[t4.cc], r3, t4.cc, t4.start, function(e5) {
        i3._appendCues(e5, t4.level), a3.trigger(n2.Events.SUBTITLE_FRAG_PROCESSED, { success: true, frag: t4 });
      }, function(r4) {
        i3._fallbackToIMSC1(t4, e4), c.logger.log("Failed to parse VTT cue: " + r4), a3.trigger(n2.Events.SUBTITLE_FRAG_PROCESSED, { success: false, frag: t4, error: r4 });
      });
    }, e3._fallbackToIMSC1 = function(t4, e4) {
      var r3 = this, i3 = this.tracks[t4.level];
      i3.textCodec || Object(u.parseIMSC1)(e4, this.initPTS[t4.cc], this.timescale[t4.cc], function() {
        i3.textCodec = u.IMSC1_CODEC, r3._parseIMSC1(t4, e4);
      }, function() {
        i3.textCodec = "wvtt";
      });
    }, e3._appendCues = function(t4, e4) {
      var r3 = this.hls;
      if (this.config.renderTextTracksNatively) {
        var i3 = this.textTracks[e4];
        if ("disabled" === i3.mode)
          return;
        t4.forEach(function(t5) {
          return Object(l2.addCueToTrack)(i3, t5);
        });
      } else {
        var a3 = this.tracks[e4].default ? "default" : "subtitles" + e4;
        r3.trigger(n2.Events.CUES_PARSED, { type: "subtitles", cues: t4, track: a3 });
      }
    }, e3.onFragDecrypted = function(t4, e4) {
      var r3 = e4.frag;
      if (r3.type === d.PlaylistLevelType.SUBTITLE) {
        if (!Object(i2.isFiniteNumber)(this.initPTS[r3.cc]))
          return void this.unparsedVttFrags.push(e4);
        this.onFragLoaded(n2.Events.FRAG_LOADED, e4);
      }
    }, e3.onSubtitleTracksCleared = function() {
      this.tracks = [], this.captionsTracks = {};
    }, e3.onFragParsingUserdata = function(t4, e4) {
      var r3 = this.cea608Parser1, i3 = this.cea608Parser2;
      if (this.enabled && r3 && i3)
        for (var n3 = 0; n3 < e4.samples.length; n3++) {
          var a3 = e4.samples[n3].bytes;
          if (a3) {
            var s3 = this.extractCea608Data(a3);
            r3.addData(e4.samples[n3].pts, s3[0]), i3.addData(e4.samples[n3].pts, s3[1]);
          }
        }
    }, e3.onBufferFlushing = function(t4, e4) {
      var r3 = e4.startOffset, i3 = e4.endOffset, n3 = e4.endOffsetSubtitles, a3 = e4.type, s3 = this.media;
      if (s3 && !(s3.currentTime < i3)) {
        if (!a3 || "video" === a3) {
          var o3 = this.captionsTracks;
          Object.keys(o3).forEach(function(t5) {
            return Object(l2.removeCuesInRange)(o3[t5], r3, i3);
          });
        }
        if (this.config.renderTextTracksNatively && 0 === r3 && void 0 !== n3) {
          var u2 = this.textTracks;
          Object.keys(u2).forEach(function(t5) {
            return Object(l2.removeCuesInRange)(u2[t5], r3, n3);
          });
        }
      }
    }, e3.extractCea608Data = function(t4) {
      for (var e4 = 31 & t4[0], r3 = 2, i3 = [[], []], n3 = 0; n3 < e4; n3++) {
        var a3 = t4[r3++], s3 = 127 & t4[r3++], o3 = 127 & t4[r3++], l3 = 3 & a3;
        0 === s3 && 0 === o3 || 0 != (4 & a3) && (0 !== l3 && 1 !== l3 || (i3[l3].push(s3), i3[l3].push(o3)));
      }
      return i3;
    }, t3;
  }();
  function f(t3, e3) {
    return t3 && t3.label === e3.name && !(t3.textTrack1 || t3.textTrack2);
  }
}, "./src/crypt/aes-crypto.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "default", function() {
    return i2;
  });
  var i2 = function() {
    function t3(t4, e3) {
      this.subtle = void 0, this.aesIV = void 0, this.subtle = t4, this.aesIV = e3;
    }
    return t3.prototype.decrypt = function(t4, e3) {
      return this.subtle.decrypt({ name: "AES-CBC", iv: this.aesIV }, e3, t4);
    }, t3;
  }();
}, "./src/crypt/aes-decryptor.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "removePadding", function() {
    return n2;
  }), r2.d(e2, "default", function() {
    return a2;
  });
  var i2 = r2("./src/utils/typed-array.ts");
  function n2(t3) {
    var e3 = t3.byteLength, r3 = e3 && new DataView(t3.buffer).getUint8(e3 - 1);
    return r3 ? Object(i2.sliceUint8)(t3, 0, e3 - r3) : t3;
  }
  var a2 = function() {
    function t3() {
      this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.ksRows = 0, this.keySize = 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.initTable();
    }
    var e3 = t3.prototype;
    return e3.uint8ArrayToUint32Array_ = function(t4) {
      for (var e4 = new DataView(t4), r3 = new Uint32Array(4), i3 = 0; i3 < 4; i3++)
        r3[i3] = e4.getUint32(4 * i3);
      return r3;
    }, e3.initTable = function() {
      var t4 = this.sBox, e4 = this.invSBox, r3 = this.subMix, i3 = r3[0], n3 = r3[1], a3 = r3[2], s2 = r3[3], o2 = this.invSubMix, l2 = o2[0], u = o2[1], d = o2[2], c = o2[3], h = new Uint32Array(256), f = 0, g = 0, v = 0;
      for (v = 0; v < 256; v++)
        h[v] = v < 128 ? v << 1 : v << 1 ^ 283;
      for (v = 0; v < 256; v++) {
        var p = g ^ g << 1 ^ g << 2 ^ g << 3 ^ g << 4;
        p = p >>> 8 ^ 255 & p ^ 99, t4[f] = p, e4[p] = f;
        var m = h[f], y = h[m], E = h[y], T = 257 * h[p] ^ 16843008 * p;
        i3[f] = T << 24 | T >>> 8, n3[f] = T << 16 | T >>> 16, a3[f] = T << 8 | T >>> 24, s2[f] = T, T = 16843009 * E ^ 65537 * y ^ 257 * m ^ 16843008 * f, l2[p] = T << 24 | T >>> 8, u[p] = T << 16 | T >>> 16, d[p] = T << 8 | T >>> 24, c[p] = T, f ? (f = m ^ h[h[h[E ^ m]]], g ^= h[h[g]]) : f = g = 1;
      }
    }, e3.expandKey = function(t4) {
      for (var e4 = this.uint8ArrayToUint32Array_(t4), r3 = true, i3 = 0; i3 < e4.length && r3; )
        r3 = e4[i3] === this.key[i3], i3++;
      if (!r3) {
        this.key = e4;
        var n3 = this.keySize = e4.length;
        if (4 !== n3 && 6 !== n3 && 8 !== n3)
          throw new Error("Invalid aes key size=" + n3);
        var a3, s2, o2, l2, u = this.ksRows = 4 * (n3 + 6 + 1), d = this.keySchedule = new Uint32Array(u), c = this.invKeySchedule = new Uint32Array(u), h = this.sBox, f = this.rcon, g = this.invSubMix, v = g[0], p = g[1], m = g[2], y = g[3];
        for (a3 = 0; a3 < u; a3++)
          a3 < n3 ? o2 = d[a3] = e4[a3] : (l2 = o2, a3 % n3 == 0 ? (l2 = h[(l2 = l2 << 8 | l2 >>> 24) >>> 24] << 24 | h[l2 >>> 16 & 255] << 16 | h[l2 >>> 8 & 255] << 8 | h[255 & l2], l2 ^= f[a3 / n3 | 0] << 24) : n3 > 6 && a3 % n3 == 4 && (l2 = h[l2 >>> 24] << 24 | h[l2 >>> 16 & 255] << 16 | h[l2 >>> 8 & 255] << 8 | h[255 & l2]), d[a3] = o2 = (d[a3 - n3] ^ l2) >>> 0);
        for (s2 = 0; s2 < u; s2++)
          a3 = u - s2, l2 = 3 & s2 ? d[a3] : d[a3 - 4], c[s2] = s2 < 4 || a3 <= 4 ? l2 : v[h[l2 >>> 24]] ^ p[h[l2 >>> 16 & 255]] ^ m[h[l2 >>> 8 & 255]] ^ y[h[255 & l2]], c[s2] = c[s2] >>> 0;
      }
    }, e3.networkToHostOrderSwap = function(t4) {
      return t4 << 24 | (65280 & t4) << 8 | (16711680 & t4) >> 8 | t4 >>> 24;
    }, e3.decrypt = function(t4, e4, r3) {
      for (var i3, n3, a3, s2, o2, l2, u, d, c, h, f, g, v, p, m = this.keySize + 6, y = this.invKeySchedule, E = this.invSBox, T = this.invSubMix, S = T[0], b = T[1], L = T[2], A = T[3], D = this.uint8ArrayToUint32Array_(r3), k = D[0], R = D[1], _ = D[2], I = D[3], C = new Int32Array(t4), w = new Int32Array(C.length), O = this.networkToHostOrderSwap; e4 < C.length; ) {
        for (c = O(C[e4]), h = O(C[e4 + 1]), f = O(C[e4 + 2]), g = O(C[e4 + 3]), o2 = c ^ y[0], l2 = g ^ y[1], u = f ^ y[2], d = h ^ y[3], v = 4, p = 1; p < m; p++)
          i3 = S[o2 >>> 24] ^ b[l2 >> 16 & 255] ^ L[u >> 8 & 255] ^ A[255 & d] ^ y[v], n3 = S[l2 >>> 24] ^ b[u >> 16 & 255] ^ L[d >> 8 & 255] ^ A[255 & o2] ^ y[v + 1], a3 = S[u >>> 24] ^ b[d >> 16 & 255] ^ L[o2 >> 8 & 255] ^ A[255 & l2] ^ y[v + 2], s2 = S[d >>> 24] ^ b[o2 >> 16 & 255] ^ L[l2 >> 8 & 255] ^ A[255 & u] ^ y[v + 3], o2 = i3, l2 = n3, u = a3, d = s2, v += 4;
        i3 = E[o2 >>> 24] << 24 ^ E[l2 >> 16 & 255] << 16 ^ E[u >> 8 & 255] << 8 ^ E[255 & d] ^ y[v], n3 = E[l2 >>> 24] << 24 ^ E[u >> 16 & 255] << 16 ^ E[d >> 8 & 255] << 8 ^ E[255 & o2] ^ y[v + 1], a3 = E[u >>> 24] << 24 ^ E[d >> 16 & 255] << 16 ^ E[o2 >> 8 & 255] << 8 ^ E[255 & l2] ^ y[v + 2], s2 = E[d >>> 24] << 24 ^ E[o2 >> 16 & 255] << 16 ^ E[l2 >> 8 & 255] << 8 ^ E[255 & u] ^ y[v + 3], w[e4] = O(i3 ^ k), w[e4 + 1] = O(s2 ^ R), w[e4 + 2] = O(a3 ^ _), w[e4 + 3] = O(n3 ^ I), k = c, R = h, _ = f, I = g, e4 += 4;
      }
      return w.buffer;
    }, t3;
  }();
}, "./src/crypt/decrypter.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "default", function() {
    return u;
  });
  var i2 = r2("./src/crypt/aes-crypto.ts"), n2 = r2("./src/crypt/fast-aes-key.ts"), a2 = r2("./src/crypt/aes-decryptor.ts"), s2 = r2("./src/utils/logger.ts"), o2 = r2("./src/utils/mp4-tools.ts"), l2 = r2("./src/utils/typed-array.ts"), u = function() {
    function t3(t4, e4, r3) {
      var i3 = (void 0 === r3 ? {} : r3).removePKCS7Padding, n3 = void 0 === i3 || i3;
      if (this.logEnabled = true, this.observer = void 0, this.config = void 0, this.removePKCS7Padding = void 0, this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null, this.observer = t4, this.config = e4, this.removePKCS7Padding = n3, n3)
        try {
          var a3 = self.crypto;
          a3 && (this.subtle = a3.subtle || a3.webkitSubtle);
        } catch (s3) {
        }
      null === this.subtle && (this.config.enableSoftwareAES = true);
    }
    var e3 = t3.prototype;
    return e3.destroy = function() {
      this.observer = null;
    }, e3.isSync = function() {
      return this.config.enableSoftwareAES;
    }, e3.flush = function() {
      var t4 = this.currentResult;
      if (t4) {
        var e4 = new Uint8Array(t4);
        return this.reset(), this.removePKCS7Padding ? Object(a2.removePadding)(e4) : e4;
      }
      this.reset();
    }, e3.reset = function() {
      this.currentResult = null, this.currentIV = null, this.remainderData = null, this.softwareDecrypter && (this.softwareDecrypter = null);
    }, e3.decrypt = function(t4, e4, r3, i3) {
      if (this.config.enableSoftwareAES) {
        this.softwareDecrypt(new Uint8Array(t4), e4, r3);
        var n3 = this.flush();
        n3 && i3(n3.buffer);
      } else
        this.webCryptoDecrypt(new Uint8Array(t4), e4, r3).then(i3);
    }, e3.softwareDecrypt = function(t4, e4, r3) {
      var i3 = this.currentIV, n3 = this.currentResult, s3 = this.remainderData;
      this.logOnce("JS AES decrypt"), s3 && (t4 = Object(o2.appendUint8Array)(s3, t4), this.remainderData = null);
      var u2 = this.getValidChunk(t4);
      if (!u2.length)
        return null;
      i3 && (r3 = i3);
      var d = this.softwareDecrypter;
      d || (d = this.softwareDecrypter = new a2.default()), d.expandKey(e4);
      var c = n3;
      return this.currentResult = d.decrypt(u2.buffer, 0, r3), this.currentIV = Object(l2.sliceUint8)(u2, -16).buffer, c || null;
    }, e3.webCryptoDecrypt = function(t4, e4, r3) {
      var a3 = this, s3 = this.subtle;
      return this.key === e4 && this.fastAesKey || (this.key = e4, this.fastAesKey = new n2.default(s3, e4)), this.fastAesKey.expandKey().then(function(e5) {
        return s3 ? new i2.default(s3, r3).decrypt(t4.buffer, e5) : Promise.reject(new Error("web crypto not initialized"));
      }).catch(function(i3) {
        return a3.onWebCryptoError(i3, t4, e4, r3);
      });
    }, e3.onWebCryptoError = function(t4, e4, r3, i3) {
      return s2.logger.warn("[decrypter.ts]: WebCrypto Error, disable WebCrypto API:", t4), this.config.enableSoftwareAES = true, this.logEnabled = true, this.softwareDecrypt(e4, r3, i3);
    }, e3.getValidChunk = function(t4) {
      var e4 = t4, r3 = t4.length - t4.length % 16;
      return r3 !== t4.length && (e4 = Object(l2.sliceUint8)(t4, 0, r3), this.remainderData = Object(l2.sliceUint8)(t4, r3)), e4;
    }, e3.logOnce = function(t4) {
      this.logEnabled && (s2.logger.log("[decrypter.ts]: " + t4), this.logEnabled = false);
    }, t3;
  }();
}, "./src/crypt/fast-aes-key.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "default", function() {
    return i2;
  });
  var i2 = function() {
    function t3(t4, e3) {
      this.subtle = void 0, this.key = void 0, this.subtle = t4, this.key = e3;
    }
    return t3.prototype.expandKey = function() {
      return this.subtle.importKey("raw", this.key, { name: "AES-CBC" }, false, ["encrypt", "decrypt"]);
    }, t3;
  }();
}, "./src/demux/aacdemuxer.ts": function(t2, e2, r2) {
  r2.r(e2);
  var i2 = r2("./src/demux/base-audio-demuxer.ts"), n2 = r2("./src/demux/adts.ts"), a2 = r2("./src/utils/logger.ts"), s2 = r2("./src/demux/id3.ts");
  function o2(t3, e3) {
    return (o2 = Object.setPrototypeOf || function(t4, e4) {
      return t4.__proto__ = e4, t4;
    })(t3, e3);
  }
  var l2 = function(t3) {
    var e3, r3;
    function i3(e4, r4) {
      var i4;
      return (i4 = t3.call(this) || this).observer = void 0, i4.config = void 0, i4.observer = e4, i4.config = r4, i4;
    }
    r3 = t3, (e3 = i3).prototype = Object.create(r3.prototype), e3.prototype.constructor = e3, o2(e3, r3);
    var l3 = i3.prototype;
    return l3.resetInitSegment = function(e4, r4, i4) {
      t3.prototype.resetInitSegment.call(this, e4, r4, i4), this._audioTrack = { container: "audio/adts", type: "audio", id: 0, pid: -1, sequenceNumber: 0, isAAC: true, samples: [], manifestCodec: e4, duration: i4, inputTimeScale: 9e4, dropped: 0 };
    }, i3.probe = function(t4) {
      if (!t4)
        return false;
      for (var e4 = (s2.getID3Data(t4, 0) || []).length, r4 = t4.length; e4 < r4; e4++)
        if (n2.probe(t4, e4))
          return a2.logger.log("ADTS sync word found !"), true;
      return false;
    }, l3.canParse = function(t4, e4) {
      return n2.canParse(t4, e4);
    }, l3.appendFrame = function(t4, e4, r4) {
      n2.initTrackConfig(t4, this.observer, e4, r4, t4.manifestCodec);
      var i4 = n2.appendFrame(t4, e4, r4, this.initPTS, this.frameIndex);
      if (i4 && 0 === i4.missing)
        return i4;
    }, i3;
  }(i2.default);
  l2.minProbeByteLength = 9, e2.default = l2;
}, "./src/demux/adts.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "getAudioConfig", function() {
    return s2;
  }), r2.d(e2, "isHeaderPattern", function() {
    return o2;
  }), r2.d(e2, "getHeaderLength", function() {
    return l2;
  }), r2.d(e2, "getFullFrameLength", function() {
    return u;
  }), r2.d(e2, "canGetFrameLength", function() {
    return d;
  }), r2.d(e2, "isHeader", function() {
    return c;
  }), r2.d(e2, "canParse", function() {
    return h;
  }), r2.d(e2, "probe", function() {
    return f;
  }), r2.d(e2, "initTrackConfig", function() {
    return g;
  }), r2.d(e2, "getFrameDuration", function() {
    return v;
  }), r2.d(e2, "parseFrameHeader", function() {
    return p;
  }), r2.d(e2, "appendFrame", function() {
    return m;
  });
  var i2 = r2("./src/utils/logger.ts"), n2 = r2("./src/errors.ts"), a2 = r2("./src/events.ts");
  function s2(t3, e3, r3, s3) {
    var o3, l3, u2, d2, c2 = navigator.userAgent.toLowerCase(), h2 = s3, f2 = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
    o3 = 1 + ((192 & e3[r3 + 2]) >>> 6);
    var g2 = (60 & e3[r3 + 2]) >>> 2;
    if (!(g2 > f2.length - 1))
      return u2 = (1 & e3[r3 + 2]) << 2, u2 |= (192 & e3[r3 + 3]) >>> 6, i2.logger.log("manifest codec:" + s3 + ", ADTS type:" + o3 + ", samplingIndex:" + g2), /firefox/i.test(c2) ? g2 >= 6 ? (o3 = 5, d2 = new Array(4), l3 = g2 - 3) : (o3 = 2, d2 = new Array(2), l3 = g2) : -1 !== c2.indexOf("android") ? (o3 = 2, d2 = new Array(2), l3 = g2) : (o3 = 5, d2 = new Array(4), s3 && (-1 !== s3.indexOf("mp4a.40.29") || -1 !== s3.indexOf("mp4a.40.5")) || !s3 && g2 >= 6 ? l3 = g2 - 3 : ((s3 && -1 !== s3.indexOf("mp4a.40.2") && (g2 >= 6 && 1 === u2 || /vivaldi/i.test(c2)) || !s3 && 1 === u2) && (o3 = 2, d2 = new Array(2)), l3 = g2)), d2[0] = o3 << 3, d2[0] |= (14 & g2) >> 1, d2[1] |= (1 & g2) << 7, d2[1] |= u2 << 3, 5 === o3 && (d2[1] |= (14 & l3) >> 1, d2[2] = (1 & l3) << 7, d2[2] |= 8, d2[3] = 0), { config: d2, samplerate: f2[g2], channelCount: u2, codec: "mp4a.40." + o3, manifestCodec: h2 };
    t3.trigger(a2.Events.ERROR, { type: n2.ErrorTypes.MEDIA_ERROR, details: n2.ErrorDetails.FRAG_PARSING_ERROR, fatal: true, reason: "invalid ADTS sampling index:" + g2 });
  }
  function o2(t3, e3) {
    return 255 === t3[e3] && 240 == (246 & t3[e3 + 1]);
  }
  function l2(t3, e3) {
    return 1 & t3[e3 + 1] ? 7 : 9;
  }
  function u(t3, e3) {
    return (3 & t3[e3 + 3]) << 11 | t3[e3 + 4] << 3 | (224 & t3[e3 + 5]) >>> 5;
  }
  function d(t3, e3) {
    return e3 + 5 < t3.length;
  }
  function c(t3, e3) {
    return e3 + 1 < t3.length && o2(t3, e3);
  }
  function h(t3, e3) {
    return d(t3, e3) && o2(t3, e3) && u(t3, e3) <= t3.length - e3;
  }
  function f(t3, e3) {
    if (c(t3, e3)) {
      var r3 = l2(t3, e3);
      if (e3 + r3 >= t3.length)
        return false;
      var i3 = u(t3, e3);
      if (i3 <= r3)
        return false;
      var n3 = e3 + i3;
      return n3 === t3.length || c(t3, n3);
    }
    return false;
  }
  function g(t3, e3, r3, n3, a3) {
    if (!t3.samplerate) {
      var o3 = s2(e3, r3, n3, a3);
      if (!o3)
        return;
      t3.config = o3.config, t3.samplerate = o3.samplerate, t3.channelCount = o3.channelCount, t3.codec = o3.codec, t3.manifestCodec = o3.manifestCodec, i2.logger.log("parsed codec:" + t3.codec + ", rate:" + o3.samplerate + ", channels:" + o3.channelCount);
    }
  }
  function v(t3) {
    return 9216e4 / t3;
  }
  function p(t3, e3, r3, i3, n3) {
    var a3 = l2(t3, e3), s3 = u(t3, e3);
    if ((s3 -= a3) > 0)
      return { headerLength: a3, frameLength: s3, stamp: r3 + i3 * n3 };
  }
  function m(t3, e3, r3, i3, n3) {
    var a3 = p(e3, r3, i3, n3, v(t3.samplerate));
    if (a3) {
      var s3, o3 = a3.frameLength, l3 = a3.headerLength, u2 = a3.stamp, d2 = l3 + o3, c2 = Math.max(0, r3 + d2 - e3.length);
      c2 ? (s3 = new Uint8Array(d2 - l3)).set(e3.subarray(r3 + l3, e3.length), 0) : s3 = e3.subarray(r3 + l3, r3 + d2);
      var h2 = { unit: s3, pts: u2 };
      return c2 || t3.samples.push(h2), { sample: h2, length: d2, missing: c2 };
    }
  }
}, "./src/demux/base-audio-demuxer.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "initPTSFn", function() {
    return u;
  });
  var i2 = r2("./src/polyfills/number.ts"), n2 = r2("./src/demux/id3.ts"), a2 = r2("./src/demux/dummy-demuxed-track.ts"), s2 = r2("./src/utils/mp4-tools.ts"), o2 = r2("./src/utils/typed-array.ts"), l2 = function() {
    function t3() {
      this._audioTrack = void 0, this._id3Track = void 0, this.frameIndex = 0, this.cachedData = null, this.initPTS = null;
    }
    var e3 = t3.prototype;
    return e3.resetInitSegment = function(t4, e4, r3) {
      this._id3Track = { type: "id3", id: 0, pid: -1, inputTimeScale: 9e4, sequenceNumber: 0, samples: [], dropped: 0 };
    }, e3.resetTimeStamp = function() {
    }, e3.resetContiguity = function() {
    }, e3.canParse = function(t4, e4) {
      return false;
    }, e3.appendFrame = function(t4, e4, r3) {
    }, e3.demux = function(t4, e4) {
      this.cachedData && (t4 = Object(s2.appendUint8Array)(this.cachedData, t4), this.cachedData = null);
      var r3, i3, l3 = n2.getID3Data(t4, 0), d = l3 ? l3.length : 0, c = this._audioTrack, h = this._id3Track, f = l3 ? n2.getTimeStamp(l3) : void 0, g = t4.length;
      for (0 !== this.frameIndex && null !== this.initPTS || (this.initPTS = u(f, e4)), l3 && l3.length > 0 && h.samples.push({ pts: this.initPTS, dts: this.initPTS, data: l3 }), i3 = this.initPTS; d < g; ) {
        if (this.canParse(t4, d)) {
          var v = this.appendFrame(c, t4, d);
          v ? (this.frameIndex++, i3 = v.sample.pts, r3 = d += v.length) : d = g;
        } else
          n2.canParse(t4, d) ? (l3 = n2.getID3Data(t4, d), h.samples.push({ pts: i3, dts: i3, data: l3 }), r3 = d += l3.length) : d++;
        if (d === g && r3 !== g) {
          var p = Object(o2.sliceUint8)(t4, r3);
          this.cachedData ? this.cachedData = Object(s2.appendUint8Array)(this.cachedData, p) : this.cachedData = p;
        }
      }
      return { audioTrack: c, avcTrack: Object(a2.dummyTrack)(), id3Track: h, textTrack: Object(a2.dummyTrack)() };
    }, e3.demuxSampleAes = function(t4, e4, r3) {
      return Promise.reject(new Error("[" + this + "] This demuxer does not support Sample-AES decryption"));
    }, e3.flush = function(t4) {
      var e4 = this.cachedData;
      return e4 && (this.cachedData = null, this.demux(e4, 0)), this.frameIndex = 0, { audioTrack: this._audioTrack, avcTrack: Object(a2.dummyTrack)(), id3Track: this._id3Track, textTrack: Object(a2.dummyTrack)() };
    }, e3.destroy = function() {
    }, t3;
  }(), u = function(t3, e3) {
    return Object(i2.isFiniteNumber)(t3) ? 90 * t3 : 9e4 * e3;
  };
  e2.default = l2;
}, "./src/demux/chunk-cache.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "default", function() {
    return i2;
  });
  var i2 = function() {
    function t3() {
      this.chunks = [], this.dataLength = 0;
    }
    var e3 = t3.prototype;
    return e3.push = function(t4) {
      this.chunks.push(t4), this.dataLength += t4.length;
    }, e3.flush = function() {
      var t4, e4 = this.chunks, r3 = this.dataLength;
      return e4.length ? (t4 = 1 === e4.length ? e4[0] : function(t5, e5) {
        for (var r4 = new Uint8Array(e5), i3 = 0, n2 = 0; n2 < t5.length; n2++) {
          var a2 = t5[n2];
          r4.set(a2, i3), i3 += a2.length;
        }
        return r4;
      }(e4, r3), this.reset(), t4) : new Uint8Array(0);
    }, e3.reset = function() {
      this.chunks.length = 0, this.dataLength = 0;
    }, t3;
  }();
}, "./src/demux/dummy-demuxed-track.ts": function(t2, e2, r2) {
  function i2() {
    return { type: "", id: -1, pid: -1, inputTimeScale: 9e4, sequenceNumber: -1, samples: [], dropped: 0 };
  }
  r2.r(e2), r2.d(e2, "dummyTrack", function() {
    return i2;
  });
}, "./src/demux/exp-golomb.ts": function(t2, e2, r2) {
  r2.r(e2);
  var i2 = r2("./src/utils/logger.ts"), n2 = function() {
    function t3(t4) {
      this.data = void 0, this.bytesAvailable = void 0, this.word = void 0, this.bitsAvailable = void 0, this.data = t4, this.bytesAvailable = t4.byteLength, this.word = 0, this.bitsAvailable = 0;
    }
    var e3 = t3.prototype;
    return e3.loadWord = function() {
      var t4 = this.data, e4 = this.bytesAvailable, r3 = t4.byteLength - e4, i3 = new Uint8Array(4), n3 = Math.min(4, e4);
      if (0 === n3)
        throw new Error("no bytes available");
      i3.set(t4.subarray(r3, r3 + n3)), this.word = new DataView(i3.buffer).getUint32(0), this.bitsAvailable = 8 * n3, this.bytesAvailable -= n3;
    }, e3.skipBits = function(t4) {
      var e4;
      this.bitsAvailable > t4 ? (this.word <<= t4, this.bitsAvailable -= t4) : (t4 -= this.bitsAvailable, t4 -= (e4 = t4 >> 3) >> 3, this.bytesAvailable -= e4, this.loadWord(), this.word <<= t4, this.bitsAvailable -= t4);
    }, e3.readBits = function(t4) {
      var e4 = Math.min(this.bitsAvailable, t4), r3 = this.word >>> 32 - e4;
      return t4 > 32 && i2.logger.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= e4, this.bitsAvailable > 0 ? this.word <<= e4 : this.bytesAvailable > 0 && this.loadWord(), (e4 = t4 - e4) > 0 && this.bitsAvailable ? r3 << e4 | this.readBits(e4) : r3;
    }, e3.skipLZ = function() {
      var t4;
      for (t4 = 0; t4 < this.bitsAvailable; ++t4)
        if (0 != (this.word & 2147483648 >>> t4))
          return this.word <<= t4, this.bitsAvailable -= t4, t4;
      return this.loadWord(), t4 + this.skipLZ();
    }, e3.skipUEG = function() {
      this.skipBits(1 + this.skipLZ());
    }, e3.skipEG = function() {
      this.skipBits(1 + this.skipLZ());
    }, e3.readUEG = function() {
      var t4 = this.skipLZ();
      return this.readBits(t4 + 1) - 1;
    }, e3.readEG = function() {
      var t4 = this.readUEG();
      return 1 & t4 ? 1 + t4 >>> 1 : -1 * (t4 >>> 1);
    }, e3.readBoolean = function() {
      return 1 === this.readBits(1);
    }, e3.readUByte = function() {
      return this.readBits(8);
    }, e3.readUShort = function() {
      return this.readBits(16);
    }, e3.readUInt = function() {
      return this.readBits(32);
    }, e3.skipScalingList = function(t4) {
      for (var e4 = 8, r3 = 8, i3 = 0; i3 < t4; i3++)
        0 !== r3 && (r3 = (e4 + this.readEG() + 256) % 256), e4 = 0 === r3 ? e4 : r3;
    }, e3.readSPS = function() {
      var t4, e4, r3, i3 = 0, n3 = 0, a2 = 0, s2 = 0, o2 = this.readUByte.bind(this), l2 = this.readBits.bind(this), u = this.readUEG.bind(this), d = this.readBoolean.bind(this), c = this.skipBits.bind(this), h = this.skipEG.bind(this), f = this.skipUEG.bind(this), g = this.skipScalingList.bind(this);
      o2();
      var v = o2();
      if (l2(5), c(3), o2(), f(), 100 === v || 110 === v || 122 === v || 244 === v || 44 === v || 83 === v || 86 === v || 118 === v || 128 === v) {
        var p = u();
        if (3 === p && c(1), f(), f(), c(1), d())
          for (e4 = 3 !== p ? 8 : 12, r3 = 0; r3 < e4; r3++)
            d() && g(r3 < 6 ? 16 : 64);
      }
      f();
      var m = u();
      if (0 === m)
        u();
      else if (1 === m)
        for (c(1), h(), h(), t4 = u(), r3 = 0; r3 < t4; r3++)
          h();
      f(), c(1);
      var y = u(), E = u(), T = l2(1);
      0 === T && c(1), c(1), d() && (i3 = u(), n3 = u(), a2 = u(), s2 = u());
      var S = [1, 1];
      if (d() && d())
        switch (o2()) {
          case 1:
            S = [1, 1];
            break;
          case 2:
            S = [12, 11];
            break;
          case 3:
            S = [10, 11];
            break;
          case 4:
            S = [16, 11];
            break;
          case 5:
            S = [40, 33];
            break;
          case 6:
            S = [24, 11];
            break;
          case 7:
            S = [20, 11];
            break;
          case 8:
            S = [32, 11];
            break;
          case 9:
            S = [80, 33];
            break;
          case 10:
            S = [18, 11];
            break;
          case 11:
            S = [15, 11];
            break;
          case 12:
            S = [64, 33];
            break;
          case 13:
            S = [160, 99];
            break;
          case 14:
            S = [4, 3];
            break;
          case 15:
            S = [3, 2];
            break;
          case 16:
            S = [2, 1];
            break;
          case 255:
            S = [o2() << 8 | o2(), o2() << 8 | o2()];
        }
      return { width: Math.ceil(16 * (y + 1) - 2 * i3 - 2 * n3), height: (2 - T) * (E + 1) * 16 - (T ? 2 : 4) * (a2 + s2), pixelRatio: S };
    }, e3.readSliceType = function() {
      return this.readUByte(), this.readUEG(), this.readUEG();
    }, t3;
  }();
  e2.default = n2;
}, "./src/demux/id3.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "isHeader", function() {
    return n2;
  }), r2.d(e2, "isFooter", function() {
    return a2;
  }), r2.d(e2, "getID3Data", function() {
    return s2;
  }), r2.d(e2, "canParse", function() {
    return l2;
  }), r2.d(e2, "getTimeStamp", function() {
    return u;
  }), r2.d(e2, "isTimeStampFrame", function() {
    return d;
  }), r2.d(e2, "getID3Frames", function() {
    return h;
  }), r2.d(e2, "decodeFrame", function() {
    return f;
  }), r2.d(e2, "utf8ArrayToStr", function() {
    return y;
  }), r2.d(e2, "testables", function() {
    return E;
  });
  var i2, n2 = function(t3, e3) {
    return e3 + 10 <= t3.length && 73 === t3[e3] && 68 === t3[e3 + 1] && 51 === t3[e3 + 2] && t3[e3 + 3] < 255 && t3[e3 + 4] < 255 && t3[e3 + 6] < 128 && t3[e3 + 7] < 128 && t3[e3 + 8] < 128 && t3[e3 + 9] < 128;
  }, a2 = function(t3, e3) {
    return e3 + 10 <= t3.length && 51 === t3[e3] && 68 === t3[e3 + 1] && 73 === t3[e3 + 2] && t3[e3 + 3] < 255 && t3[e3 + 4] < 255 && t3[e3 + 6] < 128 && t3[e3 + 7] < 128 && t3[e3 + 8] < 128 && t3[e3 + 9] < 128;
  }, s2 = function(t3, e3) {
    for (var r3 = e3, i3 = 0; n2(t3, e3); )
      i3 += 10, i3 += o2(t3, e3 + 6), a2(t3, e3 + 10) && (i3 += 10), e3 += i3;
    if (i3 > 0)
      return t3.subarray(r3, r3 + i3);
  }, o2 = function(t3, e3) {
    var r3 = 0;
    return r3 = (127 & t3[e3]) << 21, r3 |= (127 & t3[e3 + 1]) << 14, r3 |= (127 & t3[e3 + 2]) << 7, r3 |= 127 & t3[e3 + 3];
  }, l2 = function(t3, e3) {
    return n2(t3, e3) && o2(t3, e3 + 6) + 10 <= t3.length - e3;
  }, u = function(t3) {
    for (var e3 = h(t3), r3 = 0; r3 < e3.length; r3++) {
      var i3 = e3[r3];
      if (d(i3))
        return m(i3);
    }
  }, d = function(t3) {
    return t3 && "PRIV" === t3.key && "com.apple.streaming.transportStreamTimestamp" === t3.info;
  }, c = function(t3) {
    var e3 = String.fromCharCode(t3[0], t3[1], t3[2], t3[3]), r3 = o2(t3, 4);
    return { type: e3, size: r3, data: t3.subarray(10, 10 + r3) };
  }, h = function(t3) {
    for (var e3 = 0, r3 = []; n2(t3, e3); ) {
      for (var i3 = o2(t3, e3 + 6), s3 = (e3 += 10) + i3; e3 + 8 < s3; ) {
        var l3 = c(t3.subarray(e3)), u2 = f(l3);
        u2 && r3.push(u2), e3 += l3.size + 10;
      }
      a2(t3, e3) && (e3 += 10);
    }
    return r3;
  }, f = function(t3) {
    return "PRIV" === t3.type ? g(t3) : "W" === t3.type[0] ? p(t3) : v(t3);
  }, g = function(t3) {
    if (!(t3.size < 2)) {
      var e3 = y(t3.data, true), r3 = new Uint8Array(t3.data.subarray(e3.length + 1));
      return { key: t3.type, info: e3, data: r3.buffer };
    }
  }, v = function(t3) {
    if (!(t3.size < 2)) {
      if ("TXXX" === t3.type) {
        var e3 = 1, r3 = y(t3.data.subarray(e3), true);
        e3 += r3.length + 1;
        var i3 = y(t3.data.subarray(e3));
        return { key: t3.type, info: r3, data: i3 };
      }
      var n3 = y(t3.data.subarray(1));
      return { key: t3.type, data: n3 };
    }
  }, p = function(t3) {
    if ("WXXX" === t3.type) {
      if (t3.size < 2)
        return;
      var e3 = 1, r3 = y(t3.data.subarray(e3), true);
      e3 += r3.length + 1;
      var i3 = y(t3.data.subarray(e3));
      return { key: t3.type, info: r3, data: i3 };
    }
    var n3 = y(t3.data);
    return { key: t3.type, data: n3 };
  }, m = function(t3) {
    if (8 === t3.data.byteLength) {
      var e3 = new Uint8Array(t3.data), r3 = 1 & e3[3], i3 = (e3[4] << 23) + (e3[5] << 15) + (e3[6] << 7) + e3[7];
      return i3 /= 45, r3 && (i3 += 4772185884e-2), Math.round(i3);
    }
  }, y = function(t3, e3) {
    void 0 === e3 && (e3 = false);
    var r3 = (i2 || void 0 === self.TextDecoder || (i2 = new self.TextDecoder("utf-8")), i2);
    if (r3) {
      var n3 = r3.decode(t3);
      if (e3) {
        var a3 = n3.indexOf("\0");
        return -1 !== a3 ? n3.substring(0, a3) : n3;
      }
      return n3.replace(/\0/g, "");
    }
    for (var s3, o3, l3, u2 = t3.length, d2 = "", c2 = 0; c2 < u2; ) {
      if (0 === (s3 = t3[c2++]) && e3)
        return d2;
      if (0 !== s3 && 3 !== s3)
        switch (s3 >> 4) {
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
            d2 += String.fromCharCode(s3);
            break;
          case 12:
          case 13:
            o3 = t3[c2++], d2 += String.fromCharCode((31 & s3) << 6 | 63 & o3);
            break;
          case 14:
            o3 = t3[c2++], l3 = t3[c2++], d2 += String.fromCharCode((15 & s3) << 12 | (63 & o3) << 6 | (63 & l3) << 0);
        }
    }
    return d2;
  }, E = { decodeTextFrame: v };
}, "./src/demux/mp3demuxer.ts": function(t2, e2, r2) {
  r2.r(e2);
  var i2 = r2("./src/demux/base-audio-demuxer.ts"), n2 = r2("./src/demux/id3.ts"), a2 = r2("./src/utils/logger.ts"), s2 = r2("./src/demux/mpegaudio.ts");
  function o2(t3, e3) {
    return (o2 = Object.setPrototypeOf || function(t4, e4) {
      return t4.__proto__ = e4, t4;
    })(t3, e3);
  }
  var l2 = function(t3) {
    var e3, r3;
    function i3() {
      return t3.apply(this, arguments) || this;
    }
    r3 = t3, (e3 = i3).prototype = Object.create(r3.prototype), e3.prototype.constructor = e3, o2(e3, r3);
    var l3 = i3.prototype;
    return l3.resetInitSegment = function(e4, r4, i4) {
      t3.prototype.resetInitSegment.call(this, e4, r4, i4), this._audioTrack = { container: "audio/mpeg", type: "audio", id: 0, pid: -1, sequenceNumber: 0, isAAC: false, samples: [], manifestCodec: e4, duration: i4, inputTimeScale: 9e4, dropped: 0 };
    }, i3.probe = function(t4) {
      if (!t4)
        return false;
      for (var e4 = (n2.getID3Data(t4, 0) || []).length, r4 = t4.length; e4 < r4; e4++)
        if (s2.probe(t4, e4))
          return a2.logger.log("MPEG Audio sync word found !"), true;
      return false;
    }, l3.canParse = function(t4, e4) {
      return s2.canParse(t4, e4);
    }, l3.appendFrame = function(t4, e4, r4) {
      if (null !== this.initPTS)
        return s2.appendFrame(t4, e4, r4, this.initPTS, this.frameIndex);
    }, i3;
  }(i2.default);
  l2.minProbeByteLength = 4, e2.default = l2;
}, "./src/demux/mp4demuxer.ts": function(t2, e2, r2) {
  r2.r(e2);
  var i2 = r2("./src/utils/mp4-tools.ts"), n2 = r2("./src/demux/dummy-demuxed-track.ts"), a2 = function() {
    function t3(t4, e4) {
      this.remainderData = null, this.config = void 0, this.config = e4;
    }
    var e3 = t3.prototype;
    return e3.resetTimeStamp = function() {
    }, e3.resetInitSegment = function() {
    }, e3.resetContiguity = function() {
    }, t3.probe = function(t4) {
      return Object(i2.findBox)({ data: t4, start: 0, end: Math.min(t4.length, 16384) }, ["moof"]).length > 0;
    }, e3.demux = function(t4) {
      var e4 = t4, r3 = Object(n2.dummyTrack)();
      if (this.config.progressive) {
        this.remainderData && (e4 = Object(i2.appendUint8Array)(this.remainderData, t4));
        var a3 = Object(i2.segmentValidRange)(e4);
        this.remainderData = a3.remainder, r3.samples = a3.valid || new Uint8Array();
      } else
        r3.samples = e4;
      return { audioTrack: Object(n2.dummyTrack)(), avcTrack: r3, id3Track: Object(n2.dummyTrack)(), textTrack: Object(n2.dummyTrack)() };
    }, e3.flush = function() {
      var t4 = Object(n2.dummyTrack)();
      return t4.samples = this.remainderData || new Uint8Array(), this.remainderData = null, { audioTrack: Object(n2.dummyTrack)(), avcTrack: t4, id3Track: Object(n2.dummyTrack)(), textTrack: Object(n2.dummyTrack)() };
    }, e3.demuxSampleAes = function(t4, e4, r3) {
      return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"));
    }, e3.destroy = function() {
    }, t3;
  }();
  a2.minProbeByteLength = 1024, e2.default = a2;
}, "./src/demux/mpegaudio.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "appendFrame", function() {
    return l2;
  }), r2.d(e2, "parseHeader", function() {
    return u;
  }), r2.d(e2, "isHeaderPattern", function() {
    return d;
  }), r2.d(e2, "isHeader", function() {
    return c;
  }), r2.d(e2, "canParse", function() {
    return h;
  }), r2.d(e2, "probe", function() {
    return f;
  });
  var i2 = null, n2 = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160], a2 = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3], s2 = [[0, 72, 144, 12], [0, 0, 0, 0], [0, 72, 144, 12], [0, 144, 144, 12]], o2 = [0, 1, 1, 4];
  function l2(t3, e3, r3, i3, n3) {
    if (!(r3 + 24 > e3.length)) {
      var a3 = u(e3, r3);
      if (a3 && r3 + a3.frameLength <= e3.length) {
        var s3 = i3 + n3 * (9e4 * a3.samplesPerFrame / a3.sampleRate), o3 = { unit: e3.subarray(r3, r3 + a3.frameLength), pts: s3, dts: s3 };
        return t3.config = [], t3.channelCount = a3.channelCount, t3.samplerate = a3.sampleRate, t3.samples.push(o3), { sample: o3, length: a3.frameLength, missing: 0 };
      }
    }
  }
  function u(t3, e3) {
    var r3 = t3[e3 + 1] >> 3 & 3, l3 = t3[e3 + 1] >> 1 & 3, u2 = t3[e3 + 2] >> 4 & 15, d2 = t3[e3 + 2] >> 2 & 3;
    if (1 !== r3 && 0 !== u2 && 15 !== u2 && 3 !== d2) {
      var c2 = t3[e3 + 2] >> 1 & 1, h2 = t3[e3 + 3] >> 6, f2 = 1e3 * n2[14 * (3 === r3 ? 3 - l3 : 3 === l3 ? 3 : 4) + u2 - 1], g = a2[3 * (3 === r3 ? 0 : 2 === r3 ? 1 : 2) + d2], v = 3 === h2 ? 1 : 2, p = s2[r3][l3], m = o2[l3], y = 8 * p * m, E = Math.floor(p * f2 / g + c2) * m;
      if (null === i2) {
        var T = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
        i2 = T ? parseInt(T[1]) : 0;
      }
      return !!i2 && i2 <= 87 && 2 === l3 && f2 >= 224e3 && 0 === h2 && (t3[e3 + 3] = 128 | t3[e3 + 3]), { sampleRate: g, channelCount: v, frameLength: E, samplesPerFrame: y };
    }
  }
  function d(t3, e3) {
    return 255 === t3[e3] && 224 == (224 & t3[e3 + 1]) && 0 != (6 & t3[e3 + 1]);
  }
  function c(t3, e3) {
    return e3 + 1 < t3.length && d(t3, e3);
  }
  function h(t3, e3) {
    return d(t3, e3) && 4 <= t3.length - e3;
  }
  function f(t3, e3) {
    if (e3 + 1 < t3.length && d(t3, e3)) {
      var r3 = u(t3, e3), i3 = 4;
      null != r3 && r3.frameLength && (i3 = r3.frameLength);
      var n3 = e3 + i3;
      return n3 === t3.length || c(t3, n3);
    }
    return false;
  }
}, "./src/demux/sample-aes.ts": function(t2, e2, r2) {
  r2.r(e2);
  var i2 = r2("./src/crypt/decrypter.ts"), n2 = r2("./src/demux/tsdemuxer.ts"), a2 = function() {
    function t3(t4, e4, r3) {
      this.keyData = void 0, this.decrypter = void 0, this.keyData = r3, this.decrypter = new i2.default(t4, e4, { removePKCS7Padding: false });
    }
    var e3 = t3.prototype;
    return e3.decryptBuffer = function(t4, e4) {
      this.decrypter.decrypt(t4, this.keyData.key.buffer, this.keyData.iv.buffer, e4);
    }, e3.decryptAacSample = function(t4, e4, r3, i3) {
      var n3 = t4[e4].unit, a3 = n3.subarray(16, n3.length - n3.length % 16), s2 = a3.buffer.slice(a3.byteOffset, a3.byteOffset + a3.length), o2 = this;
      this.decryptBuffer(s2, function(a4) {
        var s3 = new Uint8Array(a4);
        n3.set(s3, 16), i3 || o2.decryptAacSamples(t4, e4 + 1, r3);
      });
    }, e3.decryptAacSamples = function(t4, e4, r3) {
      for (; ; e4++) {
        if (e4 >= t4.length)
          return void r3();
        if (!(t4[e4].unit.length < 32)) {
          var i3 = this.decrypter.isSync();
          if (this.decryptAacSample(t4, e4, r3, i3), !i3)
            return;
        }
      }
    }, e3.getAvcEncryptedData = function(t4) {
      for (var e4 = 16 * Math.floor((t4.length - 48) / 160) + 16, r3 = new Int8Array(e4), i3 = 0, n3 = 32; n3 <= t4.length - 16; n3 += 160, i3 += 16)
        r3.set(t4.subarray(n3, n3 + 16), i3);
      return r3;
    }, e3.getAvcDecryptedUnit = function(t4, e4) {
      for (var r3 = new Uint8Array(e4), i3 = 0, n3 = 32; n3 <= t4.length - 16; n3 += 160, i3 += 16)
        t4.set(r3.subarray(i3, i3 + 16), n3);
      return t4;
    }, e3.decryptAvcSample = function(t4, e4, r3, i3, a3, s2) {
      var o2 = Object(n2.discardEPB)(a3.data), l2 = this.getAvcEncryptedData(o2), u = this;
      this.decryptBuffer(l2.buffer, function(n3) {
        a3.data = u.getAvcDecryptedUnit(o2, n3), s2 || u.decryptAvcSamples(t4, e4, r3 + 1, i3);
      });
    }, e3.decryptAvcSamples = function(t4, e4, r3, i3) {
      if (t4 instanceof Uint8Array)
        throw new Error("Cannot decrypt samples of type Uint8Array");
      for (; ; e4++, r3 = 0) {
        if (e4 >= t4.length)
          return void i3();
        for (var n3 = t4[e4].units; !(r3 >= n3.length); r3++) {
          var a3 = n3[r3];
          if (!(a3.data.length <= 48 || 1 !== a3.type && 5 !== a3.type)) {
            var s2 = this.decrypter.isSync();
            if (this.decryptAvcSample(t4, e4, r3, i3, a3, s2), !s2)
              return;
          }
        }
      }
    }, t3;
  }();
  e2.default = a2;
}, "./src/demux/transmuxer-interface.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "default", function() {
    return c;
  });
  var i2 = r2("./node_modules/webworkify-webpack/index.js"), n2 = r2("./src/events.ts"), a2 = r2("./src/demux/transmuxer.ts"), s2 = r2("./src/utils/logger.ts"), o2 = r2("./src/errors.ts"), l2 = r2("./src/utils/mediasource-helper.ts"), u = r2("./node_modules/eventemitter3/index.js"), d = Object(l2.getMediaSource)() || { isTypeSupported: function() {
    return false;
  } }, c = function() {
    function t3(t4, e4, r3, l3) {
      var c2 = this;
      this.hls = void 0, this.id = void 0, this.observer = void 0, this.frag = null, this.part = null, this.worker = void 0, this.onwmsg = void 0, this.transmuxer = null, this.onTransmuxComplete = void 0, this.onFlush = void 0, this.hls = t4, this.id = e4, this.onTransmuxComplete = r3, this.onFlush = l3;
      var h = t4.config, f = function(e5, r4) {
        (r4 = r4 || {}).frag = c2.frag, r4.id = c2.id, t4.trigger(e5, r4);
      };
      this.observer = new u.EventEmitter(), this.observer.on(n2.Events.FRAG_DECRYPTED, f), this.observer.on(n2.Events.ERROR, f);
      var g = { mp4: d.isTypeSupported("video/mp4"), mpeg: d.isTypeSupported("audio/mpeg"), mp3: d.isTypeSupported('audio/mp4; codecs="mp3"') }, v = navigator.vendor;
      if (h.enableWorker && "undefined" != typeof Worker) {
        var p;
        s2.logger.log("demuxing in webworker");
        try {
          p = this.worker = i2("./src/demux/transmuxer-worker.ts"), this.onwmsg = this.onWorkerMessage.bind(this), p.addEventListener("message", this.onwmsg), p.onerror = function(e5) {
            t4.trigger(n2.Events.ERROR, { type: o2.ErrorTypes.OTHER_ERROR, details: o2.ErrorDetails.INTERNAL_EXCEPTION, fatal: true, event: "demuxerWorker", error: new Error(e5.message + "  (" + e5.filename + ":" + e5.lineno + ")") });
          }, p.postMessage({ cmd: "init", typeSupported: g, vendor: v, id: e4, config: JSON.stringify(h) });
        } catch (m) {
          s2.logger.warn("Error in worker:", m), s2.logger.error("Error while initializing DemuxerWorker, fallback to inline"), p && self.URL.revokeObjectURL(p.objectURL), this.transmuxer = new a2.default(this.observer, g, h, v, e4), this.worker = null;
        }
      } else
        this.transmuxer = new a2.default(this.observer, g, h, v, e4);
    }
    var e3 = t3.prototype;
    return e3.destroy = function() {
      var t4 = this.worker;
      if (t4)
        t4.removeEventListener("message", this.onwmsg), t4.terminate(), this.worker = null;
      else {
        var e4 = this.transmuxer;
        e4 && (e4.destroy(), this.transmuxer = null);
      }
      var r3 = this.observer;
      r3 && r3.removeAllListeners(), this.observer = null;
    }, e3.push = function(t4, e4, r3, i3, n3, o3, l3, u2, d2, c2) {
      var h = this;
      d2.transmuxing.start = self.performance.now();
      var f = this.transmuxer, g = this.worker, v = o3 ? o3.start : n3.start, p = n3.decryptdata, m = this.frag, y = !(m && n3.cc === m.cc), E = !(m && d2.level === m.level), T = m ? d2.sn - m.sn : -1, S = this.part ? d2.part - this.part.index : 1, b = !E && (1 === T || 0 === T && 1 === S), L = self.performance.now();
      (E || T || 0 === n3.stats.parsing.start) && (n3.stats.parsing.start = L), !o3 || !S && b || (o3.stats.parsing.start = L);
      var A = new a2.TransmuxState(y, b, u2, E, v);
      if (!b || y) {
        s2.logger.log("[transmuxer-interface, " + n3.type + "]: Starting new transmux session for sn: " + d2.sn + " p: " + d2.part + " level: " + d2.level + " id: " + d2.id + "\n        discontinuity: " + y + "\n        trackSwitch: " + E + "\n        contiguous: " + b + "\n        accurateTimeOffset: " + u2 + "\n        timeOffset: " + v);
        var D = new a2.TransmuxConfig(r3, i3, e4, l3, c2);
        this.configureTransmuxer(D);
      }
      if (this.frag = n3, this.part = o3, g)
        g.postMessage({ cmd: "demux", data: t4, decryptdata: p, chunkMeta: d2, state: A }, t4 instanceof ArrayBuffer ? [t4] : []);
      else if (f) {
        var k = f.push(t4, p, d2, A);
        Object(a2.isPromise)(k) ? k.then(function(t5) {
          h.handleTransmuxComplete(t5);
        }) : this.handleTransmuxComplete(k);
      }
    }, e3.flush = function(t4) {
      var e4 = this;
      t4.transmuxing.start = self.performance.now();
      var r3 = this.transmuxer, i3 = this.worker;
      if (i3)
        i3.postMessage({ cmd: "flush", chunkMeta: t4 });
      else if (r3) {
        var n3 = r3.flush(t4);
        Object(a2.isPromise)(n3) ? n3.then(function(r4) {
          e4.handleFlushResult(r4, t4);
        }) : this.handleFlushResult(n3, t4);
      }
    }, e3.handleFlushResult = function(t4, e4) {
      var r3 = this;
      t4.forEach(function(t5) {
        r3.handleTransmuxComplete(t5);
      }), this.onFlush(e4);
    }, e3.onWorkerMessage = function(t4) {
      var e4 = t4.data, r3 = this.hls;
      switch (e4.event) {
        case "init":
          self.URL.revokeObjectURL(this.worker.objectURL);
          break;
        case "transmuxComplete":
          this.handleTransmuxComplete(e4.data);
          break;
        case "flush":
          this.onFlush(e4.data);
          break;
        default:
          e4.data = e4.data || {}, e4.data.frag = this.frag, e4.data.id = this.id, r3.trigger(e4.event, e4.data);
      }
    }, e3.configureTransmuxer = function(t4) {
      var e4 = this.worker, r3 = this.transmuxer;
      e4 ? e4.postMessage({ cmd: "configure", config: t4 }) : r3 && r3.configure(t4);
    }, e3.handleTransmuxComplete = function(t4) {
      t4.chunkMeta.transmuxing.end = self.performance.now(), this.onTransmuxComplete(t4);
    }, t3;
  }();
}, "./src/demux/transmuxer-worker.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "default", function() {
    return o2;
  });
  var i2 = r2("./src/demux/transmuxer.ts"), n2 = r2("./src/events.ts"), a2 = r2("./src/utils/logger.ts"), s2 = r2("./node_modules/eventemitter3/index.js");
  function o2(t3) {
    var e3 = new s2.EventEmitter(), r3 = function(e4, r4) {
      t3.postMessage({ event: e4, data: r4 });
    };
    e3.on(n2.Events.FRAG_DECRYPTED, r3), e3.on(n2.Events.ERROR, r3), t3.addEventListener("message", function(n3) {
      var s3 = n3.data;
      switch (s3.cmd) {
        case "init":
          var o3 = JSON.parse(s3.config);
          t3.transmuxer = new i2.default(e3, s3.typeSupported, o3, s3.vendor, s3.id), Object(a2.enableLogs)(o3.debug), r3("init", null);
          break;
        case "configure":
          t3.transmuxer.configure(s3.config);
          break;
        case "demux":
          var u2 = t3.transmuxer.push(s3.data, s3.decryptdata, s3.chunkMeta, s3.state);
          Object(i2.isPromise)(u2) ? u2.then(function(e4) {
            l2(t3, e4);
          }) : l2(t3, u2);
          break;
        case "flush":
          var c = s3.chunkMeta, h = t3.transmuxer.flush(c);
          Object(i2.isPromise)(h) ? h.then(function(e4) {
            d(t3, e4, c);
          }) : d(t3, h, c);
      }
    });
  }
  function l2(t3, e3) {
    if ((r3 = e3.remuxResult).audio || r3.video || r3.text || r3.id3 || r3.initSegment) {
      var r3, i3 = [], n3 = e3.remuxResult, a3 = n3.audio, s3 = n3.video;
      a3 && u(i3, a3), s3 && u(i3, s3), t3.postMessage({ event: "transmuxComplete", data: e3 }, i3);
    }
  }
  function u(t3, e3) {
    e3.data1 && t3.push(e3.data1.buffer), e3.data2 && t3.push(e3.data2.buffer);
  }
  function d(t3, e3, r3) {
    e3.forEach(function(e4) {
      l2(t3, e4);
    }), t3.postMessage({ event: "flush", data: r3 });
  }
}, "./src/demux/transmuxer.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "default", function() {
    return y;
  }), r2.d(e2, "isPromise", function() {
    return T;
  }), r2.d(e2, "TransmuxConfig", function() {
    return S;
  }), r2.d(e2, "TransmuxState", function() {
    return b;
  });
  var i2, n2 = r2("./src/events.ts"), a2 = r2("./src/errors.ts"), s2 = r2("./src/crypt/decrypter.ts"), o2 = r2("./src/demux/aacdemuxer.ts"), l2 = r2("./src/demux/mp4demuxer.ts"), u = r2("./src/demux/tsdemuxer.ts"), d = r2("./src/demux/mp3demuxer.ts"), c = r2("./src/remux/mp4-remuxer.ts"), h = r2("./src/remux/passthrough-remuxer.ts"), f = r2("./src/demux/chunk-cache.ts"), g = r2("./src/utils/mp4-tools.ts"), v = r2("./src/utils/logger.ts");
  try {
    i2 = self.performance.now.bind(self.performance);
  } catch (L) {
    v.logger.debug("Unable to use Performance API on this environment"), i2 = self.Date.now;
  }
  var p = [{ demux: u.default, remux: c.default }, { demux: l2.default, remux: h.default }, { demux: o2.default, remux: c.default }, { demux: d.default, remux: c.default }], m = 1024;
  p.forEach(function(t3) {
    var e3 = t3.demux;
    m = Math.max(m, e3.minProbeByteLength);
  });
  var y = function() {
    function t3(t4, e4, r3, i3, n3) {
      this.observer = void 0, this.typeSupported = void 0, this.config = void 0, this.vendor = void 0, this.id = void 0, this.demuxer = void 0, this.remuxer = void 0, this.decrypter = void 0, this.probe = void 0, this.decryptionPromise = null, this.transmuxConfig = void 0, this.currentTransmuxState = void 0, this.cache = new f.default(), this.observer = t4, this.typeSupported = e4, this.config = r3, this.vendor = i3, this.id = n3;
    }
    var e3 = t3.prototype;
    return e3.configure = function(t4) {
      this.transmuxConfig = t4, this.decrypter && this.decrypter.reset();
    }, e3.push = function(t4, e4, r3, n3) {
      var a3 = this, s3 = r3.transmuxing;
      s3.executeStart = i2();
      var o3 = new Uint8Array(t4), l3 = this.cache, u2 = this.config, d2 = this.currentTransmuxState, c2 = this.transmuxConfig;
      n3 && (this.currentTransmuxState = n3);
      var h2 = function(t5, e5) {
        var r4 = null;
        return t5.byteLength > 0 && null != e5 && null != e5.key && null !== e5.iv && null != e5.method && (r4 = e5), r4;
      }(o3, e4);
      if (h2 && "AES-128" === h2.method) {
        var f2 = this.getDecrypter();
        if (!u2.enableSoftwareAES)
          return this.decryptionPromise = f2.webCryptoDecrypt(o3, h2.key.buffer, h2.iv.buffer).then(function(t5) {
            var e5 = a3.push(t5, null, r3);
            return a3.decryptionPromise = null, e5;
          }), this.decryptionPromise;
        var v2 = f2.softwareDecrypt(o3, h2.key.buffer, h2.iv.buffer);
        if (!v2)
          return s3.executeEnd = i2(), E(r3);
        o3 = new Uint8Array(v2);
      }
      var p2 = n3 || d2, m2 = p2.contiguous, y2 = p2.discontinuity, T2 = p2.trackSwitch, S2 = p2.accurateTimeOffset, b2 = p2.timeOffset, L = c2.audioCodec, A = c2.videoCodec, D = c2.defaultInitPts, k = c2.duration, R = c2.initSegmentData;
      if ((y2 || T2) && this.resetInitSegment(R, L, A, k), y2 && this.resetInitialTimestamp(D), m2 || this.resetContiguity(), this.needsProbing(o3, y2, T2)) {
        if (l3.dataLength) {
          var _ = l3.flush();
          o3 = Object(g.appendUint8Array)(_, o3);
        }
        this.configureTransmuxer(o3, c2);
      }
      var I = this.transmux(o3, h2, b2, S2, r3), C = this.currentTransmuxState;
      return C.contiguous = true, C.discontinuity = false, C.trackSwitch = false, s3.executeEnd = i2(), I;
    }, e3.flush = function(t4) {
      var e4 = this, r3 = t4.transmuxing;
      r3.executeStart = i2();
      var s3 = this.decrypter, o3 = this.cache, l3 = this.currentTransmuxState, u2 = this.decryptionPromise;
      if (u2)
        return u2.then(function() {
          return e4.flush(t4);
        });
      var d2 = [], c2 = l3.timeOffset;
      if (s3) {
        var h2 = s3.flush();
        h2 && d2.push(this.push(h2, null, t4));
      }
      var f2 = o3.dataLength;
      o3.reset();
      var g2 = this.demuxer, v2 = this.remuxer;
      if (!g2 || !v2)
        return f2 >= m && this.observer.emit(n2.Events.ERROR, n2.Events.ERROR, { type: a2.ErrorTypes.MEDIA_ERROR, details: a2.ErrorDetails.FRAG_PARSING_ERROR, fatal: true, reason: "no demux matching with content found" }), r3.executeEnd = i2(), [E(t4)];
      var p2 = g2.flush(c2);
      return T(p2) ? p2.then(function(r4) {
        return e4.flushRemux(d2, r4, t4), d2;
      }) : (this.flushRemux(d2, p2, t4), d2);
    }, e3.flushRemux = function(t4, e4, r3) {
      var n3 = e4.audioTrack, a3 = e4.avcTrack, s3 = e4.id3Track, o3 = e4.textTrack, l3 = this.currentTransmuxState, u2 = l3.accurateTimeOffset, d2 = l3.timeOffset;
      v.logger.log("[transmuxer.ts]: Flushed fragment " + r3.sn + (r3.part > -1 ? " p: " + r3.part : "") + " of level " + r3.level);
      var c2 = this.remuxer.remux(n3, a3, s3, o3, d2, u2, true, this.id);
      t4.push({ remuxResult: c2, chunkMeta: r3 }), r3.transmuxing.executeEnd = i2();
    }, e3.resetInitialTimestamp = function(t4) {
      var e4 = this.demuxer, r3 = this.remuxer;
      e4 && r3 && (e4.resetTimeStamp(t4), r3.resetTimeStamp(t4));
    }, e3.resetContiguity = function() {
      var t4 = this.demuxer, e4 = this.remuxer;
      t4 && e4 && (t4.resetContiguity(), e4.resetNextTimestamp());
    }, e3.resetInitSegment = function(t4, e4, r3, i3) {
      var n3 = this.demuxer, a3 = this.remuxer;
      n3 && a3 && (n3.resetInitSegment(e4, r3, i3), a3.resetInitSegment(t4, e4, r3));
    }, e3.destroy = function() {
      this.demuxer && (this.demuxer.destroy(), this.demuxer = void 0), this.remuxer && (this.remuxer.destroy(), this.remuxer = void 0);
    }, e3.transmux = function(t4, e4, r3, i3, n3) {
      return e4 && "SAMPLE-AES" === e4.method ? this.transmuxSampleAes(t4, e4, r3, i3, n3) : this.transmuxUnencrypted(t4, r3, i3, n3);
    }, e3.transmuxUnencrypted = function(t4, e4, r3, i3) {
      var n3 = this.demuxer.demux(t4, e4, false, !this.config.progressive), a3 = n3.audioTrack, s3 = n3.avcTrack, o3 = n3.id3Track, l3 = n3.textTrack;
      return { remuxResult: this.remuxer.remux(a3, s3, o3, l3, e4, r3, false, this.id), chunkMeta: i3 };
    }, e3.transmuxSampleAes = function(t4, e4, r3, i3, n3) {
      var a3 = this;
      return this.demuxer.demuxSampleAes(t4, e4, r3).then(function(t5) {
        return { remuxResult: a3.remuxer.remux(t5.audioTrack, t5.avcTrack, t5.id3Track, t5.textTrack, r3, i3, false, a3.id), chunkMeta: n3 };
      });
    }, e3.configureTransmuxer = function(t4, e4) {
      for (var r3, i3 = this.config, n3 = this.observer, a3 = this.typeSupported, s3 = this.vendor, o3 = e4.audioCodec, u2 = e4.defaultInitPts, d2 = e4.duration, c2 = e4.initSegmentData, f2 = e4.videoCodec, g2 = 0, m2 = p.length; g2 < m2; g2++)
        if (p[g2].demux.probe(t4)) {
          r3 = p[g2];
          break;
        }
      r3 || (v.logger.warn("Failed to find demuxer by probing frag, treating as mp4 passthrough"), r3 = { demux: l2.default, remux: h.default });
      var y2 = this.demuxer, E2 = this.remuxer, T2 = r3.remux, S2 = r3.demux;
      E2 && E2 instanceof T2 || (this.remuxer = new T2(n3, i3, a3, s3)), y2 && y2 instanceof S2 || (this.demuxer = new S2(n3, i3, a3), this.probe = S2.probe), this.resetInitSegment(c2, o3, f2, d2), this.resetInitialTimestamp(u2);
    }, e3.needsProbing = function(t4, e4, r3) {
      return !this.demuxer || !this.remuxer || e4 || r3;
    }, e3.getDecrypter = function() {
      var t4 = this.decrypter;
      return t4 || (t4 = this.decrypter = new s2.default(this.observer, this.config)), t4;
    }, t3;
  }(), E = function(t3) {
    return { remuxResult: {}, chunkMeta: t3 };
  };
  function T(t3) {
    return "then" in t3 && t3.then instanceof Function;
  }
  var S = function(t3, e3, r3, i3, n3) {
    this.audioCodec = void 0, this.videoCodec = void 0, this.initSegmentData = void 0, this.duration = void 0, this.defaultInitPts = void 0, this.audioCodec = t3, this.videoCodec = e3, this.initSegmentData = r3, this.duration = i3, this.defaultInitPts = n3;
  }, b = function(t3, e3, r3, i3, n3) {
    this.discontinuity = void 0, this.contiguous = void 0, this.accurateTimeOffset = void 0, this.trackSwitch = void 0, this.timeOffset = void 0, this.discontinuity = t3, this.contiguous = e3, this.accurateTimeOffset = r3, this.trackSwitch = i3, this.timeOffset = n3;
  };
}, "./src/demux/tsdemuxer.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "discardEPB", function() {
    return T;
  });
  var i2 = r2("./src/demux/adts.ts"), n2 = r2("./src/demux/mpegaudio.ts"), a2 = r2("./src/demux/exp-golomb.ts"), s2 = r2("./src/demux/id3.ts"), o2 = r2("./src/demux/sample-aes.ts"), l2 = r2("./src/events.ts"), u = r2("./src/utils/mp4-tools.ts"), d = r2("./src/utils/logger.ts"), c = r2("./src/errors.ts"), h = { video: 1, audio: 2, id3: 3, text: 4 }, f = function() {
    function t3(t4, e4, r3) {
      this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.sampleAes = null, this.pmtParsed = false, this.audioCodec = void 0, this.videoCodec = void 0, this._duration = 0, this.aacLastPTS = null, this._initPTS = null, this._initDTS = null, this._pmtId = -1, this._avcTrack = void 0, this._audioTrack = void 0, this._id3Track = void 0, this._txtTrack = void 0, this.aacOverFlow = null, this.avcSample = null, this.remainderData = null, this.observer = t4, this.config = e4, this.typeSupported = r3;
    }
    t3.probe = function(e4) {
      var r3 = t3.syncOffset(e4);
      return !(r3 < 0 || (r3 && d.logger.warn("MPEG2-TS detected but first sync word found @ offset " + r3 + ", junk ahead ?"), 0));
    }, t3.syncOffset = function(t4) {
      for (var e4 = Math.min(1e3, t4.length - 564), r3 = 0; r3 < e4; ) {
        if (71 === t4[r3] && 71 === t4[r3 + 188] && 71 === t4[r3 + 376])
          return r3;
        r3++;
      }
      return -1;
    }, t3.createTrack = function(t4, e4) {
      return { container: "video" === t4 || "audio" === t4 ? "video/mp2t" : void 0, type: t4, id: h[t4], pid: -1, inputTimeScale: 9e4, sequenceNumber: 0, samples: [], dropped: 0, duration: "audio" === t4 ? e4 : void 0 };
    };
    var e3 = t3.prototype;
    return e3.resetInitSegment = function(e4, r3, i3) {
      this.pmtParsed = false, this._pmtId = -1, this._avcTrack = t3.createTrack("video", i3), this._audioTrack = t3.createTrack("audio", i3), this._id3Track = t3.createTrack("id3", i3), this._txtTrack = t3.createTrack("text", i3), this._audioTrack.isAAC = true, this.aacOverFlow = null, this.aacLastPTS = null, this.avcSample = null, this.audioCodec = e4, this.videoCodec = r3, this._duration = i3;
    }, e3.resetTimeStamp = function() {
    }, e3.resetContiguity = function() {
      var t4 = this._audioTrack, e4 = this._avcTrack, r3 = this._id3Track;
      t4 && (t4.pesData = null), e4 && (e4.pesData = null), r3 && (r3.pesData = null), this.aacOverFlow = null, this.aacLastPTS = null;
    }, e3.demux = function(e4, r3, i3, n3) {
      var a3;
      void 0 === i3 && (i3 = false), void 0 === n3 && (n3 = false), i3 || (this.sampleAes = null);
      var s3 = this._avcTrack, o3 = this._audioTrack, h2 = this._id3Track, f2 = s3.pid, g2 = s3.pesData, y2 = o3.pid, E2 = h2.pid, T2 = o3.pesData, S = h2.pesData, b = false, L = this.pmtParsed, A = this._pmtId, D = e4.length;
      if (this.remainderData && (D = (e4 = Object(u.appendUint8Array)(this.remainderData, e4)).length, this.remainderData = null), D < 188 && !n3)
        return this.remainderData = e4, { audioTrack: o3, avcTrack: s3, id3Track: h2, textTrack: this._txtTrack };
      var k = Math.max(0, t3.syncOffset(e4));
      (D -= (D + k) % 188) < e4.byteLength && !n3 && (this.remainderData = new Uint8Array(e4.buffer, D, e4.buffer.byteLength - D));
      for (var R = k; R < D; R += 188)
        if (71 === e4[R]) {
          var _ = !!(64 & e4[R + 1]), I = ((31 & e4[R + 1]) << 8) + e4[R + 2], C = void 0;
          if ((48 & e4[R + 3]) >> 4 > 1) {
            if ((C = R + 5 + e4[R + 4]) === R + 188)
              continue;
          } else
            C = R + 4;
          switch (I) {
            case f2:
              _ && (g2 && (a3 = m(g2)) && this.parseAVCPES(a3, false), g2 = { data: [], size: 0 }), g2 && (g2.data.push(e4.subarray(C, R + 188)), g2.size += R + 188 - C);
              break;
            case y2:
              _ && (T2 && (a3 = m(T2)) && (o3.isAAC ? this.parseAACPES(a3) : this.parseMPEGPES(a3)), T2 = { data: [], size: 0 }), T2 && (T2.data.push(e4.subarray(C, R + 188)), T2.size += R + 188 - C);
              break;
            case E2:
              _ && (S && (a3 = m(S)) && this.parseID3PES(a3), S = { data: [], size: 0 }), S && (S.data.push(e4.subarray(C, R + 188)), S.size += R + 188 - C);
              break;
            case 0:
              _ && (C += e4[C] + 1), A = this._pmtId = v(e4, C);
              break;
            case A:
              _ && (C += e4[C] + 1);
              var w = p(e4, C, true === this.typeSupported.mpeg || true === this.typeSupported.mp3, i3);
              (f2 = w.avc) > 0 && (s3.pid = f2), (y2 = w.audio) > 0 && (o3.pid = y2, o3.isAAC = w.isAAC), (E2 = w.id3) > 0 && (h2.pid = E2), b && !L && (d.logger.log("reparse from beginning"), b = false, R = k - 188), L = this.pmtParsed = true;
              break;
            case 17:
            case 8191:
              break;
            default:
              b = true;
          }
        } else
          this.observer.emit(l2.Events.ERROR, l2.Events.ERROR, { type: c.ErrorTypes.MEDIA_ERROR, details: c.ErrorDetails.FRAG_PARSING_ERROR, fatal: false, reason: "TS packet did not start with 0x47" });
      s3.pesData = g2, o3.pesData = T2, h2.pesData = S;
      var O = { audioTrack: o3, avcTrack: s3, id3Track: h2, textTrack: this._txtTrack };
      return n3 && this.extractRemainingSamples(O), O;
    }, e3.flush = function() {
      var t4, e4 = this.remainderData;
      return this.remainderData = null, t4 = e4 ? this.demux(e4, -1, false, true) : { audioTrack: this._audioTrack, avcTrack: this._avcTrack, textTrack: this._txtTrack, id3Track: this._id3Track }, this.extractRemainingSamples(t4), this.sampleAes ? this.decrypt(t4, this.sampleAes) : t4;
    }, e3.extractRemainingSamples = function(t4) {
      var e4, r3 = t4.audioTrack, i3 = t4.avcTrack, n3 = t4.id3Track, a3 = i3.pesData, s3 = r3.pesData, o3 = n3.pesData;
      a3 && (e4 = m(a3)) ? (this.parseAVCPES(e4, true), i3.pesData = null) : i3.pesData = a3, s3 && (e4 = m(s3)) ? (r3.isAAC ? this.parseAACPES(e4) : this.parseMPEGPES(e4), r3.pesData = null) : (null != s3 && s3.size && d.logger.log("last AAC PES packet truncated,might overlap between fragments"), r3.pesData = s3), o3 && (e4 = m(o3)) ? (this.parseID3PES(e4), n3.pesData = null) : n3.pesData = o3;
    }, e3.demuxSampleAes = function(t4, e4, r3) {
      var i3 = this.demux(t4, r3, true, !this.config.progressive), n3 = this.sampleAes = new o2.default(this.observer, this.config, e4);
      return this.decrypt(i3, n3);
    }, e3.decrypt = function(t4, e4) {
      return new Promise(function(r3) {
        var i3 = t4.audioTrack, n3 = t4.avcTrack;
        i3.samples && i3.isAAC ? e4.decryptAacSamples(i3.samples, 0, function() {
          n3.samples ? e4.decryptAvcSamples(n3.samples, 0, 0, function() {
            r3(t4);
          }) : r3(t4);
        }) : n3.samples && e4.decryptAvcSamples(n3.samples, 0, 0, function() {
          r3(t4);
        });
      });
    }, e3.destroy = function() {
      this._initPTS = this._initDTS = null, this._duration = 0;
    }, e3.parseAVCPES = function(t4, e4) {
      var r3, i3 = this, n3 = this._avcTrack, o3 = this.parseAVCNALu(t4.data), l3 = this.avcSample, u2 = false;
      t4.data = null, l3 && o3.length && !n3.audFound && (y(l3, n3), l3 = this.avcSample = g(false, t4.pts, t4.dts, "")), o3.forEach(function(e5) {
        switch (e5.type) {
          case 1:
            r3 = true, l3 || (l3 = i3.avcSample = g(true, t4.pts, t4.dts, "")), l3.frame = true;
            var o4 = e5.data;
            if (u2 && o4.length > 4) {
              var d2 = new a2.default(o4).readSliceType();
              2 !== d2 && 4 !== d2 && 7 !== d2 && 9 !== d2 || (l3.key = true);
            }
            break;
          case 5:
            r3 = true, l3 || (l3 = i3.avcSample = g(true, t4.pts, t4.dts, "")), l3.key = true, l3.frame = true;
            break;
          case 6:
            r3 = true;
            var c2 = new a2.default(T(e5.data));
            c2.readUByte();
            for (var h2 = 0, f2 = 0, v2 = false, p2 = 0; !v2 && c2.bytesAvailable > 1; ) {
              h2 = 0;
              do {
                h2 += p2 = c2.readUByte();
              } while (255 === p2);
              f2 = 0;
              do {
                f2 += p2 = c2.readUByte();
              } while (255 === p2);
              if (4 === h2 && 0 !== c2.bytesAvailable) {
                if (v2 = true, 181 === c2.readUByte() && 49 === c2.readUShort() && 1195456820 === c2.readUInt() && 3 === c2.readUByte()) {
                  for (var m2 = c2.readUByte(), S = 31 & m2, b = [m2, c2.readUByte()], L = 0; L < S; L++)
                    b.push(c2.readUByte()), b.push(c2.readUByte()), b.push(c2.readUByte());
                  E(i3._txtTrack.samples, { type: 3, pts: t4.pts, bytes: b });
                }
              } else if (5 === h2 && 0 !== c2.bytesAvailable) {
                if (v2 = true, f2 > 16) {
                  for (var A = [], D = 0; D < 16; D++)
                    A.push(c2.readUByte().toString(16)), 3 !== D && 5 !== D && 7 !== D && 9 !== D || A.push("-");
                  for (var k = f2 - 16, R = new Uint8Array(k), _ = 0; _ < k; _++)
                    R[_] = c2.readUByte();
                  E(i3._txtTrack.samples, { pts: t4.pts, payloadType: h2, uuid: A.join(""), userData: Object(s2.utf8ArrayToStr)(R), userDataBytes: R });
                }
              } else if (f2 < c2.bytesAvailable)
                for (var I = 0; I < f2; I++)
                  c2.readUByte();
            }
            break;
          case 7:
            if (r3 = true, u2 = true, !n3.sps) {
              var C = new a2.default(e5.data).readSPS();
              n3.width = C.width, n3.height = C.height, n3.pixelRatio = C.pixelRatio, n3.sps = [e5.data], n3.duration = i3._duration;
              for (var w = e5.data.subarray(1, 4), O = "avc1.", x = 0; x < 3; x++) {
                var P = w[x].toString(16);
                P.length < 2 && (P = "0" + P), O += P;
              }
              n3.codec = O;
            }
            break;
          case 8:
            r3 = true, n3.pps || (n3.pps = [e5.data]);
            break;
          case 9:
            r3 = false, n3.audFound = true, l3 && y(l3, n3), l3 = i3.avcSample = g(false, t4.pts, t4.dts, "");
            break;
          case 12:
            r3 = false;
            break;
          default:
            r3 = false, l3 && (l3.debug += "unknown NAL " + e5.type + " ");
        }
        l3 && r3 && l3.units.push(e5);
      }), e4 && l3 && (y(l3, n3), this.avcSample = null);
    }, e3.getLastNalUnit = function() {
      var t4, e4, r3 = this.avcSample;
      if (!r3 || 0 === r3.units.length) {
        var i3 = this._avcTrack.samples;
        r3 = i3[i3.length - 1];
      }
      if (null !== (t4 = r3) && void 0 !== t4 && t4.units) {
        var n3 = r3.units;
        e4 = n3[n3.length - 1];
      }
      return e4;
    }, e3.parseAVCNALu = function(t4) {
      var e4, r3, i3 = t4.byteLength, n3 = this._avcTrack, a3 = n3.naluState || 0, s3 = a3, o3 = [], l3 = 0, u2 = -1, d2 = 0;
      for (-1 === a3 && (u2 = 0, d2 = 31 & t4[0], a3 = 0, l3 = 1); l3 < i3; )
        if (e4 = t4[l3++], a3)
          if (1 !== a3)
            if (e4)
              if (1 === e4) {
                if (u2 >= 0) {
                  var c2 = { data: t4.subarray(u2, l3 - a3 - 1), type: d2 };
                  o3.push(c2);
                } else {
                  var h2 = this.getLastNalUnit();
                  if (h2 && (s3 && l3 <= 4 - s3 && h2.state && (h2.data = h2.data.subarray(0, h2.data.byteLength - s3)), (r3 = l3 - a3 - 1) > 0)) {
                    var f2 = new Uint8Array(h2.data.byteLength + r3);
                    f2.set(h2.data, 0), f2.set(t4.subarray(0, r3), h2.data.byteLength), h2.data = f2;
                  }
                }
                l3 < i3 ? (u2 = l3, d2 = 31 & t4[l3], a3 = 0) : a3 = -1;
              } else
                a3 = 0;
            else
              a3 = 3;
          else
            a3 = e4 ? 0 : 2;
        else
          a3 = e4 ? 0 : 1;
      if (u2 >= 0 && a3 >= 0) {
        var g2 = { data: t4.subarray(u2, i3), type: d2, state: a3 };
        o3.push(g2);
      }
      if (0 === o3.length) {
        var v2 = this.getLastNalUnit();
        if (v2) {
          var p2 = new Uint8Array(v2.data.byteLength + t4.byteLength);
          p2.set(v2.data, 0), p2.set(t4, v2.data.byteLength), v2.data = p2;
        }
      }
      return n3.naluState = a3, o3;
    }, e3.parseAACPES = function(t4) {
      var e4, r3, n3, a3, s3, o3 = 0, u2 = this._audioTrack, h2 = this.aacOverFlow, f2 = t4.data;
      if (h2) {
        this.aacOverFlow = null;
        var g2 = h2.sample.unit.byteLength, v2 = Math.min(h2.missing, g2), p2 = g2 - v2;
        h2.sample.unit.set(f2.subarray(0, v2), p2), u2.samples.push(h2.sample), o3 = h2.missing;
      }
      for (e4 = o3, r3 = f2.length; e4 < r3 - 1 && !i2.isHeader(f2, e4); e4++)
        ;
      if (e4 === o3 || (e4 < r3 - 1 ? (n3 = "AAC PES did not start with ADTS header,offset:" + e4, a3 = false) : (n3 = "no ADTS header found in AAC PES", a3 = true), d.logger.warn("parsing error:" + n3), this.observer.emit(l2.Events.ERROR, l2.Events.ERROR, { type: c.ErrorTypes.MEDIA_ERROR, details: c.ErrorDetails.FRAG_PARSING_ERROR, fatal: a3, reason: n3 }), !a3)) {
        if (i2.initTrackConfig(u2, this.observer, f2, e4, this.audioCodec), void 0 !== t4.pts)
          s3 = t4.pts;
        else {
          if (!h2)
            return void d.logger.warn("[tsdemuxer]: AAC PES unknown PTS");
          var m2 = i2.getFrameDuration(u2.samplerate);
          s3 = h2.sample.pts + m2;
        }
        for (var y2 = 0; e4 < r3; ) {
          if (i2.isHeader(f2, e4)) {
            if (e4 + 5 < r3) {
              var E2 = i2.appendFrame(u2, f2, e4, s3, y2);
              if (E2) {
                if (!E2.missing) {
                  e4 += E2.length, y2++;
                  continue;
                }
                this.aacOverFlow = E2;
              }
            }
            break;
          }
          e4++;
        }
      }
    }, e3.parseMPEGPES = function(t4) {
      var e4 = t4.data, r3 = e4.length, i3 = 0, a3 = 0, s3 = t4.pts;
      if (void 0 !== s3)
        for (; a3 < r3; )
          if (n2.isHeader(e4, a3)) {
            var o3 = n2.appendFrame(this._audioTrack, e4, a3, s3, i3);
            if (!o3)
              break;
            a3 += o3.length, i3++;
          } else
            a3++;
      else
        d.logger.warn("[tsdemuxer]: MPEG PES unknown PTS");
    }, e3.parseID3PES = function(t4) {
      void 0 !== t4.pts ? this._id3Track.samples.push(t4) : d.logger.warn("[tsdemuxer]: ID3 PES unknown PTS");
    }, t3;
  }();
  function g(t3, e3, r3, i3) {
    return { key: t3, frame: false, pts: e3, dts: r3, units: [], debug: i3, length: 0 };
  }
  function v(t3, e3) {
    return (31 & t3[e3 + 10]) << 8 | t3[e3 + 11];
  }
  function p(t3, e3, r3, i3) {
    var n3 = { audio: -1, avc: -1, id3: -1, isAAC: true }, a3 = e3 + 3 + ((15 & t3[e3 + 1]) << 8 | t3[e3 + 2]) - 4;
    for (e3 += 12 + ((15 & t3[e3 + 10]) << 8 | t3[e3 + 11]); e3 < a3; ) {
      var s3 = (31 & t3[e3 + 1]) << 8 | t3[e3 + 2];
      switch (t3[e3]) {
        case 207:
          if (!i3) {
            d.logger.log("ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream");
            break;
          }
        case 15:
          -1 === n3.audio && (n3.audio = s3);
          break;
        case 21:
          -1 === n3.id3 && (n3.id3 = s3);
          break;
        case 219:
          if (!i3) {
            d.logger.log("H.264 with AES-128-CBC slice encryption found in unencrypted stream");
            break;
          }
        case 27:
          -1 === n3.avc && (n3.avc = s3);
          break;
        case 3:
        case 4:
          r3 ? -1 === n3.audio && (n3.audio = s3, n3.isAAC = false) : d.logger.log("MPEG audio found, not supported in this browser");
          break;
        case 36:
          d.logger.warn("Unsupported HEVC stream type found");
      }
      e3 += 5 + ((15 & t3[e3 + 3]) << 8 | t3[e3 + 4]);
    }
    return n3;
  }
  function m(t3) {
    var e3, r3, i3, n3, a3, s3 = 0, o3 = t3.data;
    if (!t3 || 0 === t3.size)
      return null;
    for (; o3[0].length < 19 && o3.length > 1; ) {
      var l3 = new Uint8Array(o3[0].length + o3[1].length);
      l3.set(o3[0]), l3.set(o3[1], o3[0].length), o3[0] = l3, o3.splice(1, 1);
    }
    if (1 === ((e3 = o3[0])[0] << 16) + (e3[1] << 8) + e3[2]) {
      if ((r3 = (e3[4] << 8) + e3[5]) && r3 > t3.size - 6)
        return null;
      var u2 = e3[7];
      192 & u2 && (n3 = 536870912 * (14 & e3[9]) + 4194304 * (255 & e3[10]) + 16384 * (254 & e3[11]) + 128 * (255 & e3[12]) + (254 & e3[13]) / 2, 64 & u2 ? n3 - (a3 = 536870912 * (14 & e3[14]) + 4194304 * (255 & e3[15]) + 16384 * (254 & e3[16]) + 128 * (255 & e3[17]) + (254 & e3[18]) / 2) > 54e5 && (d.logger.warn(Math.round((n3 - a3) / 9e4) + "s delta between PTS and DTS, align them"), n3 = a3) : a3 = n3);
      var c2 = (i3 = e3[8]) + 9;
      if (t3.size <= c2)
        return null;
      t3.size -= c2;
      for (var h2 = new Uint8Array(t3.size), f2 = 0, g2 = o3.length; f2 < g2; f2++) {
        var v2 = (e3 = o3[f2]).byteLength;
        if (c2) {
          if (c2 > v2) {
            c2 -= v2;
            continue;
          }
          e3 = e3.subarray(c2), v2 -= c2, c2 = 0;
        }
        h2.set(e3, s3), s3 += v2;
      }
      return r3 && (r3 -= i3 + 3), { data: h2, pts: n3, dts: a3, len: r3 };
    }
    return null;
  }
  function y(t3, e3) {
    if (t3.units.length && t3.frame) {
      if (void 0 === t3.pts) {
        var r3 = e3.samples, i3 = r3.length;
        if (!i3)
          return void e3.dropped++;
        var n3 = r3[i3 - 1];
        t3.pts = n3.pts, t3.dts = n3.dts;
      }
      e3.samples.push(t3);
    }
    t3.debug.length && d.logger.log(t3.pts + "/" + t3.dts + ":" + t3.debug);
  }
  function E(t3, e3) {
    var r3 = t3.length;
    if (r3 > 0) {
      if (e3.pts >= t3[r3 - 1].pts)
        t3.push(e3);
      else
        for (var i3 = r3 - 1; i3 >= 0; i3--)
          if (e3.pts < t3[i3].pts) {
            t3.splice(i3, 0, e3);
            break;
          }
    } else
      t3.push(e3);
  }
  function T(t3) {
    for (var e3 = t3.byteLength, r3 = [], i3 = 1; i3 < e3 - 2; )
      0 === t3[i3] && 0 === t3[i3 + 1] && 3 === t3[i3 + 2] ? (r3.push(i3 + 2), i3 += 2) : i3++;
    if (0 === r3.length)
      return t3;
    var n3 = e3 - r3.length, a3 = new Uint8Array(n3), s3 = 0;
    for (i3 = 0; i3 < n3; s3++, i3++)
      s3 === r3[0] && (s3++, r3.shift()), a3[i3] = t3[s3];
    return a3;
  }
  f.minProbeByteLength = 188, e2.default = f;
}, "./src/errors.ts": function(t2, e2, r2) {
  var i2, n2, a2, s2;
  r2.r(e2), r2.d(e2, "ErrorTypes", function() {
    return i2;
  }), r2.d(e2, "ErrorDetails", function() {
    return a2;
  }), (n2 = i2 || (i2 = {})).NETWORK_ERROR = "networkError", n2.MEDIA_ERROR = "mediaError", n2.KEY_SYSTEM_ERROR = "keySystemError", n2.MUX_ERROR = "muxError", n2.OTHER_ERROR = "otherError", (s2 = a2 || (a2 = {})).KEY_SYSTEM_NO_KEYS = "keySystemNoKeys", s2.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess", s2.KEY_SYSTEM_NO_SESSION = "keySystemNoSession", s2.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed", s2.KEY_SYSTEM_NO_INIT_DATA = "keySystemNoInitData", s2.MANIFEST_LOAD_ERROR = "manifestLoadError", s2.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut", s2.MANIFEST_PARSING_ERROR = "manifestParsingError", s2.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError", s2.LEVEL_EMPTY_ERROR = "levelEmptyError", s2.LEVEL_LOAD_ERROR = "levelLoadError", s2.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut", s2.LEVEL_SWITCH_ERROR = "levelSwitchError", s2.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError", s2.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut", s2.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError", s2.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut", s2.FRAG_LOAD_ERROR = "fragLoadError", s2.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut", s2.FRAG_DECRYPT_ERROR = "fragDecryptError", s2.FRAG_PARSING_ERROR = "fragParsingError", s2.REMUX_ALLOC_ERROR = "remuxAllocError", s2.KEY_LOAD_ERROR = "keyLoadError", s2.KEY_LOAD_TIMEOUT = "keyLoadTimeOut", s2.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError", s2.BUFFER_INCOMPATIBLE_CODECS_ERROR = "bufferIncompatibleCodecsError", s2.BUFFER_APPEND_ERROR = "bufferAppendError", s2.BUFFER_APPENDING_ERROR = "bufferAppendingError", s2.BUFFER_STALLED_ERROR = "bufferStalledError", s2.BUFFER_FULL_ERROR = "bufferFullError", s2.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole", s2.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall", s2.INTERNAL_EXCEPTION = "internalException", s2.INTERNAL_ABORTED = "aborted", s2.UNKNOWN = "unknown";
}, "./src/events.ts": function(t2, e2, r2) {
  var i2, n2;
  r2.r(e2), r2.d(e2, "Events", function() {
    return i2;
  }), (n2 = i2 || (i2 = {})).MEDIA_ATTACHING = "hlsMediaAttaching", n2.MEDIA_ATTACHED = "hlsMediaAttached", n2.MEDIA_DETACHING = "hlsMediaDetaching", n2.MEDIA_DETACHED = "hlsMediaDetached", n2.BUFFER_RESET = "hlsBufferReset", n2.BUFFER_CODECS = "hlsBufferCodecs", n2.BUFFER_CREATED = "hlsBufferCreated", n2.BUFFER_APPENDING = "hlsBufferAppending", n2.BUFFER_APPENDED = "hlsBufferAppended", n2.BUFFER_EOS = "hlsBufferEos", n2.BUFFER_FLUSHING = "hlsBufferFlushing", n2.BUFFER_FLUSHED = "hlsBufferFlushed", n2.MANIFEST_LOADING = "hlsManifestLoading", n2.MANIFEST_LOADED = "hlsManifestLoaded", n2.MANIFEST_PARSED = "hlsManifestParsed", n2.LEVEL_SWITCHING = "hlsLevelSwitching", n2.LEVEL_SWITCHED = "hlsLevelSwitched", n2.LEVEL_LOADING = "hlsLevelLoading", n2.LEVEL_LOADED = "hlsLevelLoaded", n2.LEVEL_UPDATED = "hlsLevelUpdated", n2.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated", n2.LEVELS_UPDATED = "hlsLevelsUpdated", n2.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated", n2.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching", n2.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched", n2.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading", n2.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded", n2.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated", n2.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared", n2.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch", n2.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading", n2.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded", n2.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed", n2.CUES_PARSED = "hlsCuesParsed", n2.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound", n2.INIT_PTS_FOUND = "hlsInitPtsFound", n2.FRAG_LOADING = "hlsFragLoading", n2.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted", n2.FRAG_LOADED = "hlsFragLoaded", n2.FRAG_DECRYPTED = "hlsFragDecrypted", n2.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment", n2.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata", n2.FRAG_PARSING_METADATA = "hlsFragParsingMetadata", n2.FRAG_PARSED = "hlsFragParsed", n2.FRAG_BUFFERED = "hlsFragBuffered", n2.FRAG_CHANGED = "hlsFragChanged", n2.FPS_DROP = "hlsFpsDrop", n2.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping", n2.ERROR = "hlsError", n2.DESTROYING = "hlsDestroying", n2.KEY_LOADING = "hlsKeyLoading", n2.KEY_LOADED = "hlsKeyLoaded", n2.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached", n2.BACK_BUFFER_REACHED = "hlsBackBufferReached";
}, "./src/hls.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "default", function() {
    return y;
  });
  var i2 = r2("./node_modules/url-toolkit/src/url-toolkit.js"), n2 = r2("./src/loader/playlist-loader.ts"), a2 = r2("./src/loader/key-loader.ts"), s2 = r2("./src/controller/id3-track-controller.ts"), o2 = r2("./src/controller/latency-controller.ts"), l2 = r2("./src/controller/level-controller.ts"), u = r2("./src/controller/fragment-tracker.ts"), d = r2("./src/controller/stream-controller.ts"), c = r2("./src/is-supported.ts"), h = r2("./src/utils/logger.ts"), f = r2("./src/config.ts"), g = r2("./node_modules/eventemitter3/index.js"), v = r2("./src/events.ts"), p = r2("./src/errors.ts");
  function m(t3, e3) {
    for (var r3 = 0; r3 < e3.length; r3++) {
      var i3 = e3[r3];
      i3.enumerable = i3.enumerable || false, i3.configurable = true, "value" in i3 && (i3.writable = true), Object.defineProperty(t3, i3.key, i3);
    }
  }
  var y = function() {
    function t3(e4) {
      void 0 === e4 && (e4 = {}), this.config = void 0, this.userConfig = void 0, this.coreComponents = void 0, this.networkControllers = void 0, this._emitter = new g.EventEmitter(), this._autoLevelCapping = void 0, this.abrController = void 0, this.bufferController = void 0, this.capLevelController = void 0, this.latencyController = void 0, this.levelController = void 0, this.streamController = void 0, this.audioTrackController = void 0, this.subtitleTrackController = void 0, this.emeController = void 0, this._media = null, this.url = null;
      var r4 = this.config = Object(f.mergeConfig)(t3.DefaultConfig, e4);
      this.userConfig = e4, Object(h.enableLogs)(r4.debug), this._autoLevelCapping = -1, r4.progressive && Object(f.enableStreamingMode)(r4);
      var i3 = r4.abrController, c2 = r4.bufferController, v2 = r4.capLevelController, p2 = r4.fpsController, m2 = this.abrController = new i3(this), y3 = this.bufferController = new c2(this), E2 = this.capLevelController = new v2(this), T = new p2(this), S = new n2.default(this), b = new a2.default(this), L = new s2.default(this), A = this.levelController = new l2.default(this), D = new u.FragmentTracker(this), k = this.streamController = new d.default(this, D);
      E2.setStreamController(k), T.setStreamController(k);
      var R = [A, k];
      this.networkControllers = R;
      var _ = [S, b, m2, y3, E2, T, L, D];
      this.audioTrackController = this.createController(r4.audioTrackController, null, R), this.createController(r4.audioStreamController, D, R), this.subtitleTrackController = this.createController(r4.subtitleTrackController, null, R), this.createController(r4.subtitleStreamController, D, R), this.createController(r4.timelineController, null, _), this.emeController = this.createController(r4.emeController, null, _), this.latencyController = this.createController(o2.default, null, _), this.coreComponents = _;
    }
    t3.isSupported = function() {
      return Object(c.isSupported)();
    };
    var e3, r3, y2, E = t3.prototype;
    return E.createController = function(t4, e4, r4) {
      if (t4) {
        var i3 = e4 ? new t4(this, e4) : new t4(this);
        return r4 && r4.push(i3), i3;
      }
      return null;
    }, E.on = function(t4, e4, r4) {
      void 0 === r4 && (r4 = this), this._emitter.on(t4, e4, r4);
    }, E.once = function(t4, e4, r4) {
      void 0 === r4 && (r4 = this), this._emitter.once(t4, e4, r4);
    }, E.removeAllListeners = function(t4) {
      this._emitter.removeAllListeners(t4);
    }, E.off = function(t4, e4, r4, i3) {
      void 0 === r4 && (r4 = this), this._emitter.off(t4, e4, r4, i3);
    }, E.listeners = function(t4) {
      return this._emitter.listeners(t4);
    }, E.emit = function(t4, e4, r4) {
      return this._emitter.emit(t4, e4, r4);
    }, E.trigger = function(t4, e4) {
      if (this.config.debug)
        return this.emit(t4, t4, e4);
      try {
        return this.emit(t4, t4, e4);
      } catch (r4) {
        h.logger.error("An internal error happened while handling event " + t4 + '. Error message: "' + r4.message + '". Here is a stacktrace:', r4), this.trigger(v.Events.ERROR, { type: p.ErrorTypes.OTHER_ERROR, details: p.ErrorDetails.INTERNAL_EXCEPTION, fatal: false, event: t4, error: r4 });
      }
      return false;
    }, E.listenerCount = function(t4) {
      return this._emitter.listenerCount(t4);
    }, E.destroy = function() {
      h.logger.log("destroy"), this.trigger(v.Events.DESTROYING, void 0), this.detachMedia(), this.removeAllListeners(), this._autoLevelCapping = -1, this.url = null, this.networkControllers.forEach(function(t4) {
        return t4.destroy();
      }), this.networkControllers.length = 0, this.coreComponents.forEach(function(t4) {
        return t4.destroy();
      }), this.coreComponents.length = 0;
    }, E.attachMedia = function(t4) {
      h.logger.log("attachMedia"), this._media = t4, this.trigger(v.Events.MEDIA_ATTACHING, { media: t4 });
    }, E.detachMedia = function() {
      h.logger.log("detachMedia"), this.trigger(v.Events.MEDIA_DETACHING, void 0), this._media = null;
    }, E.loadSource = function(t4) {
      this.stopLoad();
      var e4 = this.media, r4 = this.url, n3 = this.url = i2.buildAbsoluteURL(self.location.href, t4, { alwaysNormalize: true });
      h.logger.log("loadSource:" + n3), e4 && r4 && r4 !== n3 && this.bufferController.hasSourceTypes() && (this.detachMedia(), this.attachMedia(e4)), this.trigger(v.Events.MANIFEST_LOADING, { url: t4 });
    }, E.startLoad = function(t4) {
      void 0 === t4 && (t4 = -1), h.logger.log("startLoad(" + t4 + ")"), this.networkControllers.forEach(function(e4) {
        e4.startLoad(t4);
      });
    }, E.stopLoad = function() {
      h.logger.log("stopLoad"), this.networkControllers.forEach(function(t4) {
        t4.stopLoad();
      });
    }, E.swapAudioCodec = function() {
      h.logger.log("swapAudioCodec"), this.streamController.swapAudioCodec();
    }, E.recoverMediaError = function() {
      h.logger.log("recoverMediaError");
      var t4 = this._media;
      this.detachMedia(), t4 && this.attachMedia(t4);
    }, E.removeLevel = function(t4, e4) {
      void 0 === e4 && (e4 = 0), this.levelController.removeLevel(t4, e4);
    }, e3 = t3, y2 = [{ key: "version", get: function() {
      return "1.0.10";
    } }, { key: "Events", get: function() {
      return v.Events;
    } }, { key: "ErrorTypes", get: function() {
      return p.ErrorTypes;
    } }, { key: "ErrorDetails", get: function() {
      return p.ErrorDetails;
    } }, { key: "DefaultConfig", get: function() {
      return t3.defaultConfig ? t3.defaultConfig : f.hlsDefaultConfig;
    }, set: function(e4) {
      t3.defaultConfig = e4;
    } }], (r3 = [{ key: "levels", get: function() {
      var t4 = this.levelController.levels;
      return t4 || [];
    } }, { key: "currentLevel", get: function() {
      return this.streamController.currentLevel;
    }, set: function(t4) {
      h.logger.log("set currentLevel:" + t4), this.loadLevel = t4, this.abrController.clearTimer(), this.streamController.immediateLevelSwitch();
    } }, { key: "nextLevel", get: function() {
      return this.streamController.nextLevel;
    }, set: function(t4) {
      h.logger.log("set nextLevel:" + t4), this.levelController.manualLevel = t4, this.streamController.nextLevelSwitch();
    } }, { key: "loadLevel", get: function() {
      return this.levelController.level;
    }, set: function(t4) {
      h.logger.log("set loadLevel:" + t4), this.levelController.manualLevel = t4;
    } }, { key: "nextLoadLevel", get: function() {
      return this.levelController.nextLoadLevel;
    }, set: function(t4) {
      this.levelController.nextLoadLevel = t4;
    } }, { key: "firstLevel", get: function() {
      return Math.max(this.levelController.firstLevel, this.minAutoLevel);
    }, set: function(t4) {
      h.logger.log("set firstLevel:" + t4), this.levelController.firstLevel = t4;
    } }, { key: "startLevel", get: function() {
      return this.levelController.startLevel;
    }, set: function(t4) {
      h.logger.log("set startLevel:" + t4), -1 !== t4 && (t4 = Math.max(t4, this.minAutoLevel)), this.levelController.startLevel = t4;
    } }, { key: "capLevelToPlayerSize", get: function() {
      return this.config.capLevelToPlayerSize;
    }, set: function(t4) {
      var e4 = !!t4;
      e4 !== this.config.capLevelToPlayerSize && (e4 ? this.capLevelController.startCapping() : (this.capLevelController.stopCapping(), this.autoLevelCapping = -1, this.streamController.nextLevelSwitch()), this.config.capLevelToPlayerSize = e4);
    } }, { key: "autoLevelCapping", get: function() {
      return this._autoLevelCapping;
    }, set: function(t4) {
      this._autoLevelCapping !== t4 && (h.logger.log("set autoLevelCapping:" + t4), this._autoLevelCapping = t4);
    } }, { key: "bandwidthEstimate", get: function() {
      var t4 = this.abrController.bwEstimator;
      return t4 ? t4.getEstimate() : NaN;
    } }, { key: "autoLevelEnabled", get: function() {
      return -1 === this.levelController.manualLevel;
    } }, { key: "manualLevel", get: function() {
      return this.levelController.manualLevel;
    } }, { key: "minAutoLevel", get: function() {
      var t4 = this.levels, e4 = this.config.minAutoBitrate;
      if (!t4)
        return 0;
      for (var r4 = t4.length, i3 = 0; i3 < r4; i3++)
        if (t4[i3].maxBitrate > e4)
          return i3;
      return 0;
    } }, { key: "maxAutoLevel", get: function() {
      var t4 = this.levels, e4 = this.autoLevelCapping;
      return -1 === e4 && t4 && t4.length ? t4.length - 1 : e4;
    } }, { key: "nextAutoLevel", get: function() {
      return Math.min(Math.max(this.abrController.nextAutoLevel, this.minAutoLevel), this.maxAutoLevel);
    }, set: function(t4) {
      this.abrController.nextAutoLevel = Math.max(this.minAutoLevel, t4);
    } }, { key: "audioTracks", get: function() {
      var t4 = this.audioTrackController;
      return t4 ? t4.audioTracks : [];
    } }, { key: "audioTrack", get: function() {
      var t4 = this.audioTrackController;
      return t4 ? t4.audioTrack : -1;
    }, set: function(t4) {
      var e4 = this.audioTrackController;
      e4 && (e4.audioTrack = t4);
    } }, { key: "subtitleTracks", get: function() {
      var t4 = this.subtitleTrackController;
      return t4 ? t4.subtitleTracks : [];
    } }, { key: "subtitleTrack", get: function() {
      var t4 = this.subtitleTrackController;
      return t4 ? t4.subtitleTrack : -1;
    }, set: function(t4) {
      var e4 = this.subtitleTrackController;
      e4 && (e4.subtitleTrack = t4);
    } }, { key: "media", get: function() {
      return this._media;
    } }, { key: "subtitleDisplay", get: function() {
      var t4 = this.subtitleTrackController;
      return !!t4 && t4.subtitleDisplay;
    }, set: function(t4) {
      var e4 = this.subtitleTrackController;
      e4 && (e4.subtitleDisplay = t4);
    } }, { key: "lowLatencyMode", get: function() {
      return this.config.lowLatencyMode;
    }, set: function(t4) {
      this.config.lowLatencyMode = t4;
    } }, { key: "liveSyncPosition", get: function() {
      return this.latencyController.liveSyncPosition;
    } }, { key: "latency", get: function() {
      return this.latencyController.latency;
    } }, { key: "maxLatency", get: function() {
      return this.latencyController.maxLatency;
    } }, { key: "targetLatency", get: function() {
      return this.latencyController.targetLatency;
    } }, { key: "drift", get: function() {
      return this.latencyController.drift;
    } }, { key: "forceStartLoad", get: function() {
      return this.streamController.forceStartLoad;
    } }]) && m(e3.prototype, r3), y2 && m(e3, y2), t3;
  }();
  y.defaultConfig = void 0;
}, "./src/is-supported.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "isSupported", function() {
    return a2;
  }), r2.d(e2, "changeTypeSupported", function() {
    return s2;
  });
  var i2 = r2("./src/utils/mediasource-helper.ts");
  function n2() {
    return self.SourceBuffer || self.WebKitSourceBuffer;
  }
  function a2() {
    var t3 = Object(i2.getMediaSource)();
    if (!t3)
      return false;
    var e3 = n2(), r3 = t3 && "function" == typeof t3.isTypeSupported && t3.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'), a3 = !e3 || e3.prototype && "function" == typeof e3.prototype.appendBuffer && "function" == typeof e3.prototype.remove;
    return !!r3 && !!a3;
  }
  function s2() {
    var t3, e3 = n2();
    return "function" == typeof (null == e3 || null === (t3 = e3.prototype) || void 0 === t3 ? void 0 : t3.changeType);
  }
}, "./src/loader/fragment-loader.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "default", function() {
    return c;
  }), r2.d(e2, "LoadError", function() {
    return f;
  });
  var i2 = r2("./src/polyfills/number.ts"), n2 = r2("./src/errors.ts");
  function a2(t3) {
    var e3 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
    return (a2 = function(t4) {
      if (null === t4 || (r3 = t4, -1 === Function.toString.call(r3).indexOf("[native code]")))
        return t4;
      var r3;
      if ("function" != typeof t4)
        throw new TypeError("Super expression must either be null or a function");
      if (void 0 !== e3) {
        if (e3.has(t4))
          return e3.get(t4);
        e3.set(t4, i3);
      }
      function i3() {
        return s2(t4, arguments, u(this).constructor);
      }
      return i3.prototype = Object.create(t4.prototype, { constructor: { value: i3, enumerable: false, writable: true, configurable: true } }), l2(i3, t4);
    })(t3);
  }
  function s2(t3, e3, r3) {
    return (s2 = o2() ? Reflect.construct : function(t4, e4, r4) {
      var i3 = [null];
      i3.push.apply(i3, e4);
      var n3 = new (Function.bind.apply(t4, i3))();
      return r4 && l2(n3, r4.prototype), n3;
    }).apply(null, arguments);
  }
  function o2() {
    if ("undefined" == typeof Reflect || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if ("function" == typeof Proxy)
      return true;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), true;
    } catch (t3) {
      return false;
    }
  }
  function l2(t3, e3) {
    return (l2 = Object.setPrototypeOf || function(t4, e4) {
      return t4.__proto__ = e4, t4;
    })(t3, e3);
  }
  function u(t3) {
    return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
      return t4.__proto__ || Object.getPrototypeOf(t4);
    })(t3);
  }
  var d = Math.pow(2, 17), c = function() {
    function t3(t4) {
      this.config = void 0, this.loader = null, this.partLoadTimeout = -1, this.config = t4;
    }
    var e3 = t3.prototype;
    return e3.destroy = function() {
      this.loader && (this.loader.destroy(), this.loader = null);
    }, e3.abort = function() {
      this.loader && this.loader.abort();
    }, e3.load = function(t4, e4) {
      var r3 = this, i3 = t4.url;
      if (!i3)
        return Promise.reject(new f({ type: n2.ErrorTypes.NETWORK_ERROR, details: n2.ErrorDetails.FRAG_LOAD_ERROR, fatal: false, frag: t4, networkDetails: null }, "Fragment does not have a " + (i3 ? "part list" : "url")));
      this.abort();
      var a3 = this.config, s3 = a3.fLoader, o3 = a3.loader;
      return new Promise(function(i4, l3) {
        r3.loader && r3.loader.destroy();
        var u2 = r3.loader = t4.loader = s3 ? new s3(a3) : new o3(a3), c2 = h(t4), g = { timeout: a3.fragLoadingTimeOut, maxRetry: 0, retryDelay: 0, maxRetryDelay: a3.fragLoadingMaxRetryTimeout, highWaterMark: d };
        t4.stats = u2.stats, u2.load(c2, g, { onSuccess: function(e5, n3, a4, s4) {
          r3.resetLoader(t4, u2), i4({ frag: t4, part: null, payload: e5.data, networkDetails: s4 });
        }, onError: function(e5, i5, a4) {
          r3.resetLoader(t4, u2), l3(new f({ type: n2.ErrorTypes.NETWORK_ERROR, details: n2.ErrorDetails.FRAG_LOAD_ERROR, fatal: false, frag: t4, response: e5, networkDetails: a4 }));
        }, onAbort: function(e5, i5, a4) {
          r3.resetLoader(t4, u2), l3(new f({ type: n2.ErrorTypes.NETWORK_ERROR, details: n2.ErrorDetails.INTERNAL_ABORTED, fatal: false, frag: t4, networkDetails: a4 }));
        }, onTimeout: function(e5, i5, a4) {
          r3.resetLoader(t4, u2), l3(new f({ type: n2.ErrorTypes.NETWORK_ERROR, details: n2.ErrorDetails.FRAG_LOAD_TIMEOUT, fatal: false, frag: t4, networkDetails: a4 }));
        }, onProgress: function(r4, i5, n3, a4) {
          e4 && e4({ frag: t4, part: null, payload: n3, networkDetails: a4 });
        } });
      });
    }, e3.loadPart = function(t4, e4, r3) {
      var i3 = this;
      this.abort();
      var a3 = this.config, s3 = a3.fLoader, o3 = a3.loader;
      return new Promise(function(l3, u2) {
        i3.loader && i3.loader.destroy();
        var c2 = i3.loader = t4.loader = s3 ? new s3(a3) : new o3(a3), g = h(t4, e4), v = { timeout: a3.fragLoadingTimeOut, maxRetry: 0, retryDelay: 0, maxRetryDelay: a3.fragLoadingMaxRetryTimeout, highWaterMark: d };
        e4.stats = c2.stats, c2.load(g, v, { onSuccess: function(n3, a4, s4, o4) {
          i3.resetLoader(t4, c2), i3.updateStatsFromPart(t4, e4);
          var u3 = { frag: t4, part: e4, payload: n3.data, networkDetails: o4 };
          r3(u3), l3(u3);
        }, onError: function(r4, a4, s4) {
          i3.resetLoader(t4, c2), u2(new f({ type: n2.ErrorTypes.NETWORK_ERROR, details: n2.ErrorDetails.FRAG_LOAD_ERROR, fatal: false, frag: t4, part: e4, response: r4, networkDetails: s4 }));
        }, onAbort: function(r4, a4, s4) {
          t4.stats.aborted = e4.stats.aborted, i3.resetLoader(t4, c2), u2(new f({ type: n2.ErrorTypes.NETWORK_ERROR, details: n2.ErrorDetails.INTERNAL_ABORTED, fatal: false, frag: t4, part: e4, networkDetails: s4 }));
        }, onTimeout: function(r4, a4, s4) {
          i3.resetLoader(t4, c2), u2(new f({ type: n2.ErrorTypes.NETWORK_ERROR, details: n2.ErrorDetails.FRAG_LOAD_TIMEOUT, fatal: false, frag: t4, part: e4, networkDetails: s4 }));
        } });
      });
    }, e3.updateStatsFromPart = function(t4, e4) {
      var r3 = t4.stats, i3 = e4.stats, n3 = i3.total;
      if (r3.loaded += i3.loaded, n3) {
        var a3 = Math.round(t4.duration / e4.duration), s3 = Math.min(Math.round(r3.loaded / n3), a3), o3 = (a3 - s3) * Math.round(r3.loaded / s3);
        r3.total = r3.loaded + o3;
      } else
        r3.total = Math.max(r3.loaded, r3.total);
      var l3 = r3.loading, u2 = i3.loading;
      l3.start ? l3.first += u2.first - u2.start : (l3.start = u2.start, l3.first = u2.first), l3.end = u2.end;
    }, e3.resetLoader = function(t4, e4) {
      t4.loader = null, this.loader === e4 && (self.clearTimeout(this.partLoadTimeout), this.loader = null), e4.destroy();
    }, t3;
  }();
  function h(t3, e3) {
    void 0 === e3 && (e3 = null);
    var r3 = e3 || t3, n3 = { frag: t3, part: e3, responseType: "arraybuffer", url: r3.url, rangeStart: 0, rangeEnd: 0 }, a3 = r3.byteRangeStartOffset, s3 = r3.byteRangeEndOffset;
    return Object(i2.isFiniteNumber)(a3) && Object(i2.isFiniteNumber)(s3) && (n3.rangeStart = a3, n3.rangeEnd = s3), n3;
  }
  var f = function(t3) {
    var e3, r3;
    function i3(e4) {
      for (var r4, i4 = arguments.length, n3 = new Array(i4 > 1 ? i4 - 1 : 0), a3 = 1; a3 < i4; a3++)
        n3[a3 - 1] = arguments[a3];
      return (r4 = t3.call.apply(t3, [this].concat(n3)) || this).data = void 0, r4.data = e4, r4;
    }
    return r3 = t3, (e3 = i3).prototype = Object.create(r3.prototype), e3.prototype.constructor = e3, l2(e3, r3), i3;
  }(a2(Error));
}, "./src/loader/fragment.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "ElementaryStreamTypes", function() {
    return i2;
  }), r2.d(e2, "BaseSegment", function() {
    return g;
  }), r2.d(e2, "Fragment", function() {
    return v;
  }), r2.d(e2, "Part", function() {
    return p;
  });
  var i2, n2, a2 = r2("./src/polyfills/number.ts"), s2 = r2("./node_modules/url-toolkit/src/url-toolkit.js"), o2 = r2("./src/utils/logger.ts"), l2 = r2("./src/loader/level-key.ts"), u = r2("./src/loader/load-stats.ts");
  function d(t3, e3) {
    t3.prototype = Object.create(e3.prototype), t3.prototype.constructor = t3, c(t3, e3);
  }
  function c(t3, e3) {
    return (c = Object.setPrototypeOf || function(t4, e4) {
      return t4.__proto__ = e4, t4;
    })(t3, e3);
  }
  function h(t3, e3) {
    for (var r3 = 0; r3 < e3.length; r3++) {
      var i3 = e3[r3];
      i3.enumerable = i3.enumerable || false, i3.configurable = true, "value" in i3 && (i3.writable = true), Object.defineProperty(t3, i3.key, i3);
    }
  }
  function f(t3, e3, r3) {
    return e3 && h(t3.prototype, e3), r3 && h(t3, r3), t3;
  }
  (n2 = i2 || (i2 = {})).AUDIO = "audio", n2.VIDEO = "video", n2.AUDIOVIDEO = "audiovideo";
  var g = function() {
    function t3(t4) {
      var e3;
      this._byteRange = null, this._url = null, this.baseurl = void 0, this.relurl = void 0, this.elementaryStreams = ((e3 = {})[i2.AUDIO] = null, e3[i2.VIDEO] = null, e3[i2.AUDIOVIDEO] = null, e3), this.baseurl = t4;
    }
    return t3.prototype.setByteRange = function(t4, e3) {
      var r3 = t4.split("@", 2), i3 = [];
      1 === r3.length ? i3[0] = e3 ? e3.byteRangeEndOffset : 0 : i3[0] = parseInt(r3[1]), i3[1] = parseInt(r3[0]) + i3[0], this._byteRange = i3;
    }, f(t3, [{ key: "byteRange", get: function() {
      return this._byteRange ? this._byteRange : [];
    } }, { key: "byteRangeStartOffset", get: function() {
      return this.byteRange[0];
    } }, { key: "byteRangeEndOffset", get: function() {
      return this.byteRange[1];
    } }, { key: "url", get: function() {
      return !this._url && this.baseurl && this.relurl && (this._url = Object(s2.buildAbsoluteURL)(this.baseurl, this.relurl, { alwaysNormalize: true })), this._url || "";
    }, set: function(t4) {
      this._url = t4;
    } }]), t3;
  }(), v = function(t3) {
    function e3(e4, r4) {
      var i3;
      return (i3 = t3.call(this, r4) || this)._decryptdata = null, i3.rawProgramDateTime = null, i3.programDateTime = null, i3.tagList = [], i3.duration = 0, i3.sn = 0, i3.levelkey = void 0, i3.type = void 0, i3.loader = null, i3.level = -1, i3.cc = 0, i3.startPTS = void 0, i3.endPTS = void 0, i3.appendedPTS = void 0, i3.startDTS = void 0, i3.endDTS = void 0, i3.start = 0, i3.deltaPTS = void 0, i3.maxStartPTS = void 0, i3.minEndPTS = void 0, i3.stats = new u.LoadStats(), i3.urlId = 0, i3.data = void 0, i3.bitrateTest = false, i3.title = null, i3.initSegment = null, i3.type = e4, i3;
    }
    d(e3, t3);
    var r3 = e3.prototype;
    return r3.createInitializationVector = function(t4) {
      for (var e4 = new Uint8Array(16), r4 = 12; r4 < 16; r4++)
        e4[r4] = t4 >> 8 * (15 - r4) & 255;
      return e4;
    }, r3.setDecryptDataFromLevelKey = function(t4, e4) {
      var r4 = t4;
      return "AES-128" === (null == t4 ? void 0 : t4.method) && t4.uri && !t4.iv && ((r4 = l2.LevelKey.fromURI(t4.uri)).method = t4.method, r4.iv = this.createInitializationVector(e4), r4.keyFormat = "identity"), r4;
    }, r3.setElementaryStreamInfo = function(t4, e4, r4, i3, n3, a3) {
      void 0 === a3 && (a3 = false);
      var s3 = this.elementaryStreams, o3 = s3[t4];
      o3 ? (o3.startPTS = Math.min(o3.startPTS, e4), o3.endPTS = Math.max(o3.endPTS, r4), o3.startDTS = Math.min(o3.startDTS, i3), o3.endDTS = Math.max(o3.endDTS, n3)) : s3[t4] = { startPTS: e4, endPTS: r4, startDTS: i3, endDTS: n3, partial: a3 };
    }, r3.clearElementaryStreamInfo = function() {
      var t4 = this.elementaryStreams;
      t4[i2.AUDIO] = null, t4[i2.VIDEO] = null, t4[i2.AUDIOVIDEO] = null;
    }, f(e3, [{ key: "decryptdata", get: function() {
      if (!this.levelkey && !this._decryptdata)
        return null;
      if (!this._decryptdata && this.levelkey) {
        var t4 = this.sn;
        "number" != typeof t4 && (this.levelkey && "AES-128" === this.levelkey.method && !this.levelkey.iv && o2.logger.warn('missing IV for initialization segment with method="' + this.levelkey.method + '" - compliance issue'), t4 = 0), this._decryptdata = this.setDecryptDataFromLevelKey(this.levelkey, t4);
      }
      return this._decryptdata;
    } }, { key: "end", get: function() {
      return this.start + this.duration;
    } }, { key: "endProgramDateTime", get: function() {
      if (null === this.programDateTime)
        return null;
      if (!Object(a2.isFiniteNumber)(this.programDateTime))
        return null;
      var t4 = Object(a2.isFiniteNumber)(this.duration) ? this.duration : 0;
      return this.programDateTime + 1e3 * t4;
    } }, { key: "encrypted", get: function() {
      var t4;
      return !(null === (t4 = this.decryptdata) || void 0 === t4 || !t4.keyFormat || !this.decryptdata.uri);
    } }]), e3;
  }(g), p = function(t3) {
    function e3(e4, r3, i3, n3, a3) {
      var s3;
      (s3 = t3.call(this, i3) || this).fragOffset = 0, s3.duration = 0, s3.gap = false, s3.independent = false, s3.relurl = void 0, s3.fragment = void 0, s3.index = void 0, s3.stats = new u.LoadStats(), s3.duration = e4.decimalFloatingPoint("DURATION"), s3.gap = e4.bool("GAP"), s3.independent = e4.bool("INDEPENDENT"), s3.relurl = e4.enumeratedString("URI"), s3.fragment = r3, s3.index = n3;
      var o3 = e4.enumeratedString("BYTERANGE");
      return o3 && s3.setByteRange(o3, a3), a3 && (s3.fragOffset = a3.fragOffset + a3.duration), s3;
    }
    return d(e3, t3), f(e3, [{ key: "start", get: function() {
      return this.fragment.start + this.fragOffset;
    } }, { key: "end", get: function() {
      return this.start + this.duration;
    } }, { key: "loaded", get: function() {
      var t4 = this.elementaryStreams;
      return !!(t4.audio || t4.video || t4.audiovideo);
    } }]), e3;
  }(g);
}, "./src/loader/key-loader.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "default", function() {
    return s2;
  });
  var i2 = r2("./src/events.ts"), n2 = r2("./src/errors.ts"), a2 = r2("./src/utils/logger.ts"), s2 = function() {
    function t3(t4) {
      this.hls = void 0, this.loaders = {}, this.decryptkey = null, this.decrypturl = null, this.hls = t4, this._registerListeners();
    }
    var e3 = t3.prototype;
    return e3._registerListeners = function() {
      this.hls.on(i2.Events.KEY_LOADING, this.onKeyLoading, this);
    }, e3._unregisterListeners = function() {
      this.hls.off(i2.Events.KEY_LOADING, this.onKeyLoading);
    }, e3.destroy = function() {
      for (var t4 in this._unregisterListeners(), this.loaders) {
        var e4 = this.loaders[t4];
        e4 && e4.destroy();
      }
      this.loaders = {};
    }, e3.onKeyLoading = function(t4, e4) {
      var r3 = e4.frag, n3 = r3.type, s3 = this.loaders[n3];
      if (r3.decryptdata) {
        var o2 = r3.decryptdata.uri;
        if (o2 !== this.decrypturl || null === this.decryptkey) {
          var l2 = this.hls.config;
          if (s3 && (a2.logger.warn("abort previous key loader for type:" + n3), s3.abort()), !o2)
            return void a2.logger.warn("key uri is falsy");
          var u = l2.loader, d = r3.loader = this.loaders[n3] = new u(l2);
          this.decrypturl = o2, this.decryptkey = null;
          var c = { url: o2, frag: r3, responseType: "arraybuffer" }, h = { timeout: l2.fragLoadingTimeOut, maxRetry: 0, retryDelay: l2.fragLoadingRetryDelay, maxRetryDelay: l2.fragLoadingMaxRetryTimeout, highWaterMark: 0 }, f = { onSuccess: this.loadsuccess.bind(this), onError: this.loaderror.bind(this), onTimeout: this.loadtimeout.bind(this) };
          d.load(c, h, f);
        } else
          this.decryptkey && (r3.decryptdata.key = this.decryptkey, this.hls.trigger(i2.Events.KEY_LOADED, { frag: r3 }));
      } else
        a2.logger.warn("Missing decryption data on fragment in onKeyLoading");
    }, e3.loadsuccess = function(t4, e4, r3) {
      var n3 = r3.frag;
      n3.decryptdata ? (this.decryptkey = n3.decryptdata.key = new Uint8Array(t4.data), n3.loader = null, delete this.loaders[n3.type], this.hls.trigger(i2.Events.KEY_LOADED, { frag: n3 })) : a2.logger.error("after key load, decryptdata unset");
    }, e3.loaderror = function(t4, e4) {
      var r3 = e4.frag, a3 = r3.loader;
      a3 && a3.abort(), delete this.loaders[r3.type], this.hls.trigger(i2.Events.ERROR, { type: n2.ErrorTypes.NETWORK_ERROR, details: n2.ErrorDetails.KEY_LOAD_ERROR, fatal: false, frag: r3, response: t4 });
    }, e3.loadtimeout = function(t4, e4) {
      var r3 = e4.frag, a3 = r3.loader;
      a3 && a3.abort(), delete this.loaders[r3.type], this.hls.trigger(i2.Events.ERROR, { type: n2.ErrorTypes.NETWORK_ERROR, details: n2.ErrorDetails.KEY_LOAD_TIMEOUT, fatal: false, frag: r3 });
    }, t3;
  }();
}, "./src/loader/level-details.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "LevelDetails", function() {
    return a2;
  });
  var i2 = r2("./src/polyfills/number.ts");
  function n2(t3, e3) {
    for (var r3 = 0; r3 < e3.length; r3++) {
      var i3 = e3[r3];
      i3.enumerable = i3.enumerable || false, i3.configurable = true, "value" in i3 && (i3.writable = true), Object.defineProperty(t3, i3.key, i3);
    }
  }
  var a2 = function() {
    function t3(t4) {
      this.PTSKnown = false, this.alignedSliding = false, this.averagetargetduration = void 0, this.endCC = 0, this.endSN = 0, this.fragments = void 0, this.fragmentHint = void 0, this.partList = null, this.live = true, this.ageHeader = 0, this.advancedDateTime = void 0, this.updated = true, this.advanced = true, this.availabilityDelay = void 0, this.misses = 0, this.needSidxRanges = false, this.startCC = 0, this.startSN = 0, this.startTimeOffset = null, this.targetduration = 0, this.totalduration = 0, this.type = null, this.url = void 0, this.m3u8 = "", this.version = null, this.canBlockReload = false, this.canSkipUntil = 0, this.canSkipDateRanges = false, this.skippedSegments = 0, this.recentlyRemovedDateranges = void 0, this.partHoldBack = 0, this.holdBack = 0, this.partTarget = 0, this.preloadHint = void 0, this.renditionReports = void 0, this.tuneInGoal = 0, this.deltaUpdateFailed = void 0, this.driftStartTime = 0, this.driftEndTime = 0, this.driftStart = 0, this.driftEnd = 0, this.fragments = [], this.url = t4;
    }
    var e3, r3;
    return t3.prototype.reloaded = function(t4) {
      if (!t4)
        return this.advanced = true, void (this.updated = true);
      var e4 = this.lastPartSn - t4.lastPartSn, r4 = this.lastPartIndex - t4.lastPartIndex;
      this.updated = this.endSN !== t4.endSN || !!r4 || !!e4, this.advanced = this.endSN > t4.endSN || e4 > 0 || 0 === e4 && r4 > 0, this.updated || this.advanced ? this.misses = Math.floor(0.6 * t4.misses) : this.misses = t4.misses + 1, this.availabilityDelay = t4.availabilityDelay;
    }, e3 = t3, (r3 = [{ key: "hasProgramDateTime", get: function() {
      return !!this.fragments.length && Object(i2.isFiniteNumber)(this.fragments[this.fragments.length - 1].programDateTime);
    } }, { key: "levelTargetDuration", get: function() {
      return this.averagetargetduration || this.targetduration || 10;
    } }, { key: "drift", get: function() {
      var t4 = this.driftEndTime - this.driftStartTime;
      return t4 > 0 ? 1e3 * (this.driftEnd - this.driftStart) / t4 : 1;
    } }, { key: "edge", get: function() {
      return this.partEnd || this.fragmentEnd;
    } }, { key: "partEnd", get: function() {
      var t4;
      return null !== (t4 = this.partList) && void 0 !== t4 && t4.length ? this.partList[this.partList.length - 1].end : this.fragmentEnd;
    } }, { key: "fragmentEnd", get: function() {
      var t4;
      return null !== (t4 = this.fragments) && void 0 !== t4 && t4.length ? this.fragments[this.fragments.length - 1].end : 0;
    } }, { key: "age", get: function() {
      return this.advancedDateTime ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3 : 0;
    } }, { key: "lastPartIndex", get: function() {
      var t4;
      return null !== (t4 = this.partList) && void 0 !== t4 && t4.length ? this.partList[this.partList.length - 1].index : -1;
    } }, { key: "lastPartSn", get: function() {
      var t4;
      return null !== (t4 = this.partList) && void 0 !== t4 && t4.length ? this.partList[this.partList.length - 1].fragment.sn : this.endSN;
    } }]) && n2(e3.prototype, r3), t3;
  }();
}, "./src/loader/level-key.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "LevelKey", function() {
    return a2;
  });
  var i2 = r2("./node_modules/url-toolkit/src/url-toolkit.js");
  function n2(t3, e3) {
    for (var r3 = 0; r3 < e3.length; r3++) {
      var i3 = e3[r3];
      i3.enumerable = i3.enumerable || false, i3.configurable = true, "value" in i3 && (i3.writable = true), Object.defineProperty(t3, i3.key, i3);
    }
  }
  var a2 = function() {
    function t3(t4, e4) {
      this._uri = null, this.method = null, this.keyFormat = null, this.keyFormatVersions = null, this.keyID = null, this.key = null, this.iv = null, this._uri = e4 ? Object(i2.buildAbsoluteURL)(t4, e4, { alwaysNormalize: true }) : t4;
    }
    var e3, r3;
    return t3.fromURL = function(e4, r4) {
      return new t3(e4, r4);
    }, t3.fromURI = function(e4) {
      return new t3(e4);
    }, e3 = t3, (r3 = [{ key: "uri", get: function() {
      return this._uri;
    } }]) && n2(e3.prototype, r3), t3;
  }();
}, "./src/loader/load-stats.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "LoadStats", function() {
    return i2;
  });
  var i2 = function() {
    this.aborted = false, this.loaded = 0, this.retry = 0, this.total = 0, this.chunkCount = 0, this.bwEstimate = 0, this.loading = { start: 0, first: 0, end: 0 }, this.parsing = { start: 0, end: 0 }, this.buffering = { start: 0, first: 0, end: 0 };
  };
}, "./src/loader/m3u8-parser.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "default", function() {
    return p;
  });
  var i2 = r2("./src/polyfills/number.ts"), n2 = r2("./node_modules/url-toolkit/src/url-toolkit.js"), a2 = r2("./src/loader/fragment.ts"), s2 = r2("./src/loader/level-details.ts"), o2 = r2("./src/loader/level-key.ts"), l2 = r2("./src/utils/attr-list.ts"), u = r2("./src/utils/logger.ts"), d = r2("./src/utils/codecs.ts"), c = /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-SESSION-DATA:([^\r\n]*)[\r\n]+/g, h = /#EXT-X-MEDIA:(.*)/g, f = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /(?!#) *(\S[\S ]*)/.source, /#EXT-X-BYTERANGE:*(.+)/.source, /#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /#.*/.source].join("|"), "g"), g = new RegExp([/#(EXTM3U)/.source, /#EXT-X-(PLAYLIST-TYPE):(.+)/.source, /#EXT-X-(MEDIA-SEQUENCE): *(\d+)/.source, /#EXT-X-(SKIP):(.+)/.source, /#EXT-X-(TARGETDURATION): *(\d+)/.source, /#EXT-X-(KEY):(.+)/.source, /#EXT-X-(START):(.+)/.source, /#EXT-X-(ENDLIST)/.source, /#EXT-X-(DISCONTINUITY-SEQ)UENCE: *(\d+)/.source, /#EXT-X-(DIS)CONTINUITY/.source, /#EXT-X-(VERSION):(\d+)/.source, /#EXT-X-(MAP):(.+)/.source, /#EXT-X-(SERVER-CONTROL):(.+)/.source, /#EXT-X-(PART-INF):(.+)/.source, /#EXT-X-(GAP)/.source, /#EXT-X-(BITRATE):\s*(\d+)/.source, /#EXT-X-(PART):(.+)/.source, /#EXT-X-(PRELOAD-HINT):(.+)/.source, /#EXT-X-(RENDITION-REPORT):(.+)/.source, /(#)([^:]*):(.*)/.source, /(#)(.*)(?:.*)\r?\n?/.source].join("|")), v = /\.(mp4|m4s|m4v|m4a)$/i, p = function() {
    function t3() {
    }
    return t3.findGroup = function(t4, e3) {
      for (var r3 = 0; r3 < t4.length; r3++) {
        var i3 = t4[r3];
        if (i3.id === e3)
          return i3;
      }
    }, t3.convertAVC1ToAVCOTI = function(t4) {
      var e3 = t4.split(".");
      if (e3.length > 2) {
        var r3 = e3.shift() + ".";
        return r3 += parseInt(e3.shift()).toString(16), r3 += ("000" + parseInt(e3.shift()).toString(16)).substr(-4);
      }
      return t4;
    }, t3.resolve = function(t4, e3) {
      return n2.buildAbsoluteURL(e3, t4, { alwaysNormalize: true });
    }, t3.parseMasterPlaylist = function(e3, r3) {
      var i3, n3 = [], a3 = {}, s3 = false;
      for (c.lastIndex = 0; null != (i3 = c.exec(e3)); )
        if (i3[1]) {
          var o3 = new l2.AttrList(i3[1]), u2 = { attrs: o3, bitrate: o3.decimalInteger("AVERAGE-BANDWIDTH") || o3.decimalInteger("BANDWIDTH"), name: o3.NAME, url: t3.resolve(i3[2], r3) }, d2 = o3.decimalResolution("RESOLUTION");
          d2 && (u2.width = d2.width, u2.height = d2.height), m((o3.CODECS || "").split(/[ ,]+/).filter(function(t4) {
            return t4;
          }), u2), u2.videoCodec && -1 !== u2.videoCodec.indexOf("avc1") && (u2.videoCodec = t3.convertAVC1ToAVCOTI(u2.videoCodec)), n3.push(u2);
        } else if (i3[3]) {
          var h2 = new l2.AttrList(i3[3]);
          h2["DATA-ID"] && (s3 = true, a3[h2["DATA-ID"]] = h2);
        }
      return { levels: n3, sessionData: s3 ? a3 : null };
    }, t3.parseMasterPlaylistMedia = function(e3, r3, i3, n3) {
      var a3;
      void 0 === n3 && (n3 = []);
      var s3 = [], o3 = 0;
      for (h.lastIndex = 0; null !== (a3 = h.exec(e3)); ) {
        var u2 = new l2.AttrList(a3[1]);
        if (u2.TYPE === i3) {
          var d2 = { attrs: u2, bitrate: 0, id: o3++, groupId: u2["GROUP-ID"], instreamId: u2["INSTREAM-ID"], name: u2.NAME || u2.LANGUAGE || "", type: i3, default: u2.bool("DEFAULT"), autoselect: u2.bool("AUTOSELECT"), forced: u2.bool("FORCED"), lang: u2.LANGUAGE, url: u2.URI ? t3.resolve(u2.URI, r3) : "" };
          if (n3.length) {
            var c2 = t3.findGroup(n3, d2.groupId) || n3[0];
            y(d2, c2, "audioCodec"), y(d2, c2, "textCodec");
          }
          s3.push(d2);
        }
      }
      return s3;
    }, t3.parseLevelPlaylist = function(t4, e3, r3, d2, c2) {
      var h2, p2, m2, y2 = new s2.LevelDetails(e3), T = y2.fragments, S = null, b = 0, L = 0, A = 0, D = 0, k = null, R = new a2.Fragment(d2, e3), _ = -1, I = false;
      for (f.lastIndex = 0, y2.m3u8 = t4; null !== (h2 = f.exec(t4)); ) {
        I && (I = false, (R = new a2.Fragment(d2, e3)).start = A, R.sn = b, R.cc = D, R.level = r3, S && (R.initSegment = S, R.rawProgramDateTime = S.rawProgramDateTime));
        var C = h2[1];
        if (C) {
          R.duration = parseFloat(C);
          var w = (" " + h2[2]).slice(1);
          R.title = w || null, R.tagList.push(w ? ["INF", C, w] : ["INF", C]);
        } else if (h2[3])
          Object(i2.isFiniteNumber)(R.duration) && (R.start = A, m2 && (R.levelkey = m2), R.sn = b, R.level = r3, R.cc = D, R.urlId = c2, T.push(R), R.relurl = (" " + h2[3]).slice(1), E(R, k), k = R, A += R.duration, b++, L = 0, I = true);
        else if (h2[4]) {
          var O = (" " + h2[4]).slice(1);
          k ? R.setByteRange(O, k) : R.setByteRange(O);
        } else if (h2[5])
          R.rawProgramDateTime = (" " + h2[5]).slice(1), R.tagList.push(["PROGRAM-DATE-TIME", R.rawProgramDateTime]), -1 === _ && (_ = T.length);
        else {
          if (!(h2 = h2[0].match(g))) {
            u.logger.warn("No matches on slow regex match for level playlist!");
            continue;
          }
          for (p2 = 1; p2 < h2.length && void 0 === h2[p2]; p2++)
            ;
          var x = (" " + h2[p2]).slice(1), P = (" " + h2[p2 + 1]).slice(1), F = h2[p2 + 2] ? (" " + h2[p2 + 2]).slice(1) : "";
          switch (x) {
            case "PLAYLIST-TYPE":
              y2.type = P.toUpperCase();
              break;
            case "MEDIA-SEQUENCE":
              b = y2.startSN = parseInt(P);
              break;
            case "SKIP":
              var M = new l2.AttrList(P), N = M.decimalInteger("SKIPPED-SEGMENTS");
              if (Object(i2.isFiniteNumber)(N)) {
                y2.skippedSegments = N;
                for (var B = N; B--; )
                  T.unshift(null);
                b += N;
              }
              var U = M.enumeratedString("RECENTLY-REMOVED-DATERANGES");
              U && (y2.recentlyRemovedDateranges = U.split("	"));
              break;
            case "TARGETDURATION":
              y2.targetduration = parseFloat(P);
              break;
            case "VERSION":
              y2.version = parseInt(P);
              break;
            case "EXTM3U":
              break;
            case "ENDLIST":
              y2.live = false;
              break;
            case "#":
              (P || F) && R.tagList.push(F ? [P, F] : [P]);
              break;
            case "DIS":
              D++;
            case "GAP":
              R.tagList.push([x]);
              break;
            case "BITRATE":
              R.tagList.push([x, P]);
              break;
            case "DISCONTINUITY-SEQ":
              D = parseInt(P);
              break;
            case "KEY":
              var G, j = new l2.AttrList(P), K2 = j.enumeratedString("METHOD"), V2 = j.URI, H2 = j.hexadecimalInteger("IV"), W2 = j.enumeratedString("KEYFORMATVERSIONS"), Y2 = j.enumeratedString("KEYID"), q2 = null != (G = j.enumeratedString("KEYFORMAT")) ? G : "identity";
              if (["com.apple.streamingkeydelivery", "com.microsoft.playready", "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed", "com.widevine"].indexOf(q2) > -1) {
                u.logger.warn("Keyformat " + q2 + " is not supported from the manifest");
                continue;
              }
              if ("identity" !== q2)
                continue;
              K2 && (m2 = o2.LevelKey.fromURL(e3, V2), V2 && ["AES-128", "SAMPLE-AES", "SAMPLE-AES-CENC"].indexOf(K2) >= 0 && (m2.method = K2, m2.keyFormat = q2, Y2 && (m2.keyID = Y2), W2 && (m2.keyFormatVersions = W2), m2.iv = H2));
              break;
            case "START":
              var X2 = new l2.AttrList(P).decimalFloatingPoint("TIME-OFFSET");
              Object(i2.isFiniteNumber)(X2) && (y2.startTimeOffset = X2);
              break;
            case "MAP":
              var z2 = new l2.AttrList(P);
              R.relurl = z2.URI, z2.BYTERANGE && R.setByteRange(z2.BYTERANGE), R.level = r3, R.sn = "initSegment", m2 && (R.levelkey = m2), R.initSegment = null, S = R, I = true;
              break;
            case "SERVER-CONTROL":
              var $2 = new l2.AttrList(P);
              y2.canBlockReload = $2.bool("CAN-BLOCK-RELOAD"), y2.canSkipUntil = $2.optionalFloat("CAN-SKIP-UNTIL", 0), y2.canSkipDateRanges = y2.canSkipUntil > 0 && $2.bool("CAN-SKIP-DATERANGES"), y2.partHoldBack = $2.optionalFloat("PART-HOLD-BACK", 0), y2.holdBack = $2.optionalFloat("HOLD-BACK", 0);
              break;
            case "PART-INF":
              var Q2 = new l2.AttrList(P);
              y2.partTarget = Q2.decimalFloatingPoint("PART-TARGET");
              break;
            case "PART":
              var J2 = y2.partList;
              J2 || (J2 = y2.partList = []);
              var Z2 = L > 0 ? J2[J2.length - 1] : void 0, tt2 = L++, et2 = new a2.Part(new l2.AttrList(P), R, e3, tt2, Z2);
              J2.push(et2), R.duration += et2.duration;
              break;
            case "PRELOAD-HINT":
              var rt2 = new l2.AttrList(P);
              y2.preloadHint = rt2;
              break;
            case "RENDITION-REPORT":
              var it2 = new l2.AttrList(P);
              y2.renditionReports = y2.renditionReports || [], y2.renditionReports.push(it2);
              break;
            default:
              u.logger.warn("line parsed but not handled: " + h2);
          }
        }
      }
      k && !k.relurl ? (T.pop(), A -= k.duration, y2.partList && (y2.fragmentHint = k)) : y2.partList && (E(R, k), R.cc = D, y2.fragmentHint = R);
      var nt2 = T.length, at2 = T[0], st2 = T[nt2 - 1];
      if ((A += y2.skippedSegments * y2.targetduration) > 0 && nt2 && st2) {
        y2.averagetargetduration = A / nt2;
        var ot2 = st2.sn;
        y2.endSN = "initSegment" !== ot2 ? ot2 : 0, at2 && (y2.startCC = at2.cc, at2.initSegment || y2.fragments.every(function(t5) {
          return t5.relurl && (e4 = t5.relurl, v.test(null != (r4 = null === (i3 = n2.parseURL(e4)) || void 0 === i3 ? void 0 : i3.path) ? r4 : ""));
          var e4, r4, i3;
        }) && (u.logger.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"), (R = new a2.Fragment(d2, e3)).relurl = st2.relurl, R.level = r3, R.sn = "initSegment", at2.initSegment = R, y2.needSidxRanges = true));
      } else
        y2.endSN = 0, y2.startCC = 0;
      return y2.fragmentHint && (A += y2.fragmentHint.duration), y2.totalduration = A, y2.endCC = D, _ > 0 && function(t5, e4) {
        for (var r4 = t5[e4], i3 = e4; i3--; ) {
          var n3 = t5[i3];
          if (!n3)
            return;
          n3.programDateTime = r4.programDateTime - 1e3 * n3.duration, r4 = n3;
        }
      }(T, _), y2;
    }, t3;
  }();
  function m(t3, e3) {
    ["video", "audio", "text"].forEach(function(r3) {
      var i3 = t3.filter(function(t4) {
        return Object(d.isCodecType)(t4, r3);
      });
      if (i3.length) {
        var n3 = i3.filter(function(t4) {
          return 0 === t4.lastIndexOf("avc1", 0) || 0 === t4.lastIndexOf("mp4a", 0);
        });
        e3[r3 + "Codec"] = n3.length > 0 ? n3[0] : i3[0], t3 = t3.filter(function(t4) {
          return -1 === i3.indexOf(t4);
        });
      }
    }), e3.unknownCodecs = t3;
  }
  function y(t3, e3, r3) {
    var i3 = e3[r3];
    i3 && (t3[r3] = i3);
  }
  function E(t3, e3) {
    t3.rawProgramDateTime ? t3.programDateTime = Date.parse(t3.rawProgramDateTime) : null != e3 && e3.programDateTime && (t3.programDateTime = e3.endProgramDateTime), Object(i2.isFiniteNumber)(t3.programDateTime) || (t3.programDateTime = null, t3.rawProgramDateTime = null);
  }
}, "./src/loader/playlist-loader.ts": function(t2, e2, r2) {
  r2.r(e2);
  var i2 = r2("./src/polyfills/number.ts"), n2 = r2("./src/events.ts"), a2 = r2("./src/errors.ts"), s2 = r2("./src/utils/logger.ts"), o2 = r2("./src/utils/mp4-tools.ts"), l2 = r2("./src/loader/m3u8-parser.ts"), u = r2("./src/types/loader.ts"), d = r2("./src/utils/attr-list.ts");
  function c(t3, e3) {
    var r3 = t3.url;
    return void 0 !== r3 && 0 !== r3.indexOf("data:") || (r3 = e3.url), r3;
  }
  var h = function() {
    function t3(t4) {
      this.hls = void 0, this.loaders = /* @__PURE__ */ Object.create(null), this.hls = t4, this.registerListeners();
    }
    var e3 = t3.prototype;
    return e3.registerListeners = function() {
      var t4 = this.hls;
      t4.on(n2.Events.MANIFEST_LOADING, this.onManifestLoading, this), t4.on(n2.Events.LEVEL_LOADING, this.onLevelLoading, this), t4.on(n2.Events.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), t4.on(n2.Events.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this);
    }, e3.unregisterListeners = function() {
      var t4 = this.hls;
      t4.off(n2.Events.MANIFEST_LOADING, this.onManifestLoading, this), t4.off(n2.Events.LEVEL_LOADING, this.onLevelLoading, this), t4.off(n2.Events.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), t4.off(n2.Events.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this);
    }, e3.createInternalLoader = function(t4) {
      var e4 = this.hls.config, r3 = e4.pLoader, i3 = e4.loader, n3 = new (r3 || i3)(e4);
      return t4.loader = n3, this.loaders[t4.type] = n3, n3;
    }, e3.getInternalLoader = function(t4) {
      return this.loaders[t4.type];
    }, e3.resetInternalLoader = function(t4) {
      this.loaders[t4] && delete this.loaders[t4];
    }, e3.destroyInternalLoaders = function() {
      for (var t4 in this.loaders) {
        var e4 = this.loaders[t4];
        e4 && e4.destroy(), this.resetInternalLoader(t4);
      }
    }, e3.destroy = function() {
      this.unregisterListeners(), this.destroyInternalLoaders();
    }, e3.onManifestLoading = function(t4, e4) {
      var r3 = e4.url;
      this.load({ id: null, groupId: null, level: 0, responseType: "text", type: u.PlaylistContextType.MANIFEST, url: r3, deliveryDirectives: null });
    }, e3.onLevelLoading = function(t4, e4) {
      var r3 = e4.id, i3 = e4.level, n3 = e4.url, a3 = e4.deliveryDirectives;
      this.load({ id: r3, groupId: null, level: i3, responseType: "text", type: u.PlaylistContextType.LEVEL, url: n3, deliveryDirectives: a3 });
    }, e3.onAudioTrackLoading = function(t4, e4) {
      var r3 = e4.id, i3 = e4.groupId, n3 = e4.url, a3 = e4.deliveryDirectives;
      this.load({ id: r3, groupId: i3, level: null, responseType: "text", type: u.PlaylistContextType.AUDIO_TRACK, url: n3, deliveryDirectives: a3 });
    }, e3.onSubtitleTrackLoading = function(t4, e4) {
      var r3 = e4.id, i3 = e4.groupId, n3 = e4.url, a3 = e4.deliveryDirectives;
      this.load({ id: r3, groupId: i3, level: null, responseType: "text", type: u.PlaylistContextType.SUBTITLE_TRACK, url: n3, deliveryDirectives: a3 });
    }, e3.load = function(t4) {
      var e4, r3, i3, n3, a3, o3, l3 = this.hls.config, d2 = this.getInternalLoader(t4);
      if (d2) {
        var c2 = d2.context;
        if (c2 && c2.url === t4.url)
          return void s2.logger.trace("[playlist-loader]: playlist request ongoing");
        s2.logger.log("[playlist-loader]: aborting previous loader for type: " + t4.type), d2.abort();
      }
      switch (t4.type) {
        case u.PlaylistContextType.MANIFEST:
          r3 = l3.manifestLoadingMaxRetry, i3 = l3.manifestLoadingTimeOut, n3 = l3.manifestLoadingRetryDelay, a3 = l3.manifestLoadingMaxRetryTimeout;
          break;
        case u.PlaylistContextType.LEVEL:
        case u.PlaylistContextType.AUDIO_TRACK:
        case u.PlaylistContextType.SUBTITLE_TRACK:
          r3 = 0, i3 = l3.levelLoadingTimeOut;
          break;
        default:
          r3 = l3.levelLoadingMaxRetry, i3 = l3.levelLoadingTimeOut, n3 = l3.levelLoadingRetryDelay, a3 = l3.levelLoadingMaxRetryTimeout;
      }
      if (d2 = this.createInternalLoader(t4), null !== (e4 = t4.deliveryDirectives) && void 0 !== e4 && e4.part && (t4.type === u.PlaylistContextType.LEVEL && null !== t4.level ? o3 = this.hls.levels[t4.level].details : t4.type === u.PlaylistContextType.AUDIO_TRACK && null !== t4.id ? o3 = this.hls.audioTracks[t4.id].details : t4.type === u.PlaylistContextType.SUBTITLE_TRACK && null !== t4.id && (o3 = this.hls.subtitleTracks[t4.id].details), o3)) {
        var h2 = o3.partTarget, f = o3.targetduration;
        h2 && f && (i3 = Math.min(1e3 * Math.max(3 * h2, 0.8 * f), i3));
      }
      var g = { timeout: i3, maxRetry: r3, retryDelay: n3, maxRetryDelay: a3, highWaterMark: 0 }, v = { onSuccess: this.loadsuccess.bind(this), onError: this.loaderror.bind(this), onTimeout: this.loadtimeout.bind(this) };
      d2.load(t4, g, v);
    }, e3.loadsuccess = function(t4, e4, r3, i3) {
      if (void 0 === i3 && (i3 = null), r3.isSidxRequest)
        return this.handleSidxRequest(t4, r3), void this.handlePlaylistLoaded(t4, e4, r3, i3);
      this.resetInternalLoader(r3.type);
      var n3 = t4.data;
      0 === n3.indexOf("#EXTM3U") ? (e4.parsing.start = performance.now(), n3.indexOf("#EXTINF:") > 0 || n3.indexOf("#EXT-X-TARGETDURATION:") > 0 ? this.handleTrackOrLevelPlaylist(t4, e4, r3, i3) : this.handleMasterPlaylist(t4, e4, r3, i3)) : this.handleManifestParsingError(t4, r3, "no EXTM3U delimiter", i3);
    }, e3.loaderror = function(t4, e4, r3) {
      void 0 === r3 && (r3 = null), this.handleNetworkError(e4, r3, false, t4);
    }, e3.loadtimeout = function(t4, e4, r3) {
      void 0 === r3 && (r3 = null), this.handleNetworkError(e4, r3, true);
    }, e3.handleMasterPlaylist = function(t4, e4, r3, i3) {
      var a3 = this.hls, o3 = t4.data, u2 = c(t4, r3), h2 = l2.default.parseMasterPlaylist(o3, u2), f = h2.levels, g = h2.sessionData;
      if (f.length) {
        var v = f.map(function(t5) {
          return { id: t5.attrs.AUDIO, audioCodec: t5.audioCodec };
        }), p = f.map(function(t5) {
          return { id: t5.attrs.SUBTITLES, textCodec: t5.textCodec };
        }), m = l2.default.parseMasterPlaylistMedia(o3, u2, "AUDIO", v), y = l2.default.parseMasterPlaylistMedia(o3, u2, "SUBTITLES", p), E = l2.default.parseMasterPlaylistMedia(o3, u2, "CLOSED-CAPTIONS");
        m.length && (m.some(function(t5) {
          return !t5.url;
        }) || !f[0].audioCodec || f[0].attrs.AUDIO || (s2.logger.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"), m.unshift({ type: "main", name: "main", default: false, autoselect: false, forced: false, id: -1, attrs: new d.AttrList({}), bitrate: 0, url: "" }))), a3.trigger(n2.Events.MANIFEST_LOADED, { levels: f, audioTracks: m, subtitles: y, captions: E, url: u2, stats: e4, networkDetails: i3, sessionData: g });
      } else
        this.handleManifestParsingError(t4, r3, "no level found in manifest", i3);
    }, e3.handleTrackOrLevelPlaylist = function(t4, e4, r3, s3) {
      var o3 = this.hls, h2 = r3.id, f = r3.level, g = r3.type, v = c(t4, r3), p = Object(i2.isFiniteNumber)(h2) ? h2 : 0, m = Object(i2.isFiniteNumber)(f) ? f : p, y = function(t5) {
        switch (t5.type) {
          case u.PlaylistContextType.AUDIO_TRACK:
            return u.PlaylistLevelType.AUDIO;
          case u.PlaylistContextType.SUBTITLE_TRACK:
            return u.PlaylistLevelType.SUBTITLE;
          default:
            return u.PlaylistLevelType.MAIN;
        }
      }(r3), E = l2.default.parseLevelPlaylist(t4.data, v, m, y, p);
      if (E.fragments.length) {
        if (g === u.PlaylistContextType.MANIFEST) {
          var T = { attrs: new d.AttrList({}), bitrate: 0, details: E, name: "", url: v };
          o3.trigger(n2.Events.MANIFEST_LOADED, { levels: [T], audioTracks: [], url: v, stats: e4, networkDetails: s3, sessionData: null });
        }
        if (e4.parsing.end = performance.now(), E.needSidxRanges) {
          var S, b = null === (S = E.fragments[0].initSegment) || void 0 === S ? void 0 : S.url;
          this.load({ url: b, isSidxRequest: true, type: g, level: f, levelDetails: E, id: h2, groupId: null, rangeStart: 0, rangeEnd: 2048, responseType: "arraybuffer", deliveryDirectives: null });
        } else
          r3.levelDetails = E, this.handlePlaylistLoaded(t4, e4, r3, s3);
      } else
        o3.trigger(n2.Events.ERROR, { type: a2.ErrorTypes.NETWORK_ERROR, details: a2.ErrorDetails.LEVEL_EMPTY_ERROR, fatal: false, url: v, reason: "no fragments found in level", level: "number" == typeof r3.level ? r3.level : void 0 });
    }, e3.handleSidxRequest = function(t4, e4) {
      var r3 = Object(o2.parseSegmentIndex)(new Uint8Array(t4.data));
      if (r3) {
        var i3 = r3.references, n3 = e4.levelDetails;
        i3.forEach(function(t5, e5) {
          var i4 = t5.info, a3 = n3.fragments[e5];
          0 === a3.byteRange.length && a3.setByteRange(String(1 + i4.end - i4.start) + "@" + String(i4.start)), a3.initSegment && a3.initSegment.setByteRange(String(r3.moovEndOffset) + "@0");
        });
      }
    }, e3.handleManifestParsingError = function(t4, e4, r3, i3) {
      this.hls.trigger(n2.Events.ERROR, { type: a2.ErrorTypes.NETWORK_ERROR, details: a2.ErrorDetails.MANIFEST_PARSING_ERROR, fatal: e4.type === u.PlaylistContextType.MANIFEST, url: t4.url, reason: r3, response: t4, context: e4, networkDetails: i3 });
    }, e3.handleNetworkError = function(t4, e4, r3, i3) {
      void 0 === r3 && (r3 = false), s2.logger.warn("[playlist-loader]: A network " + (r3 ? "timeout" : "error") + " occurred while loading " + t4.type + " level: " + t4.level + " id: " + t4.id + ' group-id: "' + t4.groupId + '"');
      var o3 = a2.ErrorDetails.UNKNOWN, l3 = false, d2 = this.getInternalLoader(t4);
      switch (t4.type) {
        case u.PlaylistContextType.MANIFEST:
          o3 = r3 ? a2.ErrorDetails.MANIFEST_LOAD_TIMEOUT : a2.ErrorDetails.MANIFEST_LOAD_ERROR, l3 = true;
          break;
        case u.PlaylistContextType.LEVEL:
          o3 = r3 ? a2.ErrorDetails.LEVEL_LOAD_TIMEOUT : a2.ErrorDetails.LEVEL_LOAD_ERROR, l3 = false;
          break;
        case u.PlaylistContextType.AUDIO_TRACK:
          o3 = r3 ? a2.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT : a2.ErrorDetails.AUDIO_TRACK_LOAD_ERROR, l3 = false;
          break;
        case u.PlaylistContextType.SUBTITLE_TRACK:
          o3 = r3 ? a2.ErrorDetails.SUBTITLE_TRACK_LOAD_TIMEOUT : a2.ErrorDetails.SUBTITLE_LOAD_ERROR, l3 = false;
      }
      d2 && this.resetInternalLoader(t4.type);
      var c2 = { type: a2.ErrorTypes.NETWORK_ERROR, details: o3, fatal: l3, url: t4.url, loader: d2, context: t4, networkDetails: e4 };
      i3 && (c2.response = i3), this.hls.trigger(n2.Events.ERROR, c2);
    }, e3.handlePlaylistLoaded = function(t4, e4, r3, i3) {
      var a3 = r3.type, s3 = r3.level, o3 = r3.id, l3 = r3.groupId, d2 = r3.loader, c2 = r3.levelDetails, h2 = r3.deliveryDirectives;
      if (null != c2 && c2.targetduration) {
        if (d2)
          switch (c2.live && (d2.getCacheAge && (c2.ageHeader = d2.getCacheAge() || 0), d2.getCacheAge && !isNaN(c2.ageHeader) || (c2.ageHeader = 0)), a3) {
            case u.PlaylistContextType.MANIFEST:
            case u.PlaylistContextType.LEVEL:
              this.hls.trigger(n2.Events.LEVEL_LOADED, { details: c2, level: s3 || 0, id: o3 || 0, stats: e4, networkDetails: i3, deliveryDirectives: h2 });
              break;
            case u.PlaylistContextType.AUDIO_TRACK:
              this.hls.trigger(n2.Events.AUDIO_TRACK_LOADED, { details: c2, id: o3 || 0, groupId: l3 || "", stats: e4, networkDetails: i3, deliveryDirectives: h2 });
              break;
            case u.PlaylistContextType.SUBTITLE_TRACK:
              this.hls.trigger(n2.Events.SUBTITLE_TRACK_LOADED, { details: c2, id: o3 || 0, groupId: l3 || "", stats: e4, networkDetails: i3, deliveryDirectives: h2 });
          }
      } else
        this.handleManifestParsingError(t4, r3, "invalid target duration", i3);
    }, t3;
  }();
  e2.default = h;
}, "./src/polyfills/number.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "isFiniteNumber", function() {
    return i2;
  }), r2.d(e2, "MAX_SAFE_INTEGER", function() {
    return n2;
  });
  var i2 = Number.isFinite || function(t3) {
    return "number" == typeof t3 && isFinite(t3);
  }, n2 = Number.MAX_SAFE_INTEGER || 9007199254740991;
}, "./src/remux/aac-helper.ts": function(t2, e2, r2) {
  r2.r(e2);
  var i2 = function() {
    function t3() {
    }
    return t3.getSilentFrame = function(t4, e3) {
      switch (t4) {
        case "mp4a.40.2":
          if (1 === e3)
            return new Uint8Array([0, 200, 0, 128, 35, 128]);
          if (2 === e3)
            return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
          if (3 === e3)
            return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
          if (4 === e3)
            return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
          if (5 === e3)
            return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
          if (6 === e3)
            return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
          break;
        default:
          if (1 === e3)
            return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
          if (2 === e3)
            return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
          if (3 === e3)
            return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
      }
    }, t3;
  }();
  e2.default = i2;
}, "./src/remux/mp4-generator.ts": function(t2, e2, r2) {
  r2.r(e2);
  var i2 = Math.pow(2, 32) - 1, n2 = function() {
    function t3() {
    }
    return t3.init = function() {
      var e3;
      for (e3 in t3.types = { avc1: [], avcC: [], btrt: [], dinf: [], dref: [], esds: [], ftyp: [], hdlr: [], mdat: [], mdhd: [], mdia: [], mfhd: [], minf: [], moof: [], moov: [], mp4a: [], ".mp3": [], mvex: [], mvhd: [], pasp: [], sdtp: [], stbl: [], stco: [], stsc: [], stsd: [], stsz: [], stts: [], tfdt: [], tfhd: [], traf: [], trak: [], trun: [], trex: [], tkhd: [], vmhd: [], smhd: [] }, t3.types)
        t3.types.hasOwnProperty(e3) && (t3.types[e3] = [e3.charCodeAt(0), e3.charCodeAt(1), e3.charCodeAt(2), e3.charCodeAt(3)]);
      var r3 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]), i3 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
      t3.HDLR_TYPES = { video: r3, audio: i3 };
      var n3 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]), a2 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
      t3.STTS = t3.STSC = t3.STCO = a2, t3.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), t3.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), t3.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), t3.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
      var s2 = new Uint8Array([105, 115, 111, 109]), o2 = new Uint8Array([97, 118, 99, 49]), l2 = new Uint8Array([0, 0, 0, 1]);
      t3.FTYP = t3.box(t3.types.ftyp, s2, l2, s2, o2), t3.DINF = t3.box(t3.types.dinf, t3.box(t3.types.dref, n3));
    }, t3.box = function(t4) {
      for (var e3 = 8, r3 = arguments.length, i3 = new Array(r3 > 1 ? r3 - 1 : 0), n3 = 1; n3 < r3; n3++)
        i3[n3 - 1] = arguments[n3];
      for (var a2 = i3.length, s2 = a2; a2--; )
        e3 += i3[a2].byteLength;
      var o2 = new Uint8Array(e3);
      for (o2[0] = e3 >> 24 & 255, o2[1] = e3 >> 16 & 255, o2[2] = e3 >> 8 & 255, o2[3] = 255 & e3, o2.set(t4, 4), a2 = 0, e3 = 8; a2 < s2; a2++)
        o2.set(i3[a2], e3), e3 += i3[a2].byteLength;
      return o2;
    }, t3.hdlr = function(e3) {
      return t3.box(t3.types.hdlr, t3.HDLR_TYPES[e3]);
    }, t3.mdat = function(e3) {
      return t3.box(t3.types.mdat, e3);
    }, t3.mdhd = function(e3, r3) {
      r3 *= e3;
      var n3 = Math.floor(r3 / (i2 + 1)), a2 = Math.floor(r3 % (i2 + 1));
      return t3.box(t3.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e3 >> 24 & 255, e3 >> 16 & 255, e3 >> 8 & 255, 255 & e3, n3 >> 24, n3 >> 16 & 255, n3 >> 8 & 255, 255 & n3, a2 >> 24, a2 >> 16 & 255, a2 >> 8 & 255, 255 & a2, 85, 196, 0, 0]));
    }, t3.mdia = function(e3) {
      return t3.box(t3.types.mdia, t3.mdhd(e3.timescale, e3.duration), t3.hdlr(e3.type), t3.minf(e3));
    }, t3.mfhd = function(e3) {
      return t3.box(t3.types.mfhd, new Uint8Array([0, 0, 0, 0, e3 >> 24, e3 >> 16 & 255, e3 >> 8 & 255, 255 & e3]));
    }, t3.minf = function(e3) {
      return "audio" === e3.type ? t3.box(t3.types.minf, t3.box(t3.types.smhd, t3.SMHD), t3.DINF, t3.stbl(e3)) : t3.box(t3.types.minf, t3.box(t3.types.vmhd, t3.VMHD), t3.DINF, t3.stbl(e3));
    }, t3.moof = function(e3, r3, i3) {
      return t3.box(t3.types.moof, t3.mfhd(e3), t3.traf(i3, r3));
    }, t3.moov = function(e3) {
      for (var r3 = e3.length, i3 = []; r3--; )
        i3[r3] = t3.trak(e3[r3]);
      return t3.box.apply(null, [t3.types.moov, t3.mvhd(e3[0].timescale, e3[0].duration)].concat(i3).concat(t3.mvex(e3)));
    }, t3.mvex = function(e3) {
      for (var r3 = e3.length, i3 = []; r3--; )
        i3[r3] = t3.trex(e3[r3]);
      return t3.box.apply(null, [t3.types.mvex].concat(i3));
    }, t3.mvhd = function(e3, r3) {
      r3 *= e3;
      var n3 = Math.floor(r3 / (i2 + 1)), a2 = Math.floor(r3 % (i2 + 1)), s2 = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e3 >> 24 & 255, e3 >> 16 & 255, e3 >> 8 & 255, 255 & e3, n3 >> 24, n3 >> 16 & 255, n3 >> 8 & 255, 255 & n3, a2 >> 24, a2 >> 16 & 255, a2 >> 8 & 255, 255 & a2, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
      return t3.box(t3.types.mvhd, s2);
    }, t3.sdtp = function(e3) {
      var r3, i3, n3 = e3.samples || [], a2 = new Uint8Array(4 + n3.length);
      for (r3 = 0; r3 < n3.length; r3++)
        i3 = n3[r3].flags, a2[r3 + 4] = i3.dependsOn << 4 | i3.isDependedOn << 2 | i3.hasRedundancy;
      return t3.box(t3.types.sdtp, a2);
    }, t3.stbl = function(e3) {
      return t3.box(t3.types.stbl, t3.stsd(e3), t3.box(t3.types.stts, t3.STTS), t3.box(t3.types.stsc, t3.STSC), t3.box(t3.types.stsz, t3.STSZ), t3.box(t3.types.stco, t3.STCO));
    }, t3.avc1 = function(e3) {
      var r3, i3, n3, a2 = [], s2 = [];
      for (r3 = 0; r3 < e3.sps.length; r3++)
        n3 = (i3 = e3.sps[r3]).byteLength, a2.push(n3 >>> 8 & 255), a2.push(255 & n3), a2 = a2.concat(Array.prototype.slice.call(i3));
      for (r3 = 0; r3 < e3.pps.length; r3++)
        n3 = (i3 = e3.pps[r3]).byteLength, s2.push(n3 >>> 8 & 255), s2.push(255 & n3), s2 = s2.concat(Array.prototype.slice.call(i3));
      var o2 = t3.box(t3.types.avcC, new Uint8Array([1, a2[3], a2[4], a2[5], 255, 224 | e3.sps.length].concat(a2).concat([e3.pps.length]).concat(s2))), l2 = e3.width, u = e3.height, d = e3.pixelRatio[0], c = e3.pixelRatio[1];
      return t3.box(t3.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l2 >> 8 & 255, 255 & l2, u >> 8 & 255, 255 & u, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), o2, t3.box(t3.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), t3.box(t3.types.pasp, new Uint8Array([d >> 24, d >> 16 & 255, d >> 8 & 255, 255 & d, c >> 24, c >> 16 & 255, c >> 8 & 255, 255 & c])));
    }, t3.esds = function(t4) {
      var e3 = t4.config.length;
      return new Uint8Array([0, 0, 0, 0, 3, 23 + e3, 0, 1, 0, 4, 15 + e3, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([e3]).concat(t4.config).concat([6, 1, 2]));
    }, t3.mp4a = function(e3) {
      var r3 = e3.samplerate;
      return t3.box(t3.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e3.channelCount, 0, 16, 0, 0, 0, 0, r3 >> 8 & 255, 255 & r3, 0, 0]), t3.box(t3.types.esds, t3.esds(e3)));
    }, t3.mp3 = function(e3) {
      var r3 = e3.samplerate;
      return t3.box(t3.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e3.channelCount, 0, 16, 0, 0, 0, 0, r3 >> 8 & 255, 255 & r3, 0, 0]));
    }, t3.stsd = function(e3) {
      return "audio" === e3.type ? e3.isAAC || "mp3" !== e3.codec ? t3.box(t3.types.stsd, t3.STSD, t3.mp4a(e3)) : t3.box(t3.types.stsd, t3.STSD, t3.mp3(e3)) : t3.box(t3.types.stsd, t3.STSD, t3.avc1(e3));
    }, t3.tkhd = function(e3) {
      var r3 = e3.id, n3 = e3.duration * e3.timescale, a2 = e3.width, s2 = e3.height, o2 = Math.floor(n3 / (i2 + 1)), l2 = Math.floor(n3 % (i2 + 1));
      return t3.box(t3.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, r3 >> 24 & 255, r3 >> 16 & 255, r3 >> 8 & 255, 255 & r3, 0, 0, 0, 0, o2 >> 24, o2 >> 16 & 255, o2 >> 8 & 255, 255 & o2, l2 >> 24, l2 >> 16 & 255, l2 >> 8 & 255, 255 & l2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, a2 >> 8 & 255, 255 & a2, 0, 0, s2 >> 8 & 255, 255 & s2, 0, 0]));
    }, t3.traf = function(e3, r3) {
      var n3 = t3.sdtp(e3), a2 = e3.id, s2 = Math.floor(r3 / (i2 + 1)), o2 = Math.floor(r3 % (i2 + 1));
      return t3.box(t3.types.traf, t3.box(t3.types.tfhd, new Uint8Array([0, 0, 0, 0, a2 >> 24, a2 >> 16 & 255, a2 >> 8 & 255, 255 & a2])), t3.box(t3.types.tfdt, new Uint8Array([1, 0, 0, 0, s2 >> 24, s2 >> 16 & 255, s2 >> 8 & 255, 255 & s2, o2 >> 24, o2 >> 16 & 255, o2 >> 8 & 255, 255 & o2])), t3.trun(e3, n3.length + 16 + 20 + 8 + 16 + 8 + 8), n3);
    }, t3.trak = function(e3) {
      return e3.duration = e3.duration || 4294967295, t3.box(t3.types.trak, t3.tkhd(e3), t3.mdia(e3));
    }, t3.trex = function(e3) {
      var r3 = e3.id;
      return t3.box(t3.types.trex, new Uint8Array([0, 0, 0, 0, r3 >> 24, r3 >> 16 & 255, r3 >> 8 & 255, 255 & r3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]));
    }, t3.trun = function(e3, r3) {
      var i3, n3, a2, s2, o2, l2, u = e3.samples || [], d = u.length, c = 12 + 16 * d, h = new Uint8Array(c);
      for (r3 += 8 + c, h.set([0, 0, 15, 1, d >>> 24 & 255, d >>> 16 & 255, d >>> 8 & 255, 255 & d, r3 >>> 24 & 255, r3 >>> 16 & 255, r3 >>> 8 & 255, 255 & r3], 0), i3 = 0; i3 < d; i3++)
        a2 = (n3 = u[i3]).duration, s2 = n3.size, o2 = n3.flags, l2 = n3.cts, h.set([a2 >>> 24 & 255, a2 >>> 16 & 255, a2 >>> 8 & 255, 255 & a2, s2 >>> 24 & 255, s2 >>> 16 & 255, s2 >>> 8 & 255, 255 & s2, o2.isLeading << 2 | o2.dependsOn, o2.isDependedOn << 6 | o2.hasRedundancy << 4 | o2.paddingValue << 1 | o2.isNonSync, 61440 & o2.degradPrio, 15 & o2.degradPrio, l2 >>> 24 & 255, l2 >>> 16 & 255, l2 >>> 8 & 255, 255 & l2], 12 + 16 * i3);
      return t3.box(t3.types.trun, h);
    }, t3.initSegment = function(e3) {
      t3.types || t3.init();
      var r3 = t3.moov(e3), i3 = new Uint8Array(t3.FTYP.byteLength + r3.byteLength);
      return i3.set(t3.FTYP), i3.set(r3, t3.FTYP.byteLength), i3;
    }, t3;
  }();
  n2.types = void 0, n2.HDLR_TYPES = void 0, n2.STTS = void 0, n2.STSC = void 0, n2.STCO = void 0, n2.STSZ = void 0, n2.VMHD = void 0, n2.SMHD = void 0, n2.STSD = void 0, n2.FTYP = void 0, n2.DINF = void 0, e2.default = n2;
}, "./src/remux/mp4-remuxer.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "default", function() {
    return v;
  }), r2.d(e2, "normalizePts", function() {
    return p;
  });
  var i2 = r2("./src/polyfills/number.ts"), n2 = r2("./src/remux/aac-helper.ts"), a2 = r2("./src/remux/mp4-generator.ts"), s2 = r2("./src/events.ts"), o2 = r2("./src/errors.ts"), l2 = r2("./src/utils/logger.ts"), u = r2("./src/types/loader.ts"), d = r2("./src/utils/timescale-conversion.ts");
  function c() {
    return (c = Object.assign || function(t3) {
      for (var e3 = 1; e3 < arguments.length; e3++) {
        var r3 = arguments[e3];
        for (var i3 in r3)
          Object.prototype.hasOwnProperty.call(r3, i3) && (t3[i3] = r3[i3]);
      }
      return t3;
    }).apply(this, arguments);
  }
  var h = null, f = null, g = false, v = function() {
    function t3(t4, e4, r3, i3) {
      if (this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.ISGenerated = false, this._initPTS = void 0, this._initDTS = void 0, this.nextAvcDts = null, this.nextAudioPts = null, this.isAudioContiguous = false, this.isVideoContiguous = false, this.observer = t4, this.config = e4, this.typeSupported = r3, this.ISGenerated = false, null === h) {
        var n3 = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
        h = n3 ? parseInt(n3[1]) : 0;
      }
      if (null === f) {
        var a3 = navigator.userAgent.match(/Safari\/(\d+)/i);
        f = a3 ? parseInt(a3[1]) : 0;
      }
      g = !!h && h < 75 || !!f && f < 600;
    }
    var e3 = t3.prototype;
    return e3.destroy = function() {
    }, e3.resetTimeStamp = function(t4) {
      l2.logger.log("[mp4-remuxer]: initPTS & initDTS reset"), this._initPTS = this._initDTS = t4;
    }, e3.resetNextTimestamp = function() {
      l2.logger.log("[mp4-remuxer]: reset next timestamp"), this.isVideoContiguous = false, this.isAudioContiguous = false;
    }, e3.resetInitSegment = function() {
      l2.logger.log("[mp4-remuxer]: ISGenerated flag reset"), this.ISGenerated = false;
    }, e3.getVideoStartPts = function(t4) {
      var e4 = false, r3 = t4.reduce(function(t5, r4) {
        var i3 = r4.pts - t5;
        return i3 < -4294967296 ? (e4 = true, p(t5, r4.pts)) : i3 > 0 ? t5 : r4.pts;
      }, t4[0].pts);
      return e4 && l2.logger.debug("PTS rollover detected"), r3;
    }, e3.remux = function(t4, e4, r3, i3, n3, a3, s3, o3) {
      var d2, c2, h2, f2, g2, v2, m2 = n3, y2 = n3, E = t4.pid > -1, T = e4.pid > -1, S = e4.samples.length, b = t4.samples.length > 0, L = S > 1;
      if ((!E || b) && (!T || L) || this.ISGenerated || s3) {
        this.ISGenerated || (h2 = this.generateIS(t4, e4, n3));
        var A = this.isVideoContiguous, D = -1;
        if (L && (D = function(t5) {
          for (var e5 = 0; e5 < t5.length; e5++)
            if (t5[e5].key)
              return e5;
          return -1;
        }(e4.samples), !A && this.config.forceKeyFrameOnDiscontinuity))
          if (v2 = true, D > 0) {
            l2.logger.warn("[mp4-remuxer]: Dropped " + D + " out of " + S + " video samples due to a missing keyframe");
            var k = this.getVideoStartPts(e4.samples);
            e4.samples = e4.samples.slice(D), e4.dropped += D, y2 += (e4.samples[0].pts - k) / (e4.timescale || 9e4);
          } else
            -1 === D && (l2.logger.warn("[mp4-remuxer]: No keyframe found out of " + S + " video samples"), v2 = false);
        if (this.ISGenerated) {
          if (b && L) {
            var R = this.getVideoStartPts(e4.samples), _ = (p(t4.samples[0].pts, R) - R) / e4.inputTimeScale;
            m2 += Math.max(0, _), y2 += Math.max(0, -_);
          }
          if (b) {
            if (t4.samplerate || (l2.logger.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"), h2 = this.generateIS(t4, e4, n3)), c2 = this.remuxAudio(t4, m2, this.isAudioContiguous, a3, T || L || o3 === u.PlaylistLevelType.AUDIO ? y2 : void 0), L) {
              var I = c2 ? c2.endPTS - c2.startPTS : 0;
              e4.inputTimeScale || (l2.logger.warn("[mp4-remuxer]: regenerate InitSegment as video detected"), h2 = this.generateIS(t4, e4, n3)), d2 = this.remuxVideo(e4, y2, A, I);
            }
          } else
            L && (d2 = this.remuxVideo(e4, y2, A, 0));
          d2 && (d2.firstKeyFrame = D, d2.independent = -1 !== D);
        }
      }
      return this.ISGenerated && (r3.samples.length && (g2 = this.remuxID3(r3, n3)), i3.samples.length && (f2 = this.remuxText(i3, n3))), { audio: c2, video: d2, initSegment: h2, independent: v2, text: f2, id3: g2 };
    }, e3.generateIS = function(t4, e4, r3) {
      var n3, s3, o3, l3 = t4.samples, u2 = e4.samples, d2 = this.typeSupported, c2 = {}, h2 = !Object(i2.isFiniteNumber)(this._initPTS), f2 = "audio/mp4";
      if (h2 && (n3 = s3 = 1 / 0), t4.config && l3.length && (t4.timescale = t4.samplerate, t4.isAAC || (d2.mpeg ? (f2 = "audio/mpeg", t4.codec = "") : d2.mp3 && (t4.codec = "mp3")), c2.audio = { id: "audio", container: f2, codec: t4.codec, initSegment: !t4.isAAC && d2.mpeg ? new Uint8Array(0) : a2.default.initSegment([t4]), metadata: { channelCount: t4.channelCount } }, h2 && (o3 = t4.inputTimeScale, n3 = s3 = l3[0].pts - Math.round(o3 * r3))), e4.sps && e4.pps && u2.length && (e4.timescale = e4.inputTimeScale, c2.video = { id: "main", container: "video/mp4", codec: e4.codec, initSegment: a2.default.initSegment([e4]), metadata: { width: e4.width, height: e4.height } }, h2)) {
        o3 = e4.inputTimeScale;
        var g2 = this.getVideoStartPts(u2), v2 = Math.round(o3 * r3);
        s3 = Math.min(s3, p(u2[0].dts, g2) - v2), n3 = Math.min(n3, g2 - v2);
      }
      if (Object.keys(c2).length)
        return this.ISGenerated = true, h2 && (this._initPTS = n3, this._initDTS = s3), { tracks: c2, initPTS: n3, timescale: o3 };
    }, e3.remuxVideo = function(t4, e4, r3, i3) {
      var n3, u2, f2, v2 = t4.inputTimeScale, y2 = t4.samples, E = [], T = y2.length, S = this._initPTS, b = this.nextAvcDts, L = 8, A = Number.POSITIVE_INFINITY, D = Number.NEGATIVE_INFINITY, k = 0, R = false;
      r3 && null !== b || (b = e4 * v2 - (y2[0].pts - p(y2[0].dts, y2[0].pts)));
      for (var _ = 0; _ < T; _++) {
        var I = y2[_];
        I.pts = p(I.pts - S, b), I.dts = p(I.dts - S, b), I.dts > I.pts && (k = Math.max(Math.min(k, I.pts - I.dts), -18e3)), I.dts < y2[_ > 0 ? _ - 1 : _].dts && (R = true);
      }
      R && y2.sort(function(t5, e5) {
        var r4 = t5.dts - e5.dts, i4 = t5.pts - e5.pts;
        return r4 || i4;
      }), u2 = y2[0].dts, f2 = y2[y2.length - 1].dts;
      var C = Math.round((f2 - u2) / (T - 1));
      if (k < 0) {
        if (k < -2 * C) {
          l2.logger.warn("PTS < DTS detected in video samples, offsetting DTS from PTS by " + Object(d.toMsFromMpegTsClock)(-C, true) + " ms");
          for (var w = k, O = 0; O < T; O++)
            y2[O].dts = w = Math.max(w, y2[O].pts - C), y2[O].pts = Math.max(w, y2[O].pts);
        } else {
          l2.logger.warn("PTS < DTS detected in video samples, shifting DTS by " + Object(d.toMsFromMpegTsClock)(k, true) + " ms to overcome this issue");
          for (var x = 0; x < T; x++)
            y2[x].dts = y2[x].dts + k;
        }
        u2 = y2[0].dts;
      }
      if (r3) {
        var P = u2 - b, F = P > C;
        if (F || P < -1) {
          F ? l2.logger.warn("AVC: " + Object(d.toMsFromMpegTsClock)(P, true) + " ms (" + P + "dts) hole between fragments detected, filling it") : l2.logger.warn("AVC: " + Object(d.toMsFromMpegTsClock)(-P, true) + " ms (" + P + "dts) overlapping between fragments detected"), u2 = b;
          var M = y2[0].pts - P;
          y2[0].dts = u2, y2[0].pts = M, l2.logger.log("Video: First PTS/DTS adjusted: " + Object(d.toMsFromMpegTsClock)(M, true) + "/" + Object(d.toMsFromMpegTsClock)(u2, true) + ", delta: " + Object(d.toMsFromMpegTsClock)(P, true) + " ms");
        }
      }
      g && (u2 = Math.max(0, u2));
      for (var N = 0, B = 0, U = 0; U < T; U++) {
        for (var G = y2[U], j = G.units, K2 = j.length, V2 = 0, H2 = 0; H2 < K2; H2++)
          V2 += j[H2].data.length;
        B += V2, N += K2, G.length = V2, G.dts = Math.max(G.dts, u2), G.pts = Math.max(G.pts, G.dts, 0), A = Math.min(G.pts, A), D = Math.max(G.pts, D);
      }
      f2 = y2[T - 1].dts;
      var W2, Y2 = B + 4 * N + 8;
      try {
        W2 = new Uint8Array(Y2);
      } catch (dt2) {
        return void this.observer.emit(s2.Events.ERROR, s2.Events.ERROR, { type: o2.ErrorTypes.MUX_ERROR, details: o2.ErrorDetails.REMUX_ALLOC_ERROR, fatal: false, bytes: Y2, reason: "fail allocating video mdat " + Y2 });
      }
      var q2 = new DataView(W2.buffer);
      q2.setUint32(0, Y2), W2.set(a2.default.types.mdat, 4);
      for (var X2 = 0; X2 < T; X2++) {
        for (var z2 = y2[X2], $2 = z2.units, Q2 = 0, J2 = 0, Z2 = $2.length; J2 < Z2; J2++) {
          var tt2 = $2[J2], et2 = tt2.data, rt2 = tt2.data.byteLength;
          q2.setUint32(L, rt2), L += 4, W2.set(et2, L), L += rt2, Q2 += 4 + rt2;
        }
        if (X2 < T - 1)
          n3 = y2[X2 + 1].dts - z2.dts;
        else {
          var it2 = this.config, nt2 = z2.dts - y2[X2 > 0 ? X2 - 1 : X2].dts;
          if (it2.stretchShortVideoTrack && null !== this.nextAudioPts) {
            var at2 = Math.floor(it2.maxBufferHole * v2), st2 = (i3 ? A + i3 * v2 : this.nextAudioPts) - z2.pts;
            st2 > at2 ? ((n3 = st2 - nt2) < 0 && (n3 = nt2), l2.logger.log("[mp4-remuxer]: It is approximately " + st2 / 90 + " ms to the next segment; using duration " + n3 / 90 + " ms for the last video frame.")) : n3 = nt2;
          } else
            n3 = nt2;
        }
        var ot2 = Math.round(z2.pts - z2.dts);
        E.push(new m(z2.key, n3, Q2, ot2));
      }
      if (E.length && h && h < 70) {
        var lt2 = E[0].flags;
        lt2.dependsOn = 2, lt2.isNonSync = 0;
      }
      console.assert(void 0 !== n3, "mp4SampleDuration must be computed"), this.nextAvcDts = b = f2 + n3, this.isVideoContiguous = true;
      var ut2 = { data1: a2.default.moof(t4.sequenceNumber++, u2, c({}, t4, { samples: E })), data2: W2, startPTS: A / v2, endPTS: (D + n3) / v2, startDTS: u2 / v2, endDTS: b / v2, type: "video", hasAudio: false, hasVideo: true, nb: E.length, dropped: t4.dropped };
      return t4.samples = [], t4.dropped = 0, console.assert(W2.length, "MDAT length must not be zero"), ut2;
    }, e3.remuxAudio = function(t4, e4, r3, i3, u2) {
      var d2 = t4.inputTimeScale, h2 = d2 / (t4.samplerate ? t4.samplerate : d2), f2 = t4.isAAC ? 1024 : 1152, g2 = f2 * h2, v2 = this._initPTS, y2 = !t4.isAAC && this.typeSupported.mpeg, E = [], T = t4.samples, S = y2 ? 0 : 8, b = this.nextAudioPts || -1, L = e4 * d2;
      if (this.isAudioContiguous = r3 = r3 || T.length && b > 0 && (i3 && Math.abs(L - b) < 9e3 || Math.abs(p(T[0].pts - v2, L) - b) < 20 * g2), T.forEach(function(t5) {
        t5.pts = p(t5.pts - v2, L);
      }), !r3 || b < 0) {
        if (!(T = T.filter(function(t5) {
          return t5.pts >= 0;
        })).length)
          return;
        b = 0 === u2 ? 0 : i3 ? Math.max(0, L) : T[0].pts;
      }
      if (t4.isAAC)
        for (var A = void 0 !== u2, D = this.config.maxAudioFramesDrift, k = 0, R = b; k < T.length; k++) {
          var _ = T[k], I = _.pts, C = I - R, w = Math.abs(1e3 * C / d2);
          if (C <= -D * g2 && A)
            0 === k && (l2.logger.warn("Audio frame @ " + (I / d2).toFixed(3) + "s overlaps nextAudioPts by " + Math.round(1e3 * C / d2) + " ms."), this.nextAudioPts = b = R = I);
          else if (C >= D * g2 && w < 1e4 && A) {
            var O = Math.round(C / g2);
            (R = I - O * g2) < 0 && (O--, R += g2), 0 === k && (this.nextAudioPts = b = R), l2.logger.warn("[mp4-remuxer]: Injecting " + O + " audio frame @ " + (R / d2).toFixed(3) + "s due to " + Math.round(1e3 * C / d2) + " ms gap.");
            for (var x = 0; x < O; x++) {
              var P = Math.max(R, 0), F = n2.default.getSilentFrame(t4.manifestCodec || t4.codec, t4.channelCount);
              F || (l2.logger.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."), F = _.unit.subarray()), T.splice(k, 0, { unit: F, pts: P }), R += g2, k++;
            }
          }
          _.pts = R, R += g2;
        }
      for (var M, N = null, B = null, U = 0, G = T.length; G--; )
        U += T[G].unit.byteLength;
      for (var j = 0, K2 = T.length; j < K2; j++) {
        var V2 = T[j], H2 = V2.unit, W2 = V2.pts;
        if (null !== B)
          E[j - 1].duration = Math.round((W2 - B) / h2);
        else {
          if (r3 && t4.isAAC && (W2 = b), N = W2, !(U > 0))
            return;
          U += S;
          try {
            M = new Uint8Array(U);
          } catch (Z2) {
            return void this.observer.emit(s2.Events.ERROR, s2.Events.ERROR, { type: o2.ErrorTypes.MUX_ERROR, details: o2.ErrorDetails.REMUX_ALLOC_ERROR, fatal: false, bytes: U, reason: "fail allocating audio mdat " + U });
          }
          y2 || (new DataView(M.buffer).setUint32(0, U), M.set(a2.default.types.mdat, 4));
        }
        M.set(H2, S);
        var Y2 = H2.byteLength;
        S += Y2, E.push(new m(true, f2, Y2, 0)), B = W2;
      }
      var q2 = E.length;
      if (q2) {
        var X2 = E[E.length - 1];
        this.nextAudioPts = b = B + h2 * X2.duration;
        var z2 = y2 ? new Uint8Array(0) : a2.default.moof(t4.sequenceNumber++, N / h2, c({}, t4, { samples: E }));
        t4.samples = [];
        var $2 = N / d2, Q2 = b / d2, J2 = { data1: z2, data2: M, startPTS: $2, endPTS: Q2, startDTS: $2, endDTS: Q2, type: "audio", hasAudio: true, hasVideo: false, nb: q2 };
        return this.isAudioContiguous = true, console.assert(M.length, "MDAT length must not be zero"), J2;
      }
    }, e3.remuxEmptyAudio = function(t4, e4, r3, i3) {
      var a3 = t4.inputTimeScale, s3 = a3 / (t4.samplerate ? t4.samplerate : a3), o3 = this.nextAudioPts, u2 = (null !== o3 ? o3 : i3.startDTS * a3) + this._initDTS, d2 = i3.endDTS * a3 + this._initDTS, c2 = 1024 * s3, h2 = Math.ceil((d2 - u2) / c2), f2 = n2.default.getSilentFrame(t4.manifestCodec || t4.codec, t4.channelCount);
      if (l2.logger.warn("[mp4-remuxer]: remux empty Audio"), f2) {
        for (var g2 = [], v2 = 0; v2 < h2; v2++) {
          var p2 = u2 + v2 * c2;
          g2.push({ unit: f2, pts: p2, dts: p2 });
        }
        return t4.samples = g2, this.remuxAudio(t4, e4, r3, false);
      }
      l2.logger.trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec");
    }, e3.remuxID3 = function(t4, e4) {
      var r3 = t4.samples.length;
      if (r3) {
        for (var i3 = t4.inputTimeScale, n3 = this._initPTS, a3 = this._initDTS, s3 = 0; s3 < r3; s3++) {
          var o3 = t4.samples[s3];
          o3.pts = p(o3.pts - n3, e4 * i3) / i3, o3.dts = p(o3.dts - a3, e4 * i3) / i3;
        }
        var l3 = t4.samples;
        return t4.samples = [], { samples: l3 };
      }
    }, e3.remuxText = function(t4, e4) {
      var r3 = t4.samples.length;
      if (r3) {
        for (var i3 = t4.inputTimeScale, n3 = this._initPTS, a3 = 0; a3 < r3; a3++) {
          var s3 = t4.samples[a3];
          s3.pts = p(s3.pts - n3, e4 * i3) / i3;
        }
        t4.samples.sort(function(t5, e5) {
          return t5.pts - e5.pts;
        });
        var o3 = t4.samples;
        return t4.samples = [], { samples: o3 };
      }
    }, t3;
  }();
  function p(t3, e3) {
    var r3;
    if (null === e3)
      return t3;
    for (r3 = e3 < t3 ? -8589934592 : 8589934592; Math.abs(t3 - e3) > 4294967296; )
      t3 += r3;
    return t3;
  }
  var m = function(t3, e3, r3, i3) {
    this.size = void 0, this.duration = void 0, this.cts = void 0, this.flags = void 0, this.duration = e3, this.size = r3, this.cts = i3, this.flags = new y(t3);
  }, y = function(t3) {
    this.isLeading = 0, this.isDependedOn = 0, this.hasRedundancy = 0, this.degradPrio = 0, this.dependsOn = 1, this.isNonSync = 1, this.dependsOn = t3 ? 2 : 1, this.isNonSync = t3 ? 0 : 1;
  };
}, "./src/remux/passthrough-remuxer.ts": function(t2, e2, r2) {
  r2.r(e2);
  var i2 = r2("./src/polyfills/number.ts"), n2 = r2("./src/utils/mp4-tools.ts"), a2 = r2("./src/loader/fragment.ts"), s2 = r2("./src/utils/logger.ts"), o2 = function() {
    function t3() {
      this.emitInitSegment = false, this.audioCodec = void 0, this.videoCodec = void 0, this.initData = void 0, this.initPTS = void 0, this.initTracks = void 0, this.lastEndDTS = null;
    }
    var e3 = t3.prototype;
    return e3.destroy = function() {
    }, e3.resetTimeStamp = function(t4) {
      this.initPTS = t4, this.lastEndDTS = null;
    }, e3.resetNextTimestamp = function() {
      this.lastEndDTS = null;
    }, e3.resetInitSegment = function(t4, e4, r3) {
      this.audioCodec = e4, this.videoCodec = r3, this.generateInitSegment(t4), this.emitInitSegment = true;
    }, e3.generateInitSegment = function(t4) {
      var e4 = this.audioCodec, r3 = this.videoCodec;
      if (!t4 || !t4.byteLength)
        return this.initTracks = void 0, void (this.initData = void 0);
      var i3 = this.initData = Object(n2.parseInitSegment)(t4);
      e4 || (e4 = u(i3.audio, a2.ElementaryStreamTypes.AUDIO)), r3 || (r3 = u(i3.video, a2.ElementaryStreamTypes.VIDEO));
      var o3 = {};
      i3.audio && i3.video ? o3.audiovideo = { container: "video/mp4", codec: e4 + "," + r3, initSegment: t4, id: "main" } : i3.audio ? o3.audio = { container: "audio/mp4", codec: e4, initSegment: t4, id: "audio" } : i3.video ? o3.video = { container: "video/mp4", codec: r3, initSegment: t4, id: "main" } : s2.logger.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."), this.initTracks = o3;
    }, e3.remux = function(t4, e4, r3, a3, o3) {
      var u2 = this.initPTS, d = this.lastEndDTS, c = { audio: void 0, video: void 0, text: a3, id3: r3, initSegment: void 0 };
      Object(i2.isFiniteNumber)(d) || (d = this.lastEndDTS = o3 || 0);
      var h = e4.samples;
      if (!h || !h.length)
        return c;
      var f = { initPTS: void 0, timescale: 1 }, g = this.initData;
      if (g && g.length || (this.generateInitSegment(h), g = this.initData), !g || !g.length)
        return s2.logger.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."), c;
      this.emitInitSegment && (f.tracks = this.initTracks, this.emitInitSegment = false), Object(i2.isFiniteNumber)(u2) || (this.initPTS = f.initPTS = u2 = l2(g, h, d));
      var v = Object(n2.getDuration)(h, g), p = d, m = v + p;
      Object(n2.offsetStartDTS)(g, h, u2), v > 0 ? this.lastEndDTS = m : (s2.logger.warn("Duration parsed from mp4 should be greater than zero"), this.resetNextTimestamp());
      var y = !!g.audio, E = !!g.video, T = "";
      y && (T += "audio"), E && (T += "video");
      var S = { data1: h, startPTS: p, startDTS: p, endPTS: m, endDTS: m, type: T, hasAudio: y, hasVideo: E, nb: 1, dropped: 0 };
      return c.audio = "audio" === S.type ? S : void 0, c.video = "audio" !== S.type ? S : void 0, c.text = a3, c.id3 = r3, c.initSegment = f, c;
    }, t3;
  }(), l2 = function(t3, e3, r3) {
    return Object(n2.getStartDTS)(t3, e3) - r3;
  };
  function u(t3, e3) {
    var r3 = null == t3 ? void 0 : t3.codec;
    return r3 && r3.length > 4 ? r3 : "hvc1" === r3 ? "hvc1.1.c.L120.90" : "av01" === r3 ? "av01.0.04M.08" : "avc1" === r3 || e3 === a2.ElementaryStreamTypes.VIDEO ? "avc1.42e01e" : "mp4a.40.5";
  }
  e2.default = o2;
}, "./src/task-loop.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "default", function() {
    return i2;
  });
  var i2 = function() {
    function t3() {
      this._boundTick = void 0, this._tickTimer = null, this._tickInterval = null, this._tickCallCount = 0, this._boundTick = this.tick.bind(this);
    }
    var e3 = t3.prototype;
    return e3.destroy = function() {
      this.onHandlerDestroying(), this.onHandlerDestroyed();
    }, e3.onHandlerDestroying = function() {
      this.clearNextTick(), this.clearInterval();
    }, e3.onHandlerDestroyed = function() {
    }, e3.hasInterval = function() {
      return !!this._tickInterval;
    }, e3.hasNextTick = function() {
      return !!this._tickTimer;
    }, e3.setInterval = function(t4) {
      return !this._tickInterval && (this._tickInterval = self.setInterval(this._boundTick, t4), true);
    }, e3.clearInterval = function() {
      return !!this._tickInterval && (self.clearInterval(this._tickInterval), this._tickInterval = null, true);
    }, e3.clearNextTick = function() {
      return !!this._tickTimer && (self.clearTimeout(this._tickTimer), this._tickTimer = null, true);
    }, e3.tick = function() {
      this._tickCallCount++, 1 === this._tickCallCount && (this.doTick(), this._tickCallCount > 1 && this.tickImmediate(), this._tickCallCount = 0);
    }, e3.tickImmediate = function() {
      this.clearNextTick(), this._tickTimer = self.setTimeout(this._boundTick, 0);
    }, e3.doTick = function() {
    }, t3;
  }();
}, "./src/types/level.ts": function(t2, e2, r2) {
  function i2(t3, e3) {
    for (var r3 = 0; r3 < e3.length; r3++) {
      var i3 = e3[r3];
      i3.enumerable = i3.enumerable || false, i3.configurable = true, "value" in i3 && (i3.writable = true), Object.defineProperty(t3, i3.key, i3);
    }
  }
  var n2, a2;
  function s2(t3, e3) {
    var r3 = t3.canSkipUntil, i3 = t3.canSkipDateRanges, a3 = t3.endSN;
    return r3 && (void 0 !== e3 ? e3 - a3 : 0) < r3 ? i3 ? n2.v2 : n2.Yes : n2.No;
  }
  r2.r(e2), r2.d(e2, "HlsSkip", function() {
    return n2;
  }), r2.d(e2, "getSkipValue", function() {
    return s2;
  }), r2.d(e2, "HlsUrlParameters", function() {
    return o2;
  }), r2.d(e2, "Level", function() {
    return l2;
  }), (a2 = n2 || (n2 = {})).No = "", a2.Yes = "YES", a2.v2 = "v2";
  var o2 = function() {
    function t3(t4, e3, r3) {
      this.msn = void 0, this.part = void 0, this.skip = void 0, this.msn = t4, this.part = e3, this.skip = r3;
    }
    return t3.prototype.addDirectives = function(t4) {
      var e3 = new self.URL(t4);
      return void 0 !== this.msn && e3.searchParams.set("_HLS_msn", this.msn.toString()), void 0 !== this.part && e3.searchParams.set("_HLS_part", this.part.toString()), this.skip && e3.searchParams.set("_HLS_skip", this.skip), e3.toString();
    }, t3;
  }(), l2 = function() {
    function t3(t4) {
      this.attrs = void 0, this.audioCodec = void 0, this.bitrate = void 0, this.codecSet = void 0, this.height = void 0, this.id = void 0, this.name = void 0, this.videoCodec = void 0, this.width = void 0, this.unknownCodecs = void 0, this.audioGroupIds = void 0, this.details = void 0, this.fragmentError = 0, this.loadError = 0, this.loaded = void 0, this.realBitrate = 0, this.textGroupIds = void 0, this.url = void 0, this._urlId = 0, this.url = [t4.url], this.attrs = t4.attrs, this.bitrate = t4.bitrate, t4.details && (this.details = t4.details), this.id = t4.id || 0, this.name = t4.name, this.width = t4.width || 0, this.height = t4.height || 0, this.audioCodec = t4.audioCodec, this.videoCodec = t4.videoCodec, this.unknownCodecs = t4.unknownCodecs, this.codecSet = [t4.videoCodec, t4.audioCodec].filter(function(t5) {
        return t5;
      }).join(",").replace(/\.[^.,]+/g, "");
    }
    var e3, r3;
    return e3 = t3, (r3 = [{ key: "maxBitrate", get: function() {
      return Math.max(this.realBitrate, this.bitrate);
    } }, { key: "uri", get: function() {
      return this.url[this._urlId] || "";
    } }, { key: "urlId", get: function() {
      return this._urlId;
    }, set: function(t4) {
      var e4 = t4 % this.url.length;
      this._urlId !== e4 && (this.details = void 0, this._urlId = e4);
    } }]) && i2(e3.prototype, r3), t3;
  }();
}, "./src/types/loader.ts": function(t2, e2, r2) {
  var i2, n2, a2, s2;
  r2.r(e2), r2.d(e2, "PlaylistContextType", function() {
    return i2;
  }), r2.d(e2, "PlaylistLevelType", function() {
    return a2;
  }), (n2 = i2 || (i2 = {})).MANIFEST = "manifest", n2.LEVEL = "level", n2.AUDIO_TRACK = "audioTrack", n2.SUBTITLE_TRACK = "subtitleTrack", (s2 = a2 || (a2 = {})).MAIN = "main", s2.AUDIO = "audio", s2.SUBTITLE = "subtitle";
}, "./src/types/transmuxer.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "ChunkMetadata", function() {
    return i2;
  });
  var i2 = function(t3, e3, r3, i3, n2, a2) {
    void 0 === i3 && (i3 = 0), void 0 === n2 && (n2 = -1), void 0 === a2 && (a2 = false), this.level = void 0, this.sn = void 0, this.part = void 0, this.id = void 0, this.size = void 0, this.partial = void 0, this.transmuxing = { start: 0, executeStart: 0, executeEnd: 0, end: 0 }, this.buffering = { audio: { start: 0, executeStart: 0, executeEnd: 0, end: 0 }, video: { start: 0, executeStart: 0, executeEnd: 0, end: 0 }, audiovideo: { start: 0, executeStart: 0, executeEnd: 0, end: 0 } }, this.level = t3, this.sn = e3, this.id = r3, this.size = i3, this.part = n2, this.partial = a2;
  };
}, "./src/utils/attr-list.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "AttrList", function() {
    return a2;
  });
  var i2 = /^(\d+)x(\d+)$/, n2 = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g, a2 = function() {
    function t3(e4) {
      for (var r3 in "string" == typeof e4 && (e4 = t3.parseAttrList(e4)), e4)
        e4.hasOwnProperty(r3) && (this[r3] = e4[r3]);
    }
    var e3 = t3.prototype;
    return e3.decimalInteger = function(t4) {
      var e4 = parseInt(this[t4], 10);
      return e4 > Number.MAX_SAFE_INTEGER ? 1 / 0 : e4;
    }, e3.hexadecimalInteger = function(t4) {
      if (this[t4]) {
        var e4 = (this[t4] || "0x").slice(2);
        e4 = (1 & e4.length ? "0" : "") + e4;
        for (var r3 = new Uint8Array(e4.length / 2), i3 = 0; i3 < e4.length / 2; i3++)
          r3[i3] = parseInt(e4.slice(2 * i3, 2 * i3 + 2), 16);
        return r3;
      }
      return null;
    }, e3.hexadecimalIntegerAsNumber = function(t4) {
      var e4 = parseInt(this[t4], 16);
      return e4 > Number.MAX_SAFE_INTEGER ? 1 / 0 : e4;
    }, e3.decimalFloatingPoint = function(t4) {
      return parseFloat(this[t4]);
    }, e3.optionalFloat = function(t4, e4) {
      var r3 = this[t4];
      return r3 ? parseFloat(r3) : e4;
    }, e3.enumeratedString = function(t4) {
      return this[t4];
    }, e3.bool = function(t4) {
      return "YES" === this[t4];
    }, e3.decimalResolution = function(t4) {
      var e4 = i2.exec(this[t4]);
      if (null !== e4)
        return { width: parseInt(e4[1], 10), height: parseInt(e4[2], 10) };
    }, t3.parseAttrList = function(t4) {
      var e4, r3 = {};
      for (n2.lastIndex = 0; null !== (e4 = n2.exec(t4)); ) {
        var i3 = e4[2];
        0 === i3.indexOf('"') && i3.lastIndexOf('"') === i3.length - 1 && (i3 = i3.slice(1, -1)), r3[e4[1]] = i3;
      }
      return r3;
    }, t3;
  }();
}, "./src/utils/binary-search.ts": function(t2, e2, r2) {
  r2.r(e2), e2.default = { search: function(t3, e3) {
    for (var r3 = 0, i2 = t3.length - 1, n2 = null, a2 = null; r3 <= i2; ) {
      var s2 = e3(a2 = t3[n2 = (r3 + i2) / 2 | 0]);
      if (s2 > 0)
        r3 = n2 + 1;
      else {
        if (!(s2 < 0))
          return a2;
        i2 = n2 - 1;
      }
    }
    return null;
  } };
}, "./src/utils/buffer-helper.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "BufferHelper", function() {
    return a2;
  });
  var i2 = r2("./src/utils/logger.ts"), n2 = { length: 0, start: function() {
    return 0;
  }, end: function() {
    return 0;
  } }, a2 = function() {
    function t3() {
    }
    return t3.isBuffered = function(e3, r3) {
      try {
        if (e3) {
          for (var i3 = t3.getBuffered(e3), n3 = 0; n3 < i3.length; n3++)
            if (r3 >= i3.start(n3) && r3 <= i3.end(n3))
              return true;
        }
      } catch (a3) {
      }
      return false;
    }, t3.bufferInfo = function(e3, r3, i3) {
      try {
        if (e3) {
          var n3, a3 = t3.getBuffered(e3), s2 = [];
          for (n3 = 0; n3 < a3.length; n3++)
            s2.push({ start: a3.start(n3), end: a3.end(n3) });
          return this.bufferedInfo(s2, r3, i3);
        }
      } catch (o2) {
      }
      return { len: 0, start: r3, end: r3, nextStart: void 0 };
    }, t3.bufferedInfo = function(t4, e3, r3) {
      e3 = Math.max(0, e3), t4.sort(function(t5, e4) {
        var r4 = t5.start - e4.start;
        return r4 || e4.end - t5.end;
      });
      var i3 = [];
      if (r3)
        for (var n3 = 0; n3 < t4.length; n3++) {
          var a3 = i3.length;
          if (a3) {
            var s2 = i3[a3 - 1].end;
            t4[n3].start - s2 < r3 ? t4[n3].end > s2 && (i3[a3 - 1].end = t4[n3].end) : i3.push(t4[n3]);
          } else
            i3.push(t4[n3]);
        }
      else
        i3 = t4;
      for (var o2, l2 = 0, u = e3, d = e3, c = 0; c < i3.length; c++) {
        var h = i3[c].start, f = i3[c].end;
        if (e3 + r3 >= h && e3 < f)
          u = h, l2 = (d = f) - e3;
        else if (e3 + r3 < h) {
          o2 = h;
          break;
        }
      }
      return { len: l2, start: u || 0, end: d || 0, nextStart: o2 };
    }, t3.getBuffered = function(t4) {
      try {
        return t4.buffered;
      } catch (e3) {
        return i2.logger.log("failed to get media.buffered", e3), n2;
      }
    }, t3;
  }();
}, "./src/utils/cea-608-parser.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "Row", function() {
    return E;
  }), r2.d(e2, "CaptionScreen", function() {
    return T;
  });
  var i2, n2, a2 = r2("./src/utils/logger.ts"), s2 = { 42: 225, 92: 233, 94: 237, 95: 243, 96: 250, 123: 231, 124: 247, 125: 209, 126: 241, 127: 9608, 128: 174, 129: 176, 130: 189, 131: 191, 132: 8482, 133: 162, 134: 163, 135: 9834, 136: 224, 137: 32, 138: 232, 139: 226, 140: 234, 141: 238, 142: 244, 143: 251, 144: 193, 145: 201, 146: 211, 147: 218, 148: 220, 149: 252, 150: 8216, 151: 161, 152: 42, 153: 8217, 154: 9473, 155: 169, 156: 8480, 157: 8226, 158: 8220, 159: 8221, 160: 192, 161: 194, 162: 199, 163: 200, 164: 202, 165: 203, 166: 235, 167: 206, 168: 207, 169: 239, 170: 212, 171: 217, 172: 249, 173: 219, 174: 171, 175: 187, 176: 195, 177: 227, 178: 205, 179: 204, 180: 236, 181: 210, 182: 242, 183: 213, 184: 245, 185: 123, 186: 125, 187: 92, 188: 94, 189: 95, 190: 124, 191: 8764, 192: 196, 193: 228, 194: 214, 195: 246, 196: 223, 197: 165, 198: 164, 199: 9475, 200: 197, 201: 229, 202: 216, 203: 248, 204: 9487, 205: 9491, 206: 9495, 207: 9499 }, o2 = function(t3) {
    var e3 = t3;
    return s2.hasOwnProperty(t3) && (e3 = s2[t3]), String.fromCharCode(e3);
  }, l2 = 15, u = 100, d = { 17: 1, 18: 3, 21: 5, 22: 7, 23: 9, 16: 11, 19: 12, 20: 14 }, c = { 17: 2, 18: 4, 21: 6, 22: 8, 23: 10, 19: 13, 20: 15 }, h = { 25: 1, 26: 3, 29: 5, 30: 7, 31: 9, 24: 11, 27: 12, 28: 14 }, f = { 25: 2, 26: 4, 29: 6, 30: 8, 31: 10, 27: 13, 28: 15 }, g = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"];
  (n2 = i2 || (i2 = {}))[n2.ERROR = 0] = "ERROR", n2[n2.TEXT = 1] = "TEXT", n2[n2.WARNING = 2] = "WARNING", n2[n2.INFO = 2] = "INFO", n2[n2.DEBUG = 3] = "DEBUG", n2[n2.DATA = 3] = "DATA";
  var v = function() {
    function t3() {
      this.time = null, this.verboseLevel = i2.ERROR;
    }
    return t3.prototype.log = function(t4, e3) {
      this.verboseLevel >= t4 && a2.logger.log(this.time + " [" + t4 + "] " + e3);
    }, t3;
  }(), p = function(t3) {
    for (var e3 = [], r3 = 0; r3 < t3.length; r3++)
      e3.push(t3[r3].toString(16));
    return e3;
  }, m = function() {
    function t3(t4, e4, r3, i3, n3) {
      this.foreground = void 0, this.underline = void 0, this.italics = void 0, this.background = void 0, this.flash = void 0, this.foreground = t4 || "white", this.underline = e4 || false, this.italics = r3 || false, this.background = i3 || "black", this.flash = n3 || false;
    }
    var e3 = t3.prototype;
    return e3.reset = function() {
      this.foreground = "white", this.underline = false, this.italics = false, this.background = "black", this.flash = false;
    }, e3.setStyles = function(t4) {
      for (var e4 = ["foreground", "underline", "italics", "background", "flash"], r3 = 0; r3 < e4.length; r3++) {
        var i3 = e4[r3];
        t4.hasOwnProperty(i3) && (this[i3] = t4[i3]);
      }
    }, e3.isDefault = function() {
      return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash;
    }, e3.equals = function(t4) {
      return this.foreground === t4.foreground && this.underline === t4.underline && this.italics === t4.italics && this.background === t4.background && this.flash === t4.flash;
    }, e3.copy = function(t4) {
      this.foreground = t4.foreground, this.underline = t4.underline, this.italics = t4.italics, this.background = t4.background, this.flash = t4.flash;
    }, e3.toString = function() {
      return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash;
    }, t3;
  }(), y = function() {
    function t3(t4, e4, r3, i3, n3, a3) {
      this.uchar = void 0, this.penState = void 0, this.uchar = t4 || " ", this.penState = new m(e4, r3, i3, n3, a3);
    }
    var e3 = t3.prototype;
    return e3.reset = function() {
      this.uchar = " ", this.penState.reset();
    }, e3.setChar = function(t4, e4) {
      this.uchar = t4, this.penState.copy(e4);
    }, e3.setPenState = function(t4) {
      this.penState.copy(t4);
    }, e3.equals = function(t4) {
      return this.uchar === t4.uchar && this.penState.equals(t4.penState);
    }, e3.copy = function(t4) {
      this.uchar = t4.uchar, this.penState.copy(t4.penState);
    }, e3.isEmpty = function() {
      return " " === this.uchar && this.penState.isDefault();
    }, t3;
  }(), E = function() {
    function t3(t4) {
      this.chars = void 0, this.pos = void 0, this.currPenState = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chars = [];
      for (var e4 = 0; e4 < u; e4++)
        this.chars.push(new y());
      this.logger = t4, this.pos = 0, this.currPenState = new m();
    }
    var e3 = t3.prototype;
    return e3.equals = function(t4) {
      for (var e4 = true, r3 = 0; r3 < u; r3++)
        if (!this.chars[r3].equals(t4.chars[r3])) {
          e4 = false;
          break;
        }
      return e4;
    }, e3.copy = function(t4) {
      for (var e4 = 0; e4 < u; e4++)
        this.chars[e4].copy(t4.chars[e4]);
    }, e3.isEmpty = function() {
      for (var t4 = true, e4 = 0; e4 < u; e4++)
        if (!this.chars[e4].isEmpty()) {
          t4 = false;
          break;
        }
      return t4;
    }, e3.setCursor = function(t4) {
      this.pos !== t4 && (this.pos = t4), this.pos < 0 ? (this.logger.log(i2.DEBUG, "Negative cursor position " + this.pos), this.pos = 0) : this.pos > u && (this.logger.log(i2.DEBUG, "Too large cursor position " + this.pos), this.pos = u);
    }, e3.moveCursor = function(t4) {
      var e4 = this.pos + t4;
      if (t4 > 1)
        for (var r3 = this.pos + 1; r3 < e4 + 1; r3++)
          this.chars[r3].setPenState(this.currPenState);
      this.setCursor(e4);
    }, e3.backSpace = function() {
      this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState);
    }, e3.insertChar = function(t4) {
      t4 >= 144 && this.backSpace();
      var e4 = o2(t4);
      this.pos >= u ? this.logger.log(i2.ERROR, "Cannot insert " + t4.toString(16) + " (" + e4 + ") at position " + this.pos + ". Skipping it!") : (this.chars[this.pos].setChar(e4, this.currPenState), this.moveCursor(1));
    }, e3.clearFromPos = function(t4) {
      var e4;
      for (e4 = t4; e4 < u; e4++)
        this.chars[e4].reset();
    }, e3.clear = function() {
      this.clearFromPos(0), this.pos = 0, this.currPenState.reset();
    }, e3.clearToEndOfRow = function() {
      this.clearFromPos(this.pos);
    }, e3.getTextString = function() {
      for (var t4 = [], e4 = true, r3 = 0; r3 < u; r3++) {
        var i3 = this.chars[r3].uchar;
        " " !== i3 && (e4 = false), t4.push(i3);
      }
      return e4 ? "" : t4.join("");
    }, e3.setPenStyles = function(t4) {
      this.currPenState.setStyles(t4), this.chars[this.pos].setPenState(this.currPenState);
    }, t3;
  }(), T = function() {
    function t3(t4) {
      this.rows = void 0, this.currRow = void 0, this.nrRollUpRows = void 0, this.lastOutputScreen = void 0, this.logger = void 0, this.rows = [];
      for (var e4 = 0; e4 < l2; e4++)
        this.rows.push(new E(t4));
      this.logger = t4, this.currRow = 14, this.nrRollUpRows = null, this.lastOutputScreen = null, this.reset();
    }
    var e3 = t3.prototype;
    return e3.reset = function() {
      for (var t4 = 0; t4 < l2; t4++)
        this.rows[t4].clear();
      this.currRow = 14;
    }, e3.equals = function(t4) {
      for (var e4 = true, r3 = 0; r3 < l2; r3++)
        if (!this.rows[r3].equals(t4.rows[r3])) {
          e4 = false;
          break;
        }
      return e4;
    }, e3.copy = function(t4) {
      for (var e4 = 0; e4 < l2; e4++)
        this.rows[e4].copy(t4.rows[e4]);
    }, e3.isEmpty = function() {
      for (var t4 = true, e4 = 0; e4 < l2; e4++)
        if (!this.rows[e4].isEmpty()) {
          t4 = false;
          break;
        }
      return t4;
    }, e3.backSpace = function() {
      this.rows[this.currRow].backSpace();
    }, e3.clearToEndOfRow = function() {
      this.rows[this.currRow].clearToEndOfRow();
    }, e3.insertChar = function(t4) {
      this.rows[this.currRow].insertChar(t4);
    }, e3.setPen = function(t4) {
      this.rows[this.currRow].setPenStyles(t4);
    }, e3.moveCursor = function(t4) {
      this.rows[this.currRow].moveCursor(t4);
    }, e3.setCursor = function(t4) {
      this.logger.log(i2.INFO, "setCursor: " + t4), this.rows[this.currRow].setCursor(t4);
    }, e3.setPAC = function(t4) {
      this.logger.log(i2.INFO, "pacData = " + JSON.stringify(t4));
      var e4 = t4.row - 1;
      if (this.nrRollUpRows && e4 < this.nrRollUpRows - 1 && (e4 = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== e4) {
        for (var r3 = 0; r3 < l2; r3++)
          this.rows[r3].clear();
        var n3 = this.currRow + 1 - this.nrRollUpRows, a3 = this.lastOutputScreen;
        if (a3) {
          var s3 = a3.rows[n3].cueStartTime, o3 = this.logger.time;
          if (s3 && null !== o3 && s3 < o3)
            for (var u2 = 0; u2 < this.nrRollUpRows; u2++)
              this.rows[e4 - this.nrRollUpRows + u2 + 1].copy(a3.rows[n3 + u2]);
        }
      }
      this.currRow = e4;
      var d2 = this.rows[this.currRow];
      if (null !== t4.indent) {
        var c2 = t4.indent, h2 = Math.max(c2 - 1, 0);
        d2.setCursor(t4.indent), t4.color = d2.chars[h2].penState.foreground;
      }
      var f2 = { foreground: t4.color, underline: t4.underline, italics: t4.italics, background: "black", flash: false };
      this.setPen(f2);
    }, e3.setBkgData = function(t4) {
      this.logger.log(i2.INFO, "bkgData = " + JSON.stringify(t4)), this.backSpace(), this.setPen(t4), this.insertChar(32);
    }, e3.setRollUpRows = function(t4) {
      this.nrRollUpRows = t4;
    }, e3.rollUp = function() {
      if (null !== this.nrRollUpRows) {
        this.logger.log(i2.TEXT, this.getDisplayText());
        var t4 = this.currRow + 1 - this.nrRollUpRows, e4 = this.rows.splice(t4, 1)[0];
        e4.clear(), this.rows.splice(this.currRow, 0, e4), this.logger.log(i2.INFO, "Rolling up");
      } else
        this.logger.log(i2.DEBUG, "roll_up but nrRollUpRows not set yet");
    }, e3.getDisplayText = function(t4) {
      t4 = t4 || false;
      for (var e4 = [], r3 = "", i3 = -1, n3 = 0; n3 < l2; n3++) {
        var a3 = this.rows[n3].getTextString();
        a3 && (i3 = n3 + 1, t4 ? e4.push("Row " + i3 + ": '" + a3 + "'") : e4.push(a3.trim()));
      }
      return e4.length > 0 && (r3 = t4 ? "[" + e4.join(" | ") + "]" : e4.join("\n")), r3;
    }, e3.getTextAndFormat = function() {
      return this.rows;
    }, t3;
  }(), S = function() {
    function t3(t4, e4, r3) {
      this.chNr = void 0, this.outputFilter = void 0, this.mode = void 0, this.verbose = void 0, this.displayedMemory = void 0, this.nonDisplayedMemory = void 0, this.lastOutputScreen = void 0, this.currRollUpRow = void 0, this.writeScreen = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chNr = t4, this.outputFilter = e4, this.mode = null, this.verbose = 0, this.displayedMemory = new T(r3), this.nonDisplayedMemory = new T(r3), this.lastOutputScreen = new T(r3), this.currRollUpRow = this.displayedMemory.rows[14], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.logger = r3;
    }
    var e3 = t3.prototype;
    return e3.reset = function() {
      this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.outputFilter.reset(), this.currRollUpRow = this.displayedMemory.rows[14], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null;
    }, e3.getHandler = function() {
      return this.outputFilter;
    }, e3.setHandler = function(t4) {
      this.outputFilter = t4;
    }, e3.setPAC = function(t4) {
      this.writeScreen.setPAC(t4);
    }, e3.setBkgData = function(t4) {
      this.writeScreen.setBkgData(t4);
    }, e3.setMode = function(t4) {
      t4 !== this.mode && (this.mode = t4, this.logger.log(i2.INFO, "MODE=" + t4), "MODE_POP-ON" === this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = t4);
    }, e3.insertChars = function(t4) {
      for (var e4 = 0; e4 < t4.length; e4++)
        this.writeScreen.insertChar(t4[e4]);
      var r3 = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
      this.logger.log(i2.INFO, r3 + ": " + this.writeScreen.getDisplayText(true)), "MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (this.logger.log(i2.TEXT, "DISPLAYED: " + this.displayedMemory.getDisplayText(true)), this.outputDataUpdate());
    }, e3.ccRCL = function() {
      this.logger.log(i2.INFO, "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON");
    }, e3.ccBS = function() {
      this.logger.log(i2.INFO, "BS - BackSpace"), "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate());
    }, e3.ccAOF = function() {
    }, e3.ccAON = function() {
    }, e3.ccDER = function() {
      this.logger.log(i2.INFO, "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate();
    }, e3.ccRU = function(t4) {
      this.logger.log(i2.INFO, "RU(" + t4 + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(t4);
    }, e3.ccFON = function() {
      this.logger.log(i2.INFO, "FON - Flash On"), this.writeScreen.setPen({ flash: true });
    }, e3.ccRDC = function() {
      this.logger.log(i2.INFO, "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON");
    }, e3.ccTR = function() {
      this.logger.log(i2.INFO, "TR"), this.setMode("MODE_TEXT");
    }, e3.ccRTD = function() {
      this.logger.log(i2.INFO, "RTD"), this.setMode("MODE_TEXT");
    }, e3.ccEDM = function() {
      this.logger.log(i2.INFO, "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate(true);
    }, e3.ccCR = function() {
      this.logger.log(i2.INFO, "CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate(true);
    }, e3.ccENM = function() {
      this.logger.log(i2.INFO, "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset();
    }, e3.ccEOC = function() {
      if (this.logger.log(i2.INFO, "EOC - End Of Caption"), "MODE_POP-ON" === this.mode) {
        var t4 = this.displayedMemory;
        this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = t4, this.writeScreen = this.nonDisplayedMemory, this.logger.log(i2.TEXT, "DISP: " + this.displayedMemory.getDisplayText());
      }
      this.outputDataUpdate(true);
    }, e3.ccTO = function(t4) {
      this.logger.log(i2.INFO, "TO(" + t4 + ") - Tab Offset"), this.writeScreen.moveCursor(t4);
    }, e3.ccMIDROW = function(t4) {
      var e4 = { flash: false };
      if (e4.underline = t4 % 2 == 1, e4.italics = t4 >= 46, e4.italics)
        e4.foreground = "white";
      else {
        var r3 = Math.floor(t4 / 2) - 16;
        e4.foreground = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"][r3];
      }
      this.logger.log(i2.INFO, "MIDROW: " + JSON.stringify(e4)), this.writeScreen.setPen(e4);
    }, e3.outputDataUpdate = function(t4) {
      void 0 === t4 && (t4 = false);
      var e4 = this.logger.time;
      null !== e4 && this.outputFilter && (null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue(this.cueStartTime, e4, this.lastOutputScreen), t4 && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(), this.cueStartTime = this.displayedMemory.isEmpty() ? null : e4) : this.cueStartTime = e4, this.lastOutputScreen.copy(this.displayedMemory));
    }, e3.cueSplitAtTime = function(t4) {
      this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, t4, this.displayedMemory), this.cueStartTime = t4));
    }, t3;
  }(), b = function() {
    function t3(t4, e4, r3) {
      this.channels = void 0, this.currentChannel = 0, this.cmdHistory = void 0, this.logger = void 0;
      var i3 = new v();
      this.channels = [null, new S(t4, e4, i3), new S(t4 + 1, r3, i3)], this.cmdHistory = { a: null, b: null }, this.logger = i3;
    }
    var e3 = t3.prototype;
    return e3.getHandler = function(t4) {
      return this.channels[t4].getHandler();
    }, e3.setHandler = function(t4, e4) {
      this.channels[t4].setHandler(e4);
    }, e3.addData = function(t4, e4) {
      var r3, n3, a3, s3 = false;
      this.logger.time = t4;
      for (var o3 = 0; o3 < e4.length; o3 += 2)
        if (n3 = 127 & e4[o3], a3 = 127 & e4[o3 + 1], 0 !== n3 || 0 !== a3) {
          if (this.logger.log(i2.DATA, "[" + p([e4[o3], e4[o3 + 1]]) + "] -> (" + p([n3, a3]) + ")"), (r3 = this.parseCmd(n3, a3)) || (r3 = this.parseMidrow(n3, a3)), r3 || (r3 = this.parsePAC(n3, a3)), r3 || (r3 = this.parseBackgroundAttributes(n3, a3)), !r3 && (s3 = this.parseChars(n3, a3))) {
            var l3 = this.currentChannel;
            l3 && l3 > 0 ? this.channels[l3].insertChars(s3) : this.logger.log(i2.WARNING, "No channel found yet. TEXT-MODE?");
          }
          r3 || s3 || this.logger.log(i2.WARNING, "Couldn't parse cleaned data " + p([n3, a3]) + " orig: " + p([e4[o3], e4[o3 + 1]]));
        }
    }, e3.parseCmd = function(t4, e4) {
      var r3 = this.cmdHistory;
      if (!((20 === t4 || 28 === t4 || 21 === t4 || 29 === t4) && e4 >= 32 && e4 <= 47 || (23 === t4 || 31 === t4) && e4 >= 33 && e4 <= 35))
        return false;
      if (A(t4, e4, r3))
        return L(null, null, r3), this.logger.log(i2.DEBUG, "Repeated command (" + p([t4, e4]) + ") is dropped"), true;
      var n3 = 20 === t4 || 21 === t4 || 23 === t4 ? 1 : 2, a3 = this.channels[n3];
      return 20 === t4 || 21 === t4 || 28 === t4 || 29 === t4 ? 32 === e4 ? a3.ccRCL() : 33 === e4 ? a3.ccBS() : 34 === e4 ? a3.ccAOF() : 35 === e4 ? a3.ccAON() : 36 === e4 ? a3.ccDER() : 37 === e4 ? a3.ccRU(2) : 38 === e4 ? a3.ccRU(3) : 39 === e4 ? a3.ccRU(4) : 40 === e4 ? a3.ccFON() : 41 === e4 ? a3.ccRDC() : 42 === e4 ? a3.ccTR() : 43 === e4 ? a3.ccRTD() : 44 === e4 ? a3.ccEDM() : 45 === e4 ? a3.ccCR() : 46 === e4 ? a3.ccENM() : 47 === e4 && a3.ccEOC() : a3.ccTO(e4 - 32), L(t4, e4, r3), this.currentChannel = n3, true;
    }, e3.parseMidrow = function(t4, e4) {
      var r3 = 0;
      if ((17 === t4 || 25 === t4) && e4 >= 32 && e4 <= 47) {
        if ((r3 = 17 === t4 ? 1 : 2) !== this.currentChannel)
          return this.logger.log(i2.ERROR, "Mismatch channel in midrow parsing"), false;
        var n3 = this.channels[r3];
        return !!n3 && (n3.ccMIDROW(e4), this.logger.log(i2.DEBUG, "MIDROW (" + p([t4, e4]) + ")"), true);
      }
      return false;
    }, e3.parsePAC = function(t4, e4) {
      var r3, i3 = this.cmdHistory;
      if (!((t4 >= 17 && t4 <= 23 || t4 >= 25 && t4 <= 31) && e4 >= 64 && e4 <= 127 || (16 === t4 || 24 === t4) && e4 >= 64 && e4 <= 95))
        return false;
      if (A(t4, e4, i3))
        return L(null, null, i3), true;
      var n3 = t4 <= 23 ? 1 : 2;
      r3 = e4 >= 64 && e4 <= 95 ? 1 === n3 ? d[t4] : h[t4] : 1 === n3 ? c[t4] : f[t4];
      var a3 = this.channels[n3];
      return !!a3 && (a3.setPAC(this.interpretPAC(r3, e4)), L(t4, e4, i3), this.currentChannel = n3, true);
    }, e3.interpretPAC = function(t4, e4) {
      var r3, i3 = { color: null, italics: false, indent: null, underline: false, row: t4 };
      return r3 = e4 > 95 ? e4 - 96 : e4 - 64, i3.underline = 1 == (1 & r3), r3 <= 13 ? i3.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(r3 / 2)] : r3 <= 15 ? (i3.italics = true, i3.color = "white") : i3.indent = 4 * Math.floor((r3 - 16) / 2), i3;
    }, e3.parseChars = function(t4, e4) {
      var r3, n3, a3 = null, s3 = null;
      if (t4 >= 25 ? (r3 = 2, s3 = t4 - 8) : (r3 = 1, s3 = t4), s3 >= 17 && s3 <= 19 ? (n3 = 17 === s3 ? e4 + 80 : 18 === s3 ? e4 + 112 : e4 + 144, this.logger.log(i2.INFO, "Special char '" + o2(n3) + "' in channel " + r3), a3 = [n3]) : t4 >= 32 && t4 <= 127 && (a3 = 0 === e4 ? [t4] : [t4, e4]), a3) {
        var l3 = p(a3);
        this.logger.log(i2.DEBUG, "Char codes =  " + l3.join(",")), L(t4, e4, this.cmdHistory);
      }
      return a3;
    }, e3.parseBackgroundAttributes = function(t4, e4) {
      var r3;
      if (!((16 === t4 || 24 === t4) && e4 >= 32 && e4 <= 47 || (23 === t4 || 31 === t4) && e4 >= 45 && e4 <= 47))
        return false;
      var i3 = {};
      16 === t4 || 24 === t4 ? (r3 = Math.floor((e4 - 32) / 2), i3.background = g[r3], e4 % 2 == 1 && (i3.background = i3.background + "_semi")) : 45 === e4 ? i3.background = "transparent" : (i3.foreground = "black", 47 === e4 && (i3.underline = true));
      var n3 = t4 <= 23 ? 1 : 2;
      return this.channels[n3].setBkgData(i3), L(t4, e4, this.cmdHistory), true;
    }, e3.reset = function() {
      for (var t4 = 0; t4 < Object.keys(this.channels).length; t4++) {
        var e4 = this.channels[t4];
        e4 && e4.reset();
      }
      this.cmdHistory = { a: null, b: null };
    }, e3.cueSplitAtTime = function(t4) {
      for (var e4 = 0; e4 < this.channels.length; e4++) {
        var r3 = this.channels[e4];
        r3 && r3.cueSplitAtTime(t4);
      }
    }, t3;
  }();
  function L(t3, e3, r3) {
    r3.a = t3, r3.b = e3;
  }
  function A(t3, e3, r3) {
    return r3.a === t3 && r3.b === e3;
  }
  e2.default = b;
}, "./src/utils/codecs.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "isCodecType", function() {
    return n2;
  }), r2.d(e2, "isCodecSupportedInMp4", function() {
    return a2;
  });
  var i2 = { audio: { a3ds: true, "ac-3": true, "ac-4": true, alac: true, alaw: true, dra1: true, "dts+": true, "dts-": true, dtsc: true, dtse: true, dtsh: true, "ec-3": true, enca: true, g719: true, g726: true, m4ae: true, mha1: true, mha2: true, mhm1: true, mhm2: true, mlpa: true, mp4a: true, "raw ": true, Opus: true, samr: true, sawb: true, sawp: true, sevc: true, sqcp: true, ssmv: true, twos: true, ulaw: true }, video: { avc1: true, avc2: true, avc3: true, avc4: true, avcp: true, av01: true, drac: true, dvav: true, dvhe: true, encv: true, hev1: true, hvc1: true, mjp2: true, mp4v: true, mvc1: true, mvc2: true, mvc3: true, mvc4: true, resv: true, rv60: true, s263: true, svc1: true, svc2: true, "vc-1": true, vp08: true, vp09: true }, text: { stpp: true, wvtt: true } };
  function n2(t3, e3) {
    var r3 = i2[e3];
    return !!r3 && true === r3[t3.slice(0, 4)];
  }
  function a2(t3, e3) {
    return MediaSource.isTypeSupported((e3 || "video") + '/mp4;codecs="' + t3 + '"');
  }
}, "./src/utils/cues.ts": function(t2, e2, r2) {
  r2.r(e2);
  var i2 = r2("./src/utils/vttparser.ts"), n2 = r2("./src/utils/webvtt-parser.ts"), a2 = r2("./src/utils/texttrack-utils.ts"), s2 = /\s/, o2 = { newCue: function(t3, e3, r3, o3) {
    for (var l2, u, d, c, h, f = [], g = self.VTTCue || self.TextTrackCue, v = 0; v < o3.rows.length; v++)
      if (d = true, c = 0, h = "", !(l2 = o3.rows[v]).isEmpty()) {
        for (var p = 0; p < l2.chars.length; p++)
          s2.test(l2.chars[p].uchar) && d ? c++ : (h += l2.chars[p].uchar, d = false);
        l2.cueStartTime = e3, e3 === r3 && (r3 += 1e-4), c >= 16 ? c-- : c++;
        var m = Object(i2.fixLineBreaks)(h.trim()), y = Object(n2.generateCueId)(e3, r3, m);
        t3 && t3.cues && t3.cues.getCueById(y) || ((u = new g(e3, r3, m)).id = y, u.line = v + 1, u.align = "left", u.position = 10 + Math.min(80, 10 * Math.floor(8 * c / 32)), f.push(u));
      }
    return t3 && f.length && (f.sort(function(t4, e4) {
      return "auto" === t4.line || "auto" === e4.line ? 0 : t4.line > 8 && e4.line > 8 ? e4.line - t4.line : t4.line - e4.line;
    }), f.forEach(function(e4) {
      return Object(a2.addCueToTrack)(t3, e4);
    })), f;
  } };
  e2.default = o2;
}, "./src/utils/discontinuities.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "findFirstFragWithCC", function() {
    return s2;
  }), r2.d(e2, "shouldAlignOnDiscontinuities", function() {
    return o2;
  }), r2.d(e2, "findDiscontinuousReferenceFrag", function() {
    return l2;
  }), r2.d(e2, "adjustSlidingStart", function() {
    return d;
  }), r2.d(e2, "alignStream", function() {
    return c;
  }), r2.d(e2, "alignPDT", function() {
    return h;
  });
  var i2 = r2("./src/polyfills/number.ts"), n2 = r2("./src/utils/logger.ts"), a2 = r2("./src/controller/level-helper.ts");
  function s2(t3, e3) {
    for (var r3 = null, i3 = 0, n3 = t3.length; i3 < n3; i3++) {
      var a3 = t3[i3];
      if (a3 && a3.cc === e3) {
        r3 = a3;
        break;
      }
    }
    return r3;
  }
  function o2(t3, e3, r3) {
    return !(!e3.details || !(r3.endCC > r3.startCC || t3 && t3.cc < r3.startCC));
  }
  function l2(t3, e3) {
    var r3 = t3.fragments, i3 = e3.fragments;
    if (i3.length && r3.length) {
      var a3 = s2(r3, i3[0].cc);
      if (a3 && (!a3 || a3.startPTS))
        return a3;
      n2.logger.log("No frag in previous level to align on");
    } else
      n2.logger.log("No fragments to align");
  }
  function u(t3, e3) {
    if (t3) {
      var r3 = t3.start + e3;
      t3.start = t3.startPTS = r3, t3.endPTS = r3 + t3.duration;
    }
  }
  function d(t3, e3) {
    for (var r3 = e3.fragments, i3 = 0, n3 = r3.length; i3 < n3; i3++)
      u(r3[i3], t3);
    e3.fragmentHint && u(e3.fragmentHint, t3), e3.alignedSliding = true;
  }
  function c(t3, e3, r3) {
    e3 && (function(t4, e4, r4) {
      if (o2(t4, r4, e4)) {
        var a3 = l2(r4.details, e4);
        a3 && Object(i2.isFiniteNumber)(a3.start) && (n2.logger.log("Adjusting PTS using last level due to CC increase within current level " + e4.url), d(a3.start, e4));
      }
    }(t3, r3, e3), !r3.alignedSliding && e3.details && h(r3, e3.details), r3.alignedSliding || !e3.details || r3.skippedSegments || Object(a2.adjustSliding)(e3.details, r3));
  }
  function h(t3, e3) {
    if (e3.fragments.length && t3.hasProgramDateTime && e3.hasProgramDateTime) {
      var r3 = e3.fragments[0].programDateTime, a3 = t3.fragments[0].programDateTime, s3 = (a3 - r3) / 1e3 + e3.fragments[0].start;
      s3 && Object(i2.isFiniteNumber)(s3) && (n2.logger.log("Adjusting PTS using programDateTime delta " + (a3 - r3) + "ms, sliding:" + s3.toFixed(3) + " " + t3.url + " "), d(s3, t3));
    }
  }
}, "./src/utils/ewma-bandwidth-estimator.ts": function(t2, e2, r2) {
  r2.r(e2);
  var i2 = r2("./src/utils/ewma.ts"), n2 = function() {
    function t3(t4, e4, r3) {
      this.defaultEstimate_ = void 0, this.minWeight_ = void 0, this.minDelayMs_ = void 0, this.slow_ = void 0, this.fast_ = void 0, this.defaultEstimate_ = r3, this.minWeight_ = 1e-3, this.minDelayMs_ = 50, this.slow_ = new i2.default(t4), this.fast_ = new i2.default(e4);
    }
    var e3 = t3.prototype;
    return e3.update = function(t4, e4) {
      var r3 = this.slow_, n3 = this.fast_;
      this.slow_.halfLife !== t4 && (this.slow_ = new i2.default(t4, r3.getEstimate(), r3.getTotalWeight())), this.fast_.halfLife !== e4 && (this.fast_ = new i2.default(e4, n3.getEstimate(), n3.getTotalWeight()));
    }, e3.sample = function(t4, e4) {
      var r3 = (t4 = Math.max(t4, this.minDelayMs_)) / 1e3, i3 = 8 * e4 / r3;
      this.fast_.sample(r3, i3), this.slow_.sample(r3, i3);
    }, e3.canEstimate = function() {
      var t4 = this.fast_;
      return t4 && t4.getTotalWeight() >= this.minWeight_;
    }, e3.getEstimate = function() {
      return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_;
    }, e3.destroy = function() {
    }, t3;
  }();
  e2.default = n2;
}, "./src/utils/ewma.ts": function(t2, e2, r2) {
  r2.r(e2);
  var i2 = function() {
    function t3(t4, e4, r3) {
      void 0 === e4 && (e4 = 0), void 0 === r3 && (r3 = 0), this.halfLife = void 0, this.alpha_ = void 0, this.estimate_ = void 0, this.totalWeight_ = void 0, this.halfLife = t4, this.alpha_ = t4 ? Math.exp(Math.log(0.5) / t4) : 0, this.estimate_ = e4, this.totalWeight_ = r3;
    }
    var e3 = t3.prototype;
    return e3.sample = function(t4, e4) {
      var r3 = Math.pow(this.alpha_, t4);
      this.estimate_ = e4 * (1 - r3) + r3 * this.estimate_, this.totalWeight_ += t4;
    }, e3.getTotalWeight = function() {
      return this.totalWeight_;
    }, e3.getEstimate = function() {
      if (this.alpha_) {
        var t4 = 1 - Math.pow(this.alpha_, this.totalWeight_);
        if (t4)
          return this.estimate_ / t4;
      }
      return this.estimate_;
    }, t3;
  }();
  e2.default = i2;
}, "./src/utils/fetch-loader.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "fetchSupported", function() {
    return c;
  });
  var i2 = r2("./src/polyfills/number.ts"), n2 = r2("./src/loader/load-stats.ts"), a2 = r2("./src/demux/chunk-cache.ts");
  function s2(t3) {
    var e3 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
    return (s2 = function(t4) {
      if (null === t4 || (r3 = t4, -1 === Function.toString.call(r3).indexOf("[native code]")))
        return t4;
      var r3;
      if ("function" != typeof t4)
        throw new TypeError("Super expression must either be null or a function");
      if (void 0 !== e3) {
        if (e3.has(t4))
          return e3.get(t4);
        e3.set(t4, i3);
      }
      function i3() {
        return o2(t4, arguments, d(this).constructor);
      }
      return i3.prototype = Object.create(t4.prototype, { constructor: { value: i3, enumerable: false, writable: true, configurable: true } }), u(i3, t4);
    })(t3);
  }
  function o2(t3, e3, r3) {
    return (o2 = l2() ? Reflect.construct : function(t4, e4, r4) {
      var i3 = [null];
      i3.push.apply(i3, e4);
      var n3 = new (Function.bind.apply(t4, i3))();
      return r4 && u(n3, r4.prototype), n3;
    }).apply(null, arguments);
  }
  function l2() {
    if ("undefined" == typeof Reflect || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if ("function" == typeof Proxy)
      return true;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), true;
    } catch (t3) {
      return false;
    }
  }
  function u(t3, e3) {
    return (u = Object.setPrototypeOf || function(t4, e4) {
      return t4.__proto__ = e4, t4;
    })(t3, e3);
  }
  function d(t3) {
    return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
      return t4.__proto__ || Object.getPrototypeOf(t4);
    })(t3);
  }
  function c() {
    if (self.fetch && self.AbortController && self.ReadableStream && self.Request)
      try {
        return new self.ReadableStream({}), true;
      } catch (t3) {
      }
    return false;
  }
  var h = function() {
    function t3(t4) {
      this.fetchSetup = void 0, this.requestTimeout = void 0, this.request = void 0, this.response = void 0, this.controller = void 0, this.context = void 0, this.config = null, this.callbacks = null, this.stats = void 0, this.loader = null, this.fetchSetup = t4.fetchSetup || f, this.controller = new self.AbortController(), this.stats = new n2.LoadStats();
    }
    var e3 = t3.prototype;
    return e3.destroy = function() {
      this.loader = this.callbacks = null, this.abortInternal();
    }, e3.abortInternal = function() {
      var t4 = this.response;
      t4 && t4.ok || (this.stats.aborted = true, this.controller.abort());
    }, e3.abort = function() {
      var t4;
      this.abortInternal(), null !== (t4 = this.callbacks) && void 0 !== t4 && t4.onAbort && this.callbacks.onAbort(this.stats, this.context, this.response);
    }, e3.load = function(t4, e4, r3) {
      var n3 = this, a3 = this.stats;
      if (a3.loading.start)
        throw new Error("Loader can only be used once.");
      a3.loading.start = self.performance.now();
      var s3 = function(t5, e5) {
        var r4 = { method: "GET", mode: "cors", credentials: "same-origin", signal: e5 };
        return t5.rangeEnd && (r4.headers = new self.Headers({ Range: "bytes=" + t5.rangeStart + "-" + String(t5.rangeEnd - 1) })), r4;
      }(t4, this.controller.signal), o3 = r3.onProgress, l3 = "arraybuffer" === t4.responseType, u2 = l3 ? "byteLength" : "length";
      this.context = t4, this.config = e4, this.callbacks = r3, this.request = this.fetchSetup(t4, s3), self.clearTimeout(this.requestTimeout), this.requestTimeout = self.setTimeout(function() {
        n3.abortInternal(), r3.onTimeout(a3, t4, n3.response);
      }, e4.timeout), self.fetch(this.request).then(function(r4) {
        if (n3.response = n3.loader = r4, !r4.ok) {
          var s4 = r4.status, u3 = r4.statusText;
          throw new g(u3 || "fetch, bad network response", s4, r4);
        }
        return a3.loading.first = Math.max(self.performance.now(), a3.loading.start), a3.total = parseInt(r4.headers.get("Content-Length") || "0"), o3 && Object(i2.isFiniteNumber)(e4.highWaterMark) ? n3.loadProgressively(r4, a3, t4, e4.highWaterMark, o3) : l3 ? r4.arrayBuffer() : r4.text();
      }).then(function(s4) {
        var l4 = n3.response;
        self.clearTimeout(n3.requestTimeout), a3.loading.end = Math.max(self.performance.now(), a3.loading.first), a3.loaded = a3.total = s4[u2];
        var d2 = { url: l4.url, data: s4 };
        o3 && !Object(i2.isFiniteNumber)(e4.highWaterMark) && o3(a3, t4, s4, l4), r3.onSuccess(d2, a3, t4, l4);
      }).catch(function(e5) {
        if (self.clearTimeout(n3.requestTimeout), !a3.aborted) {
          var i3 = e5.code || 0;
          r3.onError({ code: i3, text: e5.message }, t4, e5.details);
        }
      });
    }, e3.getCacheAge = function() {
      var t4 = null;
      if (this.response) {
        var e4 = this.response.headers.get("age");
        t4 = e4 ? parseFloat(e4) : null;
      }
      return t4;
    }, e3.loadProgressively = function(t4, e4, r3, i3, n3) {
      void 0 === i3 && (i3 = 0);
      var s3 = new a2.default(), o3 = t4.body.getReader();
      return function a3() {
        return o3.read().then(function(o4) {
          if (o4.done)
            return s3.dataLength && n3(e4, r3, s3.flush(), t4), Promise.resolve(new ArrayBuffer(0));
          var l3 = o4.value, u2 = l3.length;
          return e4.loaded += u2, u2 < i3 || s3.dataLength ? (s3.push(l3), s3.dataLength >= i3 && n3(e4, r3, s3.flush(), t4)) : n3(e4, r3, l3, t4), a3();
        }).catch(function() {
          return Promise.reject();
        });
      }();
    }, t3;
  }();
  function f(t3, e3) {
    return new self.Request(t3.url, e3);
  }
  var g = function(t3) {
    var e3, r3;
    function i3(e4, r4, i4) {
      var n3;
      return (n3 = t3.call(this, e4) || this).code = void 0, n3.details = void 0, n3.code = r4, n3.details = i4, n3;
    }
    return r3 = t3, (e3 = i3).prototype = Object.create(r3.prototype), e3.prototype.constructor = e3, u(e3, r3), i3;
  }(s2(Error));
  e2.default = h;
}, "./src/utils/imsc1-ttml-parser.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "IMSC1_CODEC", function() {
    return d;
  }), r2.d(e2, "parseIMSC1", function() {
    return g;
  });
  var i2 = r2("./src/utils/mp4-tools.ts"), n2 = r2("./src/utils/vttparser.ts"), a2 = r2("./src/utils/vttcue.ts"), s2 = r2("./src/demux/id3.ts"), o2 = r2("./src/utils/timescale-conversion.ts"), l2 = r2("./src/utils/webvtt-parser.ts");
  function u() {
    return (u = Object.assign || function(t3) {
      for (var e3 = 1; e3 < arguments.length; e3++) {
        var r3 = arguments[e3];
        for (var i3 in r3)
          Object.prototype.hasOwnProperty.call(r3, i3) && (t3[i3] = r3[i3]);
      }
      return t3;
    }).apply(this, arguments);
  }
  var d = "stpp.ttml.im1t", c = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/, h = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/, f = { left: "start", center: "center", right: "end", start: "start", end: "end" };
  function g(t3, e3, r3, n3, d2) {
    var c2 = Object(i2.findBox)(new Uint8Array(t3), ["mdat"]);
    if (0 !== c2.length) {
      var h2 = c2[0], g2 = Object(s2.utf8ArrayToStr)(new Uint8Array(t3, h2.start, h2.end - h2.start)), S = Object(o2.toTimescaleFromScale)(e3, 1, r3);
      try {
        n3(function(t4, e4) {
          var r4 = new DOMParser().parseFromString(t4, "text/xml").getElementsByTagName("tt")[0];
          if (!r4)
            throw new Error("Invalid ttml");
          var i3 = { frameRate: 30, subFrameRate: 1, frameRateMultiplier: 0, tickRate: 0 }, n4 = Object.keys(i3).reduce(function(t5, e5) {
            return t5[e5] = r4.getAttribute("ttp:" + e5) || i3[e5], t5;
          }, {}), s3 = "preserve" !== r4.getAttribute("xml:space"), o3 = p(v(r4, "styling", "style")), d3 = p(v(r4, "layout", "region")), c3 = v(r4, "body", "[begin]");
          return [].map.call(c3, function(t5) {
            var r5 = m(t5, s3);
            if (!r5 || !t5.hasAttribute("begin"))
              return null;
            var i4 = T(t5.getAttribute("begin"), n4), c4 = T(t5.getAttribute("dur"), n4), h3 = T(t5.getAttribute("end"), n4);
            if (null === i4)
              throw E(t5);
            if (null === h3) {
              if (null === c4)
                throw E(t5);
              h3 = i4 + c4;
            }
            var g3 = new a2.default(i4 - e4, h3 - e4, r5);
            g3.id = Object(l2.generateCueId)(g3.startTime, g3.endTime, g3.text);
            var v2 = d3[t5.getAttribute("region")], p2 = o3[t5.getAttribute("style")];
            g3.position = 10, g3.size = 80;
            var S2 = function(t6, e5) {
              var r6 = "http://www.w3.org/ns/ttml#styling";
              return ["displayAlign", "textAlign", "color", "backgroundColor", "fontSize", "fontFamily"].reduce(function(i5, n5) {
                var a3 = y(e5, r6, n5) || y(t6, r6, n5);
                return a3 && (i5[n5] = a3), i5;
              }, {});
            }(v2, p2), b = S2.textAlign;
            if (b) {
              var L = f[b];
              L && (g3.lineAlign = L), g3.align = b;
            }
            return u(g3, S2), g3;
          }).filter(function(t5) {
            return null !== t5;
          });
        }(g2, S));
      } catch (b) {
        d2(b);
      }
    } else
      d2(new Error("Could not parse IMSC1 mdat"));
  }
  function v(t3, e3, r3) {
    var i3 = t3.getElementsByTagName(e3)[0];
    return i3 ? [].slice.call(i3.querySelectorAll(r3)) : [];
  }
  function p(t3) {
    return t3.reduce(function(t4, e3) {
      var r3 = e3.getAttribute("xml:id");
      return r3 && (t4[r3] = e3), t4;
    }, {});
  }
  function m(t3, e3) {
    return [].slice.call(t3.childNodes).reduce(function(t4, r3, i3) {
      var n3;
      return "br" === r3.nodeName && i3 ? t4 + "\n" : null !== (n3 = r3.childNodes) && void 0 !== n3 && n3.length ? m(r3, e3) : e3 ? t4 + r3.textContent.trim().replace(/\s+/g, " ") : t4 + r3.textContent;
    }, "");
  }
  function y(t3, e3, r3) {
    return t3.hasAttributeNS(e3, r3) ? t3.getAttributeNS(e3, r3) : null;
  }
  function E(t3) {
    return new Error("Could not parse ttml timestamp " + t3);
  }
  function T(t3, e3) {
    if (!t3)
      return null;
    var r3 = Object(n2.parseTimeStamp)(t3);
    return null === r3 && (c.test(t3) ? r3 = function(t4, e4) {
      var r4 = c.exec(t4), i3 = (0 | r4[4]) + (0 | r4[5]) / e4.subFrameRate;
      return 3600 * (0 | r4[1]) + 60 * (0 | r4[2]) + (0 | r4[3]) + i3 / e4.frameRate;
    }(t3, e3) : h.test(t3) && (r3 = function(t4, e4) {
      var r4 = h.exec(t4), i3 = Number(r4[1]);
      switch (r4[2]) {
        case "h":
          return 3600 * i3;
        case "m":
          return 60 * i3;
        case "ms":
          return 1e3 * i3;
        case "f":
          return i3 / e4.frameRate;
        case "t":
          return i3 / e4.tickRate;
      }
      return i3;
    }(t3, e3))), r3;
  }
}, "./src/utils/logger.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "enableLogs", function() {
    return o2;
  }), r2.d(e2, "logger", function() {
    return l2;
  });
  var i2 = function() {
  }, n2 = { trace: i2, debug: i2, log: i2, warn: i2, info: i2, error: i2 }, a2 = n2;
  function s2(t3) {
    var e3 = self.console[t3];
    return e3 ? e3.bind(self.console, "[" + t3 + "] >") : i2;
  }
  function o2(t3) {
    if (self.console && true === t3 || "object" == typeof t3) {
      !function(t4) {
        for (var e3 = arguments.length, r3 = new Array(e3 > 1 ? e3 - 1 : 0), i3 = 1; i3 < e3; i3++)
          r3[i3 - 1] = arguments[i3];
        r3.forEach(function(e4) {
          a2[e4] = t4[e4] ? t4[e4].bind(t4) : s2(e4);
        });
      }(t3, "debug", "log", "info", "warn", "error");
      try {
        a2.log();
      } catch (e3) {
        a2 = n2;
      }
    } else
      a2 = n2;
  }
  var l2 = n2;
}, "./src/utils/mediakeys-helper.ts": function(t2, e2, r2) {
  var i2, n2;
  r2.r(e2), r2.d(e2, "KeySystems", function() {
    return i2;
  }), r2.d(e2, "requestMediaKeySystemAccess", function() {
    return a2;
  }), (n2 = i2 || (i2 = {})).WIDEVINE = "com.widevine.alpha", n2.PLAYREADY = "com.microsoft.playready";
  var a2 = "undefined" != typeof self && self.navigator && self.navigator.requestMediaKeySystemAccess ? self.navigator.requestMediaKeySystemAccess.bind(self.navigator) : null;
}, "./src/utils/mediasource-helper.ts": function(t2, e2, r2) {
  function i2() {
    return self.MediaSource || self.WebKitMediaSource;
  }
  r2.r(e2), r2.d(e2, "getMediaSource", function() {
    return i2;
  });
}, "./src/utils/mp4-tools.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "bin2str", function() {
    return o2;
  }), r2.d(e2, "readUint16", function() {
    return l2;
  }), r2.d(e2, "readUint32", function() {
    return u;
  }), r2.d(e2, "writeUint32", function() {
    return d;
  }), r2.d(e2, "findBox", function() {
    return c;
  }), r2.d(e2, "parseSegmentIndex", function() {
    return h;
  }), r2.d(e2, "parseInitSegment", function() {
    return f;
  }), r2.d(e2, "getStartDTS", function() {
    return g;
  }), r2.d(e2, "getDuration", function() {
    return v;
  }), r2.d(e2, "computeRawDurationFromSamples", function() {
    return p;
  }), r2.d(e2, "offsetStartDTS", function() {
    return m;
  }), r2.d(e2, "segmentValidRange", function() {
    return y;
  }), r2.d(e2, "appendUint8Array", function() {
    return E;
  });
  var i2 = r2("./src/utils/typed-array.ts"), n2 = r2("./src/loader/fragment.ts"), a2 = Math.pow(2, 32) - 1, s2 = [].push;
  function o2(t3) {
    return String.fromCharCode.apply(null, t3);
  }
  function l2(t3, e3) {
    "data" in t3 && (e3 += t3.start, t3 = t3.data);
    var r3 = t3[e3] << 8 | t3[e3 + 1];
    return r3 < 0 ? 65536 + r3 : r3;
  }
  function u(t3, e3) {
    "data" in t3 && (e3 += t3.start, t3 = t3.data);
    var r3 = t3[e3] << 24 | t3[e3 + 1] << 16 | t3[e3 + 2] << 8 | t3[e3 + 3];
    return r3 < 0 ? 4294967296 + r3 : r3;
  }
  function d(t3, e3, r3) {
    "data" in t3 && (e3 += t3.start, t3 = t3.data), t3[e3] = r3 >> 24, t3[e3 + 1] = r3 >> 16 & 255, t3[e3 + 2] = r3 >> 8 & 255, t3[e3 + 3] = 255 & r3;
  }
  function c(t3, e3) {
    var r3, i3, n3, a3 = [];
    if (!e3.length)
      return a3;
    "data" in t3 ? (r3 = t3.data, i3 = t3.start, n3 = t3.end) : (i3 = 0, n3 = (r3 = t3).byteLength);
    for (var l3 = i3; l3 < n3; ) {
      var d2 = u(r3, l3), h2 = d2 > 1 ? l3 + d2 : n3;
      if (o2(r3.subarray(l3 + 4, l3 + 8)) === e3[0])
        if (1 === e3.length)
          a3.push({ data: r3, start: l3 + 8, end: h2 });
        else {
          var f2 = c({ data: r3, start: l3 + 8, end: h2 }, e3.slice(1));
          f2.length && s2.apply(a3, f2);
        }
      l3 = h2;
    }
    return a3;
  }
  function h(t3) {
    var e3 = c(t3, ["moov"])[0], r3 = e3 ? e3.end : null, i3 = c(t3, ["sidx"]);
    if (!i3 || !i3[0])
      return null;
    var n3 = [], a3 = i3[0], s3 = a3.data[0], o3 = 0 === s3 ? 8 : 16, d2 = u(a3, o3);
    o3 += 4, o3 += 0 === s3 ? 8 : 16, o3 += 2;
    var h2 = a3.end + 0, f2 = l2(a3, o3);
    o3 += 2;
    for (var g2 = 0; g2 < f2; g2++) {
      var v2 = o3, p2 = u(a3, v2);
      v2 += 4;
      var m2 = 2147483647 & p2;
      if (1 == (2147483648 & p2) >>> 31)
        return console.warn("SIDX has hierarchical references (not supported)"), null;
      var y2 = u(a3, v2);
      v2 += 4, n3.push({ referenceSize: m2, subsegmentDuration: y2, info: { duration: y2 / d2, start: h2, end: h2 + m2 - 1 } }), h2 += m2, o3 = v2 += 4;
    }
    return { earliestPresentationTime: 0, timescale: d2, version: s3, referencesCount: f2, references: n3, moovEndOffset: r3 };
  }
  function f(t3) {
    for (var e3 = [], r3 = c(t3, ["moov", "trak"]), i3 = 0; i3 < r3.length; i3++) {
      var a3 = r3[i3], s3 = c(a3, ["tkhd"])[0];
      if (s3) {
        var l3 = s3.data[s3.start], d2 = 0 === l3 ? 12 : 20, h2 = u(s3, d2), f2 = c(a3, ["mdia", "mdhd"])[0];
        if (f2) {
          var g2 = u(f2, d2 = 0 === (l3 = f2.data[f2.start]) ? 12 : 20), v2 = c(a3, ["mdia", "hdlr"])[0];
          if (v2) {
            var p2 = o2(v2.data.subarray(v2.start + 8, v2.start + 12)), m2 = { soun: n2.ElementaryStreamTypes.AUDIO, vide: n2.ElementaryStreamTypes.VIDEO }[p2];
            if (m2) {
              var y2 = c(a3, ["mdia", "minf", "stbl", "stsd"])[0], E2 = void 0;
              y2 && (E2 = o2(y2.data.subarray(y2.start + 12, y2.start + 16))), e3[h2] = { timescale: g2, type: m2 }, e3[m2] = { timescale: g2, id: h2, codec: E2 };
            }
          }
        }
      }
    }
    return c(t3, ["moov", "mvex", "trex"]).forEach(function(t4) {
      var r4 = u(t4, 4), i4 = e3[r4];
      i4 && (i4.default = { duration: u(t4, 12), flags: u(t4, 20) });
    }), e3;
  }
  function g(t3, e3) {
    return c(e3, ["moof", "traf"]).reduce(function(e4, r3) {
      var i3 = c(r3, ["tfdt"])[0], n3 = i3.data[i3.start], a3 = c(r3, ["tfhd"]).reduce(function(e5, r4) {
        var a4 = u(r4, 4), s3 = t3[a4];
        if (s3) {
          var o3 = u(i3, 4);
          1 === n3 && (o3 *= Math.pow(2, 32), o3 += u(i3, 8));
          var l3 = o3 / (s3.timescale || 9e4);
          if (isFinite(l3) && (null === e5 || l3 < e5))
            return l3;
        }
        return e5;
      }, null);
      return null !== a3 && isFinite(a3) && (null === e4 || a3 < e4) ? a3 : e4;
    }, null) || 0;
  }
  function v(t3, e3) {
    for (var r3 = 0, i3 = 0, a3 = 0, s3 = c(t3, ["moof", "traf"]), o3 = 0; o3 < s3.length; o3++) {
      var l3 = s3[o3], d2 = c(l3, ["tfhd"])[0], f2 = e3[u(d2, 4)];
      if (f2) {
        var g2 = f2.default, v2 = u(d2, 0) | (null == g2 ? void 0 : g2.flags), m2 = null == g2 ? void 0 : g2.duration;
        8 & v2 && (m2 = u(d2, 2 & v2 ? 12 : 8));
        for (var y2 = f2.timescale || 9e4, E2 = c(l3, ["trun"]), T = 0; T < E2.length; T++)
          r3 = m2 ? m2 * u(E2[T], 4) : p(E2[T]), f2.type === n2.ElementaryStreamTypes.VIDEO ? i3 += r3 / y2 : f2.type === n2.ElementaryStreamTypes.AUDIO && (a3 += r3 / y2);
      }
    }
    if (0 === i3 && 0 === a3) {
      var S = h(t3);
      if (null != S && S.references)
        return S.references.reduce(function(t4, e4) {
          return t4 + e4.info.duration || 0;
        }, 0);
    }
    return i3 || a3;
  }
  function p(t3) {
    var e3 = u(t3, 0), r3 = 8;
    1 & e3 && (r3 += 4), 4 & e3 && (r3 += 4);
    for (var i3 = 0, n3 = u(t3, 4), a3 = 0; a3 < n3; a3++)
      256 & e3 && (i3 += u(t3, r3), r3 += 4), 512 & e3 && (r3 += 4), 1024 & e3 && (r3 += 4), 2048 & e3 && (r3 += 4);
    return i3;
  }
  function m(t3, e3, r3) {
    c(e3, ["moof", "traf"]).forEach(function(e4) {
      c(e4, ["tfhd"]).forEach(function(i3) {
        var n3 = u(i3, 4), s3 = t3[n3];
        if (s3) {
          var o3 = s3.timescale || 9e4;
          c(e4, ["tfdt"]).forEach(function(t4) {
            var e5 = t4.data[t4.start], i4 = u(t4, 4);
            if (0 === e5)
              d(t4, 4, i4 - r3 * o3);
            else {
              i4 *= Math.pow(2, 32), i4 += u(t4, 8), i4 -= r3 * o3, i4 = Math.max(i4, 0);
              var n4 = Math.floor(i4 / (a2 + 1)), s4 = Math.floor(i4 % (a2 + 1));
              d(t4, 4, n4), d(t4, 8, s4);
            }
          });
        }
      });
    });
  }
  function y(t3) {
    var e3 = { valid: null, remainder: null }, r3 = c(t3, ["moof"]);
    if (!r3)
      return e3;
    if (r3.length < 2)
      return e3.remainder = t3, e3;
    var n3 = r3[r3.length - 1];
    return e3.valid = Object(i2.sliceUint8)(t3, 0, n3.start - 8), e3.remainder = Object(i2.sliceUint8)(t3, n3.start - 8), e3;
  }
  function E(t3, e3) {
    var r3 = new Uint8Array(t3.length + e3.length);
    return r3.set(t3), r3.set(e3, t3.length), r3;
  }
}, "./src/utils/output-filter.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "default", function() {
    return i2;
  });
  var i2 = function() {
    function t3(t4, e4) {
      this.timelineController = void 0, this.cueRanges = [], this.trackName = void 0, this.startTime = null, this.endTime = null, this.screen = null, this.timelineController = t4, this.trackName = e4;
    }
    var e3 = t3.prototype;
    return e3.dispatchCue = function() {
      null !== this.startTime && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen, this.cueRanges), this.startTime = null);
    }, e3.newCue = function(t4, e4, r3) {
      (null === this.startTime || this.startTime > t4) && (this.startTime = t4), this.endTime = e4, this.screen = r3, this.timelineController.createCaptionsTrack(this.trackName);
    }, e3.reset = function() {
      this.cueRanges = [];
    }, t3;
  }();
}, "./src/utils/texttrack-utils.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "sendAddTrackEvent", function() {
    return n2;
  }), r2.d(e2, "addCueToTrack", function() {
    return a2;
  }), r2.d(e2, "clearCurrentCues", function() {
    return s2;
  }), r2.d(e2, "removeCuesInRange", function() {
    return o2;
  }), r2.d(e2, "getCuesInRange", function() {
    return l2;
  });
  var i2 = r2("./src/utils/logger.ts");
  function n2(t3, e3) {
    var r3;
    try {
      r3 = new Event("addtrack");
    } catch (i3) {
      (r3 = document.createEvent("Event")).initEvent("addtrack", false, false);
    }
    r3.track = t3, e3.dispatchEvent(r3);
  }
  function a2(t3, e3) {
    var r3 = t3.mode;
    if ("disabled" === r3 && (t3.mode = "hidden"), t3.cues && !t3.cues.getCueById(e3.id))
      try {
        if (t3.addCue(e3), !t3.cues.getCueById(e3.id))
          throw new Error("addCue is failed for: " + e3);
      } catch (a3) {
        i2.logger.debug("[texttrack-utils]: " + a3);
        var n3 = new self.TextTrackCue(e3.startTime, e3.endTime, e3.text);
        n3.id = e3.id, t3.addCue(n3);
      }
    "disabled" === r3 && (t3.mode = r3);
  }
  function s2(t3) {
    var e3 = t3.mode;
    if ("disabled" === e3 && (t3.mode = "hidden"), t3.cues)
      for (var r3 = t3.cues.length; r3--; )
        t3.removeCue(t3.cues[r3]);
    "disabled" === e3 && (t3.mode = e3);
  }
  function o2(t3, e3, r3) {
    var i3 = t3.mode;
    if ("disabled" === i3 && (t3.mode = "hidden"), t3.cues && t3.cues.length > 0)
      for (var n3 = l2(t3.cues, e3, r3), a3 = 0; a3 < n3.length; a3++)
        t3.removeCue(n3[a3]);
    "disabled" === i3 && (t3.mode = i3);
  }
  function l2(t3, e3, r3) {
    var i3 = [], n3 = function(t4, e4) {
      if (e4 < t4[0].startTime)
        return 0;
      var r4 = t4.length - 1;
      if (e4 > t4[r4].endTime)
        return -1;
      for (var i4 = 0, n4 = r4; i4 <= n4; ) {
        var a4 = Math.floor((n4 + i4) / 2);
        if (e4 < t4[a4].startTime)
          n4 = a4 - 1;
        else {
          if (!(e4 > t4[a4].startTime && i4 < r4))
            return a4;
          i4 = a4 + 1;
        }
      }
      return t4[i4].startTime - e4 < e4 - t4[n4].startTime ? i4 : n4;
    }(t3, e3);
    if (n3 > -1)
      for (var a3 = n3, s3 = t3.length; a3 < s3; a3++) {
        var o3 = t3[a3];
        if (o3.startTime >= e3 && o3.endTime <= r3)
          i3.push(o3);
        else if (o3.startTime > r3)
          return i3;
      }
    return i3;
  }
}, "./src/utils/time-ranges.ts": function(t2, e2, r2) {
  r2.r(e2), e2.default = { toString: function(t3) {
    for (var e3 = "", r3 = t3.length, i2 = 0; i2 < r3; i2++)
      e3 += "[" + t3.start(i2).toFixed(3) + "," + t3.end(i2).toFixed(3) + "]";
    return e3;
  } };
}, "./src/utils/timescale-conversion.ts": function(t2, e2, r2) {
  function i2(t3, e3, r3, i3) {
    void 0 === r3 && (r3 = 1), void 0 === i3 && (i3 = false);
    var n3 = t3 * e3 * r3;
    return i3 ? Math.round(n3) : n3;
  }
  function n2(t3, e3, r3, n3) {
    return void 0 === r3 && (r3 = 1), void 0 === n3 && (n3 = false), i2(t3, e3, 1 / r3, n3);
  }
  function a2(t3, e3) {
    return void 0 === e3 && (e3 = false), i2(t3, 1e3, 1 / 9e4, e3);
  }
  function s2(t3, e3) {
    return void 0 === e3 && (e3 = 1), i2(t3, 9e4, 1 / e3);
  }
  r2.r(e2), r2.d(e2, "toTimescaleFromBase", function() {
    return i2;
  }), r2.d(e2, "toTimescaleFromScale", function() {
    return n2;
  }), r2.d(e2, "toMsFromMpegTsClock", function() {
    return a2;
  }), r2.d(e2, "toMpegTsClockFromTimescale", function() {
    return s2;
  });
}, "./src/utils/typed-array.ts": function(t2, e2, r2) {
  function i2(t3, e3, r3) {
    return Uint8Array.prototype.slice ? t3.slice(e3, r3) : new Uint8Array(Array.prototype.slice.call(t3, e3, r3));
  }
  r2.r(e2), r2.d(e2, "sliceUint8", function() {
    return i2;
  });
}, "./src/utils/vttcue.ts": function(t2, e2, r2) {
  r2.r(e2), e2.default = function() {
    if ("undefined" != typeof self && self.VTTCue)
      return self.VTTCue;
    var t3 = ["", "lr", "rl"], e3 = ["start", "middle", "end", "left", "right"];
    function r3(t4, e4) {
      if ("string" != typeof e4)
        return false;
      if (!Array.isArray(t4))
        return false;
      var r4 = e4.toLowerCase();
      return !!~t4.indexOf(r4) && r4;
    }
    function i2(t4) {
      return r3(e3, t4);
    }
    function n2(t4) {
      for (var e4 = arguments.length, r4 = new Array(e4 > 1 ? e4 - 1 : 0), i3 = 1; i3 < e4; i3++)
        r4[i3 - 1] = arguments[i3];
      for (var n3 = 1; n3 < arguments.length; n3++) {
        var a3 = arguments[n3];
        for (var s2 in a3)
          t4[s2] = a3[s2];
      }
      return t4;
    }
    function a2(e4, a3, s2) {
      var o2 = this, l2 = { enumerable: true };
      o2.hasBeenReset = false;
      var u = "", d = false, c = e4, h = a3, f = s2, g = null, v = "", p = true, m = "auto", y = "start", E = 50, T = "middle", S = 50, b = "middle";
      Object.defineProperty(o2, "id", n2({}, l2, { get: function() {
        return u;
      }, set: function(t4) {
        u = "" + t4;
      } })), Object.defineProperty(o2, "pauseOnExit", n2({}, l2, { get: function() {
        return d;
      }, set: function(t4) {
        d = !!t4;
      } })), Object.defineProperty(o2, "startTime", n2({}, l2, { get: function() {
        return c;
      }, set: function(t4) {
        if ("number" != typeof t4)
          throw new TypeError("Start time must be set to a number.");
        c = t4, this.hasBeenReset = true;
      } })), Object.defineProperty(o2, "endTime", n2({}, l2, { get: function() {
        return h;
      }, set: function(t4) {
        if ("number" != typeof t4)
          throw new TypeError("End time must be set to a number.");
        h = t4, this.hasBeenReset = true;
      } })), Object.defineProperty(o2, "text", n2({}, l2, { get: function() {
        return f;
      }, set: function(t4) {
        f = "" + t4, this.hasBeenReset = true;
      } })), Object.defineProperty(o2, "region", n2({}, l2, { get: function() {
        return g;
      }, set: function(t4) {
        g = t4, this.hasBeenReset = true;
      } })), Object.defineProperty(o2, "vertical", n2({}, l2, { get: function() {
        return v;
      }, set: function(e5) {
        var i3 = function(e6) {
          return r3(t3, e6);
        }(e5);
        if (false === i3)
          throw new SyntaxError("An invalid or illegal string was specified.");
        v = i3, this.hasBeenReset = true;
      } })), Object.defineProperty(o2, "snapToLines", n2({}, l2, { get: function() {
        return p;
      }, set: function(t4) {
        p = !!t4, this.hasBeenReset = true;
      } })), Object.defineProperty(o2, "line", n2({}, l2, { get: function() {
        return m;
      }, set: function(t4) {
        if ("number" != typeof t4 && "auto" !== t4)
          throw new SyntaxError("An invalid number or illegal string was specified.");
        m = t4, this.hasBeenReset = true;
      } })), Object.defineProperty(o2, "lineAlign", n2({}, l2, { get: function() {
        return y;
      }, set: function(t4) {
        var e5 = i2(t4);
        if (!e5)
          throw new SyntaxError("An invalid or illegal string was specified.");
        y = e5, this.hasBeenReset = true;
      } })), Object.defineProperty(o2, "position", n2({}, l2, { get: function() {
        return E;
      }, set: function(t4) {
        if (t4 < 0 || t4 > 100)
          throw new Error("Position must be between 0 and 100.");
        E = t4, this.hasBeenReset = true;
      } })), Object.defineProperty(o2, "positionAlign", n2({}, l2, { get: function() {
        return T;
      }, set: function(t4) {
        var e5 = i2(t4);
        if (!e5)
          throw new SyntaxError("An invalid or illegal string was specified.");
        T = e5, this.hasBeenReset = true;
      } })), Object.defineProperty(o2, "size", n2({}, l2, { get: function() {
        return S;
      }, set: function(t4) {
        if (t4 < 0 || t4 > 100)
          throw new Error("Size must be between 0 and 100.");
        S = t4, this.hasBeenReset = true;
      } })), Object.defineProperty(o2, "align", n2({}, l2, { get: function() {
        return b;
      }, set: function(t4) {
        var e5 = i2(t4);
        if (!e5)
          throw new SyntaxError("An invalid or illegal string was specified.");
        b = e5, this.hasBeenReset = true;
      } })), o2.displayState = void 0;
    }
    return a2.prototype.getCueAsHTML = function() {
      return self.WebVTT.convertCueToDOMTree(self, this.text);
    }, a2;
  }();
}, "./src/utils/vttparser.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "parseTimeStamp", function() {
    return a2;
  }), r2.d(e2, "fixLineBreaks", function() {
    return c;
  }), r2.d(e2, "VTTParser", function() {
    return h;
  });
  var i2 = r2("./src/utils/vttcue.ts"), n2 = function() {
    function t3() {
    }
    return t3.prototype.decode = function(t4, e3) {
      if (!t4)
        return "";
      if ("string" != typeof t4)
        throw new Error("Error - expected string data.");
      return decodeURIComponent(encodeURIComponent(t4));
    }, t3;
  }();
  function a2(t3) {
    function e3(t4, e4, r4, i3) {
      return 3600 * (0 | t4) + 60 * (0 | e4) + (0 | r4) + parseFloat(i3 || 0);
    }
    var r3 = t3.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
    return r3 ? parseFloat(r3[2]) > 59 ? e3(r3[2], r3[3], 0, r3[4]) : e3(r3[1], r3[2], r3[3], r3[4]) : null;
  }
  var s2 = function() {
    function t3() {
      this.values = /* @__PURE__ */ Object.create(null);
    }
    var e3 = t3.prototype;
    return e3.set = function(t4, e4) {
      this.get(t4) || "" === e4 || (this.values[t4] = e4);
    }, e3.get = function(t4, e4, r3) {
      return r3 ? this.has(t4) ? this.values[t4] : e4[r3] : this.has(t4) ? this.values[t4] : e4;
    }, e3.has = function(t4) {
      return t4 in this.values;
    }, e3.alt = function(t4, e4, r3) {
      for (var i3 = 0; i3 < r3.length; ++i3)
        if (e4 === r3[i3]) {
          this.set(t4, e4);
          break;
        }
    }, e3.integer = function(t4, e4) {
      /^-?\d+$/.test(e4) && this.set(t4, parseInt(e4, 10));
    }, e3.percent = function(t4, e4) {
      if (/^([\d]{1,3})(\.[\d]*)?%$/.test(e4)) {
        var r3 = parseFloat(e4);
        if (r3 >= 0 && r3 <= 100)
          return this.set(t4, r3), true;
      }
      return false;
    }, t3;
  }();
  function o2(t3, e3, r3, i3) {
    var n3 = i3 ? t3.split(i3) : [t3];
    for (var a3 in n3)
      if ("string" == typeof n3[a3]) {
        var s3 = n3[a3].split(r3);
        2 === s3.length && e3(s3[0], s3[1]);
      }
  }
  var l2 = new i2.default(0, 0, ""), u = "middle" === l2.align ? "middle" : "center";
  function d(t3, e3, r3) {
    var i3 = t3;
    function n3() {
      var e4 = a2(t3);
      if (null === e4)
        throw new Error("Malformed timestamp: " + i3);
      return t3 = t3.replace(/^[^\sa-zA-Z-]+/, ""), e4;
    }
    function d2() {
      t3 = t3.replace(/^\s+/, "");
    }
    if (d2(), e3.startTime = n3(), d2(), "-->" !== t3.substr(0, 3))
      throw new Error("Malformed time stamp (time stamps must be separated by '-->'): " + i3);
    t3 = t3.substr(3), d2(), e3.endTime = n3(), d2(), function(t4, e4) {
      var i4 = new s2();
      o2(t4, function(t5, e5) {
        var n5;
        switch (t5) {
          case "region":
            for (var a4 = r3.length - 1; a4 >= 0; a4--)
              if (r3[a4].id === e5) {
                i4.set(t5, r3[a4].region);
                break;
              }
            break;
          case "vertical":
            i4.alt(t5, e5, ["rl", "lr"]);
            break;
          case "line":
            n5 = e5.split(","), i4.integer(t5, n5[0]), i4.percent(t5, n5[0]) && i4.set("snapToLines", false), i4.alt(t5, n5[0], ["auto"]), 2 === n5.length && i4.alt("lineAlign", n5[1], ["start", u, "end"]);
            break;
          case "position":
            n5 = e5.split(","), i4.percent(t5, n5[0]), 2 === n5.length && i4.alt("positionAlign", n5[1], ["start", u, "end", "line-left", "line-right", "auto"]);
            break;
          case "size":
            i4.percent(t5, e5);
            break;
          case "align":
            i4.alt(t5, e5, ["start", u, "end", "left", "right"]);
        }
      }, /:/, /\s/), e4.region = i4.get("region", null), e4.vertical = i4.get("vertical", "");
      var n4 = i4.get("line", "auto");
      "auto" === n4 && -1 === l2.line && (n4 = -1), e4.line = n4, e4.lineAlign = i4.get("lineAlign", "start"), e4.snapToLines = i4.get("snapToLines", true), e4.size = i4.get("size", 100), e4.align = i4.get("align", u);
      var a3 = i4.get("position", "auto");
      "auto" === a3 && 50 === l2.position && (a3 = "start" === e4.align || "left" === e4.align ? 0 : "end" === e4.align || "right" === e4.align ? 100 : 50), e4.position = a3;
    }(t3, e3);
  }
  function c(t3) {
    return t3.replace(/<br(?: \/)?>/gi, "\n");
  }
  var h = function() {
    function t3() {
      this.state = "INITIAL", this.buffer = "", this.decoder = new n2(), this.regionList = [], this.cue = null, this.oncue = void 0, this.onparsingerror = void 0, this.onflush = void 0;
    }
    var e3 = t3.prototype;
    return e3.parse = function(t4) {
      var e4 = this;
      function r3() {
        var t5 = e4.buffer, r4 = 0;
        for (t5 = c(t5); r4 < t5.length && "\r" !== t5[r4] && "\n" !== t5[r4]; )
          ++r4;
        var i3 = t5.substr(0, r4);
        return "\r" === t5[r4] && ++r4, "\n" === t5[r4] && ++r4, e4.buffer = t5.substr(r4), i3;
      }
      t4 && (e4.buffer += e4.decoder.decode(t4, { stream: true }));
      try {
        var n3 = "";
        if ("INITIAL" === e4.state) {
          if (!/\r\n|\n/.test(e4.buffer))
            return this;
          var a3 = (n3 = r3()).match(/^(??????)?WEBVTT([ \t].*)?$/);
          if (!a3 || !a3[0])
            throw new Error("Malformed WebVTT signature.");
          e4.state = "HEADER";
        }
        for (var s3 = false; e4.buffer; ) {
          if (!/\r\n|\n/.test(e4.buffer))
            return this;
          switch (s3 ? s3 = false : n3 = r3(), e4.state) {
            case "HEADER":
              /:/.test(n3) ? o2(n3, function(t5, e5) {
              }, /:/) : n3 || (e4.state = "ID");
              continue;
            case "NOTE":
              n3 || (e4.state = "ID");
              continue;
            case "ID":
              if (/^NOTE($|[ \t])/.test(n3)) {
                e4.state = "NOTE";
                break;
              }
              if (!n3)
                continue;
              if (e4.cue = new i2.default(0, 0, ""), e4.state = "CUE", -1 === n3.indexOf("-->")) {
                e4.cue.id = n3;
                continue;
              }
            case "CUE":
              if (!e4.cue) {
                e4.state = "BADCUE";
                continue;
              }
              try {
                d(n3, e4.cue, e4.regionList);
              } catch (u2) {
                e4.cue = null, e4.state = "BADCUE";
                continue;
              }
              e4.state = "CUETEXT";
              continue;
            case "CUETEXT":
              var l3 = -1 !== n3.indexOf("-->");
              if (!n3 || l3 && (s3 = true)) {
                e4.oncue && e4.cue && e4.oncue(e4.cue), e4.cue = null, e4.state = "ID";
                continue;
              }
              if (null === e4.cue)
                continue;
              e4.cue.text && (e4.cue.text += "\n"), e4.cue.text += n3;
              continue;
            case "BADCUE":
              n3 || (e4.state = "ID");
          }
        }
      } catch (u2) {
        "CUETEXT" === e4.state && e4.cue && e4.oncue && e4.oncue(e4.cue), e4.cue = null, e4.state = "INITIAL" === e4.state ? "BADWEBVTT" : "BADCUE";
      }
      return this;
    }, e3.flush = function() {
      var t4 = this;
      try {
        if ((t4.cue || "HEADER" === t4.state) && (t4.buffer += "\n\n", t4.parse()), "INITIAL" === t4.state || "BADWEBVTT" === t4.state)
          throw new Error("Malformed WebVTT signature.");
      } catch (e4) {
        t4.onparsingerror && t4.onparsingerror(e4);
      }
      return t4.onflush && t4.onflush(), this;
    }, t3;
  }();
}, "./src/utils/webvtt-parser.ts": function(t2, e2, r2) {
  r2.r(e2), r2.d(e2, "generateCueId", function() {
    return c;
  }), r2.d(e2, "parseWebVTT", function() {
    return h;
  });
  var i2 = r2("./src/polyfills/number.ts"), n2 = r2("./src/utils/vttparser.ts"), a2 = r2("./src/demux/id3.ts"), s2 = r2("./src/utils/timescale-conversion.ts"), o2 = r2("./src/remux/mp4-remuxer.ts"), l2 = /\r\n|\n\r|\n|\r/g, u = function(t3, e3, r3) {
    return void 0 === r3 && (r3 = 0), t3.substr(r3, e3.length) === e3;
  }, d = function(t3) {
    for (var e3 = 5381, r3 = t3.length; r3; )
      e3 = 33 * e3 ^ t3.charCodeAt(--r3);
    return (e3 >>> 0).toString();
  };
  function c(t3, e3, r3) {
    return d(t3.toString()) + d(e3.toString()) + d(r3);
  }
  function h(t3, e3, r3, d2, h2, f, g, v) {
    var p, m = new n2.VTTParser(), y = Object(a2.utf8ArrayToStr)(new Uint8Array(t3)).trim().replace(l2, "\n").split("\n"), E = [], T = Object(s2.toMpegTsClockFromTimescale)(e3, r3), S = "00:00.000", b = 0, L = 0, A = true, D = false;
    m.oncue = function(t4) {
      var e4 = d2[h2], r4 = d2.ccOffset, i3 = (b - T) / 9e4;
      if (null != e4 && e4.new && (void 0 !== L ? r4 = d2.ccOffset = e4.start : function(t5, e5, r5) {
        var i4 = t5[e5], n4 = t5[i4.prevCC];
        if (!n4 || !n4.new && i4.new)
          return t5.ccOffset = t5.presentationOffset = i4.start, void (i4.new = false);
        for (; null !== (a4 = n4) && void 0 !== a4 && a4.new; ) {
          var a4;
          t5.ccOffset += i4.start - n4.start, i4.new = false, n4 = t5[(i4 = n4).prevCC];
        }
        t5.presentationOffset = r5;
      }(d2, h2, i3)), i3 && (r4 = i3 - d2.presentationOffset), D) {
        var n3 = t4.endTime - t4.startTime, a3 = Object(o2.normalizePts)(9e4 * (t4.startTime + r4 - L), 9e4 * f) / 9e4;
        t4.startTime = a3, t4.endTime = a3 + n3;
      }
      var s3 = t4.text.trim();
      t4.text = decodeURIComponent(encodeURIComponent(s3)), t4.id || (t4.id = c(t4.startTime, t4.endTime, s3)), t4.endTime > 0 && E.push(t4);
    }, m.onparsingerror = function(t4) {
      p = t4;
    }, m.onflush = function() {
      p ? v(p) : g(E);
    }, y.forEach(function(t4) {
      if (A) {
        if (u(t4, "X-TIMESTAMP-MAP=")) {
          A = false, D = true, t4.substr(16).split(",").forEach(function(t5) {
            u(t5, "LOCAL:") ? S = t5.substr(6) : u(t5, "MPEGTS:") && (b = parseInt(t5.substr(7)));
          });
          try {
            L = function(t5) {
              var e4 = parseInt(t5.substr(-3)), r4 = parseInt(t5.substr(-6, 2)), n3 = parseInt(t5.substr(-9, 2)), a3 = t5.length > 9 ? parseInt(t5.substr(0, t5.indexOf(":"))) : 0;
              if (!(Object(i2.isFiniteNumber)(e4) && Object(i2.isFiniteNumber)(r4) && Object(i2.isFiniteNumber)(n3) && Object(i2.isFiniteNumber)(a3)))
                throw Error("Malformed X-TIMESTAMP-MAP: Local:" + t5);
              return e4 += 1e3 * r4, (e4 += 6e4 * n3) + 36e5 * a3;
            }(S) / 1e3;
          } catch (e4) {
            D = false, p = e4;
          }
          return;
        }
        "" === t4 && (A = false);
      }
      m.parse(t4 + "\n");
    }), m.flush();
  }
}, "./src/utils/xhr-loader.ts": function(t2, e2, r2) {
  r2.r(e2);
  var i2 = r2("./src/utils/logger.ts"), n2 = r2("./src/loader/load-stats.ts"), a2 = /^age:\s*[\d.]+\s*$/m, s2 = function() {
    function t3(t4) {
      this.xhrSetup = void 0, this.requestTimeout = void 0, this.retryTimeout = void 0, this.retryDelay = void 0, this.config = null, this.callbacks = null, this.context = void 0, this.loader = null, this.stats = void 0, this.xhrSetup = t4 ? t4.xhrSetup : null, this.stats = new n2.LoadStats(), this.retryDelay = 0;
    }
    var e3 = t3.prototype;
    return e3.destroy = function() {
      this.callbacks = null, this.abortInternal(), this.loader = null, this.config = null;
    }, e3.abortInternal = function() {
      var t4 = this.loader;
      self.clearTimeout(this.requestTimeout), self.clearTimeout(this.retryTimeout), t4 && (t4.onreadystatechange = null, t4.onprogress = null, 4 !== t4.readyState && (this.stats.aborted = true, t4.abort()));
    }, e3.abort = function() {
      var t4;
      this.abortInternal(), null !== (t4 = this.callbacks) && void 0 !== t4 && t4.onAbort && this.callbacks.onAbort(this.stats, this.context, this.loader);
    }, e3.load = function(t4, e4, r3) {
      if (this.stats.loading.start)
        throw new Error("Loader can only be used once.");
      this.stats.loading.start = self.performance.now(), this.context = t4, this.config = e4, this.callbacks = r3, this.retryDelay = e4.retryDelay, this.loadInternal();
    }, e3.loadInternal = function() {
      var t4 = this.config, e4 = this.context;
      if (t4) {
        var r3 = this.loader = new self.XMLHttpRequest(), i3 = this.stats;
        i3.loading.first = 0, i3.loaded = 0;
        var n3 = this.xhrSetup;
        try {
          if (n3)
            try {
              n3(r3, e4.url);
            } catch (a3) {
              r3.open("GET", e4.url, true), n3(r3, e4.url);
            }
          r3.readyState || r3.open("GET", e4.url, true);
        } catch (a3) {
          return void this.callbacks.onError({ code: r3.status, text: a3.message }, e4, r3);
        }
        e4.rangeEnd && r3.setRequestHeader("Range", "bytes=" + e4.rangeStart + "-" + (e4.rangeEnd - 1)), r3.onreadystatechange = this.readystatechange.bind(this), r3.onprogress = this.loadprogress.bind(this), r3.responseType = e4.responseType, self.clearTimeout(this.requestTimeout), this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), t4.timeout), r3.send();
      }
    }, e3.readystatechange = function() {
      var t4 = this.context, e4 = this.loader, r3 = this.stats;
      if (t4 && e4) {
        var n3 = e4.readyState, a3 = this.config;
        if (!r3.aborted && n3 >= 2)
          if (self.clearTimeout(this.requestTimeout), 0 === r3.loading.first && (r3.loading.first = Math.max(self.performance.now(), r3.loading.start)), 4 === n3) {
            e4.onreadystatechange = null, e4.onprogress = null;
            var s3 = e4.status;
            if (s3 >= 200 && s3 < 300) {
              var o2, l2;
              if (r3.loading.end = Math.max(self.performance.now(), r3.loading.first), l2 = "arraybuffer" === t4.responseType ? (o2 = e4.response).byteLength : (o2 = e4.responseText).length, r3.loaded = r3.total = l2, !this.callbacks)
                return;
              var u = this.callbacks.onProgress;
              if (u && u(r3, t4, o2, e4), !this.callbacks)
                return;
              var d = { url: e4.responseURL, data: o2 };
              this.callbacks.onSuccess(d, r3, t4, e4);
            } else
              r3.retry >= a3.maxRetry || s3 >= 400 && s3 < 499 ? (i2.logger.error(s3 + " while loading " + t4.url), this.callbacks.onError({ code: s3, text: e4.statusText }, t4, e4)) : (i2.logger.warn(s3 + " while loading " + t4.url + ", retrying in " + this.retryDelay + "..."), this.abortInternal(), this.loader = null, self.clearTimeout(this.retryTimeout), this.retryTimeout = self.setTimeout(this.loadInternal.bind(this), this.retryDelay), this.retryDelay = Math.min(2 * this.retryDelay, a3.maxRetryDelay), r3.retry++);
          } else
            self.clearTimeout(this.requestTimeout), this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), a3.timeout);
      }
    }, e3.loadtimeout = function() {
      i2.logger.warn("timeout while loading " + this.context.url);
      var t4 = this.callbacks;
      t4 && (this.abortInternal(), t4.onTimeout(this.stats, this.context, this.loader));
    }, e3.loadprogress = function(t4) {
      var e4 = this.stats;
      e4.loaded = t4.loaded, t4.lengthComputable && (e4.total = t4.total);
    }, e3.getCacheAge = function() {
      var t4 = null;
      if (this.loader && a2.test(this.loader.getAllResponseHeaders())) {
        var e4 = this.loader.getResponseHeader("age");
        t4 = e4 ? parseFloat(e4) : null;
      }
      return t4;
    }, t3;
  }();
  e2.default = s2;
} }).default);
var Y = H(W.exports);
const q = { name: "d-icon" };
const X = Object.assign(q, { props: { icon: String, size: [Number, String] }, setup: function(t2) {
  const e2 = t2, r2 = computed(() => ({ fontSize: /^\d+$/.test(e2.size) ? e2.size + "px" : e2.size }));
  return (e3, i2) => (openBlock(), createElementBlock("i", { class: normalizeClass(["d-icon iconfont", t2.icon]), style: normalizeStyle(unref(r2)) }, null, 6));
} });
X.__scopeId = "data-v-0c690e66";
pushScopeId("data-v-4cb76d59");
const z = { class: "d-player-top" }, $ = { class: "top-title" }, Q = { class: "top-title" };
popScopeId();
const J = { props: { title: { default: "" } }, setup(t2) {
  Date.prototype.format = function(t3) {
    let e3 = { "h+": this.getHours(), "m+": this.getMinutes(), "s+": this.getSeconds() };
    for (var r3 in e3)
      new RegExp("(" + r3 + ")").test(t3) && (t3 = t3.replace(RegExp.$1, 1 == RegExp.$1.length ? e3[r3] : ("00" + e3[r3]).substr(("" + e3[r3]).length)));
    return t3;
  };
  let e2 = ref("00:00:00");
  e2.value = new Date().format("hh:mm:ss");
  let r2 = null;
  return r2 = setInterval(() => {
    e2.value = new Date().format("hh:mm:ss");
  }, 1e3), onUnmounted(() => {
    clearInterval(r2);
  }), (r3, i2) => (openBlock(), createElementBlock("div", z, [createBaseVNode("p", $, toDisplayString(t2.title || ""), 1), createBaseVNode("p", Q, toDisplayString(unref(e2)), 1)]));
}, __scopeId: "data-v-4cb76d59" };
pushScopeId("data-v-ac2469ec");
const Z = { class: "d-status" }, tt = { class: "d-flex-center" }, et = { class: "d-flex-center" }, rt = createTextVNode("5X\u901F\u64AD\u653E\u4E2D ");
popScopeId();
var it = defineComponent({ props: ["state"], setup: (t2) => (e2, r2) => withDirectives((openBlock(), createElementBlock("div", Z, [withDirectives(createBaseVNode("li", tt, [createVNode(X, { size: "18", class: "d-status-icon", icon: "icon-volume-" + (0 == t2.state.volume ? "mute" : t2.state.volume > 0.5 ? "up" : "down") }, null, 8, ["icon"]), createTextVNode(" " + toDisplayString(~~(100 * t2.state.volume)) + "% ", 1)], 512), [[vShow, "volume" == t2.state.handleType]]), withDirectives(createBaseVNode("li", et, [createVNode(X, { size: "12", icon: "icon-play" }), createVNode(X, { size: "12", icon: "icon-play", style: { "margin-right": "5px" } }), rt], 512), [[vShow, "playbackRate" == t2.state.handleType || t2.state.isMultiplesPlay]])], 512)), [[vShow, t2.state.handleType || t2.state.isMultiplesPlay]]) });
it.__scopeId = "data-v-ac2469ec", pushScopeId("data-v-385f7870");
const nt = ["checked", "true-value", "false-value"], at = createBaseVNode("span", { class: "d-switch_action" }, null, -1);
popScopeId();
var st = defineComponent({ props: { modelValue: { type: [Number, String, Boolean] }, width: { type: String, default: "40px" }, trueValue: { type: [Number, String, Boolean], default: true }, falseValue: { type: [Number, String, Boolean], default: true }, activeColor: { type: [String], default: "#409EFF" } }, emits: ["update:modelValue", "change"], setup(t2, { emit: e2 }) {
  const r2 = t2;
  useCssVars((e3) => ({ "014e5dc0": t2.width, e4e32852: t2.activeColor }));
  const i2 = ref(null), n2 = computed(() => r2.modelValue === r2.trueValue), a2 = () => {
    nextTick(() => {
      const t3 = i2.value.checked;
      e2("update:modelValue", t3), e2("change", t3);
    });
  };
  return (e3, r3) => (openBlock(), createElementBlock("div", { class: normalizeClass(["d-switch", { "is-checked": unref(n2) }]) }, [createBaseVNode("input", { class: "d-switch__input", ref: i2, type: "checkbox", checked: unref(n2), onChange: a2, "true-value": t2.trueValue, "false-value": t2.falseValue }, null, 40, nt), at], 2));
} });
st.__scopeId = "data-v-385f7870", pushScopeId("data-v-b2384226");
const ot = { key: 0 }, lt = createBaseVNode("i", { class: "rotating iconfont icon-loading f50" }, null, -1), ut = [createBaseVNode("i", { class: "rotating iconfont icon-loading f50" }, null, -1), createBaseVNode("p", null, "\u6B63\u5728\u7F13\u51B2...", -1)], dt = [createBaseVNode("i", { class: "iconfont icon-replay f24 mr5" }, null, -1), createTextVNode("\u91CD\u65B0\u64AD\u653E ")], ct = [createBaseVNode("i", { class: "iconfont icon-replay f24 mr5" }, null, -1), createTextVNode("\u8BF7\u6C42\u9519\u8BEF ")];
popScopeId();
var ht = defineComponent({ props: { loadType: String, text: { type: String, default: "" } }, setup(t2) {
  const e2 = t2, { proxy: r2 } = getCurrentInstance(), i2 = ["loadstart", "waiting", "ended", "error", "stalled"], n2 = () => {
    r2.$parent.play();
  }, a2 = computed(() => {
    let t3 = "background: rgba(0, 0, 0, .1);z-index:1";
    return "loadstart" == e2.loadType && (t3 = "background: rgba(0, 0, 0, 1);;z-index:3"), t3;
  });
  return (e3, r3) => withDirectives((openBlock(), createElementBlock("div", { class: "d-loading", style: normalizeStyle(unref(a2)) }, [createBaseVNode("div", null, ["loadstart" == t2.loadType ? (openBlock(), createElementBlock("span", ot, [lt, createBaseVNode("p", null, toDisplayString(t2.text), 1)])) : createCommentVNode("", true), withDirectives(createBaseVNode("span", null, ut, 512), [[vShow, "waiting" == t2.loadType]]), withDirectives(createBaseVNode("span", null, [createBaseVNode("p", { onClick: n2, class: "d-flex-x d-pointer" }, dt)], 512), [[vShow, "ended" == t2.loadType]]), withDirectives(createBaseVNode("span", null, [createBaseVNode("p", { onClick: n2, class: "d-flex-x d-pointer" }, ct)], 512), [[vShow, "error" == t2.loadType || "stalled" == t2.loadType]])])], 4)), [[vShow, i2.includes(t2.loadType)]]);
} });
ht.__scopeId = "data-v-b2384226";
const ft = function(t2, e2, r2, i2 = false) {
  t2 && e2 && r2 && t2.addEventListener(e2, r2, i2);
}, gt = function(t2, e2, r2, i2 = false) {
  t2 && e2 && r2 && t2.removeEventListener(e2, r2, i2);
};
pushScopeId("data-v-5a794390");
const vt = ["onMousedown"];
popScopeId();
var pt = defineComponent(l(o({}, { name: "DSlider" }), { props: { modelValue: { required: true, type: Number, default: 0 }, disabled: { type: Boolean, default: false }, vertical: { type: Boolean, default: false }, hover: { type: Boolean, default: true }, hoverText: { type: String, default: "" }, preload: { type: Number, default: 0 }, size: { type: String, default: "10px" } }, emits: ["update:modelValue", "change", "onMousemove"], setup: function(t2, { emit: e2 }) {
  const r2 = t2;
  useCssVars((e3) => ({ "5242b67b": t2.size }));
  const i2 = ref(null), n2 = ref(null), a2 = reactive({ dragging: false, hoverPosition: 0, hoverTipsLeft: "50%" }), s2 = computed(() => {
    let t3 = r2.modelValue < 0 ? 0 : r2.modelValue > 1 ? 1 : r2.modelValue;
    return r2.vertical ? `height:${100 * t3}%` : `width:${100 * t3}%`;
  }), o2 = computed(() => {
    let t3 = r2.preload < 0 ? 0 : r2.preload > 1 ? 1 : r2.preload;
    return r2.vertical ? `height:${100 * t3}%` : `width:${100 * t3}%`;
  }), l2 = computed(() => {
    let t3 = a2.hoverPosition < 0 ? 0 : a2.hoverPosition > 1 ? 1 : a2.hoverPosition;
    return r2.vertical ? `bottom:${100 * t3}%` : `left:${100 * t3}%`;
  }), v = (t3) => {
    t3.preventDefault();
  }, p = (t3) => {
    r2.disabled || (t3.preventDefault(), a2.dragging = true, S(t3), ft(window, "mousemove", A), ft(window, "touchmove", A), ft(window, "mouseup", R), ft(window, "touchend", R));
  }, y = (t3) => {
    if (!r2.hover)
      return;
    let s3 = L(t3);
    if (e2("onMousemove", t3, s3), a2.hoverPosition = s3, r2.vertical)
      return;
    let o3 = i2.value, l3 = n2.value.clientWidth / 2, u = t3.clientX - o3.getBoundingClientRect().left;
    u < l3 ? a2.hoverTipsLeft = l3 - u + "px" : o3.clientWidth - u < l3 ? a2.hoverTipsLeft = o3.clientWidth - u - l3 + "px" : a2.hoverTipsLeft = "50%";
  }, S = (t3) => {
    let r3 = L(t3);
    e2("update:modelValue", r3), e2("change", t3, r3);
  }, L = (t3) => {
    let e3 = i2.value, n3 = 0;
    if (r2.vertical) {
      let r3 = e3.clientHeight;
      n3 = (e3.getBoundingClientRect().bottom - t3.clientY) / r3;
    } else
      n3 = (t3.clientX - e3.getBoundingClientRect().left) / e3.clientWidth;
    return n3 < 0 ? 0 : n3 > 1 ? 1 : n3;
  }, A = (t3) => {
    S(t3);
  }, R = (t3) => {
    a2.dragging && (gt(window, "mousemove", A), gt(window, "touchmove", A), gt(window, "mouseup", R), gt(window, "touchend", R), gt(window, "contextmenu", R), setTimeout(() => {
      a2.dragging = false;
    }, 0));
  };
  return (t3, e3) => (openBlock(), createElementBlock("div", { ref: i2, class: normalizeClass(["d-slider", { "is-vertical": r2.vertical }]), onMousedown: withModifiers(p, ["stop"]), onContextmenu: v }, [createBaseVNode("div", { class: "d-slider__runway", onMousemove: y }, [withDirectives(createBaseVNode("div", { class: "d-slider__cursor", style: normalizeStyle(unref(l2)) }, [withDirectives(createBaseVNode("div", { class: "d-slider__tips", ref: n2, style: normalizeStyle({ left: unref(a2).hoverTipsLeft }) }, toDisplayString(r2.hoverText), 5), [[vShow, r2.hoverText]])], 4), [[vShow, r2.hover]]), createBaseVNode("div", { class: "d-slider__preload", style: normalizeStyle(unref(o2)) }, null, 4), createBaseVNode("div", { class: "d-slider__bar", style: normalizeStyle(unref(s2)) }, null, 4)], 32)], 42, vt));
} }));
pt.__scopeId = "data-v-5a794390";
pushScopeId("data-v-570fa0d1");
const mt = { key: 0, class: "d-player-dialog" }, yt = { class: "d-player-dialog-body" }, Et = { class: "d-player-dialog-title" }, Tt = { class: "d-player-hotkey-panel" }, St = { class: "d-player-filter-panel" }, bt = { class: "d-player-filter-panel-item" }, Lt = createBaseVNode("span", null, "\u9971\u548C\u5EA6", -1), At = { class: "d-player-filter-panel-item" }, Dt = createBaseVNode("span", null, "\u4EAE\u5EA6", -1), kt = { class: "d-player-filter-panel-item" }, Rt = createBaseVNode("span", null, "\u5BF9\u6BD4\u5EA6", -1), _t = { key: 0, class: "d-player-contextmenu" }, It = ["dplayerKeyCode"], Ct = createBaseVNode("input", { class: "d-player-copyText" }, null, -1);
popScopeId();
var wt = defineComponent({ setup(t2) {
  const e2 = reactive({ show: false, dialogType: "", dialogTitle: "", version: "1.3.1-beta.6", mouseX: 0, mouseY: 0 }), r2 = [{ label: "\u89C6\u9891\u8272\u5F69\u8C03\u6574", key: "filter" }, { label: "\u5FEB\u6377\u952E\u8BF4\u660E", key: "hotkey" }, { label: "\u590D\u5236\u89C6\u9891\u7F51\u5740", key: "copy" }, { label: "\u7248\u672C\uFF1A1.3.1-beta.6", key: "version" }], i2 = [{ key: "Space", label: "\u64AD\u653E/\u6682\u505C" }, { key: "\u2192", label: "\u5355\u6B21\u5FEB\u8FDB10s\uFF0C\u957F\u63095\u500D\u901F\u64AD\u653E" }, { key: "\u2190", label: "\u5FEB\u90005s" }, { key: "\u2191", label: "\u97F3\u91CF\u589E\u52A010%" }, { key: "\u2193", label: "\u97F3\u91CF\u589E\u52A0\u964D\u4F4E10%" }, { key: "Esc", label: "\u9000\u51FA\u5168\u5C4F/\u9000\u51FA\u7F51\u9875\u5168\u5C4F" }, { key: "F", label: "\u5168\u5C4F/\u9000\u51FA\u5168\u5C4F" }], n2 = reactive({ saturate: 0.392, brightness: 0.392, contrast: 0.392 }), a2 = computed(() => ({ left: e2.mouseX + "px", top: e2.mouseY + "px" }));
  watch(n2, (t3) => {
    let e3 = document.querySelector("#dPlayerVideo"), r3 = (2.55 * t3.saturate).toFixed(2), i3 = (2.55 * t3.brightness).toFixed(2), n3 = (2.55 * t3.contrast).toFixed(2);
    e3.style.filter = `saturate(${r3}) brightness(${i3}) contrast(${n3})`;
  });
  const s2 = () => {
    n2.saturate = 0.392, n2.brightness = 0.392, n2.contrast = 0.392;
  }, o2 = (t3) => {
    "Escape" == t3.key && h(0);
  }, l2 = (t3) => {
    t3.preventDefault(), ft(window, "keydown", o2), ft(window, "click", h);
    let r3 = document.querySelector("#refPlayerWrap"), i3 = r3.clientWidth;
    r3.clientHeight, e2.mouseX = t3.clientX - r3.getBoundingClientRect().left, i3 - e2.mouseX < 130 && (e2.mouseX = e2.mouseX + (i3 - e2.mouseX - 130)), e2.mouseY = t3.clientY - r3.getBoundingClientRect().top, e2.show = true;
  }, h = (t3) => {
    let i3 = "LI" == t3.path[0].tagName, n3 = t3.path[0].attributes.dplayerKeyCode && t3.path[0].attributes.dplayerKeyCode.value, a3 = r2.map((t4) => t4.key);
    if (i3 && a3.includes(n3))
      if (e2.dialogTitle = t3.path[0].innerText, e2.dialogType = n3, "copy" == n3) {
        let t4 = document.querySelector(".d-player-copyText");
        t4.value = window.location.href, t4.select(), document.execCommand("copy"), e2.dialogType = "";
      } else
        "version" == n3 && (e2.dialogType = "");
    e2.show = false, gt(window, "keydown", o2), gt(window, "click", h);
  };
  return onMounted(() => {
    let t3 = document.querySelector("#refPlayerWrap");
    gt(window, "keydown", o2), gt(window, "click", h), gt(t3, "contextmenu", l2), ft(t3, "contextmenu", l2);
  }), onUnmounted(() => {
    let t3 = document.querySelector("#refPlayerWrap");
    gt(window, "keydown", o2), gt(window, "click", h), gt(t3, "contextmenu", l2);
  }), (t3, o3) => (openBlock(), createElementBlock("div", null, [createVNode(Transition, { name: "d-fade-in" }, { default: withCtx(() => [unref(e2).dialogType ? (openBlock(), createElementBlock("div", mt, [createBaseVNode("div", yt, [createBaseVNode("h5", Et, [createTextVNode(toDisplayString(unref(e2).dialogTitle) + " ", 1), createBaseVNode("i", { onClick: o3[0] || (o3[0] = (t4) => unref(e2).dialogType = false), class: "icon icon-close" }, "X")]), withDirectives(createBaseVNode("ul", Tt, [(openBlock(), createElementBlock(Fragment, null, renderList(i2, (t4) => createBaseVNode("li", { class: "d-player-hotkey-panel-item", key: t4.key }, [createBaseVNode("span", null, toDisplayString(t4.key), 1), createBaseVNode("span", null, toDisplayString(t4.label), 1)])), 64))], 512), [[vShow, "hotkey" == unref(e2).dialogType]]), withDirectives(createBaseVNode("ul", St, [createBaseVNode("li", bt, [Lt, createVNode(pt, { class: "filter-panel-slider", size: "5px", modelValue: unref(n2).saturate, "onUpdate:modelValue": o3[1] || (o3[1] = (t4) => unref(n2).saturate = t4) }, null, 8, ["modelValue"]), createBaseVNode("span", null, toDisplayString(Math.round(255 * unref(n2).saturate)), 1)]), createBaseVNode("li", At, [Dt, createVNode(pt, { class: "filter-panel-slider", size: "5px", modelValue: unref(n2).brightness, "onUpdate:modelValue": o3[2] || (o3[2] = (t4) => unref(n2).brightness = t4) }, null, 8, ["modelValue"]), createBaseVNode("span", null, toDisplayString(Math.round(255 * unref(n2).brightness)), 1)]), createBaseVNode("li", kt, [Rt, createVNode(pt, { class: "filter-panel-slider", size: "5px", modelValue: unref(n2).contrast, "onUpdate:modelValue": o3[3] || (o3[3] = (t4) => unref(n2).contrast = t4) }, null, 8, ["modelValue"]), createBaseVNode("span", null, toDisplayString(Math.round(255 * unref(n2).contrast)), 1)]), createBaseVNode("span", { onClick: s2, title: "\u91CD\u7F6E", "aria-label": "\u91CD\u7F6E", class: "d-player-filter-reset" }, "\u91CD\u7F6E")], 512), [[vShow, "filter" == unref(e2).dialogType]])])])) : createCommentVNode("", true)]), _: 1 }), unref(e2).show ? (openBlock(), createElementBlock("div", _t, [createBaseVNode("ul", { class: "d-player-contextmenu-body", style: normalizeStyle(unref(a2)) }, [(openBlock(), createElementBlock(Fragment, null, renderList(r2, (t4) => createBaseVNode("li", { dplayerKeyCode: t4.key, key: t4.key }, toDisplayString(t4.label), 9, It)), 64))], 4), Ct])) : createCommentVNode("", true)]));
} });
wt.__scopeId = "data-v-570fa0d1";
const Ot = (t2) => {
  let e2 = ~~(t2 / 3600), r2 = ~~(t2 % 3600 / 60), i2 = ~~(t2 % 60);
  return e2 = e2 < 10 ? "0" + e2 : e2, r2 = r2 < 10 ? "0" + r2 : r2, i2 = i2 < 10 ? "0" + i2 : i2, `${e2}:${r2}:${i2}`;
}, xt = !!("ontouchstart" in window), Pt = ["loadstart", "play", "pause", "playing", "seeking", "seeked", "waiting", "durationchange", "progress", "canplay", "timeupdate", "ended", "error", "stalled"], Ft = { width: { type: String, default: "800px" }, height: { type: String, default: "450px" }, color: { type: String, default: "#409eff" }, src: { required: true, type: String, default: "" }, title: { type: String, default: "" }, type: { type: String, default: "video/mp4" }, poster: { type: String, default: "" }, webFullScreen: { type: Boolean, default: false }, speed: { type: Boolean, default: true }, currentTime: { type: Number, default: 0 }, playsinline: { type: Boolean, default: false }, muted: { type: Boolean, default: false }, speedRate: { type: Array, default: () => ["2.0", "1.5", "1.25", "1.0", "0.75", "0.5"] }, autoPlay: { type: Boolean, default: false }, loop: { type: Boolean, default: false }, mirror: { type: Boolean, default: false }, ligthOff: { type: Boolean, default: false }, volume: { type: [String, Number], default: 0.3 }, control: { type: Boolean, default: true }, controlBtns: { type: Array, default: ["audioTrack", "quality", "speedRate", "volume", "setting", "pip", "pageFullScreen", "fullScreen"] }, preload: { type: String, default: "auto" } };
pushScopeId("data-v-01791e9e");
const Mt = { class: "d-player-video", id: "dPlayerVideo" }, Nt = ["controls", "webkit-playsinline", "playsinline", "volume", "muted", "loop", "preload", "src", "poster"], Bt = { class: "d-player-lightoff" }, Ut = { key: 1, class: "d-player-state" }, Gt = { class: "d-play-btn" }, jt = ["onKeyup", "onKeydown"], Kt = { class: "d-control-progress" }, Vt = { class: "d-tool-bar" }, Ht = { key: 0, class: "d-tool-item d-tool-time audioTrack-btn" }, Wt = createBaseVNode("span", { style: { margin: "0 3px" } }, "/", -1), Yt = { class: "total-time" }, qt = { class: "d-tool-bar" }, Xt = { key: 0, class: "d-tool-item quality-btn" }, zt = { class: "d-tool-item-main" }, $t = { class: "speed-main", style: { "text-align": "center" } }, Qt = ["onClick"], Jt = { key: 1, class: "d-tool-item speedRate-btn" }, Zt = { class: "d-tool-item-main" }, te = { class: "speed-main" }, ee = ["onClick"], re = { key: 2, class: "d-tool-item volume-btn" }, ie = { class: "d-tool-item-main volume-box", style: { width: "52px" } }, ne = { class: "volume-text-size" }, ae = { key: 3, class: "d-tool-item setting-btn" }, se = { class: "d-tool-item-main" }, oe = { class: "speed-main" }, le = createTextVNode(" \u955C\u50CF\u753B\u9762 "), ue = createTextVNode(" \u5FAA\u73AF\u64AD\u653E "), de = createTextVNode(" \u5173\u706F\u6A21\u5F0F "), ce = createBaseVNode("div", { class: "d-tool-item-main" }, "\u753B\u4E2D\u753B", -1), he = createBaseVNode("div", { class: "d-tool-item-main" }, "\u7F51\u9875\u5168\u5C4F", -1), fe = createBaseVNode("div", { class: "d-tool-item-main" }, "\u5168\u5C4F", -1);
popScopeId();
var ge = defineComponent(l(o({}, { name: "vue3VideoPlay", inheritAttrs: false }), { props: Ft, emits: [...Pt, "mirrorChange", "loopChange", "lightOffChange"], setup: function(t2, { expose: e2, emit: r2 }) {
  const i2 = t2;
  useCssVars((t3) => ({ "51d4439c": unref(_), "77e758a6": t3.width, b8a1afc0: t3.height }));
  const n2 = new Y({ fragLoadingTimeOut: 2e3 }), a2 = ref(null), s2 = ref(null), u = ref(null), f = ref(null), v = reactive(l(o({ dVideo: null }, i2), { muted: i2.muted, playBtnState: i2.autoPlay ? "pause" : "play", loadStateType: "loadstart", fullScreen: false, handleType: "", currentTime: "00:00:00", preloadBar: 0, totalTime: "00:00:00", isVideoHovering: true, speedActive: "1.0", playProgress: 0, isMultiplesPlay: false, longPressTimeout: null, progressCursorTime: "00:00:00", qualityLevels: [], currentLevel: 0 })), p = (...t3) => (e3) => t3.reverse().reduce((t4, e4) => e4(t4), e3), y = Pt.reduce((t3, e3) => {
    var i3;
    return t3[`on${i3 = e3, i3.charAt(0).toUpperCase() + i3.slice(1)}`] = (t4) => {
      v.loadStateType = e3, r2(e3, t4);
    }, t3;
  }, {});
  y.onCanplay = p(y.onCanplay, () => {
    "play" != v.playBtnState && v.dVideo.play(), v.autoPlay && (v.dVideo.play(), v.playBtnState = "pause");
  }), y.onEnded = p(y.onEnded, () => {
    v.playBtnState = "replay";
  }), y.onDurationchange = (t3) => {
    r2("durationchange", t3), 0 != i2.currentTime && (v.dVideo.currentTime = i2.currentTime), y.onTimeupdate(t3);
  }, y.onProgress = (t3) => {
    console.log("\u7F13\u51B2\u4E2D..."), r2("progress", t3);
    let e3 = t3.target.duration, i3 = t3.target.buffered, n3 = t3.target.buffered.length && t3.target.buffered.end(i3 - 1);
    v.preloadBar = n3 / e3;
  }, y.onTimeupdate = (t3) => {
    r2("timeupdate", t3);
    let e3 = t3.duration || t3.target.duration || 0, i3 = t3.currentTime || t3.target.currentTime;
    v.playProgress = i3 / e3, v.currentTime = Ot(i3), v.totalTime = Ot(e3);
  }, y.onError = p(y.onError, () => {
    v.playBtnState = "replay";
  });
  let S = useAttrs();
  for (let o2 in S)
    y[o2] = S[o2];
  const _ = (w = v.color, `${parseInt("0x" + w.slice(1, 3))},${parseInt("0x" + w.slice(3, 5))},${parseInt("0x" + w.slice(5, 7))}`);
  var w;
  const K2 = V(500, () => {
    v.handleType = "";
  }), H2 = (t3) => {
    t3.preventDefault(), "ArrowUp" == t3.code ? v.volume = v.volume + 0.1 > 1 ? 1 : v.volume + 0.1 : v.volume = v.volume - 0.1 < 0 ? 0 : v.volume - 0.1, v.muted = false, v.handleType = "volume", K2();
  }, W2 = (t3) => {
    i2.speed && (v.dVideo.currentTime = v.dVideo.currentTime < 10 ? 0.1 : v.dVideo.currentTime - 10, y.onTimeupdate(v.dVideo), $2());
  }, q2 = (t3) => {
    t3.preventDefault();
    let e3 = t3.type;
    if ("ArrowRight" == t3.key) {
      if ($2(), "keyup" == e3) {
        if (clearTimeout(v.longPressTimeout), !i2.speed && !v.longPressTimeout)
          return;
        v.isMultiplesPlay ? (v.dVideo.playbackRate = v.speedActive, v.isMultiplesPlay = false) : (v.dVideo.currentTime = v.dVideo.currentTime + 10, y.onTimeupdate(v.dVideo));
      } else if ("keydown" == e3) {
        if (!i2.speed)
          return;
        v.isMultiplesPlay && clearTimeout(v.longPressTimeout), v.longPressTimeout = setTimeout(() => {
          v.isMultiplesPlay = true, v.dVideo.playbackRate = 5, v.handleType = "playbackRate", K2();
        }, 500);
      }
    }
  }, z2 = () => {
    xt || f.value.focus();
  }, $2 = () => {
    v.loadStateType = "play", v.dVideo.play().catch(() => {
      setTimeout(() => {
        v.playBtnState = "replay", v.loadStateType = "error";
      }, 500);
    }), v.playBtnState = "pause";
  }, Q2 = () => {
    v.dVideo.pause(), v.playBtnState = "play";
  }, Z2 = (t3) => {
    t3 && t3.preventDefault(), "play" == v.playBtnState || "replay" == v.playBtnState ? $2() : "pause" == v.playBtnState && Q2();
  }, tt2 = () => {
    v.muted = !v.muted, 0 == v.volume && (v.volume = 0.05);
  }, et2 = (t3, e3) => {
    let r3 = v.dVideo.duration || v.dVideo.target.duration;
    v.dVideo.currentTime = r3 * e3, "play" == v.playBtnState && (v.dVideo.play(), v.playBtnState = "pause");
  }, rt2 = (t3, e3) => {
    v.progressCursorTime = Ot(v.dVideo.duration * e3);
  }, nt2 = V(2500, () => {
    v.isVideoHovering = false;
  }), at2 = (t3) => {
    v.isVideoHovering = true, nt2();
  }, ot2 = (t3) => {
    r2("mirrorChange", t3, v.dVideo);
  }, lt2 = (t3) => {
    r2("loopChange", t3, v.dVideo);
  }, ut2 = (t3) => {
    r2("lightOffChange", t3, v.dVideo);
  }, dt2 = () => {
    var t3;
    t3 = v.dVideo, document.pictureInPictureElement ? document.exitPictureInPicture().catch((t4) => {
      console.log(t4, "Video failed to leave Picture-in-Picture mode.");
    }) : t3.requestPictureInPicture().catch((t4) => {
      console.log(t4, "Video failed to enter Picture-in-Picture mode.");
    });
  }, ct2 = () => {
    v.fullScreen = ((t3) => {
      let e3 = document, r3 = e3.webkitIsFullScreen || e3.fullscreen;
      r3 ? (document.exitFullscreen || e3.webkitExitFullScreen).call(e3) : (t3.requestFullscreen || t3.webkitRequestFullScreen).call(t3);
      return !r3;
    })(a2.value);
  };
  return watch(() => i2.src, () => {
    nextTick(() => {
      v.dVideo.canPlayType(i2.type) || v.dVideo.canPlayType("application/vnd.apple.mpegurl") ? v.muted = i2.autoPlay : Y.isSupported() && (n2.detachMedia(), n2.attachMedia(v.dVideo), n2.on(Y.Events.MEDIA_ATTACHED, () => {
        n2.loadSource(i2.src), n2.on("hlsManifestParsed", (t3, e3) => {
          console.log(e3), v.currentLevel = e3.level, v.qualityLevels = e3.levels || [];
        });
      }), n2.on("hlsLevelSwitching", (t3, e3) => {
        console.log(e3), console.log("LEVEL_SWITCHING");
      }), n2.on("hlsLevelSwitched", (t3, e3) => {
        v.currentLevel = e3.level, console.log("LEVEL_SWITCHED");
      }));
    });
  }, { immediate: true }), onMounted(() => {
    v.dVideo = s2, z2();
  }), e2({ play: $2, pause: Q2, togglePlay: Z2 }), (t3, e3) => (openBlock(), createElementBlock("div", { ref: a2, id: "refPlayerWrap", class: normalizeClass(["d-player-wrap", { "web-full-screen": unref(v).webFullScreen, "is-lightoff": unref(v).lightOff, "d-player-wrap-hover": "play" == unref(v).playBtnState || unref(v).isVideoHovering }]), onMousemove: at2 }, [createBaseVNode("div", Mt, [createBaseVNode("video", mergeProps({ ref: s2, class: ["d-player-video-main", { "video-mirror": unref(v).mirror }], id: "dPlayerVideoMain", controls: !(!unref(xt) || !unref(v).speed), "webkit-playsinline": i2.playsinline, playsinline: i2.playsinline }, unref(y), { volume: unref(v).volume, muted: unref(v).muted, loop: unref(v).loop, preload: t3.preload, width: "100%", height: "100%", src: i2.src, poster: i2.poster }), "\u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301Video\u6807\u7B7E\u3002", 16, Nt)]), createVNode(Transition, { name: "d-fade-in" }, { default: withCtx(() => [withDirectives(createBaseVNode("div", Bt, null, 512), [[vShow, unref(v).lightOff]])]), _: 1 }), unref(v).fullScreen ? (openBlock(), createBlock(J, { key: 0, title: i2.title }, null, 8, ["title"])) : createCommentVNode("", true), unref(xt) ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", Ut, [createVNode(Transition, { name: "d-scale-out" }, { default: withCtx(() => [withDirectives(createBaseVNode("div", Gt, [createVNode(X, { icon: "icon-play", size: 40 })], 512), [[vShow, "play" == unref(v).playBtnState]])]), _: 1 }), createVNode(it, { state: unref(v) }, null, 8, ["state"])])), unref(xt) ? createCommentVNode("", true) : (openBlock(), createElementBlock("input", { key: 2, type: "input", readonly: "readonly", ref: f, onDblclick: ct2, onKeyup: [withKeys(ct2, ["f"]), e3[0] || (e3[0] = withKeys((t4) => unref(v).webFullScreen = false, ["esc"])), q2], onClick: Z2, onKeydown: [withKeys(Z2, ["space"]), withKeys(W2, ["arrow-left"]), withKeys(H2, ["arrow-up", "arrow-down"]), q2], class: "d-player-input", maxlength: "0" }, null, 40, jt)), createVNode(ht, { loadType: unref(v).loadStateType }, null, 8, ["loadType"]), createVNode(wt), !unref(xt) && unref(v).control ? (openBlock(), createElementBlock("div", { key: 3, class: "d-player-control", ref: u }, [createBaseVNode("div", Kt, [createVNode(pt, { class: "d-progress-bar", onOnMousemove: rt2, onChange: et2, disabled: !unref(v).speed, hoverText: unref(v).progressCursorTime, modelValue: unref(v).playProgress, "onUpdate:modelValue": e3[1] || (e3[1] = (t4) => unref(v).playProgress = t4), preload: unref(v).preloadBar }, null, 8, ["disabled", "hoverText", "modelValue", "preload"])]), createBaseVNode("div", { class: "d-control-tool", onClick: z2 }, [createBaseVNode("div", Vt, [createBaseVNode("div", { class: "d-tool-item", onClick: Z2 }, [createVNode(X, { size: "24", icon: `icon-${unref(v).playBtnState}` }, null, 8, ["icon"])]), i2.controlBtns.includes("audioTrack") ? (openBlock(), createElementBlock("div", Ht, [createBaseVNode("span", null, toDisplayString(unref(v).currentTime), 1), Wt, createBaseVNode("span", Yt, toDisplayString(unref(v).totalTime), 1)])) : createCommentVNode("", true)]), createBaseVNode("div", qt, [unref(v).qualityLevels.length && i2.controlBtns.includes("quality") ? (openBlock(), createElementBlock("div", Xt, [createTextVNode(toDisplayString(unref(v).qualityLevels.length && (unref(v).qualityLevels[unref(v).currentLevel] || {}).height) + "P ", 1), createBaseVNode("div", zt, [createBaseVNode("ul", $t, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(v).qualityLevels, (t4, e4) => (openBlock(), createElementBlock("li", { class: normalizeClass({ "speed-active": unref(v).currentLevel == e4 }), onClick: (t5) => ((t6, e5) => {
    n2.currentLevel = e5, v.currentLevel = e5;
  })(0, e4), key: t4 }, toDisplayString(t4.height) + "P", 11, Qt))), 128))])])])) : createCommentVNode("", true), i2.controlBtns.includes("speedRate") ? (openBlock(), createElementBlock("div", Jt, [createTextVNode(toDisplayString("1.0" == unref(v).speedActive ? "\u500D\u901F" : unref(v).speedActive + "x") + " ", 1), createBaseVNode("div", Zt, [createBaseVNode("ul", te, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(v).speedRate, (t4) => (openBlock(), createElementBlock("li", { class: normalizeClass({ "speed-active": unref(v).speedActive == t4 }), onClick: (e4) => ((t5) => {
    v.speedActive = t5, v.dVideo.playbackRate = t5;
  })(t4), key: t4 }, toDisplayString(t4) + "x", 11, ee))), 128))])])])) : createCommentVNode("", true), i2.controlBtns.includes("volume") ? (openBlock(), createElementBlock("div", re, [createBaseVNode("div", ie, [createBaseVNode("div", { class: normalizeClass(["volume-main", { "is-muted": unref(v).muted }]) }, [createBaseVNode("span", ne, toDisplayString(unref(v).muted ? 0 : ~~(100 * unref(v).volume)) + "%", 1), createVNode(pt, { onChange: e3[2] || (e3[2] = (t4) => unref(v).muted = false), hover: false, size: "5px", vertical: true, modelValue: unref(v).volume, "onUpdate:modelValue": e3[3] || (e3[3] = (t4) => unref(v).volume = t4) }, null, 8, ["modelValue"])], 2)]), createBaseVNode("span", { onClick: tt2, style: { display: "flex" } }, [createVNode(X, { size: "20", icon: "icon-volume-" + (0 == unref(v).volume || unref(v).muted ? "mute" : unref(v).volume > 0.5 ? "up" : "down") }, null, 8, ["icon"])])])) : createCommentVNode("", true), i2.controlBtns.includes("setting") ? (openBlock(), createElementBlock("div", ae, [createVNode(X, { size: "20", class: "rotateHover", icon: "icon-settings" }), createBaseVNode("div", se, [createBaseVNode("ul", oe, [createBaseVNode("li", null, [le, createVNode(st, { onChange: ot2, modelValue: unref(v).mirror, "onUpdate:modelValue": e3[4] || (e3[4] = (t4) => unref(v).mirror = t4) }, null, 8, ["modelValue"])]), createBaseVNode("li", null, [ue, createVNode(st, { onChange: lt2, modelValue: unref(v).loop, "onUpdate:modelValue": e3[5] || (e3[5] = (t4) => unref(v).loop = t4) }, null, 8, ["modelValue"])]), createBaseVNode("li", null, [de, createVNode(st, { onChange: ut2, modelValue: unref(v).lightOff, "onUpdate:modelValue": e3[6] || (e3[6] = (t4) => unref(v).lightOff = t4) }, null, 8, ["modelValue"])])])])])) : createCommentVNode("", true), i2.controlBtns.includes("pip") ? (openBlock(), createElementBlock("div", { key: 4, class: "d-tool-item pip-btn", onClick: dt2 }, [createVNode(X, { size: "20", icon: "icon-pip" }), ce])) : createCommentVNode("", true), i2.controlBtns.includes("pageFullScreen") ? (openBlock(), createElementBlock("div", { key: 5, class: "d-tool-item pip-btn", onClick: e3[7] || (e3[7] = (t4) => unref(v).webFullScreen = !unref(v).webFullScreen) }, [createVNode(X, { size: "20", icon: "icon-web-screen" }), he])) : createCommentVNode("", true), i2.controlBtns.includes("fullScreen") ? (openBlock(), createElementBlock("div", { key: 6, class: "d-tool-item fullScreen-btn", onClick: ct2 }, [fe, createVNode(X, { size: "20", icon: "icon-screen" })])) : createCommentVNode("", true)])])], 512)) : createCommentVNode("", true)], 34));
} }));
function ve(t2) {
  t2.component(ge.name, ge);
}
ge.__scopeId = "data-v-01791e9e", ge.install = ve;
const Detail_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = {
  name: "mvDetail",
  components: {
    videoPlay: ge
  },
  setup(props) {
    const { proxy } = getCurrentInstance();
    const route = useRoute();
    const store = useStore();
    const info = reactive({
      mId: "0",
      mvDetail: {},
      type: 1,
      videoOptions: {
        src: "",
        poster: ""
      },
      simiMv: []
    });
    const getMvDetail = async () => {
      const { data: res } = await proxy.$http.mvDetail({ id: info.mId });
      if (res.code !== 200) {
        return proxy.$msg.error("\u6570\u636E\u8BF7\u6C42\u5931\u8D25");
      }
      info.mvDetail = res.data;
      info.videoOptions.poster = res.data.cover;
    };
    const getMvUrl = async (r2) => {
      const { data: res } = await proxy.$http.mvUrl({ id: info.mId, r: r2 });
      if (res.code !== 200) {
        return proxy.$msg.error("\u6570\u636E\u8BF7\u6C42\u5931\u8D25");
      }
      info.videoOptions.src = res.data.url;
    };
    const getSimiMv = async () => {
      const { data: res } = await proxy.$http.simiMv({ id: info.mId });
      if (res.code !== 200) {
        return proxy.$msg.error("\u6570\u636E\u8BF7\u6C42\u5931\u8D25");
      }
      info.simiMv = res.mvs;
    };
    const init = () => {
      getMvDetail();
      getMvUrl();
      getSimiMv();
    };
    onBeforeRouteUpdate((to) => {
      info["mId"] = to.query.id;
      init();
    });
    onMounted(() => {
      info["mId"] = route.query.id;
      init();
      store.setPlayStatus(false);
    });
    return {
      ...toRefs(info)
    };
  }
};
const _withScopeId = (n2) => (pushScopeId("data-v-3e7b039a"), n2 = n2(), popScopeId(), n2);
const _hoisted_1 = {
  key: 0,
  class: "mv-detail"
};
const _hoisted_2 = { class: "mv-main" };
const _hoisted_3 = { class: "mv-info-hd" };
const _hoisted_4 = { class: "info-name" };
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "iconfont icon-mv" }, null, -1));
const _hoisted_6 = { class: "video-main" };
const _hoisted_7 = { class: "aside-box" };
const _hoisted_8 = { class: "mv-info" };
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", { class: "aside-title" }, "MV\u7B80\u4ECB", -1));
const _hoisted_10 = { class: "mv-info-count" };
const _hoisted_11 = { class: "info-time" };
const _hoisted_12 = { class: "info-count" };
const _hoisted_13 = { class: "mv-desc" };
const _hoisted_14 = { class: "simi-mv" };
const _hoisted_15 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", { class: "aside-title" }, "\u76F8\u4F3CMV", -1));
const _hoisted_16 = { class: "aside-main mv-main" };
const _hoisted_17 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "iconfont icon-play" }, null, -1));
const _hoisted_18 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", {
  slot: "placeholder",
  class: "image-slot"
}, [
  /* @__PURE__ */ createBaseVNode("i", { class: "iconfont icon-placeholder" })
], -1));
const _hoisted_19 = { class: "info" };
const _hoisted_20 = { class: "mv-playCount" };
const _hoisted_21 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "iconfont icon-mvlist" }, null, -1));
const _hoisted_22 = {
  key: 1,
  class: "mv-time"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_videoPlay = resolveComponent("videoPlay");
  const _component_el_image = ElImage;
  return _ctx.videoOptions.src ? (openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("div", _hoisted_4, [
          _hoisted_5,
          createTextVNode(toDisplayString(_ctx.mvDetail.name), 1)
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.mvDetail.artists, (author, k) => {
          return openBlock(), createBlock(_component_router_link, {
            to: {},
            class: "song-author",
            key: author.name
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(k !== 0 ? " / " + author.name : author.name), 1)
            ]),
            _: 2
          }, 1024);
        }), 128))
      ]),
      createBaseVNode("div", _hoisted_6, [
        createVNode(_component_videoPlay, {
          width: "100%",
          height: "100%",
          poster: _ctx.videoOptions.poster,
          src: _ctx.videoOptions.src
        }, null, 8, ["poster", "src"])
      ])
    ]),
    createBaseVNode("div", _hoisted_7, [
      createBaseVNode("div", _hoisted_8, [
        _hoisted_9,
        createBaseVNode("div", _hoisted_10, [
          createBaseVNode("div", _hoisted_11, "\u53D1\u5E03\u65F6\u95F4\uFF1A" + toDisplayString(_ctx.mvDetail.publishTime), 1),
          createBaseVNode("div", _hoisted_12, " \u64AD\u653E\u91CF\uFF1A" + toDisplayString(_ctx.$utils.formartNum(_ctx.mvDetail.playCount)), 1)
        ]),
        createBaseVNode("div", _hoisted_13, toDisplayString(_ctx.mvDetail.desc ? _ctx.mvDetail.desc : "\u6682\u65E0\u7B80\u4ECB"), 1)
      ]),
      createBaseVNode("div", _hoisted_14, [
        _hoisted_15,
        createBaseVNode("div", _hoisted_16, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.simiMv, (item, index) => {
            return openBlock(), createElementBlock("div", {
              class: "item",
              key: "" + item.id + index
            }, [
              createVNode(_component_router_link, {
                to: { path: "/mvlist/mv", query: { id: item.id } },
                class: "faceImg"
              }, {
                default: withCtx(() => [
                  _hoisted_17,
                  createVNode(_component_el_image, {
                    src: item.cover || item.imgurl
                  }, {
                    default: withCtx(() => [
                      _hoisted_18
                    ]),
                    _: 2
                  }, 1032, ["src"])
                ]),
                _: 2
              }, 1032, ["to"]),
              createBaseVNode("div", _hoisted_19, [
                createVNode(_component_router_link, {
                  to: { path: "/mvlist/mv", query: { id: item.id } },
                  class: "mv-name"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.name), 1)
                  ]),
                  _: 2
                }, 1032, ["to"]),
                !item.publishTime ? (openBlock(), createBlock(_component_router_link, {
                  key: 0,
                  to: {},
                  class: "mv-author"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.artistName), 1)
                  ]),
                  _: 2
                }, 1024)) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_20, [
                  _hoisted_21,
                  createTextVNode(" " + toDisplayString(_ctx.$utils.formartNum(item.playCount)), 1)
                ]),
                item.publishTime ? (openBlock(), createElementBlock("div", _hoisted_22, " \u53D1\u5E03\u65F6\u95F4\uFF1A" + toDisplayString(item.publishTime), 1)) : createCommentVNode("", true)
              ])
            ]);
          }), 128))
        ])
      ])
    ])
  ])) : createCommentVNode("", true);
}
const Detail = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3e7b039a"]]);
export {
  Detail as default
};
