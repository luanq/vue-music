import { defineStore } from "pinia";
import utils from '@/utils/util'


// 合并歌曲到播放列表查重
const concatPlayList = (list, playList = []) => {
    // filter过滤无版权及vip歌曲
    return utils.concatPlayList(list.filter(item => { return !item.license && !item.vip }), playList)
}
// 当前歌曲在播放列表的索引
const findIndex = (list, playList) => {
    return playList.findIndex(d => { return d.id === list.id })
}


export const useStore = defineStore('main',{
  state: ()=>{
    return{
    isLogin: false,
    loginDialogVisible: false,
    isPlayed: false,
    playList: [],
    userInfo: null,
    playIndex: 0,
    isShowPlayListTips: false,
    }
  },
  getters: {
    getisLogin(){
      return (
        this.isLogin || JSON.parse(window.localStorage.getItem("isLogin"))
      );
    },
    getuserInfo() {
      return (
        this.userInfo ||
        JSON.parse(window.localStorage.getItem("userInfo") || "{}")
      );
    },
    getplayList() {
      return this.playList.length
        ? this.playList
        : JSON.parse(window.localStorage.getItem("playList")) || [];
    },
    getplayIndex() {
      return (
        this.playIndex ||
        JSON.parse(window.localStorage.getItem("playIndex")) ||
        0
      );
    },
  },
  actions:{
    setLogin(val=false){
        this.isLogin=val
    },
    setUserInfo(val){
        this.userInfo=val
    },
    setLoginDialog(val){
        this.loginDialogVisible=val
    },
    setPlayStatus(val=false){
        this.isPlayed=val
    },
    setPlayList(val=null){
        this.playList=val;
        window.localStorage.setItem('playList',JSON.stringify(val))
    },
    setPlayIndex(val=0){
        this.playIndex=val;
        window.localStorage.setItem('playIndex',val)
    },
    setPlayListTips(val=false){
        this.isShowPlayListTips=val
    },
    loginSuc(val){
        this.setLoginDialog(val)
    },
    // 播放歌曲列表里全部歌曲（清空当前播放列表）
    playAll({list}){
        this.setPlayList(concatPlayList(list));
        this.setPlayStatus(true);
        this.setPlayIndex(0)
    },
    //播放当前选中的歌曲
    selectPlay({list}){
        const playList=concatPlayList(list,this.playList);
        this.setPlayList(playList);
        this.setPlayStatus(true);
        //findIndex返回满足条件的第一个索引
        this.setPlayIndex(findIndex(list[0],playList))
    },
    //添加歌曲到当前播放列表
    addList({list}){
        const playList = concatPlayList(list, this.playList)
   
        this.setPlayList(playList);
        this.setPlayListTips(true)
   
    }

  }
});
