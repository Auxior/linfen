<!--
 * @Author: your name
 * @Date: 2022-03-03 15:40:58
 * @LastEditTime: 2022-03-04 14:34:52
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWeekly_zhyq\src\Views\home\Fifth\components\XRay_Guan.vue
-->
<!--  -->
<template>
    <Tools :width="50">
        <div @click="ShuiClick()" :class="Isactive_s ? 'Reset isactive' : 'Reset'">
            <el-tooltip class="box-item" effect="dark" content="水表" placement="left">
                <Icon icon="shuibiao" fontSize="22"></Icon>
            </el-tooltip>
        </div>
        <div @click="DianClick()" :class="Isactive_d ? 'Reset isactive' : 'Reset'">
            <el-tooltip class="box-item" effect="dark" content="电表" placement="left">
                <Icon icon="dianbiao" fontSize="22"></Icon>
            </el-tooltip>
        </div>
    </Tools>
</template>

<script lang="ts" setup>
import { useAirCityStore } from '@/stores/aircity'
import { useChaiLouStore } from '@/stores/chailou'
import { computed, onMounted, onUnmounted, ref, watchEffect } from 'vue'
import Tools from '@/components/Tools.vue'
import Icon from '@/components/Icon/index.vue'
import { BPFunction } from '@/utils/BPFunction'
const ChaiLouStore = useChaiLouStore()
const AitCityStore = useAirCityStore()
const InfoTree: any = computed(() => AitCityStore.$state.TreeInfo)
const dengId = ref()
const GX = ref()
const Isactive_d = ref(false)
const Isactive_s = ref(false)
const dianbiao = {
    coord: [
        [77.13299560546875, 459.4514465332031, 52.851749420166016],
        [77.77120971679688, 471.9175109863281, 49.099483489990234],
        [83.2234878540039, 480.0029602050781, 49.33613586425781],
        [46.26484680175781, 472.0918273925781, 55.00608825683594],
        [64.75617980957031, 461.47869873046875, 54.14555358886719],
        [54.92610168457031, 465.3516540527344, 55.038421630859375]
    ],
    id: 'dianbiao',
    text: '电表',
    icon: 'wenshiduchuanganqi2',
    isShow: false,
    attributes: [
        {
            key: '状态',
            value: '正常'
        },
        {
            key: '湿度',
            value: 6,
            dw: 'hv'
        },
        {
            key: '湿度',
            value: 6,
            dw: 'hv'
        },
        {
            key: '温度',
            value: 18,
            dw: '℃'
        },
        {
            key: '检修时间',
            value: '2022.03.01'
        }
    ]
}
const shuibiao = {
    coord: [
        [45.73771667480469, 472.45196533203125, 42.613643646240234],
        [70.04444122314453, 458.1129150390625, 42.02384948730469],
        [77.65042114257812, 467.1801452636719, 35.317745208740234],
        [82.2458267211914, 476.9961853027344, 37.01773452758789],
        [85.39320373535156, 495.4837646484375, 36.017730712890625]
    ],
    id: 'shuibiao',
    text: '水表',
    icon: 'wenshiduchuanganqi2',
    isShow: false,
    attributes: [
        {
            key: '状态',
            value: '正常'
        },
        {
            key: '湿度',
            value: 6,
            dw: 'hv'
        },
        {
            key: '湿度',
            value: 6,
            dw: 'hv'
        },
        {
            key: '温度',
            value: 18,
            dw: '℃'
        },
        {
            key: '检修时间',
            value: '2022.03.01'
        }
    ]
}

const DianIds: any = ref([])
const DianClick = async () => {
    if (Isactive_d.value) {
        await __g.marker.delete(DianIds.value)
        Isactive_d.value = false
    } else {
        const Os = dianbiao.coord.map((item: any, index: any) => {
            DianIds.value.push(dianbiao.id + index)
            return {
                id: dianbiao.id + index,
                coordinate: item, //坐标位置
                groupId: '#设备' + dianbiao.id,
                coordinateType: 0, //默认0是投影坐标系，也可以设置为经纬度空间坐标系值为1
                anchors: [-16, 32], //锚点
                range: [10, 10000], //可视范围
                imagePath: window.location.origin + '/img/tag_marker/电表.png?' + new Date().getTime(), //显示图片路径
                imageSize: [40, 50], //图片的尺寸
                hoverImageSize: [28, 28], //鼠标悬停时显示的图片尺寸
                fixedSize: true, //图片固定尺寸，取值范围：false 自适应，近大远小，true 固定尺寸，默认值：false
                // url: "rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov",
                text: '', //显示的文字
                useTextAnimation: true, //打开文字展开动画效果
                textRange: [100, 100], //文本可视范围[近裁距离, 远裁距离]
                textOffset: [0, 0], // 文本偏移
                textBackgroundColor: Color.White, //文本背景颜色
                fontSize: 12, //字体大小
                fontOutlineSize: 1, //字体轮廓线大小
                fontColor: Color.Red, //字体颜色
                fontOutlineColor: Color.Black, //字体轮廓线颜色
                userData: JSON.stringify(dianbiao.attributes),
                // popupURL: `${window.location.origin}/customTag/tag.html?title=电表详情&biref=${dianbiao.attributes}`, //弹窗HTML链接
                // popupBackgroundColor: [1, 1, 1, 1], //弹窗背景颜色
                // popupSize: [400, 350], //弹窗大小
                // popupOffset: [0, 0], //弹窗偏移

                showLine: false, //标注点下方是否显示垂直牵引线
                lineSize: [2, 100], //垂直牵引线宽度和高度[width, height]
                lineColor: Color.SpringGreen, //垂直牵引线颜色
                lineOffset: [0, 0], //垂直牵引线偏移

                // autoHidePopupWindow: true, //失去焦点后是否自动关闭弹出窗口
                autoHeight: false, // 自动判断下方是否有物体
                displayMode: 2, //显示模式
                priority: 0, //避让优先级
                occlusionCull: true //是否参与遮挡剔除
            }
        })
        await __g.marker.add(Os)
        Isactive_d.value = true
    }
}
const ShuiIds: any = ref([])

