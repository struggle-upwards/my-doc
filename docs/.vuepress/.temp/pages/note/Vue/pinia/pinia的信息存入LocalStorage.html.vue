<template><div><h1 id="pinia的信息存入localstorage" tabindex="-1"><a class="header-anchor" href="#pinia的信息存入localstorage"><span>pinia的信息存入LocalStorage</span></a></h1>
<h3 id="安装pinia-plugin-persistedstate" tabindex="-1"><a class="header-anchor" href="#安装pinia-plugin-persistedstate"><span>安装pinia-plugin-persistedstate</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i pinia-plugin-persistedstate</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="将插件添加到-pinia-实例上" tabindex="-1"><a class="header-anchor" href="#将插件添加到-pinia-实例上"><span>将插件添加到 pinia 实例上</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">import</span> <span class="token punctuation">{</span> createPinia <span class="token punctuation">}</span> from <span class="token string">'pinia'</span></span>
<span class="line"><span class="token function">import</span> piniaPluginPersistedstate from <span class="token string">'pinia-plugin-persistedstate'</span></span>
<span class="line"></span>
<span class="line">const pinia <span class="token operator">=</span> createPinia<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">pinia.use<span class="token punctuation">(</span>piniaPluginPersistedstate<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建-store-时-将-persist-选项设置为-true" tabindex="-1"><a class="header-anchor" href="#创建-store-时-将-persist-选项设置为-true"><span>创建 Store 时，将 <code v-pre>persist</code> 选项设置为 <code v-pre>true</code></span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pinia'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> useStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token string">'main'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> someState <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'你好 pinia'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span> someState <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">persist</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


