import React, {useContext} from 'react'
import {OngNoiContext} from './ComOngNoi'
export default function ComCon() {
    let data = useContext(OngNoiContext);
  return (
    <div>ComCon {data.count} - {data.test[0]}</div>
  )
}
