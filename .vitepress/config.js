// https://vitepress.dev/zh/reference/site-config
export default {
  // 站点级选项
  base: '/develop-guid/',
  title: '前端开发规范',
  description: '',
  srcDir: 'src',
  themeConfig: {
    logo: '/logo.ico',
    // 导航
    nav: [
      { text: '首页', link: '/index' },
      { text: '代码规范', link: '/docs/code' },
      { text: '命名规范', link: '/docs/name' },
      { text: 'Git规范', link: '/docs/git' }
    ],
    outline: {
      level: [2,4],
      label: '文章导航'
    },
  },
  rewrites: {
  }
}