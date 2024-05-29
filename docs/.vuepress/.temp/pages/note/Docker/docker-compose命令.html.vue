<template><div><p><code v-pre>docker-compose</code>是一个用于定义和运行多容器Docker应用程序的工具。通过一个<code v-pre>docker-compose.yml</code>文件，你可以配置你的应用服务，然后使用<code v-pre>docker-compose</code>命令来创建和启动所有服务。以下是一些常用的<code v-pre>docker-compose</code>命令：</p>
<h3 id="基本命令" tabindex="-1"><a class="header-anchor" href="#基本命令"><span>基本命令</span></a></h3>
<ul>
<li>
<p><strong><code v-pre>docker-compose up</code></strong></p>
</li>
<li>
<ul>
<li>启动和运行整个应用。默认情况下，<code v-pre>docker-compose up</code>会尝试自动构建任何尚未构建的镜像。如果你想强制它重新构建镜像，可以使用<code v-pre>--build</code>选项。</li>
</ul>
</li>
<li>
<p><strong><code v-pre>docker-compose down</code></strong></p>
</li>
<li>
<ul>
<li>停止并删除容器、网络、卷和镜像创建的<code v-pre>docker-compose up</code>。</li>
</ul>
</li>
</ul>
<h3 id="构建和镜像管理" tabindex="-1"><a class="header-anchor" href="#构建和镜像管理"><span>构建和镜像管理</span></a></h3>
<ul>
<li>
<p><strong><code v-pre>docker-compose build</code></strong></p>
</li>
<li>
<ul>
<li>构建或重新构建服务中定义的镜像。</li>
</ul>
</li>
<li>
<p><strong><code v-pre>docker-compose push</code></strong></p>
</li>
<li>
<ul>
<li>将服务镜像推送到Docker Hub或其他镜像仓库。</li>
</ul>
</li>
<li>
<p><strong><code v-pre>docker-compose pull</code></strong></p>
</li>
<li>
<ul>
<li>拉取服务依赖的镜像。</li>
</ul>
</li>
</ul>
<h3 id="服务管理" tabindex="-1"><a class="header-anchor" href="#服务管理"><span>服务管理</span></a></h3>
<ul>
<li>
<p><strong><code v-pre>docker-compose start</code></strong></p>
</li>
<li>
<ul>
<li>启动已经存在的服务容器。</li>
</ul>
</li>
<li>
<p><strong><code v-pre>docker-compose stop</code></strong></p>
</li>
<li>
<ul>
<li>停止正在运行的容器而不删除它们。与<code v-pre>docker-compose down</code>不同，不会删除容器和网络。</li>
</ul>
</li>
<li>
<p><strong><code v-pre>docker-compose restart</code></strong></p>
</li>
<li>
<ul>
<li>重启服务。</li>
</ul>
</li>
<li>
<p><strong><code v-pre>docker-compose pause</code></strong></p>
</li>
<li>
<ul>
<li>暂停服务中的容器。</li>
</ul>
</li>
<li>
<p><strong><code v-pre>docker-compose unpause</code></strong></p>
</li>
<li>
<ul>
<li>恢复服务中已暂停的容器。</li>
</ul>
</li>
</ul>
<h3 id="查看服务状态和日志" tabindex="-1"><a class="header-anchor" href="#查看服务状态和日志"><span>查看服务状态和日志</span></a></h3>
<ul>
<li>
<p><strong><code v-pre>docker-compose ps</code></strong></p>
</li>
<li>
<ul>
<li>列出项目中当前的容器。</li>
</ul>
</li>
<li>
<p><strong><code v-pre>docker-compose logs</code></strong></p>
</li>
<li>
<ul>
<li>查看服务的日志输出。可以指定服务名称来查看特定服务的日志。</li>
</ul>
</li>
</ul>
<h3 id="运行一次性命令" tabindex="-1"><a class="header-anchor" href="#运行一次性命令"><span>运行一次性命令</span></a></h3>
<ul>
<li>
<p><strong><code v-pre>docker-compose run</code></strong></p>
</li>
<li>
<ul>
<li>在一个新容器中运行一个一次性命令。例如，<code v-pre>docker-compose run app bash</code>会在<code v-pre>app</code>服务的容器中启动一个新的<code v-pre>bash</code>会话。</li>
</ul>
</li>
<li>
<p><strong><code v-pre>docker-compose exec</code></strong></p>
</li>
<li>
<ul>
<li>在运行中的容器上执行命令。与<code v-pre>run</code>不同，<code v-pre>exec</code>会在<strong>已经存在且正在运行</strong>的容器中执行命令。</li>
</ul>
</li>
</ul>
<h3 id="其他命令" tabindex="-1"><a class="header-anchor" href="#其他命令"><span>其他命令</span></a></h3>
<ul>
<li>
<p><strong><code v-pre>docker-compose config</code></strong></p>
</li>
<li>
<ul>
<li>验证并查看配置。这个命令可以用来检查配置文件的语法是否正确。</li>
</ul>
</li>
<li>
<p><strong><code v-pre>docker-compose version</code></strong></p>
</li>
<li>
<ul>
<li>显示Docker Compose的版本信息。</li>
</ul>
</li>
</ul>
</div></template>


