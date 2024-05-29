<template><div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">--name</span> opengauss <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token parameter variable">-p</span> <span class="token number">5432</span>:5432 <span class="token parameter variable">-d</span> <span class="token parameter variable">-e</span> <span class="token assign-left variable">GS_PASSWORD</span><span class="token operator">=</span>Euler@1234 enmotech/opengauss:3.0.0</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


