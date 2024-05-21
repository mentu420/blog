import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/blog",
  title: "Disciple's Blob",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Posts", link: "/zn/welcome" },
    ],

    sidebar: [
      {
        text: "Posts",
        items: [
          { text: "欢迎", link: "/zn/welcome" },
          { text: "react-native init 卡住", link: "/zn/cocoapods" },
          { text: "GIT常用操作", link: "/zn/git-branch" },
          { text: "移动端搜索框", link: "/zn/input-submit" },
          { text: "markdown 基础语法", link: "/zn/markdown" },
          { text: "使用css限制文本显示", link: "/zn/text-overflow-ellipsis" },
          { text: "vscode vue文件代码片段", link: "/zn/vue-code-sinppet" },
          { text: "vue-cli4 配置多环境变量", link: "/zn/vue-more-env" },
          { text: "vue项目命名规范总结", link: "/zn/vue-standard-name" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
