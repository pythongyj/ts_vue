import path from "path";

const pathResolve = (pathStr: string) => {
  return path.resolve(__dirname, pathStr);
};

const config = {
  base: "./", //在生产中服务时的基本公共路径。@default '/'
  alias: {
    "/@/": pathResolve("./src"),
  },
  outDir: "dist", //构建输出将放在其中。如果目录存在，它将在构建之前被删除。@default 'dist'
  minify: "esbuild", //压缩
  hostname: "localhost", //ip地址
  port: 8888, //端口号
  open: false, //是否自动在浏览器打开
  https: false, //是否开启 https
  ssr: false, //是否服务端渲染
  optimizeDeps: {
    // 引入第三方的配置
    // include: ["moment", "echarts", "axios", "mockjs"]
    include: ["axios"],
  },
  proxy: {
    //配置代理
    "/api": {
      target: "http://10.0.11.7:8090",
      changeOrigin: true,
      ws: true,
      rewrite: (path: string) => path.replace(/^\/api/, ""),
    },
  },
};

module.exports = config;
