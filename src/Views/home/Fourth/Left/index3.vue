<template>
  <div class="container">
    <div class="chat-box">
      <Header>告警分类统计</Header>
      <div class="chart-container" ref="chart1Ref"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, onMounted, ref } from "vue";
import Header from "../components/Header.vue";
export default defineComponent({
  name: "",
  components: { Header },
  setup() {
    const self = reactive({
      chart1: undefined,
    });
    const chart1Ref = ref();
    onMounted(() => {});
    return {
      ...toRefs(self),
    };
  },
});
</script>
<style lang="scss" scoped>
.container {
  height: 100%;
  width: 100%;
}
</style>
