<template>
    <div class="Third">
        <router-view></router-view>
        <transition appear name="custom-classes-transition" enter-active-class="animate__animated   animate__fadeInUp" leave-active-class="animate__animated  animate__fadeOutUp">
            <div class="sub-menu">
                <div class="menu-item" v-for="item in secondNav" :key="item.id" :class="{ 'menu-item-active': curNav === item.path }" @click="navClick(item.path)">
                    {{ item.text }}
                </div>
            </div>
        </transition>
        <Tools :width="50">
            <div v-if="shebeiPoi['sxt'].isShow" @click="moni" :class="isMoni ? 'showZJ isactive' : 'showZJ'">
                <el-tooltip class="box-item" effect="dark" content="仿真模拟" placement="left">
                    <Icon icon="fangzhentiaoshi" fontSize="24"></Icon>
                </el-tooltip>
            </div>

            <div v-for="item in shebeiPoi" @click="toggleKT(item.id)" :key="item.id" :class="item.isShow ? 'showZJ isactive' : 'showZJ'">
                <el-tooltip class="box-item" effect="dark" :content="item.text" placement="left">
                    <Icon :icon="item.icon" fontSize="22"></Icon>
                </el-tooltip>
            </div>
        </Tools>
        <Dialog :visible="dialogStore.dialogVisible" :width="390" :height="isVideoShow ? 460 : 260" :title="dialogStore.title" @close="dialogClose" :XY="dialogStore.XY">
            <!-- <video src="/video/test.mp4" autoplay loop controls muted></video> -->
            <div class="peopleInfo" v-if="dialogStore.title === '人脸识别系统'">
                <img :src="dialogData[radomPeople].img" alt="" @click="showVideo" />
                <div class="info">
                    <p>
                        姓名：<span>{{ dialogData[radomPeople].name }}</span>
                    </p>
                    <p>
                        年龄：<span>{{ dialogData[radomPeople].age }}</span>
                    </p>
                    <p>
                        性别：<span>{{ dialogData[radomPeople].sex }}</span>
                    </p>
                    <p>
                        入闸时间：<span>{{ dialogData[radomPeople].time }}</span>
                    </p>
                    <p>
                        体温：<span>{{ dialogData[radomPeople].temp }}</span>
                    </p>
                    <p>
                        进入原因：<span>{{ dialogData[radomPeople].reason }}</span>
                    </p>
                </div>
            </div>
            <video v-if="isVideoShow" src="/video/test.mp4" autoplay loop controls muted></video>

            <div class="content" v-if="dialogStore.title === '设备信息'">
                <p v-for="(item, index) in (dialogStore.content as any)" :key="index">
                    {{ item.key }}：<b>{{ item.value }}</b
                    ><span>{{ item.dw ? item.dw : '' }}</span>
                </p>
            </div>
        </Dialog>

        <!-- <Dialog
      :visible="isVideoShow"
      :width="600"
      :height="360"
      title="闸机视频"
      @close="videoClose"
      :XY="[765, 415]"
    >
      <video src="/video/test.mp4" autoplay loop controls muted></video>
    </Dialog> -->
    </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { reactive, ref, onMounted, onUnmounted, computed } from 'vue'
