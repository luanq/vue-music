import { _ as _export_sfc, x as getCurrentInstance, O as useRoute, v as useRouter, y as useStore, z as reactive, l as onMounted, P as watchEffect, A as toRefs, S as SongList, E as ElImage, o as openBlock, d as createElementBlock, a as createBaseVNode, b as createVNode, w as withCtx, B as createTextVNode, t as toDisplayString, f as createCommentVNode, C as normalizeClass, c as createBlock, F as Fragment, e as renderList, p as pushScopeId, g as popScopeId } from "./index.b48d8b09.js";
import { _ as __unplugin_components_1 } from "./Loading.3cd2f3f0.js";
const index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = {
  name: "Rank",
  setup() {
    const { proxy } = getCurrentInstance();
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const info = reactive({
      list: [],
      type: "Top",
      listTop: [],
      listFeature: [],
      listOther: [],
      rId: 0,
      rankInfo: {},
      songList: [],
      total: 0,
      isLoading: true
    });
    const getTopListDetail = async () => {
      const { data: res } = await proxy.$http.topListDetail();
      if (res.code !== 200) {
        return proxy.$msg.error("\u6570\u636E\u8BF7\u6C42\u5931\u8D25");
      }
      info["listTop"] = res.list.filter((item) => {
        return item.ToplistType;
      });
      info["listFeature"] = res.list.filter((item) => {
        return !item.ToplistType && item.name.indexOf("\u4E91\u97F3\u4E50") >= 0;
      });
      info["listOther"] = res.list.filter((item) => {
        return !item.ToplistType && item.name.indexOf("\u4E91\u97F3\u4E50") < 0;
      });
      info["list"] = info.type ? info["list" + info.type] : info.listTop;
      info["rId"] = info.rId ? info.rId : info.listTop[0].id;
    };
    const getListDetail = async () => {
      info["isLoading"] = true;
      const { data: res } = await proxy.$http.listDetail({
        id: info.rId,
        s: -1
      });
      if (res.code !== 200) {
        return proxy.$msg.error("\u6570\u636E\u8BF7\u6C42\u5931\u8D25");
      }
      info["rankInfo"] = res.playlist;
      info["songList"] = proxy.$utils.formatSongs(
        res.playlist.tracks,
        res.privileges
      );
      info["total"] = info.songList.length;
      info["isLoading"] = false;
    };
    const selectType = (type) => {
      info["type"] = type;
      info["list"] = info["list" + info.type];
      info["rId"] = info["list" + type][0].id;
      router.push({ path: "rank", query: { type: info.type, rId: info.rId } });
    };
    const selectItem = (item) => {
      info.rId = item.id;
      router.push({ path: "rank", query: { type: info.type, rId: info.rId } });
    };
    const playAllSongs = () => {
      store.playAll({
        list: info.songList
      });
      store.setPlayListTips(true);
    };
    onMounted(() => {
      info["type"] = route.query.type || info.type;
      info["rId"] = route.query.rId;
      getTopListDetail();
    });
    watchEffect(() => {
      if (info.rId) {
        getListDetail();
      }
    });
    return {
      ...toRefs(info),
      selectType,
      selectItem,
      playAllSongs
    };
  },
  components: {
    SongList,
    Loading: __unplugin_components_1
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-9ad56748"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "rank" };
const _hoisted_2 = { class: "rank-container" };
const _hoisted_3 = { class: "rank-main" };
const _hoisted_4 = { class: "cover" };
const _hoisted_5 = { class: "cover-img" };
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", {
  slot: "placeholder",
  class: "image-slot"
}, [
  /* @__PURE__ */ createBaseVNode("i", { class: "iconfont icon-placeholder" })
], -1));
const _hoisted_7 = { class: "cover-info" };
const _hoisted_8 = { class: "cover-header" };
const _hoisted_9 = { class: "cover-title" };
const _hoisted_10 = { class: "cover-author-tags" };
const _hoisted_11 = {
  key: 0,
  class: "cover-author"
};
const _hoisted_12 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", {
  slot: "placeholder",
  class: "image-slot"
}, [
  /* @__PURE__ */ createBaseVNode("i", { class: "iconfont icon-placeholder" })
], -1));
const _hoisted_13 = { class: "cover-name" };
const _hoisted_14 = { class: "cover-date" };
const _hoisted_15 = { class: "cover-digital" };
const _hoisted_16 = { class: "cover-playCount" };
const _hoisted_17 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "iconfont icon-playnum" }, null, -1));
const _hoisted_18 = { class: "cover-collect" };
const _hoisted_19 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "iconfont icon-collect" }, null, -1));
const _hoisted_20 = { class: "cover-comment" };
const _hoisted_21 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "iconfont icon-comment" }, null, -1));
const _hoisted_22 = { class: "cover-desc" };
const _hoisted_23 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h5", null, "\u6B4C\u5355\u7B80\u4ECB", -1));
const _hoisted_24 = ["innerHTML"];
const _hoisted_25 = { class: "song-main" };
const _hoisted_26 = { class: "song-header" };
const _hoisted_27 = /* @__PURE__ */ createTextVNode(" \u6B4C\u66F2\u5217\u8868 ");
const _hoisted_28 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "iconfont icon-audio-play" }, null, -1));
const _hoisted_29 = /* @__PURE__ */ createTextVNode(" \u64AD\u653E\u5168\u90E8");
const _hoisted_30 = [
  _hoisted_28,
  _hoisted_29
];
const _hoisted_31 = { class: "rank-aside" };
const _hoisted_32 = { class: "aside-menu" };
const _hoisted_33 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("em", null, "TOP\u699C", -1));
const _hoisted_34 = [
  _hoisted_33
];
const _hoisted_35 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("em", null, "\u7279\u8272\u699C", -1));
const _hoisted_36 = [
  _hoisted_35
];
const _hoisted_37 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("em", null, "\u573A\u666F\u699C", -1));
const _hoisted_38 = [
  _hoisted_37
];
const _hoisted_39 = { class: "type-main" };
const _hoisted_40 = ["onClick"];
const _hoisted_41 = { class: "item-info" };
const _hoisted_42 = { class: "item-title" };
const _hoisted_43 = { class: "item-time" };
const _hoisted_44 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", {
  slot: "placeholder",
  class: "image-slot"
}, [
  /* @__PURE__ */ createBaseVNode("i", { class: "iconfont icon-placeholder" })
], -1));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_image = ElImage;
  const _component_Loading = __unplugin_components_1;
  const _component_song_list = SongList;
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("div", _hoisted_5, [
            createVNode(_component_el_image, {
              src: _ctx.rankInfo.coverImgUrl
            }, {
              default: withCtx(() => [
                _hoisted_6
              ]),
              _: 1
            }, 8, ["src"])
          ]),
          createBaseVNode("div", _hoisted_7, [
            createBaseVNode("div", _hoisted_8, [
              createBaseVNode("div", _hoisted_9, [
                createTextVNode(toDisplayString(_ctx.rankInfo.name) + " ", 1),
                createBaseVNode("span", null, "(" + toDisplayString(_ctx.$utils.formartDate(_ctx.rankInfo.updateTime, "MM\u6708dd\u65E5")) + " \u66F4\u65B0)", 1)
              ])
            ]),
            createBaseVNode("div", _hoisted_10, [
              _ctx.rankInfo.creator ? (openBlock(), createElementBlock("div", _hoisted_11, [
                createVNode(_component_el_image, {
                  src: _ctx.rankInfo.creator.avatarUrl,
                  class: "cover-avatar"
                }, {
                  default: withCtx(() => [
                    _hoisted_12
                  ]),
                  _: 1
                }, 8, ["src"]),
                createBaseVNode("div", _hoisted_13, toDisplayString(_ctx.rankInfo.creator.nickname), 1),
                createBaseVNode("div", _hoisted_14, toDisplayString(_ctx.$utils.formartDate(_ctx.rankInfo.createTime, "yyyy-MM-dd")), 1)
              ])) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_15, [
              createBaseVNode("span", _hoisted_16, [
                _hoisted_17,
                createTextVNode(" " + toDisplayString(_ctx.$utils.formartNum(_ctx.rankInfo.playCount)) + "\u6B21", 1)
              ]),
              createBaseVNode("span", _hoisted_18, [
                _hoisted_19,
                createTextVNode(" " + toDisplayString(_ctx.$utils.formartNum(_ctx.rankInfo.subscribedCount)), 1)
              ]),
              createBaseVNode("span", _hoisted_20, [
                _hoisted_21,
                createTextVNode(" " + toDisplayString(_ctx.$utils.formartNum(_ctx.rankInfo.commentCount)), 1)
              ])
            ]),
            createBaseVNode("div", _hoisted_22, [
              _hoisted_23,
              createBaseVNode("p", {
                innerHTML: _ctx.rankInfo.description
              }, null, 8, _hoisted_24)
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_25, [
          createBaseVNode("div", _hoisted_26, [
            createBaseVNode("h4", null, [
              _hoisted_27,
              createBaseVNode("em", null, toDisplayString(_ctx.total + "\u9996\u6B4C"), 1)
            ]),
            createBaseVNode("span", {
              class: "play-all",
              onClick: _cache[0] || (_cache[0] = (...args) => $setup.playAllSongs && $setup.playAllSongs(...args))
            }, _hoisted_30),
            createBaseVNode("span", {
              class: normalizeClass(["collect", _ctx.rankInfo.subscribed ? "active" : ""]),
              onClick: _cache[1] || (_cache[1] = ($event) => _ctx.subPlayList(_ctx.rankInfo))
            }, [
              createBaseVNode("i", {
                class: normalizeClass([
                  "iconfont",
                  "icon-collect" + (_ctx.rankInfo.subscribed ? "-active" : "")
                ])
              }, null, 2),
              createTextVNode(" " + toDisplayString(_ctx.rankInfo.subscribed ? "\u5DF2\u6536\u85CF" : "\u6536\u85CF"), 1)
            ], 2)
          ]),
          _ctx.isLoading ? (openBlock(), createBlock(_component_Loading, { key: 0 })) : (openBlock(), createBlock(_component_song_list, {
            key: 1,
            songList: _ctx.songList,
            stripe: true
          }, null, 8, ["songList"]))
        ])
      ]),
      createBaseVNode("div", _hoisted_31, [
        createBaseVNode("div", _hoisted_32, [
          createBaseVNode("span", {
            class: normalizeClass(_ctx.type === "Top" ? "active" : ""),
            onClick: _cache[2] || (_cache[2] = ($event) => $setup.selectType("Top"))
          }, _hoisted_34, 2),
          createBaseVNode("span", {
            class: normalizeClass(_ctx.type === "Feature" ? "active" : ""),
            onClick: _cache[3] || (_cache[3] = ($event) => $setup.selectType("Feature"))
          }, _hoisted_36, 2),
          createBaseVNode("span", {
            class: normalizeClass(_ctx.type === "Other" ? "active" : ""),
            onClick: _cache[4] || (_cache[4] = ($event) => $setup.selectType("Other"))
          }, _hoisted_38, 2)
        ]),
        createBaseVNode("div", _hoisted_39, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.list, (item, index2) => {
            return openBlock(), createElementBlock("div", {
              class: normalizeClass(["type-item", _ctx.rId == item.id ? "active" : ""]),
              key: index2,
              onClick: ($event) => $setup.selectItem(item)
            }, [
              createBaseVNode("div", _hoisted_41, [
                createBaseVNode("div", _hoisted_42, toDisplayString(item.name), 1),
                createBaseVNode("div", _hoisted_43, toDisplayString(item.updateFrequency), 1)
              ]),
              createVNode(_component_el_image, {
                class: "item-img",
                src: item.coverImgUrl
              }, {
                default: withCtx(() => [
                  _hoisted_44
                ]),
                _: 2
              }, 1032, ["src"])
            ], 10, _hoisted_40);
          }), 128))
        ])
      ])
    ])
  ]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9ad56748"]]);
export {
  index as default
};
