import React, { useCallback, useEffect, useState } from 'react'
import Test2 from './Test2'
export default function Test1() {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    const handleSum = useCallback( () => {
        console.log(count + 10);
        return count + 10;
    }, [count]) // => fucntion

    // function handleSum {

    // }
    console.log("test 1 reload")
    useEffect(() => {
        console.log("effect bi")
    }, [handleSum])
  return (
    <div>
        <Test2 handleSum={handleSum}/>
        <h2>Test1 = {count}</h2>
        <h2>Test2 = {count2}</h2>
        <button onClick={() => {
            setCount(count + 1)
        }}>Tăng</button>
        <button onClick={() => {
            setCount2(count2 + 1)
        }}>Tăng2</button>
    </div>
  )
}
