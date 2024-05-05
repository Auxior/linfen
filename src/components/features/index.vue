<template>
    <div class="pipe_btn">
        <div v-for="(item, i) in btn_data" :key="item.id">
            <div @click="click(item, i)" :class="item.isActive === true ? 'active' : ''" class="btn">
                <div class="text">{{ item.name }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
const props = defineProps({
    btn_data: {
        type: Array,
        required: true
    }
})
let activeIndex = ref(0)

const emit = defineEmits(['change'])
const click = (item, i) => {
    activeIndex.value = i
    debugger
    item.isActive = !item.isActive
    emit('change', item)
}
</script>

<style lang="scss" scoped>
.pipe_btn {
    margin-top: 100px;
    z-index: 99;
    display: flex;
    position: fixed;
    transform: translateX(-50%);
    margin-left: 15px;
    left: 50%;
    .active {
        background: url('./Btn_click@2x.png') no-repeat !important;
        background-size: 100% 80% !important;
    }

    .btn {
        margin-right: 30px;
        @include Width(140);
        @include hHeight(70);
        background: url('./Btn_NORMAL@2x.png') no-repeat;
        background-size: 100% 80%;
        cursor: pointer;
        .text {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            @include FontSize(16);
            @include PaddingBottom(17);
        }
    }
}
</style>
