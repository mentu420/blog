---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "My Bolg"
  text: "A VitePress Site"
  tagline: I heard that those with cartoon avatars are all bosses
  image:
    src: /images/logo.png
    alt: Kitty
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

## Markdown Content

::: tip tailwind 演示
下面是一个 tailwind 演示，这是一个 markdown 文档
:::

<span class="text-2xl font-bold">2xl 字体</span>

<button class="btn">Button</button>
<button class="btn btn-neutral">Neutral</button>
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-accent">Accent</button>
<button class="btn btn-ghost">Ghost</button>
<button class="btn btn-link">Link</button>

<style module>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient( 135deg, #F6CEEC 10%, #D939CD 100%);
  
  --vp-home-hero-image-background-image: linear-gradient( 135deg, #F6CEEC 10%, #D939CD 100%);
  --vp-home-hero-image-filter: blur(150px);
}

</style>
