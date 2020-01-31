---
project: rcd-design
group: components

user-role: guest

unique-name: rcd-design-components-alert
title: 警告框

permalink: /rcd-design/components/alert
layout: ms-hbf-pg-hb-toc

enable-multi-language: false
enable-notification: false
enable-user-menu: false
toc: true
---

## 交互样式

警告框是一组颜色控件（共 12 个颜色样式），可用于任何长度的文本，以及可选的关闭按钮，系统提供8个可用的正确的样式（如，`.alert-success`），如你还可以使用[jQuery插件方法](#dismissing)来解除内联元素。

{% capture example %}
{% for color in site.data.colors.interactive %}
<div class="alert alert-{{ color.name }}" role="alert">
  A simple {{ color.name }} alert—check it out!
</div>
{% endfor %}
{% endcapture %}
{% include partials/example.html content=example hide_markup=true %}

{% include partials/callout-warning-color-assistive-technologies.md %}

## 超链接颜色

使用 `.alert-link` 类可以为带颜色的警告文本框中的链接加上合适的颜色。

{% capture example %}
{% for color in site.data.colors.interactive %}
<div class="alert alert-{{ color.name }}" role="alert">
  A simple {{ color.name }} alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
{% endfor %}
{% endcapture %}
{% include partials/example.html content=example hide_markup=true %}

## 额外附加内容

警告框还可以包含其他HTML元素，如标、段落和分隔符。

{% capture example %}
<div class="alert alert-success" role="alert">
  <h2 class="alert-heading">Well done!</h2>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <hr>
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>
{% endcapture %}
{% include partials/example.html content=example hide_markup=true %}


## 解除警告框

使用 `.alert` 结合 JavaScript，可以实现警报效果，贴在页面上，并可以自由关闭，其要点如下：

- 确保你正确加载了 `.alert` 警报组件，或者是编译后的 Bootstrap JavaScript 代码组。
- 如果你要自行编译JavaScript组件，请将必须的 [`util.js`]({{ site.baseurl }}/getting-started/javascript/#util) 包括进去。
- 可以在右上角定义一个 `.close` 关闭按钮效果，则需要在容器中引用 .`.alert-dismissible` 类。
- 警告按钮上要增加 `data-dismiss="alert"` 触发 JavaScript 动作，同时使用 `<button>` 元素，以确保在所有设备上都能获得正确的行为响应。
- 要在关闭警报时生成警报提示，请确保添加 `.fade` 和 `.show` 样式。

实际效果展示：

{% capture example %}
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
{% endcapture %}
{% include partials/example.html content=example hide_markup=true %}

## JavaScript 行为

# 触发

使用JavaScript插件解除警报：

{% highlight js %}
$('.alert').alert()
{% endhighlight %}

或者通过**警报框**内部包含的按钮 `data` 属性，如下所示：

{% highlight html %}
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
{% endhighlight %}

请注意，关闭警报会将其从DOM中移除。

# 方法

| 方法 | 描述 |
| --- | --- |
| `$().alert()` | Makes an alert listen for click events on descendant elements which have the `data-dismiss="alert"` attribute. (Not necessary when using the data-api's auto-initialization.) |
| `$().alert('close')` | Closes an alert by removing it from the DOM. If the `.fade` and `.show` classes are present on the element, the alert will fade out before it is removed. |
| `$().alert('dispose')` | Destroys an element's alert. |

{% highlight js %}$('.alert').alert('close'){% endhighlight %}

# 事件

Bootstrap's alert plugin exposes a few events for hooking into alert functionality.

| Event | Description |
| --- | --- |
| `close.bs.alert` | This event fires immediately when the <code>close</code> instance method is called. |
| `closed.bs.alert` | This event is fired when the alert has been closed (will wait for CSS transitions to complete). |

{% highlight js %}
$('#myAlert').on('closed.bs.alert', function () {
  // do something...
})
{% endhighlight %}
