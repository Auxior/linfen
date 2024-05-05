<template>
  <div class="part">
    <div class="lease_title">告警响应统计</div>

    <div class="chart pipe">
      <V3Echarts
        width="370"
        height="250"
        :options="option2"
        top="10"
        container="container2"
      />
      <div class="labels">
        <div v-for="(item, index) in option2.series[0].data" :key="index">
          <V3count
            :startVal="0"
            :endVal="Math.ceil(item.value)"
            :duration="2000"
          ></V3count>
          个
        </div>
      </div>
    </div>
  </div>
  <div class="part watch">
    <div class="lease_title">设备损坏占比</div>
    <div class="chart">
      <div class="rental">
        <div>
          <V3count :startVal="0" :endVal="total" :duration="2000"></V3count>
          <span>总设备数</span>
        </div>
        <div class="arcdfe">
          <V3count
            style="color: #f6c84c"
            :startVal="0"
            :endVal="problem"
            :duration="2000"
          ></V3count>
          <span>损坏设备数</span>
        </div>
      </div>

      <V3Echarts
        width="370"
        height="250"
        :options="option1"
        top="10"
        container="container1"
      />
    </div>
  </div>

  <div class="part list">
    <div class="lease_title">设备告警趋势</div>
    <V3Echarts
      width="370"
      height="280"
      :options="option5"
      top="10"
      container="container3"
    />
  </div>
</template>

