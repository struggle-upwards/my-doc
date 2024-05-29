#### vue路由跳转报错Avoided redundant navigation to current location: “/xxxxxx“

解决方法:

在main.js的路由下加上这段代码

```js
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
```



