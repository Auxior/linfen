<template>
  <div ref="chart" style="width: 486px; height: 335px"></div>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue'
import * as echarts from 'echarts'
import { getData6 } from '../getData'

let chart = ref(null)
let data6: any = reactive({})

onMounted(async () => {
  const newData = await getData6()
  Object.assign(data6, newData)
  let newArray = newData.map((item: any) => ({ value: item.costNum, name: item.assetCategory }))

  const myChart = echarts.init(chart.value)
  const option = {
    legend: {
      top: 'bottom',
      textStyle: {
        color: '#FFFFFF',
      },
    },
    series: [
      {
        type: 'pie',
        radius: [15, 75],
        center: ['50%', '50%'],
        roseType: 'area',
        data: newArray,
        label: {
          color: '#FFFFFF',
        },
      },
    ],
  }
  myChart.setOption(option)
})
</script>
