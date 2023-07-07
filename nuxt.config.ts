// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // 用来定义整个项目的配置，即配置以前vue项目的index.html中的<head></head>部分,鼠标悬浮即可看到配置详情，所有的属性都会列出来
  app: {
    head: {
      title: "hwx nuxt app",
    },
    pageTransition: {
      name: "page",
      mode: "in-out",
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          additionalData: '@use "@/assets/global.less" as *;',
        },
      },
    },
  },
  runtimeConfig: {
    apiSecret: "123",
    public: {
      apiBase: "/api",
    },
  },
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs",
  },
  modules: [
    "@nuxthq/ui",
    "@pinia-plugin-persistedstate/nuxt",
    [
      "@pinia/nuxt",
      {
        autoImports: [
          // 自动引入 `defineStore()`
          "defineStore",
          // 自动引入 `defineStore()` 并重命名为 `definePiniaStore()`
          ["defineStore", "definePiniaStore"],
        ],
      },
    ],
  ],
});
