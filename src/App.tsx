import React, {useState, useCallback} from 'react'
import {Button} from "./button"
export default function App() {
    const [count, setCount] = useState(0)
    const handleClick = useCallback(() => {
        setCount(count + 1)
    }, [count])
  return (
    <div>
        <Button onClick={handleClick}>add</Button>
      hello webpack test{count}
    </div>
  )
}
