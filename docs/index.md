---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "My Bolg"
  text: "A VitePress Site"
  tagline: I heard that those with cartoon avatars are all bosses
  image:
    src: ./public/images/logo.jpg
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


<style module>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient( 135deg, #F6CEEC 10%, #D939CD 100%);
  
  --vp-home-hero-image-background-image: linear-gradient( 135deg, #F6CEEC 10%, #D939CD 100%);
  --vp-home-hero-image-filter: blur(150px);
}

</style>
