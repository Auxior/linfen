import { ElMessage } from 'element-plus'
// export const playInitAnimation = async (type = AnimationType.SUN) => {
//     const nameArr = ['导览5', '导览12', '导览6', '导览20', '导览21']
//     if (!AnimationList.length) {
//         const res: any = await __g.camera.getAnimationList()
//         AnimationList = res.data
//         const obj = AnimationList.filter((item: any) => item.name == nameArr[type])
//         await __g.camera.playAnimation(obj[0].id)
//     } else {
//         const obj = AnimationList.filter((item: any) => item.name == nameArr[type])
//         await __g.camera.playAnimation(obj[0].id)
//     }
// }

/**
 * 导览名字枚举
 */
export enum AnimationType {
  /**
   * 初始化
   */
  INIT = 3,
  /**
   * 日景
   */
  SUN = 0,
  /**
   * 黄昏
   */
  AFTERNOON = 1,
  /**
   * 夜晚
   */
  MIDNIGHT = 2,
  /**
   * 默认视角
   */
  DEFAULT = 3,
  /**
   * 设备设施
   */
  DEVICE = 4,
}

export const playInitAnimation = async (name: string) => {
  // const nameArr = ['导览5', '导览12', '导览6', '导览20', '导览21']

  // if (Object.keys((window as any).Common_config.animationList).length === 0) {
  //     await getAnimationListNew()
  // }

  const animationName = (window as any).Common_config.mapping[name]
  if ((window as any).Common_config.animationList[animationName] !== undefined) {
    await __g.camera.playAnimation((window as any).Common_config.animationList[animationName])
  } else {
    // alert("error: 导览列表中找不到当前功能对应导览，请检查mapping导览配置")
    ElMessage.error('error: 导览列表中找不到当前功能对应导览，请检查mapping导览配置')
  }
}

// export const getAnimationListNew = async (type: string) => {
//   const nameArr = ['初始化']
//   const res: any = await __g.camera.getAnimationList()
//   const obj = res.data.filter((item: any) => item.name == nameArr[type])
//   await __g.camera.playAnimation(obj[0]?.id)

//   res.data.forEach((item: any) => {
//     if (!(window as any).Common_config.animationList.hasOwnProperty(item.name)) {
//       ;(window as any).Common_config.animationList[item.name] = item.id
//     }
//   })
// }
