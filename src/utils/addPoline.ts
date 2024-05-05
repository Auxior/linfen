/*
 * @Author: your name
 * @Date: 2021-12-03 12:02:31
 * @LastEditTime: 2021-12-06 17:24:06
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3_ts_init\src\utils\addPoline.ts
 */
export const AddPoline = async (data: any) => {
  console.log(data, "data");
  const datas: any = [];
  data.features.forEach((item: any, index: any) => {
    item.geometry.coordinates[0].forEach((mon: any, indqex: any) => {
      datas.push({
        id: "p1" + index + indqex, //折线唯一标识id
        coordinates: mon, //构成折线的坐标点数组
        color: Color.Red, //折线颜色
        style: 5, //折线样式 参考样式枚举：PolylineStyle
        thickness: 30, //折线宽度
        intensity: 0.8, //亮度
        flowRate: 0.5, //流速
        tiling: 0, //材质贴图平铺比例
        shape: 0, //折线类型 0：直线， 1：曲线
        depthTest: false, //是否做深度检测
        coordinateType: 1,
      });
    });
    return data;
  });
  console.log(datas, "polylines");

  await __g.polyline.clear();
  await __g.polyline.add(datas);
  __g.polyline.focus(datas[0].id);

  //     let o = {
  //         id: 'p1',//折线唯一标识id
  //         coordinates: [[493711.15625, 2488656.25, 7.0], [493698.09375, 2490060.25, 8.4], [494434.78125, 2490056, 5.4], [494663.90625, 2491221, 3.8]],//构成折线的坐标点数组
  //         color: Color.Red,//折线颜色
  //         style: 0,//折线样式 参考样式枚举：PolylineStyle
  //         thickness: 150,//折线宽度
  //         intensity: 0.8,//亮度
  //         flowRate: 0.5,//流速
  //         tiling: 0,//材质贴图平铺比例
  //         shape: 0, //折线类型 0：直线， 1：曲线
  //         depthTest: false//是否做深度检测
  //     };
  //     __g.camera.set(495161.78125, 2489277, 1362.090454, -48.678974, -152.06279, 0);
  //     await __g.polyline.delete(o.id);
  //     __g.polyline.add(o);
  //     __g.polyline.focus(o.id);
};
