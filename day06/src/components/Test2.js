import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

const Test2 = () => {
    const [count, setCount] = useState(0)
    const ref1 = useRef()
    const ref2 = useRef()
    const click1 = () => {
        setCount(count + 1)
        ref1.current.style.color = 'skyblue'
        ref2.current.style.color = 'red'
    }

    // 화면에 그려진 후 실행
    useEffect(() => {
        console.log('useEffect')
        ref1.current.style.color = 'tomato'
    })

    // 화면에 그려지기 전에 실행
    useLayoutEffect(() => {
        console.log('useLayoutEffect')
        ref2.current.style.color = 'lime'
    })

    // 보통 useEffect를 많이 사용함, useEffect가 안될 때 useLayoutEffect 사용

    return (
        <div style={{margin:20}}>
            <h2>카운트 : {count}</h2>
            <h1 ref={ref1}>useEffect</h1>
            <h1 ref={ref2}>useLayoutEffect</h1>
            <button onClick={click1}>컬러와 숫자 변경</button>
        </div>
    );
};

export default Test2;