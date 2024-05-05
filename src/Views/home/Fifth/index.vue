<template>
    <div class="Fifth">
        <!-- 室外 -->
        <div v-if="nowMenu == 1" class="wrap">
            <Left_box><Left /> </Left_box>
            <Right_box><Right /></Right_box>
            <XRay_Guan></XRay_Guan>
        </div>

        <!-- 室内 -->
        <div v-if="nowMenu == 2" class="wrap">
            <Left_box><Left1 /> </Left_box>
            <Right_box>
                <Right1 />
            </Right_box>
            <Build></Build>
        </div>
        <transition appear name="custom-classes-transition" enter-active-class="animate__animated   animate__fadeInUp" leave-active-class="animate__animated  animate__fadeOutUp">
            <div class="menus">
                <div @click="warningCenter" :class="nowMenu == 1 ? 'menu menu_active' : 'menu'">告警中心</div>
                <div @click="dataAnalysis" :class="nowMenu == 2 ? 'menu menu_active' : 'menu'">数据分析</div>
            </div>
        </transition>
    </div>
</template>

<script lang="ts" setup>
import Left_box from '@/components/left_box.vue'
import Right_box from '@/components/right_box.vue'
import Right from './components/Right/index.vue'
import Left from './components/Left/index.vue'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import Left1 from './components2/left/index.vue'
import Right1 from './components2/right/index.vue'
import Build from './components2/build.vue'
import XRay_Guan from './components/XRay_Guan.vue'
import { useAirCityStore } from '@/stores/aircity'
import { AnimationType, playInitAnimation } from '@/utils/animation'
// const chaiLouStore = useChaiLouStore()
const aircityStore: any = useAirCityStore()

onMounted(async () => {
    // chaiLouStore.BuildClass?.HideAll()
    //   console.log("关掉了");
    await playInitAnimation(AnimationType.INIT)
    setTimeout(async () => {
        await __g.infoTree.hide([aircityStore.layerTreeObject['拆楼模型'], aircityStore.layerTreeObject['灯光'], aircityStore.layerTreeObject['车线']])

        await __g.infoTree.show(aircityStore.layerTreeObject['拆楼管线'])
        await __g.camera.stopAnimation()
        await __g.camera.set(54.793671, 439.749847, 81.794411, -42.863449, -73.265961, 1)
    }, 800)
})

onUnmounted(() => {
    // chaiLouStore.BuildClass?.ShowAll()
    __g.infoTree.show([aircityStore.layerTreeObject['拆楼模型'], aircityStore.layerTreeObject['灯光'], aircityStore.layerTreeObject['车线']])
})

const dataAnalysis = () => {
    nowMenu.value = 2
    // chaiLouStore.BuildClass?.ShowAll()
    __g.infoTree.show([aircityStore.layerTreeObject['拆楼模型'], aircityStore.layerTreeObject['灯光']])
}

const warningCenter = () => {
    // __g.infoTree.hide([aircityStore.layerTreeObject['拆楼模型'], aircityStore.layerTreeObject['灯光']])
    // chaiLouStore.BuildClass?.HideAll()
    nowMenu.value = 1

    setTimeout(async () => {
        await __g.infoTree.hide([aircityStore.layerTreeObject['拆楼模型'], aircityStore.layerTreeObject['灯光'], aircityStore.layerTreeObject['车线']])

        await __g.infoTree.show(aircityStore.layerTreeObject['拆楼管线'])
        await __g.camera.set(54.793671, 439.749847, 81.794411, -42.863449, -73.265961, 1)
    }, 200)
}
const nowMenu = ref(1)
</script>
<style lang="scss" scoped>
.menus {
    position: absolute;
    z-index: 100;
    @include Bottom(40);
    left: 0;
    right: 0;
    margin: auto;
    @include Width(300);
    // @include hHeight(50);
    @include FontSize(16);
    display: flex;
    justify-content: space-around;
    align-items: center;
    .menu {
        @include Width(120);
        @include hHeight(60);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        background: url('~@/assets/images/home/sub_menu1_default@2x.png') no-repeat center/cover;
        background-size: 100%;
        color: rgba(255, 255, 255, 0.815);
        transition: all 0.5s;
    }
    .menu_active {
        background: url('~@/assets/images/home/sub_menu1_hover@2x.png') no-repeat center/cover;
        color: #f6c84c;
        background-size: 100%;
    }
}

.a {
    color: rgb(51, 102, 204);
}
</style>
