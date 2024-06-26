<template><div><h1 id="进程" tabindex="-1"><a class="header-anchor" href="#进程"><span>进程</span></a></h1>
<h3 id="进程的定义" tabindex="-1"><a class="header-anchor" href="#进程的定义"><span>进程的定义</span></a></h3>
<blockquote>
<p>进程（Process）是计算机中正在运行的程序的实例。它是操作系统分配资源和调度执行的基本单位。进程不仅仅是程序的代码，还包括程序执行期间所需的资源，如CPU时间、内存空间、文件和I/O设备等。</p>
</blockquote>
<h3 id="进程的组成" tabindex="-1"><a class="header-anchor" href="#进程的组成"><span>进程的组成</span></a></h3>
<blockquote>
<p>一个进程是由进程控制块(PCB)，数据段，程序段组成</p>
</blockquote>
<h3 id="pcb-进程控制块-进程存在的唯一标识" tabindex="-1"><a class="header-anchor" href="#pcb-进程控制块-进程存在的唯一标识"><span>PCB(进程控制块) --进程存在的唯一标识</span></a></h3>
<blockquote>
<p>记录了一个进程的CPU使用率，磁盘IO读写字节，内存占用率，进程状态(阻塞态，就绪态)</p>
<ul>
<li><strong>进程标识信息</strong>：如进程ID（PID）、父进程ID（PPID）。</li>
<li><strong>处理器状态信息</strong>：如程序计数器、处理器寄存器。</li>
<li><strong>内存管理信息</strong>：如基址寄存器、界限寄存器、页表信息。</li>
<li><strong>调度和状态信息</strong>：如进程优先级、调度状态。</li>
<li><strong>资源分配信息</strong>：如打开的文件、I/O设备。</li>
</ul>
</blockquote>
<h3 id="进程的特征" tabindex="-1"><a class="header-anchor" href="#进程的特征"><span>进程的特征</span></a></h3>
<blockquote>
<h3 id="_1-动态性" tabindex="-1"><a class="header-anchor" href="#_1-动态性"><span>1. <strong>动态性</strong></span></a></h3>
<p>进程是一个动态的实体，它代表程序的执行过程。进程在其生命周期中会不断地进行状态转换，如从就绪状态变为运行状态，从运行状态变为等待状态等。</p>
<h3 id="_2-独立性" tabindex="-1"><a class="header-anchor" href="#_2-独立性"><span>2. <strong>独立性</strong></span></a></h3>
<p>每个进程都有自己独立的地址空间和资源，不会与其他进程直接共享其内存空间。操作系统通过进程控制块（PCB）来管理进程的独立性。</p>
<h3 id="_3-并发性" tabindex="-1"><a class="header-anchor" href="#_3-并发性"><span>3. <strong>并发性</strong></span></a></h3>
<p>多个进程可以同时存在，并在操作系统的调度下并发执行。操作系统通过多任务机制和时间片轮转等调度算法来实现进程的并发执行。</p>
<h3 id="_4-异步性" tabindex="-1"><a class="header-anchor" href="#_4-异步性"><span>4. <strong>异步性</strong></span></a></h3>
<p>进程按照各自独立的速度推进，进程的执行不必同步进行。一个进程的执行速度和进度通常不依赖于其他进程。</p>
</blockquote>
<h3 id="进程的状态" tabindex="-1"><a class="header-anchor" href="#进程的状态"><span>进程的状态</span></a></h3>
<blockquote>
<ol>
<li><strong>创建态</strong>：当处理程序从磁盘读取代码并编译成可执行文件后，通过系统调用进行进程创建。系统为该进程分配内存并创建相应的进程控制块（PCB），这时进程处于创建态。</li>
<li><strong>就绪态</strong>：进程创建完成后，系统将其转换为就绪态。此时，进程已经准备好运行，等待CPU分配时间片。所有处于就绪态的进程保存在就绪队列中，等待调度程序的调度。</li>
<li><strong>运行态</strong>：当调度程序选择一个处于就绪态的进程并将CPU分配给它时，进程进入运行态。进程在运行态时执行其指令，但可能因为多种原因（如时间片用完、被其他优先级更高的进程抢占、发生中断等）被中止，并转换回就绪态。</li>
<li><strong>阻塞态</strong>：如果运行中的进程需要等待某些事件（如I/O操作完成、资源可用等），它会进入阻塞态。在阻塞态下，进程暂时停止运行，释放CPU给其他进程。当等待的事件发生后，系统会将该进程从阻塞态转换回就绪态，以便在下次被调度时继续执行。</li>
<li><strong>终止态</strong>：当进程执行完所有指令或由于某些错误（如语法错误、系统崩溃等）无法继续运行时，它进入终止态。系统会进行垃圾回收，销毁进程并释放其占用的所有资源，包括内存。</li>
</ol>
</blockquote>
<h3 id="进程状态转换" tabindex="-1"><a class="header-anchor" href="#进程状态转换"><span>进程状态转换</span></a></h3>
<blockquote>
<p>原语的目的是实现进程状态切换的过程不会被中断，本质靠开启开中断，和关中断两条特权指令实现。</p>
<p>关中断:屏蔽外界所有中断信号</p>
<p>开中断:感知外界的中断信号并作出反应，同时执行关中断和开中断这部分未执行的中断信号</p>
</blockquote>
<p><strong>例如:阻塞原语</strong></p>
<blockquote>
<p>阻塞原语会保留进程的状态，并更改PCB的state值，让进程从运行态转换为阻塞态，直到io读写完成，再重新恢复为就绪态，等待系统调度</p>
</blockquote>
<blockquote>
<p>进程状态的转换依靠原语实现，最主要是:</p>
<ul>
<li>
<p>更改PCB的state状态</p>
</li>
<li>
<p>将PCB插入到转换状态的队列中</p>
</li>
<li>
<p>还可能伴随回收的执行</p>
</li>
</ul>
</blockquote>
</div></template>


