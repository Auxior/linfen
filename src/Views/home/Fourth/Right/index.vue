<template>
  <div class="wrap">
    <div>
      <div class="lease_title">资产信息</div>
      <div class="parking-space-statistics">
        <div v-for="item in list" :key="item.id">
          <h3>{{ item.title }}</h3>
          <div class="txt-content">
            <div v-for="i in item.child" :key="i.id" class="txt">
              <p>{{ i.title }}</p>
              <span
                :style="
                  i.title === '剩余车位'
                    ? { color: '#00d2ba' }
                    : { color: '#fff' }
                "
                >{{ i.num
                }}<i style="color: rgba(255, 255, 255, 0.7)">{{
                  i.con
                }}</i></span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="lease_title">运行工况</div>
      <div class="left">
        <div class="item">
          <div class="value">15</div>
          <span>停车场出入口 (个)</span>
        </div>
        <div class="item">
          <div class="value">39</div>
          <span>道闸数量 (个)</span>
        </div>
      </div>
      <chyCharts
        width="330"
        height="165"
        :options="option1"
        top="10"
        container="container2"
      />
    </div>
    <div>
      <div class="lease_title">园区车流趋势</div>
      <chyCharts
        width="330"
        height="180"
        :options="option2"
        top="10"
        container="container3"
      />
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
import chyCharts from "../components/v3echarts.vue";
// 文字统计
let list = ref([
  {
    id: 1,
    title: "P1层",
    child: [
      {
        id: 101,
        title: "车位数量",
        num: 2604,
        con: "个",
      },
      {
        id: 102,
        title: "已使用",
        num: 1708,
        con: "个",
      },
      {
        id: 102,
        title: "剩余车位",
        num: 896,
        con: "个",
      },
    ],
  },
  {
    id: 2,
    title: "P2层",
    child: [
      {
        id: 201,
        title: "车位数量",
        num: 2556,
        con: "个",
      },
      {
        id: 202,
        title: "已使用",
        num: 1931,
        con: "个",
      },
      {
        id: 202,
        title: "剩余车位",
        num: 625,
        con: "个",
      },
    ],
  },
  {
    id: 3,
    title: "P3层",
    child: [
      {
        id: 301,
        title: "车位数量",
        num: 1997,
        con: "个",
      },
      {
        id: 302,
        title: "已使用",
        num: 1519,
        con: "个",
      },
      {
        id: 302,
        title: "剩余车位",
        num: 478,
        con: "个",
      },
    ],
  },
]);
// 饼图配置
const dataStyle = {
  normal: {
    label: {
      show: false,
    },
    labelLine: {
      show: false,
    },
    shadowBlur: 0,
    shadowColor: "#203665",
  },
};
let option1 = ref({
  // tooltip: PIE_TOOLTIP,
  legend: {
    show: false,
    orient: "vertical",
    left: "61%",
    top: "19%", // bottom:"20%" // 组件离容器的距离
    width: "auto", // 图例组件的宽度
    height: "auto", // 图例组件的高度
    align: "left", // 图例标记和文本的对齐
    padding: 0, // 图例内边距
    itemWidth: 50, // 图例标记的图形宽度。
    itemHeight: 50,
    itemGap: 80,
    textStyle: LEGEND,
  },
  color: ["#2D98FF", "#2D98FF", "#F03526"],
  // 设置环形中间的数据
  graphic: {
    elements: [
      {
        type: "text",
        left: "8%",
        top: "62%",
        style: {
          fill: "#fff",
          text: ["P1层\n运行数：12个\n故障数：1个"],
          font: "12px OPPOSans-R",
          lineHeight: 20,
          textAlign: "center",
        },
      },
      {
        type: "text",
        left: "40%",
        top: "62%",
        style: {
          fill: "#fff",
          text: ["P2层\n运行数：13个\n故障数：0个"],
          font: "12px OPPOSans-R",
          lineHeight: 20,
          textAlign: "center",
        },
      },
      {
        type: "text",
        left: "70%",
        top: "62%",
        style: {
          fill: "#fff",
          text: ["P3层\n运行数：11个\n故障数：2个"],
          font: "12px OPPOSans-R",
          lineHeight: 20,
          textAlign: "center",
        },
      },
    ],
  },
  series: [
    {
      name: "一层",
      type: "pie",
      clockWise: false,
      radius: [35, 45],
      itemStyle: dataStyle,
      hoverAnimation: false,
      center: ["18%", "33%"],
      data: [
        {
          value: 92,
          label: {
            normal: {
              formatter: "{c}%",
              position: "center",
              show: true,
              textStyle: {
                color: "#fff",
                align: "center",
                fontSize: 12,
                fontWeight: "bold",
              },
            },
          },
        },
        {
          value: 8,
          name: "invisible",
          itemStyle: {
            normal: {
              color: "rgba(255,255,255,0.3)",
            },
            // emphasis: {
            //     color: '#24375c'
            // }
          },
        },
      ],
    },
    {
      name: "二层",
      type: "pie",
      clockWise: false,
      radius: [35, 45],
      itemStyle: dataStyle,
      hoverAnimation: false,
      center: ["50%", "33%"],
      data: [
        {
          itemStyle: {
            normal: {
              color: "#00D2BA",
            },
          },
          value: 100,
          label: {
            normal: {
              formatter: "{c}%",
              position: "center",
              show: true,
              textStyle: {
                color: "#fff",
                align: "center",
                fontSize: 12,
                fontWeight: "bold",
              },
            },
          },
        },
        {
          value: 0,
          name: "invisible",
          itemStyle: {
            normal: {
              color: "rgba(255,255,255,0.3)",
            },
            // emphasis: {
            //     color: '#24375c'
            // }
          },
        },
      ],
    },
    {
      name: "三层",
      type: "pie",
      clockWise: false,
      radius: [35, 45],
      itemStyle: dataStyle,
      hoverAnimation: false,
      center: ["81%", "33%"],
      data: [
        {
          itemStyle: {
            normal: {
              color: "#FF9433",
            },
          },
          value: 85,
          label: {
            normal: {
              formatter: "{c}%",
              position: "center",
              show: true,
              textStyle: {
                color: "#fff",
                align: "center",
                fontSize: 12,
                fontWeight: "bold",
              },
            },
          },
        },
        {
          value: 15,
          name: "invisible",
          itemStyle: {
            normal: {
              color: "rgba(255,255,255,0.3)",
            },
            // emphasis: {
            //     color: 'red'
            // }
          },
        },
      ],
    },
  ],
});

