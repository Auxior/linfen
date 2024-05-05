import axios from 'axios'

let token: any = localStorage.getItem('token')

// 获取资产增量类别占比
export const getData1 = async () => {
  const data = await axios.get('http://10.0.26.208:5555/store/baseAnalysis/svAssetCostList', {
    headers: { Authorization: `Bearer ${token}` },
  })

  return data.data.data
}

// 获取资产减量类别对比
export const getData2 = async () => {
  const data = await axios.get('http://10.0.26.208:5555/store/baseAnalysis/svReAssetCostList', {
    headers: { Authorization: `Bearer ${token}` },
  })

  return data.data.data
}

// 获取资产增量(年季月)统计
export const getData3 = async () => {
  const data = await axios.get('http://10.0.26.208:5555/store/baseAnalysis/baseDataSvAsset', {
    headers: { Authorization: `Bearer ${token}` },
  })

  return data.data.data
}

// 获取资产减量(年季月)统计
export const getData4 = async () => {
  const data = await axios.get('http://10.0.26.208:5555/store/baseAnalysis/baseDataSvReAsset', {
    headers: { Authorization: `Bearer ${token}` },
  })

  return data.data.data
}

// 获取闲置资产类别占比
export const getData5 = async () => {
  const data = await axios.get('http://10.0.26.208:5555/store/baseAnalysis/svUnAssetTypeList', {
    headers: { Authorization: `Bearer ${token}` },
  })

  return data.data.data
}

// 获取闲置资产单位占比
export const getData6 = async () => {
  const data = await axios.get('http://10.0.26.208:5555/store/baseAnalysis/svUnAssetUnitList', {
    headers: { Authorization: `Bearer ${token}` },
  })

  return data.data.data
}

// 获取单位、楼栋、楼层、房间交互
export const getData7 = async () => {
  const data = await axios.get('http://10.0.26.208:5555/base/baseAssetPlace/list', {
    headers: { Authorization: `Bearer ${token}` },
  })

  return data.data
}

// 获取单位楼栋楼层房间
export const getData8 = async () => {
  const data = await axios.get('http://10.0.26.208:5555/base/baseAssetPlace/treeselect', {
    headers: { Authorization: `Bearer ${token}` },
  })

  return data.data
}
