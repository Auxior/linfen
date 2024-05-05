import { useAirCityStore } from '@/stores/aircity'
import { BPFunction } from '@/utils/BPFunction'
import { useChaiLouStore } from '@/stores/chailou'
const OnReady = async () => {
    __g.settings.setCampassVisible(false)
    __g.misc.setMainUIVisibility(false)

    /**
     * 获取图层树
     */
    await getLayerTreeObject()

    /**
     * 下载资源
     */

    await (window as any).Common_config.download()
}
export default OnReady

const AirCityStore = useAirCityStore()
/**
 * 获取图层树对象
 * @returns
 */
async function getLayerTreeObject() {
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
