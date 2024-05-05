<template>
  <div class="right-container">
    <!-- <Header>告警趋势与排名</Header> -->

    <!-- <div class="item-box">
      <h5>设备告警</h5>
      <div class="chart" ref="chart1Ref"></div>
    </div> -->
    <div class="item-box">
      <!-- <div class="lease_title">客流监控</div> -->
      <!-- <h5>车辆通行视频</h5> -->
      <Header>车辆通行视频</Header>
      <h5>园区北门</h5>
      <div class="monitor">
        <video src="/video/videoD.mp4" autoplay muted loop></video>
      </div>
    </div>
    <div class="item-box">
      <!-- <h5>园区车流趋势</h5> -->
      <Header>园区车流趋势</Header>
      <h5>当日车流</h5>
      <!-- <div class="chart" ref="chart2Ref"></div> -->
      <v3echarts :options="option6" container="chartTraffic" :height="210" />
    </div>
    <div class="item-box">
      <!-- <h5>告警分类统计</h5> -->
      <Header>各出入口车流统计 </Header>

      <div class="chart" ref="chart4Ref"></div>
      <!-- <div class="chart" ref="chart3Ref"></div> -->
      <v3echarts
        :options="option3"
        container="chartAlterCategory"
        :top="5"
        :height="300"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, ref, onMounted } from "vue";
import Header from "../components/Header.vue";
import * as echarts from "echarts";
import {
  option1,
  option2,
  option3,
  option4,
  option6,
} from "./echartsOpt/index";
import v3echarts from "@/components/V3Echarts/index.vue";
export default defineComponent({
  name: "",
  components: { Header, v3echarts },
  setup() {
    const self = reactive({
      chart1: undefined as any,
      chart2: undefined as any,
      chart3: undefined as any,
      chart4: undefined as any,
    });
    const chart1Ref = ref();
    const chart2Ref = ref();
    const chart3Ref = ref();
    const chart4Ref = ref();
    // const chart4Ref = ref();

    onMounted(() => {
      // self.chart1 = echarts.init(chart1Ref.value);
      // self.chart1.setOption(option1);

      // self.chart2 = echarts.init(chart2Ref.value);
      // self.chart2.setOption(option2);

      // self.chart3 = echarts.init(chart3Ref.value);
      // self.chart3.setOption(option3);

      self.chart4 = echarts.init(chart4Ref.value);
      self.chart4.setOption(option4);
    });
    return {
      ...toRefs(self),
      chart1Ref,
      chart2Ref,
      chart3Ref,
      chart4Ref,
      option2,
      option6,
      option3,
    };
  },
});
</script>
<style lang="scss" scoped>
.right-container {
  // padding: 30px 10px 10px;
  .item-box {
    // margin-bottom: 30px;
    @include MarginBottom(30);
    h5 {
      font-family: PingFangSC-Medium;
      font-weight: Medium;
      // font-size: 14px;
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
      // margin: 6px 0;
      // padding: 5px 0;
      @include Margin(6, 0, 6, 0);
      @include Padding(5, 0, 5, 10);
      // margin-top: 36px;
      // margin-bottom: 40px;
    }
  }
  .chart {
    width: 100%;
    // height: calc((100vh - 60px - 30px) / 5);
  }
}
.monitor {
  // margin-top: 20px;
  @include MarginTop(20);
  width: 95%;
  margin-left: 5%;
  // height: 180px;
  @include hHeight(190);
  background: rgba($color: #fff, $alpha: 0.2);
  // border-radius: 2px;
  @include BorderRadius(2);
  // padding: 10px;
  @include Padding(5, 5, 5, 5);
  video {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
}
</style>
