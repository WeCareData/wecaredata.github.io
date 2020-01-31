---
project: rcd-design
group: components

user-role: guest

unique-name: rcd-design-components-button
title: 按钮

permalink: /rcd-design/components/button
layout: ms-hbf-pg-hb-toc

enable-multi-language: false
enable-notification: false
enable-user-menu: false
toc: true
---

## 交互样式

按钮包括多个预定义的按钮样式，每个样式都有自己的语义目的，另外还有一些额外的功能可以用于更多的控制。

{% capture example %}
{% for color in site.data.colors.interactive %}
<button type="button" class="btn btn-{{ color.name }}">{{ color.name | capitalize }}</button>{% endfor %}

<button type="button" class="btn btn-link">Link</button>
{% endcapture %}
{% include partials/example.html content=example hide_markup=true %}

{% include partials/callout-warning-color-assistive-technologies.md %}

## Disable text wrapping

If you don't want the button text to wrap, you can add the `.text-nowrap` class to the button. In Sass, you can set `$btn-white-space: nowrap` to disable text wrapping for each button.

## 按钮标签

`.btn` 可以在`<button>`元素上使用，您也可以在 `<a>`、 或 `<input>` 元素上使用這些 Class，同样能带来按钮效果（在少数浏览器下会有不同的渲染变异）。

当在`<a>`上使用按钮元素，用于触发页内功能的元素（如折叠内容）上使用按钮类时，而不是链接到当前页面中的新页面或部分，应该给这些链接`role="button"`适当地传达其辅助技术的目的，从而友好的支持屏幕阅读器。

{% capture example %}
<a class="btn btn-primary" href="#" role="button">Link</a>
<button class="btn btn-primary" type="submit">Button</button>
<input class="btn btn-primary" type="button" value="Input">
<input class="btn btn-primary" type="submit" value="Submit">
<input class="btn btn-primary" type="reset" value="Reset">
{% endcapture %}
{% include partials/example.html content=example hide_markup=true %}

## Outline buttons

In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the `.btn-outline-*` ones to remove all background images and colors on any button.

{% capture example %}
{% for color in site.data.colors.interactive %}
<button type="button" class="btn btn-outline-{{ color.name }}">{{ color.name | capitalize }}</button>{% endfor %}
{% endcapture %}
{% include partials/example.html content=example hide_markup=true %}

## Sizes

Fancy larger or smaller buttons? Add `.btn-lg` or `.btn-sm` for additional sizes.

{% capture example %}
<button type="button" class="btn btn-primary btn-lg">Large button</button>
<button type="button" class="btn btn-secondary btn-lg">Large button</button>
{% endcapture %}
{% include partials/example.html content=example hide_markup=true %}

{% capture example %}
<button type="button" class="btn btn-primary btn-sm">Small button</button>
<button type="button" class="btn btn-secondary btn-sm">Small button</button>
{% endcapture %}
{% include partials/example.html content=example hide_markup=true %}

Create block level buttons—those that span the full width of a parent—by adding `.btn-block`.

{% capture example %}
<button type="button" class="btn btn-primary btn-lg btn-block">Block level button</button>
<button type="button" class="btn btn-secondary btn-lg btn-block">Block level button</button>
{% endcapture %}
{% include partials/example.html content=example hide_markup=true %}

## Active state

Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active. **There's no need to add a class to `<button>`s as they use a pseudo-class**. However, you can still force the same active appearance with `.active` (and include the <code>aria-pressed="true"</code> attribute) should you need to replicate the state programmatically.

{% capture example %}
<a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Primary link</a>
<a href="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Link</a>
{% endcapture %}
{% include partials/example.html content=example hide_markup=true %}

## Disabled state

Make buttons look inactive by adding the `disabled` boolean attribute to any `<button>` element.

{% capture example %}
<button type="button" class="btn btn-lg btn-primary" disabled>Primary button</button>
<button type="button" class="btn btn-secondary btn-lg" disabled>Button</button>
{% endcapture %}
{% include partials/example.html content=example hide_markup=true %}

Disabled buttons using the `<a>` element behave a bit different:

- `<a>`s don't support the `disabled` attribute, so you must add the `.disabled` class to make it visually appear disabled.
- Some future-friendly styles are included to disable all `pointer-events` on anchor buttons. In browsers which support that property, you won't see the disabled cursor at all.
- Disabled buttons should include the `aria-disabled="true"` attribute to indicate the state of the element to assistive technologies.

{% capture example %}
<a href="#" class="btn btn-primary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Primary link</a>
<a href="#" class="btn btn-secondary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Link</a>
{% endcapture %}
{% include partials/example.html content=example hide_markup=true %}

{% capture callout %}
##### Link functionality caveat

The `.disabled` class uses `pointer-events: none` to try to disable the link functionality of `<a>`s, but that CSS property is not yet standardized. In addition, even in browsers that do support `pointer-events: none`, keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, add a `tabindex="-1"` attribute on these links (to prevent them from receiving keyboard focus) and use custom JavaScript to disable their functionality.
{% endcapture %}
{% include partials/callout.html content=callout type="warning" %}

## Button plugin

Do more with buttons. Control button states or create groups of buttons for more components like toolbars.

### Toggle states

Add `data-toggle="button"` to toggle a button's `active` state. If you're pre-toggling a button, you must manually add the `.active` class **and** `aria-pressed="true"` to the `<button>`.

{% capture example %}
<button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false">
  Single toggle
</button>
{% endcapture %}
{% include partials/example.html content=example hide_markup=true %}

### Checkbox and radio buttons

Bootstrap's `.button` styles can be applied to other elements, such as `<label>`s, to provide checkbox or radio style button toggling. Add `data-toggle="buttons"` to a `.btn-group` containing those modified buttons to enable their toggling behavior via JavaScript and add `.btn-group-toggle` to style the `<input>`s within your buttons. **Note that you can create single input-powered buttons or groups of them.**

The checked state for these buttons is **only updated via `click` event** on the button. If you use another method to update the input—e.g., with `<input type="reset">` or by manually applying the input's `checked` property—you'll need to toggle `.active` on the `<label>` manually.

Note that pre-checked buttons require you to manually add the `.active` class to the input's `<label>`.

{% capture example %}
<div class="btn-group-toggle" data-toggle="buttons">
  <label class="btn btn-secondary active">
    <input type="checkbox" checked> Checked
  </label>
</div>
{% endcapture %}
{% include partials/example.html content=example hide_markup=true %}

{% capture example %}
<div class="btn-group btn-group-toggle" data-toggle="buttons">
  <label class="btn btn-secondary active">
    <input type="radio" name="options" id="option1" checked> Active
  </label>
  <label class="btn btn-secondary">
    <input type="radio" name="options" id="option2"> Radio
  </label>
  <label class="btn btn-secondary">
    <input type="radio" name="options" id="option3"> Radio
  </label>
</div>
{% endcapture %}
{% include partials/example.html content=example hide_markup=true %}

### Methods

| Method | Description |
| --- | --- |
| `$().button('toggle')` | Toggles push state. Gives the button the appearance that it has been activated. |
| `$().button('dispose')` | Destroys an element's button. |
