---
project: rcd-design
group: guidelines

user-role: guest

unique-name: rcd-design-guidelines-code-guide
title: 代码规范

permalink: /rcd-design/guidelines/code-guide
layout: ms-hbf-pg-hb-toc

enable-multi-language: false
enable-notification: false
enable-user-menu: false
toc: true
---

### HTML

## 语法

+ 标签不要大写，即便是 `doctype` 标签。
+ 用两个空格来代替制表符（tab） -- 这是唯一能保证在所有环境下获得一致展现的方法。
+ 嵌套元素应当缩进一次（即 2 个空格）。
+ 对于属性的定义，永远全部使用双引号，绝不要使用单引号。
+ 不要在自闭合（self-closing）元素的尾部添加斜线 — [HTML5 规范](http://dev.w3.org/html5/spec-author-view/syntax.html#syntax-start-tag) 中明确说明斜线是可忽略的。
+ 不要省略可选的结束标签（closing tag）（例如，`</li>` 或 `</body>`）。

## 属性顺序

HTML 属性应当按照以下给出的顺序依次排列，确保代码的易读性。

+ class
+ id, name
+ data-*
+ src, for, type, href, value
+ title, alt
+ role, aria-*

class 用于标识高度可复用组件，因此应该排在首位。id 用于标识具体组件，应当谨慎使用（例如，页面内的书签），因此排在第二位。

### CSS

## 语法

+ 用两个空格来代替制表符（tab） -- 这是唯一能保证在所有环境下获得一致展现的方法。
+ 为选择器分组时，将单独的选择器单独放在一行。
+ 为了代码的易读性，在每个声明块的左花括号前添加一个空格。
+ 声明块的右花括号应当单独成行。
+ 每条声明语句的 : 后应该插入一个空格。
+ 为了获得更准确的错误报告，每条声明都应该独占一行。
+ 所有声明语句都应当以分号结尾。最后一条声明语句后面的分号是可选的，但是，如果省略这个分号，你的代码可能更易出错。
+ 对于以逗号分隔的属性值，每个逗号后面都应该插入一个空格（例如，box-shadow）。
+ 不要在 rgb()、rgba()、hsl()、hsla() 或 rect() 值的内部的逗号后面插入空格。这样利于从多个属性值（既加逗号也加空格）中区分多个颜色值（只加逗号，不加空格）。
+ 对于属性值或颜色参数，省略小于 1 的小数前面的 0 （例如，.5 代替 0.5；-.5px 代替 -0.5px）。
+ 十六进制值应该全部小写，例如，#fff。在扫描文档时，小写字符易于分辨，因为他们的形式更易于区分。
+ 尽量使用简写形式的十六进制值，例如，用 #fff 代替 #ffffff。
+ 为选择器中的属性添加双引号，例如，input[type="text"]。只有在某些情况下是可选的，但是，为了代码的一致性，建议都加上双引号。
+ 避免为 0 值指定单位，例如，用 margin: 0; 代替 margin: 0px;。

对于这里用到的术语有疑问吗？请参考 Wikipedia 上的 syntax section of the Cascading Style Sheets article。
