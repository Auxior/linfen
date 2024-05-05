const title = "DTSWeekly-智慧园区运营分析系统";
module.exports = {
    publicPath: "/",

    devServer: {
        // 配置服务器
        open: true,
        // 项目运行时候的端口号
        port: 8080,
        // https: false,
        disableHostCheck: true,

        overlay: {
            warnings: true,
            errors: true,
        },
    },
    css: {
        sourceMap: true, // 开启 CSS source maps
        loaderOptions: {
            sass: {
                additionalData: "@import '@/styles/common.scss';",
            },
        },
    },
    chainWebpack: (config) => {
        config.plugin("html").tap((args) => {
            args[0].title = title;
            return args;
        });
        if (process.env.NODE_ENV === "production") {
            //生产包取消console debugger打印
            config.optimization.minimizer("terser").tap((args) => {
                args[0].terserOptions.compress.drop_console = true;
                args[0].terserOptions.compress.drop_debugger = true;
                args[0].terserOptions.compress.pure_funcs = ["console.log"];
                args[0].terserOptions.output = {
                    comments: false,
                };
                return args;
            });
        }
    },
};
