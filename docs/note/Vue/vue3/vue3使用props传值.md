1. 在`vue3`的`setup`中，我们使用`defineProps`来定义父组件传递的`props`。
2. 在setup语法糖中用`defineProps`（`defineProps`是编译器宏，无需引入）。



父组件:ArticalList.vue

```vue
<template>
    <ul>
        <li v-for="article in articles" :key="article.Id">
            <ArticalItem :title="article.Title" :introduction="article.Introduction"></ArticalItem>
        </li>
    </ul>

</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import ArticalItem from './ArticalItem.vue';
import { inject, ref } from "vue";
const axios:any = inject("axios")
const articles:any = ref([])
onMounted(async () => {
    try {
        axios.get("http://127.0.0.1:8080/articles").then((result:any) => {
            console.log(result.data.articles)
            articles.value=result.data.articles
        }).catch((err:any) => {
            console.log(err,"获取数据失败")
        });
    } catch (err) {
        console.log("跨域")
    }

})
</script>
<style scoped>
ul {
    list-style: none;
}
</style>
```

子组件:ArticalItem.vue

```vue
<template>
    <div>
        <el-card class="box-card">
            <span>文章标题:&nbsp;&nbsp;</span>
            {{ title }}
            <hr>
            <div>
                {{ introduction }}
            </div>
        </el-card>

    </div>
</template>
<script setup>
const props = defineProps({
    title: String,
    introduction: String
})
</script>
<style scoped>
.box-card {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12),
        0 0 6px rgba(0, 0, 0, .04);
    box-sizing: border-box;
    padding: 20px;
    margin: 20px 0;
    height: 250px;
}
</style>
```