// 园区车流趋势线图
let option2 = ref({
  tooltip: LINE_TOOLTIP,
  legend: {
    icon: "rect",
    itemWidth: 10,
    itemHeight: 10,
    itemGap: 15,
    left: "85%",
    top: "6%",
    textStyle: LEGEND,
    data: [
      {
        name: "车流",
        icon: "rect",
        itemStyle: {
          color: "rgba(45, 152, 255, 1)",
        },
      },
    ],
  },
  grid: {
    top: "25%",
    left: "0",
    right: "0%",
    bottom: "10%",
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
    name: "(辆)",
    offset: -5,
    max: 1000,
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
      name: "车流",
      type: "line",
      data: [600, 550, 600, 650, 700, 800, 640, 800, 600, 850, 600],
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
  ],
});
</script>
<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  padding: 30px 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.parking-space-statistics {
  height: auto;
  padding-top: 10px;
  padding-right: 8px;
  padding-left: 8px;
  > div {
    border-bottom: 1px solid rgba($color: #fff, $alpha: 0.4);
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 5px;
    h3 {
      width: 50px;
      color: rgba(246, 200, 76, 1);
      font-size: 19px;
      font-weight: 400;
      font-family: "SJyunhei";
      text-align: center;
      letter-spacing: 1px;
      margin-right: 16px;
    }
    .txt-content {
      margin-bottom: 10px;
      .txt {
        width: 130px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgba($color: #fff, $alpha: 0.4);
        p {
          opacity: 1;
          color: rgba(255, 255, 255, 1);
          font-size: 14px;
          font-weight: 500;
          font-family: "PingFang SC";
          text-align: left;
          letter-spacing: 1px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 10px;
          padding-bottom: 8px;
        }
        span {
          font-size: 16px;
          font-weight: 400;
          font-family: "SJyunhei";
          text-align: left;
          letter-spacing: 1px;
        }
        i {
          font-size: 14px;
          font-weight: 500;
          font-family: "PingFang SC";
        }
      }
    }
  }
}

.left {
  width: 100%;
  height: auto;
  text-align: center;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  .item {
    width: 40%;
  }
  .value {
    color: rgba(246, 200, 76, 1);
    font-size: 20px;
    font-weight: 400;
    font-family: "SJyunhei";
    text-align: center;
    letter-spacing: 1px;
    margin-bottom: 10px;
  }
  span {
    color: rgba(255, 255, 255, 1);
    font-size: 14px;
    font-weight: 500;
    font-family: "PingFang SC";
    text-align: center;
  }
}
</style>
