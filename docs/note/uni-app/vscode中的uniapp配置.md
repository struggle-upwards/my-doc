

# vscode中的uniapp配置



### 安装uni依赖



**'uni'不是内部或外部命令，也不是可运行的程序**

```sh
npm i uni
```



### 安装sass依赖



```
pnpm i -d sass
pnpm i -d sass-loader
npm i -d node-sass
```



### 安装uni-ui组件库



#### npm安装



在 `vue-cli` 项目中可以使用 `npm` 安装 `uni-ui` 库 ，或者直接在 `HBuilderX` 项目中使用 `npm` 。

> **注意** cli 项目默认是不编译 `node_modules` 下的组件的，导致条件编译等功能失效 ，导致组件异常 需要在根目录创建 `vue.config.js` 文件 ，增加 `@dcloudio/uni-ui` 包的编译即可正常
>
> ```javascript
> // vue.config.js
> module.exports = {
> 		transpileDependencies:['@dcloudio/uni-ui']
> }
> ```



#### 安装 uni-ui



```text
pnpm i @dcloudio/uni-ui   或   yarn add @dcloudio/uni-ui
```



#### 配置easycom

使用 `npm` 安装好 `uni-ui` 之后，需要配置 `easycom` 规则，让 `npm` 安装的组件支持 `easycom`

打开项目根目录下的 `pages.json` 并添加 `easycom` 节点：



```javascript
// pages.json
{
	"easycom": {
		"autoscan": true,
		"custom": {
			// uni-ui 规则如下配置
			"^uni-(.*)": "@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue"
		}
	},
	
	// 其他内容
	pages:[
		// ...
	]
}
```



在 `template` 中使用组件：

```html
<uni-badge text="1"></uni-badge>
<uni-badge text="2" type="success" @click="bindClick"></uni-badge>
<uni-badge text="3" type="primary" :inverted="true"></uni-badge>
```



**注意**

- uni-ui 现在只推荐使用 `easycom` ，如自己引用组件，可能会出现组件找不到的问题

- 使用 npm 安装的组件，默认情况下 babel-loader 会忽略所有 node_modules 中的文件 ，导致条件编译失效，需要通过配置

   

  ```
  vue.config.js
  ```

   

  **解决**：

  ```javascript
  // 在根目录创建 vue.config.js 文件，并配置如下
  module.exports = {
     transpileDependencies: ['@dcloudio/uni-ui']
  }
  // 如果是 vue3 + vite, 无需添加配置
  ```

  

- uni-ui 是uni-app内置组件的扩展。注意与web开发不同，uni-ui不包括基础组件，它是基础组件的补充。web开发中有的开发者习惯用一个ui库完成所有开发，但在uni-app体系中，推荐开发者首先使用性能更高的基础组件，然后按需引入必要的扩展组件。

- `uni-ui` 不支持使用 `Vue.use()` 的方式安装



### 安装pinia



```sh
npm i pinia
npm i pinia-plugin-persistedstate
```



#### 在main.js中挂载

```js
import { createSSRApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";


export function createApp() {

	const app = createSSRApp(App);

	const pinia = createPinia()

	app.use(pinia)
	return {
		app,
	};
}
```



#### pinia持久化存储



**stores/index.js**

```js
import { createPinia } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export default pinia
```



**修改组件的persist**

```js
{
    // 配置持久化
    persist: {
        // 调整为兼容多端的API
        storage: {
            setItem(key, value) {
                uni.setStorageSync(key, value) 
            },
            getItem(key) {
                return uni.getStorageSync(key) 
            },
        },
    },
}
```

