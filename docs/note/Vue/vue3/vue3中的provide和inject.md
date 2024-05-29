## vue3中可以使用provide和inject实现top组件和end组件之间的通讯

**top.vue**

```vue
<template>
    <div>
        <h3>这是顶层组件&emsp;&emsp;{name:{{ topName }}}
            <div>
                <middle></middle>
            </div>
        </h3>
    </div>
</template>
<script lang="ts" setup>
import middle from "@/components/test4/middle.vue"
import { provide, ref } from "vue";
const topName = ref("小明")
const setTopName = (name: string) => {
    topName.value = name
}
provide("topName", topName)
provide("setTopName", setTopName)
// 使用provide函数向底层组件传递数据
setTimeout(() => {
    topName.value = "小李"
}, 2000)
</script>
<style lang="scss">
%h {
    margin-bottom: 20px;
    padding: 10px;
    width: 50%;
    border: 2px dashed black;
}

h3 {
    @extend %h;
    margin-left: 10px
}

h5 {
    @extend %h;
    margin-left: 20px
}

h6 {
    @extend %h;
    margin-left: 40px;
}
</style>
```

**middle.vue**

```vue
<template>
    <div>
        <h5>
            这是中间层组件
            <div>
                <end></end>
            </div>
        </h5>
    </div>
</template>
<script lang="ts" setup>
import end from "@/components/test4/end.vue"
</script>
```

**end.vue**

```vue
<template>
    <div>
        <h6>这是底层组件

            <div>在顶层组件接收到的数据为:{{ topName }}</div>
            <div style="padding-left: 0;">
                <el-button type="success" @click="setTopName('小丑')" style="transform: scale(0.8);margin-left: 0 !important;">修改顶层组件的值</el-button>
            </div>
        </h6>
        
        
    </div>
</template>
<script lang="ts" setup>
import { inject } from 'vue';

const topName = inject("topName")
const setTopName:any = inject("setTopName")

</script>

```

