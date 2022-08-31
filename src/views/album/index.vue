<template>
  <div class="album" v-if="details">
    <div class="detail-container">
      <div class="detail-main">
        <div class="album-cover">
          <div class="album-img">
            <el-image :src="details.picUrl">
              <div slot="placeholder" class="image-slot">
                <i class="iconfont icon-placeholder"></i>
              </div>
            </el-image>
          </div>
          <div class="album-info">
            <div class="album-title">
              {{ details.name }}
              <span>{{ "#" + details.type }}</span>
            </div>
            <div class="album-singer">
              歌手：<router-link
                :to="{ path: '/singer', query: { id: author.id } }"
                class="song_name"
                v-for="(author, k) in details.artists"
                :key="author.name"
                >{{ k !== 0 ? " / " + author.name : author.name }}</router-link
              >
            </div>
            <div class="album-time">
              发行时间：{{
                $utils.formartDate(details.publishTime, "yyyy-MM-dd")
              }}
            </div>
            <div class="album-company">发行公司：{{ details.company }}</div>
            <div class="album-desc" v-if="details.description">
              <h5>
                歌单简介<em
                  class="desc-close"
                  v-if="isShowDesc"
                  @click="isShowDesc = false"
                  ><i class="iconfont icon-closed"></i
                ></em>
              </h5>
              <p @click="showAllDesc">{{ details.description }}</p>
              <pre class="album-desc-all" v-if="isShowDesc">
                                {{ details.description }}
                            </pre
              >
            </div>
          </div>
        </div>
        <div class="song-main">
          <div class="song-header">
            <h4>
              包含歌曲列表 <em>{{ details.size + "首歌" }}</em>
            </h4>
            <span class="play-all" @click="playAllSongs"
              ><i class="iconfont icon-audio-play"></i> 播放全部</span
            >
            <span
              :class="['collect', dynamic.isSub ? 'active' : '']"
              @click="subAlbum"
              ><i
                :class="[
                  'iconfont',
                  'icon-collect' + (dynamic.isSub ? '-active' : ''),
                ]"
              ></i>
              {{ dynamic.isSub ? "已收藏" : "收藏" }}</span
            >
          </div>
          <SongList :songList="songList" :stripe="true"></SongList>
        </div>
      </div>
      <div class="aside-box">
        <div class="album-aside album-other">
          <h3 class="aside-title">
            {{ details.artists[0].name }}的其他专辑<router-link
              :to="{
                path: '/singer',
                query: { id: details.artists[0].id, type: 'album' },
              }"
              class="album-more"
              >全部>></router-link
            >
          </h3>
          <div class="aside-main aside-album-main">
            <router-link
              class="aside-album-item"
              :to="{ path: '/album', query: { id: item.id } }"
              v-for="item in hotAlbums"
              :key="item.id"
            >
              <el-image :src="item.picUrl">
                <div slot="placeholder" class="image-slot">
                  <i class="iconfont icon-placeholder"></i>
                </div>
              </el-image>
              <div class="aside-album-info">
                <div class="aside-album-name">{{ item.name }}</div>
                <div class="aside-album-time">
                  {{ $utils.formartDate(details.publishTime, "yyyy-MM-dd") }}
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import SongList from "@components/SongList.vue";
import { getCurrentInstance, onMounted, reactive, toRefs } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { useStore } from "@/store/index";

const { proxy } = getCurrentInstance();
const store = useStore();
const route = useRoute;
const info = reactive({
  albumId: "",
  details: null,
  songList: [],
  dynamic: {},
  hotAlbums: [],
  type: 3, // 0: 歌曲 1: mv 2: 歌单 3: 专辑  4: 电台 5: 视频 6: 动态
  isShowDesc: false,
  collects: [],
});

//相关歌单推荐
const getAlbum = async (params) => {
  const { data: res } = await proxy.$http.album(params);

  if (res.code !== 20) return proxy.$msg.error("数据请求失败");

  info.details = res.album;
  const privileges = [];
  res.songs.forEach((item) => {
    privileges.push(item.privileges);
  });
  info.songList = proxy.$utils.formatSongs(re.songs, privileges);
  getArtistAlbum();
};

const getAlbumDynamic = async (params) => {
  const { data: res } = await proxy.$http.albumDynamic(params);
  if (res.code !== 200) {
    return proxy.$msg.error("请求失败");
  }
  info.dynamic = res;
};
const getArtistAlbum = () => async () => {
  const { data: res } = await proxy.$http.artistAlbum({
    id: info.details.artists[0].id,
    limit: 5,
  });
  if (res.code !== 200) {
    return proxy.$msg.error("请求失败");
  }
  info.hotAlbums = res.hotAlbums;
};

//专辑简介查看更多
const showAllDesc = () => {
  if (info.details.description.length > 120) {
    info.isShowDesc = !info.isShowDesc;
  }
};

const playAllSongs = () => {
  store.playAll({ list: info.songList });
  store.setPlatListTips(true);
};

const subAlbum = async () => {
  const { data: res } = await proxy.$http.albumSub({
    id: info.albumId,
    t: Number(!info.dynamic.isSub),
  });

  if (res.code !== 200) {
    return proxy.$msg.error("数据请求失败");
  }
  info.dynamic.isSub = Number(!info.dynamic.isSub);
};

// 订阅该歌单的用户列表
const getCollect = async (params) => {
  const { data: res } = await proxy.$http.playlistSCollect(params);

  if (res.code !== 200) {
    return proxy.$msg.error("数据请求失败");
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
</script>
