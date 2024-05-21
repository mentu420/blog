<script setup>
import { onMounted, watch } from "vue";
import { useData } from "vitepress";
import DefaultTheme from "vitepress/theme";

const { Layout } = DefaultTheme;

const { isDark } = useData();

watch(
  () => isDark.value,
  (val) => {
    // 根据vitepress 主题设置daisyUI 主题， 只有['dark','light']
    document.documentElement.setAttribute("data-theme", val ? "dark" : "light");
  },
  { immediate: true }
);
</script>

<template>
  <Layout />
</template>
