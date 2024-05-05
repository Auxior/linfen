<template>
  <div class="alarmTop">
    <chyCharts
      width="330"
      height="210"
      :options="options"
      :isFirst="true"
      container="alarmTopPie"
    ></chyCharts>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import chyCharts from "../../components/v3echarts.vue";
export default defineComponent({
  setup() {
    // let array1 = [
    //   { name: "人工智能", value: 43, unit: "家" },
    //   { name: "鲲鹏计算", value: 217, unit: "家" },
    //   { name: "科技金融", value: 55, unit: "家" },
    // ];
    const options = ref({
      color: ["#0075FC", "#6DBF3E", "#1D939E"],
      title: {
        text: "告警分类统计",
        textStyle: {
          fontSize: 16,
          color: "#fff",
          fontWeight: 100,
          fontFamily: "Tencent",
        },
      },
      legend: {
        top: "10%",
        right: 0,
        orient: "vertical",
        data: ["待处理", "处理中", "已完成"],
        itemGap: 40,
        itemStyle: {},
        textStyle: {
          padding: 20,
          fontSize: 20,
          color: "#FFF",
          width: 200,
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
      // formatter: function (name: string) {
      //   let _index = 0;
      //   array1.forEach((item, i) => {
      //     if (item.name == name) {
      //       _index = i;
      //     }
      //   });
      //   let arr;
      //   arr = [
      //     `${name}{a|${array1[_index].value}}{unit|${array1[_index].unit}}`,
      //   ];
      //   let item = arr.join("");
      //   return item;
      // },
      series: [
        {
          type: "pie",
          radius: ["50%", "60%"],
          center: ["25%", "50%"],
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
          emphasis: {
            label: {
              show: true,
              fontSize: "20",
              fontWeight: "bold",
              color: "#fff",
              formatter: (params: any) => {
                return `{title|${params.value}}\n${params.data.unit}`;
              },
              rich: {
                title: {
                  fontSize: "24px",
                  color: "#428CF0",
                },
              },
            },
            scaleSize: 5,
          },
          labelLine: {
            show: false,
          },
          data: [
            {
              value: 43,
              name: "待处理",
              unit: "家",
            },
            {
              value: 217,
              name: "处理中",
              unit: "家",
              itemStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 1,
                  colorStops: [
                    { offset: 0, color: "#000" },
                    { offset: 0.7, color: "#6DBF3E" },
                  ],
                  globalCoord: false, // 缺省为 false
                },
              },
            },
            {
              value: 55,
              name: "已完成",
              unit: "家",
              itemStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 1,
                  colorStops: [
                    { offset: 0, color: "#000" },
                    { offset: 0.7, color: "#1D939E" },
                  ],
                  globalCoord: false, // 缺省为 false
                },
              },
            },
          ],
        },
        {
          name: "外边框",
          type: "pie",
          clockWise: false, //是否需要顺时加载
          hoverAnimation: false, //是否需要鼠标移入变大
          center: ["25%", "50%"],
          radius: ["70%", "71%"],
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
    });
   
   
   onMounted(() => {
      // setInterval(() => {
      //   options.value.series[0].data[0].value = Math.floor(Math.random() * (100 - 1)) + 1;
      //   options.value.series[0].data[1].value = Math.floor(Math.random() * (100 - 1)) + 1;
      //   options.value.series[0].data[2].value = Math.floor(Math.random() * (100 - 1)) + 1;
      //   console.log("change");
      // }, 5000);
    });

    return {
      options,
    };
  },

  components: {
    chyCharts,
  },
});
</script>
<style lang="scss" scoped>
.alarmTop {
  width: 100%;
  height: 210px;
  // border: 1px solid red;
  padding: 5px;
  background-color: #192333;
}
</style>