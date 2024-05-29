# Vue3配置axios模块

**下载axios**

```sh
npm i axios
```



**在utils/http.js中配置**

```js
import axios from "axios";

// 创建实例时配置默认值
const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net/',
  timeout: 5000
})
// 添加请求拦截器
httpInstance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
httpInstance.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  });
export {
    httpInstance
}
```



**可以在apis/xxx.js下测试数据**

```js
import { httpInstance } from '@/utils/http'
const getCategory1 = ()=>{
    return httpInstance({
        url:"/home/category/head"
    })
}
const getCategory2 = ()=>{
    return httpInstance.get("/home/category/head")
}
export {
    getCategory1,
    getCategory2
}
```



**在main.js中调用返回的promise对象**

```js
import { getCategory1,getCategory2 } from './apis/testAPI'

getCategory1().then((res) => {
    console.log(res.data)
})

getCategory2().then((res) => {
    console.log(res.data)
})
```





**可以在stores/xxx.js下**

```js
使用pinia对接口数据,请求方法,参数做持久话存储
```

