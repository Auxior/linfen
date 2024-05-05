<template>
    <div class="orderReduce">
        <chyCharts width="330" height="210" :options="options" container="orderReduceBar"></chyCharts>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue'
import * as echarts from "echarts";
import chyCharts from '../../components/v3echarts.vue'
export default defineComponent({
    setup() {
        const options = {
            // color: ["#4d82df", "#44e2dc"],
            title: {
                text: "重要设备可用率",
                textStyle: {
                    fontSize: 16,
                    color: "#fff",
                    fontWeight: 100,
                    fontFamily: "Tencent",
                }
            },
            xAxis: {
                type: "category",
                data: ["6-27", "6-28", "6-29", "6-30", "7-01", "7-02", "7-03"],
                boundaryGap: [0, 0.01],
                axisLabel: {
                    //轴上的字 字体、样式
                    inside: false,
                    fontSize: "13",
                    fontFamily: "OPPOSans R",
                    color: "rgba(255,255,255,.8)",
                    margin: 10,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 2,
                        color: "#FFFFFF",
                        opacity: 0.3,
                    },
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: ["#315070"],
                        width: 0,
                        type: "solid",
                    },
                },
                axisTick: {
                    show: true,
                },
            },
            yAxis: {
                type: "value",
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: ["#315070"],
                        width: 0,
                        type: "solid",
                    },
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 2,
                        color: "#FFFFFF",
                        opacity: 0.3,
                    },
                },
            },
            grid: {
                left: "3%",
                right: "4%",
                top: "20%",
                bottom: "0%",
                containLabel: true,
            },
            series: [
                {
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
                            {
                                offset: 1,
                                color: "#4C81DD",
                            },
                            {
                                offset: 0,
                                color: "rgba(45, 152, 255, 0.3)",
                            },
                        ]),
                    },
                    data: [
                        {
                            value: 10,
                            // itemStyle: {
                            //     color: "#4C81DD",
                            // },
                        },
                        {
                            value: 50,
                            // itemStyle: {
                            //     color: "#38D9D0",
                            // },
                        },
                        {
                            value: 200,
                            // itemStyle: {
                            //     color: "#4C81DD",
                            // },
                        },
                        {
                            value: 320,
                            // itemStyle: {
                            //     color: "#38D9D0",
                            // },
                        },
                        {
                            value: 490,
                            // itemStyle: {
                            //     color: "#4C81DD",
                            // },
                        },
                        {
                            value: 320,
                            // itemStyle: {
                            //     color: "#38D9D0",
                            // },
                        },
                        {
                            value: 220,
                            // itemStyle: { color: "#4C81DD" },
                        },
                    ],
                    type: "bar",
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
.orderReduce {
    width: 100%;
    height: 210px;
    // border: 1px solid red;
    padding: 5px;
    background-color: #192333;
}
</style>