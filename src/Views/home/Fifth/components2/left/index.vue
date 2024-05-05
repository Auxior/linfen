<!--
 * @Author: your name
 * @Date: 2022-02-27 19:35:05
 * @LastEditTime: 2022-02-28 02:07:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWeekly_zhyq\src\Views\home\Fifth\components2\left\index.vue
-->
<!--components2-->
<template>
  <Lease_title>能源分布</Lease_title>
  <Box :height="300">
    <V3Echarts
      container="Fifthecharts2"
      ref="childRef"
      :options="options1"
      :height="300"
      :top="0"
    />
  </Box>
  <Lease_title>充电桩</Lease_title>
  <Box :height="280">
    <V3Echarts
      container="Fifthecharts3"
      ref="childRef"
      :options="option2"
      :height="280"
      :top="0"
    />
  </Box>
  <Lease_title>电站</Lease_title>
  <Box :height="280">
    <V3Echarts
      container="Fifthecharts4"
      ref="childRef"
      :options="option3"
      :height="280"
      :top="0"
    />
  </Box>
</template>

<script lang="ts" setup>
import * as echarts from "echarts";

import Lease_title from "@/components/Lease_title/index.vue";
// import { option1 } from "../../echartsOpt/index";
import V3Echarts from "@/components/V3Echarts/index.vue";
import { ref } from "vue";
import {
  AXIS_LABEL,
  LEGEND,
  LINE_TOOLTIP,
  XAXIS_NAME,
  YAXIS_NAME,
} from "@/utils/chartConfig";
let color = [
  "rgb(255,108,131)",
  "rgb(120,119,232)",
  "rgb(0,106,208)",
  "rgb(0,210,186)",
  "rgb(45,152,255)",
  "#F6C84C",
];
const options1 = ref({
  // legend: [
  //     {
  //         itemWidth: 10,
  //         itemHeight: 10,
  //         itemGap: 10,
  //         top: "2%",
  //         left: "27%",
  //         data: [
  //             "计算机、通信制造业",
  //             "软件信息技术服务业",
  //             "研究和试验发展",
  //             "专业技术服务业",
  //             "货币金融服务",
  //             "其他"
  //         ],
  //         textStyle: {
  //             fontSize: 20,
  //             color: "#fff",
  //             padding: 5,
  //         },
  //     },
  // {
  //   itemWidth: 34,
  //   itemHeight: 34,
  //   itemGap: 252,
  //   top: "8%",
  //   left: "35%",
  //   data: ["金融业", "制造业"],
  //   textStyle: {
  //     fontSize: 48,
  //     color: "#fff",
  //     padding: 20,
  //   },
  // },
  // ],
  tooltip: {
    backgroundColor: "rgba(0,0,0,0.5)",
    borderWidth: "0",
    value: "category",
    textStyle: {
      fontSize: 14,
      // color: "#fff",
    },
    formatter: function name(params: any) {
      console.log(params, "params的值");
      var result = "";
      // params.forEach((element) => {
      //   console.log(element, "element");
      result += `<span style="display:inline-block;margin-right:15px;margin-left:10px;border-radius:10px;width:10px;height:10px;background-color:${params.color}"></span><span style="margin-right:20px;font-size:14px;color:rgba(255,255,255,0.7)">${params.name}</span><br/><span style="color:#fff;padding-left:20px">${params.value}</span><span style="padding-left:12px;color:rgba(255,255,255,0.8)">家</span><br/><span style="color:#fff;padding-left:20px">${params.percent}</span><span style="color:rgba(255,255,255,0.8);padding-left:12px">%</span>`;
      // });
      return result;
    },
  },
  toolbox: {
    show: false,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  graphic: {
    elements: [
      {
        type: "image",
        style: {
          image: require("../../../../../assets/images/Seventh/Group_920.png"),
          width: 180,
          height: 180,
        },
        left: "22%",
        top: "3%",
      },
    ],
  },
  series: [
    {
      name: "内容",
      type: "pie",
      radius: ["20%", "55%"], //大小
      //center: ['44.8%', '64.2%'],//位置
      center: ["47%", "45%"],
      roseType: "area",
      startAngle: 150, //开始位置s
      // minAngle:500,
      label: {
        show: true,
        fontSize: 14,
        color: "#fff",
      },
      labelLine: {
        length: 15,
        length2: 10,
        // maxSurfaceAngle: 200,
        show: true,
        lineStyle: {
          width: 2,
        },
      },
      itemStyle: {
        color: function (p: any) {
          return color[p.dataIndex];
        },
      },
      data: [
        { value: 21, name: "计算机、通信制造业" },
        { value: 96, name: "软件信息技术" },
        { value: 13, name: "研究和试验发展" },
        { value: 12, name: "专业技术服务业" },
        { value: 11, name: "货币金融服务" },
        { value: 87, name: "其他" },
      ],
    },
  ],
});
const option2 = ref({
  tooltip: LINE_TOOLTIP,
  legend: {
    icon: "rect",
    itemWidth: 20,
    itemHeight: 12,
    itemGap: 10,
    left: "center",
    top: "2%",
    textStyle: LEGEND,
    data: [
      {
        name: "近24小时",
        icon: "rect",
        itemStyle: {
          color: "#2D98FF",
        },
      },
      {
        name: "能耗同比",
        icon: "rect",
        itemStyle: {
          color: "#FF9433",
        },
      },
    ],
  },
  grid: {
    top: "30%",
    left: "0%",
    right: "0%",
    bottom: "2%",
    // bottom: "23%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    name: "(月)",
    nameTextStyle: XAXIS_NAME,
    axisLabel: AXIS_LABEL,
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
    name: "(kw)",
    offset: -5,
    max: 100,
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
      name: "近24小时",
      type: "line",
      data: [24, 25, 44, 45, 30, 64, 24, 40, 30, 15, 40, 30],
      smooth: true,
      symbol: "none",
      lineStyle: {
        color: "#2D98FF",
        width: "2",
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
      name: "能耗同比",
      type: "line",
      data: [34, 15, 28, 35, 36, 30, 31, 38, 29, 25, 32, 29],
      smooth: true,
      symbol: "none",
      lineStyle: {
        color: "#FF9433",
        width: "2",
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0.5, color: "rgba(255,148,51,0.2)" }, // 0% 处的颜色
            { offset: 1, color: "rgba(255,148,51,0.40)" },
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
const option3 = ref({
  tooltip: LINE_TOOLTIP,
  legend: {
    icon: "rect",
    itemWidth: 20,
    itemHeight: 12,
    itemGap: 10,
    left: "center",
    top: "2%",
    textStyle: LEGEND,
    data: [
      {
        name: "近24小时",
        icon: "rect",
        itemStyle: {
          color: "#2D98FF",
        },
      },
      {
        name: "能耗同比",
        icon: "rect",
        itemStyle: {
          color: "#FF9433",
        },
      },
    ],
  },
  grid: {
    top: "30%",
    left: "0%",
    right: "0%",
    bottom: "2%",
    // bottom: "23%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    name: "(月)",
    nameTextStyle: XAXIS_NAME,
    axisLabel: AXIS_LABEL,
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
    name: "(kw)",
    offset: -5,
    max: 100,
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
      name: "近24小时",
      type: "line",
      data: [24, 35, 24, 54, 20, 54, 74, 60, 50, 45, 50, 67],
      smooth: true,
      symbol: "none",
      lineStyle: {
        color: "#2D98FF",
        width: "2",
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
      name: "能耗同比",
      type: "line",
      data: [34, 15, 28, 35, 36, 30, 31, 38, 29, 25, 32, 29],
      smooth: true,
      symbol: "none",
      lineStyle: {
        color: "#FF9433",
        width: "2",
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0.5, color: "rgba(255,148,51,0.2)" }, // 0% 处的颜色
            { offset: 1, color: "rgba(255,148,51,0.40)" },
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
