<template>
    <div class="orderstatus">
        <chyCharts
            width="330"
            height="210"
            :options="options"
            :isFirst="true"
            container="orderstatus"
        ></chyCharts>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import chyCharts from '../../components/v3echarts.vue'
export default defineComponent({
    setup() {
        let options = {
            title: {
                text: "办公区使用率",
                textStyle: {
                    fontSize: 16,
                    color: "#fff",
                    fontWeight: 100,
                    fontFamily: "Tencent",
                }
            },
            series: [
                {
                    type: "liquidFill",
                    radius: "45%",
                    center: ["50%", "50%"],
                    data: [0.5, 0.55], // data个数代表波浪数
                    backgroundStyle: {
                        borderWidth: 1,
                        color: "rgb(255,0,255,0.1)",
                    },
                    // 修改波浪颜色
                    color: ["#1594E8"], //所有波浪一个颜色
                    // color:['yellow','red','pink'], 每个波浪不同颜色，颜色数组长度为对应的波浪个数
                    label: {
                        normal: {
                            // formatter: (0.5 * 100).toFixed(0) + "%",
                            // formatter: `${this.huge.rate}`,
                            formatter: "50%",
                            textStyle: {
                                fontSize: 30,
                            },
                        },
                    },
                    outline: {
                        show: false,
                    },
                },
                {
                    type: "pie",
                    center: ["50%", "50%"],
                    radius: ["50%", "52%"],
                    hoverAnimation: true,
                    color: [
                        {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 1,
                                    color: "#3DD4F2",
                                },
                                {
                                    offset: 0,
                                    color: "#0EF1E7",
                                },
                            ],
                            globalCoord: true,
                        },
                    ],
                    data: [
                        {
                            name: "",
                            value: 400,
                            labelLine: {
                                show: false,
                            },
                            itemStyle: {
                                color: "#2AE0F0",
                            },
                            emphasis: {
                                labelLine: {
                                    show: false,
                                },
                                itemStyle: {
                                    color: "#2AE0F0",
                                },
                            },
                        },
                        {
                            //画中间的图标
                            name: "",
                            value: 4,
                            labelLine: {
                                show: false,
                            },
                            itemStyle: {
                                color: "#ffffff",
                                normal: {
                                    color: "#2AE0F0",
                                    borderColor: "#2AE0F0",
                                    borderWidth: 5,
                                    // borderRadius: '100%'
                                },
                            },
                            label: {
                                borderRadius: "100%",
                            },
                            emphasis: {
                                labelLine: {
                                    show: false,
                                },
                                itemStyle: {
                                    color: "#2AE0F0",
                                },
                            },
                        },
                        {
                            // 解决圆点过大后续部分显示明显的问题
                            name: "",
                            value: 4,
                            labelLine: {
                                show: false,
                            },
                            itemStyle: {
                                color: "#2AE0F0",
                            },
                            emphasis: {
                                labelLine: {
                                    show: false,
                                },
                                itemStyle: {
                                    color: "#2AE0F0",
                                },
                            },
                        },
                        {
                            //画剩余的刻度圆环
                            name: "",
                            value: 120,
                            itemStyle: {
                                color: "#050038",
                            },
                            label: {
                                show: false,
                            },
                            labelLine: {
                                show: false,
                            },
                            emphasis: {
                                labelLine: {
                                    show: false,
                                },
                                itemStyle: {
                                    color: "rgba(255,255,255,0)",
                                },
                            },
                        },
                    ],
                },
            ],
        }
        return {
            options,
        }
    },
    components: {
        chyCharts
    }

})

</script>
<style lang="scss" scoped>
.orderstatus {
    width: 100%;
    height: 210px;
    // border: 1px solid red;
    padding: 5px;
    background-color: #192333;
}
</style>