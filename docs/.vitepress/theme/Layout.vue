<script setup>
import { nextTick, onMounted, watch } from "vue";
import { useData } from "vitepress";
import DefaultTheme from "vitepress/theme";

const { Layout } = DefaultTheme;

const { isDark } = useData();

watch(
  () => isDark.value,
  async (val) => {
    // 根据vitepress 主题设置daisyUI 主题， 只有['dark','light']
    await nextTick();
    const theme = val ? "dark" : "light";
    document?.documentElement.setAttribute("data-theme", theme);
  },
  { immediate: true }
);
</script>

<template>
  <Layout />
</template>
