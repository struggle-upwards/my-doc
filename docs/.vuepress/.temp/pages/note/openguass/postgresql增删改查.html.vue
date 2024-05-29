<template><div><h2 id="进入数据库" tabindex="-1"><a class="header-anchor" href="#进入数据库"><span>进入数据库</span></a></h2>
<p>gsql postgres</p>
<h3 id="_1-创建用户" tabindex="-1"><a class="header-anchor" href="#_1-创建用户"><span>（1）创建用户：</span></a></h3>
<p><code v-pre>create user 用户名 with password &quot;用户密码&quot;;</code></p>
<h3 id="_2-创建数据库" tabindex="-1"><a class="header-anchor" href="#_2-创建数据库"><span>（2）创建数据库：</span></a></h3>
<p><code v-pre>create database 数据库名 owner 用户名;</code></p>
<h3 id="_3-进入数据库" tabindex="-1"><a class="header-anchor" href="#_3-进入数据库"><span>（3）进入数据库：</span></a></h3>
<p><code v-pre>gsql -d 数据库名 -p 15400 -r</code></p>
<h3 id="_4-创建表" tabindex="-1"><a class="header-anchor" href="#_4-创建表"><span>（4）创建表：</span></a></h3>
<p><code v-pre>create table 表名 (字段名 字段类型,字段名 字段类型);</code>
例：create table mytable (number int,year int);</p>
<h3 id="_5-向表中添加数据" tabindex="-1"><a class="header-anchor" href="#_5-向表中添加数据"><span>（5）向表中添加数据：</span></a></h3>
<p><code v-pre>insert into 表名 values (字段值,字段值);</code>
例：insert into mytable values (1,100),(2,200);</p>
<h3 id="_6-查看数据表" tabindex="-1"><a class="header-anchor" href="#_6-查看数据表"><span>（6）查看数据表：</span></a></h3>
<p><code v-pre>select * from 表名;</code></p>
<p>查询pg_tables表获取当前数据库中所有表的信息（pg_tables是系统视图）</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">select * from pg_tables</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通常我们只关注public中的表，只需要加上以下查询条件即可</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code><span class="line">select tablename from pg_tables where schemaname='public'</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_7-修改表中数据" tabindex="-1"><a class="header-anchor" href="#_7-修改表中数据"><span>（7）修改表中数据：</span></a></h3>
<p><code v-pre>update 表名 set 字段=修改后的字段值 where 字段=字段值;</code>
例：update mytable set year=300 where number=2;</p>
<h3 id="_8-删除数据表中的数据" tabindex="-1"><a class="header-anchor" href="#_8-删除数据表中的数据"><span>（8）删除数据表中的数据：</span></a></h3>
<p><code v-pre>delete 表名 where 字段=字段值;</code>
例：delete mytable where number=1;</p>
<h3 id="_9-增加表中的字段" tabindex="-1"><a class="header-anchor" href="#_9-增加表中的字段"><span>（9）增加表中的字段：</span></a></h3>
<p><code v-pre>alter table 表名 add 字段 字段名;</code>
例1：alter table mytable add country char;
例2：alter table mytable add mail char(20);</p>
<h3 id="_10-退出数据库" tabindex="-1"><a class="header-anchor" href="#_10-退出数据库"><span>（10）退出数据库：</span></a></h3>
<p><code v-pre>\q</code></p>
<h3 id="_11-查看所有用户" tabindex="-1"><a class="header-anchor" href="#_11-查看所有用户"><span>（11）查看所有用户：</span></a></h3>
<p><code v-pre>\du</code></p>
<p>###（12）查看所有数据库：</p>
<p><code v-pre>\l</code></p>
</div></template>


