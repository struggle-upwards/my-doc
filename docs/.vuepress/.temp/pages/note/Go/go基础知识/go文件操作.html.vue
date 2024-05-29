<template><div><h1 id="go文件操作" tabindex="-1"><a class="header-anchor" href="#go文件操作"><span>go文件操作</span></a></h1>
<div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre v-pre class="language-go"><code><span class="line"><span class="token keyword">package</span> main</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">(</span></span>
<span class="line">	<span class="token string">"fmt"</span></span>
<span class="line">	<span class="token string">"os"</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">// 创建文件</span></span>
<span class="line">	f<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token string">"file/文件.txt"</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> err<span class="token punctuation">)</span>   <span class="token comment">// &amp;{0xc00007ca08} &lt;nil></span></span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%T\n"</span><span class="token punctuation">,</span> f<span class="token punctuation">)</span> <span class="token comment">// *os.File</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span></span>
<span class="line">		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"文件创建失败"</span><span class="token punctuation">)</span></span>
<span class="line">		<span class="token keyword">return</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 写文件</span></span>
<span class="line">	wLength1<span class="token punctuation">,</span> err1 <span class="token operator">:=</span> f<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">"hello\n"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 转换成字节切片写入</span></span>
<span class="line">	wLength2<span class="token punctuation">,</span> err2 <span class="token operator">:=</span> f<span class="token punctuation">.</span><span class="token function">WriteString</span><span class="token punctuation">(</span><span class="token string">"world\n"</span><span class="token punctuation">)</span>   <span class="token comment">// 字符串写入</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">if</span> err1 <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">||</span> err2 <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span></span>
<span class="line">		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"无法写入文件"</span><span class="token punctuation">)</span></span>
<span class="line">		<span class="token keyword">return</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"wLength1写入字符串的长度为:"</span><span class="token punctuation">,</span> wLength1<span class="token punctuation">)</span> <span class="token comment">// wLength1写入字符串的长度为: 6</span></span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"wLength2写入字符串的长度为:"</span><span class="token punctuation">,</span> wLength2<span class="token punctuation">)</span> <span class="token comment">// wLength2写入字符串的长度为: 6</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 关闭文件对象</span></span>
<span class="line">	<span class="token boolean">_</span> <span class="token operator">=</span> f<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token comment">// 读文件</span></span>
<span class="line">	f<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">"file/文件.txt"</span><span class="token punctuation">)</span></span>
<span class="line">	buffer <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token punctuation">)</span> <span class="token comment">// 通过byte切片读取文件内容</span></span>
<span class="line">	rLength<span class="token punctuation">,</span> err3 <span class="token operator">:=</span> f<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">if</span> err3 <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span></span>
<span class="line">		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"无法读取文件"</span><span class="token punctuation">)</span></span>
<span class="line">		<span class="token keyword">return</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"读取的文件长度为:"</span><span class="token punctuation">,</span> rLength<span class="token punctuation">)</span></span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"读取的文件内容为:"</span><span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	<span class="token boolean">_</span> <span class="token operator">=</span> f<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


