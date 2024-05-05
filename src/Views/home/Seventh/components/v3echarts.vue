<template>
  <div
    :style="`width:100%;height:${height}px;margin-top:${top}px`"
    class="container"
    :id="container"
    :ref="container"
  ></div>
</template>

<script lang="ts" setup>
import {
  reactive,
  ref,
  watch,
  onMounted,
  watchEffect,
  nextTick,
  markRaw,
} from "vue";
import * as charts from "echarts";
// export default defineComponent({
const props = defineProps({
  options: {
    type: Object,
    require: true,
  },
  width: {
    type: String,
    default: "860",
  },
  height: {
    type: String,
    default: "400",
  },
  top: {
    type: String,
    default: "0",
  },
  isFirst: {
    type: Boolean,
    default: false,
  },
  container: {
    type: String,
    default: "container",
  },
});
const Aecharts: any = reactive({ value: "" });
// const isShow: any = ref(true);
onMounted(() => {
  // setInterval(() => {
  //   let op = reactive({ value: document.getElementById(props.container) });
  //   if (op.value) {
  //     Aecharts.value = markRaw(charts.init(op.value));
  //   }
  //   Aecharts.value.setOption(props.options,true);
  //   console.log("changes");
  //   console.log(props.options);


  // }, 5000);
});

const changeEcharts = (options: any) => {

  Aecharts.value.setOption(options, true);
  setTimeout(() => {
    console.log("重新显示");

    // isShow.value = true;

  }, 1000);

  if (props.isFirst) {
    let index = 0;
    Aecharts.value.dispatchAction({
      type: "highlight",
      seriesIndex: 0,
      dataIndex: 0,
    });
    Aecharts.value.on("mouseover", (e: any) => {
      if (e.dataIndex !== index) {
        Aecharts.value.dispatchAction({
          type: "downplay",
          seriesIndex: 0,
          dataIndex: index,
        });
      }
    });
    Aecharts.value.on("mouseout", (e: any) => {
      index = e.dataIndex;
      Aecharts.value.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: e.dataIndex,
      });
    });
    window.addEventListener("resize", () => {
      setTimeout(() => {
        Aecharts.value.resize({ width: 'auto', height: "auto", animation: { duration: 0 } });
        window.onresize = Aecharts.value.resize
        let op = reactive({ value: document.getElementById(props.container) })
        if (op.value) {
          Aecharts.value = markRaw(charts.init(op.value));
        }
        console.log("重新绘制");
      }, 100);
    })
  }
};

watch(
  () => props.options,
  (newval) => {
    if (Aecharts.value) {
      console.log("已经渲染过,尝试清空");
      // isShow.value = false;

    }
    changeEcharts(newval);
  },
  {
    deep: true,
  }
);

watch(
  () => props.container,
  (newval) => {
    nextTick(() => {
      let op = reactive({ value: document.getElementById(newval) });
      if (op.value) {
        Aecharts.value = markRaw(charts.init(op.value));
      }
      changeEcharts(props.options);
    });
  },
  {
    // deep: true,
    immediate: true,
  }
);
</script>

<style lang="scss" scoped></style>
