<template><div><h1 id="usescroll" tabindex="-1"><a class="header-anchor" href="#usescroll"><span>useScroll</span></a></h1>
<h3 id="响应式获取滚动位置和状态。" tabindex="-1"><a class="header-anchor" href="#响应式获取滚动位置和状态。"><span>响应式获取滚动位置和状态。</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useScroll <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vueuse/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 获取鼠标滚动后距离浏览器顶部的距离</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> y <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useScroll</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span> <span class="token comment">//可以切换成ref挂载对象</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>https://www.vueusejs.com/core/useScroll/</p>
</div></template>


