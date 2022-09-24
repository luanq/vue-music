import { i as ref, l as onMounted, k as watch, D as defineComponent, G as _export_sfc, o as openBlock, d as createElementBlock, a as createBaseVNode, H as buildProps, I as useNamespace, r as resolveComponent, c as createBlock, f as createCommentVNode, C as normalizeClass, u as computed, F as Fragment, e as renderList, J as renderSlot, b as createVNode, K as mergeProps, L as normalizeProps, M as withInstall, N as withNoopInstall } from "./index.4ce00245.js";
const useThrottleRender = (loading, throttle = 0) => {
  if (throttle === 0)
    return loading;
  const throttled = ref(false);
  let timeoutHandle = 0;
  const dispatchThrottling = () => {
    if (timeoutHandle) {
      clearTimeout(timeoutHandle);
    }
    timeoutHandle = window.setTimeout(() => {
      throttled.value = loading.value;
    }, throttle);
  };
  onMounted(dispatchThrottling);
  watch(() => loading.value, (val) => {
    if (val) {
      dispatchThrottling();
    } else {
      throttled.value = val;
    }
  });
  return throttled;
};
const _sfc_main$2 = defineComponent({
  name: "ImgPlaceholder"
});
const _hoisted_1 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("path", { d: "M64 896V128h896v768H64z m64-128l192-192 116.352 116.352L640 448l256 307.2V192H128v576z m224-480a96 96 0 1 1-0.064 192.064A96 96 0 0 1 352 288z" }, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
}
var ImgPlaceholder = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const skeletonItemProps = buildProps({
  variant: {
    type: String,
    values: [
      "circle",
      "rect",
      "h1",
      "h3",
      "text",
      "caption",
      "p",
      "image",
      "button"
    ],
    default: "text"
  }
});
const _sfc_main$1 = defineComponent({
  name: "ElSkeletonItem",
  components: {
    ImgPlaceholder
  },
  props: skeletonItemProps,
  setup() {
    const ns = useNamespace("skeleton");
    return {
      ns
    };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_img_placeholder = resolveComponent("img-placeholder");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.ns.e("item"), _ctx.ns.e(_ctx.variant)])
  }, [
    _ctx.variant === "image" ? (openBlock(), createBlock(_component_img_placeholder, { key: 0 })) : createCommentVNode("v-if", true)
  ], 2);
}
var SkeletonItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const skeletonProps = buildProps({
  animated: {
    type: Boolean,
    default: false
  },
  count: {
    type: Number,
    default: 1
  },
  rows: {
    type: Number,
    default: 3
  },
  loading: {
    type: Boolean,
    default: true
  },
  throttle: {
    type: Number
  }
});
const _sfc_main = defineComponent({
  name: "ElSkeleton",
  components: {
    [SkeletonItem.name]: SkeletonItem
  },
  props: skeletonProps,
  setup(props) {
    const ns = useNamespace("skeleton");
    const innerLoading = computed(() => {
      return props.loading;
    });
    const uiLoading = useThrottleRender(innerLoading, props.throttle);
    return {
      ns,
      uiLoading
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_skeleton_item = resolveComponent("el-skeleton-item");
  return _ctx.uiLoading ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    class: [_ctx.ns.b(), _ctx.ns.is("animated", _ctx.animated)]
  }, _ctx.$attrs), [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.count, (i) => {
      return openBlock(), createElementBlock(Fragment, { key: i }, [
        _ctx.loading ? renderSlot(_ctx.$slots, "template", { key: i }, () => [
          createVNode(_component_el_skeleton_item, {
            class: normalizeClass(_ctx.ns.is("first")),
            variant: "p"
          }, null, 8, ["class"]),
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.rows, (item) => {
            return openBlock(), createBlock(_component_el_skeleton_item, {
              key: item,
              class: normalizeClass([
                _ctx.ns.e("paragraph"),
                _ctx.ns.is("last", item === _ctx.rows && _ctx.rows > 1)
              ]),
              variant: "p"
            }, null, 8, ["class"]);
          }), 128))
        ]) : createCommentVNode("v-if", true)
      ], 64);
    }), 128))
  ], 16)) : renderSlot(_ctx.$slots, "default", normalizeProps(mergeProps({ key: 1 }, _ctx.$attrs)));
}
var Skeleton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const ElSkeleton = withInstall(Skeleton, {
  SkeletonItem
});
const ElSkeletonItem = withNoopInstall(SkeletonItem);
const elSkeleton = "";
const elSkeletonItem = "";
export {
  ElSkeletonItem as E,
  ElSkeleton as a
};
