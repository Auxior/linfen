/*
 * @Author: your name
 * @Date: 2021-11-27 19:52:04
 * @LastEditTime: 2022-03-05 21:08:57
 * @LastEditors: zhc
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3ts\vue3\src\main.ts
 */
import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
import 'element-plus/dist/index.css'

import 'ant-design-vue/dist/antd.css'
import '@/assets/scss/normalize.scss'
import '@/assets/scss/global.scss'
import '@/assets/scss/rest.scss'
import 'animate.css'
import ElementPlus from 'element-plus'

import Antd from 'ant-design-vue'
import Icon from '@/components/Icon/index.vue'
import '@/assets/iconfont/iconfont.js'
// 标题组件
import Lease_title from '@/components/Lease_title/index.vue'
// 弹窗组件
import Dialog from '@/components/Dialog/index.vue'
import V3count from '@/components/V3count/vue-countTo.vue'
import HighchartsVue from 'highcharts-vue'
import 'echarts-liquidfill'
// import { nextZIndex, PopupManager } from './utils/common'
import { useDialogStore } from '@/stores/dialog'
const app = createApp(App)
  // @ts-ignore
  .use(ElementPlus)
  .use(Antd)
  .use(createPinia())
  .use(router)
  .use(HighchartsVue)
  .component('Icon', Icon)
  .component('Dialog', Dialog)
  .component('Lease_title', Lease_title)
  .component('V3count', V3count)
  .directive('drag', {
    mounted: function (el: any, binding: any, vnode: any) {
      const value = binding.value
      const moveContainer = (value && value.container && document.querySelector(value.container)) || document.querySelector('#map3dContainer') || document.body
      const selector = (value && value.selector && el.querySelector(value.selector)) || el.querySelector('.drag-el') || el
      if (selector !== el) {
        selector.classList.add('ls-draggable')
      }
      selector.onmousedown = function (e: any) {
        el.style.transition = 'none'
        const disx = e.clientX - el.offsetLeft
        const disy = e.clientY - el.offsetTop
        const mw = moveContainer.offsetWidth
        const mh = moveContainer.offsetHeight
        const ew = el.offsetWidth
        const eh = el.offsetHeight
        // 点击后将当前组件置顶
        // if (el.style.zIndex !== '' + (PopupManager.zIndex - 1)) {
        //   el.style.zIndex = nextZIndex()
        // }

        moveContainer.onmousemove = function (e: any) {
          let left = e.clientX - disx
          let top = e.clientY - disy
          if (left < 0) {
            left = 0
          }
          if (top < 0) {
            top = 0
          }
          if (left > mw - ew) {
            left = mw - ew
          }
          if (top > mh - eh) {
            top = mh - eh
          }
          el.style.left = left + 'px'
          el.style.top = top + 'px'
        }
        moveContainer.onmouseup = function (e: any) {
          const left = e.clientX - disx
          const top = e.clientY - disy
          moveContainer.onmousemove = moveContainer.onmouseup = null
          useDialogStore().setXY([left, top])
          el.style.transition = 'all 0.3s'
        }
      }
    },
  })

// 屏蔽错误信息
app.config.errorHandler = () => null
// 屏蔽警告信息
app.config.warnHandler = () => null
app.mount('#app')
