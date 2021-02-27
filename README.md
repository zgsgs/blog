# The sacredwood.github.io By VuePress

神木(Sacred Wood)的个人官方网站
初步计划有一下功能:

1. 静态文档、博客
2. 搬运的视频教程
3. 技术文档链接
4. 技术学习路径的具体规划和思维导图
5. 优秀开源项目推荐
6. 几个开源项目的分析教程+

以上功能将逐步实现

## 插件依赖

1. vuepress-plugin-auto-sidebar
   [vuepress 自动生成侧边栏](https://shanyuhai123.github.io/vuepress-plugin-auto-sidebar/)

## 部署报错

1. 打包报错：Error: Content placeholder not found in template.|页面空白不显示也不报错

> 原因是`docs/.vuepress/templates`存在且无内容或内容错误;删除该文件夹即可

2. 打包错误：en 目录下找不到对应文件

> 国际化时，语言目录下要与根目录下的文件一一对应

3. 部署发布脚本执行时:'bash' 不是内部或外部命令，也不是可运行的程序

> 环境变量设置为:D:Git/bin

4. 部署报错:部署后 css\js 文件加载错误 404

> 导致部署页面无样式
> 在文件`docs/.vuepress/config.js`中的`base`配置错误,目前我只能用默认值`/`解决

## 项目现状

由于本项目的侧边栏自动生成、评论、图标等功能需要大量的定制工作，所以不但算继续研究下去。博客将转用`vuepress-theme-reco`主题重新构建。
