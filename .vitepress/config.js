// https://vitepress.dev/zh/reference/site-config
const base = process.env.NODE_ENV === 'production' ? '/develop-guid/' : ''
export default {
  // 站点级选项
  base,
  title: '前端开发规范',
  description: '',
  srcDir: '',
  themeConfig: {
    logo: '/logo.ico',
    home: true,
    // 导航
    nav: [
      { text: '首页', link: '/index' },
      { text: '代码规范', link: '/docs/代码规范' },
      { text: '命名规范', link: '/docs/命名规范' },
      { text: 'Git规范', link: '/docs/Git规范' },
      // { text: '开发环境', link: '/docs/开发环境' }
    ],
    outline: {
      level: [2,4],
      label: '文章导航'
    },
  },
  rewrites: {
    'README.md': 'index.md',
  }
}