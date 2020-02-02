---
project: rcd-design
group: guidelines

user-role: guest

unique-name: rcd-design-guidelines-color
title: 颜色

permalink: /rcd-design/guidelines/color
layout: ms-hbf-pg-hb-toc

enable-multi-language: false
enable-notification: false
enable-user-menu: false
toc: true
---

<h2>彩色色板</h2>
<p class="body-long-01">RCD 提供了12个基本色，这些基本色的 Hue 基本将色轮分为 12 等份。每个基本色，基于 HSL 色彩模式，通过适当调整 H S L 的数值进而生成了一组 10 个颜色构成的色板。</p>
<div class="row no-gutters layout-y1">
  {% for color in site.data.colors.swatches %}
  <div class="col mb-8">
    <div class="py-4 px-8 swatch-{{ color.name }}">
      <p class="body-short-01 mb-0">{{ color.name | capitalize }}</p>
      <small>#{{ color.hex }}</small>
    </div>
    {% for i in (1..10) %}
    <div class="py-4 px-8 swatch-{{ color.name}}-{{ i }}0">
      <small>{{ color.name | capitalize }}-{{ i }}0</small>
    </div>
    {% endfor %}
  </div>
  {% endfor %}
</div>

<p class="body-long-01">在 Sass 中，可以使用类似下面的方式获取相应的色板颜色：</p>
{% highlight scss %}
// 通过 calc-color-palette 函数获取
.alpha { color: calc-color-palette($color-base-red, $i); }

// 通过 Sass Map 函数获取
.beta { color: get-lib-value($lib-color-swatch, red, 20); }
{% endhighlight %}
<h2>灰色色板</h2>
<p class="body-long-01">RCD 提供了3种可供选择的灰色基本色，以及灰色色板。</p>
<div class="row no-gutters layout-y1">
  {% for gray in site.data.colors.grays %}
  <div class="col-4">
    <div class="py-4 px-8 swatch-{{ gray.name }}">
    {{ gray.name | capitalize }}
    </div>
    {% for i in (1..10) %}
    <div class="py-4 px-8 swatch-{{ gray.name | replace: " ", "-" }}-{{ i }}0">
        {{ gray.name | capitalize }}-{{ i }}0
    </div>
    {% endfor %}
    </div>
{% endfor %}
</div>
<h2>主题交互颜色</h2>
<p class="body-long-01">基于 <a href="{{ site.baseurl }}/{{ page.project | replace: " ", "-" }}/{{ page.group | replace: " ", "-" }}/Theme">RCD 主题</a>，RCD 从色板中选择了
  12 个颜色作为用户交互时的颜色体系。这些交互颜色可以用作元素颜色或者背景颜色等。</p>
<div class="row layout-y1">
  {% for color in site.data.colors.interactive %}
  <div class="col-4 mb-8">
    <div class="py-4 px-8 swatch-{{ color.name }} {% if color.name == " white" %}border{% endif %}">
    {{ color.name | capitalize }}
  </div>
</div>
{% endfor %}
</div>
