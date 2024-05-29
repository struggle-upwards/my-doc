## 伪类有哪些？

按照功能，可划分为以下几类：

- 动态伪类：`:visited`、`:focus`、`:hover`等
- 状态伪类：`:disabled`、`:empty`、`:required` 等
- 结构伪类：`:first-child`、`:nth-of-type`等
- 其他伪类：`:target`、`:lang`、`:not()`等

下面的表格详细记录了各种伪类及其描述：

| **伪类**                      | **描述**                            | **兼容性**                                                   |
| ----------------------------- | ----------------------------------- | ------------------------------------------------------------ |
| `:active`                     | 元素处于活动状态时                  | [✅](https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Aactive) |
| `:focus`                      | 元素已获取焦点时                    | [✅](https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Afocus) |
| `:hover`                      | 元素处于悬浮状态时                  | [✅](https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Ahover) |
| `:link`                       | 链接未访问时                        | [✅](https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Alink) |
| `:visited`                    | 链接已访问时                        | [✅](https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Avisited) |
| `:first-child`                | 元素是首个子元素时                  | [✅](https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Afirst-child) |
| `:last-child`                 | 元素是最后一个子元素时              | [✅](https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Alast-child) |
| `:nth-child()`                | 元素是第 n 个子元素时               | [✅](https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Anth-child) |
| `:nth-last-child()`           | 元素是倒数第 n 个子元素时           | [✅](https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Anth-last-child) |
| `:only-child`                 | 元素是唯一子元素时                  | [✅](https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Aonly-child) |
| `:first-of-type`              | 元素是首个特定类型的子元素时        | [✅](https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Afirst-of-type) |
| `:last-of-type`               | 元素是最后一个特定类型的子元素时    | [✅](https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Alast-of-type) |
| `:nth-of-type()`              | 元素是第 n 个特定类型的子元素时     | [✅](https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Anth-of-type) |
| `:nth-last-of-type()`         | 元素是倒数第 n 个特定类型的子元素时 | [✅](https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Anth-last-of-type) |
| `:only-of-type`               | 元素是唯一的特定类型的子元素时      | [✅](https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Aonly-of-type) |
| `:not`                        | 不满足指定条件时                    | [✅](https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Anot) |
| `:target`                     | 元素 id 匹配到哈希值时              | [✅](https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Atarget) |
| `:root`                       | 元素是文档树的根元素时              | [✅](https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Aroot) |
| `:lang()`                     | 匹配到指定语言时                    | [✅](https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Alang) |
| `:empty`                      | 元素处于没有子元素状态时            | [✅](https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Aempty) |
| `:invalid` 和 `:valid`        | 表单项是否有效                      | [✅](https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Avalid) |
| `:required` 和 `:optional`    | 表单项是否必填                      | [✅](https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Arequired) |
| `:in-range`和 `:out-of-range` | 表单项是否超出范围                  | [✅](https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Ain-range) |
| `:read-only`和 `:read-write`  | 表单项是否只读                      | [✅](https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Aread-only) |
| `:enabled`和 `:disabled`      | 表单项是否禁用                      | [✅](https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Aenabled) |
| `:fullscreen`                 | 当前处于全屏显示模式时              | [⚠️](https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Afullscreen) |
| `:blank`                      | 输入框处于输入为空状态时            | ❌                                                            |
| `:dir()`                      | 匹配到特定文字书写方向时            | [❌](https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Adir) |

上表中的兼容性表示：

- [✅](https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Aactive) 代表主流浏览器都支持（至少 95% 以上）
- [❌](https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3Anth-child) 代表大部分主浏览器都不支持（仅 20% 以下浏览器实现该特性）
- ⚠️ 代表部分浏览器支持（可能需要加前缀，例如 `:webkit-`或 `:-moz-`等）

## 伪元素有哪些？

与伪类相比，[伪元素](https://link.juejin.cn?target=https%3A%2F%2Fdrafts.csswg.org%2Fcss-pseudo%2F)就少很多了，常用的如下：

| **伪元素**               | **选中或创建出来的元素**               | **兼容性**                                                   |
| ------------------------ | -------------------------------------- | ------------------------------------------------------------ |
| `::first-letter`         | 选中块状元素中的首字母                 | [✅](https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3A%3Afirst-letter) |
| `::first-line`           | 选中首行                               | [✅](https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3A%3Afirst-line) |
| `::before`               | 在之前创建一个不在文档树中的元素       | [✅](https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3A%3Abefore) |
| `::after`                | 在之后创建一个不在文档树中的元素       | [✅](https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3A%3Aafter) |
| `::placeholder`          | 选中表单元素的占位文本                 | [✅](https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3A%3Aplaceholder) |
| `::file-selector-button` | 选中类型为 file 的 input 里面的 button | [✅](https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3A%3Afile-selector-button) |
| `::selection`            | 选中被用户高亮的部分                   | [⚠️](https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3A%3Aselection) |
| `::backdrop`             | 选中视觉聚焦元素后面的背景元素         | [⚠️](https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3A%3Abackdrop) |
| `::marker`               | 选中 list 的 marker                    | [⚠️](https://link.juejin.cn?target=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3D%3A%3Amarker) |

