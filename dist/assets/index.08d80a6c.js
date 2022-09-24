import { _ as _export_sfc, x as getCurrentInstance, y as useStore, O as useRoute, z as reactive, i as ref, u as computed, Z as onBeforeRouteUpdate, l as onMounted, A as toRefs, $ as __unplugin_components_0, r as resolveComponent, E as ElImage, o as openBlock, d as createElementBlock, a as createBaseVNode, B as createTextVNode, t as toDisplayString, c as createBlock, w as withCtx, f as createCommentVNode, F as Fragment, e as renderList, b as createVNode, C as normalizeClass, a0 as withModifiers, p as pushScopeId, g as popScopeId } from "./index.b48d8b09.js";
const _imports_0 = "data:image/png;base64,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";
const index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = {
  name: "SongDetail",
  setup() {
    const { proxy } = getCurrentInstance();
    const store = useStore();
    const route = useRoute();
    const info = reactive({
      songInfo: null,
      sId: 0,
      coverDesc: "",
      simiSong: [],
      playlists: [],
      mlogMv: [],
      commentType: 0
    });
    const cBox = ref(null);
    const isLogin = computed(() => store.getisLogin);
    const isPlayed = computed(() => store.isPlayed);
    const playList = computed(() => store.getplayList);
    const playIndex = computed(() => store.getplayIndex);
    const curSongInfo = computed(() => playList.value[playIndex.value]);
    const isCurSong = computed(
      () => isPlayed.value && curSongInfo.value && curSongInfo.value.id === info.sId
    );
    const playFontIcon = computed(
      () => isCurSong.value ? "icon-audio-pause" : "icon-audio-play"
    );
    const songDisable = computed(
      () => info.songInfo.license || info.songInfo.vip ? "disable" : ""
    );
    const getSongDetail = async () => {
      const { data: res } = await proxy.$http.songDetail({
        ids: info.sId,
        timestamp: new Date().valueOf()
      });
      if (res.code !== 200) {
        return proxy.$msg.error("\u6570\u636E\u8BF7\u6C42\u5931\u8D25");
      }
      res.songs[0].license = !res.privileges[0].cp;
      info["songInfo"] = proxy.$utils.formatSongs(res.songs, res.privileges)[0];
      info["coverDesc"] = info["songInfo"].alia.join(" / ");
    };
    const plyaing = (params) => {
      if (!curSongInfo.value || curSongInfo.value.id !== params.id) {
        if (params.license) {
          proxy.$msg.error("\u7531\u4E8E\u7248\u6743\u4FDD\u62A4\uFF0C\u60A8\u6240\u5728\u7684\u5730\u533A\u6682\u65F6\u65E0\u6CD5\u4F7F\u7528\u3002");
          return;
        }
        if (params.vip) {
          proxy.$msg.error("\u4ED8\u8D39\u6B4C\u66F2\uFF0C\u8BF7\u5728\u7F51\u6613\u4E91\u97F3\u4E50\u64AD\u653E");
          return;
        }
        store.selectPlay({ list: [params] });
        store.setPlayListTips(true);
      } else {
        store.setPlayStatus(!isPlayed.value);
      }
    };
    const getSimiSong = async () => {
      const { data: res } = await proxy.$http.simiSong({ id: info.sId });
      if (res.code !== 200) {
        return proxy.$msg.error("\u6570\u636E\u8BF7\u6C42\u5931\u8D25");
      }
      info["simiSong"] = res.songs.map((item) => {
        return {
          id: String(item.id),
          name: item.name,
          mvId: item.mvid,
          singer: item.artists,
          album: item.album,
          alia: item.alias,
          duration: proxy.$utils.formatSongTime(item.duration),
          url: `https://music.163.com/song/media/outer/url?id=${item.id}.mp3`,
          vip: item.fee === 1,
          license: item.license,
          publishTime: item.publishTime
        };
      });
    };
    const playSimiIcon = computed(() => {
      return function(item) {
        return curSongInfo.value && String(item.id) === curSongInfo.value.id && isPlayed.value ? "icon-audio-pause" : "icon-audio-play";
      };
    });
    const getSimiPlayList = async () => {
      const { data: res } = await proxy.$http.simiPlayList({ id: info.sId });
      if (res.code !== 200) {
        return proxy.$msg.error("\u6570\u636E\u8BF7\u6C42\u5931\u8D25");
      }
      info["playlists"] = res.playlists;
    };
    const jumpComment = () => {
      cBox.value.scrollIntoView(true);
    };
    onBeforeRouteUpdate((to) => {
      info["sId"] = to.query.id;
      init();
    });
    onMounted(() => {
      info["sId"] = route.query.id;
      init();
    });
    const init = () => {
      if (info["sId"]) {
        getSongDetail();
        getSimiSong();
        getSimiPlayList();
      }
    };
    return {
      ...toRefs(info),
      getSimiPlayList,
      playSimiIcon,
      playFontIcon,
      songDisable,
      jumpComment,
      isCurSong,
      isLogin,
      plyaing,
      cBox
    };
  },
  components: {
    Lyrics: __unplugin_components_0
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-5e5404f2"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  key: 0,
  class: "song-container"
};
const _hoisted_2 = { class: "song-main" };
const _hoisted_3 = { class: "song-header" };
const _hoisted_4 = { class: "song-l" };
const _hoisted_5 = { class: "song-info" };
const _hoisted_6 = { class: "info-top" };
const _hoisted_7 = { class: "song-name" };
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "iconfont icon-mvlist" }, null, -1));
const _hoisted_9 = {
  key: 1,
  class: "iconfont icon-vip"
};
const _hoisted_10 = { class: "song-related" };
const _hoisted_11 = /* @__PURE__ */ createTextVNode("\u4E13\u8F91\uFF1A");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("\u53D1\u884C\u65F6\u95F4\uFF1A");
const _hoisted_13 = {
  key: 0,
  class: "cover-desc"
};
const _hoisted_14 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h5", null, "\u4E13\u8F91\u7B80\u4ECB", -1));
const _hoisted_15 = { class: "info-bottom" };
const _hoisted_16 = { class: "song-oper" };
const _hoisted_17 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "iconfont icon-collect" }, null, -1));
const _hoisted_18 = /* @__PURE__ */ createTextVNode(" \u6536\u85CF");
const _hoisted_19 = [
  _hoisted_17,
  _hoisted_18
];
const _hoisted_20 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "iconfont icon-comment" }, null, -1));
const _hoisted_21 = /* @__PURE__ */ createTextVNode(" \u8BC4\u8BBA");
const _hoisted_22 = [
  _hoisted_20,
  _hoisted_21
];
const _hoisted_23 = { class: "simi-song" };
const _hoisted_24 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", { class: "aside-title" }, "\u76F8\u4F3C\u6B4C\u66F2", -1));
const _hoisted_25 = { class: "simi-main" };
const _hoisted_26 = { class: "simi-info" };
const _hoisted_27 = { class: "simi-author" };
const _hoisted_28 = { class: "simi-song-status" };
const _hoisted_29 = {
  key: 0,
  class: "iconfont icon-vip"
};
const _hoisted_30 = ["onClick"];
const _hoisted_31 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  class: "iconfont icon-add",
  title: "\u6DFB\u52A0\u5230\u5217\u8868"
}, null, -1));
const _hoisted_32 = { class: "song-lyric" };
const _hoisted_33 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h5", null, "\u6B4C\u8BCD", -1));
const _hoisted_34 = { class: "aside-box" };
const _hoisted_35 = { class: "cover" };
const _hoisted_36 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("em", { class: "lt" }, null, -1));
const _hoisted_37 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("em", { class: "rt" }, null, -1));
const _hoisted_38 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("em", { class: "rb" }, null, -1));
const _hoisted_39 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("em", { class: "lb" }, null, -1));
const _hoisted_40 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0,
  class: "cover-stylus"
}, null, -1));
const _hoisted_41 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", {
  slot: "placeholder",
  class: "image-slot"
}, [
  /* @__PURE__ */ createBaseVNode("i", { class: "iconfont icon-placeholder" })
], -1));
const _hoisted_42 = {
  key: 0,
  class: "sidebar-box playlist-simi"
};
const _hoisted_43 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", { class: "aside-title" }, "\u5305\u542B\u8FD9\u9996\u6B4C\u7684\u6B4C\u5355", -1));
const _hoisted_44 = { class: "aside-main playlist-main" };
const _hoisted_45 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", {
  slot: "placeholder",
  class: "image-slot"
}, [
  /* @__PURE__ */ createBaseVNode("i", { class: "iconfont icon-placeholder" })
], -1));
const _hoisted_46 = { class: "playlist-info" };
const _hoisted_47 = { class: "playlist-name" };
const _hoisted_48 = { class: "playlist-author" };
const _hoisted_49 = /* @__PURE__ */ createTextVNode(" By. ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_Lyrics = __unplugin_components_0;
  const _component_el_image = ElImage;
  return _ctx.songInfo ? (openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("div", _hoisted_6, [
              createBaseVNode("h3", _hoisted_7, [
                createTextVNode(toDisplayString(_ctx.songInfo.name) + " ", 1),
                _ctx.songInfo.mvId ? (openBlock(), createBlock(_component_router_link, {
                  key: 0,
                  class: "mv-name",
                  to: { path: "/mvlist/mv", query: { id: _ctx.songInfo.mvId } }
                }, {
                  default: withCtx(() => [
                    _hoisted_8
                  ]),
                  _: 1
                }, 8, ["to"])) : createCommentVNode("", true),
                _ctx.songInfo.vip ? (openBlock(), createElementBlock("i", _hoisted_9)) : createCommentVNode("", true)
              ]),
              createBaseVNode("p", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.songInfo.singer, (author, k) => {
                  return openBlock(), createBlock(_component_router_link, {
                    to: {},
                    class: "song-author",
                    key: author.name
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(k !== 0 ? " / " + author.name : author.name), 1)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ]),
              createBaseVNode("p", _hoisted_10, [
                createBaseVNode("span", null, [
                  _hoisted_11,
                  createVNode(_component_router_link, {
                    class: "song-album",
                    to: { path: "/album", query: { id: _ctx.songInfo.album.id } }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.songInfo.album.name), 1)
                    ]),
                    _: 1
                  }, 8, ["to"])
                ]),
                createBaseVNode("span", null, [
                  _hoisted_12,
                  createBaseVNode("em", null, toDisplayString(_ctx.songInfo.publishTime), 1)
                ])
              ]),
              _ctx.coverDesc ? (openBlock(), createElementBlock("div", _hoisted_13, [
                _hoisted_14,
                createBaseVNode("p", null, toDisplayString(_ctx.coverDesc), 1)
              ])) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_15, [
              createBaseVNode("div", _hoisted_16, [
                createBaseVNode("span", {
                  class: normalizeClass(["play-btn", "play-all", $setup.songDisable]),
                  onClick: _cache[0] || (_cache[0] = ($event) => $setup.plyaing(_ctx.songInfo))
                }, [
                  createBaseVNode("i", {
                    class: normalizeClass(["iconfont", $setup.playFontIcon])
                  }, null, 2),
                  createTextVNode(" " + toDisplayString(_ctx.songInfo.vip ? "VIP\u5C0A\u4EAB" : "\u7ACB\u5373\u64AD\u653E"), 1)
                ], 2),
                createBaseVNode("span", {
                  class: "play-btn play-collect",
                  onClick: _cache[1] || (_cache[1] = (...args) => _ctx.showAddList && _ctx.showAddList(...args))
                }, _hoisted_19),
                createBaseVNode("span", {
                  class: "play-btn play-comment",
                  onClick: _cache[2] || (_cache[2] = (...args) => $setup.jumpComment && $setup.jumpComment(...args))
                }, _hoisted_22)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_23, [
            _hoisted_24,
            createBaseVNode("div", _hoisted_25, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.simiSong, (simiItem) => {
                return openBlock(), createElementBlock("div", {
                  class: "simi-item",
                  key: simiItem.id
                }, [
                  createBaseVNode("div", _hoisted_26, [
                    createVNode(_component_router_link, {
                      class: "simi-name",
                      to: { path: "/song", query: { id: simiItem.id } }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(simiItem.name), 1)
                      ]),
                      _: 2
                    }, 1032, ["to"]),
                    createBaseVNode("div", _hoisted_27, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(simiItem.singer, (author, k) => {
                        return openBlock(), createBlock(_component_router_link, {
                          to: {},
                          class: "song-author",
                          key: author.name
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(k !== 0 ? " / " + author.name : author.name), 1)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_28, [
                    simiItem.vip ? (openBlock(), createElementBlock("i", _hoisted_29)) : (openBlock(), createElementBlock("i", {
                      key: 1,
                      onClick: ($event) => $setup.plyaing(simiItem),
                      class: normalizeClass(["iconfont", $setup.playSimiIcon(simiItem)])
                    }, null, 10, _hoisted_30)),
                    _hoisted_31
                  ])
                ]);
              }), 128))
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_32, [
          _hoisted_33,
          createVNode(_component_Lyrics, {
            sId: _ctx.sId,
            maxH: "530"
          }, null, 8, ["sId"])
        ])
      ])
    ]),
    createBaseVNode("div", _hoisted_34, [
      createBaseVNode("div", _hoisted_35, [
        _hoisted_36,
        _hoisted_37,
        _hoisted_38,
        _hoisted_39,
        createBaseVNode("div", {
          class: normalizeClass(["cover-img", [$setup.isCurSong ? "active" : ""]]),
          onClick: _cache[3] || (_cache[3] = withModifiers(($event) => $setup.plyaing(_ctx.songInfo), ["stop"]))
        }, [
          _hoisted_40,
          createVNode(_component_el_image, {
            src: _ctx.songInfo.album.picUrl
          }, {
            default: withCtx(() => [
              _hoisted_41
            ]),
            _: 1
          }, 8, ["src"])
        ], 2)
      ]),
      _ctx.playlists.length ? (openBlock(), createElementBlock("div", _hoisted_42, [
        _hoisted_43,
        createBaseVNode("div", _hoisted_44, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.playlists, (item) => {
            return openBlock(), createBlock(_component_router_link, {
              class: "playlist-item",
              to: { path: "/playlist/detail", query: { id: item.id } },
              key: item.id
            }, {
              default: withCtx(() => [
                createVNode(_component_el_image, {
                  src: item.coverImgUrl
                }, {
                  default: withCtx(() => [
                    _hoisted_45
                  ]),
                  _: 2
                }, 1032, ["src"]),
                createBaseVNode("div", _hoisted_46, [
                  createBaseVNode("div", _hoisted_47, toDisplayString(item.name), 1),
                  createBaseVNode("div", _hoisted_48, [
                    _hoisted_49,
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
      ])) : createCommentVNode("", true)
    ])
  ])) : createCommentVNode("", true);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5e5404f2"]]);
export {
  index as default
};
