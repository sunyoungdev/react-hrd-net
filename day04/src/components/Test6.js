import React, { useRef, useState } from 'react';
import Test6Sub from './Test6Sub';

const Test6 = () => {
    // 6번부터 추가할 것
    const no = useRef(6)

    const [data, setData] = useState([
        {id: 1, name: '유재석'},
        {id: 2, name: '김석진'},
        {id: 3, name: '민윤기'},
        {id: 4, name: '김남준'},
        {id: 5, name: '정호석'},
    ])

    // 데이터 삭제
    const onDel = (num) => {
        setData(data.filter(item => item.id !== num))
    }

    // 데이터 추가
    const onAdd = (name) => {
        setData([
            ...data,
            {
                id: no.current++,
                name
            }
        ])
    }

    return (
        <div>
            {
                data.map(item => <p key={item.id}>
                    {item.id} / {item.name}
                </p>)
            } 
            <hr />
            <Test6Sub onDel={onDel} onAdd={onAdd} />       
        </div>
    );
};

export default Test6;