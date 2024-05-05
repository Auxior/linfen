// const data = [
//     {name:"line1", color:"#fff", coordinates:[[],[]]},
//     {name:"line2",color:"#ccc",coordinates:[[],[]]},
//   ]

export const AddPoline = async (data: any) => {
    //添加相同点位的polyline和光流
    const datas: any = []
    const beams: any = []
    data.forEach((item: any, index: any) => {
        const obj = {
            id: `${item.name}`, //折线唯一标识id
            coordinates: item.coordinates, //构成折线的坐标点数组
            color: item.color, //折线颜色
            style: 5, //折线样式 参考样式枚举：PolylineStyle
            thickness: 3, //折线宽度
            intensity: 10, //亮度
            flowRate: 0.2, //流速
            tiling: 1, //材质贴图平铺比例
            shape: 1, //折线类型 0：直线， 1：曲线
            depthTest: false, //是否做深度检测
            coordinateType: 1
        }
        const obj2 = {
            id: `${item.name + index}`, //折线唯一标识id
            coordinates: item.coordinates, //构成折线的坐标点数组
            duration: 3, //光流粒子的生命周期
            thickness: 0.2, //光流线的宽度比例
            interval: 0.5, //光流粒子发射间隔
            velocity: 1.5, //光流粒子的速度
            color: item.color //光流的颜色
        }
        datas.push(obj)
        beams.push(obj2)
    })
    await __g.polyline.add(datas)
    await __g.beam.add(beams)
}

export const DelPoline = async (data: any) => {
    //删除相同点位的polyline和光流
    const datas: any = []
    const beams: any = []
    data.forEach((item: any, index: any) => {
        datas.push(`${item.name}`)
        beams.push(`${item.name + index}`)
    })
    await __g.polyline.delete(datas)
    await __g.beam.delete(beams)
}
