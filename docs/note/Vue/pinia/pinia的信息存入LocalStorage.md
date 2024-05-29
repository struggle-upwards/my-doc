# pinia的信息存入LocalStorage





### 安装pinia-plugin-persistedstate



```sh
npm i pinia-plugin-persistedstate
```





### 将插件添加到 pinia 实例上



```sh
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
```



### 创建 Store 时，将 `persist` 选项设置为 `true`



```js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore(
  'main',
  () => {
    const someState = ref('你好 pinia')
    return { someState }
  },
  {
    persist: true,
  },
)
```

