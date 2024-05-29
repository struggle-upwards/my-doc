# [vue pinia与vue hooks(Composition API)的关键差异](https://segmentfault.com/a/1190000044739572)





## vue pinia的用途

用于全局状态共享。

## vue hooks(Composition API)的用途

用于逻辑封装与复用（注意这里没有状态共享）。

## 两者之间关键差异

`vue pinia`是一个单例，也就是说多次初始化实例都是同一个，所以在多个组件中使用时，他们修改的时同一份数据，也就能实现`vue pinia`的设计目的，即数据共享。

而`vue hooks`则不是，每次初始化都会创建一个独立的实例，所以在多个组件中使用时，他们修改的是自己的数据。
当然你也可以用`vue hooks`通过一些手段来实现`vue pinia`的效果，但当你做完这些，其最终形态也就相当于一个`vue pinia`了。