import React, { useState } from 'react';

const Test2 = () => {
    const [data, setData] = useState([])
    // [{id: 1, text: '문자'}, {id: 2, text: '문자'}]

    // spread 연산자로 데이터 추가
    const onAdd = () => {
        const newData = {id: data.length, text: '전정국' + Math.floor(Math.random() * 10)}
        setData([...data, newData])
    }

    const onAdd3 = () => {
        setData([
            ...data,
            {
                id: data.length,
                text: '김석진' + Math.floor(Math.random() * 10)
            }
        ])
    }

    // concat 으로 데이터 추가
    const onAdd2 = () => {
        const newData = data.concat({id: data.length, text: '유재석' + Math.floor(Math.random() * 10)})

        setData(newData)
    }

    const onAdd1 = () => {
        setData(data.concat({id: data.length, text: '홍길동' + Math.floor(Math.random() * 10)}))
    }

    return (
        <div>
            <h2>데이터 추가</h2>
            <p><button onClick={onAdd}>추가</button></p>
            <ul>
                {/* 
                    배열의 index값은 화면에 단순 출력할 경우만 사용
                    데이터 관리용으로는 x(삭제 추가할 경우 숫자가 밀림)
                    => 대신 고유 id 값을 사용해야 함
                */}
                {            
                    // data.map((item, index) => <li key={index}>
                    //     {item.id} / {item.text}
                    // </li>)

                    data.map((item) => <li key={item.id}>
                        {item.id} / {item.text}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test2;