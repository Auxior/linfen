<template>
  <div class="container" v-if="aside">
    <div class="top"><img src="./imgs/top.png" /></div>
    <div class="frame1">
      <Chart1 />
    </div>
    <div class="frame2">
      <div class="total">{{ data3.totalNum }}</div>
      <div class="cost">{{ data3.costNum }}</div>
      <div class="mj">{{ data3.mjNum }}</div>
      <div class="quaTotal">{{ data3.quaTotalNum }}</div>
      <div class="quaCost">{{ data3.quaCostNum }}</div>
      <div class="quaMj">{{ data3.quaMjNum }}</div>
      <div class="monTotal">{{ data3.monTotalNum }}</div>
      <div class="monCost">{{ data3.monCostNum }}</div>
      <div class="monMj">{{ data3.monMjNum }}</div>
    </div>
    <div class="frame3">
      <Chart3 />
    </div>
    <div class="frame4">
      <Chart4 />
    </div>
    <div class="frame5">
      <div class="total">{{ data4.totalNum }}</div>
      <div class="cost">{{ data4.costNum }}</div>
      <div class="mj">{{ data4.mjNum }}</div>
      <div class="quaTotal">{{ data4.quaTotalNum }}</div>
      <div class="quaCost">{{ data4.quaCostNum }}</div>
      <div class="quaMj">{{ data4.quaMjNum }}</div>
      <div class="monTotal">{{ data4.monTotalNum }}</div>
      <div class="monCost">{{ data4.monCostNum }}</div>
      <div class="monMj">{{ data4.monMjNum }}</div>
    </div>
    <div class="frame6">
      <Chart2 />
    </div>
  </div>

  <Features style="top: 60%" :btn_data="btn_data" @change="changeBtn" />
  <Features :btn_data="btn_data1" @change="changeBtn1" />
  <component v-if="showHouse" :is="currentBtn" />

  <div class="select">
    <el-autocomplete v-model="state1" :fetch-suggestions="querySearch" clearable class="inline-input w-50" placeholder="请输入检索地点" @select="handleSelect" />
  </div>

  <div v-if="total" class="frameTotal1">
    <el-table :data="tableData1" style="position: absolute; left: 32.5px; top: 60px; width: 550px; background-color: transparent">
      <el-table-column prop="assetCategory" label="资产分类" align="center" />
      <el-table-column prop="num" label="数量" align="center" />
    </el-table>
  </div>

  <div v-if="total" class="frameTotal2">
    <el-cascader v-model="value1" :options="options1" :props="props1" @change="handleChange1" size="large" />
  </div>

  <!-- <div v-if="total" class="single">
    <el-table :data="currentData" height="300">
      <el-table-column fixed prop="assetName" label="资产名称" />
      <el-table-column prop="assetCode" label="资产编号" />
      <el-table-column prop="buildingName" label="楼栋" />
      <el-table-column prop="floorName" label="楼层" />
      <el-table-column prop="roomName" label="房间" />
    </el-table>
  </div> -->

  <div v-if="dialogVisible" class="frameSingle">
    <el-table :data="data7.rows.filter((room:any) => room.roomName == 301)" height="180" style="position: absolute; left: 32.5px; top: 60px; width: 550px; background-color: transparent">
      <el-table-column prop="roomName" label="房间" align="center" />
      <el-table-column prop="assetName" label="资产名称" align="center" />
      <el-table-column prop="assetCode" label="资产编号" align="center" />
      <el-table-column prop="syzk" label="使用状况" align="center" />
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { dialogVisible } from '@/components/aircityutils/Event'
import House1 from './House1.vue'
import House2 from './House2.vue'
import House3 from './House3.vue'
import House4 from './House4.vue'
import House5 from './House5.vue'
import Features from '@/components/features/index.vue'
import { getData3, getData4, getData7, getData8 } from './getData'
import Chart1 from './charts/chart1.vue'
import Chart2 from './charts/chart2.vue'
import Chart3 from './charts/chart3.vue'
import Chart4 from './charts/chart4.vue'

interface BuildItem {
  value: string
  link: number[]
}

const value1 = ref([])

const props1 = {
  expandTrigger: 'hover' as const,
  value: 'id',
}

const handleChange1 = (value: any) => {
  console.log(value)
}

