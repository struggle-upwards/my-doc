```vue
<template>
    <div>
        <b>ref和reactive</b>
        <div>count1的值<button @click="addCount1">{{ count1 }}</button></div>
        <div>count2的值<button @click="addCount2">{{ count2.count }}</button></div>
        <div>计算属性(computed)count1的值为{{ changeCount1 }}</div>
        <button @click="count2.children.list.push(666)">改变count2对象中children.list(deep)</button>
        <hr>

    </div>
</template>
<script setup lang="ts">
// ref方法
import { ref, reactive, computed, watch } from 'vue';
let count1 = ref(0);
let count2 = reactive({
    count: 10,
    children: {
        list: [1, 2, 3, 4, 5]
    }
})
const addCount1 = () => {
    count1.value++;
}
const addCount2 = () => {
    count2.count++;
}
// 计算属性
let changeCount1 = computed(() => {
    return count1.value + 10
})

// 监听数据
watch(count1, (newval, oldval) => {
    console.log("count1的新值和旧值", newval, oldval)
})

// deep属性为true时,会对对象作递归处理,监听所有属性的值
watch(count2, () => {
    console.log("count2对象发生了改变")
})
// 监听一个特定属性的值,可以使用箭头函数来确定
// 使用()=>属性来监听特定属性的值
watch(() => count2.count, (newval, oldval) => {
    console.log("count2的新值和旧值", newval, oldval)
}, {
    immediate: true,
})
</script>
<style>
div {
    margin-bottom: 20px;
}
</style>
```

