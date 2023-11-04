import React, { useReducer } from 'react'

export default function UseReducer() {
    /* function reducer */
    function countReducerFn (state, action) {
        switch(action.type) {
            case "INCREMENT":
                return state + 1;
            case "DECREMENT":
                return state - 1;
            case "SET":
                return action.number;
            default:
                return
        }
    }

    const [state, dispatch] = useReducer(countReducerFn, 0)
  return (
    <div>
        <h2>UseReducer</h2>
        <span>Value: {state}</span>
        <button onClick={() => {
            dispatch({
                type: "INCREMENT"
            })
        }}>Tăng</button>
         <button onClick={() => {
            dispatch({
                type: "DECREMENT"
            })
        }}>Trừ</button>
        <button onClick={() => {
            dispatch({
                type: "SET",
                number: 1000
            })
        }}>Reset</button>
    </div>
  )
}
