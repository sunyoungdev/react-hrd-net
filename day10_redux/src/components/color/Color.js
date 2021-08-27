import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hotpink, skyblue, tomato } from '../../store/modules/color';

const Color = () => {
    // useSelector : 상태값을 내려받는 훅
    const color = useSelector(state => state.color.color)
    const dispatch = useDispatch()

    return (
        <div>
            <h1 style={{color:color}}>color: {color}</h1>
            <p>
                <button onClick={() => dispatch(hotpink())}>hotpink</button>
                <button onClick={() => dispatch(tomato())}>tomato</button>
                <button onClick={() => dispatch(skyblue())}>skyblue</button>
            </p>
        </div>
    );
};

export default Color; 