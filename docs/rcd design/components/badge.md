---
project: rcd-design
group: components

user-role: guest

unique-name: rcd-design-components-badge
title: 徽章

permalink: /rcd-design/components/badge
layout: ms-hbf-pg-hb-toc

enable-multi-language: false
enable-notification: false
enable-user-menu: false
toc: true
---

## 示例

徽章通过相对字体大小和 `em` 单位，能够实时适应性匹配父元素的尺寸。

{% capture example %}
<h1>Example heading <span class="badge badge-secondary">New</span></h1>
<h2>Example heading <span class="badge badge-secondary">New</span></h2>
<h3>Example heading <span class="badge badge-secondary">New</span></h3>
<h4>Example heading <span class="badge badge-secondary">New</span></h4>
<h5>Example heading <span class="badge badge-secondary">New</span></h5>
<h6>Example heading <span class="badge badge-secondary">New</span></h6>
{% endcapture %}
{% include partials/example.html content=example hide_markup=true %}

徽章可用作链接或按钮的一部分，以提供计数器功能。

{% capture example %}
<button type="button" class="btn btn-primary">
  Notifications <span class="badge badge-light">4</span>
</button>
{% endcapture %}
{% include partials/example.html content=example hide_markup=true %}

Note that depending on how they are used, badges may be confusing for users of screen readers and similar assistive technologies. While the styling of badges provides a visual cue as to their purpose, these users will simply be presented with the content of the badge. Depending on the specific situation, these badges may seem like random additional words or numbers at the end of a sentence, link, or button.

Unless the context is clear (as with the "Notifications" example, where it is understood that the "4" is the number of notifications), consider including additional context with a visually hidden piece of additional text.

{% capture example %}
<button type="button" class="btn btn-primary">
  Profile <span class="badge badge-white">9</span>
  <span class="sr-only">unread messages</span>
</button>
{% endcapture %}
{% include partials/example.html content=example hide_markup=true %}

## 情景变化

加入下方的 `.class` 样式来改变徽章的外观：

{% capture example %}
{% for color in site.data.colors.interactive %}
<span class="badge badge-{{ color.name }}">{{ color.name | capitalize }}</span>{% endfor %}
{% endcapture %}
{% include partials/example.html content=example hide_markup=true %}

{% include partials/callout-warning-color-assistive-technologies.md %}

## 胶囊徽章

使用 `.badge-pill` 样式，可以使徽章更加圆润（具体有较大的 `border-radius` 边框半径和水平 `padding`）。

{% capture example %}
{% for color in site.data.colors.interactive %}
<span class="badge badge-pill badge-{{ color.name }}">{{ color.name | capitalize }}</span>{% endfor %}
{% endcapture %}
{% include partials/example.html content=example hide_markup=true %}

## 超链接

在 `<a>` 元素上使用 `.badge-*` 样式，可以快速获得具有悬停、焦点等状态的可交互式徽章。

{% capture example %}
{% for color in site.data.colors.interactive %}
<a href="#" class="badge badge-{{ color.name }}">{{ color.name | capitalize }}</a>{% endfor %}
{% endcapture %}
{% include partials/example.html content=example hide_markup=true %}
