import { _ as _export_sfc, x as getCurrentInstance, y as useStore, z as reactive, l as onMounted, Z as onBeforeRouteUpdate, E as ElImage, r as resolveComponent, o as openBlock, d as createElementBlock, a as createBaseVNode, b as createVNode, w as withCtx, B as createTextVNode, t as toDisplayString, F as Fragment, e as renderList, f as createCommentVNode, C as normalizeClass, S as SongList, O as useRoute, c as createBlock, p as pushScopeId, g as popScopeId } from "./index.b48d8b09.js";
const index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-0936bc89"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  key: 0,
  class: "album"
};
const _hoisted_2 = { class: "detail-container" };
const _hoisted_3 = { class: "detail-main" };
const _hoisted_4 = { class: "album-cover" };
const _hoisted_5 = { class: "album-img" };
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", {
  slot: "placeholder",
  class: "image-slot"
}, [
  /* @__PURE__ */ createBaseVNode("i", { class: "iconfont icon-placeholder" })
], -1));
const _hoisted_7 = { class: "album-info" };
const _hoisted_8 = { class: "album-title" };
const _hoisted_9 = { class: "album-singer" };
const _hoisted_10 = /* @__PURE__ */ createTextVNode(" \u6B4C\u624B\uFF1A");
const _hoisted_11 = { class: "album-time" };
const _hoisted_12 = { class: "album-company" };
const _hoisted_13 = {
  key: 0,
  class: "album-desc"
};
const _hoisted_14 = /* @__PURE__ */ createTextVNode(" \u6B4C\u5355\u7B80\u4ECB");
const _hoisted_15 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "iconfont icon-closed" }, null, -1));
const _hoisted_16 = [
  _hoisted_15
];
const _hoisted_17 = {
  key: 0,
  class: "album-desc-all"
};
const _hoisted_18 = { class: "song-main" };
const _hoisted_19 = { class: "song-header" };
const _hoisted_20 = /* @__PURE__ */ createTextVNode(" \u5305\u542B\u6B4C\u66F2\u5217\u8868 ");
const _hoisted_21 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "iconfont icon-audio-play" }, null, -1));
const _hoisted_22 = /* @__PURE__ */ createTextVNode(" \u64AD\u653E\u5168\u90E8");
const _hoisted_23 = [
  _hoisted_21,
  _hoisted_22
];
const _hoisted_24 = { class: "aside-box" };
const _hoisted_25 = { class: "album-aside album-other" };
const _hoisted_26 = { class: "aside-title" };
const _hoisted_27 = /* @__PURE__ */ createTextVNode("\u5168\u90E8>>");
const _hoisted_28 = { class: "aside-main aside-album-main" };
const _hoisted_29 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", {
  slot: "placeholder",
  class: "image-slot"
}, [
  /* @__PURE__ */ createBaseVNode("i", { class: "iconfont icon-placeholder" })
], -1));
const _hoisted_30 = { class: "aside-album-info" };
const _hoisted_31 = { class: "aside-album-name" };
const _hoisted_32 = { class: "aside-album-time" };
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const { proxy } = getCurrentInstance();
    const store = useStore();
    const route = useRoute;
    const info = reactive({
      albumId: "",
      details: null,
      songList: [],
      dynamic: {},
      hotAlbums: [],
      type: 3,
      isShowDesc: false,
      collects: []
    });
    const getAlbum = async (params) => {
      const { data: res } = await proxy.$http.album(params);
      if (res.code !== 20)
        return proxy.$msg.error("\u6570\u636E\u8BF7\u6C42\u5931\u8D25");
      info.details = res.album;
      const privileges = [];
      res.songs.forEach((item) => {
        privileges.push(item.privileges);
      });
      info.songList = proxy.$utils.formatSongs(re.songs, privileges);
    };
    const getAlbumDynamic = async (params) => {
      const { data: res } = await proxy.$http.albumDynamic(params);
      if (res.code !== 200) {
        return proxy.$msg.error("\u8BF7\u6C42\u5931\u8D25");
      }
      info.dynamic = res;
    };
    const showAllDesc = () => {
      if (info.details.description.length > 120) {
        info.isShowDesc = !info.isShowDesc;
      }
    };
    const playAllSongs = () => {
      store.playAll({ list: info.songList });
      store.setPlayListTips(true);
    };
    const subAlbum = async () => {
      const { data: res } = await proxy.$http.albumSub({
        id: info.albumId,
        t: Number(!info.dynamic.isSub)
      });
      if (res.code !== 200) {
        return proxy.$msg.error("\u6570\u636E\u8BF7\u6C42\u5931\u8D25");
      }
      info.dynamic.isSub = Number(!info.dynamic.isSub);
    };
    const getCollect = async (params) => {
      const { data: res } = await proxy.$http.playlistSCollect(params);
      if (res.code !== 200) {
        return proxy.$msg.error("\u6570\u636E\u8BF7\u6C42\u5931\u8D25");
      }
      info.collects = res.subscribers;
    };
    const _initialize = () => {
      getAlbum({ id: info.albumId });
      getAlbumDynamic({ id: info.albumId });
      getCollect({ id: info.albumId });
    };
    onMounted(() => {
      info.albumId = route.query.id;
      _initialize();
    });
    onBeforeRouteUpdate((to) => {
      info.albumId = to.query.id;
      _initialize();
    });
    return (_ctx, _cache) => {
      const _component_el_image = ElImage;
      const _component_router_link = resolveComponent("router-link");
      return _ctx.details ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createVNode(_component_el_image, {
                  src: _ctx.details.picUrl
                }, {
                  default: withCtx(() => [
                    _hoisted_6
                  ]),
                  _: 1
                }, 8, ["src"])
              ]),
              createBaseVNode("div", _hoisted_7, [
                createBaseVNode("div", _hoisted_8, [
                  createTextVNode(toDisplayString(_ctx.details.name) + " ", 1),
                  createBaseVNode("span", null, toDisplayString("#" + _ctx.details.type), 1)
                ]),
                createBaseVNode("div", _hoisted_9, [
                  _hoisted_10,
                  (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.details.artists, (author, k) => {
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
                createBaseVNode("div", _hoisted_11, " \u53D1\u884C\u65F6\u95F4\uFF1A" + toDisplayString(_ctx.$utils.formartDate(_ctx.details.publishTime, "yyyy-MM-dd")), 1),
                createBaseVNode("div", _hoisted_12, "\u53D1\u884C\u516C\u53F8\uFF1A" + toDisplayString(_ctx.details.company), 1),
                _ctx.details.description ? (openBlock(), createElementBlock("div", _hoisted_13, [
                  createBaseVNode("h5", null, [
                    _hoisted_14,
                    _ctx.isShowDesc ? (openBlock(), createElementBlock("em", {
                      key: 0,
                      class: "desc-close",
                      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.isShowDesc = false)
                    }, _hoisted_16)) : createCommentVNode("", true)
                  ]),
                  createBaseVNode("p", { onClick: showAllDesc }, toDisplayString(_ctx.details.description), 1),
                  _ctx.isShowDesc ? (openBlock(), createElementBlock("pre", _hoisted_17, "                                " + toDisplayString(_ctx.details.description) + "\r\n                            ", 1)) : createCommentVNode("", true)
                ])) : createCommentVNode("", true)
              ])
            ]),
            createBaseVNode("div", _hoisted_18, [
              createBaseVNode("div", _hoisted_19, [
                createBaseVNode("h4", null, [
                  _hoisted_20,
                  createBaseVNode("em", null, toDisplayString(_ctx.details.size + "\u9996\u6B4C"), 1)
                ]),
                createBaseVNode("span", {
                  class: "play-all",
                  onClick: playAllSongs
                }, _hoisted_23),
                createBaseVNode("span", {
                  class: normalizeClass(["collect", _ctx.dynamic.isSub ? "active" : ""]),
                  onClick: subAlbum
                }, [
                  createBaseVNode("i", {
                    class: normalizeClass([
                      "iconfont",
                      "icon-collect" + (_ctx.dynamic.isSub ? "-active" : "")
                    ])
                  }, null, 2),
                  createTextVNode(" " + toDisplayString(_ctx.dynamic.isSub ? "\u5DF2\u6536\u85CF" : "\u6536\u85CF"), 1)
                ], 2)
              ]),
              createVNode(SongList, {
                songList: _ctx.songList,
                stripe: true
              }, null, 8, ["songList"])
            ])
          ]),
          createBaseVNode("div", _hoisted_24, [
            createBaseVNode("div", _hoisted_25, [
              createBaseVNode("h3", _hoisted_26, [
                createTextVNode(toDisplayString(_ctx.details.artists[0].name) + "\u7684\u5176\u4ED6\u4E13\u8F91", 1),
                createVNode(_component_router_link, {
                  to: {},
                  class: "album-more"
                }, {
                  default: withCtx(() => [
                    _hoisted_27
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_28, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.hotAlbums, (item) => {
                  return openBlock(), createBlock(_component_router_link, {
                    class: "aside-album-item",
                    to: { path: "/album", query: { id: item.id } },
                    key: item.id
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_image, {
                        src: item.picUrl
                      }, {
                        default: withCtx(() => [
                          _hoisted_29
                        ]),
                        _: 2
                      }, 1032, ["src"]),
                      createBaseVNode("div", _hoisted_30, [
                        createBaseVNode("div", _hoisted_31, toDisplayString(item.name), 1),
                        createBaseVNode("div", _hoisted_32, toDisplayString(_ctx.$utils.formartDate(_ctx.details.publishTime, "yyyy-MM-dd")), 1)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["to"]);
                }), 128))
              ])
            ])
          ])
        ])
      ])) : createCommentVNode("", true);
    };
  }
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0936bc89"]]);
export {
  index as default
};
