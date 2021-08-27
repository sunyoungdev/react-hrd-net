import React, { useState } from 'react';

const Test4 = () => {
    const [bgColor, setBgcolor] = useState('pink')

    const onColor = () => {
        // 삼항연산자
        setBgcolor(bgColor === 'pink' ? 'tomato' : 'pink')
    }

    return (
        <div>
            <p>문제: h2를 클릭시 배경색을 pink tomato toggle</p>
            <h2 onClick={onColor}
                style={{width: 350, padding: 50, border: '1px solid #000', cursor: 'pointer', backgroundColor: bgColor}}>
                배경색 바꾸기 : {bgColor}
            </h2>
        </div>
    );
};

export default Test4;