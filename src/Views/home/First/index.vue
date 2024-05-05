<template>
  <div class="container">
    <div class="top"><img src="./imgs/top.png" /></div>
    <div class="frame1">
      <div>
        <div class="topWord1">{{ data1.unitNum }}</div>
        <div class="unit1">个</div>
        <img class="img1" src="./imgs/icon1.png" />
        <div class="bottomWord1">单位数量</div>
      </div>
      <div>
        <div class="topWord2">{{ data1.totalNum }}</div>
        <div class="unit2">件</div>
        <img class="img2" src="./imgs/icon1.png" />
        <div class="bottomWord2">资产总数量</div>
      </div>
      <div>
        <div class="topWord3">{{ data1.costNum.toString().substring(0, 5) }}</div>
        <div class="unit3">万元</div>
        <img class="img3" src="./imgs/icon1.png" />
        <div class="bottomWord3">资产价值</div>
      </div>
    </div>
    <div class="frame2">
      <Chart1 />
    </div>
    <div class="frame3">
      <div class="font1-1">{{ (data3.costNum / 10000).toString().substring(0, 5) }}</div>
      <div class="font1-2">2022年</div>
      <div class="font1-3">资产总额</div>
      <img class="img1" src="./imgs/icon2.png" />
      <div class="font2-1">{{ (data3.inCostNum / 10000).toString().substring(0, 5) }}</div>
      <div class="font2-2">2022年</div>
      <div class="font2-3">年度增加额</div>
      <img class="img2" src="./imgs/icon3.png" />
      <div class="font3-1">{{ (data3.reCostNum / 10000).toString().substring(0, 4) }}</div>
      <div class="font3-2">2022年</div>
      <div class="font3-3">年度减少额</div>
      <img class="img3" src="./imgs/icon4.png" />
    </div>
    <div class="frame4">
      <img class="img1" src="./imgs/icon5.png" />
      <div class="title1">通用资产总额(元)</div>
      <div class="amount1">{{ data4.assetCostNum }}</div>
      <img class="img2" src="./imgs/icon6.png" />
      <div class="title2">通用资产总额年度增加(元)</div>
      <div class="amount2">{{ data4.svInAssetCostNum }}</div>
      <img class="img3" src="./imgs/icon7.png" />
      <div class="title3">通用资产总额年度减少(元)</div>
      <div class="amount3">{{ data4.svReAssetCostNum ? data4.svInAssetCostNum : '0.00' }}</div>
    </div>
    <div class="frame5">
      <el-table :data="tableData" style="position: absolute; left: 32.5px; top: 60px; width: 550px; background-color: transparent">
        <el-table-column prop="ssdw" label="单位名称" align="center" />
        <el-table-column prop="totalNum" label="数量（件）" align="center" />
        <el-table-column prop="costNum" label="价值（万元）" align="center" />
        <el-table-column prop="mjNum" label="面积（平方米）" align="center" />
      </el-table>
    </div>
    <div class="frame6">
      <Chart2 />
    </div>
    <div class="frame7">
      <Chart3 />
    </div>
    <div class="frame8">
      <component :is="currentChart" />
    </div>
  </div>

  <Features :btn_data="btn_data1" @change="changeBtn1" />

  <div class="radio1">
    <el-radio-group v-model="radio1">
      <el-radio :value="1">资产增加</el-radio>
      <el-radio :value="2">资产减少</el-radio>
    </el-radio-group>
  </div>
  <div class="radio2">
    <el-radio-group v-model="radio2" size="small">
      <el-radio-button label="按类别" :value="3" />
      <el-radio-button label="按单位" :value="4" />
    </el-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import Features from '@/components/features/index.vue'
import axios from 'axios'
import { getData1, getData3, getData4, getData11 } from './getData'
import Chart1 from './charts/chart1.vue'
import Chart2 from './charts/chart2.vue'
import Chart3 from './charts/chart3.vue'
import Chart4 from './charts/chart4.vue'
import Chart5 from './charts/chart5.vue'
import Chart6 from './charts/chart6.vue'
import Chart7 from './charts/chart7.vue'

