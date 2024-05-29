<template><div><h1 id="vscode中的uniapp配置" tabindex="-1"><a class="header-anchor" href="#vscode中的uniapp配置"><span>vscode中的uniapp配置</span></a></h1>
<h3 id="安装uni依赖" tabindex="-1"><a class="header-anchor" href="#安装uni依赖"><span>安装uni依赖</span></a></h3>
<p><strong>'uni'不是内部或外部命令，也不是可运行的程序</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i uni</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装sass依赖" tabindex="-1"><a class="header-anchor" href="#安装sass依赖"><span>安装sass依赖</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">pnpm i -d sass</span>
<span class="line">pnpm i -d sass-loader</span>
<span class="line">npm i -d node-sass</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装uni-ui组件库" tabindex="-1"><a class="header-anchor" href="#安装uni-ui组件库"><span>安装uni-ui组件库</span></a></h3>
<h4 id="npm安装" tabindex="-1"><a class="header-anchor" href="#npm安装"><span>npm安装</span></a></h4>
<p>在 <code v-pre>vue-cli</code> 项目中可以使用 <code v-pre>npm</code> 安装 <code v-pre>uni-ui</code> 库 ，或者直接在 <code v-pre>HBuilderX</code> 项目中使用 <code v-pre>npm</code> 。</p>
<blockquote>
<p><strong>注意</strong> cli 项目默认是不编译 <code v-pre>node_modules</code> 下的组件的，导致条件编译等功能失效 ，导致组件异常 需要在根目录创建 <code v-pre>vue.config.js</code> 文件 ，增加 <code v-pre>@dcloudio/uni-ui</code> 包的编译即可正常</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// vue.config.js</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token literal-property property">transpileDependencies</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">'@dcloudio/uni-ui'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<h4 id="安装-uni-ui" tabindex="-1"><a class="header-anchor" href="#安装-uni-ui"><span>安装 uni-ui</span></a></h4>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">pnpm i @dcloudio/uni-ui   或   yarn add @dcloudio/uni-ui</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="配置easycom" tabindex="-1"><a class="header-anchor" href="#配置easycom"><span>配置easycom</span></a></h4>
<p>使用 <code v-pre>npm</code> 安装好 <code v-pre>uni-ui</code> 之后，需要配置 <code v-pre>easycom</code> 规则，让 <code v-pre>npm</code> 安装的组件支持 <code v-pre>easycom</code></p>
<p>打开项目根目录下的 <code v-pre>pages.json</code> 并添加 <code v-pre>easycom</code> 节点：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// pages.json</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token string-property property">"easycom"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token string-property property">"autoscan"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token string-property property">"custom"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">			<span class="token comment">// uni-ui 规则如下配置</span></span>
<span class="line">			<span class="token string-property property">"^uni-(.*)"</span><span class="token operator">:</span> <span class="token string">"@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue"</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	</span>
<span class="line">	<span class="token comment">// 其他内容</span></span>
<span class="line">	<span class="token literal-property property">pages</span><span class="token operator">:</span><span class="token punctuation">[</span></span>
<span class="line">		<span class="token comment">// ...</span></span>
<span class="line">	<span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code v-pre>template</code> 中使用组件：</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uni-badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>uni-badge</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uni-badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bindClick<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>uni-badge</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uni-badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">:inverted</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>uni-badge</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong></p>
<ul>
<li>
<p>uni-ui 现在只推荐使用 <code v-pre>easycom</code> ，如自己引用组件，可能会出现组件找不到的问题</p>
</li>
<li>
<p>使用 npm 安装的组件，默认情况下 babel-loader 会忽略所有 node_modules 中的文件 ，导致条件编译失效，需要通过配置</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">vue.config.js</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>解决</strong>：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// 在根目录创建 vue.config.js 文件，并配置如下</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">   <span class="token literal-property property">transpileDependencies</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'@dcloudio/uni-ui'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 如果是 vue3 + vite, 无需添加配置</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>uni-ui 是uni-app内置组件的扩展。注意与web开发不同，uni-ui不包括基础组件，它是基础组件的补充。web开发中有的开发者习惯用一个ui库完成所有开发，但在uni-app体系中，推荐开发者首先使用性能更高的基础组件，然后按需引入必要的扩展组件。</p>
</li>
<li>
<p><code v-pre>uni-ui</code> 不支持使用 <code v-pre>Vue.use()</code> 的方式安装</p>
</li>
</ul>
<h3 id="安装pinia" tabindex="-1"><a class="header-anchor" href="#安装pinia"><span>安装pinia</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i pinia</span>
<span class="line"><span class="token function">npm</span> i pinia-plugin-persistedstate</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="在main-js中挂载" tabindex="-1"><a class="header-anchor" href="#在main-js中挂载"><span>在main.js中挂载</span></a></h4>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createSSRApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">"./App.vue"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createPinia <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"pinia"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createSSRApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">const</span> pinia <span class="token operator">=</span> <span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>pinia<span class="token punctuation">)</span></span>
<span class="line">	<span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">		app<span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="pinia持久化存储" tabindex="-1"><a class="header-anchor" href="#pinia持久化存储"><span>pinia持久化存储</span></a></h4>
<p><strong>stores/index.js</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createPinia <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"pinia"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> piniaPluginPersistedstate <span class="token keyword">from</span> <span class="token string">'pinia-plugin-persistedstate'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> pinia <span class="token operator">=</span> <span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">pinia<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>piniaPluginPersistedstate<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> pinia</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>修改组件的persist</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 配置持久化</span></span>
<span class="line">    <span class="token literal-property property">persist</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 调整为兼容多端的API</span></span>
<span class="line">        <span class="token literal-property property">storage</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">setItem</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                uni<span class="token punctuation">.</span><span class="token function">setStorageSync</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span> </span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">return</span> uni<span class="token punctuation">.</span><span class="token function">getStorageSync</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> </span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


