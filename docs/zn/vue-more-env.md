---
title: vue-cli4 配置多环境变量
date: 2020-08-24 16:02:26
tags: html
categories: 编程
archives: 记录
copyright: true
comments:
---


# 配置多环境变量

在根目录添加 .env.xxx 来配置多环境

通过在 package.json 里的 scripts 配置项中添加--mode xxx 来选择不同环境

只有以 VUE_APP 开头的变量会被 webpack.DefinePlugin 静态嵌入到客户端侧的包中，代码中可以通过 process.env.VUE_APP_BASE_API 访问

NODE_ENV 和 BASE_URL 是两个特殊变量，在代码中始终可用

#### 配置

在项目根目录中新建.env.dev, .env.pre, .env.prd 文件

- .env.dev

```javascript
NODE_ENV = "dev"

VUE_APP_API_CD = "https://chandao.derucci.com:6443"
VUE_APP_API_CM = "https://chandao.derucci.com:6443"
```

- .env.pre

```javascript
NODE_ENV = "pre"

VUE_APP_API_CD = "https://agencytest.derucci.net"
VUE_APP_API_CM = "https://mobiletest.derucci.net"
```

- .env.prd

```javascript
NODE_ENV = "prd"

VUE_APP_API_CD = "https://agency.derucci.com"
VUE_APP_API_CM = "https://derucci.net"
```

&emsp;&emsp;修改 package.json

```javascript
"scripts": {
    "serve:dev": "vue-cli-service serve --mode dev",
    "serve:pre": "vue-cli-service serve --mode pre",
    "serve:prd": "vue-cli-service serve --mode prd",
    "build:dev": "vue-cli-service build --mode dev",
    "build:pre": "vue-cli-service build --mode pre",
    "build:prd": "vue-cli-service build --mode prd",
}
```

##### 安装调试

```javascript
yarn
```

##### 调试、打包

```javascript
yarn serve:dev
yarn serve:pre
yarn serve:prd

yarn build:dev
yarn build:pre
yarn build:prd
```

