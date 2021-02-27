---
sidebarDepth: 3
sticky: true
category: Vue
tags: [Vue, 源码解析]
---

# 安装

![Version](https://img.shields.io/npm/v/vuepress-theme-hope.svg?style=flat-square&logo=npm)
![Downloads](https://img.shields.io/npm/dm/vuepress-theme-hope.svg?style=flat-square&logo=npm)
![Size](https://img.shields.io/bundlephobia/min/vuepress-theme-hope?style=flat-square&logo=npm)
![Dependencies](https://img.shields.io/librariesio/release/npm/vuepress-theme-hope?style=flat-square)

## 开发工具

工欲善其事必先利其器.上手的开发工具是我们刨析源码的利刃.我们需要熟练使用开发工具,对代码进行运行调试,逐步刨析代码的运行步骤,底层逻辑,当前状态等等.

### Chrome

浏览器是前端最核心的开发工具之一,其中的 `Chrome` 更是其中的佼佼者.不论是对各种 `HTML\CSS\JavaScript` 新属性的积极支持,还是 V8 引擎的开拓性影响都有着举足轻重的地位.可以说占据市场份额的半壁江山,也是实至名归的.

我日常开发的大部分页面布局样式\代码逻辑都是在`Chrome`上调试的,占据了我开发工具的几乎 50%的时间.这上面有着非常丰富的工具集,完全可以单独出一套教程进行深度学习.这里我推荐大家看一看老外写的官方文档.

[Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)

### VS Code

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    copyCode: {},
  },
};
```

浏览器是前端最核心的开发工具之一,其中的 `Chrome` 更是其中的佼佼者.不论是对各种 `HTML\CSS\JavaScript` 新属性的积极支持,还是 V8 引擎的开拓性影响都有着举足轻重的地位.可以说占据市场份额的半壁江山,也是实至名归的.

我日常开发的大部分页面布局样式\代码逻辑都是在`Chrome`上调试的,占据了我开发工具的几乎 50%的时间.这上面有着非常丰富的工具集,完全可以单独出一套教程进行深度学习.这里我推荐大家看一看老外写的官方文档.

[Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)

### Codepen

[Codepen](https://codepen.io/)可以很方便的创建代码演示并嵌入。

输入:

```html
<iframe
  height="265"
  style="width: 100%;"
  scrolling="no"
  title="五彩斑斓旋转的球形光影"
  src="https://codepen.io/SacredWood/embed/preview/rNWaEwQ?height=265&theme-id=dark&default-tab=css,result"
  frameborder="no"
  loading="lazy"
  allowtransparency="true"
  allowfullscreen="true"
>
  See the Pen <a href="https://codepen.io/SacredWood/pen/rNWaEwQ">五彩斑斓旋转的球形光影</a> by Sacred Wood (<a
    href="https://codepen.io/SacredWood"
    >@SacredWood</a
  >) on <a href="https://codepen.io">CodePen</a>.
</iframe>
```

输出:

<iframe height="265" style="width: 100%;" scrolling="no" title="五彩斑斓旋转的球形光影" src="https://codepen.io/SacredWood/embed/preview/rNWaEwQ?height=265&theme-id=dark&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/SacredWood/pen/rNWaEwQ'>五彩斑斓旋转的球形光影</a> by Sacred Wood
  (<a href='https://codepen.io/SacredWood'>@SacredWood</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### Markmap

Markmap 是一个将 Markdown 转换为思维导图的工具。它相对于主题内置的 flowchart 支持更多的格式与内容。

1. 使用 `Markmap` 生成思维导图 html 文件
2. 将 html 文件放在 `.vuepress/public/` 下
3. 通过 `<iframe>` 插入到 Markdown

输入:

```html
<iframe
  :src="$withBase('/markmap/markmap.html')"
  width="100%"
  height="400"
  frameborder="0"
  scrolling="No"
  leftmargin="0"
  topmargin="0"
/>
```

输出:

<iframe
  :src="$withBase('/markmap/markmap.html')"
  width="100%"
  height="400"
  frameborder="0"
  scrolling="No"
  leftmargin="0"
  topmargin="0"
/>

![logo](https://vuepress-theme-hope.github.io/logo.png)
