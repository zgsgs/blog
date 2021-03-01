# 实例

::: tip
这是一个提示
:::

::: warning 警告
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::

## 幻灯片演示

@slidestart

## 幻灯片 1

一个有文字和 [链接](https://mrhope.site) 的段落

---

## 幻灯片 2

- 项目 1
- 项目 2

---

## 幻灯片 3.1

```js
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
```

--

## 幻灯片 3.2

$$
J(\theta_0,\theta_1) = \sum_{i=0}
$$

@slideend

## 代码演示 普通代码

::: demo 一个普通 Demo

```md
<span class="token title important"><span class="token punctuation">#</span> 标题</span>

十分帅
```

```ts
<span class="token keyword">const</span> message<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">"Mr.Hope"</span><span class="token punctuation">;</span>

document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"h1"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> message<span class="token punctuation">;</span>
```

```scss
<span class="token selector">h1 </span><span class="token punctuation">{</span>
  <span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span>

  <span class="token selector">+ p </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
```

:::

## 代码演示 普通 Demo2

::: demo 一个普通 Demo

```html
<span class="token tag"><span class="token tag"><span class="token punctuation"><</span>h1</span><span class="token punctuation">></span></span>Mr.Hope<span class="token tag"><span class="token tag"><span class="token punctuation"></</span>h1</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation"><</span>p</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation"><</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>very<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>十分<span class="token tag"><span class="token tag"><span class="token punctuation"></</span>span</span><span class="token punctuation">></span></span> 帅<span class="token tag"><span class="token tag"><span class="token punctuation"></</span>p</span><span class="token punctuation">></span></span>
```

```js
document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#very"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"十分帅"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
```

```css
<span class="token selector">span</span>
  <span class="token punctuation">{</span>
  <span class="token property">color</span>
  <span class="token punctuation">:</span>
  red
  <span class="token punctuation">;</span>
<span class="token punctuation">}</span>
```

:::
