<template><div><h1 id="图片放大镜效果" tabindex="-1"><a class="header-anchor" href="#图片放大镜效果"><span>图片放大镜效果</span></a></h1>
<h3 id="下载vue-magnifier插件" tabindex="-1"><a class="header-anchor" href="#下载vue-magnifier插件"><span>下载vue-magnifier插件</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> @websitebeaver/vue-magnifier</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="在组件当中引入" tabindex="-1"><a class="header-anchor" href="#在组件当中引入"><span>在组件当中引入</span></a></h3>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> VueMagnifier <span class="token keyword">from</span> <span class="token string">'@websitebeaver/vue-magnifier'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">'@websitebeaver/vue-magnifier/styles.css'</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VueMagnifier</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./path/to/image<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>地址</strong></p>
<p><a href="https://vue-magnifier.js.org/" target="_blank" rel="noopener noreferrer">vue-magnifier | 🔍 Vue 3 image zoom component</a></p>
</div></template>