const options1 = [
  {
    id: '临汾市财政局',
    label: '临汾市财政局',
    children: [
      {
        id: '东楼',
        label: '东楼',
        children: [
          {
            id: '3',
            label: '3',
            children: [
              {
                id: '301',
                label: '301',
              },
              {
                id: '302',
                label: '302',
              },
              {
                id: '303',
                label: '303',
              },
              {
                id: '304',
                label: '304',
              },
              {
                id: '305',
                label: '305',
              },
              {
                id: '306',
                label: '306',
              },
              {
                id: '307',
                label: '307',
              },
              {
                id: '308',
                label: '308',
              },
              {
                id: '309',
                label: '309',
              },
              {
                id: '310',
                label: '310',
              },
              {
                id: '311',
                label: '311',
              },
              {
                id: '312',
                label: '312',
              },
              {
                id: '313',
                label: '313',
              },
              {
                id: '314',
                label: '314',
              },
            ],
          },
        ],
      },
      {
        id: '办公楼',
        label: '办公楼',
        children: [
          {
            id: '1',
            label: '1',
            children: [
              {
                id: '',
                label: '',
              },
              {
                id: '101',
                label: '101',
              },
              {
                id: '102',
                label: '102',
              },
              {
                id: '103',
                label: '103',
              },
              {
                id: '105',
                label: '105',
              },
              {
                id: '106',
                label: '106',
              },
              {
                id: '107',
                label: '107',
              },
              {
                id: '108',
                label: '108',
              },
              {
                id: '109',
                label: '109',
              },
              {
                id: '110',
                label: '110',
              },
              {
                id: '111',
                label: '111',
              },
              {
                id: '112',
                label: '112',
              },
              {
                id: '113',
                label: '113',
              },
              {
                id: '115',
                label: '115',
              },
              {
                id: '116',
                label: '116',
              },
              {
                id: '117',
                label: '117',
              },
              {
                id: '118',
                label: '118',
              },
              {
                id: '119',
                label: '119',
              },
              {
                id: '120',
                label: '120',
              },
              {
                id: '121',
                label: '121',
              },
              {
                id: '122',
                label: '122',
              },
              {
                id: '123',
                label: '123',
              },
              {
                id: '125',
                label: '125',
              },
              {
                id: '126',
                label: '126',
              },
              {
                id: '128',
                label: '128',
              },
              {
                id: '130',
                label: '130',
              },
            ],
          },
          {
            id: '2',
            label: '2',
            children: [
              {
                id: '201',
                label: '201',
              },
              {
                id: '202',
                label: '202',
              },
              {
                id: '203',
                label: '203',
              },
              {
                id: '205',
                label: '205',
              },
              {
                id: '206',
                label: '206',
              },
              {
                id: '207',
                label: '207',
              },
              {
                id: '208',
                label: '208',
              },
              {
                id: '209',
                label: '209',
              },
              {
                id: '210',
                label: '210',
              },
              {
                id: '211',
                label: '211',
              },
              {
                id: '212',
                label: '212',
              },
              {
                id: '213',
                label: '213',
              },
              {
                id: '215',
                label: '215',
              },
              {
                id: '216',
                label: '216',
              },
              {
                id: '217',
                label: '217',
              },
              {
                id: '219',
                label: '219',
              },
              {
                id: '220',
                label: '220',
              },
              {
                id: '221',
                label: '221',
              },
              {
                id: '222',
                label: '222',
              },
              {
                id: '226',
                label: '226',
              },
              {
                id: '228',
                label: '228',
              },
              {
                id: '230',
                label: '230',
              },
              {
                id: '232',
                label: '232',
              },
              {
                id: '236',
                label: '236',
              },
              {
                id: '238',
                label: '238',
              },
            ],
          },
          {
            id: '3',
            label: '3',
            children: [
              {
                id: '300',
                label: '300',
              },
              {
                id: '301',
                label: '301',
              },
              {
                id: '302',
                label: '302',
              },
              {
                id: '303',
                label: '303',
              },
              {
                id: '305',
                label: '305',
              },
              {
                id: '306',
                label: '306',
              },
              {
                id: '307',
                label: '307',
              },
              {
                id: '308',
                label: '308',
              },
              {
                id: '309',
                label: '309',
              },
              {
                id: '310',
                label: '310',
              },
              {
                id: '311',
                label: '311',
              },
              {
                id: '312',
                label: '312',
              },
              {
                id: '313',
                label: '313',
              },
              {
                id: '316',
                label: '316',
              },
              {
                id: '317',
                label: '317',
              },
              {
                id: '318',
                label: '318',
              },
              {
                id: '319',
                label: '319',
              },
              {
                id: '320',
                label: '320',
              },
              {
                id: '321',
                label: '321',
              },
              {
                id: '322',
                label: '322',
              },
              {
                id: '323',
                label: '323',
              },
              {
                id: '326',
                label: '326',
              },
              {
                id: '328',
                label: '328',
              },
              {
                id: '330',
                label: '330',
              },
              {
                id: '332',
                label: '332',
              },
              {
                id: '336',
                label: '336',
              },
            ],
          },
          {
            id: '4',
            label: '4',
            children: [
              {
                id: '',
                label: '',
              },
            ],
          },
        ],
      },
      {
        id: '北楼',
        label: '北楼',
        children: [
          {
            id: '1',
            label: '1',
            children: [
              {
                id: '101',
                label: '101',
              },
            ],
          },
          {
            id: '2',
            label: '2',
            children: [
              {
                id: '201',
                label: '201',
              },
              {
                id: '202',
                label: '202',
              },
              {
                id: '203',
                label: '203',
              },
            ],
          },
          {
            id: '3',
            label: '3',
            children: [
              {
                id: '301',
                label: '301',
              },
              {
                id: '302',
                label: '302',
              },
              {
                id: '303',
                label: '303',
              },
            ],
          },
        ],
      },
    ],
  },
]

