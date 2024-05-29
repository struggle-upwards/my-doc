<template><div><h2 id="伪类有哪些" tabindex="-1"><a class="header-anchor" href="#伪类有哪些"><span>伪类有哪些？</span></a></h2>
<p>按照功能，可划分为以下几类：</p>
<ul>
<li>动态伪类：<code v-pre>:visited</code>、<code v-pre>:focus</code>、<code v-pre>:hover</code>等</li>
<li>状态伪类：<code v-pre>:disabled</code>、<code v-pre>:empty</code>、<code v-pre>:required</code> 等</li>
<li>结构伪类：<code v-pre>:first-child</code>、<code v-pre>:nth-of-type</code>等</li>
<li>其他伪类：<code v-pre>:target</code>、<code v-pre>:lang</code>、<code v-pre>:not()</code>等</li>
</ul>
<p>下面的表格详细记录了各种伪类及其描述：</p>
<table>
<thead>
<tr>
<th><strong>伪类</strong></th>
<th><strong>描述</strong></th>
<th><strong>兼容性</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>:active</code></td>
<td>元素处于活动状态时</td>
<td><a href="https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Aactive" target="_blank" rel="noopener noreferrer">✅</a></td>
</tr>
<tr>
<td><code v-pre>:focus</code></td>
<td>元素已获取焦点时</td>
<td><a href="https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Afocus" target="_blank" rel="noopener noreferrer">✅</a></td>
</tr>
<tr>
<td><code v-pre>:hover</code></td>
<td>元素处于悬浮状态时</td>
<td><a href="https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Ahover" target="_blank" rel="noopener noreferrer">✅</a></td>
</tr>
<tr>
<td><code v-pre>:link</code></td>
<td>链接未访问时</td>
<td><a href="https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Alink" target="_blank" rel="noopener noreferrer">✅</a></td>
</tr>
<tr>
<td><code v-pre>:visited</code></td>
<td>链接已访问时</td>
<td><a href="https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Avisited" target="_blank" rel="noopener noreferrer">✅</a></td>
</tr>
<tr>
<td><code v-pre>:first-child</code></td>
<td>元素是首个子元素时</td>
<td><a href="https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Afirst-child" target="_blank" rel="noopener noreferrer">✅</a></td>
</tr>
<tr>
<td><code v-pre>:last-child</code></td>
<td>元素是最后一个子元素时</td>
<td><a href="https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Alast-child" target="_blank" rel="noopener noreferrer">✅</a></td>
</tr>
<tr>
<td><code v-pre>:nth-child()</code></td>
<td>元素是第 n 个子元素时</td>
<td><a href="https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Anth-child" target="_blank" rel="noopener noreferrer">✅</a></td>
</tr>
<tr>
<td><code v-pre>:nth-last-child()</code></td>
<td>元素是倒数第 n 个子元素时</td>
<td><a href="https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Anth-last-child" target="_blank" rel="noopener noreferrer">✅</a></td>
</tr>
<tr>
<td><code v-pre>:only-child</code></td>
<td>元素是唯一子元素时</td>
<td><a href="https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Aonly-child" target="_blank" rel="noopener noreferrer">✅</a></td>
</tr>
<tr>
<td><code v-pre>:first-of-type</code></td>
<td>元素是首个特定类型的子元素时</td>
<td><a href="https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Afirst-of-type" target="_blank" rel="noopener noreferrer">✅</a></td>
</tr>
<tr>
<td><code v-pre>:last-of-type</code></td>
<td>元素是最后一个特定类型的子元素时</td>
<td><a href="https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Alast-of-type" target="_blank" rel="noopener noreferrer">✅</a></td>
</tr>
<tr>
<td><code v-pre>:nth-of-type()</code></td>
<td>元素是第 n 个特定类型的子元素时</td>
<td><a href="https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Anth-of-type" target="_blank" rel="noopener noreferrer">✅</a></td>
</tr>
<tr>
<td><code v-pre>:nth-last-of-type()</code></td>
<td>元素是倒数第 n 个特定类型的子元素时</td>
<td><a href="https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Anth-last-of-type" target="_blank" rel="noopener noreferrer">✅</a></td>
</tr>
<tr>
<td><code v-pre>:only-of-type</code></td>
<td>元素是唯一的特定类型的子元素时</td>
<td><a href="https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Aonly-of-type" target="_blank" rel="noopener noreferrer">✅</a></td>
</tr>
<tr>
<td><code v-pre>:not</code></td>
<td>不满足指定条件时</td>
<td><a href="https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Anot" target="_blank" rel="noopener noreferrer">✅</a></td>
</tr>
<tr>
<td><code v-pre>:target</code></td>
<td>元素 id 匹配到哈希值时</td>
<td><a href="https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Atarget" target="_blank" rel="noopener noreferrer">✅</a></td>
</tr>
<tr>
<td><code v-pre>:root</code></td>
<td>元素是文档树的根元素时</td>
<td><a href="https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Aroot" target="_blank" rel="noopener noreferrer">✅</a></td>
</tr>
<tr>
<td><code v-pre>:lang()</code></td>
<td>匹配到指定语言时</td>
<td><a href="https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Alang" target="_blank" rel="noopener noreferrer">✅</a></td>
</tr>
<tr>
<td><code v-pre>:empty</code></td>
<td>元素处于没有子元素状态时</td>
<td><a href="https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Aempty" target="_blank" rel="noopener noreferrer">✅</a></td>
</tr>
<tr>
<td><code v-pre>:invalid</code> 和 <code v-pre>:valid</code></td>
<td>表单项是否有效</td>
<td><a href="https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Avalid" target="_blank" rel="noopener noreferrer">✅</a></td>
</tr>
<tr>
<td><code v-pre>:required</code> 和 <code v-pre>:optional</code></td>
<td>表单项是否必填</td>
<td><a href="https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Arequired" target="_blank" rel="noopener noreferrer">✅</a></td>
</tr>
<tr>
<td><code v-pre>:in-range</code>和 <code v-pre>:out-of-range</code></td>
<td>表单项是否超出范围</td>
<td><a href="https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Ain-range" target="_blank" rel="noopener noreferrer">✅</a></td>
</tr>
<tr>
<td><code v-pre>:read-only</code>和 <code v-pre>:read-write</code></td>
<td>表单项是否只读</td>
<td><a href="https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Aread-only" target="_blank" rel="noopener noreferrer">✅</a></td>
</tr>
<tr>
<td><code v-pre>:enabled</code>和 <code v-pre>:disabled</code></td>
<td>表单项是否禁用</td>
<td><a href="https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Aenabled" target="_blank" rel="noopener noreferrer">✅</a></td>
</tr>
<tr>
<td><code v-pre>:fullscreen</code></td>
<td>当前处于全屏显示模式时</td>
<td><a href="https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Afullscreen" target="_blank" rel="noopener noreferrer">⚠️</a></td>
</tr>
<tr>
<td><code v-pre>:blank</code></td>
<td>输入框处于输入为空状态时</td>
<td>❌</td>
</tr>
<tr>
<td><code v-pre>:dir()</code></td>
<td>匹配到特定文字书写方向时</td>
<td><a href="https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Adir" target="_blank" rel="noopener noreferrer">❌</a></td>
</tr>
</tbody>
</table>
<p>上表中的兼容性表示：</p>
<ul>
<li><a href="https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Aactive" target="_blank" rel="noopener noreferrer">✅</a> 代表主流浏览器都支持（至少 95% 以上）</li>
<li><a href="https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Anth-child" target="_blank" rel="noopener noreferrer">❌</a> 代表大部分主浏览器都不支持（仅 20% 以下浏览器实现该特性）</li>
<li>⚠️ 代表部分浏览器支持（可能需要加前缀，例如 <code v-pre>:webkit-</code>或 <code v-pre>:-moz-</code>等）</li>
</ul>
<h2 id="伪元素有哪些" tabindex="-1"><a class="header-anchor" href="#伪元素有哪些"><span>伪元素有哪些？</span></a></h2>
<p>与伪类相比，<a href="https://link.juejin.cn?target=https%3A%2F%2Fdrafts.csswg.org%2Fcss-pseudo%2F" target="_blank" rel="noopener noreferrer">伪元素</a>就少很多了，常用的如下：</p>
<table>
<thead>
<tr>
<th><strong>伪元素</strong></th>
<th><strong>选中或创建出来的元素</strong></th>
<th><strong>兼容性</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>::first-letter</code></td>
<td>选中块状元素中的首字母</td>
<td><a href="https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3A%3Afirst-letter" target="_blank" rel="noopener noreferrer">✅</a></td>
</tr>
<tr>
<td><code v-pre>::first-line</code></td>
<td>选中首行</td>
<td><a href="https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3A%3Afirst-line" target="_blank" rel="noopener noreferrer">✅</a></td>
</tr>
<tr>
<td><code v-pre>::before</code></td>
<td>在之前创建一个不在文档树中的元素</td>
<td><a href="https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3A%3Abefore" target="_blank" rel="noopener noreferrer">✅</a></td>
</tr>
<tr>
<td><code v-pre>::after</code></td>
<td>在之后创建一个不在文档树中的元素</td>
<td><a href="https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3A%3Aafter" target="_blank" rel="noopener noreferrer">✅</a></td>
</tr>
<tr>
<td><code v-pre>::placeholder</code></td>
<td>选中表单元素的占位文本</td>
<td><a href="https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3A%3Aplaceholder" target="_blank" rel="noopener noreferrer">✅</a></td>
</tr>
<tr>
<td><code v-pre>::file-selector-button</code></td>
<td>选中类型为 file 的 input 里面的 button</td>
<td><a href="https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3A%3Afile-selector-button" target="_blank" rel="noopener noreferrer">✅</a></td>
</tr>
<tr>
<td><code v-pre>::selection</code></td>
<td>选中被用户高亮的部分</td>
<td><a href="https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3A%3Aselection" target="_blank" rel="noopener noreferrer">⚠️</a></td>
</tr>
<tr>
<td><code v-pre>::backdrop</code></td>
<td>选中视觉聚焦元素后面的背景元素</td>
<td><a href="https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3A%3Abackdrop" target="_blank" rel="noopener noreferrer">⚠️</a></td>
</tr>
<tr>
<td><code v-pre>::marker</code></td>
<td>选中 list 的 marker</td>
<td><a href="https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3A%3Amarker" target="_blank" rel="noopener noreferrer">⚠️</a></td>
</tr>
</tbody>
</table>
</div></template>


