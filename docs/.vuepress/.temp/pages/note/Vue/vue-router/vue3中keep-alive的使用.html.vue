<template><div><h1 id="keep-alive与router-view的相爱相杀🍃" tabindex="-1"><a class="header-anchor" href="#keep-alive与router-view的相爱相杀🍃"><span>keep-alive与router-view的相爱相杀🍃</span></a></h1>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2>
<blockquote>
<p>由于目前做的项目都是基于<code v-pre>tab</code>导航的项目，目的就是要在页面跳转时实现记住上一个页面的搜索项或者表单值，减少请求，增加效率，第一反应就是<code v-pre>keep-alive</code>,紧接着我的噩梦就来了😫。<code v-pre>ps</code>:看封面图进来的记得收藏哦🍭</p>
</blockquote>
<h2 id="keep-alive概念" tabindex="-1"><a class="header-anchor" href="#keep-alive概念"><span>keep-alive概念</span></a></h2>
<h6 id="属性" tabindex="-1"><a class="header-anchor" href="#属性"><span>属性：</span></a></h6>
<ul>
<li><code v-pre>include</code> 只有<strong>名称</strong>匹配的组件会被缓存🙄(名称指的是组件中定义的name)。</li>
<li><code v-pre>exclude</code>。任何名称匹配的组件都不会被缓存🧵。</li>
<li><code v-pre>max</code>。最多可以缓存多少组件实例🥙。</li>
</ul>
<h6 id="用法" tabindex="-1"><a class="header-anchor" href="#用法"><span>用法：</span></a></h6>
<p><code v-pre>&lt;keep-alive&gt;</code> 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。和 <code v-pre>&lt;transition&gt;</code> 相似，<code v-pre>&lt;keep-alive&gt;</code> 是一个抽象组件🍤：它自身不会渲染一个 <code v-pre>DOM</code> 元素，也不会出现在组件的父组件链中🥧。</p>
<p>当组件在 <code v-pre>&lt;keep-alive&gt;</code> 内被切换，它的 <code v-pre>activated</code> 和 <code v-pre>deactivated</code> 这两个生命周期钩子函数将会被对应执行🚃，因为我们可能会需要将整个路由页面缓存下来所以就要将<code v-pre>&lt;router-view&gt;</code>进行缓存🛴。</p>
<h6 id="执行顺序" tabindex="-1"><a class="header-anchor" href="#执行顺序"><span>执行顺序：</span></a></h6>
<ul>
<li>页面第一次进入，钩子的触发顺序<code v-pre>created-&gt; mounted-&gt; activated</code>，退出时触发<code v-pre>deactivated</code>。当再次进入（前进或者后退）时，只触发<code v-pre>activated</code>🦼。</li>
</ul>
<h2 id="router-view概念" tabindex="-1"><a class="header-anchor" href="#router-view概念"><span>router-view概念</span></a></h2>
<blockquote>
<ul>
<li><code v-pre>&lt;router-view&gt;</code>组件是一个功能组件，它为给定路径呈现匹配的组件🎨。渲染的组件<code v-pre>&lt;router-view&gt;</code>也可以包含自己的<code v-pre>&lt;router-view&gt;</code>，这将为嵌套路径渲染组件🤴。</li>
</ul>
</blockquote>
<p><code v-pre>router-view</code> <strong>key</strong>属性（每个组件都有一个<code v-pre>key</code>属性，<code v-pre>vue</code>会复用相同组件如果需要重新渲染可以使用不同的<code v-pre>key</code>进行）🛒</p>
<blockquote>
<ol>
<li><strong>不设置 <code v-pre>router-view</code> 的 <code v-pre>key</code> 属性</strong> 由于 Vue 会复用相同组件, 即 <code v-pre>/page/1 =&gt; /page/2</code> 或者 <code v-pre>/page?id=1 =&gt; /page?id=2</code> 这类链接跳转时, 🍆将不在执行<code v-pre>created</code>, <code v-pre>mounted</code>之类的钩子, 🍱这时候你需要在路由组件中, 添加<code v-pre>beforeRouteUpdate</code>钩子来执行相关方法拉去数据🥯。</li>
</ol>
</blockquote>
<blockquote>
<ol>
<li><strong>设置 <code v-pre>router-view</code> 的 <code v-pre>key</code> 属性值为 <code v-pre>$route.path</code></strong> 从<code v-pre>/page/1 =&gt; /page/2</code>, 由于这两个路由的<code v-pre>$route.path</code>并不一样, 🍵所以组件被强制不复用, 相关钩子从<code v-pre>/page?id=1 =&gt; /page?id=2</code>,🍦 由于这两个路由的<code v-pre>$route.path</code>一样, 所以和没设置 <code v-pre>key</code> 属性一样, 会复用组件🥡。</li>
</ol>
</blockquote>
<blockquote>
<ol>
<li><strong>设置 <code v-pre>router-view</code> 的 <code v-pre>key</code> 属性值为 <code v-pre>$route.fullPath</code></strong> 从<code v-pre>/page/1 =&gt; /page/2</code>, 由于这两个路由的<code v-pre>$route.fullPath</code>并不一样, 所以组件被强制不复用🥙, 从<code v-pre>/page?id=1 =&gt; /page?id=2</code>, 由于这两个路由的<code v-pre>$route.fullPath</code>并不一样, 所以组件被强制不复用🥪。</li>
</ol>
</blockquote>
<h2 id="写法" tabindex="-1"><a class="header-anchor" href="#写法"><span>写法</span></a></h2>
<h3 id="vue2-0的写法" tabindex="-1"><a class="header-anchor" href="#vue2-0的写法"><span>vue2.0的写法</span></a></h3>
<div class="language-ruby line-numbers-mode" data-ext="rb" data-title="rb"><pre v-pre class="language-ruby"><code><span class="line">ruby复制代码<span class="token comment"># 包裹组件</span></span>
<span class="line"><span class="token comment"># currentTabComponent 代表组件名</span></span>
<span class="line"><span class="token comment"># 例如一个项目引用了多个组件通过相应事件修改currentTabComponent的值达到动态组件缓存的功能</span></span>
<span class="line"><span class="token operator">&lt;</span>keep<span class="token operator">-</span>alive<span class="token operator">></span></span>
<span class="line">   <span class="token operator">&lt;</span>component v<span class="token operator">-</span>bind<span class="token symbol">:is</span><span class="token operator">=</span><span class="token string-literal"><span class="token string">"currentTabComponent"</span></span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>component<span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>keep<span class="token operator">-</span>alive<span class="token operator">></span></span>
<span class="line"><span class="token comment"># 包裹路由</span></span>
<span class="line"><span class="token comment"># a,b 代表组建名称</span></span>
<span class="line"><span class="token operator">&lt;</span>keep<span class="token operator">-</span>alive <span class="token symbol">:include</span><span class="token operator">=</span><span class="token punctuation">[</span>a<span class="token punctuation">,</span>b<span class="token punctuation">]</span><span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span>router<span class="token operator">-</span>view <span class="token symbol">:key</span><span class="token operator">=</span><span class="token string-literal"><span class="token string">"$route.fullPath"</span></span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>view<span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>keep<span class="token operator">-</span>alive<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue3-0的写法" tabindex="-1"><a class="header-anchor" href="#vue3-0的写法"><span>vue3.0的写法</span></a></h3>
<div class="language-ini line-numbers-mode" data-ext="ini" data-title="ini"><pre v-pre class="language-ini"><code><span class="line">ini复制代码 包裹组件</span>
<span class="line"><span class="token comment"># currentTabComponent 代表组件名</span></span>
<span class="line"><span class="token comment"># 例如一个项目引用了多个组件通过相应事件修改currentTabComponent的值达到动态组件缓存的功能</span></span>
<span class="line">&lt;keep-alive></span>
<span class="line">   <span class="token key attr-name">&lt;component v-bind:is</span><span class="token punctuation">=</span><span class="token value attr-value">"currentTabComponent">&lt;/component></span></span>
<span class="line">&lt;/keep-alive></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 包裹路由（3.0的写法有变更）key需要绑定到component中</span></span>
<span class="line"><span class="token key attr-name">&lt;router-view v-slot</span><span class="token punctuation">=</span><span class="token value attr-value">"{ Component }"></span></span>
<span class="line">    <span class="token key attr-name">&lt;keep-alive :include</span><span class="token punctuation">=</span><span class="token value attr-value">[a,b]></span></span>
<span class="line">      <span class="token key attr-name">&lt;component :is</span><span class="token punctuation">=</span><span class="token value attr-value">"Component" :key="$route.fullPath"/></span></span>
<span class="line">    &lt;/keep-alive></span>
<span class="line">&lt;/router-view></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="不使用keep-alive的效果" tabindex="-1"><a class="header-anchor" href="#不使用keep-alive的效果"><span>不使用<code v-pre>keep-alive</code>的效果</span></a></h2>
<ul>
<li>所有的页面都不会缓存，凡是涉及到路由的跳转都会执行当前组件的<code v-pre>mounted</code>，🎏这样就会有一些性能上的消耗，导致加载过的数据还会重新加载进行渲染在进行上方导航切换的时候不会缓存之前填写的数据🧧。</li>
</ul>
<h2 id="所有都使用了keep-alive的效果" tabindex="-1"><a class="header-anchor" href="#所有都使用了keep-alive的效果"><span>所有都使用了<code v-pre>keep-alive</code>的效果</span></a></h2>
<ul>
<li>每个页面的第一次都会执行<code v-pre>mounted</code>，🧤之后再次访问该页面会进入缓存,导致我们在关闭的时候不会执行组件的销毁，加载的都是第一次加载的数据，新数据一直无法渲染🦺。</li>
</ul>
<h2 id="使用了keep-alive-通过include和vuex控制缓存" tabindex="-1"><a class="header-anchor" href="#使用了keep-alive-通过include和vuex控制缓存"><span>使用了<code v-pre>keep-alive</code> 通过<code v-pre>include</code>和<code v-pre>vuex</code>控制缓存</span></a></h2>
<blockquote>
<p>通过这种方式当我们可以动态控制缓存的组件。</p>
<ul>
<li>当页面关闭的时候我们将不需要缓存的组件移除🍱，移除之后会执行组件的销毁生命周期🥂，在打开之前的页面会重新渲染有些时候这样就已经完美了🍟。</li>
<li>但是事情总是事与愿违，比如上图中的编辑😴，他们是不同的路由但是指向的组件是同一个（组件<code v-pre>name</code>肯定是相同的）🤢，这样就会导致我们同时打开两个编辑页面的时候,每次加载都是第一次的数据😣。</li>
</ul>
</blockquote>
<h2 id="最终方案-keep-alive-中的include-router-view中key" tabindex="-1"><a class="header-anchor" href="#最终方案-keep-alive-中的include-router-view中key"><span>最终方案：keep-alive 中的<strong>include</strong> + router-view中<strong>key</strong></span></a></h2>
<blockquote>
<p>我们在上面已经提到了<code v-pre>router-view</code>中<code v-pre>key</code>的作用🍊，所以我们只需要在<code v-pre>router-view</code>绑定<code v-pre>key</code>为<code v-pre>&quot;$route.fullPage&quot;</code>🥂<strong>如果是vue3.x需要将key值绑定至component上</strong>🥂 这样我们在点击列表不同项的编辑的时候每次走的都是最新的数据🍯，同时我们使用了<code v-pre>keep-alive</code>中的<code v-pre>include</code> 上方两个编辑页进行切换的时候就会走缓存🍻，不进行页面的加载🍵。</p>
</blockquote>
<h2 id="vue3-x-设置name" tabindex="-1"><a class="header-anchor" href="#vue3-x-设置name"><span><code v-pre>vue3.x</code> 设置<code v-pre>name</code></span></a></h2>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line"></span>
<span class="line">1. `vite`构建插件引用</span>
<span class="line"></span>
<span class="line">```arduino</span>
<span class="line">arduino复制代码# 安装</span>
<span class="line">npm i vite-plugin-vue-setup-extend -D</span>
<span class="line"># 配置 vite.config.ts </span>
<span class="line">import { defineConfig } from 'vite'</span>
<span class="line">import VueSetupExtend from 'vite-plugin-vue-setup-extend'</span>
<span class="line">export default defineConfig({</span>
<span class="line">  plugins: [ VueSetupExtend()]</span>
<span class="line">})</span>
<span class="line"># 使用</span>
<span class="line">&lt;script lang="ts" setup name="demo"></span>
<span class="line"></span>
<span class="line">&lt;/script></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2>
<p>当初就是因为对<code v-pre>keep-alive</code>的掌握不够透彻只是知道是什么东西🍄，在真正的项目中使用才会发现有很多问题,兄弟们告辞下次见🥤，稍微有点作用就三连一下哦🤑，有错误的地方尽管在评论区展示语言😏。</p>
</div></template>


<script setup>
    // do something...
</script>