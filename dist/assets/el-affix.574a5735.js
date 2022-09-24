import { H as buildProps, a2 as definePropType, D as defineComponent, I as useNamespace, a3 as shallowRef, z as reactive, u as computed, k as watch, l as onMounted, X as getScrollContainer, a4 as useEventListener, a5 as useResizeObserver, G as _export_sfc, o as openBlock, d as createElementBlock, a as createBaseVNode, J as renderSlot, C as normalizeClass, a6 as normalizeStyle, M as withInstall } from "./index.b48d8b09.js";
const affixProps = buildProps({
  zIndex: {
    type: definePropType([Number, String]),
    default: 100
  },
  target: {
    type: String,
    default: ""
  },
  offset: {
    type: Number,
    default: 0
  },
  position: {
    type: String,
    values: ["top", "bottom"],
    default: "top"
  }
});
const affixEmits = {
  scroll: ({ scrollTop, fixed }) => typeof scrollTop === "number" && typeof fixed === "boolean",
  change: (fixed) => typeof fixed === "boolean"
};
const _sfc_main = defineComponent({
  name: "ElAffix",
  props: affixProps,
  emits: affixEmits,
  setup(props, { emit }) {
    const ns = useNamespace("affix");
    const target = shallowRef();
    const root = shallowRef();
    const scrollContainer = shallowRef();
    const state = reactive({
      fixed: false,
      height: 0,
      width: 0,
      scrollTop: 0,
      clientHeight: 0,
      transform: 0
    });
    const rootStyle = computed(() => {
      return {
        height: state.fixed ? `${state.height}px` : "",
        width: state.fixed ? `${state.width}px` : ""
      };
    });
    const affixStyle = computed(() => {
      if (!state.fixed)
        return;
      const offset = props.offset ? `${props.offset}px` : 0;
      const transform = state.transform ? `translateY(${state.transform}px)` : "";
      return {
        height: `${state.height}px`,
        width: `${state.width}px`,
        top: props.position === "top" ? offset : "",
        bottom: props.position === "bottom" ? offset : "",
        transform,
        zIndex: props.zIndex
      };
    });
    const update = () => {
      if (!root.value || !target.value || !scrollContainer.value)
        return;
      const rootRect = root.value.getBoundingClientRect();
      const targetRect = target.value.getBoundingClientRect();
      state.height = rootRect.height;
      state.width = rootRect.width;
      state.scrollTop = scrollContainer.value instanceof Window ? document.documentElement.scrollTop : scrollContainer.value.scrollTop || 0;
      state.clientHeight = document.documentElement.clientHeight;
      if (props.position === "top") {
        if (props.target) {
          const difference = targetRect.bottom - props.offset - state.height;
          state.fixed = props.offset > rootRect.top && targetRect.bottom > 0;
          state.transform = difference < 0 ? difference : 0;
        } else {
          state.fixed = props.offset > rootRect.top;
        }
      } else {
        if (props.target) {
          const difference = state.clientHeight - targetRect.top - props.offset - state.height;
          state.fixed = state.clientHeight - props.offset < rootRect.bottom && state.clientHeight > targetRect.top;
          state.transform = difference < 0 ? -difference : 0;
        } else {
          state.fixed = state.clientHeight - props.offset < rootRect.bottom;
        }
      }
    };
    const onScroll = () => {
      update();
      emit("scroll", {
        scrollTop: state.scrollTop,
        fixed: state.fixed
      });
    };
    watch(() => state.fixed, () => {
      emit("change", state.fixed);
    });
    onMounted(() => {
      var _a;
      if (props.target) {
        target.value = (_a = document.querySelector(props.target)) != null ? _a : void 0;
        if (!target.value) {
          throw new Error(`Target is not existed: ${props.target}`);
        }
      } else {
        target.value = document.documentElement;
      }
      scrollContainer.value = getScrollContainer(root.value, true);
    });
    useEventListener(scrollContainer, "scroll", onScroll);
    useResizeObserver(root, () => update());
    useResizeObserver(target, () => update());
    return {
      ns,
      root,
      state,
      rootStyle,
      affixStyle,
      update
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    ref: "root",
    class: normalizeClass(_ctx.ns.b()),
    style: normalizeStyle(_ctx.rootStyle)
  }, [
    createBaseVNode("div", {
      class: normalizeClass({ [_ctx.ns.m("fixed")]: _ctx.state.fixed }),
      style: normalizeStyle(_ctx.affixStyle)
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 6)
  ], 6);
}
var Affix = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const ElAffix = withInstall(Affix);
const elAffix = "";
export {
  ElAffix as E
};
