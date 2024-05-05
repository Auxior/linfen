<template>
  <div ref="chart" style="padding-left: 50px; width: 950px; height: 300px"></div>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue'
import * as echarts from 'echarts'
import { getData5 } from '../getData'

let chart = ref(null)
let data5: any = reactive({})

onMounted(async () => {
  const newData = await getData5()
  Object.assign(data5, newData)
  let analysisYearArray = newData.map((item: any) => item.analysisYear)
  let costNumArray = newData.map((item: any) => item.costNum)

  const myChart = echarts.init(chart.value)
  const option = {
    xAxis: {
      type: 'category',
      data: analysisYearArray,
      axisLabel: {
        color: '#FFFFFF',
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: '#FFFFFF',
      },
    },
    series: [
      {
        data: costNumArray,
        type: 'line',
        smooth: true,
      },
    ],
  }
  myChart.setOption(option)
})
</script>
