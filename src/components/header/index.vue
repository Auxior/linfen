<!--
 * @Author: your name
 * @Date: 2022-02-22 18:36:34
 * @LastEditTime: 2022-03-04 20:58:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWeekly_zhyq\src\Views\home\header\index.vue
-->
<!-- header -->
<template>
    <div class="header">
        <div class="info">
            <div v-if="WeatherData && WeatherPm2P5" class="weahter">
                <div @click="Weahter_aqiLink" class="aqi weahtermon">
                    <img src="@/assets/images/home/空气质量.svg" alt="" />
                    <span>{{ WeatherPm2P5.now.aqi }} </span>
                </div>
                <div @click="WeahterLink" class="textDat weahtermon">
                    <i :style="{ color: '#fff' }" :class="'qi-' + WeatherData.now.icon"></i>
                    <span>
                        {{ WeatherData.now.text }}
                    </span>
                </div>
                <div @click="WeahterLink" class="temp weahtermon">
                    <img src="@/assets/images/home/温度.svg" alt="" />
                    <span>
                        {{ WeatherData.now.temp + '°C' }}
                    </span>
                </div>
                <div @click="WeahterLink" class="humidity weahtermon">
                    <img src="@/assets/images/home/湿度.svg" alt="" />
                    <span>
                        {{ WeatherData.now.humidity }}
                    </span>
                </div>
                <div @click="WeahterLink" class="windDir weahtermon">
                    <img src="@/assets/images/home/风速风向.svg" alt="" />
                    <span>
                        {{ WeatherData.now.windDir }}
                    </span>
                </div>
                <div @click="Weahter_aqiLink" v-if="WeatherPm2P5" class="pm25">
                    <img src="@/assets/images/home/PM2.5.svg" alt="" />
                    <span>
                        {{ WeatherPm2P5.now.pm2p5 }}
                    </span>
                    <span>
                        {{ WeatherPm2P5.now.category }}
                    </span>
                </div>
            </div>
        </div>
        <!-- <div class="title">
      <span> DTSWeekly-智慧园区运营分析系统 </span>
    </div> -->
        <Heard_link />
        <div class="tool">
            <div @click="UIClick" class="wrap">
                <el-tooltip class="box-item" effect="dark" content="UI显隐" placement="bottom">
                    <Icon :color="!UIShow ? '#7afafe' : '#fff'" :font-size="26" icon="mianban" />
                </el-tooltip>
            </div>
            <div @click="LayerTreeClick" class="wrap">
                <el-tooltip class="box-item" effect="dark" content="图层树" placement="bottom">
                    <Icon :color="LayerTreeshow ? '#7afafe' : '#fff'" :font-size="30" icon="tucengshu" />
                </el-tooltip>
            </div>
            <div @click="AnimationClick" class="wrap">
                <el-tooltip class="box-item" effect="dark" content="导览" placement="bottom">
                    <Icon :color="AnimationShow ? '#7afafe' : '#fff'" :font-size="26" icon="xunimanyou" />
                </el-tooltip>
            </div>
            <div v-for="(item, index) in status" :key="index" class="wrap">
                <el-tooltip class="box-item" effect="dark" :content="item.name" placement="bottom">
                    <Icon class="icon" :icon="item.icon" fontSize="22" @click="Bp(item.key)"></Icon>
                </el-tooltip>
            </div>

            <!-- <div class="wrap">
        <el-tooltip
          class="box-item"
          effect="dark"
          content="测量"
          placement="left"
        >
          <Icon
            class="icon"
            icon="celiangleixing"
            fontSize="22"
            @click="celiangOpen"
          ></Icon>
        </el-tooltip>
      </div> -->
        </div>
        <div class="time">
            <span>
                {{ time }}
            </span>
        </div>
        <!-- <div @click="openlink" class="link">
      <img src="@/assets/images/home/二维码@2x.png" alt="" />
    </div> -->

        <!-- <div class="rightbg"></div> -->
    </div>
    <Dialog :width="250" :height="300" title="测量" :visible="celiangVisible" @close="celiangClose" :XY="[1263, 77]">
        <div class="choose">
            <el-button v-for="(item, index) in celiangBtns" :key="index" :class="[{ active: activeIndex === index }]" @click="celiangStart(item, index)" :title="item.title" :disabled="btnDisabled">
                <svg class="svg-icon" aria-hidden="true">
                    <use :xlink:href="'#icon-' + item.icon"></use>
                </svg>
            </el-button>
        </div>
        <div class="content" v-html="celiangResult"></div>
        <div class="clear" @click="celiangClear">清除</div>
    </Dialog>
</template>

<script lang="ts" setup>
import Dayjs from 'dayjs'
import { getWeatherCityId, getWeather, getWeatherPm2P5 } from '@/api/connect'
import { onMounted, onUnmounted, computed, ref, watch } from 'vue'
import Heard_link from './heard_link.vue'
import { BPFunction } from '@/utils/BPFunction'
import { useDialogStore } from '@/stores/dialog'
import { useAirCityStore } from '@/stores/aircity'
import Icon from '../Icon/index.vue'
import { AnimationType, playInitAnimation } from '@/utils/animation'
import { useToolsStore } from '@/stores/tools'
let aircityStore = useAirCityStore()
const ToolsStore = useToolsStore()

