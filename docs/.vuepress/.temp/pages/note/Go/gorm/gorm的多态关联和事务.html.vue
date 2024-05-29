<template><div><h1 id="gorm学习-五-进阶-多态关联、关联标签以及事务" tabindex="-1"><a class="header-anchor" href="#gorm学习-五-进阶-多态关联、关联标签以及事务"><span>Gorm学习（五）进阶：多态关联、关联标签以及事务</span></a></h1>
<h4 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h4>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2>
<blockquote>
<p>感谢开源项目，以及 本人学识尚浅，如有错误，请评论指出，谢谢！ 详细可见个人博客：</p>
</blockquote>
<h2 id="一、多态关联" tabindex="-1"><a class="header-anchor" href="#一、多态关联"><span>一、多态关联</span></a></h2>
<h3 id="_1、多态关联概述" tabindex="-1"><a class="header-anchor" href="#_1、多态关联概述"><span>1、多态关联概述</span></a></h3>
<p>什么是多态？</p>
<p>多态的概念：通俗来说，就是多种形态，具体点就是去完成某个行为，当不同的对象去完成时会产生出不同的状态。</p>
<p>什么是多态表？ 假设我们有一张地址表，其中的地址可能是来自User中的，也可能是来自Orders中的。而区分不同的对象则用type字段。如：type=User时对象是文章表。</p>
<img src="C:/Users/pzj/Desktop/university code/code_resourse/NoteBook/cloud-imgs/c9e6b9ae62cc46ec98e16cc1b551a15f-1716901678047-1.png" alt="在这里插入图片描述">
<h3 id="_2、为什么用多态关联" tabindex="-1"><a class="header-anchor" href="#_2、为什么用多态关联"><span>2、为什么用多态关联？</span></a></h3>
<p>出现需要外键引用多个表的情况，不可能删除原来表结构，重新添加一个外键ID再建表，所以我们可以建立一个交叉表。让Addres不再依赖于User表或者Order表。 <img src="C:/Users/pzj/Desktop/university code/code_resourse/NoteBook/cloud-imgs/a35bad81e6f04d9ababfc8967d32e78a-1716901678047-3.png" alt="在这里插入图片描述"> <code v-pre>has one</code>的情况解决方案，如果我们希望一个给定的地址，只能够在一张交叉表中出现一次，上面的复合主键已经做到了。</p>
<p><code v-pre>has many</code>的情况解决方案,如果希望一个地址可以在一张交叉表中出现多次，可以取消Address的复合主键。</p>
<h3 id="_3、has-one" tabindex="-1"><a class="header-anchor" href="#_3、has-one"><span>3、Has One</span></a></h3>
<p>GORM 为 <code v-pre>has one</code> 和 <code v-pre>has many</code> 提供了多态关联支持，它会将拥有者实体的表名、主键值都保存到多态类型的字段中。</p>
<div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre v-pre class="language-go"><code><span class="line"><span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	ID      <span class="token builtin">int</span></span>
<span class="line">	Name    <span class="token builtin">string</span></span>
<span class="line">	<span class="token comment">//polymorphic指定多态类型，比如模型名</span></span>
<span class="line">	Address Address <span class="token string">`gorm:"polymorphic:Owner;"`</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> Order <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	ID      <span class="token builtin">int</span></span>
<span class="line">	Name    <span class="token builtin">string</span></span>
<span class="line">	Address Address <span class="token string">`gorm:"polymorphic:Owner;"`</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> Address <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	ID        <span class="token builtin">int</span></span>
<span class="line">	Name      <span class="token builtin">string</span></span>
<span class="line">	OwnerID   <span class="token builtin">int</span></span>
<span class="line">	OwnerType <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	db<span class="token punctuation">.</span><span class="token function">AutoMigrate</span><span class="token punctuation">(</span>User<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> Order<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> Address<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="C:/Users/pzj/Desktop/university code/code_resourse/NoteBook/cloud-imgs/42109d8b5dc4428584c4aee5a60cd638-1716901678048-5.png" alt="在这里插入图片描述">
<div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre v-pre class="language-go"><code><span class="line">db<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>User<span class="token punctuation">{</span></span>
<span class="line">	Name<span class="token punctuation">:</span> <span class="token string">"linzy"</span><span class="token punctuation">,</span></span>
<span class="line">	Address<span class="token punctuation">:</span> Address<span class="token punctuation">{</span></span>
<span class="line">		Name<span class="token punctuation">:</span> <span class="token string">"翻斗花园"</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">db<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>Order<span class="token punctuation">{</span></span>
<span class="line">	Name<span class="token punctuation">:</span> <span class="token string">"忘崽牛奶"</span><span class="token punctuation">,</span></span>
<span class="line">	Address<span class="token punctuation">:</span> Address<span class="token punctuation">{</span></span>
<span class="line">		Name<span class="token punctuation">:</span> <span class="token string">"火星幼儿园"</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/f21222a9265c4f6b83dec8289e8903bc.png" alt="在这里插入图片描述"> <img src="C:/Users/pzj/Desktop/university code/code_resourse/NoteBook/cloud-imgs/3fd7287122ea4dcd97881b1dfd5a34ef-1716901678048-9.png" alt="在这里插入图片描述"> <img src="https://img-blog.csdnimg.cn/a0de07b93151442aa8d6c3013178c0a6.png" alt="在这里插入图片描述"></p>
<blockquote>
<p>owner_type就是关联的那张表。 owner_id就是关联的表的主键。</p>
</blockquote>
<h3 id="_4、has-many" tabindex="-1"><a class="header-anchor" href="#_4、has-many"><span>4、Has Many</span></a></h3>
<div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre v-pre class="language-go"><code><span class="line"><span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	ID      <span class="token builtin">int</span></span>
<span class="line">	Name    <span class="token builtin">string</span></span>
<span class="line">	Address <span class="token punctuation">[</span><span class="token punctuation">]</span>Address <span class="token string">`gorm:"polymorphic:Owner;"`</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> Order <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	ID      <span class="token builtin">int</span></span>
<span class="line">	Name    <span class="token builtin">string</span></span>
<span class="line">	Address Address <span class="token string">`gorm:"polymorphic:Owner;"`</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> Address <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	ID        <span class="token builtin">int</span></span>
<span class="line">	Name      <span class="token builtin">string</span></span>
<span class="line">	OwnerID   <span class="token builtin">int</span></span>
<span class="line">	OwnerType <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	db<span class="token punctuation">.</span><span class="token function">AutoMigrate</span><span class="token punctuation">(</span>User<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> Order<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> Address<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">	db<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>User<span class="token punctuation">{</span></span>
<span class="line">		Name<span class="token punctuation">:</span> <span class="token string">"linzy"</span><span class="token punctuation">,</span></span>
<span class="line">		Address<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>Address<span class="token punctuation">{</span></span>
<span class="line">			<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">"翻斗花园"</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">"杭州西湖"</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="C:/Users/pzj/Desktop/university code/code_resourse/NoteBook/cloud-imgs/46c14c4ee4984760b1dc262ffe963741-1716901678048-13.png" alt="在这里插入图片描述">
<h2 id="二、关联标签" tabindex="-1"><a class="header-anchor" href="#二、关联标签"><span>二、关联标签</span></a></h2>
<h3 id="_1、polymorphic-polymorphicvalue" tabindex="-1"><a class="header-anchor" href="#_1、polymorphic-polymorphicvalue"><span>1、polymorphic  polymorphicValue</span></a></h3>
<div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre v-pre class="language-go"><code><span class="line"><span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	ID   <span class="token builtin">int</span></span>
<span class="line">	Name <span class="token builtin">string</span></span>
<span class="line">	<span class="token comment">//polymorphic：通俗讲用来指定id与type的前缀</span></span>
<span class="line">	Address <span class="token punctuation">[</span><span class="token punctuation">]</span>Address <span class="token string">`gorm:"polymorphic:Address;"`</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> Order <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	ID      <span class="token builtin">int</span></span>
<span class="line">	Name    <span class="token builtin">string</span></span>
<span class="line">	<span class="token comment">//polymorphicValue用来告诉关联表我是谁，默认都是表名</span></span>
<span class="line">	Address Address <span class="token string">`gorm:"polymorphic:Address;polymorphicValue:master"`</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> Address <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	ID          <span class="token builtin">int</span></span>
<span class="line">	Name        <span class="token builtin">string</span></span>
<span class="line">	AddressID   <span class="token builtin">int</span></span>
<span class="line">	AddressType <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	db<span class="token punctuation">.</span><span class="token function">AutoMigrate</span><span class="token punctuation">(</span>User<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> Order<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> Address<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">	db<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>User<span class="token punctuation">{</span></span>
<span class="line">		Name<span class="token punctuation">:</span> <span class="token string">"linzy"</span><span class="token punctuation">,</span></span>
<span class="line">		Address<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>Address<span class="token punctuation">{</span></span>
<span class="line">			<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">"翻斗花园"</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">"杭州西湖"</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	db<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>Order<span class="token punctuation">{</span></span>
<span class="line">		Name<span class="token punctuation">:</span> <span class="token string">"忘崽牛奶"</span><span class="token punctuation">,</span></span>
<span class="line">		Address<span class="token punctuation">:</span> Address<span class="token punctuation">{</span></span>
<span class="line">			Name<span class="token punctuation">:</span> <span class="token string">"火星幼儿园"</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/af6eda1f702a4e7690d4d11d51c5dc16.png" alt="在这里插入图片描述"> <img src="C:/Users/pzj/Desktop/university code/code_resourse/NoteBook/cloud-imgs/891530b81c494625acbbd03e971e7547-1716901678048-17.png" alt="在这里插入图片描述"> <img src="https://img-blog.csdnimg.cn/32b6465508944d2fa659aa2d41710355.png" alt="在这里插入图片描述"></p>
<h3 id="_2、foreignkey-references" tabindex="-1"><a class="header-anchor" href="#_2、foreignkey-references"><span>2、foreignKey  references</span></a></h3>
<p>GORM里默认是连接表和引用表的主键来作为做外键以及外键映射的。</p>
<p>Has One的例子：</p>
<div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre v-pre class="language-go"><code><span class="line"><span class="token keyword">type</span> CreditCard <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	gorm<span class="token punctuation">.</span>Model</span>
<span class="line">	Number <span class="token builtin">string</span></span>
<span class="line">	<span class="token comment">//外键指向CreditCardNumber</span></span>
<span class="line">	Info   Info <span class="token string">`gorm:"foreignKey:CreditCardNumber"`</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> Info <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	ID               <span class="token builtin">uint</span></span>
<span class="line">	Name             <span class="token builtin">string</span></span>
<span class="line">	Age              <span class="token builtin">int</span></span>
<span class="line">	CreditCardNumber <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	db<span class="token punctuation">.</span><span class="token function">AutoMigrate</span><span class="token punctuation">(</span>CreditCard<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> Info<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">	db<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>CreditCard<span class="token punctuation">{</span></span>
<span class="line">		Number<span class="token punctuation">:</span> <span class="token string">"123456"</span><span class="token punctuation">,</span></span>
<span class="line">		Info<span class="token punctuation">:</span> Info<span class="token punctuation">{</span></span>
<span class="line">			Name<span class="token punctuation">:</span> <span class="token string">"linzy"</span><span class="token punctuation">,</span></span>
<span class="line">			Age<span class="token punctuation">:</span>  <span class="token number">18</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	db<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>CreditCard<span class="token punctuation">{</span></span>
<span class="line">		Number<span class="token punctuation">:</span> <span class="token string">"456789"</span><span class="token punctuation">,</span></span>
<span class="line">		Info<span class="token punctuation">:</span> Info<span class="token punctuation">{</span></span>
<span class="line">			Name<span class="token punctuation">:</span> <span class="token string">"slyyy"</span><span class="token punctuation">,</span></span>
<span class="line">			Age<span class="token punctuation">:</span>  <span class="token number">66</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="C:/Users/pzj/Desktop/university code/code_resourse/NoteBook/cloud-imgs/b52045e09e974dec82e074ce4dd4cd12-1716901678048-21.png" alt="在这里插入图片描述">
<img src="C:/Users/pzj/Desktop/university code/code_resourse/NoteBook/cloud-imgs/501eea72d7624710bf8efba4c6f5bcd2-1716901678048-23.png" alt="在这里插入图片描述">
<blockquote>
<p>注意：credit_card_number并没有自动指向creditcard表里的number字段，他还是会默认指向引用表里的主键，所以在用<code v-pre>foreignKey</code>的时候最好类型相同或者使用<code v-pre>references</code>搭配使用。</p>
</blockquote>
<div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre v-pre class="language-go"><code><span class="line"><span class="token keyword">type</span> CreditCard <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	ID <span class="token builtin">uint</span></span>
<span class="line">	<span class="token comment">//设置唯一和固定长度</span></span>
<span class="line">	Number <span class="token builtin">string</span> <span class="token string">`gorm:"index:unique;size:255"`</span></span>
<span class="line">	Info   Info   <span class="token string">`gorm:"foreignKey:CreditCardNumber;references:Number"`</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> Info <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	ID   <span class="token builtin">uint</span></span>
<span class="line">	Name <span class="token builtin">string</span></span>
<span class="line">	Age  <span class="token builtin">int</span></span>
<span class="line">	<span class="token comment">//设置唯一和固定长度</span></span>
<span class="line">	CreditCardNumber <span class="token builtin">string</span> <span class="token string">`gorm:"index:unique;size:255"`</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	db<span class="token punctuation">.</span><span class="token function">AutoMigrate</span><span class="token punctuation">(</span>CreditCard<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> Info<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">	db<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>CreditCard<span class="token punctuation">{</span></span>
<span class="line">		ID<span class="token punctuation">:</span>     <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">		Number<span class="token punctuation">:</span> <span class="token string">"123456"</span><span class="token punctuation">,</span></span>
<span class="line">		Info<span class="token punctuation">:</span> Info<span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">			Name<span class="token punctuation">:</span> <span class="token string">"linzy"</span><span class="token punctuation">,</span></span>
<span class="line">			Age<span class="token punctuation">:</span>  <span class="token number">18</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	db<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>CreditCard<span class="token punctuation">{</span></span>
<span class="line">		ID<span class="token punctuation">:</span>     <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">		Number<span class="token punctuation">:</span> <span class="token string">"456789"</span><span class="token punctuation">,</span></span>
<span class="line">		Info<span class="token punctuation">:</span> Info<span class="token punctuation">{</span></span>
<span class="line">			Name<span class="token punctuation">:</span> <span class="token string">"slyyy"</span><span class="token punctuation">,</span></span>
<span class="line">			Age<span class="token punctuation">:</span>  <span class="token number">66</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意： 某些数据库只允许在唯一索引字段上创建外键，如果在迁移时会创建外键，则需要指定 <code v-pre>index:unique</code> 标签。</p>
</blockquote>
<p><img src="C:/Users/pzj/Desktop/university code/code_resourse/NoteBook/cloud-imgs/9edc60ed7d5e492b95f8649d7a24f4d3-1716901678048-25.png" alt="在这里插入图片描述"> <img src="https://img-blog.csdnimg.cn/345e5edd73b24541999b82aa34a6c167.png" alt="在这里插入图片描述"></p>
<blockquote>
<p>错误：
<code v-pre>Error 1170: BLOB/TEXT column 'credit_card_number' used in key specification without a key length</code> 出现这个问题是因为你的外键或者外键映射的字段是text类型也就是不固定长度string类型，不能作为外键或外键映射，必须通过标签<code v-pre>size</code>设置固定长度。<code v-pre>Error 1215: Cannot add foreign key constraint</code> 这个错误是不能创建外键，主要原因可能是你外键映射的字段不是引用表的主键，建议标签设置为唯一 <code v-pre>index:unique</code>。</p>
</blockquote>
<h3 id="_3、many-to-many" tabindex="-1"><a class="header-anchor" href="#_3、many-to-many"><span>3、Many to Many</span></a></h3>
<div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre v-pre class="language-go"><code><span class="line"><span class="token keyword">type</span> CreditCard <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	ID     <span class="token builtin">uint</span></span>
<span class="line">	Number <span class="token builtin">string</span> <span class="token string">`gorm:"index:unique;size:255"`</span></span>
<span class="line">	Infos  <span class="token punctuation">[</span><span class="token punctuation">]</span>Info <span class="token string">`gorm:"many2many:card_infos;foreignKey:Number;references:Name;"`</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> Info <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	ID   <span class="token builtin">uint</span></span>
<span class="line">	Name <span class="token builtin">string</span> <span class="token string">`gorm:"index:unique;size:255"`</span></span>
<span class="line">	Age  <span class="token builtin">int</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	db<span class="token punctuation">.</span><span class="token function">AutoMigrate</span><span class="token punctuation">(</span>CreditCard<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> Info<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">	db<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>CreditCard<span class="token punctuation">{</span></span>
<span class="line">		Number<span class="token punctuation">:</span> <span class="token string">"123456"</span><span class="token punctuation">,</span></span>
<span class="line">		Infos<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>Info<span class="token punctuation">{</span></span>
<span class="line">			<span class="token punctuation">{</span></span>
<span class="line">				ID<span class="token punctuation">:</span>   <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">				Name<span class="token punctuation">:</span> <span class="token string">"linzy"</span><span class="token punctuation">,</span></span>
<span class="line">				Age<span class="token punctuation">:</span>  <span class="token number">18</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	db<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>CreditCard<span class="token punctuation">{</span></span>
<span class="line">		Number<span class="token punctuation">:</span> <span class="token string">"456789"</span><span class="token punctuation">,</span></span>
<span class="line">		Infos<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>Info<span class="token punctuation">{</span></span>
<span class="line">			<span class="token punctuation">{</span></span>
<span class="line">				ID<span class="token punctuation">:</span>   <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">				Name<span class="token punctuation">:</span> <span class="token string">"slyyy"</span><span class="token punctuation">,</span></span>
<span class="line">				Age<span class="token punctuation">:</span>  <span class="token number">66</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token punctuation">{</span></span>
<span class="line">				ID<span class="token punctuation">:</span>   <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">				Name<span class="token punctuation">:</span> <span class="token string">"qhgwueiq"</span><span class="token punctuation">,</span></span>
<span class="line">				Age<span class="token punctuation">:</span>  <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/d5b965e97917407f88bb51376b7d6918.png" alt="在这里插入图片描述"> <img src="C:/Users/pzj/Desktop/university code/code_resourse/NoteBook/cloud-imgs/f9c47da108ee46b0bca3f92e00539486-1716901678048-31.png" alt="在这里插入图片描述"> <img src="https://img-blog.csdnimg.cn/5e2333aff2044aa6a7a791d0b7fef6f1.png" alt="在这里插入图片描述"></p>
<blockquote>
<p>注意：在<code v-pre>Many to Many</code>的情况下，foreignKey指向的是<code v-pre>引用表的外键映射字段</code>，references指向的是<code v-pre>关联表的外键字段</code>，一定不要搞混了。</p>
</blockquote>
<h3 id="_4、joinforeignkey-joinreferences" tabindex="-1"><a class="header-anchor" href="#_4、joinforeignkey-joinreferences"><span>4、joinForeignKey  joinReferences</span></a></h3>
<div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre v-pre class="language-go"><code><span class="line"><span class="token keyword">type</span> CreditCard <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	ID     <span class="token builtin">uint</span></span>
<span class="line">	Number <span class="token builtin">string</span> <span class="token string">`gorm:"index:unique;size:255"`</span></span>
<span class="line">	Infos  <span class="token punctuation">[</span><span class="token punctuation">]</span>Info <span class="token string">`gorm:"many2many:card_infos;foreignKey:Number;joinForeignKey:card_number;references:Name;joinReferences:name"`</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> Info <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	ID   <span class="token builtin">uint</span></span>
<span class="line">	Name <span class="token builtin">string</span> <span class="token string">`gorm:"index:unique;size:255"`</span></span>
<span class="line">	Age  <span class="token builtin">int</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	db<span class="token punctuation">.</span><span class="token function">AutoMigrate</span><span class="token punctuation">(</span>CreditCard<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> Info<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">	db<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>CreditCard<span class="token punctuation">{</span></span>
<span class="line">		Number<span class="token punctuation">:</span> <span class="token string">"123456"</span><span class="token punctuation">,</span></span>
<span class="line">		Infos<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>Info<span class="token punctuation">{</span></span>
<span class="line">			<span class="token punctuation">{</span></span>
<span class="line">				ID<span class="token punctuation">:</span>   <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">				Name<span class="token punctuation">:</span> <span class="token string">"linzy"</span><span class="token punctuation">,</span></span>
<span class="line">				Age<span class="token punctuation">:</span>  <span class="token number">18</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	db<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>CreditCard<span class="token punctuation">{</span></span>
<span class="line">		Number<span class="token punctuation">:</span> <span class="token string">"456789"</span><span class="token punctuation">,</span></span>
<span class="line">		Infos<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>Info<span class="token punctuation">{</span></span>
<span class="line">			<span class="token punctuation">{</span></span>
<span class="line">				ID<span class="token punctuation">:</span>   <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">				Name<span class="token punctuation">:</span> <span class="token string">"slyyy"</span><span class="token punctuation">,</span></span>
<span class="line">				Age<span class="token punctuation">:</span>  <span class="token number">66</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token punctuation">{</span></span>
<span class="line">				ID<span class="token punctuation">:</span>   <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">				Name<span class="token punctuation">:</span> <span class="token string">"qhgwueiq"</span><span class="token punctuation">,</span></span>
<span class="line">				Age<span class="token punctuation">:</span>  <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">			<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="C:/Users/pzj/Desktop/university code/code_resourse/NoteBook/cloud-imgs/4f2821bed156416d8d56fe884fec9758-1716901678048-35.png" alt="在这里插入图片描述">
<h2 id="三、事务" tabindex="-1"><a class="header-anchor" href="#三、事务"><span>三、事务</span></a></h2>
<h3 id="_1、事务概述" tabindex="-1"><a class="header-anchor" href="#_1、事务概述"><span>1、事务概述</span></a></h3>
<p>数据库事务( transaction)是访问并可能操作各种数据项的一个<code v-pre>数据库操作序列</code>，这些操作要么全部执行，要么全部不执行，是一个不可分割的工作单位。 事务由事务开始与事务结束之间执行的全部数据库操作组成。</p>
<p>数据库事务必须具备的四个特性：</p>
<h3 id="_2、事务操作" tabindex="-1"><a class="header-anchor" href="#_2、事务操作"><span>2、事务操作</span></a></h3>
<p>要在事务中执行一系列操作，一般流程如下：</p>
<div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre v-pre class="language-go"><code><span class="line"><span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	gorm<span class="token punctuation">.</span>Model</span>
<span class="line">	Name <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	db<span class="token punctuation">.</span><span class="token function">AutoMigrate</span><span class="token punctuation">(</span>User<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">	db<span class="token punctuation">.</span><span class="token function">Transaction</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span>tx <span class="token operator">*</span>gorm<span class="token punctuation">.</span>DB<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token comment">// 在事务中执行一些 db 操作（从这里开始，应该使用 'tx' 而不是 'db'）</span></span>
<span class="line">		<span class="token keyword">if</span> err <span class="token operator">:=</span> tx<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>User<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">"Giraffe"</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Error<span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span></span>
<span class="line">			<span class="token comment">// 返回任何错误都会回滚事务</span></span>
<span class="line">			<span class="token keyword">return</span> err</span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">		<span class="token keyword">if</span> err <span class="token operator">:=</span> tx<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>User<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">"Lion"</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Error<span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span></span>
<span class="line">			<span class="token keyword">return</span> err</span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">		<span class="token comment">// 返回 nil 提交事务</span></span>
<span class="line">		<span class="token keyword">return</span> <span class="token boolean">nil</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="C:/Users/pzj/Desktop/university code/code_resourse/NoteBook/cloud-imgs/9c0bdf35a2794bcbb88ef85c9ab5e154-1716901678049-37.png" alt="在这里插入图片描述">
<h4 id="_1-回滚" tabindex="-1"><a class="header-anchor" href="#_1-回滚"><span>1）回滚</span></a></h4>
<blockquote>
<p>注意：返回任何错误都会回滚事务。回滚则事务内的操作一律不执行。</p>
</blockquote>
<div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre v-pre class="language-go"><code><span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	db<span class="token punctuation">.</span><span class="token function">AutoMigrate</span><span class="token punctuation">(</span>User<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">	db<span class="token punctuation">.</span><span class="token function">Transaction</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span>tx <span class="token operator">*</span>gorm<span class="token punctuation">.</span>DB<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token comment">// 在事务中执行一些 db 操作（从这里开始，应该使用 'tx' 而不是 'db'）</span></span>
<span class="line">		<span class="token keyword">if</span> err <span class="token operator">:=</span> tx<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>User<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">"linzy"</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Error<span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span></span>
<span class="line">			<span class="token comment">// 返回任何错误都会回滚事务</span></span>
<span class="line">			<span class="token keyword">return</span> err</span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">		<span class="token keyword">if</span> err <span class="token operator">:=</span> tx<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>User<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">"slyyy"</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Error<span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span></span>
<span class="line">			<span class="token keyword">return</span> err</span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">		<span class="token keyword">if</span> <span class="token boolean">true</span> <span class="token punctuation">{</span></span>
<span class="line">			<span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"回滚"</span><span class="token punctuation">)</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">		<span class="token comment">// 返回 nil 提交事务</span></span>
<span class="line">		<span class="token keyword">return</span> <span class="token boolean">nil</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="C:/Users/pzj/Desktop/university code/code_resourse/NoteBook/cloud-imgs/c28e84c61dbf44b19d19864f5859e234-1716901678049-39.png" alt="在这里插入图片描述">
<h4 id="_2-嵌套事务" tabindex="-1"><a class="header-anchor" href="#_2-嵌套事务"><span>2）嵌套事务</span></a></h4>
<p>嵌套事务的作用在于较大的事务中，你只想回滚一部分操作，例如你去银行转账，已经通过银行卡号和密码登录了，转账的过程是你的银行账户扣去多少钱，同时别人的银行账户加上多少钱，如果中途发生错误，需要回滚，应该回滚到你账号登录后的状态，而不是直接回滚到你账号登录前。</p>
<div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre v-pre class="language-go"><code><span class="line"></span>
<span class="line"><span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	gorm<span class="token punctuation">.</span>Model</span>
<span class="line">	Name   <span class="token builtin">string</span></span>
<span class="line">	Number <span class="token builtin">int</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	db<span class="token punctuation">.</span><span class="token function">AutoMigrate</span><span class="token punctuation">(</span>User<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">	db<span class="token punctuation">.</span><span class="token function">Transaction</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span>tx <span class="token operator">*</span>gorm<span class="token punctuation">.</span>DB<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span></span>
<span class="line">		tx<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>User<span class="token punctuation">{</span></span>
<span class="line">			Name<span class="token punctuation">:</span>   <span class="token string">"linzy"</span><span class="token punctuation">,</span></span>
<span class="line">			Number<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">		tx<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>User<span class="token punctuation">{</span></span>
<span class="line">			Name<span class="token punctuation">:</span>   <span class="token string">"slyyy"</span><span class="token punctuation">,</span></span>
<span class="line">			Number<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"登陆后"</span><span class="token punctuation">)</span></span>
<span class="line">		tx<span class="token punctuation">.</span><span class="token function">Transaction</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span>tx2 <span class="token operator">*</span>gorm<span class="token punctuation">.</span>DB<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span></span>
<span class="line">			<span class="token comment">// 在事务中执行一些 db 操作（从这里开始，应该使用 'tx' 而不是 'db')</span></span>
<span class="line">			<span class="token keyword">if</span> err <span class="token operator">:=</span> tx2<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span>User<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">"name = ?"</span><span class="token punctuation">,</span> <span class="token string">"linzy"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Update</span><span class="token punctuation">(</span><span class="token string">"number"</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Error<span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span></span>
<span class="line">				<span class="token comment">// 返回任何错误都会回滚事务</span></span>
<span class="line">				<span class="token keyword">return</span> err</span>
<span class="line">			<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">			<span class="token keyword">if</span> err <span class="token operator">:=</span> tx2<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span>User<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">"name = ?"</span><span class="token punctuation">,</span> <span class="token string">"slyyy"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Update</span><span class="token punctuation">(</span><span class="token string">"number"</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Error<span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span></span>
<span class="line">				<span class="token keyword">return</span> err</span>
<span class="line">			<span class="token punctuation">}</span></span>
<span class="line">			<span class="token keyword">return</span> <span class="token boolean">nil</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"转账结束"</span><span class="token punctuation">)</span></span>
<span class="line">		<span class="token comment">// 返回 nil 提交事务</span></span>
<span class="line">		<span class="token keyword">return</span> <span class="token boolean">nil</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="C:/Users/pzj/Desktop/university code/code_resourse/NoteBook/cloud-imgs/23b30a9f0f254197a524c8bb5d788998-1716901678049-43.png" alt="在这里插入图片描述">
<p><img src="C:/Users/pzj/Desktop/university code/code_resourse/NoteBook/cloud-imgs/9a49f4a4baaf4b41a3f5e61c980b8824-1716901678049-41.png" alt="在这里插入图片描述"> 正常的过程应该是这样，如果说嵌套事务发生回滚操作之后的情况呢？</p>
<div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre v-pre class="language-go"><code><span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	db<span class="token punctuation">.</span><span class="token function">AutoMigrate</span><span class="token punctuation">(</span>User<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">	db<span class="token punctuation">.</span><span class="token function">Transaction</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span>tx <span class="token operator">*</span>gorm<span class="token punctuation">.</span>DB<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span></span>
<span class="line">		tx<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>User<span class="token punctuation">{</span></span>
<span class="line">			Name<span class="token punctuation">:</span>   <span class="token string">"linzy"</span><span class="token punctuation">,</span></span>
<span class="line">			Number<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">		tx<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>User<span class="token punctuation">{</span></span>
<span class="line">			Name<span class="token punctuation">:</span>   <span class="token string">"slyyy"</span><span class="token punctuation">,</span></span>
<span class="line">			Number<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"登陆后"</span><span class="token punctuation">)</span></span>
<span class="line">		tx<span class="token punctuation">.</span><span class="token function">Transaction</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span>tx2 <span class="token operator">*</span>gorm<span class="token punctuation">.</span>DB<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span></span>
<span class="line">			<span class="token comment">// 在事务中执行一些 db 操作（从这里开始，应该使用 'tx' 而不是 'db')</span></span>
<span class="line">			<span class="token keyword">if</span> err <span class="token operator">:=</span> tx2<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span>User<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">"name = ?"</span><span class="token punctuation">,</span> <span class="token string">"linzy"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Update</span><span class="token punctuation">(</span><span class="token string">"number"</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Error<span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span></span>
<span class="line">				<span class="token comment">// 返回任何错误都会回滚事务</span></span>
<span class="line">				<span class="token keyword">return</span> err</span>
<span class="line">			<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">			<span class="token keyword">if</span> <span class="token boolean">true</span> <span class="token punctuation">{</span></span>
<span class="line">				fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"转账失败，对面是骗子不能转！！"</span><span class="token punctuation">)</span></span>
<span class="line">				<span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">"转账失败"</span><span class="token punctuation">)</span></span>
<span class="line">			<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">			<span class="token keyword">if</span> err <span class="token operator">:=</span> tx2<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span>User<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">"name = ?"</span><span class="token punctuation">,</span> <span class="token string">"slyyy"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Update</span><span class="token punctuation">(</span><span class="token string">"number"</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Error<span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span></span>
<span class="line">				<span class="token keyword">return</span> err</span>
<span class="line">			<span class="token punctuation">}</span></span>
<span class="line">			<span class="token keyword">return</span> <span class="token boolean">nil</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"转账结束"</span><span class="token punctuation">)</span></span>
<span class="line">		<span class="token comment">// 返回 nil 提交事务</span></span>
<span class="line">		<span class="token keyword">return</span> <span class="token boolean">nil</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="C:/Users/pzj/Desktop/university code/code_resourse/NoteBook/cloud-imgs/bbcfbc6e5c3540a0ae554a9e0347fa3a-1716901678049-45.png" alt="在这里插入图片描述"> <img src="https://img-blog.csdnimg.cn/a403cb86338044609bb79bfa7c708f8f.png" alt="在这里插入图片描述"></p>
<h3 id="_3、手动事务" tabindex="-1"><a class="header-anchor" href="#_3、手动事务"><span>3、手动事务</span></a></h3>
<p>Gorm 支持直接调用事务控制方法（commit、rollback），例如：</p>
<table>
<thead>
<tr>
<th>事务方法</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>tx := db.Begin()</td>
<td>开始事务</td>
</tr>
<tr>
<td>tx.（db操作）</td>
<td>在事务中执行一些 db 操作</td>
</tr>
<tr>
<td>tx.Rollback()</td>
<td>遇到错误时回滚事务</td>
</tr>
<tr>
<td>tx.SavePoint()</td>
<td>设置保存点标记</td>
</tr>
<tr>
<td>tx.RollbackTo()</td>
<td>回滚到保存点标记</td>
</tr>
<tr>
<td>tx.Commit()</td>
<td>提交事务</td>
</tr>
</tbody>
</table>
<div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre v-pre class="language-go"><code><span class="line"><span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	gorm<span class="token punctuation">.</span>Model</span>
<span class="line">	Name   <span class="token builtin">string</span></span>
<span class="line">	Number <span class="token builtin">int</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	db<span class="token punctuation">.</span><span class="token function">AutoMigrate</span><span class="token punctuation">(</span>User<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token comment">// 开始事务</span></span>
<span class="line">	tx <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">Begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 在事务中执行一些 db 操作（从这里开始，您应该使用 'tx' 而不是 'db'）</span></span>
<span class="line">	tx<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>User<span class="token punctuation">{</span></span>
<span class="line">		Name<span class="token punctuation">:</span>   <span class="token string">"linzy"</span><span class="token punctuation">,</span></span>
<span class="line">		Number<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">	tx<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>User<span class="token punctuation">{</span></span>
<span class="line">		Name<span class="token punctuation">:</span>   <span class="token string">"slyyy"</span><span class="token punctuation">,</span></span>
<span class="line">		Number<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"登陆后"</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token comment">//设置回滚标记</span></span>
<span class="line">	tx<span class="token punctuation">.</span><span class="token function">SavePoint</span><span class="token punctuation">(</span><span class="token string">"登录了"</span><span class="token punctuation">)</span></span>
<span class="line">	flag <span class="token operator">:=</span> <span class="token boolean">true</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		<span class="token keyword">if</span> err <span class="token operator">:=</span> tx<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span>User<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">"name = ?"</span><span class="token punctuation">,</span> <span class="token string">"linzy"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Update</span><span class="token punctuation">(</span><span class="token string">"number"</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Error<span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span></span>
<span class="line">			flag <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">		<span class="token keyword">if</span> err <span class="token operator">:=</span> tx<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span>User<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">"name = ?"</span><span class="token punctuation">,</span> <span class="token string">"slyyy"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Update</span><span class="token punctuation">(</span><span class="token string">"number"</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Error<span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span></span>
<span class="line">			flag <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">		<span class="token comment">//出现问题了得写在一系列事务之后进行回滚</span></span>
<span class="line">		<span class="token keyword">if</span> flag <span class="token punctuation">{</span></span>
<span class="line">			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"转账失败，对面是骗子不能转！！"</span><span class="token punctuation">)</span></span>
<span class="line">			<span class="token comment">//回滚到指定标记</span></span>
<span class="line">			tx<span class="token punctuation">.</span><span class="token function">RollbackTo</span><span class="token punctuation">(</span><span class="token string">"登录了"</span><span class="token punctuation">)</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token comment">// 遇到错误时回滚事务</span></span>
<span class="line">	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"转账结束"</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token comment">// 否则，提交事务</span></span>
<span class="line">	tx<span class="token punctuation">.</span><span class="token function">Commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="C:/Users/pzj/Desktop/university code/code_resourse/NoteBook/cloud-imgs/5cf8bdf745d9477daebb4585335b4526-1716901678049-49.png" alt="在这里插入图片描述">
<h4 id="官方示例" tabindex="-1"><a class="header-anchor" href="#官方示例"><span>官方示例：</span></a></h4>
<div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre v-pre class="language-go"><code><span class="line"><span class="token keyword">func</span> <span class="token function">CreateAnimals</span><span class="token punctuation">(</span>db <span class="token operator">*</span>gorm<span class="token punctuation">.</span>DB<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 再唠叨一下，事务一旦开始，你就应该使用 tx 处理数据</span></span>
<span class="line">  tx <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">Begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token comment">//延迟函数一定要写上，因为出现panic错误时事务可能没办法回滚，需要手动再回滚</span></span>
<span class="line">  <span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> r <span class="token operator">:=</span> <span class="token function">recover</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> r <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span></span>
<span class="line">      tx<span class="token punctuation">.</span><span class="token function">Rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">if</span> err <span class="token operator">:=</span> tx<span class="token punctuation">.</span>Error<span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> err</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">if</span> err <span class="token operator">:=</span> tx<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>Animal<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">"Giraffe"</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Error<span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span></span>
<span class="line">     tx<span class="token punctuation">.</span><span class="token function">Rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">     <span class="token keyword">return</span> err</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">if</span> err <span class="token operator">:=</span> tx<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>Animal<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">"Lion"</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Error<span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span></span>
<span class="line">     tx<span class="token punctuation">.</span><span class="token function">Rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">     <span class="token keyword">return</span> err</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> tx<span class="token punctuation">.</span><span class="token function">Commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Error</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、禁用默认事务" tabindex="-1"><a class="header-anchor" href="#_4、禁用默认事务"><span>4、禁用默认事务</span></a></h3>
<p>为了确保数据一致性，GORM 会在事务里执行写入操作（创建、更新、删除）。如果没有这方面的要求，您可以在初始化时禁用它，这将获得大约 30%+ 性能提升。</p>
<div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre v-pre class="language-go"><code><span class="line"><span class="token comment">// 全局禁用</span></span>
<span class="line">db<span class="token punctuation">,</span> err <span class="token operator">:=</span> gorm<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>sqlite<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">"gorm.db"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> gorm<span class="token punctuation">.</span>Config<span class="token punctuation">{</span></span>
<span class="line">  SkipDefaultTransaction<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 持续会话模式</span></span>
<span class="line">tx <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">Session</span><span class="token punctuation">(</span>Session<span class="token punctuation">{</span>SkipDefaultTransaction<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">tx<span class="token punctuation">.</span><span class="token function">First</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">tx<span class="token punctuation">.</span><span class="token function">Find</span><span class="token punctuation">(</span>users<span class="token punctuation">)</span></span>
<span class="line">tx<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Update</span><span class="token punctuation">(</span><span class="token string">"Age"</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、小结" tabindex="-1"><a class="header-anchor" href="#四、小结"><span>四、小结</span></a></h2>
<p>本章拓展了GORM对数据库的更多支持，关联标签与事务是很重要的内容。</p>
<table>
<thead>
<tr>
<th style="text-align:left">标签</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">foreignKey</td>
<td>指定当前模型的列作为连接表的外键</td>
</tr>
<tr>
<td style="text-align:left">references</td>
<td>指定引用表的列名，其将被映射为连接表外键</td>
</tr>
<tr>
<td style="text-align:left">polymorphic</td>
<td>指定多态类型，比如模型名</td>
</tr>
<tr>
<td style="text-align:left">polymorphicValue</td>
<td>指定多态值、默认表名</td>
</tr>
<tr>
<td style="text-align:left">many2many</td>
<td>指定连接表表名</td>
</tr>
<tr>
<td style="text-align:left">joinForeignKey</td>
<td>指定连接表的外键列名，其将被映射到当前表</td>
</tr>
<tr>
<td style="text-align:left">joinReferences</td>
<td>指定连接表的外键列名，其将被映射到引用表</td>
</tr>
</tbody>
</table>
<p>手动事务适用于小事务操作，出错了直接全部回滚会更好，虽然提供了 <code v-pre>SavePoint</code>、<code v-pre>Rollbackto</code>方法，来提供保存点以及回滚至保存点功能，但是有一些同步操作操作很不方便。 GORM自带事务适用大事务操作，可以使用嵌套事务。</p>
<blockquote>
<p>若有写的错误的或者需要改进的地方，希望能直接指出，再次感谢GVA淼哥的教程！</p>
</blockquote>
</div></template>


