<template>
  <div class="lease_title"><slot></slot></div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive } from "vue";
export default defineComponent({
  name: "",
  setup() {
    const self = reactive({});
    return {
      ...toRefs(self),
    };
  },
});
</script>
<style lang="scss" scoped></style>
