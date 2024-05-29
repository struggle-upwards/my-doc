import{_ as n,c as s,o as a,a as e}from"./app-DjAegRR8.js";const t={},p=e(`<h1 id="滚动行为" tabindex="-1"><a class="header-anchor" href="#滚动行为"><span>滚动行为</span></a></h1><p>使用前端路由，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样。 vue-router 能做到，而且更好，它让你可以自定义路由切换时页面如何滚动。</p><p><strong>注意: 这个功能只在支持 history.pushState 的浏览器中可用。</strong></p><p>当创建一个 Router 实例，你可以提供一个 <code>scrollBehavior</code> 方法：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHashHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">scrollBehavior</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> savedPosition</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// return 期望滚动到哪个的位置</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>scrollBehavior</code> 函数接收 <code>to</code>和<code> from</code> 路由对象，如 <a href="https://router.vuejs.org/zh/guide/advanced/navigation-guards" target="_blank" rel="noopener noreferrer">Navigation Guards</a>。第三个参数 <code>savedPosition</code>，只有当这是一个 <code>popstate</code> 导航时才可用（由浏览器的后退/前进按钮触发）。</p><p>该函数可以返回一个 <a href="https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions" target="_blank" rel="noopener noreferrer"><code>ScrollToOptions</code></a> 位置对象:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">scrollBehavior</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> savedPosition</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 始终滚动到顶部</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[p];function c(l,r){return a(),s("div",null,o)}const u=n(t,[["render",c],["__file","vue3中滚动行为scrollBehavior.html.vue"]]),d=JSON.parse('{"path":"/note/Vue/vue-router/vue3%E4%B8%AD%E6%BB%9A%E5%8A%A8%E8%A1%8C%E4%B8%BAscrollBehavior.html","title":"滚动行为","lang":"zh-CN","frontmatter":{},"headers":[],"git":{},"filePathRelative":"note/Vue/vue-router/vue3中滚动行为scrollBehavior.md"}');export{u as comp,d as data};
