---
title: GIT常用操作
date: 2020-05-18 12:19:37
type: categories
tags: git
categories: 编程
archives: git
copyright:
comments: true
---

## 目录
* [常用命令](#common)
* [合拼分支](#merge)
* [删除某次合拼](#del-merge)
* [创建分支并推送到远程](#create-branch)


### <span id="common">常用命令</span>

```
#查看分支：
git branch

#查看远程所有分支：
git branch -a

#创建分支：
git branch <name>

#切换分支：
git checkout <name>

#创建+切换分支：
git checkout -b <name>

#合并某分支到当前分支：
git merge <name>

#删除分支：
git branch -d <name>

#下载分支
git clone --branch [tags标签] [git地址]
git clone --branch solution-4 git@github.com:zspo/learngit.git

#更新远程分支
git pull origin 分支名称

#推送远程分支
git push origin 分支名称

#推送本地的feature-branch(冒号前面的)分支到远程origin的feature-branch(冒号后面的)分支(没有会自动创建)
git push origin feature-branch:feature-branch  

#删除远程仓库的分支
git push origin :分支名称 

#命令查看那些想过滤的文件是否被过滤掉
git status -s
```

---

### <span id="merge">合拼不同分支</span>
1:切换分支
比如同时有三个人开发，1.2最早是基于1.0，但是由于项目未发布，1.0,1.1,1.2全部都在同时开发，现在想把1.0已经增加的功能先合并到1.2
```
git checkout v1.0
git checkout v1.2
```

2：然后再v1.2的分支基础上执行merge
```
git merge v1.0
```
> 如果没有报错，那就直接提交代码git push origin v1.2
> 如果报错，基本是冲突了(比如)：
> CONFLICT (content): Merge conflict in app/src/main/AndroidManifest.xml
> Auto-merging app/build.gradle
> CONFLICT (content): Merge conflict in app/build.gradle
> Automatic merge failed; fix conflicts and then commit the result.
> 你需要去到提示的文件里把git自动标注的版本冲突注释掉，看你具体需要的功能进行删减
> 然后把冲突的文件git add，和commit ，比如你有2个冲突文件，多文件add的时候直接空格隔开

3：最后推送到远程分支
```
git add .
git commit -m "解决2个分支的冲突"
git push origin v1.2
```

### <span id="del-merge">删除某次合拼</span>
1.查看commit记录
```
git log
```
![合拼2.8.0 commit id](#https://github.com/mentu420/image-storage/blob/master/blog/commit-id.png)

2.使用revert 撤销
```
git revert d745fd35d849dd65b23d10737c6acb319b80cb8c -m 1
```
[参考](#https://learnku.com/articles/31705)


### <span id="create-branch">创建分支并推送到远程</span>
```
git branch <name>
git checkout <name>
git push origin <name>
```