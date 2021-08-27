import React, { useRef } from 'react';

const Test10 = () => {
    const colorRef = useRef(null)
    const onSelect = () => {
        const data = {
            color: colorRef.current.value
        }
        // json 변환
        const json = JSON.stringify(data, null, 5)
        console.log(json)
    }

    return (
        <div>
            {/* 지금은 연습용(실제로는 이렇게 사용 안함) */}
            <h2>컬러 선택</h2>
            <select ref={colorRef}>
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="pink">pink</option>
                <option value="skyblue">skyblue</option>
                <option value="tomato">tomato</option>
            </select>
            <button onClick={onSelect}>선택</button>
        </div>
    );
};

export default Test10;