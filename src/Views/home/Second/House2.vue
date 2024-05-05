<template>
  <div class="build">
    <el-tooltip class="box-item" effect="dark" content="初始化楼层" placement="left">
      <div @click="show_hideAll" class="top">
        {{ isOpen ? '关闭' : '开启' }}
      </div>
    </el-tooltip>

    <div class="lous">
      <div @click="ClickLayer(item)" v-for="item in louceng" :key="item" class="lou">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useHouse } from './useHouse'

const louceng = ['1', '2', '3', '4', '5', '6']
let isOpen = ref(false)

const louName = ['老干部局1F', '老干部局2F', '老干部局3F', '老干部局4F', '老干部局5F', '老干部局屋顶']
let house: any
const show_hideAll = async () => {
  if (house) {
    if (isOpen.value) {
      // __g.camera.set([546148.535117, 3995267.9025, 464.300938, -5.455593, -43.385628, 1])
      // __g.tileLayer.showActor('33E52EB9407C4FFF87A9CBA890CDCA24', '5D192E9E4D3EE17F22C3EFACD5945354')
      house.close()
    } else {
      __g.camera.set([634401.259453, 4194227.775, 891.941172, -34.205372, -134.386551, 1])
      // __g.camera.set([546133.783555, 3995246.7725, 487.536133, -14.14836, -42.071434, 1])
      // __g.tileLayer.hideActor('33E52EB9407C4FFF87A9CBA890CDCA24', '5D192E9E4D3EE17F22C3EFACD5945354')
      house.open()
    }
    isOpen.value = !isOpen.value
  }
}
const ClickLayer = async (val: any) => {
  if (house) {
    house.moveHouse(val)
  }
}

onMounted(() => {
  setTimeout(async () => {
    house = await useHouse([634948.56, 4194248.265, 811.29], louName)
  }, 1000)
})

onUnmounted(async () => {
  if (isOpen.value && house) {
    house.close()
  }
})
</script>
<style lang="scss" scoped>
.build {
  @include Width(100);
  @include hHeight(150);
  position: absolute;

  z-index: 10;
  @include Right(500);
  @include Bottom(340);

  .top {
    @include Width(100);
    @include hHeight(40);
    background: #000;
    position: absolute;
    background: url('~@/assets/images/Fifth/flat@2x.png') no-repeat center/cover;
    @include Top(0);
    text-indent: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Tencent;
    @include FontSize(16);
    cursor: pointer;
  }

  .lous {
    position: absolute;
    @include Top(30);
    @include Width(100);
    @include hHeight(150);
    @include Padding(5, 0, 15, 0);
    background: url('~@/assets/images/Fifth/building_bg@2x.png') no-repeat center/cover;

    z-index: 10;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    overflow: auto;
  }

  .lou {
    @include Width(45);
    @include hHeight(24);
    background-size: 100%;
    @include BorderRadius(3);
    @include FontSize(12);
    font-family: Tencent;

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:nth-of-type(even) {
      @include Top(8);
    }

    &:hover {
      background: rgba(0, 0, 0, 0.781);
    }

    &.isactive {
      background: url('~@/assets/images/Fifth/building_selected@2x.png') no-repeat center/cover;
      background-size: 100%;
      color: aqua;
    }
  }
}
</style>
