# JavaScript高级深入浅出：Promise 详解(ES6)



# 介绍

本文是 JavaScript 高级深入浅出的第 `15` 篇，本文将会对于 Promise 详解以及手写 Promise 的功能以及 API

# 正文

## 1. 异步任务的处理

在 ES6 出来之后，有很多有关于 Promise 的讲解，文件也有很多经典的书籍讲解 Promise

虽然等你学会 Promise 之后，会觉得 Promise 不过如此，但是第一次接触后 Promsie 还是很不好理解

那么我们就以一个实际的例子作为切入口

- 调用一个函数，这个函数中返回网络请求（以定时器模拟）
- 发送网络请求成功，就告知调用者成功，并返回数据
- 发送网络请求失败，就告知调用者失败，并返回失败信息

```js
function request(cb) {
    // 模拟网络请求
    let flag = Math.random() <= 0.5 ? true : false
    setTimeout(() => {
      cb(flag, flag ? '成功的数据' : '失败的信息')
    }, 1000)
  }
  
  console.log('发起请求')
  
  request((status, msg) => {
    console.log(status, msg)
  })
  
  request((s1, m1) => {
      request((s2, m2) => {
          request((s3, m3) => {
              // 出现了回调地狱
          })
      })
  })
```

使用这种回调函数存在的弊端：

- 如果是自己封装的请求方法，必须要设计好
- 如果使用他人库，必须要通过查看文档或源码才能直到如何使用这个函数
- 极容易出现回调地狱

所以，需要一种异步操作的规范，而 Promise 生来就是为了解决异步操作的问题

## 2. Promise

### 2.1 什么是 Promise

`Promise`是一个类，可以翻译为承诺、期约

当通过`new`创建`Promise`实例时，需要传入一个回调函数，我们称之为`executor`

- 这个回调函数会被立刻执行，并传入两个回调参数`resolve`、`reject`
- 当调用`resolve`回调函数时，会执行 Promise 对象的`then`方法传入的回调
- 当调用`reject`回调函数时，会执行 Promise 对象的`catch`方法传入的回调

`Promise`是一个状态机，分为 3 种状态：

- `pending`：待定状态，执行了 executor 后，处于该状态
- `fulfilled`：兑现状态，调用`resolve()`后，Promise 的状态更改为 fullfilled，且无法再次更改
- `rejected`：拒绝状态，调用`reject()`后，Promise 的状态更改为 rejected，且无法再次更改

```js
function request() {
  const flag = Math.random() <= 0.5 ? true : false
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (flag) {
        resolve('成功的消息')
        return
      }
      reject('失败的消息')
    }, 2000)
  })
}

console.log('请求开始')
request()
  .then(msg => console.log(msg), err => console.log(err))
```

### 2.2 resolve 的参数

resolve 传入的参数情况：

- 如果传入的普通的值或对象，那么就会被传递到 then 的参数中
- 如果传入的是一个 Promise，那么当前的 Promise 的状态将会由传入的 Promise 来决定

```js
const newPromise = new Promise((resolve, reject) => {
  resolve('success')
})

new Promise((resolve, reject) => {
  // 当前 Promise 的状态由传入的 Promise 去决定
  resolve(newPromise)
})
  .then(res => {
    console.log('res', res)
  })
  .catch(err => {
    console.log('err', err)
  })
```

- 如果传入的是一个对象，且该对象实现了 then 方法(thenable)，也会执行该 then 方法，并且由该 then 方法决定后续的状态

```js
new Promise((resolve, reject) => {
  // 如果 resolve 传入的是对象，且该对象实现了 then 方法
  // 则该 Promise 的状态由 then 方法决定
  resolve({
    then(resolve, reject) {
      reject('error')
    },
  })
})
  .then(res => {
    console.log('res', res)
  })
  .catch(err => {
    console.log('err', err)
  })
```

### 2.3 Promise 的实例方法

#### 1. then 方法

通过`then`方法可以对 Promise 中的`resolve`进行处理。`then`方法的返回值是一个 Promise 实例

```js
new Promise(resolve => {
  resolve('你好')
}).then(res => console.log(res)) // 会打印你好
```

##### 多次调用 then 方法

同一个 Promise 实例可以调用多个`then`方法，当 Promise 中`resolve`被回调时，所有 then 方法传入的回调函数都会被调用

```js
const promise = new Promise(resolve => {
  resolve('你好')
})

// 同时调用
promise.then(res => console.log(res))
promise.then(res => console.log(res))
promise.then(res => console.log(res))
```

##### then 方法传入的回调函数可以有返回值

如果返回的是普通值，那么这个普通值将作为一个新的 Promise 的`resolve`的值

```js
const promise = new Promise(resolve => {
  resolve('你好')
})

promise.then(() => 'then').then(res => console.log(res)) // 打印 then
// promise.then(() => 'then') 相当于
promise.then(() => {
  return new Promise(resolve => {
    resolve('then')
  })
})
```

如果返回的是 Promise，那么就可以再次调用`then`方法

