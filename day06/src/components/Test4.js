import React, { useEffect, useState } from 'react';

const MouseMove = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const move = (e) => {
        setX(e.clientX)
        setY(e.clientY)
    }

    // 화면에 그려진 후 한번만
    useEffect(() => {
        console.log('useEffect')
        window.addEventListener('mousemove', move)
        // 뒷정리 (뒤에서 계속 돌지 않게 지워줌)
        return () => {
            window.removeEventListener('mousemove', move)
        }
    }, [])


    return (
        <div style={{margin:20}}>
            <h2>마우스 좌표</h2>
            <div style={{border:'1px solid #000', width:400, height:100, fontSize:50, lineHeight:2, textAlign:'center'}}>
                X: {x} / Y: {y}
            </div>
        </div>
    );
};

const Test4 = () => {
    const [isActive, setIsActive] = useState(false)
    const onToggle = () => {
        setIsActive(!isActive)
    }

    return (
        <div style={{margin:20}}>
            <button onClick={onToggle}>
                {isActive ? '숨기기' : '보이기'}
            </button>
            {isActive && <MouseMove />}            
        </div>
    );
};


export default Test4;