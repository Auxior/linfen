<template>
  <div class="wrap">
    <div class="lease_title">空间租售收入统计</div>
    <div class="access">
      <div class="access-info">
        <div class="access-info__item">
          <div class="access-info__value">31.7</div>
          <span>年度收入（亿元）</span>
        </div>
        <div class="access-info__item">
          <div class="access-info__value">7.91</div>
          <span>季度收入（亿元）</span>
        </div>
        <div class="access-info__item">
          <div class="access-info__value">1.25</div>
          <span>月度收入（亿元）</span>
        </div>
      </div>
    </div>
    <div class="income">空间资源收入明细</div>
    <div class="hybz_content">
      <div class="area_change">
        <div
          v-for="(item, index) in barData"
          :key="item.id"
          :class="[
            'area_change' + item.id,
            index === areaChangeType ? 'area_change_active' : '',
          ]"
          @click="areaChange(index)"
        >
          {{ item.text }}
        </div>
      </div>
    </div>
    <div class="line_boder"></div>
    <div class="line_boder1"></div>
    <div calss="echartsVwisews">
      <v3charts
        width="330"
        height="180"
        top="5"
        container="echartsVffwieews"
        ref="childRef"
        :options="optionoij"
      ></v3charts>
      <!-- <div id="echartsVwiews" style="width: 2120px; height: 1000px"></div> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import * as echarts from "echarts";
import {
  onMounted,
  ref,
  onBeforeUnmount,
  reactive,
  defineExpose,
  onUnmounted,
} from "vue";
import {
  PIE_TOOLTIP,
  LINE_TOOLTIP,
  AXIS_LABEL,
  YAXIS_NAME,
  XAXIS_NAME,
  LEGEND,
} from "@/utils/chartConfig";
import v3charts from "../components/v3echarts.vue";
defineExpose({ childRef: ref });
let childRef = ref(null);
let barData = reactive([
  { id: 1, data: [154, 675, 572], text: "本月" },
  { id: 2, data: [598, 1356, 1257], text: "本季" },
  { id: 3, data: [1726, 4795, 3650.7], text: "本年" },
]);
const areaChangeType = ref(0);

