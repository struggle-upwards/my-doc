<template><div><h4 id="vue路由跳转报错avoided-redundant-navigation-to-current-location-xxxxxx" tabindex="-1"><a class="header-anchor" href="#vue路由跳转报错avoided-redundant-navigation-to-current-location-xxxxxx"><span>vue路由跳转报错Avoided redundant navigation to current location: “/xxxxxx“</span></a></h4>
<p>解决方法:</p>
<p>在main.js的路由下加上这段代码</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">//获取原型对象上的push函数</span></span>
<span class="line"><span class="token keyword">const</span> originalPush <span class="token operator">=</span> <span class="token class-name">VueRouter</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>push</span>
<span class="line"><span class="token comment">//修改原型对象中的push方法</span></span>
<span class="line"><span class="token class-name">VueRouter</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">push</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">push</span><span class="token punctuation">(</span><span class="token parameter">location</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token function">originalPush</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> location<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=></span> err<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


