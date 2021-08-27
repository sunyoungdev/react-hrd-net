import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../../store/modules/counter';

const Counter = () => {
    // 상태값 가져올땐 useSelector
    const count = useSelector(state => state.counter.count)
    const color = useSelector(state => state.color.color)
    // 행동(함수) 가져올땐 useDispatch
    const dispatch = useDispatch()

    return (
        <div>
            <h1 style={{color:color}}>숫자: {count}</h1>
            <h1>컬러: {color}</h1>
            <button onClick={() => dispatch(increment())}>증가</button>
            <button onClick={() => dispatch(decrement())}>감소</button>
            <button onClick={() => dispatch(reset())}>초기화</button>
        </div>
    ); 
};

export default Counter;