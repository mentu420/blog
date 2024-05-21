---
title: 使用css限制文本显示，文字长度超出部分用省略号表示
date: 2020-05-18 11:52:50
type: categories
tags: style
categories: 编程
archives: 记录
copyright: true
comments:
---

### 使用css限制文本显示，文字长度超出部分用省略号表示

为了保证页面的整洁美观，在很多的时候，我们常需要隐藏超出长度的文字。这在列表条目，题目，名称等地方常用到。

1：文本不换行
```
.line-limit-length {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; //文本不换行，这样超出一行的部分被截取，显示...
}
```

2：文本换行,3行后超出显示省略号

```
.line-limit-length {
    display   : -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: $clamp;
    overflow  : hidden;
    word-wrap: break-word;
}
```