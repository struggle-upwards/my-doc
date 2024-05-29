<template><div><h1 id="gorm多态关联" tabindex="-1"><a class="header-anchor" href="#gorm多态关联"><span>gorm多态关联</span></a></h1>
<div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre v-pre class="language-go"><code><span class="line"><span class="token keyword">package</span> main</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token string">"gorm.io/gorm"</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> OUser <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">    gorm<span class="token punctuation">.</span>Model</span>
<span class="line">    Name    <span class="token builtin">string</span></span>
<span class="line">    Address Address <span class="token string">`gorm:"polymorphic:Address"`</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">type</span> Order <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">    gorm<span class="token punctuation">.</span>Model</span>
<span class="line">    Name    <span class="token builtin">string</span></span>
<span class="line">    Address Address <span class="token string">`gorm:"polymorphic:Address"`</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">type</span> Address <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">    ID          <span class="token builtin">int</span> <span class="token string">`gorm:"primaryKey"`</span></span>
<span class="line">    Location    <span class="token builtin">string</span></span>
<span class="line">    AddressID   <span class="token builtin">int</span></span>
<span class="line">    AddressType <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">Polymorphic</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    DB<span class="token punctuation">.</span><span class="token function">AutoMigrate</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>OUser<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>Order<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>Address<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 创建实例</span></span>
<span class="line">    <span class="token comment">//ouser := OUser{Name: "pzj", Address: Address{Location: "location1"}}</span></span>
<span class="line">    <span class="token comment">//order := Order{Name: "订单一号", Address: Address{Location: "location2"}}</span></span>
<span class="line">    <span class="token comment">//DB.Create(&amp;ouser)</span></span>
<span class="line">    <span class="token comment">//DB.Create(&amp;order)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 查找实例</span></span>
<span class="line">    <span class="token keyword">var</span> order Order</span>
<span class="line">    DB<span class="token punctuation">.</span><span class="token function">Preload</span><span class="token punctuation">(</span><span class="token string">"Address"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Find</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>order<span class="token punctuation">,</span> <span class="token string">"id = 2"</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token function">formatPrint</span><span class="token punctuation">(</span>order<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


