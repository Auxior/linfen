import * as echarts from "echarts";
import {
  PIE_TOOLTIP,
  LINE_TOOLTIP,
  AXIS_LABEL,
  YAXIS_NAME,
  XAXIS_NAME,
  LEGEND,
} from "@/utils/chartConfig";

// 告警响应统计
export const option1 = {
  tooltip: PIE_TOOLTIP,
  title: [
    {
      text: "一次配电设备",
      top: "73%",
      left: "1%",
      textStyle: {
        fontSize: "14",
        color: "#fff",
      },
    },
    {
      text: "二次末端设备",
      top: "73%",
      left: "center",
      textStyle: {
        fontSize: "14",
        color: "#fff",
      },
    },
    {
      text: "冷热源设备",
      top: "73%",
      left: "73%",
      textStyle: {
        fontSize: "14",
        color: "#fff",
      },
    },
  ],
  legend: [
    {
      left: "0%",

      top: "5.5%", // bottom:"20%" // 组件离容器的距离
      width: "auto", // 图例组件的宽度
      height: "auto", // 图例组件的高度
      align: "left", // 图例标记和文本的对齐
      padding: 0, // 图例内边距
      itemWidth: 15, // 图例标记的图形宽度。
      itemHeight: 15,
      itemGap: 5,
      textStyle: LEGEND,
    },
  ],
  // color: ["#EC7585", "#13CEBA", "#2D98FF", "#FFC620"],
  color: [
    "#EC7585",
    "#13CEBA",
    "#2D98FF",
    "#FFC620",

    "#b6a2de",
    "#ffb980",
    "#8d98b3",
    "#dc69aa",

    "#f5994e",
    "#c05050",
    "#59678c",
    "#c9ab00",
    "#7eb00a",
    "#6f5553",
    "#c14089",
  ],
  // 设置环形中间的数据
  graphic: {
    elements: [
      {
        type: "text",
        left: "9%",
        top: "43%",
        style: {
          fill: "#00D2BA",
          text: ["160"],
          font: "24px Tencent",
        },
      },
      {
        type: "text",
        left: "13%",
        top: "55%",
        style: {
          fill: "#FFFFFFA6",
          text: ["个"],
          font: "16px OPPOSans-R",
        },
      },
      {
        type: "text",
        left: "41.5%",
        top: "43%",
        style: {
          fill: "#00D2BA",
          text: ["6503"],
          font: "24px Tencent",
        },
      },
      {
        type: "text",
        left: "48%",
        top: "55%",
        style: {
          fill: "#FFFFFFA6",
          text: ["个"],
          font: "16px OPPOSans-R",
        },
      },
      {
        type: "text",
        left: "78%",
        top: "43%",
        style: {
          fill: "#00D2BA",
          text: ["208"],
          font: "24px Tencent",
        },
      },
      {
        type: "text",
        left: "83%",
        top: "55%",
        style: {
          fill: "#FFFFFFA6",
          text: ["个"],
          font: "16px OPPOSans-R",
        },
      },
    ],
  },
  series: [
    {
      name: "一次配电设备",
      type: "pie",
      radius: [35, 45],
      center: ["15%", "center"],
      data: [
        {
          value: 8,
          name: "发电机",
        },
        {
          value: 129,
          name: "配电柜",
        },
        {
          value: 23,
          name: "变压器",
        },
      ],
      //牵引线条颜色
      labelLine: {
        normal: {
          show: false,
        },
      },
      label: {
        normal: {
          show: false,
        },
      },
    },
    {
      name: "二次末端设备",
      type: "pie",
      radius: [35, 45],
      center: ["50%", "center"],
      data: [
        {
          value: 225,
          name: "水表",
        },
        {
          value: 6278,
          name: "电表",
        },
      ],
      //牵引线条颜色
      labelLine: {
        normal: {
          show: false,
        },
      },
      label: {
        normal: {
          show: false,
        },
      },
    },
    {
      name: "冷热源设备",
      type: "pie",
      radius: [35, 45],
      center: ["85%", "center"],
      data: [
        // {
        //   value: 130,
        //   name: "冷水主机",
        // },
        {
          value: 45,
          name: "冷冻泵",
        },
        {
          value: 51,
          name: "冷却塔",
        },
        {
          value: 82,
          name: "冷却泵",
        },
      ],
      //牵引线条颜色
      labelLine: {
        normal: {
          show: false,
        },
      },
      label: {
        normal: {
          show: false,
        },
      },
    },
    // {
    //   name: "外边框",
    //   type: "pie",
    //   clockWise: false, //顺时加载
    //   hoverAnimation: false, //鼠标移入变大
    //   center: ["30%", "50%"],
    //   radius: ["70%", "70%"],
    //   label: {
    //     normal: {
    //       show: false,
    //     },
    //   },
    //   data: [
    //     {
    //       value: 9,
    //       name: "",
    //       itemStyle: {
    //         borderWidth: 3,
    //         borderColor: "rgb(139, 139, 139)",
    //         borderType: "dashed",
    //       },
    //     },
    //   ],
    // },
  ],
};
option1.series.forEach((item: any) => {
  item.data.forEach((item2: any) => {
    item2.name = item2.name.padEnd(4, "　");
  });
});

// 能耗
export const option5 = {
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
};