let optionoij = ref({
  title: {
    text: "",
  },
  tooltip: {
    show: true,
    trigger: "item",
    axisPointer: {
      type: "none",
      label: {
        background: "#000",
        boxShadow: " 0px 8px 48px 4px rgba(0,0,0,0.4)",
        borderRadius: " 0px 0px 0px 0px",
        border: "0px solid rgba(255, 255, 255, 0.16)",
      },
    },
    borderRadius: 2,
    borderColor: "transparent",
    padding: 5,
    backgroundColor: "rgba(0,0,0,.6)",
    textStyle: {
      color: "#fff",
      fontSize: 16,
    },
  },
  legend: {
    itemHeight: 15, //修改icon图形大小
    itemWidth: 15,
    itemGap: 1,
    borderRadius: 2,
    x: "left", //可设定图例在左、右、居中
    y: 0,
    padding: [0, 5, 0, 50], //可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
    textStyle: {
      fontSize: 16,
      color: "rgba(255,255,255,1)",
      padding: 0,
    },
  },
  grid: {
    left: "0%",
    right: "25%",
    bottom: "3%",
    top: "20%",
    containLabel: true,
  },
  xAxis: {
    type: "value",
    show: false,
    boundaryGap: [0, 0.01],
    min: 0,
    max: 5000,
  },
  yAxis: {
    type: "category",
    //坐标轴轴线
    axisLine: {
      lineStyle: {
        width: 1,
        color: "#FFFFFF",
        opacity: 0.3,
      },
    },
    //xAxis文字
    axisLabel: {
      // margin: 34,
      color: "#FFFFFF",
      fontSize: 14,
      fontFamily: "OPPOSans-M",
    },
    boundaryGap: ["30%", "20%"],
    data: ["活动场地运营", "公共会议室运营", "停车场运营"],
  },
  series: [
    {
      name: "收入",
      type: "bar",
      barWidth: 20, //柱图宽度
      label: {
        show: true,
        position: "insideRight",
        distance: -1,
        formatter: "{people|{@[4]}} {percentage|{@[1]}%}",
        rich: {
          people: {
            color: "white",
          },
          percentage: {
            color: "red",
            width: 1,
          },
        },
      },
      itemStyle: {
        // color: "rgba(87, 167, 255, 0.5)",
        // borderColor: "#57A7FF",
        normal: {
          barBorderRadius: [2, 2, 0, 0],
          label: {
            show: true, //开启显示
            position: "right",
            right: 200,
            //在上方显示
            //                          formatter: function (params: any) {
            //             return `<span>${params.data.value}</span><span style="font-size: 48px;font-family: PingFang SC-Regular, PingFang SC;font-weight: 400;
            // color: #FFFFF0;
            // line-height: 56px;
            // letter-spacing: 4px;">万元</span>`
            //         },
            formatter: "{c}万元",

            textStyle: {
              //数值样式
              color: "#fff",
              fontSize: 14,
              fontFamily: "SJyunhei-Regular, SJyunhei",
            },
          },
          color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
            {
              offset: 0,
              color: "rgba(0, 210, 186, 1)",
            },
            {
              offset: 1,
              color: "rgba(45, 152, 255, 0.3)",
            },
          ]),
        },
      },
      //   data: ["1.6", "1.2"]
      data: barData[areaChangeType.value].data,
    },
  ],
});
const areaChange = (type = 0) => {
  areaChangeType.value = type;
  optionoij.value.series[0].data = barData[areaChangeType.value].data;
  console.log(optionoij, "optionoij");
};
let timer = ref();
const playEcharts = () => {
  let i = 0;
  timer.value = setInterval(() => {
    areaChange(i % barData.length);
    i++;
  }, 3000);
};
playEcharts();
onUnmounted(() => {
  clearInterval(timer.value);
});
</script>
<style lang="scss" scoped>
// 最外层盒子
.wrap {
  width: 100%;
  height: 100%;
  padding: 30px 10px 10px;
}
// 闸机 人数 统计
.access {
  height: 100px;
  p {
    display: flex;
    justify-content: space-between;
    color: rgba(255, 255, 255, 1);
    font-size: 20px;
    font-weight: 500;
    font-family: "PingFang SC";
    text-align: left;
    letter-spacing: 1px;
    padding: 0 10px 8px;
    border-bottom: 1px solid rgba($color: #fff, $alpha: 0.6);
    margin-bottom: 6px;
    span span {
      font-size: 16px;
      font-weight: 500;
      color: rgba($color: #fff, $alpha: 0.6);
    }
  }
  .access-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px;
    &__item {
      text-align: center;
      span {
        color: rgba(255, 255, 255, 1);
        font-size: 12px;
        font-weight: 500;
        font-family: "PingFang SC";
        text-align: center;
        letter-spacing: 1px;
      }
    }
    &__value {
      color: rgba(246, 200, 76, 1);
      font-size: 27px;
      font-weight: 400;
      font-family: "SJyunhei";
      text-align: center;
      letter-spacing: 1px;
      margin-bottom: 5px;
    }
  }
}
.income,
.trend {
  background: url("~@/assets/images/基础框架通用元素切图/三级标题块/长.png")
    no-repeat;
  width: 300px;
  height: 25px;
  background-size: 100% 100%;
  font-size: 16px;
  font-family: PingFang SC-Medium, PingFang SC;
  font-weight: 500;
  color: #dbd8ab;
  line-height: 25px;
  letter-spacing: 1px;
  padding-left: 20px;
  margin-top: 5px;
}

.hybz_content {
  width: 330px;
  margin-top: 10px;
  position: absolute;
  z-index: 100;
  .area_change {
    width: 100%;
    height: 20px;
    // border: 3px solid red;
    display: flex;
    justify-content: flex-end;
    position: relative;
    top: 10px;
    right: 0;
    // margin-left: 60px;
    // margin-top: -100px;
    > * {
      cursor: pointer;
    }
    .area_change1,
    .area_change2,
    .area_change3 {
      width: 50px;
      height: 20px;
      background: linear-gradient(
        134deg,
        rgba(66, 101, 235, 0.4) 0%,
        rgba(202, 212, 239, 0) 100%
      );
      border-radius: 2px;
      opacity: 1;
      border: 2px solid rgba(255, 255, 255, 0.6);
      font-size: 16px;
      line-height: 20px;
      color: rgba(255, 255, 255, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 10px;
    }
    .area_change_active {
      background: linear-gradient(
        134deg,
        rgba(246, 200, 76, 0.4) 0%,
        rgba(246, 200, 76, 0) 100%
      );
      border: 1px solid #f6c84c;
      color: #ffffff;
    }
  }
  #echartsViews {
    margin-top: 10px;
  }
}
</style>
