import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Test1 = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        getData1()
    }, [])  // DOM이 완성됐을 때 한번만 실행

    // axios 동기형
    const getData1 = async() => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
        setData(res.data)
    }

    // axios
    const getData3 = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => {              // 성공했을때 받을 변수
                setData(res.data)   // 받을변수.옵션
                console.log(res)    // useEffect로 호출해줘야 로그 나옴
                
            })
    }

    // fetch 동기형
    const getData4 = async() => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos')
        const res1 = await res.json()
        setData(res1)
    }

    // fetch
    const getData2 = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')     // url 주소
        .then(res => res.json())    // json 에 해당하는 형식을 받기
        .then(res => setData(res))
    }

    return (
        <div>
            <h2>데이터 불러오기</h2>
            {
                data.map(item => <p key={item.id}>
                    {item.id} / {item.title}
                </p>)
            }
        </div>
    );
};

export default Test1;