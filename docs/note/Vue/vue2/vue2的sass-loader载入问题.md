#### 不能载入sass-loader:Module not found: Error: Can't resolve 'sass-loader'

```css
<style lang="scss" scoped>
li {
  background: red;
}
</style>
```

**解决方法1:(不推荐)**

**把node版本回退到v14.19.0(使用nvm管理工具)**

**[node历史版本下载](https://registry.npmmirror.com/binary.html?path=node/)**



**解决方法2:(推荐)**

使用less

**先把sass所有配置删除**


删除node_modules和package-lock.json

> **清除npm缓存**
>
> npm cache clean -force
>
> **重新安装依赖**
>
> npm install

```js
npm install less@3.0.4 --save
npm install less-loader@5.0.0 --save
```

在webpack.base.config.js的rules里添加

```js
{
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
}
```



package.json配置

```json
{
  "name": "vue-element",
  "version": "1.0.0",
  "description": "A Vue.js project",
  "author": "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "private": true,
  "scripts": {
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "start": "npm run dev",
    "build": "node build/build.js"
  },
  "dependencies": {
    "element-ui": "^2.15.14",
    "less": "^3.0.4",
    "less-loader": "^5.0.0",
    "vue": "^2.7.16",
    "yarn": "^1.22.22"
  },
  "devDependencies": {
    "@vue/cli": "^3.5.2",
    "autoprefixer": "^7.1.2",
    "babel-core": "^6.22.1",
    "babel-helper-vue-jsx-merge-props": "^2.0.3",
    "babel-loader": "^7.1.1",
    "babel-plugin-syntax-jsx": "^6.18.0",
    "babel-plugin-transform-runtime": "^6.22.0",
    "babel-plugin-transform-vue-jsx": "^3.5.0",
    "babel-preset-env": "^1.3.2",
    "babel-preset-stage-2": "^6.22.0",
    "chalk": "^2.0.1",
    "copy-webpack-plugin": "^4.0.1",
    "css-loader": "^0.28.0",
    "extract-text-webpack-plugin": "^3.0.0",
    "file-loader": "^1.1.4",
    "friendly-errors-webpack-plugin": "^1.6.1",
    "html-webpack-plugin": "^2.30.1",
    "node-notifier": "^5.1.2",
    "node-sass": "yarn:dart-sass",
    "optimize-css-assets-webpack-plugin": "^3.2.0",
    "ora": "^1.2.0",
    "portfinder": "^1.0.13",
    "postcss-import": "^11.0.0",
    "postcss-loader": "^2.0.8",
    "postcss-url": "^7.2.1",
    "rimraf": "^2.6.0",
    "semver": "^5.3.0",
    "shelljs": "^0.7.6",
    "uglifyjs-webpack-plugin": "^1.1.1",
    "url-loader": "^0.5.8",
    "vue-loader": "^13.3.0",
    "vue-router": "^3.5.1",
    "vue-style-loader": "^3.0.1",
    "vue-template-compiler": "^2.5.2",
    "webpack": "^3.5.2",
    "webpack-bundle-analyzer": "^2.9.0",
    "webpack-dev-server": "^2.9.1",
    "webpack-merge": "^4.1.0"
  },
  "engines": {
    "node": ">= 6.0.0",
    "npm": ">= 3.0.0"
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 8"
  ]
}
```

Login.vue

```vue
<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px" class="login-box">
      <el-form-item label="账号">
        <el-input v-model="form.account"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        account: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      alert("submit!");
    },
  },
};
</script>
<style lang="less" scoped>
.login-box{
  width:350px
}
</style>
```

样式生效

<img src="https://gitee.com/pan-zhi_jian/cloud-imgs/raw/master/img/image-20240411103653664-1712803090424-8.png" alt="image-20240411103653664" style="zoom: 50%;" />