<template>
    <div class="container">
        <div class="detail-header">
            <div class="header-title"><Icon icon="arrow-left" class="header-icon" @click="back" />{{ activeAlarm.title }}</div>
        </div>
        <div class="detail-content">
            <div class="item-box" v-for="(item, index) in activeAlarm.details" :key="index">
                <div class="item-title">
                    <h5>
                        {{ item.title }}
                        <div class="title-lev" v-if="item.lev" :class="[{ error: item.lev === '重要' }, { waring: item.lev === '一般' }]">
                            {{ item.lev }}
                        </div>
                    </h5>
                    <!-- <div class="title-txt"></div> -->
                </div>
                <div class="item-content">
                    <template v-if="item.content">
                        <div class="row" v-for="(item2, index2) in item.content" :key="index2">
                            <div class="row-title">{{ item2.title }}</div>
                            <div class="row-info">{{ item2.value }}</div>
                        </div>
                    </template>
                    <template v-else-if="item.btnGroup">
                        <div class="btn-group">
                            <div class="btn">应急广播</div>
                            <div class="btn">门禁控制</div>
                            <div class="btn" @click="showDialog">短信通知</div>
                            <div class="btn">呼叫120</div>
                            <div class="btn">呼叫110</div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
    <transition name="el-fade-in-linear">
        <Dialog :width="320" :height="365" :visible="dialogVisible" :title="'短信通知'" :XY="[1000, 300]" @close="dialogClose" class="dialog-box">
            <div class="dialog-container">
                <div class="dialog-header">
                    <div class="row">
                        <div class="txt">当前半径：{{ radiationRange }}m</div>
                        <!-- <div class="btn">提交</div> -->
                    </div>
                    <div class="row">
                        <el-slider v-model="radiationRange" class="slider" :min="10" :max="200" @input="handleSliderInp" @mousedown.stop></el-slider>
                    </div>
                </div>
                <div class="dialog-body">
                    <div class="dialog-row" v-for="item in notificationList" :key="item.mobileNum">
                        <Icon icon="lianxiren" class="icon" />
                        <div class="name">{{ item.name }}</div>
                        <div class="mobile-num">{{ item.mobileNum }}</div>
                    </div>
                </div>
                <div class="dialog-footer">
                    <el-button type="text" size="medium" :icon="Promotion" @click="send">发送</el-button>
                </div>
            </div>
        </Dialog>
    </transition>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, onMounted, watch, ref } from 'vue'
