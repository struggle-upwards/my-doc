import{_ as n,c as s,o as a,a as e}from"./app-DjAegRR8.js";const t={},p=e(`<h2 id="使用vite构建-npm-create-vite" tabindex="-1"><a class="header-anchor" href="#使用vite构建-npm-create-vite"><span>使用vite构建(npm create vite)</span></a></h2><h3 id="vite-config-ts" tabindex="-1"><a class="header-anchor" href="#vite-config-ts"><span>vite.config.ts</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 配置项目别名</span></span>
<span class="line">  resolve<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    alias<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">&#39;@&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;src&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tsconfig-json" tabindex="-1"><a class="header-anchor" href="#tsconfig-json"><span>tsconfig.json</span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="line"><span class="token comment">//配置 @</span></span>
<span class="line"><span class="token property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token property">&quot;@/*&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;src/*&quot;</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用vue3脚手架构建-npm-init-vue" tabindex="-1"><a class="header-anchor" href="#使用vue3脚手架构建-npm-init-vue"><span>使用vue3脚手架构建(npm init vue)</span></a></h2><h3 id="jsconfig-json" tabindex="-1"><a class="header-anchor" href="#jsconfig-json"><span>jsconfig.json</span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;@/*&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;./src/*&quot;</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;node_modules&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),i=[p];function o(l,c){return a(),s("div",null,i)}const r=n(t,[["render",o],["__file","vue3中配置@别名.html.vue"]]),d=JSON.parse('{"path":"/note/Vue/vue-router/vue3%E4%B8%AD%E9%85%8D%E7%BD%AE@%E5%88%AB%E5%90%8D.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"使用vite构建(npm create vite)","slug":"使用vite构建-npm-create-vite","link":"#使用vite构建-npm-create-vite","children":[{"level":3,"title":"vite.config.ts","slug":"vite-config-ts","link":"#vite-config-ts","children":[]},{"level":3,"title":"tsconfig.json","slug":"tsconfig-json","link":"#tsconfig-json","children":[]}]},{"level":2,"title":"使用vue3脚手架构建(npm init vue)","slug":"使用vue3脚手架构建-npm-init-vue","link":"#使用vue3脚手架构建-npm-init-vue","children":[{"level":3,"title":"jsconfig.json","slug":"jsconfig-json","link":"#jsconfig-json","children":[]}]}],"git":{},"filePathRelative":"note/Vue/vue-router/vue3中配置@别名.md"}');export{r as comp,d as data};