```js
const promise = new Promise(resolve => {
  resolve('你好')
})
promise
  .then(() => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('success')
      }, 2000)
    })
  })
  .then(msg => {
    // 2 秒后打印 success
    console.log(msg)
  })
```

如果返回的是一个对象，并且该对象实现了 thenable，该 then 函数有两个参数`resolve`、`reject`，则 resolve 的将会传递给下一个 Promise。

```js
const promise = new Promise(resolve => {
  resolve('你好')
})
promise
  .then(() => {
    return {
      then(resolve) {
        return resolve('success')
      },
    }
  })
  .then(msg => {
    // 打印 success
    console.log(msg)
  })
```

#### 2. catch 方法

除了`then`方法的第二个参数来捕获`reject`错误之外，还可以通过`catch`方法，catch 返回一个 Promise

```js
const promise = new Promise((resolve, reject) => {
  reject('error')
})

promise.then(undefined, err => {
  // 打印 error
  console.log(err)
})

// 但是这种写法不太符合`promise/a+`规范
promise.catch(err => {
  // 打印 error
  console.log(err)
})

// 下面是符合`promise/a+`规范的写法
promise
  .then(() => {})
  .catch(err => {
    console.log(err)
  })
// 已知 then 方法也可以返回一个 promise，因此在 then 后面追加 catch，以此来捕获 rejected 的情况，更加具有语义化
```

`catch`方法也是可以多次调用的，只要 Promise 实例的状态为 rejected，那么就会调用`catch`方法

```js
const promise = new Promise((resolve, reject) => {
  reject('error')
})

// 这两个 catch 都会调用
promise.catch(err => {
  console.log(err)
})
promise.catch(err => {
  console.log(err)
})
```

##### catch 方法的返回值

catch 方法也会返回一个`Promise`实例，返回值的情况：

- 普通值，将作为`resolve`的参数

#### 3. finally 方法

finally 是 ES9(ES2018) 新增的一个特性，无论一个`Promise`实例是`fulfilled`或`rejected`，`finally`都会执行。

finally 不接收参数。

```js
const promise = new Promise((resolve, reject) => {
  reject('error')
})

promise
  .then(res => {
    console.log('res:', res)
  })
  .catch(err => {
    console.log(('err', err))
  })
  .finally(() => {
    console.log('finally code execute')
  })
```

### 2.4 Promise 的类方法

#### 1. resolve 方法

如果我们想要将一个现成的数据转换为一个 Promise 实例，那么你可以这么做：

```js
const foo = {
  name: 'alex',
}

function bar(obj) {
  return new Promise(resolve => {
    resolve(obj)
  })
}

bar(foo).then(res => {
  console.log(res)
})
```

还可以直接类方法`resolve()`，使用`Promise.resolve()`相当于`new Promise(resolve => { resolve() })`

```js
function bar(obj) {
  return Promise.resolve(obj)
}
```

resolve 参数形态：

- 参数本身是 Promise
- 参数是原始值/对象
- 参数是一个 thenable

#### 2. reject 方法

与`Promise.resolve()`方法逻辑基本相同，只不过`Promise.reject()`相当于创建一个 Promise 实例，并且 rejected 了

```js
Promise.reject('error').catch(error => {
  console.log('error', error)
})
```

> 注意：与`Promise.resolve()`不同的是，`Promise.reject()`无论传递什么参数都会原样输出

```js
Promise.reject(
  new Promise(resolve => {
    resolve('hello')
  })
).catch(err => {
  // 原样打印 Promise 实例
  console.log('err', err)
})
```

#### 3. all 方法

```
Promise.all()`接收一个`Promise[]`，返回一个`Promise`实例，当所有的 Promise 执行完毕并且都是`fulfilled`时，该实例的状态才会变为`fulfilled`，只要队列中有一个实例的状态是`rejected`，那么该实例的状态也会变为`rejected
```

如果 Promise 队列中所有的实例状态都是`fulfilled`，那么`Promise.all()`返回的实例的状态就会变为`fulfilled`，并且`resolve()`的参数是一个数组，按照顺序放置队列中每个 Promise 成功后的结果

```js
let i = 0
function genPromise() {
  return new Promise(resolve => {
    resolve(`success${(i = i + 1)}`)
  })
}

const promiseArr = [genPromise(), genPromise(), genPromise()]

Promise.all(promiseArr).then(res => {
  // [ 'success1', 'success2', 'success3' ]
  console.log('res', res)
})
```

如果队列中 Promise 实例有一个是`rejected`，那么`Promise.all()`返回的实例就会变为`rejected`状态，并且`reject()`参数是队列中第一个`rejected`的返回值

```js
const promiseArr = [
  genPromise(),
  new Promise((resolve, reject) => {
    reject('error1')
  }),
  new Promise((resolve, reject) => {
    reject('error2')
  }),
]

Promise.all(promiseArr)
  .then(res => {})
  .catch(err => {
    // error 1
    console.log(err)
  })
```

#### 4. allSettled 方法

