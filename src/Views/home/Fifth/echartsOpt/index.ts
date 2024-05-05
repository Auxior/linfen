import {
  AXIS_LABEL,
  LEGEND,
  LINE_TOOLTIP,
  XAXIS_NAME,
  YAXIS_NAME,
} from "@/utils/chartConfig";
import * as echarts from "echarts";
// 耗电统计
export const option1 = {
  tooltip: LINE_TOOLTIP,
  legend: {
    show: false,
  },
  grid: {
    top: "15%",
    left: "0%",
    right: "3%",
    bottom: "5%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    data: [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ],
    axisLabel: AXIS_LABEL,
    nameTextStyle: XAXIS_NAME,
    axisLine: {
      show: false,
    },
    // splitLine:{
    //     show:true,
    // }
  },
  yAxis: {
    type: "value",
    name: "(万度)",
    offset: -5,
    max: 500,
    axisLine: {
      show: false,
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
      name: "三区",
      type: "line",
      stack: "Total",
      data: [350, 300, 350, 300, 260, 260, 320, 300, 250, 150, 200, 250],
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
  ],
};

// 耗水统计
export const option2 = {
  tooltip: LINE_TOOLTIP,
  legend: {
    show: false,
  },
  grid: {
    top: "15%",
    left: "0%",
    right: "3%",
    bottom: "5%",
    containLabel: true,
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
      show: false,
    },
    // splitLine:{
    //     show:true,
    // }
  },
  yAxis: {
    type: "value",
    name: "(吨)",
    offset: -5,
    max: 3000,
    axisLine: {
      show: false,
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
      name: "三区",
      type: "line",
      stack: "Total",
      data: [
        2800, 2000, 2800, 2500, 2000, 1800, 2200, 1000, 1200, 1000, 1500, 1800,
      ],
      smooth: true,
      symbol: "none",
      lineStyle: {
        color: "#00D2BA",
        width: "2",
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0.5, color: "rgba(0,210,186, 0.2)" }, // 0% 处的颜色
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
};

// 能耗排名
export const option3 = {
  tooltip: LINE_TOOLTIP,
  legend: {
    orient: "vertical",
    icon: "none",
    left: "3%",
    top: "5%", // bottom:"20%" // 组件离容器的距离
    width: "auto", // 图例组件的宽度
    height: "auto", // 图例组件的高度
    align: "left", // 图例标记和文本的对齐
    padding: 0, // 图例内边距
    // itemWidth: 50, // 图例标记的图形宽度。
    // itemHeight: 50,
    // itemGap: 105,
    textStyle: LEGEND,
  },
  grid: {
    top: "13%",
    left: "3%",
    right: "14%",
    bottom: "0%",
    containLabel: true,
  },
  xAxis: {
    show: false,
  },
  yAxis: {
    type: "category",
    data: [
      "12号楼",
      "2号楼",
      "5号楼",
      "3号楼",
      "10号楼",
      "6号楼",
      "11号楼",
      "8号楼",
      "9号楼",
      "1号楼",
    ],
    axisLine: {
      show: true,
      lineStyle: {
        color: "rgba(255,255,255,0.6)",
      },
    },
    axisTick: {
      show: false,
    },
    axisLabel: AXIS_LABEL,
    splitLine: {
      //网格线
      lineStyle: {
        color: "#fff",
        type: "dotted",
      },
      show: false, //隐藏或显示
    },
  },
  series: [
    {
      name: "耗水（吨）",
      type: "bar",
      data: [5, 10, 10, 15, 20, 35, 30, 50, 59, 68],
      barWidth: 10,
      label: {
        normal: {
          show: true,
          position: "right",
          textStyle: {
            color: "#ffffff",
            fontSize: "16",
          },
        },
      },
      itemStyle: {
        borderRadius: 4,
        color: function (params: { dataIndex: any }) {
          const colorList = [
            new echarts.graphic.LinearGradient(0, 1, 1, 0, [
              {
                offset: 0,
                color: "#144878",
              },
              {
                offset: 0.7,
                color: "#52D1C4",
              },
            ]),
            new echarts.graphic.LinearGradient(0, 1, 1, 0, [
              {
                offset: 0,
                color: "#144878",
              },
              {
                offset: 0.7,
                color: "#52D1C4",
              },
            ]),
            new echarts.graphic.LinearGradient(0, 1, 1, 0, [
              {
                offset: 0,
                color: "#144878",
              },
              {
                offset: 0.7,
                color: "#52D1C4",
              },
            ]),
            new echarts.graphic.LinearGradient(0, 1, 1, 0, [
              {
                offset: 0,
                color: "#144878",
              },
              {
                offset: 0.7,
                color: "#52D1C4",
              },
            ]),
            new echarts.graphic.LinearGradient(0, 1, 1, 0, [
              {
                offset: 0,
                color: "#144878",
              },
              {
                offset: 0.7,
                color: "#52D1C4",
              },
            ]),
            new echarts.graphic.LinearGradient(0, 1, 1, 0, [
              {
                offset: 0,
                color: "#144878",
              },
              {
                offset: 0.7,
                color: "#52D1C4",
              },
            ]),
            new echarts.graphic.LinearGradient(0, 1, 1, 0, [
              {
                offset: 0,
                color: "#144878",
              },
              {
                offset: 0.7,
                color: "#52D1C4",
              },
            ]),
            new echarts.graphic.LinearGradient(0, 1, 1, 0, [
              {
                offset: 0,
                color: "#144878",
              },
              {
                offset: 0.7,
                color: "#DFCD51",
              },
            ]),
            new echarts.graphic.LinearGradient(0, 1, 1, 0, [
              {
                offset: 0,
                color: "#144878",
              },
              {
                offset: 0.7,
                color: "#BF6D31",
              },
            ]),
            new echarts.graphic.LinearGradient(0, 1, 1, 0, [
              {
                offset: 0,
                color: "#144878",
              },
              {
                offset: 0.7,
                color: "#E9595D",
              },
            ]),
          ];
          return colorList[params.dataIndex];
        },
      },
    },
  ],
};
// 能耗排名
export const option4 = {
  tooltip: LINE_TOOLTIP,
  legend: {
    orient: "vertical",
    icon: "none",
    left: "3%",
    top: "5%", // bottom:"20%" // 组件离容器的距离
    width: "auto", // 图例组件的宽度
    height: "auto", // 图例组件的高度
    align: "left", // 图例标记和文本的对齐
    padding: 0, // 图例内边距
    // itemWidth: 50, // 图例标记的图形宽度。
    // itemHeight: 50,
    // itemGap: 105,
    textStyle: LEGEND,
  },
  grid: {
    top: "13%",
    left: "3%",
    right: "14%",
    bottom: "0%",
    containLabel: true,
  },
  xAxis: {
    show: false,
  },
  yAxis: {
    type: "category",
    data: [
      "12号楼",
      "2号楼",
      "5号楼",
      "3号楼",
      "10号楼",
      "6号楼",
      "11号楼",
      "8号楼",
      "9号楼",
      "1号楼",
    ],
    axisLine: {
      show: true,
      lineStyle: {
        color: "rgba(255,255,255,0.6)",
      },
    },
    axisTick: {
      show: false,
    },
    axisLabel: AXIS_LABEL,
    splitLine: {
      //网格线
      lineStyle: {
        color: "#fff",
        type: "dotted",
      },
      show: false, //隐藏或显示
    },
  },
  series: [
    {
      name: "耗电（万度）",
      type: "bar",
      data: [160, 160, 175, 180, 185, 180, 190, 203, 286, 300],
      barWidth: 10,
      label: {
        normal: {
          show: true,
          position: "right",
          textStyle: {
            color: "#ffffff",
            fontSize: "16",
          },
        },
      },
      itemStyle: {
        borderRadius: 4,
        color: function (params: { dataIndex: any }) {
          const colorList = [
            new echarts.graphic.LinearGradient(0, 1, 1, 0, [
              {
                offset: 0,
                color: "#144878",
              },
              {
                offset: 0.7,
                color: "#52D1C4",
              },
            ]),
            new echarts.graphic.LinearGradient(0, 1, 1, 0, [
              {
                offset: 0,
                color: "#144878",
              },
              {
                offset: 0.7,
                color: "#52D1C4",
              },
            ]),
            new echarts.graphic.LinearGradient(0, 1, 1, 0, [
              {
                offset: 0,
                color: "#144878",
              },
              {
                offset: 0.7,
                color: "#52D1C4",
              },
            ]),
            new echarts.graphic.LinearGradient(0, 1, 1, 0, [
              {
                offset: 0,
                color: "#144878",
              },
              {
                offset: 0.7,
                color: "#52D1C4",
              },
            ]),
            new echarts.graphic.LinearGradient(0, 1, 1, 0, [
              {
                offset: 0,
                color: "#144878",
              },
              {
                offset: 0.7,
                color: "#52D1C4",
              },
            ]),
            new echarts.graphic.LinearGradient(0, 1, 1, 0, [
              {
                offset: 0,
                color: "#144878",
              },
              {
                offset: 0.7,
                color: "#52D1C4",
              },
            ]),
            new echarts.graphic.LinearGradient(0, 1, 1, 0, [
              {
                offset: 0,
                color: "#144878",
              },
              {
                offset: 0.7,
                color: "#52D1C4",
              },
            ]),
            new echarts.graphic.LinearGradient(0, 1, 1, 0, [
              {
                offset: 0,
                color: "#144878",
              },
              {
                offset: 0.7,
                color: "#DFCD51",
              },
            ]),
            new echarts.graphic.LinearGradient(0, 1, 1, 0, [
              {
                offset: 0,
                color: "#144878",
              },
              {
                offset: 0.7,
                color: "#BF6D31",
              },
            ]),
            new echarts.graphic.LinearGradient(0, 1, 1, 0, [
              {
                offset: 0,
                color: "#144878",
              },
              {
                offset: 0.7,
                color: "#E9595D",
              },
            ]),
          ];
          return colorList[params.dataIndex];
        },
      },
    },
  ],
};
export const option5 = {
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
      },
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
      type: "category",
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
    },
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
      name: "三区",
      type: "bar",
      barWidth: 15,
      data: [2, 3, 2, 8, 5, 3],
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
    },
    {
      name: "二区",
      type: "bar",
      barWidth: 15,
      data: [5, 4, 9, 6, 2, 1],
      itemStyle: {
        borderRadius: 1,
        color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [
          {
            offset: 0,
            color: "rgba(74, 118, 169,0.3)",
          },
          {
            offset: 0.7,
            color: "#2d2ada",
          },
        ]),
      },
    },
  ],
};
