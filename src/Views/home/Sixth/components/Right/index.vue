<template>
  <div class="container">
    <Header>能耗趋势与排名</Header>

    <div class="item-box">
      <h5>耗电统计</h5>
      <div class="chart" ref="chart1Ref"></div>
    </div>
    <div class="item-box">
      <h5>耗水统计</h5>
      <div class="chart" ref="chart2Ref"></div>
    </div>
    <div class="item-box">
      <h5>能耗排名</h5>
      <div class="chart" ref="chart4Ref"></div>
      <div class="chart" ref="chart3Ref"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, ref, onMounted } from "vue";
import Header from "../Header.vue";
import * as echarts from "echarts";
import { option1, option2, option3, option4 } from "./echartsOpt/index";
export default defineComponent({
  name: "",
  components: { Header },
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
      self.chart1 = echarts.init(chart1Ref.value);
      self.chart1.setOption(option1);

      self.chart2 = echarts.init(chart2Ref.value);
      self.chart2.setOption(option2);

      self.chart3 = echarts.init(chart3Ref.value);
      self.chart3.setOption(option3);

      self.chart4 = echarts.init(chart4Ref.value);
      self.chart4.setOption(option4);
    });
    return {
      ...toRefs(self),
      chart1Ref,
      chart2Ref,
      chart3Ref,
      chart4Ref,
    };
  },
});
</script>
<style lang="scss" scoped>
.container {
  padding: 30px 10px 10px;
  .item-box {
    margin-bottom: 15px;
    h5 {
      font-family: PingFangSC-Medium;
      font-weight: Medium;
      font-size: 14px;
      color: #dbd8ab;
      // letter-spacing: 7.2px;
      width: 100%;
      // padding: 0 120px;
      // line-height: 128px;
      // height: 128px;
      background: url("~@/assets/images/基础框架通用元素切图/三级标题块/长.png")
        no-repeat;
      background-size: 100% 100%;
      margin: 6px 0;
      padding: 5px 0;
      // margin-top: 36px;
      // margin-bottom: 40px;
    }
  }
  .chart {
    width: 100%;
    height: calc((100vh - 60px - 30px) / 5);
  }
}
</style>