const UIShow = computed(() => ToolsStore.$state.UIShow)
const LayerTreeshow = computed(() => ToolsStore.$state.LayerTreeShow)
const AnimationShow = computed(() => ToolsStore.$state.AnimationShow)

const UIClick = () => {
    const val = !UIShow.value
    ToolsStore.SetUIShow(val)
    __g.settings.setMainUIVisibility(!val)
}
const LayerTreeClick = () => {
    ToolsStore.SetLayerTreeShow(!LayerTreeshow.value)
}
const AnimationClick = () => {
    ToolsStore.SetAnimationShow(!AnimationShow.value)
}
// 日夜景切换
const status = ref([
    {
        name: '日景',
        icon: 'lieri',
        key: 2
    },
    {
        name: '黄昏',
        icon: 'huanghun',
        key: 3
    },
    {
        name: '夜晚',
        icon: 'lkingboyewanyueliang',
        key: 1
    }
])

// rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov
const Bp = (val: any) => {
    // BPFunction(val)
    if (val == 2) {
        // 日景
        playInitAnimation(AnimationType.SUN)
    } else if (val == 3) {
        // 日景
        playInitAnimation(AnimationType.AFTERNOON)
    } else {
        // 夜晚
        playInitAnimation(AnimationType.MIDNIGHT)
    }
}
// 获取当前时间
const date: any = ref('')
const time: any = ref('')
const get_Date_Time = () => {
    let date_time = Dayjs().format('YYYY-MM-DD/HH:mm:ss').split('/')
    date.value = date_time[0]
    time.value = date_time[1]
}
let WeatherData = ref()
let WeatherPm2P5 = ref()

