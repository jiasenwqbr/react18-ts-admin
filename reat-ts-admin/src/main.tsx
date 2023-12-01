import React from 'react'
import ReactDOM from 'react-dom/client'
import "reset-css"
// global style 全局样式
import "@/asset/style/global.scss"
// import App from './App'

import Router from "./router"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
