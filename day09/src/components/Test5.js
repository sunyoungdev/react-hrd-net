import React, { useReducer } from 'react';

// 초기값 = 숫자, {}, []
const initialState = {width: 150}
const reducer = (state, action) => {
    switch(action.type) {
        case 'PLUS':
            return {
                width: state.width + action.step
            }
        case 'MINUS':
            return {
                width: state.width - action.step
            }
        case 'RESET':
            return {width: 150}
        default:
            return state
    }
}

// state.width
const Test5 = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div style={{background: 'tomato', width: state.width, height: 100, margin: 10, transition: '0.4s'}}></div>
            <p>
                <button onClick={() => dispatch({type: 'PLUS', step: 100})}>증가 100</button>
                <button onClick={() => dispatch({type: 'MINUS', step: 50})}>감소 50</button>
                <button onClick={() => dispatch({type: 'RESET'})}>원래 크기</button>
            </p>
            {/* action의 type을 지정 : PLUS, MINUS, RESET */}
        </div>
    );
};

export default Test5;