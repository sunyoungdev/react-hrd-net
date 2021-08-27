import React, { useReducer } from 'react';

const initialState = 0
const reducer = (state, action) => {
    switch(action.type) {
        case 'INCREMENT' :
            return state + action.step
        case 'DECREMENT' :
            return state - action.step
        case 'RESET' :
            return 0
        default:
            return state
    }
}

const Test4 = () => {
    const [count1, dispatch1] = useReducer(reducer, initialState)
    const [count2, dispatch2] = useReducer(reducer, 100)
    const [count3, dispatch3] = useReducer(reducer, 200)

    return (
        <div>
            <h1>{count1}</h1>
            <p>
                {/* dispatch 액션 영역 쓸 때 type은 필수, 그 이후로는 키:값 형식으로 값을 만들어 쓸 수 있음 */}
                <button onClick={() => dispatch1({type: 'INCREMENT', step: 50})}>증가 50</button>
                <button onClick={() => dispatch1({type: 'DECREMENT', step: 10})}>감소 10</button>
                <button onClick={() => dispatch1({type: 'RESET'})}>초기화</button>
            </p>
            <h1>{count2}</h1>
            <p>
                <button onClick={() => dispatch2({type: 'INCREMENT', step: 100})}>증가 100</button>
                <button onClick={() => dispatch2({type: 'DECREMENT', step: 50})}>감소 50</button>
                <button onClick={() => dispatch2({type: 'RESET'})}>초기화</button>
            </p>
            <h1>{count3}</h1>
            <p>
                <button onClick={() => dispatch3({type: 'INCREMENT', step: 30})}>증가 30</button>
                <button onClick={() => dispatch3({type: 'DECREMENT', step: 30})}>감소 30</button>
                <button onClick={() => dispatch3({type: 'RESET'})}>초기화</button>
            </p>
        </div>
    );
};

export default Test4;