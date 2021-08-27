import React, { useEffect, useState } from 'react';

const Test7 = () => {
    const [count, setCount] = useState(0)
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        let id = null

        if(isActive) {
            id = setInterval(() => {
                setCount(count => count + 1)
            }, 1000)
        } else if(!isActive && count !== 0){
            clearInterval(id)
        }

        return () => {
            clearInterval(id)
        }
    }, [isActive]) 

    const onToggle = () => {
        setIsActive(!isActive)
    }
    const onReset = () => {
        setCount(0)
        setIsActive(false)
    }

    return (
        <div style={{margin:30}}>
            <h1>카운트: {count}</h1>
            <button onClick={onToggle}>
                {isActive ? '중지' : '시작'}
            </button>
            <button onClick={onReset}>초기화</button>
        </div>
    );
};

export default Test7;