const router = useRouter()

const aside = ref(true)
const total = ref(false)

const state1 = ref('')
const builds = ref<BuildItem[]>([])
const querySearch = (queryString: string, cb: any) => {
  const results = queryString ? builds.value.filter(createFilter(queryString)) : builds.value
  // call callback function to return suggestions
  cb(results)
}
const createFilter = (queryString: string) => {
  return (build: BuildItem) => {
    return build.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
  }
}

const tableData1 = [
  {
    assetCategory: '通用设备',
    num: 10,
  },
]

const loadAll = () => {
  return [
    { value: '规划与自然资源局', link: [634348.999766, 4194263.13125, 814.355391, -12.859238, -67.967514, 1] },
    { value: '老干部局', link: [634957.696172, 4194236.405, 815.881484, -3.565051, -68.637459, 1] },
    { value: '行政审批服务管理局', link: [634188.786875, 4194048.1325, 830.021875, -29.677826, -62.26693, 1] },
    { value: '统计局', link: [634256.961406, 4193783.2475, 813.304219, 0.963507, -132.139511, 1] },
    { value: '财政局', link: [634210.600313, 4193708.098125, 816.828438, -12.71704, -71.777031, 1] },
    { value: '市场监督管理局&应急局', link: [634055.075625, 4193743.1575, 814.915, -2.253238, -63.507915, 1] },
  ]
}

let currentBtn = ref(House1)

const handleSelect = (item: BuildItem) => {
  __g.marker3d.clear()
  __g.camera.set(item.link)
  if (item.value === '规划与自然资源局') {
    currentBtn.value = House1
  } else if (item.value === '老干部局') {
    currentBtn.value = House2
  } else if (item.value === '行政审批服务管理局') {
    currentBtn.value = House3
  } else if (item.value === '统计局') {
    currentBtn.value = House4
  } else if (item.value === '财政局') {
    currentBtn.value = House5
  } else if (item.value === '市场监督管理局&应急局') {
    currentBtn.value = House5
  }
}

const loginData = {
  username: 'admin',
  password: 'admin123',
}

let data3: any = reactive({})
let data4: any = reactive({})
let data7: any = reactive({})
let data8: any = reactive({})

let token: any = localStorage.getItem('token')

// token校验
onMounted(async () => {
  builds.value = loadAll()
  dialogVisible.value = false
  __g.tileLayer.stopHighlightAllActors()
  __g.marker3d.clear()

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

  const newData3 = await getData3()
  const newData4 = await getData4()
  const newData7 = await getData7()
  const newData8 = await getData8()
  Object.assign(data3, newData3)
  Object.assign(data4, newData4)
  Object.assign(data7, newData7)
  Object.assign(data8, newData8)
})

const showHouse = ref(false)

const btn_data = [
  {
    id: 0,
    name: '楼宇拆分',
    isActive: false,
  },
]

const btn_data1 = [
  {
    id: 0,
    name: '城市概览',
    isActive: false,
  },
  {
    id: 1,
    name: '市直单位',
    isActive: true,
  },
]

const changeBtn = async (Item: any) => {
  if (Item.id == 0 && Item.isActive) {
    showHouse.value = true
    aside.value = false
    total.value = true
  } else {
    showHouse.value = false
    aside.value = true
    total.value = false
  }
}
const changeBtn1 = async (Item: any) => {
  if (Item.id == 0 && Item.isActive) {
    router.push('/home/First')
  } else {
    router.push('/home/Second')
  }
}
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

