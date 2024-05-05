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
    text: "98%",
    subtext: "在线率",
    x: "76%",
    y: "35%",
    textAlign: "center",
    textStyle: {
      fontWeight: "500",
      color: "#00D2BA",
      fontFamily: "微软雅黑",
      fontSize: 20,
      lineHeight: "20",
    },
    subtextStyle: {
      fontWeight: "500",
      color: "#fff",
      fontFamily: "微软雅黑",
      fontSize: 14,
    }
  },
  series: [
    // 刻度
    {
      type: "gauge",
      radius: "77%", // 1行3个
      center: ["75%", "52%"],
      splitNumber: 10,
      // min: 0,
      max: 100,
      startAngle: 180,
      endAngle: 0,
      z: 99,
      // 线
      axisLine: {
        lineStyle: {
          width: 1,
          color: [[1, "rgba(255,255,255,0)"]],
        },
        detail: {
          formatter: "{value}",
        },
        data: [
          {
            value: 50,
            name: "SCORE",
          },
        ],
      },
      //刻度标签。
      axisTick: {
        show: true,
        splitNumber: 3, //刻度的段落数
        lineStyle: {
          color: "#02C2A2",
          width: 1, //刻度的宽度
          shadowColor: "#67FFFC",
          shadowBlur: 1,
        },
        length: 5, //刻度的长度
      },
      splitLine: {
        //文字和刻度的偏移量
        show: false,
      },
      // //刻度线文字
      axisLabel: {
        show: false,
      },
      data: [
        {
          // 指针指向的位置
          value: 98,
          name: "SCORE",
          itemStyle: {
            color: "#02C3A2",
          },
        },
      ],
      pointer: {
        show: true,
        length: "15%",
        radius: "50%",
        width: 2, //指针粗细
        offsetCenter: [0, -70],
      },
      detail: {
        show: false,
      },
      title: {
        // 仪表盘标题。
        show: false,
      },
    },
    // 光边 + 指针
    {
      // name: "在线率",
      type: "pie",
      radius: ["50%", "58%"],
      center: ["76%", "53%"],
      startAngle: 180,
      endAngle: 0,
      color: [
        {
          type: "linear",
          x: 1,
          y: 0,
          x2: 0,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "transparent", // 0% 处的颜色
            },
            {
              offset: 0.5,
              color: "#64BDEB", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#33A391", // 100% 处的颜色
            },
          ],
        },
        "transparent",
      ],
      hoverAnimation: true,
      legendHoverLink: false,
      z: 10,
      labelLine: {
        normal: {
          show: false,
        },
      },
      data: [
        {
          value: 54,
        },
        {
          value: 50.5,
        },
      ],
    },
    // 内层阴影
    {
      type: "pie",
      hoverAnimation: false,
      label: {
        show: false,
      },
      center: ["76%", "53%"],
      radius: ["0%", "46%"],
      startAngle: 180,
      data: [
        {
          value: 100,
          itemStyle: {
            normal: {
              color: {
                type: "radial",
                x: 0.5,
                y: 0.5,
                r: 0.5,
                colorStops: [
                  { offset: 0, color: "#00C2EB" },
                  { offset: 1, color: "#094461" },
                ],
              },
              opacity: 0.2,
            },
          },
        },
        {
          value: 100,
          color: "transparent",
        },
      ],
    },
  ],
}



// 饼图 整改
export const option2 = {
  color: ["#ec7585", "#13ceba", "#2d98ff"],
  graphic: {
    elements: [
      {
        type: "text",
        left: "22%",
        top: "38%",
        style: {
          fill: "#00D2BA",
          text: ["50"],
          font: "18px Tencent",
        },
      },
      {
        type: "text",
        left: "30%",
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
    data: ["待处理", "处理中", "已完成"],
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
          name: "待处理",
          unit: "处",
        },
        {
          value: 217,
          name: "处理中",
          unit: "处",
        },
        {
          value: 55,
          name: "已完成",
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

// 饼图 统计
export const option3 = {
  color: ["#ec7585", "#13ceba", "#2d98ff", "#ffc620"],
  tooltip: PIE_TOOLTIP,
  legend: {
    top: "10%",
    right: "15%",
    orient: "vertical",
    data: ["摄像头", "闸机", "烟雾报警器", "人脸识别仪"],
    itemGap: 23,
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
      center: ["25%", "45%"],
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
          name: "摄像头",
          unit: "座",
        },
        {
          value: 65,
          name: "闸机",
          unit: "座",
        },
        {
          value: 55,
          name: "烟雾报警器",
          unit: "座",
        },
        {
          value: 80,
          name: "人脸识别仪",
          unit: "座",
        },
      ],
    },
    {
      name: "外边框",
      type: "pie",
      clockWise: false, //是否需要顺时加载
      hoverAnimation: false, //是否需要鼠标移入变大
      center: ["25%", "45%"],
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
// 柱图 资产
export const option4 = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
    },
    formatter: "{b} : {c} 台",
  },
  grid: {
    top: "10%",
    bottom: "25%",
  },
  xAxis: {
    type: "category",
    axisLabel: {
      formatter: function (value: any) {
        return value.split("").join("\n");
      },
      color: "rgba(255, 255, 255, 0.8)",
      fontSize: "16px",
      interval: 0,
    },
    axisLine: {
      lineStyle: {
        dashOffset: 12,
        type: [5, 10],
        color: "rgba(255, 255, 255, 0.5)",
      },
    },
    axisTick: {
      show: false,
    },
    data: [
      "强电",
      "客梯",
      "货梯",
      "扶梯",
      "暖通",
      "给排水",
      "消防",
      "弱电",
      "摄像头",
    ],
  },
  yAxis: {
    type: "value",
    splitLine: {
      show: true,
      lineStyle: {
        type: [5, 10],
        color: "rgba(255, 255, 255, 0.5)",
      },
    },
    axisLabel: {
      color: "rgba(255, 255, 255, 1)",
      fontSize: "16px",
    },
  },
  series: [
    {
      barWidth: 11,
      itemStyle: {
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 1,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "#13c2fe", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#6de8ff", // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
      },
      data: [
        514, 498, 456, 251, 136, 694, 42, 29, 462
      ],
      type: "bar",
    },
  ],
}