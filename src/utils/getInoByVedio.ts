import { useAirCityStore } from '@/stores/aircity'
import { useToolsStore } from '@/stores/tools'
import { toTree } from '@/components/tools/layerTreeUtils'

const ToolsStore = useToolsStore()
const AirCityStore = useAirCityStore()

/**
 * 图层树
 */
export const getLayerTree = () => {
    return new Promise(async resolve => {
        if (ToolsStore.infotree) {
            return resolve(ToolsStore.infotree)
        }
        const res: any = await __g.infoTree.get()
        await AirCityStore.SetTreeInfo(res.infotree)

        await ToolsStore.Setinfotree(toTree(res.infotree))
        return resolve(ToolsStore.infotree)
    })
}

/**
 * 获取导览列表
 */
export const getAnimationList = () => {
    return new Promise(resolve => {
        if (ToolsStore.animationList.length != 0) {
            return resolve(ToolsStore.animationList)
        }
        // 获取导览列表
        __g.camera.getAnimationList().then(async (animationList: any) => {
            const imgs = await Promise.all(animationList.data.map((item: any) => __g.camera.getAnimationImage(item.name)))
            animationList.data.forEach((item: any, index: number) => {
                item.image = (imgs[index] as any).image
            })

            ToolsStore.setAnimationList(animationList.data)
        })
        resolve(ToolsStore.animationList)
    })
}

/**
 * 获取图层树对象
 * @returns
 */
export async function getLayerTreeObject() {
    return new Promise(async (resolve, reject) => {
        if (Object.keys(AirCityStore.layerTreeObject).length) {
            return resolve(AirCityStore.layerTreeObject)
        }

        const res: any = await __g.infoTree.get()
        // 图层树
        const layerTreeObject: any = {}
        res.infotree.forEach((item: any) => {
            layerTreeObject[item.name] = item.iD
        })
        AirCityStore.SetTreeInfo(res.infotree)
        AirCityStore.SetLayerTreeObject(layerTreeObject)
        return resolve(layerTreeObject)
    })
}
