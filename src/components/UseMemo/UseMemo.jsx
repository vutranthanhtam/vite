import React, { useMemo, useState } from 'react'

export default function UseMemo() {
    const [numbers, setNumbers] = useState([0,1,2,3])
    const [count, setCount] = useState(0);
    let numbersTotal = useMemo(() => {
        return numbers?.reduce((result, cur) => {
            console.log("dang tinh")
            return result += cur
        }, 0)
    }, [numbers])
  return (
    <div>
        UseMemo {numbersTotal}
        <button onClick={()=> {
            setCount(count + 1)
        }}>Tang Count {count}</button>

        <button onClick={()=> {
            setNumbers([...numbers, 4])
        }}>Add thêm so </button>
    </div>
  )
}
