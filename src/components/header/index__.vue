<!--
 * @Author: your name
 * @Date: 2021-11-18 23:21:02
 * @LastEditTime: 2022-02-22 18:48:30
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \fdaircityinit\src\Views\home\header\index.vue
-->
<template>
  <div class="header">
    <div class="logo">logo</div>
    <div class="title">
      <p>标题</p>
    </div>

    <div class="tools">
      <div class="date-time">
        <div class="date">
          <p>
            {{ date }}
          </p>
        </div>
        <div class="time">
          <p>
            {{ time }}
          </p>
        </div>
      </div>
      <div v-if="WeatherData" class="weather">
        <div class="icon">
          <i
            :style="{ color: '#2360B0' }"
            :class="'qi-' + WeatherData.iconDay"
          ></i>
        </div>
        <div class="case">
          <div class="type">
            <p>
              {{ WeatherData.textDay }}
            </p>
          </div>
          <div class="temp">
            <span>
              {{ WeatherData.tempMin + "°" }}
            </span>
            ~
            <span>
              {{ WeatherData.tempMax + "°" }}
            </span>
          </div>
        </div>
      </div>
      <div v-if="WeatherPm2P5" class="pm25">
        <div class="icon_pmwp5">
          <img src="../../../assets/images/home/icon_pm2.5@2x.png" alt="" />
        </div>
        <div class="case">
          <div class="type">
            <p>
              {{ WeatherPm2P5.now.category }}
            </p>
          </div>
          <div class="case_data">
            <p>
              {{ WeatherPm2P5.now.pm2p5 }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from "vue-demi";
import Dayjs from "dayjs";
import { getWeatherCityId, getWeather, getWeatherPm2P5 } from "@/api/connect";
// 获取当前时间
const date: any = ref("");
const time: any = ref("");
const get_Date_Time = () => {
  let date_time = Dayjs().format("YYYY-MM-DD/HH:mm:ss").split("/");
  date.value = date_time[0];
  time.value = date_time[1];
};
let WeatherData = ref();
let WeatherPm2P5 = ref();

const getWeatherData = async () => {
  // 开发环境时把天气地区设置成深圳
  let name = process.env.NODE_ENV === "development" ? "深圳" : "深圳";
  /**
   * @description: 获取城市ID
   * @param {any} 城市名
   * @return {any} 城市ID
   */
  const CityId: any = await getWeatherCityId(name);
  /**
   * @description: 获取城市一天的天气信息
   * @param {any} 城市ID
   * @return {any}城市一天的天气信息
   */
  const CityWeather: any = await getWeather(CityId.location[0].id);
  // CityWeather.now.icon === "154" ? (CityWeather.now.icon = "104") : null;
  WeatherData.value = CityWeather.daily[0];
  console.log(WeatherData, "WeatherData");

  /**
   * @description: 获取pm2.5数据
   * @param {any}  城市id
   * @return {any} pm2.5数据
   */
  const CityWeather_Pm2P5 = await getWeatherPm2P5(CityId.location[0].id);
  WeatherPm2P5.value = CityWeather_Pm2P5;
};

let timer = ref();
onMounted(() => {
  timer.value = setInterval(() => {
    get_Date_Time();
  }, 1000);
  getWeatherData();
});
onUnmounted(() => {
  clearInterval(timer.value);
});
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 70px;
  // background: url("../../../assets/images/home/top_bg@2x.png") no-repeat
  //   center/cover;
  position: absolute;
  background: rgba(87, 120, 170, 0.329);
  z-index: 100;
  .logo {
    width: 261px;
    height: 65px;
    position: absolute;
    background: rgba(255, 255, 255, 0.555);
    left: 20px;
    top: 0px;
    bottom: 0;
    margin: auto;
    img {
      width: 100%;
    }
  }
  .title {
    width: 800px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    > p {
      font-size: 38px;
      font-family: TencentSansW7;
      color: #ffffff;
      letter-spacing: 3px;
      text-shadow: 0px 2px 4px rgba(32, 43, 91, 0.6);
    }
  }
  .tools {
    width: 500px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    > div {
      height: 100%;
      float: left;
    }
    .date-time {
      width: 27%;
      position: relative;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: center;
      &::after {
        content: "";
        position: absolute;
        width: 1px;
        height: 36px;
        background: #3160bd;
        opacity: 0.64;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
      }
      .date {
        > p {
          font-size: 16px;

          font-family: OPPOSans-M, OPPOSans;
          font-weight: normal;
          color: #ffffffd5;
          letter-spacing: 1px;
        }
      }
      .time {
        > p {
          font-size: 20px;
          font-family: OPPOSans-H, OPPOSans;
          font-weight: normal;
          color: #ffffff;
          letter-spacing: 1px;
        }
      }
    }
    .weather {
      position: relative;
      width: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      z-index: 1000;

      &::after {
        content: "";
        position: absolute;
        width: 1px;
        height: 36px;
        background: #3160bd;
        opacity: 0.64;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
      }
      .icon {
        width: 50px;
        > i {
          font-size: 36px;
        }
      }
      .case {
        width: 40%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        .type {
          color: #ffffffd5;
        }
        .temp {
          font-size: 20px;
          font-weight: normal;
          color: #ffffff;
          letter-spacing: 1px;
          white-space: nowrap;
          font-weight: 600;
        }
      }
    }
    .pm25 {
      width: 30%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      .icon_pmwp5 {
        width: 50px;
        > img {
          width: 40px;
        }
      }
      .case {
        width: 40%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        .type {
          color: #ffffffd5;
        }
        .case_data {
          font-size: 20px;
          font-weight: normal;
          color: #ffffff;
          line-height: 31px;
          letter-spacing: 1px;
          font-weight: 600;
        }
      }
    }
  }
}
</style>
