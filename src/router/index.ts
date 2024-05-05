import {
    createRouter,
    RouteRecordRaw,
    createWebHashHistory,
} from "vue-router";
import { HomeItem } from "./modules/home";
import { useAnimateStore } from "@/stores/animate";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: "/home",
        name: "home",
        component: () => import("@/Views/home/index.vue"),
        children: HomeItem,
        redirect: "/home/First",
    },
    {
        // 匹配所有路径  vue2使用*   vue3使用/:pathMatch(.*)*或/:pathMatch(.*)或/:catchAll(.*)
        path: "/:pathMatch(.*)",

        component: () => import("@/Views/404/index.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
});
// 使用路由拦截进行动画切换
let timer: any = null;
let timermon: any = null;
router.beforeEach((to, from, next) => {
    const animatestore = useAnimateStore && useAnimateStore();
    animatestore && animatestore.SetAnimate(false);
    timer && clearTimeout(timer);
    timermon && clearTimeout(timermon);

    timer = setTimeout(() => {
        next();
        timermon = setTimeout(() => {
            animatestore && animatestore.SetAnimate(true);
        }, 500);
    }, 200);
});

export default router;
