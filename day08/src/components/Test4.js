import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Test4 = () => {
    const [post , setPost] = useState({})    // 값 1개만 가져올 거라 {}
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [id, setId] = useState(1)
    const [num, setNum] = useState(1)

    useEffect(() => {
        getData()
    }, [num])        // id가 바뀔때마다 호출

    const click = () => {
        setNum(id)
    }

    const getData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
             .then(res => {
                setPost(res.data)
                setLoading(false)
                setError('')
             })
             .catch(error => {
                setPost({})
                setLoading(true)
                setError('주소를 찾을 수 없습니다.')
             })
    }

    return (
        <div>
            <h2>해당번호의 타이틀만 출력하기</h2>
            <input type="text" onChange={e => setId(e.target.value)} />
            <button onClick={click}>검색</button>
            {
                post && loading ? <h2>로딩중</h2>
                                : <h2>{post.title}</h2>
            }
            <p>
                {error ? error : null}
            </p>
        </div>
    );
};

export default Test4;