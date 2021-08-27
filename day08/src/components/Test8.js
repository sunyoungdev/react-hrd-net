import React, { useEffect, useMemo, useState } from 'react';

const Test8 = () => {
    const [count, setCount] = useState(1)

    const fun = (cnt) => {
        console.log('text')
        let k = 0
        for(let i = 0; i < 10000000; i++){
            k++
        }
        return cnt * 10
    }

    // 함수가 동시 실행되어 값이 안나오던 것을 잡아줌
    // 같은 return 값은 기억해놨다 실행
    const reCount = useMemo(() => {
        return fun(count)
    }, [count])

    return (
        <div>
            <h2>{count}</h2>
            <input type="text" onChange={e => setCount(e.target.value)} />
            <hr />
            <h1>{reCount}</h1>        
        </div>
    );
};

export default Test8;