`all`方法是有缺陷的，如果在 Promise 队列中有一个状态是 rejected，那么我们就无法获取到其他 fullfilled 以及 pending 的 Promise 实例了。

针对这一情况，在 ES11(ES2020) 中新增了一个 API，`Promise.allSettled()`

- 该方法返回的 Promise 实例，会在所有 Promise 实例执行完毕后，状态方可变为`fulfilled`，并且只会是`fulfilled`
- 无论队列中的Promise 实例的状态如何，都能获取到结果
- 打印的结果，会包含状态与值/原因

```js
const promiseArr = [
  new Promise((resolve, reject) => {
    resolve('success1')
  }),
  new Promise((resolve, reject) => {
    reject('error')
  }),
  new Promise((resolve, reject) => {
    resolve('success2')
  }),
]

Promise.allSettled(promiseArr).then(res => {
  // res [
  //   { status: 'fulfilled', value: 'success1' },
  //   { status: 'rejected', reason: 'error' },
  //   { status: 'fulfilled', value: 'success2' }
  // ]
  console.log('res', res)
})
```

#### 5. race 方法

`Promise.race()`同样接收一个 Promise 队列，返回一个 Promise 实例。该方法会对队列任务完成情况进行监听，如果某一个任务最先完成`fulfilled/rejected`，那么返回的实例的状态也会变成对应的`fulfilled/rejected`，同时获取到最先完成的结果

```js
const promiseArr = [
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success1')
    }, 1000)
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('error')
    }, 2000)
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success2')
    }, 3000)
  }),
]

Promise.race(promiseArr)
  .then(res => {
    console.log('res', res)
  })
  .catch(err => {
    console.log('err', err)
  })
// 最终打印 res success1
// 如果第二个任务最先完成，那么就会打印 err error
```

#### 6. any 方法

`Promise.any()`是 ES12 新增的特性，和`Promise.race()`类似，区别在于：

- any 方法会等待一个`fulfilled`状态，才会决定返回 Promise 实例的状态
- 如果队列中所有的实例都是`rejected`状态，那也需要等到所有执行完毕后才会决定返回的 Promise 实例的状态

```js
const promiseArr = [
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success1')
    }, 2200)
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('error')
    }, 2000)
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success2')
    }, 3000)
  }),
]

Promise.any(promiseArr)
  .then(res => {
    console.log('res', res)
  })
  .catch(err => {
    console.log('err', err)
  })
// 遇到第一个 fulfilled，就会转变返回的 Promise 实例的状态
// 如果所有的都是 rejected，那么只有所有执行完毕后，返回的 Promise 实例才会转变
// 并且会抛出一个错误：[AggregateError: All promises were rejected]
```

简单理解来说，`Promise.any()`会等待第一个`fulfilled`的 Promise ，如果队列中没有`fulfilled`，那么就会返回一个错误

## 3. 手写 Promise 的实现

为了更好的梳理思路，可以采用测试先行的方式来实现 Promise，这里我使用`jest`作为功能测试框架

带有注释的是每一步新增的代码

### 3.1 constructor

#### 1. 应该立刻执行构造函数传入的代码



```js
test('应该立刻执行构造函数传入的代码', () => {
  let timer = 0
  new _Promise(() => {
    timer++
  })
  expect(timer).toBe(1)
})
```



```js
class _Promise {
  constructor(executor) {
    executor()
  }
}
```

#### 2. promise 有 3 种状态



```js
test('promise 有 3 种状态', () => {
  const p1 = new _Promise()
  expect(p1.status).toBe('pending')
  const p2 = new _Promise(resolve => resolve())
  expect(p2.status).toBe('fulfilled')
  const p3 = new _Promise((resolve, reject) => reject())
  expect(p3.status).toBe('rejected')
})
```



```js
// 新增 3 种状态
const STATUS_PENDING = 'pending'
const STATUS_FULFILLED = 'fulfilled'
const STATUS_REJECTED = 'rejected'

class _Promise {
  constructor(executor = () => {}) {
    // 立即执行构造函数，并且状态变为 pending
    this.status = STATUS_PENDING
    const resolve = () => {
      // 执行 resolve 后，状态变为 fulfilled
      this.status = STATUS_FULFILLED
    }
    const reject = () => {
      // 执行 reject 后，状态变为 rejected
      this.status = STATUS_REJECTED
    }
    // 传入的回调会有两个参数 resolve/reject
    executor(resolve, reject)
  }
}
```

#### 3. 执行 resolve、reject 后状态固化

```js
test('执行 resolve、reject 后状态固化 ', () => {
  const p1 = new _Promise((resolve, reject) => {
    resolve()
    reject()
  })
  expect(p1.status).toBe('fulfilled')
  const p2 = new _Promise((resolve, reject) => {
    reject()
    resolve()
  })
  expect(p2.status).toBe('rejected')
})
```



