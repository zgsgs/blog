# The sacredwood.github.io By VuePress

神木(Sacred Wood)的个人官方网站
初步计划有一下功能:

1. 静态文档、博客
2. 搬运的视频教程
3. 技术文档链接
4. 技术学习路径的具体规划和思维导图
5. 优秀开源项目推荐
6. 几个开源项目的分析教程

以上功能将逐步实现

## 部署报错

1. 打包报错：Error: Content placeholder not found in template.|页面空白不显示也不报错

> 原因是`docs/.vuepress/templates`存在且无内容或内容错误;删除该文件夹即可

2. 打包错误：en 目录下找不到对应文件

> 国际化时，语言目录下要与根目录下的文件一一对应
