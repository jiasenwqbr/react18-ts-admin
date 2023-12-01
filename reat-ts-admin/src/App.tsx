import { useState } from 'react'
import { Button } from 'antd';
import { FastBackwardOutlined } from '@ant-design/icons';
import {Outlet} from "react-router-dom"
function App() {
  const [count] = useState(0);

  return (
    <>
      <div>
        {count}
        <Button type='primary'>按钮文字</Button>
        <FastBackwardOutlined style={{fontSize:"40px",color:"red"}}></FastBackwardOutlined>
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default App
