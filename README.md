# react18-ts-admin
React18 universal background management system infrastructure, based on React Family Bucket and Antd Design UI framework. Typescript+React+Antd universal background management system. React18通用的后台管理系统基础架设，基于React全家桶以及Antd Design UI框架.Typescript+React+Antd的通用后台管理系统.

## 一、Create Project 创建项目

```bash
% npm init vite
✔ Project name: … reat-ts-admin
✔ Select a framework: › React
✔ Select a variant: › TypeScript

Scaffolding project in /Users/a1234/Desktop/code/react/react-ts/reat-ts-admin...

Done. Now run:

  cd reat-ts-admin
  npm install
  npm run dev

```

```bash
npm install redux react-redux react-router-dom
```

## 二、去除无用的文件



## 三、样式初始化

干净利落的去掉默认样式，更适合企业里的应用场景，所以用reset-css

在路径下执行命令：

```bash
npm install reset-css
```

在src/main.tsx中引入reset.css:

```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import "reset.css"
import App from './App.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

## 四、scss的安装和初步使用
安装sass

```shell
npm i --save-dev sass
```

src下新建asset/style/global.scss

```scss
$color : #eee;
body {
  user-select:none;
  background-color:$color;
}
```



## 五、配置项目路径别名

### 5.1 路径别名的配置

目前ts对@指向src目录是不支持的，vite默认也是不支持的，所以需要手动配置@符号的指向

在vite.config.ts中添加配置：

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      "@":path.resolve(__dirname,'./src')
    }
  }
})
```

这个时候引入path会报红，但其实我们已经有node，所以已经有path模块，只是缺少一些声明配置。所以需要安装关于node这个库的ts声明配置

```shell
npm i D @types/node
```

### 5.2 配置路径别名的提示

虽然路径别名已经有了，但是在文件中输入@是没有提示路径的

需要我们在tsconfig.json中：添加两项配置

```json
 "compilerOptions": {
    ...
    "baseUrl": "./",
    "paths": {
      "@/":[
        "src/*"
      ]
    },

```

配置好之后敲@后就有路径资源提示了。



## 六、scss模块化





















