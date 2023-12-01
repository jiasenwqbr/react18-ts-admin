import React from 'react'
import ReactDOM from 'react-dom/client'
import "reset-css"
// global style 全局样式
import "@/asset/style/global.scss"
import App from './App'
import { BrowserRouter } from 'react-router-dom'




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    
  </React.StrictMode>
)
