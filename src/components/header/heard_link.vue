<!--
 * @Author: your name
 * @Date: 2022-02-24 20:45:07
 * @LastEditTime: 2022-03-04 21:47:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWeekly_zhyq\src\components\header\heard_link.vue
-->
<!-- header_link -->
<template>
    <transition appear name="custom-classes-transition" enter-active-class="animate__animated  animate__fadeInDown" leave-active-class="animate__animated  animate__fadeOutDown">
        <div class="menuswrap">
            <div class="logo">
                <span @click="clickTitle"> {{ title }} </span>
            </div>
            <div class="leftmenus">
                <div @click="linkClick(item)" :class="item.path.indexOf(NowActive) !== -1 ? 'link active_link' : 'link'" v-for="item in link_left" :key="item.key">
                    <span>
                        {{ item.name }}
                    </span>
                </div>
            </div>
            <div class="rightmenus">
                <div @click="linkClick(item)" :class="item.path.indexOf(NowActive) !== -1 ? 'link active_link' : 'link'" v-for="item in links_right" :key="item.key">
                    <span>
                        {{ item.name }}
                    </span>
                </div>
            </div>

            <!-- <div class="menus">

        <div
          @click="linkClick(item)"
          :class="
            item.path.indexOf(NowActive) !== -1 ? 'link active_link' : 'link'
          "
          v-for="item in links"
          :key="item.key"
        >
          <span>
            {{ item.name }}
          </span>
        </div>
      </div> -->
        </div>
    </transition>
</template>

<script lang="ts" setup>
// 菜单

import router from '@/router'
import { onMounted, reactive, ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const title = computed(() => (window as any).Common_config.title)

const clickTitle = () => {
    ;(window as any).Common_config.reset()
}
// 菜单列表
const link_left = reactive([
    {
        name: '园区总览',
        path: '/home/First',
        key: 1
    },
    {
        name: '园区态势',
        path: '/home/Second',
        key: 2
    },
    {
        name: '设备设施',
        path: '/home/Third',
        key: 3
    }
])
const links_right = reactive([
    {
        name: '安防管理',
        path: '/home/Fourth',
        key: 4
    },
    {
        name: '能源管理',
        path: '/home/Fifth',
        key: 8
    }
    // {
    //   name: "能效管理(去除)",
    //   path: "/home/Sixth",
    //   key: 5,
    // },
    // {
    //   name: "设施管理(去除)",
    //   path: "/home/Seventh",
    //   key: 6,
    // },
])
// 当前页面
const NowActive = ref()
// 菜单点击事件
const linkClick = (val: { name: string; path: string; key: number }) => {
    NowActive.value = val.path
    // 跳转路由
    router.push(val.path)
}
const route = useRoute()
onMounted(() => {
    NowActive.value = route.path
})
</script>
<style lang="scss" scoped>
.menuswrap {
    @include Width(900);
    height: 100%;
    position: absolute;
    // @include Left(350);
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    // background: url("~@/assets/images/home/top_title.svg") no-repeat center/cover;
    // background-size: 100%;
    // background: rgb(0, 0, 0);
    @include FontSize(18);
    font-weight: 600;

    .logo {
        @include Width(700);
        @include wHeight(90);
        background: url('~@/assets/images/home/top_title@2x.png') no-repeat center/cover;
        // background-size: 100% 100%;
        position: absolute;
        // @include Left(350);
        top: 0;
        left: 0;
        right: 0;
        margin: auto;
        display: flex;
        justify-content: center;
        // align-items: center;
        @include PaddingTop(12);
        @include FontSize(20);
        font-family: Tencent;
    }
    .leftmenus {
        position: absolute;
        // @include Left(350);
        left: 0;
        height: 100%;
        @include Width(300);
        display: flex;
        justify-content: space-around;
        align-items: center;
        z-index: 100;

        .link {
            cursor: pointer;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: rgb(224, 224, 224);
            &:hover {
                color: rgb(255, 255, 255);
            }
            &.active_link {
                color: #ffd564;
                cursor: auto;
            }
            position: relative;
            &::after {
                content: '';
                position: absolute;
                @include Width(10);
                height: 50%;
                @include Right(-20);

                z-index: 10;
                background: url('~@/assets/images/home/分隔线@2x.png') no-repeat center/cover;
                background-size: 100%;
            }
            &:nth-last-of-type(1)::after {
                @include Width(0);
            }
        }
    }
    .rightmenus {
        position: absolute;
        // @include Left(350);
        @include Left(600);

        height: 100%;
        @include Width(200);
        display: flex;
        justify-content: space-around;
        align-items: center;
        z-index: 100;
        .link {
            cursor: pointer;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: rgb(224, 224, 224);
            &:hover {
                color: rgb(255, 255, 255);
            }
            &.active_link {
                color: #ffd564;
                cursor: auto;
            }
            position: relative;
            &::after {
                content: '';
                position: absolute;
                @include Width(10);
                height: 50%;
                @include Right(-20);

                z-index: 10;
                background: url('~@/assets/images/home/分隔线@2x.png') no-repeat center/cover;
                background-size: 100%;
            }
            &:nth-last-of-type(1)::after {
                @include Width(0);
            }
        }
    }
}
.menus {
    position: absolute;
    // @include Left(350);
    left: 0;
    right: 0;
    margin: auto;

    // width: 750px;
    @include Width(750);
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 100;
    .link {
        cursor: pointer;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgb(224, 224, 224);
        &:hover {
            color: rgb(255, 255, 255);
        }
        &.active_link {
            color: aqua;
            cursor: auto;
        }
    }
    #znyj {
        @include Width(80);
        @include wHeight(80);
        top: 10px;
        position: relative;
        background: rgb(46, 99, 150);
        border-radius: 50%;
    }
}
</style>
