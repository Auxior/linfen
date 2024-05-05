import _ from "lodash";
const ids: string[] = [];
class Polygon3d {
  id: string;
  coordinates: number[][];
  color: number[];
  style: any;
  height: number; //3D多边形的高度
  intensity: number; //亮度
  groupId: string;
  constructor() {
    this.id = Date.now() + "_" + _.random(true);
    this.coordinates = [];
    this.color = [0, 1, 0, 1];
    this.style = Polygon3DStyle.SingleColorWithLight;
    this.height = 1.5;
    this.intensity = 4.0;
    this.groupId = "#停车场";
  }
  static builder() {
    return new Polygon3d();
  }
  setCoordinates(coordinates: number[][]) {
    this.coordinates = coordinates;
    return this;
  }
  setColor(color: number[]) {
    this.color = color;
    return this;
  }
  setHeight(height: number) {
    this.height = height;
    return this;
  }
  setIntensity(intensity: number) {
    this.intensity = intensity;
    return this;
  }
  add() {
    ids.push(this.id);
    __g.polygon3d.add(this);
    return this;
  }
  setState(state: number) {
    if (state) {
      this.setColor([1, 0, 0, 1]);
    } else {
      this.setColor([0, 1, 0, 1]);
    }
    return this;
  }
  update() {
    if (ids.includes(this.id)) {
      __g.polygon3d.update(this);
    }
  }
}

const generateCoordinates = (arr: number[], vertical = true) => {
  const x1 = arr;

  if (vertical) {
    const x2 = [x1[0] - 1.168, x1[1] - 2.03, x1[2]];
    const y1 = [x1[0] - 4.156006, x1[1] + 2.440918, x1[2]];
    const y2 = [x2[0] - 4.156006, x2[1] + 2.440918, x2[2]];
    return [x1, y1, y2, x2, x1];
  } else {
    const x2 = [x1[0] - 2.440918, x1[1] - 4.156006, x1[2]];
    const y1 = [x1[0] - 2.03, x1[1] + 1.168, x1[2]];
    const y2 = [x2[0] - 2.03, x2[1] + 1.168, x2[2]];
    return [x1, y1, y2, x2, x1];
  }
};

function getPlate(total = 5) {
  const stateList =
    "京津冀晋辽吉沪苏浙皖闽琼赣鲁豫鄂湘粤渝川贵云陕甘蒙黑桂藏青宁新";
  const charList = "ABCDEFGHJKLMNQPRSTUVWXYZ";
  const numList = "1234567890";
  const halfList = [charList, numList];
  const state = dicingChar(stateList);
  const city = dicingChar(charList);
  let sequence = "";
  while (total--) {
    sequence += dicingChar(halfList[Math.round(Math.random())]);
  }
  console.log(`${state}${city} ${sequence}`);
  return `${state}${city} ${sequence}`;
}

function dicingChar(series: string) {
  return series[~~(Math.random() * series.length)];
}
const deleteAll = () => {
  __g.polygon3d.delete(ids);
  ids.length = 0;
};
export { Polygon3d, ids, generateCoordinates, getPlate, deleteAll };
