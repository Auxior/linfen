

// const data = [
//     {name:"line1", color:"#fff", coordinates:[[],[]]},
//     {name:"line2",color:"#ccc",coordinates:[[],[]]},
//   ]

export const AddPoline = async (data: any) => {
    //添加相同点位的polyline和光流
    const datas: any = [];
    data.forEach((item: any, index: any) => {
    //   console.log("添加" + item.name + "条线");
      const obj = {
        id: `${item.name}`, //折线唯一标识id
        coordinates: item.coordinates, //构成折线的坐标点数组
        color: item.color,//折线颜色
        style: 5, //折线样式 参考样式枚举：PolylineStyle
        thickness: 3, //折线宽度
        intensity: 2, //亮度
        flowRate: 0.2, //流速
        tiling: 0, //材质贴图平铺比例
        shape: 1, //折线类型 0：直线， 1：曲线
        depthTest: false, //是否做深度检测
        coordinateType: 1,
      }
      datas.push(obj);
  
    });
    await __g.polyline.add(datas);
  
  
  };
  
  export const DelPoline = async (data: any) => {
    //删除相同点位的polyline和光流
    const datas: any = [];
    data.forEach((item: any, index: any) => {
    //   console.log("删除" + item.name + "条线");
      datas.push(`${item.name}`);
    });
    await __g.polyline.delete(datas);
  
  };
  