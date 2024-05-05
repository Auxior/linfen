<template>
  <!-- <transition
    appear
    name="custom-classes-transition"
    enter-active-class="animate__animated animate__faster  animate__fadeInRight "
    leave-active-class="animate__animated animate__faster animate__fadeOutRight "
  > -->
  <div
    v-drag
    class="preViewBox"
    v-if="visible"
    :style="{
      left: XY[0] + 'px',
      top: XY[1] + 'px',
    }"
  >
    <div class="header">
      <div class="title">{{ title }}</div>
      <Icon
        class="close"
        icon="guanbi"
        fontSize="22"
        color="white"
        @click="close"
        @mousedown.stop
      />
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
  <!-- </transition> -->
</template>

<script lang="ts" setup>
import { computed, defineEmits } from "vue";
const emit = defineEmits(["close"]);
const props = defineProps({
  width: {
    type: Number,
    default: 200,
  },
  height: {
    type: Number,
    default: 140,
  },
  title: {
    type: String,
    default: "详细信息",
  },
  visible: {
    type: Boolean,
    default: false,
  },
  XY: {
    type: Array,
    default: () => [500, 400],
  },
});
import { useDialogStore } from "@/stores/dialog";
const contentSize = computed(() => ({
  width: props.width - 15,
  height: props.height - 15 - 68,
}));

const close = () => {
  emit("close");
};
</script>

<style lang="scss" scoped>
.preViewBox {
  // border: 1px solid #ccc;
  position: fixed;
  left: 50%;
  top: 50%;
  // transform: translate(-50%, -50%);
  @include boxWidth(v-bind("props.width"));
  @include boxhHeight(v-bind("props.height"));
  z-index: 99;

  background: url(~@/assets/images/弹框@2x.png);
  background-size: 100% 100%;
  transition: all 0.3s;
  overflow: hidden;
  .header {
    position: absolute;
    @include Left(0);
    @include Top(0);
    width: 100%;
    // @include wHeight(40);
    // border-bottom: 1px #ccc solid;

    .title {
      @include wHeight(68);
      @include LineHeight(80);
      @include FontSize(16);
      @include PaddingLeft(20);
    }
    .close {
      position: absolute;
      @include Right(10);
      // top: %;
      // transform: translateY(-50%);
      cursor: pointer;
      top: 41%;
      &:hover {
        // color: #79bbff;
      }
    }
  }
  i {
    @include FontSize(25);
    color: #fff;
    position: absolute;
    cursor: pointer;
  }
  .content {
    position: absolute;
    left: 50%;
    @include Top(67);
    transform: translateX(-50%);
    @include boxWidth(v-bind("contentSize.width"));
    @include boxhHeight(v-bind("contentSize.height"));
    // transition: height 0.5s;
  }
}

.secondTitle {
  font-family: PingFangSC-Medium;
  font-weight: Medium;
  @include FontSize(14);
  color: #dbd8ab;
  width: 100%;
  background: url("~@/assets/images/基础框架通用元素切图/三级标题块/长.png")
    no-repeat;
  background-size: 100% 100%;
  @include Margin(6, 0, 6, 0);
  @include Padding(5, 0, 5, 10);
}
</style>
