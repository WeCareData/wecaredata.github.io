---
project: rcd-design
group: guidelines

user-role: guest

unique-name: rcd-design-guidelines-text-layout
title: 文字排版

permalink: /rcd-design/guidelines/text-layout
layout: ms-hbf-pg-hb-toc

enable-multi-language: false
enable-notification: false
enable-user-menu: false
toc: true
---

## 文字排版

# 空格

- 中英文之间需要增加空格
- 中文与数字之间需要增加空格
- 数字与单位之间需要增加空格
- 全角标点与其他字符之间不加空格

在 LeanCloud 上，数据存储是围绕 AVObject 进行的。每个 AVObject 都包含了与 JSON 兼容的 key-value 对应的数据。数据是 schema-free 的，你不需要在每个 AVObject 上提前指定存在哪些键，只要直接设定对应的 key-value 即可。

例外：「豆瓣FM」等产品名词，按照官方所定义的格式书写。

正确：今天出去买菜花了 5000 元。


正确：我家的光纤入屋宽带有 10 Gbps，SSD 一共有 20 TB

例外：度 / 百分比与数字之间不需要增加空格：

正确：

今天是 233° 的高温。

新 MacBook Pro 有 15% 的 CPU 性能提升。


正确：

刚刚买了一部 iPhone，好开心！

# 标点符号

- 不重复使用标点符号
- 使用全角中文标点
- 数字使用半角字符


正确：

德国队竟然战胜了巴西队！

她竟然对你说「喵」？！

全角和半角
不明白什么是全角（全形）与半角（半形）符号？请查看维基百科词条『全形和半形』。

正确：

嗨！你知道嘛？今天前台的小妹跟我说「喵」了哎！

核磁共振成像（NMRI）是什么原理都不知道？JFGI！

正确：

这个蛋糕只卖 1000 元。

例外：在设计稿、宣传海报中如出现极少量数字的情形时，为方便文字对齐，是可以使用全形数字的。

遇到完整的英文整句、特殊名词，其内容使用半角标点
正确：

贾伯斯那句话是怎么说的？「Stay hungry, stay foolish.」

推荐你阅读《Hackers & Painters: Big Ideas from the Computer Age》，非常的有趣。

错误：

贾伯斯那句话是怎么说的？「Stay hungry，stay foolish。」

推荐你阅读《Hackers＆Painters：Big Ideas from the Computer Age》，非常的有趣。

名词
专有名词使用正确的大小写
大小写相关用法原属于英文书写范畴，不属于本 wiki 讨论内容，在这里只对部分易错用法进行简述。

正确：

使用 GitHub 登录

我们的客户有 GitHub、Foursquare、Microsoft Corporation、Google、Facebook, Inc.。

错误：

使用 github 登录

使用 GITHUB 登录

使用 Github 登录

使用 gitHub 登录

使用 gｲんĤЦ8 登录

我们的客户有 github、foursquare、microsoft corporation、google、facebook, inc.。

我们的客户有 GITHUB、FOURSQUARE、MICROSOFT CORPORATION、GOOGLE、FACEBOOK, INC.。

我们的客户有 Github、FourSquare、MicroSoft Corporation、Google、FaceBook, Inc.。

我们的客户有 gitHub、fourSquare、microSoft Corporation、google、faceBook, Inc.。

我们的客户有 gｲんĤЦ8、ｷouЯƧquﾑгє、๓เςг๏ร๏Ŧt ς๏гק๏гคtเ๏ภn、900913、ƒ4ᄃëв๏๏к, IПᄃ.。

注意：当网页中需要配合整体视觉风格而出现全部大写／小写的情形，HTML 中请使用标淮的大小写规范进行书写；并通过 text-transform: uppercase;／text-transform: lowercase; 对表现形式进行定义。

不要使用不地道的缩写
正确：

我们需要一位熟悉 JavaScript、HTML5，至少理解一种框架（如 Backbone.js、AngularJS、React 等）的前端开发者。

错误：

我们需要一位熟悉 Js、h5，至少理解一种框架（如 backbone、angular、RJS 等）的 FED。

争议
以下用法略带有个人色彩，即：无论是否遵循下述规则，从语法的角度来讲都是正确的。

链接之间增加空格
用法：

请 提交一个 issue 并分配给相关同事。

访问我们网站的最新动态，请 点击这里 进行订阅！

对比用法：

请提交一个 issue并分配给相关同事。

访问我们网站的最新动态，请点击这里进行订阅！

简体中文使用直角引号
用法：

「老师，『有条不紊』的『紊』是什么意思？」

对比用法：

“老师，‘有条不紊’的‘紊’是什么意思？”

