import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createBlock, w as withCtx, a as createBaseVNode, b as createVNode, d as createElementBlock, e as renderList, t as toDisplayString, B as createTextVNode, F as Fragment, E as ElImage, p as pushScopeId, g as popScopeId } from "./index.b48d8b09.js";
import { E as ElSkeletonItem, a as ElSkeleton } from "./el-skeleton-item.6c4ecba9.js";
const PlayList_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-53e0974a"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "item" };
const _hoisted_2 = { class: "ske-info" };
const _hoisted_3 = { class: "ske-tags" };
const _hoisted_4 = { class: "playlist" };
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "image-slot" }, [
  /* @__PURE__ */ createBaseVNode("i", { class: "iconfont icon-placeholder" })
], -1));
const _hoisted_6 = { class: "playCount" };
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "iconfont icon-playnum" }, null, -1));
const _hoisted_8 = { class: "info" };
const _hoisted_9 = { class: "tags" };
const _sfc_main = {
  __name: "PlayList",
  props: {
    playList: Array,
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
              variant: "image"
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_2, [
                  createVNode(_component_el_skeleton_item, {
                    variant: "h3",
                    class: "item"
                  }),
                  createVNode(_component_el_skeleton_item, {
                    variant: "h3",
                    class: "item",
                    style: { "width": "50%" }
                  }),
                  createBaseVNode("div", _hoisted_3, [
                    createVNode(_component_el_skeleton_item, { variant: "text" }),
                    createVNode(_component_el_skeleton_item, { variant: "text" }),
                    createVNode(_component_el_skeleton_item, { variant: "text" })
                  ])
                ])
              ]),
              _: 1
            })
          ])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_4, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.playList, (item) => {
              return openBlock(), createElementBlock("div", {
                class: "item",
                key: item.id
              }, [
                createVNode(_component_router_link, {
                  to: { path: "playlist/detail", query: { id: item.id } },
                  class: "faceImg"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_image, {
                      src: item.coverImgUrl,
                      lazy: ""
                    }, {
                      placeholder: withCtx(() => [
                        _hoisted_5
                      ]),
                      _: 2
                    }, 1032, ["src"]),
                    createBaseVNode("span", _hoisted_6, [
                      _hoisted_7,
                      createBaseVNode("em", null, toDisplayString(_ctx.$utils.formartNum(item.playCount)), 1),
                      createTextVNode(" / " + toDisplayString(item.trackCount + "\u9996"), 1)
                    ])
                  ]),
                  _: 2
                }, 1032, ["to"]),
                createBaseVNode("div", _hoisted_8, [
                  createVNode(_component_router_link, {
                    to: { path: "/playlist/detail", query: { id: item.id } },
                    class: "info_name"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.name), 1)
                    ]),
                    _: 2
                  }, 1032, ["to"]),
                  createBaseVNode("div", _hoisted_9, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(item.tags, (tag, index) => {
                      return openBlock(), createBlock(_component_router_link, {
                        to: { path: "/playlist", query: { cat: tag } },
                        class: "tag",
                        key: index
                      }, {
                        default: withCtx(() => [
                          createTextVNode("#" + toDisplayString(tag), 1)
                        ]),
                        _: 2
                      }, 1032, ["to"]);
                    }), 128))
                  ])
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
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-53e0974a"]]);
export {
  __unplugin_components_1 as _
};
