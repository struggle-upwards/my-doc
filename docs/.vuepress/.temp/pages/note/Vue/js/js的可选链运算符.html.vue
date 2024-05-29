<template><div><h1 id="js的可选链运算符" tabindex="-1"><a class="header-anchor" href="#js的可选链运算符"><span>js的可选链运算符  ?.</span></a></h1>
<p><strong>可选链运算符</strong>（<strong><code v-pre>?.</code></strong>）允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效。<code v-pre>?.</code> 运算符的功能类似于 <code v-pre>.</code> 链式运算符，不同之处在于，在引用为<strong>null</strong>或者<strong>undefined</strong>的情况下不会引起错误，该表达式短路返回值是 <code v-pre>undefined</code>。与函数调用一起使用时，如果给定的函数不存在，则返回 <code v-pre>undefined</code>。</p>
<p>当尝试访问可能不存在的对象属性时，可选链运算符将会使表达式更短、更简明。在探索一个对象的内容时，如果不能确定哪些属性必定存在，可选链运算符也是很有帮助的。</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> adventurer <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Alice'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">cat</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Dinah'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> dogName <span class="token operator">=</span> adventurer<span class="token punctuation">.</span>dog<span class="token operator">?.</span>name<span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dogName<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Expected output: undefined</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>adventurer<span class="token punctuation">.</span>someNonExistentMethod<span class="token operator">?.</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Expected output: undefined</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


