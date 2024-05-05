<!-- 图层树组件 -->
<template>
    <div @click.stop="clearstyle" id="layertree" v-drag>
        <div class="heard">
            <div class="heard-title">图层信息</div>
            <div @click="shuaxin" class="shuaixn">
                <el-icon><Refresh /></el-icon>
            </div>
            <div @click="closeBox" class="close">
                <el-icon><Close /></el-icon>
            </div>
            <div @click="zoominout" class="zoominout">
                <el-icon v-if="!zoom"><Operation /></el-icon>
                <el-icon v-if="zoom"><Minus /></el-icon>
            </div>
        </div>
        <div v-if="zoom" class="search">
            <el-input placeholder="输入关键字进行过滤" v-model="filterText" class="inputbox"> </el-input>
            <i class="iconfont iconsousuo"></i>
        </div>

        <el-tree v-if="zoom" class="tree" :data="infoTree" show-checkbox node-key="id" ref="Tree" :props="defaultProps" :check-strictly="false" :filter-node-method="filterNode" @node-click="handleNodeClick" @check="check" :default-checked-keys="defaultCheck" :default-expanded-keys="defaultExpanded">
            <template #default="node">
                <span class="node-label customTreeNode">
                    <span :title="node.data.label" class="text" @dblclick="goCenter(node.data)">
                        {{ node.data.label }}
                        <el-icon v-if="showloding"><Loading /></el-icon>
                    </span>
                </span>
            </template>
        </el-tree>
        <div @click.stop v-if="zoom" class="set-style">
            <el-color-picker v-if="curClicked" v-model="color" color-format="rgb" @change="colorChange"></el-color-picker>
            <el-select :popper-append-to-body="false" v-if="curClicked" v-model="styleValue" @change="styleChange" placeholder="请选择">
                <el-option v-for="item in styleList" :key="item.value" :label="item.label" :value="item.value"> </el-option>
            </el-select>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useAirCityStore } from '@/stores/aircity'
import { useToolsStore } from '@/stores/tools'
import { onMounted, onUnmounted, ref, watch, computed } from 'vue'
import { Refresh, Close, Minus, Operation, Loading } from '@element-plus/icons-vue'
import { getLayerTree } from '@/utils/getInoByVedio'
import { controlInfoTree, toTree } from '@/components/tools/layerTreeUtils'
const AirCityStore = useAirCityStore()
const ToolsStore = useToolsStore()
const filterText = ref('')
const curClicked = ref()
const styleValue = ref(0)
const showloding = ref(false)
const styleList = ref([
    {
        value: 0,
        label: '默认'
    },
    {
        value: 1,
        label: 'X光'
    },
    {
        value: 2,
        label: '纯色'
    },
    {
        value: 3,
        label: '水晶体'
    },
    {
        value: 4,
        label: '暗黑'
    },
    {
        value: 5,
        label: '科幻'
    },
    {
        value: 6,
        label: '扩散'
    }
])
const defaultProps = ref({
    children: 'children',
    label: 'label'
})
const color = ref('rgb(255, 255, 255)')
const infoTree: any = computed(() => ToolsStore.infotree)
const defaultInfoTree: any = computed(() => AirCityStore.TreeInfo)

const defaultCheck = computed(() => {
    return (
        defaultInfoTree.value &&
        defaultInfoTree.value.map((item: any) => {
            if (item.visiblity && item.type !== 'EPT_Folder') {
                return item.iD
            }
        })
    )
})
const defaultExpanded = computed(() => {
    let arr = ['世界']
    return defaultInfoTree.value
        .map((item: any) => {
            if (arr.indexOf(item.name) > -1) {
                return item.iD
            }
        })
        .filter((i: any) => i)
})
const shuaxin = async () => {
    showloding.value = true
    const res = await __g.infoTree.get()
    await AirCityStore.SetTreeInfo(res.infotree)
    await ToolsStore.Setinfotree(toTree(res.infotree))
    showloding.value = false
}
const zoom = ref(true)
const zoominout = () => {
    zoom.value = !zoom.value
}
const clearstyle = () => {
    curClicked.value = null
}

// 方法
const closeBox = () => {
    ToolsStore.SetLayerTreeShow(false)
}

const filterNode = (value: any, data: any) => {
    if (!value) return true
    return data.label.indexOf(value) !== -1
}
const Tree = ref()
// 过滤
watch(filterText, () => {
    Tree.value.filter(filterText.value)
})

const check = async (a: any, b: any, c: any, d: any) => {
    const AllIds = defaultInfoTree.value.map((item: any) => item.type !== 'EPT_Folder' && item.iD).filter((i: any) => i)
    const NeedShow: any = []
    const NeedHide: any = []
    AllIds.forEach((item: any) => {
        if (b.checkedKeys.includes(item)) {
            NeedShow.push(item)
        } else {
            NeedHide.push(item)
        }
    })
    __g.infoTree.show(NeedShow)
    __g.infoTree.hide(NeedHide)
    filterText.value = ''
}
const goCenter = (data: any) => {
    if (!data.children) {
        __g.tileLayer.focus(data.id)
    }
}

