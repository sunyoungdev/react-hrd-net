import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Test2 = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
             .then(res => {         // 응답성공
                 setPosts(res.data)
                 setLoading(false)
                 setError('')
             })
             .catch(error => {      // 응답실패
                 setPosts([])
                 setLoading(true)
                 setError('데이터를 찾을 수 없습니다.')
             })
    }

    return (
        <div>
            {
                posts && loading ? <h2>로딩중</h2> : posts.map(post => <p key={post.id}>
                    {post.title}
                </p>)
            }
            <p>
                {error ? error : null}
            </p>
        </div>
    );
};

export default Test2;