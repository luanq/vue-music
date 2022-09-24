import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createBlock, w as withCtx, a as createBaseVNode, b as createVNode, d as createElementBlock, e as renderList, B as createTextVNode, t as toDisplayString, f as createCommentVNode, F as Fragment, E as ElImage, p as pushScopeId, g as popScopeId } from "./index.4ce00245.js";
import { E as ElSkeletonItem, a as ElSkeleton } from "./el-skeleton-item.e4becbef.js";
const MvList_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-5e2101ee"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "item" };
const _hoisted_2 = { class: "ske-info" };
const _hoisted_3 = { class: "mv" };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "iconfont icon-video-play" }, null, -1));
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", {
  slot: "placeholder",
  class: "image-slot"
}, [
  /* @__PURE__ */ createBaseVNode("i", { class: "iconfont icon-placeholder" })
], -1));
const _hoisted_6 = { class: "info" };
const _hoisted_7 = { class: "mv-playCount" };
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "iconfont icon-mvlist" }, null, -1));
const _hoisted_9 = {
  key: 1,
  class: "mv-time"
};
const _sfc_main = {
  __name: "MvList",
  props: {
    mvList: Array,
    num: Number,
    loading: Boolean
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_skeleton_item = ElSkeletonItem;
      const _component_el_image = ElImage;
      const _component_router_link = resolveComponent("router-link");
      const _component_el_skeleton = ElSkeleton;
      return openBlock(), createBlock(_component_el_skeleton, {
        loading: __props.loading,
        animated: "",
        count: __props.num,
        throttle: 500
      }, {
        template: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(_component_el_skeleton_item, {
              class: "ske-img",
              variant: "h3"
            }),
            createBaseVNode("div", _hoisted_2, [
              createVNode(_component_el_skeleton_item, {
                variant: "h3",
                class: "ske-name"
              }),
              createVNode(_component_el_skeleton_item, {
                variant: "text",
                class: "ske-txt",
                style: { "width": "50%" }
              }),
              createVNode(_component_el_skeleton_item, {
                variant: "text",
                class: "ske-txt"
              })
            ])
          ])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_3, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.mvList, (item, index) => {
              return openBlock(), createElementBlock("div", {
                class: "item",
                key: "" + item.id + index
              }, [
                createVNode(_component_router_link, {
                  to: { path: "/mvlist/mv", query: { id: item.id } },
                  class: "faceImg"
                }, {
                  default: withCtx(() => [
                    _hoisted_4,
                    createVNode(_component_el_image, {
                      src: item.cover || item.imgurl
                    }, {
                      default: withCtx(() => [
                        _hoisted_5
                      ]),
                      _: 2
                    }, 1032, ["src"])
                  ]),
                  _: 2
                }, 1032, ["to"]),
                createBaseVNode("div", _hoisted_6, [
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
                  createBaseVNode("div", _hoisted_7, [
                    _hoisted_8,
                    createTextVNode(" " + toDisplayString(_ctx.$utils.formartNum(item.playCount)), 1)
                  ]),
                  item.publishTime ? (openBlock(), createElementBlock("div", _hoisted_9, " \u53D1\u5E03\u65F6\u95F4\uFF1A" + toDisplayString(item.publishTime), 1)) : createCommentVNode("", true)
                ])
              ]);
            }), 128))
          ])
        ]),
        _: 1
      }, 8, ["loading", "count"]);
    };
  }
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5e2101ee"]]);
export {
  __unplugin_components_0 as _
};
