## **一、scoped：在使用deep之前，我们应该先了解一下scoped**

### **1、什么是scoped，scoped的作用？**

在vue⽂件中的style标签上，有⼀个特殊的属性：scoped。当在style标签上加上scoped属性，则style标签下的样式只能在本组件中使用，可以使得组件之间的样式不互相污染。

如果每一个vue组件的style标签都加上了scoped，那就实现了样式的模块化。

### **2、scoped的原理**

（1） 为组件实例⽣成⼀个唯⼀标识，给组件中的dom元素添加⼀个不会重复的data属性，data-v-xxxx

（2） 给每个选择器的最后⼀个选择器添加⼀个属性选择器来私有化样式

**例：原代码为：**

```js
<template>
    <div class="parent"> 
       <div class="children">    scoped展示    </div>
    </div>
</template>
<style scoped>
    .parent .children{
        样式内容
    }
</style>
```

 **转译后代码为：**

```js
<template>
    <div class="parent" data-v-xxxx> 
       <div class="children" data-v-xxxx>    scoped展示    </div>
    </div>
</template>
<style scoped>
    .parent .children[data-v-xxxx]{
        样式内容
    }
</style>
```

## **二、scoped穿透：:deep()**

在我们需要引入第三方库时，可能需要再组件中局部的去修改第三方组件的样式，而并且不想影响scoped中其他样式，此时就可以通过穿透scoped去实现。

### **1.deep的使用**

.parent :deep(.childre) { 样式内容 }

### **2.deep使用的注意点：**

（1）style标签上必须要有scoped

（2）使用deep样式节点必须要有一个父节点

（3）在scss、less中使用时如果有包裹关系时，使用deep的节点前最好写该节点的直接父元素

**注意点：** 主要是要去注意唯⼀标识 data-v-xxxx 的值，只有当转译后的template代码和css代码中对应元素的 data-v-xxxx 可以对应上时 deep 才能生效

错误事例： 此时deep无法生效

```js
// 这边不是一定不生效，因为可能存在他祖先元素的 data-v-xxxx 和他父元素的 data-v-xxxx 相同的情况
.parent_parent :deep(.children) { 样式内容 }
```

正确事例： 此时deep才能生效

```js
// 这里的主要原因是deep的使用会生成一个data-v-xxxx，这个data-v-xxxx只会加在使用deep的直接父元素上
.parent :deep(.children) { 样式内容 }
```

（4）如果引用了外部组件，例如elementUI，这边有两种情况：

第一种：element组件添加至 `<div id="app"></div>` 内，即 `#app 是 element组件的父元素（或祖先元素）`，这个时候deep还是可以生效的，用法和上述相同

```js
// 事例
<div id="app">
    ....
    <div class="el-poper__arrow">
        ....
    </div>
</div>
```

第二种：element组件添加的位置和 `<div id="app"></div>` 同一个在同一层级，即 `#app 是 element组件的兄弟节点`，此时如果要为该组件的最外层元素添加deep的话，目前来看是无法生效的，目前我找到的解决方式是使用 **:global()**

```js
// 事例
<div id="app">
    .....
</div>
<div class="el-poper__arrow">
    ....
</div>

<style scoped>
:global(.el-poper__arrow) {
   background: #30395C;
   padding: 20px 0px;
}
</style>
```

## **三、拓展**

其实本质是基于html和css属性选择器，即分别时给html标签和css选择器添加 data-v-xxx;主要是是通过vue-loader 实现的，过程分为三步：

1.vue-loader会解析vue组件，提取数template,script,style对应的代码块。

2.构造组件实例，在组件实例的选项上面绑定scopedID

3.对style的css代码进行编译转化，应用scopedID生成选择器的属性