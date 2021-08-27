import React, { useContext } from 'react';
import { ChangeColorContext } from '../../contexts/ChangeColorContext';

const ChangeColor = () => {
    // useContext : 값을 받아오는 역할
    const {color, onColor} = useContext(ChangeColorContext)

    return (
        <div>
            <h1 style={{color:color}}>컬러: {color}</h1>
             <p>
                 <button onClick={() => onColor('red')}>red</button>
                 <button onClick={() => onColor('tomato')}>tomato</button>
                 <button onClick={() => onColor('skyblue')}>skyblue</button>
                 <button onClick={() => onColor('hotpink')}>hotpink</button>
                 <button onClick={() => onColor('green')}>green</button>
             </p>
        </div>
    );
};

export default ChangeColor;