```js
const STATUS_PENDING = 'pending'
const STATUS_FULFILLED = 'fulfilled'
const STATUS_REJECTED = 'rejected'

export class _Promise {
  constructor(executor = () => {}) {
    this.status = STATUS_PENDING
    const resolve = () => {
      // 如果状态时 PENDING 时才会执行代码
      if (this.status === STATUS_PENDING) {
        this.status = STATUS_FULFILLED
      }
    }
    const reject = () => {
      // 如果状态时 PENDING 时才会执行代码
      if (this.status === STATUS_PENDING) {
        this.status = STATUS_REJECTED
      }
    }
    executor(resolve, reject)
  }
}
```

### 3.2 then

#### 1. then 方法可以接收两个参数，可以处理 resolve 和 reject



```js
test('then 方法可以接收两个参数，可以处理 resolve 和 reject', () => {
  new _Promise(resolve => {
    resolve('success')
  }).then(res => {
    expect(res).toBe('success')
  })
  new _Promise((resolve, reject) => {
    reject('error')
  }).then(undefined, err => {
    expect(err).toBe('error')
  })
})
```



```js
const STATUS_PENDING = 'pending'
const STATUS_FULFILLED = 'fulfilled'
const STATUS_REJECTED = 'rejected'

export class _Promise {
  constructor(executor = () => {}) {
    this.status = STATUS_PENDING
    this.value = undefined
    this.reason = undefined
    // resolve 需要接收一个参数
    const resolve = value => {
      if (this.status === STATUS_PENDING) {
        this.status = STATUS_FULFILLED
        // 将接收的参数保存在 Promise 种
        this.value = value
      }
    }
    // reject 也可以接收一个参数
    const reject = reason => {
      if (this.status === STATUS_PENDING) {
        this.status = STATUS_REJECTED
        this.reason = reason
      }
    }
    executor(resolve, reject)
  }
  // 实例方法 then
  then(onFulfilled, onRejected) {
    if (onFulfilled) onFulfilled(this.value)
    if (onRejected) onRejected(this.reason)
  }
}
```

#### 2. executor 可以是一个异步函数



```js
test('executor 可以是一个异步函数', () => {
  new _Promise(resolve => {
    setTimeout(() => {
      resolve('success')
    }, 300)
  }).then(res => {
    expect(res).toBe('success')
  })
  new _Promise((resolve, reject) => {
    setTimeout(() => {
      reject('error')
    }, 300)
  }).then(undefined, err => {
    expect(err).toBe('error')
  })
})
```



```js
class _Promise {
  constructor(executor = () => {}) {
    this.status = STATUS_PENDING
    this.value = undefined
    this.reason = undefined
    // 因为可以执行多次 then，因此需要将所有的任务放在一个队列中
    this.resolveQueue = []
    this.rejectQueue = []
    const resolve = value => {
      if (this.status === STATUS_PENDING) {
        this.status = STATUS_FULFILLED
        this.value = value
        // 在 resolve 时执行 resolveQueue 所有的任务
        if (this.resolveQueue.length)
          this.resolveQueue.forEach(item => item(this.value))
      }
    }
    const reject = reason => {
      if (this.status === STATUS_PENDING) {
        this.status = STATUS_REJECTED
        this.reason = reason
        // 在 reject 时执行 rejectQueue 所有的任务
        if (this.rejectQueue.length)
          this.rejectQueue.forEach(item => item(this.reason))
      }
    }
    executor(resolve, reject)
  }
  then(onFulfilled, onRejected) {
    // 由于 executor 可能是一个异步函数，所以就不能直接来执行
    // 传入的参数了，需要做一下状态判断
    // 如果执行 then 时 Promise 实例的状态已经变化，那么就可以直接执行传入的参数
    if (this.status === STATUS_FULFILLED && onFulfilled) {
      onFulfilled(this.value)
    }
    if (this.status === STATUS_REJECTED && onRejected) {
      onRejected(this.reason)
    }
    // 如果在执行 then 的时候当前的状态还是 PENDING
    // 那么就加入队列中，等待执行 resolve、reject 的时候统一执行所有的队列
    if (this.status === STATUS_PENDING) {
      // 将任务放到相应队列中
      if (onFulfilled) this.resolveQueue.push(onFulfilled)
      if (onRejected) this.resolveQueue.push(onRejected)
    }
  }
}
```

#### 3. 如果构造函数抛出了一个错误，then 的第二个参数也可以捕获到



```js
test('如果构造函数抛出了一个错误，then 的第二个参数也可以捕获到', () => {
  new _Promise(() => {
    throw new Error('error!')
  }).then(undefined, err => {
    expect(err).toEqual(new Error('error!'))
  })
})
```



```js
class _Promise {
  constructor(executor = () => {}) {
    this.status = STATUS_PENDING
    this.value = undefined
    this.reason = undefined
    this.resolveQueue = []
    this.rejectQueue = []
    const resolve = value => {
      if (this.status === STATUS_PENDING) {
        this.status = STATUS_FULFILLED
        this.value = value
        if (this.resolveQueue.length)
          this.resolveQueue.forEach(item => item(this.value))
      }
    }
    const reject = reason => {
      if (this.status === STATUS_PENDING) {
        this.status = STATUS_REJECTED
        this.reason = reason
        if (this.rejectQueue.length)
          this.rejectQueue.forEach(item => item(this.reason))
      }
    }
    // try...catch 捕获一下错误
    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }
  then(onFulfilled, onRejected) {
    // then code 无变化
  }
}
```

