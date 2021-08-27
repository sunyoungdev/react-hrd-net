import React, { useCallback, useState } from 'react';
import Test2Count from './Test2Count';
import Test2Title from './Test2Title';

const Test2 = () => {
    const [age, setAge] = useState(20)
    const [money, setMoney] = useState(500000)

    const onAge = useCallback(() => {
        setAge(age + 1)
    }, [age])

    const onMoney = useCallback(() => {
        setMoney(money + 50000)
    }, [money])

    return (
        <div>
            <Test2Title />
            <Test2Count text="나이" count={age} />
            <button onClick={onAge}>나이 증가</button>
            <hr />
            <Test2Count text="급여" count={money} />
            <button onClick={onMoney}>급여증가</button>
        </div>
    );
};

export default Test2;