<!--
 * @Author: your name
 * @Date: 2022-02-22 22:38:25
 * @LastEditTime: 2022-02-26 13:03:50
 * @LastEditors: zhc
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWeekly_zhyq\src\components\right_box.vue
-->
<!-- right_box -->
<template>
  <transition
    appear
    name="custom-classes-transition"
    enter-active-class="animate__animated animate__faster  animate__fadeInRight "
    leave-active-class="animate__animated animate__faster animate__fadeOutRight "
  >
    <div v-if="animate" class="right_box">
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { useAnimateStore } from "@/stores/animate";
import { computed } from "vue";

const animatestore = useAnimateStore();
const animate = computed(() => animatestore.$state.Animate);
</script>

<style lang="scss" scoped>
.right_box {
  position: absolute;
  // width: 350px;
  @include Width(400);
  // height: calc(100% - 60px);
  @include hHeightCalc(65);
  // background: rgba(18, 123, 131, 0.911);
  // top: 30px;
  @include Top(65);
  @include Right(0);

  z-index: 100;
  background: linear-gradient(
    to left,
    #000000d8 0%,
    #000000b6 20%,
    #00000098 40%,
    #00000077 60%,
    #00000054 80%,
    #00000000 100%
  );

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    // background: url("../assets/images/home/左侧面板-黑透@2x.png") no-repeat
    //   center/cover;

    // background-origin: 90;
    transform: rotate(180deg);
  }
  @include Padding(10, 20, 20, 30);
  .content {
    width: 100%;
    height: 100%;
    // border: 1px solid rgba(255, 255, 255, 0.527);
  }
}
</style>
