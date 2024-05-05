<template>
  <div ref="chart" style="padding-top: 80px; width: 486px; height: 400px"></div>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue'
import * as echarts from 'echarts'
import { getData8 } from '../getData'

let chart = ref(null)
let data8: any = reactive({})

onMounted(async () => {
  const newData = await getData8()
  Object.assign(data8, newData)
  let assetTypeArray = newData.map((item: any) => item.assetType)
  let totalNumArray = newData.map((item: any) => item.totalNum)

  const myChart = echarts.init(chart.value)
  const option = {
    xAxis: {
      type: 'category',
      data: assetTypeArray,
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
