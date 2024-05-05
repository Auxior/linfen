import axios from "axios";
import { getToken } from "@/http/auth";

// create an axios instance
const request = axios.create({
    timeout: 60000,
});

const TOKEN = getToken(); // 获取token

// 请求拦截器
request.interceptors.request.use(
    (config: any) => {
        if (TOKEN) {
            config.headers["Authorization"] = TOKEN;
        }
        return config;
    },
    (error) => {
        // do something with request error
        console.log(error);
        return Promise.reject(error);
    }
);

// 响应拦截器
request.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        const data = error.response.data;
        const status = error.response.status;

        // 对不同状态码进行管理
        if (status === 401) {
            console.log("登录已过期");
        } else if (status === 500) {
            console.log("服务器错误");
        } else {
            console.log("请求错误状态码:", status);
        }
        return Promise.reject(data.error);
    }
);

export default request;
