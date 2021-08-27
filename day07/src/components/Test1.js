import React, { useState } from 'react';
import Test1Sub from './Test1Sub';

const list = [
    {id: 1, name: '김남준'},
    {id: 2, name: '김석진'},
    {id: 3, name: '민윤기'},
    {id: 4, name: '정호석'},
    {id: 5, name: '박지민'},
    {id: 6, name: '김태형'},
    {id: 7, name: '전정국'},
    {id: 8, name: 'army'},
    {id: 9, name: 'Army'},
    {id: 10, name: 'RM'},
    {id: 11, name: 'Sun'}
]

const Test1 = () => {
    const [data, setData] = useState(list)

    const onSearch = (text) => {
        // setData(list.filter(item => item.name.indexOf(text) !== -1))
        // 정규표현식
        // const newData = new RegExp(글자, 옵션)
        const newData = list.filter(item => {
            const re = new RegExp(text, 'ig')
            return item.name.match(re)
        })
        setData(newData)
    }

    return (
        <div>
            <Test1Sub onSearch={onSearch} />
            <ul>
                {
                    data.map(item => <li key={item.id}>
                        {item.id} / {item.name}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test1;