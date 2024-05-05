<template>
  <div class="orderList">
        <div class="lease_title">工单统计</div>
        <div class="list">
      <div class="Shuzhi" v-for="item in list" :key="item.id">
        <span
          :class="[
            'value',
            item.status == 2 ? 'normal' : item.status == 3 ? 'error' : '',
          ]"
          >{{ item.value }}</span
        >
        <span class="label">{{ item.label }}</span>
      </div>
    </div>
          <div class="body">
        <div class="nums">
          <div class="num" v-for="(item, index) in list2" :key="index">
            {{ item.value }}
          </div>
        </div>
        <div class="points">
          <div class="line"></div>
          <div class="boxs">
            <span class="point"></span>
          </div>
          <div class="boxs">
            <span class="point"></span>
          </div>
          <div class="boxs">
            <span class="point"></span>
          </div>
        </div>
        <div class="status">
          <div class="item">
            <div class="text">未处理</div>
          </div>
          <div class="item">
            <div class="text">处理中</div>
          </div>
          <div class="item">
            <div class="text">已处理</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive,ref } from 'vue'
export default defineComponent({
  setup() {
//工单统计
let list = ref([
  { id: 1, value: "54909", label: "工单总数 (个)", status: 1 },
  { id: 3, value: "1318", label: "异常超时统计工单 (个)", status: 3 },
]);
//工单详情
let list2 = ref([{ value: 0 }, { value: 89 }, { value: 52420 }]);

    return {
      list,
      list2
    }
  }

})

</script>
<style lang="scss" scoped>
.orderList {
  width: 100%;
    height: 210px;
    // border: 1px solid red;
    padding: 5px;
    background-color: #192333;
    .list {
  display: flex;
  justify-content: space-around;
  margin-bottom: 3px;
}
.Shuzhi {
  // width: 472px;
  // height: 472px;
  // border: 1px solid rgb(255, 0, 128);
  span {
    display: block;
  }
  .value {
    font-size: 32px;
    font-family: Tencent;
    font-weight: 500;
    cursor: pointer;
    color: #f6c84c;
    text-align: center;
    line-height: 24px;
    -webkit-background-clip: text;
    margin: 10px 0 10px 0;
  }
  .label {
    font-size: 16px;
    font-family: PingFang SC-Medium, PingFang SC;
    font-weight: 500;
    color: #ffffff;
    line-height: 24px;
    text-align: center;
    -webkit-background-clip: text;
  }
  .normal {
    color: #fff;
  }
  .error {
    color: #f6574d;
  }
}

// 工单统计
.body {
  width: 100%;
  margin: 0 auto;
  .nums {
    .num {
      font-size: 24px;
      font-family: Tencent;
      color: #fff;
    }
  }
  .points {
    position: relative;
    .point {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 5px solid #796d38;
      background-color: #f6c84c;
      z-index: 10;
    }
    .line {
      position: absolute;
      top: 50%;
      left: 15%;
      width: 70%;
      height: 1px;
      border: 2px dashed rgb(141, 140, 140);
      border-bottom: none;
    }
  }
  .status {
    height: 40px;
    margin-top: 8px;
    background: url("../../../../../assets/images/Seventh/底盘.png")
      no-repeat;
    background-size: 100% 100%;
    .item {
      font-size: 18px;
    }
  }
  > * {
    width: 90%;
    display: flex;
    justify-content: space-between;
    > * {
      width: 33%;
      display: flex;
      justify-content: center;
    }
  }
}
}
</style>