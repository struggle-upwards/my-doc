<template><div><h1 id="git命令操作大全" tabindex="-1"><a class="header-anchor" href="#git命令操作大全"><span>git命令操作大全</span></a></h1>
<h3 id="检查git版本" tabindex="-1"><a class="header-anchor" href="#检查git版本"><span>检查git版本</span></a></h3>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="line">git --version</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看git相关命令" tabindex="-1"><a class="header-anchor" href="#查看git相关命令"><span>查看git相关命令</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">git</span> <span class="token parameter variable">--help</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看当前的git配置信息" tabindex="-1"><a class="header-anchor" href="#查看当前的git配置信息"><span>查看当前的git配置信息</span></a></h3>
<div class="language-lua line-numbers-mode" data-ext="lua" data-title="lua"><pre v-pre class="language-lua"><code><span class="line">git config <span class="token comment">--list</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看git用户名" tabindex="-1"><a class="header-anchor" href="#查看git用户名"><span>查看git用户名</span></a></h3>
<div class="language-lua line-numbers-mode" data-ext="lua" data-title="lua"><pre v-pre class="language-lua"><code><span class="line">git config user<span class="token punctuation">.</span>name</span>
<span class="line"><span class="token operator">-</span>查询⽬前git所使⽤的使⽤者名称</span>
<span class="line">git config <span class="token comment">--global user.name 名称</span></span>
<span class="line"></span>
<span class="line">注： <span class="token comment">--global 表示全局， 没有--global表示只设置在当前项目中的配置</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看git邮箱" tabindex="-1"><a class="header-anchor" href="#查看git邮箱"><span>查看git邮箱</span></a></h3>
<div class="language-lua line-numbers-mode" data-ext="lua" data-title="lua"><pre v-pre class="language-lua"><code><span class="line">git config user<span class="token punctuation">.</span>email</span>
<span class="line"><span class="token operator">-</span>查询git所使⽤的email</span>
<span class="line">git config <span class="token comment">--global user.email</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置-配置-全局邮箱" tabindex="-1"><a class="header-anchor" href="#设置-配置-全局邮箱"><span>设置 （配置）全局邮箱</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">"eamil@qq.com"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="全局配置用户名-设置git使用者名称" tabindex="-1"><a class="header-anchor" href="#全局配置用户名-设置git使用者名称"><span>全局配置用户名(设置git使⽤者名称)</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">"username"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="git对项目中的代码进行管理" tabindex="-1"><a class="header-anchor" href="#git对项目中的代码进行管理"><span>git对项目中的代码进行管理</span></a></h3>
<h5 id="初始化git储存" tabindex="-1"><a class="header-anchor" href="#初始化git储存"><span>初始化git储存</span></a></h5>
<div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre v-pre class="language-csharp"><code><span class="line">git init</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="需要提交的所有修改放到暂存区-stage" tabindex="-1"><a class="header-anchor" href="#需要提交的所有修改放到暂存区-stage"><span>需要提交的所有修改放到暂存区（Stage）</span></a></h5>
<div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre v-pre class="language-csharp"><code><span class="line">git <span class="token keyword">add</span> <span class="token operator">*</span>  <span class="token comment">//将工作区所有修改添加到暂存区</span></span>
<span class="line">git <span class="token keyword">add</span> <span class="token punctuation">.</span>  <span class="token comment">//将工作区所有修改添加到暂存区</span></span>
<span class="line">git <span class="token keyword">add</span> <span class="token operator">&lt;</span>file<span class="token operator">-</span>name<span class="token operator">></span> <span class="token comment">//将指定文件添加到暂存区</span></span>
<span class="line">git <span class="token keyword">add</span> <span class="token operator">*</span><span class="token punctuation">.</span>js  <span class="token comment">//提交所有.js格式文件</span></span>
<span class="line">git <span class="token keyword">add</span> <span class="token operator">-</span>f <span class="token operator">&lt;</span>file<span class="token operator">-</span>name<span class="token operator">></span> <span class="token comment">// 强制添加 指定文件添加到暂存区</span></span>
<span class="line">注：<span class="token operator">&lt;</span>file<span class="token operator">-</span>name<span class="token operator">></span>指的是文件的名称</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="恢复-后悔药" tabindex="-1"><a class="header-anchor" href="#恢复-后悔药"><span>恢复（后悔药）</span></a></h3>
<p>将暂存区的文件恢复到工作区</p>
<div class="language-perl line-numbers-mode" data-ext="perl" data-title="perl"><pre v-pre class="language-perl"><code><span class="line">git reset <span class="token filehandle symbol">&lt;file-name></span>           <span class="token operator">//</span>从暂存区恢复指定到工作区</span>
<span class="line">git reset <span class="token operator">--</span> <span class="token operator">.</span>                  <span class="token operator">//</span>从暂存区恢复所有文件到工作区</span>
<span class="line">git reset <span class="token operator">--</span>hard                <span class="token operator">//</span> 把暂存区的修改退回到工作区</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看工作区、暂存区的状态" tabindex="-1"><a class="header-anchor" href="#查看工作区、暂存区的状态"><span>查看工作区、暂存区的状态</span></a></h3>
<div class="language-lua line-numbers-mode" data-ext="lua" data-title="lua"><pre v-pre class="language-lua"><code><span class="line">git status</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="移除暂存区的修改" tabindex="-1"><a class="header-anchor" href="#移除暂存区的修改"><span>移除暂存区的修改</span></a></h3>
<div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre v-pre class="language-scss"><code><span class="line">git rm --cached &lt;file-name>  <span class="token comment">//将本地暂存区的内容移除暂存区</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="将缓存区的文件-提交到本地仓库-版本库" tabindex="-1"><a class="header-anchor" href="#将缓存区的文件-提交到本地仓库-版本库"><span>将缓存区的文件，提交到本地仓库（版本库 ）</span></a></h5>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">git</span> commit <span class="token operator">&lt;</span>file-name<span class="token operator">></span> <span class="token punctuation">..</span>. <span class="token string">"相关的记录信息"</span> //将缓存区的指定文件提交到本地仓库</span>
<span class="line"><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"相关的记录信息"</span>        //将缓存区的所有文件提交到本地仓库</span>
<span class="line"><span class="token function">git</span> commit <span class="token parameter variable">-am</span> <span class="token string">'相关的记录信息'</span>       //跳过暂存区域直接提交更新并且添加备注的记录信息</span>
<span class="line"><span class="token function">git</span> commit <span class="token parameter variable">--amend</span> <span class="token string">'相关的记录信息'</span>   //使用一次新的commit，替代上一次提交，如果代码没有任何新变化，则用来修改上一次commit的提交记录信息</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="撤销commit提交" tabindex="-1"><a class="header-anchor" href="#撤销commit提交"><span>撤销commit提交</span></a></h3>
<div class="language-perl line-numbers-mode" data-ext="perl" data-title="perl"><pre v-pre class="language-perl"><code><span class="line">git revert HEAD   <span class="token operator">//</span>撤销最近的一个提交<span class="token punctuation">(</span>创建了一个撤销上次提交<span class="token punctuation">(</span>HEAD<span class="token punctuation">)</span>的新提交<span class="token punctuation">)</span></span>
<span class="line">git reset <span class="token operator">--</span>soft HEAD<span class="token operator">^</span></span>
<span class="line">注意：Windows系统需要在<span class="token operator">^</span>符号后面两边加上引号，如：</span>
<span class="line">git reset <span class="token operator">--</span>soft HEAD<span class="token string">"^"</span></span>
<span class="line"></span>
<span class="line">git revert HEAD<span class="token operator">^</span>   <span class="token operator">//</span>撤销上上次的提交</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看日志" tabindex="-1"><a class="header-anchor" href="#查看日志"><span>查看日志</span></a></h3>
<h5 id="查看历史提交-commit-记录" tabindex="-1"><a class="header-anchor" href="#查看历史提交-commit-记录"><span>查看历史提交(commit)记录</span></a></h5>
<div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre v-pre class="language-c"><code><span class="line">git log    <span class="token comment">//查看历史commit记录</span></span>
<span class="line">注：空格向下翻页，b向上翻页，q退出</span>
<span class="line">git log <span class="token operator">--</span>oneline  <span class="token comment">//以简洁的一行显示，包含简洁哈希索引值</span></span>
<span class="line">git log <span class="token operator">--</span>pretty<span class="token operator">=</span>oneline <span class="token comment">//查看日志且并且显示版本</span></span>
<span class="line">git log <span class="token operator">--</span>stat     <span class="token comment">//显示每个commit中哪些文件被修改,分别添加或删除了多少行</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="查看分支合并图" tabindex="-1"><a class="header-anchor" href="#查看分支合并图"><span>查看分支合并图</span></a></h5>
<div class="language-lua line-numbers-mode" data-ext="lua" data-title="lua"><pre v-pre class="language-lua"><code><span class="line">git log <span class="token comment">--graph</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="查看版本线图" tabindex="-1"><a class="header-anchor" href="#查看版本线图"><span>查看版本线图</span></a></h5>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="line">git log --oneline --graph</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="git版本控制-时光机" tabindex="-1"><a class="header-anchor" href="#git版本控制-时光机"><span>git版本控制（时光机）</span></a></h3>
<h5 id="回到指定哈希值对应的版本" tabindex="-1"><a class="header-anchor" href="#回到指定哈希值对应的版本"><span>回到指定哈希值对应的版本</span></a></h5>
<div class="language-ruby line-numbers-mode" data-ext="rb" data-title="rb"><pre v-pre class="language-ruby"><code><span class="line">git reset <span class="token operator">-</span><span class="token operator">-</span>hard <span class="token operator">&lt;</span><span class="token builtin">Hash</span><span class="token operator">></span> <span class="token operator">/</span><span class="token operator">/</span> 回滚到需要的版本  <span class="token punctuation">(</span>回滚了仓库<span class="token punctuation">,</span>暂存区<span class="token punctuation">,</span>暂存区<span class="token punctuation">,</span>工作区<span class="token punctuation">)</span></span>
<span class="line"><span class="token symbol">注</span><span class="token operator">:</span><span class="token operator">&lt;</span><span class="token builtin">Hash</span><span class="token operator">></span> 是版本的哈希值</span>
<span class="line">git reset <span class="token operator">-</span><span class="token operator">-</span>hard <span class="token constant">HEAD</span>     <span class="token operator">/</span><span class="token operator">/</span>强制工作区、暂存区、本地库为当前<span class="token constant">HEAD</span>指针所在的版本</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="版本回退" tabindex="-1"><a class="header-anchor" href="#版本回退"><span>版本回退</span></a></h5>
<div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre v-pre class="language-scss"><code><span class="line">git reset --hard HEAD~1          <span class="token comment">//后退一个版本</span></span>
<span class="line">注：~后面的数字表示回退多少个版本</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="其他版本回退" tabindex="-1"><a class="header-anchor" href="#其他版本回退"><span>其他版本回退</span></a></h4>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">git</span> reset <span class="token parameter variable">--mixed</span> <span class="token operator">&lt;</span>Hash<span class="token operator">></span> // 回滚到需要的版本  <span class="token punctuation">(</span>回滚了仓库,暂存区<span class="token punctuation">)</span></span>
<span class="line"><span class="token function">git</span> reset <span class="token parameter variable">--soft</span> <span class="token operator">&lt;</span>Hash<span class="token operator">></span> // 回退到需要的版本 （只回滚到本地仓库）</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分支" tabindex="-1"><a class="header-anchor" href="#分支"><span>分支</span></a></h3>
<h5 id="查看分支" tabindex="-1"><a class="header-anchor" href="#查看分支"><span>查看分支</span></a></h5>
<div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre v-pre class="language-scss"><code><span class="line">git branch              <span class="token comment">//查看所有本地分支</span></span>
<span class="line">git branch -r          <span class="token comment">//查看所有远程分支</span></span>
<span class="line">git branch -a         <span class="token comment">//查看所有远程分支和本地分支</span></span>
<span class="line">git branch --merged  <span class="token comment">//查看已经合并的分支</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="创建分支-依然停留在当前的分支" tabindex="-1"><a class="header-anchor" href="#创建分支-依然停留在当前的分支"><span>创建分支（依然停留在当前的分支）</span></a></h5>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="line">git branch <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>branch-name</span><span class="token punctuation">></span></span></span>
<span class="line">注: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>branch-name</span><span class="token punctuation">></span></span> 是分支的名称</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="切换分支" tabindex="-1"><a class="header-anchor" href="#切换分支"><span>切换分支</span></a></h5>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">git checKout <span class="token operator">&lt;</span>branch<span class="token operator">-</span>name<span class="token operator">></span>    <span class="token comment">//切换到指定分支，并更新工作区</span></span>
<span class="line">git checkout <span class="token operator">-</span>         <span class="token comment">//切换到上一个分支</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="创建并切换分支-创建一个新的分支-并切换到这个新建的分支上" tabindex="-1"><a class="header-anchor" href="#创建并切换分支-创建一个新的分支-并切换到这个新建的分支上"><span>创建并切换分支（创建一个新的分支，并切换到这个新建的分支上）</span></a></h5>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="line">git checkout -b &lt;branch-name></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="合并分支-合并某一个分支到当前分支" tabindex="-1"><a class="header-anchor" href="#合并分支-合并某一个分支到当前分支"><span>合并分支（合并某一个分支到当前分支）</span></a></h5>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">git merge <span class="token operator">&lt;</span>branch<span class="token operator">-</span>name<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="删除分支" tabindex="-1"><a class="header-anchor" href="#删除分支"><span>删除分支</span></a></h5>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">git branch <span class="token operator">-</span>d <span class="token operator">&lt;</span>branch<span class="token operator">-</span>name<span class="token operator">></span>    <span class="token comment">//只能删除已经被当前分支合并的分支</span></span>
<span class="line">git branch <span class="token operator">-</span><span class="token constant">D</span> <span class="token operator">&lt;</span><span class="token operator">></span>branch<span class="token operator">-</span>name<span class="token operator">></span>   <span class="token comment">//强制删除分支</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="删除远程分支" tabindex="-1"><a class="header-anchor" href="#删除远程分支"><span>删除远程分支</span></a></h5>
<div class="language-perl line-numbers-mode" data-ext="perl" data-title="perl"><pre v-pre class="language-perl"><code><span class="line">git push origin <span class="token operator">--</span><span class="token keyword">delete</span>  <span class="token filehandle symbol">&lt;remote-branch-name></span></span>
<span class="line">注：<span class="token filehandle symbol">&lt;remote-branch-name></span> 远程分支名</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="git修改本地分支名和远程分支名" tabindex="-1"><a class="header-anchor" href="#git修改本地分支名和远程分支名"><span>git修改本地分支名和远程分支名</span></a></h4>
<h3 id="远程仓库-团队协作" tabindex="-1"><a class="header-anchor" href="#远程仓库-团队协作"><span>远程仓库（团队协作）</span></a></h3>
<h5 id="克隆远程仓库-从远程仓库拉取代码" tabindex="-1"><a class="header-anchor" href="#克隆远程仓库-从远程仓库拉取代码"><span>克隆远程仓库（从远程仓库拉取代码）</span></a></h5>
<div class="language-perl line-numbers-mode" data-ext="perl" data-title="perl"><pre v-pre class="language-perl"><code><span class="line">git clone <span class="token filehandle symbol">&lt;url></span></span>
<span class="line">注：<span class="token filehandle symbol">&lt;url></span>   远程仓库的地址</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="本地库与远程库进行关联" tabindex="-1"><a class="header-anchor" href="#本地库与远程库进行关联"><span>本地库与远程库进行关联</span></a></h5>
<div class="language-perl line-numbers-mode" data-ext="perl" data-title="perl"><pre v-pre class="language-perl"><code><span class="line">git remote add origin <span class="token filehandle symbol">&lt;url></span></span>
<span class="line">注：<span class="token filehandle symbol">&lt;url></span>   远程仓库的地址</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="查看远程仓库地址别名" tabindex="-1"><a class="header-anchor" href="#查看远程仓库地址别名"><span>查看远程仓库地址别名</span></a></h5>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">git</span> remote <span class="token parameter variable">-v</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="新建远程仓库地址别名" tabindex="-1"><a class="header-anchor" href="#新建远程仓库地址别名"><span>新建远程仓库地址别名</span></a></h5>
<div class="language-ruby line-numbers-mode" data-ext="rb" data-title="rb"><pre v-pre class="language-ruby"><code><span class="line">git remote add <span class="token operator">&lt;</span><span class="token keyword">alias</span><span class="token operator">></span> <span class="token operator">&lt;</span>url<span class="token operator">></span></span>
<span class="line"><span class="token symbol">注</span><span class="token operator">:</span><span class="token operator">&lt;</span><span class="token keyword">alias</span><span class="token operator">></span> 远程仓库的别名</span>
<span class="line">   <span class="token operator">&lt;</span>url<span class="token operator">></span>   远程仓库的地址</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="删除本地仓库中的远程仓库别名" tabindex="-1"><a class="header-anchor" href="#删除本地仓库中的远程仓库别名"><span>删除本地仓库中的远程仓库别名</span></a></h5>
<div class="language-ruby line-numbers-mode" data-ext="rb" data-title="rb"><pre v-pre class="language-ruby"><code><span class="line">git remote rm <span class="token operator">&lt;</span><span class="token keyword">alias</span><span class="token operator">></span></span>
<span class="line"><span class="token symbol">注</span><span class="token operator">:</span><span class="token operator">&lt;</span><span class="token keyword">alias</span><span class="token operator">></span> 远程仓库的别名</span>
<span class="line">复制代码</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="重命名远程仓库地址别名" tabindex="-1"><a class="header-anchor" href="#重命名远程仓库地址别名"><span>重命名远程仓库地址别名</span></a></h5>
<div class="language-perl line-numbers-mode" data-ext="perl" data-title="perl"><pre v-pre class="language-perl"><code><span class="line"> git remote rename <span class="token filehandle symbol">&lt;old-alias></span> <span class="token filehandle symbol">&lt;new-alias></span></span>
<span class="line"> 注：<span class="token filehandle symbol">&lt;old-alias></span>  旧的远程仓库</span>
<span class="line">    <span class="token filehandle symbol">&lt;new-alias></span>  新的远程仓库</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="把远程库的修改拉取到本地" tabindex="-1"><a class="header-anchor" href="#把远程库的修改拉取到本地"><span>把远程库的修改拉取到本地</span></a></h5>
<div class="language-perl line-numbers-mode" data-ext="perl" data-title="perl"><pre v-pre class="language-perl"><code><span class="line">git fetch <span class="token filehandle symbol">&lt;alias/url></span> <span class="token filehandle symbol">&lt;remote-branch-name></span>     <span class="token operator">//</span>抓取远程仓库的指定分支到本地，但没有合并</span>
<span class="line">git merge <span class="token filehandle symbol">&lt;alias-branch-name></span>                <span class="token operator">//</span>将抓取下来的远程的分支，跟当前所在分支进行合并</span>
<span class="line">git pull <span class="token filehandle symbol">&lt;alias/url></span> <span class="token filehandle symbol">&lt;remote-branch-name></span>    <span class="token operator">//</span>拉取到本地，并且与当前所在的分支进行合并</span>
<span class="line"></span>
<span class="line">注<span class="token punctuation">:</span><span class="token filehandle symbol">&lt;alias/url></span> 远程仓库的别名 或者是 远程仓库地址</span>
<span class="line">   <span class="token filehandle symbol">&lt;remote-branch-name></span> 远程分支名</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="将本地的分支推送到远程仓库" tabindex="-1"><a class="header-anchor" href="#将本地的分支推送到远程仓库"><span>将本地的分支推送到远程仓库</span></a></h5>
<p>提示！：<strong>在推送前要先拉取哦</strong>  <code v-pre>git pull</code></p>
<div class="language-perl line-numbers-mode" data-ext="perl" data-title="perl"><pre v-pre class="language-perl"><code><span class="line">git push <span class="token filehandle symbol">&lt;alias/url></span> <span class="token filehandle symbol">&lt;branch-name></span>     <span class="token operator">//</span>将本地的每个分支推送到远程仓库</span>
<span class="line">git push <span class="token filehandle symbol">&lt;alias/url></span> <span class="token operator">--</span>force             <span class="token operator">//</span>强行推送 当前分支到远程仓库，即使有冲突</span>
<span class="line">git push <span class="token filehandle symbol">&lt;alias/url></span> <span class="token operator">--</span>all              <span class="token operator">//</span>推送所有本地分支到远程仓库</span>
<span class="line"></span>
<span class="line">注<span class="token punctuation">:</span><span class="token filehandle symbol">&lt;alias/url></span> 远程仓库的别名 或者是 远程仓库地址</span>
<span class="line">   <span class="token filehandle symbol">&lt;branch-name></span>  本地分支名</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看配置信息" tabindex="-1"><a class="header-anchor" href="#查看配置信息"><span>查看配置信息</span></a></h3>
<h4 id="查看全局配置信息" tabindex="-1"><a class="header-anchor" href="#查看全局配置信息"><span>查看全局配置信息</span></a></h4>
<p><code v-pre>git config --list --global</code></p>
<p><img src="@source/note/Git/img/gitconfig1.png" alt="gitconfig1"></p>
<h4 id="查看本地仓库配置信息" tabindex="-1"><a class="header-anchor" href="#查看本地仓库配置信息"><span>查看本地仓库配置信息</span></a></h4>
<p><code v-pre>git config --list --local</code></p>
<p><img src="@source/note/Git/img/gitconfig2.png" alt="gitconfig1"></p>
<h4 id="查看系统配置信息" tabindex="-1"><a class="header-anchor" href="#查看系统配置信息"><span>查看系统配置信息</span></a></h4>
<p><code v-pre>git config --list --system</code></p>
<p><img src="@source/note/Git/img/gitconfig3.png" alt="gitconfig1"></p>
<h4 id="查看所有配置信息" tabindex="-1"><a class="header-anchor" href="#查看所有配置信息"><span>查看所有配置信息</span></a></h4>
<p><code v-pre>git config --list</code></p>
<p><img src="@source/note/Git/img/gitconfig4.png" alt="gitconfig1"></p>
<h3 id="git-rebase详解" tabindex="-1"><a class="header-anchor" href="#git-rebase详解"><span>git rebase详解</span></a></h3>
<h4 id="第一个作用-合并commit提交" tabindex="-1"><a class="header-anchor" href="#第一个作用-合并commit提交"><span>第一个作用：合并commit提交</span></a></h4>
<p>一般情况下，我们进行开发时，都是从master分支拉一个自己的开发分支，进行代码修改操作，再<code v-pre>git add</code>以及<code v-pre>git commit</code>之后将我们修改好的代码<code v-pre>git push</code>到远程仓库。</p>
<p>但是，很多情况下，我们并不会仅仅在本地<code v-pre>git commit</code>一次，而是会执行很多次，而我们知道，每一个的<code v-pre>git commit</code>都会形成一个git节点，而如果我们把这些节点都push到远端，就会使项目的git日志很乱，因为你的这些commit对于其他同学来说都仅仅是为了完成你对应的修改工作，他们希望的是，你能在一次commit操作中把你的修改全部完成，这时，就可以用到我们的<code v-pre>git rebase</code>操作了，在<code v-pre>git push</code>之前，我们可以将几次本地的commit操作合并，这样，我们推送到远端的commit操作就只有一个了，更利于<a href="https://so.csdn.net/so/search?q=%E9%A1%B9%E7%9B%AE%E7%AE%A1%E7%90%86&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">项目管理</a>。</p>
<p><a href="https://so.csdn.net/so/search?q=rebase&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">rebase</a>为<strong>变基</strong>，git rebase -i 命令可以压缩合并多次提交，执行<code v-pre>git rebase i hash</code>就可以进行变基。</p>
<p><img src="@source/note/Git/img/gitrebase1.png" alt="gitrebase1"></p>
<p>则会根据你设置的git默认编辑器打开我们需要修改的地方，我这里默认是vim，你也可以设置成其他</p>
<p><img src="@source/note/Git/img/gitrebase3.png" alt="gitrebase3"></p>
<p>这个是里面的提示：</p>
<ul>
<li>pick：保留该commit（缩写:p）</li>
<li>reword：保留该commit，但我需要修改该commit的注释（缩写:r）</li>
<li>edit：保留该commit, 但我要停下来修改该提交(不仅仅修改注释)（缩写:e）</li>
<li>squash：将该commit和前一个commit合并（缩写:s）用的比较多</li>
<li>fixup：将该commit和前一个commit合并，但我不要保留该提交的注释信息（缩写:f）</li>
<li>exec：执行shell命令（缩写:x）</li>
<li>drop：我要丢弃该commit（缩写:d）</li>
</ul>
<p>根据自己的需要修改commit信息</p>
<p><img src="@source/note/Git/img/gitrebase2.png" alt="gitrebase2"></p>
<p><img src="@source/note/Git/img/gitrebase6.png" alt="gitrebase2"></p>
<p>我这里修改了commit信息，想着是合并的，但是前面没有截图，是向把最近两条commit信息合并为一条的。进入了vim直接进行编辑修改commit信息，修改完成后保存退出，就会出现如下信息。</p>
<p><img src="@source/note/Git/img/gitrebase4.png" alt="gitrebase4"></p>
<p>出现如下信息代表修改成功，我们git log查看是否成功</p>
<p><img src="@source/note/Git/img/gitrebase5.png" alt="gitrebase5"></p>
<p>修改成功，以前我们本地原本有两条commit信息，如果push到远端就是两条commit提交记录，修改后，push到远端，只会显示一条，这个是git rebase的第一个作用。</p>
<h4 id="第二个作用-合并分支" tabindex="-1"><a class="header-anchor" href="#第二个作用-合并分支"><span>第二个作用：合并分支</span></a></h4>
<p>我们在日常开发中已经知道了<code v-pre>git merge 分支名</code>可以合并代码，为什么我们还要使用<code v-pre>git rebase 分支名</code>合并代码呢？这两者肯定是有所不同的，接下来我们就来探讨一下两者的不同点。</p>
<p>首先我们在master分支上修改了代码，然后使用<code v-pre>git status</code>查看我们是否修改了</p>
<p><img src="@source/note/Git/img/gitrebase9.png" alt="gitrebase9"></p>
<p>证明我们修改了master分支的代码，然后我们提交并push到远程。</p>
<p><img src="@source/note/Git/img/gitrebase10.png" alt="gitrebase10"></p>
<p>我们知道，我们现在master分支的代码是最新的，但是我们dev分支的代码还不是最新的，因此我们需要把dev分支的代码更新到最新状态，如果dev分支的代码有所改动，我们可以使用<code v-pre>git stash</code>先存在git栈中，然后使用<code v-pre>git merge master</code>合并master分支的代码到dev分支。</p>
<p><img src="@source/note/Git/img/gitrebase8.png" alt="gitrebase8"></p>
<p>合并完成后，我们发现在dev分支多了一条合并master分支的代码到dev分支的git记录，有所区别的地方就在这里了，<code v-pre>git rebase 分支名</code>就不会出现这一条合并的记录。</p>
<hr>
<p>其他理解：我们先从 <code v-pre>master</code> 分支切出一个 <code v-pre>dev</code> 分支，进行开发：</p>
<p><img src="@source/note/Git/img/checkoutbranch.png" alt="checkoutbranch"></p>
<p>其他同学完成了一次 <code v-pre>hotfix</code>，并合并入了 <code v-pre>master</code> 分支，此时 <code v-pre>master</code> 已经领先于你的 <code v-pre>dev</code>分支了：</p>
<p><img src="@source/note/Git/img/checkoutbranch1.png" alt="checkoutbranch1"></p>
<p>使用 <code v-pre>rebase</code> 来同步其他同学修改的结果，来保证自己的代码是最新的版本</p>
<p><img src="@source/note/Git/img/checkoutbranch2.png" alt="checkoutbranch2"></p>
<p><code v-pre>git rebase</code> 做了什么操作呢？</p>
<p>首先，<code v-pre>git</code> 会把 <code v-pre>dev</code> 分支里面的每个 <code v-pre>commit</code> 取消掉；
其次，把上面的操作临时保存成 <code v-pre>patch</code> 文件，存在 <code v-pre>.git/rebase</code> 目录下；
然后，把 <code v-pre>dev</code> 分支更新到最新的 <code v-pre>master</code> 分支；
最后，把上面保存的 <code v-pre>patch</code> 文件应用到 <code v-pre>dev</code> 分支上。</p>
<p>在 <code v-pre>rebase</code> 的过程中，也许会出现冲突 <code v-pre>conflict</code>。在这种情况，<code v-pre>git</code> 会停止 <code v-pre>rebase</code> 并会让你去解决冲突。在解决完冲突后，用 <code v-pre>git add</code> 命令去更新这些内容。注意，你无需执行 <code v-pre>git commit-m 'xxx'</code>，只要执行 <code v-pre>git rebase continue</code></p>
<p>这样 <code v-pre>git</code> 会继续应用余下的 <code v-pre>patch</code> 补丁文件。在任何时候，我们都可以用 <code v-pre>--abort</code> 参数来终止 <code v-pre>rebase</code> 的行动，并且分支会回到 <code v-pre>rebase</code> 开始前的状态。</p>
<blockquote>
<p>根据上文来看，<code v-pre>git-rebase</code> 很完美，解决了我们的两个问题：
1.合并 <code v-pre>commit</code> 记录，保持分支整洁；
2.相比 <code v-pre>merge</code> 来说会减少分支合并的记录；</p>
<p>缺点就是：</p>
<ol>
<li>如果你的分支不只有你在进行开发，那么<code v-pre>git-rebase</code>可能会导致提交记录的丢失。</li>
</ol>
</blockquote>
<h3 id="git仓库中添加子仓库" tabindex="-1"><a class="header-anchor" href="#git仓库中添加子仓库"><span>git仓库中添加子仓库</span></a></h3>
<p>如果你在你的携带git仓库的目录下，有子git仓库，那么你执行<code v-pre>git add .</code>的时候，会出现<code v-pre>“You've added another git repository inside your current repository.&quot;</code>的报错。</p>
<p>可以这么处理：</p>
<p>首先，建议你的远程仓库的命名跟子仓库相同，这样不会有两个仓库存在，或许你可以配置.gitignore去解决这个问题，但是不建议这么做，会比较繁琐。</p>
<ul>
<li>
<p>添加子仓库地址</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">git</span> submodule <span class="token function">add</span> 你的子仓库的地址</span>
<span class="line"><span class="token comment"># 也就是上面所说，如果的你子仓库命名和本地目录下的不一样，就会克隆一个项目下来，多了一层结构，如果相同</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果出现<code v-pre>xxx already exists in the index</code>提示，请使用如下命令，清除缓存：</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">--cached</span> 文件名</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>到父级仓库进行提交即可</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span></span>
<span class="line"><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"xxx"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<p>注意，成功后你得父级会生成<code v-pre>.gitmodules</code>文件</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token punctuation">[</span>submodule <span class="token string">"jira-project"</span><span class="token punctuation">]</span></span>
<span class="line">	path <span class="token operator">=</span> jira<span class="token operator">-</span>project</span>
<span class="line">	url <span class="token operator">=</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>gitee<span class="token punctuation">.</span>com<span class="token operator">/</span>zzb1049<span class="token operator">/</span>jira<span class="token operator">-</span>project<span class="token punctuation">.</span>git</span>
<span class="line"><span class="token punctuation">[</span>submodule <span class="token string">"Rudex/redux-learning"</span><span class="token punctuation">]</span></span>
<span class="line">	path <span class="token operator">=</span> Rudex<span class="token operator">/</span>redux<span class="token operator">-</span>learning</span>
<span class="line">	url <span class="token operator">=</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>gitee<span class="token punctuation">.</span>com<span class="token operator">/</span>zzb1049<span class="token operator">/</span>redux<span class="token operator">-</span>learning<span class="token punctuation">.</span>git</span>
<span class="line"><span class="token punctuation">[</span>submodule <span class="token string">"React/react-pratice"</span><span class="token punctuation">]</span></span>
<span class="line">	path <span class="token operator">=</span> React<span class="token operator">/</span>react<span class="token operator">-</span>pratice</span>
<span class="line">	url <span class="token operator">=</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>gitee<span class="token punctuation">.</span>com<span class="token operator">/</span>zzb1049<span class="token operator">/</span>react<span class="token operator">-</span>pratice<span class="token punctuation">.</span>git</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


