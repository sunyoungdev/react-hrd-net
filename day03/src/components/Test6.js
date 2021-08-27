import React, { useState } from 'react';

const Test6 = () => {
    // 새로운 state 변수를 선언하고, count라 부르겠습니다.
    const [count, setCount] = useState(0)

    const increase = () => {
        setCount(count + 1)
    }

    const decrease = () => {
        setCount(count - 1)
    }

    const increase1 = () => {    
        // setCount(이전count => 이전count + 1)
        setCount(prevCount => prevCount + 1)
        setCount(prevCount => prevCount + 1)
    }

    const decrease1 = () => {
        // setCount(이전값담는변수 => 이전값담는변수 + 1)
        setCount(state => state - 1)
        setCount(state => state - 1)
    }

    const increase2 = () => {    
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)    
        }
    }

    const decrease2 = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount - 1)    
        }
    }

    /*
    const increase1 = () => {
        // 일괄처리됨(함수 하나하나 처리되지 않고 동시에 처리됨)
        setCount(count + 1)
        setCount(count + 1)
        setCount(count + 1)
    }
    */

    return (
        <div>
            <h1>count: {count}</h1>
            <p>
                <button onClick={increase}>증가</button>
                <button onClick={decrease}>감소</button>
            </p>
            <p>
                <button onClick={increase1}>2증가</button>
                <button onClick={decrease1}>2감소</button>
            </p>
            <p>
                <button onClick={increase2}>5증가</button>
                <button onClick={decrease2}>5감소</button>
            </p>
        </div>
    );
};

export default Test6;