---
title: vue项目命名规范总结
date: 2020-09-02 10:47:57
type: categories
tags: vue
categories: 总结
archives: vue
copyright: true
comments: true
---

> 做公司项目时，发现项目的文件很乱；命名不统一。找文件组件造成很大障碍，文件识别性低；参考了一些网上规范与官网说明，自己总结一套，以后就套用这套

## 目录
* [项目结构](#prod)
* [src文件结构](#src)
* [views文件里面命名规则](#view)
* [vue文件命名规则](#vue)
* [js文件命名规则](#js)
* [vue单文件script结构](#script)
* [vue单文件method自定义方法命名规则](#method)
* [参考](#reference)


### <span id="prod">项目结构</span>
>项目结构就按vue项目一样就好，主要是src里面的文件命名规范

### <span id="src">src文件</span>
> 所以的子文件夹


```
src
    - api             //存放请求接口相关文件
    - assets          //静态资源文件夹
        - images      //图片  可以再创建文件夹common、icon、basic等
        - fonts       //应用的字体
        - iconfont    //图标字体
        - styles      //样式表文件
    - components      //组件文件
        - basic       //基础组件（一些button、switch、radio等）
        - common      //常用组件（搜索、手风琴、列表等）
        - layout      //布局组件（顶部、底部、滑动等）
        ...         
    - constants       //常量（存放一些权限、url配置或其他不变的文件）
    - mixins          //vue mixins (组件公用的一些逻辑)
    - views           //页面文件  （命名下面详细说）
    - router          //路由文件
    - store           //vuex文件
        - modules     //vuex 模块 （一定要设置模块名namespaced:true）
    - utils           //工具函数（自己封装的）
    - libs            //工具函数（第三方库引用，进行了一些修改）
```

### <span id="views">views文件里面命名规则</span>
 views文件命名也套用于components，components尽量只做一级目录。

1.一级目录
> 代表模块的名字
> 尽量由名词组成
> 单词只有一个
> 文件夹名字以小写字母开头,.vue文件名字以大写字母开头
> 只有一个文件时不出现文件夹，直接放在 views 下面,为***.vue文件
> 如 main | login | common,Main.vue | Login.vue | Common.vue

2.二级目录
> 代表着一级目录中某一大模块的名字
> 尽量由名词组成
> 名字至少两个单词
> 文件夹名字以小写字母开头,.vue文件名字以大写字母开头
> 只有一个文件时不出现文件夹，直接放在 一级目录 下面,为***.vue文件
> 常用结尾单词有 Detail | Edit | List | Info | Report,如 SolutionList
> 以 Item 结尾的代表着组件,如 SolutionItem


### <span id="vue">vue文件命名规则</span>
> 除index.vue之外，其他.vue文件统一用PascalBase风格


### <span id="js">js文件命名规则</span>
> 属于类的.js文件，除index.js外，使用PascalBase风格
> 其他类型的.js文件，使用kebab-case风格
> 属于Api的，统一加上api后缀


### <span id="script">vue单文件script结构</span>
1.name
2.components
3.props
4.data
5.filter
6.computed
7.watch
8.created
9.mounted
10.activited
11.update
12.beforeRouteUpdate
13.metods

> metods 总放最后，如果有路由守护函数beforeRouteLeave放methods前面

vscode 可以自定义代码片段进行快速编码
[vue代码片段](http://localhost:4000/2020/09/02/vueCodeSinppet/)


### <span id="method">vue单文件method自定义方法命名规则</span>
> mapMutations 放在最前面
> init 作为组件初始化函数 
> 驼峰命名（good: getListData）（bad: get_list_data、getlistData）
> 事件方法以 on 开头（onTypeChange、onUsernameInput）
> 尽量使用常用单词开头（set、get、open、close、jump）
> 动宾短语（good：jumpPage、openCarInfoDialog）（bad：go、nextPage、show、open、login）
> ajax 方法以 get、post 开头，以 data 结尾（good：getListData、postFormData）（bad：takeData、confirmData、getList、postForm）


### <span id="reference">参考</span>
[vue风格指南](https://cn.vuejs.org/v2/style-guide/)
[【Vue】教程:二、命名规范](https://www.jianshu.com/p/6848c2cf3753)
[Vue命名规范](https://www.jianshu.com/p/99e67fc22ced)
[VUE项目规范](https://www.jianshu.com/p/304d537284d7)
[Vue项目文件命名规范](https://www.jianshu.com/p/bc62266c2948)

