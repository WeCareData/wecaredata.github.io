---
project: rcd-design
group: guidelines

user-role: guest

unique-name: rcd-design-guidelines-theme
title: 主题

permalink: /rcd-design/guidelines/theme
layout: ms-hbf-pg-hb-toc

enable-multi-language: false
enable-notification: false
enable-user-menu: false
toc: false
---

## 当前主题色

<table class="table">
<thead>
<tr>
<th scope="col">预览</th>
<th scope="col">名称</th>
<th scope="col">用途</th>
</tr>
</thead>
<tbody>
{% for indicator in site.data.colors.theme %}
<tr class="py-4">
<td><span class="p-16 d-block border-radius-round border theme-white-{{ indicator.name }}"></span></td>
<td>{{ indicator.name }}</td>
<td>{{ indicator.usage }}</td>
</tr>
{% endfor %}
</tbody>
</table>