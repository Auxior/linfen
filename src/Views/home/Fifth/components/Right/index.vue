<!--
 * @Author: your name
 * @Date: 2022-02-24 14:30:47
 * @LastEditTime: 2022-02-27 22:29:10
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWeekly_zhyq\src\Views\home\Fifth\components\Right\index.vue
-->
<template>
  <Lease_title> 现存告警 </Lease_title>
  <Box :height="170">
    <div class="conent">
      <div class="conentlist" v-for="item in Alarm" :key="item.name">
        <div class="num">
          <V3count
            class="value"
            :startVal="0"
            :endVal="item.data"
            :duration="3000"
          ></V3count>
          <!-- <span>{{ item.data }}</span> -->
        </div>
        <div class="name">
          <span>
            {{ item.name }}
          </span>
        </div>
      </div>
    </div>
    <div class="xiangying">
      <div class="top">
        <div class="left">
          <span> 已响应 </span>
        </div>
        <div class="right">
          <span> {{ Y }} </span>
          <span> 个 </span>
        </div>
      </div>
      <div class="bottom">
        <div class="left">
          <span> 未响应 </span>
        </div>
        <div class="right">
          <span> {{ N }} </span>
          <span> 个 </span>
        </div>
      </div>
    </div>
  </Box>
  <Lease_title> 告警列表 </Lease_title>
  <Box :height="320">
    <div class="part list">
      <div class="list-header">
        <span>序号</span>
        <span>设备名称</span>
        <span>处理状态</span>
      </div>
      <div class="line"></div>
      <ul>
        <Vue3SeamlessScroll :list="list" :hover="true" :step="0.1">
          <li v-for="i in list" :key="i.id">
            <span>{{ i.id }}</span>
            <span style="color: #ffc622">{{ i.name }}</span>
            <span v-if="i.id % 2 !== 0" style="color: #ec7585">未响应</span>
            <span v-else style="color: #00d2ba">已响应</span>
          </li>
        </Vue3SeamlessScroll>
      </ul>
    </div>
  </Box>
  <Lease_title> 告警分布 </Lease_title>
  <Box :height="300">
    <V3Echarts
      container="Fifth1echarts1"
      ref="childRef"
      :options="option5"
      :height="300"
      :top="0"
    />
  </Box>
</template>

<script lang="ts" setup>
import Lease_title from "@/components/Lease_title/index.vue";
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";

import Box from "@/components/Box/index.vue";
import V3Echarts from "@/components/V3Echarts/index.vue";
import { option5 } from "../../echartsOpt";
import { ref } from "vue";
let shui = ref(12);
let dian = ref(8);
let Y = ref(18);
let N = ref(2);
const Alarm = ref([
  {
    data: shui.value + dian.value,
    name: "当前报警(个)",
  },
  {
    data: shui.value,
    name: "水表告警(个)",
  },
  {
    data: dian.value,
    name: "电表告警(个)",
  },
]);
const list = ref([
  {
    id: 1,
    name: "水表-A001",
    location: "生态园二区/9栋A座负3层/空调主机房",
  },
  {
    id: 2,
    name: "电表-A001",
    location: "生态园二区/9栋A座天面",
  },
  {
    id: 3,
    name: "水表-A001",
    location: "生态园二区/9栋B1座负3层/空调主机房",
  },
  {
    id: 4,
    name: "电表-A001",
    location: "生态园三区/11栋A座负3层/空调主机房",
  },
  {
    id: 5,
    name: "水表-A001",
    location: "生态园四区/12栋B座负3层/空调主机房",
  },
  {
    id: 6,
    name: "水表-A001",
    location: "生态园一区/1栋D座负1层/空调主机房",
  },
  {
    id: 7,
    name: "水表-A001",
    location: "生态园二区/9栋A座天面",
  },
  {
    id: 8,
    name: "水表-A001",
    location: "生态园二区/9栋B1座负3层/空调主机房",
  },
]);
</script>
<style lang="scss" scoped>
.conent {
  display: flex;
  justify-content: space-around;
  align-items: center;
  .conentlist {
    @include Width(100);

    @include hHeight(70);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .num {
      color: #f6c84c;
      @include FontSize(22);
      font-family: SJyunhei;
      font-weight: 600;
      @include MarginBottom(6);
    }
  }
}
.xiangying {
  .top,
  .bottom {
    width: 100%;
    @include hHeight(50);
    display: flex;
    @include Padding(0, 60, 0, 20);

    justify-content: space-between;
    align-items: center;
    position: relative;
    .right {
      span:nth-of-type(1) {
        @include FontSize(18);
      }
    }
    &::before {
      content: "";
      position: absolute;
      width: 35%;
      left: 0;
      right: 0;
      margin: auto;
      @include hHeight(1);
      // background: rgb(233, 230, 230);
      border: 1px dashed #fff;
    }
  }
  .bottom {
    .left {
      color: #f6574d;
    }
  }
}
.list-header {
  width: 100%;
  @include wHeight(40);
  background: rgba(58, 72, 85, 0.4);
  @include BorderRadius(2);
  @include MarginTop(2);
  opacity: 0.7;
  font-family: PingFangSC-Regular;
  font-weight: Regular;
  @include FontSize(14);
  color: #ffffff;
  @include LetterSpacing(1);
  display: flex;
  align-items: center;
  span {
    text-align: center;
  }
  span:nth-child(1) {
    @include Width(100);
  }
  span:nth-child(2) {
    @include Width(120);
  }
  span:nth-child(3) {
    @include Width(120);
  }
  span:nth-child(4) {
    @include Width(120);
  }
  span:nth-child(5) {
    flex: 1;
  }
}
.line {
  width: 100%;
  @include wHeight(1);
  opacity: 0.5;
  background: #ffffff;
  @include MarginRight(108);
}
ul {
  width: 100%;
  @include MarginRight(108);
  @include wHeight(370);
  overflow-y: hidden;
  li {
    display: flex;
    align-items: center;
    @include wHeight(40);
    font-family: PingFangSC-Medium;
    font-weight: Medium;
    @include FontSize(12);
    color: #ffffff;
    @include LetterSpacing(1);
    &:nth-child(even) {
      @include wHeight(40);
      background: rgba(62, 104, 172, 0.15);
      @include BorderRadius(2);
    }
    span {
      text-align: center;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    span:nth-child(1) {
      @include Width(100);
    }
    span:nth-child(2) {
      @include Width(120);
    }
    span:nth-child(3) {
      @include Width(120);
    }
    span:nth-child(4) {
      @include Width(120);
    }
    span:nth-child(5) {
      flex: 1;
    }
  }
}
</style>
