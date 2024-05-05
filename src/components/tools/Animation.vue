<template>
    <div class="Animation">
        <div v-if="loading" class="load animate__animated animate__fadeIn">
            <img :src="require('@/assets/images/loading/loading-small.gif')" alt="" />
            <span> loading... </span>
        </div>

        <div v-else class="container animate__animated animate__fadeInRight">
            <div class="list" v-for="(item, index) in AnimationList" :key="index" @click="playAnimation(item)">
                <div class="imgbase">
                    <img :src="'data:image/png;base64,' + item.image" alt="" />
                </div>
                <div class="title">
                    <span>
                        {{ item.name }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { useToolsStore } from '@/stores/tools'
import { getAnimationList } from '@/utils/getInoByVedio'

const toolsStore = useToolsStore()

// 播放导览
const playAnimation = (val: any) => {
    //参数：导览序号
    __g.camera.playAnimation(val.id)
}
const AnimationList = computed(() => toolsStore.animationList)

const loading = computed(() => AnimationList.value.length == 0)

onMounted(() => {
    getAnimationList()
})

onUnmounted(() => {
    __g.camera.stopAnimation()
})
</script>
<style lang="scss" scoped>
.Animation {
    position: absolute;
    @include Width(120);
    @include hHeight(800);
    @include Top(120);
    @include Right(50);

    margin: auto;
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 10;
    .list {
        @include Width(100);
        @include hHeight(100);
        flex-shrink: 0;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @include BorderRadius(10);
        @include MarginLeft(10);
        @include MarginRight(10);
        @include MarginBottom(20);
        overflow: hidden;
        cursor: pointer;
        position: relative;
        &:hover img {
            transform: scale(1.2);
        }

        .imgbase {
            @include Width(100);
            @include hHeight(100);
            img {
                transition: all 0.5s;
                width: 100%;
            }
        }

        .title {
            @include Width(100);
            text-align: center;
            position: absolute;
            @include Bottom(15);
        }
    }
    .load {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @include Width(100);
        @include hHeight(100);
        @include BorderRadius(10);
        @include Margin(5, -10, 15, 10);
        border: 1px solid #fff;
        background: rgba(0, 0, 0, 0.2);
        z-index: 110;

        img {
            transition: all 0.5s;
            @include Width(50);
            @include hHeight(50);
        }
        span {
            @include MarginTop(10);
        }
    }
}
</style>
