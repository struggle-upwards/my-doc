<template><div><h2 id="一、scoped-在使用deep之前-我们应该先了解一下scoped" tabindex="-1"><a class="header-anchor" href="#一、scoped-在使用deep之前-我们应该先了解一下scoped"><span><strong>一、scoped：在使用deep之前，我们应该先了解一下scoped</strong></span></a></h2>
<h3 id="_1、什么是scoped-scoped的作用" tabindex="-1"><a class="header-anchor" href="#_1、什么是scoped-scoped的作用"><span><strong>1、什么是scoped，scoped的作用？</strong></span></a></h3>
<p>在vue⽂件中的style标签上，有⼀个特殊的属性：scoped。当在style标签上加上scoped属性，则style标签下的样式只能在本组件中使用，可以使得组件之间的样式不互相污染。</p>
<p>如果每一个vue组件的style标签都加上了scoped，那就实现了样式的模块化。</p>
<h3 id="_2、scoped的原理" tabindex="-1"><a class="header-anchor" href="#_2、scoped的原理"><span><strong>2、scoped的原理</strong></span></a></h3>
<p>（1） 为组件实例⽣成⼀个唯⼀标识，给组件中的dom元素添加⼀个不会重复的data属性，data-v-xxxx</p>
<p>（2） 给每个选择器的最后⼀个选择器添加⼀个属性选择器来私有化样式</p>
<p><strong>例：原代码为：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token operator">&lt;</span>template<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"parent"</span><span class="token operator">></span> </span>
<span class="line">       <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"children"</span><span class="token operator">></span>    scoped展示    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span>style scoped<span class="token operator">></span></span>
<span class="line">    <span class="token punctuation">.</span>parent <span class="token punctuation">.</span>children<span class="token punctuation">{</span></span>
<span class="line">        样式内容</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>转译后代码为：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token operator">&lt;</span>template<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"parent"</span> data<span class="token operator">-</span>v<span class="token operator">-</span>xxxx<span class="token operator">></span> </span>
<span class="line">       <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"children"</span> data<span class="token operator">-</span>v<span class="token operator">-</span>xxxx<span class="token operator">></span>    scoped展示    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span>style scoped<span class="token operator">></span></span>
<span class="line">    <span class="token punctuation">.</span>parent <span class="token punctuation">.</span>children<span class="token punctuation">[</span>data<span class="token operator">-</span>v<span class="token operator">-</span>xxxx<span class="token punctuation">]</span><span class="token punctuation">{</span></span>
<span class="line">        样式内容</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、scoped穿透-deep" tabindex="-1"><a class="header-anchor" href="#二、scoped穿透-deep"><span><strong>二、scoped穿透：:deep()</strong></span></a></h2>
<p>在我们需要引入第三方库时，可能需要再组件中局部的去修改第三方组件的样式，而并且不想影响scoped中其他样式，此时就可以通过穿透scoped去实现。</p>
<h3 id="_1-deep的使用" tabindex="-1"><a class="header-anchor" href="#_1-deep的使用"><span><strong>1.deep的使用</strong></span></a></h3>
<p>.parent :deep(.childre) { 样式内容 }</p>
<h3 id="_2-deep使用的注意点" tabindex="-1"><a class="header-anchor" href="#_2-deep使用的注意点"><span><strong>2.deep使用的注意点：</strong></span></a></h3>
<p>（1）style标签上必须要有scoped</p>
<p>（2）使用deep样式节点必须要有一个父节点</p>
<p>（3）在scss、less中使用时如果有包裹关系时，使用deep的节点前最好写该节点的直接父元素</p>
<p><strong>注意点：</strong> 主要是要去注意唯⼀标识 data-v-xxxx 的值，只有当转译后的template代码和css代码中对应元素的 data-v-xxxx 可以对应上时 deep 才能生效</p>
<p>错误事例： 此时deep无法生效</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// 这边不是一定不生效，因为可能存在他祖先元素的 data-v-xxxx 和他父元素的 data-v-xxxx 相同的情况</span></span>
<span class="line"><span class="token punctuation">.</span>parent_parent <span class="token operator">:</span><span class="token function">deep</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">.</span>children</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 样式内容 <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>正确事例： 此时deep才能生效</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// 这里的主要原因是deep的使用会生成一个data-v-xxxx，这个data-v-xxxx只会加在使用deep的直接父元素上</span></span>
<span class="line"><span class="token punctuation">.</span>parent <span class="token operator">:</span><span class="token function">deep</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">.</span>children</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 样式内容 <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>（4）如果引用了外部组件，例如elementUI，这边有两种情况：</p>
<p>第一种：element组件添加至 <code v-pre>&lt;div id=&quot;app&quot;&gt;&lt;/div&gt;</code> 内，即 <code v-pre>#app 是 element组件的父元素（或祖先元素）</code>，这个时候deep还是可以生效的，用法和上述相同</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// 事例</span></span>
<span class="line"><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"app"</span><span class="token operator">></span></span>
<span class="line">    <span class="token operator">...</span><span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"el-poper__arrow"</span><span class="token operator">></span></span>
<span class="line">        <span class="token operator">...</span><span class="token punctuation">.</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二种：element组件添加的位置和 <code v-pre>&lt;div id=&quot;app&quot;&gt;&lt;/div&gt;</code> 同一个在同一层级，即 <code v-pre>#app 是 element组件的兄弟节点</code>，此时如果要为该组件的最外层元素添加deep的话，目前来看是无法生效的，目前我找到的解决方式是使用 <strong>:global()</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token comment">// 事例</span></span>
<span class="line"><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"app"</span><span class="token operator">></span></span>
<span class="line">    <span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"el-poper__arrow"</span><span class="token operator">></span></span>
<span class="line">    <span class="token operator">...</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>style scoped<span class="token operator">></span></span>
<span class="line"><span class="token operator">:</span><span class="token function">global</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">.</span>el<span class="token operator">-</span>poper__arrow</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">   <span class="token literal-property property">background</span><span class="token operator">:</span> #30395C<span class="token punctuation">;</span></span>
<span class="line">   <span class="token literal-property property">padding</span><span class="token operator">:</span> 20px 0px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、拓展" tabindex="-1"><a class="header-anchor" href="#三、拓展"><span><strong>三、拓展</strong></span></a></h2>
<p>其实本质是基于html和css属性选择器，即分别时给html标签和css选择器添加 data-v-xxx;主要是是通过vue-loader 实现的，过程分为三步：</p>
<p>1.vue-loader会解析vue组件，提取数template,script,style对应的代码块。</p>
<p>2.构造组件实例，在组件实例的选项上面绑定scopedID</p>
<p>3.对style的css代码进行编译转化，应用scopedID生成选择器的属性</p>
</div></template>


