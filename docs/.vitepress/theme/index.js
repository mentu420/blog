//  docs/.vitepress/theme/index.ts
import "./tailwind.css";
import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";

export default {
  extends: DefaultTheme,
  Layout,
};
