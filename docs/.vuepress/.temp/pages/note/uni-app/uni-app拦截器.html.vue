<template><div><h1 id="uni-app拦截器" tabindex="-1"><a class="header-anchor" href="#uni-app拦截器"><span>uni-app拦截器</span></a></h1>
<h3 id="配置uni-request的拦截器" tabindex="-1"><a class="header-anchor" href="#配置uni-request的拦截器"><span>配置uni.request的拦截器</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useMemberStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../stores/modules/useMemberStore"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 设置请求基地址</span></span>
<span class="line"><span class="token keyword">const</span> baseUrl <span class="token operator">=</span> <span class="token string">"https://pcapi-xiaotuxian-front-devtest.itheima.net"</span></span>
<span class="line"></span>
<span class="line">uni<span class="token punctuation">.</span><span class="token function">addInterceptor</span><span class="token punctuation">(</span><span class="token string">'request'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">invoke</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// request 触发前拼接 url </span></span>
<span class="line">        options<span class="token punctuation">.</span>url <span class="token operator">=</span> baseUrl <span class="token operator">+</span> options<span class="token punctuation">.</span>url</span>
<span class="line"></span>
<span class="line">        <span class="token comment">// request 添加请求头</span></span>
<span class="line">        options<span class="token punctuation">.</span>header <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token operator">...</span>options<span class="token punctuation">.</span>header<span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">'source-client'</span><span class="token operator">:</span> <span class="token string">'miniapp'</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//  设置请求超时时间(10秒)</span></span>
<span class="line">        options<span class="token punctuation">.</span>timeout <span class="token operator">=</span> <span class="token number">10000</span></span>
<span class="line">        <span class="token comment">// 添加 token 请求头标识(用户认证)</span></span>
<span class="line">        <span class="token keyword">const</span> memberStore <span class="token operator">=</span> <span class="token function">useMemberStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">const</span> token <span class="token operator">=</span> memberStore<span class="token punctuation">.</span>profile<span class="token operator">?.</span>token</span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            options<span class="token punctuation">.</span>header<span class="token punctuation">.</span>Authorization <span class="token operator">=</span> token</span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="请求页面" tabindex="-1"><a class="header-anchor" href="#请求页面"><span>请求页面</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token string">'@/utils/http.js'</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">uni<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"/home/banner"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'get'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">distributionSite</span><span class="token operator">:</span> <span class="token number">1</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    bannerList<span class="token punctuation">.</span>value <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>result</span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>result<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>options 参数说明</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">参数名</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">必填</th>
<th style="text-align:left">默认值</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">平台差异说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">url</td>
<td style="text-align:left">String</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
<td style="text-align:left">开发者服务器接口地址</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">data</td>
<td style="text-align:left">Object/String/ArrayBuffer</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">请求的参数</td>
<td style="text-align:left">App 3.3.7 以下不支持 ArrayBuffer 类型</td>
</tr>
<tr>
<td style="text-align:left">header</td>
<td style="text-align:left">Object</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">设置请求的 header，header 中不能设置 Referer</td>
<td style="text-align:left">App、H5端会自动带上cookie，且H5端不可手动修改</td>
</tr>
<tr>
<td style="text-align:left">method</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">GET</td>
<td style="text-align:left">有效值详见下方说明</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">timeout</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">否</td>
<td style="text-align:left">60000</td>
<td style="text-align:left">超时时间，单位 ms</td>
<td style="text-align:left">H5(HBuilderX 2.9.9+)、APP(HBuilderX 2.9.9+)、微信小程序（2.10.0）、支付宝小程序</td>
</tr>
<tr>
<td style="text-align:left">dataType</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">json</td>
<td style="text-align:left">如果设为 json，会对返回的数据进行一次 JSON.parse，非 json 不会进行 JSON.parse</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">responseType</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">text</td>
<td style="text-align:left">设置响应的数据类型。合法值：text、arraybuffer</td>
<td style="text-align:left">支付宝小程序不支持</td>
</tr>
<tr>
<td style="text-align:left">sslVerify</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">否</td>
<td style="text-align:left">true</td>
<td style="text-align:left">验证 ssl 证书</td>
<td style="text-align:left">仅App安卓端支持（HBuilderX 2.3.3+），不支持离线打包</td>
</tr>
<tr>
<td style="text-align:left">withCredentials</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">否</td>
<td style="text-align:left">false</td>
<td style="text-align:left">跨域请求时是否携带凭证（cookies）</td>
<td style="text-align:left">仅H5支持（HBuilderX 2.6.15+）</td>
</tr>
<tr>
<td style="text-align:left">firstIpv4</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">否</td>
<td style="text-align:left">false</td>
<td style="text-align:left">DNS解析时优先使用ipv4</td>
<td style="text-align:left">仅 App-Android 支持 (HBuilderX 2.8.0+)</td>
</tr>
<tr>
<td style="text-align:left">enableHttp2</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">否</td>
<td style="text-align:left">false</td>
<td style="text-align:left">开启 http2</td>
<td style="text-align:left">微信小程序</td>
</tr>
<tr>
<td style="text-align:left">enableQuic</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">否</td>
<td style="text-align:left">false</td>
<td style="text-align:left">开启 quic</td>
<td style="text-align:left">微信小程序</td>
</tr>
<tr>
<td style="text-align:left">enableCache</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">否</td>
<td style="text-align:left">false</td>
<td style="text-align:left">开启 cache</td>
<td style="text-align:left">微信小程序、抖音小程序 2.31.0+</td>
</tr>
<tr>
<td style="text-align:left">enableHttpDNS</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">否</td>
<td style="text-align:left">false</td>
<td style="text-align:left">是否开启 HttpDNS 服务。如开启，需要同时填入 httpDNSServiceId 。 HttpDNS 用法详见 <a href="https://developers.weixin.qq.com/miniprogram/dev/framework/ability/HTTPDNS.html" target="_blank" rel="noopener noreferrer">移动解析HttpDNS</a></td>
<td style="text-align:left">微信小程序</td>
</tr>
<tr>
<td style="text-align:left">httpDNSServiceId</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">HttpDNS 服务商 Id。 HttpDNS 用法详见 <a href="https://developers.weixin.qq.com/miniprogram/dev/framework/ability/HTTPDNS.html" target="_blank" rel="noopener noreferrer">移动解析HttpDNS</a></td>
<td style="text-align:left">微信小程序</td>
</tr>
<tr>
<td style="text-align:left">enableChunked</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">否</td>
<td style="text-align:left">false</td>
<td style="text-align:left">开启 transfer-encoding chunked</td>
<td style="text-align:left">微信小程序</td>
</tr>
<tr>
<td style="text-align:left">forceCellularNetwork</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">否</td>
<td style="text-align:left">false</td>
<td style="text-align:left">wifi下使用移动网络发送请求</td>
<td style="text-align:left">微信小程序</td>
</tr>
<tr>
<td style="text-align:left">enableCookie</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">否</td>
<td style="text-align:left">false</td>
<td style="text-align:left">开启后可在headers中编辑cookie</td>
<td style="text-align:left">支付宝小程序 10.2.33+</td>
</tr>
<tr>
<td style="text-align:left">cloudCache</td>
<td style="text-align:left">Object/Boolean</td>
<td style="text-align:left">否</td>
<td style="text-align:left">false</td>
<td style="text-align:left">是否开启云加速（详见<a href="https://smartprogram.baidu.com/docs/develop/extended/component-codeless/cloud-speed/introduction/" target="_blank" rel="noopener noreferrer">云加速服务</a>）</td>
<td style="text-align:left">百度小程序 3.310.11+</td>
</tr>
<tr>
<td style="text-align:left">defer</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">否</td>
<td style="text-align:left">false</td>
<td style="text-align:left">控制当前请求是否延时至首屏内容渲染后发送</td>
<td style="text-align:left">百度小程序 3.310.11+</td>
</tr>
<tr>
<td style="text-align:left">success</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">收到开发者服务器成功返回的回调函数</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">fail</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">接口调用失败的回调函数</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">complete</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">接口调用结束的回调函数（调用成功、失败都会执行）</td>
<td style="text-align:left"></td>
</tr>
</tbody>
</table>
</div></template>


