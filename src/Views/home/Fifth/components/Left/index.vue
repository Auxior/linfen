<template>
  <Lease_title>能源告警中心</Lease_title>
  <Box>
    <div class="list-box">
      <div class="list-header">
        <div
          class="alert-item"
          v-for="(item, index) in alertCategory"
          :key="item.icon"
          @click="changeActive(index)"
          :class="{
            'alert-item-active': index === alertActiveIndex,
          }"
        >
          <el-badge :value="item.total" class="item" :max="99">
            <Icon :icon="item.icon" fontSize="22" />
          </el-badge>
          <div class="item-title">{{ item.title }}</div>
        </div>
      </div>
      <div class="list-wrap">
        <div
          class="list-item"
          :class="[
            getLevStyle(item.level),
            { clicked: item.clickState },
            'animate__animated animate__fadeInUp',
          ]"
          v-for="(item, index) in alertList.filter(
            (item) =>
              item.icon === alertCategory[alertActiveIndex].icon ||
              alertCategory[alertActiveIndex].title === '全部'
          )"
          :key="index"
          @click="item.clickState = 1"
          :style="`animation-delay:  ${index * 300}ms`"
        >
          <div class="title">
            {{ item.title }} {{ item.name ? "- " + item.name : "" }}
          </div>
          <div class="desc">{{ item.desc }}</div>
          <div class="date-time">{{ item.date }}</div>
          <div class="icon-box">
            <Icon :icon="item.icon" fontSize="22" />
          </div>
        </div>
      </div>
    </div>
  </Box>

  <Dialog
    :visible="dialogStore.dialogVisible"
    :width="390"
    :height="260"
    :title="dialogStore.title"
    @close="dialogClose"
    :XY="dialogStore.XY"
  >
    <div class="content">
      <p v-for="(item, index) in dialogStore.content" :key="index">
        {{ item.key }}：<b>{{ item.value }}</b
        ><span>{{ item.dw ? item.dw : "" }}</span>
      </p>
    </div>
  </Dialog>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive } from "vue";
import Lease_title from "@/components/Lease_title/index.vue";
import Box from "@/components/Box/index.vue";
import { useDialogStore } from "@/stores/dialog";

