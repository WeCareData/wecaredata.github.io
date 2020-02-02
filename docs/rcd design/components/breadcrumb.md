---
project: rcd-design
group: components

user-role: guest

unique-name: rcd-design-components-breadcrumb
title: 面包屑导航

permalink: /rcd-design/components/breadcrumb
layout: ms-hbf-pg-hb-toc

enable-multi-language: false
enable-notification: false
enable-user-menu: false
toc: true
---

## 概览

分隔符号是通过 [`::before`](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) 和 [`content`](https://developer.mozilla.org/en-US/docs/Web/CSS/content) 两个方法定义添加的。

{% capture example %}
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="page">Home</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
{% endcapture %}
{% include partials/example.html content=example hide_markup=true %}

## 更改分隔符

可以通过改变 `$breadcrumb-divider` 来改变分隔符号。需要通过 [quote](https://sass-lang.com/documentation/functions/string#quote) 函数来生成分隔符号，如果你想使用 `>` 作为分隔符号，你可以使用下述方式：

```scss
$breadcrumb-divider: quote(">");
```

也可以使用  **base64 embedded SVG icon**：

```scss
$breadcrumb-divider: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxwYXRoIGQ9Ik0yLjUgMEwxIDEuNSAzLjUgNCAxIDYuNSAyLjUgOGw0LTQtNC00eiIgZmlsbD0iY3VycmVudENvbG9yIi8+PC9zdmc+);
```

分隔符可以通过设置 `$breadcrumb-divider` 为 `none`：

```scss
$breadcrumb-divider: none;
```

## 无障碍处理

为了为障碍浏览提供方便，针对面包屑这样具备导航功能的模块，建议添加一个有意义的标签即 `aria-label="breadcrumb"` 來描述 `<nav>` 元素，以及使用  `aria-current="page"` 到这组导航的最后一个项目，以标明当前页面名称（路径）

更多信息，敬请参阅 [WAI-ARIA Authoring Practices for the breadcrumb pattern](https://www.w3.org/TR/wai-aria-practices/#breadcrumb)。
