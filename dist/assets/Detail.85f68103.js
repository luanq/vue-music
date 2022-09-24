import { _ as _export_sfc, x as getCurrentInstance, O as useRoute, y as useStore, z as reactive, u as computed, l as onMounted, Z as onBeforeRouteUpdate, A as toRefs, S as SongList, E as ElImage, r as resolveComponent, o as openBlock, d as createElementBlock, a as createBaseVNode, b as createVNode, w as withCtx, t as toDisplayString, F as Fragment, e as renderList, f as createCommentVNode, B as createTextVNode, C as normalizeClass, c as createBlock, p as pushScopeId, g as popScopeId } from "./index.b48d8b09.js";
import { _ as __unplugin_components_1 } from "./Loading.3cd2f3f0.js";
const Detail_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = {
  name: "PlayListDetail",
  setup() {
    const { proxy } = getCurrentInstance();
    const route = useRoute();
    const store = useStore();
    const info = reactive({
      id: "",
      details: {},
      isShowDesc: false,
      songList: [],
      collects: [],
      playlists: [],
      comments: [],
      total: 0,
      isLoading: true
    });
    const isLogin = computed(() => store.getisLogin);
    const getDetail = async (params) => {
      info["isLoading"] = true;
      const { data: res } = await proxy.$http.playlistdetail(params);
      if (res.code !== 200) {
        return proxy.$msg.error("\u6570\u636E\u8BF7\u6C42\u5931\u8D25");
      }
      info["details"] = res.playlist;
      if (isLogin.value) {
        const ids = res.playlist.trackIds;
        getAllSongs(ids);
      } else {
        info["songList"] = proxy.$utils.formatSongs(
          res.playlist.tracks,
          res.privileges
        );
        info["total"] = info["songList"].length;
        info["isLoading"] = false;
      }
    };
    const getAllSongs = async (ids) => {
      const sliceArr = [];
      const num = 500;
      let idsArr = [];
      for (let index = 0; index < ids.length; index += num) {
        sliceArr.push(ids.slice(index, index + num));
      }
      for (let i = 0; i < sliceArr.length; i++) {
        const arrs = [];
        sliceArr[i].map((d) => {
          arrs.push(d.id);
        });
        info["isLoading"] = true;
        const { data: res } = await proxy.$http.songDetail({
          ids: arrs.join(","),
          timestamp: new Date().valueOf() + i
        });
        idsArr = idsArr.concat(
          proxy.$utils.formatSongs(res.songs, res.privileges)
        );
      }
      info["songList"] = idsArr;
      info["total"] = idsArr.length;
      info["isLoading"] = false;
    };
    const showAllDesc = () => {
      if (info.details.description.length > 120) {
        info.isShowDesc = !info.isShowDesc;
      }
    };
    const loginDialog = () => {
      store.loginSuc(true);
    };
    const getCollect = async (params) => {
      const { data: res } = await proxy.$http.playlistSCollect(params);
      if (res.code !== 200) {
        return proxy.$msg.error("\u6570\u636E\u8BF7\u6C42\u5931\u8D25");
      }
      info.collects = res.subscribers;
    };
    const getRecom = async (params) => {
      const { data: res } = await proxy.$http.playlistRelated(params);
      if (res.code !== 200) {
        return proxy.$msg.error("\u6570\u636E\u8BF7\u6C42\u5931\u8D25");
      }
      info.playlists = res.playlists;
    };
    const getComment = async (params) => {
      const { data: res } = await proxy.$http.playlistComment(params);
      if (res.code !== 200) {
        return proxy.$msg.error("\u6570\u636E\u8BF7\u6C42\u5931\u8D25");
      }
      info.comments = res.comments;
    };
    const playAllSongs = () => {
      store.playAll({
        list: info.songList
      });
      store.setPlayListTips(true);
    };
    const subPlayList = async (item) => {
      const { data: res } = await proxy.$http.subPlayList({
        id: item.id,
        t: item.subscribed ? 2 : 1
      });
      if (res.code !== 200) {
        return proxy.$msg.error("\u6570\u636E\u8BF7\u6C42\u5931\u8D25");
      }
      info.details.subscribed = !info.details.subscribed;
    };
    onMounted(() => {
      info.id = route.query.id;
      _initialize(info.id);
    });
    const _initialize = (id) => {
      getDetail({ id, s: 8 });
      getCollect({ id, limit: 8 });
      getRecom({ id });
      getComment({ id, limit: 9 });
    };
    onBeforeRouteUpdate((to) => {
      info.songList = [];
      info.total = 0;
      info.id = to.query.id;
      _initialize(info.id);
    });
    return {
      ...toRefs(info),
      playAllSongs,
      subPlayList,
      isLogin,
      loginDialog,
      showAllDesc
    };
  },
  components: {
    Loading: __unplugin_components_1,
    SongList
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-9fb0b57c"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "detail" };
const _hoisted_2 = { class: "detail-container" };
const _hoisted_3 = { class: "detail-main" };
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
const _hoisted_10 = { class: "cover-collect-author" };
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", {
  slot: "placeholder",
  class: "image-slot"
}, [
  /* @__PURE__ */ createBaseVNode("i", { class: "iconfont icon-placeholder" })
], -1));
const _hoisted_12 = { class: "cover-author-tags" };
const _hoisted_13 = {
  key: 0,
  class: "cover-author"
};
const _hoisted_14 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", {
  slot: "placeholder",
  class: "image-slot"
}, [
  /* @__PURE__ */ createBaseVNode("i", { class: "iconfont icon-placeholder" })
], -1));
const _hoisted_15 = { class: "cover-name" };
const _hoisted_16 = { class: "cover-date" };
const _hoisted_17 = {
  key: 1,
  class: "cover-tags"
};
const _hoisted_18 = { class: "cover-digital" };
const _hoisted_19 = { class: "cover-playCount" };
const _hoisted_20 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "iconfont icon-playnum" }, null, -1));
const _hoisted_21 = { class: "cover-collect" };
const _hoisted_22 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "iconfont icon-collect" }, null, -1));
const _hoisted_23 = { class: "cover-comment" };
const _hoisted_24 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "iconfont icon-comment" }, null, -1));
const _hoisted_25 = { class: "cover-desc" };
const _hoisted_26 = /* @__PURE__ */ createTextVNode(" \u6B4C\u5355\u7B80\u4ECB");
const _hoisted_27 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "iconfont icon-closed" }, null, -1));
const _hoisted_28 = [
  _hoisted_27
];
const _hoisted_29 = ["innerHTML"];
const _hoisted_30 = {
  key: 0,
  class: "cover-desc-all"
};
const _hoisted_31 = { class: "song-main" };
const _hoisted_32 = { class: "song-header" };
const _hoisted_33 = /* @__PURE__ */ createTextVNode(" \u6B4C\u66F2\u5217\u8868 ");
const _hoisted_34 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "iconfont icon-audio-play" }, null, -1));
const _hoisted_35 = /* @__PURE__ */ createTextVNode(" \u64AD\u653E\u5168\u90E8");
const _hoisted_36 = [
  _hoisted_34,
  _hoisted_35
];
const _hoisted_37 = {
  key: 0,
  class: "showAllSongsTips"
};
const _hoisted_38 = { class: "aside-box" };
const _hoisted_39 = {
  key: 0,
  class: "playlist-recom"
};
const _hoisted_40 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", { class: "aside-title" }, "\u76F8\u5173\u6B4C\u5355\u63A8\u8350", -1));
const _hoisted_41 = { class: "aside-main recom-main" };
const _hoisted_42 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", {
  slot: "placeholder",
  class: "image-slot"
}, [
  /* @__PURE__ */ createBaseVNode("i", { class: "iconfont icon-placeholder" })
], -1));
const _hoisted_43 = { class: "recom-info" };
const _hoisted_44 = { class: "recom-name" };
const _hoisted_45 = { class: "recom-author" };
const _hoisted_46 = /* @__PURE__ */ createTextVNode(" By. ");
const _hoisted_47 = {
  key: 1,
  class: "playlist-comment"
};
const _hoisted_48 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", { class: "aside-title" }, "\u6B4C\u5355\u8BC4\u8BBA", -1));
const _hoisted_49 = { class: "aside-main comment-main" };
const _hoisted_50 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", {
  slot: "placeholder",
  class: "image-slot"
}, [
  /* @__PURE__ */ createBaseVNode("i", { class: "iconfont icon-placeholder" })
], -1));
const _hoisted_51 = { class: "comment-info" };
const _hoisted_52 = { class: "comment-userInfo" };
const _hoisted_53 = { class: "comment-date" };
const _hoisted_54 = { class: "comment-desc" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_image = ElImage;
  const _component_router_link = resolveComponent("router-link");
  const _component_Loading = __unplugin_components_1;
  const _component_song_list = SongList;
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("div", _hoisted_5, [
            createVNode(_component_el_image, {
              src: _ctx.details.coverImgUrl
            }, {
              default: withCtx(() => [
                _hoisted_6
              ]),
              _: 1
            }, 8, ["src"])
          ]),
          createBaseVNode("div", _hoisted_7, [
            createBaseVNode("div", _hoisted_8, [
              createBaseVNode("div", _hoisted_9, toDisplayString(_ctx.details.name), 1),
              createBaseVNode("div", _hoisted_10, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.collects, (item) => {
                  return openBlock(), createBlock(_component_router_link, {
                    class: "collect-author",
                    to: {},
                    key: item.userId
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_image, {
                        src: item.avatarUrl
                      }, {
                        default: withCtx(() => [
                          _hoisted_11
                        ]),
                        _: 2
                      }, 1032, ["src"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ])
            ]),
            createBaseVNode("div", _hoisted_12, [
              _ctx.details.creator ? (openBlock(), createElementBlock("div", _hoisted_13, [
                createVNode(_component_el_image, {
                  src: _ctx.details.creator.avatarUrl,
                  class: "cover-avatar"
                }, {
                  default: withCtx(() => [
                    _hoisted_14
                  ]),
                  _: 1
                }, 8, ["src"]),
                createBaseVNode("div", _hoisted_15, toDisplayString(_ctx.details.creator.nickname), 1),
                createBaseVNode("div", _hoisted_16, toDisplayString(_ctx.$utils.formartDate(_ctx.details.createTime, "yyyy-MM-dd")), 1)
              ])) : createCommentVNode("", true),
              _ctx.details.tags ? (openBlock(), createElementBlock("div", _hoisted_17, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.details.tags, (tag, index) => {
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
              ])) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_18, [
              createBaseVNode("span", _hoisted_19, [
                _hoisted_20,
                createTextVNode(" " + toDisplayString(_ctx.$utils.formartNum(_ctx.details.playCount)) + "\u6B21", 1)
              ]),
              createBaseVNode("span", _hoisted_21, [
                _hoisted_22,
                createTextVNode(" " + toDisplayString(_ctx.$utils.formartNum(_ctx.details.subscribedCount)), 1)
              ]),
              createBaseVNode("span", _hoisted_23, [
                _hoisted_24,
                createTextVNode(" " + toDisplayString(_ctx.$utils.formartNum(_ctx.details.commentCount)), 1)
              ])
            ]),
            createBaseVNode("div", _hoisted_25, [
              createBaseVNode("h5", null, [
                _hoisted_26,
                _ctx.isShowDesc ? (openBlock(), createElementBlock("em", {
                  key: 0,
                  class: "desc-close",
                  onClick: _cache[0] || (_cache[0] = ($event) => _ctx.isShowDesc = false)
                }, _hoisted_28)) : createCommentVNode("", true)
              ]),
              createBaseVNode("p", {
                innerHTML: _ctx.details.description,
                onClick: _cache[1] || (_cache[1] = (...args) => $setup.showAllDesc && $setup.showAllDesc(...args))
              }, null, 8, _hoisted_29),
              _ctx.isShowDesc ? (openBlock(), createElementBlock("pre", _hoisted_30, "                                " + toDisplayString(_ctx.details.description) + "\r\n                            ", 1)) : createCommentVNode("", true)
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_31, [
          createBaseVNode("div", _hoisted_32, [
            createBaseVNode("h4", null, [
              _hoisted_33,
              createBaseVNode("em", null, toDisplayString(_ctx.total + "\u9996\u6B4C"), 1)
            ]),
            createBaseVNode("span", {
              class: "play-all",
              onClick: _cache[2] || (_cache[2] = (...args) => $setup.playAllSongs && $setup.playAllSongs(...args))
            }, _hoisted_36),
            createBaseVNode("span", {
              class: normalizeClass(["collect", _ctx.details.subscribed ? "active" : ""]),
              onClick: _cache[3] || (_cache[3] = ($event) => $setup.subPlayList(_ctx.details))
            }, [
              createBaseVNode("i", {
                class: normalizeClass([
                  "iconfont",
                  "icon-collect" + (_ctx.details.subscribed ? "-active" : "")
                ])
              }, null, 2),
              createTextVNode(" " + toDisplayString(_ctx.details.subscribed ? "\u5DF2\u6536\u85CF" : "\u6536\u85CF"), 1)
            ], 2)
          ]),
          _ctx.isLoading ? (openBlock(), createBlock(_component_Loading, { key: 0 })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createVNode(_component_song_list, {
              songList: _ctx.songList,
              stripe: true
            }, null, 8, ["songList"]),
            !$setup.isLogin ? (openBlock(), createElementBlock("div", _hoisted_37, [
              createBaseVNode("span", {
                onClick: _cache[4] || (_cache[4] = (...args) => $setup.loginDialog && $setup.loginDialog(...args))
              }, "\u767B\u5F55\u540E\u67E5\u770B\u5168\u90E8\u6B4C\u66F2")
            ])) : createCommentVNode("", true)
          ], 64))
        ])
      ]),
      createBaseVNode("div", _hoisted_38, [
        _ctx.playlists.length ? (openBlock(), createElementBlock("div", _hoisted_39, [
          _hoisted_40,
          createBaseVNode("div", _hoisted_41, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.playlists, (item) => {
              return openBlock(), createBlock(_component_router_link, {
                class: "recom-item",
                to: { path: "/playlist/detail", query: { id: item.id } },
                key: item.id
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_image, {
                    src: item.coverImgUrl
                  }, {
                    default: withCtx(() => [
                      _hoisted_42
                    ]),
                    _: 2
                  }, 1032, ["src"]),
                  createBaseVNode("div", _hoisted_43, [
                    createBaseVNode("div", _hoisted_44, toDisplayString(item.name), 1),
                    createBaseVNode("div", _hoisted_45, [
                      _hoisted_46,
                      createVNode(_component_router_link, {
                        to: { path: "/user", query: { id: item.creator.userId } }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.creator.nickname), 1)
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ])
                  ])
                ]),
                _: 2
              }, 1032, ["to"]);
            }), 128))
          ])
        ])) : createCommentVNode("", true),
        _ctx.comments.length ? (openBlock(), createElementBlock("div", _hoisted_47, [
          _hoisted_48,
          createBaseVNode("div", _hoisted_49, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.comments, (item) => {
              return openBlock(), createElementBlock("div", {
                class: "comment-item",
                key: item.commentId
              }, [
                createVNode(_component_router_link, {
                  to: { path: "/user", query: { id: item.commentId } }
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_image, {
                      src: item.user.avatarUrl
                    }, {
                      default: withCtx(() => [
                        _hoisted_50
                      ]),
                      _: 2
                    }, 1032, ["src"])
                  ]),
                  _: 2
                }, 1032, ["to"]),
                createBaseVNode("div", _hoisted_51, [
                  createBaseVNode("div", _hoisted_52, [
                    createVNode(_component_router_link, {
                      to: { path: "/user", query: { id: item.commentId } },
                      class: "comment-name"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.user.nickname), 1)
                      ]),
                      _: 2
                    }, 1032, ["to"]),
                    createBaseVNode("span", _hoisted_53, toDisplayString(_ctx.$utils.formatMsgTime(item.time)), 1)
                  ]),
                  createBaseVNode("div", _hoisted_54, toDisplayString(item.content), 1)
                ])
              ]);
            }), 128))
          ])
        ])) : createCommentVNode("", true)
      ])
    ])
  ]);
}
const Detail = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9fb0b57c"]]);
export {
  Detail as default
};
