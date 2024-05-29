# 前端代码格式化 - 【Prettier】 - 常见配置 + 踩坑日记



# 前言

## Prettier是什么、能帮我们解决什么问题？

- Prettier 是一个代码格式化工具，可以格式化代码，但不具备代码检查功能，它可以通过解析代码并使用自己的规则重新打印它，并考虑最大行长来强制一致的样式，并在必要时包装代码，如今，它已成为解决所有代码格式问题的优选方案，支持多种语言，可以将 ESLint 和 Prettier 结合使用，提高代码质量。

## Prettier 中文网

- [Prettier 中文网](https://link.juejin.cn/?target=https%3A%2F%2Fprettier.nodejs.cn%2F)

# 一、使用

## 1.1 使用方式

- 方式一：下载

   

  ```
  Prettier
  ```

   

  插件；


- 方式二：在项目中安装

   

  ```
  npm i -d prettier
  ```

   

  ，然后在项目根目录下创建配置文件（

  ```
  .prettierrc.js
  ```

  ）进行配置；


- 如果两种方式都使用了，那么`prettier`配置文件的优先级首先是当前项目根目录下的配置文件；

## 1.2 格式化：配合 自动保存 或 git 使用

### 1.2.1 自动保存时格式化

- 我们可以在

   

  ```
  VsCode
  ```

   

  的 设置 中 开启

   

  保存文件时自动进行格式化


### 1.2.2 配合 git 使用

- 和 `git` 配合使用，这块我自己没有用，所以没有确切的实际经验，大家可以去 [Prettier 中文网](https://link.juejin.cn/?target=https%3A%2F%2Fprettier.nodejs.cn%2Fdocs%2Fen%2Fprecommit.html)看看，或者也可以自己 [百度](https://link.juejin.cn/?target=https%3A%2F%2Fwww.baidu.com%2F) 一下哈；

# 二、我自己使用的配置 以及 Prettier 常见配置

- ```
  prettier
  ```

  的配置项文件常见的一般都有两种格式：

  ```
  js + json
  ```

  ；

  - `js`后缀的写起来方便一点，不用给属性名添加双引号；
  - `json`后缀的写起来比较繁琐，必须严格遵守`json`语法；

## 2.1 我自己使用的配置

### 2.1.1 `.prettierrc.js` 或 `.prettierrc.json` 配置文件

- 我自己使用的配置项：
  - 如果配置的是 `json` 文件，不需要拷贝 `module.export = `，只需要拷贝对象即可；

```js
module.exports = {
    printWidth: 80, // 每行代码长度（默认80）
    tabWidth: 2, // 每个tab相当于多少个空格（默认2）
    useTabs: false, // 是否使用tab进行缩进（默认false）
    singleQuote: false, // 使用单引号（默认false）
    semi: true, // 声明结尾使用分号(默认true)
    trailingComma: 'es5', // 多行使用拖尾逗号（默认none）
    bracketSpacing: true, // 对象字面量的大括号间使用空格（默认true）
    jsxBracketSameLine: false, // 多行JSX中的>放置在最后一行的结尾，而不是另起一行（默认false）
    arrowParens: "avoid", // 只有一个参数的箭头函数的参数是否带圆括号（默认avoid）
};
```

