<template>
  <div class="progress" @click.stop="point" ref="progress">
    <div class="progress-line"></div>
    <div class="progress-bg" :style="{ width: progressWidth }">
      <div
        class="progress-btn"
        @mousedown.self.stop="move()"
        v-if="isShowBtn"
      ></div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const emit = defineEmits(["setProgressLine"]);
const props = defineProps({
  progressWidth: {
    type: String,
    default: "0",
  },
  isShowBtn: {
    type: Boolean,
    default: true,
  },
});

const progress = ref(null);
//进度条拖拽
const move = () => {
  document.onmousemove = (e) => {
    setProgressLine(e, false);
  };
  document.onmouseup = function (e) {
    // 拖拽结束时候 设置当前音频时间
    setProgressLine(e);
    document.onmousemove =
      document.onmouseup =
      document.body.onselectstart =
        null;
  };
  return false;
};
//点击音频进度条
const point = (e) => {
  setProgressLine(e);
};

const setProgressLine = (e, flag = true) => {
  const $progress = progress.value;
  //获取鼠标横坐标,若是超过进度条最大宽度，则值为进度条的宽度

  const curProgress = function () {
    if (e.clientX - getOffsetLeft($progress) >= $progress.offsetWidth)
      //MouseEvent.clientX 是只读属性， 它提供事件发生时的应用客户端区域的水平坐标
      return $progress.offsetWidth; //HTMLElement.offsetWidth 是一个只读属性，返回一个元素的布局宽度
    else if (e.clientX - getOffsetLeft($progress) <= 0) return 0;
    else return e.clientX - getOffsetLeft($progress);
  };
  emit("setProgressLine", {
    val: curProgress / $progress.offsetWidth,
    flag: flag,
  });
};
// 获取元素到浏览器左侧距离
const getOffsetLeft = (obj) => {
  let oLeft = obj.offsetLeft;
  let oParent = obj.offsetParent;

  while (oParent !== null) {
    oLeft += oParent.offsetLeft;
    oParent = oParent.offsetParent;
  }

  return oLeft;
};
</script>
<style scoped lang="less">
.progress {
  position: relative;
  width: 100%;
  height: 4px;
  padding: 4px 0;
  border-radius: 2px;
  cursor: pointer;

  .progress-line {
    position: absolute;
    top: 4px;
    left: 0;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background: #eee;
    box-shadow: 0 0 4px #efefef inset;
  }

  .progress-bg {
    position: absolute;
    top: 4px;
    left: 0;
    width: 0;
    height: 4px;
    border-radius: 2px;
    background: -moz-linear-gradient(
      left,
      #ff641e 0%,
      rgba(255, 150, 0, 0.77) 10%,
      rgba(255, 100, 30, 0.8) 50%,
      #ff641e 70%,
      #ff7832 100%
    );
    /* FF3.6-15 */
    background: -webkit-linear-gradient(
      left,
      #ff641e 0%,
      rgba(255, 150, 0, 0.77) 10%,
      rgba(255, 100, 30, 0.8) 50%,
      #ff641e 70%,
      #ff7832 100%
    );
    /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to right,
      #ff641e 0%,
      rgba(255, 150, 0, 0.77) 10%,
      rgba(255, 100, 30, 0.8) 50%,
      #ff641e 70%,
      #ff7832 100%
    );
    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#ff7832', GradientType=1);
    /* IE6-9 */
  }

  .progress-btn {
    position: absolute;
    right: -6px;
    width: 4px;
    height: 4px;
    border: 4px solid var(--color-text-height);
    top: -4.5px;
    background: #fff;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15);
    transition: all 0.3s;
    border-radius: 50%;
    cursor: grab;
  }
}
</style>
