<template><div><h1 id="linux指令" tabindex="-1"><a class="header-anchor" href="#linux指令"><span>Linux指令</span></a></h1>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token comment"># 安装pakeage包</span></span>
<span class="line">yum <span class="token function">install</span> package</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 端口扫描</span></span>
<span class="line"><span class="token function">netstat</span> <span class="token parameter variable">-ano</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token number">80</span></span>
<span class="line"><span class="token function">netstat</span> <span class="token parameter variable">-ano</span> <span class="token operator">|</span> findstr <span class="token number">80</span><span class="token punctuation">(</span>windows<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 根据PID结束进程</span></span>
<span class="line"><span class="token function">kill</span> <span class="token operator">&lt;</span>PID<span class="token operator">></span></span>
<span class="line"><span class="token comment"># 根据PID强制结束进程</span></span>
<span class="line"><span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token operator">&lt;</span>PID<span class="token operator">></span> </span>
<span class="line">taskkill /pid <span class="token operator">&lt;</span>PID<span class="token operator">></span> <span class="token punctuation">(</span>/f<span class="token punctuation">)</span><span class="token punctuation">(</span>windows<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


