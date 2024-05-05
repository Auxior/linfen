<template>
  <Player />
  <!--  <transition appear name="custom-classes-transition" enter-active-class="animate__animated  animate__fadeInDown" leave-active-class="animate__animated  animate__fadeOutUp">
        <Header v-if="UIShow" />
    </transition>

    <transition name="custom-classes-transition" enter-active-class="animate__animated   animate__fadeInUp" leave-active-class="animate__animated  animate__fadeOutDown">
        <LayerTree v-if="LayerTreeShow" />
    </transition>

    <transition appear name="custom-classes-transition" enter-active-class="animate__animated  animate__fadeInDown" leave-active-class="animate__animated  animate__fadeOutUp">
        <div class="back" @click="back" v-if="!UIShow">
            <el-tooltip class="box-item" effect="dark" content="返回" placement="bottom">
                <Icon :color="UIShow ? '#7afafe' : '#fff'" :font-size="30" icon="back" />
            </el-tooltip>
        </div>
    </transition>

    <transition name="custom-classes-transition" enter-active-class="animate__animated   animate__fadeInRight" leave-active-class="animate__animated  animate__fadeOutRight">
        <Animation v-if="AnimationShow" />
    </transition>

    <div v-show="UIShow && !LayerTreeShow && !AnimationShow" class="wrap"> -->
  <router-view></router-view>
  <!-- </div> -->
</template>
<script lang="ts" setup>
import Player from '@/components/player/player.vue'
import Header from '@/components/header/index.vue'
import { computed } from 'vue'
import LayerTree from '@/components/tools/layerTree.vue'
import Animation from '@/components/tools/Animation.vue'

import { useAirCityStore } from '@/stores/aircity'
import { useToolsStore } from '@/stores/tools'
const ToolsStore = useToolsStore()
const UIShow = computed(() => ToolsStore.$state.UIShow)
const LayerTreeShow = computed(() => ToolsStore.$state.LayerTreeShow)
const AnimationShow = computed(() => ToolsStore.$state.AnimationShow)

const back = () => {
  const val = !UIShow.value
  ToolsStore.SetUIShow(val)
  __g.settings.setMainUIVisibility(!val)
}
defineProps({
  msg: {
    type: String,
    required: false,
  },
})
const AirCityStore = useAirCityStore()
const IsOnReady = computed(() => AirCityStore.$state.IsOnReady)
</script>
<style lang="scss" scoped>
.back {
  position: fixed;
  @include Top(20);
  @include Right(220);
  z-index: 102;
}
</style>
