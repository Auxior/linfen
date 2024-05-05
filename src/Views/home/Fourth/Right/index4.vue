<template>
    <div class="container">
        <div class="item-box">
            <!-- <div class="lease_title">客流监控</div> -->
            <!-- <h5>车辆通行视频</h5> -->
            <Header>停车场监控</Header>
            <div class="monitor">
                <video src="/video/videoC.mp4" autoplay muted loop></video>
            </div>
        </div>
        <div class="item-box">
            <Header>出入口车流趋势</Header>
            <v3echarts :options="option10" :height="280" />
        </div>
        <div class="item-box">
            <Header>违章停车数量统计</Header>
            <v3echarts :options="option11" :height="270" container="parking" />
        </div>
    </div>
    <Dialog :visible="dialogStore.dialogVisible" :width="390" :height="280" :title="dialogStore.title" @close="dialogClose" :XY="dialogStore.XY">
        <!-- <video src="/video/test.mp4" autoplay loop controls muted></video> -->
        <div class="peopleInfo" v-if="dialogStore.title === '停车管理'">
            <img :src="dialogData.img" alt="" @click="showVideo" />
            <div class="info">
                <p>
                    姓名：<span>{{ dialogData.owner }}</span>
                </p>
                <p>
                    车牌号：<span>{{ dialogData.carCode }}</span>
                </p>
                <p>
                    入场时间：<span>{{ dialogData.admissionTime }}</span>
                </p>
                <p>
                    已停时间：<span>{{ dialogData.residenceTime }}</span>
                </p>

                <p>
                    类型：<span>{{ dialogData.type }}</span>
                </p>
                <!-- <p>
          进入原因：<span>{{ dialogData.reason }}</span>
        </p> -->
            </div>
        </div>
    </Dialog>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, onMounted, onBeforeUnmount, watch, computed } from 'vue'
import Header from '../components/Header.vue'
import v3echarts from '@/components/V3Echarts/index.vue'
import { option10, option11 } from './echartsOpt/index'
import { getRandNumBetween } from '../Left/drawOpt'
import { useChaiLouStore } from '@/stores/chailou'
import { nameList, polygon3dOpts, transversePolygon3dOpts } from './drawUtils/data'
import { deleteAll, generateCoordinates, getPlate, ids, Polygon3d } from './drawUtils'
import _ from 'lodash'
import { useDialogStore } from '@/stores/dialog'
import dayjs from 'dayjs'
import { useAirCityStore } from '@/stores/aircity'

