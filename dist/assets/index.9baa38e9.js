import { _ as _export_sfc, x as getCurrentInstance, z as reactive, l as onMounted, P as watchEffect, A as toRefs, o as openBlock, d as createElementBlock, a as createBaseVNode, R as withDirectives, b as createVNode, c as createBlock, f as createCommentVNode, w as withCtx, F as Fragment, e as renderList, C as normalizeClass, t as toDisplayString, p as pushScopeId, g as popScopeId } from "./index.b48d8b09.js";
import { E as ElInfiniteScroll } from "./el-infinite-scroll.547055f1.js";
import { E as ElAffix } from "./el-affix.574a5735.js";
import { _ as __unplugin_components_1 } from "./Loading.3cd2f3f0.js";
import { _ as __unplugin_components_0 } from "./MvList.83b39a2e.js";
import "./el-skeleton-item.6c4ecba9.js";
const index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = {
  name: "Mvlist",
  setup() {
    const { proxy } = getCurrentInstance();
    const info = reactive({
      area: proxy.$COMMON.MV_AREA,
      type: proxy.$COMMON.MV_TYPE,
      order: ["\u4E0A\u5347\u6700\u5FEB", "\u6700\u65B0"],
      areaIndex: 0,
      typeIndex: 0,
      orderIndex: 0,
      params: {
        area: "",
        type: "",
        order: "",
        limit: 30,
        offset: 0
      },
      list: [],
      mv_count: 20,
      mv_loading: true,
      isLoading: true,
      isLoadMv: true
    });
    const getMv = async (params) => {
      const { data: res } = await proxy.$http.mv(params);
      if (res.code !== 200) {
        return proxy.$msg.error("\u6570\u636E\u8BF7\u6C42\u5931\u8D25");
      }
      info.list = info.params.offset !== 0 ? [...info.list, ...res.data] : res.data;
      info.isLoadMv = !res.hasMore;
      info.isLoading = res.hasMore;
      info.mv_loading = false;
    };
    const selectType = (type, index2) => {
      info[type + "Index"] = index2;
      info.list = [];
      info.params.offset = 0;
      info.params[type] = info[type][index2];
      info.mv_loading = true;
    };
    const loadMv = () => {
      info.isLoadMv = true;
      info.params.offset = info.list.length;
    };
    onMounted(() => {
      info.params.area = info.area[info.areaIndex];
      info.params.type = info.type[info.typeIndex];
      info.params.order = info.order[info.orderIndex];
    });
    watchEffect(() => {
      getMv(info.params);
    });
    return {
      ...toRefs(info),
      selectType,
      loadMv
    };
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-9c990324"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "mv" };
const _hoisted_2 = { class: "mv-container" };
const _hoisted_3 = { class: "mv-main" };
const _hoisted_4 = {
  class: "wrapper infinite-list",
  "infinite-scroll-disabled": "isLoadMv",
  "infinite-scroll-distance": "50"
};
const _hoisted_5 = { class: "aside-box" };
const _hoisted_6 = { class: "aside-menu" };
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", { class: "aside-title" }, "\u6392\u5E8F", -1));
const _hoisted_8 = { class: "filter-main" };
const _hoisted_9 = ["onClick"];
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", { class: "aside-title" }, "\u533A\u57DF", -1));
const _hoisted_11 = { class: "filter-main" };
const _hoisted_12 = ["onClick"];
const _hoisted_13 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", { class: "aside-title" }, "\u7C7B\u578B", -1));
const _hoisted_14 = { class: "filter-main" };
const _hoisted_15 = ["onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mv_list = __unplugin_components_0;
  const _component_Loading = __unplugin_components_1;
  const _component_el_affix = ElAffix;
  const _directive_infinite_scroll = ElInfiniteScroll;
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        withDirectives((openBlock(), createElementBlock("div", _hoisted_4, [
          createVNode(_component_mv_list, {
            mvList: _ctx.list,
            loading: _ctx.mv_loading,
            num: _ctx.mv_count
          }, null, 8, ["mvList", "loading", "num"]),
          _ctx.isLoading ? (openBlock(), createBlock(_component_Loading, { key: 0 })) : createCommentVNode("", true)
        ])), [
          [_directive_infinite_scroll, $setup.loadMv]
        ])
      ]),
      createBaseVNode("div", _hoisted_5, [
        createVNode(_component_el_affix, { offset: 140 }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_6, [
              _hoisted_7,
              createBaseVNode("div", _hoisted_8, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.order, (item, index2) => {
                  return openBlock(), createElementBlock("em", {
                    class: normalizeClass(index2 === _ctx.orderIndex ? "active" : ""),
                    key: index2,
                    onClick: ($event) => $setup.selectType("order", index2)
                  }, toDisplayString(item), 11, _hoisted_9);
                }), 128))
              ]),
              _hoisted_10,
              createBaseVNode("div", _hoisted_11, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.area, (item, index2) => {
                  return openBlock(), createElementBlock("em", {
                    class: normalizeClass(index2 === _ctx.areaIndex ? "active" : ""),
                    key: index2,
                    onClick: ($event) => $setup.selectType("area", index2)
                  }, toDisplayString(item), 11, _hoisted_12);
                }), 128))
              ]),
              _hoisted_13,
              createBaseVNode("div", _hoisted_14, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.type, (item, index2) => {
                  return openBlock(), createElementBlock("em", {
                    class: normalizeClass(index2 === _ctx.typeIndex ? "active" : ""),
                    key: index2,
                    onClick: ($event) => $setup.selectType("type", index2)
                  }, toDisplayString(item), 11, _hoisted_15);
                }), 128))
              ])
            ])
          ]),
          _: 1
        })
      ])
    ])
  ]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9c990324"]]);
export {
  index as default
};
