import React, { useEffect, useState } from 'react';

const Test9 = () => {
    const [data, setData] = useState([
        {no: 1, name: '김남준'},
        {no: 2, name: '김석진'},
        {no: 3, name: '민윤기'},
        {no: 4, name: '정호석'},
        {no: 5, name: '박지민'},
        {no: 6, name: '김태형'},
        {no: 7, name: '전정국'},
        {no: 8, name: 'army'},
        {no: 9, name: 'Army'},
        {no: 10, name: 'RM'}
    ])
    const [fdata, setFdata] = useState([])

    const [text, setText] = useState('')
    const onText = (e) => {
        const {value} = e.target
        setText(value)
    }

    // text 가 바뀔 때마다 업데이트
    useEffect(() => {
        setFdata(data.filter(item => item.name.indexOf(text) !== -1))
    }, [text])

    return (
        <div>
            <input type="text" onChange={onText} />
            <ul>
                {fdata.map(item => <li key={item.no}>
                    {item.no} / {item.name}
                </li>)}
            </ul>
        </div>
    );
};

export default Test9;

/*
indexOf() 메서드는 호출한 String 객체에서 주어진 값과 일치하는 첫 번째 인덱스를 반환합니다. 일치하는 값이 없으면 -1을 반환합니다. 
*/