var Common_config = {
    title: '智慧园区运营分析系统',
    iid: '',
    reset() {
        __g.reset(7)
    },
    async download() {
        const res = await fetch('/aircity/assetsPath.json').then(res => res.json())
        const arr = []
        const markerPath = res.markerPath
        if (markerPath) {
            const arrs = res.marker3d.map(p => markerPath + p.name + '.' + p.name)
            arr.push(...arrs)
        }

        const materialPath = res.materialPath
        if (materialPath) {
            const arrs = res.other.map(p => p.path + '.' + p.path.split('/')[p.path.split('/').length - 1])
            arr.push(...arrs)
        }

        __g.misc.downloadPakFiles(arr)
    },
    animationList: {
        //name: id
    },
    mapping: {
        初始化: '导览20',
        日景: '导览5',
        黄昏: '导览12',
        夜晚: '导览6',
        设备设施: '导览4',
    }
}
