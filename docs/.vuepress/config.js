module.exports = {
  title: `Sacred Wood's World`,
  description: `Sacred Wood's personal website, dedicated to creating an integrated full-process site for the development of code, documentation, tutorials, videos, component market, version management, etc.`,
  base: '/',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  host: '0.0.0.0',
  port: 8091,
  temp: '/path/to/@vuepress/core/.temp', // 指定客户端文件的临时目录
  dest: 'dist',
  patterns: ['**/*.md', '**/*.vue'],
  markdown: {
    lineNumbers: true,
  },
  extraWatchFiles: [
    '.vuepress/foo.js', // 使用相对路径
    '/path/to/bar.js', // 使用绝对路径
  ],
  themeConfig: {
    logo: '/logo/m4.png',
    sidebar: 'auto',
    search: false,
    searchMaxSuggestions: 10,
    displayAllHeaders: true, // 默认值：false
    smoothScroll: true,
    // lastUpdated: '最后更新时间',
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'vuejs/vuepress',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'vuejs/vuepress',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！',
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Learn',
        ariaLabel: '/learn/',
        items: [
          {
            text: 'Documentation',
            items: [
              {
                text: 'Guide',
                link: '/guide/introduction/',
              },
              {
                text: 'API',
                link: '/api/',
              },
              {
                text: 'Style Guide',
                link: '/style_guide/',
              },
            ],
          },
        ],
      },
      {
        text: 'External',
        ariaLabel: 'External Link',
        items: [
          {
            text: 'Code',
            items: [
              { text: 'GitHub', link: 'https://github.com/SacredWood', target: '_blank', rel: '' },
              { text: 'Gitee', link: 'https://gitee.com/SacredWood', target: '_blank', rel: '' },
              { text: 'GitLab', link: 'http://code.voxto.cn/', target: '_blank', rel: '' },
              { text: 'CodeSandbox', link: 'https://codesandbox.io/', target: '_blank', rel: '' },
              { text: 'CodePen', link: 'https://codepen.io/', target: '_blank', rel: '' },
            ],
          },
          {
            text: 'Design',
            items: [
              { text: 'UI中国', link: 'https://www.ui.cn/', target: '_blank', rel: '' },
              { text: '站酷', link: 'https://www.zcool.com.cn/', target: '_blank', rel: '' },
            ],
          },
        ],
      },
    ],
    sidebar: [
      {
        title: '教程',
        collapsable: false,
        children: ['/guide/', '/guide/installation/', '/guide/introduction/'],
      },
      {
        title: '学习',
        collapsable: false,
        children: ['/learn/'],
      },
    ],
  },
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: '中文', // 将会被设置为 <html> 的 lang 属性
      title: '神木&世界',
      description: '神木的个人网站,致力于打造代码,文档,教程,视频,组件市场,版本管理等开发一体化全流程站点',
    },
    '/en/': {
      lang: 'English',
      title: `Sacred Wood's World`,
      description: `Sacred Wood's personal website, dedicated to creating an integrated full-process site for the development of code, documentation, tutorials, videos, component market, version management, etc.`,
    },
  },
};
