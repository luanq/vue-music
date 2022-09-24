import { _ as _export_sfc, r as resolveComponent, o as openBlock, d as createElementBlock, b as createVNode, w as withCtx, a as createBaseVNode, B as createTextVNode, t as toDisplayString, C as normalizeClass, E as ElImage, p as pushScopeId, g as popScopeId, x as getCurrentInstance, z as reactive, l as onMounted, P as watchEffect, a1 as resolveDirective, R as withDirectives, F as Fragment, e as renderList, c as createBlock, f as createCommentVNode } from "./index.4ce00245.js";
import { E as ElAffix } from "./el-affix.8e0f4954.js";
import { _ as __unplugin_components_1 } from "./Loading.1fedd349.js";
const ArtistItem_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-6d273006"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "item" };
const _hoisted_2$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("em", { class: "circle" }, null, -1));
const _hoisted_3$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", {
  slot: "placeholder",
  class: "image-slot"
}, [
  /* @__PURE__ */ createBaseVNode("i", { class: "iconfont icon-placeholder" })
], -1));
const _hoisted_4$1 = { class: "info" };
const _hoisted_5$1 = { class: "info-header" };
const _hoisted_6$1 = { class: "info-num" };
const _hoisted_7$1 = { class: "albumSize" };
const _hoisted_8$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("em", null, "\u4E13\u8F91", -1));
const _hoisted_9$1 = { class: "musicSize" };
const _hoisted_10$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("em", null, "\u5355\u66F2", -1));
const _hoisted_11$1 = { class: "fansSize" };
const _hoisted_12$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("em", null, "\u7C89\u4E1D", -1));
const _sfc_main$1 = {
  __name: "ArtistItem",
  props: {
    props: {
      item: {
        type: Object,
        required: true
      }
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_image = ElImage;
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        _hoisted_2$1,
        createVNode(_component_router_link, {
          to: {},
          class: "faceImg"
        }, {
          default: withCtx(() => [
            createVNode(_component_el_image, {
              src: _ctx.item.picUrl + "?param=120y120"
            }, {
              default: withCtx(() => [
                _hoisted_3$1
              ]),
              _: 1
            }, 8, ["src"])
          ]),
          _: 1
        }),
        createBaseVNode("div", _hoisted_4$1, [
          createBaseVNode("div", _hoisted_5$1, [
            createVNode(_component_router_link, {
              to: {},
              class: "name"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.item.name), 1)
              ]),
              _: 1
            }),
            createBaseVNode("i", {
              class: normalizeClass(["iconfont icon-collect", { active: _ctx.item.followed }])
            }, null, 2)
          ]),
          createBaseVNode("div", _hoisted_6$1, [
            createBaseVNode("span", _hoisted_7$1, [
              _hoisted_8$1,
              createTextVNode(toDisplayString(_ctx.item.albumSize), 1)
            ]),
            createBaseVNode("span", _hoisted_9$1, [
              _hoisted_10$1,
              createTextVNode(toDisplayString(_ctx.item.musicSize), 1)
            ]),
            createBaseVNode("span", _hoisted_11$1, [
              _hoisted_12$1,
              createTextVNode(toDisplayString(_ctx.$utils.formartNum(_ctx.item.fansCount)), 1)
            ])
          ])
        ])
      ]);
    };
  }
};
const ArtistItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6d273006"]]);
const index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1 = { class: "artist" };
const _hoisted_2 = { class: "artist-container" };
const _hoisted_3 = { class: "artist-main" };
const _hoisted_4 = {
  class: "list-container",
  "infinite-scroll-disabled": "busy",
  "infinite-scroll-distance": "100"
};
const _hoisted_5 = { class: "aside-box" };
const _hoisted_6 = { class: "aside-menu" };
const _hoisted_7 = { class: "filter" };
const _hoisted_8 = { class: "filter-item" };
const _hoisted_9 = ["onClick"];
const _hoisted_10 = { class: "filter-item" };
const _hoisted_11 = ["onClick"];
const _hoisted_12 = { class: "filter-item" };
const _hoisted_13 = ["onClick"];
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const { proxy } = getCurrentInstance();
    const info = reactive({
      type: [
        { label: "\u5168\u90E8", val: -1 },
        { label: "\u7537\u6B4C\u624B", val: 1 },
        { label: "\u5973\u6B4C\u624B", val: 2 },
        { label: "\u4E50\u961F", val: 3 }
      ],
      area: [
        { label: "\u5168\u90E8", val: -1 },
        { label: "\u534E\u8BED", val: 7 },
        { label: "\u6B27\u7F8E", val: 96 },
        { label: "\u65E5\u672C", val: 8 },
        { label: "\u97E9\u56FD", val: 16 },
        { label: "\u5176\u4ED6", val: 0 }
      ],
      initial: [
        { label: "\u70ED\u95E8", val: -1 },
        { label: "#", val: 0 }
      ],
      typeIndex: 0,
      areaIndex: 0,
      initialIndex: 0,
      params: {
        area: "",
        type: "",
        initial: "",
        limit: 30,
        offset: 0
      },
      list: [],
      isLoading: true,
      busy: true
    });
    const renderInitial = () => {
      const alphabet = [];
      for (let i = 0; i < 26; i++) {
        alphabet.push({
          label: String.fromCharCode(65 + i),
          val: String.fromCharCode(97 + i)
        });
        info.initial = [info.initial[0], ...alphabet, info.initial[1]];
      }
    };
    const selectType = (type, index2) => {
      info[type + "index"] = index2;
      info.list = [];
      info.params.offset = 0;
      info.params[type] = info[type][index2].val;
    };
    const getArtist = async (params) => {
      const { data: res } = await proxy.$http.artistList(params);
      if (res.code !== 200) {
        return proxy.$msg.error("\u6570\u636E\u8BF7\u6C42\u5931\u8D25");
      }
      info.list = info.params.offset !== 0 ? [...info.list, ...res.artists] : res.artists;
      info.busy = !res.more;
      info.isLoading = res.more;
    };
    const loadMore = () => {
      info.busy = true;
      info.params.offset = info.list.length;
    };
    onMounted(() => {
      info.params.area = info.area[info.areaIndex].val;
      info.params.type = info.type[info.typeIndex].val;
      info.params.initial = info.initial[info.initialIndex].val;
      renderInitial();
    });
    watchEffect(() => {
      getArtist(info.params);
    });
    return (_ctx, _cache) => {
      const _component_el_affix = ElAffix;
      const _directive_infinite_scoll = resolveDirective("infinite-scoll");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            withDirectives((openBlock(), createElementBlock("div", _hoisted_4, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.list, (item) => {
                return openBlock(), createBlock(ArtistItem, { item }, null, 8, ["item"]);
              }), 256)),
              _ctx.isLoading ? (openBlock(), createBlock(__unplugin_components_1, { key: 0 })) : createCommentVNode("", true)
            ])), [
              [_directive_infinite_scoll, loadMore]
            ])
          ]),
          createBaseVNode("div", _hoisted_5, [
            createVNode(_component_el_affix, { offset: 140 }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_6, [
                  createBaseVNode("div", _hoisted_7, [
                    createBaseVNode("div", _hoisted_8, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.initial, (item, index2) => {
                        return openBlock(), createElementBlock("span", {
                          key: index2,
                          class: normalizeClass(index2 === _ctx.initialIndex ? "active" : ""),
                          onClick: ($event) => selectType("initial", index2)
                        }, toDisplayString(item.label), 11, _hoisted_9);
                      }), 128))
                    ]),
                    createBaseVNode("div", _hoisted_10, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.area, (item, index2) => {
                        return openBlock(), createElementBlock("span", {
                          key: index2,
                          class: normalizeClass(index2 === _ctx.areaIndex ? "active" : ""),
                          onClick: ($event) => selectType("area", index2)
                        }, toDisplayString(item.label), 11, _hoisted_11);
                      }), 128))
                    ]),
                    createBaseVNode("div", _hoisted_12, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.type, (item, index2) => {
                        return openBlock(), createElementBlock("span", {
                          key: index2,
                          class: normalizeClass(index2 === _ctx.typeIndex ? "active" : ""),
                          onClick: ($event) => selectType("type", index2)
                        }, toDisplayString(item.label), 11, _hoisted_13);
                      }), 128))
                    ])
                  ])
                ])
              ]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0f1755c7"]]);
export {
  index as default
};
