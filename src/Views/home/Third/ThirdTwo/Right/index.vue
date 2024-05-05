<template>
  <div class="part">
    <div class="lease_title">整改响应统计</div>

    <div class="chart pipe">
      <V3Echarts
        width="370"
        height="250"
        :options="option2"
        top="10"
        container="container2"
      />
      <div class="labels">
        <div v-for="(item, index) in option2Data" :key="index">
          <V3count :startVal="0" :endVal="item" :duration="3000"></V3count>个
        </div>
      </div>
    </div>
  </div>

  <div class="part list">
    <div class="secondTitle">告警列表</div>
    <div class="list-header">
      <span>序号</span>
      <span>设备名称</span>
      <span>处理状态</span>
    </div>
    <div class="line"></div>
    <ul>
      <Vue3SeamlessScroll :list="list" :hover="true" :step="0.1">
        <li v-for="i in list" :key="i.id">
          <span>{{ i.id }}</span>
          <span style="color: #ffc622">{{ i.name }}</span>
          <span v-if="i.id % 2 !== 0" style="color: #ec7585">未响应</span>
          <span v-else style="color: #00d2ba">已响应</span>
        </li>
      </Vue3SeamlessScroll>
    </ul>
  </div>

  <div class="part">
    <div class="lease_title">其他设施统计</div>
    <V3Echarts
      width="370"
      height="240"
      :options="option4"
      top="10"
      container="container4"
    />
  </div>
</template>

<script>
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
import V3Echarts from "@/components/V3Echarts";
import { option2, option4 } from "../data";
import { creatRandom } from "@/utils/index";
import { useChaiLouStore } from "@/stores/chailou";

export default {
  components: { V3Echarts, Vue3SeamlessScroll },
  data() {
    return {
      option2,
      option4,
      option2Data: [43, 217, 55],
      list: [
        {
          id: 1,
          name: "空调主机01",
          location: "生态园二区/9栋A座负3层/空调主机房",
        },
        {
          id: 2,
          name: "闸机02",
          location: "生态园二区/9栋A座一楼大厅",
        },
        {
          id: 3,
          name: "空调主机03",
          location: "生态园二区/9栋B1座负3层/空调主机房",
        },
        {
          id: 4,
          name: "东门围栏",
          location: "生态园三区/11栋A座后东门",
        },
        {
          id: 5,
          name: "烟雾报警器05",
          location: "生态园四区/12栋B座负3层/地下停车场",
        },
        {
          id: 6,
          name: "消防栓",
          location: "生态园一区/1栋D座1层/图书馆",
        },
        {
          id: 7,
          name: "球形摄像头",
          location: "生态园二区/9栋A座天面",
        },
        {
          id: 8,
          name: "空调主机08",
          location: "生态园二区/9栋B1座负3层/空调主机房",
        },
      ],
      timer: null,
      chailouStore: useChaiLouStore(),
    };
  },
  methods: {
    playOption2() {
      this.option2.series[0].data.forEach((item, index) => {
        let num = creatRandom(1, 100);
        this.option2Data[index] = num;
        item.value = num;
      });

      this.option2.graphic.elements[0].style.text = [creatRandom(1, 100)];
    },
    playOption4() {
      this.option4.series[0].data.forEach((item, index) => {
        this.option4.series[0].data[index] = creatRandom(50, 550);
      });
    },
  },
  mounted() {
    this.timer = setInterval(() => {
      this.playOption2();
      this.playOption4();
    }, 3000);
  },
  unmounted() {
    clearInterval(this.timer);
  },
};
</script>
<style lang="scss" scoped>
.chart {
  width: 100%;
  position: relative;
  @include wHeight(180);
  &-container {
    height: 100%;
  }
  .labels {
    position: absolute;
    @include Right(-10);
    @include Top(92);
    transform: translate(0, -50%);
    font-family: SJyunhei-Regular;
    font-weight: Regular;
    @include FontSize(16);
    color: #ffffff;
    @include LineHeight(56);
  }
}

.part.list {
  height: auto;
  .list-header {
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
    @include wHeight(270);
    overflow-y: hidden;
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
</style>
