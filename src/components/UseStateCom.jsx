import React, {useState} from 'react'
/*
    State, Props
*/
export default function UseStateCom() {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h2>UseStateCom</h2>
        <div>
            Value: {count}
        </div>
        <button onClick={() => {
            // setCount(count + 1); // 0 + 1 =>  count = 1
            // setCount(count + 1); // 0 + 1 =>  count = 1
            // setCount(count + 1);
            // setCount(count + 1);
            // setCount(count + 1);
            // setCount(count + 1);
            // setCount(count + 1);
            // setCount(count + 1);
            // setCount(count + 1);
            setCount((count) => {
                return count + 1
            });
            setCount((count) => {
                return count + 1
            });
            setCount((count) => {
                return count + 1
            });
        }}>Tăng</button>
    </div>
  )
}