import router from '@/router'
import { creatRandom } from '@/utils/index'
import Tools from '@/components/Tools.vue'
import { useChaiLouStore } from '@/stores/chailou'
import { useDialogStore } from '@/stores/dialog'
import { useAirCityStore } from '@/stores/aircity'
import { AnimationType, playInitAnimation } from '@/utils/animation'
let dialogStore = useDialogStore()
let curNav = ref()
let timer: any = null
let shebeiPoi = ref({
    sxt: {
        cord: [
            [54.290252685546875, 492.4024658203125, 112.89627838134766],
            [53.707088470458984, 491.4244079589844, 112.89627838134766],
            [53.148292541503906, 490.4073486328125, 112.89627838134766],
            [70.46783447265625, 481.6138916015625, 112.89627838134766],
            [69.83110809326172, 480.69183349609375, 112.89627838134766],
            [69.23836517333984, 479.69293212890625, 112.89627838134766]
        ],
        id: 'sxt',
        text: '闸机摄像头',
        icon: 'zhaji',
        isShow: false
    },
    // 空调
    kt: {
        cord: [
            [127.52377319335938, 446.1036071777344, -0.9104201793670654],
            [128.12306213378906, 447.2138366699219, -0.9104200601577759],
            [128.75064086914062, 448.1929931640625, -0.9104201793670654],
            [129.43844604492188, 449.324951171875, -0.9104202389717102],
            [127.81432342529297, 450.3482666015625, -0.9104201793670654],
            [127.18167114257812, 449.20343017578125, -0.9104201793670654],
            [126.5946273803711, 448.2493896484375, -0.9104202389717102],
            [125.99134063720703, 447.2181396484375, -0.9104202389717102]
        ],
        id: 'kt',
        text: '空调外机',
        icon: 'kongtiaowaiji',
        isShow: false,
        attributes: [
            {
                key: '转速',
                value: '20',
                dw: 'r/h'
            },
            {
                key: '制热',
                value: '是',
                dw: ''
            },
            {
                key: '品牌',
                value: '美的',
                dw: ''
            },
            {
                key: '检修时间',
                value: '2022.03.01',
                dw: ''
            }
        ]
    },
    // 净水器
    jsq: {
        cord: [
            [121.0890884399414, 447.9855041503906, -3.4799246788024902],
            [121.0890884399414, 447.9855041503906, -3.4799246788024902],
            [123.18609619140625, 446.681396484375, -3.4864501953125],
            [123.01911926269531, 451.1219787597656, -3.4836394786834717],
            [124.09227752685547, 450.4793701171875, -3.479813814163208],
            [125.1407699584961, 449.8316345214844, -3.4795339107513428],
            [125.0163345336914, 454.346923828125, -3.4786505699157715],
            [126.07015991210938, 453.6746520996094, -3.533665180206299],
            [127.1270980834961, 453.0503845214844, -3.479778528213501],
            [122.146484375, 447.33953857421875, -3.478555917739868]
        ],
        id: 'jsq',
        text: '净水器',
        icon: 'jingshuiqi',
        isShow: false,
        attributes: [
            {
                key: '水量',
                value: '500',
                dw: 'L'
            },
            {
                key: '状态',
                value: '正常',
                dw: ''
            },
            {
                key: '水温',
                value: '16',
                dw: '℃'
            },
            {
                key: '含氮量',
                value: '<5',
                dw: 'mg/L'
            },
            {
                key: '检修时间',
                value: '2022.03.01',
                dw: ''
            }
        ]
    },
    // 消防栓
    xfs: {
        cord: [
            [150.2066650390625, 425.8954162597656, -1.7920231819152832],
            [157.98704528808594, 431.9207458496094, -0.4331201910972595],
            [155.80535888671875, 434.7113037109375, -1.7920231819152832]
        ],
        id: 'xfs',
        text: '消防栓',
        icon: 'xiaohuoshuan-73',
        isShow: false,
        attributes: [
            {
                key: '颜色',
                value: '红色'
            },
            { key: '状态', value: '正常' },
            { key: '是否检修', value: '是' },
            { key: '检修时间', value: '2022.03.01' }
        ]
    },
    // 阀门
    fm: {
        cord: [
            [157.25030517578125, 436.67596435546875, -2.9230926036834717],
            [160.67648315429688, 433.6219482421875, -2.6651124954223633],
            [158.38955688476562, 429.3252258300781, -2.7231130599975586]
        ],
        id: 'fm',
        text: '阀门',
        icon: 'guandao',
        isShow: false,
        attributes: [
            { key: '材质', value: '铁' },
            {
                key: '直径',
                value: 5,
                dw: 'dm'
            },
            {
                key: '状态',
                value: '正常'
            },
            {
                key: '阀门类型',
                value: '水阀门'
            },
            {
                key: '检修时间',
                value: '2022.03.01'
            }
        ]
    },
    // 湿度传感器
    sdcgq: {
        cord: [
            [158.74171447753906, 427.8135986328125, -0.4331201910972595],
            [154.9620361328125, 421.6361389160156, -1.3422584533691406],
            [151.17718505859375, 415.4974670410156, -1.342260718345642],
            [148.83078002929688, 423.1611022949219, -1.1795927286148071]
        ],
        id: 'sdcgq',
        text: '湿度传感器',
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
    },
    // 水泵
    sb: {
        cord: [
            [119.63336944580078, 448.8031921386719, -3.6248233318328857],
            [121.56477355957031, 451.89788818359375, -3.474202871322632],
            [123.55973815917969, 455.093017578125, -3.6226232051849365]
        ],
        id: 'sb',
        text: '水泵',
        icon: 'shuibeng',
        isShow: false,
        attributes: [
            {
                key: '水位',
                value: 2,
                dw: 'm'
            },
            { key: '状态', value: '正常' },
            {
                key: '水压',
                value: 60,
                dw: 'Pa'
            },
            {
                key: '检修时间',
                value: '2022.03.01'
            }
        ]
    }
})
const BuildStore = useChaiLouStore()

