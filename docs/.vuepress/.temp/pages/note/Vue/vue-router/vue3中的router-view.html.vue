<template><div><h1 id="vue3中的router-view" tabindex="-1"><a class="header-anchor" href="#vue3中的router-view"><span>Vue3中的router-view</span></a></h1>
<h3 id="key的作用" tabindex="-1"><a class="header-anchor" href="#key的作用"><span>key的作用</span></a></h3>
<p><strong>由于 Vue 会复用相同组件, 所以当同一个组件不同路由发生跳转时将不在执行created, mounted之类的钩子函数 , 设置key之后会在虚拟DOM阶段比对跳转前后得key值,如果不同则重新销毁重建页面</strong></p>
<p><strong>设置key属性值为 route.fullpath</strong>(可以不复用组件,强制销毁)</p>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>route.fullPath<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span> </span>
<span class="line">	// 或者直接使用内置的$route</span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$route.fullPath<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">	<span class="token keyword">import</span> <span class="token punctuation">{</span> useRoute <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组件复用-不执行setup-onmounted生命周期函数" tabindex="-1"><a class="header-anchor" href="#组件复用-不执行setup-onmounted生命周期函数"><span>组件复用(不执行setup,onMounted生命周期函数)</span></a></h3>
<p><strong>就可以设置前置路由守卫更新数据</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token function">onBeforeRouteUpdate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 更新面包屑数据</span></span>
<span class="line">    <span class="token function">getCategoryData</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="作用就是减少内存开销-防止切换路由组件还得销毁-还是组件复用加上路由守卫更新数据更加好" tabindex="-1"><a class="header-anchor" href="#作用就是减少内存开销-防止切换路由组件还得销毁-还是组件复用加上路由守卫更新数据更加好"><span>作用就是减少内存开销,防止切换路由组件还得销毁,还是组件复用加上路由守卫更新数据更加好</span></a></h4>
</div></template>


