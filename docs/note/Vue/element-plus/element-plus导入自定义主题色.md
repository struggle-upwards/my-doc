# element-plus导入自定义主题色



**安装依赖包**

```sh
npm i -D unplugin-element-plus
npm i -D sass
```



**在vite.config.js中配置**

```js
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// elementPlus按需引入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// 引入 unplugin-element-plus
import ElementPlus from 'unplugin-element-plus/vite'


export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver({importStyle:"sass"})]
    }),
    // 使用 unplugin-element-plus
    ElementPlus({
      useSource: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/element/index.scss" as *;`,
      },
    },
  },
})
```

实际添加配置图:

![2af7c4ee6b60139eadacdb197c0cd9f3](https://gitee.com/pan-zhi_jian/cloud-imgs/raw/master/img/2af7c4ee6b60139eadacdb197c0cd9f3.png)