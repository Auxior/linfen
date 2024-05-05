import axios from 'axios'

let token: any = localStorage.getItem('token')

// 获取总资产数据
export const getData1 = async () => {
  const data = await axios.get('http://10.0.26.208:5555/store/baseVisual/totalAsset', {
    headers: { Authorization: `Bearer ${token}` },
  })

  return data.data.data
}

// 获取使用分布状况
export const getData2 = async () => {
  const data = await axios.get('http://10.0.26.208:5555/store/baseVisual/useVisualList', {
    headers: { Authorization: `Bearer ${token}` },
  })

  return data.data.data
}

// 获取年度额度概况
export const getData3 = async () => {
  const data = await axios.get('http://10.0.26.208:5555/store/baseVisual/visualMap', {
    headers: { Authorization: `Bearer ${token}` },
  })

  return data.data.data
}

// 获取通用资产总量数据分析
export const getData4 = async () => {
  const data = await axios.get('http://10.0.26.208:5555/store/baseAnalysis/assetCost', {
    headers: { Authorization: `Bearer ${token}` },
  })

  return data.data.data
}

// 获取通用资产价值年度对比
export const getData5 = async () => {
  const data = await axios.get('http://10.0.26.208:5555/store/baseAnalysis/assetYearList', {
    headers: { Authorization: `Bearer ${token}` },
  })

  return data.data.data
}

// 获取资产大类分布
export const getData6 = async () => {
  const data = await axios.get('http://10.0.26.208:5555/store/baseAnalysis/assetCategoryList', {
    headers: { Authorization: `Bearer ${token}` },
  })

  return data.data.data
}

// 获取资产柱状图（增加、类别）
export const getData7 = async () => {
  const data = await axios.get('http://10.0.26.208:5555/store/baseVisual/inVisualTypeList', {
    headers: { Authorization: `Bearer ${token}` },
  })

  return data.data.data
}

// 获取资产柱状图（减少、类别）
export const getData8 = async () => {
  const data = await axios.get('http://10.0.26.208:5555/store/baseVisual/reVisualTypeList', {
    headers: { Authorization: `Bearer ${token}` },
  })

  return data.data.data
}

// 获取资产柱状图（增加、单位）
export const getData9 = async () => {
  const data = await axios.get('http://10.0.26.208:5555/store/baseVisual/inVisualList', {
    headers: { Authorization: `Bearer ${token}` },
  })

  return data.data.data
}

// 获取资产柱状图（减少、单位）
export const getData10 = async () => {
  const data = await axios.get('http://10.0.26.208:5555/store/baseVisual/reVisualList', {
    headers: { Authorization: `Bearer ${token}` },
  })

  return data.data.data
}

// 获取资产数据比较
export const getData11 = async () => {
  const data = await axios.get('http://10.0.26.208:5555/store/baseVisual/unitAssetList', {
    headers: { Authorization: `Bearer ${token}` },
  })

  return data.data.data
}
