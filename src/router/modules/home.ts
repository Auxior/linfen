/*
 * @Author: your name
 * @Date: 2022-02-22 18:36:34
 * @LastEditTime: 2022-02-28 16:39:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWeekly_zhyq\src\router\modules\home.ts
 */
import { RouteRecordRaw } from "vue-router";

export const HomeItem: Array<RouteRecordRaw> = [
  {
    path: "First",
    name: "First",
    component: () => import("@/Views/home/First/index.vue"),
    meta: {
      index: 1,
    },
  },
  {
    path: "Second",
    name: "Second",
    component: () => import("@/Views/home/Second/index.vue"),
    meta: {
      index: 2,
    },
  },
  {
    path: "Third",
    name: "Third",
    component: () => import("@/Views/home/Third/index.vue"),
    meta: {
      index: 3,
    },
    redirect: "/home/Third/ThirdTwo",
    children: [
      {
        path: "ThirdOne",
        name: "ThirdOne",
        component: () => import("@/Views/home/Third/ThirdOne/index.vue"),
        meta: {
          index: 31,
        },
      },
      {
        path: "ThirdTwo",
        name: "ThirdTwo",
        component: () => import("@/Views/home/Third/ThirdTwo/index.vue"),
        meta: {
          index: 32,
        },
      },
    ],
  },
  {
    path: "Fourth",
    name: "Fourth",
    component: () => import("@/Views/home/Fourth/index.vue"),
    meta: {
      index: 4,
    },
  },
  {
    path: "Fifth",
    name: "Fifth",
    component: () => import("@/Views/home/Fifth/index.vue"),
    meta: {
      index: 5,
    },
  },
  {
    path: "Sixth",
    name: "Sixth",
    component: () => import("@/Views/home/Sixth/index.vue"),
    meta: {
      index: 6,
    },
  },
  {
    path: "Seventh",
    name: "Seventh",
    component: () => import("@/Views/home/Seventh/index.vue"),
    meta: {
      index: 7,
    },
  },
  {
    path: "Eighth",
    name: "Eighth",
    component: () => import("@/Views/home/Eighth/index.vue"),
    meta: {
      index: 8,
    },
  },
];
