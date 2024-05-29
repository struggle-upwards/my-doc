<template><div><h2 id="vue3-报错解决-无法找到模块-xxx-vue-的声明文件-xxx隐式拥有-any-类型" tabindex="-1"><a class="header-anchor" href="#vue3-报错解决-无法找到模块-xxx-vue-的声明文件-xxx隐式拥有-any-类型"><span>vue3 报错解决：无法找到模块“xxx.vue”的声明文件 xxx隐式拥有 “any“ 类型</span></a></h2>
<p>报错原因：<a href="https://so.csdn.net/so/search?q=typescript&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">typescript</a> 只能理解 .ts 文件，无法理解 .vue文件</p>
<p>解决方法：在项目根目录或 src 文件夹下创建一个后缀为 XXX.d.ts 的文件，并写入以下内容：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre v-pre class="language-typescript"><code><span class="line"><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">'*.vue'</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">import</span> <span class="token punctuation">{</span> ComponentOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line">  <span class="token keyword">const</span> componentOptions<span class="token operator">:</span> ComponentOptions</span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">default</span> componentOptions</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


