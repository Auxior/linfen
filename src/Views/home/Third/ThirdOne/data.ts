import {
  PIE_TOOLTIP,
  LINE_TOOLTIP,
  AXIS_LABEL,
  YAXIS_NAME,
  XAXIS_NAME,
  LEGEND,
} from "@/utils/chartConfig";

import * as echarts from "echarts";
// 仪表盘
export const option1 = {
  title: {
    text: "异常率: 19% ",
    x: "50%",
    y: "60%",
    textAlign: "center",
    textStyle: {
      color: "#fff",
      fontWeight: "400",
      fontSize: 20,
      // rich: {
      //   num: {
      //     fontWeight: "500",
      //     color: "#fff",
      //     fontFamily: "SJyunhei",
      //     fontSize: 20,
      //     lineHeight: "180",
      //   },
      //   b: {
      //     fontWeight: "500",
      //     color: "#fff",
      //     fontFamily: "SJyunhei",
      //     fontSize: 20,
      //   },
      // },
    },
  },
  series: [
    {
      name: "最外层",
      type: "gauge",
      radius: "115%",
      center: ["50%", "60%"],
      splitNumber: 0, //刻度数量
      startAngle: 180,
      endAngle: 0,
      min: 0, //最小刻度
      max: 100, //最大刻度
      z: 0,
      zlevel: 0,
      axisLine: {
        show: true,
        lineStyle: {
          // 轴线样式
          width: 6, // 宽度
          color: [[1, "#325775"]],
          type: "dotted",
        },
      },
      //分隔线样式
      splitLine: {
        show: true,
      },
      axisLabel: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      pointer: {
        show: true,
        length: "200%",
        width: "2%",
      },
    },
    {
      name: "数据显示",
      type: "gauge",
      radius: "100%",
      center: ["50%", "60%"],
      splitNumber: 0, //刻度数量
      startAngle: 180,
      endAngle: 0,
      min: 0, //最小刻度
      max: 100, //最大刻度
      z: 2,
      zlevel: 2,
      axisLine: {
        show: true,
        lineStyle: {
          // 轴线样式
          width: 30, // 宽度
          color: [
            [
              0.85,
              new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: "#2D98FF",
                },
                {
                  offset: 1,
                  color: "#5AD9CB",
                },
              ]),
            ],
            [1, "#F6C74C"],
          ],
        },
      },
      //分隔线样式。
      splitLine: {
        show: true,
      },
      axisLabel: {
        show: false,
        color: "#4b695e",
        fontSize: 20,
        distance: 0,
      },
      axisTick: {
        show: true,
        splitNumber: 60,
        distance: -15,
        lineStyle: {
          color: "rgba(21, 136, 138, 1)",
          width: 1,
        },
        length: -150,
      },
      pointer: {
        show: true,
        length: "125%",
        width: "1%",
        itemStyle: {
          color: "#FFFFFF",
        },
      },
      //仪表盘详情，用于显示数据。
      detail: {
        show: true,
        offsetCenter: ["-5%", "-25%"],
        color: "#ffffff",
        //    formatter:{}
        textStyle: {
          fontSize: 18,
          color: "rgba(255,255,255,0)",
        },
      },
      data: [19],
    },
    {
      name: "背景内",
      type: "gauge",
      radius: "80%",
      center: ["50%", "58%"],
      splitNumber: 100, //刻度数量
      startAngle: 180,
      endAngle: 0,
      min: 0, //最小刻度
      max: 100, //最大刻度
      z: 2,
      zlevel: 2,
      axisLine: {
        show: true,
        lineStyle: {
          // 轴线样式
          width: 2, // 宽度
          color: [
            [
              114,
              new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: "rgba(1, 54, 55, 1)",
                },
                {
                  offset: 1,
                  color: "rgba(1, 54, 55, 1)",
                },
              ]),
            ],
            [1, "rgba(1, 54, 55, 1)"],
          ],
        },
      },
      //分隔线样式。
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      pointer: {
        show: true,
        length: "80%",
        width: "2%",
      },
    },
    {
      name: "背景内",
      type: "gauge",
      radius: "60%",
      center: ["50%", "58%"],
      splitNumber: 100, //刻度数量
      startAngle: 180,
      endAngle: 0,
      min: 0, //最小刻度
      max: 100, //最大刻度
      z: 2,
      zlevel: 2,
      axisLine: {
        show: true,
        lineStyle: {
          // 轴线样式
          width: 1112, // 宽度
          color: [
            [
              114,
              new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: "rgba(73,86,117, 0.3)",
                },
                {
                  offset: 1,
                  color: "rgba(73,86,117, 0.3)",
                },
              ]),
            ],
            [1, "rgba(73,86,117, 0.3)"],
          ],
        },
      },
      //分隔线样式。
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      pointer: {
        show: true,
        length: "80%",
        width: "2%",
      },
    },
  ],
}
// 饼图 中间有字
export const option2 = {
  color: ["#ec7585", "#13ceba", "#2d98ff"],
  graphic: {
    elements: [
      {
        type: "text",
        left: "21%",
        top: "38%",
        style: {
          fill: "#00D2BA",
          text: ["50"],
          font: "18px Tencent",
        },
      },
      {
        type: "text",
        left: "28%",
        top: "40%",
        style: {
          fill: "#FFFFFFA6",
          text: ["%"],
          font: "14px OPPOSans-R",
        },
      },
    ],
  },
  legend: {
    top: "10%",
    right: "15%",
    orient: "vertical",
    data: ["温湿告警", "电力告警", "设备告警"],
    itemGap: 40,
    itemStyle: {},
    textStyle: {
      padding: 5,
      fontSize: 16,
      color: "#FFF",
      width: 150,
      align: "left",
      rich: {
        a: {
          width: 110,
          align: "right",
          // color: 'red',
          fontSize: 18,
          padding: [0, 20, 0, 0],
        },
        unit: {
          width: 20,
          align: "right",
          fontSize: 14,
        },
      },
    },
  },
  series: [
    {
      type: "pie",
      radius: ["45%", "55%"],
      center: ["25%", "40%"],
      avoidLabelOverlap: false,
      itemStyle: {
        // borderRadius: 30,
        // borderColor: "#151B3B",
        // borderWidth: 10,
      },
      label: {
        show: false,
        position: "center",
      },
      labelLine: {
        show: false,
      },
      data: [
        {
          value: 43,
          name: "温湿告警",
          unit: "处",
        },
        {
          value: 217,
          name: "电力告警",
          unit: "处",
        },
        {
          value: 55,
          name: "设备告警",
          unit: "处",
        },
      ],
    },
    {
      name: "外边框",
      type: "pie",
      clockWise: false, //是否需要顺时加载
      hoverAnimation: false, //是否需要鼠标移入变大
      center: ["25%", "40%"],
      radius: ["65%", "66%"],
      label: {
        normal: {
          show: false,
        },
      },
      data: [
        {
          value: 1,
          name: "",
          itemStyle: {
            borderWidth: 1,
            borderColor: "#BADCFF5C",
            borderType: "dashed",
          },
        },
      ],
    },
  ],
}