export default defineComponent({
    name: '',
    components: { Header, v3echarts },
    setup() {
        const self = reactive({
            dialogData: {
                carCode: getPlate(),
                img: require('@/assets/images/car.jpeg'),
                owner: '王国伟',
                admissionTime: '',
                residenceTime: '3小时56分12秒',
                type: '月租车'
            }
        })
        const dialogStore = useDialogStore()
        let hxqId: number
        let date1 = new Date(Date.now() - 1000 * 60 * 60 * _.random(0, 5, true)) //开始时间
        const chaiLouStore = useChaiLouStore()
        const entities: Polygon3d[] = []

        watch(
            () => dialogStore.XY,
            () => {
                date1 = new Date(Date.now() - 1000 * 60 * 60 * _.random(0, 5, true)) //开始时间
                self.dialogData.carCode = getPlate()
                self.dialogData.admissionTime = dayjs(date1).format('YYYY-MM-DD HH:mm:ss')
                self.dialogData.type = _.random(0, 1) ? '临时车' : '月租车'
                self.dialogData.owner = nameList[_.random(0, nameList.length)]
            },
            {
                deep: true
            }
        )
        let time1: any
        let time2: any
        const aircity: any = useAirCityStore()
        onMounted(async () => {
            // let res = await __g.infoTree.get()
            // hxqId = res.infotree.find((item: { name: string }) => item.name === '核心区').iD
            // // 隐藏核心区
            // __g.infoTree.hide(hxqId, (res: any) => {
            //     console.log('隐藏了', res, hxqId)
            // })
            __g.tileLayer.hide(['核心区', '灯光'].map(p => aircity.layerTreeObject[p]))

            self.dialogData.admissionTime = dayjs(date1).format('YYYY-MM-DD HH:mm:ss')
            //隐藏楼层
            // chaiLouStore.Hide_All()
            //隐藏灯光
            // chaiLouStore.Close_Lights()

            __g.camera.set([106.705996, 545.686406, 32.171692, -73.582214, 30.440485, 1])

            polygon3dOpts.forEach((item: number[]) => {
                let entity = Polygon3d.builder().setCoordinates(generateCoordinates(item)).setState(_.random(0, 1))

                entities.push(entity)
            })
            transversePolygon3dOpts.forEach((item: number[]) => {
                let entity = Polygon3d.builder().setCoordinates(generateCoordinates(item, false)).setState(_.random(0, 1))

                entities.push(entity)
            })
            __g.polygon3d.add(entities)
            time1 = setInterval(() => {
                let len = _.random(0, 10)
                for (let index = 0; index < len; index++) {
                    entities[_.random(0, entities.length)]?.setState(_.random(0, 1)).update()
                }
            }, 1000 * _.random(0, 5))
            time2 = setInterval(() => {
                var date2 = new Date() //结束时间
                var date3 = date2.getTime() - date1.getTime() //时间差的毫秒数
                //计算出相差天数
                var days = Math.floor(date3 / (24 * 3600 * 1000))

                //计算出小时数

                var leave1 = date3 % (24 * 3600 * 1000) //计算天数后剩余的毫秒数
                var hours = Math.floor(leave1 / (3600 * 1000))
                //计算相差分钟数
                var leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数
                var minutes = Math.floor(leave2 / (60 * 1000))
                //计算相差秒数
                var leave3 = leave2 % (60 * 1000) //计算分钟数后剩余的毫秒数
                var seconds = Math.round(leave3 / 1000)

                self.dialogData.residenceTime = hours + '小时' + minutes + '分钟' + seconds + '秒'
            }, 1000)
        })
        onBeforeUnmount(async () => {
            deleteAll()
            __g.tileLayer.show(['核心区', '灯光'].map(p => aircity.layerTreeObject[p]))
            dialogClose()

            clearInterval(time1)
            clearInterval(time2)
            await __g.heatmap.clear()
        })
        const dialogClose = () => {
            //
            dialogStore.setDialogVisible(false)
        }
        const showVideo = () => {
            //
        }
        return {
            ...toRefs(self),
            option10,
            option11,
            dialogStore,
            dialogClose,

            showVideo
        }
    }
})
</script>
<style lang="scss" scoped>
.item-box {
    // margin-bottom: 30px;
    @include MarginBottom(30);
    h5 {
        font-family: PingFangSC-Medium;
        font-weight: Medium;
        // font-size: 14px;
        @include FontSize(14);
        color: #dbd8ab;
        // letter-spacing: 7.2px;
        width: 100%;
        // padding: 0 120px;
        // line-height: 128px;
        // height: 128px;
        background: url('~@/assets/images/基础框架通用元素切图/三级标题块/长.png') no-repeat;
        background-size: 100% 100%;
        // margin: 6px 0;
        // padding: 5px 0;
        @include Margin(6, 0, 6, 0);
        @include Padding(5, 0, 5, 10);
        // margin-top: 36px;
        // margin-bottom: 40px;
    }
    .monitor {
        // margin-top: 20px;
        @include MarginTop(20);
        width: 95%;
        margin-left: 5%;
        // height: 180px;
        @include hHeight(190);
        background: rgba($color: #fff, $alpha: 0.2);
        // border-radius: 2px;
        @include BorderRadius(2);
        // padding: 10px;
        @include Padding(5, 5, 5, 5);
        video {
            width: 100%;
            height: 100%;
            object-fit: fill;
        }
    }
}
.peopleInfo {
    display: flex;
    justify-content: center;
    width: 100%;
    @include Margin(10, 0, 10, 10);
    img {
        @include Width(120);
        @include wHeight(160);
        cursor: pointer;
    }
    .info {
        display: flex;
        flex-direction: column;
        @include MarginLeft(15);
        p {
            // @include LetterSpacing(1);
            @include FontSize(14);
            @include MarginBottom(22);
            span {
                margin: 0;
                color: #ffc662;
            }
        }
    }
}
</style>
