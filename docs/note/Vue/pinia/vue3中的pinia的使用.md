# Vue3中pinia的使用

> **pinia是一款vue插件,作用是对vue中的数据做持久化存储,并且允许你跨组件或页面共享状态**



**下载pinia**

```sh
npm install -d pinia
```



**在mian.js中添加:**

```js
import { createPinia } from 'pinia';
const pinia = createPinia()
app.use(pinia)
```



**常用API**

```vue
createPinia
defineStore
storeToRefs
```



**stores/counter.js**

```js
import axios from "axios"
import { defineStore } from "pinia"
import { computed, ref } from "vue"

export const useCounterStore = defineStore("countId", () => {
    // state
    const count = ref(0)
    const list = ref([])
    const API_URL = "https://applet-base-api-t.itheima.net/api/cart"

    // getter
    const doubleCount = computed(() => count.value * 2)

    // action
    const increment = () => {
        count.value++
    }
    const getList = async () => {
        const res = await axios.get(API_URL)
        list.value = res.data.list
    }

    return {
        count,
        list,
        doubleCount,
        increment,
        getList
    }
})
```



**App.vue**

```vue
<script setup>
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const store = useCounterStore()
const { count, doubleCount, list } = storeToRefs(store)
const { increment, getList } = store

onMounted(()=>{
    getList()
})


</script>

<template>
    <div>count的值为:&emsp;&emsp;{{ count }}</div>
    <div>count * 2的值为:&emsp;&emsp;{{ doubleCount }}</div>
    <button @click="increment">按钮(点击后count++)</button>
    <ul>
        <li v-for="good in list">goods_id:{{ good.goods_id }}&emsp;goods_name:{{ good.goods_name }}</li>
    </ul>
</template>

<style scoped></style>

```

