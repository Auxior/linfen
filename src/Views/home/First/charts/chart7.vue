<template>
  <div ref="chart" style="padding-top: 100px; width: 496px; height: 400px"></div>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue'
import * as echarts from 'echarts'
import { getData10 } from '../getData'

let chart = ref(null)
let data10: any = reactive({})

onMounted(async () => {
  const newData = await getData10()
  Object.assign(data10, newData)
  let ssdwArray = newData.map((item: any) => item.ssdw)
  let totalNumArray = newData.map((item: any) => item.totalNum)

  const myChart = echarts.init(chart.value)
  const option = {
    xAxis: {
      type: 'category',
      data: ssdwArray,
      axisLabel: {
        color: '#FFFFFF',
        interval: 0,
        formatter: function (value: string) {
          return value.length > 5 ? value.slice(0, 5) + '...' : value
        },
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
        data: totalNumArray,
        type: 'bar',
      },
    ],
  }
  myChart.setOption(option)
})
</script>
