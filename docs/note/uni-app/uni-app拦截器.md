# uni-app拦截器







### 配置uni.request的拦截器

```js
import { useMemberStore } from "../stores/modules/useMemberStore"

// 设置请求基地址
const baseUrl = "https://pcapi-xiaotuxian-front-devtest.itheima.net"

uni.addInterceptor('request', {
    invoke(options) {
        // request 触发前拼接 url 
        options.url = baseUrl + options.url

        // request 添加请求头
        options.header = {
            ...options.header,
            'source-client': 'miniapp'
        }

        //  设置请求超时时间(10秒)
        options.timeout = 10000
        // 添加 token 请求头标识(用户认证)
        const memberStore = useMemberStore()
        const token = memberStore.profile?.token
        if (token) {
            options.header.Authorization = token
        }

    }

})
```



### 请求页面

```js
import '@/utils/http.js'


uni.request({
  url: "/home/banner",
  method: 'get',
  data: {
    distributionSite: 1
  },
  success: (res) => {
    bannerList.value = res.data.result
    console.log(res.data.result)
  },
  fail: (err) => {
    console.log(err)
  },
})
```









**options 参数说明**

| 参数名               | 类型                      | 必填 | 默认值 | 说明                                                         | 平台差异说明                                                 |
| :------------------- | :------------------------ | :--- | :----- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| url                  | String                    | 是   |        | 开发者服务器接口地址                                         |                                                              |
| data                 | Object/String/ArrayBuffer | 否   |        | 请求的参数                                                   | App 3.3.7 以下不支持 ArrayBuffer 类型                        |
| header               | Object                    | 否   |        | 设置请求的 header，header 中不能设置 Referer                 | App、H5端会自动带上cookie，且H5端不可手动修改                |
| method               | String                    | 否   | GET    | 有效值详见下方说明                                           |                                                              |
| timeout              | Number                    | 否   | 60000  | 超时时间，单位 ms                                            | H5(HBuilderX 2.9.9+)、APP(HBuilderX 2.9.9+)、微信小程序（2.10.0）、支付宝小程序 |
| dataType             | String                    | 否   | json   | 如果设为 json，会对返回的数据进行一次 JSON.parse，非 json 不会进行 JSON.parse |                                                              |
| responseType         | String                    | 否   | text   | 设置响应的数据类型。合法值：text、arraybuffer                | 支付宝小程序不支持                                           |
| sslVerify            | Boolean                   | 否   | true   | 验证 ssl 证书                                                | 仅App安卓端支持（HBuilderX 2.3.3+），不支持离线打包          |
| withCredentials      | Boolean                   | 否   | false  | 跨域请求时是否携带凭证（cookies）                            | 仅H5支持（HBuilderX 2.6.15+）                                |
| firstIpv4            | Boolean                   | 否   | false  | DNS解析时优先使用ipv4                                        | 仅 App-Android 支持 (HBuilderX 2.8.0+)                       |
| enableHttp2          | Boolean                   | 否   | false  | 开启 http2                                                   | 微信小程序                                                   |
| enableQuic           | Boolean                   | 否   | false  | 开启 quic                                                    | 微信小程序                                                   |
| enableCache          | Boolean                   | 否   | false  | 开启 cache                                                   | 微信小程序、抖音小程序 2.31.0+                               |
| enableHttpDNS        | Boolean                   | 否   | false  | 是否开启 HttpDNS 服务。如开启，需要同时填入 httpDNSServiceId 。 HttpDNS 用法详见 [移动解析HttpDNS](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/HTTPDNS.html) | 微信小程序                                                   |
| httpDNSServiceId     | String                    | 否   |        | HttpDNS 服务商 Id。 HttpDNS 用法详见 [移动解析HttpDNS](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/HTTPDNS.html) | 微信小程序                                                   |
| enableChunked        | Boolean                   | 否   | false  | 开启 transfer-encoding chunked                               | 微信小程序                                                   |
| forceCellularNetwork | Boolean                   | 否   | false  | wifi下使用移动网络发送请求                                   | 微信小程序                                                   |
| enableCookie         | Boolean                   | 否   | false  | 开启后可在headers中编辑cookie                                | 支付宝小程序 10.2.33+                                        |
| cloudCache           | Object/Boolean            | 否   | false  | 是否开启云加速（详见[云加速服务](https://smartprogram.baidu.com/docs/develop/extended/component-codeless/cloud-speed/introduction/)） | 百度小程序 3.310.11+                                         |
| defer                | Boolean                   | 否   | false  | 控制当前请求是否延时至首屏内容渲染后发送                     | 百度小程序 3.310.11+                                         |
| success              | Function                  | 否   |        | 收到开发者服务器成功返回的回调函数                           |                                                              |
| fail                 | Function                  | 否   |        | 接口调用失败的回调函数                                       |                                                              |
| complete             | Function                  | 否   |        | 接口调用结束的回调函数（调用成功、失败都会执行）             |                                                              |