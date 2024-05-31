
# 命名规范

## 项目命名

全部采用小写，中间用横岗分割，例如：`my-project-name`

## 组件命名

* 组件名称使用**大驼峰命名**
* 例如：`ComponentName.vue`、`components/ComponentName/ComponentName.vue`

  ```javascript
  import ComponentName from '@/components/ComponentName/ComponentName.vue'

  <div>
  	<ComponentName />
  </div>
  ```

## 页面命名

页面名称使用小驼峰命名，例如：`pageName.vue`

页面文件夹应遵守小驼峰命名，例如：`pageName/pageName.vue`

## Api命名

api文件使用小驼峰命名，例如：`apiModule.js`

## Hook命名

* 文件命名使用小驼峰命名，use开头+模块名称，例如：useLogin.js
* 文件内可以包含多个hook方法, hook方法名称以use开头，使用export导出

## 变量命名

变量使用小驼峰命名，例如：`const userName = "hello"`