import React, { useEffect, useState } from 'react';

const Test1Sub = ({onSearch}) => {
    const [text, setText] = useState('')

    const changeInput = (e) => {
        const {value} = e.target
        setText(value)
    }

    // 실시간 검색 처리(text 가 바뀔 때마다 업데이트)
    useEffect(() => {
        onSearch(text)
    },[text])

    const click = () => {
        onSearch(text)
    }

    return (
        <div>
            <input type="text" onChange={changeInput} />
            <button onClick={click}>검색</button>
        </div>
    );
};

export default Test1Sub;