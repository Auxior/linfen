<template>
  <div ref="chart" style="width: 945px; height: 250px"></div>
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
  let newArray = newData.map((item: any) => ({ value: item.totalNum, name: item.unitName }))

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
        radius: ['40%', '70%'],
        center: ['50%', '70%'],
        // adjust the start and end angle
        startAngle: 180,
        endAngle: 360,
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