const btn_data1 = [
  {
    id: 0,
    name: '城市概览',
    isActive: true,
  },
  {
    id: 1,
    name: '市直单位',
    isActive: false,
  },
]

const changeBtn1 = async (Item: any) => {
  if (Item.id == 0 && Item.isActive) {
    router.push('/home/First')
  } else {
    router.push('/home/Second')
  }
}

let radio1 = ref(1)
let radio2 = ref(3)

let currentChart = computed(() => {
  if (radio1.value === 1 && radio2.value === 3) {
    return Chart4
  } else if (radio1.value === 2 && radio2.value === 3) {
    return Chart5
  } else if (radio1.value === 1 && radio2.value === 4) {
    return Chart6
  } else if (radio1.value === 2 && radio2.value === 4) {
    return Chart7
  }
})

const router = useRouter()

const loginData = {
  username: 'admin',
  password: 'admin123',
}

let data1: any = reactive({})
let data3: any = reactive({})
let data4: any = reactive({})
let data11: any = reactive({})
let tableData: any = reactive({})

let token: any = localStorage.getItem('token')

// token校验
onMounted(async () => {
  setTimeout(() => {
    __g.camera.set([634468.776094, 4193546.896875, 859.54, -3.570099, -174.801147, 1])
  }, 1000)

  if (!token) {
    const response = await axios.post('http://10.0.26.208:5555/apiLogin', loginData)
    if (response.data.code === 200) {
      token = response.data.token
      localStorage.setItem('token', token)
    }
  } else {
    const response = await axios.get('http://10.0.26.208:5555/store/baseVisual/totalAsset', {
      headers: { Authorization: `Bearer ${token}` },
    })
    if (response.data.code === 401) {
      const response = await axios.post('http://10.0.26.208:5555/apiLogin', loginData)
      if (response.data.code === 200) {
        token = response.data.token
        localStorage.setItem('token', token)
      }
    }
  }

  const newData1 = await getData1()
  const newData3 = await getData3()
  const newData4 = await getData4()
  const newData11 = await getData11()
  Object.assign(data1, newData1)
  Object.assign(data3, newData3)
  Object.assign(data4, newData4)
  Object.assign(data11, newData11)
  tableData = newData11
})
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: linear-gradient(270deg, #02081e 0%, rgba(2, 8, 30, 0.7) 28%, rgba(2, 8, 30, 0) 50%, rgba(2, 8, 30, 0.7) 71%, #030c28 100%);
  pointer-events: none;
}

.top {
  margin-top: -0.5em;
}

.btn {
  position: absolute;
  top: 15%;
  left: 45%;
  z-index: 999;
}

.radio1 {
  position: absolute;
  top: 12.5%;
  left: 75%;
  z-index: 999;
}

.radio2 {
  position: absolute;
  top: 12.5%;
  left: 88%;
  z-index: 999;
}

.frame1 {
  background: url('./imgs/frame1.png') no-repeat;
  width: 460px;
  height: 210px;
  position: fixed;
  top: 65px;
  left: 30px;

  .topWord1 {
    position: absolute;
    left: 48.43px;
    top: 76px;
    font-size: 32px;
    color: #47ffff;
  }

  .unit1 {
    position: absolute;
    left: 88.43px;
    top: 86px;
    font-size: 18px;
  }

  .img1 {
    position: absolute;
    left: 0px;
    top: 58px;
  }

  .bottomWord1 {
    position: absolute;
    left: 57.93px;
    top: 181px;
    font-size: 12px;
    color: #fff;
  }

  .topWord2 {
    position: absolute;
    left: 174.24px;
    top: 76px;
    font-size: 32px;
    color: #47ffff;
  }

  .unit2 {
    position: absolute;
    left: 254.24px;
    top: 86px;
    font-size: 18px;
  }

  .img2 {
    position: absolute;
    left: 149.78px;
    top: 58px;
  }

  .bottomWord2 {
    position: absolute;
    left: 201.71px;
    top: 181px;
    font-size: 12px;
    color: #fff;
  }

  .topWord3 {
    position: absolute;
    left: 308.05px;
    top: 76px;
    font-size: 32px;
    color: #47ffff;
  }

  .unit3 {
    position: absolute;
    left: 403.05px;
    top: 86px;
    font-size: 18px;
  }

  .img3 {
    position: absolute;
    left: 299.56px;
    top: 58px;
  }

  .bottomWord3 {
    position: absolute;
    left: 357.49px;
    top: 181px;
    font-size: 12px;
    color: #fff;
  }
}

