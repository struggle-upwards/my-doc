<template><div><h1 id="前端代码格式化-【prettier】-常见配置-踩坑日记" tabindex="-1"><a class="header-anchor" href="#前端代码格式化-【prettier】-常见配置-踩坑日记"><span>前端代码格式化 - 【Prettier】 - 常见配置 + 踩坑日记</span></a></h1>
<h1 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h1>
<h2 id="prettier是什么、能帮我们解决什么问题" tabindex="-1"><a class="header-anchor" href="#prettier是什么、能帮我们解决什么问题"><span>Prettier是什么、能帮我们解决什么问题？</span></a></h2>
<ul>
<li>Prettier 是一个代码格式化工具，可以格式化代码，但不具备代码检查功能，它可以通过解析代码并使用自己的规则重新打印它，并考虑最大行长来强制一致的样式，并在必要时包装代码，如今，它已成为解决所有代码格式问题的优选方案，支持多种语言，可以将 ESLint 和 Prettier 结合使用，提高代码质量。</li>
</ul>
<h2 id="prettier-中文网" tabindex="-1"><a class="header-anchor" href="#prettier-中文网"><span>Prettier 中文网</span></a></h2>
<ul>
<li><a href="https://link.juejin.cn/?target=https%3A%2F%2Fprettier.nodejs.cn%2F" target="_blank" rel="noopener noreferrer">Prettier 中文网</a></li>
</ul>
<h1 id="一、使用" tabindex="-1"><a class="header-anchor" href="#一、使用"><span>一、使用</span></a></h1>
<h2 id="_1-1-使用方式" tabindex="-1"><a class="header-anchor" href="#_1-1-使用方式"><span>1.1 使用方式</span></a></h2>
<ul>
<li>
<p>方式一：下载</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">Prettier</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>插件；</p>
</li>
<li>
<p>方式二：在项目中安装</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">npm i -d prettier</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>，然后在项目根目录下创建配置文件（</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">.prettierrc.js</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>）进行配置；</p>
</li>
<li>
<p>如果两种方式都使用了，那么<code v-pre>prettier</code>配置文件的优先级首先是当前项目根目录下的配置文件；</p>
</li>
</ul>
<h2 id="_1-2-格式化-配合-自动保存-或-git-使用" tabindex="-1"><a class="header-anchor" href="#_1-2-格式化-配合-自动保存-或-git-使用"><span>1.2 格式化：配合 自动保存 或 git 使用</span></a></h2>
<h3 id="_1-2-1-自动保存时格式化" tabindex="-1"><a class="header-anchor" href="#_1-2-1-自动保存时格式化"><span>1.2.1 自动保存时格式化</span></a></h3>
<ul>
<li>
<p>我们可以在</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">VsCode</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>的 设置 中 开启</p>
<p>保存文件时自动进行格式化</p>
</li>
</ul>
<h3 id="_1-2-2-配合-git-使用" tabindex="-1"><a class="header-anchor" href="#_1-2-2-配合-git-使用"><span>1.2.2 配合 git 使用</span></a></h3>
<ul>
<li>和 <code v-pre>git</code> 配合使用，这块我自己没有用，所以没有确切的实际经验，大家可以去 <a href="https://link.juejin.cn/?target=https%3A%2F%2Fprettier.nodejs.cn%2Fdocs%2Fen%2Fprecommit.html" target="_blank" rel="noopener noreferrer">Prettier 中文网</a>看看，或者也可以自己 <a href="https://link.juejin.cn/?target=https%3A%2F%2Fwww.baidu.com%2F" target="_blank" rel="noopener noreferrer">百度</a> 一下哈；</li>
</ul>
<h1 id="二、我自己使用的配置-以及-prettier-常见配置" tabindex="-1"><a class="header-anchor" href="#二、我自己使用的配置-以及-prettier-常见配置"><span>二、我自己使用的配置 以及 Prettier 常见配置</span></a></h1>
<ul>
<li>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">prettier</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>的配置项文件常见的一般都有两种格式：</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">js + json</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>；</p>
<ul>
<li><code v-pre>js</code>后缀的写起来方便一点，不用给属性名添加双引号；</li>
<li><code v-pre>json</code>后缀的写起来比较繁琐，必须严格遵守<code v-pre>json</code>语法；</li>
</ul>
</li>
</ul>
<h2 id="_2-1-我自己使用的配置" tabindex="-1"><a class="header-anchor" href="#_2-1-我自己使用的配置"><span>2.1 我自己使用的配置</span></a></h2>
<h3 id="_2-1-1-prettierrc-js-或-prettierrc-json-配置文件" tabindex="-1"><a class="header-anchor" href="#_2-1-1-prettierrc-js-或-prettierrc-json-配置文件"><span>2.1.1 <code v-pre>.prettierrc.js</code> 或 <code v-pre>.prettierrc.json</code> 配置文件</span></a></h3>
<ul>
<li>我自己使用的配置项：
<ul>
<li>如果配置的是 <code v-pre>json</code> 文件，不需要拷贝 <code v-pre>module.export = </code>，只需要拷贝对象即可；</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">printWidth</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token comment">// 每行代码长度（默认80）</span></span>
<span class="line">    <span class="token literal-property property">tabWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// 每个tab相当于多少个空格（默认2）</span></span>
<span class="line">    <span class="token literal-property property">useTabs</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 是否使用tab进行缩进（默认false）</span></span>
<span class="line">    <span class="token literal-property property">singleQuote</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 使用单引号（默认false）</span></span>
<span class="line">    <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 声明结尾使用分号(默认true)</span></span>
<span class="line">    <span class="token literal-property property">trailingComma</span><span class="token operator">:</span> <span class="token string">'es5'</span><span class="token punctuation">,</span> <span class="token comment">// 多行使用拖尾逗号（默认none）</span></span>
<span class="line">    <span class="token literal-property property">bracketSpacing</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 对象字面量的大括号间使用空格（默认true）</span></span>
<span class="line">    <span class="token literal-property property">jsxBracketSameLine</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 多行JSX中的>放置在最后一行的结尾，而不是另起一行（默认false）</span></span>
<span class="line">    <span class="token literal-property property">arrowParens</span><span class="token operator">:</span> <span class="token string">"avoid"</span><span class="token punctuation">,</span> <span class="token comment">// 只有一个参数的箭头函数的参数是否带圆括号（默认avoid）</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


