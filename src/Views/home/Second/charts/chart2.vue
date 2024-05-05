<template>
  <div ref="chart" style="width: 670px; height: 350px"></div>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue'
import * as echarts from 'echarts'
import { getData2 } from '../getData'

let chart = ref(null)
let data2: any = reactive({})

onMounted(async () => {
  const newData = await getData2()
  Object.assign(data2, newData)
  let newArray = newData.map((item: any) => ({ value: item.totalNum, name: item.assetType }))

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
        radius: '50%',
        label: {
          color: '#FFFFFF',
        },
        data: newArray,
      },
    ],
  }
  myChart.setOption(option)
})
</script>
