import React, { useRef, useState } from 'react';

const Test3 = () => {
    // 고유번호 생성
    const no = useRef(1)        // useRef 값 생성도 가능
    const [data, setData] = useState([])
    const names = '홍길동, 유재석, 김석진, 민윤기, 김남준, 정호석, 김태형, 박지민, 전정국'.split(',')

    const onAdd = () => {
        const ran = Math.floor(Math.random() * names.length)

        setData([
            ...data, 
            {
                id: no.current++,
                text: names[ran]
            }
        ])
    }

    return (
        <div>
            <h2>고유번호</h2>
            <button onClick={onAdd}>추가</button>
            <ul>
                {
                    data.map(item => <li key={item.id}>
                        {item.id} / {item.text}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test3;