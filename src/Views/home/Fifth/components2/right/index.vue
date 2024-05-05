<!--
 * @Author: your name
 * @Date: 2022-02-27 19:37:10
 * @LastEditTime: 2022-02-27 21:56:22
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWeekly_zhyq\src\Views\home\Fifth\components2\right\index.vue
-->
<!--  -->
<!--
 * @Author: your name
 * @Date: 2022-02-24 14:30:47
 * @LastEditTime: 2022-02-27 21:28:11
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWeekly_zhyq\src\Views\home\Fifth\components\Right\index.vue
-->
<template>
  <div class="container">
    <Lease_title> 能耗趋势与排名 </Lease_title>
    <Box :height="210">
      <div class="item-box">
        <h5>耗电统计</h5>
        <V3Echarts
          container="Fifth2echarts1"
          ref="childRef"
          :options="option1"
          :height="210"
          :top="0"
        />
      </div>
    </Box>
    <Box :height="210">
      <div class="item-box">
        <h5>耗水统计</h5>
        <V3Echarts
          container="Fifth2echarts2"
          ref="childRef"
          :options="option2"
          :height="210"
          :top="0"
        />
      </div>
    </Box>
    <Box :height="460">
      <div class="item-box">
        <h5>能耗排名</h5>
        <V3Echarts
          container="Fifth2echarts3"
          ref="childRef"
          :options="option3"
          :height="230"
          :top="0"
        />
        <V3Echarts
          container="Fifth2echarts4"
          ref="childRef"
          :options="option4"
          :height="230"
          :top="0"
        />
      </div>
    </Box>
  </div>
</template>

<script lang="ts" setup>
import Lease_title from "@/components/Lease_title/index.vue";
import Box from "@/components/Box/index.vue";
import V3Echarts from "@/components/V3Echarts/index.vue";
import { option1, option2, option3, option4 } from "../../echartsOpt/index";
</script>
<style lang="scss" scoped>
.item-box {
  margin-bottom: 15px;
  h5 {
    font-family: PingFangSC-Medium;
    font-weight: Medium;
    font-size: 14px;
    @include FontSize(14);

    color: #dbd8ab;
    // letter-spacing: 7.2px;
    width: 100%;
    // padding: 0 120px;
    // line-height: 128px;
    // height: 128px;
    background: url("~@/assets/images/基础框架通用元素切图/三级标题块/长.png")
      no-repeat;
    background-size: 100% 100%;
    @include MarginTop(6);
    @include MarginBottom(6);
    @include Padding(5, 0, 5, 0);

    // margin-top: 36px;
    // margin-bottom: 40px;
  }
}
</style>