<script>
import { option1, option2, option5 } from "../data";
import V3Echarts from "@/components/V3Echarts";
import { creatRandom } from "@/utils/index";
export default {
  data() {
    return {
      option1,
      option2,
      option5,
      operatingTable: [
        {
          id: 1,
          num: "6号楼",
          operation: "运行20个，故障3个",
        },
        {
          id: 2,
          num: "7号楼",
          operation: "运行25个，故障2个",
        },
        {
          id: 3,
          num: "8号楼",
          operation: "运行12个，故障0个",
        },
        {
          id: 4,
          num: "9号楼",
          operation: "运行35个，故障3个",
        },
        {
          id: 5,
          num: "10号楼",
          operation: "运行23个，故障1个",
        },
        {
          id: 6,
          num: "11号楼",
          operation: "运行15个，故障0个",
        },
        {
          id: 7,
          num: "12号楼",
          operation: "运行17个，故障1个",
        },
      ],
      list: [
        {
          id: 1,
          name: "空调主机01",
          location: "生态园二区/9栋A座负3层/空调主机房",
        },
        {
          id: 2,
          name: "空调主机02",
          location: "生态园二区/9栋A座天面",
        },
        {
          id: 3,
          name: "空调主机03",
          location: "生态园二区/9栋B1座负3层/空调主机房",
        },
        {
          id: 4,
          name: "空调主机04",
          location: "生态园三区/11栋A座负3层/空调主机房",
        },
        {
          id: 5,
          name: "空调主机05",
          location: "生态园四区/12栋B座负3层/空调主机房",
        },
        {
          id: 6,
          name: "空调主机06",
          location: "生态园一区/1栋D座负1层/空调主机房",
        },
        {
          id: 7,
          name: "空调主机07",
          location: "生态园二区/9栋A座天面",
        },
        {
          id: 8,
          name: "空调主机08",
          location: "生态园二区/9栋B1座负3层/空调主机房",
        },
      ],
      total: 1000,
      problem: 150,
      timer: null,
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      this.playOption2();
      this.playOption1();

      this.playOption5();
    }, 3000);
  },
  components: { V3Echarts },
  methods: {
    // 饼图动
    playOption2() {
      this.option2.series[0].data.forEach((item) => {
        item.value = creatRandom(1, 100);
      });

      this.option2.graphic.elements[0].style.text = [creatRandom(1, 100)];
    },
    // 仪表盘动
    playOption1() {
      // 异常设备数 100-200 随机
      this.problem = creatRandom(100, 500);
      let showBfb = Math.floor((this.problem / this.total) * 100);
      this.option1.title.text = `异常率: ${showBfb}%`;
      this.option1.series[1].data = [showBfb];
    },
    // 折线图动
    playOption5() {
      this.option5.series.forEach((item, index) => {
        item.data.forEach((v, i) => {
          item.data[i] = creatRandom(index * 10, (index + 1) * 10);
        });
      });
    },
  },
  unmounted() {
    clearInterval(this.timer);
  },
};
</script>
<style lang="scss" scoped>
.contenet {
  width: 100%;
}
.chart {
  width: 100%;
  position: relative;
  @include wHeight(170);
  &-container {
    height: 100%;
  }
  .labels {
    position: absolute;
    @include Right(-20);
    @include Top(92);
    transform: translate(0, -50%);
    font-family: SJyunhei-Regular;
    font-weight: Regular;
    @include FontSize(16);
    color: #ffffff;
    @include LineHeight(55);
  }
}
.chart.pipe {
  @include wHeight(180);
}
.list {
  height: auto;
  &-header {
    width: 100%;
    @include wHeight(40);
    background: rgba(58, 72, 85, 0.4);
    @include BorderRadius(2);
    @include MarginTop(20);
    opacity: 0.7;
    font-family: PingFangSC-Regular;
    font-weight: Regular;
    @include FontSize(14);
    color: #ffffff;
    @include LetterSpacing(1);
    display: flex;
    align-items: center;
    span {
      text-align: center;
    }
    span:nth-child(1) {
      @include Width(100);
    }
    span:nth-child(2) {
      @include Width(120);
    }
    span:nth-child(3) {
      @include Width(120);
    }
    span:nth-child(4) {
      @include Width(120);
    }
    span:nth-child(5) {
      flex: 1;
    }
  }
  .line {
    width: 100%;
    @include wHeight(1);
    opacity: 0.5;
    background: #ffffff;
    @include MarginRight(108);
  }
  ul {
    width: 100%;
    @include MarginRight(108);
    @include wHeight(300);
    overflow-y: auto;
    li {
      display: flex;
      align-items: center;
      @include wHeight(40);
      font-family: PingFangSC-Medium;
      font-weight: Medium;
      @include FontSize(12);
      color: #ffffff;
      @include LetterSpacing(1);
      &:nth-child(even) {
        @include wHeight(40);
        background: rgba(62, 104, 172, 0.15);
        @include BorderRadius(2);
      }
      span {
        text-align: center;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      span:nth-child(1) {
        @include Width(100);
      }
      span:nth-child(2) {
        @include Width(120);
      }
      span:nth-child(3) {
        @include Width(120);
      }
      span:nth-child(4) {
        @include Width(120);
      }
      span:nth-child(5) {
        flex: 1;
      }
    }
  }
}

.watch {
  @include wHeight(300);
  .rental {
    width: 100%;
    // height: 220px;
    // border: 4px solid red;
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    position: relative;
    > div {
      //   width: 692px;
      //   height: 220px;
      // border: 4px solid red;
      width: 50%;
      text-align: center;
      span {
        display: block;
        font-family: PingFangSC-Medium;
        font-weight: Medium;
        @include FontSize(16);
        color: rgba(255, 255, 255, 0.8);
        @include LetterSpacing(1);
        text-align: center;
        @include LineHeight(32);
        &:nth-child(1) {
          font-family: SJyunhei-Regular;
          font-weight: Regular;
          @include LineHeight(32);
          @include FontSize(32);
          color: #2d98ff;
        }
      }
      &:nth-child(1) {
        position: relative;
        border-right: 1px solid;
        border-image: linear-gradient(to top, transparent, #fff, transparent) 7
          15;
        // &:before {
        //   content: "";
        //   position: absolute;
        //   @include Width(4);
        //   @include wHeight(70);
        //   opacity: 0.4;
        //   border: 1px solid #ffffff;
        //   right: -40px;
        // }
      }
    }
  }
}
</style>