#### 4. 链式调用



```js
test('链式调用', () => {
  new _Promise(resolve => {
    resolve('success1')
  })
    .then(res => {
      expect(res).toBe('success1')
      return res + ' success2'
    })
    .then(res => {
      expect(res).toBe('success1 success2')
    })
  new _Promise((resolve, reject) => {
    reject('error1')
  })
    .then(undefined, err => {
      expect(err).toBe('error1')
      return err + ' error2'
    })
    .then(res => {
      expect(res).toBe('error1 error2')
    })
})
```



```js
_Promise {
  constructor(executor = () => {}) {
    // 构造函数无变化
  }
  then(onFulfilled, onRejected) {
    // 要想做到链式调用，就需要返回新的 Promise
    return new Promise((resolve, reject) => {
      if (this.status === STATUS_FULFILLED && onFulfilled) {
        // 将 onFulfilled 返回的值作为下一个 Promise resolve() 的值
        const value = onFulfilled(this.value)
        resolve(value)
      }
      if (this.status === STATUS_REJECTED && onRejected) {
        // 这个也是同理
        const reason = onRejected(this.reason)
        resolve(reason)
      }
      if (this.status === STATUS_PENDING) {
        // 这里需要做一下处理了，因为这里队列是在构造函数中处理的
        // 所以需要转化一下
        if (onFulfilled)
          this.resolveQueue.push(param => {
            const value = onFulfilled(param)
            resolve(value)
          })
        if (onRejected)
          this.resolveQueue.push(param => {
            const reason = onRejected(param)
            resolve(reason)
          })
      }
    })
  }
}
```

#### 5. 在链式调用的过程中出现任何错误，将由下面的 then 第二个参数处理



```js
test('在链式调用的过程中出现任何错误，将由下面的 then 第二个参数处理', () => {
  new _Promise((resolve, reject) => {
    resolve('success')
  })
    .then(res => {
      expect(res).toBe('success')
      throw new Error('error!')
    })
    .then(undefined, err => {
      expect(err).toEqual(new Error('error!'))
    })
})
```



```js
// 因为需要对 4 个地方同时进行 try...catch
// 重复代码，就可以抽离为工具函数了
function executeFnWithCatchError(fn, param, resolve, reject) {
  try {
    const result = fn(param)
    resolve(result)
  } catch (error) {
    reject(error)
  }
}

class _Promise {
  constructor(executor = () => {}) {
      // 构造函数无变化
  }
  then(onFulfilled, onRejected) {
    return new Promise((resolve, reject) => {
      if (this.status === STATUS_FULFILLED && onFulfilled) {
        // 在这里进行捕获
        executeFnWithCatchError(onFulfilled, this.value, resolve, reject)
      }
      if (this.status === STATUS_REJECTED && onRejected) {
        // 在这里进行捕获
        executeFnWithCatchError(onRejected, this.reason, resolve, reject)
      }
      if (this.status === STATUS_PENDING) {
        if (onFulfilled)
          this.resolveQueue.push(param => {
            // 在这里进行捕获
            executeFnWithCatchError(onFulfilled, param, resolve, reject)
          })
        if (onRejected)
          this.resolveQueue.push(param => {
            // 在这里进行捕获
            executeFnWithCatchError(onRejected, param, resolve, reject)
          })
      }
    })
  }
}
```

### 3.3 catch

#### 1. catch 应该捕获上一个 Promise 实例的 reject



```js
test('catch 应该捕获上一个 Promise 实例的 reject ', () => {
  new _Promise((resolve, reject) => {
    reject('error')
  }).catch(err => {
    expect(err).toBe('error')
  })
  new _Promise((resolve, reject) => {
    resolve('success')
  })
    .then(() => {
      throw new Error('error')
    })
    .catch(err => {
      expect(err).toEqual(new Error('error'))
    })
})
```



```js
class _Promise {
  constructor(executor = () => {}) {
    // 构造函数无变化
  }
  then(onFulfilled, onRejected) {
    // then 方法无变化
  }
  // 新增实例方法 catch
  catch(onRejected) {
    // 这里其实可以直接复用 then 的逻辑
    // 将传入的数据作为 then 的第二个参数
    this.then(undefined, onRejected)
  }
}
```

#### 2. catch 可以捕获最开始的 reject



```js
test('catch 可以捕获最开始的 reject ', () => {
  new Promise((resolve, reject) => {
    reject('error')
  })
    .then(res => {
      return res
    })
    .then(res => {
      return res
    })
    .catch(err => {
      console.log('error', err)
      expect(err).toBe('error')
    })
})
```



