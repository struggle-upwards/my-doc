<template><div><h4 id="node16-16-0安装vue2及其脚手架vue-cli2" tabindex="-1"><a class="header-anchor" href="#node16-16-0安装vue2及其脚手架vue-cli2"><span>node16.16.0安装vue2及其脚手架vue-cli2</span></a></h4>
<p><strong>node指定淘宝镜像</strong></p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line"> npm config set registry https://registry.npmmirror.com</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>全局安装</strong></p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">npm install -g vue@2.7.16 </span>
<span class="line">npm install -g @vue/cli@4.0.0</span>
<span class="line">npm install -g webpack@3.5.2</span>
<span class="line">npm install vue-router@3.5.1</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查看vue和vue-cli版本</strong></p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">npm list vue //查看vue版本</span>
<span class="line">vue -V //查看vue-cli版本</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>开发环境安装</strong></p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">npm install -D @vue/cli@3.5.1</span>
<span class="line">npm install -D webpack@3.5.2</span>
<span class="line">npm install -D vue-router@3.5.1</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>element-ui</strong></p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">npm i element-ui -S</span>
<span class="line">npm install less@3.0.4 --save</span>
<span class="line">npm install less-loader@5.0.0 --save</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">//在main.js导入</span>
<span class="line">import ElementUI from 'element-ui';</span>
<span class="line">import 'element-ui/lib/theme-chalk/index.css';</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


