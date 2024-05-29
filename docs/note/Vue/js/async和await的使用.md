# js async和await的用法(ES7)



> 建议：阅读本篇需要对**Promise**有一定的认识

### 1.含义和用法

**async** 是一个修饰符，被它定义的函数会默认的**返回**一个 Promise 的 resolve的值。
因此对 async 函数可以直接进行 then 操作，返回的值即为 then() 方法的传入函数。



```jsx
// demo
async function demo_1() {
    console.log('a')
    return 1
}
demo_1().then(res => { 
  console.log(res)   //  a， 1，
})  
```

**await**同 async 一样，作为修饰符，但是它只能放在 async 内部使用。
它是**获取** Promise 中返回的内容， 即这个 Promise 函数中 resolve 的值。

所以，async 用于申明一个 function 是异步的，而 await 用于等待一个异步方法执行完成。
如下例：



```js
const myFun = function(){ return 'test'}

async function demo_2() {
   const a = await 1
   const b = await new Promise((resolve, reject)=>{
        setTimeout(function(){
           resolve('wait')
        }, 3000)
   })
   const c = await myFun()
   console.log(a, b, c)
}

demo_2()
/* 打印结果：
  3秒后输出：  1，"wait" ,"test",
 */
```



### 2.应用

比如说，这样一个场景：等待三个数据结果都返回，计算它们的和



```js
const myFun2 = function(val, time) {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(val)
        }, time)
    })
}

const demo_3 = async function() {
    let a = await myFun2(3, 5000)
    console.log(a)
    let b = await myFun2(4, 10000)
    console.log(b)
    let c =  await myFun2(5, 15000)
    console.log(c)
    let d = a + b +c  
    console.log(d)
}

demo_3()
/* 打印结果：
  5秒后输出：  3
  10秒后输出：  4
  15秒后输出：  5 12
 */
```



```js
async function demo() {

    const a = await new Promise((resolve, reject) => {
        setTimeout(() => {
            let flag = Math.random() > 0.5 ? true : false
            if (flag) {
                resolve("事件为真")
                return
            }
            reject("事件为假")
        }, 3000)

    }).catch(err=>console.log("事件为假"))
    if(!a){
        console.log("a没有被正确赋值,返回")
        return
    }
    console.log("a=",a)

}
demo()
```

### 3.async函数的返回值

**async函数的返回值也是一个promise对象,需要使用.then来接收参数**



```js
async function helloAsync() {
    const result = await new Promise((resolve) =>
        setTimeout(() => resolve("Hello"))
    );
    return result;
}

helloAsync().then((data) => {
    console.log("helloAsync返回值：" + JSON.stringify(data));
});

```

**或者再使用一个async函数来接收返回值**

````js
async function helloAsync() {
    const result = await new Promise((resolve) =>
        setTimeout(() => resolve("Hello"))
    );
    return result;
}
async function testHelloAsync() {
    const output = await helloAsync();
    console.log("helloAsync返回值：" + JSON.stringify(output));
}

testHelloAsync();
````

