<template>
  <div class="container">
    <div class="item-box">
      <Header> 能耗统计情况 </Header>
      <div class="statistics-info">
        <div class="title">耗电统计</div>
        <div class="row">
          <!-- <div class="col">
            <div class="value">3326</div>
            <span>累计总耗电（万度）</span>
          </div> -->
          <div class="col">
            <div class="value">277</div>
            <span>本月总耗电（万度）</span>
          </div>
          <div class="col">
            <div class="value">269</div>
            <span>上月总耗电（万度）</span>
          </div>
          <div class="col">
            <div class="value">
              98
              <span>%</span>
            </div>
            <span>耗电环比</span>
          </div>
          <div class="col">
            <div class="value">
              102
              <span>%</span>
            </div>
            <span>耗电同比</span>
          </div>
        </div>
        <div class="title">耗水统计</div>
        <div class="row">
          <!-- <div class="col">
            <div class="value">31156</div>
            <span>累计总耗水（吨）</span>
          </div> -->
          <div class="col">
            <div class="value">2596</div>
            <span>本月总耗水（吨）</span>
          </div>
          <div class="col">
            <div class="value">2590</div>
            <span>上月总耗水（吨）</span>
          </div>
          <div class="col">
            <div class="value">
              97
              <span>%</span>
            </div>
            <span>耗水环比</span>
          </div>
          <div class="col">
            <div class="value">
              110
              <span>%</span>
            </div>
            <span>耗水同比</span>
          </div>
        </div>
      </div>
    </div>
    <div class="item-box" style="margin-bottom: 0px">
      <Header>资产信息</Header>
      <div style="height: 250px" ref="assetInformationRef"></div>
    </div>
    <!-- <div class="item-box">
      <Header>运行工况</Header>
      <div class="run-status">
        <div class="list" v-for="list in runStatus" :key="list.id">
          <p>{{ list.name }}</p>
          <span
            >正常运行:{{ list.num }}<i>故障：{{ list.malfunction }}</i></span
          >
        </div>
      </div>
    </div> -->

    <div class="item-box">
      <Header>用能综合趋势</Header>
      <div style="height: 250px" ref="energyConsumptionRef"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, ref, onMounted } from "vue";
import Header from "../Header.vue";
import * as echarts from "echarts";
import { LEGEND, PIE_TOOLTIP } from "@/utils/chartConfig";
import { option1, option5 } from "./echartsOpt/index";
export default defineComponent({
  name: "",
  components: { Header },
  setup() {
    const self = reactive({
      //用能综合趋势 chart
      energyConsumptionChart: {} as any,
      assetInformationChart: {} as any,
      runStatus: [
        {
          id: 2001,
          name: "一次配电设备",
          num: "158",
          malfunction: "2",
        },
        {
          id: 2002,
          name: "二次末端设备",
          num: "6494",
          malfunction: "9",
        },
        {
          id: 2003,
          name: "冷热源设备",
          num: "208",
          malfunction: "0",
        },
      ],
    });
    const energyConsumptionRef = ref();
    const assetInformationRef = ref();
    onMounted(() => {
      self.energyConsumptionChart = echarts.init(energyConsumptionRef.value);
      self.energyConsumptionChart.setOption(option5);

      self.assetInformationChart = echarts.init(assetInformationRef.value);

      self.assetInformationChart.setOption(option1);
    });
    return {
      ...toRefs(self),
      energyConsumptionRef,
      assetInformationRef,
    };
  },
});
</script>
<style lang="scss" scoped>
.container {
  padding: 30px 10px 10px;
  .item-box {
    margin-bottom: 15px;
    height: calc((100vh - 60px - 30px) / 3.2);
  }
  .run-status {
    .list {
      padding-bottom: 30px;
      height: 25px;
      line-height: 25px;
      margin-top: 15px;
      border-bottom: 1px solid;
      border-image: linear-gradient(
          90deg,
          transparent 0%,
          #fff 53%,
          transparent 100%
        )
        20 20;
      display: flex;
      justify-content: space-between;
    }
    span {
      font-family: SJyunhei-Regular;
      font-weight: Regular;
      font-size: 14px;
      color: #ffc622;
      // letter-spacing: 5.8px;
      float: right;
      display: flex;

      justify-content: space-between;
      width: 49%;
    }
  }
  .statistics-info {
    // height: 1200px;
    .title {
      font-family: PingFangSC-Medium;
      font-weight: Medium;
      font-size: 16px;
      color: #dbd8ab;
      // letter-spacing: 7.2px;
      padding: 3px 12px;
      // line-height: 128px;
      // height: 128px;
      background: url("~@/assets/images/基础框架通用元素切图/三级标题块/长.png")
        no-repeat;
      background-size: 100% 100%;
      margin-top: 12px;
      // margin-bottom: 40px;
    }
    .row {
      display: flex;
      align-items: center;
      // height: 390px;
      height: 80px;
    }
    .col {
      text-align: center;
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3) {
        // width: 500px;
        width: 33%;
      }
      &:nth-child(4),
      &:nth-child(5) {
        width: 33%;
      }
      span {
        font-size: 14px;

        font-family: "PingFang SC";
        text-align: center;
      }
    }
    .value {
      font-size: 28px;
      font-weight: 400;
      font-family: "SJyunhei";
      text-align: center;
      // letter-spacing: 3.5px;
      color: rgba(246, 200, 76, 1);
      margin-bottom: 5px;
      span {
        font-size: 14px;
      }
    }
  }
}
</style>
