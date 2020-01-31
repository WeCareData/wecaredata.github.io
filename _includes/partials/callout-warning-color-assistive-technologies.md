{% capture callout %}
# 网页中传达辅助技术及其背后的意义
使用颜色添加意义只提供一个视觉指示，这不会传达给需要辅助技术（如盲人、听力障碍者）的用户，也就决定了诸如屏幕阅读器并不能读出颜色本身的意义。一般推荐确保由颜色表示的信息从内容本身（例如可见文本）中显而易见，或者通过替代方法，例如隐藏在 `.sr-only` 该类中的附加文本来创造更多的辅助传达技术。
{% endcapture %}
{% include partials/callout.html content=callout type="warning" %}
