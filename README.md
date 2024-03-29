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



## 七、Antd Design 初步引入

安装Antd Design

```shell
// npm
npm install antd --save
// yarn 
yarn add antd
```

安装图标所需的模块

```shell
// npm 
npm install --save @ant-design/icons

// yarn 
yarn add @ant-design/icons
```



App组件中引入即可：

```typescript
import { useState } from 'react'
import { Button } from 'antd';
import { FastBackwardOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
function App() {
  const [count] = useState(0);

  return (
    <>
      <div>
        {count}
        <Button type='primary'>按钮文字</Button>
        <FastBackwardOutlined style={{fontSize:"40px",color:"red"}}></FastBackwardOutlined>
      </div>
    </>
  )
}

export default App

```

## 八、配置Antd Design样式自动按需引入

安装插件vite-plugin-style-import

```shell
npm install vite-plugin-style-import@1.4.1 -D
```

在vite.config.ts中进行配置：

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as  path from "path"
import styleImport,{AntdResolve} from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    styleImport({
      resolves:[
        AntdResolve()
      ],
    }),
  ],
  resolve:{
    alias:{
      "@":path.resolve(__dirname,'./src')
    }
  }
})
```

安装less

```shell
npm i less@2.7.1 -D
```



## 九、路由

 ### 路由的第一种写法

```typescript
import App from "../App"
import Home from "../views/Home"
import About from "../views/About"

import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom"
// 两种路由模式 ：BrowserRouter（History模式），HashRouter(Hash模式)
// const baseRouter = () => {
//     return ()
// }
const baseRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="/" element={<Navigate to="/home"/>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/about" element={<About></About>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default baseRouter;
```

### 路由的第二种写法

```typescript
import Home from "../views/Home"
import About from "../views/About"
import {Navigate} from "react-router-dom"
const routes = [
    {
        path:'/',
        element:<Navigate to="/home" />
    },
    {
        path:'/home',
        element:<Home/>
    },
    {
        path:'/about',
        element:<About/>
    }
]

export default routes;
```



```typescript
import { useState } from 'react'
import { Button } from 'antd';
import { FastBackwardOutlined } from '@ant-design/icons';
import {useRoutes} from "react-router-dom"
import router from "./router"
function App() {
  const [count] = useState(0);
  const outlet = useRoutes(router)
  return (
    <>
      <div>
        {count}
        <Button type='primary'>按钮文字</Button>
        <FastBackwardOutlined style={{fontSize:"40px",color:"red"}}></FastBackwardOutlined>
        {outlet}
      </div>
    </>
  )
}

export default App
```



### 路由的懒加载





# e-commerce-admin

## 一、创建项目

创建项目

```shell
create-react-app e-commerce-admin --template typescript
```

安装

数据管理： redux react-redux redux-thunk redux-logger

路由： react-router-dom

url请求：axios qs

加载提示： nprogress

重置css : normalize.css

react ui框架库： antd

```shell
cd e-commerce-admin 
npm install  redux react-redux redux-thunk redux-logger -S
npm install react-router-dom axios nprogress normalize.css antd -S
```

```shell
npm install sass sass-loader -D
```

```shell
npm run
```

在src下创建目录：

- api 接口
- router 路由
- store 仓库
- utils 工具
- views 视图页面



## 二、配置基础路由

router/BaseRouter.tsx

```typescript
import LoginView from "../views/LoginView";
import Admin from "../views/admin/AdminView";
const  baseRouter=[
    {
        path:"/",
        element:<LoginView></LoginView>
    },
    {
        path:"/admin",
        element:<Admin></Admin>,
        children:[]
    }
];

export default baseRouter;
```



router/Index.tsx

```typescript
import { useRoutes } from "react-router-dom";
import baseRouter from "./BaseRouter";

function RouterView() {
    // 创建路由
    const element = useRoutes(baseRouter);
    // 返回创建好的路由
    return (<>{element}</>  );
}
// 导出
export default RouterView;
```

App.tsx

```typescript
import {  HashRouter as Router } from "react-router-dom";
import RouterView from "./router";

function App() {
  return (
    <Router>
      <RouterView></RouterView>
    </Router>
  );
}

export default App;
```



