// 柱图 电梯安检统计
export const option3 = {
  tooltip: LINE_TOOLTIP,
  legend: {
    show: false,
    itemGap: 20,
    itemWidth: 10,
    itemHeight: 10,
    right: "8%",
    top: "7%",
    data: [
      {
        name: "检修",
        textStyle: LEGEND,
      }
    ],
  },
  grid: {
    top: "15%",
    left: "2%",
    right: "3%",
    bottom: "0%",
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      data: ["1月", "2月", "3月", "4月", "5月", "6月"],
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
    }
  ],
  yAxis: [
    {
      type: "value",
      name: "(次)",
      offset: -5,
      max: 10,
      axisLine: {
        show: true,
      },
      axisLabel: AXIS_LABEL,
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
  ],
  series: [
    {
      name: "检修",
      type: "bar",
      barWidth: 15,
      data: [2, 3, 2, 4, 5, 3],
      itemStyle: {
        borderRadius: 1,
        color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [
          {
            offset: 0,
            color: "rgba(0,210,186,0.3)",
          },
          {
            offset: 0.7,
            color: "#00D2BA",
          },
        ]),
      },
    }
  ]
}
// 折线图  一根线
export const option4 = {
  tooltip: LINE_TOOLTIP,
  grid: {
    top: "13%",
    left: "0",
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
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
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
    name: "(个)",
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
      name: "整改量",
      type: "line",
      data: [40, 35, 35, 50, 60, 40, 60, 40, 70, 50, 65, 70],
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
}
// 折线图 多根线
export const option5 = {
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
        name: "电梯",
        icon: "rect",
        itemStyle: {
          color: "#FF6C83",
        },
      },
      {
        name: "冷热源",
        icon: "rect",
        itemStyle: {
          color: "#FF9433",
        },
      },
      {
        name: "供配电",
        icon: "rect",
        itemStyle: {
          color: "#2D98FF",
        },
      },
      {
        name: "监控摄像头",
        icon: "rect",
        itemStyle: {
          color: "#00D2BA",
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
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
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
    name: "(次)",
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
      name: "电梯",
      type: "line",
      data: [
        2,
        1,
        3,
        0,
        1,
        3,
        4,
        2,
        5,
        3,
        2,
        3,],
      smooth: true,
      symbol: "none",
      lineStyle: {
        color: "#FF6C83",
        width: "1",
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0.5, color: "rgba(255, 108, 131, 0.2)" }, // 0% 处的颜色
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
      name: "冷热源",
      type: "line",
      data: [
        8,
        11,
        6,
        14,
        12,
        15,
        7,
        9,
        10,
        8,
        14,
        8,],
      smooth: true,
      symbol: "none",
      lineStyle: {
        color: "#FF9433",
        width: "1",
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0.5, color: "rgba(255, 148, 51, 0.2)" }, // 0% 处的颜色
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
      name: "供配电",
      type: "line",
      data: [
        20,
        23,
        28,
        26,
        22,
        18,
        16,
        20,
        25,
        28,
        17,
        15,],
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
      name: "监控摄像头",
      type: "line",
      data: [16,
        17,
        19,
        18,
        15,
        16,
        20,
        18,
        19,
        16,
        18,
        20,],
      smooth: true,
      symbol: "none",
      lineStyle: {
        color: "#00D2BA",
        width: "1",
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0.5, color: "rgba(0, 210, 186, 0.2)" }, // 0% 处的颜色
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
}