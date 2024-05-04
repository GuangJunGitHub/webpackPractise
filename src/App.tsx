import React, {useState, useCallback, Suspense, lazy} from 'react'
import {Button} from "./button"
const ButtonAsync = lazy(() => import("./button").then(({Button}) => ({default: Button})))
export default function App() {
    const [count, setCount] = useState(0)
    const handleClick = useCallback(() => {
        setCount(count + 1);
    }, [count])
  return (
    <div>
        {/* <Button onClick={handleClick}>add</Button> */}
        <Suspense>
            <ButtonAsync onClick={handleClick}>add</ButtonAsync>
        </Suspense>
      hello webpack test{count}
    </div>
  )
}
