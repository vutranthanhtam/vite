import React, {useEffect, useState} from 'react'
/*
    Component load lại khi:
    + State thay đổi
    + Props thay đổi
*/
export default function ComA() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    console.log("Component reload!")
    /* TH thứ 1 ()
        - Chạy sau return
        - Luôn chạy lại mỗi khi component reload!
    */
    // useEffect(() => {
    //     document.getElementById("test").style.color = "red";
    //     console.log("chạy rồi nhé!")
    // })
    /* TH thứ 2 ([])
        - Chạy sau return
        - CHạy duy nhất 1 lần!
    */
    // useEffect(() => {
    //     document.getElementById("test").style.color = "red";
    //     console.log("chạy rồi nhé!")
    // }, [])
    /* TH thứ 2 ([...])
        - Chạy sau return
        - CHạy lại sau khi cái biến mà nó theo dõi bên trong option (array) thay đổi!
        - Chạy lại khi: chỉ cần ít nhất 1 thằng trong tất cả những thằng mà nó theo dõi thay đổi thì nó chạy lại.
    */
    // useEffect(() => {
    //     document.getElementById("test").style.color = "red";
    //     console.log("chạy rồi nhé!")
    // }, [count, count2])
  return (
    <div id='test'>
        <div>
            Value: {count}
            Value2: {count2}
        </div>
        <button onClick={() => {
            setCount(count + 1);
        }}>Tăng</button>
        <button onClick={() => {
            setCount2(count2 + 1);
        }}>Tăng2</button>
    </div>
  )
}