const handleNodeClick = (data: any) => {
    if (!data.children) {
        let cur = defaultInfoTree.value.find((item: any) => {
            return item.iD === data.id
        })
        curClicked.value = data
        color.value = cur.color ? cur.color.replace('RGB', 'rgb') : 'rgb(255,255,255)'
        styleValue.value = cur.style
    } else {
        curClicked.value = null
    }
}
const styleChange = (value: any) => {
    controlInfoTree(curClicked.value.id, 'style', { style: value })
}
const colorChange = (value: any) => {
    controlInfoTree(curClicked.value.id, 'style', {
        color: value.replace('rgb', 'RGB')
    })
}
onMounted(() => {
    getLayerTree()
})
onUnmounted(() => {
    shuaxin()
})
</script>
<style lang="scss" scoped>
#layertree {
    @include Width(322);
    @include BorderRadius(8);
    @include FontSize(14);
    background: linear-gradient(360deg, rgba(14, 26, 42, 0.4) 0%, rgba(14, 26, 42, 0.8) 100%);
    z-index: 10;
    border: 1px solid rgba(122, 250, 254, 0.562);
    position: absolute;
    @include Top(174);
    @include Left(62);
    transform: translateX(0) !important;
    .heard {
        position: relative;
        width: 100%;

        @include hHeight(40);
        border-bottom: 1px solid rgba(122, 250, 254, 0.603);
        .heard-title {
            position: absolute;
            @include Top(10);
            @include Left(12);
            @include FontSize(14);

            font-family: MicrosoftYaHei;
            color: #7afafe;
        }
        .close {
            position: absolute;
            @include Top(10);
            @include Right(12);
            color: #fff;
            @include FontSize(16);

            cursor: pointer;
            &:hover {
                color: #7afafe;
            }
        }
        .zoominout {
            position: absolute;
            @include Top(10);
            @include Right(35);
            color: #fff;
            @include FontSize(16);

            cursor: pointer;
            &:hover {
                color: #7afafe;
            }
        }
        .shuaixn {
            position: absolute;
            @include Top(10);
            @include Left(82);
            color: #fff;
            @include FontSize(16);

            cursor: pointer;
            &:hover {
                color: #7afafe;
            }
        }
    }
    .search {
        position: relative;
        @include Top(10);

        left: 0px;
        right: 0px;
        @include Width(300);
        margin: auto;
        background: rgba(14, 26, 42, 0.2);
        @include BorderRadius(4);

        @include hHeight(32);

        border: 1px solid rgba(255, 255, 255, 0.5);
        .inputbox {
            @include Width(260);

            position: absolute;
            top: 0px;
            left: 0px;
        }
        i {
            position: absolute;
            @include Top(8);

            @include Right(12);

            color: #88929d;
        }
    }
    .set-style {
        width: 100%;
        position: relative;
        @include hHeight(35);
        @include Bottom(5);

        // @include MarginTop(01);
        display: flex;
        justify-content: space-around;
        align-items: center;
        .el-select {
            @include Width(240);
            @include hHeight(35);

            border: 1px solid #7afafe;
        }
        .el-color-picker {
            @include Width(35);
            @include hHeight(35);
        }
    }

    .el-tree {
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
    }

    .tree {
        @include Width(300);

        @include hHeight(480);

        margin: auto;
        @include MarginBottom(90);

        overflow: auto;
        background-color: transparent;
        position: relative;
        @include Top(20);

        left: 0px;
        right: 0px;
    }
    ::v-deep(.el-select__popper.el-popper[role='tooltip']) {
        background: rgb(28, 39, 52);
        border: 1px solid rgb(9, 34, 65);
        color: #fff;
    }
    ::v-deep(.el-popper.is-light .el-popper__arrow::before) {
        background: rgb(28, 39, 52);
    }
}
::v-deep(.el-input__inner) {
    background: transparent;
    border: none;
    @include hHeight(32);

    color: white;
}
::v-deep(.el-tree-node .el-tree-node__content .node-label) {
    height: 17px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    @include Width(230);

    overflow: hidden;
    word-break: keep-all;
    white-space: nowrap;
    text-overflow: ellipsis;
}
::v-deep(.el-tree-node__content) {
    background: rgba(0, 0, 0, 0.247);
}
::v-deep(.el-tree--highlight-current .el-tree-node.is-current > .el-tree-node__content) {
    background: rgba(255, 255, 255, 0.2);
}
::v-deep(.el-tree-node:focus > .el-tree-node__content) {
    background: rgba(0, 0, 0, 0.568);
}
::v-deep(.el-checkbox__input .el-checkbox__inner) {
    background: url('./img/复选框-未选中.png') no-repeat center/cover;
    background-size: 100%;
    border: none;
}
::v-deep(.is-checked .is-checked .is-checked .el-checkbox__inner) {
    // display: none;
    background: url('./img/勾选.png') no-repeat center/cover;
    background-size: 100%;

    border: none;
}
::v-deep(.is-checked .is-checked .is-checked .el-checkbox__inner::after) {
    // display: none;
    // background: url("./勾选.png") no-repeat center/cover;
    border: none;
}
::v-deep(.el-select-dropdown__item) {
    color: #fff;
}
::v-deep(.el-select-dropdown) {
    background: rgb(28, 39, 52);
    border: 1px solid rgb(28, 39, 52);
}

::v-deep(.el-select-dropdown__item.hover) {
    background-color: rgba(10, 21, 46, 1);
}

::v-deep(.el-select-dropdown__item:hover) {
    background-color: rgba(10, 21, 46, 1);
}
</style>
