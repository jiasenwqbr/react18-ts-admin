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