let dialogData = ref([
    {
        img: '/img/zjz1.jpg',
        name: '冯XX',
        age: 22,
        time: '08:58:36',
        temp: '36.2℃',
        reason: '上班',
        sex: '男'
    },
    {
        img: '/img/zjz2.jfif',
        name: '李XX',
        age: 31,
        time: '08:56:35',
        temp: '36.0℃',
        reason: '面试',
        sex: '女'
    },
    {
        img: '/img/zjz3.jfif',
        name: '张XX',
        age: 25,
        time: '08:40:35',
        temp: '36.5℃',
        reason: '上班',
        sex: '男'
    },
    {
        img: '/img/zjz4.jfif',
        name: '赵XX',
        age: 38,
        time: '08:57:32',
        temp: '36.2℃',
        reason: '面试',
        sex: '男'
    }
])
onMounted(() => {
    curNav.value = useRoute().path
    // __g.camera.stopAnimation()
    // __g.camera.set(-470.681091, 299.16748, 493.580536, -25.648424, -8.115864, 1)
    // __g.weather.setDateTime(2020, 9, 9, 23, 8, false)
    playInitAnimation(AnimationType.DEVICE)
    // BuildStore.InitBuild()
    __g.tileLayer.show(['jz01', 'jz02', 'jz03', 'jz04', 'jz05', 'jz06', 'jz07', 'jz08', 'jz09', 'jz10', 'jz11', 'jz12', 'jz13', 'jz14', 'jz15', 'jz16'].map(p => aircityStore.layerTreeObject[p]))
})
const chaiLouStore = useChaiLouStore()
;(window as any).chaiLouStore = chaiLouStore
onUnmounted(() => {
    __g.tag.delete(tagIds)
    stopMoni()
    ktDelete('sxt')
    // chaiLouStore.Open_Lights()
})
let secondNav = reactive([
    { text: '设备统计', path: '/home/Third/ThirdTwo', id: 2 },
    { text: '告警情况', path: '/home/Third/ThirdOne', id: 1 }
])

let navClick = (path: string) => {
    curNav.value = path
    router.push(path)
}
const radomPeople = computed(() => (dialogStore.dialogVisible ? creatRandom(0, 3) : 0))
const dialogClose = () => {
    dialogStore.setDialogVisible(false)
    videoClose()
}

const chailouStore = useChaiLouStore()

// 闸机模拟开关
const isMoni = ref(false)
let tagIds: Array<any> = []
let polylineIds: Array<any> = []
let curPolylineIds: Array<any> = []
// let dialogXY = ref([]);
const startMoni = () => {
    __g.camera.set(50.618423, 492.641968, 117.599686, -49.021931, 29.633255, 1)
    let xyArr = [
        [1436, 451],
        [1180, 451],
        [930, 451]
    ]
    timer = setInterval(() => {
        curPolylineIds.forEach(async curID => {
            await __g.polyline.setColor(curID, Color.Red)
        })
        let num = creatRandom(0, 2) // 0-2之间的随机数
        videoClose()
        dialogStore.setDialogVisible(false)
        dialogStore.setDialogVisible(true)
        dialogStore.setXY((xyArr as any)[num])
        dialogStore.setTitle('人脸识别系统')
        curPolylineIds = ['zhaji' + num, 'zhaji' + (num + 3)]
        curPolylineIds.forEach(async curID => {
            await __g.polyline.setColor(curID, Color.Green)
        })
    }, creatRandom(3000, 5000))
}
const stopMoni = () => {
    // 清空定时器
    clearInterval(timer)
    // 线设置为红色
    curPolylineIds.forEach(async curID => {
        await __g.polyline.setColor(curID, Color.Red)
    })
    // 关闭弹窗
    dialogClose()
}
const moni = () => {
    if (isMoni.value) {
        // 停止
        stopMoni()
        isMoni.value = false
    } else {
        // 开始
        startMoni()
        isMoni.value = true
    }
    // arr.forEach((item) => {});
}
let isVideoShow = ref(false)
const showVideo = () => {
    isVideoShow.value = true
}

