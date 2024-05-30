
# 代码规范

## HTML

* **属性引号：使用双引号**
* **属性换行：标签属性超过三个的时候需要换行展示**
* **属性名：全小写，用中划线做分隔符**
  **例如：**`class="hello-world"`
* **行内样式：禁止在html内写行内样式**
* **标签嵌套：应尽量减少html标签嵌套**
* **使用标签：应正确使用标签，不要全部都用div，还有ul、li、h1、a等**
* **doctype:  在页面开头引入** `<!DOCTYPE html>`
* **lang属性：在html标签添加正确的** `lang="en-us"`标签
* **字符编码：添加meta标签，指定对应字符编码。**
  **例如：**`<meta charset="UTF-8">`
* **IE兼容模式：用meta标签指定什么版本的IE渲染**
  `<meta http-equiv="X-UA-Compatible" content="IE=Edge">`
* **语义化标签：尽量使用语义化标签**
  **例如：**`nav`、`header`等
* **HTML通用模板**
  ```html
  <!DOCTYPE html>
  <html lang="zh">
  <head>
      <meta charset="UTF-8">
      <title>网页标题</title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="renderer" content="webkit">
      <meta name ="viewport" content ="initial-scale=1, maximum-scale=3, minimum-scale=1, user-scalable=no">
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <script src="index.js"></script>
  </body>
  </html>
  ```

## CSS

* **选择器：应使用类选择器，避免使用ID选择器**
* **缩进：两个空格缩进**
* **命名：类名使用小写字母，以中划线分隔，id采用驼峰式命名**
* **分号：必须以分号结尾**
* **属性空格：属性名后必须有一个空格，**
  `color: #000;`
* **选择器空格：选择器和** `{`之间必须有一个空格，
  `.class-name {}`
* **引号：属性值中使用的引号应使用****单引号**
  **例如：**` font-family: 'open sans', arial, sans-serif;`
* **空行：css规则之间需要空行，不能紧挨着上一个css规则**
* **单位：统一常用单位，uniapp项目中不要px和rpx单位混用。**
* **颜色值：颜色16进制用小写字母，颜色16进制尽量用简写。**

  ```css
  .element {
      color: #abcdef;
      background-color: #012;
  }
  ```
* **空规则：不允许有空的规则**
* **空样式：不要有空的style标签，style标签中没有样式时应删除style标签**

### scss

* **嵌套：可以嵌套的尽量嵌套，不要写在嵌套之外，嵌套层级过深时必须要写注释**
* **主题色：项目定义主题色变量的情况下，应在Css中引用主题色，不要在Css规则中单独写主题色**

## JavaScript

* **缩进：2个空格**
* **引号：使用单引号**
* **分号：不要写分号**
* **console: 尽量不要有console**

## Vue

* **使用计算属性：在html标签中判断条件超过三个，要用computed计算属性**
*
