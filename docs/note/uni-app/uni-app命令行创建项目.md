## 环境安装

全局安装 vue-cli

```shell
npm install -g @vue/cli
```

复制代码

## [#](https://uniapp.dcloud.net.cn/quickstart-cli.html#创建uni-app)创建uni-app

- 使用正式版（对应HBuilderX最新正式版）

  ```shell
  vue create -p dcloudio/uni-preset-vue my-project
  ```

  

- 使用alpha版（对应HBuilderX最新alpha版）

  ```shell
  vue create -p dcloudio/uni-preset-vue#alpha my-alpha-project
  ```

  

- 使用Vue3/Vite版

  - 创建以 javascript 开发的工程（如命令行创建失败，请直接访问gitee下载模板）

  - 

    ```shell
    npx degit dcloudio/uni-preset-vue#vite my-vue3-project
    ```

    

    ```shell
    npx degit dcloudio/uni-preset-vue#vite-alpha my-vue3-project
    ```

    

  - 创建以 typescript 开发的工程（如命令行创建失败，请直接访问gitee下载模板）

    ```shell
    npx degit dcloudio/uni-preset-vue#vite-ts my-vue3-project
    ```

    

此时，会提示选择项目模板（使用Vue3/Vite版不会提示，目前只支持创建默认模板），初次体验建议选择 `hello uni-app` 项目模板

**注意**

- Vue3/Vite版要求 node 版本 18+、20+
- 如果使用 HBuilderX（3.6.7以下版本）运行 Vue3/Vite 创建的最新的 cli 工程，需要在 HBuilderX 运行配置最底部设置 node路径 为自己本机高版本 node 路径（注意需要重启 HBuilderX 才可以生效）
  - HBuilderX Mac 版本菜单栏左上角 HBuilderX->偏好设置->运行配置->node路径
  - HBuilderX Windows 版本菜单栏 工具->设置->运行配置->node路径

#### [#](https://uniapp.dcloud.net.cn/quickstart-cli.html#自定义模板)自定义模板

选择自定义模板时，需要填写 uni-app 模板地址，这个地址其实就是托管在云端的仓库地址。以 GitHub 为例，地址格式为 `userName/repositoryName`，如 `dcloudio/uni-template-picture` 就是下载图片模板。

更多支持的下载方式，请参考这个插件的说明：[download-git-repo](https://www.npmjs.com/package/download-git-repo)

#### [#](https://uniapp.dcloud.net.cn/quickstart-cli.html#国内特殊情况)国内特殊情况

模板项目存放于 Github，由于国内网络环境问题，可能下载失败。针对此问题可以尝试如下措施：

- 更换网络重试，比如使用 4g 网络
- 在设备或路由器的网络设置中增加 DNS（如：8.8.8.8）
- 在设备中增加固定的 hosts（如：140.82.113.4 github.com）

#### [#](https://uniapp.dcloud.net.cn/quickstart-cli.html#cliversion)更新依赖到指定版本

可以使用 [@dcloudio/uvm](https://www.npmjs.com/package/@dcloudio/uvm) 管理编译器的版本，此工具仅自动增加或更新 uni-app 编译器主要依赖，对于新增的编译命令（scripts）暂时不会自动处理，需手动参考新工程进行配置。

- 更新到最新正式版

  ```shell
  npx @dcloudio/uvm@latest
  ```

  

- 更新到最新 Alpha 版

  ```shell
  npx @dcloudio/uvm@latest alpha
  ```

  

- 更新到正式版指定版本

  ```shell
  npx @dcloudio/uvm@latest 3.2.0
  ```

  

  或

  ```shell
  npx @dcloudio/uvm@latest 3.2.12.20211029
  ```

  

- 更新到 Alpha 版指定版本

  ```shell
  npx @dcloudio/uvm@latest 3.2.0-alpha
  ```

  

  或

  ```shell
  npx @dcloudio/uvm@latest 3.2.14.20211112-alpha
  ```

  

## [#](https://uniapp.dcloud.net.cn/quickstart-cli.html#运行、发布uni-app)运行、发布uni-app

```shell
npm run dev:%PLATFORM%
npm run build:%PLATFORM%
```



`%PLATFORM%` 可取值如下：

| 值                      | 平台                                                         |
| ----------------------- | ------------------------------------------------------------ |
| app-plus                | app平台生成打包资源（支持npm run build:app-plus，可用于持续集成。不支持run，运行调试仍需在HBuilderX中操作） |
| h5                      | H5                                                           |
| mp-alipay               | 支付宝小程序                                                 |
| mp-baidu                | 百度小程序                                                   |
| mp-weixin               | 微信小程序                                                   |
| mp-toutiao              | 抖音小程序                                                   |
| mp-lark                 | 飞书小程序                                                   |
| mp-qq                   | qq 小程序                                                    |
| mp-360                  | 360 小程序                                                   |
| mp-kuaishou             | 快手小程序                                                   |
| mp-jd                   | 京东小程序                                                   |
| mp-xhs                  | 小红书小程序                                                 |
| quickapp-webview        | 快应用(webview)                                              |
| quickapp-webview-union  | 快应用联盟                                                   |
| quickapp-webview-huawei | 快应用华为                                                   |

可以自定义更多条件编译平台，比如钉钉小程序，参考[package.json文档](https://uniapp.dcloud.io/collocation/package)