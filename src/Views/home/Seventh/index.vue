<!--
 * @Author: your name
 * @Date: 2022-02-22 21:21:02
 * @LastEditTime: 2022-02-22 23:10:33
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWeekly_zhyq\src\Views\home\Seventh\index.vue
-->
<!-- Seventh 第七个页面-（名称） -->
<template>
  <div class="Seventh">
    <LeftBox>
      <div class="leftBox">
        <statistics></statistics>
        <alarmStatus></alarmStatus>
        <alarmType v-show="false"></alarmType>
        <equipment  v-show="false"></equipment>
      </div>
    </LeftBox>
    <RightBox>
      <div class="rightBox">
        <orderList></orderList>
        <orderReduce></orderReduce>
        <orderStatus></orderStatus>
        <orderTime></orderTime>
      </div>
    </RightBox>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LeftBox from "@/components/left_box.vue";
import RightBox from "@/components/right_box.vue";
// left
import alarmStatus from "./children/left/alarmStatus.vue"
import alarmType from "./children/left/alarmType.vue"
import statistics from "./children/left/statistics.vue"
import equipment from "./children/left/equipment.vue"

// right
import orderList from "./children/right/orderList.vue"
import orderReduce from "./children/right/orderReduce.vue"
import orderStatus from "./children/right/orderStatus.vue"
import orderTime from "./children/right/orderTime.vue"

export default defineComponent({
  components: { LeftBox, RightBox, alarmType, statistics, equipment, alarmStatus, orderList, orderReduce, orderStatus, orderTime }

})

</script>
<style lang="scss" scoped>
.leftBox,
.rightBox {
  width: 100%;
  height: 100%;
  position: relative;
  padding: 5px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  > * {
    width: 100%;
    // height: 210px;
    padding: 5px;
  }
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    // padding: 10px;
    border: 1px solid #ccc;
    z-index: 0;
  }
}
.leftBox {
  &::before {
    border-right: none;
    mask: linear-gradient(90deg, #fff 10%, transparent);
  }

  padding-right: 0px;
}
.rightBox {
  &::before {
    border-left: none;
    mask: linear-gradient(270deg, #fff 10%, transparent);
  }
  padding-left: 0px;
}
</style>
