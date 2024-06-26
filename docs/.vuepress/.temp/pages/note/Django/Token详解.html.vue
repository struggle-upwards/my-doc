<template><div><h1 id="什么是token-token是用来干嘛的" tabindex="-1"><a class="header-anchor" href="#什么是token-token是用来干嘛的"><span>什么是token？token是用来干嘛的？</span></a></h1>
<p>相信很多从事计算机行业的朋友都听说过token这么个东西，但是其他行业的人就很少了解到token，下面就给大家来详细介绍一下token是什么意思？token是用来干嘛的这一块的内容，希望能帮助到大家。</p>
<h3 id="🏻-token是什么意思" tabindex="-1"><a class="header-anchor" href="#🏻-token是什么意思"><span><strong>🏻 token是什么意思</strong></span></a></h3>
<p>作为计算机术语时，是“令牌”的意思。Token是服务端生成的一串字符串，以作客户端进行请求的一个令牌，当第一次登录后，服务器生成一个Token便将此Token返回给客户端，以后客户端只需带上这个Token前来请求数据即可，无需再次带上用户名和密码。</p>
<p>token其实说的更通俗点可以叫暗号，在一些数据传输之前，要先进行暗号的核对，不同的暗号被授权不同的数据操作。说白了token是一个身份卡，有权限的作用。例如在USB1.1协议中定义了4类数据包：token包、data包、handshake包和special包。主机和USB设备之间连续数据的交换可以分为三个阶段，第一个阶段由主机发送token包，不同的token包内容不一样（暗号不一样）可以告诉设备做不同的工作，第二个阶段发送data包，第三个阶段由设备返回一个handshake包。</p>
<h3 id="🏻-token产生的背景" tabindex="-1"><a class="header-anchor" href="#🏻-token产生的背景"><span><strong>🏻 token产生的背景</strong></span></a></h3>
<p>HTTP 是一种没有状态的协议，也就是它并不知道是谁是访问应用。这里我们把用户看成是客户端，客户端使用用户名还有密码通过了身份验证，不过下回这个客户端再发送请求时候，还得再验证一下。</p>
<h3 id="🏻-token是用来干嘛的" tabindex="-1"><a class="header-anchor" href="#🏻-token是用来干嘛的"><span><strong>🏻 token是用来干嘛的</strong></span></a></h3>
<p>使用token机制的身份验证方法，在服务器端不需要存储用户的登录记录。</p>
<p>大概的流程：</p>
<p>1️⃣客户端使用用户名和密码请求登录。</p>
<p>2️⃣服务端收到请求，验证用户名和密码。</p>
<p>3️⃣验证成功后，服务端会生成一个token，然后把这个token发送给客户端。</p>
<p>4️⃣客户端收到token后把它存储起来，可以放在cookie或者Local Storage（本地存储）里。</p>
<p>5️⃣客户端每次向服务端发送请求的时候都需要带上服务端发给的token。</p>
<p>6️⃣服务端收到请求，然后去验证客户端请求里面带着token，如果验证成功，就向客户端返回请求的数据。</p>
<h4 id="🌱-token的使用小结" tabindex="-1"><a class="header-anchor" href="#🌱-token的使用小结"><span><strong>🌱 token的使用小结：</strong></span></a></h4>
<p>◾ 前端登陆的时候向服务器发送请求，服务器验证成功，会生成一个token</p>
<p>◾ 前端会存储这个token，放在session或cookie中，用于之后的业务请求身份验证</p>
<p>◾ 拿着这个token，可以在当前登录的账号下进行请求业务，发送请求时，token会放在请求头里，服务器收到这个业务请求，验证token，成功就允许这个请求获取数据</p>
<p>◾ token可以设置失效期</p>
<h3 id="🏻-利用token机制进行登录认证-可以有以下方式" tabindex="-1"><a class="header-anchor" href="#🏻-利用token机制进行登录认证-可以有以下方式"><span><strong>🏻 利用token机制进行登录认证，可以有以下方式：</strong></span></a></h3>
<h4 id="a-用设备mac地址作为token" tabindex="-1"><a class="header-anchor" href="#a-用设备mac地址作为token"><span><strong>a. 用设备mac地址作为token</strong></span></a></h4>
<p>客户端：客户端在登录时获取设备的mac地址，将其作为参数传递到服务端</p>
<p>服务端：服务端接收到该参数后，便用一个变量来接收，同时将其作为token保存在数据库，并将该token设置到session中。客户端每次请求的时候都要统一拦截，将客户端传递的token和服务器端session中的token进行对比，相同则登录成功，不同则拒绝。</p>
<p>此方式客户端和服务端统一了唯一的标识，并且保证每一个设备拥有唯一的标识。缺点是服务器端需要保存mac地址；优点是客户端无需重新登录，只要登录一次以后一直可以使用，对于超时的问题由服务端进行处理。</p>
<h4 id="b-用sessionid作为token" tabindex="-1"><a class="header-anchor" href="#b-用sessionid作为token"><span><strong>b. 用sessionid作为token</strong></span></a></h4>
<p>客户端：客户端携带用户名和密码登录</p>
<p>服务端：接收到用户名和密码后进行校验，正确就将本地获取的sessionid作为token返回给客户端，客户端以后只需带上请求的数据即可。</p>
<p>此方式的优点是方便，不用存储数据，缺点就是当session过期时，客户端必须重新登录才能请求数据。</p>
<p>当然，对于一些保密性较高的应用，可以采取两种方式结合的方式，将设备mac地址与用户名密码同时作为token进行认证。</p>
<h3 id="🏻-app利用token机制进行身份认证" tabindex="-1"><a class="header-anchor" href="#🏻-app利用token机制进行身份认证"><span><strong>🏻 APP利用token机制进行身份认证</strong></span></a></h3>
<p>用户在登录APP时，APP端会发送加密的用户名和密码到服务器，服务器验证用户名和密码，如果验证成功，就会生成相应位数的字符产作为token存储到服务器中，并且将该token返回给APP端。</p>
<p>以后APP再次请求时，凡是需要验证的地方都要带上该token，然后服务器端验证token，成功返回所需要的结果，失败返回错误信息，让用户重新登录。其中，服务器上会给token设置一个有效期，每次APP请求的时候都验证token和有效期。</p>
<h4 id="🏻-token的存储" tabindex="-1"><a class="header-anchor" href="#🏻-token的存储"><span><strong>🏻 token的存储</strong></span></a></h4>
<p>token可以存到数据库中，但是有可能查询token的时间会过长导致token丢失（其实token丢失了再重新认证一个就好，但是别丢太频繁，别让用户没事儿就去认证）。</p>
<p>为了避免查询时间过长，可以将token放到内存中。这样查询速度绝对就不是问题了，也不用太担心占据内存，就算token是一个32位的字符串，应用的用户量在百万级或者千万级，也是占不了多少内存的。</p>
<h4 id="🏻-token的加密" tabindex="-1"><a class="header-anchor" href="#🏻-token的加密"><span><strong>🏻 token的加密</strong></span></a></h4>
<p>token是很容易泄露的，如果不进行加密处理，很容易被恶意拷贝并用来登录。加密的方式一般有：</p>
<p>在存储的时候把token进行对称加密存储，用到的时候再解密。</p>
<p>文章最开始提到的签名sign：将请求URL、时间戳、token三者合并，通过算法进行加密处理。</p>
<p>最好是两种方式结合使用。</p>
<p>还有一点，在网络层面上token使用明文传输的话是非常危险的，所以一定要使用<a href="https://so.csdn.net/so/search?q=HTTPS%E5%8D%8F%E8%AE%AE&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">HTTPS协议</a>。</p>
</div></template>


