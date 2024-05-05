<!--
 * @Author: your name
 * @Date: 2022-02-22 21:20:33
 * @LastEditTime: 2022-02-23 11:57:03
 * @LastEditors: zhc
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWeekly_zhyq\src\Views\home\Sixth\index.vue
-->
<!-- Sixth 第六个页面（名称）-->
<template>
  <div class="Sixth">
    <Left_box><Left /> </Left_box>
    <Right_box><Right /></Right_box>
  </div>
</template>

<script lang="ts" setup>
import Left_box from "@/components/left_box.vue";
import Right_box from "@/components/right_box.vue";
import Right from "./components/Right/index.vue";
import Left from "./components/Left/index.vue";
</script>
<style lang="scss" scoped></style>
