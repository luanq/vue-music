import { _ as _export_sfc, x as getCurrentInstance, O as useRoute, v as useRouter, z as reactive, u as computed, l as onMounted, k as watch, A as toRefs, Q as ElPopover, o as openBlock, d as createElementBlock, a as createBaseVNode, F as Fragment, e as renderList, B as createTextVNode, t as toDisplayString, f as createCommentVNode, C as normalizeClass, R as withDirectives, b as createVNode, c as createBlock, w as withCtx, p as pushScopeId, g as popScopeId } from "./index.b48d8b09.js";
import { E as ElInfiniteScroll } from "./el-infinite-scroll.547055f1.js";
import { _ as __unplugin_components_1$1 } from "./Loading.3cd2f3f0.js";
import { _ as __unplugin_components_1 } from "./PlayList.967870c1.js";
import "./el-skeleton-item.6c4ecba9.js";
const index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = {
  name: "PlayListWrap",
  setup() {
    const { proxy } = getCurrentInstance();
    const route = useRoute();
    const router = useRouter();
    const cat = route.query.cat;
    const info = reactive({
      sub: [],
      categories: [],
      curType: "\u5168\u90E8\u6B4C\u5355",
      moreTxt: {},
      allList: {
        name: "\u5168\u90E8\u6B4C\u5355"
      },
      playlist_list: [],
      playlist_count: 24,
      playlist_loading: true,
      busy: true,
      params: {
        order: "hot",
        cat,
        limit: 48,
        offset: 0
      }
    });
    const getCatlist = async () => {
      const { data: res } = await proxy.$http.catlist();
      info.sub = res.sub;
      if (res.code !== 200) {
        return proxy.$msg.error("\u6570\u636E\u8BF7\u6C42\u5931\u8D25");
      }
      for (const k in res.categories) {
        const params = { name: res.categories[k] };
        params.children = info.sub.filter((subItem) => {
          return subItem.category === Number(k);
        });
        info.categories.push(params);
      }
      info.curType = cat ? cat : res.all.name;
      info.allList = res.all;
      getMoreTxt();
    };
    const getMoreTxt = () => {
      const itemInfo = info.sub.find((subItem) => {
        return subItem.name === info.curType;
      });
      info.moreTxt = {};
      if (itemInfo) {
        const index2 = info.categories[itemInfo.category].children.indexOf(itemInfo);
        index2 >= 8 && (info.moreTxt[itemInfo.category] = itemInfo);
      }
    };
    computed(() => {
      return () => {
        return ["item-box", "filter-more", moreTxt[index] ? "active" : ""];
      };
    });
    const selectType = (item) => {
      router.push({
        path: "playlist",
        query: { cat: item.name, order: info.params.order }
      });
    };
    const closed = () => {
      router.push({ path: "playlist" });
    };
    const selectOrder = (type) => {
      router.push({
        path: "playlist",
        query: { cat: info.params.cat, order: type }
      });
    };
    const getPlayList = async (params) => {
      const { data: res } = await proxy.$http.playList(params);
      if (res.code !== 200) {
        return proxy.$msg.error("\u6570\u636E\u8BF7\u6C42\u5931\u8D25");
      }
      info.playlist_list = info.params.offset !== 0 ? [...info.playlist_list, ...res.playlists] : res.playlists;
      info.busy = info.playlist_list.length >= res.total;
      info.playlist_loading = false;
    };
    const loadMore = () => {
      info.busy = true;
      info.params.offset = info.playlist_list.length;
    };
    onMounted(() => {
      getCatlist();
      getPlayList(info.params);
    });
    watch(
      () => route.query,
      (newVal, oldVal) => {
        const { cat: cat2, order } = newVal;
        info.curType = cat2 || info.allList.name;
        info.params = Object.assign(
          {},
          { order: "hot", cat: "", limit: 50, offset: 0 },
          { cat: cat2 || "", order: order || "hot" }
        );
        getMoreTxt();
      }
    );
    watch(
      () => info.params,
      (newVal, oldVal) => {
        if (newVal.cat !== oldVal.cat) {
          info.busy = true;
          info.playlist_list = [];
        }
        getPlayList(newVal);
      },
      {
        deep: true
      }
    );
    return {
      ...toRefs(info),
      getCatlist,
      selectType,
      closed,
      loadMore,
      selectOrder
    };
  },
  components: {
    PlayList: __unplugin_components_1,
    Loading: __unplugin_components_1$1
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-8dba4630"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "playlist" };
const _hoisted_2 = { class: "filter" };
const _hoisted_3 = { class: "filter-title" };
const _hoisted_4 = { class: "filter-box" };
const _hoisted_5 = ["onClick"];
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "iconfont icon-arrow" }, null, -1));
const _hoisted_7 = { key: 1 };
const _hoisted_8 = { class: "filter-drop" };
const _hoisted_9 = ["onClick"];
const _hoisted_10 = { class: "list-container" };
const _hoisted_11 = { class: "list-head" };
const _hoisted_12 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "iconfont icon-closed" }, null, -1));
const _hoisted_13 = [
  _hoisted_12
];
const _hoisted_14 = { class: "type" };
const _hoisted_15 = {
  class: "wrapper infinite-list",
  "infinite-scroll-disabled": "busy",
  "infinite-scroll-distance": "100"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_popover = ElPopover;
  const _component_play_list = __unplugin_components_1;
  const _component_Loading = __unplugin_components_1$1;
  const _directive_infinite_scroll = ElInfiniteScroll;
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.categories, (item, index2) => {
        return openBlock(), createElementBlock("div", {
          class: "filter-item",
          key: index2
        }, [
          createBaseVNode("div", _hoisted_3, toDisplayString(item.name), 1),
          createBaseVNode("div", _hoisted_4, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(item.children.slice(0, 8), (sub) => {
              return openBlock(), createElementBlock("span", {
                class: normalizeClass(["item-box", _ctx.curType === sub.name ? "active" : ""]),
                key: sub.name
              }, [
                createBaseVNode("em", {
                  onClick: ($event) => $setup.selectType(sub)
                }, toDisplayString(sub.name), 9, _hoisted_5)
              ], 2);
            }), 128)),
            createVNode(_component_el_popover, {
              width: "auto",
              trigger: "click"
            }, {
              reference: withCtx(() => [
                item.children.length > 9 ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  class: normalizeClass([
                    "item-box",
                    "filter-more",
                    _ctx.moreTxt[index2] ? "active" : ""
                  ])
                }, [
                  createBaseVNode("em", null, [
                    createTextVNode(toDisplayString(_ctx.moreTxt[index2] ? _ctx.curType : "\u66F4\u591A"), 1),
                    _hoisted_6
                  ])
                ], 2)) : (openBlock(), createElementBlock("span", _hoisted_7))
              ]),
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_8, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(item.children.slice(9), (sub) => {
                    return openBlock(), createElementBlock("span", {
                      class: normalizeClass(["item-box", _ctx.curType === sub.name ? "active" : ""]),
                      key: sub.name
                    }, [
                      createBaseVNode("em", {
                        onClick: ($event) => $setup.selectType(sub, index2)
                      }, toDisplayString(sub.name), 9, _hoisted_9)
                    ], 2);
                  }), 128))
                ])
              ]),
              _: 2
            }, 1024)
          ])
        ]);
      }), 128))
    ]),
    createBaseVNode("div", _hoisted_10, [
      createBaseVNode("div", _hoisted_11, [
        createBaseVNode("h2", null, [
          createTextVNode(toDisplayString(_ctx.curType) + " ", 1),
          _ctx.curType !== _ctx.allList.name ? (openBlock(), createElementBlock("em", {
            key: 0,
            class: "filter-close",
            onClick: _cache[0] || (_cache[0] = (...args) => $setup.closed && $setup.closed(...args))
          }, _hoisted_13)) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_14, [
          createBaseVNode("span", {
            class: normalizeClass(_ctx.params.order === "hot" ? "active" : ""),
            onClick: _cache[1] || (_cache[1] = ($event) => $setup.selectOrder("hot"))
          }, "\u70ED\u95E8", 2),
          createBaseVNode("span", {
            class: normalizeClass(_ctx.params.order === "new" ? "active" : ""),
            onClick: _cache[2] || (_cache[2] = ($event) => $setup.selectOrder("new"))
          }, "\u6700\u65B0", 2)
        ])
      ]),
      withDirectives((openBlock(), createElementBlock("div", _hoisted_15, [
        createVNode(_component_play_list, {
          playList: _ctx.playlist_list,
          loading: _ctx.playlist_loading,
          num: _ctx.playlist_count
        }, null, 8, ["playList", "loading", "num"]),
        _ctx.busy ? (openBlock(), createBlock(_component_Loading, { key: 0 })) : createCommentVNode("", true)
      ])), [
        [_directive_infinite_scroll, $setup.loadMore]
      ])
    ])
  ]);
}
const index$1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-8dba4630"]]);
export {
  index$1 as default
};
