<template><div><h3 id="在vscode下载-live-sass插件" tabindex="-1"><a class="header-anchor" href="#在vscode下载-live-sass插件"><span>在vscode下载 live sass插件</span></a></h3>
<p><strong>配置settings.json</strong></p>
<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"liveSassCompile.settings.generateMap"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"liveSassCompile.settings.autoprefix"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    </span>
<span class="line">    <span class="token string">"> 1%"</span><span class="token punctuation">,</span> <span class="token string">"last 2 versions"</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"liveSassCompile.settings.excludeList"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"**/node_modules/**"</span><span class="token punctuation">,</span> <span class="token string">".vscode/**"</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"liveSassCompile.settings.formats"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"format"</span><span class="token operator">:</span> <span class="token string">"expanded"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"extensionName"</span><span class="token operator">:</span> <span class="token string">".min.css"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"savePath"</span><span class="token operator">:</span> <span class="token string">"~/../css/"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"files.autoSave"</span><span class="token operator">:</span> <span class="token string">"onFocusChange"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"[css]"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"vscode.css-language-features"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"[scss]"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"vscode.css-language-features"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