```js
class _Promise {
  constructor(executor = () => {}) {
    // 构造函数无变化
  }
  then(onFulfilled, onRejected) {
    // 针对这一情况，可以给两个参数写一个默认值
    onFulfilled = onFulfilled
      ? onFulfilled
      : value => {
          return value
        }
    onRejected = onRejected
      ? onRejected
      : reason => {
          throw new Error(reason)
        }
    return new Promise((resolve, reject) => {
      // 判断就可以删除掉了，因为传入的两个参数是必定有值的
      if (this.status === STATUS_FULFILLED) {
        executeFnWithCatchError(onFulfilled, this.value, resolve, reject)
      }
      if (this.status === STATUS_REJECTED) {
        executeFnWithCatchError(onRejected, this.reason, resolve, reject)
      }
      if (this.status === STATUS_PENDING) {
        this.resolveQueue.push(param => {
          executeFnWithCatchError(onFulfilled, param, resolve, reject)
        })
        this.resolveQueue.push(param => {
          executeFnWithCatchError(onRejected, param, resolve, reject)
        })
      }
    })
  }
  catch(onRejected) {
    // catch 无变化
  }
}
```

### 3.4 finally



```js
test('无论 Promise 状态是满足还是拒绝，finally 都应该执行', () => {
  let finallyTimer = 0
  new _Promise(resolve => {
    resolve('hello world')
  }).finally(() => {
    finallyTimer++
  })
  expect(finallyTimer).toBe(1)
  new _Promise((resolve, reject) => {
    reject('hello world')
  }).finally(() => {
    finallyTimer++
  })
  expect(finallyTimer).toBe(2)
})
```



```js
class _Promise {
  constructor(executor = () => {}) {
    // 构造函数无变化
  }
  then(onFulfilled, onRejected) {
    // then 无变化
  }
  catch(onRejected) {
    // catch 无变化
  }
  // 新增实例方法 finally
  finally(onFinally) {
    // 复用 then 逻辑，传入 onFinally
    this.then(
      () => {
        onFinally()
      },
      () => {
        onFinally()
      }
    )
  }
}
```

### 3.5 resolve

resolve 是 Promise 的类方法，可以将传入的值作为`resolve()`的参数，即：

```js
Promise.resolve("success")
// 等于下面
new Promise(resolve => {
    resolve('success')
})
```



```js
test('resolve 可以将一个传入的值作为 resolve() 的参数', () => {
  const data = { name: 'alex' }
  Promise.resolve(data).then(res => {
    expect(res).toEqual(data)
  })
})
```



```js
class _Promise {
  constructor(executor = () => {}) {
    // 构造函数无变化
  }
  then(onFulfilled, onRejected) {
    // then 无变化
  }
  catch(onRejected) {
    // catch 无变化
  }
  finally(onFinally) {
    // finally 无变化
  }
  // 新增类方法
  static resolve(data) {
    return new _Promise(resolve => resolve(data))
  }
}
```

### 3.6 reject

和 resolve 的逻辑是一样的



```js
test('reject 可以将传入的值作为 reject() 的参数', () => {
  _Promise.reject('error').catch(err => {
    expect(err).toBe('error')
  })
})
```



```js
class _Promise {
  constructor(executor = () => {}) {
    // 构造函数无变化
  }
  then(onFulfilled, onRejected) {
    // then 无变化
  }
  catch(onRejected) {
    // catch 无变化
  }
  finally(onFinally) {
    // finally 无变化
  }
  static resolve(data) {
    // resolve 无变化
  }
  // 新增类方法 reject
  static reject(data) {
    return new _Promise((resolve, reject) => reject(data))
  }
}
```

### 3.7 all



```js
test('all 方法接收队列，所有 fulfilled 即 fulfilled，一个 rejected 则 rejected', () => {
  function genPromise(index) {
    return new _Promise(resolve => {
      resolve('success' + index)
    })
  }
  const promiseQueue = [
    genPromise(0),
    genPromise(1),
    genPromise(2),
    genPromise(3),
  ]
  _Promise.all(promiseQueue).then(res => {
    expect(res).toEqual(['success0', 'success1', 'success2', 'success3'])
  })
  const promiseQueue2 = [
    ...promiseQueue,
    new _Promise((resolve, reject) => reject('error')),
  ]
  _Promise.all(promiseQueue2).catch(err => {
    expect(err).toBe('error')
  })
})
```



```js
class _Promise {
  constructor(executor = () => {}) {
    // 构造函数无变化
  }
  then(onFulfilled, onRejected) {
    // then 无变化
  }
  catch(onRejected) {
    // catch 无变化
  }
  finally(onFinally) {
    // finally 无变化
  }
  static resolve(data) {
    // resolve 无变化
  }
  static reject(data) {
    // reject 无变化
  }
  // 新增类方法
  static all(promiseQueue) {
    return new _Promise((resolve, reject) => {
      const result = []
      // 对队列进行遍历
      promiseQueue.forEach(promise => {
        promise
          .then(res => {
            result.push(res)
          })
          .catch(err => {
            // 任何一个 reject 那么就直接 reject
            reject(err)
          })
      })
      // 所有的 resolve，才 resolve
      resolve(result)
    })
  }
}
```

