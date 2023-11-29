import { useState } from 'react'
import { Button } from 'antd';
import { FastBackwardOutlined } from '@ant-design/icons';
function App() {
  const [count] = useState(0);

  return (
    <>
      <div>
        {count}
      <Button type='primary'>按钮文字</Button>
      <FastBackwardOutlined></FastBackwardOutlined>
      </div>
    </>
  )
}

export default App
