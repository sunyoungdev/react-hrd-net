import React, { useState } from 'react';

const Test8 = () => {
    // input 2개 값 담아줄 2개의 state
    const [userid, setUserid] = useState('')
    const [userpw, setUserpw] = useState('')

    const change1 = (e) => {
        // setUserid(e.target.value)

        // 비구조할당
        const {value} = e.target
        setUserid(value)
    }
    
    const change2 = (e) => {
        // setUserpw(e.target.value)

        const {value} = e.target
        setUserpw(value)
    }

    const onReset = () => {
        setUserid('')
        setUserpw('')
    }

    return (
        <div>
            <input type="text" onChange={change1} value={userid}/>
            <input type="text" onChange={change2} value={userpw}/>
            <button onClick={onReset}>초기화</button>
            <h2>id: {userid}/ pw: {userpw}</h2>
        </div>
    );
};

export default Test8;