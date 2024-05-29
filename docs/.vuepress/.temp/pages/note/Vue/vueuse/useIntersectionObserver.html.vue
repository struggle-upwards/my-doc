<template><div><h1 id="useintersectionobserver" tabindex="-1"><a class="header-anchor" href="#useintersectionobserver"><span>useIntersectionObserver</span></a></h1>
<h3 id="响应式监听目标元素的可见性" tabindex="-1"><a class="header-anchor" href="#响应式监听目标元素的可见性"><span>响应式监听目标元素的可见性</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useIntersectionObserver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vueuse/core'</span></span>
<span class="line"><span class="token keyword">const</span> lazyPlugin <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 配置此应用</span></span>
<span class="line">    app<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">'img-lazy'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> <span class="token punctuation">{</span> stop <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useIntersectionObserver</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span><span class="token punctuation">{</span> isIntersecting <span class="token punctuation">}</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">if</span> <span class="token punctuation">(</span>isIntersecting<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            el<span class="token punctuation">.</span>src <span class="token operator">=</span> binding<span class="token punctuation">.</span>value</span>
<span class="line">            <span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">              </span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span> lazyPlugin <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>https://www.vueusejs.com/core/useIntersectionObserver/</p>
</div></template>


