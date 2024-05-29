<template><div><h3 id="pages-json" tabindex="-1"><a class="header-anchor" href="#pages-json"><span>pages.json</span></a></h3>
<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="line"><span class="token property">"tabBar"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token property">"color"</span><span class="token operator">:</span> <span class="token string">"#7A7E83"</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token property">"selectedColor"</span><span class="token operator">:</span> <span class="token string">"#3cc51f"</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token property">"list"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">			<span class="token punctuation">{</span></span>
<span class="line">				<span class="token property">"pagePath"</span><span class="token operator">:</span> <span class="token string">"pages/index/index"</span><span class="token punctuation">,</span></span>
<span class="line">				<span class="token property">"iconPath"</span><span class="token operator">:</span> <span class="token string">"static/tabs/home_default.png"</span><span class="token punctuation">,</span></span>
<span class="line">				<span class="token property">"selectedIconPath"</span><span class="token operator">:</span> <span class="token string">"static/tabs/home_selected.png"</span><span class="token punctuation">,</span></span>
<span class="line">				<span class="token property">"text"</span><span class="token operator">:</span> <span class="token string">"首页"</span></span>
<span class="line">			<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token punctuation">{</span></span>
<span class="line">				<span class="token property">"pagePath"</span><span class="token operator">:</span> <span class="token string">"pages/category/category"</span><span class="token punctuation">,</span></span>
<span class="line">				<span class="token property">"iconPath"</span><span class="token operator">:</span> <span class="token string">"static/tabs/category_default.png"</span><span class="token punctuation">,</span></span>
<span class="line">				<span class="token property">"selectedIconPath"</span><span class="token operator">:</span> <span class="token string">"static/tabs/category_selected.png"</span><span class="token punctuation">,</span></span>
<span class="line">				<span class="token property">"text"</span><span class="token operator">:</span> <span class="token string">"分类"</span></span>
<span class="line">			<span class="token punctuation">}</span>		</span>
<span class="line">		<span class="token punctuation">]</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="line"><span class="token property">"tabBar"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"color"</span><span class="token operator">:</span> <span class="token string">"#7A7E83"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"selectedColor"</span><span class="token operator">:</span> <span class="token string">"#3cc51f"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"list"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"pagePath"</span><span class="token operator">:</span> <span class="token string">"pages/index/index"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"iconPath"</span><span class="token operator">:</span> <span class="token string">"static/tabs/home_default.png"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"selectedIconPath"</span><span class="token operator">:</span> <span class="token string">"static/tabs/home_selected.png"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"text"</span><span class="token operator">:</span> <span class="token string">"首页"</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"pagePath"</span><span class="token operator">:</span> <span class="token string">"pages/category/category"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"iconPath"</span><span class="token operator">:</span> <span class="token string">"static/tabs/category_default.png"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"selectedIconPath"</span><span class="token operator">:</span> <span class="token string">"static/tabs/category_selected.png"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"text"</span><span class="token operator">:</span> <span class="token string">"分类"</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"pagePath"</span><span class="token operator">:</span> <span class="token string">"pages/cart/cart"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"iconPath"</span><span class="token operator">:</span> <span class="token string">"static/tabs/cart_default.png"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"selectedIconPath"</span><span class="token operator">:</span> <span class="token string">"static/tabs/cart_selected.png"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"text"</span><span class="token operator">:</span> <span class="token string">"购物车"</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"pagePath"</span><span class="token operator">:</span> <span class="token string">"pages/user/user"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"iconPath"</span><span class="token operator">:</span> <span class="token string">"static/tabs/user_default.png"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"selectedIconPath"</span><span class="token operator">:</span> <span class="token string">"static/tabs/user_selected.png"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"text"</span><span class="token operator">:</span> <span class="token string">"我的"</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