const ShuiClick = async () => {
    if (Isactive_s.value) {
        await __g.marker.delete(ShuiIds.value)
        Isactive_s.value = false
    } else {
        const Os = shuibiao.coord.map((item: any, index: any) => {
            ShuiIds.value.push(shuibiao.id + index)
            return {
                id: shuibiao.id + index,
                groupId: '#设备' + shuibiao.id,
                coordinate: item, //坐标位置
                coordinateType: 0, //默认0是投影坐标系，也可以设置为经纬度空间坐标系值为1
                anchors: [-16, 32], //锚点
                range: [10, 10000], //可视范围
                imagePath: window.location.origin + '/img/tag_marker/水表.png?' + new Date().getTime(), //显示图片路径
                imageSize: [40, 50], //图片的尺寸
                hoverImageSize: [28, 28], //鼠标悬停时显示的图片尺寸
                fixedSize: true, //图片固定尺寸，取值范围：false 自适应，近大远小，true 固定尺寸，默认值：false
                // url: "rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov",
                text: '', //显示的文字
                useTextAnimation: true, //打开文字展开动画效果
                textRange: [100, 100], //文本可视范围[近裁距离, 远裁距离]
                textOffset: [0, 0], // 文本偏移
                textBackgroundColor: Color.White, //文本背景颜色
                fontSize: 12, //字体大小
                fontOutlineSize: 1, //字体轮廓线大小
                fontColor: Color.Red, //字体颜色
                fontOutlineColor: Color.Black, //字体轮廓线颜色
                userData: JSON.stringify(shuibiao.attributes),
                // popupURL: `${window.location.origin}/customTag/tag.html?title=水表详情&biref=${shuibiao.attributes}`, //弹窗HTML链接
                // popupBackgroundColor: [1, 1, 1, 1], //弹窗背景颜色
                // popupSize: [400, 350], //弹窗大小
                // popupOffset: [0, 0], //弹窗偏移

                showLine: false, //标注点下方是否显示垂直牵引线
                lineSize: [2, 100], //垂直牵引线宽度和高度[width, height]
                lineColor: Color.SpringGreen, //垂直牵引线颜色
                lineOffset: [0, 0], //垂直牵引线偏移

                // autoHidePopupWindow: true, //失去焦点后是否自动关闭弹出窗口
                autoHeight: false, // 自动判断下方是否有物体
                displayMode: 2, //显示模式
                priority: 0, //避让优先级
                occlusionCull: true //是否参与遮挡剔除
            }
        })
        await __g.marker.add(Os)
        Isactive_s.value = true
    }
}

watchEffect(() => {
    if (InfoTree.value) {
        InfoTree.value.forEach((item: any) => {
            if (item.name === '灯光') {
                dengId.value = item.iD
            }
            if (item.name === '拆楼管线') {
                GX.value = item.iD
            }
        })
    }
})

onMounted(async () => {
    await ChaiLouStore.XRay(true)
    BPFunction(1)
    dengId.value && (await __g.infoTree.hide(dengId.value))
    GX.value && __g.infoTree.show(GX.value)
    
})

onUnmounted(async () => {
    ChaiLouStore.XRay(false)
    ShuiIds.value && (await __g.marker.delete(ShuiIds.value))
    DianIds.value && (await __g.marker.delete(DianIds.value))
    dengId.value && __g.infoTree.show(dengId.value)
    GX.value && __g.infoTree.hide(GX.value)
})
</script>
<style lang="scss" scoped>
.Reset {
    width: 100%;
    @include hHeight(40);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.13);
    transition: all 0.3s;

    &:hover {
        // color: rgb(94, 245, 237);
        transform: scale(1.2);
    }
    &.isactive {
        color: #ffc622;
    }
}
</style>
