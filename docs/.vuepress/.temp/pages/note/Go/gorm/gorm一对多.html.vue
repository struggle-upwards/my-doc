<template><div><h1 id="gorm一对多" tabindex="-1"><a class="header-anchor" href="#gorm一对多"><span>gorm一对多</span></a></h1>
<div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre v-pre class="language-go"><code><span class="line"><span class="token keyword">package</span> main</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">(</span></span>
<span class="line">	<span class="token string">"fmt"</span></span>
<span class="line">	<span class="token string">"gorm.io/gorm"</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> GGirlGod <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	gorm<span class="token punctuation">.</span>Model</span>
<span class="line">	Name <span class="token builtin">string</span></span>
<span class="line">	Dogs <span class="token punctuation">[</span><span class="token punctuation">]</span>Dogs</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">type</span> Dogs <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	gorm<span class="token punctuation">.</span>Model</span>
<span class="line">	Name       <span class="token builtin">string</span></span>
<span class="line">	Info       Info</span>
<span class="line">	GGirlGodID <span class="token builtin">int</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">type</span> Info <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	Money  <span class="token builtin">int</span></span>
<span class="line">	DogsID <span class="token builtin">int</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">HasMany</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	DB<span class="token punctuation">.</span><span class="token function">AutoMigrate</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>Dogs<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>GGirlGod<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>Info<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">	d1 <span class="token operator">:=</span> Dogs<span class="token punctuation">{</span></span>
<span class="line">		Name<span class="token punctuation">:</span> <span class="token string">"Dog1"</span><span class="token punctuation">,</span></span>
<span class="line">		Info<span class="token punctuation">:</span> Info<span class="token punctuation">{</span></span>
<span class="line">			Money<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	d2 <span class="token operator">:=</span> Dogs<span class="token punctuation">{</span></span>
<span class="line">		Name<span class="token punctuation">:</span> <span class="token string">"Dog2"</span><span class="token punctuation">,</span></span>
<span class="line">		Info<span class="token punctuation">:</span> Info<span class="token punctuation">{</span></span>
<span class="line">			Money<span class="token punctuation">:</span> <span class="token number">20000</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	g1 <span class="token operator">:=</span> GGirlGod<span class="token punctuation">{</span></span>
<span class="line">		Name<span class="token punctuation">:</span> <span class="token string">"G1"</span><span class="token punctuation">,</span></span>
<span class="line">		Dogs<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>Dogs<span class="token punctuation">{</span>d1<span class="token punctuation">,</span> d2<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token comment">// 创建实例</span></span>
<span class="line">	DB<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>g1<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 查找G1的舔狗+钱包</span></span>
<span class="line">	<span class="token keyword">var</span> g GGirlGod</span>
<span class="line">	DB<span class="token punctuation">.</span><span class="token function">Preload</span><span class="token punctuation">(</span><span class="token string">"Dogs.Info"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">First</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>g<span class="token punctuation">)</span></span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"查找G1的舔狗+钱包"</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token function">formatPrint</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 查看G1的舔狗(只含舔狗)</span></span>
<span class="line">	<span class="token keyword">var</span> dogs <span class="token punctuation">[</span><span class="token punctuation">]</span>Dogs</span>
<span class="line">	<span class="token keyword">var</span> girl <span class="token operator">=</span> GGirlGod<span class="token punctuation">{</span>Model<span class="token punctuation">:</span> gorm<span class="token punctuation">.</span>Model<span class="token punctuation">{</span>ID<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">	DB<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>girl<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Preload</span><span class="token punctuation">(</span><span class="token string">"Info"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Association</span><span class="token punctuation">(</span><span class="token string">"Dogs"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Find</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>dogs<span class="token punctuation">)</span></span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"查看G1的舔狗(只含舔狗)"</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token function">formatPrint</span><span class="token punctuation">(</span>dogs<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 查看G1的舔狗--钱包余额大于200元的(使用Joins筛除不符合要求舔狗)</span></span>
<span class="line">	<span class="token keyword">var</span> gg GGirlGod</span>
<span class="line">	DB<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>girl<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Preload</span><span class="token punctuation">(</span><span class="token string">"Dogs"</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>db <span class="token operator">*</span>gorm<span class="token punctuation">.</span>DB<span class="token punctuation">)</span> <span class="token operator">*</span>gorm<span class="token punctuation">.</span>DB <span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">return</span> db<span class="token punctuation">.</span><span class="token function">Joins</span><span class="token punctuation">(</span><span class="token string">"Info"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">"money > ?"</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Find</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>gg<span class="token punctuation">)</span></span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"查看G1的舔狗--钱包余额大于200元的"</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token function">formatPrint</span><span class="token punctuation">(</span>gg<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 查看G1的舔狗--钱包余额大于200元的(包含不符合要求舔狗,钱包置0)</span></span>
<span class="line">	<span class="token keyword">var</span> ggg GGirlGod</span>
<span class="line">	DB<span class="token punctuation">.</span><span class="token function">Preload</span><span class="token punctuation">(</span><span class="token string">"Dogs.Info"</span><span class="token punctuation">,</span> <span class="token string">"money > ?"</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">First</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>ggg<span class="token punctuation">)</span></span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"查看G1的舔狗--钱包余额大于200元的"</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token function">formatPrint</span><span class="token punctuation">(</span>ggg<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 查看G1的舔狗--钱包余额大于200元的(只含舔狗)</span></span>
<span class="line">	<span class="token keyword">var</span> dogs1 <span class="token punctuation">[</span><span class="token punctuation">]</span>Dogs</span>
<span class="line">	DB<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>girl<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Preload</span><span class="token punctuation">(</span><span class="token string">"Info"</span><span class="token punctuation">,</span> <span class="token string">"money > ?"</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Association</span><span class="token punctuation">(</span><span class="token string">"Dogs"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Find</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>dogs1<span class="token punctuation">)</span></span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"查看G1的舔狗--钱包余额大于200元的(只含舔狗)"</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token function">formatPrint</span><span class="token punctuation">(</span>dogs1<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


