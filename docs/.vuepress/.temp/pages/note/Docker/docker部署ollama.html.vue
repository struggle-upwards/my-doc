<template><div><h1 id="docker-部署ollama" tabindex="-1"><a class="header-anchor" href="#docker-部署ollama"><span>docker 部署ollama</span></a></h1>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line">ollama run llama3</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token comment"># 拉取镜像</span></span>
<span class="line"><span class="token function">docker</span> pull ghcr.io/open-webui/open-webui:main</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">3000</span>:8080 --add-host<span class="token operator">=</span>host.docker.internal:host-gateway <span class="token parameter variable">-v</span> open-webui:/app/backend/data <span class="token parameter variable">--name</span> open-webui <span class="token parameter variable">--restart</span> always ghcr.io/open-webui/open-webui:main</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


