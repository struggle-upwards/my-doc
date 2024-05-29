<template><div><h1 id="vue-pinia与vue-hooks-composition-api-的关键差异" tabindex="-1"><a class="header-anchor" href="#vue-pinia与vue-hooks-composition-api-的关键差异"><span><a href="https://segmentfault.com/a/1190000044739572" target="_blank" rel="noopener noreferrer">vue pinia与vue hooks(Composition API)的关键差异</a></span></a></h1>
<h2 id="vue-pinia的用途" tabindex="-1"><a class="header-anchor" href="#vue-pinia的用途"><span>vue pinia的用途</span></a></h2>
<p>用于全局状态共享。</p>
<h2 id="vue-hooks-composition-api-的用途" tabindex="-1"><a class="header-anchor" href="#vue-hooks-composition-api-的用途"><span>vue hooks(Composition API)的用途</span></a></h2>
<p>用于逻辑封装与复用（注意这里没有状态共享）。</p>
<h2 id="两者之间关键差异" tabindex="-1"><a class="header-anchor" href="#两者之间关键差异"><span>两者之间关键差异</span></a></h2>
<p><code v-pre>vue pinia</code>是一个单例，也就是说多次初始化实例都是同一个，所以在多个组件中使用时，他们修改的时同一份数据，也就能实现<code v-pre>vue pinia</code>的设计目的，即数据共享。</p>
<p>而<code v-pre>vue hooks</code>则不是，每次初始化都会创建一个独立的实例，所以在多个组件中使用时，他们修改的是自己的数据。
当然你也可以用<code v-pre>vue hooks</code>通过一些手段来实现<code v-pre>vue pinia</code>的效果，但当你做完这些，其最终形态也就相当于一个<code v-pre>vue pinia</code>了。</p>
</div></template>


