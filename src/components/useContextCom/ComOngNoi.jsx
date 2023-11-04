import React, {useState, createContext} from 'react'
import ComCha from './ComCha'
import ComCon from './ComCon';
export const OngNoiContext = createContext();

export default function ComOngNoi() {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h2>ComOngNoi</h2>
        Value ComOngNoi: {count}

        <OngNoiContext.Provider value={{
            count,
            test: ["1"]
        }}>
            <ComCha count={count}/>
        </OngNoiContext.Provider>
        
        <button onClick={() => {
            setCount(count + 1);
        }}>Tăng</button>
    </div>
  )
}
