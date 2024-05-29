<template><div><h1 id="vue中的响应式" tabindex="-1"><a class="header-anchor" href="#vue中的响应式"><span>Vue中的响应式</span></a></h1>
<h2 id="响应式和声明式" tabindex="-1"><a class="header-anchor" href="#响应式和声明式"><span>响应式和声明式</span></a></h2>
<h3 id="数据" tabindex="-1"><a class="header-anchor" href="#数据"><span>数据</span></a></h3>
<p><strong>Vue2中的数据通过 <code v-pre>Object.defineProperty()</code> 方法和对数组变异方法的重写，实现响应式)</strong></p>
<p><strong>Vue3中的数据基于Javascript proxy代理)实现响应式</strong></p>
<blockquote>
<p>响应式数据会检测数据的更新,操作dom来完成视图的更新(ref,reactive)</p>
<p>声明式数据发生更新,并不会更新页面</p>
</blockquote>
<h3 id="布局" tabindex="-1"><a class="header-anchor" href="#布局"><span>布局</span></a></h3>
<blockquote>
<p>响应式布局就是实现不同端的自适应布局(根据页面尺寸进行伸缩),防止css不兼容导致盒子内容溢出</p>
</blockquote>
</div></template>