const videoClose = () => {
    isVideoShow.value = false
}
// 核心区的id
let hxqId = ''
const aircityStore: any = useAirCityStore()
// 空调外机打点
const ktAdd = async (id: string) => {
    // 摄像头的弹窗是是前端弹窗  其他为三维弹窗
    if (id === 'sxt') {
        // 拆楼
        // chailouStore.ClickLayer(20, true)
        __g.tileLayer.hide(['jz01', 'jz02', 'jz03', 'jz04', 'jz05', 'jz06', 'jz07', 'jz08', 'jz09', 'jz10', 'jz11', 'jz12', 'jz13', 'jz14', 'jz15', 'jz16', '核心区'].map(p => aircityStore.layerTreeObject[p]))

        // 添加出入口的线

        let polylineData: Array<any> = [
            [
                [54.090301513671875, 489.24578857421875, 112.01648767089844],
                [53.196590423583984, 489.69549560546875, 112.01648767089844]
            ],
            [
                [54.675636291503906, 490.27734375, 112.01648767089844],
                [53.79875183105469, 490.7535095214844, 112.01648767089844]
            ],
            [
                [55.24359893798828, 491.2561340332031, 112.01648767089844],
                [54.377017974853516, 491.7454833984375, 112.01648767089844]
            ],
            [
                [52.449745178222656, 490.0960998535156, 112.01648767089844],
                [51.66416931152344, 490.4825439453125, 112.01659938964844]
            ],
            [
                [53.057498931884766, 491.1517333984375, 112.01648767089844],
                [52.29790496826172, 491.56072998046875, 112.01648767089844]
            ],
            [
                [53.64714431762695, 492.1719055175781, 112.01648767089844],
                [53.057682037353516, 492.53448486328125, 112.01648767089844]
            ],
            [
                [69.86479187011719, 482.75933837890625, 112.01648767089844],
                [70.59835815429688, 482.2747802734375, 112.01648767089844]
            ],
            [
                [71.25030517578125, 481.9058532714844, 112.01648767089844],
                [71.83606719970703, 481.5453796386719, 112.01648767089844]
            ],
            [
                [69.2895278930664, 481.7633972167969, 112.01648767089844],
                [70.02102661132812, 481.28790283203125, 112.01648767089844]
            ],
            [
                [70.6535873413086, 480.8907775878906, 112.01548767089844],
                [71.27764892578125, 480.5232849121094, 112.01648767089844]
            ],
            [
                [68.68254852294922, 480.7309265136719, 112.01648767089844],
                [69.44297790527344, 480.2907409667969, 112.01648767089844]
            ],
            [
                [70.0667724609375, 479.8672180175781, 112.01648767089844],
                [70.65481567382812, 479.5726623535156, 112.01600701904297]
            ]
        ]
        let addPolylineArr: Array<any> = []
        polylineData.forEach((item, index) => {
            polylineIds.push('zhaji' + index)
            addPolylineArr.push({
                id: 'zhaji' + index, //折线唯一标识id
                coordinates: item, //构成折线的坐标点数组
                color: Color.Red, //折线颜色
                style: PolylineStyle.Arrow, //折线样式 参考样式枚举：PolylineStyle
                thickness: 0.75, //折线宽度
                intensity: 0.8, //亮度
                flowRate: 0, //流速
                tiling: 0, //材质贴图平铺比例
                shape: 0, //折线类型 0：直线， 1：曲线
                depthTest: true //是否做深度检测
            })
        })

        await __g.polyline.add(addPolylineArr)
    } else {
        // 先拆到一层
        // // 隐藏核心区
        await __g.infoTree.hide(['核心区', '灯光'].map(p => aircityStore.layerTreeObject[p]))
        // await __g.infoTree.show(aircityStore.layerTreeObject['管道'])
    }

    // 添加摄像头打点 添加线
    let addTagArr: Array<any> = []
    ;(shebeiPoi.value as any)[id].cord.forEach((item: number[], index: number) => {
        tagIds.push(id + index)
        addTagArr.push({
            id: id + index, //tag唯一标识
            coordinate: item, //坐标位置
            coordinateType: 0, //坐标系类型
            groupId: id === 'sxt' ? '#人脸' + id : '#设备' + id,
            imagePath: `${window.location.origin}/img/tag_marker/${id}.png?${new Date().getTime()}`, //图片路径
            imageSize: [40, 50], //图片宽高[width,height]
            text: '',
            url: '', //鼠标点击标签后弹出的网页的URL
            range: [-100, 8000.0], //标签的可见范围 [Min,Max]
            showLine: false, //标签下方是否显示垂直牵引线
            autoHeight: false, //自动判断下方是否有物体
            userData: JSON.stringify((shebeiPoi.value as any)[id].attributes)
        })
    })
    await __g.tag.add(addTagArr)
    let ids = addTagArr.map(item => item.id)
    console.log('ids', ids)

    if (ids[0].includes('jsq')) {
        // 净水器相机
        __g.camera.set(126.800908, 448.58125, 0.185309, -39.41013, -149.927673, 1)
    } else if (ids[0].includes('xfs')) {
        // 消防栓
        __g.camera.set(163.574375, 434.508242, 2.023434, -29.15382, 162.995193, 1)
    } else if (ids[0].includes('fm')) {
        // 阀门
        __g.camera.set(163.840469, 434.492148, 2.305931, -44.999973, 162.995209, 1)
    } else if (ids[0].includes('sdcgq')) {
        // 湿度传感器
        __g.camera.set(154.873398, 424.323555, 2.154716, -39.977814, 101.289688, 1)
    } else if (ids[0].includes('sb')) {
        // 水泵
        __g.camera.set(120.062813, 450.147773, -1.613145, -44.951588, -42.98177, 1)
    } else if (ids[0].includes('sxt')) {
        __g.camera.set([51.161108, 492.203203, 117.905703, -55.743618, 32.376541, 1])
    } else {
        __g.tag.focus(ids, 0, 1)
    }
}
const ktDelete = async (id: string) => {
    let deleteArr = tagIds.filter(item => item.indexOf(id) > -1)

    let flag = true
    for (let key in shebeiPoi.value) {
        let ele = (shebeiPoi.value as any)[key]
        if (ele.isShow) {
            flag = false
            break
        }
    }

    if (flag) {
        chailouStore.Open_Lights()
    }
    await __g.tag.delete(deleteArr)
    if (id === 'sxt') {
        await __g.polyline.delete(polylineIds)
        // 取消拆楼
        // chailouStore.ClickLayer(20, false)
        __g.tileLayer.show(['jz01', 'jz02', 'jz03', 'jz04', 'jz05', 'jz06', 'jz07', 'jz08', 'jz09', 'jz10', 'jz11', 'jz12', 'jz13', 'jz14', 'jz15', 'jz16', '灯光', '核心区'].map(p => aircityStore.layerTreeObject[p]))
        __g.camera.set(-397.30069, 468.838867, 162.044998, -9.431671, -5.256323, 1)
    }
}
const toggleKT = (id: string) => {
    let curShow = (shebeiPoi.value as any)[id].isShow
    console.log(curShow, '111')
    if (isMoni.value) {
        // 停止
        stopMoni()
        isMoni.value = false
    }
    if (curShow) {
        ;(shebeiPoi.value as any)[id].isShow = false
        ktDelete(id)
    } else {
        ktAdd(id)
        ;(shebeiPoi.value as any)[id].isShow = true
        // chailouStore.Close_Lights()
    }
}
</script>
<style lang="scss" scoped>
::v-deep(.content) {
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    align-items: center;
}
::v-deep(.part) {
    width: 100%;
}
::v-deep(.part:not(:last-child)) {
    @include MarginBottom(20);
}

