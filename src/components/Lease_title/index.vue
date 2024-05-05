<!--
 * @Author: your name
 * @Date: 2022-02-25 01:59:49
 * @LastEditTime: 2022-02-26 20:26:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWeekly_zhyq\src\components\lease_title\index.vue
-->
<template>
  <div v-if="!props.right" class="alease_title_left"><slot></slot></div>
  <div v-if="props.right" class="alease_title_right"><slot></slot></div>
</template>

<script lang="ts" setup>
const props = defineProps(["right"]);
</script>
<style lang="scss" scoped>
.alease_title_left,
.alease_title_right {
  position: relative;
  font-family: SJyunhei;
  font-weight: 500;
  color: #ffffff;
  // line-height: 28px;
  @include Width(300);
  z-index: 100;
  // width: 100%;
  @include hHeight(36);
  @include FontSize(16);
  @include LineHeight(28);
  @include LetterSpacing(1);
  @include MarginBottom(5);
}
.alease_title_left {
  @include Padding(3, 0, 0, 30);

  left: 0;
}
.alease_title_right {
  @include Padding(3, 0, 0, 30);
  // @include Right(-45);
  right: 0;
}
.alease_title_left::before {
  position: absolute;

  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  background: url("~@/assets/images/基础框架通用元素切图/二级标题/短.png")
    no-repeat;
  background-size: 100% 100%;
}
.alease_title_right::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  background: url("~@/assets/images/基础框架通用元素切图/二级标题/短.png")
    no-repeat;
  background-size: 100% 100%;
  transform: rotateY(-180deg);
}
</style>
