import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "seea's portfolio",
  description: "interact design portfolio",
  base: '/Interaction-Design-Portfolio/',
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '作品', link: '/works/' },
      { text: '关于我', link: '/about' }
    ],

    sidebar: [
      {
        text: '作品集',
        items: [
          { text: '作品分类', link: '/works/' },
          { text: '互动设计', link: '/works/interactive' },
          { text: '视觉设计', link: '/works/visual' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sznnnnn' }
    ]
  }
})