import Dialog from '@/components/Dialog/index.vue'
import { useDialogStore } from '@/stores/dialog'
import { Promotion } from '@element-plus/icons-vue'
import { message } from 'ant-design-vue'
export default defineComponent({
    name: 'AlarmDetail',
    components: { Dialog },
    props: {
        alarmType: {
            type: Number,
            default: 0
        }
    },
    setup(props, content) {
        const alarmList = [
            {
                title: '环境空间告警',
                details: [
                    {
                        title: '消防告警',
                        lev: '重要',
                        content: [
                            {
                                title: '告警编号：',
                                value: '321da5aad153d13a1ds514'
                            },
                            {
                                title: '告警名称：',
                                value: '火警'
                            },
                            {
                                title: '告警位置：',
                                value: '培训中心走廊'
                            },
                            {
                                title: '设备名称：',
                                value: '培训中心走廊j4区烟感'
                            },
                            {
                                title: '上报时间：',
                                value: '2022-03-02 20:07:34'
                            }
                        ]
                    },
                    {
                        title: '告警处理',
                        content: [
                            {
                                title: '处理人员：',
                                value: '王小华'
                            },
                            {
                                title: '处理时间：',
                                value: '2022-3-2 20:12:22'
                            }
                        ]
                    },
                    {
                        title: '执行人员',
                        content: [
                            {
                                title: '执行人员：',
                                value: 'j区监控岗'
                            },
                            {
                                title: '执行情况：',
                                value: '已完成'
                            },
                            {
                                title: '指派时间：',
                                value: '2022-3-2 20:14:06'
                            }
                        ]
                    },
                    {
                        title: '预案处理',
                        btnGroup: true
                    }
                ]
            },
            {
                title: '综合安防告警',
                details: [
                    {
                        title: '人员黑名单识别告警',
                        lev: '一般',
                        content: [
                            {
                                title: '告警编号：',
                                value: '000020525414515155'
                            },
                            {
                                title: '告警类型',
                                value: '人员黑名单识别'
                            },
                            {
                                title: '告警级别：',
                                value: '一般'
                            },
                            {
                                title: '告警位置：',
                                value: '20F 出入闸机'
                            },
                            {
                                title: '设备名称：',
                                value: '闸机'
                            },
                            {
                                title: '设备名称：',
                                value: '2022-3-3 16:23:28'
                            }
                        ]
                    },
                    {
                        title: '人员信息',
                        content: [
                            {
                                title: '姓名：',
                                value: '蔡旭坤'
                            },
                            {
                                title: '年龄：',
                                value: '23'
                            },
                            {
                                title: '违规原因：',
                                value: '尾随其他员工进入闸机'
                            }
                        ]
                    },
                    {
                        title: '告警处理',
                        content: [
                            {
                                title: '处理人员：',
                                value: '李建东'
                            },
                            {
                                title: '告警时间：',
                                value: '2022-3-3 16:11:32'
                            },
                            {
                                title: '告警意见：',
                                value: '劝返'
                            }
                        ]
                    }
                    // {
                    //   title: "执行情况",
                    //   content: [
                    //     {
                    //       title: "执行人员：",
                    //       value: "王飞传",
                    //     },
                    //     {
                    //       title: "执行情况：",
                    //       value: "已完成",
                    //     },
                    //     {
                    //       title: "指派时间",
                    //       value: "2022-3-3 16:36:02",
                    //     },
                    //   ],
                    // },
                ]
            },
            {
                title: '综合安防告警',
                details: [
                    {
                        title: '人员黑名单识别告警',
                        lev: '一般',
                        content: [
                            {
                                title: '告警编号：',
                                value: '00004511565451441022'
                            },
                            {
                                title: '告警类型',
                                value: '人员黑名单识别'
                            },
                            {
                                title: '告警级别：',
                                value: '一般'
                            },
                            {
                                title: '告警位置：',
                                value: '20F 出入闸机'
                            },
                            {
                                title: '设备名称：',
                                value: '闸机'
                            },
                            {
                                title: '设备名称：',
                                value: '2022-3-8 16:23:28'
                            }
                        ]
                    },
                    {
                        title: '人员信息',
                        content: [
                            {
                                title: '姓名：',
                                value: '王晓光'
                            },
                            {
                                title: '年龄：',
                                value: '26'
                            },
                            {
                                title: '违规原因：',
                                value: '强行闯入闸机'
                            }
                        ]
                    },
                    {
                        title: '告警处理',
                        content: [
                            {
                                title: '处理人员：',
                                value: '柳霞'
                            },
                            {
                                title: '告警时间：',
                                value: '2022-3-8 16:24:32'
                            },
                            {
                                title: '告警意见：',
                                value: '劝返'
                            }
                        ]
                    }
                    // {
                    //   title: "执行情况",
                    //   content: [
                    //     {
                    //       title: "执行人员：",
                    //       value: "王飞传",
                    //     },
                    //     {
                    //       title: "执行情况：",
                    //       value: "已完成",
                    //     },
                    //     {
                    //       title: "指派时间",
                    //       value: "2022-3-3 16:36:02",
                    //     },
                    //   ],
                    // },
                ]
            },
            {
                title: '综合安防告警',
                details: [
                    {
                        title: '人员聚集告警',
                        lev: '一般',
                        content: [
                            {
                                title: '告警编号：',
                                value: '0000000561561045051'
                            },
                            {
                                title: '告警类型：',
                                value: '人员聚集'
                            },
                            {
                                title: '告警级别：',
                                value: '一般'
                            },
                            {
                                title: '告警位置：',
                                value: '20F 东侧'
                            },
                            {
                                title: '告警时间：',
                                value: '2022-3-4 10:14:48'
                            }
                        ]
                    },
                    {
                        title: '告警处理',
                        // lev: "一般",
                        content: [
                            {
                                title: '处理人员：',
                                value: '刘大军'
                            },
                            {
                                title: '处理意见：',
                                value: '疏散人员'
                            },
                            {
                                title: '处理时间：',
                                value: '2022-3-4 10:17:11'
                            }
                        ]
                    },
                    {
                        title: '执行情况',
                        // lev: "一般",
                        content: [
                            {
                                title: '执行人员：',
                                value: 'J区监控岗'
                            },
                            {
                                title: '执行情况：',
                                value: '已完成'
                            },
                            {
                                title: '指派时间：',
                                value: '2022-3-4 10:43:41'
                            }
                        ]
                    }
                ]
            }
        ]
        const dialogStore = useDialogStore()
        const self = reactive({
            radiationRange: 15,
            notificationList: [
                {
                    name: '周亚生',
                    mobileNum: '16885161154'
                }
            ],
            activeAlarm: alarmList[props.alarmType]
        })

        const dialogVisible = ref(false)
        watch(
            () => props.alarmType,
            val => {
                self.activeAlarm = alarmList[val]
                dialogClose && dialogClose()
            },
            {
                immediate: true
            }
        )

        const back = () => {
            content.emit('backPage')
        }

        onMounted(() => {
            dialogVisible.value = false
            dialogStore.setXY([1566, 423])
        })
        const showDialog = () => {
            //

            dialogVisible.value = true
        }
        const dialogClose = () => {
            dialogVisible.value = false
        }

        let notificationMap: any = {
            5: {
                name: '周亚生',
                mobileNum: '16885161154'
            },
            18: {
                name: '王世杰',
                mobileNum: '13485615642'
            },
            19: {
                name: '赵春水',
                mobileNum: '15525546254'
            },
            21: {
                name: '刘伟明',
                mobileNum: '13345682461'
            },
            25: {
                name: '罗安达',
                mobileNum: '15465213114'
            },
            31: {
                name: '陈凯丽',
                mobileNum: '17256482134'
            },
            38: {
                name: '张文娜',
                mobileNum: '15813426442'
            },
            48: {
                name: '曾可可',
                mobileNum: '13484512434'
            }
        }
        const handleSliderInp = (val: number) => {
            //
            // __g.customObject.setScale('fireAlarm', [val, val, val])
            __g.marker3d.update({
                id: 'fireAlarmMark3D',
                pointScale: +(val / 10).toFixed(2)
            })
            for (let key in notificationMap) {
                let ele = notificationMap[key]
                let result = self.notificationList.findIndex(item => {
                    return item.mobileNum === ele.mobileNum
                })
                if (val === +key && result === -1) {
                    self.notificationList.push(ele)
                } else if (val < +key && result !== -1) {
                    self.notificationList.splice(result, 1)
                }
            }
        }
        const send = () => {
            message.success('发送成功！')
            dialogClose()
        }
        return {
            ...toRefs(self),
            back,
            showDialog,
            handleSliderInp,
            send,
            Promotion,
            alarmList,
            dialogVisible,
            dialogClose,
            dialogStore
        }
    }
})
</script>
<style lang="scss" scoped>
.container {
    background: rgba(0, 0, 0, 0.123);
    height: 100%;
    width: 100%;
    @include Padding(10, 20, 10, 20);
    h5 {
        display: flex;
        justify-content: space-between;
        @include MarginBottom(15);
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
    .detail-header {
        .header-title {
            display: flex;
            font-family: PingFangSC-Medium;
            font-weight: Medium;
            // font-size: 14px;
            @include FontSize(14);
            @include Margin(6, 0, 6, 0);
            @include Padding(5, 0, 5, 10);
        }
        .header-icon {
            margin-right: 15px;
            font-size: 16px;
            &:hover {
                color: #ffd564;
            }
        }
    }
    .detail-content {
        @include Padding(15, 10, 10, 10);
        display: flex;
        flex-direction: column;

        @include FontSize(14);
        .item-box {
            display: flex;
            flex-direction: column;
            @include MarginBottom(20);
            .item-title {
                display: flex;
                justify-content: space-between;
                .title-lev {
                    @include FontSize(12);
                    @include Padding(2, 10, 2, 10);
                    &.error {
                        background: rgb(228, 63, 51);
                    }
                    &.waring {
                        color: #fff;
                        background: #ffd000;
                    }
                    // &.
                }
                @include PaddingBottom(5);
                // border-bottom: 1px solid #666;
            }
            .item-content {
                @include Padding(10, 0, 5, 0);
                .row {
                    display: flex;
                    justify-content: space-between;
                    @include Padding(10, 0, 10, 0);
                }
                .btn-group {
                    display: flex;
                    flex-wrap: wrap;
                    @include FontSize(12);
                    .btn {
                        @include Width(80);
                        @include MarginRight(25);
                        background: rgb(18, 66, 118);
                        @include Padding(5, 0, 5, 0);
                        text-align: center;
                        @include MarginBottom(15);
                        cursor: pointer;
                        &:hover {
                            color: #ffd564;
                        }
                        &:nth-child(3n) {
                            @include MarginRight(0);
                        }
                    }
                }
            }
        }
    }
}
.dialog-container {
    height: 100%;
    .dialog-header {
        @include Padding(15, 10, 10, 10);

        .row {
            display: flex;
            justify-content: space-between;
            @include FontSize(12);
            width: 100%;
            .slider {
                width: 100%;
                &:deep(.el-slider__runway) {
                    background-color: #666;
                    .el-slider__bar {
                        background: rgb(38, 145, 197);
                    }
                    .el-slider__button {
                        border-radius: 0;
                        @include Width(16);
                        @include hHeight(12);
                        border: none;
                        background-color: #fff;
                    }
                }
            }
            .btn {
                background: #124276;
                @include Padding(3, 15, 3, 15);
                cursor: pointer;
            }
        }
    }
}
.dialog-box {
    // background: #1e2636;
    border: none;
    &:deep(.header) {
        border: none;
        // background: #131d2e;

        .title {
            // text-align: center;
            // padding-left: 0;
        }
    }
    .dialog-body {
        background: #131d2e90;
        @include hHeight(150);
        color: #c1cfe9;
        @include Padding(3, 3, 3, 3);
        overflow-y: auto;
        .dialog-row {
            display: flex;
            // background: #192643;
            align-items: center;
            box-sizing: border-box;
            @include PaddingLeft(5);
            @include FontSize(14);
            @include MarginBottom(2);

            &:last-child {
                @include MarginBottom(0);
            }
            .icon {
                @include FontSize(28);
                @include MarginRight(20);
            }
            .name {
                @include MarginRight(20);
            }
        }
    }
    .dialog-footer {
        display: flex;
        align-items: center;
        @include hHeight(45);

        .el-button {
            margin-left: auto;
            @include Width(75);
            border-radius: 1px;
            &.el-button--mini {
            }
        }
    }
}
</style>
