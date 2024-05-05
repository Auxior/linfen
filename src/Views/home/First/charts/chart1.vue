<template>
  <div>
    <Chart :options="chartOptions"></Chart>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue'
import Highcharts from 'highcharts'
import Highcharts3D from 'highcharts/highcharts-3d'
import { Chart } from 'highcharts-vue'
import { getData2 } from '../getData'

let data2: any = reactive({})
let chartOptions: any = ref({
  chart: {
    backgroundColor: null,
  },
})

Highcharts3D(Highcharts)

onMounted(async () => {
  const newData = await getData2()
  Object.assign(data2, newData)

  chartOptions.value = {
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 45,
      },
      backgroundColor: null,
      marginTop: -100,
    },
    credits: {
      enabled: false,
    },
    title: null,
    plotOptions: {
      pie: {
        size: '30%',
        innerSize: 75,
        depth: 75,
        dataLabels: {
          enabled: true,
          format: '<span style="font-size:20px">{point.percentage:.2f}%</span><br><span style="color:#fff;font-size:16px">{point.name}</span>',
          style: {
            color: '#00FFF5',
            textOutline: null,
          },
        },
      },
    },
    series: [
      {
        data: [
          { name: '在用', y: data2[1].totalNum, color: '#00BBE9' },
          { name: '闲置', y: data2[0].totalNum, color: '#0084E7' },
        ],
      },
    ],
  }
})
</script>

<style></style>
