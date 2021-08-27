import React, { useState } from 'react';
// import default값, { export값 } from 'react';

const Test3 = () => {
    // 이름, 컬러 유동으로 변경
    const [name, setName] = useState('아무개')
    const [color, setColor] = useState('pink')

    const onName1 = () => {
        setName('홍길동')
    }
    const onName2 = () => {
        setName('유재석')
    }
    const onName3 = () => {
        setName('김석진')
    }

    return (
        <div>
            <h3 style={{color: color}}>
                이름: {name} / 색: {color} 
            </h3>
            <p>
                <button onClick={onName1}>홍길동</button>
                <button onClick={onName2}>유재석</button>
                <button onClick={onName3}>김석진</button>
            </p>
            <p>
                <button onClick={() => setColor('lime')}>lime</button>
                <button onClick={() => setColor('tomato')}>tomato</button>
                <button onClick={() => setColor('skyblue')}>skyblue</button>
            </p>
        </div>
    );
};

export default Test3;

/*
    class
        상태값: 유동으로 값이 변경될 경우 => state 사용
        state = {count: 0} : 선언
        this.setState({count: 10}) : 변경

    function
        const [state, setState] = useState(초기값)
        const [count, setCount] = useState(0)
        count = 0
        setCount(count)
        setCount(10) => count 가 10으로 변경
*/