### 3.8 allSettled



```js
test('allSettled 无论 promise 队列是 fulfilled 还是 rejected，都会保存起来，并且只会是 fulfilled', () => {
  function genPromise(index) {
    return new Promise(resolve => {
      resolve('success' + index)
    })
  }
  const promiseQueue = [genPromise(0), genPromise(1), genPromise(2)]
  Promise.allSettled(promiseQueue).then(res => {
    expect(res).toEqual([
      { status: 'fulfilled', value: 'success0' },
      { status: 'fulfilled', value: 'success1' },
      { status: 'fulfilled', value: 'success2' },
    ])
  })
  const promiseQueue2 = [
    ...promiseQueue,
    new Promise((resolve, reject) => reject('error')),
  ]
  Promise.allSettled(promiseQueue2).catch(err => {
    expect(err).toEqual([
      { status: 'fulfilled', value: 'success0' },
      { status: 'fulfilled', value: 'success1' },
      { status: 'fulfilled', value: 'success2' },
      { status: 'rejected', reason: 'error' },
    ])
  })
})
```



```js
class _Promise {
  constructor(executor = () => {}) {
    // 构造函数无变化
  }
  then(onFulfilled, onRejected) {
    // then 无变化
  }
  catch(onRejected) {
    // catch 无变化
  }
  finally(onFinally) {
    // finally 无变化
  }
  static resolve(data) {
    // resolve 无变化
  }
  static reject(data) {
    // reject 无变化
  }
  static all(promiseQueue) {
    // all 无变化
  }
  // 新增类方法：allSettled
  static allSettled(promiseQueue) {
    return new _Promise(resolve => {
      const result = []
      // 遍历队列，满足 or 拒绝都加入返回队列中
      // 只是状态和 value/reason 不同
      promiseQueue.forEach(promise => {
        promise
          .then(res => {
            result.push({
              status: STATUS_FULFILLED,
              value: res,
            })
          })
          .catch(err => {
            result.push({
              status: STATUS_REJECTED,
              reason: err,
            })
          })
      })
      resolve(result)
    })
  }
}
```

### 3.9 race



```js
test('队列中哪个最先完成，那么 race 返回的实例就是什么状态', () => {
  function genPromise(delay, message, type = 'fulfilled') {
    if (type === 'fulfilled') {
      return new _Promise(resolve => {
        setTimeout(() => {
          resolve(message)
        }, delay)
      })
    }
    return new _Promise((resolve, reject) => {
      setTimeout(() => {
        reject(message)
      }, delay)
    }, delay)
  }
  const promiseQueue = [
    genPromise(200, 'success1'),
    genPromise(100, 'success2'),
    genPromise(300, 'success3'),
  ]
  _Promise.race(promiseQueue).then(res => {
    expect(res).toBe('success2')
  })
  const promiseQueue2 = [...promiseQueue, genPromise(50, 'error', 'rejected')]
  _Promise.race(promiseQueue2).catch(err => {
    expect(err).toBe('error')
  })
})
```



```js
class _Promise {
  constructor(executor = () => {}) {
    // 构造函数无变化
  }
  then(onFulfilled, onRejected) {
    // then 无变化
  }
  catch(onRejected) {
    // catch 无变化
  }
  finally(onFinally) {
    // finally 无变化
  }
  static resolve(data) {
    // resolve 无变化
  }
  static reject(data) {
    // reject 无变化
  }
  static all(promiseQueue) {
    // all 无变化
  }
  // 新增类方法：allSettled
  static allSettled(promiseQueue) {
    // allSettled 无变化
  }
    // 新增类方法 race
  static race(promiseQueue) {
    return new _Promise((resolve, reject) => {
      // 遍历队列
      promiseQueue.forEach(promise => {
        // 有一个改变了状态，那么整体就改变了状态
        promise
          .then(res => {
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    })
  }
}
```

### 3.10 any



```js
test('any 方法接收一个 Promise 队列，只要一个是 fulfilled 状态，就改变返回的实例状态，如果所有都是 rejected，也要等待所有执行完毕后，抛出一个错误', () => {
  function genPromise(delay, message, type = 'fulfilled') {
    if (type === 'fulfilled') {
      return new _Promise(resolve => {
        setTimeout(() => {
          resolve(message)
        }, delay)
      })
    }
    return new _Promise((resolve, reject) => {
      setTimeout(() => {
        reject(message)
      }, delay)
    }, delay)
  }
  const promiseQueue = [
    genPromise(100, 'error1', 'rejected'),
    genPromise(200, 'success1'),
    genPromise(300, 'error2', 'rejected'),
  ]
  _Promise
    .any(promiseQueue)
    .then(res => {
      expect(res).toBe('success1')
    })
    .catch(() => {})
  const promiseQueue2 = [
    genPromise(100, 'error11', 'rejected'),
    genPromise(200, 'error22', 'rejected'),
    genPromise(300, 'error33', 'rejected'),
  ]
  try {
    _Promise.any(promiseQueue2).catch(err => {})
  } catch (error) {
    expect(error).toEqual(new AggregateError('All promises were rejected'))
  }
})
```



