import React, { useEffect, useState } from 'react';

const Test5 = () => {
    const [count, setCount] = useState(1)

    useEffect(() => {
        console.log('setInterval')
        const id = setInterval(() => {
            // 이전 값 가져와서 증감
            // setCount(이전값 => 이전값 + 1)
            setCount(count => count + 1)
        }, 1000)
        return () => {
            console.log('clearInterval')
            clearInterval(id)
        }
    }, [])

    /*
    useEffect(() => {
        console.log('useEffect')
        const id = setInterval(() => {
            setCount(count + 1)
        }, 1000)
        return () => {
            console.log('clearInterval')
            clearInterval(id)
        }
    })*/

    return (
        <div style={{margin:30}}>
            <h1>숫자 : {count}</h1>
        </div>
    );
};

export default Test5;