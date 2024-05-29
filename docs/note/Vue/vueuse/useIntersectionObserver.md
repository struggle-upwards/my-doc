# useIntersectionObserver

### 响应式监听目标元素的可见性




```js
import { useIntersectionObserver } from '@vueuse/core'
const lazyPlugin = {
  install(app) {
    // 配置此应用
    app.directive('img-lazy', {
      mounted(el, binding) {
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          if (isIntersecting) {
            el.src = binding.value
            stop()
              
          }
        })
      }
    })
  }
}
export { lazyPlugin }
```



https://www.vueusejs.com/core/useIntersectionObserver/