.frame2 {
  background: url('./imgs/frame2.png') no-repeat;
  width: 460px;
  height: 276px;
  position: fixed;
  top: 285px;
  left: 30px;
}

.frame3 {
  background: url('./imgs/frame3.png') no-repeat;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 571px;
  left: 30px;

  .font1-1 {
    position: absolute;
    left: 63px;
    top: 60px;
    font-size: 14;
    color: #00fff5;
  }

  .font1-2 {
    position: absolute;
    left: 60px;
    top: 170px;
    font-size: 14px;
    color: #00fff5;
  }

  .font1-3 {
    position: absolute;
    left: 55px;
    top: 190px;
    font-size: 14px;
    color: #00fff5;
  }

  .img1 {
    position: absolute;
    top: 78px;
    left: 28px;
  }

  .font2-1 {
    position: absolute;
    left: 205px;
    top: 60px;
    font-size: 14;
    color: #00fff5;
  }

  .font2-2 {
    position: absolute;
    left: 200px;
    top: 170px;
    font-size: 14px;
    color: #00fff5;
  }

  .font2-3 {
    position: absolute;
    left: 190px;
    top: 190px;
    font-size: 14px;
    color: #00fff5;
  }

  .img2 {
    position: absolute;
    top: 78px;
    left: 168px;
  }

  .font3-1 {
    position: absolute;
    left: 360px;
    top: 60px;
    font-size: 14;
    color: #00fff5;
  }

  .font3-2 {
    position: absolute;
    left: 350px;
    top: 170px;
    font-size: 14px;
    color: #00fff5;
  }

  .font3-3 {
    position: absolute;
    left: 340px;
    top: 190px;
    font-size: 14px;
    color: #00fff5;
  }

  .img3 {
    position: absolute;
    top: 69px;
    left: 318px;
  }
}

.frame4 {
  background: url('./imgs/frame4.png') no-repeat;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 809px;
  left: 30px;

  .img1 {
    position: absolute;
    left: 46px;
    top: 64px;
  }

  .title1 {
    position: absolute;
    left: 108px;
    top: 67px;
    font-size: 16;
  }

  .amount1 {
    position: absolute;
    left: 108px;
    top: 90px;
    font-size: 14px;
    color: #47ffff;
  }

  .img2 {
    position: absolute;
    left: 46px;
    top: 124px;
  }

  .title2 {
    position: absolute;
    left: 108px;
    top: 128px;
    font-size: 16;
  }

  .amount2 {
    position: absolute;
    left: 108px;
    top: 151px;
    font-size: 14px;
    color: #47ffff;
  }

  .img3 {
    position: absolute;
    left: 46px;
    top: 186px;
  }

  .title3 {
    position: absolute;
    left: 108px;
    top: 188px;
    font-size: 16;
  }

  .amount3 {
    position: absolute;
    left: 109px;
    top: 211px;
    font-size: 14px;
    color: #47ffff;
  }
}

.frame5 {
  background: url('./imgs/frame5.png') no-repeat;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 810px;
  left: 362px;

  img {
    position: absolute;
    left: 31px;
    top: 50px;
  }
}

.frame6 {
  background: url('./imgs/frame6.png') no-repeat;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 810px;
  left: 987px;
}

.frame7 {
  background: url('./imgs/frame7.png') no-repeat;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 446px;
  left: 1424px;
}

.frame8 {
  background: url('./imgs/frame8.png') no-repeat;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 74px;
  left: 1427px;

  img {
    position: absolute;
    left: 32px;
    top: 125px;
  }
}

/* 表格内背景颜色 */
::v-deep .el-table th,
::v-deep .el-table tr,
::v-deep .el-table td {
  background-color: transparent !important;
  color: #fff;
}
</style>
