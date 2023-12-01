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
