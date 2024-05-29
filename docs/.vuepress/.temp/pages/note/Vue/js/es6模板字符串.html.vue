<template><div><h1 id="es6模板字符串" tabindex="-1"><a class="header-anchor" href="#es6模板字符串"><span>es6模板字符串</span></a></h1>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">str <span class="token operator">=</span> <span class="token string">"hello world"</span> <span class="token operator">+</span> <span class="token string">" "</span> <span class="token operator">+</span> a</span>
<span class="line">str2 <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">hello world </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>a<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>结果</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">hello world  <span class="token number">1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


