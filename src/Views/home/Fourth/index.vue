<!--
 * @Author: your name
 * @Date: 2022-02-22 21:18:05
 * @LastEditTime: 2022-03-05 18:49:57
 * @LastEditors: zhc
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWeekly_zhyq\src\Views\home\Third\index.vue
-->
<!-- Third 第三个页面-（名称） -->
<template>
    <div class="Third">
        <Left_box>
            <!-- <Left /> -->
            <transition appear name="custom-classes-transition" enter-active-class="animate__animated animate__faster animate__fadeInLeft " leave-active-class="animate__animated animate__faster animate__fadeOutLeft ">
                <component :is="activeLeftComponent" @showAlarmDetail="handleShowAlarmDetail" @backPage="backToPrev" />
            </transition>
        </Left_box>
        <Right_box>
            <transition appear name="custom-classes-transition" enter-active-class="animate__animated animate__faster  animate__fadeInRight " leave-active-class="animate__animated animate__faster animate__fadeOutRight ">
                <component :is="activeRightComponent" @backPage="backToPrev" :alarmType="alarmType" />
            </transition>
        </Right_box>
        <transition appear name="custom-classes-transition" enter-active-class="animate__animated   animate__fadeInUp" leave-active-class="animate__animated  animate__fadeOutUp">
            <div class="sub-menu">
                <div class="menu-item" v-for="(item, index) in menuList" :key="index" :class="{ 'menu-item-active': activeMenuIndex === index }" @click="handleMenuActiveChange(index)">
                    {{ item.title }}
                </div>
            </div>
        </transition>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, onBeforeUnmount, reactive, DefineComponent, Ref } from 'vue'
import Left_box from '@/components/left_box.vue'
import Right_box from '@/components/right_box.vue'
import Left from './Left/index4.vue'
import Right from './Right/index3.vue'

import Left2 from './Left/index2.vue'
import Right2 from './Right/index2.vue'

import Left3 from './Left/index5.vue'
import Right3 from './Right/index4.vue'
import AlarmDetail from './Right/comps/AlarmDetail.vue'
import { useChaiLouStore } from '@/stores/chailou'
import { AnimationType, playInitAnimation } from '@/utils/animation'
const activeMenuIndex = ref(0)

const menuList = ref([
    {
        title: '安防预警',
        leftComponent: Left2,
        rightComponent: Right2
    },
    {
        title: '通行管控',
        leftComponent: Left,
        rightComponent: Right
    },
    {
        title: '停车管理',
        leftComponent: Left3,
        rightComponent: Right3
    }
])
const activeMenuItem = ref(menuList.value[activeMenuIndex.value])
let activeLeftComponent: Ref<any> = ref(activeMenuItem.value.leftComponent)
let activeRightComponent: Ref<any> = ref(activeMenuItem.value.rightComponent)
let timer: undefined | number = undefined

const handleMenuActiveChange = async (index: number) => {
    if (!timer) clearTimeout(timer)

    __g.polygon3d.clear()
    if (index === activeMenuIndex.value) return
    activeMenuIndex.value = index
    activeMenuItem.value = menuList.value[index]
    activeLeftComponent.value = {}
    activeRightComponent.value = {}

    timer = setTimeout(() => {
        activeLeftComponent.value = activeMenuItem.value.leftComponent
        activeRightComponent.value = activeMenuItem.value.rightComponent
        timer = undefined
    }, 500)
}
const alarmType = ref(0)
const handleShowAlarmDetail = (item: any) => {
    console.log(item)

    if (item.id === 1528) {
        alarmType.value = 0
    } else if (item.id === 615) {
        alarmType.value = 1
    } else if (item.id === 617) {
        alarmType.value = 2
    } else if (item.id === 155) {
        alarmType.value = 3
    }
    activeRightComponent.value = AlarmDetail
}
const backToPrev = () => {
    if (!timer) clearTimeout(timer)
    activeRightComponent.value = {}

    timer = setTimeout(() => {
        activeRightComponent.value = activeMenuItem.value.rightComponent
    }, 500)
}
// const chaiLouStore = useChaiLouStore();
onMounted(() => {
    playInitAnimation(AnimationType.DEVICE)
})
onBeforeUnmount(() => {
    //   chaiLouStore.Open_Lights();
    console.log('开灯了')
    //   chaiLouStore.Show_All();
})
</script>
<style lang="scss" scoped>
.Third {
    // position: relative;
    .sub-menu {
        position: absolute;
        z-index: 100;
        @include Bottom(40);
        left: 0;
        right: 0;
        margin: auto;
        @include Width(450);
        // @include hHeight(50);
        @include FontSize(16);
        display: flex;
        justify-content: space-around;
        align-items: center;
        .menu-item {
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
        .menu-item-active {
            background: url('~@/assets/images/home/sub_menu1_hover@2x.png') no-repeat center/cover;
            color: #f6c84c;
            background-size: 100%;
        }
    }
}
</style>
