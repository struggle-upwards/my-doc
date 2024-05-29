父组件: ArticalList

```vue
<template>
    <ul>
        <li v-for="article in articles" :key="article.Id">
            <ArticalItem>
                <template v-slot:title>
                    {{ article.Title }}
                </template>
                <template v-slot:introduction>
                    {{ article.Introduction }}
                </template>
            </ArticalItem>
        </li>
    </ul>

</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import ArticalItem from './ArticalItem.vue';
import { inject, ref } from "vue";
const axios = inject("axios")
const articles = ref([])
onMounted(async () => {
    try {
        axios.get("http://127.0.0.1:8080/articles").then((result) => {
            console.log(result.data.articles)
            articles.value=result.data.articles
        }).catch((err) => {
            console.log("获取数据失败")
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

子组件:ArticalItem

```vue
<template>
    <div>
        <el-card class="box-card">
            <span>文章标题:&nbsp;&nbsp;</span>
            <slot name="title"></slot>
            <hr>
            <div>
                <slot name="introduction"></slot>
            </div>
        </el-card>

    </div>
</template>
<script setup>
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
    height:250px;
}
</style>
```

> slot一般传的值不确定,有可能是确定的值，也有可能是模板。一般用来传递模板等不确定的值