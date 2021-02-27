const { config } = require('vuepress-theme-hope');

module.exports = config({
  title: `神木&世界`,
  description: `致力于打造一体化开发全流程站点`,
  base: '/',
  head: [['link', { rel: 'icon', href: '/logo/m4.png' }]],
  host: '0.0.0.0',
  port: 8091,
  temp: '/path/to/@vuepress/core/.temp', // 指定客户端文件的临时目录
  dest: 'dist',
  patterns: ['**/*.md', '**/*.vue'],
  theme: 'hope',
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    [
      'vuepress-plugin-auto-sidebar',
      {
        titleMode: 'titlecase', // 可选 `default`、`lowercase`、`uppercase`、`capitalize`、`camelcase`、`kebabcase`、`titlecase`
        nav: true,
        collapsable: false,
      },
    ],
  ],
  locales: {
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      title: '神木&世界',
      description: '致力于打造一体化开发全流程站点',
    },
    '/en/': {
      lang: 'en-US',
      title: `Sacred Wood's World`,
      description: `COMMITTED TO BUILDING AN INTEGRATED DEVELOPMENT FULL-PROCESS SITE`,
    },
  },
  themeConfig: {
    hostname: 'sacredwood.github.io',
    logo: '/logo/m4.png',
    baseLang: 'zh-CN',
    author: 'Jason',
    sidebar: 'auto',
    sidebarDepth: 3,
    sidebarIcon: false,
    search: true,
    searchMaxSuggestions: 10,
    searchPlaceholder: 'Search...',
    displayAllHeaders: true, // 默认值：false
    smoothScroll: true,
    // lastUpdated: '最后更新时间',
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'SacredWood/blog',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',
    // 是否在导航栏右侧显示仓库链接，默认为 `true`
    repoDisplay: true,

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'SacredWood/blog',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！',
    // algolia: {
    //   apiKey: '<API_KEY>',
    //   indexName: '<INDEX_NAME>',
    // },
    comment: {
      type: 'valine', // "valine" 或 "vssue"

      // valine 模式下
      appId: 'VWDbcc1sF3nBKpkpE1hGDabl-gzGzoHsz', // your appId
      appKey: 'XQyS2NhvmLGAsuGKGcAs4o3v', // your appKey
    },
    pageInfo: ['author', 'time', 'visitor', 'category', 'tag', 'word', 'readtime'],
    blog: {
      links: {
        Gitlab: 'http://code.voxto.cn/',
        Github: 'https://github.com/SacredWood?tab=repositories',
      },
    },
    nav: [
      // 可在每一项中添加 icon 字段来显示图标
      {
        text: '指南',
        icon: 'creative',
        // prefix 字段会为所有的 items 添加这段 prefix
        // prefix: '/guide/',
        items: [
          { text: 'Vue源码', link: '/vue/guide/', icon: 'vue' },
          { text: 'Git教程', link: '/git/', icon: 'git' },
        ],
      },
      {
        text: '基础',
        icon: 'info',
        // prefix 字段会为所有的 items 添加这段 prefix
        prefix: '/basic/',
        items: [
          { text: 'Markdown', link: 'markdown/', icon: 'markdown' },
          { text: 'VuePress', link: 'vuepress/', icon: 'vuepress' },
        ],
      },
      {
        text: '项目',
        icon: 'info',
        items: [
          {
            text: '项目地址',
            link: 'https://github.com/vuepress-theme-hope/vuepress-theme-hope',
          },
          {
            text: '项目案例',
            link: '/demo/',
          },
        ],
      },
      { text: '常见问题', link: '/FAQ/', icon: 'question' },
      {
        text: '站点',
        ariaLabel: 'External Link',
        items: [
          {
            text: '代码',
            items: [
              { text: 'GitHub', link: 'https://github.com/SacredWood', target: '_blank', rel: '' },
              { text: 'Gitee', link: 'https://gitee.com/SacredWood', target: '_blank', rel: '' },
              { text: 'GitLab', link: 'http://code.voxto.cn/', target: '_blank', rel: '' },
              { text: 'CodeSandbox', link: 'https://codesandbox.io/', target: '_blank', rel: '' },
              { text: 'CodePen', link: 'https://codepen.io/', target: '_blank', rel: '' },
            ],
          },
          {
            text: '设计',
            items: [
              { text: 'UI中国', link: 'https://www.ui.cn/', target: '_blank', rel: '' },
              { text: '站酷', link: 'https://www.zcool.com.cn/', target: '_blank', rel: '' },
            ],
          },
        ],
      },
    ],
  },
});
