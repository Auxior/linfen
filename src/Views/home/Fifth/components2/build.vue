<!--
 * @Author: your name
 * @Date: 2022-03-03 15:35:54
 * @LastEditTime: 2022-03-03 16:39:43
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWeekly_zhyq\src\Views\home\Fifth\components2\build.vue
-->
<!--  -->
<template>
    <div class="build">
        <el-tooltip class="box-item" effect="dark" content="展示全部楼层" placement="left">
            <div @click="show_hideAll" class="top">
                {{ '全部楼层' }}
            </div>
        </el-tooltip>

        <!-- <div @click="XRay" class="a">XRay</div> -->
        <div class="lous">
            <div @click="ClickLayer(item)" v-for="item in louceng" :key="item" :class="Foolr === item ? 'lou isactive' : 'lou'">
                {{ item }}
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { BPFunction } from '@/utils/BPFunction'
import { useChaiLouStore } from '@/stores/chailou'
import { useAirCityStore } from '@/stores/aircity'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { AddPoylineMarker } from '../AddPoylineMarker'

const dengId = ref()
// const ChaiLouStore = useChaiLouStore()
const AirCityStore: any = useAirCityStore()
// const Foolr = computed(() => ChaiLouStore.$state.BuildClass?.Foolr)
// const InfoTree: any = computed(() => AirCityStore.$state?.TreeInfo)
const louceng = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35']

const louName = ['jz01', 'jz02', 'jz03', 'jz04', 'jz05', 'jz06', 'jz07', 'jz08', 'jz09', 'jz10', 'jz11', 'jz12', 'jz13', 'jz14', 'jz15', 'jz16', 'jz17', 'jz18', 'jz19', 'jz20', 'jz21', 'jz22', 'jz23', 'jz24', 'jz25', 'jz26', 'jz27', 'jz28', 'jz29', 'jz30', 'jz31', 'jz32', 'jz33', 'jz34', 'jz35', 'jz36']
const show_hideAll = () => {
    // if (Foolr.value) {
    // ChaiLouStore.Show_All()
    AddPoylineMarker(0, false)
    __g.camera.set(-132.145569, 454.275696, 262.198334, -35.756874, -1.175965, 1)
    __g.infoTree.show([AirCityStore.layerTreeObject['灯光'], ...louName.map(p => AirCityStore.layerTreeObject[p])])
    // dengId.value && __g.infoTree.show(dengId.value)
    // } else {
    //     // ChaiLouStore.Show_All();
    // }
}
const ClickLayer = async (val: any) => {
    AddPoylineMarker(val, true)
    await __g.infoTree.hide([AirCityStore.layerTreeObject['灯光'], ...louName.map(p => AirCityStore.layerTreeObject[p])])
    // 显示楼层
    const showArr = JSON.parse(JSON.stringify(louName)).reverse().splice(0, val)
    console.log('%c [ showArr ]-58', 'font-size:13px; background:pink; color:#bf2c9f;', showArr)

    await __g.infoTree.show(showArr.map((p: string) => AirCityStore.layerTreeObject[p]))
}
// const XRay = () => {
//   ChaiLouStore.XRay(true);
// };
onMounted(() => {
    __g.camera.set(-210.348206, 467.681183, 246.374146, -23.047045, -0.993012, 1)
})
onUnmounted(async () => {
    // ChaiLouStore.Show_All()
    // dengId.value && (await __g.infoTree.show(dengId.value))
    await __g.infoTree.show([AirCityStore.layerTreeObject['灯光'], ...louName.map(p => AirCityStore.layerTreeObject[p])])
    AddPoylineMarker(0, false)
})
</script>
<style lang="scss" scoped>
.build {
    @include Width(100);
    @include hHeight(550);
    position: absolute;

    z-index: 10;
    @include Right(380);
    @include Bottom(30);

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
        @include hHeight(520);
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
        // background: rgba(0, 0, 0, 0.781);

        // background: url("~@/assets/images/Fifth/building_selected@2x.png") no-repeat
        //   center/cover;
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
