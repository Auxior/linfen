<template>
  <div class="alarmPie">
    <Lease_title>入住统计</Lease_title>
    <div class="LouyuNumber_tops" @click="shopClick()">
      <div class="fhrufh" v-for="(its, index) in MinList1" :key="index">
        <div class="LouyuNumber_top">
          <img :src="its.image" />
          <p>{{ its.fanYuan }}</p>
          <div>
            <span>{{ its.number }}</span>
            <span>{{ its.shuLiang }}</span>
          </div>
        </div>
        <div class="LouyuNumber_top bottom">
          <img :src="its.image1" />
          <p>{{ its.fanYuan1 }}</p>
          <div>
            <span>{{ its.number1 }}</span>
            <span>{{ its.shuLiang1 }}</span>
          </div>
        </div>
      </div>
    </div>
    <chyCharts height="210" :options="options" container="alarmPie"></chyCharts>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import * as echarts from "echarts";
import chyCharts from "../../components/v3echarts.vue";
export default defineComponent({
  setup() {
    // let array1 = [
    //   { name: "人工智能", value: 43, unit: "家" },
    //   { name: "鲲鹏计算", value: 217, unit: "家" },
    //   { name: "科技金融", value: 55, unit: "家" },
    // ];

    let options = ref({
      color: ["#2D98FF", "#FF9433"],
      title: {
        text: "入住趋势",
        padding: [10, 0, 0, 15],
        textStyle: {
          fontSize: 16,
          color: "#fff",
          fontWeight: 100,
          fontFamily: "Tencent",
        },
      },
      tooltip: {
        show: true,
        trigger: "axis",
        // formatter: function (params: any) {
        //     return `<span>${params.data.name}</span><br/><span>${params.data.value}万</span>`
        // },
        axisPointer: {
          type: "none",
          label: {
            background: "#000",
            boxShadow: " 0px 8px 48px 4px rgba(0,0,0,0.4)",
            borderRadius: " 0px 0px 0px 0px",
            // opacity: 1;
            border: "0px solid rgba(255, 255, 255, 0.16)",
          },
        },
        borderRadius: 20,
        //   borderWidth: 2,
        borderColor: "transparent",
        padding: 15,
        backgroundColor: "rgba(0,0,0,.6)",
        textStyle: {
          color: "#fff",
          fontSize: 14,
        },
      },
      legend: {
        icon: "roundRect",
        itemGap: 10, //间距
        show: true,
        textStyle: {
          padding: 5,
          fontSize: 14,
          color: "#fff",
          fontFamily: "OPPOSans R",
        },
        itemWidth: 12,
        itemHeight: 6,
        data: ["企业", "商家"],
        right: 30,
        top: 35,
        align: "left",
      },
      grid: {
        left: "5%",
        right: "2%",
        bottom: "5%",
        top: "35%",
        containLabel: true,
      },

      xAxis: {
        axisLabel: {
          //轴上的字 字体、样式
          inside: false,
          fontSize: 12,
          fontFamily: "OPPOSans R",
          color: "rgba(255,255,255,.8)",
          margin: 10,
        },
        type: "category",
        boundaryGap: false,
        data: ["2017", "2018", "2019", "2020", "2021"],
        axisLine: {
          lineStyle: {
            width: 1,
            color: "#FFFFFF",
            opacity: 0.3,
          },
        },
        axisTick: {
          show: false,
        },
      },
      yAxis: {
        name: "（家）",
        nameTextStyle: { fontSize: "12px", padding: [0, 0, 5, -30] },
        axisLabel: {
          //轴上的字 字体、样式
          inside: false,
          fontSize: "12",
          fontFamily: "OPPOSans R",
          color: "rgba(255,255,255,0.8)",
          margin: 10,
        },
        type: "value",
        min: 0,
        interval: 200,
        max: 800,
        splitLine: {
          //决定是否显示坐标中网格
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            width: 1,
            color: "#FFFFFF",
            opacity: 0.3,
          },
        },
      },
      series: [
        {
          lineStyle: {
            color: "#2D98FF",
            width: 2,
          },

          name: "企业",
          type: "line",
          smooth: true,
          showSymbol: false,
          symbolSize: 4,
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgba(2, 145, 255, .5)" },
              { offset: 0.5, color: "rgba(2, 145, 255, .3)" },
              { offset: 1, color: "rgba(2, 145, 255, .4)" },
            ]),
          },
          emphasis: {
            focus: "series",
          },
          data: [401, 427, 456, 484, 660],
        },
        {
          lineStyle: {
            color: "#FF9433",
            width: 1,
          },
          name: "商家",
          type: "line",
          symbolSize: 4,
          smooth: true,
          showSymbol: false,
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgba(255, 148, 51, .5)" },
              { offset: 0.5, color: "rgba(255, 148, 51, .3)" },
              { offset: 1, color: "rgba(255, 148, 51, .4)" },
            ]),
          },
          emphasis: {
            focus: "series",
          },
          data: [135, 157, 164, 180, 184],
        },
      ],
    });

    let MinList1 = ref([
      {
        image: require("../../../../../assets/images/Seventh/icon_房源@2x.png"),
        image1: require("../../../../../assets/images/Seventh/icon_建筑面积@2x.png"),
        fanYuan: "入驻企业",
        number: 660,
        shuLiang: "家",
        fanYuan1: "入驻商家",
        number1: 184,
        shuLiang1: "家",
      },
    ]);

    const shopClick = () => {
      console.log(111111111111111);
      //   active.value = !active.value;
      //   console.log(ctagdata.value, " active.value11111");
      //   if (active.value == true) {
      //     __g.customTag.clear();
      //     AddzsCtag_DigtialBuilding(zsctagdata.value, false);
      //     AddCtag_NumberEnterPrise(ctagdata.value, active.value);
      //   }
      //   if (active.value == false) {
      //     AddCtag_NumberEnterPrise(ctagdata.value, false);
      //   }
    };
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
      MinList1,
      shopClick,
    };
  },

  components: {
    chyCharts,
  },
});
</script>
<style lang="scss" scoped>
.LouyuNumber_tops {
  cursor: pointer;
  width: 100%;
  height: 100px;
  // border: 4px solid red;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // padding-left: 20px;
  .fhrufh {
    .LouyuNumber_top {
      width: 100%;
      // border: 4px solid red;
      display: flex;
      align-items: center;
      white-space: nowrap;
      img {
        @include Width(40);
        // @include Height(40);
        margin: 5px 5px 0 5px;
      }
      p {
        @include FontSize(16);
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #ffffff;
        line-height: 30px;
        text-align: left;
        // margin: 0px 250px 0 0px;
      }
      > div {
        //   margin-top: 20px;
        span {
          &:nth-child(1) {
            @include FontSize(30);
            font-family: SJyunhei-Regular, SJyunhei;
            font-weight: 400;
            color: #f6c84c;
            // padding-top:20px;
            line-height: 40px;
            letter-spacing: 2px;
            display: inline-block;
            @include Width(80);
            cursor: pointer;
            margin: 0px 0px 0 70px;
          }
          &:nth-child(2) {
            @include FontSize(14);
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #fff;
            line-height: 28px;
            letter-spacing: 2px;
          }
        }
      }
    }
    .bottom {
      p {
        // margin: 0px 250px 0 0px;
      }
    }
  }
}
</style>
