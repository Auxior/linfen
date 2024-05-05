/*
 * @Author: your name
 * @Date: 2021-08-02 01:30:11
 * @LastEditTime: 2022-03-05 20:15:44
 * @LastEditors: zhc
 * @Description: In User Settings Edit
 * @FilePath: \aircityinit\src\tools\Event.js
 */
import { useChaiLouStore } from '@/stores/chailou'
import { useDialogStore } from '@/stores/dialog'
import { useAirCityStore } from '@/stores/aircity'
import { LouyuList } from '@/utils/second/LouyuList'
import { useRoute } from 'vue-router'
import { message } from 'ant-design-vue'
import { ref, onMounted } from 'vue'

export const dialogVisible = ref(false)

function OSnow() {
  const agent = navigator.userAgent.toLowerCase()
  const isMac = /macintosh|mac os x/i.test(navigator.userAgent)
  if (agent.indexOf('win32') >= 0 || agent.indexOf('wow32') >= 0) {
    return 'pc'
  }
  if (agent.indexOf('win64') >= 0 || agent.indexOf('wow64') >= 0) {
    return 'pc'
  }
  if (isMac) {
    return 'mac'
  }
}
let ele: any
let lastEvent: MouseEvent
setTimeout(() => {
  ele = document.querySelector('#player video')
  ele.onclick = (e: any) => {
    console.log(e)
    lastEvent = e
  }
}, 1000)
const OnEvent = async (e: { eventtype: string; Type: string; Id: string; UserData: string; GroupID: string; MouseClickPoint: Array<number>; PropertyName: string; ObjectID: string }) => {
  const AirCityStore = useAirCityStore()
  AirCityStore.SetEventMessage(e)
  // const ChailouStore: any = useChaiLouStore()
  // const Foolr = ChailouStore.$state.foolr
  // const IsOpen = ChailouStore.$state.isOpen
  console.log(e, '-----------e')

  // 最新
  // 项目最新
  dialogVisible.value = false
  if (e.GroupID === 'czjMarker3D') {
    dialogVisible.value = true
  }

  // 判断是否为左键点击的交互
  if (e.eventtype === 'LeftMouseButtonClick') {
    let LouInfo: any = null
    LouInfo = LouyuList.filter((item: any) => {
      return e.ObjectID == item.ObjectID
    })
    const str = window.location.href
    const strs = str.split('/')
    console.log(LouInfo.length, strs, str)

    // 点击了楼
    if (LouInfo.length > 0 && strs.pop() == 'Second') {
      console.log('楼宇')

      __g.tileLayer.stopHighlightActor()
      __g.tileLayer.highlightActor('707AFF454B73F319B119548158B7BCC9', LouInfo[0].ObjectID)

      const dialogStore: any = useDialogStore()

      dialogStore.setDialogVisible(true)
      // dialogStore.setXY([position[0] + 269, position[1] + 194]);
      dialogStore.setXY([lastEvent?.clientX, lastEvent?.clientY])
      dialogStore.setDialogInfo(LouInfo[0])
    }
    // await waitFor(100)
    if (e.GroupID) {
      // 点击了摄像头
      if (e.GroupID.indexOf('#人脸') > -1) {
        const dialogStore: any = useDialogStore()
        dialogStore.setXY([lastEvent?.clientX, lastEvent?.clientY])
        dialogStore.setDialogVisible(true)
        dialogStore.setTitle('人脸识别系统')
        console.log('人脸')
      } else if (e.GroupID.indexOf('#设备') > -1) {
        console.log('设备')

        const dialogStore: any = useDialogStore()

        dialogStore.setXY([lastEvent?.clientX, lastEvent?.clientY])
        dialogStore.setDialogVisible(true)
        dialogStore.setTitle('设备信息')
        dialogStore.setContent(JSON.parse(e.UserData))
      } else if (e.GroupID.includes('#停车场')) {
        const dialogStore = useDialogStore()

        const entity = await __g.polygon3d.get(e.Id)

        if (entity.data[0].color[0] === 1) {
          dialogStore.setTitle('停车管理')

          dialogStore.setXY([lastEvent?.clientX, lastEvent?.clientY])
          dialogStore.setDialogVisible(true)
        } else {
          message.error('此车位没有占用车辆')
          dialogStore.setDialogVisible(false)
        }
      }
    }
  }

  if (e.eventtype === 'CameraTourFinished') {
    console.log('导览播放结束')
  }
}

const waitFor = (timeout: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, timeout)
  })
}
export default OnEvent
