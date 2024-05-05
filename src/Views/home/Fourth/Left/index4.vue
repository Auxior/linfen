<template>
  <div class="wrap">
    <div class="item-box">
      <div class="lease_title">统计数据</div>
      <h5>设备数量</h5>
      <div class="access">
        <div class="access-info">
          <div class="access-info__item">
            <V3count
              class="access-info__value"
              :startVal="0"
              :endVal="339"
              :duration="3000"
            ></V3count>
            <span>总数 (个)</span>
          </div>
          <div class="access-info__item">
            <V3count
              class="access-info__value"
              :startVal="0"
              :endVal="206"
              :duration="3000"
            ></V3count>
            <span>闸机 (台)</span>
          </div>
          <div class="access-info__item">
            <V3count
              class="access-info__value"
              :startVal="0"
              :endVal="133"
              :duration="3000"
            ></V3count>
            <span>人脸 (台)</span>
          </div>
        </div>
      </div>
    </div>
    <div class="item-box">
      <!-- <div class="lease_title">当日客流</div> -->
      <h5>当日客流</h5>
      <div class="traffic-info">
        <div class="traffic-info__item">
          <V3count
            class="traffic-info__value"
            style="color: #2d98ff"
            :startVal="0"
            :endVal="10600"
            :duration="3000"
          ></V3count>
          <!-- <div class="traffic-info__value" style="color: #2d98ff">10600</div> -->
          <span>员工(次)</span>
        </div>
        <div class="traffic-info__line"></div>
        <div class="traffic-info__item">
          <V3count
            class="traffic-info__value"
            :startVal="0"
            :endVal="114"
            :duration="3000"
          ></V3count>
          <!-- <div class="traffic-info__value">114</div> -->
          <span>访客(次)</span>
        </div>
      </div>
    </div>
    <div class="item-box">
      <div class="lease_title">园区客流趋势</div>
      <V3Echarts
        :height="220"
        :options="options"
        container="container1"
      ></V3Echarts>
    </div>

    <div class="item-box">
      <div class="lease_title">通行情况</div>
      <div class="operating-table">
        <div class="operating-table-header">
          <!-- <span>楼号</span> -->
          <span>姓名</span>
          <span>通行时间</span>
        </div>
        <div class="line"></div>

        <ul>
          <Vue3SeamlessScroll :list="operatingTable" :hover="true" :step="0.1">
            <li
              v-for="(i, index) in operatingTable"
              :key="i.id"
              class=""
              :style="
                index % 2 === 0 ? `background: rgba(62, 104, 172, 0.15);` : ''
              "
            >
              <span>{{ i.num }}</span>
              <span style="color: #ffc622">{{ i.operation }}</span>
              <span></span>
            </li>
          </Vue3SeamlessScroll>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import * as echarts from "echarts";
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
import { onMounted, ref, onBeforeUnmount, reactive } from "vue";
import {
  PIE_TOOLTIP,
  LINE_TOOLTIP,
  AXIS_LABEL,
  YAXIS_NAME,
  XAXIS_NAME,
  LEGEND,
} from "@/utils/chartConfig";
import V3Echarts from "@/components/V3Echarts/index.vue";
// 滚动列表
let operatingTable = ref([
  {
    id: 1,
    num: "张**",
    operation: "2022-01-04 15:22:13",
  },
  {
    id: 2,
    num: "孟**",
    operation: "2022-01-04 16:53:24",
  },
  {
    id: 3,
    num: "赵**",
    operation: "2022-01-04 17:02:53",
  },
  {
    id: 4,
    num: "郑**",
    operation: "2022-01-04 17:22:45",
  },
  {
    id: 5,
    num: "严**",
    operation: "2022-01-04 17:25:14",
  },
  {
    id: 6,
    num: "林**",
    operation: "2022-01-04 17:32:17",
  },
  {
    id: 7,
    num: "孔**",
    operation: "2022-01-04 17:58:45",
  },
  {
    id: 8,
    num: "蒋**",
    operation: "2022-01-04 18:12:42",
  },
]);
// echarts配置
let options = ref({
  tooltip: LINE_TOOLTIP,
  legend: {
    icon: "rect",
    itemWidth: 12,
    itemHeight: 12,
    itemGap: 15,
    left: "right",
    top: "0%",
    textStyle: LEGEND,
    data: [
      {
        name: "员工",
        icon: "rect",
        itemStyle: {
          color: "rgba(45, 152, 255, 1)",
        },
      },
      {
        name: "访客",
        icon: "rect",
        itemStyle: {
          color: "rgb(240,174,64)",
        },
      },
    ],
  },
  grid: {
    top: "25%",
    left: "0%",
    right: "0%",
    bottom: "0%",
    containLabel: true,
  },
  dataZoom: {
    start: 5,
    end: 80,
    type: "inside",
  },
  xAxis: {
    type: "category",
    data: [
      "09点",
      "10点",
      "11点",
      "12点",
      "13点",
      "14点",
      "15点",
      "16点",
      "17点",
      "18点",
      "19点",
    ],
    axisLabel: AXIS_LABEL,
    nameTextStyle: XAXIS_NAME,
    axisLine: {
      show: true,
    },
    splitLine: {
      //网格线
      lineStyle: {
        color: "#6e717e",
        type: "dotted", //设置网格线类型 dotted：虚线   solid:实线
      },
      show: false, //隐藏或显示
    },
  },
  yAxis: {
    type: "value",
    name: "(人)",
    offset: -5,
    // max: 8000,
    axisLine: {
      show: true,
    },
    axisLabel: AXIS_LABEL,
    // data:[100,200,300,400],
    nameTextStyle: YAXIS_NAME,
    splitLine: {
      //网格线
      lineStyle: {
        color: "#6e717e",
        type: "dotted", //设置网格线类型 dotted：虚线   solid:实线
      },
      show: false, //隐藏或显示
    },
  },
  series: [
    {
      name: "员工",
      type: "line",
      data: [200, 350, 300, 350, 400, 500, 340, 460, 510, 450, 650],
      smooth: true,
      symbol: "none",
      lineStyle: {
        color: "#2D98FF",
        width: "1",
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0.5, color: "rgba(45, 152, 255, 0.2)" }, // 0% 处的颜色
            { offset: 1, color: " RGB(36,46,70)" },
          ]),
        },
      },
      markPoint: {
        symbol: "circle",
        symbolSize: 0,
        itemStyle: {
          color: "#fff",
        },
        label: {
          show: false,
        },
        data: [
          {
            type: "max",
            name: "最大值",
          },
          {
            type: "min",
            name: "最小值",
          },
        ],
      },
    },
    {
      name: "访客",
      type: "line",
      data: [15, 25, 84, 145, 152, 84, 45, 29, 78, 48, 16],
      smooth: true,
      symbol: "none",
      lineStyle: {
        color: "rgb(240,174,64)",
        width: "1",
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0.5, color: "rgba(240,174,64, 0.2)" }, // 0% 处的颜色
            { offset: 1, color: " RGB(240,174,64,0)" },
          ]),
        },
      },
      markPoint: {
        symbol: "circle",
        symbolSize: 0,
        itemStyle: {
          color: "#fff",
        },
        label: {
          show: false,
        },
        data: [
          {
            type: "max",
            name: "最大值",
          },
          {
            type: "min",
            name: "最小值",
          },
        ],
      },
    },
  ],
});
</script>
<style lang="scss" scoped>
.item-box {
  // margin-bottom: 10%;
  @include MarginBottom(30);
  h5 {
    font-family: PingFangSC-Medium;
    font-weight: Medium;
    // font-size: 14px;
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
    // margin: 6px 0;
    // padding: 5px 0;
    @include Margin(6, 0, 6, 0);
    @include Padding(5, 0, 5, 10);
    // margin-top: 36px;
    // margin-bottom: 40px;
  }
}
// 闸机 人数 统计
.access {
  // height: 75px;
  @include hHeight(75);
  p {
    display: flex;
    justify-content: space-between;
    color: rgba(255, 255, 255, 1);
    // font-size: 20px;
    @include FontSize(20);
    font-weight: 500;
    font-family: "PingFang SC";
    text-align: left;
    // letter-spacing: 1px;
    @include LetterSpacing(1);
    // padding: 0 10px 8px;
    @include Padding(0, 10, 8, 10);
    border-bottom: 1px solid rgba($color: #fff, $alpha: 0.6);

    // margin-bottom: 6px;
    @include MarginBottom(6);
    span span {
      // font-size: 16px;
      @include FontSize(16);
      font-weight: 500;
      color: rgba($color: #fff, $alpha: 0.6);
    }
  }
  .access-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    // padding: 15px 20px;
    @include Padding(15, 20, 15, 20);
    &__item {
      text-align: center;
      span {
        color: rgba(255, 255, 255, 1);
        // font-size: 18px;
        @include FontSize(14);

        font-weight: 500;
        font-family: "PingFang SC";
        text-align: center;
        // letter-spacing: 2.67px;
        @include LetterSpacing(2.67);
      }
    }
    .access-info__value {
      color: rgba(246, 200, 76, 1);
      @include FontSize(24);
      font-weight: 400;
      font-family: "SJyunhei";
      text-align: center;
      @include LetterSpacing(1);
      @include MarginBottom(5);
      display: block;
    }
  }
}
// 滚动列表
.operating-table {
  height: auto;
  /* background: red; */
  &-header {
    width: 100%;
    // height: 28px;
    @include hHeight(28);
    background: rgba(58, 72, 85, 0.4);
    // border-radius: 2px;
    @include BorderRadius(2);

    // margin: 10px 20px 0 auto;
    @include Margin(10, 20, 0, 0);
    opacity: 0.7;
    font-family: PingFangSC-Regular;
    font-weight: Regular;
    // font-size: 16px;
    @include FontSize(16);
    color: #ffffff;
    // letter-spacing: 1px;
    @include LetterSpacing(1);
    display: flex;
    align-items: center;
    span {
      text-align: center;
    }
    span:nth-child(1) {
      // width: 100px;
      @include Width(100);
    }
    span:nth-child(2) {
      flex: 1;
    }
  }
  .line {
    width: 100%;
    // height: 1px;
    @include hHeight(1);

    opacity: 0.5;
    background: #ffffff;
    // margin: 0 108px 0 auto;
    @include MarginRight(108);
  }
  ul {
    width: 100%;
    // margin: 0 20px 0 auto;
    @include MarginRight(20);
    // height: 180px;
    @include hHeight(250);

    overflow-y: hidden;
    li {
      display: flex;
      align-items: center;
      // height: 40px;
      @include hHeight(34);
      font-family: PingFangSC-Medium;
      font-weight: Medium;
      // font-size: 14px;
      @include FontSize(14);
      color: #ffffff;
      // letter-spacing: 1px;
      @include LetterSpacing(1);
      cursor: pointer;
      // &:nth-child(even) {
      //   // height: 20px;
      //   // @include hHeight(20);
      //   background: rgba(62, 104, 172, 0.15);
      //   // border-radius: 2px;
      //   @include BorderRadius(2);
      // }
      span {
        text-align: center;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      span:nth-child(1) {
        // width: 80px;
        @include Width(100);
      }
      span:nth-child(2) {
        flex: 1;
      }
    }
  }
}

// 访客人数 员工人数
.traffic-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  // padding: 10px 40px;
  @include Padding(10, 40, 10, 40);
  &__item {
    text-align: center;
    span {
      color: rgba(255, 255, 255, 1);
      // font-size: 16px;
      @include FontSize(16);
      font-weight: 500;
      font-family: "PingFang SC";
      text-align: center;
      // letter-spacing: 1px;
      @include LetterSpacing(1);
    }
  }
  &__value {
    color: rgba(246, 200, 76, 1);
    // font-size: 25px;
    @include FontSize(25);
    font-weight: 400;
    font-family: "SJyunhei";
    text-align: center;
    // letter-spacing: 1px;
    @include LetterSpacing(1);
    // margin-bottom: 10px;
    @include MarginBottom(10);
  }
  &__line {
    // width: 2px;
    @include Width(2);
    // height: 30px;
    @include hHeight(30);
    opacity: 0.4;
    background-color: #fff;
  }
  .traffic-info__value {
    color: rgba(246, 200, 76, 1);

    @include FontSize(25);
    font-weight: 400;
    font-family: "SJyunhei";
    text-align: center;

    @include LetterSpacing(1);

    @include MarginBottom(10);
    display: block;
  }
}

.monitor {
  // margin-top: 20px;
  @include MarginTop(20);
  width: 90%;
  margin-left: 5%;
  // height: 180px;
  @include hHeight(180);
  background: rgba($color: #fff, $alpha: 0.2);
  // border-radius: 2px;
  @include BorderRadius(2);
  // padding: 10px;
  @include Padding(10, 10, 10, 10);
  video {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
}
</style>
