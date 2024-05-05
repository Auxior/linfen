<!--
 * @Author: your name
 * @Date: 2022-02-22 22:38:25
 * @LastEditTime: 2022-02-25 04:53:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWeekly_zhyq\src\components\left_box.vue
-->
<!-- left_box -->
<template>
  <transition
    appear
    name="custom-classes-transition"
    enter-active-class="animate__animated animate__faster  animate__fadeInLeft "
    leave-active-class="animate__animated animate__faster animate__fadeOutLeft "
  >
    <div v-if="animate" class="left_box">
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
.left_box {
  position: absolute;
  // width: 350px;
  @include Width(400);
  // height: calc(100% - 60px);
  @include hHeightCalc(65);
  // background: rgba(18, 123, 131, 0.911);
  // top: 30px;
  @include Top(65);
  @include Left(0);
  background: linear-gradient(
    to right,
    #000000d8 0%,
    #000000b6 20%,
    #00000098 40%,
    #00000077 60%,
    #00000054 80%,
    #00000000 100%
  );
  z-index: 100;
//   background: url("../assets/images/home/左侧面板-黑透@2x.png") no-repeat
//     center/cover;
  @include Padding(10, 30, 20, 20);
  .content {
    width: 100%;
    height: 100%;
    // border: 1px solid rgba(255, 255, 255, 0.527);
    box-sizing: border-box;
  }
}
</style>
