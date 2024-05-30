# 开发规范

## 命名规范

### 项目命名

**全部采用小写，中间用横岗分割，例如：**`my-project-name`

### 组件命名

* **组件文件夹全部使用小写：**`components`
* **组件名称使用****大驼峰命名**，例如：`ComponentName.vue`
* **组件文件的上层文件夹使用大驼峰命名，例如：**`components/ComponentName/ComponentName.vue`
* **引用时也应当遵守大驼峰命名**
  ```javascript
  import ComponentName from '@/components/ComponentName/ComponentName.vue'

  <div>
    <ComponentName />
  </div>
  ```

### 页面命名

**页面文件夹全部使用小写，例如：**`pages`, `views`

**页面名称使用小驼峰命名，例如：**`pageName.vue`

**页面文件夹应遵守小驼峰命名，例如：**`pageName/pageName.vue`

### Api命名

**api文件使用小驼峰命名，例如：**`apiModule.js`

### Hook命名

* **文件命名使用小驼峰命名，use开头+模块名称，例如：useLogin.js**
* **文件内可以包含多个hook方法, hook方法名称以use开头，使用export导出**

### 变量命名

**变量使用小驼峰命名，例如：**`const userName = "hello"`

## Git规范

### 分支命名

#### 主分支

* **master**：主分支
* **develop**：开发分支

#### 临时分支

* **功能分支：feature开头 + 功能名称，例如：**`feature/name`
* **Bug分支：fix开头 + / + bug名称，例如：**`fix/name`

### 开发新功能

* **开发新功能首先应当以****develop分支**为基准新建一个单独的分支进行开发，分支命名遵守**功能分支**命名规则
* **开发结束后要拉取开发主分支的代码进行合并冲突**
* **冲突解决后将当前分支合并进开发分支**
* **最后删除当前功能开发分支**

### 修复Bug

**如果是小bug修改时不影响其他功能可以在当前分支解决，解决后提交代码即可**

**如果是比较严重的bug，可能会影响其他功能的需要按下面的bug修复流程解决**

* **修复bug应以当前bug所在的分支为基准（master或devleop）创建新的bug分支进行解决，bug分支命名遵守****Bug分支**命名规则，
* **解决后拉取原分支代码进行合并冲突**
* **冲突合并好以后将bug分支合进原分支**
* **最后删除当前bug分支**

### 提交Commit

**提交commit时应在描述前面加上类型关键字**

**commit描述内容：类型: + 描述，例如：**`fix：修复xxxxbug问题`, fix就是代表为解决bug的类型关键字

#### Commit类型

* **feat：新功能（feature）**
* **fix: 修复bug**
* **docs：修改文档**
* **style：调整代码格式**
* **refactor：代码重构，没有添加其他新功能或修复bug**
* **perf：性能优化**
* **test：测试**
* **chore： 修改构建流程、增加依赖库**
* **revert：回滚代码**

## 开发环境

### 本地环境

* **Node >=18**
* **pnpm**

### 推荐IDE

* [VsCode](https://code.visualstudio.com/)

### 扩展

* **Vue - Official：Vue官方扩展**
