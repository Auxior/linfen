<template>
  <div class="part">
    <div class="lease_title">资产信息</div>
    <div class="chart">
      <div class="left-part1-txt">
        <div>
          <V3count
            :startVal="0"
            :endVal="option1Lables.num1"
            :duration="3000"
          ></V3count>
          <p>设施数量（个）</p>
        </div>
        <div>
          <V3count
            :startVal="0"
            :endVal="option1Lables.num2"
            :duration="1500"
          ></V3count>
          <p>当前报警数（个）</p>
        </div>
        <div>
          <V3count
            :startVal="0"
            :endVal="option1Lables.num3"
            :duration="1500"
          ></V3count>
          <p>已响应（个）</p>
        </div>
        <div>
          <V3count
            :startVal="0"
            :endVal="option1Lables.num4"
            :duration="1500"
          ></V3count>
          <p>未响应（个）</p>
        </div>
      </div>
      <V3Echarts
        width="370"
        height="300"
        :options="option1"
        top="10"
        container="container1"
      />
    </div>
  </div>

  <div class="part standard">
    <div class="secondTitle">设备概况</div>

    <!-- <h5>{{ item.title }}</h5> -->
    <div class="statistics">
      <div
        class="animate__animated animate__fadeInUp"
        v-for="i in statistics"
        :key="i.id"
      >
        <img :src="i.icon" alt="" />
        <div>
          <V3count
            style="color: #ffc662"
            :startVal="0"
            :endVal="i.num"
            :duration="1500"
          ></V3count>

          <p>{{ i.name }}</p>
        </div>
      </div>
    </div>
    <div class="list">
      <div
        v-for="(item, index) in standardData"
        :key="item.id"
        class="animate__animated animate__fadeInUp"
        :style="`animation-delay:  ${index * 300}ms`"
      >
        <img :src="item.icon" alt="" />
        <p>
          {{ item.name
          }}<span>
            <V3count
              style="color: #ffc662"
              :startVal="0"
              :endVal="item.num"
              :duration="3000"
            ></V3count
            ><i>{{ item.company }}</i></span
          >
        </p>
      </div>
    </div>
  </div>

  <div class="part">
    <div class="secondTitle">安防设施统计</div>

    <div class="chart pipe">
      <V3Echarts
        width="370"
        height="230"
        :options="option3"
        top="10"
        container="container3"
      />
      <div class="labels">
        <div v-for="(item, index) in option3Data" :key="index">
          <V3count :startVal="0" :endVal="item" :duration="3000"></V3count>个
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { option1, option3 } from "../data";
import V3Echarts from "@/components/V3Echarts";
import { creatRandom } from "@/utils/index";
export default {
  data() {
    return {
      option1,
      option1Lables: {
        num1: 7287,
        num2: 12,
        num3: 9,
        num4: 3,
      },
      option3,
      option3Data: [5, 10, 140, 140],
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

      standardData: [
        {
          id: 1,
          icon: require("@/assets/images/third/icon5.png"),
          name: "设备设施子类",
          num: 3042,
          company: "类",
        },
        {
          id: 2,
          icon: require("@/assets/images/third/icon6.png"),
          name: "保养标准",
          num: 2,
          company: "个",
        },
        {
          id: 3,
          icon: require("@/assets/images/third/icon7.png"),
          name: "巡检标准",
          num: 3,
          company: "个",
        },
        {
          id: 4,
          icon: require("@/assets/images/third/icon8.png"),
          name: "配置符合度",
          num: 60,
          company: "%",
        },
      ],
      statistics: [
        {
          id: 201,
          icon: require("@/assets/images/third/icon3.png"),
          num: 10911,
          name: "设备总数（个）",
        },
        {
          id: 202,
          icon: require("@/assets/images/third/icon4.png"),
          num: 2931,
          name: "A类设备总数(个)",
        },
      ],
    };
  },
  components: { V3Echarts },
  methods: {
    playOption3() {
      this.option3Data.forEach((item, index) => {
        let num = creatRandom(10, 200);
        this.option3.series[0].data[index].value = num;
        this.option3Data[index] = num;
      });
    },
    playOption1() {
      let chartNum = creatRandom(75, 90);
      this.option1.series[0].data[0].value = chartNum;
      this.option1.title.text = chartNum + "%";

      this.option1Lables.num2 = creatRandom(5, 15);
      this.option1Lables.num3 = creatRandom(5, 15);
      this.option1Lables.num4 = creatRandom(0, 10);
    },
    playOtherData() {
      this.standardData.forEach((item, index) => {
        if (index === 3) {
          item.num = creatRandom(5, 100);
        } else {
          item.num = creatRandom(5, 500);
        }
      });

      this.statistics.forEach((item) => {
        item.num = creatRandom(2000, 10000);
      });
    },
  },
  mounted() {
    this.timer = setInterval(() => {
      // this.playOption3();
      this.playOption1();
      // this.playOtherData();
    }, 3000);
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
    @include LineHeight(40);
  }
}
.chart .left-part1-txt {
  position: absolute;
  @include Left(-15);
  top: 40%;
  transform: translate(0, -50%);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @include wHeight(100);
  @include Width(200);
  span {
    display: inline-block;
    width: 100%;
    font-weight: Regular;
    @include FontSize(25);
    color: #f6c84c;
    @include LetterSpacing(1);
    @include MarginBottom(10);
    text-align: center;
    font-family: SJyunhei-Regular;
  }
  // span {
  //   @include FontSize(14);
  // }
  p {
    font-weight: Regular;
    @include FontSize(12);
    color: #ffffff;
    text-align: center;
  }
  > div {
    width: 50%;
  }
  > div:nth-child(1),
  > div:nth-child(2) {
    @include MarginBottom(10);
  }
  > div:nth-child(3) span {
    color: #00d2ba;
  }
  > div:nth-child(4) span {
    color: #fe6c83;
  }
}

.standard {
  height: auto;
  .list {
    @include MarginTop(30);
    > div {
      @include wHeight(60);
      display: flex;
      @include LineHeight(60);
      align-items: center;
    }
    > div > img {
      @include wHeight(45);
      @include Margin(0, 10, 0, 10);
    }
    > div > p {
      flex: 1;
      @include FontSize(18);
      color: rgba($color: #fff, $alpha: 0.8);
      display: flex;
      justify-content: space-between;
      @include LetterSpacing(2);
      > span {
        @include FontSize(25);
        color: #ffc662;
        @include LetterSpacing(2);
        > i {
          @include FontSize(16);
          color: #fff;
        }
      }
    }
  }
  .statistics {
    display: flex;
    @include Width(370);
    @include wHeight(50);
    @include MarginTop(30);
    justify-content: space-between;
    align-content: center;
    img {
      @include Width(45);
      @include wHeight(45);
    }
    > div:first-child {
      border-right: 1px solid;
      border-image: linear-gradient(to top, transparent, #fff, transparent) 7 15;
    }
    > div {
      display: flex;
      text-align: right;
      width: 48%;
      justify-content: space-between;
      align-content: center;
      @include PaddingRight(20);
      > div {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
      }
    }

    span {
      font-family: SJyunhei-Regular;
      font-weight: Regular;
      @include FontSize(25);
      color: #f6c84c;
      // margin-top: -10px;
      @include wHeight(25);
    }
    span {
      // font-size: 46px;
      color: #ffffff;
      @include LetterSpacing(1);
      float: none;
      @include PaddingLeft(5);
    }
    p {
      @include FontSize(13);
      @include LetterSpacing(1);
      @include PaddingTop(5);
    }
  }
}
</style>
