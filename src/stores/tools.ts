import { defineStore } from 'pinia'

export const useToolsStore = defineStore({
    id: 'Tools',
    state: () => ({
        // 后期
        AnaphaseShow: false,
        // 页面UI展示
        UIShow: true,
        //   图层树展示
        LayerTreeShow: false,
        infotree: null,
        // 导览列表展示
        AnimationShow: false,
        // 天空盒展示
        SkyBoxShow: false,
        // 气象展示
        WeatherShow: false,
        // 建筑拆解展示
        BuildShow: false,
        // 拆楼信息保存
        Buildinfo: null,
        // 导览列表
        animationList: []
    }),

    actions: {
        async SetAnaphaseShow(pyload: any) {
            this.$patch({
                AnaphaseShow: pyload
            })
        },
        async SetUIShow(pyload: any) {
            this.$patch({
                UIShow: pyload
            })
        },
        async SetLayerTreeShow(pyload: any) {
            this.$patch({
                LayerTreeShow: pyload
            })
        },
        /**
         * 设置导览列表
         * @param animationList
         */
        setAnimationList(animationList: any) {
            this.animationList = animationList
        },
        async Setinfotree(pyload: any) {
            this.$patch({
                infotree: pyload
            })
        },
        async SetAnimationShow(pyload: any) {
            this.$patch({
                AnimationShow: pyload
            })
        },
        async SetSkyBoxShow(pyload: any) {
            this.$patch({
                SkyBoxShow: pyload
            })
        },
        async SetWeatherShow(pyload: any) {
            this.$patch({
                WeatherShow: pyload
            })
        },
        async SetBuildShow(pyload: any) {
            this.$patch({
                BuildShow: pyload
            })
        },
        async SetBuildinfo(pyload: any) {
            this.$patch({
                Buildinfo: pyload
            })
        }
    }
})
