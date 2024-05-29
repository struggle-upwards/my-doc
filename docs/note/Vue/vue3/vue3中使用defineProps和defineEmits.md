**test2-father.vue**

```vue
<template>
    <b>父传子通信</b>
    <div>子组件传给父组件的值为:{{ sonValue1 }}和{{ sonValue2 }}</div>
    <div>
        <test2Son message="hello world!" @sonValue="getSonMessage"></test2Son>
    </div>
</template>
<script lang="ts" setup>
import test2Son from './test2-son.vue';
import { ref } from "vue"
const getSonMessage = (msg1: string, msg2: string) => {
    [sonValue1.value, sonValue2.value] = [msg1, msg2]
}
const sonValue1 = ref("")
const sonValue2 = ref("")
</script>
<style>
div {
    margin-bottom: 20px;
}
</style>
```

**test2-son.vue**

```vue
<template>
    <div class="son">
        父组件传递的信息为{{ message }}
        <div>
        <button @click="sendFatherMessage">向父组件传递信息</button>
        </div>
    </div>
</template>
<script lang="ts" setup>
const sonValue1 = "这是子组件的值1"
const sonValue2 = "这是子组件的值2"
const emit = defineEmits(['sonValue'])
defineProps({
    message:{
        type:String,
        required:true,
        default:100
    }
})
const sendFatherMessage = ()=>{
    emit('sonValue',sonValue1,sonValue2)
}

</script>
<style lang="scss">
.son{
    border: 1px dashed black;
    width: 60%;
    padding: 20px;
}
</style>
```

