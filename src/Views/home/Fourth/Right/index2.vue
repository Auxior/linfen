<template>
  <div class="container">
    <div class="item-box">
      <Header>设备故障趋势</Header>
      <V3Echarts :options="option7" :height="230" container="equipment" />
    </div>
    <div class="item-box">
      <Header>安防告警趋势</Header>
      <V3Echarts :options="option8" :height="230" container="fire-alarm" />
    </div>
    <div class="item-box">
      <Header>通行趋势</Header>
      <h5>人行</h5>
      <V3Echarts :options="option9" :height="280" container="traffic" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  toRefs,
  reactive,
  onMounted,
  onBeforeUnmount,
} from "vue";
import V3Echarts from "@/components/V3Echarts/index.vue";
import Header from "../components/Header.vue";
import { option7, option8, option9 } from "./echartsOpt";
import _ from "lodash";
export default defineComponent({
  name: "",
  components: { Header, V3Echarts },
  setup() {
    const self = reactive({ option7, option8, option9 });
    let timer: any;
    onMounted(() => {
      timer = setInterval(() => {
        self.option7.series.forEach((item) => {
          item.data.length = 0;
          for (let index = 0; index < 13; index++) {
            item.data.push(_.random(50, 100));
          }
        });
        self.option8.series.forEach((item) => {
          item.data.length = 0;
          for (let index = 0; index < 13; index++) {
            item.data.push(+_.random(2, 10, true).toFixed(2));
          }
        });
        self.option9.series.forEach((item, index) => {
          item.data.length = 0;
          for (let index2 = 0; index2 < 13; index2++) {
            item.data.push(
              +_.random(
                (self.option9.series.length - index) * 10 + index * 2,
                (self.option9.series.length - index) * 15 + index * 2
              )
            );
          }
        });
      }, 1000 * 3);
    });
    onBeforeUnmount(() => {
      timer && clearInterval(timer);
    });
    return {
      ...toRefs(self),
    };
  },
});
</script>
<style lang="scss" scoped>
.item-box {
  // margin-bottom: 10%;
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
</style>
