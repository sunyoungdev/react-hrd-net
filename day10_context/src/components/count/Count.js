import React, { useContext } from 'react';
import { CountContext } from '../../contexts/CountContext';

const Count = () => {
    const {count, increment, decrement} = useContext(CountContext)

    return (
        <div>
            <h1>숫자: {count}</h1>
            <p>
                <button onClick={increment}>증가</button>
                <button onClick={decrement}>감소</button>
            </p>
        </div>
    );
};

export default Count;