.total {
  position: absolute;
  top: 15%;
  left: 5%;
  z-index: 999;
}

.frameTotal1 {
  background: url('./imgs/frameTotal.png') no-repeat;
  width: 615px;
  height: 260px;
  position: absolute;
  top: 15%;
  left: 5%;
  z-index: 999;
}

.frameTotal2 {
  position: absolute;
  top: 20%;
  left: 45%;
  z-index: 999;
}

.frameSingle {
  background: url('./imgs/frameTotal.png') no-repeat;
  width: 615px;
  height: 260px;
  position: absolute;
  top: 15%;
  right: 5%;
  z-index: 999;
}

.single {
  position: absolute;
  top: 15%;
  right: 5%;
  z-index: 999;
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

.dialog {
  position: absolute;
  top: 55%;
  left: 47.5%;
  z-index: 999;
  opacity: 0.75;

  .card {
    width: 200%;
  }
}

.select {
  position: absolute;
  top: 16%;
  left: 44.9%;
  z-index: 999;
}

.frame1 {
  background: url('./imgs/frame1.png') no-repeat;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 66px;
  left: 13px;
}

.frame2 {
  background: url('./imgs/frame2.png') no-repeat;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 446px;
  left: 10px;

  .total {
    position: absolute;
    top: 122.5px;
    left: 80px;
  }

  .cost {
    position: absolute;
    top: 122.5px;
    left: 287.5px;
  }

  .mj {
    position: absolute;
    top: 122.5px;
    left: 530px;
  }

  .quaTotal {
    position: absolute;
    top: 210px;
    left: 80px;
  }

  .quaCost {
    position: absolute;
    top: 210px;
    left: 287.5px;
  }

  .quaMj {
    position: absolute;
    top: 210px;
    left: 530px;
  }

  .monTotal {
    position: absolute;
    top: 297.5px;
    left: 80px;
  }

  .monCost {
    position: absolute;
    top: 297.5px;
    left: 287.5px;
  }

  .monMj {
    position: absolute;
    top: 297.5px;
    left: 530px;
  }
}

.frame3 {
  background: url('./imgs/frame3.png') no-repeat;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 810px;
  left: 10px;

  .img1 {
    position: absolute;
    top: 54px;
    left: 7px;
  }

  .img2 {
    position: absolute;
    top: 41px;
    left: 337px;
  }

  .img3 {
    position: absolute;
    top: 105px;
    left: 733px;
  }

  .img4 {
    position: absolute;
    width: 20%;
    top: 205px;
    left: 300px;
  }
}

.frame4 {
  background: url('./imgs/frame4.png') no-repeat;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 810px;
  left: 965px;

  .img1 {
    position: absolute;
    top: 54px;
    left: 7px;
  }

  .img2 {
    position: absolute;
    top: 41px;
    left: 337px;
  }

  .img3 {
    position: absolute;
    top: 105px;
    left: 733px;
  }

  .img4 {
    position: absolute;
    width: 20%;
    top: 205px;
    left: 300px;
  }
}

.frame5 {
  background: url('./imgs/frame5.png') no-repeat;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 446px;
  left: 1237px;

  .total {
    position: absolute;
    top: 122.5px;
    left: 80px;
  }

  .cost {
    position: absolute;
    top: 122.5px;
    left: 287.5px;
  }

  .mj {
    position: absolute;
    top: 122.5px;
    left: 530px;
  }

  .quaTotal {
    position: absolute;
    top: 210px;
    left: 80px;
  }

  .quaCost {
    position: absolute;
    top: 210px;
    left: 287.5px;
  }

  .quaMj {
    position: absolute;
    top: 210px;
    left: 530px;
  }

  .monTotal {
    position: absolute;
    top: 297.5px;
    left: 80px;
  }

  .monCost {
    position: absolute;
    top: 297.5px;
    left: 287.5px;
  }

  .monMj {
    position: absolute;
    top: 297.5px;
    left: 530px;
  }
}

.frame6 {
  background: url('./imgs/frame6.png') no-repeat;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 66px;
  left: 1240px;
}

/* 表格内背景颜色 */
::v-deep .el-table th,
::v-deep .el-table tr,
::v-deep .el-table td {
  background-color: rgba(0, 0, 0, 0.2) !important;
  color: #47ffff;
  opacity: 1;
}
</style>