```js
class _Promise {
  constructor(executor = () => {}) {
    // 构造函数无变化
  }
  then(onFulfilled, onRejected) {
    // then 无变化
  }
  catch(onRejected) {
    // catch 无变化
  }
  finally(onFinally) {
    // finally 无变化
  }
  static resolve(data) {
    // resolve 无变化
  }
  static reject(data) {
    // reject 无变化
  }
  static all(promiseQueue) {
    // all 无变化
  }
  static allSettled(promiseQueue) {
    // allSettled 无变化
  }
  static race(promiseQueue) {
    // race 无变化   
  }
  // 新增类方法 any
  static any(promiseQueue) {
    return new _Promise((resolve, reject) => {
      const reasons = []
      promiseQueue.forEach(promise => {
        promise
          .then(res => {
            // 只要有一个满足，那么就满足
            resolve(res)
          })
          .catch(err => {
            reasons.push(err)
          })
      })
      // 如果全部拒绝，那么就抛出一个错误
      if (reasons.length === promiseQueue.length) {
        throw new AggregateError()
      }
    })
  }
}
```

### 3.11 全部

最后，关于 Promise 的功能和 API 我们已经初步实现完毕了，当然，一些边界判断是没有加的。

让我们看一下全部代码吧：

```js
const STATUS_PENDING = 'pending'
const STATUS_FULFILLED = 'fulfilled'
const STATUS_REJECTED = 'rejected'

function executeFnWithCatchError(fn, param, resolve, reject) {
  try {
    const result = fn(param)
    resolve(result)
  } catch (error) {
    reject(error)
  }
}

export class _Promise {
  constructor(executor = () => {}) {
    this.status = STATUS_PENDING
    this.value = undefined
    this.reason = undefined
    this.resolveQueue = []
    this.rejectQueue = []
    const resolve = value => {
      if (this.status === STATUS_PENDING) {
        this.status = STATUS_FULFILLED
        this.value = value
        if (this.resolveQueue.length)
          this.resolveQueue.forEach(item => item(this.value))
      }
    }
    const reject = reason => {
      if (this.status === STATUS_PENDING) {
        this.status = STATUS_REJECTED
        this.reason = reason
        if (this.rejectQueue.length)
          this.rejectQueue.forEach(item => item(this.reason))
      }
    }
    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }
  then(onFulfilled, onRejected) {
    onFulfilled = onFulfilled
      ? onFulfilled
      : value => {
          return value
        }
    onRejected = onRejected
      ? onRejected
      : reason => {
          throw new Error(reason)
        }
    return new Promise((resolve, reject) => {
      if (this.status === STATUS_FULFILLED) {
        executeFnWithCatchError(onFulfilled, this.value, resolve, reject)
      }
      if (this.status === STATUS_REJECTED) {
        executeFnWithCatchError(onRejected, this.reason, resolve, reject)
      }
      if (this.status === STATUS_PENDING) {
        this.resolveQueue.push(param => {
          executeFnWithCatchError(onFulfilled, param, resolve, reject)
        })
        this.resolveQueue.push(param => {
          executeFnWithCatchError(onRejected, param, resolve, reject)
        })
      }
    })
  }
  catch(onRejected) {
    this.then(undefined, onRejected)
  }
  finally(onFinally) {
    this.then(
      () => {
        onFinally()
      },
      () => {
        onFinally()
      }
    )
  }
  static resolve(data) {
    return new _Promise(resolve => resolve(data))
  }
  static reject(data) {
    return new _Promise((resolve, reject) => reject(data))
  }
  static all(promiseQueue) {
    return new _Promise((resolve, reject) => {
      const result = []
      promiseQueue.forEach(promise => {
        promise
          .then(res => {
            result.push(res)
          })
          .catch(err => {
            reject(err)
          })
      })
      resolve(result)
    })
  }
  static allSettled(promiseQueue) {
    return new _Promise(resolve => {
      const result = []
      promiseQueue.forEach(promise => {
        promise
          .then(res => {
            result.push({
              status: STATUS_FULFILLED,
              value: res,
            })
          })
          .catch(err => {
            result.push({
              status: STATUS_REJECTED,
              reason: err,
            })
          })
      })
      resolve(result)
    })
  }
  static race(promiseQueue) {
    return new _Promise((resolve, reject) => {
      promiseQueue.forEach(promise => {
        promise
          .then(res => {
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    })
  }
  static any(promiseQueue) {
    return new _Promise((resolve, reject) => {
      const reasons = []
      promiseQueue.forEach(promise => {
        promise
          .then(res => {
            resolve(res)
          })
          .catch(err => {
            reasons.push(err)
          })
      })
      if (reasons.length === promiseQueue.length) {
        throw new AggregateError()
      }
    })
  }
}
```

# 总结

本文详细讲解了 Promise 以及手写了 Promise 的逻辑，希望对你有所帮助