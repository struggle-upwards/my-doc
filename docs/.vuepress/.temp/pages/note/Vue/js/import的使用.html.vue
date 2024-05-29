<template><div><h1 id="import的使用" tabindex="-1"><a class="header-anchor" href="#import的使用"><span>import的使用</span></a></h1>
<p>###import不导入文件对象</p>
<p>import还可以不导入文件对象，仅仅是使用文件模块提供的功能。也就是传说中的，import将文件模块仅仅最为副作用进行导入，而不获取文件模块的接口。</p>
<p>在项目中，实践的地方，例如一个vue项目，我们需要给vue对象挂载很多东西，但是全部写在<code v-pre>src/main.js</code> 文件中，又会显得特别啰嗦，不利于维护，也没能体现工程化的理念。所以我们常常单独新建一个文件<code v-pre>lib/init.js</code> ,然后在这个 <code v-pre>init.js</code> 文件中，编写相关逻辑。这个文件的作用，仅仅是执行一遍，我们不期望这个文件暴露什么变量，所以没必要获取文件对象。那么这个时候，<code v-pre>import</code> 关键字的另一个作用就体现出来了：
<code v-pre>main.js</code> ：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token string">'./lib/init.js'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