export default defineComponent({
  name: "",
  components: { Lease_title, Box },
  setup() {
    let dialogStore = useDialogStore();
    const self = reactive({
      alertCategory: [
        {
          icon: "yijicaidan",
          title: "全部",
          total: 12,
        },
        {
          icon: "gaiicon-",
          title: "能效告警",
          total: 10,
        },
        // {
        //   icon: "gongxiangdanche",
        //   total: 0,
        //   title: "便捷通行",
        // },
        // {
        //   icon: "guifandunpai",
        //   total: 0,
        //   title: "综合安防",
        // },
        {
          icon: "wangguanshebei",
          total: 0,
          title: "设备告警",
        },
        // {
        //   icon: "kongjian",
        //   total: 0,
        //   title: "环境空间",
        // },
      ],
      alertActiveIndex: 0,
      alertList: [
        {
          title: "需量预警",
          desc: "进线功率偏高",
          name: "设备1",
          icon: "gaiicon-",
          level: 2,
          date: "2021-05-06 16:01:23",
          clickState: 0,
        },
        {
          title: "需量预警",
          desc: "进线功率偏高",
          icon: "gaiicon-",
          name: "设备3",

          level: 2,
          date: "2021-05-06 16:01:23",
          clickState: 0,
        },
        {
          title: "需量预警",
          desc: "进线功率偏高",
          icon: "gaiicon-",
          name: "设备5",

          level: 2,
          date: "2021-05-06 16:01:23",
          clickState: 0,
        },
        {
          title: "需量预警",
          desc: "进线功率偏低",
          icon: "gaiicon-",
          name: "设备9",

          level: 3,
          date: "2021-05-06 16:01:23",
          clickState: 0,
        },
        // {
        //   title: "工单处理异常",
        //   desc: "未处理工单较多",
        //   level: 1,
        //   icon: "wangguanshebei",
        //   clickState: 0,
        //   date: "2021-05-08 13:23:48",
        // },
        {
          title: "设备预警",
          desc: "部分参数异常",
          icon: "wangguanshebei",
          level: 3,
          clickState: 0,
          date: "2021-05-13 09:18:26",
        },
        {
          title: "水表告警",
          desc: "部分参数异常",
          name: "A001",

          icon: "wangguanshebei",
          level: 3,
          clickState: 0,
          date: "2021-05-13 09:18:26",
        },
        {
          title: "水表告警",
          desc: "部分参数异常",
          name: "A002",

          icon: "wangguanshebei",
          level: 3,
          clickState: 0,
          date: "2021-05-13 09:18:26",
        },
        {
          title: "水表告警",
          desc: "部分参数异常",
          name: "A003",

          icon: "wangguanshebei",
          level: 3,
          clickState: 0,
          date: "2021-05-13 09:18:26",
        },
        {
          title: "电表告警",
          desc: "部分参数异常",
          name: "A001",

          icon: "wangguanshebei",
          level: 3,
          clickState: 0,
          date: "2021-05-13 09:18:26",
        },
        {
          title: "电表告警",
          name: "A002",
          desc: "部分参数异常",
          icon: "wangguanshebei",
          level: 3,
          clickState: 0,
          date: "2021-05-13 09:18:26",
        },
        {
          title: "电表告警",
          name: "A003",
          desc: "部分参数异常",
          icon: "wangguanshebei",
          level: 3,
          clickState: 0,
          date: "2021-05-13 09:18:26",
        },
      ],
    });

    self.alertCategory.forEach((item) => {
      item.total = self.alertList.reduce((pre, curr) => {
        if (item.icon === curr.icon || item.title === "全部") {
          return pre + 1;
        }
        return pre;
      }, 0);
    });

    const levStyles = ["remind", "abnormal", "warning", "error"];
    const getLevStyle = (lev: number) => {
      let len = levStyles.length;
      if (lev > len) lev = len - 1;
      return levStyles[lev];
    };
    const changeActive = (index: number) => {
      self.alertActiveIndex = index;
    };

    const dialogClose = () => {
      dialogStore.setDialogVisible(false);
    };
    return {
      ...toRefs(self),
      changeActive,
      getLevStyle,
      dialogStore,
      dialogClose,
    };
  },
});
</script>
<style lang="scss" scoped>
// .container {
//   @include Padding(30, 10, 10, 10);
//   height: 100%;
//   box-sizing: border-box;
// }
.list-box {
  width: 100%;
  height: 100%;
  // display: flex;
  // flex-direction: column;
  .list-header {
    // height: 150px;
    width: 100%;
    @include hHeight(100);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    // padding-left: 10px;
    @include PaddingLeft(10);

    box-sizing: border-box;
    .alert-item {
      @include Width(110);

      display: flex;
      justify-content: left;
      align-items: center;
      cursor: pointer;
      @include FontSize(14);

      color: #c0c0c0;
      .item-title {
        @include MarginLeft(5);
      }
      &:deep(.el-badge) {
        .el-badge__content--danger {
          @include Width(25);
          @include hHeight(15);
          @include BorderRadius(15);
          display: flex;
          justify-content: center;
          align-items: center;

          background: red;
        }
        .el-badge__content {
          border: none;

          @include FontSize(12);
          zoom: 0.8;
        }
      }
    }
    .alert-item-active {
      color: #fff;
      @include hHeight(15);

      transition: text-shadow 0.3s;
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff700,
        0 0 70px #fff700;
    }
  }
  .list-wrap {
    display: flex;
    flex-direction: column;
    // flex-wrap: wrap;
    overflow-y: auto;
    overflow-x: hidden;
    @include hHeightCalc(300);
    justify-content: flex-start;
    align-items: center;
    // max-height: calc(100vh - 190px);
    // max-height: calc(100vh * (290px) / $referanceHeight);
    .list-item {
      width: 100%;
      @include hHeight(80);
      @include MarginRight(10);
      @include MarginBottom(10);

      background-image: linear-gradient(
        to right,
        rgba(34, 81, 168, 0.185),
        rgba(25, 113, 221, 0)
      );

      position: relative;
      // padding: 10px 15px;
      @include Padding(10, 15, 10, 15);

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-sizing: border-box;
      @include FontSize(12);

      cursor: pointer;
      .title {
        @include FontSize(14);
      }
      .icon-box {
        position: absolute;
        @include Right(40);
      }

      &::before {
        content: "";
        position: absolute;
        @include Left(3);

        top: 0;
        @include Width(5);

        height: 100%;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0 0px 3px rgba(255, 255, 255, 1);
      }

      &.remind {
        .icon-box {
          color: rgb(0, 70, 248);
        }
      }
      &.abnormal {
        .icon-box {
          color: rgb(85, 46, 228);
        }
      }
      &.warning {
        .icon-box {
          color: rgb(171, 166, 92);
        }
      }
      &.error {
        .icon-box {
          color: rgb(156, 13, 74);
        }
      }
    }
    .clicked {
      background-image: linear-gradient(
        to right,
        rgba(0, 70, 248, 0.15),
        rgba(25, 113, 221, 0)
      );

      &::before {
        transition: all 0.3s;
        background: rgb(74, 118, 169);
        box-shadow: none;
      }
    }
    // @keyframes clicked {
    //   0% {
    //     opacity: 0.5;
    //   }
    //   50% {
    //     opacity: 0;
    //   }
    //   100% {
    //     opacity: 1;
    //   }
    // }
  }
}

.content {
  @include Padding(0, 0, 0, 30);
  p {
    @include wHeight(30);
    @include LineHeight(30);
    @include FontSize(16);
    color: #fff;
    width: 100%;
    b {
      @include FontSize(18);
      color: #ffc662;
      display: inline-block;
      @include Margin(0, 2, 0, 30);
      @include FontSize(16);
      font-weight: 500;
    }
    span {
      @include FontSize(16);
      color: #ffc662;
      display: inline-block;
      @include Margin(0, 2, 0, 30);
      font-weight: 500;
    }
  }
}
</style>
