<template>
  <div class="part">
    <div class="lease_title">电梯检修统计</div>

    <div class="chart bar">
      <V3Echarts
        width="370"
        height="260"
        :options="option3"
        top="10"
        container="container4"
      />
    </div>
  </div>

  <div class="part">
    <div class="lease_title">整改完成趋势</div>
    <V3Echarts
      width="370"
      height="240"
      :options="option4"
      top="10"
      container="container5"
    />
  </div>
  <div class="part">
    <div class="lease_title">运行工况</div>
    <div class="carousel_wrap">
      <el-carousel
        direction="vertical"
        indicator-position="none"
        :autoplay="true"
        loop
      >
        <el-carousel-item v-for="item in banner" :key="item">
          <div class="list" v-for="list in item" :key="list.id">
            <p>{{ list.name }}</p>
            <span
              >{{ list.num }}<i>{{ list.company }}</i></span
            >
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import V3Echarts from "@/components/V3Echarts";
import { option3, option4 } from "../data";
import { creatRandom } from "@/utils/index";
export default {
  components: { V3Echarts },
  data() {
    return {
      option3,
      option4,
      banner: [
        [
          {
            id: 2001,
            name: "电梯名称",
            num: "10Q-FT1-1扶梯",
            company: "",
          },
          {
            id: 2002,
            name: "电梯运行状态",
            num: "上行",
            company: "",
          },
          {
            id: 2003,
            name: "点梯楼显",
            num: "2F",
            company: "",
          },
          {
            id: 2004,
            name: "电梯环境监测",
            num: "温度：20、湿度：30",
            company: "",
          },
          {
            id: 2005,
            name: "电梯监控",
            num: "摄像头",
            company: "",
          },
          {
            id: 2006,
            name: "故障状态",
            num: "无故障",
            company: "",
          },
        ],
        [
          {
            id: 2001,
            name: "电梯名称",
            num: "10Q-FT1-2扶梯",
            company: "",
          },
          {
            id: 2002,
            name: "电梯运行状态",
            num: "上行",
            company: "",
          },
          {
            id: 2003,
            name: "点梯楼显",
            num: "6F",
            company: "",
          },
          {
            id: 2004,
            name: "电梯环境监测",
            num: "温度：20、湿度：30",
            company: "",
          },
          {
            id: 2005,
            name: "电梯监控",
            num: "摄像头",
            company: "",
          },
          {
            id: 2006,
            name: "故障状态",
            num: "无故障",
            company: "",
          },
        ],
        [
          {
            id: 2001,
            name: "电梯名称",
            num: "10Q-FT2-1扶梯",
            company: "",
          },
          {
            id: 2002,
            name: "电梯运行状态",
            num: "下行",
            company: "",
          },
          {
            id: 2003,
            name: "点梯楼显",
            num: "9F",
            company: "",
          },
          {
            id: 2004,
            name: "电梯环境监测",
            num: "温度：20、湿度：30",
            company: "",
          },
          {
            id: 2005,
            name: "电梯监控",
            num: "摄像头",
            company: "",
          },
          {
            id: 2006,
            name: "故障状态",
            num: "无故障",
            company: "",
          },
        ],
      ],
      timer: null,
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      this.playOption3();
      this.playOption4();
    }, 3000);
  },
  methods: {
    playOption3() {
      this.option3.series[0].data.forEach((item, index) => {
        this.option3.series[0].data[index] = creatRandom(1, 6);
      });
    },
    playOption4() {
      this.option4.series[0].data.forEach((item, index) => {
        this.option4.series[0].data[index] = creatRandom(35, 70);
      });
    },
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
    @include Right(-20);
    @include Top(92);
    transform: translate(0, -50%);
    font-family: SJyunhei-Regular;
    font-weight: Regular;
    @include FontSize(16);
    color: #ffffff;
    @include LineHeight(40);
  }
}
.bar {
  @include wHeight(230);
}

.carousel_wrap {
  @include PaddingTop(5);
  p {
    font-family: PingFangSC-Medium;
    font-weight: Medium;
    @include FontSize(16);
    @include LetterSpacing(1);
    color: #ffffff;
  }
  span {
    font-family: SJyunhei-Regular;
    font-weight: Regular;
    @include FontSize(16);
    color: #ffc622;
    @include LetterSpacing(1.5);
    float: right;
  }
  .list {
    @include wHeight(45);
    @include LineHeight(45);

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
}
</style>