const getWeatherData = async () => {
    // 开发环境时把天气地区设置成深圳
    let name = process.env.NODE_ENV === 'development' ? '深圳' : '深圳'
    /**
     * @description: 获取城市ID
     * @param {any} 城市名
     * @return {any} 城市ID
     */
    const CityId: any = await getWeatherCityId(name)
    /**
     * @description: 获取城市一天的天气信息
     * @param {any} 城市ID
     * @return {any}城市一天的天气信息
     */
    console.log(CityId, 'CityId')

    const CityWeather: any = await getWeather(CityId.location[0].id)
    // CityWeather.now.icon === "154" ? (CityWeather.now.icon = "104") : null;
    console.log(CityWeather, 'CityWeather')

    WeatherData.value = CityWeather
    console.log(WeatherData, 'WeatherData')

    /**
     * @description: 获取pm2.5数据
     * @param {any}  城市id
     * @return {any} pm2.5数据
     */
    const CityWeather_Pm2P5 = await getWeatherPm2P5(CityId.location[0].id)
    WeatherPm2P5.value = CityWeather_Pm2P5
    console.log(CityWeather_Pm2P5)
}
const WeahterLink = () => {
    window.open(WeatherData.value.fxLink)
}
const Weahter_aqiLink = () => {
    window.open(WeatherPm2P5.value.fxLink)
}
const openlink = () => {
    window.open('http://www.freedoonline.com')
}
let timer = ref()
let activeIndex = ref(-1)
let btnDisabled = ref(false)
let options = {
    pointSize: 8.0,
    textColor: Color.Yellow,
    pointColor: [0, 0, 1, 0.3],
    lineColor: Color.Red,
    areaColor: [0, 1, 0, 0.3],
    showCoordinateText: false
}
let celiangBtns = ref([
    {
        icon: 'zhixianceliang',
        title: '直线测量'
    },
    {
        icon: 'mianjiceliang',
        title: '面积算量'
    },
    {
        icon: 'zuobiaoceliang1',
        title: '坐标测量'
    },
    {
        icon: 'shuipingchuizhijingjufen',
        title: '水平垂直测量'
    }
])
let celiangResult = ref('')
let celiangVisible = ref(false)
const celiangOpen = () => {
    celiangVisible.value = true
}
// let celiangDialogVisible = ref();
const celiangStart = async (item: any, index: number) => {
    activeIndex.value = index
    btnDisabled.value = true
    console.log(btnDisabled.value, '禁用')
    switch (item.title) {
        case '直线测量':
            await __g.tools.setMeasurement(2, options)
            __g.tools.startMeasurement()
            break
        case '面积算量':
            await __g.tools.setMeasurement(5, options)
            __g.tools.startMeasurement()
            break
        case '坐标测量':
            await __g.tools.setMeasurement(1, options)
            __g.tools.startMeasurement()
            break
        case '水平垂直测量':
            await __g.tools.setMeasurement(4, options)
            __g.tools.startMeasurement()
            break
    }
}
const celiangClear = () => {
    __g.tools.stopMeasurement(() => {
        celiangResult.value = ''
        activeIndex.value = -1
        btnDisabled.value = false
    })
}
const celiangClose = () => {
    celiangVisible.value = false
    celiangClear()
}
watch(
    () => aircityStore.$state.eventMessage,
    (value: any) => {
        if (value.eventtype === 'Measurement') {
            if (activeIndex.value === 0 && value.Type === 'Line') {
                celiangResult.value = "<div style='color:#fff;padding-top:10px'> 距离：" + value.Length + ' m</div>'
            } else if (activeIndex.value === 1 && value.Type === 'Area') {
                celiangResult.value = "<div style='color:#fff;padding-top:10px'> 面积：" + value.Area + ' m²</div>' + "<div style='color:#fff;padding-top:10px'> 周长：" + value.Perimeter + ' m</div>'
            } else if (activeIndex.value === 2 && value.Type === 'Coordinate') {
                let cur = (value.Coordinate as Array<number>).map(item => {
                    return item.toFixed(2)
                })
                celiangResult.value = "<div style='color:#fff;padding-top:10px'> 坐标：" + cur.join(',') + ' </div>'
            } else if (activeIndex.value === 3 && value.Type === 'VerticalLine') {
                celiangResult.value = "<div style='color:#fff;padding-top:10px'> 水平距离：" + value.HorizontalLength + "m </div><div style='color:#fff;padding-top:10px'>垂直距离：" + value.VerticalHeight + 'm</div>'
            }
        }
    },
    {
        deep: true
    }
)
onMounted(() => {
    get_Date_Time()

    timer.value = setInterval(() => {
        get_Date_Time()
    }, 1000)
    getWeatherData()
})
onUnmounted(() => {
    clearInterval(timer.value)
})
</script>
<style lang="scss" scoped>
.header {
    width: 100%;
    @include wHeight(65);
    background: rgba(0, 0, 0, 0.301);
    position: absolute;
    top: 0;
    @include FontSize(12);
    z-index: 100;
    .info {
        height: 100%;
        position: absolute;
        @include Left(20);
        z-index: 100;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .weahter {
            // @include Width(380);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            img {
                @include Width(16);

                // margin-right: 3px;
                @include MarginRight(3);
            }
            > .weahtermon {
                cursor: pointer;
                position: relative;
                height: 100%;
                // padding-right: 15px;
                @include PaddingRight(15);

                &::after {
                    content: '';
                    position: absolute;
                    @include Width(1);
                    @include wHeight(15);

                    background: rgba(190, 190, 190, 0.856);
                    @include Right(5);
                    top: 0;
                    bottom: 0;
                    margin: auto;
                }
            }

            .aqi {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .textDat {
                display: flex;
                justify-content: center;
                align-items: center;
                i:nth-of-type(1) {
                    @include FontSize(16);
                    display: inline-block;
                    @include MarginRight(5);
                }
            }
            .temp {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .humidity {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .windDir {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .pm25 {
                display: flex;
                justify-content: space-around;
                align-items: center;
                cursor: pointer;
                @include MarginRight(15);
            }
        }
    }
    .tool {
        position: absolute;
        height: 100%;

        @include Right(100);
        @include Width(180);
        font-family: SJyunhei;
        display: flex;
        justify-content: space-around;
        align-items: center;
        @include FontSize(20);
        cursor: pointer;

        .icon {
            transition: all 0.3s;
        }
        .icon:hover {
            transform: scale(1.2);
        }
    }
    .time {
        position: absolute;
        height: 100%;
        @include Right(20);
        @include FontSize(16);
        font-family: SJyunhei;
        display: flex;
        justify-content: center;
        align-items: center;
        span:nth-of-type(1) {
            display: inline-block;
            @include MarginRight(10);
        }
    }

    .link {
        position: absolute;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        @include Right(20);
        z-index: 100;

        img {
            @include Width(54);
            transition: all 0.5s;

            &:hover {
                transform: scale(2.5);
                transform-origin: 100% 0;
            }
            // margin-right: 3px;
            @include MarginRight(3);
        }
    }
    .rightbg {
        position: absolute;
        right: 0;
        @include Width(400);
        height: 100%;
        background: linear-gradient(to left, #000000d8 0%, #000000b6 20%, #00000098 40%, #00000077 60%, #00000054 80%, #00000000 100%);
    }
}
.choose {
    display: flex;
    width: 230px;
    height: 60px;
    margin: auto;
    border-bottom: 1px solid rgba(237, 249, 255, 0.2);
    justify-content: space-around;
    .el-button {
        margin-top: 10px;
        @include Width(40);
        @include wHeight(30);
        @include LineHeight(30);
        @include Padding(5, 0, 0, 0);
        text-align: center;
        background-color: transparent;
        .svg-icon {
            @include Width(25);
            @include wHeight(25);
            vertical-align: center;
            fill: currentColor;
            overflow: hidden;
            color: #fff;
            // cursor: pointer;
        }
    }
    .active {
        .svg-icon {
            color: #7afafe;
        }
    }
}
.content {
    width: 230px;
    height: 120px;
    margin: auto;
    border-bottom: 1px solid rgba(237, 249, 255, 0.2);
    overflow: auto;
}
.clear {
    width: 100%;
    height: 40px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #7afafe;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
}
</style>
