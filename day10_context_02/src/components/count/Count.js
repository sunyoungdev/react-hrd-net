import React, { useContext } from 'react';
import { CountContext } from '../../contexts/CountContext';
import { ColorContext } from '../../contexts/ColorContext';

const Count = () => {
    const {count, increment, decrement} = useContext(CountContext)
    const {color} = useContext(ColorContext)

    return (
        <div>
            <h1 style={{color: color}}>숫자: {count} / {color}</h1>
            <p>
                <button onClick={increment}>증가</button>
                <button onClick={decrement}>감소</button>
            </p>
        </div>
    );
};

export default Count;