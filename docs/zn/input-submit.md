---
title: vue 使用input 移动端搜索框，让弹出键盘显示搜索按钮
date: 2020-05-18 12:02:35
type: categories
tags: html
categories: 编程
archives: 记录
copyright: true
comments:
---

### vue 使用 input 移动端搜索框，让弹出键盘显示搜索按钮


在移动端使用 input type="search" 手机键盘出现搜索按钮

```
<form @submit.prevent>
    <input type="search"/>
</form>
```
---
<font color=red>备注</font>
ios必须外包form标签，搜索按钮才会出现
@submit.prevent vue使用，防止重载页面