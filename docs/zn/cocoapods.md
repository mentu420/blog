---
title: react-native init XXX 卡在了info Installing required CocoaPods dependencies
date: 2019-09-18 11:21:02
type: categories
tags: react-native
categories: 编程
archives: 记录
copyright: true
comments: true
---

新建react-native项目时发现在info Installing required CocoaPods卡住了，官网解决方法是0.60 及以上版本依赖CocoaPods安装。CocoaPods的仓库在国内也很难访问。如果在CocoaPods的安装步骤卡很久，可以试一下这个[国内镜像](https://mirror.tuna.tsinghua.edu.cn/help/CocoaPods/)

<!--more-->

<font color="red">按照上面办法执行还是报错,暂时不知道原因</font>

网上查原因，发现卡住是cocoapods资源库比较大原因，需要科学上网下载。

<font color="red">然后又发现科学上网下载也慢</font>

最后只能自己安装pod依懒，下面是安装流程：

### 检查并卸载cocoapods

1：检查是否安装过pod：
```
which pod
```
出现路径：/usr/local/bin/pod

```
/usr/local/bin/pod
```

2：输入密码并确认移除pod：
```
sudo rm -rf /usr/local/bin/pod
```
![图片](https://raw.githubusercontent.com/mentu420/image-storage/master/blog/cocoapods-3.png)


3：查看cocoapods安装了哪些资源
```
gem list
```

![详情](https://raw.githubusercontent.com/mentu420/image-storage/master/blog/cocoapods-1.png)

4：卸载cocoapods资源库相关文件
```
sudo gem uninstall cocoapods
```
卸载相关资源文件
```
sudo gem uninstall cocoapods-xxx
```

### 二、修改镜像源
cocoapods 下载慢是因为下载的是国外资源，这里改为国内的：

1：查看源：
```
gem sources
```
![图片](https://raw.githubusercontent.com/mentu420/image-storage/master/blog/cocoapods-2.png)

2:移除源：
```
gem sources --remove https://rubygems.org/
```
在查看源，发现移除成功

3:修改源：
```
gem sources -a https://gems.ruby-china.com/
```

4:安装cocoapods资源库
```
sudo gem install -n /usr/local/bin cocoapods
```
![图片](https://raw.githubusercontent.com/mentu420/image-storage/master/blog/cocoapods-4.png)

安装pod
```
pod setup
```
耐心等待，安装时间有点长

![图片](https://raw.githubusercontent.com/mentu420/image-storage/master/blog/cocoapods-5.png)

完成后运行
```
react-native init App
```
![图片](https://raw.githubusercontent.com/mentu420/image-storage/master/blog/cocoapods-6.png)

```
cd App && react-native run-ios
```

![图片](https://raw.githubusercontent.com/mentu420/image-storage/master/blog/cocoapods-7.png)









