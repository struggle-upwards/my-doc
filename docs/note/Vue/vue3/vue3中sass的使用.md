# SCSS语法总结



> 最近在VUE的项目中使用到了SCSS，总结一些基础的语法。

## 安装

在控制台直接输入命令：

```csharp
npm install -d sass-loader 
npm install -d node-sass 
npm install -d sass
```

在`vue`文件的style标签中写上 `lang="scss"`就可以开始啦

### 变量

Scss通过`$`关键字声明和使用一个变量,频繁使用的color、radius、长度等数据可以声明为变量放在头部。

- 举例

```scss
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
```

### 操作符

SASS提供了标准的算术运算符，例如`+`、`-`、`*`、`/`、`%`，可以采用运算符直接对数据进行处理。

```scss
.test{
    width:$h*2;
    border-radius: $h/2;
}
```

### 插值语句

`#{}` 插值语句的作用：

1. 可以在选择器或属性名中使用变量：

```scss
scss复制代码$name: foo;
$attr: border;
p.#{$name} {
  #{$attr}-color: blue;
}
```

1. 在有引号的文本字符串中使用 `#{}` 插值语句可以添加动态的值：

```scss
scss复制代码p:before {
  content: "I ate #{5 + 10} pies!";
}
```

1. 在`calc()`函数中使用变量

```scss
scss复制代码&.test >span{
    left:calc(100% - #{$h2} - 2px);
}
```

### 嵌套

1. Sass 允许将一套 CSS 样式嵌套进另一套样式中，内层的样式将它外层的选择器作为父选择器，在嵌套规则中可以写任何css代码，包括群组选择器（,），子代选择器（>），同层相邻组合选择器（+）、同层全体组合选择器（~）

```scss
scss复制代码/* --------------------SCSS---------------- */
#test {
  width: 97%;
   >.son {
    background-color: #ff0000;
  }
}
/* --------------------CSS---------------- */
#test {
  width: 97%;
}
#test >.son {
  background-color: #ff0000;
}
```

1. 父选择器 `&`

- `&` =嵌套规则外层的父选择器，有多层嵌套时 ，最外层的父选择器会一层一层向下传递，`&`=级联的祖辈选择器。
- 使用伪类选择器时，需要直接使用嵌套外层的父选择器

```scss
scss复制代码/* --------------------SCSS---------------- */
#main {
  color: black;
  a {
    font-weight: bold;
    &:hover { color: red; }
  }
}
/* --------------------CSS---------------- */
#main {
  color: black; 
}
#main a {
  font-weight: bold; 
}
#main a:hover {
  color: red; 
}
```

- 作为选择器的第一个字符，其后跟随后缀生成复合的选择器

```scss
scss复制代码/* --------------------SCSS---------------- */
#main {
  color: black;
  &-sidebar { border: 1px solid; }
}
/* --------------------CSS---------------- */
#main {
  color: black; 
}
#main-sidebar {
  border: 1px solid; 
}
```

1. 属性嵌套

 有些 CSS 属性遵循相同的命名空间 (namespace)，如font-XXX，border-XXX等等，都可以以开头的单词作为属性的命名空间进行嵌套。

```scss
scss复制代码/* --------------------SCSS---------------- */
.funky {
  font: {
    family: fantasy;
    size: 30em;
    weight: bold;
  }
}
/* --------------------CSS---------------- */
.funky {
  font-family: fantasy;
  font-size: 30em;
  font-weight: bold; 
}
```

### 混合（Mixin)

对于经常重复使用的代码，使用混合`Mixin`可以“一次声明，随处引用”

#### 定义

`@mixin` 后添加名称与样式

举例：在float布局中经常要给父元素加上.clearfix

```scss
@mixin clearfix {
  &:after {
    content: '';
    display: block;
    clear: both;
  }
}
```

#### 引用

使用 `@include` 指令引用混合样式

```scss
#parent {
  @include clearfix;
  padding: 4px;
  margin-top: 10px;
}
```

Minix指令还可以接受参数等等

### 继承

SCSS继承可以让一套样式作用于不同的元素，减少代码的重复。

#### 定义

使用 `%`定义继承样式

```scss
%border-style {
  border:1px solid red;
}
```

#### 使用

通过关键字`@extend`完成继承

```scss
.container {
	@extend %border-style;
}
```

#### 不同

与混合不一样的是，混合编译为CSS后，会在每个引入混合样式的选择器下插入样式，而继承则是把继承的选择器加入到共有的样式选择器前，不会被编译到 CSS 文件中。

**编译前SCSS**

```scss
scss复制代码/* --------------------Mixin---------------- */

@mixin border-style {
  border:1px solid red;
}
.container {
	@include %border-style;
}
.test {
	@include %border-style;
}

/* --------------------extend---------------- */
%border-style {
  border:1px solid red;
}
.container {
	@extend %border-style;
}
.test {
	@extend %border-style;
}
```

**编译后css**

- 混合中

```cs
.container {
	 border:1px solid red;
     border-radius: 5px;
}
.test {
	 border:1px solid red;
     border-radius: 5px;
}
```

- 继承中

```css
.container, .test {
	 border:1px solid red;
     border-radius: 5px;
}
```