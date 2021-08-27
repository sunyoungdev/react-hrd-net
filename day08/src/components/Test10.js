import React, { useCallback, useMemo, useState } from 'react';

const Test10 = () => {
    const [count, setCount] = useState(0)
    const ran = Math.random();

    // 함수 자체를 기억해서 이전 랜덤값을 계속 보냄
    const increment = useCallback(() => {
        console.log(ran)
        setCount(count + 1)
    }, [count])

    const decrement = useCallback(() => {
        console.log(ran)
        setCount(count - 1)
    }, [count])

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={increment}>증가</button>
            <button onClick={decrement}>감소</button>
        </div>
    );
};

export default Test10;