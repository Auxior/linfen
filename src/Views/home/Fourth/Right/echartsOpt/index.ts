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
    name: "次",
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
    name: "次",
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
    show: false,
  },
  grid: {
    top: "10%",
    left: "8%",
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
      name: "楼栋",
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
    left: "8%",
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
      name: "人员布控",
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
    bottom: "8%",
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
};

// 园区车流趋势
export const option6 = {
  tooltip: LINE_TOOLTIP,
  legend: {
    icon: "rect",
    itemWidth: 10,
    itemHeight: 10,
    itemGap: 0,
    // left: "0%",
    right: 5,
    top: "3%",
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
    top: "30%",
    left: "0%",
    right: "8%",
    bottom: "0%",
    containLabel: true,
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
    boundaryGap: false,
  },
  yAxis: {
    type: "value",
    name: "(辆)",
    // offset: -5,
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
// 设备故障趋势
export const option7 = {
  tooltip: LINE_TOOLTIP,
  legend: {
    icon: "rect",
    // itemWidth: 48,
    // itemHeight: 12,
    itemGap: 20,
    left: "right",
    top: "3%",
    textStyle: LEGEND,
    data: [
      {
        name: "24小时设备故障",
        icon: "rect",
        // itemStyle: {
        //   color: "#2D98FF",
        // },
      },
      {
        name: "故障恢复",
        icon: "rect",
        // itemStyle: {
        //   color: "#FF9433",
        // },
      },
    ],
  },
  grid: {
    top: "30%",
    left: "5%",
    right: "8%",
    bottom: "0%",
    containLabel: true,
  },
  color: ["#FF9433", "#2D98FF"],
  xAxis: {
    type: "category",
    data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    name: "(月)",
    nameTextStyle: {
      ...XAXIS_NAME,
    },
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
    name: "(次)",
    offset: -5,
    max: 100,
    axisLine: {
      show: true,
    },
    axisLabel: AXIS_LABEL,
    // data:[100,200,300,400],
    nameTextStyle: {
      ...YAXIS_NAME,
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
  series: [
    {
      name: "24小时设备故障",
      type: "line",
      data: [60, 55, 60, 65, 70, 80, 64, 80, 60, 85, 60, 80, 64],
      smooth: true,
      symbol: "none",
      lineStyle: {
        // color: "#2D98FF",
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
      name: "故障恢复",
      type: "line",
      data: [40, 35, 40, 45, 50, 60, 44, 60, 40, 65, 40, 60, 44],
      smooth: true,
      symbol: "none",
      lineStyle: {
        // color: "#FF9433",
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
// 消防告警趋势
export const option8 = {
  tooltip: LINE_TOOLTIP,
  legend: {
    itemGap: 10,
    itemWidth: 8,
    itemHeight: 8,
    left: "right",
    top: "3%",
    // padding:[10,10],
    data: [
      {
        name: "本月消防事件",
        itemStyle: {
          // color:"#fff",
        },
        textStyle: LEGEND,
      },
      {
        name: "上月同比",
        textStyle: LEGEND,
      },
    ],
  },
  grid: {
    top: "30%",
    left: "3%",
    right: "8%",
    bottom: "3%",
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
    name: "(次)",
    offset: -5,
    max: 10,
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
      name: "本月消防事件",
      type: "bar",
      data: [2, 9.9, 7.0, 3, 5.6, 4, 9.9, 7.0, 2.2, 5.6, 3, 7],
      barWidth: 5,
      itemStyle: {
        // borderRadius: 4,
        color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [
          {
            offset: 0,
            color: "#81C1FF",
          },
          {
            offset: 0.7,
            color: "#2D98FF",
          },
        ]),
      },
    },
    {
      name: "上月同比",
      type: "bar",
      barWidth: 5,
      data: [1, 8.9, 6.0, 6, 2.6, 2, 6.9, 5.0, 7.2, 8.6, 5, 3],
      itemStyle: {
        // borderRadius: 4,
        color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [
          {
            offset: 0,
            color: "#B8FFE2",
          },
          {
            offset: 0.7,
            color: "#00D2BA",
          },
        ]),
      },
    },
  ],
};

// 通行
export const option9 = {
  tooltip: LINE_TOOLTIP,
  legend: {
    icon: "rect",
    itemWidth: 15,
    itemHeight: 3,
    itemGap: 10,
    left: "center",
    top: "6%",
    textStyle: LEGEND,
    data: [
      {
        name: "员工进入",
        icon: "rect",
        itemStyle: {
          // color: "#2D98FF",
        },
      },
      {
        name: "员工出行",
        icon: "path://M6 5L8 5L8 6L6 6ZM9 5L11 5L11 6L9 6ZM12 5L14 5L14 6L12 6Z",
        itemStyle: {
          // color: "#2D98FF",
        },
      },
      {
        name: "访客进入",
        icon: "rect",
        itemStyle: {
          // color: "#FF9433",
        },
      },
      {
        name: "访客出行",
        icon: "path://M6 5L8 5L8 6L6 6ZM9 5L11 5L11 6L9 6ZM12 5L14 5L14 6L12 6Z",
        itemStyle: {
          // color: "#FF9433",
        },
      },
    ],
  },
  grid: {
    top: "35%",
    left: "5%",
    right: "8%",
    bottom: "5%",
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
    name: "(次)",
    offset: -5,
    max: 70,
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
  color: ["#2D98FF", "#2D98FF", "#FF9433", "#FF9433"],
  series: [
    {
      name: "员工进入",
      type: "line",
      data: [50, 45, 50, 55, 60, 70, 54, 70, 50, 70, 50, 54],
      smooth: true,
      symbol: "none",
      lineStyle: {
        color: "#2D98FF",
        width: 2,
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
      name: "员工出行",
      type: "line",
      data: [30, 25, 30, 35, 40, 50, 34, 50, 30, 55, 30, 54],
      smooth: true,
      symbol: "none",
      lineStyle: {
        color: "#2D98FF",
        width: 2,
        type: "dashed",
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
      name: "访客进入",
      type: "line",
      data: [45, 38, 44, 52, 53, 65, 50, 60, 40, 65, 46, 54],
      smooth: true,
      symbol: "none",
      lineStyle: {
        color: "#FF9433",
        width: 2,
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
    {
      name: "访客出行",
      type: "line",
      data: [29, 12, 20, 52, 23, 48, 30, 31, 18, 45, 22, 23],
      smooth: true,
      symbol: "none",
      lineStyle: {
        color: "#FF9433",
        width: 2,
        type: "dashed",
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
// 各出入口车流趋势
export const option10 = {
  tooltip: LINE_TOOLTIP,
  legend: {
    itemWidth: 10,
    itemHeight: 10,
    // itemGap: 50,
    left: "center",
    top: "5%",
    textStyle: LEGEND,
    data: [
      {
        name: "一区",
        icon: "rect",
        itemStyle: {
          color: "#FF6C83",
        },
      },
      {
        name: "二区",
        icon: "rect",
        itemStyle: {
          color: "#FF9433",
        },
      },
      {
        name: "三区",
        icon: "rect",
        itemStyle: {
          color: "#2D98FF",
        },
      },
      {
        name: "四区",
        icon: "rect",
        itemStyle: {
          color: "#00D2BA",
        },
      },
    ],
  },
  grid: {
    top: "30%",
    left: "5%",
    right: "8%",
    bottom: "3%",
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
    nameTextStyle: YAXIS_NAME,
    axisLine: {
      show: false,
    },
    // splitLine:{
    //     show:true,
    // }
  },
  yAxis: {
    type: "value",
    name: "(辆)",
    offset: 0,
    max: 100,
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
      name: "一区",
      type: "line",
      stack: "Total",
      data: [
        120 / 10,
        132 / 10,
        101 / 10,
        134 / 10,
        90 / 10,
        230 / 10,
        210 / 10,
        101 / 10,
        134 / 10,
        90 / 10,
        230 / 10,
        210 / 10,
      ],
      smooth: true,
      symbol: "none",
      lineStyle: {
        color: "#FF6C83",
        width: "2",
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
        symbolSize: 5,
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
      name: "二区",
      type: "line",
      stack: "Total",
      data: [
        134 / 10,
        230 / 10,
        210 / 10,
        90 / 10,
        120 / 10,
        132 / 10,
        101 / 10,
        210 / 10,
        90 / 10,
        120 / 10,
        132 / 10,
        101 / 10,
      ],
      smooth: true,
      symbol: "none",
      lineStyle: {
        color: "#FF9433",
        width: "2",
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
        symbolSize: 5,
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
      name: "三区",
      type: "line",
      stack: "Total",
      data: [
        90 / 10,
        230 / 10,
        210 / 10,
        120 / 10,
        132 / 10,
        101 / 10,
        134 / 10,
        210 / 10,
        120 / 10,
        132 / 10,
        101 / 10,
        134 / 10,
      ],
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
        symbolSize: 5,
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
      name: "四区",
      type: "line",
      stack: "Total",
      data: [
        90 / 10,
        230 / 10,
        210 / 10,
        120 / 10,
        132 / 10,
        101 / 10,
        134 / 10,
        210 / 10,
        120 / 10,
        132 / 10,
        101 / 10,
        134 / 10,
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
            { offset: 0.5, color: "rgba(0, 210, 186, 0.2)" }, // 0% 处的颜色
            { offset: 1, color: " RGB(36,46,70)" },
          ]),
        },
      },
      markPoint: {
        symbol: "circle",
        symbolSize: 5,
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
// 违章停车
export const option11 = {
  tooltip: LINE_TOOLTIP,
  legend: {
    icon: "rect",
    itemWidth: 10,
    itemHeight: 10,
    itemGap: 0,
    // left: "0%",
    right: "right",
    top: "3%",
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
    left: "0%",
    right: "6%",
    bottom: "0%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    data: [
      "2-15",
      "2-16",
      "2-13",
      "2-14",
      "2-15",
      "2-16",
      "2-17",
      "2-18",
      "2-19",
      "2-20",
      "2-21",
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
    boundaryGap: 0,
  },
  yAxis: {
    type: "value",
    name: "(辆)",
    // offset: -5,
    // max: 1000,
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
      name: "违停",
      type: "line",
      data: [153, 213, 122, 165, 128, 192, 135, 160, 112, 90, 147],
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
