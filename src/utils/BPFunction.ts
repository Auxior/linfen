/*
 * @Author: your name
 * @Date: 2022-03-01 13:52:12
 * @LastEditTime: 2022-03-01 16:07:00
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWeekly_zhyq\src\utils\BPFunction.ts
 */
export const BPFunction = (val: any) => {
  const f = new BPFunctionData();
  f.objectName = "BP_SkyMaterial_4";
  f.functionName = "SetSkyMat";
  f.paramType = BPFuncParamType.String;
  f.paramValue = "mat" + val;
  __g.misc.callBPFunction(f);
};