::v-deep(.secondTitle) {
    font-family: PingFangSC-Medium;
    font-weight: Medium;
    @include FontSize(14);
    color: #dbd8ab;
    width: 100%;
    background: url('~@/assets/images/基础框架通用元素切图/三级标题块/长.png') no-repeat;
    background-size: 100% 100%;
    @include Margin(6, 0, 6, 0);
    @include Padding(5, 0, 5, 10);
}

.sub-menu {
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

.showZJ {
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
video {
    @include Width(360);
    // height: 100%;
    object-fit: fill;
}
.peopleInfo {
    display: flex;
    justify-content: center;
    width: 100%;
    @include Margin(10, 0, 10, 0);
    img {
        @include Width(100);
        @include wHeight(130);
        cursor: pointer;
    }
    .info {
        display: flex;
        flex-direction: column;
        @include MarginLeft(40);
        p {
            @include LetterSpacing(1);
            @include wHeight(22);
            @include LineHeight(22);
            @include FontSize(14);
            span {
                margin: 0;
                color: #ffc662;
                @include FontSize(14);
            }
        }
    }
}
.content {
    p {
        @include wHeight(30);
        @include LineHeight(30);
        @include FontSize(16);
        color: #fff;
        width: 100%;
        b {
            @include FontSize(18);
            color: #ffc662;
            display: inline-block;
            @include Margin(0, 2, 0, 30);
            @include FontSize(16);
            font-weight: 500;
        }
        span {
            @include FontSize(16);
            color: #ffc662;
            display: inline-block;
            @include Margin(0, 2, 0, 5);
            font-weight: 500;
        }
    }
}
</style>
