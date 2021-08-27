import React, { useCallback, useMemo, useState } from 'react';

const Test1 = () => {
    const [text, setText] = useState('')
    const [data, setData] = useState([])

    // data, text 업뎃될 때만 함수를 다시 그려라
    const onAdd = useCallback(() => {
        setData([...data, text])
    }, [data, text])

    // useMemo 예시
    const textSize = useMemo(() => {
        return text.length
    }, [text])
    
    return (
        <div>
            <input type="text" value={text} onChange={e => setText(e.target.value)} />
            <button onClick={onAdd}>추가</button>
            <h3>{text}</h3>
            <h3>{text.length}</h3>
            <h3>글자개수 : {textSize}</h3>
            <hr />
            <ul>
                {
                    data.map((item, index) => <li key={index}>{item}</li>)
                }
            </ul>
        </div>
    );
};

export default Test1;