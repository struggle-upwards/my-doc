# Vue3中的router-view





### key的作用

**由于 Vue 会复用相同组件, 所以当同一个组件不同路由发生跳转时将不在执行created, mounted之类的钩子函数 , 设置key之后会在虚拟DOM阶段比对跳转前后得key值,如果不同则重新销毁重建页面**


**设置key属性值为 route.fullpath**(可以不复用组件,强制销毁)

```vue
<template>
	<router-view :key="route.fullPath"/> 
	// 或者直接使用内置的$route
	<router-view :key="$route.fullPath"></router-view>
</template>
<script setup>
	import { useRoute } from 'vue-router';
	const route = useRoute()
</script>
```





###  组件复用(不执行setup,onMounted生命周期函数)

**就可以设置前置路由守卫更新数据**

```js
onBeforeRouteUpdate((to) => {
    // 更新面包屑数据
    getCategoryData(to.params.id)
})
```



#### 作用就是减少内存开销,防止切换路由组件还得销毁,还是组件复用加上路由守卫更新数据更加好