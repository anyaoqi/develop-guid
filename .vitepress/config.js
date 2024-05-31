// https://vitepress.dev/zh/reference/site-config
export default {
  // 站点级选项
  base: './',
  title: '前端开发规范',
  description: '',
  srcDir: 'src',
  themeConfig: {
    logo: '/logo.ico',
    // 导航
    nav: [
      { text: '首页', link: '/index' },
      { text: '代码规范', link: '/docs/code' },
      { text: '开发规范', link: '/docs/dev' }
    ],
    outline: {
      label: '文章导航'
    },
  },
  rewrites: {
  }
}