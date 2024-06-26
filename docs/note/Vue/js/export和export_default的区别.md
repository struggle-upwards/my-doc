# export 和 export default的区别



## 一、概述

> 在 ES6 之前，社区制定了一些模块加载方案，最主要的有 CommonJS 和 AMD 两种。前者用于服务器，后者用于浏览器。ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，完全可以取代 CommonJS 和 AMD 规范，成为浏览器和服务器通用的模块解决方案。

ES6中，在JavaScript ES6中，export与export default均可用于导出常量、函数、文件、模块等。

## 二、export命令

模块功能主要由两个命令构成：`export`和`import`。export命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能。

一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。如果你希望外部能够读取模块内部的某个变量，就必须使用export关键字输出该变量。

下面是一个js文件，里面使用export命令来输出变量，函数或类（class）

```javascript
export var str = "export的内容";
export  var year =2019;
export function message(sth) {
  return sth;
}
```

除了上述的写法，还有一种推荐使用的，因为这样就可以在脚本尾部，一眼看清楚输出了哪些变量。

```ini
var str = "export的内容";
var year =2019;
function message(sth) {
  return sth;
}
export {str,year,message}
```

通常情况下，export输出的变量就是本来的名字，但是可以使用as关键字重命名。

```javascript
var str = "export的内容";
var year =2019;
function message(sth) {
  return sth;
}
export {
    str as newname1,
    year as newname2,
    message as newname3
};
```

上面代码使用as关键字，重命名了变量str和year，以及函数message的对外接口。

## 三、import命令

使用export命令定义了模块的对外接口以后，其他 JS 文件就可以通过import命令加载这个模块。

```javascript
import { str,year, message } from './a';
//也可以分开写两次，导入的时候带花括号，将每个变量函数名写清楚
```

上面代码的import命令，用于加载a.js文件,引入后便可以在b.js文件中使用a.js文件中的变量、函数或类等。import命令接受一对大括号，里面指定要从其他模块导入的变量名。大括号里面的变量名，必须与被导入模块（a.js）对外接口的名称相同。

如果想为输入的变量重新取一个名字，import命令要使用as关键字，将输入的变量重命名。

```javascript
import { str as newname1,
year as newname2,
message as newname3
} from './a';
```

import后面的from指定模块文件的位置，可以是相对路径，也可以是绝对路径，.js后缀可以省略。 如果只是模块名，不带有路径，那么必须有配置文件，告诉 JavaScript 引擎该模块的位置。

```javascript
import axios from ‘axios’;
//import 引入一个自己写的js文件，是需要相对路径的。
import AppService from ‘./appService’;
```

## 四、export default 命令

export default命令用于指定模块的`默认输出`。显然，一个模块只能有一个默认输出，因此export default命令只能使用一次。所以，import命令后面才不用加大括号，因为只可能唯一对应export default命令。`一个文件内不能有多个export default`。

```javascript
const str = "export default的内容";
export default str
在另一个文件中的导入方式： 
//b.js 
import StrFile from 'a'; 
//导入的时候没有花括号
//本质上，a.js文件的export default输出一个叫做default的变量，然后系统允许你引入的时候为它取任意名字。
```

## 五、简述区别

1. export与export default均可用于导出常量、函数、文件、模块等
2. 在一个文件或模块中，export、import可以有多个，export default仅有一个
3. 通过export方式导出，在导入时要加{ }，export default则不需要，并可以起任意名称
4. 输出单个值，使用export default,输出多个值，使用exportexport default与普通的export不要同时使用

